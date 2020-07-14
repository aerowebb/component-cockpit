import { Component, EventEmitter, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-forecast-form-planned-date',
  templateUrl: './planned-date-dialog.component.html'
})
export class PlannedDateForecastFormDialogComponent extends DialogComponent {
  @Output()
  public onSelected: EventEmitter<Date>;

  public plannedDate: Date | undefined;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'PlannedDateForecastFormDialogComponent');

    this.init();
  }

  public validate(): void {
    this.onSelected.emit(this.plannedDate as Date);
    this.closeDialog();
  }

  private init(): void {
    this.plannedDate = undefined;

    this.onSelected = new EventEmitter<Date>();
  }
}
