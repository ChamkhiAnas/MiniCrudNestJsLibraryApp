import { Author } from "src/authors/entities/author.entity/author.entity";
import { Genre } from "src/genres/entities/genre.entity/genre.entity";
import { Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn,JoinTable,OneToOne ,Entity} from "typeorm";
@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column({type:'text'})
    summary:string;

    @Column({type:'date'})
    publishedDate:Date;


    @ManyToMany(()=>Genre,(Genre)=>Genre.books)
    @JoinTable() 
    genres:Genre[]

    @ManyToOne(() => Author, (Author) => Author.books)
    author: Author;

}
