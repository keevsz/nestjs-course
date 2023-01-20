import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'kevz',
      password: 'asdsad',
    },
    {
      id: 2,
      username: 'chufo',
      password: 'asdsad',
    },
    {
      id: 3,
      username: 'puppy',
      password: 'asdsad',
    },
    {
      id: 4,
      username: 'asd',
      password: 'asdsad',
    },
  ];

  getUsers() {
    return this.users.map((user) => {
      return new SerializedUser(user);
      //   return plainToClass(SerializedUser, user); another way
    });
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    console.log('asd');
    console.log(id);
    return this.users.find((user) => user.id === id);
  }
}
