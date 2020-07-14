import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchSiteService } from './dialog-search-site.service';

@Component({
  selector: 'aw-dialog-search-site',
  templateUrl: 'dialog-search-site.component.html'
})
export class DialogSearchSiteComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidtSiteDTO>;
  public selectedObject: BidtSiteDTO;
  public searchObject: BidtSiteDTO;

  @Output()
  public onSelected = new EventEmitter<BidtSiteDTO>();

  // VISIBLE INPUT
  @Input('site-code')
  public set siteCode(code: string) {
    this.searchObject.siteCode = code;
  }

  public constructor(
    public dialogSearchSiteService: DialogSearchSiteService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'sitePopin');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [{ field: 'siteCode' }, { field: 'bidtCompanyId' }];
  }

  /*
    <summary>Search contacts for operator or owner</summary>
    */
  public searchSites(): void {
    this.dialogSearchSiteService.findSite(this.searchObject).subscribe(
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
    return !this.selectedObject.siteCode;
  }
}
