import { Inject, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {
    super({ usernameField: 'email' }); // username instead of email
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
