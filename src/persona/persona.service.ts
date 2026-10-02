import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Pais } from './entities/pais.entity';
import { NivelIdiomaService } from '../nivel-idioma/nivel-idioma.service';
import { PreferenciasService } from '../preferencias/preferencias.service';
import { BloqueoService } from '../bloqueo/bloqueo.service';

@Injectable()
export class PersonaService {
  constructor(
    private readonly nivelIdiomaService: NivelIdiomaService,
    private readonly preferenciaService: PreferenciasService,
    private readonly bloqueoService: BloqueoService
  ) {}

  static personas:Persona[] = []

  create(createPersonaDto: CreatePersonaDto) {
    const idiomasHablados = createPersonaDto.idsIdiomasHablados.map(i => this.nivelIdiomaService.findOne(i))
    const idiomasPorAprender = createPersonaDto.idsIdiomasPorAprender.map(i => this.nivelIdiomaService.findOne(i))
    const preferencias = this.preferenciaService.findOne(createPersonaDto.preferenciasId)
    const bloqueos = createPersonaDto.bloqueoId.map(b => this.bloqueoService.findOne(b))
    const nuevaPersona = new Persona

    nuevaPersona.id = NivelIdiomaService.nivelesIdiomas.length + 1
    nuevaPersona.nombre = createPersonaDto.nombre
    nuevaPersona.apellido = createPersonaDto.apellido
    
  }
  
  findAll() {
    return `This action returns all persona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
