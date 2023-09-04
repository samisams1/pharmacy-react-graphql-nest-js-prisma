import { Query, Resolver } from '@nestjs/graphql';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';

@Resolver(() => Category)
@Resolver()
export class CategoriesResolver {
    constructor(private readonly usersService: CategoriesService) {}
    @Query(() => [Category])
    async categories(): Promise<Category[]> {
      return this.usersService.findAll();
    }
}




