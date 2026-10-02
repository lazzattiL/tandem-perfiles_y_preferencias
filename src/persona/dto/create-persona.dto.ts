export class CreatePersonaDto {
    nombre:string
    apellido:string
    alias:string
    mail:string
    paisId:number
    idsIdiomasHablados:number[]
    idsIdiomasPorAprender:number[]
    estaActiva:boolean
    preferenciasId:number
    bloqueoId:number[]
}
