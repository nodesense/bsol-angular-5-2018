import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: string[] = ['Venkat', 'Krish'];

  show: boolean = true; // show or hide list
  
  name: string = 'enter name' ; // for two way binding

  
  constructor() { }

  ngOnInit() {
     
  }

  addMember() {
    // name is updated through data binding
    this.members.push(this.name); 
    this.name = "";
  }

  empty() {
    this.members = [];
  }

}
