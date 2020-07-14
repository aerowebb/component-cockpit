import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-flight-engine-dates',
  templateUrl: './dialog-engine-dates.component.html'
})
export class DialogEngineDatesComponent extends DialogComponent {
  // Inputs *********************************************************************

  @Input()
  public startDate: number | undefined;

  @Input()
  public endDate: number | undefined;

  // Outputs ********************************************************************

  @Output()
  public onValidate: EventEmitter<{ startDate: number | undefined; endDate: number | undefined }>;

  // ****************************************************************************

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogEngineDatesComponent');

    this.onBeforeLoadOnce();
  }

  // ****************************************************************************
  private onBeforeLoadOnce(): void {
    this.onValidate = new EventEmitter<{ startDate: number | undefined; endDate: number | undefined }>();
  }

  // ****************************************************************************

  public validate(): void {
    this.onValidate.emit({ startDate: this.startDate, endDate: this.endDate });
    super.closeDialog();
  }
}
