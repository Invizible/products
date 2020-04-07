import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: CartItem;
  @Input()
  readonly = false;

  @Output()
  cartItemChange = new EventEmitter<CartItem>();
  @Output()
  removeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(): void {
    this.removeEvent.emit();
  }

  add(): void {
    this.cartItemChange.emit(new CartItem(this.cartItem.product, this.cartItem.quantity + 1));
  }

  subtract(): void {
    this.cartItemChange.emit(new CartItem(this.cartItem.product, Math.max(0, this.cartItem.quantity - 1)));
  }
}
