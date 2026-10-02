import { Test, TestingModule } from '@nestjs/testing';
import { NivelIdiomaService } from './nivel-idioma.service';

describe('NivelIdiomaService', () => {
  let service: NivelIdiomaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NivelIdiomaService],
    }).compile();

    service = module.get<NivelIdiomaService>(NivelIdiomaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
