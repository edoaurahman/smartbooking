import { Dosen } from 'src/dosen/entities/dosen.entity';
import { Hari } from 'src/hari/entities/hari.entity';
import { Jam } from 'src/jam/entities/jam.entity';
import { Kelas } from 'src/kelas/entities/kela.entity';
import { Laporan } from 'src/laporan/entities/laporan.entity';
import { MataKuliah } from 'src/matakuliah/entities/matakuliah.entity';
import { Ruang } from 'src/ruang/entities/ruang.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('FK_hari_jadwal', ['idHari'], {})
@Index('FK_dosen_jadwal', ['idDosen'], {})
@Index('FK_kelas_jadwal', ['idKelas'], {})
@Index('FK_matkul_jadwal', ['idMatkul'], {})
@Index('FK_ruang_jadwal', ['idRuang'], {})
@Index('FK_jam_mulai_jadwal', ['jamMulai'], {})
@Index('FK_jam_selesai_jadwal', ['jamSelesai'], {})
@Entity('jadwal', { schema: 'db_smartbooking' })
export class Jadwal {
  @Column('varchar', { primary: true, name: 'id_jadwal', length: 5 })
  idJadwal: string;

  @Column('varchar', { name: 'id_matkul', length: 5 })
  idMatkul: string;

  @Column('varchar', { name: 'id_kelas', length: 5 })
  idKelas: string;

  @Column('varchar', { name: 'id_dosen', length: 20 })
  idDosen: string;

  @Column('varchar', { name: 'id_ruang', length: 5 })
  idRuang: string;

  @Column('varchar', { name: 'id_hari', length: 5 })
  idHari: string;

  @Column('varchar', { name: 'jam_mulai', length: 5 })
  jamMulai: string;

  @Column('varchar', { name: 'jam_selesai', length: 5 })
  jamSelesai: string;

  @Column('varchar', { name: 'status', length: 10 })
  status: string;

  @ManyToOne(() => Dosen, (dosen) => dosen.jadwals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_dosen', referencedColumnName: 'nip' }])
  idDosen2: Dosen;

  @ManyToOne(() => Hari, (hari) => hari.jadwals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_hari', referencedColumnName: 'idHari' }])
  idHari2: Hari;

  @ManyToOne(() => Jam, (jam) => jam.jadwals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'jam_mulai', referencedColumnName: 'idJam' }])
  jamMulai2: Jam;

  @ManyToOne(() => Jam, (jam) => jam.jadwals2, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'jam_selesai', referencedColumnName: 'idJam' }])
  jamSelesai2: Jam;

  @ManyToOne(() => Kelas, (kelas) => kelas.jadwals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_kelas', referencedColumnName: 'idKelas' }])
  idKelas2: Kelas;

  @ManyToOne(() => MataKuliah, (mataKuliah) => mataKuliah.jadwals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_matkul', referencedColumnName: 'idMatkul' }])
  idMatkul2: MataKuliah;

  @ManyToOne(() => Ruang, (ruang) => ruang.jadwals, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_ruang', referencedColumnName: 'idRuang' }])
  idRuang2: Ruang;

  @OneToMany(() => Laporan, (laporan) => laporan.idJadwal2)
  laporans: Laporan[];
}
