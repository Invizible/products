import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../cart-item';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  @Input()
  cart: Cart;
  @Input()
  readonly = false;

  @Output()
  cartChange = new EventEmitter<Cart>();

  constructor() { }

  ngOnInit(): void {
  }

  cartItemChange(cartItem: CartItem) {
    this.cartChange.emit(this.cart.update(cartItem));
  }

  removeCartItem(cartItem: CartItem) {
    this.cartChange.emit(this.cart.remove(cartItem))
  }

  trackByFn(index, item: CartItem) {
    return item.product.id;
  }
}
