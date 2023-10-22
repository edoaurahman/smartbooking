import { PartialType } from '@nestjs/swagger';
import { CreateHariDto } from './create-hari.dto';

export class UpdateHariDto extends PartialType(CreateHariDto) {}
