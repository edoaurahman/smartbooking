import { ApiProperty } from '@nestjs/swagger';

export class AuthMahasiswaDto {
  @ApiProperty({ default: '2241720162' })
  nim: string;

  @ApiProperty({ default: '12345678' })
  password: string;
}
