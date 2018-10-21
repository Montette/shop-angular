import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { Subject } from 'rxjs';
import { DeliveryOptionsService } from './delivery-options.service';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private products = [];
  newProduct = new Subject();
  deliveryPrice = 5;
  totalPrice = 0;

  constructor(private deliveryService: DeliveryOptionsService, private localStorageService: LocalStorageService) { }

  getProducts() {
    return this.products;
   }

   addProduct(product) {
    const index = this.products.findIndex(prod => prod.id === product.id);
    if (index === -1) {
      product.amount = 1;
    this.products.push(product);
    } else {
      this.products[index].amount += 1;
    }
    this.calculatePrice();
   }

   removeProduct(product) {
    const index = this.products.findIndex(prod => prod.id === product.id);
    if (this.products[index].amount === 1) {
      this.products.splice(index, 1);
    } else {
      this.products[index].amount -= 1;
    }
    this.calculatePrice();
   }

   setDeliveryPrice(option) {
    this.deliveryPrice = this.deliveryService.getDeliveryOptions().filter(opt => opt.name === option.name)[0].price;
    this.calculatePrice();
   }

   calculatePrice() {
     this.totalPrice = this.products.reduce((a, b) => {
       return a + b.price * b.amount;
     }, 0 ) + this.deliveryPrice;
     this.localStorageService.storeOnLocalStorage(this.products);
     this.newProduct.next([this.products, this.totalPrice]);
   }

   loadFromLocalStorage() {
    this.products = this.localStorageService.getFromLocalStorage();
    this.calculatePrice();
   }
}
