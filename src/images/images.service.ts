import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
  ) { }

  async create(createImageDto: CreateImageDto, file: Express.Multer.File): Promise<Image> {
    const imageDto = { ...createImageDto, path: file.path };
    const newImage = this.imagesRepository.create(imageDto);
    return this.imagesRepository.save(newImage);
  }

  findAll(): Promise<Image[]> {
    return this.imagesRepository.find();
  }

  findOne(id: number): Promise<Image> {
    return this.imagesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateImageDto: UpdateImageDto, file: Express.Multer.File): Promise<Image> {
    const imageDto = { ...updateImageDto, path: file.path };
    await this.imagesRepository.update(id, imageDto);
    return this.imagesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.imagesRepository.delete(id);
    return null;
  }
}

MulterModule.register({
  storage: diskStorage({
    destination: './uploads',
    filename: (_req, file, cb) => {
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
      return cb(null, `${randomName}${extname(file.originalname)}`)
    }
  })
})