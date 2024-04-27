import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsDetailService } from './news-detail.service';
import { CreateNewsDetailDto } from './dto/create-news-detail.dto';
import { UpdateNewsDetailDto } from './dto/update-news-detail.dto';

@Controller('news-detail')
export class NewsDetailController {
  constructor(private readonly newsDetailService: NewsDetailService) {}

  @Post()
  create(@Body() createNewsDetailDto: CreateNewsDetailDto) {
    return this.newsDetailService.create(createNewsDetailDto);
  }

  @Get()
  findAll() {
    return this.newsDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDetailDto: UpdateNewsDetailDto) {
    return this.newsDetailService.update(+id, updateNewsDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsDetailService.remove(+id);
  }
}
