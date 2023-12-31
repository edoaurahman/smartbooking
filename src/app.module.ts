import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm';
import { WebSocketModule } from './websocket/room.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { DosenModule } from './dosen/dosen.module';
import { KelasModule } from './kelas/kelas.module';
import { JamModule } from './jam/jam.module';
import { BookingModule } from './booking/booking.module';
import { HariModule } from './hari/hari.module';
import { JadwalModule } from './jadwal/jadwal.module';
import { LaporanModule } from './laporan/laporan.module';
import { MatakuliahModule } from './matakuliah/matakuliah.module';
import { ProdiModule } from './prodi/prodi.module';
import { RuangModule } from './ruang/ruang.module';
import { TingkatanModule } from './tingkatan/tingkatan.module';
import { AdminModule } from './admin/admin.module';
import { MahasiswaMiddleware } from './mahasiswa/mahasiswa.middleware';

@Module({
  imports: [
    WebSocketModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ScheduleModule.forRoot(),
    MahasiswaModule,
    DosenModule,
    KelasModule,
    JamModule,
    BookingModule,
    HariModule,
    JadwalModule,
    LaporanModule,
    MatakuliahModule,
    ProdiModule,
    RuangModule,
    TingkatanModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MahasiswaMiddleware)
      .forRoutes({ path: 'mahasiswa', method: RequestMethod.GET });
  }
}
