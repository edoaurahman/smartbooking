import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthMahasiswaDto } from './dto/auth-mahasiswa.dto';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {}

  @Post('/auth')
  auth(@Body() authMahasiswaDto: AuthMahasiswaDto) {
    return this.mahasiswaService.auth(authMahasiswaDto);
  }

  @ApiBearerAuth()
  @Post()
  @ApiBody({ type: CreateMahasiswaDto })
  create(@Body() createMahasiswaDto: CreateMahasiswaDto) {
    return this.mahasiswaService.create(createMahasiswaDto);
  }

  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.mahasiswaService.findAll();
  }

  @ApiBearerAuth()
  @Get(':nim')
  findOne(@Param('nim') nim: string) {
    return this.mahasiswaService.findOne(nim);
  }

  @ApiBearerAuth()
  @Patch(':nim')
  @ApiBody({ type: UpdateMahasiswaDto })
  update(
    @Param('nim') nim: string,
    @Body() updateMahasiswaDto: UpdateMahasiswaDto,
  ) {
    return this.mahasiswaService.update(nim, updateMahasiswaDto);
  }

  @ApiBearerAuth()
  @Delete(':nim')
  remove(@Param('nim') nim: string) {
    return this.mahasiswaService.remove(nim);
  }
}
