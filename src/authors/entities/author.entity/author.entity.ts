import { Column, PrimaryGeneratedColumn,OneToMany,JoinColumn,Entity } from "typeorm";
import { Book } from "src/books/entities/book.entity/book.entity";
@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({type:'text'})
    bio:string;

    @Column({type:'date'})
    birthDate:Date

    @OneToMany(() => Book, (Book) => Book.author)
    books: Book[];
}
