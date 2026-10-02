import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NivelIdiomaService } from './nivel-idioma.service';
import { CreateNivelIdiomaDto } from './dto/create-nivel-idioma.dto';
import { UpdateNivelIdiomaDto } from './dto/update-nivel-idioma.dto';

@Controller('nivel-idioma')
export class NivelIdiomaController {
  constructor(private readonly nivelIdiomaService: NivelIdiomaService) {}

  @Post()
  create(@Body() createNivelIdiomaDto: CreateNivelIdiomaDto) {
    return this.nivelIdiomaService.create(createNivelIdiomaDto);
  }

  @Get()
  findAll() {
    return this.nivelIdiomaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nivelIdiomaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNivelIdiomaDto: UpdateNivelIdiomaDto) {
    return this.nivelIdiomaService.update(+id, updateNivelIdiomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nivelIdiomaService.remove(+id);
  }
}
