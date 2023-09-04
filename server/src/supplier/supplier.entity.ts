import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "src/products/product.entity";

@ObjectType()
export class Supplier{
    @Field()
    id:number

    @Field()
    phone:string

    @Field()
    address:string

    @Field()
    name:string

    @Field(() => Product)
    product?: Product;


}
