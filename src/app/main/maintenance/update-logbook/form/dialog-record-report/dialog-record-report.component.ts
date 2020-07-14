import { Component, Input } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogRecordReportInput } from '../../../../../shared/types/api-input-types/fleet-management/dialog-record-report-input.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';

@Component({
  selector: 'aw-dialog-record-report',
  templateUrl: './dialog-record-report.component.html'
})
export class DialogRecordReportComponent extends DialogComponent {
  @Input()
  public set report(obj: DialogRecordReportInput) {
    this.reportObject = obj;
    this.setMessage();
  }

  public message: string;
  public reportObject: DialogRecordReportInput;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogRecordReportComponent');
  }

  public reportTitle(): string {
    let headerTitle = '';
    if (!!this.reportObject && !!this.reportObject.workPackageNumber) {
      headerTitle = String(this.reportObject.workPackageNumber);
    }

    return headerTitle;
  }

  private setMessage(): void {
    this.message = '';
    if (!!this.reportObject && !!this.reportObject.messages) {
      this.message = this.reportObject.messages
        .map((x) => x.listMessages)
        .filter((list) => !ListUtils.isNullOrEmpty(list))
        .reduce((acc, x) => acc.concat(x), [])
        .map((y) => y.message)
        .filter((message) => !StringUtils.isNullOrEmpty(message))
        .join('\n');
    }
  }

  public close() {
    this.display = false;
  }
}
