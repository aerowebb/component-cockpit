import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-postponement-form',
  styleUrls: ['./dialog-postponement-form.component.scss'],
  templateUrl: './dialog-postponement-form.component.html'
})
export class DialogPostponementFormComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidated: EventEmitter<string>;

  public request: string;
  public constructor() {
    super(ComponentOpenMode.Write, 'DialogPostponementFormComponent');
    this.onValidated = new EventEmitter<string>();
  }

  public ngOnInit(): void {
    // nothing
  }

  public showValidate(): boolean {
    const response = !this.request ? true : false;

    return response;
  }

  public validate(): void {
    this.onValidated.emit(this.request);
    this.closeDialog();
  }
}
