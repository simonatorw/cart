import { createAction, props } from '@ngrx/store';

export const add = createAction('[Product Component] Add Product', props<{ id: number }>());
export const reset = createAction('[Cart Component] Complete');
export const checkout = createAction('[Main Component] Checkout');