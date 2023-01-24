import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';
import { User as UserEntity } from 'src/users/models/User.entity';
import { plainToClass } from 'class-transformer';
import { CreateUserDTO } from 'src/users/dto/CreateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/utils/bcrypt';

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

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

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

  createUser(user: CreateUserDTO) {
    const password = encodePassword(user.password);
    const newUser = this.userRepository.create({
      ...user,
      password,
    });
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }
}
