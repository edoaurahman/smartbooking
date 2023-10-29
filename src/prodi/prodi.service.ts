import { Injectable } from '@nestjs/common';
import { CreateProdiDto } from './dto/create-prodi.dto';
import { UpdateProdiDto } from './dto/update-prodi.dto';
import { In, Repository } from 'typeorm';
import { Prodi } from './entities/prodi.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdiService {
  constructor(
    @InjectRepository(Prodi)
    private prodiRepository: Repository<Prodi>,
  ) {}
  async create(createProdiDto: CreateProdiDto) {
    return await this.prodiRepository.save(createProdiDto);
  }

  async findAll() {
    return await this.prodiRepository.find();
  }

  async findOne(idProdi: string) {
    return await this.prodiRepository.findOne({ where: { idProdi: idProdi } });
  }

  async update(idProdi: string, updateProdiDto: UpdateProdiDto) {
    return await this.prodiRepository.update(idProdi, updateProdiDto);
  }

  async remove(idProdi: string) {
    return await this.prodiRepository.delete(idProdi);
  }
}
