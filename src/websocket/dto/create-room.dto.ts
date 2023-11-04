import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty({ default: 'Room 1' })
  room_name: string;
  @ApiProperty({ default: 'available' })
  status: string;
  @ApiProperty({ default: null })
  code: string;
}
