import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

  @Get(':idHari')
  findOne(@Param('idHari') idHari: string) {
    return this.hariService.findOne(idHari);
  }

  @Patch(':idHari')
  update(
    @Param('idHari') idHari: string,
    @Body() updateHariDto: UpdateHariDto,
  ) {
    return this.hariService.update(idHari, updateHariDto);
  }

  @Delete(':idHari')
  remove(@Param('idHari') idHari: string) {
    return this.hariService.remove(idHari);
  }
}
