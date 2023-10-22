import { Test, TestingModule } from '@nestjs/testing';
import { JamController } from './jam.controller';
import { JamService } from './jam.service';

describe('JamController', () => {
  let controller: JamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JamController],
      providers: [JamService],
    }).compile();

    controller = module.get<JamController>(JamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
