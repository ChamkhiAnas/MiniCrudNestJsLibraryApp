import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";



@Injectable()
export class ValidateUserMiddleware implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){

        console.log(`Hello world im inside ValidateCustomerMiddleware ! ${(req.url)}`);
        next();


    }
}