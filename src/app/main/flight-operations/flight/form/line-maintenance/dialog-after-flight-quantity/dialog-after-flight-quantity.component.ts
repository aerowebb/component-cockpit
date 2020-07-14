import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';

@Component({
  selector: 'aw-dialog-line-maintenance-after-flight-quantity',
  templateUrl: './dialog-after-flight-quantity.component.html'
})
export class DialogAfterFlightQuantityComponent extends DialogComponent {
  @Input()
  public quantity: number | undefined;

  @Output()
  public onValidated: EventEmitter<number>;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogAfterFlightQuantityComponent');

    this.init();
  }

  public isValid(): boolean {
    return ObjectUtils.isDefined(this.quantity);
  }

  public validate(): void {
    this.onValidated.emit(this.quantity);
    this.closeDialog();
  }

  private init(): void {
    this.quantity = undefined;

    this.onValidated = new EventEmitter<number>();
  }
}
