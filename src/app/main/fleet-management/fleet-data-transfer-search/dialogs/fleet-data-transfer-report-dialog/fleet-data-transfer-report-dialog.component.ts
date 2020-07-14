import { Component, Input , OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
@Component({
  selector: 'aw-fleet-data-transfer-report-dialog',
  templateUrl: './fleet-data-transfer-report-dialog.component.html',
  styleUrls: ['./fleet-data-transfer-report-dialog.component.scss']
})
export class FleetDataTransferReportDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public reportContent: string;
  @Input()  public iscustomerOwner : boolean;
  @Input()  public iscustomerOperator : boolean;
  public constructor() {
    super(ComponentOpenMode.Read, 'FleetDataTransferReportDialogComponent');
    this.reportContent = '';
   }

  public ngOnInit() {
    return;
  }

}
