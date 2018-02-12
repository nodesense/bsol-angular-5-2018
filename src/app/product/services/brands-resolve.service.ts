import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from './product.service';
import { Brand } from '../models/brand';


@Injectable()
export class BrandsResolveService implements Resolve<Brand[]> {

  constructor(private productService: ProductService) {

   }

   resolve(route: ActivatedRouteSnapshot) {
     console.log("getting brands through resolver");
     return this.productService.getBrands();
   }

}
