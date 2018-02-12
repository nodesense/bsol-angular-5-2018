import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power:3 }} => value is 2
// {{ 3 | power }}
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
 
  constructor() {
    console.log("Power pipe created");
  }

  transform(value: number, exponent: number = 1): number {
     
    console.log("Power pipe called ", value, exponent);
    return Math.pow(value, exponent);
  }

}
