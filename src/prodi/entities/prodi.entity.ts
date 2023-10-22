import { Kelas } from 'src/kelas/entities/kela.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('prodi', { schema: 'db_smartbooking' })
export class Prodi {
  @Column('varchar', { primary: true, name: 'id_prodi', length: 5 })
  idProdi: string;

  @Column('varchar', { name: 'nama_prodi', length: 50 })
  namaProdi: string;

  @OneToMany(() => Kelas, (kelas) => kelas.idProdi2)
  kelas: Kelas[];
}
