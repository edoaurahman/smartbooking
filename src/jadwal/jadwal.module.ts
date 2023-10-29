import { Module } from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { JadwalController } from './jadwal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jadwal } from './entities/jadwal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jadwal])],
  controllers: [JadwalController],
  providers: [JadwalService],
})
export class JadwalModule {}
