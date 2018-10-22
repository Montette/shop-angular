import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, property: string, order: number): any {

    if(!value || !property || !order) return value;

    return value.sort((a, b) => {
      return a[property] > b[property] ? order : order * (- 1);
    });
  }
}
