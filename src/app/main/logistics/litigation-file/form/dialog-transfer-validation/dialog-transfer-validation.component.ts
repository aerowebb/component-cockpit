import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ActionRow } from '../../shared/action-row.interface';

@Component({
  selector: 'aw-dialog-transfer-validation',
  templateUrl: './dialog-transfer-validation.component.html'
})
export class DialogTransferValidationComponent extends DialogComponent implements OnInit {
  @Input()
  public document: ActionRow;
  @Output()
  public onValidated: EventEmitter<ActionRow>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogTransferValidationComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<ActionRow>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.document) {
      this.document = {};
    }

    this.document.comment = 'MATERIAL 1276712-11 PLACE EN ZONE DE QUARANTAINE';
  }

  public validate(): void {
    if (this.document.comment) {
      this.onValidated.emit(this.document);
      this.closeDialog();
    }
  }
}
