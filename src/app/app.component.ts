import { Component } from '@angular/core';

import { SessionService } from './shared/services/session.service';

// tslint:disable-next-line:ordered-imports
import './scheduler-locales.js';

@Component({
  selector: 'aw-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public constructor(private readonly sessionService: SessionService) {
    // this.setupLoaderObservable();

    this.sessionService.init();
  }

  // private setupLoaderObservable(): void {
  //   this.loaderService.loadingStatus$
  //     .pipe(
  //       debounceTime(Config.HTTP_REQUESTS_DEBOUNCE_TIME),
  //       takeUntil(this.unsubscribe)
  //     )
  //     .subscribe((status: boolean) => {
  //     });
  // }
}
