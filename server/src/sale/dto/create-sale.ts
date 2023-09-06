import { InputType, Field } from '@nestjs/graphql';
import { Product } from 'src/products/product.entity';

@InputType()
export class CreateSaleInput {
  @Field()
  userId: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  lastName: string;

  @Field()
  productId: number;
  
  @Field()
  product:Product;
}