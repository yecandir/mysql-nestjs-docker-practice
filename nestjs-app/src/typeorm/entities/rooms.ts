import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './messages';

@Entity({ name: 'rooms' })
export class Room {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @OneToMany(() => Message, (message) => message.room)
  messages?: Message[];
}
