import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const grollmus = data
    return { grollmus };
  }

  genId(products: any): any {
    if (products.length > 0) {
      return String(Math.max(...products.map((product: any) => parseInt(product.id))) + 1)
    } else {
      return 1
    }
  }

}
