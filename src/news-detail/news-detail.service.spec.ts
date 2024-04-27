import { Test, TestingModule } from '@nestjs/testing';
import { NewsDetailService } from './news-detail.service';

describe('NewsDetailService', () => {
  let service: NewsDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsDetailService],
    }).compile();

    service = module.get<NewsDetailService>(NewsDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
