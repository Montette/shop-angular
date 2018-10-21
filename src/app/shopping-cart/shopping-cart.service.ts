import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { Subject } from 'rxjs';
import { DeliveryOptionsService } from './delivery-options.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private products = [];
  newProduct = new Subject();
  // newPrice = new Subject();
  deliveryPrice = 5;
  totalPrice = 0;
    constructor(private deliveryService: DeliveryOptionsService) { }
  
   getProducts() {
    return this.products;
   }

   addProduct(product) {
    // product.amount = 0; 
    const index = this.products.findIndex(prod => prod.id === product.id);
    if (index === -1) {
      product.amount = 1;
    this.products.push(product);
    } else {
      this.products[index].amount += 1;
    }
    // this.products.push(product);
    this.calculatePrice();
    // this.newProduct.next([this.products, this.totalPrice]);
   }

   removeProduct(product) {
    const index = this.products.findIndex(prod => prod.id === product.id);
    if (this.products[index].amount === 1) {
      this.products.splice(index, 1);
    } else {
      this.products[index].amount -= 1;
    }
    this.calculatePrice();
    //  this.newProduct.next([this.products, this.totalPrice]);
   }

   setDeliveryPrice(option) {
     
    this.deliveryPrice = this.deliveryService.getDeliveryOptions().filter(opt => opt.name === option.name)[0].price;
    console.log(this.deliveryPrice);
    this.calculatePrice();
   }

   calculatePrice() {
     this.totalPrice = this.products.reduce((a, b) => {
       return a + b.price * b.amount;
     }, 0 ) + this.deliveryPrice;
     this.newProduct.next([this.products, this.totalPrice]);
    //  this.newPrice.next(this.totalPrice);
     
   }
}
