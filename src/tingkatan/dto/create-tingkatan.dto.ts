import { ApiProperty } from '@nestjs/swagger';

export class CreateTingkatanDto {
  @ApiProperty({ default: '1' })
  idTingkatan: string;
  @ApiProperty({ default: '1' })
  noTingkatan: number;
}
