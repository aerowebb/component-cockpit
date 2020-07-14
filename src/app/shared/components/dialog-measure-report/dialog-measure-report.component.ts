import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-measure-report',
  styleUrls: ['./dialog-measure-report.component.scss'],
  templateUrl: './dialog-measure-report.component.html'
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
