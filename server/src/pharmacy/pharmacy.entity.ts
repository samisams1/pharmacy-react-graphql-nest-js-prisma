import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Pharmacy {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phoneNumber: string;

  @Field(() => User)
  owner?: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}