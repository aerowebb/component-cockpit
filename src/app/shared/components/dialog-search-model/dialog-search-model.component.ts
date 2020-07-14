import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ModelOVSOutputDTO } from '../../../shared/types/api-output-types/ovs-popup/model-ovs-output-dto.interface';
import { BireModelDTO } from '../../../shared/types/api-types/bire-model-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchModelService } from './dialog-search-model.service';

@Component({
  selector: 'aw-dialog-search-model',
  templateUrl: 'dialog-search-model.component.html'
})
export class DialogSearchModelComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<ModelOVSOutputDTO>;
  public selectedObject: ModelOVSOutputDTO;
  public searchObject: BireModelDTO;

  @Input('model-code')
  public set qualificationCode(code: string) {
    this.searchObject = {};
    this.searchObject.modelCode = code;
  }

  @Input('family-code')
  public set familyCode(familyCode: string) {
    this.searchObject.familyCode = familyCode;
  }

  @Input('variant-code')
  public set variantCode(variantCode: string) {
    this.searchObject.variantCode = variantCode;
  }

  @Output() public onSelected = new EventEmitter<BireModelDTO>();

  public constructor(
    public dialogSearchModelService: DialogSearchModelService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchModelComponent');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'modelCode', alignment: 'left' },
      { field: 'modelName', alignment: 'left' },
      { field: 'familyVariant', alignment: 'left' }
    ];
  }

  public searchModels(): void {
    this.dialogSearchModelService.findModel(this.searchObject).subscribe(
      (results) => {
        if (results) {
          results.list.forEach((element) => {
            element.familyVariant =
              !!element.familyCode && !!element.variantCode
                ? element.familyCode + '-' + element.variantCode
                : !!element.familyCode
                ? element.familyCode
                : !!element.variantCode
                ? element.variantCode
                : '';
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
    this.onSelected.emit(this.selectedObject);
    this.display = false;
  }

  // Clean the selectedContact object if the row is unselect
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
    return !this.selectedObject.modelCode;
  }
}
