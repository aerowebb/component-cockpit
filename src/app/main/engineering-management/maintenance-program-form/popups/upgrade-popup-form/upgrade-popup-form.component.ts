import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-upgrade-popup-form',
  templateUrl: './upgrade-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class UpgradePopupFormComponent extends DialogComponent {
  @Input()
  public version: string;

  @Output()
  public changedVersion: EventEmitter<String>;

  public _changedVersion: string;

  public constructor(public inputValidationService: InputValidationService) {
    super(ComponentOpenMode.Write, 'UpgradePopupFormComponent');
    this.changedVersion = new EventEmitter<string>();
  }

  public cancel(): void {
    this.display = false;
  }

  public add() {
    if (this._changedVersion !== this.version) {
      this.changedVersion.emit(this._changedVersion);
    }
  }

  public getTypeName(): string {
    return 'UpgradePopupFormComponent';
  }
}
