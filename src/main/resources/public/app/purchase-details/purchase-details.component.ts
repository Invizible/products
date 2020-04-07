import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Cart } from '../cart';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseDetailsComponent implements OnInit, OnDestroy {

  cart$: Observable<Cart>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }

  ngOnDestroy(): void {
    this.cartService.clear();
  }
}
