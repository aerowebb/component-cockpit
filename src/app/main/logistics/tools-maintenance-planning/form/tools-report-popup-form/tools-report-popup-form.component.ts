import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-tools-report-popup-form',
  styleUrls: ['./tools-report-popup-form.component.scss'],
  templateUrl: './tools-report-popup-form.component.html'
})
export class ToolsReportPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public reportContent: string;

  public constructor() {
    super(ComponentOpenMode.Read, 'ToolsReportPopupFormComponent');
    this.reportContent = '';
  }

  public ngOnInit(): void {
    return;
  }
}
