import { Injectable } from '@nestjs/common';
import { CreateRuangDto } from './dto/create-ruang.dto';
import { UpdateRuangDto } from './dto/update-ruang.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruang } from './entities/ruang.entity';

@Injectable()
export class RuangService {
  constructor(
    @InjectRepository(Ruang)
    private ruangRepository: Repository<Ruang>,
  ) {}
  async getBookingStatus(id_lantai: string, hari: string) {
    const jadwal = await this.ruangRepository.query(
      `SELECT * FROM view_getbookingstatus WHERE id_lantai = '${id_lantai}' AND nama_hari = '${hari}'`,
    );
    return jadwal;
  }
  async create(createRuangDto: CreateRuangDto) {
    return await this.ruangRepository.save(createRuangDto);
  }

  async findAll() {
    return await this.ruangRepository.find();
  }

  async findOne(id: string) {
    return await this.ruangRepository.findOne({ where: { idRuang: id } });
  }

  async update(id: string, updateRuangDto: UpdateRuangDto) {
    return `This action updates a #${id} ruang`;
  }

  async remove(id: string) {
    return `This action removes a #${id} ruang`;
  }
}
