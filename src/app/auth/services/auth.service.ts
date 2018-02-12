import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//TODO: Injector for cyclic dependencies


import "rxjs/Rx";
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  storage: Storage = window.localStorage;

  //FIXME: interceptors, cyclic dependencies

  constructor(private httpClient: HttpClient) { 

  }

  isAuthenticated() {
    let token = this.storage.getItem('token');

    if (token)
      return true;
    
    return false;
  }

  getToken() {
    return this.storage.getItem('token');
  }

  login(username: string, password: string):Observable<any> {
    let data = {
      username: username,
      password: password
    };

    return this.httpClient
               .post(environment.authEndPoint, data)
               .map ( (data: any) => {
                 //data has token, roles
                 console.log(data);
                 this.storage.setItem("token", data.token);
                 return data;
               });
    
  }

  logout() {
    this.storage.clear();
  }
}
