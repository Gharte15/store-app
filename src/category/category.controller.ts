import { Controller, Body, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto/category.dto';


@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService){}

  @Post()
  async create(@Body() category: CategoryDto) {
    return await this.categoryService.create(category);
  }

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id) {
      return await this.categoryService.findById(id);
  }

  @Put('/:id')
  async update(
    @Param(':id') id, 
    @Body() category: CategoryDto,
    ) {
    await this.categoryService.update(id, category);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.categoryService.delete(id);
  }
}
