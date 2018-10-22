import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './services/data-storage.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-shop';

  constructor(private dataStorage: DataStorageService, private shoppingCartService: ShoppingCartService) { }
  ngOnInit() {
    this.dataStorage.fetchProducts();
    this.shoppingCartService.loadFromLocalStorage();
  }
}
