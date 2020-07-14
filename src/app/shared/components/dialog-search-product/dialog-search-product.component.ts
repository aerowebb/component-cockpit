import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchProductService } from './dialog-search-product.service';

@Component({
  selector: 'aw-dialog-search-product',
  templateUrl: 'dialog-search-product.component.html'
})
export class DialogSearchProductComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BirePnDTO>;
  public selectedObject: BirePnDTO;
  public searchObject: BirePnDTO;

  @Input('pn-code')
  public set pnCode(code: string) {
    this.searchObject.pnCode = code;
  }

  @Output()
  public onSelected = new EventEmitter<BirePnDTO>();

  public constructor(
    public dialogSearchProductService: DialogSearchProductService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'productOVSPopup');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [{ field: 'pnCode' }, { field: 'articleDesignation' }];
  }

  public searchProducts(): void {
    this.dialogSearchProductService.findProducts(this.searchObject).subscribe(
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
    return !this.selectedObject.pnCode;
  }
}
