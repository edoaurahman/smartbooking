import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthMahasiswaDto } from './dto/auth-mahasiswa.dto';

@Injectable()
export class MahasiswaService {
  constructor(
    @InjectRepository(Mahasiswa)
    private mahasiswaRepository: Repository<Mahasiswa>,
  ) {}

  async auth(authMahasiswaDto: AuthMahasiswaDto) {
    const mahasiswa = await this.mahasiswaRepository.findOne({
      where: {
        nim: authMahasiswaDto.nim,
        password: authMahasiswaDto.password,
      },
    });

    if (!mahasiswa) {
      throw new NotFoundException('Nim atau password salah');
    }

    return mahasiswa;
  }

  async create(createMahasiswaDto: CreateMahasiswaDto) {
    const mahasiswa = this.mahasiswaRepository.create(createMahasiswaDto);

    return await this.mahasiswaRepository.save(mahasiswa);
  }

  async findAll(): Promise<Mahasiswa[]> {
    const mahasiswa = await this.mahasiswaRepository.find();
    return mahasiswa;
  }

  async findOne(nim: string) {
    return await this.mahasiswaRepository.findOne({ where: { nim: nim } });
  }

  async update(nim: string, updateMahasiswaDto: UpdateMahasiswaDto) {
    const mahasiswa = await this.mahasiswaRepository.findOne({
      where: { nim: nim },
    });
    return this.mahasiswaRepository.update(mahasiswa, updateMahasiswaDto);
  }

  async remove(nim: string) {
    const mahasiswa = await this.mahasiswaRepository.findOne({
      where: { nim: nim },
    });
    return this.mahasiswaRepository.remove(mahasiswa);
  }
}
