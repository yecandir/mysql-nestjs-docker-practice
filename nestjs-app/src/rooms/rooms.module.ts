import { Module } from '@nestjs/common';
import { RoomsService } from './services/rooms/rooms.service';
import { RoomsController } from './controllers/rooms/rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/typeorm/entities/rooms';
import { Message } from 'src/typeorm/entities/messages';

@Module({
  imports: [TypeOrmModule.forFeature([Room, Message])],
  providers: [RoomsService],
  controllers: [RoomsController],
})
export class RoomsModule {}
