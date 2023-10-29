import { Injectable } from '@nestjs/common';
import { CreateKelaDto } from './dto/create-kela.dto';
import { UpdateKelaDto } from './dto/update-kela.dto';
import { Kelas } from './entities/kela.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class KelasService {
  constructor(
    @InjectRepository(Kelas)
    private kelasRepository: Repository<Kelas>,
  ) {}

  async create(createKelaDto: CreateKelaDto) {
    return await this.kelasRepository.save(createKelaDto);
  }

  async findAll() {
    return await this.kelasRepository.find();
  }

  async findOne(idKelas: string) {
    return await this.kelasRepository.findOne({ where: { idKelas: idKelas } });
  }

  async update(idKelas: string, updateKelaDto: UpdateKelaDto) {
    const kelas = await this.kelasRepository.findOne({
      where: { idKelas: idKelas },
    });
    return this.kelasRepository.update(kelas, updateKelaDto);
  }

  async remove(idKelas: string) {
    return await this.kelasRepository.delete({ idKelas: idKelas });
  }
}
