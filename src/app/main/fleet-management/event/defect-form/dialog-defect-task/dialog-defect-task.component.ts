import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { FindAllBireTaskByCriteriaInput } from '../../../../../shared/types/api-input-types/task-management/find-all-bire-task-by-criteria-inpuy.interface';
import { BireTaskDTO } from '../../../../../shared/types/api-types/bire-task-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../../shared/utils/bido-family-variant-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { TableUtils } from '../../../../../shared/utils/table-utils';
import { EventService } from '../../event.service';

interface TaskRow {
  group: string;
  overhaul: boolean;
  repairCenter: string;
  taskApplicability: string;
  taskApplicabilityDate: string;
  taskChapter: string;
  taskCode: string;
  taskDesignation: string;
  taskSection: string;
  taskStatus: string;
  taskSubject: string;
  taskSubTask: string;
  taskTask: string;
  taskType: string;
  taskVersion: string;
}

@Component({
  selector: 'aw-dialog-defect-task',
  styleUrls: ['./dialog-defect-task.component.scss'],
  templateUrl: './dialog-defect-task.component.html'
})
export class DialogDefectTaskComponent extends DialogComponent implements OnInit {
  @Input()
  public familyVariantCode: string | undefined;
  @Output()
  public onValidated: EventEmitter<BireTaskDTO>;

  public displayedTaskRowNb: number;
  public searchObject: BireTaskDTO;
  public selectedTask: BireTaskDTO | undefined;
  public taskList: BireTaskDTO[];
  public taskTableCols: TableColumn[];
  public taskTable: SearchResultsDTO<TaskRow>;

  private applicabilityList: LabelValue<string>[];
  private siteList: LabelValue<string>[];
  private taskGroupList: LabelValue<string>[];
  private taskStatusList: LabelValue<string>[];
  private taskTypeList: LabelValue<string>[];

  public constructor(
    private readonly dateService: DateService,
    private readonly eventService: EventService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogDefectTaskComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BireTaskDTO>();

    this.applicabilityList = [];
    this.displayedTaskRowNb = 0;
    this.selectedTask = undefined;
    this.siteList = [];
    this.taskGroupList = [];
    this.taskStatusList = [];
    this.taskTable = { list: [], moreResults: false };
    this.taskTypeList = [];

    this.initTableCols();
    this.loadApplicabilityList();
    this.loadSiteList();
    this.loadTaskGroupList();
    this.loadTaskStatusList();
    this.loadTaskTypeList();
  }

  public ngOnInit(): void {
    if (!this.searchObject) {
      this.searchObject = {};
    }
  }

  public search(): void {
    let familyCode: string | undefined = '';
    let variantCode: string | undefined = '';
    if (!!this.familyVariantCode) {
      familyCode = BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(this.familyVariantCode);
      variantCode = BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(this.familyVariantCode);
    }

    const criteria: FindAllBireTaskByCriteriaInput = {
      bireTaskDTO: !!this.searchObject ? this.searchObject : {},
      familyCodeCriteria: StringUtils.orEmpty(familyCode),
      structureTypeCriteria: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
      variantCodeCriteria: StringUtils.orEmpty(variantCode),
      taskTypeCodeExcluded: AWPropertiesConstants.TASK_TYPE_VISIT_KEY
    };
    this.eventService.findAllBireTaskByCriteria(criteria).subscribe((results) => {
      if (!!results) {
        this.taskList = TableUtils.removeEmptyRows(results.list, this.taskTableCols);

        this.taskTable.list = this.taskList.map((task) => this.createTaskRow(task));
        this.taskTable.moreResults = results.moreResults;

        this.displayedTaskRowNb = this.taskTable.list.length;
      }

      this.selectedTask = undefined;
    });
  }

  public selectTask(index: number): void {
    this.selectedTask = this.taskList[index];
  }

  public updateDisplayedTaskRowNb(value: number): void {
    this.displayedTaskRowNb = value;
  }

