import { Booking } from 'src/booking/entities/booking.entity';
import { Kelas } from 'src/kelas/entities/kela.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('FK_kelas_mahasiswa', ['idKelas'], {})
@Entity('mahasiswa', { schema: 'db_smartbooking' })
export class Mahasiswa {
  @Column('varchar', { primary: true, name: 'nim', length: 10 })
  nim: string;

  @Column('varchar', { name: 'nama', length: 50 })
  nama: string;

  @Column('varchar', { name: 'password', length: 20 })
  password: string;

  @Column('varchar', { name: 'tempat_lahir', length: 20 })
  tempatLahir: string;

  @Column('date', { name: 'tanggal_lahir' })
  tanggalLahir: string;

  @Column('char', { name: 'jenis_kelamin', length: 1 })
  jenisKelamin: string;

  @Column('varchar', { name: 'id_kelas', length: 5 })
  idKelas: string;

  @ManyToOne(() => Kelas, (kelas) => kelas.mahasiswas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_kelas', referencedColumnName: 'idKelas' }])
  idKelas2: Kelas;

  @OneToMany(() => Booking, (booking) => booking.idMahasiswa2)
  bookings: Booking[];
}
