import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-report-popup-form',
  templateUrl: './report-popup-form.component.html'
})
export class ReportPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public reportContent: string;
  @Input()
  public reportHeading: string;

  public constructor() {
    super(ComponentOpenMode.Read, 'ReportPopupFormComponent');
  }

  public ngOnInit(): void {
    return;
  }
}
