import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ProductsServiceService } from './products-service.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private productsService: ProductsServiceService) { }

  fetchProducts() {
    return this.http.get('https://fathomless-depths-47870.herokuapp.com/http://shoppingcartapi.hire.inwedo.com/items')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ))
      .pipe(catchError(error => {
        return throwError('Something went wrong');
      }))
      .subscribe(
        (data) => {
          this.productsService.setProducts(data);
        }
      );
  }
}
