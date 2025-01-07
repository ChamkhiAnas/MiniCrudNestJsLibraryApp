import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './create-author.dto/create-author.dto';



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

}
