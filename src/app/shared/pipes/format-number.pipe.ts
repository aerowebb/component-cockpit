import { Pipe, PipeTransform } from '@angular/core';

import { NumberUtils } from '../utils/number-utils';
import { ObjectUtils } from '../utils/object-utils';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
  public transform(value: string | undefined): string {
    return ObjectUtils.isDefined(value)
      ? NumberUtils.roundNumber(NumberUtils.fromString(value as string), 2).toString()
      : '';
  }
}
