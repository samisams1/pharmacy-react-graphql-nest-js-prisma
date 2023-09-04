import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';
import { Pharmacy } from 'src/pharmacy/pharmacy.entity';
import { Sale } from 'src/sale/sale.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  role: UserRole;

  @Field(() => [Sale], { nullable: true })
  sales?: Sale[];

  @Field(() => [Pharmacy], { nullable: true })
  pharmacies?: Pharmacy[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}