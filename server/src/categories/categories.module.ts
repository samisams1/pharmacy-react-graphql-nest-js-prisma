import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';

@Module({
  providers: [CategoriesService, CategoriesResolver],
  exports:[CategoriesService]
})
export class CategoriesModule {}
