import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';

import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Brand } from '../models/brand';

@Injectable()
export abstract class ProductService {

  constructor() { }

  abstract getProducts(): Observable<Product[]>;
  abstract getProduct(id: any): Observable<Product>;
  abstract getBrands(): Observable<Brand[]>;

  abstract deleteProduct(id: any): Observable<any>;

  // edit/save, create/save
  abstract saveProduct(product: Product): Observable<Product>;


  abstract searchProducts(q: string): Observable<Product[]>;


}

@Injectable()
export class ProductWebService extends ProductService {
  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return this.http
            .get<Product[]> (environment.apiEndPoint + '/api/products');
  }

  getProduct(id: any): Observable<Product> {
    return this.http
            .get<Product> (environment.apiEndPoint + '/api/products/' + id );
  }

  getBrands(): Observable<Brand[]> {
    return this.http
            .get<Brand[]> (environment.apiEndPoint + '/api/brands');
  }

  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // PUT /api/products/43434, {data}
      return this.http
      .put<Product> (environment.apiEndPoint + '/api/products/' + product.id, product );

    } else { // POST /api/products, {data without id}
    return this.http
           .post<Product> (environment.apiEndPoint + '/api/products' , product );

    }
  }

  deleteProduct(id: any): Observable<any> {
    // DELETE /api/products/124
    return this.http
            .delete<any> (environment.apiEndPoint + '/api/products/' + id );
  }

  searchProducts(q: string): Observable<Product[]> {
    return this.http
    .get<Product[]> (environment.apiEndPoint + '/api/products?q=' + q);
  }

}
