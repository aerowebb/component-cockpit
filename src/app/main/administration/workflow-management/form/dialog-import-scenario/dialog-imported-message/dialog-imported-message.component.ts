import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-imported-message',
  templateUrl: './dialog-imported-message.component.html'
})
export class DialogImportedMessageComponent extends DialogComponent implements OnInit {
  @Output()
  public onClose: EventEmitter<string>;

  @Input()
  public importReportMessage: string;

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogImportedMessageComponent');
    this.onClose = new EventEmitter();
  }

  public ngOnInit(): void {
    return;
  }

  public close() {
    this.onClose.emit();
    this.closeDialog();
  }
}
