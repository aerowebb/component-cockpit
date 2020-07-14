import { Injectable, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService as PrimeNGMessageService } from 'primeng/api';

import { AppConstants } from '../constants/app-constants';

@Injectable()
export class MessageService {
  private static readonly ERROR_MSG_TAG: string = 'error';
  private static readonly INFO_MSG_TAG: string = 'info';
  private static readonly SUCCESS_MSG_TAG: string = 'success';
  private static readonly WARNING_MSG_TAG: string = 'warn';

  public constructor(
    private readonly ngZone: NgZone,
    private readonly primeNGMessageService: PrimeNGMessageService,
    private readonly translateService: TranslateService
  ) {}

  public clear(): void {
    this.primeNGMessageService.clear();
  }

  public showErrorMessage(message: string, detail?: string): void {
    this.handleMessage(MessageService.ERROR_MSG_TAG, message, detail);
  }

  public showRawErrorMessage(message: string): void {
    this.handleRawMessage(MessageService.ERROR_MSG_TAG, message);
  }

  public showInfoMessage(message: string): void {
    this.handleMessage(MessageService.INFO_MSG_TAG, message);
  }

  public showRawInfoMessage(message: string): void {
    this.handleRawMessage(MessageService.INFO_MSG_TAG, message);
  }

  public showRawSuccessMessage(message: string): void {
    this.handleRawMessage(MessageService.SUCCESS_MSG_TAG, message);
  }

  public showSuccessMessage(message: string): void {
    this.handleMessage(MessageService.SUCCESS_MSG_TAG, message);
  }

  public showWarningMessage(message: string): void {
    this.handleMessage(MessageService.WARNING_MSG_TAG, message);
  }

  public showRawWarningMessage(message: string): void {
    this.handleRawMessage(MessageService.WARNING_MSG_TAG, message);
  }

  private clearMessages(): void {
    this.primeNGMessageService.clear();
  }

  private handleMessage(severity: string, key: string, detail?: string): void {
    this.showMessage(severity, key, detail);
  }

  private handleRawMessage(severity: string, key: string): void {
    this.clearMessages();
    this.showRawMessage(severity, key);
  }

  private showMessage(severity: string, key: string, detail?: string): void {
    this.translateService.get(key).subscribe((value: string) => {
      this.showRawMessage(severity, value, detail);
    });
  }

  private showRawMessage(severity: string, message: string, detail?: string): void {
    this.ngZone.run(() => {
      this.primeNGMessageService.add({
        severity,
        summary: detail ? message + ' ' + detail : message,
        life:
          severity === MessageService.ERROR_MSG_TAG
            ? AppConstants.MESSAGE_LIFE_ERROR
            : AppConstants.MESSAGE_LIFE_DEFAULT
      });
    });
  }
}
