import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomaService {
  static idiomas:Idioma[] = [{nombre: "espaniol", codigo: "es"}, {nombre: "ingles", codigo: "en"}, {nombre: "aleman", codigo: "de"}]

  create(createIdiomaDto: CreateIdiomaDto) {
    const nuevoIdioma = new Idioma

    nuevoIdioma.codigo = createIdiomaDto.codigo
    nuevoIdioma.nombre = createIdiomaDto.nombre

    IdiomaService.idiomas.push(nuevoIdioma)
  }

  findAll() {
    return IdiomaService.idiomas
  }

  findOne(id: string) {
    const idioma = IdiomaService.idiomas.find(g => g.codigo == id)

    if (!idioma) {
      throw new NotFoundException()
    }

    return idioma
  }

  update(id: number, updateIdiomaDto: UpdateIdiomaDto) {
    return `This action updates a #${id} idioma`;
  }

  remove(id: string) {
    IdiomaService.idiomas = IdiomaService.idiomas.filter(g => g.codigo != id)
  }
}
