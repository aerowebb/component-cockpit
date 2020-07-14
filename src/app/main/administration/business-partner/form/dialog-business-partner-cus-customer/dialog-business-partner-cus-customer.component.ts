import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BidoCusCustomerDTO } from '../../../../../shared/types/api-types/bido-cus-customer-dto.interface';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { SelectItemUtils } from '../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { BusinessPartnerFormService } from '../business-partner-form.service';

@Component({
  selector: 'aw-dialog-business-partner-cus-customer',
  templateUrl: './dialog-business-partner-cus-customer.component.html'
})
export class DialogBusinessPartnerCusCustomerComponent extends DialogComponent implements OnInit {
  @Input()
  public cusCustomer: BidoCusCustomerDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<BidoCusCustomerDTO>;

  public customerLinks: SelectItem[];

  public customerTableData: DialogTableData<BidoCustomerDTO>;
  public showCustomerDialog: boolean;

  public constructor(
    private readonly businessPartnerFormService: BusinessPartnerFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogBusinessPartnerCusCustomerComponent');

    this.onValidated = new EventEmitter<BidoCusCustomerDTO>();

    this.showCustomerDialog = false;

    this.initCustomerTableData();
    this.loadCustomerLinks();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.cusCustomer) {
      this.resetCusCustomer();
    }
  }

  public openCustomerDialog(): void {
    this.showCustomerDialog = true;
  }

  public resetCusCustomer(): void {
    this.cusCustomer = {};
  }

  public validate(): void {
    if (StringUtils.isNullOrEmpty(this.cusCustomer.customerCode)) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.onValidated.emit(this.cusCustomer);
      this.closeDialog();
    }
  }

  private initCustomerTableData(): void {
    const customerTableCols: TableColumn[] = [
      { field: 'customerCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '15rem' },
      { field: 'customerName', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '15rem' }
    ];

    this.customerTableData = {
      componentId: 'DialogCustomer',
      tableCols: customerTableCols,
      tableRows: this.businessPartnerFormService.findBidoCustomersBySearchCriteria({}),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private loadCustomerLinks(): void {
    this.propertiesService.getValue(GenericPropertyConstants.CUSTOMER_LINK_MAP).subscribe((results) => {
      this.customerLinks = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  /**************************************************************************
   * Customer Dialog
   *************************************************************************/

  public onSelectedCustomer(cusCustomer: BidoCustomerDTO): void {
    if (!!cusCustomer) {
      this.cusCustomer.customerCode = cusCustomer.customerCode;
      this.cusCustomer.customerName = cusCustomer.customerName;
    }
  }
}
