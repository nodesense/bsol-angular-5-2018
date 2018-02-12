import {Component, OnInit} from '@angular/core';

// meta data
@Component ({
    // html tag name, must be unique within app
    selector: 'app-root',

    // view (template)
    templateUrl: 'app.component.html',

    // scopped style, private style

    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {
   
    // member variable, public scope
    appTitle: string = 'Angular app';

    show: boolean = true;

    // before loading view
    constructor() {
        console.log('App component created');
    }
 
    // after loading view
    ngOnInit(): void {
        console.log("ngOnInit");
        
        setTimeout(() => {
                this.appTitle = "Product App";
                console.log("title set");
        }, 2000);
    }

    // listener
    onEmail(email: string) {
        alert(email);
    }
}
