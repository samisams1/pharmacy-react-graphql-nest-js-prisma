import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { comparePasswords, hashPassword } from '../utils/password.utils';
//import { comparePasswords, hashPassword, } from '../utils/password.utils';
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
      console.log(cachedUsers);
    }
    const users = await this.prisma.user.findMany({
      include:{
        pharmacies:true,
        sales:true
      }
    });
    await this.memcachedService.set('users', users, 3600);
    return users;
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
 async changePassword(userId: number, currentPassword: string, newPassword: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordCorrect = await comparePasswords(currentPassword, user.password);
    if (!isPasswordCorrect) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await hashPassword(newPassword);
    
    const updatedUser = await this.prisma.user.update({ where: { id: userId },data: {
      password: hashedPassword,
      resetToken: null, // Assuming you want to reset the token after a successful password change
    }, });
    return updatedUser;
  }
 /*async forgotPassword(email: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = generatePasswordResetToken();
    // Save the resetToken to the user entity in the database
    await this.prisma.user.update({ where: { id: user.id }, data: { resetToken } });

    // Send the password reset email with the resetToken
    await sendPasswordResetEmail(email, resetToken);
  }

  async resetPassword(token: string , newPassword: string): Promise<User > {
    const user = await this.prisma.user.findUnique({ where: { resetToken: token } });
    if (!user) {
      throw new Error('Invalid or expired token');
    }

    const hashedPassword = await hashPassword(newPassword);

    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword, resetToken: null },
    });

    return updatedUser;
  } */
}






