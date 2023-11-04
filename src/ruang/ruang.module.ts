import { Module } from '@nestjs/common';
import { RuangService } from './ruang.service';
import { RuangController } from './ruang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruang } from './entities/ruang.entity';
import { MyGateway } from 'src/websocket/room.gateway';
import { WebSocketService } from 'src/websocket/room.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ruang])],
  controllers: [RuangController],
  providers: [RuangService, MyGateway, WebSocketService],
})
export class RuangModule {}
