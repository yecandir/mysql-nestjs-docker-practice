import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/typeorm/entities/rooms';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomsService: Repository<Room>,
  ) {}

  getLatestMessages(): Promise<Room[]> {
    return this.roomsService.find({
      relations: ['messages', 'user'],
      select: ['id', 'createdAt', 'isDeleted'],
      order: {
        messages: {
          createdAt: 'DESC',
        },
      },
      take: 1,
    });
  }
}
