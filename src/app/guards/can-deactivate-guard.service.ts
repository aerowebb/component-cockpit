import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MainComponent } from '../main/main.component';
import { SessionService } from '../shared/services/session.service';
import { TabService } from '../shared/services/tab.service';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<MainComponent> {
  public constructor(
    private readonly router: Router,
    private readonly sessionService: SessionService,
    private readonly tabService: TabService
  ) {}

  public canDeactivate(component: MainComponent): Observable<boolean> | boolean {
    if (this.sessionService.loggedUser === undefined) {
      return true;
    } else {
      // Push an empty route into browser history
      window.history.pushState({}, '', this.router.url);

      // Hide overlays
      component.showMenuEntry = false;
      component.currentMenuEntry = undefined;

      // Show previous page
      const previousPage =
        this.tabService.breadcrumbs.length > 1
          ? this.tabService.breadcrumbs[this.tabService.breadcrumbs.length - 2]
          : component.homeTab;
      if (previousPage) {
        this.tabService.open(previousPage, { shouldReuse: true });
      }

      return false;
    }
  }
}
