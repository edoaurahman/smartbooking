import { Module } from '@nestjs/common';
import { ProdiService } from './prodi.service';
import { ProdiController } from './prodi.controller';

@Module({
  controllers: [ProdiController],
  providers: [ProdiService],
})
export class ProdiModule {}
