import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { MaintenanceForecastingScheduledEvent } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-scheduled-event.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { EventModel, ForecastFormService } from '../forecast-form.service';

@Component({
  selector: 'aw-dialog-forecast-form-scheduled-event',
  templateUrl: './scheduled-event-dialog.component.html'
})
export class ScheduledEventForecastFormDialogComponent extends DialogComponent implements OnInit {
  public componentTitleKey: string;

  @Input()
  public eventModel: EventModel<MaintenanceForecastingScheduledEvent>;

  public plannedDate: Date | undefined;
  public unitName: string;

  public constructor(public sessionService: SessionService, private readonly forecastFormService: ForecastFormService) {
    super(ComponentOpenMode.Write, 'ScheduledEventForecastFormDialogComponent');

    this.init();
  }

  public ngOnInit(): void {
    this.componentTitleKey = this.forecastFormService.getUpcomingEventKey(this.eventModel);
    this.plannedDate = this.eventModel._obj.bsdeScheduledEvent.plannedDate || this.eventModel.startDate;

    this.loadUnitName();
  }

  public validate(): void {
    this.forecastFormService.updateScheduledEventPlannedDate({
      event: this.eventModel,
      plannedDate: this.plannedDate as Date
    });

    this.closeDialog();
  }

  private init(): void {
    this.plannedDate = undefined;
    this.unitName = '';
  }

  private loadUnitName(): void {
    if (this.eventModel._obj.bsdeScheduledEvent.counterCode) {
      this.forecastFormService
        .getBireMeasureReference({ counterCode: this.eventModel._obj.bsdeScheduledEvent.counterCode })
        .pipe(
          concatMap((measureReference) => {
            return measureReference
              ? this.forecastFormService.getBireUnitMeasure({ unitCode: measureReference.unitCode as string }).pipe(
                  map((unitMeasure) => {
                    return (
                      (measureReference.unitCode as string) +
                      (unitMeasure && unitMeasure.unitName ? ` - ${unitMeasure.unitName}` : '')
                    );
                  })
                )
              : of('');
          })
        )
        .subscribe((unitName) => {
          this.unitName = unitName;
        });
    }
  }
}
