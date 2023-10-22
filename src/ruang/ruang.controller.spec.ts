import { Test, TestingModule } from '@nestjs/testing';
import { RuangController } from './ruang.controller';
import { RuangService } from './ruang.service';

describe('RuangController', () => {
  let controller: RuangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuangController],
      providers: [RuangService],
    }).compile();

    controller = module.get<RuangController>(RuangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
