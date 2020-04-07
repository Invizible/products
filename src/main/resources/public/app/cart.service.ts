import { Injectable } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new Map<Product, number>();
  private cartSubject = new ReplaySubject<Cart>(1);

  constructor() { }

  add(product: Product): void {
    let quantity = 1;
    if (this.cartItems.has(product)) {
      quantity = this.cartItems.get(product) + 1;
    }
    this.cartItems.set(product, quantity);
    this.cartSubject.next(new Cart(this.cartItems));
  }

  remove(product: Product): void {
    if (this.cartItems.has(product)) {
      const quantity = this.cartItems.get(product);
      if (quantity > 1) {
        this.cartItems.set(product, quantity - 1);
      } else {
        this.cartItems.delete(product);
      }

      this.cartSubject.next(new Cart(this.cartItems));
    }
  }

  update(cart: Cart) {
    this.cartItems = cart.asMap();
    this.cartSubject.next(cart);
  }

  clear(): void {
    this.update(new Cart());
  }

  get cart$(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
}
