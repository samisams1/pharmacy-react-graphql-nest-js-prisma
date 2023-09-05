import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
//import { CreateSupplierInput } from './dto/create-supplier';
import { UpdateSupplierInput } from './dto/update-supplier';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';

@Resolver()
export class SupplierResolver {
    constructor(private readonly supplierServices:SupplierService){}
    @Query(()=>[Supplier])
    async suppliers():Promise<Supplier[]> {
      return this.supplierServices.findAll();
    }
    @Query(() => Supplier, { nullable: true })
    async supplier(@Args('id', { type: () => Int }) id: number): Promise<Supplier | null> {
      return this.supplierServices.getUserById(id);
    }
   /* @Mutation(()=>[Supplier])
    async createSupplier(createSupplierInput:CreateSupplierInput):Promise<Supplier>{
      return this.supplierServices.createsupplier(createSupplierInput);
    }*/
    @Mutation(() => [Supplier])
    async updateSupplier(
      @Args('id', { type: () => Int }) id: number,
      @Args('data') data: UpdateSupplierInput,
    ): Promise<Supplier> {
      return this.supplierServices.udateSupplier(id, data);
    }
    @Mutation(()=>[Supplier])
   async deleteSupplier (@Args('id',{type:()=>Int})id:number):Promise<Supplier>  {
    return this.supplierServices.deleteSupplier(id)
   }
}



