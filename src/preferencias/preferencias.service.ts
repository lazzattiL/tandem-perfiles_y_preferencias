import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { Preferencia } from './entities/preferencia.entity';

@Injectable()
export class PreferenciasService {
  static preferencias:Preferencia[] = []

  create(createPreferenciaDto: CreatePreferenciaDto) {
    const nuevaPreferencia = new Preferencia
    
    nuevaPreferencia.id = PreferenciasService.preferencias.length + 1
    nuevaPreferencia.posiblesContactos = createPreferenciaDto.posiblesContactos
    nuevaPreferencia.limiteConversacionesActivas = createPreferenciaDto.limiteConversacionesActivas
    nuevaPreferencia.noMolestar = createPreferenciaDto.noMolestar

    PreferenciasService.preferencias.push(nuevaPreferencia)

    return 
  }

  findAll() {
    return PreferenciasService.preferencias
  }

  findOne(id: number) {
    const preferencia = PreferenciasService.preferencias.find(p => p.id == id)

    if (!preferencia) {
      throw new NotFoundException()
    }

    return preferencia
  }

  update(id: number, updatePreferenciaDto: UpdatePreferenciaDto) {
    const preferencia = PreferenciasService.preferencias.find(p => p.id == id)
    
    if (!preferencia) {
      throw new NotFoundException()
    }

    if (updatePreferenciaDto.posiblesContactos) {
      preferencia.posiblesContactos = updatePreferenciaDto.posiblesContactos
    }

    if (updatePreferenciaDto.limiteConversacionesActivas) {
      preferencia.limiteConversacionesActivas = updatePreferenciaDto.limiteConversacionesActivas
    }

    if (updatePreferenciaDto.noMolestar) {
      preferencia.noMolestar = updatePreferenciaDto.noMolestar
    }

    return preferencia
  }

  remove(id: number) {
    PreferenciasService.preferencias = PreferenciasService.preferencias.filter(p => p.id != id)
  }
}
