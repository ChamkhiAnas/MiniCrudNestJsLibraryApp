import { PartialType } from "@nestjs/mapped-types";
import { CreateGenreDto } from "../create-genre.dto/create-genre.dto";

export class UpdateGenreDto extends PartialType(CreateGenreDto) {

}
