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
import { ProductsServiceService } from './services/products-service.service';
import { DataStorageService } from './services/data-storage.service';
import { FilterPipe } from './pipes/filter.pipe';
import { DropdownDirective } from './directives/dropdown.directive';
import { SortPipe } from './pipes/sort.pipe';
import { StorageServiceModule } from 'angular-webstorage-service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderInfoComponent } from './order-info/order-info.component';

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
    SortPipe,
    OrderHistoryComponent,
    OrderInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [ProductsServiceService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
