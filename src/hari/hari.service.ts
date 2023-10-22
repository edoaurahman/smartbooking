import { Injectable } from '@nestjs/common';
import { CreateHariDto } from './dto/create-hari.dto';
import { UpdateHariDto } from './dto/update-hari.dto';

@Injectable()
export class HariService {
  create(createHariDto: CreateHariDto) {
    return 'This action adds a new hari';
  }

  findAll() {
    return `This action returns all hari`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hari`;
  }

  update(id: number, updateHariDto: UpdateHariDto) {
    return `This action updates a #${id} hari`;
  }

  remove(id: number) {
    return `This action removes a #${id} hari`;
  }
}
