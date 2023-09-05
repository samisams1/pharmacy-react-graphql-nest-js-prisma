import { Injectable } from '@nestjs/common';
import { Pharmacy, Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PharmacyService {
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient()
    }
    async findAll():Promise<Pharmacy[]>{
        return this.prisma.pharmacy.findMany({
            include: {  owner: true, }  });
    }
    async findByUserId(id:number):Promise<Pharmacy | null>{
     return  this.prisma.pharmacy.findUnique({ where: { id } });
    }
   /* async createPharmacy():Promise<Pharmacy>{
     return this.prisma.pharmacy.create();
    }*/
    async update(id:number,data:Prisma.PharmacyUpdateInput):Promise<Pharmacy>{
        return this.prisma.pharmacy.update({where:{id},data});
    }
    async deletePharmacy(id:number):Promise<Pharmacy>{
        return this.prisma.pharmacy.delete({where:{id}});
    }
}


