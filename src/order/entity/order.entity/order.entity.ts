import { Category } from "src/category/entity/category.entity/category.entity";
import { OrderStatus } from "src/order-status/entity/order-status.entity/order-status.entity";
import { Product } from "src/product/entity/product.entity/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'date', nullable: true })
  dateApproved: Date;

  @ManyToOne(() => OrderStatus, status => status.orders) 
  @JoinColumn()
  status: OrderStatus

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[]
}
