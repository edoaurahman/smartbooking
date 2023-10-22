import { Jadwal } from 'src/jadwal/entities/jadwal.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('hari', { schema: 'db_smartbooking' })
export class Hari {
  @Column('varchar', { primary: true, name: 'id_hari', length: 5 })
  idHari: string;

  @Column('varchar', { name: 'nama_hari', length: 10 })
  namaHari: string;

  @OneToMany(() => Jadwal, (jadwal) => jadwal.idHari2)
  jadwals: Jadwal[];
}
