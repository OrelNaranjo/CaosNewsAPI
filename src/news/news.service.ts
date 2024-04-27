import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const newNews = this.newsRepository.create(createNewsDto);
    return this.newsRepository.save(newNews);
  }

  findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  findOne(id: number): Promise<News> {
    return this.newsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    await this.newsRepository.update(id, updateNewsDto);
    return this.newsRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<void> {
    return this.newsRepository.delete(id).then(() => null);
  }
}