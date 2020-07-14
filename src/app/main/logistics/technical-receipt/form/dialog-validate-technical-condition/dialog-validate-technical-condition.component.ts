import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { TechnicalReceiptFormService } from '../technical-receipt-form.service';

interface DialogFormInterface {
  user?: string;
  date?: Date;
  oldValue?: string;
  newValue?: string;
}

@Component({
  selector: 'aw-dialog-validate-technical-condition',
  templateUrl: './dialog-validate-technical-condition.component.html',
  styleUrls: ['./dialog-validate-technical-condition.component.scss']
})
export class DialogValidateTechnicalConditionComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidated: EventEmitter<string>;

  public dialogFormData: DialogFormInterface;

  public constructor(
    public sessionService: SessionService,
    private readonly technicalReceiptFormService: TechnicalReceiptFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogValidateTechnicalConditionComponent');
    this.onValidated = new EventEmitter<string>();
  }

  public ngOnInit(): void {
    this.dialogFormData = {};
    this.dialogFormData = this.technicalReceiptFormService.loadDialogFormData();
  }

  public validate(): void {
    this.onValidated.emit(this.dialogFormData.newValue);
    this.closeDialog();
  }
}
