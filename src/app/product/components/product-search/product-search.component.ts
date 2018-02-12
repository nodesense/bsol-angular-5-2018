import { Component, OnInit } from '@angular/core';


import {FormGroup, 
       FormControl,
        FormBuilder
      } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../models/product';

// filter, transform
// Not recommended to import all rxjs for production
import "rxjs/Rx";
// import "rxjs/operators/map"


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  formGroup: FormGroup;
  searchControl: FormControl;

  name:string;

  products$: Observable<Product[]>;

  product: Product = new Product();

  constructor(private builder: FormBuilder,
              private productService:ProductService
  ) {
      
    this.searchControl = new FormControl('');

    this.formGroup = this.builder.group({
      'searchBox': this.searchControl
    });

   }

  ngOnInit() {
    this.searchControl
    .valueChanges
    .map ( value => value.trim())
    .filter (value => value.length > 0)
    .debounceTime(500)
    .subscribe ( value => {
      console.log("Value", value, '*');

      this.product.name = value;
      this.products$ = this.productService.searchProducts(value);

    });
  }

}
