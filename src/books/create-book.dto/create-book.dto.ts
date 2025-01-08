import { Type } from "class-transformer";
import { IsArray, IsDate, IsNumber, IsString } from "class-validator";

export class CreateBookDto {


    @IsString()
    title:string;

    @IsString()
    summary:string;

    @IsDate()
    @Type(() => Date)
    publishedDate:Date;

    @IsNumber()
    authorId:number;

    @IsArray()
    genreIds:Array<number>;


}
