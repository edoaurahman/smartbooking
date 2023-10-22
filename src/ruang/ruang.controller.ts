import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RuangService } from './ruang.service';
import { CreateRuangDto } from './dto/create-ruang.dto';
import { UpdateRuangDto } from './dto/update-ruang.dto';

@Controller('ruang')
export class RuangController {
  constructor(private readonly ruangService: RuangService) {}

  @Post()
  create(@Body() createRuangDto: CreateRuangDto) {
    return this.ruangService.create(createRuangDto);
  }

  @Get()
  findAll() {
    return this.ruangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuangDto: UpdateRuangDto) {
    return this.ruangService.update(+id, updateRuangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruangService.remove(+id);
  }
}
