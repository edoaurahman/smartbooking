import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

  @Get(':idTingkatan')
  findOne(@Param('idTingkatan') idTingkatan: string) {
    return this.tingkatanService.findOne(idTingkatan);
  }

  @Patch(':idTingkatan')
  update(
    @Param('idTingkatan') idTingkatan: string,
    @Body() updateTingkatanDto: UpdateTingkatanDto,
  ) {
    return this.tingkatanService.update(idTingkatan, updateTingkatanDto);
  }

  @Delete(':idTingkatan')
  remove(@Param('idTingkatan') idTingkatan: string) {
    return this.tingkatanService.remove(idTingkatan);
  }
}
