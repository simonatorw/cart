import { createReducer, on } from '@ngrx/store';

import { add, reset, checkout } from './cart.actions';

export interface Cart {
  products: any[];
  count: number;
  salesTaxes: number;
  total: number;
}

export const initialState: Cart = {
  products: [],
  count: 0,
  salesTaxes: 0,
  total: 0
};

export const cartReducer = createReducer(initialState,
  on(add, (state, props) => {
    const products = state.products.slice();

    if (products.length) {
      const index = products.findIndex(item => item.id === props.id);

      if (index >= 0) {
        products[index].qty = products[index].qty + 1;
      } else {
        products.push(props);
      }
    } else {
      products.push(props);
    }
    return { ...state, count: state.count + 1, products };
  }),
  on(reset, state => ({ ...state, count: 0, products: [] })),
  on(checkout, state => {
    const products = state.products.slice();
    let total = 0;
    let salesTaxes = 0;

    products.forEach(item => {
      total = total + (item.qty * (item.price + item.salesTax + item.importTax));
      salesTaxes = salesTaxes + (item.qty * (item.salesTax + item.importTax));
    });
  
    return { ...state, salesTaxes, total };
  })
);