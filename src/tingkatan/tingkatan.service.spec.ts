import { Test, TestingModule } from '@nestjs/testing';
import { TingkatanService } from './tingkatan.service';

describe('TingkatanService', () => {
  let service: TingkatanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TingkatanService],
    }).compile();

    service = module.get<TingkatanService>(TingkatanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
