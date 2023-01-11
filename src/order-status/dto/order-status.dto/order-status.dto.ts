import { IsEnum } from "class-validator";
import { OrderStates } from "src/order-status/OrderStates";

export class OrderStatusDto {
  @IsEnum(OrderStates)
  name: OrderStates
}
