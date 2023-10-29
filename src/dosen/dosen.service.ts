import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { UpdateDosenDto } from './dto/update-dosen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dosen } from './entities/dosen.entity';
import { Repository } from 'typeorm';
import { AuthDosenDto } from './dto/auth-dosen.dto';

@Injectable()
export class DosenService {
  constructor(
    @InjectRepository(Dosen)
    private readonly dosenRepository: Repository<Dosen>,
  ) {}

  async auth(authDosenDto: AuthDosenDto) {
    const mahasiswa = await this.dosenRepository.findOne({
      where: {
        nip: authDosenDto.nip,
        password: authDosenDto.password,
      },
    });

    if (!mahasiswa) {
      throw new NotFoundException('Nip atau password salah');
    }

    return mahasiswa;
  }

  async create(createDosenDto: CreateDosenDto) {
    return await this.dosenRepository.save(createDosenDto);
  }

  async findAll() {
    return await this.dosenRepository.find();
  }

  async findOne(nip: string) {
    return await this.dosenRepository.findOne({ where: { nip: nip } });
  }

  async update(nip: string, updateDosenDto: UpdateDosenDto) {
    const dosen = await this.dosenRepository.findOne({ where: { nip: nip } });
    return await this.dosenRepository.update(dosen, updateDosenDto);
  }

  async remove(nip: string) {
    return await this.dosenRepository.delete(nip);
  }
}
