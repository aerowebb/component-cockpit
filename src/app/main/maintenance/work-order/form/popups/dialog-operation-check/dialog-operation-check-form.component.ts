import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-operation-check-form',
  styleUrls: ['./dialog-operation-check-form.component.scss'],
  templateUrl: './dialog-operation-check-form.component.html'
})
export class DialogOperationCheckFormComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidationOK: EventEmitter<string>;

  @Output()
  public onValidationKO: EventEmitter<string>;

  public comment: string;
  public isValid: boolean;
  public validationList: SelectItem[];

  public constructor(private readonly translateService: TranslateService) {
    super(ComponentOpenMode.Write, 'DialogOperationCheckFormComponent');
    this.onValidationOK = new EventEmitter<string>();
    this.onValidationKO = new EventEmitter<string>();
  }

  public ngOnInit(): void {
    // nothing
    this.validationList = [];
    this.isValid = false;
    this.validationList.push({
      label: this.translateService.instant(this.getTranslateKey('ok')),
      value: true
    });
    this.validationList.push({
      label: this.translateService.instant(this.getTranslateKey('nok')),
      value: false
    });
  }

  public showValidate(): boolean {
    return !this.comment;
  }

  public validate(): void {
    if (this.isValid) {
      this.onValidationOK.emit(this.comment);
    } else {
      this.onValidationKO.emit(this.comment);
    }
    this.closeDialog();
  }
}
