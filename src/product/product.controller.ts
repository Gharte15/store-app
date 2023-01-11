import { Controller, Req, Body, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { ProductDto } from './dto/product.dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService){}

  @Post()
  async create(@Body() product: ProductDto) {
    return await this.productService.create(product);
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id) {
      return await this.productService.findById(id);
  }

  @Put('/:id')
  async update(
    @Param(':id') id, 
    @Body() product: ProductDto,
    ) {
    await this.productService.update(id, product);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.productService.delete(id);
  }

}
