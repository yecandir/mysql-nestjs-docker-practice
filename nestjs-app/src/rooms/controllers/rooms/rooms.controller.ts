import { Controller, Get } from '@nestjs/common';
import { RoomsService } from 'src/rooms/services/rooms/rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  getLatestMessages() {
    return this.roomsService.getLatestMessages();
  }
}
