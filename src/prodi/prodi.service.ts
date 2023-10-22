import { Injectable } from '@nestjs/common';
import { CreateProdiDto } from './dto/create-prodi.dto';
import { UpdateProdiDto } from './dto/update-prodi.dto';

@Injectable()
export class ProdiService {
  create(createProdiDto: CreateProdiDto) {
    return 'This action adds a new prodi';
  }

  findAll() {
    return `This action returns all prodi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prodi`;
  }

  update(id: number, updateProdiDto: UpdateProdiDto) {
    return `This action updates a #${id} prodi`;
  }

  remove(id: number) {
    return `This action removes a #${id} prodi`;
  }
}
