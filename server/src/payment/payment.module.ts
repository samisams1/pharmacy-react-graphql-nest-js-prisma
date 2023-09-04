import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';

@Module({
  providers: [PaymentService, PaymentResolver]
})
export class PaymentModule {}
