import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  products: Product[] = [];
  productsLoaded = new Subject<Product[]>();
  constructor() { }

  setProducts(data: Product[]) {
    console.log(data);
    this.products = data;
    this.productsLoaded.next(this.products.slice());
  }

  getProducts() {
    return this.products;
  }
}