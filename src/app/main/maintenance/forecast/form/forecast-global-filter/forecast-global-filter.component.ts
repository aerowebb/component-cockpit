import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { ForecastFormService } from '../forecast-form.service';

@Component({
  selector: 'aw-forecast-form-global-filter',
  templateUrl: './forecast-global-filter.component.html'
})
export class GlobalFilterForecastFormComponent extends GenericComponent {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  private globalSearchFilterChanged: Subject<string>;

  public constructor(public forecastFormService: ForecastFormService) {
    super(ComponentOpenMode.Write);

    this.registerGlobalSearchFilterObservable();
  }

  public getComponentName(): string {
    return 'GlobalFilterForecastFormComponent';
  }

  public filter(searchTextValue: string): void {
    this.globalSearchFilterChanged.next(searchTextValue);
  }

  private clearGlobalFilter(): void {
    this.forecastFormService.forecastFiltering.globalSearch = '';
  }

  private registerGlobalSearchFilterObservable(): void {
    this.clearGlobalFilter();
    this.globalSearchFilterChanged = new Subject<string>();
    this.globalSearchFilterChanged
      .pipe(
        debounceTime(GlobalFilterForecastFormComponent.SEARCH_TEXT_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => {
        this.forecastFormService.filterForecast();
      });
  }
}
