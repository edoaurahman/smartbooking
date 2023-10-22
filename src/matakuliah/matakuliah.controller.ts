import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatakuliahService } from './matakuliah.service';
import { CreateMatakuliahDto } from './dto/create-matakuliah.dto';
import { UpdateMatakuliahDto } from './dto/update-matakuliah.dto';

@Controller('matakuliah')
export class MatakuliahController {
  constructor(private readonly matakuliahService: MatakuliahService) {}

  @Post()
  create(@Body() createMatakuliahDto: CreateMatakuliahDto) {
    return this.matakuliahService.create(createMatakuliahDto);
  }

  @Get()
  findAll() {
    return this.matakuliahService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matakuliahService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatakuliahDto: UpdateMatakuliahDto) {
    return this.matakuliahService.update(+id, updateMatakuliahDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matakuliahService.remove(+id);
  }
}
