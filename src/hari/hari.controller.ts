import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HariService } from './hari.service';
import { CreateHariDto } from './dto/create-hari.dto';
import { UpdateHariDto } from './dto/update-hari.dto';

@Controller('hari')
export class HariController {
  constructor(private readonly hariService: HariService) {}

  @Post()
  create(@Body() createHariDto: CreateHariDto) {
    return this.hariService.create(createHariDto);
  }

  @Get()
  findAll() {
    return this.hariService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hariService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHariDto: UpdateHariDto) {
    return this.hariService.update(+id, updateHariDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hariService.remove(+id);
  }
}
