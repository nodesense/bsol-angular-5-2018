import { Injectable } from '@angular/core';


import {Subject} from 'rxjs/Subject';

// maintain the last known value
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

 
@Injectable()
export class DataService {

  siteLikes: number = 100000;

  //siteLikeSource: Subject<any> = new Subject();

  siteLikeSource: BehaviorSubject<number> = new BehaviorSubject(100000);

  constructor() {
      console.log("Data service created");
   }

   increment() {
     this.siteLikes++;

     // Publish 
     this.siteLikeSource.next(this.siteLikes);
   }

}
