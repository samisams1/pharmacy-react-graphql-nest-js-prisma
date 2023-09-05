import { Injectable } from '@nestjs/common';
import {Prisma, PrismaClient, Sale } from '@prisma/client';

@Injectable()
export class SaleService {
private prisma = new PrismaClient;
constructor(){
    this.prisma = new PrismaClient();
}
async  findAll():Promise<Sale[]>{
    return this.prisma.sale.findMany({
        include: {
            user: {
              include: {
                sales: {
                  include :{
                    products:true
                }
                },
              },
              
            },
          },
    },
    );
}
async findById(id:number):Promise<Sale  | null>{
  return this.prisma.sale.findUnique({where:{id}})
}
async createSale(id:number):Promise<Sale  | null>{
  return this.prisma.sale.findUnique({where:{id}})
}
async updateSale(id:number,data:Prisma.SaleUpdateInput):Promise<Sale  | null>{
  return this.prisma.sale.update({where:{id},data})
}
async deleteSale(id:number):Promise<Sale  | null>{
  return this.prisma.sale.delete({where:{id}})
}
}

          
 
