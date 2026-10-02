import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
    id:number
    nombre:string
    apellido:string
    alias:string
    mail:string
    paisId:number
    idsIdiomasHablados:number[]
    idsIdiomasPorAprender:number[]
    estaActiva:boolean
    preferenciasId:number
    bloqueoId:number
}
