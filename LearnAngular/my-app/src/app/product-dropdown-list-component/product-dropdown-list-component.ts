import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-dropdown-list-component',
  standalone: false,
  styleUrl: './product-dropdown-list-component.css',
  templateUrl: './product-dropdown-list-component.html',
})
export class ProductDropdownListComponent {
  products: Product[] = [
    { id: 1, name: 'Coca', price: 15, image_link: 'https://bizweb.dktcdn.net/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg?v=1670317796997' },
    { id: 2, name: 'Pepsi', price: 15, image_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznPAynR2wP2JdDQfUHal9X3Q4Pnu91mSaZAmobSgtAA&s' },
    { id: 3, name: '7up', price: 12, image_link: 'https://bizweb.dktcdn.net/100/514/431/products/nuoc-ngot-7-up-lon-330ml-202312252102017018.jpg?v=1716431338217' },
    { id: 4, name: 'Aqua', price: 10, image_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZlp1VcVYJMDKdboCJAJpnuON6aevRvbq1hQQLgfGrCPFpTusz5Rd1Lsv&s=10' },
    { id: 5, name: 'Lavi', price: 9, image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/nuoc-lavi-pet-350ml-1a4fb3a8-e744-49ac-b92d-9237f2c88c5a.jpg?v=1670311850390' },
  ];
}
  