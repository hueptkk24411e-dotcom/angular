import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../classes/IProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  styleUrl: './service-product-image-event.component.css',
  templateUrl: './service-product-image-event.component.html',
})
export class ServiceProductImageEventComponent {
  products: Product[] = [];

  constructor(
    private readonly _service: ProductService,
    private readonly _router: Router
  ) {
    this.products = this._service.getProductsWithImages();
  }

  viewDetail(p: Product): void {
    this._router.navigate(['service-product-image-event', p.id]);
  }
}
