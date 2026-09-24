import { Component, signal } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductHttpHandleErrorService } from '../product-http-handle-error-service';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  styleUrl: './product-http-handle-error-service-component.css',
  templateUrl: './product-http-handle-error-service-component.html',
})
export class ProductHttpHandleErrorServiceComponent {
  products = signal<Product[]>([]);
  errMessage = signal('');

  constructor(private readonly _service: ProductHttpHandleErrorService) {}

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: data => this.products.set(data),
      error: error => this.errMessage.set(this._service.getErrorMessage(error)),
    });
  }
}

