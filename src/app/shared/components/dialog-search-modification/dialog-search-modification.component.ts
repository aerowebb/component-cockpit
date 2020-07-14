import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { BireModificationDTO } from '../../types/api-types/bire-modification-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { TableColumn } from '../../types/table-column.interface';

import { DialogSearchModificationService } from './dialog-search-modification.service';

@Component({
  selector: 'aw-dialog-search-modification',
  templateUrl: 'dialog-search-modification.component.html'
})
export class DialogSearchModificationComponent extends DialogComponent implements OnInit {
  @Output()
  public onSelected: EventEmitter<BireModificationDTO>;

  public filteredRowsNb: number;
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BireModificationDTO>;
  public searchObject: BireModificationDTO;
  public familyCodeList: LabelValue<string>[];
  public selectedFamily: string | undefined;
  public selectedModification: BireModificationDTO | undefined;
  public isLoading: boolean;

  public constructor(private readonly dialogSearchModificationService: DialogSearchModificationService) {
    super(ComponentOpenMode.Write, 'DialogSearchModificationComponent');

    this.onSelected = new EventEmitter<BireModificationDTO>();
    this.filteredRowsNb = 0;
    this.resultsTable = { list: [], moreResults: false };
    this.searchObject = {};
    this.searchObject = { familyCode: undefined };
    this.isLoading = false;

    this.resultsTableCols = [
      { field: 'familyCode', alignment: 'left', width: '15%' },
      { field: 'structureType', alignment: 'left', width: '10%' },
      { field: 'modificationType', alignment: 'left', width: '15%' },
      { field: 'modificationNumber', alignment: 'left', width: '15%' },
      { field: 'modificationRevisionNumber', alignment: 'left', width: '13%' },
      { field: 'modificationDocumentUrl', alignment: 'left', width: '18%' },
      { field: 'modificationTitle', alignment: 'left', width: '15%' }
    ];
  }

  public ngOnInit(): void {
    this.searchObject = this.searchObject || {};
    this.loadDropDownList();
  }

  public cancel(): void {
    super.closeDialog();
  }

  private loadDropDownList(): void {
    this.dialogSearchModificationService.findBireFamily().subscribe((results) => {
      this.selectedFamily = undefined;
      this.familyCodeList = results;
    });
  }

  public onChange(event: string): void {
    if (!!event) {
      const familys: string[] = event.split('-');
      this.searchObject.familyCode = familys[0];
      this.searchObject.structureType = familys[1];
    } else {
      this.searchObject.familyCode = undefined;
      this.searchObject.structureType = undefined;
    }
  }

  public search(): void {
    this.loadModifications();
    this.selectedModification = undefined;
  }

  private loadModifications(): void {
    this.isLoading = true;
    this.dialogSearchModificationService.searchModificationList(this.searchObject).subscribe(
      (results) => {
        this.isLoading = false;
        if (results) {
          this.resultsTable = results;
          this.filteredRowsNb = this.resultsTable.list.length;
        }
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  public validate(): void {
    this.onSelected.emit(this.selectedModification);
    super.closeDialog();
  }
}