  public validate(): void {
    if (!this.selectedTask) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.selectedTask);
      this.closeDialog();
    }
  }

  private createTaskRow(task: BireTaskDTO): TaskRow {
    const selectedApplicability = this.applicabilityList.find(
      (applicability) => applicability.value === task.taskApplicabilityCode
    );
    const selectedSite = this.siteList.find((site) => site.value === task.repairCenterCode);
    const selectedTaskGroup = this.taskGroupList.find((taskGroup) => taskGroup.value === task.groupCode);
    const selectedTaskStatus = this.taskStatusList.find((taskStatus) => taskStatus.value === task.taskStatus);
    const selectedTaskType = this.taskTypeList.find((taskType) => taskType.value === task.taskTypeCode);

    const taskRow: TaskRow = {
      group: !!selectedTaskGroup ? selectedTaskGroup.label : '',
      overhaul: !!task.overhaul ? task.overhaul : false,
      repairCenter: !!selectedSite ? selectedSite.label : '',
      taskApplicability: !!selectedApplicability ? selectedApplicability.label : '',
      taskApplicabilityDate: this.dateService.dateToString(task.taskApplicabilityDate),
      taskChapter: StringUtils.orEmpty(task.taskChapter),
      taskCode: StringUtils.orEmpty(task.taskCode),
      taskDesignation: StringUtils.orEmpty(task.taskDesignation),
      taskSection: StringUtils.orEmpty(task.taskSection),
      taskStatus: !!selectedTaskStatus ? selectedTaskStatus.label : '',
      taskSubject: StringUtils.orEmpty(task.taskSubject),
      taskSubTask: StringUtils.orEmpty(task.taskSubTask),
      taskTask: StringUtils.orEmpty(task.taskTask),
      taskType: !!selectedTaskType ? selectedTaskType.label : '',
      taskVersion: StringUtils.orEmpty(task.taskVersion)
    };

    return taskRow;
  }

  private initTableCols(): void {
    this.taskTableCols = [
      { field: 'taskCode', alignment: 'left', width: '10%' },
      { field: 'taskVersion', alignment: 'left', width: '5%' },
      { field: 'taskDesignation', alignment: 'left', width: '15%' },
      { field: 'taskChapter', alignment: 'right', width: '5%' },
      { field: 'taskSection', alignment: 'right', width: '5%' },
      { field: 'taskSubject', alignment: 'right', width: '5%' },
      { field: 'taskTask', alignment: 'left', width: '5%' },
      { field: 'taskSubTask', alignment: 'left', width: '5%' },
      { field: 'taskStatus', alignment: 'left', width: '5%' },
      { field: 'taskApplicabilityDate', alignment: 'left', width: '10%' },
      { field: 'taskApplicability', alignment: 'left', width: '10%' },
      { field: 'repairCenter', alignment: 'left', width: '5%' },
      { field: 'group', alignment: 'left', width: '5%' },
      { field: 'taskType', alignment: 'left', width: '5%' },
      { field: 'overhaul', alignment: 'center', width: '5%' }
    ];
  }

  private loadApplicabilityList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_APPLICABILITY_CODE_MAP).subscribe((results) => {
      this.applicabilityList = ListUtils.orEmpty(results);
    });
  }

  private loadSiteList(): void {
    this.eventService.findAllBireSite().subscribe((results) => {
      this.siteList = ListUtils.orEmpty(results);
    });
  }

  private loadTaskGroupList(): void {
    this.eventService.findAllBireTaskGroup().subscribe((results) => {
      this.taskGroupList = ListUtils.orEmpty(results);
    });
  }

  private loadTaskStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP).subscribe((results) => {
      this.taskStatusList = ListUtils.orEmpty(results);
    });
  }

  private loadTaskTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP).subscribe((results) => {
      this.taskTypeList = ListUtils.orEmpty(results);
    });
  }
}
