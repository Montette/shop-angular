import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-shop';

  constructor(private dataStorage: DataStorageService) { }
  ngOnInit() {
    this.dataStorage.fetchProducts();
  }
}
