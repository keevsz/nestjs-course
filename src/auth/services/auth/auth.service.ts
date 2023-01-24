import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UsersService) private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    console.log('Auth service');
    const userDB = await this.userService.findUserByUsername(username);
    if (userDB) {
      const hashedPassword = comparePassword(password, userDB.password);
      if (hashedPassword) {
        console.log('Login Success!');
        return userDB;
      } else {
        console.log('Invalid credentials');
        return null;
      }
    }
    return null;
  }
}
