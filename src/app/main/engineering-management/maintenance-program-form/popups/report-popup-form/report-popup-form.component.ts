import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MaintenanceProgramReports } from '../../../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../../shared/utils/file-utils';

@Component({
  selector: 'aw-report-popup-form',
  styleUrls: ['./report-popup-form.component.scss'],
  templateUrl: './report-popup-form.component.html'
})
export class ReportPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public reportContent: MaintenanceProgramReports;
  @Output()
  public onClose: EventEmitter<void>;

  public constructor() {
    super(ComponentOpenMode.Read, 'ReportPopupFormComponent');
    this.reportContent = {};
    this.onClose = new EventEmitter<void>();
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

  public closeAllDialog(): void {
    this.display = false;
    this.onClose.emit();
  }
}
