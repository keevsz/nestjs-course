import { ExecutionContext, CanActivate, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  //login
  async canActivate(context: ExecutionContext) {
    console.log('canActivate');
    const result = (await super.canActivate(context)) as boolean;
    console.log('result1: ', result);
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    console.log('result2: ', result);
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  //isAuthenticated
  async canActivate(context: ExecutionContext): Promise<any> {
    const req = context.switchToHttp().getRequest<Request>();
    return req.isAuthenticated();
  }
}
