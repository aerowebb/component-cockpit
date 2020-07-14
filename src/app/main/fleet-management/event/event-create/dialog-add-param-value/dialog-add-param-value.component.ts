import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-dialog-add-param-value',
  templateUrl: './dialog-add-param-value.component.html'
})
export class DialogAddParamValueComponent extends DialogComponent implements OnInit {
  @Input()
  public data: PopupEntry<string> | undefined;
  @Output()
  public onAdded: EventEmitter<string>;

  public val: string | undefined;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogAddParamValueComponent');
    this.onAdded = new EventEmitter<string>();
  }

  public ngOnInit() {
    if (!!this.data && !!this.data.object && Object.keys(this.data.object).length > 0) {
      this.val = this.data.object;
    } else {
      this.val = undefined;
    }
  }

  public validate() {
    this.onAdded.emit(this.val);
    this.closeDialog();
  }
}
