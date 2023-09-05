import { Module } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product-input';
import { UpdateProductInput } from './dto/update-product-input';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  providers: [ProductsResolver, ProductsService,CreateProductInput,UpdateProductInput],
  exports:[ProductsService]
})
export class ProductsModule {}
