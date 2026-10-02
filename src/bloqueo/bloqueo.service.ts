import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBloqueoDto } from './dto/create-bloqueo.dto';
import { UpdateBloqueoDto } from './dto/update-bloqueo.dto';
import { Bloqueo } from './entities/bloqueo.entity';

@Injectable()
export class BloqueoService {
  static bloqueos:Bloqueo[] = []

  create(createBloqueoDto: CreateBloqueoDto) {
    const nuevoBloqueo = new Bloqueo
    
    nuevoBloqueo.id = BloqueoService.bloqueos.length + 1
    nuevoBloqueo.usuarioEjecutorId = createBloqueoDto.usuarioEjecutorId
    nuevoBloqueo.usuarioBloqueadoId = createBloqueoDto.usuarioBloqueadoId
    
    BloqueoService.bloqueos.push(nuevoBloqueo)

    return nuevoBloqueo.id
  }

  findAll() {
    return BloqueoService.bloqueos
  }

  findOne(id: number) {
    const bloqueo = BloqueoService.bloqueos.find(g => g.id == id)

    if (!bloqueo) {
      throw new NotFoundException()
    }

    return bloqueo
  }

  update(id: number, updateBloqueoDto: UpdateBloqueoDto) {
    return `This action updates a #${id} bloqueo`;
  }

  remove(id: number) {
    BloqueoService.bloqueos = BloqueoService.bloqueos.filter(g => g.id != id)
  }
}
