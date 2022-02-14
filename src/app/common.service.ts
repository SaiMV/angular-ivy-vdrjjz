import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {
  private sentRequest = new Subject()
  private productList: Array<any> = [
    {
      id: 1,
      product: 'Chais',
      supplierId: 1,
      categoryId: 1,
      unit: '10 boxes x 20 bags',
      price: 18,
    },
    {
      id: 2,
      product: 'Chang',
      supplierId: 1,
      categoryId: 1,
      unit: '24 - 12 oz bottles',
      price: 19,
    },
    {
      id: 3,
      product: 'Aniseed Syrup',
      supplierId: 1,
      categoryId: 2,
      unit: '12 - 550 ml bottles',
      price: 10,
    },
  ];

  constructor() {}
  
  getSentRequestInst(){
    return this.sentRequest;
  }

  getProdList(): Array<any>{
    this.sentRequest.next(this.productList);
    return this.productList;
  }
}
