import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LangConstants } from '../constants/lang-constants';
import { RegExpUtils } from '../utils/regexp.utils';

@Injectable()
export class InputValidationService {
  public constructor(private readonly translateService: TranslateService) {}

  public formatOfInteger(): string {
    return `${this.formatMessagePrefix()}${this.translateService.instant('InputValidationService.integer')}`;
  }

  public formatOfMoney(): string {
    return `${this.formatMessagePrefix()}${this.translateService.instant('InputValidationService.money')}`;
  }

  public formatOfNumber(): string {
    return `${this.formatMessagePrefix()}${this.translateService.instant('InputValidationService.number')}`;
  }

  public formatOfPositiveInteger(): string {
    return `${this.formatMessagePrefix()}${this.translateService.instant('InputValidationService.positiveInteger')}`;
  }

  public formatOfPositiveNumber(): string {
    return `${this.formatMessagePrefix()}${this.translateService.instant('InputValidationService.positiveNumber')}`;
  }

  public validatorOfInteger(): RegExp {
    return RegExpUtils.INTEGER;
  }

  public validatorOfMoney(): RegExp {
    return RegExpUtils.MONEY;
  }

  public validatorOfMoney2Digits(): RegExp {
    return RegExpUtils.MONEY_2_DIGIT;
  }

  public validatorOfNumber(): RegExp {
    return RegExpUtils.NUMBER;
  }

  public validatorOfPositiveInteger(): RegExp {
    return RegExpUtils.POSITIVE_INTEGER;
  }

  public validatorOfPositiveNumber(): RegExp {
    return RegExpUtils.POSITIVE_NUMBER;
  }

  private formatMessagePrefix(): string {
    const separator = this.translateService.currentLang === LangConstants.FRENCH_CODE ? ' : ' : ': ';

    return `${this.translateService.instant('InputValidationService.format')}${separator}`;
  }
}
