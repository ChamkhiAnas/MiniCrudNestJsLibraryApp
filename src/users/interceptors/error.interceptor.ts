import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class UserErrorInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            catchError(err=>throwError(()=> new HttpException('Intercepted error',HttpStatus.BAD_GATEWAY)))
        )
    }

}