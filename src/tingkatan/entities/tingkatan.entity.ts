import { Kelas } from 'src/kelas/entities/kela.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('tingkatan', { schema: 'db_smartbooking' })
export class Tingkatan {
  @Column('varchar', { primary: true, name: 'id_tingkatan', length: 5 })
  idTingkatan: string;

  @Column('smallint', { name: 'no_tingkatan' })
  noTingkatan: number;

  @OneToMany(() => Kelas, (kelas) => kelas.idTingkatan2)
  kelas: Kelas[];
}
