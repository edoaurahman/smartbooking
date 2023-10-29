import { Module } from '@nestjs/common';
import { TingkatanService } from './tingkatan.service';
import { TingkatanController } from './tingkatan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tingkatan } from './entities/tingkatan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tingkatan])],
  controllers: [TingkatanController],
  providers: [TingkatanService],
})
export class TingkatanModule {}
