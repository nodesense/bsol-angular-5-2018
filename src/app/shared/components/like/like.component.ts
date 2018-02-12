import { Component, OnInit, OnDestroy,
          Input, 
          Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit, OnDestroy {

  //Two way binding Input and Output
  // output name should be input name + "Change"

  @Input()
  likes: number;

  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();


  constructor() { 
    console.log("Like comp created");
  }

  ngOnInit() {
    console.log("like ngInit");
  }

  // called just before deleting component instance
  ngOnDestroy() {
    console.log("like ngDestory");
  }

  up() {
    this.likesChange.emit(this.likes + 1);
  }

  down() {
    this.likesChange.emit(this.likes - 1);
  }

}
