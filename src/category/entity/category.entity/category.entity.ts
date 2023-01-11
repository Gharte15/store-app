import { Categories } from "src/category/dto/category.dto/Categories";
import { Product } from "src/product/entity/product.entity/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: Categories;

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
