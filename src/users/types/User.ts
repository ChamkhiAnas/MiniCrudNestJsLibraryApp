import { Exclude, Expose } from "class-transformer";

export interface User{
username:string;
password:string;
}

export class SerializedUser{
    username:string;
    @Expose()
    password:string
}