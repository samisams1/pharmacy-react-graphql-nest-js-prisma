import { InputType, Field } from '@nestjs/graphql';
import { Product } from 'src/product/product.entity';

@InputType()
export class CreateSupplierInput {
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

  