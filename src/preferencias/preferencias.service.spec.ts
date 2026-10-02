import { Test, TestingModule } from '@nestjs/testing';
import { PreferenciasService } from './preferencias.service';

describe('PreferenciasService', () => {
  let service: PreferenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreferenciasService],
    }).compile();

    service = module.get<PreferenciasService>(PreferenciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
