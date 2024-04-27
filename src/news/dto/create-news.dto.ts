import { IsNotEmpty, IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;

  @IsNotEmpty()
  @IsBoolean()
  is_deleted: boolean;

  @IsNotEmpty()
  @IsBoolean()
  is_featured: boolean;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  categoryId: number;

  @IsNotEmpty()
  @IsString()
  countryId: number;

  @IsNotEmpty()
  @IsString()
  createdById: number;
}