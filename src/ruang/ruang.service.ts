import { Injectable } from '@nestjs/common';
import { CreateRuangDto } from './dto/create-ruang.dto';
import { UpdateRuangDto } from './dto/update-ruang.dto';

@Injectable()
export class RuangService {
  create(createRuangDto: CreateRuangDto) {
    return 'This action adds a new ruang';
  }

  findAll() {
    return `This action returns all ruang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruang`;
  }

  update(id: number, updateRuangDto: UpdateRuangDto) {
    return `This action updates a #${id} ruang`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruang`;
  }
}
