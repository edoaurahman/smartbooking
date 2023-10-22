import { Dosen } from 'src/dosen/entities/dosen.entity';
import { Jam } from 'src/jam/entities/jam.entity';
import { Kelas } from 'src/kelas/entities/kela.entity';
import { Laporan } from 'src/laporan/entities/laporan.entity';
import { Mahasiswa } from 'src/mahasiswa/entities/mahasiswa.entity';
import { Ruang } from 'src/ruang/entities/ruang.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Index('FK_dosen_booking', ['idDosen'], {})
@Index('FK_jam_mulai_booking', ['jamMulai'], {})
@Index('FK_jam_selesai_booking', ['jamSelesai'], {})
@Index('FK_kelas_booking', ['idKelas'], {})
@Index('FK_mahasiswa_booking', ['idMahasiswa'], {})
@Index('FK_ruang_booking', ['idRuang'], {})
@Entity('booking', { schema: 'db_smartbooking' })
export class Booking {
  @Column('varchar', { primary: true, name: 'id_booking', length: 5 })
  idBooking: string;

  @Column('datetime', { name: 'date' })
  date: Date;

  @Column('varchar', { name: 'status', length: 10 })
  status: string;

  @Column('varchar', { name: 'lampiran', length: 50 })
  lampiran: string;

  @Column('varchar', { name: 'id_mahasiswa', length: 10 })
  idMahasiswa: string;

  @Column('varchar', { name: 'id_dosen', length: 20 })
  idDosen: string;

  @Column('varchar', { name: 'id_kelas', length: 5 })
  idKelas: string;

  @Column('varchar', { name: 'id_ruang', length: 5 })
  idRuang: string;

  @Column('varchar', { name: 'jam_mulai', length: 5 })
  jamMulai: string;

  @Column('varchar', { name: 'jam_selesai', length: 5 })
  jamSelesai: string;

  @ManyToOne(() => Dosen, (dosen) => dosen.bookings, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_dosen', referencedColumnName: 'nip' }])
  idDosen2: Dosen;

  @ManyToOne(() => Jam, (jam) => jam.bookings, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'jam_mulai', referencedColumnName: 'idJam' }])
  jamMulai2: Jam;

  @ManyToOne(() => Jam, (jam) => jam.bookings2, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'jam_selesai', referencedColumnName: 'idJam' }])
  jamSelesai2: Jam;

  @ManyToOne(() => Kelas, (kelas) => kelas.bookings, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_kelas', referencedColumnName: 'idKelas' }])
  idKelas2: Kelas;

  @ManyToOne(() => Mahasiswa, (mahasiswa) => mahasiswa.bookings, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_mahasiswa', referencedColumnName: 'nim' }])
  idMahasiswa2: Mahasiswa;

  @ManyToOne(() => Ruang, (ruang) => ruang.bookings, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_ruang', referencedColumnName: 'idRuang' }])
  idRuang2: Ruang;

  @OneToMany(() => Laporan, (laporan) => laporan.idBooking2)
  laporans: Laporan[];
}
