import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  rvalue : string ="";
  transform(value: any, ...args: any[]): any {
    this.rvalue = value.split('').reverse().join('')
    return this.rvalue;
  }

}
