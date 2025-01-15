import { Exclude, Expose } from "class-transformer";

export interface User{
username:string;
password:string;
role:string;
}

export class SerializedUser{
    username:string;
    @Expose()
    password:string
}