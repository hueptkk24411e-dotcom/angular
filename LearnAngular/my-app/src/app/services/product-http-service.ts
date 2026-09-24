import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductHttpService {
  private readonly _url = '/datasets/products.js';

  constructor(private readonly _http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url);
  }
}
