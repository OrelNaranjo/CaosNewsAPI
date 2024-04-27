import { Test, TestingModule } from '@nestjs/testing';
import { NewsDetailController } from './news-detail.controller';
import { NewsDetailService } from './news-detail.service';

describe('NewsDetailController', () => {
  let controller: NewsDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsDetailController],
      providers: [NewsDetailService],
    }).compile();

    controller = module.get<NewsDetailController>(NewsDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
