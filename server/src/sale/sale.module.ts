import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleResolver } from './sale.resolver';

@Module({
  providers: [SaleService, SaleResolver]
})
export class SaleModule {}
