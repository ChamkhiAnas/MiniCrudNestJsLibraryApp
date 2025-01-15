import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersInterceptor } from './interceptors/user.interceptor';
import { UserErrorInterceptor } from './interceptors/error.interceptor';
import { LogginInterceptor } from './interceptors/logging.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { RoleGuard } from 'src/guards/roles.guard';

@Controller('users')

export class UsersController {
  constructor(private readonly usersService: UsersService) {}



  @Post()
  @UseInterceptors(UserErrorInterceptor)
  create(@Body() createUserDto: CreateUserDto) {
    // return this.usersService.create(createUserDto);
    // throw new HttpException('Bad request',HttpStatus.BAD_REQUEST)
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.usersService.findAll()
  }
  @UseGuards(RoleGuard)
  @Get(':username')
  @Roles(['user'])
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
