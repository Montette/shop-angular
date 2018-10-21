import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from './order-history.service';
import { Response } from '@angular/http';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory = [];
  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit() {
    this.orderHistoryService.fetchOrderHistory()
      .subscribe(
        (history) => {
          this.orderHistory = this.orderHistoryService.getHistoryOrder();
        },
        (error) => console.log(error)
      );
  }
}
