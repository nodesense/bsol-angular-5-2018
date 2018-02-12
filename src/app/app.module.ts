// module is a logical collection 
// of component, directive, pipe
// of providers [services]

// reference to dependencies

import {NgModule} from '@angular/core';

import {BrowserModule} 
        from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
   
import {HttpClientModule} 
        from '@angular/common/http';

// Route: step 1: map path to component, configuration

import {Routes, RouterModule} 
            from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
//import { ProductModule } from './product/product.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        // lazy loading module
        path: 'products',
        // path#ClassName
        loadChildren: 'app/product/product.module#ProductModule',

        canActivate:[AuthGuard]
        
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];



@NgModule({
    // module dependencies
    imports: [
        BrowserModule,
        FormsModule,

        HttpClientModule,
        AuthModule,

        RouterModule.forRoot(routes),
      //  ProductModule,

        // Application modules

        SharedModule
        //InventoryModule,
        //ProductModule
        //AuthModule
    ],

    declarations: [
        // components, directives, pipe
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        NotFoundComponent ,

        //HomeComponent,
        //FooterComponent,
        //HeaderComponent
        //...
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
