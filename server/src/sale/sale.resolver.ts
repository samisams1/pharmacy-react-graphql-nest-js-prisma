import {  Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
//import { UpdateSaleInput } from './dto/update-sale';
import { Sale } from './sale.entity';
import { SaleService } from './sale.service';

@Resolver(() => Sale)
@Resolver()
export class SaleResolver {
    constructor(private readonly salesService: SaleService) {}
    @Query(() => [Sale])
    async sales(): Promise<Sale[]> {
      return this.salesService.findAll();
    }
    @Query(() => Sale, { nullable: true })
    async sale(@Args('id', { type: () => Int }) id: number): Promise<Sale | null> {
      return this.salesService.findById(id);
    }
 /*  @Mutation(()=>[Sale])
    async updateSale(@Args('id',{type:()=>Int}) id:number,
                     @Args('id') data:UpdateSaleInput):Promise<Sale | null>{
      return this.salesService.updateSale(id,data);
    }  */
  /*  @Mutation(()=>[Sale])
    async  updateSale(@Args('id',{type:()=>Int}) id:number,
                      @Args('data') data:UpdateSaleInput):Promise<Sale | null>{
      return this.salesService.updateSale(id,data)
    }*/
    @Mutation(()=>[Sale])
    async deleteSale(@Args('id') id:number):Promise<Sale | null>{
      return this.salesService.deleteSale(id);
    } 
}




