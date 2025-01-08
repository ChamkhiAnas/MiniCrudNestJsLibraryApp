import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity/book.entity';
import { Author } from 'src/authors/entities/author.entity/author.entity';
import { Genre } from 'src/genres/entities/genre.entity/genre.entity';

@Module({

  imports:[TypeOrmModule.forFeature([Book,Author,Genre])],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
