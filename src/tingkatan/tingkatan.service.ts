import { Injectable } from '@nestjs/common';
import { CreateTingkatanDto } from './dto/create-tingkatan.dto';
import { UpdateTingkatanDto } from './dto/update-tingkatan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tingkatan } from './entities/tingkatan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TingkatanService {
  constructor(
    @InjectRepository(Tingkatan)
    private readonly tingkatanRepository: Repository<Tingkatan>,
  ) {}
  async create(createTingkatanDto: CreateTingkatanDto) {
    return await this.tingkatanRepository.save(createTingkatanDto);
  }

  async findAll() {
    return await this.tingkatanRepository.find();
  }

  async findOne(idTingkatan: string) {
    return await this.tingkatanRepository.findOne({
      where: { idTingkatan: idTingkatan },
    });
  }

  async update(idTingkatan: string, updateTingkatanDto: UpdateTingkatanDto) {
    const tingkatan = await this.tingkatanRepository.findOne({
      where: { idTingkatan: idTingkatan },
    });

    return await this.tingkatanRepository.update(tingkatan, updateTingkatanDto);
  }

  async remove(idTingkatan: string) {
    return await this.tingkatanRepository.delete(idTingkatan);
  }
}
