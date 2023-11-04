import { Module } from '@nestjs/common';
import { WebSocketService } from './room.service';
import { MyGateway } from './room.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './room.controller';
import { Ruang } from 'src/ruang/entities/ruang.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ruang])],
  providers: [MyGateway, WebSocketService],
  controllers: [RoomController],
})
export class WebSocketModule {}
