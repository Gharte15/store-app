import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { databaseConfig } from './database.config';
import { OrderModule } from './order/order.module';
import { OrderStatusModule } from './order-status/order-status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    ProductModule, 
    CategoryModule, 
    OrderModule, 
    OrderStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
