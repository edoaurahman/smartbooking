import { Booking } from 'src/booking/entities/booking.entity';
import { Jadwal } from 'src/jadwal/entities/jadwal.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('ruang', { schema: 'db_smartbooking' })
export class Ruang {
  @Column('varchar', { primary: true, name: 'id_ruang', length: 5 })
  idRuang: string;

  @Column('varchar', { name: 'nama_ruang', length: 15 })
  namaRuang: string;

  @Column('varchar', { name: 'deskripsi_ruang', length: 50 })
  deskripsiRuang: string;

  @Column('int', { name: 'qr_code' })
  qrCode: number;

  @OneToMany(() => Jadwal, (jadwal) => jadwal.idRuang2)
  jadwals: Jadwal[];

  @OneToMany(() => Booking, (booking) => booking.idRuang2)
  bookings: Booking[];
}
