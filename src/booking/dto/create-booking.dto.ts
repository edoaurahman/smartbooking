import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ default: '2023-11-01' })
  date: Date;

  @ApiProperty({ default: 'onprocess' })
  status: string;

  @ApiProperty({ default: null })
  lampiran: string;

  @ApiProperty({ default: 'M001' })
  idMahasiswa: string;

  @ApiProperty({ default: 'D001' })
  idDosen: string;

  @ApiProperty({ default: 'K007' })
  idKelas: string;

  @ApiProperty({ default: 'R001' })
  idRuang: string;

  @ApiProperty({ default: 'J001' })
  jamMulai: string;

  @ApiProperty({ default: 'J004' })
  jamSelesai: string;
}
