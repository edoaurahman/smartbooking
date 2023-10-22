import { Test, TestingModule } from '@nestjs/testing';
import { TingkatanController } from './tingkatan.controller';
import { TingkatanService } from './tingkatan.service';

describe('TingkatanController', () => {
  let controller: TingkatanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TingkatanController],
      providers: [TingkatanService],
    }).compile();

    controller = module.get<TingkatanController>(TingkatanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
