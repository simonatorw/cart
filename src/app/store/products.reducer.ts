import { createReducer } from '@ngrx/store';

export const initialState = [
  { id: 0, qty: 1, desc: '16lb bag of Skittles', price: 16.00, sales: false, import: false },
  { id: 1, qty: 1, desc: 'Walkman', price: 99.99, sales: true, import: false },
  { id: 2, qty: 1, desc: 'Bag of microwave Popcorn', price: .99, sales: false, import: false },
  { id: 3, qty: 1, desc: 'Imported bag of Vanilla-Hazelnut Coffee', price: 11.00, sales: false, import: true },
  { id: 4, qty: 1, desc: 'Imported Vespa', price: 15001.25, sales: true, import: true },
  { id: 5, qty: 1, desc: 'Imported crate of Almond Snickers', price: 75.99, sales: false, import: true },
  { id: 6, qty: 1, desc: 'Discman', price: 55.00, sales: true, import: false },
  { id: 7, qty: 1, desc: 'Imported Bottle of Wine', price: 10.00, sales: true, import: true },
  { id: 8, qty: 1, desc: '300# bag of Fair-Trade Coffee', price: 997.99, sales: false, import: false }
];

export const productsReducer = createReducer(initialState
);