import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  addToCartEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addToCartEvent.emit(this.product);
  }
}
