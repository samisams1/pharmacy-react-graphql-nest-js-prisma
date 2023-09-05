import { Injectable } from '@nestjs/common';
import {  PrismaClient, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
    private prisma: PrismaClient;

    constructor() {
      this.prisma = new PrismaClient();
    }
    async findAll(): Promise<Product[]> {
      return this.prisma.product.findMany();
    }

    async findExpiredDrugs(): Promise<Product[]> {
     // const currentDate = new Date();
      return this.prisma.product.findMany({
        where: {
          expiry_date: { lte: "currentDate", } },
      });
    }
 /*   async findById(id:number):Promise<Product | null>{
      return this.prisma.product.findUnique({where:{id}})
    }
    async createProduct():Promise<Product[]>{
      return this.prisma.product.findMany();
    }
   async updateProduct(id:number,data:Prisma.ProductUpdateInput):Promise<Product | null>{
      return this.prisma.product.update({where:{id},data});
    }*/
    async deleteProduct(id:number):Promise<Product>{
      return this.prisma.product.delete({where:{id}})
    }


}
