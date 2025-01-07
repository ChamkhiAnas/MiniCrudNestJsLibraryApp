import { Controller,Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity/book.entity';


@Controller('books')
export class BooksController {

    constructor(
        private readonly boksService:BooksService
    ){}



    @Get()
    getBooks(){
        return "books controller works well"

    }

}
