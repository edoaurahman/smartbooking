import { ApiProperty } from '@nestjs/swagger';

export class MahasiswaDto {
  @ApiProperty({ default: '2241720162' })
  nim: string;

  @ApiProperty({ default: "Ridho Aulia' Rahman" })
  nama: string;

  @ApiProperty({ default: 'Bojonegoro' })
  tempatLahir: string;

  @ApiProperty({ default: '2004-04-05' })
  tanggalLahir: string;

  @ApiProperty({ default: 'L' })
  jenisKelamin: string;

  @ApiProperty({ default: '1' })
  idKelas: string;
}
