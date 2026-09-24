import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-catalog-component',
  standalone: false,
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  public categories: any[] = [];

  constructor(private readonly _catalogService: CatalogService) {
    this.categories = this._catalogService.getCategories();
  }
}
