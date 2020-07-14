import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MaintenanceProgramReports } from '../../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../shared/utils/file-utils';

@Component({
  selector: 'aw-dialog-compare-maintenance-programs',
  templateUrl: './dialog-compare-maintenance-programs.component.html'
})
export class DialogCompareMaintenanceProgramsComponent extends DialogComponent implements OnInit {
  @Input()
  public reportContent: MaintenanceProgramReports;

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogCompareMaintenanceProgramsComponent');
    this.reportContent = {};
  }

  public ngOnInit(): void {
    return;
  }

  public exportToTxt(): void {
    FileUtils.downloadFile(
      this.reportContent.bytes,
      `Report_${new Date().toDateString()}_${new Date().getHours()}h${new Date().getSeconds()}.txt`
    );
  }
}
