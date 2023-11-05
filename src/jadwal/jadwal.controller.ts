import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { UpdateJadwalDto } from './dto/update-jadwal.dto';

@Controller('jadwal')
export class JadwalController {
  constructor(private readonly jadwalService: JadwalService) {}

  @Post()
  create(@Body() createJadwalDto: CreateJadwalDto) {
    return this.jadwalService.create(createJadwalDto);
  }

  @Get()
  findAll() {
    return this.jadwalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jadwalService.findOne(id);
  }

  @Get('/kelas/:id_kelas')
  getJadwalKelas(@Param('id_kelas') idKelas: string) {
    return this.jadwalService.getJadwalKelas(idKelas);
  }

  @Get('/booking/mahasiswa/:id_kelas')
  getBookingMahasiswa(@Param('id_kelas') idKelas: string) {
    return this.jadwalService.getBookingMahasiswa(idKelas);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJadwalDto: UpdateJadwalDto) {
    return this.jadwalService.update(+id, updateJadwalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jadwalService.remove(+id);
  }
}
