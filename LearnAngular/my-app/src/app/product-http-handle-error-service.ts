import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './classes/IProduct';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductHttpHandleErrorService {
  private readonly _url = '/datasets/products.js';

  constructor(private readonly _http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  getErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        return error.error.message;
      }
      return `Mã lỗi ${error.status}: ${error.message}`;
    }
    return 'Có lỗi khi tải danh sách sản phẩm.';
  }
}
