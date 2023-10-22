import { Module } from '@nestjs/common';
import { HariService } from './hari.service';
import { HariController } from './hari.controller';

@Module({
  controllers: [HariController],
  providers: [HariService],
})
export class HariModule {}
