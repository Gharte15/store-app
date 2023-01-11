import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderStatusDto } from './dto/order-status.dto/order-status.dto';
import { OrderStatus } from './entity/order-status.entity/order-status.entity';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectRepository(OrderStatus)
    private orderStatusRepository: Repository<OrderStatus>
  ){}

  async create(orderStatus: OrderStatusDto): Promise<OrderStatusDto> {
    return this.orderStatusRepository.save(orderStatus);
  }

  async findAll() {
    return this.orderStatusRepository.find();
  }

  async findById(id: string) {
      return await this.orderStatusRepository.findOneBy({id});
  }

  async update(id: number, productDto: OrderStatusDto): Promise<void> {
    await this.orderStatusRepository.update(id, productDto);
  }

  async delete(id: string): Promise<void> {
    await this.orderStatusRepository.delete(id);
  }
}

