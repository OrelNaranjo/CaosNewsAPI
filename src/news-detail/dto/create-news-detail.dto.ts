import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateNewsDetailDto {
  @IsNotEmpty()
  @IsString()
  comments: string;

  @IsOptional()
  @IsBoolean()
  isApproved: boolean;

  @IsNotEmpty()
  @IsString()
  newsId: number;

  @IsNotEmpty()
  @IsString()
  approvedByUserId: number;
}