import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchMaterialService } from './dialog-search-material.service';

@Component({
  selector: 'aw-dialog-search-material',
  templateUrl: './dialog-search-material.component.html',
  styleUrls: ['./dialog-search-material.component.scss']
})
export class DialogSearchMaterialComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BirePnDTO>;
  public selectedObject: BirePnDTO;
  public searchObject: BirePnDTO;
  public totalFilteredRows: number;
  public isLoading: boolean = false;

  @Input('material-code')
  public set materialCode(name: string) {
    this.searchObject = {};
    this.searchObject.pnCode = name;
  }

  @Input()
  public pnType: string;

  @Output()
  public onSelected = new EventEmitter<BirePnDTO>();

  public constructor(
    public dialogSearchMaterialService: DialogSearchMaterialService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'materialOVSPopup');

    this.displayChange = new EventEmitter<boolean>();

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.totalFilteredRows = 0;
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'pnCode', alignment: 'left', width: '35%' },
      { field: 'articleDesignation', alignment: 'left', width: '65%' }
    ];
  }

  /*
    <summary>Search materials </summary>
    */
  public searchMaterials(): void {
    this.isLoading = true;
    const searchData: BirePnDTO = {
      pnCode: this.searchObject.pnCode ? this.searchObject.pnCode.trim() : '',
      articleDesignation: this.searchObject.articleDesignation ? this.searchObject.articleDesignation.trim() : '',
      pnType: this.pnType ? this.pnType : ''
    };
    this.dialogSearchMaterialService.findProductsBySearchCriteria(searchData).subscribe(
      (results) => {
        this.isLoading = false;
        if (results) {
          this.resultsTable = results;
          this.totalFilteredRows = this.resultsTable.list.length;
        }
      },
      () => {
        this.isLoading = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    // this.display = false;
    this.closeDialog();
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
    this.totalFilteredRows = 0;
  }

  public onFilter(table: BirePnDTO[]): void {
    this.totalFilteredRows = table.length;
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
    this.totalFilteredRows = 0;
    this.closeDialog();
  }

  public isOneObjectSelected(): boolean {
    return !this.selectedObject.pnCode;
  }
}
