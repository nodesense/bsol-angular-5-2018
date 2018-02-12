import { Injectable } from '@angular/core';
import { CanActivate, 
          ActivatedRouteSnapshot, 
          RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanEditGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      console.log('Guard ', next.params['id']);
      console.log("Next url ", state.url);

      let result = window.confirm('Do you want to edit?');
      return result;

  }
}
