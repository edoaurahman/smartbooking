import { Dosen } from 'src/dosen/entities/dosen.entity';
import { Jadwal } from 'src/jadwal/entities/jadwal.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('mata_kuliah', { schema: 'db_smartbooking' })
export class MataKuliah {
  @Column('varchar', { primary: true, name: 'id_matkul', length: 5 })
  idMatkul: string;

  @Column('varchar', { name: 'nama_matkul', length: 50 })
  namaMatkul: string;

  @OneToMany(() => Dosen, (dosen) => dosen.idMatkul2)
  dosens: Dosen[];

  @OneToMany(() => Jadwal, (jadwal) => jadwal.idMatkul2)
  jadwals: Jadwal[];
}
