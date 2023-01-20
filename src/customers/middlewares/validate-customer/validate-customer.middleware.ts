import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('validating...');
    const { validate } = req.headers;
    if (validate === 'yes') {
      console.log('Validated');
      return next();
    }
    throw new HttpException('Invalid validate token', HttpStatus.FORBIDDEN);
  }
}
