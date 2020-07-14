import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-fleet-data-copy-report-popup',
  templateUrl: './fleet-data-copy-report-popup.component.html'
})
export class FleetDataCopyReportPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public reportContent: string;

  public constructor() {
    super(ComponentOpenMode.Read, 'FleetDataCopyReportPopupComponent');
  }

  public ngOnInit(): void {
    return;
  }
}
