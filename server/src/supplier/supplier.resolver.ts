import { Query, Resolver } from '@nestjs/graphql';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';

@Resolver()
export class SupplierResolver {
    constructor(private readonly supplierServicepharmaciesServices:SupplierService){}
    @Query(()=>[Supplier])
    async suppliers():Promise<Supplier[]> {
      return this.supplierServicepharmaciesServices.findAll();
    }
}
