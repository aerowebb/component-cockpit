import { Component, Input } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { WoLogbookUpdateLineDTO } from '../../../../../shared/types/api-types/wo-logbook-update-line-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

// TODO: should be put in its own module
@Component({
  selector: 'aw-valid-wo-line',
  styleUrls: ['./valid-wo-line.component.scss'],
  templateUrl: './valid-wo-line.component.html'
})
export class ValidWoLineComponent extends DialogComponent {
  @Input()
  public elementsToValidate: WoLogbookUpdateLineDTO[];

  public constructor() {
    super(ComponentOpenMode.Write, 'ValidWoLineComponent');
    this.initData();
  }

  public getComponentName(): string {
    return 'ValidWoLineComponent';
  }

  // init data
  private initData(): void {
    if (!this.elementsToValidate) {
      this.elementsToValidate = [];
    }
  }

  // process event
  public cancel(): void {
    super.closeDialog();
  }

  // process event
  public validate(): void {
    // TODO : validation
    super.closeDialog();
  }
}
