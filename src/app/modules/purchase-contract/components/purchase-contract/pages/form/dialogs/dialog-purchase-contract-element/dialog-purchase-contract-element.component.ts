import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OrderDocumentFormService } from '../../../../../../../../main/logistics/order-document/form/order-document-form.service';
import { ComponentConstants } from '../../../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../../../shared/services/message.service';
import { BirePnDTO } from '../../../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { StringUtils } from '../../../../../../../../shared/utils/string-utils';
import { BidtPurchaseContractElementDTO } from '../../../../../../dtos/bidt-purchase-contract-element-dto.interface';
import { PurchaseContractElementService } from '../../../../../../services/purchase-contract-element.service';

@Component({
  selector: 'aw-dialog-purchase-contract-element',
  templateUrl: './dialog-purchase-contract-element.component.html'
})
export class DialogPurchaseContractElementComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public data: BidtPurchaseContractElementDTO;

  @Output()
  public onAddElementAndServices: EventEmitter<BidtPurchaseContractElementDTO>;

  @Output()
  public onUpdateElementAndServices: EventEmitter<BidtPurchaseContractElementDTO>;

  public bidtPurchaseContractElementDTO: BidtPurchaseContractElementDTO;

  public showQuickSearchMaterialPopup: boolean;

  public constructor(
    private readonly orderDocumentFormService: OrderDocumentFormService,
    private readonly messageService: MessageService,
    private readonly purchaseContractElementService: PurchaseContractElementService,
    public inputValidationService: InputValidationService
  ) {
    super(ComponentOpenMode.Write, ComponentConstants.PCT_PURCHASE_ELEMENT_AND_SERVICES_DIALOG_FORM);
    this.onAddElementAndServices = new EventEmitter<BidtPurchaseContractElementDTO>();
    this.onUpdateElementAndServices = new EventEmitter<BidtPurchaseContractElementDTO>();
  }

  public getComponentName(): string {
    return ComponentConstants.PCT_PURCHASE_ELEMENT_AND_SERVICES_DIALOG_FORM;
  }

  public ngOnInit() {
    this.getLocalCurrency();
    this.calculatePrice();
    this.updateOpenMode(this.openMode); // create
    if (!this.data) {
      this.bidtPurchaseContractElementDTO = {};
      this.getLocalCurrency();
    } else {
      this.bidtPurchaseContractElementDTO = { ...this.data };
    }
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Create) {
        this.onAddElementAndServices.emit(this.bidtPurchaseContractElementDTO);
      } else {
        this.onUpdateElementAndServices.emit(this.bidtPurchaseContractElementDTO);
      }
      this.closeDialog();
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private isScreenValidated() {
    return !StringUtils.isNullOrEmpty(this.bidtPurchaseContractElementDTO.birePnPnCode);
  }

  public closeDialog(): void {
    this.display = false;
  }

  public openMaterialDialog() {
    this.showQuickSearchMaterialPopup = true;
  }

  public setSelectedMaterial(event: BirePnDTO): void {
    this.bidtPurchaseContractElementDTO.birePnPnCode = event.pnCode;
  }

  private getLocalCurrency(): void {
    this.orderDocumentFormService.getLocalCurrency().subscribe((res) => {
      this.bidtPurchaseContractElementDTO.pceCurrency = res;
    });
  }

  public calculatePrice(): void {
    this.purchaseContractElementService.calculatePrice(this.bidtPurchaseContractElementDTO);
  }
}
