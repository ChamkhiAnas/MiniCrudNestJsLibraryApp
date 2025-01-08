import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity/author.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author) private readonly authorRepository : Repository<Author>
     ){}

    
     getAuthors(){
        return this.authorRepository.find()
     }

     async getAuthor(id){
        const author= await this.authorRepository.findOne({
            where:{id}
        })

        if(!author){
            throw new HttpException(`Author with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }

        return author

     }

    createAuthor(authorObj){
        return this.authorRepository.save(authorObj)
    }

    async updateAuthor(id:number,updateObj){

        const author=await this.authorRepository.preload({
            id:id,
            ...updateObj,
        })

    
        if(!author){
            throw new HttpException(`Author with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }

        return this.authorRepository.save(author)

    }

    async deleteAuthor(id:number){

        const author=await this.authorRepository.findOne({
            where:{id}
        })

        if(!author){
            // catching the error if no author is found 
            throw new HttpException(`Author with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }

        return this.authorRepository.remove(author)
        
    }
}
