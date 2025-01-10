import { HttpException, HttpStatus, Injectable,NestMiddleware } from '@nestjs/common';
import { Genre } from './entities/genre.entity/genre.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Request,Response,NextFunction, response } from 'express';


@Injectable()
export class GenresService implements NestMiddleware {

    

    constructor(
        @InjectRepository(Genre) private readonly genreRepository : Repository<Genre>
     ){}



     use(req: Request, res: Response, next: NextFunction) {
        console.log(`************************ Request. middleware is handling the request ${req}..`);
        console.log(`************************ Response of the middleware ${response}..`);
        next();
      }


     find(){
        return this.genreRepository.find()
     }

     async findOne(id){
        
        const genre=await this.genreRepository.findOne({
            where:{id}
        })

        if(!genre){
            throw new HttpException(`Genre with the id ${id} not found`,HttpStatus.NOT_FOUND)
        }

        return genre;

     }

     async create(genreObj){
         return this.genreRepository.save(genreObj)
     }

     async update(id,updateObj){
        const genre= await this.genreRepository.preload({
            id:id,
            ...updateObj
        })

        if(!genre){
            throw new HttpException(`genre with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }

        return this.genreRepository.save(genre)

     }

     async delete(id){
        
        const genre= await this.genreRepository.findOne({
            where:{id},
        })

        if(!genre){
            throw new HttpException(`genre with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }

        return this.genreRepository.remove(genre)

     }


}
