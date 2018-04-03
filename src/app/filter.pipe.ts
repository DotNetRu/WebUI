import { Pipe, PipeTransform } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], substring: string): string[] {
    if (!substring) {
      return value;
    }


    const result: string[] = [];
    value.forEach(item => {
      if (item && item.indexOf(substring) !== -1) {
        result.push(item);
      }
    });

    return result;
  }

}
