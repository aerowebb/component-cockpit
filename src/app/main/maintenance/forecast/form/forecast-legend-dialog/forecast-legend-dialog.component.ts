import { Component } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-forecast-form-legend',
  styleUrls: ['./forecast-legend-dialog.component.scss'],
  templateUrl: './forecast-legend-dialog.component.html'
})
export class LegendForecastFormDialogComponent extends DialogComponent {
  public constructor() {
    super(ComponentOpenMode.Write, 'LegendForecastFormDialogComponent');
  }
}
