import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderStatusDto } from './dto/order-status.dto/order-status.dto';
import { OrderStatusService } from './order-status.service';

@Controller('status')
export class OrderStatusController {
  constructor(private orderStatusService: OrderStatusService){}

  @Post()
  async create(@Body() orderStatus: OrderStatusDto) {
    return await this.orderStatusService.create(orderStatus);
  }

  @Get()
  async findAll() {
    return await this.orderStatusService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id) {
      return await this.orderStatusService.findById(id);
  }

  @Put('/:id')
  async update(
    @Param(':id') id, 
    @Body() orderStatus: OrderStatusDto,
    ) {
    await this.orderStatusService.update(id, orderStatus);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.orderStatusService.delete(id);
  }
}
