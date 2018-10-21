import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsServiceService } from './shared/products-service.service';
import { DataStorageService } from './shared/data-storage.service';
import { FilterPipe } from './products-list/filter.pipe';
import { DropdownDirective } from './shared/dropdown.directive';
import { SortPipe } from './shared/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    FilterPipe,
    DropdownDirective,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsServiceService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
