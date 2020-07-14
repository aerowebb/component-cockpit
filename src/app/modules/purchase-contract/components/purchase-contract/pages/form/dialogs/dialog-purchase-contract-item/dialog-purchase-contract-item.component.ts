import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { ObjectUtils } from '../../../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../../../shared/utils/string-utils';
import { BidtPurchaseContractItemDTO } from '../../../../../../dtos/bidt-purchase-contract-item-dto.interface';

@Component({
  selector: 'aw-dialog-purchase-contract-item',
  templateUrl: './dialog-purchase-contract-item.component.html'
})
export class DialogPurchaseContractItemComponent extends DialogComponent implements OnInit {
  @Input() public item: BidtPurchaseContractItemDTO;
  @Input() public isReadOnlyForm: boolean;
  @Input() public newItem: boolean;
  @Input() public itemTypeListDisplay: SelectItem[];
  @Input() public itemStatusListDisplay: SelectItem[];
  @Output()
  public onValidated: EventEmitter<BidtPurchaseContractItemDTO>;
  @Output()
  public onUpdate: EventEmitter<BidtPurchaseContractItemDTO>;
  public bidtPurchaseContractItemDTO: BidtPurchaseContractItemDTO;

  public constructor(private readonly messageService: MessageService, public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogPurchaseContractItemComponent');

    this.onValidated = new EventEmitter<BidtPurchaseContractItemDTO>();
    this.onUpdate = new EventEmitter<BidtPurchaseContractItemDTO>();
  }

  public ngOnInit() {
    if (!this.item) {
      this.item = {};
    }
  }

  public validate(): void {
    const errors: string[] = this.validateItem();
    if (errors.length === 0) {
      if (this.newItem) {
        this.onValidated.emit(this.item);
      } else {
        this.onUpdate.emit(this.item);
      }
      this.closeDialog();
    } else {
      errors.forEach((error) => this.messageService.showErrorMessage(error));
    }
  }

  public isValid(): boolean {
    return true;
  }

  private validateItem(): string[] {
    const errors: string[] = [];
    if (
      StringUtils.isNullOrEmpty(this.item.pciLabel) ||
      StringUtils.isNullOrEmpty(this.item.pciType) ||
      !ObjectUtils.isDefined(this.item.pciCode)
    ) {
      errors.push('global.warningOnMissingRequiredFields');
    }

    if (this.item.pciStartDate && this.item.pciEndDate && this.item.pciStartDate > this.item.pciEndDate) {
      errors.push(this.getTranslateKey('incoherentDate'));
    }

    return errors;
  }
}
