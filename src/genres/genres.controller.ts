import { Controller,Get } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './entities/genre.entity/genre.entity';

@Controller('genres')
export class GenresController {

    constructor(
        private readonly genresService:GenresService
    ){}


    @Get()
    getGenres(){
        return "genres controller works well"

    }

}
