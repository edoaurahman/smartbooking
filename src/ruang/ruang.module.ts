import { Module } from '@nestjs/common';
import { RuangService } from './ruang.service';
import { RuangController } from './ruang.controller';

@Module({
  controllers: [RuangController],
  providers: [RuangService],
})
export class RuangModule {}
