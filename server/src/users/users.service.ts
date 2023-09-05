import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { MemcachedService } from '../memcached/memcached.service'

@Injectable()
export class UsersService {
  private prisma: PrismaClient
  private readonly memcachedService:MemcachedService;
 constructor(memcachedService: MemcachedService) {
    this.prisma = new PrismaClient();
    this.memcachedService = memcachedService;
  }
  async findAll(): Promise<User[]> {
    const cachedUsers = await this.memcachedService.get<User[]>('users');

    if (cachedUsers) {
      return cachedUsers;
    }
    const users = await this.prisma.user.findMany();
    await this.memcachedService.set('users', JSON.stringify(users), 3600);
    return users;
   /* return this.prisma.user.findMany({
      include:{
        pharmacies:true,
        sales:true
      }
    });*/
  }
 /* async findAll(take?: number, skip?: number): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      take,
      skip,
      include:{
        pharmacies:true,
        sales:true
      }
    });

    return users;
  } */
  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  async findOneByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }
  async createUser(input: Prisma.UserCreateInput): Promise<User> {
    {
      try {
          const { username,email, password,firstName,lastName } = input;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
          data: {
            firstName,
            lastName,
            username,
            email,
            password:hashedPassword
          },
        });
        return user;
      } /*catch (error) {
        // Handle unique constraint violation
        if (
          error.code === 'P2002' &&
          (error.meta?.target.includes('username') ||
            error.meta?.target.includes('email'))
        ) {
          throw new Error('Username or email already exists');
        }
        throw error;
      }*/
      /*
       if (error.code === 'P2002') {
          const fields: string[] = [];
  
          if (error.meta?.target.includes('email')) {
            fields.push('email');
          }
  
          if (error.meta?.target.includes('username')) {
            fields.push('username');
          }
  
          if (fields.length > 0) {
            throw new DuplicationError(fields);
          }
        }
      */
      catch (error) {
       
  
        throw error;
      }
    }
  /*  const { username,email, password } = input;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return user; */
  }
  async updateUser(id: number, data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }
  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}






