import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto/product.dto';
import { Product } from './entity/product.entity/product.entity';
import { HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ){}

  async create(product: ProductDto): Promise<ProductDto> {
    if (product.price < 0) {
      throw new HttpException('Price cannot be negative', 
      HttpStatus.BAD_REQUEST);
    }

    if (product.weight <= 0) {
      throw new HttpException('Weight cannot be negative or zero', 
      HttpStatus.BAD_REQUEST);
    }

    if (product.description.length == 0 ||
      product.name.length == 0) {
      throw new HttpException('Product must have a name and a description', 
      HttpStatus.BAD_REQUEST);
    }

    return this.productRepository.save(product);
  }

  async findAll() {
    return this.productRepository.find({
      relations: {
        category: true,
      }
    });
  }

  async findById(id: string) {
      return await this.productRepository.findOne({
        where: {
          id,
        },
        relations: {
          category: true,
        }
      });
  }

  async update(id: number, productDto: ProductDto): Promise<void> {
    await this.productRepository.update(id, productDto);
  }

  async delete(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
