import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchFleetService } from './dialog-search-fleet.service';

@Component({
  selector: 'aw-dialog-search-fleet',
  templateUrl: 'dialog-search-fleet.component.html'
})
export class DialogSearchFleetComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidoFleetDTO>;
  public selectedObject: BidoFleetDTO;
  public searchObject: BidoFleetDTO;

  @Output()
  public onSelected = new EventEmitter<BidoFleetDTO>();

  // VISIBLE INPUT
  @Input('fleet-code')
  public set fleetCode(code: string) {
    this.searchObject.fleetCode = code;
  }

  public constructor(
    public dialogSearchFleetService: DialogSearchFleetService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'fleetPopin');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'fleetCode', alignment: 'left' },
      { field: 'fleetName', alignment: 'left' },
      { field: 'customerCode', alignment: 'left' }
    ];
  }

  /*
    <summary>Search contacts for operator or owner</summary>
    */
  public searchFleets(): void {
    this.dialogSearchFleetService.findBidoFleetsBySearchCriteria(this.searchObject).subscribe(
      (results) => {
        if (results) {
          this.selectedObject = {};
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
    return !this.selectedObject.fleetCode;
  }
}
