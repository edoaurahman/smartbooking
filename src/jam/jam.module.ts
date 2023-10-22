import { Module } from '@nestjs/common';
import { JamService } from './jam.service';
import { JamController } from './jam.controller';

@Module({
  controllers: [JamController],
  providers: [JamService],
})
export class JamModule {}
