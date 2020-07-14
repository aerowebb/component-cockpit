import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BidtSalesRequestDTO } from '../../../shared/types/api-types/bidt-sales-request-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { SessionService } from '../../services/session.service';

import { DialogSearchSalesRequestService } from './dialog-search-sales-request.service';

@Component({
  selector: 'aw-dialog-search-sales-request',
  templateUrl: 'dialog-search-sales-request.component.html'
})
export class DialogSearchSalesRequestComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidtSalesRequestDTO>;
  public selectedObject: BidtSalesRequestDTO;
  public searchObject: BidtSalesRequestDTO;

  // Additionnal search criteria
  public customerCode: string;
  public creation: Date;
  public delivery: Date;

  @Output()
  public onSelected = new EventEmitter<BidtSalesRequestDTO>();

  // VISIBLE INPUT
  @Input('sr-code')
  public set salesOrderCode(code: string) {
    this.searchObject.srCode = code;
  }

  public constructor(
    public dialogSearchSalesRequestService: DialogSearchSalesRequestService,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'salesRequestPopin');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'srCode', width: '250px' },
      { field: 'srName', width: '250px' },
      { field: 'srDescription', width: '350px' },
      { field: 'srCreationDate', width: '200px', isDate: true },
      { field: 'srDeliveryDate', width: '200px', isDate: true },
      { field: 'bidoCustomerCustomerCode', width: '200px' }
    ];
  }

  public searchSalesRequests(): void {
    this.dialogSearchSalesRequestService
      .findBidtSalesRequestsByCriteriaForOVS(this.searchObject, this.customerCode, this.creation, this.delivery)
      .subscribe(
        (results) => {
          if (results) {
            this.resultsTable = results;
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
        }
      );
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    this.selectedObject = {};
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
    return !this.selectedObject.srCode;
  }
}
