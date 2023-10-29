import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KelasService } from './kelas.service';
import { CreateKelaDto } from './dto/create-kela.dto';
import { UpdateKelaDto } from './dto/update-kela.dto';

@Controller('kelas')
export class KelasController {
  constructor(private readonly kelasService: KelasService) {}

  @Post()
  create(@Body() createKelaDto: CreateKelaDto) {
    return this.kelasService.create(createKelaDto);
  }

  @Get()
  findAll() {
    return this.kelasService.findAll();
  }

  @Get(':idKelas')
  findOne(@Param('idKelas') idKelas: string) {
    return this.kelasService.findOne(idKelas);
  }

  @Patch(':idKelas')
  update(
    @Param('idKelas') idKelas: string,
    @Body() updateKelaDto: UpdateKelaDto,
  ) {
    return this.kelasService.update(idKelas, updateKelaDto);
  }

  @Delete(':idKelas')
  remove(@Param('idKelas') idKelas: string) {
    return this.kelasService.remove(idKelas);
  }
}
