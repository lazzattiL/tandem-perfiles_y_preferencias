import { Module } from '@nestjs/common';
import { NivelIdiomaService } from './nivel-idioma.service';
import { NivelIdiomaController } from './nivel-idioma.controller';

@Module({
  controllers: [NivelIdiomaController],
  providers: [NivelIdiomaService],
})
export class NivelIdiomaModule {}
