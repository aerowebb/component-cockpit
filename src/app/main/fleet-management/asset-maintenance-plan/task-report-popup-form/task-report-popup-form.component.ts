import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-task-report-popup-form',
  styleUrls: ['./task-report-popup-form.component.scss'],
  templateUrl: './task-report-popup-form.component.html'
})
export class TaskReportPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public reportContent: string;

  public constructor() {
    super(ComponentOpenMode.Read, 'TaskReportPopupFormComponent');
    this.reportContent = '';
  }

  public ngOnInit(): void {
    return;
  }
}
