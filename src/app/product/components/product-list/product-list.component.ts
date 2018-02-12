import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.productService.getProducts()
    .subscribe (products => {
        this.products = products;
        console.log("received ", products);
    });
  }
 
  ngOnDestroy() {
    console.log("Product List ngDestory");
    // shall cancel pending calls
    this.subscription.unsubscribe();
  }


}
