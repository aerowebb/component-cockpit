import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

interface SymptomRow {
  symptomName?: string;
  symptomComment?: string;
  symptomCode?: string;
}

@Component({
  selector: 'aw-dialog-add-symptom',
  templateUrl: './dialog-add-symptom.component.html'
})
export class DialogAddSymptomComponent extends DialogComponent implements OnInit {
  @Input()
  public data: PopupEntry<SymptomRow> | undefined;
  @Input()
  public symptomMap: LabelValue<string>[];
  @Output()
  public onValidated: EventEmitter<SymptomRow>;
  @Output()
  public onAdded: EventEmitter<SymptomRow>;

  public symptom: SymptomRow;
  public isAdd: boolean;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Write, 'DialogAddSymptomComponent');
    this.onValidated = new EventEmitter<SymptomRow>();
    this.onAdded = new EventEmitter<SymptomRow>();
  }

  public ngOnInit() {
    if (!!this.data && !!this.data.object && Object.keys(this.data.object).length > 0) {
      this.symptom = this.data.object;
    } else {
      this.symptom = {};
      this.isAdd = true;
    }
  }

  public validate() {
    if (!!this.symptom && !!this.symptom.symptomCode) {
      if (this.isAdd) {
        this.onAdded.emit(this.symptom);
      } else {
        this.onValidated.emit(this.symptom);
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }

    this.closeDialog();
  }
}
