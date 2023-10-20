import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ApiBody } from '@nestjs/swagger';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomGateway } from './room.gateway';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Controller('room')
export class RoomController {
  constructor(
    private readonly roomService: RoomService,
    @Inject(RoomGateway) private readonly roomGateway: RoomGateway,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  @Get('/')
  findAll() {
    return this.roomService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return await this.roomService.findOne(id);
  }

  @Post('/create')
  @ApiBody({ type: CreateRoomDto })
  async createRoom(@Body() roomDto: CreateRoomDto) {
    return await this.roomService.createRoom(roomDto);
  }

  @Patch('/update/:id')
  @ApiBody({ type: CreateRoomDto })
  async updateRoom(@Body() roomDto: UpdateRoomDto, @Param('id') id: number) {
    return await this.roomService.updateRoom(id, roomDto);
  }

  @HttpCode(200)
  @Get('/seeroom/:id')
  async seeRoom(@Param('id') id: number) {
    const room = await this.roomService.seeRoom(id);
    this.roomGateway.refreshRoom();
    this.addCronJob(`cancelProcess.${id}`, '5');
    return {
      message: 'success',
      data: room,
    };
  }

  @Get('/cancel/:id')
  cancelProcess(@Param('id') id: number) {
    this.deleteCron(`cancelProcess.${id}`);
    return this.cronCancelProcess(id);
  }

  async cronCancelProcess(id: number) {
    const room = await this.roomService.cancelProcess(id);
    this.roomGateway.refreshRoom();
    return {
      message: 'success',
      data: room,
    };
  }

  addCronJob(name: string, minute: string) {
    const job = new CronJob(`* ${minute} * * * *`, () => {
      console.log(`time (${minute}) for job ${name} to run!`);
      this.cronCancelProcess(+name.split('.')[1]);
      this.deleteCron(name);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    console.log(`job ${name} added for each minute at ${minute} seconds!`);
  }

  deleteCron(name: string) {
    this.schedulerRegistry.deleteCronJob(name);
    console.log(`job ${name} deleted!`);
  }
}
