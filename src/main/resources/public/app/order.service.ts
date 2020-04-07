import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('api/orders', order);
  }
}
