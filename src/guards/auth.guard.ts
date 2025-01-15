import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            console.error('Authorization header not found');
            return false; // Deny access if the header is missing
        }

        const [type, token] = authHeader.split(' ')

        if(token=="GHHYWPzgdOriPHdjPtgDkz68HKOcKd2YGPT1B0EdE0HV7WVhXLqLTGSQDSxR2zI3G65CZvM9Gq0yJ4kLbFYAhqhfqWMAV7i1UOVKiUA9I9yYHMM1UoWvPXoBB7"){
            return true
        }

        return false;
    }
}