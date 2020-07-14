import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-flight-measure',
  templateUrl: './dialog-measure.component.html'
})
export class DialogMeasureComponent extends DialogComponent {
  public code: string | undefined;
  public value: number | undefined;

  // Inputs *********************************************************************

  @Input()
  public measureReferenceList: SelectItem[];

  // Outputs ********************************************************************

  @Output()
  public onValidate: EventEmitter<{ code: string; value: number }>;

  // ****************************************************************************

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogMeasureComponent');

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.code = undefined;
    this.measureReferenceList = [];
    this.value = undefined;
  }

  private onBeforeLoadOnce(): void {
    this.onValidate = new EventEmitter<{ code: string; value: number }>();
  }

  // ****************************************************************************

  public validate(): void {
    this.onValidate.emit({ code: this.code as string, value: this.value as number });
    super.closeDialog();
  }
}
