import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'cart_items';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  storeOnLocalStorage(products) {
    this.storage.set(STORAGE_KEY, products);
  }

  getFromLocalStorage() {
    return this.storage.get(STORAGE_KEY) || [];
  }

  removeFromLocalStorage() {
    this.storage.remove(STORAGE_KEY);
  }
}
