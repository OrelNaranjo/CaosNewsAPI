import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const newCountry = this.countriesRepository.create(createCountryDto);
    return this.countriesRepository.save(newCountry);
  }

  findAll(): Promise<Country[]> {
    return this.countriesRepository.find();
  }

  findOne(id: number): Promise<Country> {
    return this.countriesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCountryDto: UpdateCountryDto): Promise<Country> {
    await this.countriesRepository.update(id, updateCountryDto);
    return this.countriesRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<void> {
    return this.countriesRepository.delete(id).then(() => null);
  }
}