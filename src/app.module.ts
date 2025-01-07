import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'127.0.0.1',
    port :5433,
    username:'postgres',
    password:'123456',
    database:'librarydb',
    autoLoadEntities:true,
    synchronize:true,
  }), AuthorsModule, BooksModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
