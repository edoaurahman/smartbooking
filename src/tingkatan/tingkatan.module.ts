import { Module } from '@nestjs/common';
import { TingkatanService } from './tingkatan.service';
import { TingkatanController } from './tingkatan.controller';

@Module({
  controllers: [TingkatanController],
  providers: [TingkatanService],
})
export class TingkatanModule {}
