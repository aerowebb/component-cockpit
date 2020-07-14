import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LangConstants } from '../constants/lang-constants';

@Pipe({
  name: 'extractTranslation'
})
export class ExtractTranslationPipe implements PipeTransform {
  public constructor(private readonly translateService: TranslateService) {}

  public transform(value: string | undefined): string {
    if (!value) {
      return '';
    }

    const matches = value.match(/EN=(.*)FR=(.*)/);

    return matches
      ? this.translateService.currentLang === LangConstants.FRENCH_CODE
        ? matches[2]
        : matches[1]
      : value;
  }
}
