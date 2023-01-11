import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { identity } from 'rxjs';
import { OrderStatusDto } from 'src/order-status/dto/order-status.dto/order-status.dto';
import { OrderStatus } from 'src/order-status/entity/order-status.entity/order-status.entity';
import { OrderDto } from './dto/order.dto/order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService){}

  @Post()
  async create(@Body() order: OrderDto) {
    return await this.orderService.create(order);
  }

  @Get()
  async findAll() {
    return await this.orderService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id) {
      return await this.orderService.findById(id);
  }

  @Put('/:id')
  async update(
    @Param(':id') id, 
    @Body() order: OrderDto,
    ) {
    await this.orderService.update(id, order);
  }

  // Nie działa
  @Patch('/:id/state')
  async updateStatus(
    @Param(':id') id,
    @Body() newStatus: OrderStatus,
  ) {
    return this.orderService.updateStatus(id, newStatus);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.orderService.delete(id);
  }
}
