import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, supplier, } from '@prisma/client';

@Injectable()
export class SupplierService {
    private prisma:PrismaClient;
    constructor(){
this.prisma= new PrismaClient();
    }
async findAll():Promise<supplier[]> {
        return this.prisma.supplier.findMany({ include:{  product:true } });
    } 
async getUserById(id: number): Promise<supplier | null> {
    return this.prisma.supplier.findUnique({ where: { id } });
  }
async createsupplier(input: Prisma.supplierCreateInput): Promise<supplier> {  
    const { name,phone,address,product,userId} = input;
        const supplierData = await this.prisma.supplier.create({
          data: {name,phone,address,userId,product,
          },
     });
        return supplierData;
}
async udateSupplier(id:number,data:Prisma.supplierUpdateInput):Promise<supplier>{
    return this.prisma.supplier.update({where:{id},data});
}
async deleteSupplier(id:number):Promise<supplier>{
    return this.prisma.supplier.delete({where:{id}});
}
}
