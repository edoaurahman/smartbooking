import { Injectable } from '@nestjs/common';
import { CreateHariDto } from './dto/create-hari.dto';
import { UpdateHariDto } from './dto/update-hari.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hari } from './entities/hari.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HariService {
  constructor(
    @InjectRepository(Hari)
    private readonly hariRepository: Repository<Hari>,
  ) {}
  async create(createHariDto: CreateHariDto) {
    return await this.hariRepository.save(createHariDto);
  }

  async findAll() {
    return await this.hariRepository.find();
  }

  async findOne(idHari: string) {
    return await this.hariRepository.findOne({ where: { idHari: idHari } });
  }

  async update(idHari: string, updateHariDto: UpdateHariDto) {
    const hari = await this.hariRepository.findOne({
      where: { idHari: idHari },
    });
    return await this.hariRepository.update(hari, updateHariDto);
  }

  async remove(idHari: string) {
    return await this.hariRepository.delete(idHari);
  }
}
