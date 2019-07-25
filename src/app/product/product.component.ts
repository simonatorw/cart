import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { add } from '../store/cart.actions';
import { Cart } from '../store/cart.reducer';
import { TaxService } from '../tax.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productInfo: any;

  constructor(
    private store: Store<{ products: Object[], cart: Cart }>,
    private taxService: TaxService
  ) {
  }

  addProduct(product) {
    product = this.taxService.calcImportTax(this.taxService.calcSalesTax(product));
    this.store.dispatch(add(product));
  }
}
