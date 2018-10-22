import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() item: Product;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
    console.log(this.item);
    this.shoppingCartService.addProduct(this.item);
  }

}
