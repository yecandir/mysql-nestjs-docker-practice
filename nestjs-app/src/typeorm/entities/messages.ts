import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users';
import { Room } from './rooms';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ length: 500 })
  content: string;

  @Column({ type: 'bigint' })
  senderId: number;

  @Column({ type: 'bigint' })
  receiverId: number;

  @Column({ type: 'bigint' })
  roomId: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'senderId', referencedColumnName: 'id' })
  sender: User;

  @OneToOne(() => User)
  @JoinColumn({ name: 'receiverId', referencedColumnName: 'id' })
  receiver: User;

  @ManyToOne(() => Room, (room) => room.messages)
  @JoinColumn({ name: 'roomId', referencedColumnName: 'id' })
  room: Room;

  @Column({ default: false })
  isDeleted: boolean;
}
