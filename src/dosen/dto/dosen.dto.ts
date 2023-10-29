import { ApiProperty } from '@nestjs/swagger';

export class DosenDto {
  @ApiProperty({ default: '12345678' })
  nip: string;
  @ApiProperty({ default: 'Abid' })
  nama: string;
  @ApiProperty({ default: 'L' })
  jenisKelamin: string;
  @ApiProperty({ default: 'Malang' })
  tempatLahir: string;
  @ApiProperty({ default: '1986-01-01' })
  tanggalLahir: string;
  @ApiProperty({ default: 'dosen@polinema.ac.id' })
  email: string;
  @ApiProperty({ default: '1' })
  idMatkul: string;
}
