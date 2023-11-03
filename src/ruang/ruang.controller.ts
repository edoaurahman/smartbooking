import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RuangService } from './ruang.service';
import { CreateRuangDto } from './dto/create-ruang.dto';
import { UpdateRuangDto } from './dto/update-ruang.dto';

@Controller('ruang')
export class RuangController {
  ruangData: any;
  constructor(private readonly ruangService: RuangService) {
    this.ruangData = {};
  }

  tambahDataRuang(namaRuang: string, dataRuang) {
    // cek apakah nama ruang sudah ada di objek
    if (!this.ruangData.hasOwnProperty(namaRuang)) {
      // jika belum, buat array baru untuk menyimpan data ruang
      this.ruangData[namaRuang] = [];
    }

    // tambahkan data ruang ke dalam array
    this.ruangData[namaRuang].push(dataRuang);
  }

  @Get('/getbookingstatus/:id_lantai/:tanggal')
  async getBookingStatus(
    @Param('id_lantai') id_lantai: string,
    @Param('tanggal') tanggal: string,
  ) {
    // Date Format: YYYY-MM-DD
    const hari = new Date(tanggal).toLocaleDateString('id-ID', {
      weekday: 'long',
    });

    this.ruangData = {};
    const ruang = await this.ruangService.getBookingStatus(id_lantai, hari);
    ruang.forEach((ruang: { nama_ruang: string }) => {
      this.tambahDataRuang(ruang.nama_ruang, ruang);
    });
    return this.ruangData;
  }

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
    return this.ruangService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuangDto: UpdateRuangDto) {
    return this.ruangService.update(id, updateRuangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruangService.remove(id);
  }
}
