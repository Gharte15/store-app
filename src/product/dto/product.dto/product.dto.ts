import { IsString, IsNumber, IsDecimal, IsUUID } from 'class-validator';
import { Category } from 'src/category/entity/category.entity/category.entity';

export class ProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsDecimal()
  weight: number;

  category: Category;
}
