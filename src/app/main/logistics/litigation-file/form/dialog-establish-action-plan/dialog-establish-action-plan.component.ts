import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ActionRow } from '../../shared/action-row.interface';

@Component({
  selector: 'aw-dialog-establish-action-plan',
  templateUrl: './dialog-establish-action-plan.component.html'
})
export class DialogEstablishActionPlanComponent extends DialogComponent implements OnInit {
  @Input()
  public document: ActionRow;
  @Input()
  public actionPlanList: SelectItem[];
  @Output()
  public onValidated: EventEmitter<ActionRow>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogEstablishActionPlanComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<ActionRow>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.document) {
      this.document = {};
    }

    this.document.comment = 'LITIGE PRIS EN CHARGE';
  }

  public validate(): void {
    if (this.document.comment && this.document.actionPlanName) {
      this.onValidated.emit(this.document);
      this.closeDialog();
    }
  }
}
