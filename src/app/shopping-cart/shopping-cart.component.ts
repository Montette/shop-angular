import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products;
  totalPrice = 0;
  private subscription: Subscription;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products = this.shoppingCartService.getProducts();
    console.log(this.products);
    this.totalPrice = this.shoppingCartService.totalPrice;
    this.subscription = this.shoppingCartService.newProduct.subscribe(
      (data) => {
        console.log(data);
        this.products = data[0];
        this.totalPrice = data[1];
      } );
      // this.subscription = this.shoppingCartService.newPrice.subscribe(
      //   (price) => this.totalPrice = price );
  
  }

  onRemove(product) {
    console.log(product);
    this.shoppingCartService.removeProduct(product);
  }

  onAdd(product) {
    this.shoppingCartService.addProduct(product);
  }

}
