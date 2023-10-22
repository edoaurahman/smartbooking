import { Booking } from 'src/booking/entities/booking.entity';
import { Jadwal } from 'src/jadwal/entities/jadwal.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
@Index('FK_booking_laporan', ['idBooking'], {})
@Index('FK_jadwal_laporan', ['idJadwal'], {})
@Entity('laporan', { schema: 'db_smartbooking' })
export class Laporan {
  @Column('varchar', { primary: true, name: 'id_laporan', length: 5 })
  idLaporan: string;

  @Column('date', { name: 'date' })
  date: string;

  @Column('varchar', { name: 'id_booking', length: 5 })
  idBooking: string;

  @Column('varchar', { name: 'id_jadwal', length: 5 })
  idJadwal: string;

  @ManyToOne(() => Booking, (booking) => booking.laporans, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_booking', referencedColumnName: 'idBooking' }])
  idBooking2: Booking;

  @ManyToOne(() => Jadwal, (jadwal) => jadwal.laporans, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_jadwal', referencedColumnName: 'idJadwal' }])
  idJadwal2: Jadwal;
}
