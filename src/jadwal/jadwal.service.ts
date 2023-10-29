import { Injectable } from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { UpdateJadwalDto } from './dto/update-jadwal.dto';
import { In, Repository } from 'typeorm';
import { Jadwal } from './entities/jadwal.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JadwalService {
  constructor(
    @InjectRepository(Jadwal)
    private readonly jadwalRepository: Repository<Jadwal>,
  ) {}
  async create(createJadwalDto: CreateJadwalDto) {
    return 'This action adds a new jadwal';
  }

  async findAll() {
    return await this.jadwalRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} jadwal`;
  }

  async update(id: number, updateJadwalDto: UpdateJadwalDto) {
    return `This action updates a #${id} jadwal`;
  }

  async remove(id: number) {
    return `This action removes a #${id} jadwal`;
  }
}
