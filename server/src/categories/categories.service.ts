import { Injectable } from '@nestjs/common';
import { Category, Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class CategoriesService {
    private prisma: PrismaClient;

    constructor() {
      this.prisma = new PrismaClient();
    }
    async findAll(): Promise<Category[]> {
      return this.prisma.category.findMany({ include: {  products: true, }});
    }
    async getUserById(id: number): Promise<Category | null> {
      return this.prisma.category.findUnique({ where: { id } });
    }
    async createCategory(input:Prisma.CategoryCreateInput):Promise<Category | null>{
      const { name,} = input;
      const catgory = await this.prisma.category.create({data: {name,} });
      return catgory;
    }
    async updateCategory(id:number,data:Prisma.CategoryUpdateInput):Promise<Category>{
      return this.prisma.category.update({where:{id},data});
    }
    async deleteCategory(id: number): Promise<Category> {
      return this.prisma.category.delete({ where: { id } });
    }
}
