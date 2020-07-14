import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BidoContactDTO } from '../../../../../shared/types/api-types/bido-contact-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-contacts-popup',
  templateUrl: './contacts-popup.component.html'
})
export class ContactsPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public contact: BidoContactDTO;

  @Output()
  public onCreate: EventEmitter<BidoContactDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public showQuickSearchContactPopup: boolean;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Write, 'ContactsPopupComponent');

    this.onCreate = new EventEmitter<BidoContactDTO>();

    this.showQuickSearchContactPopup = false;
  }

  public ngOnInit() {
    if (!this.contact) {
      this.contact = {};
    }
  }

  public quickSearchContact(): void {
    this.showQuickSearchContactPopup = true;
  }

  public associate(): void {
    if (!!this.contact) {
      this.onCreate.emit(this.contact);
      this.display = false;
    } else {
      super.throwUnboundLocalError('associate', 'this.contact');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (!!this.contact && !!this.contact.contactName && this.contact.contactName.trim().length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  /*************************************************************************
   * Dialog Search Customer
   *************************************************************************/

  public setSelectedContact(event: BidoContactDTO): void {
    if (!!this.contact) {
      if (Object.keys(event).length === 0) {
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      }
      this.contact.contactName = event.contactName;
      this.contact.customerCode = event.customerCode;
      this.contact.customerName = event.customerName;
    } else {
      super.throwUnboundLocalError('setSelectedContact', 'this.contact');
    }
  }
}
