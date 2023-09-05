import { InputType, Field } from '@nestjs/graphql';
import { Category } from 'src/categories/categories.entity';
import { Sale } from 'src/sale/sale.entity';
import { Supplier } from 'src/supplier/supplier.entity';
@InputType()
export class CreateProductInput {
  @Field()
  userId: number;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  barCode: string;

  @Field()
  description: string;

  @Field()
  image: string;
  
  @Field()
  expiry_date:string;

  @Field()
  status      :string;
  @Field()

  sales      :Sale;

  @Field()
  category   :Category;

  @Field()
  supplier   : Supplier;

  @Field()
  createdAt  : Date;

  @Field()
  updatedAt  : Date;

}
