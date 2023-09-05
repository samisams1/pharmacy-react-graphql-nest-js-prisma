import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { SaleModule } from './sale/sale.module';
import { SupplierModule } from './supplier/supplier.module';
import { NotificationModule } from './notification/notification.module';
import { NotificationService } from './notification/notification.service';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    PharmacyModule,
    SaleModule,
    SupplierModule,
    NotificationModule,
    ProductsModule
  ],
  controllers: [],
  providers: [PrismaService,NotificationService],
})
export class AppModule {}
