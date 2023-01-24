import { Controller, Session, Get, Req, Post, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {
    return 'logIn';
  }

  @Get()
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
  }

  @UseGuards(AuthenticatedGuard) //verify user session
  @Get('status')
  async getAuthStatus(@Req() req: Request) {
    return req.user;
  }
}
