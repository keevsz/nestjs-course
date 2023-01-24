import {
  Controller,
  Session,
  Get,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log('Auth controller');
    return null;
  }

  @Get()
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
  }
}
