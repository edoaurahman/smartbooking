import { ApiProperty } from '@nestjs/swagger';

export class CreateProdiDto {
  @ApiProperty({ default: '1' })
  idProdi: string;

  @ApiProperty({ default: 'Teknik Informatika' })
  namaProdi: string;
}
