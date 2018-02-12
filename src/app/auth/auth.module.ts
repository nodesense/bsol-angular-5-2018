import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';


import {FormsModule, 
  ReactiveFormsModule} from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthService } from './services/auth.service';
import { IntercepterService } from './services/intercepter.service';

import {Routes, RouterModule} 
      from '@angular/router';
  
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, 
                 ForbiddenComponent],

  providers: [
    AuthGuard,
    AdminGuard, 
    AuthService,
     
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    }
  ]
})
export class AuthModule { }
