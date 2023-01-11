import { OrderStates } from "src/order-status/OrderStates";
import { Order } from "src/order/entity/order.entity/order.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderStatus {
  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  name: OrderStates 

  @OneToMany(() => Order, order => order.status)
  orders: Order[];
}
