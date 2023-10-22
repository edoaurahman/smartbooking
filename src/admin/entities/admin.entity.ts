import { Column, Entity } from 'typeorm';

@Entity('admin', { schema: 'db_smartbooking' })
export class Admin {
  @Column('varchar', { primary: true, name: 'id_admin', length: 15 })
  idAdmin: string;

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
}
