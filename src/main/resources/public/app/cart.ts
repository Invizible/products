import { CartItem } from './cart-item';
import { Product } from './product';

export class Cart {
  private readonly items;
  cartItems: CartItem[];
  total: number;

  constructor(items: Map<Product, number> = new Map<Product, number>()) {
    this.items = items;
    this.cartItems = Array.from(items.entries(),
        (cartItem) => new CartItem(cartItem[0], cartItem[1]));
    this.total = this.cartItems.reduce((val, item) => val += item.product.price * item.quantity, 0);
  }

  asMap(): Map<Product, number> {
    return new Map<Product, number>(this.items);
  }

  update(cartItem: CartItem): Cart {
    return new Cart(this.asMap().set(cartItem.product, cartItem.quantity))
  }

  remove(cartItem: CartItem) {
    const map = this.asMap();
    map.delete(cartItem.product);
    return new Cart(map);
  }
}
