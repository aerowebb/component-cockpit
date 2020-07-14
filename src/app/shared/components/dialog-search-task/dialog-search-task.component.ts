import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { DateService } from '../../services/date.service';
import { PropertiesService } from '../../services/properties.service';
import { SessionService } from '../../services/session.service';
import { VisitCriteriaMPInput } from '../../types/api-input-types/task-management/visit-criteria-mp-input.interface';
import { BireTaskDTO } from '../../types/api-types/bire-task-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../types/api-types/find-bire-task-by-criteria-input.interface';
import { LabelValue } from '../../types/label-value.interface';
import { LabelValueUtils } from '../../utils/label-value-utils';

import { DialogSearchTaskService } from './dialog-search-task.service';

interface TaskTableRow {
  taskCode?: string | undefined;
  taskVersion?: string | undefined;
  taskTypeCode?: string | undefined;
  taskDesignation?: string | undefined;
  taskGroup?: string | undefined;
  taskStatus?: string | undefined;
  taskApplicabilityDate?: string | undefined;
  _obj?: BireTaskDTO;
}

@Component({
  selector: 'aw-dialog-search-task',
  templateUrl: 'dialog-search-task.component.html'
})
export class DialogSearchTaskComponent extends DialogComponent implements OnInit {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<TaskTableRow>;
  public resultsTableLoading: boolean;
  public selectedObjects: TaskTableRow[];
  public searchObject: BireTaskDTO;

  // DropDown
  public taskTypeList: LabelValue<string>[];
  public taskStatusList: LabelValue<string>[];
  public taskGroupList: LabelValue<string>[];
  public taskKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public isTypeVisit: boolean;

  @Output()
  public onSelected = new EventEmitter<BireTaskDTO | BireTaskDTO[]>();

  @Input()
  public selectionMultiple: boolean;

  @Input()
  public familyCode: string;
  @Input()
  public variantCode: string;

  @Input('is-visit')
  public set isVisit(code: boolean) {
    this.isTypeVisit = code;
  }

  public selectionMode = 'single';

  public constructor(
    public dialogSearchTaskService: DialogSearchTaskService,
    private readonly propertiesService: PropertiesService,
    private readonly dateService: DateService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, 'taskPopin');
    this.taskKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.loadTypes();
    this.resultsTable = {
      list: [],
      moreResults: false
    };

    this.selectionMultiple = false;
    this.resultsTableLoading = false;
    this.searchObject = {};
    this.selectedObjects = [];
  }

  public ngOnInit(): void {
    this.selectionMode = this.selectionMultiple ? 'multiple' : 'single';

    this.resultsTableCols = [
      { field: 'taskCode', alignment: 'left', width: '15%' },
      { field: 'taskVersion', alignment: 'left', width: '5%' },
      { field: 'taskDesignation', alignment: 'left', width: '25%' },
      { field: 'taskStatus', alignment: 'left', width: '10%' }
    ];

    if (!this.isTypeVisit) {
      this.resultsTableCols.push({ field: 'taskTypeCode', alignment: 'left', width: '15%' });
      this.resultsTableCols.push({ field: 'taskGroup', alignment: 'left', width: '15%' });
    }

    this.resultsTableCols.push();
    this.resultsTableCols.push({ field: 'taskApplicabilityDate', alignment: 'left', width: '15%' });
  }

  public searchTasks(): void {
    this.resultsTableLoading = true;

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    let observableTask;

    if (this.searchObject && this.isTypeVisit) {
      const visitCriteriaMPInput: VisitCriteriaMPInput = {
        bireTaskDTO: this.searchObject
      };
      observableTask = this.dialogSearchTaskService.findBireVisitsByCriteriaForMP(visitCriteriaMPInput);
    } else {
      const findBireTaskByCriteriaInput: FindBireTaskByCriteriaInput = {
        bireTaskDTO: this.searchObject
      };
      if (!!this.familyCode) {
        findBireTaskByCriteriaInput.familyCode = this.familyCode;
      }
      if (!!this.variantCode) {
        findBireTaskByCriteriaInput.variantCode = this.variantCode;
      }
      observableTask = this.dialogSearchTaskService.findBireTasksByCriteria(findBireTaskByCriteriaInput);
    }

    observableTask.subscribe((results) => {
      if (results) {
        results.list.forEach((element) => {
          const row: TaskTableRow = {
            _obj: { ...element },
            taskCode: element.taskCode,
            taskVersion: element.taskVersion,
            taskDesignation: element.taskDesignation
          };
          LabelValueUtils.stringValueToLabel(element, 'taskTypeCode', this.taskTypeList);
          LabelValueUtils.stringValueToLabel(element, 'taskStatus', this.taskStatusList);
          LabelValueUtils.stringValueToLabel(element, 'taskGroup', this.taskGroupList);
          row.taskTypeCode = element.taskTypeCode;
          row.taskStatus = element.taskStatus;
          row.taskGroup = element.groupCode;
          row.taskApplicabilityDate = this.dateService.dateToString(element.taskApplicabilityDate);
          this.resultsTable.list.push(row);
        });
        this.resultsTable.moreResults = results.moreResults;
      }
      this.resultsTableLoading = false;
    });
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    if (this.selectionMultiple) {
      const bireTaskArr: BireTaskDTO[] = [];
      this.selectedObjects.forEach((elt) => {
        if (!!elt) {
          LabelValueUtils.labelToStringValue(elt, 'taskTypeCode', this.taskTypeList);
          LabelValueUtils.labelToStringValue(elt, 'taskStatus', this.taskStatusList);
          LabelValueUtils.labelToStringValue(elt, 'taskGroup', this.taskGroupList);
          bireTaskArr.push(elt._obj as BireTaskDTO);
        }
      });
      this.onSelected.emit(bireTaskArr);
    } else {
      if (!!this.selectedObjects) {
        const tableRow = this.selectedObjects as TaskTableRow;
        LabelValueUtils.labelToStringValue(this.selectedObjects, 'taskTypeCode', this.taskTypeList);
        LabelValueUtils.labelToStringValue(this.selectedObjects, 'taskStatus', this.taskStatusList);
        LabelValueUtils.labelToStringValue(this.selectedObjects, 'taskGroup', this.taskGroupList);
        this.onSelected.emit(tableRow._obj);
      }
      this.display = false;
    }
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    super.closeDialog();
  }

  private loadTypes(): void {
    const getTaskTypeMap = this.propertiesService.getValue('getTaskTypeMap');
    const getFuncObjectStatusMap = this.propertiesService.getValue('getFuncObjectStatusMap');
    const getTaskGroupMap = this.dialogSearchTaskService.getTaskGroups();

    forkJoin([getTaskTypeMap, getFuncObjectStatusMap, getTaskGroupMap]).subscribe(
      ([getTaskTypeResult, getFuncObjectStatusResult, getTaskGroupResult]) => {
        this.taskTypeList = getTaskTypeResult.filter((obj) => {
          return obj.value !== AWPropertiesConstants.TASK_TYPE_VISIT_KEY;
        });
        this.taskStatusList = getFuncObjectStatusResult;
        this.taskGroupList = getTaskGroupResult;
      }
    );
  }

  public disableValidate() {
    if (this.selectionMultiple) {
      return this.selectedObjects.length === 0;
    } else {
      return Object.keys(this.selectedObjects).length === 0;
    }
  }
}
