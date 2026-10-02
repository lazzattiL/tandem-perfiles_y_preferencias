import { Injectable } from '@nestjs/common';
import { Pais } from "./entities/pais.entity";

@Injectable()
export class PersonaService {
  static paises:Pais[] = [{id: 1, nombre: "Argentina"}, {id: 2, nombre: "EE.UU."}, {id: 3, nombre: "Alemania"}]

  findAll() {
    return `This action returns all persona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}