import { Component, Input } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { InstallEquipmentOutputWithReportDTO } from '../../../../shared/types/api-output-types/install-asset/install-equipment-output-with-report-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-install-report',
  templateUrl: './dialog-install-report.component.html'
})
export class DialogInstallReportComponent extends DialogComponent {
  @Input()
  public report: InstallEquipmentOutputWithReportDTO;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogInstallReportComponent');
  }

  public reportTitle() {
    let headerTitle = '';
    if (!!this.report && !!this.report.installAssetOutputDTO) {
      this.report.installAssetOutputDTO.forEach((res) => {
        if (!!res && !!res.reportDTO && !!res.reportDTO.message) {
          headerTitle = headerTitle + res.reportDTO.message + ';';
        }
      });
    }

    return headerTitle;
  }

  public close() {
    this.display = false;
  }
}
