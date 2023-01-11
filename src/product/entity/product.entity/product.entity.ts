import { Category } from "src/category/entity/category.entity/category.entity";
import { Order } from "src/order/entity/order.entity/order.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  weight: number;

  @ManyToOne(() => Category, category => category.products) 
  @JoinColumn()
  category: Category

  @ManyToMany(() => Order, order => order.products) 
  @JoinColumn()
  orders: Order
}
