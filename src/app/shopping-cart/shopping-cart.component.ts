import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { DeliveryOptionsService } from '../services/delivery-options.service';
import { OrderHistoryService } from '../services/order-history.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products;
  totalPrice = 0;
  deliveryOptions = [];
  private subscription: Subscription;
  constructor(private shoppingCartService: ShoppingCartService, private deliveryOptionsService: DeliveryOptionsService, private orderHistoryService: OrderHistoryService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.products = this.shoppingCartService.getProducts();
    this.totalPrice = this.shoppingCartService.totalPrice;
    this.subscription = this.shoppingCartService.newProduct.subscribe(
      (data) => {
        this.products = data[0];
        this.totalPrice = data[1];
      } );
      this.deliveryOptions = this.deliveryOptionsService.getDeliveryOptions();
  }

  onRemove(product) {
    this.shoppingCartService.removeProduct(product);
  }

  onAdd(product) {
    this.shoppingCartService.addProduct(product);
  }

  setDeliveryOption(option) {
    this.shoppingCartService.setDeliveryPrice(option);
  }

  submitOrder() {
    this.orderHistoryService.storeOrderHistory(this.products, this.totalPrice)
      .subscribe(
        (response) => {
          this.router.navigate(['/order-info']);
          this.shoppingCartService.removeAll();
          this.localStorageService.removeFromLocalStorage();
        },
        (error) => console.log(error)
      );
  }

}
