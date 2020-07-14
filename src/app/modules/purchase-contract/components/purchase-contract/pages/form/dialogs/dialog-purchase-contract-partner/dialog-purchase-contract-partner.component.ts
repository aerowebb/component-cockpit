import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OrderDocumentSearchService } from '../../../../../../../../main/logistics/order-document/search/order-document-search.service';
import { ComponentConstants } from '../../../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../../shared/services/message.service';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../../shared/types/label-value.interface';
import { StringUtils } from '../../../../../../../../shared/utils/string-utils';
import { BidtPurchaseContractPartnerDTO } from '../../../../../../dtos/bidt-purchase-contract-partner-dto.interface';

@Component({
  selector: 'aw-dialog-purchase-contract-partner',
  templateUrl: './dialog-purchase-contract-partner.component.html'
})
export class DialogPurchaseContractPartnerComponent<T> extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public data: BidtPurchaseContractPartnerDTO;

  @Input()
  public partnerRoleList: LabelValue<String>[];

  @Output()
  public onAddPartner: EventEmitter<BidtPurchaseContractPartnerDTO>;

  @Output()
  public onUpdatePartner: EventEmitter<BidtPurchaseContractPartnerDTO>;

  public bidtPurchaseContractPartnerDTO: BidtPurchaseContractPartnerDTO;

  public cudstomersCodeOptions: LabelValue<string>[];

  public constructor(
    private readonly orderDocumentSearchService: OrderDocumentSearchService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, ComponentConstants.PCT_PURCHASE_PARTNER_DIALOG_FORM);
    this.onAddPartner = new EventEmitter<BidtPurchaseContractPartnerDTO>();
    this.onUpdatePartner = new EventEmitter<BidtPurchaseContractPartnerDTO>();
    this.partnerRoleList = [];
  }

  public getComponentName(): string {
    return ComponentConstants.PCT_PURCHASE_PARTNER_DIALOG_FORM;
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode); // create
    if (!this.data) {
      this.data = {};
      this.bidtPurchaseContractPartnerDTO = {};
    } else {
      this.bidtPurchaseContractPartnerDTO = { ...this.data };
    }
    this.loadCudstomersCodeOptions();
  }

  private loadCudstomersCodeOptions(): void {
    this.orderDocumentSearchService.findBidoCustomerBySearchCriteriaOrder().subscribe((results) => {
      this.cudstomersCodeOptions = results || [];
    });
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Create) {
        this.onAddPartner.emit(this.bidtPurchaseContractPartnerDTO);
        this.closeDialog();
      } else {
        this.onUpdatePartner.emit(this.bidtPurchaseContractPartnerDTO);
        this.closeDialog();
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private isScreenValidated() {
    return (
      !StringUtils.isNullOrEmpty(this.bidtPurchaseContractPartnerDTO.customerCode) &&
      !StringUtils.isNullOrEmpty(this.bidtPurchaseContractPartnerDTO.pcpRole)
    );
  }

  public closeDialog(): void {
    this.display = false;
  }
}
