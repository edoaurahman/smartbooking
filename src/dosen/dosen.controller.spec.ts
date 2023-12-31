import { Test, TestingModule } from '@nestjs/testing';
import { DosenController } from './dosen.controller';
import { DosenService } from './dosen.service';

describe('DosenController', () => {
  let controller: DosenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DosenController],
      providers: [DosenService],
    }).compile();

    controller = module.get<DosenController>(DosenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
