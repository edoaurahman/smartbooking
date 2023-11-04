import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruang } from 'src/ruang/entities/ruang.entity';
import { CreateRuangDto } from 'src/ruang/dto/create-ruang.dto';
import { UpdateRuangDto } from 'src/ruang/dto/update-ruang.dto';

@Injectable()
export class WebSocketService {
  private readonly users: Map<string, string> = new Map();
  constructor(
    @InjectRepository(Ruang)
    private readonly ruangRepository: Repository<Ruang>,
  ) {}

  // get clientID by username
  getClientId(username: string) {
    return [...this.users.entries()].find(([, user]) => user === username)[0];
  }

  leave(id: string) {
    this.users.delete(id);
    console.log(this.users);
  }

  async findOne(idRuang: string) {
    return await this.ruangRepository.findOneBy({ idRuang });
  }

  async seeRoom(namaRuang: string): Promise<Ruang> {
    const room = await this.ruangRepository.findOneBy({ namaRuang });
    if (!room) {
      throw new HttpException('Room not found', 404);
    }

    room.statusRuang = 'onprocess';

    return this.ruangRepository.save(room);
  }

  async cancelProcess(namaRuang: string) {
    const room = await this.ruangRepository.findOneBy({ namaRuang });
    if (!room) {
      throw new HttpException('Room not found', 404);
    }

    room.statusRuang = 'available';

    return this.ruangRepository.save(room);
  }

  join(username: string, clientId: string) {
    this.users.set(clientId, username);
    console.log(this.users);
  }

  async findAll(): Promise<Ruang[]> {
    const rooms = await this.ruangRepository.find();
    return rooms;
  }

  createRoom(roomDto: CreateRuangDto) {
    const room = this.ruangRepository.create(roomDto);
    return this.ruangRepository.save(room);
  }

  async updateRoom(idRuang: string, updateRoom: UpdateRuangDto) {
    const room = await this.ruangRepository.findOneBy({ idRuang });
    if (!room) {
      throw new HttpException('Room not found', 404);
    }
    return this.ruangRepository.save({ ...room, ...updateRoom });
  }
}
