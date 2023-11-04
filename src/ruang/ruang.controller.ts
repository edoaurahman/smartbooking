import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  HttpCode,
} from '@nestjs/common';
import { RuangService } from './ruang.service';
import { CreateRuangDto } from './dto/create-ruang.dto';
import { UpdateRuangDto } from './dto/update-ruang.dto';
import { MyGateway } from 'src/websocket/room.gateway';
import { SchedulerRegistry } from '@nestjs/schedule';
import { WebSocketService } from 'src/websocket/room.service';
import { CronJob } from 'cron';

@Controller('ruang')
export class RuangController {
  constructor(
    private readonly ruangService: RuangService,
    private readonly websockerService: WebSocketService,
    @Inject(MyGateway) private readonly roomGateway: MyGateway,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  @Get('/getbookingstatus/:id_lantai/:tanggal')
  async getBookingStatus(
    @Param('id_lantai') id_lantai: string,
    @Param('tanggal') tanggal: string,
  ) {
    // Date Format: YYYY-MM-DD
    const hari = new Date(tanggal).toLocaleDateString('id-ID', {
      weekday: 'long',
    });

    return this.ruangService.getBookingStatus(id_lantai, hari);
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

  @HttpCode(200)
  @Get('/seeroom/:nama_ruang')
  async seeRoom(@Param('nama_ruang') nama_ruang: string) {
    const room = await this.websockerService.seeRoom(nama_ruang);
    this.roomGateway.refreshRoom();
    this.addCronJob(`cancelProcess.${nama_ruang}`, '5');
    return {
      message: 'success',
      data: room,
    };
  }

  @Get('/cancel/:nama_ruang')
  cancelProcess(@Param('nama_ruang') nama_ruang: string) {
    this.deleteCron(`cancelProcess.${nama_ruang}`);
    return this.cronCancelProcess(nama_ruang);
  }

  addCronJob(name: string, minute: string) {
    const job = new CronJob(`* ${minute} * * * *`, () => {
      console.log(`time (${minute}) for job ${name} to run!`);
      this.cronCancelProcess(name.split('.')[1]);
      this.deleteCron(name);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    console.log(`job ${name} added for each minute at ${minute} seconds!`);
  }

  async cronCancelProcess(nama_ruang: string) {
    const room = await this.websockerService.cancelProcess(nama_ruang);
    this.roomGateway.refreshRoom();
    return {
      message: 'success',
      data: room,
    };
  }

  deleteCron(name: string) {
    this.schedulerRegistry.deleteCronJob(name);
    console.log(`job ${name} deleted!`);
  }
}
