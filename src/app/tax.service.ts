import { Injectable } from '@angular/core';

@Injectable()
export class TaxService {

  constructor() { }

  calcSalesTax(item) {
    if (item.sales) {
      const salesTax = .1 * item.price;
      item.salesTax = Math.ceil(salesTax * 20)/20;
    } else {
      item.salesTax = 0;
    }
  
    return item;
  }
  
  calcImportTax(item) {
    if (item.import) {
      const importTax = .05 * item.price;
      item.importTax = Math.ceil(importTax * 20)/20;
    } else {
      item.importTax = 0;
    }
  
    return item;
  }
}
