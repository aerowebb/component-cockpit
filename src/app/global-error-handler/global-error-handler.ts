import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { UnboundLocalError } from '../shared/errors/unbound-local-error';
import { MessageService } from '../shared/services/message.service';
import { SessionService } from '../shared/services/session.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public static readonly CLIENT_MESSAGE_KEY: string = '@CLIENT_MESSAGE@';

  private static readonly INTERNAL_SERVER_ERROR_HTTP_STATUS_CODE: number = 500;
  private static readonly UNAUTHORIZED_HTTP_STATUS_CODE: number = 401;
  private static readonly UNKNOWN_ERROR_STATUS_CODE: number = 0;

  public constructor(private readonly injector: Injector) {}

  public handleError(error: unknown): void {
    if (!!error) {
      const messageService = this.injector.get(MessageService);

      if (error instanceof HttpErrorResponse) {
        const httpError = error as HttpErrorResponse;

        switch (httpError.status) {
          case GlobalErrorHandler.UNAUTHORIZED_HTTP_STATUS_CODE:
            this.redirect('global.errorOnSessionDown');
            break;

          case GlobalErrorHandler.INTERNAL_SERVER_ERROR_HTTP_STATUS_CODE:
            if (!!httpError.error && !!httpError.error.errorDesc) {
              const errorMessage: string = httpError.error.errorDesc as string;
              if (errorMessage.startsWith(GlobalErrorHandler.CLIENT_MESSAGE_KEY)) {
                messageService.showRawErrorMessage(errorMessage.substr(GlobalErrorHandler.CLIENT_MESSAGE_KEY.length));
              } else {
                messageService.showErrorMessage('global.internalServerError');
              }
            } else {
              messageService.showErrorMessage('global.internalServerError');
            }
            break;

          case GlobalErrorHandler.UNKNOWN_ERROR_STATUS_CODE:
            this.redirect('global.errorOnServerDown');
            break;

          default:
            console.error(`Error:`, error); // tslint:disable-line:no-console
            break;
        }
      } else if (error instanceof UnboundLocalError) {
        const unboundLocalError = error as UnboundLocalError;

        messageService.showErrorMessage('global.unboundLocalError');

        console.log(unboundLocalError.toString()); // tslint:disable-line:no-console
      } else {
        console.error(error); // tslint:disable-line:no-console
      }
    } else {
      console.error('An unknown error happened'); // tslint:disable-line:no-console
    }
  }

  private redirect(message: string): void {
    const sessionService = this.injector.get(SessionService);
    sessionService.clear();
    sessionService.redirectionMessage = message;
    window.location.href = 'login';
  }
}
