import { ApiProperty } from '@nestjs/swagger';

export class CreateHariDto {
  @ApiProperty({ default: '1' })
  idHari: string;
  @ApiProperty({ default: 'Senin' })
  namaHari: string;
}
