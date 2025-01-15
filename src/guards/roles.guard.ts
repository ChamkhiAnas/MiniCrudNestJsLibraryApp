import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { Observable } from "rxjs";
import { Roles } from "src/decorators/roles.decorator";

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(private reflector:Reflector){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        context.switchToHttp().getRequest<Request>()
        // const request=context.switchToHttp().getRequest()
        const requiredRoles=this.reflector.get(Roles,context.getHandler());
        console.log('Inside ROle guard',requiredRoles)

        return true
    }
}