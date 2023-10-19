import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomGateway } from './room.gateway';
import { Room } from './entities/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './room.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomGateway, RoomService],
  controllers: [RoomController],
})
export class RoomModule {}
