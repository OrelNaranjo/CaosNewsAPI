import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createImageDto: CreateImageDto, @UploadedFile() file: Express.Multer.File) {
    return this.imagesService.create(createImageDto, file);
  }

  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto, @UploadedFile() file: Express.Multer.File) {
    return this.imagesService.update(+id, updateImageDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}