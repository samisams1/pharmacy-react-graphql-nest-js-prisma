import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePharmacyInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phoneNumber: string;
}