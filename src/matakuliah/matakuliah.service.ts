import { Injectable } from '@nestjs/common';
import { CreateMatakuliahDto } from './dto/create-matakuliah.dto';
import { UpdateMatakuliahDto } from './dto/update-matakuliah.dto';

@Injectable()
export class MatakuliahService {
  create(createMatakuliahDto: CreateMatakuliahDto) {
    return 'This action adds a new matakuliah';
  }

  findAll() {
    return `This action returns all matakuliah`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matakuliah`;
  }

  update(id: number, updateMatakuliahDto: UpdateMatakuliahDto) {
    return `This action updates a #${id} matakuliah`;
  }

  remove(id: number) {
    return `This action removes a #${id} matakuliah`;
  }
}
