import { Injectable } from '@nestjs/common';
import { CreateTingkatanDto } from './dto/create-tingkatan.dto';
import { UpdateTingkatanDto } from './dto/update-tingkatan.dto';

@Injectable()
export class TingkatanService {
  create(createTingkatanDto: CreateTingkatanDto) {
    return 'This action adds a new tingkatan';
  }

  findAll() {
    return `This action returns all tingkatan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tingkatan`;
  }

  update(id: number, updateTingkatanDto: UpdateTingkatanDto) {
    return `This action updates a #${id} tingkatan`;
  }

  remove(id: number) {
    return `This action removes a #${id} tingkatan`;
  }
}
