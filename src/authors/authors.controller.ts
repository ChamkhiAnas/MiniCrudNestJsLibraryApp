import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './create-author.dto/create-author.dto';
import { UpdateAuthorDto } from './update-author.dto/update-author.dto';



@Controller('authors')
export class AuthorsController {

    constructor(
        private readonly authorsService:AuthorsService
    ){}

    @Get()
    getAuthors(){
        return this.authorsService.getAuthors();
    }

    @Get(':id')
    getAuthor(@Param('id') id:string){
        return  this.authorsService.getAuthor(id);

    }

    @Post()
    createAuthor(@Body() authorObj:CreateAuthorDto){
        return this.authorsService.createAuthor(authorObj);
    }

    @Put(':id')
    updateAuthor(@Param('id') id:number , @Body() updateObj:UpdateAuthorDto){
        return this.authorsService.updateAuthor(id,updateObj)
    }

    @Delete(':id')
    deleteAuthor(@Param('id') id:number){
        return this.authorsService.deleteAuthor(id);
    }

}
