import { Booking } from 'src/booking/entities/booking.entity';
import { Jadwal } from 'src/jadwal/entities/jadwal.entity';
import { Mahasiswa } from 'src/mahasiswa/entities/mahasiswa.entity';
import { Prodi } from 'src/prodi/entities/prodi.entity';
import { Tingkatan } from 'src/tingkatan/entities/tingkatan.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('FK_prodi_kelas', ['idProdi'], {})
@Index('FK_tingkatan_kelas', ['idTingkatan'], {})
@Entity('kelas', { schema: 'db_smartbooking' })
export class Kelas {
  @Column('varchar', { primary: true, name: 'id_kelas', length: 5 })
  idKelas: string;

  @Column('varchar', { name: 'nama_kelas', length: 10 })
  namaKelas: string;

  @Column('varchar', { name: 'id_prodi', length: 5 })
  idProdi: string;

  @Column('varchar', { name: 'id_tingkatan', length: 5 })
  idTingkatan: string;

  @OneToMany(() => Mahasiswa, (mahasiswa) => mahasiswa.idKelas2)
  mahasiswas: Mahasiswa[];

  @OneToMany(() => Jadwal, (jadwal) => jadwal.idKelas2)
  jadwals: Jadwal[];

  @OneToMany(() => Booking, (booking) => booking.idKelas2)
  bookings: Booking[];

  @ManyToOne(() => Prodi, (prodi) => prodi.kelas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_prodi', referencedColumnName: 'idProdi' }])
  idProdi2: Prodi;

  @ManyToOne(() => Tingkatan, (tingkatan) => tingkatan.kelas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_tingkatan', referencedColumnName: 'idTingkatan' }])
  idTingkatan2: Tingkatan;
}
