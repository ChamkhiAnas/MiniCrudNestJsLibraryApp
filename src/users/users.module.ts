import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ValidateUserMiddleware } from './middleware/validate-user.middleware';

import { MockUserMiddleware } from './middleware/mock-user.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule  implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(ValidateUserMiddleware,MockUserMiddleware)
    .forRoutes({
      path:"users/:username",
      method:RequestMethod.GET
    })
  }

}
