import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-measure-report-dialog',
  templateUrl: './measure-report-dialog.component.html'
})
export class MeasureReportDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public reportMessage: string;
  public constructor() {
    super(ComponentOpenMode.Read, 'MeasureReportDialogComponent');
    this.reportMessage = '';
  }

  public ngOnInit() {
    return;
  }
}
