import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNivelIdiomaDto } from './dto/create-nivel-idioma.dto';
import { UpdateNivelIdiomaDto } from './dto/update-nivel-idioma.dto';
import { NivelIdioma } from './entities/nivel-idioma.entity';

@Injectable()
export class NivelIdiomaService {
  static nivelesIdiomas: NivelIdioma[] = []

  create(createNivelIdiomaDto: CreateNivelIdiomaDto) {
    const nuevoNivelIdioma = new NivelIdioma

    nuevoNivelIdioma.id = NivelIdiomaService.nivelesIdiomas.length + 1
    nuevoNivelIdioma.usuarioId = createNivelIdiomaDto.usuarioId
    nuevoNivelIdioma.idiomaId = createNivelIdiomaDto.idiomaId
    nuevoNivelIdioma.nivel = createNivelIdiomaDto.nivel

    NivelIdiomaService.nivelesIdiomas.push(nuevoNivelIdioma)

    return nuevoNivelIdioma.id
  }

  findAll() {
    return NivelIdiomaService.nivelesIdiomas
  }

  findOne(id: number) {
    const nivelIdioma = NivelIdiomaService.nivelesIdiomas.find(n => n.id == id)

    if (!nivelIdioma) {
      throw new NotFoundException()
    }

    return nivelIdioma
  }

  update(id: number, updateNivelIdiomaDto: UpdateNivelIdiomaDto) {
    const nivelIdioma = NivelIdiomaService.nivelesIdiomas.find(n => n.id == id)
    
    if (!nivelIdioma) {
      throw new NotFoundException()
    }

    if (updateNivelIdiomaDto.nivel) {
      nivelIdioma.nivel = updateNivelIdiomaDto.nivel
    }

    return nivelIdioma
  }

  remove(id: number) {
    NivelIdiomaService.nivelesIdiomas = NivelIdiomaService.nivelesIdiomas.filter(n => n.id != id)
  }
}
