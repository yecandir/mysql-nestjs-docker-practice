import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
