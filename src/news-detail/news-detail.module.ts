import { Module } from '@nestjs/common';
import { NewsDetailService } from './news-detail.service';
import { NewsDetailController } from './news-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsDetail } from './entities/news-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NewsDetail])],
  controllers: [NewsDetailController],
  providers: [NewsDetailService],
})
export class NewsDetailModule {}
