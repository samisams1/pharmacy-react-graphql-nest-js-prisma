import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => Category)
@Resolver()
export class CategoriesResolver {
    constructor(private readonly categoryService: CategoriesService) {}
//ategory  resolver
    @Query(() => [Category])
    async categories(): Promise<Category[]> {
      return this.categoryService.findAll();
    }  
  @Query(() => Category, { nullable: true })
  async category(@Args('id', { type: () => Int }) id: number): Promise<Category | null> {
    return this.categoryService.getUserById(id);
  }
  /*@Mutation(()=>Category)
  async createCategory(@Args('id',{type:()=>Int}) input:CreateCategoryInput):Promise<Category[]>{
    const
    return this.categoryService.createCategory();
  }*/
  @Mutation(()=>Category)
  async updateCategory(
  @Args('id',{type:()=>Int}) id:number,
  @Args('data') data:UpdateCategoryInput):Promise<Category>{
    return this.categoryService.updateCategory(id,data);
  }
  @Mutation(()=>Category)
  async deleteCategory(@Args('id',{type:()=>Int}) id:number):Promise<Category>{
    return this.categoryService.deleteCategory(id)
  }
}




