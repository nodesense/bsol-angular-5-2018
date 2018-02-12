import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductService, ProductWebService } from './services/product.service';


import {FormsModule, 
        ReactiveFormsModule} from '@angular/forms';

import {Routes, RouterModule} 
            from '@angular/router';
import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { BrandsResolveService } from './services/brands-resolve.service';

const routes: Routes = [
    {
       path: '',
       component: ProductHomeComponent,

       children: [
         {
           path: 'list',
           component: ProductListComponent
         },
         {
          path: 'create',
          component: ProductEditComponent,
          canDeactivate: [SaveAlertGuard],

          // ensure brands is loaded before launching component
          resolve: {
            brands: BrandsResolveService
          }
        },
        {
          path: 'edit/:id', //products/edit/12345
          component: ProductEditComponent,
          canActivate: [CanEditGuard],
          canDeactivate: [SaveAlertGuard],

          // ensure brands is loaded before launching component
          resolve: {
            brands: BrandsResolveService
          }
        },
        {
          path: 'search',
          component: ProductSearchComponent
        }
       ]
    }
];


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    // REVIEW
    RouterModule.forChild(routes)
  ],
  declarations: [ProductHomeComponent, 
                ProductEditComponent, 
                ProductListComponent, 
                ProductSearchComponent],

  providers: [
    {
      provide: ProductService, // interface for injection
      useClass: ProductWebService // to create instance
    },

    CanEditGuard,
    SaveAlertGuard,

    // Load data before loading component
    BrandsResolveService
  ]
})
export class ProductModule { }
