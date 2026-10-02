import { Test, TestingModule } from '@nestjs/testing';
import { NivelIdiomaController } from './nivel-idioma.controller';
import { NivelIdiomaService } from './nivel-idioma.service';

describe('NivelIdiomaController', () => {
  let controller: NivelIdiomaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NivelIdiomaController],
      providers: [NivelIdiomaService],
    }).compile();

    controller = module.get<NivelIdiomaController>(NivelIdiomaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
