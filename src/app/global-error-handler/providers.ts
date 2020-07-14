import { ErrorHandler } from '@angular/core';

import { GlobalErrorHandler } from './global-error-handler';

export const GLOBAL_ERROR_HANDLER_PROVIDERS = [{ provide: ErrorHandler, useClass: GlobalErrorHandler }];
