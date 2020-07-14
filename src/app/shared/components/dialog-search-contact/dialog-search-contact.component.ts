import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BidoContactDTO } from '../../../shared/types/api-types/bido-contact-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchContactService } from './dialog-search-contact.service';

@Component({
  selector: 'aw-dialog-search-contact',
  templateUrl: 'dialog-search-contact.component.html'
})
export class DialogSearchContactComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidoContactDTO>;
  public selectedObject: BidoContactDTO;
  public searchObject: BidoContactDTO;
  public totalFilteredRows: number;
  public isLoading: boolean = false;

  @Input('contact-name')
  public set contactCode(name: string) {
    this.searchObject = {};
    this.searchObject.contactName = name;
  }

  @Output()
  public onSelected = new EventEmitter<BidoContactDTO>();

  public constructor(
    public dialogSearchContactService: DialogSearchContactService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'contactOVSPopup');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.totalFilteredRows = 0;
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'customerCode', alignment: 'left', width: '33%' },
      { field: 'contactName', alignment: 'left', width: '33%' },
      { field: 'customerName', alignment: 'left', width: '33%' }
    ];
  }

  /*
    <summary>Search contacts for operator or owner</summary>
    */
  public searchContacts(): void {
    this.isLoading = true;
    this.dialogSearchContactService.findContact(this.searchObject).subscribe(
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
    this.totalFilteredRows = 0;
  }

  public onFilter(table: BidoContactDTO[]): void {
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
    this.display = false;
  }

  public isOneObjectSelected(): boolean {
    return !this.selectedObject.customerCode;
  }
}
