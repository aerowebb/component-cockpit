import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';

import { DialogSearchCustomerService } from './dialog-search-customer.service';

/**
 * DEPRECATED: use `aw-dialog-bido-customer`
 */
@Component({
  selector: 'aw-dialog-search-customer',
  templateUrl: 'dialog-search-customer.component.html'
})
export class DialogSearchCustomerComponent extends DialogComponent implements OnInit {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidoCustomerDTO>;
  public selectedObject: BidoCustomerDTO;
  public searchObject: BidoCustomerDTO;
  public totalFilteredRows: number;
  @Input() public iscustomerOwner: boolean;
  @Input() public iscustomerOperator: boolean;
  @Input('customer-code')
  public set qualificationCode(code: string) {
    this.searchObject = {};
    this.searchObject.customerCode = code;
  }

  @Output()
  public onSelected = new EventEmitter<BidoCustomerDTO>();

  public constructor(public dialogSearchCustomerService: DialogSearchCustomerService) {
    super(ComponentOpenMode.Write, 'customerOVSPopup');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
  }

  public ngOnInit(): void {
    this.searchCustomers();
  }

  /**
   * Search customers for operator or owner
   */
  public searchCustomers(): void {
    if (!!this.iscustomerOwner) {
      this.searchObject.isOwner = true;
      this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe(
        (results) => {
          if (results) {
            this.resultsTable = results;
            this.totalFilteredRows = this.resultsTable.list.length;
          }
        },
        () => {
          // TODO
        }
      );
    } else if (!!this.iscustomerOperator) {
      this.searchObject.isOperator = true;
      this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe(
        (results) => {
          if (results) {
            this.resultsTable = results;
            this.totalFilteredRows = this.resultsTable.list.length;
          }
        },
        () => {
          // TODO
        }
      );
    } else {
      this.searchObject = {};
      this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe(
        (results) => {
          if (results) {
            this.resultsTable = results;
            this.totalFilteredRows = this.resultsTable.list.length;
          }
        },
        () => {
          // TODO
        }
      );
    }
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    this.display = false;
  }

  // Clean the selectedObject object if the row is unselect
  public onRowUnselect(): void {
    this.selectedObject = {};
  }

  // Clean all the object on rerender
  public onShow(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.display = false;
  }

  public isOneObjectSelected(): boolean {
    return !this.selectedObject.customerCode;
  }
}
