import { IsString, IsDate, IsNotEmpty, IsNumberString } from "class-validator";
import { OrderStatusDto } from "src/order-status/dto/order-status.dto/order-status.dto";
import { OrderStatus } from "src/order-status/entity/order-status.entity/order-status.entity";
import { Product } from "src/product/entity/product.entity/product.entity";

export class OrderDto {
  @IsDate()
  dateApproved: Date;

  status: OrderStatus;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  email: string;

  @IsString()
  @IsNumberString()
  phoneNumber: string;

  products: Product[]
}
