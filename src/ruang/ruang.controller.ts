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
import { WebSocketService } from 'src/websocket/room.service';

@Controller('ruang')
export class RuangController {
  // timeout user
  private userTimeout: Map<string, any> = new Map();
  constructor(
    private readonly ruangService: RuangService,
    private readonly websockerService: WebSocketService,
    @Inject(MyGateway) private readonly roomGateway: MyGateway,
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

    const timeout = setTimeout(() => {
      this.cancelProcess(nama_ruang);
      console.log('timeout');
    }, 300000);

    this.userTimeout.set(nama_ruang, timeout);
    return {
      message: 'success',
      data: room,
    };
  }

  @Get('/cancel/:nama_ruang')
  async cancelProcess(@Param('nama_ruang') nama_ruang: string) {
    // Batalkan timeout jika ada
    console.log(this.userTimeout);

    if (this.userTimeout.has(nama_ruang)) {
      clearTimeout(this.userTimeout.get(nama_ruang));
      this.userTimeout.delete(nama_ruang);
      console.log('timeout cleared : ', nama_ruang);
    }

    const room = await this.websockerService.cancelProcess(nama_ruang);
    this.roomGateway.refreshRoom();
    return {
      message: 'success',
      data: room,
    };
  }

  // async addCronJob(name: string, minute: string) {
  //   const job = new CronJob(
  //     `${minute} * * * *`, // Ekspresi cron untuk menit ke-1
  //     () => {
  //       console.log(
  //         `Waktu (menit ke-${minute}) untuk menjalankan job ${name}!`,
  //       );
  //       this.cronCancelProcess(name.split('.')[1]);
  //       const job = this.schedulerRegistry.getCronJob(name);
  //       job.stop();
  //       this.deleteCron(name);
  //     },
  //     () => {
  //       console.log(`Job ${name} selesai!`);
  //     },
  //     false,
  //     'Asia/Jakarta',
  //   );
  //   job.start();
  //   this.schedulerRegistry.addCronJob(name, job);

  //   console.log(`job ${name} added for each minute at ${minute} minutes!`);
  // }

  // async cronCancelProcess(nama_ruang: string) {
  //   const room = await this.websockerService.cancelProcess(nama_ruang);
  //   this.roomGateway.refreshRoom();
  //   return {
  //     message: 'success',
  //     data: room,
  //   };
  // }

  // deleteCron(name: string) {
  //   this.schedulerRegistry.deleteCronJob(name);
  //   console.log(`job ${name} deleted!`);
  // }
}
