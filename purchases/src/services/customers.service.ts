import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateCustomerParams {
  authUserID: string;
}
@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}
  listAllProducts() {
    return this.prisma.product.findMany();
  }

  getCustomerByAuthUserId(authUserID: string) {
    return this.prisma.customer.findUnique({
      where: {
        authUserID,
      },
    });
  }

  async createCustomer({ authUserID }: CreateCustomerParams) {
    return this.prisma.customer.create({
      data: {
        authUserID,
      },
    });
  }
}
