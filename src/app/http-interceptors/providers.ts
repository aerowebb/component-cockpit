import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderInterceptor } from './loader-interceptor';
import { LoggingInterceptor } from './logging-interceptor';

export const HTTP_INTERCEPTORS_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
];
