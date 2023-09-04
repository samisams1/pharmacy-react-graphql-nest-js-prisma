import { Injectable } from '@nestjs/common';
import { Pharmacy, PrismaClient } from '@prisma/client';

@Injectable()
export class PharmacyService {
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient()
    }
    async findAll():Promise<Pharmacy[]>{
        return this.prisma.pharmacy.findMany({
            include: {
                owner: true,
              },
        });
    }
}


