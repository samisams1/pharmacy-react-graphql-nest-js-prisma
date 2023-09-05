import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateSupplierInput {
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

}

  