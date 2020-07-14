import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-action-plan',
  templateUrl: './dialog-action-plan.component.html'
})
export class DialogActionPlanComponent extends DialogComponent implements OnInit {
  @Input()
  public actionPlanList: SelectItem[];
  @Output()
  public onValidated: EventEmitter<string>;
  public selectedAction: string;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogActionPlanComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<string>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
  }

  public validate(): void {
    if (this.selectedAction) {
      this.onValidated.emit(this.selectedAction);
      this.closeDialog();
    }
  }
}
