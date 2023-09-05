import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UpdatePharmacyInput } from './dto/update-pharmacy.input';
import { Pharmacy } from './pharmacy.entity';
import { PharmacyService } from './pharmacy.service';

@Resolver(()=>Pharmacy)
export class PharmacyResolver {
    constructor(private readonly pharmaciesServices:PharmacyService){}
    @Query(()=>[Pharmacy])
    async pharmacies():Promise<Pharmacy[]> {
      return this.pharmaciesServices.findAll();
    }
    async Pharmacy(@Args('id',{type:()=>Int}) id:number):Promise<Pharmacy | null>{
      return this.pharmaciesServices.findByUserId(id);
    }
   /* async createPhearmacy(input:CreatePharmacyInput):Promise<Pharmacy[]>{
       return this.pharmaciesServices.create
}*/
   async updatePharmacy(@Args('id',{type:()=>Int}) id:number,
                        @Args('data') data:UpdatePharmacyInput):Promise<Pharmacy | null>{
      return this.pharmaciesServices.update(id,data)
   }
   async  deletePharmacy(@Args('id',{type:()=>Int}) id:number) {
    return this.pharmaciesServices.deletePharmacy(id)
   }

  }