import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/typeorm/entities/messages';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  getLatestMessages(): Promise<Message[]> {
    return this.messageRepository.find({
      relations: ['sender', 'room', 'receiver'],
      select: ['id', 'content', 'createdAt', 'sender', 'room', 'receiver'],
      order: {
        createdAt: 'DESC',
      },
      take: 50,
    });
  }

  async getLatestMessage(): Promise<any> {
    const latestMessage = await this.messageRepository.find({
      relations: ['sender', 'room', 'receiver'],
      select: ['id', 'content', 'createdAt', 'sender', 'room', 'receiver'],
      order: {
        createdAt: 'DESC',
      },
      take: 1,
    });

    return responseFormatter(latestMessage[0]);
  }
}

const responseFormatter = (message: Message) => {
  return {
    rooms: [
      {
        id: message.room.id,
        lastMessage: {
          id: message.id,
          content: message.content,
          createdAt: message.createdAt,
          sender: message.sender,
          reciever: message.receiver,
        },
      },
    ],
  };
};
