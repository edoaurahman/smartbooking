import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdiService } from './prodi.service';
import { CreateProdiDto } from './dto/create-prodi.dto';
import { UpdateProdiDto } from './dto/update-prodi.dto';

@Controller('prodi')
export class ProdiController {
  constructor(private readonly prodiService: ProdiService) {}

  @Post()
  create(@Body() createProdiDto: CreateProdiDto) {
    return this.prodiService.create(createProdiDto);
  }

  @Get()
  findAll() {
    return this.prodiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdiDto: UpdateProdiDto) {
    return this.prodiService.update(+id, updateProdiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodiService.remove(+id);
  }
}
