import { Injectable } from '@nestjs/common';
import { CreateJamDto } from './dto/create-jam.dto';
import { UpdateJamDto } from './dto/update-jam.dto';

@Injectable()
export class JamService {
  create(createJamDto: CreateJamDto) {
    return 'This action adds a new jam';
  }

  findAll() {
    return `This action returns all jam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jam`;
  }

  update(id: number, updateJamDto: UpdateJamDto) {
    return `This action updates a #${id} jam`;
  }

  remove(id: number) {
    return `This action removes a #${id} jam`;
  }
}
