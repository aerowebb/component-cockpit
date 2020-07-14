import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidoCustomerDTO } from '../../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtProductCustomerDTO } from '../../../../../../shared/types/api-types/bidt-product-customer-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { MaterialFormService } from '../../material-form.service';

@Component({
  selector: 'aw-assign-supplier-popup-form',
  templateUrl: './assign-supplier-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignSuppliersPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public supplierDetail: BidtProductCustomerDTO;
  @Output()
  public onValidated: EventEmitter<BidtProductCustomerDTO>;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public priceCurrency: string;
  @Input()
  public serviceType: SelectItem[];

  public supplier: SelectItem[];

  public constructor(
    public inputValidationService: InputValidationService,
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public materialFormService: MaterialFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignSuppliersPopupFormComponent');
    this.onValidated = new EventEmitter<BidtProductCustomerDTO>();
    this.displayChange = new EventEmitter<boolean>();
    this.priceCurrency = '';
    this.loadSupplier();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.supplierDetail) {
      this.supplierDetail = {};
    } else {
      this.serviceType.forEach((type) => {
        if (type.label === this.supplierDetail.serviceType) {
          this.supplierDetail.serviceType = type.value;
        }
      });
    }
  }

  public getTypeName(): string {
    return 'AssignSuppliersPopupFormComponent';
  }

  // tslint:disable-next-line:no-empty
  public validate(): void {
    if (!!this.supplierDetail) {
      this.supplier.forEach((res) => {
        if (!!this.supplierDetail && this.supplierDetail.bidoCustomerCustomerCode === res.value) {
          this.supplierDetail.supplierName = res.label;
        }
      });
      this.supplierDetail.priceUnit = this.priceCurrency;
      this.onValidated.emit(this.supplierDetail);
    }
    this.cancel();
  }

  public cancel(): void {
    this.display = false;
  }

  public loadSupplier(): void {
    const input = {
      customerCode: '',
      customerType: AWPropertiesConstants.CUSTOMER_TYPE_SUP_KEY
    };
    this.materialFormService.findBidoCustomersBySearchCriteria(input).subscribe((results) => {
      const labelValue: LabelValue<String>[] = [];
      results.list.forEach((res: BidoCustomerDTO) => {
        if (!!res && !!res.customerCode) {
          labelValue.push({
            label: `${res.customerCode}${res.customerName !== null ? `-${res.customerName}` : ''}`,
            value: res.customerCode.toString()
          });
        }
      });

      this.supplier = labelValue;
    });
  }

  public isScreenValid() {
    if (
      this.supplierDetail &&
      this.supplierDetail.bidoCustomerCustomerCode &&
      this.supplierDetail.numberOfDays &&
      this.supplierDetail.priceValue &&
      this.supplierDetail.productQuantity &&
      this.supplierDetail.serviceType
    ) {
      return true;
    }

    return false;
  }
}
