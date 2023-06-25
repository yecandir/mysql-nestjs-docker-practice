import { Controller, Get } from '@nestjs/common';
import { MessagesService } from 'src/messages/services/messages/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  getLatestMessages() {
    return this.messagesService.getLatestMessages();
  }

  @Get('/latestMessage')
  getLastestMessage() {
    return this.messagesService.getLatestMessage();
  }
}
