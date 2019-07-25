import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/products.reducer';
import { cartReducer } from './store/cart.reducer';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaxService } from './tax.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MainComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: productsReducer, cart: cartReducer })
  ],
  providers: [TaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
