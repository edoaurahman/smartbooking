import { Module } from '@nestjs/common';
import { HariService } from './hari.service';
import { HariController } from './hari.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hari } from './entities/hari.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hari])],
  controllers: [HariController],
  providers: [HariService],
})
export class HariModule {}
