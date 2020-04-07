import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pageable } from './pageable';
import { Product } from './product';
import { Page } from './page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(pageable: Pageable): Observable<Page<Product>> {
    const httpParams = new HttpParams()
      .set('page', pageable.page.toString())
      .set('size', pageable.size.toString());

    const options = {
      params: httpParams
    };

    return this.http.get<Page<Product>>('api/products', options)
  }
}
