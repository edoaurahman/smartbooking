import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomService {
  private readonly users: Map<string, string> = new Map();
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  // get clientID by username
  getClientId(username: string) {
    return [...this.users.entries()].find(([, user]) => user === username)[0];
  }

  leave(id: string) {
    this.users.delete(id);
    console.log(this.users);
  }

  async findOne(id: number) {
    return await this.roomRepository.findOneBy({ id });
  }

  async seeRoom(id: number): Promise<Room> {
    const room = await this.roomRepository.findOneBy({ id });
    if (!room) {
      throw new HttpException('Room not found', 404);
    }

    room.status = 'onprocess';

    return this.roomRepository.save(room);
  }

  async cancelProcess(id: number) {
    const room = await this.roomRepository.findOneBy({ id });
    if (!room) {
      throw new HttpException('Room not found', 404);
    }

    room.status = 'available';

    return this.roomRepository.save(room);
  }

  join(username: string, clientId: string) {
    this.users.set(clientId, username);
    console.log(this.users);
  }

  async findAll(): Promise<Room[]> {
    const rooms = await this.roomRepository.find();
    console.log(rooms);
    return rooms;
  }

  createRoom(roomDto: CreateRoomDto) {
    const room = this.roomRepository.create(roomDto);
    return this.roomRepository.save(room);
  }

  async updateRoom(id: number, updateRoom: UpdateRoomDto) {
    const room = await this.roomRepository.findOneBy({ id });
    if (!room) {
      throw new HttpException('Room not found', 404);
    }
    return this.roomRepository.save({ ...room, ...updateRoom });
  }
}
