import { Module } from '@nestjs/common';
import { ProdiService } from './prodi.service';
import { ProdiController } from './prodi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prodi } from './entities/prodi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prodi])],
  controllers: [ProdiController],
  providers: [ProdiService],
})
export class ProdiModule {}
