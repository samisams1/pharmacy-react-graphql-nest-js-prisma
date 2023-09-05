import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '../products/product.entity'
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Sale {
  @Field(() => Int)
  id: number;
  
  @Field()
  quantity: number;

  @Field()
  totalPrice: number;

  @Field(() => [Product], { nullable: true })
  products?: Product[];


  @Field(() => User)
  saller?: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
