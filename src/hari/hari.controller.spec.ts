import { Test, TestingModule } from '@nestjs/testing';
import { HariController } from './hari.controller';
import { HariService } from './hari.service';

describe('HariController', () => {
  let controller: HariController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HariController],
      providers: [HariService],
    }).compile();

    controller = module.get<HariController>(HariController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
