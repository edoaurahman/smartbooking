import { PartialType } from '@nestjs/swagger';
import { CreateTingkatanDto } from './create-tingkatan.dto';

export class UpdateTingkatanDto extends PartialType(CreateTingkatanDto) {}
