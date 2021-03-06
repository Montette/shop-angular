import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { ProductsServiceService } from '../services/products-service.service';
import { Subscription } from 'rxjs';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;
  filteredStatus = '';
  property = '';
  order = 1;

  constructor(private dataStorage: DataStorageService, private productsService: ProductsServiceService) { }

  ngOnInit() {
    this.subscription = this.productsService.productsLoaded
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
      this.products = this.productsService.getProducts();
  }

  sortItems(prop: string) {
    this.property = prop;
    this.order = this.order * (-1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
