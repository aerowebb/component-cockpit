import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-dialog-select-container',
  templateUrl: './dialog-select-container.component.html',
  styleUrls: ['./dialog-select-container.component.scss']
})
export class DialogSelectContainerComponent extends DialogComponent {
  @Input()
  public data: PopupEntry<string> | undefined;
  @Output()
  public onAdded: EventEmitter<string>;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogSelectContainerComponent');
    this.onAdded = new EventEmitter<string>();
  }

  public getComponentName(): string {
    return 'DialogSelectContainerComponent';
  }

  public validate() {
    const code = 'CONT685';
    this.onAdded.emit(code);
    this.closeDialog();
  }
}
