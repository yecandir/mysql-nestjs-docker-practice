import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessages(): ResponseMessagesType {
    return {} as ResponseMessagesType;
  }
}

export type ResponseMessagesType = {
  rooms: {
    id: number;
    lastMessage: {
      content: string;
      createdAt: Date;
      sender: UserResponseType;
      reciever: UserResponseType;
    };
  };
};

export type UserResponseType = {
  id: number;
  fullname: string;
  photo: string;
};
