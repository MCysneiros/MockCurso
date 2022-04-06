import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { DatabaseModule } from '../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path/win32';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductsService } from '../services/products.service';
import { PurchaseService } from '../services/purchases.service';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { CustomersService } from '../services/customers.service';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    PurchasesResolver,
    CustomersResolver,
    ProductsService,
    PurchaseService,
    CustomersService,
  ],
})
export class HttpModule {}
