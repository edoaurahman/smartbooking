import { PartialType } from '@nestjs/swagger';
import { CreateJamDto } from './create-jam.dto';

export class UpdateJamDto extends PartialType(CreateJamDto) {}
