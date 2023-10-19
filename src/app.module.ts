import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm';
import { RoomModule } from './room/room.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    RoomModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
