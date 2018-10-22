import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http: Http, private shoppingCartService: ShoppingCartService) { }
  historyItem: {};
  historyOrder;
  fetchOrderHistory() {
    return this.http.get('https://ng-shop-101bd.firebaseio.com/history.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          this.historyOrder = data;
          return data;
        }
      ))
      .pipe(catchError(error => {
        return throwError('Something went wrong');
      }));
  }

  getHistoryOrder() {
      const data = {...this.historyOrder};
      if (this.historyOrder === null) {
        return null;
      } else {
        return Object.keys(data).map((key) => {
          const item = data[key];
          item.id = key;
          return item;
        });
      }
  }

  storeOrderHistory(products, price) {
    this.historyItem = {items: products, price: price, date: moment().format('MMMM Do YYYY')};
    return this.http.post('https://ng-shop-101bd.firebaseio.com/history.json', this.historyItem);
  }
}
