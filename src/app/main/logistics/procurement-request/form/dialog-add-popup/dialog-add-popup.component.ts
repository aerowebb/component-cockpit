import { Component, EventEmitter, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-add-popup',
  templateUrl: './dialog-add-popup.component.html',
  styleUrls: ['./dialog-add-popup.component.scss']
})
export class DialogAddPopupComponent extends DialogComponent {
  public pn: BirePnDTO | undefined;
  public quantity: string | undefined;

  public pnDialogVisible: boolean;

  @Output()
  private readonly onValidate: EventEmitter<{ pn: BirePnDTO | undefined; quantity: string }>;

  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogAddPopupComponent');

    this.onValidate = new EventEmitter<{ pn: BirePnDTO | undefined; quantity: string }>();

    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public onSelectPn(event: BirePnDTO): void {
    this.pn = event;
  }

  public searchPn(): void {
    this.pnDialogVisible = true;
  }

  public validate() {
    this.onValidate.emit({ pn: this.pn as BirePnDTO, quantity: this.quantity as string });
  }

  // ////////////////////////////////////////////////////////////////////////////

  private init(): void {
    this.pn = undefined;
    this.quantity = undefined;

    this.pnDialogVisible = false;
  }
}
