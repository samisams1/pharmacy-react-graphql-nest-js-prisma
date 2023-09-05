import { InputType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/categories/categories.entity';
import { Sale } from 'src/sale/sale.entity';
import { Supplier } from 'src/supplier/supplier.entity';
@InputType()
export class UpdateProductInput {
      @Field(() => Int)
      id: number;
    
      @Field()
      name: string;
    
      @Field()
      price: number;
    
      @Field()
      barCode: string;
    
      @Field()
      description: string;
    
      /*@Field(() => [Category], { nullable: true })
      categories?: Category[]; */
      
      @Field(() => [Supplier], { nullable: true })
      supplier?: Supplier[];
    
      @Field(() => Category)
      categories?: Category;
    
      @Field(() => [Sale], { nullable: true })
      sales?: Sale[];
    
      @Field()
      createdAt: Date;
    
      @Field()
      updatedAt: Date;
}
