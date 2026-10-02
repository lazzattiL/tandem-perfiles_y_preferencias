import { Bloqueo } from "../../bloqueo/entities/bloqueo.entity"
import { NivelIdioma } from "../../nivel-idioma/entities/nivel-idioma.entity"
import { Preferencia } from "../../preferencias/entities/preferencia.entity"
import { Pais } from "./pais.entity"

export class Persona {
    id:number
    nombre:string
    apellido:string
    alias:string
    mail:string
    pais:Pais
    idiomasHablados:NivelIdioma[]
    idiomasPorAprender:NivelIdioma[]
    estaActiva:boolean
    preferencias:Preferencia
    bloqueo:Bloqueo[]
} 