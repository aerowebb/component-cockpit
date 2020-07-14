import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoaderService } from '../shared/services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  public constructor(private readonly loaderService: LoaderService) {}

  // tslint:disable-next-line:no-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoadingBar();

    return next.handle(req).pipe(
      tap(
        // tslint:disable-next-line:no-any
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loaderService.hideLoadingBar();
          }
        },
        () => {
          this.loaderService.hideLoadingBar();
        }
      )
    );
  }
}
