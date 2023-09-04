import { Query, Resolver } from '@nestjs/graphql';
import { Sale } from './sale.entity';
import { SaleService } from './sale.service';

@Resolver(() => Sale)
@Resolver()
export class SaleResolver {
    constructor(private readonly usersService: SaleService) {}
    @Query(() => [Sale])
    async sales(): Promise<Sale[]> {
      return this.usersService.findAll();
    }
}




