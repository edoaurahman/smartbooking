import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TingkatanService } from './tingkatan.service';
import { CreateTingkatanDto } from './dto/create-tingkatan.dto';
import { UpdateTingkatanDto } from './dto/update-tingkatan.dto';

@Controller('tingkatan')
export class TingkatanController {
  constructor(private readonly tingkatanService: TingkatanService) {}

  @Post()
  create(@Body() createTingkatanDto: CreateTingkatanDto) {
    return this.tingkatanService.create(createTingkatanDto);
  }

  @Get()
  findAll() {
    return this.tingkatanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tingkatanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTingkatanDto: UpdateTingkatanDto) {
    return this.tingkatanService.update(+id, updateTingkatanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tingkatanService.remove(+id);
  }
}
