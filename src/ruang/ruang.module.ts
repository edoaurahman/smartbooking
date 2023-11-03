import { Module } from '@nestjs/common';
import { RuangService } from './ruang.service';
import { RuangController } from './ruang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruang } from './entities/ruang.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ruang])],
  controllers: [RuangController],
  providers: [RuangService],
})
export class RuangModule {}
