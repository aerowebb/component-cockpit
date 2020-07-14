import { Component } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-employee-planning-form-legend',
  styleUrls: ['./employee-planning-legend-dialog.component.scss'],
  templateUrl: './employee-planning-legend-dialog.component.html'
})
export class EmployeePlanningLegendDialogComponent extends DialogComponent {
  public constructor() {
    super(ComponentOpenMode.Write, 'EmployeePlanningLegendDialogComponent');
  }
}
