import { Component, OnInit,

        ViewChild,
        ElementRef

} from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight.directive';


import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // access #addr, #address in TS
  @ViewChild("addr")
  inputElement: ElementRef;

  @ViewChild("address")
  addressElement: ElementRef;

  @ViewChild('myHighlight')
  highlightDir: HighlightDirective; 

  //contactTime: any = { start: 9, end: 5};
  contactTime: any; // undefined

  // component 
  constructor(private element: ElementRef) {
    
   }

  ngOnInit() {
    // viewchild is binded


    this.addressElement
    .nativeElement.textContent = 'JP Nagar, BLR';

    this.inputElement.nativeElement.focus();

    setTimeout( ()=> {
      this.contactTime = {start: 9, end: 5};
    }, 2000);

    this.highlightDir.setNewColor('red');


    //BAD
    //$('p').text('Hello');

    //GOOD
    // scopped look up
    $(this.element.nativeElement)
    .find('p')
    .text('hello');

    //Or  recommeneded

    $(this.addressElement.nativeElement)
    .text('Gaurav Nagar');
 
    
  }

}
