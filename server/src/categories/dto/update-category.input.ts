import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput {
    @Field()
    name: string;
}
