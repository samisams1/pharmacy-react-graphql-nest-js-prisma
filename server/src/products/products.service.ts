import { Injectable } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

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
          expiry_date: {
            lte: "currentDate",
          },
        },
      });
    }
}
