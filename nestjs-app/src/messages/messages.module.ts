import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages/messages.controller';
import { MessagesService } from './services/messages/messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/typeorm/entities/messages';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
