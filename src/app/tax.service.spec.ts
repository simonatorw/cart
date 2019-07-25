import { TestBed } from '@angular/core/testing';

import { TaxService } from './tax.service';

describe('TaxService', () => {
  let service : TaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxService]
    });
    service = TestBed.get(TaxService);  
  });


  it('should calculate correct sales tax', () => {
    expect(service.calcSalesTax({ qty: 1, desc: 'Walkman', price: 99.99, sales: true, import: false }).salesTax).toEqual(10);
  });

  it('should not return sales tax for exempt items', () => {
    expect(service.calcSalesTax({ qty: 1, desc: '16lb bag of Skittles', price: 16.00, sales: false, import: false }).salesTax).toEqual(0);
  });
  
  it('should return correct import tax', () => {
    expect(service.calcImportTax({ qty: 1, desc: 'Imported bag of Vanilla-Hazelnut Coffee', price: 11.00, sales: false, import: true }).importTax).toEqual(.55);
  });
  
  it('should return no import tax for non-imports', () => {
    expect(service.calcImportTax({ qty: 1, desc: 'Walkman', price: 99.99, sales: true, import: false }).importTax).toEqual(0);
  });
});
