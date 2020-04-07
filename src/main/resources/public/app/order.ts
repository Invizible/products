import { PaymentInfo } from './payment-info';
import { OrderItem } from './order-item';

export class Order {
  items: OrderItem[];
  paymentInfo: PaymentInfo;

  constructor(items: OrderItem[], paymentInfo: PaymentInfo) {
    this.paymentInfo = paymentInfo;
    this.items = items;
  }
}
