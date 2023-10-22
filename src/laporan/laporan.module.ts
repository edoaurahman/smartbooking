import { Module } from '@nestjs/common';
import { LaporanService } from './laporan.service';
import { LaporanController } from './laporan.controller';

@Module({
  controllers: [LaporanController],
  providers: [LaporanService],
})
export class LaporanModule {}
