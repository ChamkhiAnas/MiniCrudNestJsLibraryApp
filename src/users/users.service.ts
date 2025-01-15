import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SerializedUser, User } from './types/User';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {

  private users:User[]=[
      {
        username: "user1",
        password: "password1",
        role:"admin"
      },
      {
        username: "user2",
        password: "password2",
        role:"user"

      },
      {
        username: "user3",
        password: "password3",
        role:"user"

      },
      {
        username: "user4",
        password: "password4",
        role:"user"

      },
      {
        username: "user5",
        password: "password5",
        role:"admin"

      }
    
  ]

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users.map((user)=>plainToClass(SerializedUser,user))

  }

  findOne(username: string) {
    const user = this.users.find((item)=>item.username==username)
    return plainToClass(SerializedUser,user)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
