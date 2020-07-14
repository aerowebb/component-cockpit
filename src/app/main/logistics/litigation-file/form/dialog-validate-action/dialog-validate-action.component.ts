import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ActionRow } from '../../shared/action-row.interface';

@Component({
  selector: 'aw-dialog-validate-action',
  templateUrl: './dialog-validate-action.component.html'
})
export class DialogValidateActionComponent extends DialogComponent implements OnInit {
  @Input()
  public document: ActionRow;
  @Input()
  public contributorList: SelectItem[];
  @Input()
  public categoryList: SelectItem[];
  @Input()
  public objectTypeList: SelectItem[];
  @Input()
  public recipientList: SelectItem[];
  @Input()
  public carrierList: SelectItem[];
  @Output()
  public onValidated: EventEmitter<ActionRow>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogValidateActionComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<ActionRow>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.document) {
      this.document = {};
    }

    this.document.comment = 'TRANSFERT DU MATERIAL AU NTI2 REALISE';
  }

  public validate(): void {
    this.onValidated.emit(this.document);
    this.closeDialog();
  }

  public close() {
    this.document.action = !this.document.action;
    this.closeDialog();
  }
}
