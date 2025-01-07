import { Column, PrimaryGeneratedColumn,ManyToMany,JoinTable,Entity} from "typeorm";
import { Book } from "src/books/entities/book.entity/book.entity";

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({type:'text'})
    description:string

    @ManyToMany(()=>Book,(Book)=>Book.genres)
    books:Book[]

}
