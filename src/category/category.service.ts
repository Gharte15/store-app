import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto/category.dto';
import { Category } from './entity/category.entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ){}

  async create(product: CategoryDto): Promise<CategoryDto> {
    return this.categoryRepository.save(product);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findById(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({id});
  }

  async update(id: number, categoryDto: CategoryDto): Promise<void> {
    await this.categoryRepository.update(id, categoryDto);
  }

  async delete(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
