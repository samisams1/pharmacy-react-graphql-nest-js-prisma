import { Query, Resolver } from '@nestjs/graphql';
import { Pharmacy } from './pharmacy.entity';
import { PharmacyService } from './pharmacy.service';

@Resolver(()=>Pharmacy)
export class PharmacyResolver {
    constructor(private readonly pharmaciesServices:PharmacyService){}
    @Query(()=>[Pharmacy])
    async pharmacies():Promise<Pharmacy[]> {
      return this.pharmaciesServices.findAll();
    }
}
