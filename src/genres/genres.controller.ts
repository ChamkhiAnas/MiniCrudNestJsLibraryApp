import { Body, Controller,Delete,Get, Param, Post, Put } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './create-genre.dto/create-genre.dto';
import { UpdateGenreDto } from './update-genre.dto/update-genre.dto';

@Controller('genres')
export class GenresController {

    constructor(
        private readonly genresService:GenresService
    ){}
    

    @Get()
    getGenres(){
        return this.genresService.find()
    }

    @Get(':id')
    getGenre(@Param('id')id:number){
        return this.genresService.findOne(id)
    }

    @Put(':id')
    updateGenre(@Body() updateObj:UpdateGenreDto,@Param('id') id:number){
        return this.genresService.update(id,updateObj)

    }

    @Post()
    createGenre(@Body() genreObj:CreateGenreDto){
        return this.genresService.create(genreObj)
    }

    @Delete(':id')
    deleteGenre(@Param('id') id:number){
        return this.genresService.delete(id)

    }

}
