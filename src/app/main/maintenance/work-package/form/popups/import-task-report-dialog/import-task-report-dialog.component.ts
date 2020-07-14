import { Component, Input } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-import-task-report-dialog',
  templateUrl: './import-task-report-dialog.component.html'
})
export class ImportTaskReportDialogComponent extends DialogComponent {
  @Input()
  public message: string;

  public constructor() {
    super(ComponentOpenMode.Write, 'ImportTaskReportDialogComponent');
  }
}
