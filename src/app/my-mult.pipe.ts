import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

transform(value1: any, value2 : any, ...args: any[]): any {
  return value1 * value2;
}
}
