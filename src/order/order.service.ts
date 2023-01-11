import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderStatusDto } from 'src/order-status/dto/order-status.dto/order-status.dto';
import { OrderStatus } from 'src/order-status/entity/order-status.entity/order-status.entity';
import { Repository } from 'typeorm';
import { OrderDto } from './dto/order.dto/order.dto';
import { Order } from './entity/order.entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ){}

  async create(order: OrderDto): Promise<OrderDto> {
    return this.orderRepository.save(order);
  }

  async findAll() {
    return this.orderRepository.find({
      relations: {
        status: true,
        products: true,
      }
    });
  }

  async findById(id: string) {
      return await this.orderRepository.findOne({
        where: {
          id,
        },
        relations: {
          status: true,
          products: true,
        }
      });
  }

  async update(id: number, orderDto: OrderDto): Promise<void> {
    await this.orderRepository.update(id, orderDto);
  }


  // Nie działa
  async updateStatus(id: string, newStatus: OrderStatus): Promise<Order> {
    const order = await this.orderRepository.findOneBy({id});
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    if (order.status.name === 'CANCELLED') {
      throw new BadRequestException('Cannot update cancelled order');
    }
    order.status = newStatus;
    return this.orderRepository.save(order);
  }

  async delete(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
