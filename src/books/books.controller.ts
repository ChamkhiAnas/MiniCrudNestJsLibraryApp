import { Body, Controller,Delete,Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity/book.entity';
import { CreateBookDto } from './create-book.dto/create-book.dto';
import { UpdateBookDto } from './update-book.dto/update-book.dto';


@Controller('books')
export class BooksController {

    constructor(
        private readonly booksService:BooksService,
    ){}


    @Get()
    getBooks(){
        return this.booksService.findBooks()

    }

    @Get(':id')
    getBook(@Param('id') id:number){
        return this.booksService.findBook(id)
    }

    @Put(':id')
    updateBook(@Param('id') id:number, @Body() updateBookObject:UpdateBookDto){

        return this.booksService.updateBook(id,updateBookObject)

    }


    @Post()
    createBooks(@Body() bookObject:CreateBookDto){
        return this.booksService.createBook(bookObject)
    }

    @Delete(':id')
    deleteBook(@Param('id') id:number){
        return this.booksService.deleteBook(id)


    }    

}
