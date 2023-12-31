import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})

export class MyAddPipe implements PipeTransform {

  transform(value1: any, value2 : any, ...args: any[]): any {
          return value1 + value2;
   }
}