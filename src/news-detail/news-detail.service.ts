import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsDetailDto } from './dto/create-news-detail.dto';
import { UpdateNewsDetailDto } from './dto/update-news-detail.dto';
import { NewsDetail } from './entities/news-detail.entity';

@Injectable()
export class NewsDetailService {
  constructor(
    @InjectRepository(NewsDetail)
    private newsDetailRepository: Repository<NewsDetail>,
  ) {}

  async create(createNewsDetailDto: CreateNewsDetailDto): Promise<NewsDetail> {
    const newNewsDetail = this.newsDetailRepository.create(createNewsDetailDto);
    return this.newsDetailRepository.save(newNewsDetail);
  }

  findAll(): Promise<NewsDetail[]> {
    return this.newsDetailRepository.find();
  }

  findOne(id: number): Promise<NewsDetail> {
    return this.newsDetailRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNewsDetailDto: UpdateNewsDetailDto): Promise<NewsDetail> {
    await this.newsDetailRepository.update(id, updateNewsDetailDto);
    return this.newsDetailRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<void> {
    return this.newsDetailRepository.delete(id).then(() => null);
  }
}