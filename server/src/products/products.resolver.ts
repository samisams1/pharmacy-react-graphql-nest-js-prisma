import { Resolver, Query, } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
@Resolver(()=>Product)
export class ProductsResolver {
constructor(private readonly productsService:ProductsService){}

@Query(() => [Product])
async products():Promise<Product[]>{
    return this.productsService.findAll();
 }
 @Query(() => [Product])
 async getExpiredDrugs(): Promise<Product[]> {
   return this.productsService.findExpiredDrugs();
 }

 
}
