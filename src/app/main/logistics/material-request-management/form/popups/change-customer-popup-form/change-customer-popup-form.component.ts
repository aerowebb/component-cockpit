import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BidoCustomerDTO } from '../../../../../../../../generated_files/api-types/bido-customer-dto.interface';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidtProcurementRequestDTO } from '../../../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { LogisticsService } from '../../../../logistics.service';
import { MaterialRequestManagementFormService } from '../../material-request-management-form.service';

@Component({
  selector: 'aw-change-customer-popup-form',
  templateUrl: './change-customer-popup-form.component.html'
})
export class ChangeCustomerPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public procurementRequest: BidtProcurementRequestDTO;
  @Output()
  public onValidated: EventEmitter<BidoCustomerDTO>;

  public customers: LabelValue<BidoCustomerDTO>[];
  public newCustomer: BidoCustomerDTO;

  public constructor(
    public inputValidationService: InputValidationService,
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    private readonly materialRequestManagementFormService: MaterialRequestManagementFormService,
    private readonly logisticsService: LogisticsService
  ) {
    super(ComponentOpenMode.Read, 'ChangeCustomerPopupFormComponent');
    this.onValidated = new EventEmitter<BidoCustomerDTO>();
    this.displayChange = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.newCustomer = {};
    if (!this.procurementRequest) {
      this.procurementRequest = {};
    }

    this.customers = [];
    this.materialRequestManagementFormService.findAllBidoCustomer().subscribe((customers: BidoCustomerDTO[]) => {
      customers.forEach((customer: BidoCustomerDTO) => {
        if (customer.isOwner && customer.customerCode) {
          this.customers.push({
            label:
              (customer.customerCode as string) +
              (customer.customerName ? ' - ' + (customer.customerName as string) : ''),
            value: customer
          });
        }
      });
    });
  }

  public validate(): void {
    if (this.newCustomer) {
      this.procurementRequest.bidoCustomer = this.newCustomer;
      this.procurementRequest.bidoCustomerCustomerCode = this.newCustomer.customerCode;
      this.procurementRequest.bidoCustomerMandant = this.newCustomer.customerMandant;
      this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest).subscribe({
        next: (procurementRequest) => {
          this.onValidated.emit(this.newCustomer);
          this.cancel();
        }
      });
    }
  }

  public cancel(): void {
    this.display = false;
  }
}
