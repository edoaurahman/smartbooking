import { Booking } from 'src/booking/entities/booking.entity';
import { Jadwal } from 'src/jadwal/entities/jadwal.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('jam', { schema: 'db_smartbooking' })
export class Jam {
  @Column('varchar', { primary: true, name: 'id_jam', length: 5 })
  idJam: string;

  @Column('time', { name: 'jam_mulai' })
  jamMulai: string;

  @Column('time', { name: 'jam_selesai' })
  jamSelesai: string;

  @OneToMany(() => Jadwal, (jadwal) => jadwal.jamMulai2)
  jadwals: Jadwal[];

  @OneToMany(() => Jadwal, (jadwal) => jadwal.jamSelesai2)
  jadwals2: Jadwal[];

  @OneToMany(() => Booking, (booking) => booking.jamMulai2)
  bookings: Booking[];

  @OneToMany(() => Booking, (booking) => booking.jamSelesai2)
  bookings2: Booking[];
}
