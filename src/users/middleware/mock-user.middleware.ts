import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MockUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // Simulate a logged-in user
    console.log("middleware mock")
    req.user = { id: 1, roles: ['admin'] }; // Add "user" roles
    next();
  }
}
