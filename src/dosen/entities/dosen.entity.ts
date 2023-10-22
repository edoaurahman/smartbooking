import { Booking } from 'src/booking/entities/booking.entity';
import { Jadwal } from 'src/jadwal/entities/jadwal.entity';
import { MataKuliah } from 'src/matakuliah/entities/matakuliah.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('FK_matkul_dosen', ['idMatkul'], {})
@Entity('dosen', { schema: 'db_smartbooking' })
export class Dosen {
  @Column('varchar', { primary: true, name: 'nip', length: 20 })
  nip: string;

  @Column('varchar', { name: 'nama', length: 50 })
  nama: string;

  @Column('varchar', { name: 'password', length: 20 })
  password: string;

  @Column('char', { name: 'jenis_kelamin', length: 1 })
  jenisKelamin: string;

  @Column('varchar', { name: 'tempat_lahir', length: 20 })
  tempatLahir: string;

  @Column('date', { name: 'tanggal_lahir' })
  tanggalLahir: string;

  @Column('varchar', { name: 'email', length: 50 })
  email: string;

  @Column('varchar', { name: 'id_matkul', length: 5 })
  idMatkul: string;

  @ManyToOne(() => MataKuliah, (mataKuliah) => mataKuliah.dosens, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_matkul', referencedColumnName: 'idMatkul' }])
  idMatkul2: MataKuliah;

  @OneToMany(() => Jadwal, (jadwal) => jadwal.idDosen2)
  jadwals: Jadwal[];

  @OneToMany(() => Booking, (booking) => booking.idDosen2)
  bookings: Booking[];
}
