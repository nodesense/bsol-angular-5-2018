import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';

import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  price: number = 99.99;
  today: Date = new Date();

  title: string = "Home";

  counter: number = 100;

  homeLikes: number = 1000;

  showLikes: boolean = true;

  //siteLikes: number;

  // define observable, to bind to view
  // $ is for best practice, for Observable or promise
  siteLikes$: Observable<number>;



  constructor(private dataService:DataService) { }

  ngOnInit() {

    //this.siteLikes = this.dataService.siteLikes;

    this.siteLikes$ = this.dataService.siteLikeSource;

    // this.dataService.siteLikeSource
    // .subscribe ( n => {
    //   console.log("Home subscribe ", Math.random());
    //   this.siteLikes = n;
    // });

  }

  incrementSiteLikes() {
    this.dataService.increment();

    //BAD
    //this.siteLikes = this.dataService.siteLikes;
  }

  incr(e: Event) {
    console.log("Event ", e);
    
    this.counter++;
  }

}
