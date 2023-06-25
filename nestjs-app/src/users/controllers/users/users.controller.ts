import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.findUsers();
  }

  @Get('create')
  createUser(@Query() query: any) {
    return this.usersService.createUser({
      fullname: query.name,
      photo: 'https://www.google.com',
      isDeleted: false,
    });
  }
}
