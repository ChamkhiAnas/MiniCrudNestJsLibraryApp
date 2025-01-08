import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity/book.entity';
import { Equal, In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity/author.entity';
import { Genre } from 'src/genres/entities/genre.entity/genre.entity';


@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private readonly bookRepository : Repository<Book>,
        @InjectRepository(Author) private readonly authorRepository : Repository<Author>,
        @InjectRepository(Genre) private readonly genreRepository : Repository<Genre>


     ){}

     findBooks(){
        return this.bookRepository.find(
            {
                relations:['genres','author']
            }
        )
     }

     async findBook(id){
        const book=await this.bookRepository.findOne(

            {
                where:{id},
                relations:['genres','author']
            }
        )

        if(!book){
            throw new HttpException(`Book with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }

        return book

     }

     async deleteBook(id){
        const book=await this.bookRepository.findOne(

            {
                where:{id},
                relations:['genres','author']
            }
        )

        if(!book){
            throw new HttpException(`Book with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }

        return this.bookRepository.remove(book)

     }



     async updateBook(id,updateBookObject){
        const book=await this.bookRepository.preload({
            id:id,
            ...updateBookObject
        })

        if(!book){
            throw new HttpException(`this book with the id ${id} not existing`,HttpStatus.NOT_FOUND)
        }
        

        if (updateBookObject.genreIds) {
            const genres = await this.genreRepository.findBy({
            id: In(updateBookObject.genreIds),
            });

            if (genres.length !== updateBookObject.genreIds.length) {
            throw new HttpException('One or more genres not found',HttpStatus.NOT_FOUND);
            }

            book.genres = genres;
        }


        if (updateBookObject.authorId) {
            const author = await this.authorRepository.findOne({
            where: {id:updateBookObject.authorId},
            });

            if (!author) {
            throw new HttpException(`Author with the id ${updateBookObject.authorId}`,HttpStatus.NOT_FOUND);
            }

            book.author=author

        }

        return this.bookRepository.save(book)

     }


     async createBook(bookObject){

        const author=await this.authorRepository.findOne({
            where:{id:bookObject.authorId}
        })

        if(!author){
            throw new HttpException(`Author with the id ${bookObject.authorId} not found`, HttpStatus.NOT_FOUND)
        }

        const genres = await Promise.all(
            bookObject.genreIds.map(async (item)=>{
            const result = await (this.genreRepository.findOne({where:{id:item}}))
            if(!result){throw new HttpException(`Genre with the id ${item} not found`, HttpStatus.NOT_FOUND)}
            return result;
            })
        )

        const book = this.bookRepository.create({
            title: bookObject.title,
            summary: bookObject.summary,
            publishedDate: bookObject.publishedDate,
            author: author, // Assign the author entity
            genres: genres, // Assign the genres array
        });

        return this.bookRepository.save(book)
     }

}
