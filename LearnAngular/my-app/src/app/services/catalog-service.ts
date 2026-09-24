import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  datas: any[] = [
    {
      Cateid: 'cate1',
      CateName: 'Nước ngọt',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'https://bizweb.dktcdn.net/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg?v=1670317796997' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznPAynR2wP2JdDQfUHal9X3Q4Pnu91mSaZAmobSgtAA&s' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/3226/76520/bhx/nuoc-tang-luc-sting-dau-pet-330ml_202509291516185862.jpg' },
        { ProductId: 'p4', ProductName: '7up', Price: 12, Image: 'https://bizweb.dktcdn.net/100/514/431/products/nuoc-ngot-7-up-lon-330ml-202312252102017018.jpg?v=1716431338217' },
        { ProductId: 'p5', ProductName: 'Aqua', Price: 10, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZlp1VcVYJMDKdboCJAJpnuON6aevRvbq1hQQLgfGrCPFpTusz5Rd1Lsv&s=10' },
        { ProductId: 'p6', ProductName: 'Lavi', Price: 9, Image: 'https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/nuoc-lavi-pet-350ml-1a4fb3a8-e744-49ac-b92d-9237f2c88c5a.jpg?v=1670311850390' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p7', ProductName: 'Heleiken', Price: 500, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPr05j8JtzKZr-pItC2KDo2JJTekvd863m9a0fFqmdGw&s' },
        { ProductId: 'p8', ProductName: '333', Price: 400, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwx9IDl_AmZqeVlnKRLex70GvAoqhhYtsw8RYbf5I_uA&s=10' },
        { ProductId: 'p9', ProductName: 'Saigon', Price: 600, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3rVRuFzxUKtgOcMAs7ARmzsMpRgMNfce3tjUhTWISg&s=10' },
      ],
    },
  ];

  getCategories(): any[] {
    return this.datas;
  }
}
