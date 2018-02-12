import { Component, OnInit, ViewChild } from '@angular/core';

import {Router, 
       ActivatedRoute} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // for create
  
  brands: Brand[] = [];

  // brands$:Observable<Brand[]>;

  message: string;

  @ViewChild("productForm")
  form: NgForm;


  constructor(private router: Router,
             private route: ActivatedRoute,
             private productService: ProductService
            ) { 

  }

  ngOnInit() {
    // read id from url
    // activatedroute
    const id = this.route.snapshot.params['id'];
    

    if (id) { // edit
      console.log("Edit ", id);

      this.productService.getProduct(id)
      .subscribe ( product => {
        this.product = product;
      });

    } else { // create
      console.log("create");
    }

    //this.brands$ = this.productService.getBrands();

    /*
    this.productService.getBrands()
    .subscribe (brands => {
      this.brands = brands;
    });
    */

    this.brands = this.route.snapshot.data['brands'];


  }

  saveProduct() {
    this.productService
        .saveProduct(this.product)
        .subscribe (savedProduct => {

          // Option 1: After save, continue working on same form
          // savedProduct has id, after post method
          this.product = savedProduct;

          this.message = 'Saved Successfully';

          // reset the form
          this.form.reset(savedProduct);

          // setTimeout( () => {
          //   this.message = '';
          // }, 5000);

          //Option 2: after save, go to list page
          this.router.navigateByUrl("/products/list");


        });
  }

}
