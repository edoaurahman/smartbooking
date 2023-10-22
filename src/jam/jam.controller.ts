import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JamService } from './jam.service';
import { CreateJamDto } from './dto/create-jam.dto';
import { UpdateJamDto } from './dto/update-jam.dto';

@Controller('jam')
export class JamController {
  constructor(private readonly jamService: JamService) {}

  @Post()
  create(@Body() createJamDto: CreateJamDto) {
    return this.jamService.create(createJamDto);
  }

  @Get()
  findAll() {
    return this.jamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJamDto: UpdateJamDto) {
    return this.jamService.update(+id, updateJamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jamService.remove(+id);
  }
}
