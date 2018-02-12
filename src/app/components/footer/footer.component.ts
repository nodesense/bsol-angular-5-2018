import { Component, OnInit, 
          Input,

          Output,
          EventEmitter
        
        } from '@angular/core';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  highlight: boolean = false;

  // Property binding
  // parent to child, use [] for expression
  @Input()
  year: number;

  @Input("x-company") // alias name that match html 
  company: string;

  // output for event binding ONLY
  // <app-footer (emailEvent)="..."

  @Output()
  emailEvent: EventEmitter<string> = new EventEmitter();

  siteLikes: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.siteLikes = this.dataService.siteLikes;

    this.dataService
    .siteLikeSource
    .subscribe (n => {
      
        this.siteLikes = n;
    });

    console.log("year type ", typeof this.year);
  }

  email() {
    // TODO: (custom) event binding
    // fire custom event, that carry a string
    this.emailEvent.emit('angular@nodesense.ai');
  }

}
