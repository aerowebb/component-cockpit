import { Component, EventEmitter, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-confirm-dialog-treatment',
  styles: [':host { white-space: pre-line }'],
  templateUrl: './confirm-dialog-treatment.component.html'
})
export class ConfirmDialogTreatmentComponent extends DialogComponent {
  @Output()
  private readonly acceptEvent: EventEmitter<unknown>;

  public constructor() {
    super(ComponentOpenMode.Write, 'ConfirmDialogTreatmentComponent');
    this.acceptEvent = new EventEmitter<unknown>();
  }

  public getComponentName(): string {
    return 'ConfirmDialogTreatmentComponent';
  }

  public accept(): void {
    this.acceptEvent.emit();
    this.closeDialog();
  }

  public reject(): void {
    this.closeDialog();
  }
}
