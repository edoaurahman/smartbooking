import { PartialType } from '@nestjs/swagger';
import { CreateProdiDto } from './create-prodi.dto';

export class UpdateProdiDto extends PartialType(CreateProdiDto) {}
