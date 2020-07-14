import { Pipe, PipeTransform } from '@angular/core';

import { KeyValue } from '../types/key-value.interface';

@Pipe({
  name: 'filterByValue'
})
export class FilterByValuePipe implements PipeTransform {
  public transform(list: KeyValue<string>[], searchText: string): KeyValue<string>[] {
    if (!list) {
      return [];
    }
    if (!searchText) {
      return list;
    }

    const formattedSearchText = searchText.toLowerCase();

    return list.filter((elt) => {
      return elt.value.toLowerCase().includes(formattedSearchText);
    });
  }
}
