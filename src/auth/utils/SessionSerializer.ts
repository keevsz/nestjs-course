import { PassportSerializer } from '@nestjs/passport';
import { Inject } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/users/models/User.entity';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(UsersService) private readonly userService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    console.log('serializeUser');
    done(null, user);
  }
  async deserializeUser(user: User, done: (err, user: User) => void) {
    console.log('desserializeUser');
    const userDB = await this.userService.findUserById(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
