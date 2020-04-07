import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pageable } from '../pageable';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  pageNumber = 0;
  totalPages = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  prevPage(): void {
    this.pageNumber = Math.max(0, this.pageNumber - 1);
    this.loadProducts();
  }

  nextPage(): void {
    this.pageNumber = this.pageNumber + 1;
    this.loadProducts();
  }

  addToCart(product: Product): void {
    this.cartService.add(product);
  }

  trackByFn(index, product: Product) {
    return product.id;
  }

  private loadProducts(): void {
    this.products$ = this.productService.getProducts(new Pageable(this.pageNumber, 6)).pipe(
      tap((page) => this.totalPages = page.totalPages),
      map((page) => page.content)
    );
  }
}
