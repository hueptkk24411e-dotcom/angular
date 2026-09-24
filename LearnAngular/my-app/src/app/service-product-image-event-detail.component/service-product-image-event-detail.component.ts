import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../classes/IProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  styleUrl: './service-product-image-event-detail.component.css',
  templateUrl: './service-product-image-event-detail.component.html',
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct?: Product;

  constructor(
    private  _activatedRoute: ActivatedRoute,
    private  _router: Router,
    private  _service: ProductService
  ) {
    this._activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._service.getProductDetail(id);
      }
    });
  }

  goBack(): void {
    this._router.navigate(['service-product-image-event']);
  }
}
