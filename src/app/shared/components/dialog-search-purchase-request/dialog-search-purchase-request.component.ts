import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BidtPurchaseRequestDTO } from '../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { DateService } from '../../services/date.service';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { SessionService } from '../../services/session.service';
import { LabelValue } from '../../types/label-value.interface';
import { LabelValueUtils } from '../../utils/label-value-utils';

import { DialogSearchPurchaseRequestService } from './dialog-search-purchase-request.service';

@Component({
  selector: 'aw-dialog-search-purchase-request',
  templateUrl: 'dialog-search-purchase-request.component.html'
})
export class DialogSearchPurchaseRequestComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidtPurchaseRequestDTO>;
  public selectedObject: BidtPurchaseRequestDTO;
  public searchObject: BidtPurchaseRequestDTO;

  // DropDown
  public propertyPrCategory: LabelValue<string>[];
  public propertyPrStatus: LabelValue<string>[];

  // Additionnal search criteria
  public customerCode: string;
  public creation: Date;
  public reception: Date;

  @Output()
  public onSelected = new EventEmitter<BidtPurchaseRequestDTO>();

  // VISIBLE INPUT
  // tslint:disable-next-line: no-unsafe-any
  @Input('pr-code')
  public set purchaseOrderCode(code: string) {
    this.searchObject.prCode = code;
  }

  public constructor(
    public dialogSearchPurchaseRequestService: DialogSearchPurchaseRequestService,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, 'purchaseRequestPopin');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'prCode', alignment: 'left' },
      { field: 'prName', alignment: 'left' },
      { field: 'prDescription', alignment: 'left' },
      { field: 'creationDate', alignment: 'left' },
      { field: 'receptionDate', alignment: 'left' },
      { field: 'bidoCustomerCustomerCode', alignment: 'left' },
      { field: 'prCategory', alignment: 'left' },
      { field: 'prStatus', alignment: 'left' }
    ];

    this.loadPrCategories();
    this.loadPrStatus();
  }

  public searchPurchaseRequests(): void {
    this.dialogSearchPurchaseRequestService
      .findBidtPurchaseRequestsByCriteriaForOVS(this.searchObject, this.customerCode, this.creation, this.reception)
      .subscribe(
        (results) => {
          if (results) {
            results.list.forEach((element) => {
              LabelValueUtils.stringValueToLabel(element, 'prCategory', this.propertyPrCategory);
              LabelValueUtils.stringValueToLabel(element, 'prStatus', this.propertyPrStatus);
              element.creationDate = this.formatDate(element.prCreationDate);
              element.receptionDate = this.formatDate(element.prReceptionDate);
            });
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
    LabelValueUtils.labelToStringValue(this.selectedObject, 'prCategory', this.propertyPrCategory);
    LabelValueUtils.labelToStringValue(this.selectedObject, 'prStatus', this.propertyPrStatus);
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
    return !this.selectedObject.prCode;
  }

  private loadPrCategories(): void {
    this.propertiesService.getValue('getPurchaseCategoryMap').subscribe(
      (results) => {
        if (results) {
          this.propertyPrCategory = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPrCategoryList'));
      }
    );
  }

  private loadPrStatus(): void {
    this.propertiesService.getValue('getPurchaseStatusMap').subscribe(
      (results) => {
        if (results) {
          this.propertyPrStatus = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPrStatusList'));
      }
    );
  }

  private formatDate(date: number | undefined): string {
    if (!!date) {
      return this.dateService.dateToString(new Date(date));
    } else {
      return '';
    }
  }
}
