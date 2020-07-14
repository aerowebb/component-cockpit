import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchWharehouseService } from './dialog-search-warehouse.service';

@Component({
  selector: 'aw-dialog-search-warehouse',
  templateUrl: 'dialog-search-warehouse.component.html'
})
export class DialogSearchWharehouseComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidtWarehouseDTO>;
  public selectedObject: BidtWarehouseDTO;
  public searchObject: BidtWarehouseDTO;

  @Output()
  public onSelected = new EventEmitter<BidtWarehouseDTO>();

  // VISIBLE INPUT
  @Input('wh-code')
  public set wharehouseCode(code: string) {
    this.searchObject.whCode = code;
  }

  public constructor(
    public dialogSearchWharehouseService: DialogSearchWharehouseService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'wharehousePopin');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [{ field: 'whCode', alignment: 'center' }];
  }

  /*
    <summary>Search contacts for operator or owner</summary>
    */
  public searchWharehouses(): void {
    this.dialogSearchWharehouseService.findWharehouses(this.searchObject).subscribe(
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
    return !this.selectedObject.whCode;
  }
}
