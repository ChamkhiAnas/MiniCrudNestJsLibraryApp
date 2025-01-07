import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity/genre.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Genre])],
  providers: [GenresService],
  controllers: [GenresController]
})
export class GenresModule {}
