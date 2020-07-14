import { Component, Input , OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-alert-report-dialog',
  templateUrl: './alert-report-dialog.component.html',
  styleUrls: ['./alert-report-dialog.component.scss']
})

export class AlertReportDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public reportAlertMessage: string;
  public constructor() {
    super(ComponentOpenMode.Read, 'AlertReportDialogComponent');
    this.reportAlertMessage = '';
   }

  public ngOnInit() {
    return;
  }

}
