import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from './product';

enum PurchaseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'Purchase status',
});

@ObjectType()
export class Purchase {
  @Field(() => ID)
  id: string;
  @Field(() => PurchaseStatus)
  status: PurchaseStatus;
  @Field()
  slug: string;
  @Field(() => Date)
  created_at: Date;
  @Field(() => Product)
  product: Product;

  productId: string;
}
