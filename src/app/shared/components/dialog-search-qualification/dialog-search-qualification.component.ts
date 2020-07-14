import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BireQualificationDTO } from '../../../shared/types/api-types/bire-qualification-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchQualificationService } from './dialog-search-qualification.service';

@Component({
  selector: 'aw-dialog-search-qualification',
  templateUrl: 'dialog-search-qualification.component.html'
})
export class DialogSearchQualificationComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BireQualificationDTO>;
  public selectedObject: BireQualificationDTO;
  public searchObject: BireQualificationDTO;
  public filterTxt?: string;
  public currency: string;

  @Input('qualification-code')
  public set qualificationCode(code: string) {
    this.searchObject = {};
    this.searchObject.qualificationCode = code;
  }

  @Output()
  public onSelected = new EventEmitter<BireQualificationDTO>();

  public constructor(
    private readonly dialogSearchQualificationService: DialogSearchQualificationService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'qualificationOVSPopup');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'qualificationCode', alignment: 'left', width: '15%' },
      { field: 'qualificationName', alignment: 'left', width: '20%' },
      { field: 'qualificationDescription', alignment: 'left', width: '45%' },
      { field: 'averageHourRate', alignment: 'left', width: '20%' }
    ];
    this.searchQualifications();
    this.loadCurrency();
  }

  /*
    <summary>Search qualifications for operator or owner</summary>
    */
  public searchQualifications(): void {
    const precision = 2;
    this.dialogSearchQualificationService.findQualification(this.searchObject).subscribe(
      (results) => {
        if (results) {
          this.resultsTable = results;

          this.resultsTable.list.forEach((res) => {
            res.averageHourRate = res.averageHourRate
              ? parseInt(res.averageHourRate, 10).toFixed(precision) + ' ' + this.currency
              : res.averageHourRate;
          });
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

  private loadCurrency(): void {
    this.dialogSearchQualificationService.getLocalCurrency().subscribe((result) => {
      this.currency = result;
    });
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
    return !this.selectedObject.qualificationCode;
  }

  public resetFilter() {
    this.filterTxt = undefined;
  }
}
