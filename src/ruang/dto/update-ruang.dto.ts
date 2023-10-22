import { PartialType } from '@nestjs/swagger';
import { CreateRuangDto } from './create-ruang.dto';

export class UpdateRuangDto extends PartialType(CreateRuangDto) {}
