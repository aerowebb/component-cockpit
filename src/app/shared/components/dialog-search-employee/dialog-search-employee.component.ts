import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchEmployeeService } from './dialog-search-employee.service';

@Component({
  selector: 'aw-dialog-search-employee',
  templateUrl: 'dialog-search-employee.component.html'
})
export class DialogSearchEmployeeComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidtEmployeeDTO>;
  public selectedObject: BidtEmployeeDTO;
  public searchObject: BidtEmployeeDTO;
  public filterTxt: string;

  @Input('employee-name')
  public set name(name: string) {
    this.searchObject.employeeLastName = name;
  }

  @Input('employee-firstName')
  public set firstName(firstName: string) {
    this.searchObject.employeeFirstName = firstName;
  }

  @Input('employee-number')
  public set employeeNumber(employeeNumber: string) {
    this.searchObject.employeeNumber = employeeNumber;
  }

  @Output()
  public onSelected = new EventEmitter<BidtEmployeeDTO>();

  public constructor(
    public dialogSearchEmployeeService: DialogSearchEmployeeService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'employeeOVSPopup');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'employeeLastName', alignment: 'left' },
      { field: 'employeeFirstName', alignment: 'left' },
      { field: 'employeeNumber', alignment: 'left' }
    ];
    this.searchEmployees();
  }

  /*
    <summary>Search models for operator or owner</summary>
    */
  public searchEmployees(): void {
    this.dialogSearchEmployeeService.findEmployee(this.searchObject).subscribe(
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
    return !this.selectedObject.employeeNumber;
  }

  public resetFilter() {
    this.filterTxt = '';
  }
}
