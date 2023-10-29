import { ApiProperty } from '@nestjs/swagger';

export class CreateRuangDto {
  @ApiProperty({ default: '1' })
  idRuang: string;

  @ApiProperty({ default: 'Ruang Teori 1' })
  namaRuang: string;

  @ApiProperty({ default: 'Ruang Teori' })
  deskripsiRuang: string;

  @ApiProperty({ default: '123312' })
  qrCode: number;
}
