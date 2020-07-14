import { Pipe, PipeTransform } from '@angular/core';

import { LabelValue } from '../types/label-value.interface';

@Pipe({
  name: 'formatSelectOption'
})
export class FormatSelectOptionPipe implements PipeTransform {
  public transform<T>(value: T, options: LabelValue<T>[]): string {
    const matchingOption = options.find((option) => option.value === value);

    return matchingOption ? matchingOption.label : '';
  }
}
