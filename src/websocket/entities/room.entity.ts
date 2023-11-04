import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('room')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  room_name: string;

  @Column({ type: 'enum', enum: ['available', 'unavailable', 'onprocess'] })
  status: string;

  @Column({ nullable: true })
  code: string;
}
