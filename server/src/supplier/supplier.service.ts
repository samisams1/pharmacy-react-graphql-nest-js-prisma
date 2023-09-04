import { Injectable } from '@nestjs/common';
import { PrismaClient, supplier } from '@prisma/client';

@Injectable()
export class SupplierService {
    private prisma:PrismaClient;
    constructor(){
this.prisma= new PrismaClient();
    }

    async findAll():Promise<supplier[]> {
        return this.prisma.supplier.findMany({
            include:{
                product:true
            }
        });
    } 
}
