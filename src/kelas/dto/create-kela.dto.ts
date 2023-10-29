import { ApiProperty } from '@nestjs/swagger';

export class CreateKelaDto {
  @ApiProperty({ default: '1' })
  idKelas: string;
  @ApiProperty({ default: 'A' })
  namaKelas: string;
  @ApiProperty({ default: '1' })
  idProdi: string;
  @ApiProperty({ default: '1' })
  idTingkatan: string;
}
