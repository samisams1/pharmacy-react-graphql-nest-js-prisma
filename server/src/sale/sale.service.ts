import { Injectable } from '@nestjs/common';
import {PrismaClient, Sale } from '@prisma/client';

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
}

          
 
