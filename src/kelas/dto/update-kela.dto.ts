import { PartialType } from '@nestjs/swagger';
import { CreateKelaDto } from './create-kela.dto';

export class UpdateKelaDto extends PartialType(CreateKelaDto) {}
