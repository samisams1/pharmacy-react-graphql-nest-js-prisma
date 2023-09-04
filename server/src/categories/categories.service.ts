import { Injectable } from '@nestjs/common';
import { Category, PrismaClient } from '@prisma/client';

@Injectable()
export class CategoriesService {
    private prisma: PrismaClient;

    constructor() {
      this.prisma = new PrismaClient();
    }
    async findAll(): Promise<Category[]> {
      return this.prisma.category.findMany({
        include: {
          products: true,
        },
      });
    }
}
