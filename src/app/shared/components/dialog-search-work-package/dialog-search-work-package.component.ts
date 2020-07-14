import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BidmProjectDTO } from '../../../shared/types/api-types/bidm-project-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { SessionService } from '../../services/session.service';
import { LabelValue } from '../../types/label-value.interface';
import { LabelValueUtils } from '../../utils/label-value-utils';

import { DialogSearchWorkPackageService } from './dialog-search-work-package.service';

@Component({
  selector: 'aw-dialog-search-work-package',
  templateUrl: 'dialog-search-work-package.component.html'
})
export class DialogSearchWorkPackageComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidmProjectDTO>;
  public selectedObject: BidmProjectDTO;
  public searchObject: BidmProjectDTO;

  // DropDown
  public propertyProjectStatus: LabelValue<string>[];

  @Output()
  public onSelected = new EventEmitter<BidmProjectDTO>();

  // VISIBLE INPUT
  @Input('project-number')
  public set projectNumber(code: number) {
    this.searchObject.projectNumber = code;
  }

  public constructor(
    public dialogSearchWorkPackageService: DialogSearchWorkPackageService,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'projectPopin');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'projectName' },
      { field: 'projectNumber' },
      { field: 'projectStartDate', isDate: true },
      { field: 'projectEndDate', isDate: true },
      { field: 'statusState' }
    ];

    this.loadProjectStatus();
  }

  public searchWorkPackages(): void {
    this.dialogSearchWorkPackageService.findProjects(this.searchObject).subscribe(
      (results) => {
        if (results) {
          results.list = results.list.filter(
            (project) => project.statusState !== AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED
          );
          results.list.forEach((element) => {
            LabelValueUtils.stringValueToLabel<BidmProjectDTO>(element, 'statusState', this.propertyProjectStatus);
          });
          this.resultsTable = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  public onValidate(): void {
    LabelValueUtils.labelToStringValue<BidmProjectDTO>(this.selectedObject, 'statusState', this.propertyProjectStatus);
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
    return !this.selectedObject.projectId;
  }

  private loadProjectStatus(): void {
    this.dialogSearchWorkPackageService.getAirmProjectStatusList().subscribe(
      (result) => {
        this.propertyProjectStatus = result;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetProjectStatusList'));
      }
    );
  }
}
