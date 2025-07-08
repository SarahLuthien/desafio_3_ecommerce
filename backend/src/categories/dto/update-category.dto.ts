import { IsString, IsOptional, IsUrl } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}
