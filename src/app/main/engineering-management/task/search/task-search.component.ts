import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Table } from 'primeng/table';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindFamilyVariantInput } from '../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';

import { TaskSearchService } from './task-search.service';

interface TaskDataExport {
  taskCode?: string;
  taskVersion?: string;
  taskDesignation?: string;
  taskChapter?: string;
  taskSection?: string;
  taskSubject?: string;
  taskTask?: string;
  taskSubTask?: string;
  taskStatus?: string;
  taskApplicabilityDate?: Date;
  taskApplicabilityCode?: string;
  repairCenterCode?: string;
  groupCode?: string;
  taskTypeCode?: string;
  overhaul?: boolean;
}

@Component({
  selector: 'aw-task-search',
  templateUrl: './task-search.component.html'
})
export class TaskSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly componentId: string;

  public filteredRowsNb: number;

  public familyVariantSearchObject: string | undefined;
  public familyVariants: LabelValue<string>[];
  public familyCode: string;
  public variantCode: string;
  public structureType: string;

  public mroCenters: LabelValue<string>[];
  public statuses: LabelValue<string>[];
  public taskTypes: LabelValue<string>[];
  public taskGroups: LabelValue<string>[];
  public applicabilities: LabelValue<string>[];
  public searchObject: BireTaskDTO;
  public showAdvancedCriteria: boolean;
  public isLoading: boolean = false;
  public taskTableDataSource: TableDataSource<BireTaskDTO>;

  public notApproved: boolean;

  public maintenanceProgramSearchObject: string | undefined;
  public taskMaintenanceProgram: LabelValue<string>[];
  public maintenanceProgramPlanCode: string;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  private readonly resultsTableExportName: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    private readonly taskSearchService: TaskSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.filteredRowsNb = 0;

    this.familyVariants = [];
    this.familyCode = '';
    this.variantCode = '';
    this.structureType = '';

    this.mroCenters = [];
    this.statuses = [];
    this.taskTypes = [];
    this.taskGroups = [];
    this.applicabilities = [];
    this.familyVariantSearchObject = undefined;
    this.searchObject = {};
    this.showAdvancedCriteria = false;
    this.resultsTableExportName = 'task-search-list';

    this.maintenanceProgramSearchObject = undefined;
    this.taskMaintenanceProgram = [];
    this.notApproved = false;

    this.loadFamilyVariant();
    this.loadMROCenter();
    this.loadStatus();
    this.loadTaskType();
    this.loadTaskGroup();
    this.loadApplicability();
    this.initTaskTableDataSource();

    this.loadTaskMaintenanceProgram();
  }

  private initTaskTableDataSource(): void {
    this.taskTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '16%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          width: '10%'
        },
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          width: '30%'
        },
        {
          field: 'taskStatus',
          translateKey: this.getTranslateKey('taskStatus'),
          width: '10%'
        },
        {
          field: 'taskTypeCode',
          translateKey: this.getTranslateKey('taskTypeCode'),
          width: '10%'
        },
        {
          field: 'groupCode',
          translateKey: this.getTranslateKey('groupCode'),
          width: '10%'
        },
        {
          field: 'taskApplicabilityDateString',
          translateKey: this.getTranslateKey('taskApplicabilityDateString'),
          width: '14%'
        }
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_TASK_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public deleteTasks(): void {
    const partialMessageKey =
      this.taskTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedTasks' : 'confirmDeleteSelectedTask';

    const tasks = new Array<BireTaskDTOId>();
    this.taskTableDataSource.dataSelection.forEach((task) => {
      if (!!task && !!task.taskCode && !!task.taskVersion) {
        const taskId: BireTaskDTOId = {
          taskCode: task.taskCode,
          taskVersion: task.taskVersion
        };
        tasks.push(taskId);
      } else {
        super.throwUnboundLocalError('deleteTasks', 'task && task.taskCode && task.taskVersion');
      }
    });
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.taskSearchService.removeBireTask(tasks).subscribe(() => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteTask'));
          this.taskTableDataSource.dataSelection = [];
          this.search();
        });
      }
    });
  }

  public exportTable(): void {
    const taskExportData: TaskDataExport[] = [];
    this.taskTableDataSource.dataSrc.forEach((task) => {
      const item: TaskDataExport = {
        taskCode: task.taskCode,
        taskVersion: task.taskVersion,
        taskDesignation: task.taskDesignation,
        taskChapter: task.taskChapter,
        taskSection: task.taskSection,
        taskSubject: task.taskSubject,
        taskTask: task.taskTask,
        taskSubTask: task.taskSubTask,
        taskStatus: task.taskStatus,
        taskApplicabilityDate: task.taskApplicabilityDate,
        taskApplicabilityCode: task.taskApplicabilityCode,
        repairCenterCode: task.repairCenterCode,
        groupCode: task.groupCode,
        taskTypeCode: task.taskTypeCode,
        overhaul: task.overhaul
      };
      taskExportData.push(item);
    });
    this.exportService.toExcel(taskExportData, this.resultsTableExportName, this.componentData.componentId);
  }

  public openNewTask(): void {
    this.openTask(undefined, ComponentOpenMode.Create);
  }

  public openTaskLink(task: BireTaskDTO): void {
    if (task) {
      if (task.taskCode && task.taskCode.trim().length > 0) {
        this.openTask(task, ComponentOpenMode.Read);
      } else {
        this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTaskCode'));
      }
    }
  }

  public openSelectedTasks(): void {
    this.taskTableDataSource.dataSelection.forEach((task) => {
      if (task) {
        if (task.taskCode && task.taskCode.trim().length > 0) {
          this.openTask(task, ComponentOpenMode.Read);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTaskCode'));
        }
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
    this.familyVariantSearchObject = undefined;
    this.maintenanceProgramSearchObject = undefined;
  }

  public search(): void {
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);

    this.taskTableDataSource.dataSelection = [];
    this.taskTableDataSource.setData([]);
    let familyCode = '';
    let structureType = '';
    let variantCode = '';

    let maintenanceProgramPlanCode = '';

    if (this.familyVariantSearchObject != undefined) {
      const familyVariantParam: string[] = this.familyVariantSearchObject.split('-');
      const param0 = 0;
      const param1 = 1;
      const param2 = 2;
      familyCode = familyVariantParam[param0];
      structureType = familyVariantParam[param1];
      variantCode = familyVariantParam[param2];
    }

    if (this.maintenanceProgramSearchObject != undefined) {
      maintenanceProgramPlanCode = this.maintenanceProgramSearchObject;
    }

    const searchId: FindBireTaskByCriteriaInput = {
      bireTaskDTO: this.searchObject,
      familyCode,
      structureType,
      variantCode,
      notApproved: this.notApproved,
      maintenanceProgramPlanCode
    };

    this.taskSearchService.findBireTasksByCriteria(searchId).subscribe((results) => {
      if (results) {
        this.isLoading = false;
        results.list.forEach((res) => {
          res.taskApplicabilityDateString = this.dateService.dateToString(res.taskApplicabilityDate);
        });
        this.taskTableDataSource.setData(results.list);

        this.taskTableDataSource.dataSrc.forEach((element) => {
          LabelValueUtils.stringValueToLabel<BireTaskDTO>(element, 'taskApplicabilityCode', this.applicabilities);
          LabelValueUtils.stringValueToLabel<BireTaskDTO>(element, 'taskTypeCode', this.taskTypes);
          LabelValueUtils.stringValueToLabel<BireTaskDTO>(element, 'repairCenterCode', this.mroCenters);
          LabelValueUtils.stringValueToLabel<BireTaskDTO>(element, 'taskStatus', this.statuses);
          LabelValueUtils.stringValueToLabel<BireTaskDTO>(element, 'groupCode', this.taskGroups);
        });
        this.filteredRowsNb = this.taskTableDataSource.dataCount;

        super.differ(() => {
          super.scrollToAnchor(this.resultsContainerAnchor);
        });
      }
    });
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  public openTask(object: BireTaskDTO | undefined, openMode: ComponentOpenMode): void {
    if (object != undefined) {
      const labelKey = 'transaction.TaskFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'TaskFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      const labelKey = 'transaction.TaskFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'TaskFormComponent',
        objectId: undefined,
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  private loadFamilyVariant(): void {
    const id: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_TASK,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };

    this.taskSearchService.findFamilyVariant(id).subscribe((results) => {
      if (results) {
        results.forEach((result) => {
          if (!!result.labelValueDTO) {
            this.familyVariants.push(result.labelValueDTO);
          } else {
            super.throwUnboundLocalError('loadFamilyVariant', 'result.labelValueDTO');
          }
        });
      }
    });
  }

  private loadMROCenter(): void {
    this.taskSearchService.findMROCenter().subscribe((results) => {
      this.mroCenters = results || [];
    });
  }

  private loadStatus(): void {
    this.propertiesService.getValue('getFuncObjectStatusMap').subscribe((results) => {
      this.statuses = results || [];
    });
  }

  private loadTaskType(): void {
    this.propertiesService.getValue('getTaskTypeMap').subscribe((results) => {
      this.taskTypes = results || [];
    });
  }

  private loadTaskGroup(): void {
    this.taskSearchService.getTaskGroups().subscribe((results) => {
      this.taskGroups = results.filter((taskGroup) => taskGroup.value != undefined) || [];
    });
  }

  private loadApplicability(): void {
    this.propertiesService.getValue('getTaskApplicabilityCodeMap').subscribe((results) => {
      this.applicabilities = results || [];
    });
  }

  private loadTaskMaintenanceProgram(): void {
    this.taskSearchService.getMaintenanceProgram().subscribe((results) => {
      this.taskMaintenanceProgram = results || [];
    });
  }
}
