import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { Observable } from "rxjs";
import { Roles } from "src/decorators/roles.decorator";

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(private reflector:Reflector){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const requiredRoles = this.reflector.get(Roles, context.getHandler());
        

        if (!requiredRoles) {
            return true; // No roles required for this route
        }


        const request=context.switchToHttp().getRequest();
        const user=request.user;


        return requiredRoles.some(role=>user?.roles.includes(role))

    }
}