import { Test, TestingModule } from '@nestjs/testing';
import { RuangService } from './ruang.service';

describe('RuangService', () => {
  let service: RuangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RuangService],
    }).compile();

    service = module.get<RuangService>(RuangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
