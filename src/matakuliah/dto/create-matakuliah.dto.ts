import { ApiProperty } from '@nestjs/swagger';

export class CreateMatakuliahDto {
  @ApiProperty({ default: '1' })
  idMatkul: string;
  @ApiProperty({ default: 'Pemrograman Berbasis Objek' })
  namaMatkul: string;
}
