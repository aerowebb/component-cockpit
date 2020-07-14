import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { TableUtils } from '../../utils/table-utils';

import { DialogBidoCustomerService } from './dialog-bido-customer.service';

@Component({
  selector: 'aw-dialog-bido-customer',
  styleUrls: ['./dialog-bido-customer.component.scss'],
  templateUrl: './dialog-bido-customer.component.html'
})
export class DialogBidoCustomerComponent extends DialogComponent implements OnInit {
  @Input()
  public searchObject: BidoCustomerDTO;
  @Output()
  public onValidated: EventEmitter<BidoCustomerDTO>;

  public customersTableCols: TableColumn[];
  public customersTable: SearchResultsDTO<BidoCustomerDTO>;
  public displayedCustomerRowNb: number;
  public selectedCustomer: BidoCustomerDTO | undefined;

  public constructor(
    private readonly messageService: MessageService,
    private readonly dialogBidoCustomerService: DialogBidoCustomerService
  ) {
    super(ComponentOpenMode.Write, 'DialogBidoCustomerComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidoCustomerDTO>();

    this.customersTable = { list: [], moreResults: false };
    this.displayedCustomerRowNb = 0;
    this.selectedCustomer = undefined;

    this.initTableCols();
  }

  public ngOnInit(): void {
    if (!this.searchObject) {
      this.searchObject = {};
    }
  }

  public search(): void {
    this.dialogBidoCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe((result) => {
      if (!!result) {
        this.customersTable = result;
        this.customersTable.list = TableUtils.removeEmptyRows(this.customersTable.list, this.customersTableCols);

        this.displayedCustomerRowNb = this.customersTable.list.length;
      }

      this.selectedCustomer = undefined;
    });
  }

  public updateDisplayedCustomerRowNb(value: number): void {
    this.displayedCustomerRowNb = value;
  }

  public validate(): void {
    if (!this.selectedCustomer) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.selectedCustomer);
      this.closeDialog();
    }
  }

  private initTableCols(): void {
    this.customersTableCols = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
  }
}
