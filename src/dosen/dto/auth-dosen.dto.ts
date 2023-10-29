import { ApiProperty } from '@nestjs/swagger';

export class AuthDosenDto {
  @ApiProperty({ default: 'D001' })
  nip: string;

  @ApiProperty({ default: 'D001' })
  password: string;
}
