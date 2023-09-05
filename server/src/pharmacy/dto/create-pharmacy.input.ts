import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePharmacyInput {
    @Field()
    name: string;
  
    @Field()
    address: string;
  
    @Field()
    phoneNumber: string;

}
