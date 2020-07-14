import { Component, Input,  OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-generate-report',
  templateUrl: './dialog-generate-report.component.html',
  styleUrls: ['./dialog-generate-report.component.scss']
})
export class DialogGenerateReportComponent extends DialogComponent implements OnInit {

  @Input()
  public reportMessage: string;
  public constructor() {
    super(ComponentOpenMode.Read, 'DialogGenerateReportComponent');
    this.reportMessage = '';
   }

  public ngOnInit() {
    return;
  }

}
