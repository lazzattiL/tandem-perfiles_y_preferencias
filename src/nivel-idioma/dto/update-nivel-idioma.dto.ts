import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelIdiomaDto } from './create-nivel-idioma.dto';

export class UpdateNivelIdiomaDto extends PartialType(CreateNivelIdiomaDto) {
    nivel:number
}
