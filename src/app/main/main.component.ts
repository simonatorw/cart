import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cart } from '../store/cart.reducer'; 
import { checkout } from '../store/cart.actions';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  products$: Observable<any[]>;
  cart$: Observable<number>;

  constructor(private store: Store<{ products: any[], cart: Cart }>) {
    this.products$ = store.pipe(select('products'));
    this.cart$ = store.pipe(select(state => state.cart.count));
  }

  goCart() {
    this.store.dispatch(checkout());
  }
}
