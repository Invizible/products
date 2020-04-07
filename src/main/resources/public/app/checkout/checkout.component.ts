import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { PaymentInfo } from '../payment-info';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Order } from '../order';
import { map, switchMap, take } from 'rxjs/operators';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {

  cart$: Observable<Cart>;
  paymentInfo = new PaymentInfo();

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }

  cartChange(cart: Cart) {
    this.cartService.update(cart);
  }

  submitPurchase(paymentInfo: PaymentInfo): void {
    this.cart$.pipe(
      take(1),
      map((cart) => cart.cartItems.map(item => new OrderItem(item.product.id, item.quantity))),
      map((orderItems) => new Order(orderItems, paymentInfo)),
      switchMap((order) => this.orderService.saveOrder(order))
    ).subscribe(() => this.router.navigate(['/purchase-details']));
  }
}
