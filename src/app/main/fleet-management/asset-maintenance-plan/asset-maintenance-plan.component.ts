import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { AppConstants } from '../../../shared/constants/app-constants';
import { BireMeasureReferenceConstants } from '../../../shared/constants/bire-measure-reference-constants';
import { BireUnitMeasureConstants } from '../../../shared/constants/bire-unit-measure-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../shared/enums/table-selection-mode.enum';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { InitializeMaintenancePlanStructureInput } from '../../../shared/types/api-input-types/airworthiness-management/initialize-maintenance-plan-structure-input.interface';
import { BaseMpRowInput } from '../../../shared/types/api-input-types/maintenance-plan/base-mp-row-input.interface';
import { SetActionFlagMpInput } from '../../../shared/types/api-input-types/maintenance-plan/set-action-flag-mp-input.interface';
import { AssetMaintenancePlanOutput } from '../../../shared/types/api-output-types/maintenance-plan/asset-maintenance-plan-output.interface';
import { BaseMaintenancePlanStructureOutput } from '../../../shared/types/api-output-types/maintenance-plan/base-maintenance-plan-structure-output.interface';
import { MaintenanceProgramReports } from '../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BireMaintenancePlanDTOId } from '../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { SelectMaintenancePlanTaskInput } from '../../../shared/types/api-types/select-maintenance-plan-task-input.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';

import { AssetMaintenancePlanService } from './asset-maintenance-plan.service';

interface TaskVisitTableRow {
  asset: string;
  taskCode: string;
  version: string;
  reference: string;
  designation: string | undefined;
  conf: string | undefined;
  taskGroup: string | undefined;
  visit: string | undefined;
  taskType: string | undefined;
  groupCode: string | undefined;
  remainingEquivalent: string | undefined;
  periodicity: number | undefined;
  missingCounter: string | undefined;
  status: string | undefined;
  equipmentCode: string | undefined;
  expand: boolean;
  dataKey: number;
  showMore: boolean;
  unit: string | undefined;
  firstPeriodicity: number | undefined;
  periodicityType: string | undefined;
  tolerance: number | undefined;
  alertThreshold: number | undefined;
  comments: string | undefined;
  isGroup: boolean;
  children: BaseMaintenancePlanStructureOutput[] | undefined;
}

@Component({
  selector: 'aw-asset-maintenance-plan',
  templateUrl: './asset-maintenance-plan.component.html',
  styleUrls: ['./asset-maintenance-plan.component.scss']
})
export class AssetMaintenancePlanComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly TABLE_EXPORT_NAME: string = 'asset-mp-list';
  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;

  public taskTableCols: TableColumn[];
  public tasks: TaskVisitTableRow[];
  public isLoadingTaskTable: boolean;

  // For task
  public taskKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public dialogTaskSearchTableData: DialogTableData<BireTaskDTO>;
  public showItemTaskSearchPopup: boolean;
  public isReadOnlyVisitTaskDialog: boolean;
  public selectedTasks: TaskVisitTableRow[];

  public taskTypes: LabelValue<string>[];
  public periodicityTypes: LabelValue<string>[];
  public taskGroups: LabelValue<string>[];
  public references: LabelValue<string>[];

  public taskTypeMap: Map<string, string>;
  public periodicityTypeMap: Map<string, string>;
  public taskGroupMap: Map<string, string>;
  public referencesMap: Map<string, string>;
  public complianceColor: string | undefined;
  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public statusPopupTitle: string;
  public showApproveAmpButton: boolean;
  public enableTaskDelete: boolean;
  public displayName: string;
  private bidoEquipmentDTOId: BidoEquipmentDTOId;
  public assetMaintenanceData: AssetMaintenancePlanOutput;
  public mpInput: InitializeMaintenancePlanStructureInput;
  public showReportPopup: boolean;
  public reportText: MaintenanceProgramReports;

  public potentialUnitSelected: string;
  public navigationLinkList: MenuItem[];
  public potentialUnitList: MenuItem[];
  public taskConfigurationList: MenuItem[];

  public referencesList: LabelValue<string>[];
  public unitCodeMap: Map<string, string>;
  public referenceSelected: string;
  public remainingEquivalentPotential: string | undefined;
  public remainingEquivalentPotentialColor: string | undefined;
  public areDeletedTasksHidden: boolean;
  public isAssetLoading: boolean;
  public taskCountersVisible: boolean;
  public selectedBaseMpRowInput: BaseMpRowInput;
  public taskReportText: string;
  public showTaskReportPopup: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly assetMaintenancePlanService: AssetMaintenancePlanService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.taskTypeMap = new Map<string, string>();
    this.referencesMap = new Map<string, string>();
    this.periodicityTypeMap = new Map<string, string>();
    this.taskGroupMap = new Map<string, string>();
    this.taskKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.unitCodeMap = new Map<string, string>();

    this.tasks = [];
    this.referencesList = [];
    this.potentialUnitList = [];
    this.assetMaintenanceData = {};

    this.loadTaskTypeMap();
    this.loadPeriodicityTypeMap();
    this.loadTaskGroups();
    this.loadReferencesDropDown();
    this.loadUnitCodeMap();
  }

  public loadTaskTypeMap() {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP).subscribe((results) => {
      results.forEach((element) => {
        this.taskTypeMap.set(element.value, element.label);
      });
    });
  }

  public loadPeriodicityTypeMap() {
    this.propertiesService.getValue(GenericPropertyConstants.PERIODICITY_TYPE_MAP).subscribe((results) => {
      results.forEach((element) => {
        this.periodicityTypeMap.set(element.value, element.label);
      });
    });
  }

  public loadTaskGroups() {
    this.assetMaintenancePlanService.findAllBireTaskGroups().subscribe((results) => {
      results.forEach((element) => {
        this.taskGroupMap.set(element.value, element.label);
      });
    });
  }

  public loadReferencesDropDown() {
    this.assetMaintenancePlanService.findReferencesForAssetMp().subscribe((results) => {
      this.referencesList = results;
      this.referenceSelected = BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_TSN;
      results.forEach((element) => {
        if (!!element.value) {
          this.referencesMap.set(element.value, element.label);
        }
      });
    });
  }

  private loadUnitCodeMap() {
    this.assetMaintenancePlanService.findAllBireMeasureReferencesMaintenanceProgram().subscribe((results) => {
      results.forEach((element) => {
        if (!!element.counterCode && !!element.unitCode) {
          this.unitCodeMap.set(element.counterCode, element.unitCode);
        }
      });
    });
  }

  public getComponentName(): string {
    return 'AssetMaintenancePlanComponent';
  }

  private setTableCols(): void {
    this.taskTableCols = [
      { field: 'taskCode', alignment: 'left', width: '10%' },
      { field: 'version', alignment: 'left', width: '5%' },
      { field: 'designation', alignment: 'left', width: '24%' },
      // { field: 'asset', alignment: 'left', width: '20%' },
      // { field: 'conf', alignment: 'left' },
      { field: 'taskGroup', alignment: 'left', width: '10%' },
      { field: 'reference', alignment: 'left' },
      { field: 'visit', alignment: 'left' },
      { field: 'periodicity', alignment: 'left' },
      { field: 'unit', alignment: 'left' }
      // { field: 'groupCode', alignment: 'left' },
    ];

    if (!!this.potentialUnitSelected) {
      // this.taskTableCols.push({ field: 'remainingEquivalent', alignment: 'left' });
    }
    // this.taskTableCols.push({ field: 'missingCounter', alignment: 'left' });
    // this.taskTableCols.push({ field: 'status', alignment: 'left' });
  }

  public toggleRowDetailsVisibility(row: TaskVisitTableRow): void {
    row.showMore = false;
    row.expand = !row.expand;
  }

  public toggleShowMoreRowDetailsVisibility(row: TaskVisitTableRow): void {
    row.expand = false;
    row.showMore = !row.showMore;
  }

  private init(): void {
    this.complianceColor = '';
    this.selectedTasks = [];
    this.isAssetLoading = false;
    this.isLoadingTaskTable = false;
    this.areDeletedTasksHidden = true;
    this.remainingEquivalentPotential = '';
    this.remainingEquivalentPotentialColor = undefined;
    this.potentialUnitSelected = '';
    this.taskCountersVisible = false;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      this.loadOnInit();
    }
  }

  private loadOnInit() {
    if (!!this.componentData.objectId) {
      this.bidoEquipmentDTOId = this.serializationService.deserialize(this.componentData.objectId);

      this.init();
      this.setPotentialUnitList();
      this.loadEquipmentData();
    }
  }

  private loadEquipmentData(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      this.mpInput = {
        topEquipmentCode: this.bidoEquipmentDTOId.equipmentCode || ''
      };
      if (this.bidoEquipmentDTOId.equipmentCode) {
        // Load top data
        this.isAssetLoading = true;
        this.assetMaintenancePlanService.loadAssetMaintenancePlan(this.bidoEquipmentDTOId).subscribe((result) => {
          this.isAssetLoading = false;
          if (result && result.assetText) {
            this.assetMaintenanceData = result;
            this.displayComponentContext(result.assetText, this.isCreateOpenMode);
          }
        });

        this.loadTasksAndVisits();
      }
    }
  }

  private loadTasksAndVisits(): void {
    this.setTableCols();
    this.tasks = [];
    this.selectedTasks = [];
    this.isLoadingTaskTable = true;
    if (this.bidoEquipmentDTOId.equipmentCode) {
      // Load tasks and visits of equipment
      this.mpInput.topEquipmentCode = this.bidoEquipmentDTOId.equipmentCode;
      this.mpInput.areDeletedTasksHidden = this.areDeletedTasksHidden;
      this.mpInput.filterActivated = false;
      this.mpInput.modeScheduleWPVisibility = false;
      this.mpInput.unitCodeEquivalentSelected = this.potentialUnitSelected || undefined;
    }

    this.assetMaintenancePlanService.getBaseAssetMaintenancePlanStructure(this.mpInput).subscribe((results) => {
      this.loadTasksRows(results);
      this.calculateEquivalentPotential();
      this.setNavigationLinkList();
      this.isLoadingTaskTable = false;
    });
  }

  private calculateEquivalentPotential(): void {
    if (this.potentialUnitSelected) {
      const potentials: number[] = [];
      this.tasks.forEach((obj) => {
        if (obj.remainingEquivalent) {
          potentials.push(Number(obj.remainingEquivalent.split(' ')[0]));
        }
      });
      if (potentials.length > 0) {
        this.remainingEquivalentPotential = `${Math.min(...potentials).toString()} ${this.potentialUnitSelected}`;
        this.remainingEquivalentPotentialColor = this.remainingEquivalentPotential.startsWith('-') ? 'red' : 'green';
      } else {
        this.remainingEquivalentPotential = '';
        this.remainingEquivalentPotentialColor = '';
      }
    } else {
      this.remainingEquivalentPotential = '';
      this.remainingEquivalentPotentialColor = '';
    }
  }

  private loadTasksRows(results: BaseMaintenancePlanStructureOutput[]): void {
    this.tasks = [];
    if (!!results) {
      results.forEach((element, index) => {
        const temp = this.convertPlanTaskCounterTableDTOToRow(element, index);
        if (!!temp) {
          this.tasks.push(temp);
        }
      });
    }
  }

  public refresh(): void {
    this.loadOnInit();
  }

  private convertPlanTaskCounterTableDTOToRow(
    element: BaseMaintenancePlanStructureOutput,
    rowIndex: number
  ): TaskVisitTableRow | undefined {
    let tempReference;
    let unitStr;
    let periodicityFrst;
    let periodicityStr;
    let toleranceStr;
    let alertThresholdStr;
    let commentsStr;
    if (!!element.birePlanTaskCounterDTO && !!element.birePlanTaskCounterDTO.counterCode) {
      tempReference = this.referencesMap.get(element.birePlanTaskCounterDTO.counterCode);
      unitStr = this.unitCodeMap.get(element.birePlanTaskCounterDTO.counterCode);
      periodicityFrst = element.birePlanTaskCounterDTO.periodicityFirst;
      periodicityStr = element.birePlanTaskCounterDTO.periodicity;
      toleranceStr = element.birePlanTaskCounterDTO.tolerance;
      alertThresholdStr = element.birePlanTaskCounterDTO.threshold;
      commentsStr = element.birePlanTaskCounterDTO.comments;
    }
    if (!element.bireTaskDTO) {
      element.bireTaskDTO = {};
    }

    const itemObj: TaskVisitTableRow = {
      asset: element.assetText || '',
      taskCode: element.bireTaskDTO.taskCode || '',
      visit: element.visitCode || '',
      version: element.bireTaskDTO.taskVersion || '',
      designation: element.bireTaskDTO.taskDesignation,
      taskGroup: element.bireTaskDTO.groupCode && this.taskGroupMap.get(element.bireTaskDTO.groupCode),
      taskType: element.bireTaskDTO.taskTypeCode && this.taskTypeMap.get(element.bireTaskDTO.taskTypeCode),
      groupCode: element.birePlanTaskCounterDTO && element.birePlanTaskCounterDTO.groupCode,
      reference:
        element.birePlanTaskCounterDTO && ((element.birePlanTaskCounterDTO.counterCode && tempReference) || ''),
      unit: unitStr,
      firstPeriodicity: periodicityFrst,
      periodicity: periodicityStr,
      periodicityType:
        element.birePlanTaskCounterDTO &&
        element.birePlanTaskCounterDTO.periodicityType &&
        this.periodicityTypeMap.get(element.birePlanTaskCounterDTO.periodicityType),
      tolerance: toleranceStr,
      alertThreshold: alertThresholdStr,
      comments: commentsStr,
      remainingEquivalent: element.remainingEquivalent,
      conf: element.conf,
      missingCounter: element.missingCounter,
      status: element.status,
      equipmentCode: element.bidoEquipmentDTOId.equipmentCode,
      dataKey: rowIndex,
      showMore: false,
      expand: false,
      isGroup: false,
      children: []
    };

    if (element.groupingCode) {
      itemObj.isGroup = true;
      itemObj.children = element.children;
      itemObj.groupCode = element.groupingCode;
    }

    return itemObj;
  }

  public openMaintenanceProgram(planCode: string | undefined): void {
    if (!!planCode) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM,
        openMode: ComponentOpenMode.Read
      };
      const birePlanDTOId: BireMaintenancePlanDTOId = {
        planCode
      };
      data.objectId = this.serializationService.serialize(birePlanDTOId);
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openEquipment(): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      objectId: this.bidoEquipmentDTOId.equipmentCode,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public compare(): void {
    if (this.bidoEquipmentDTOId.equipmentCode && this.assetMaintenanceData.ampCode) {
      this.assetMaintenancePlanService.compareAmpWithOmp(this.bidoEquipmentDTOId).subscribe((result) => {
        if (result) {
          this.showReportPopup = true;
          this.reportText = result;
        }
      });
    }
  }

  private setNavigationLinkList(): void {
    const addTaskKey = this.getTranslateKey('addTask');
    const deleteTaskKey = this.getTranslateKey('deleteTask');
    const hideDeletedTaskKey = this.getTranslateKey('hideDeletedTask');
    const showDeletedTaskKey = this.getTranslateKey('showDeletedTask');
    const setTaskInactiveKey = this.getTranslateKey('setTaskInactive');
    const setTaskActiveKey = this.getTranslateKey('setTaskActive');
    const setTaskAutomaticallyKey = this.getTranslateKey('setTaskAutomatically');
    const showPeriodicityKey = this.getTranslateKey('showPeriodicity');

    this.translateService
      .get([
        addTaskKey,
        deleteTaskKey,
        hideDeletedTaskKey,
        showDeletedTaskKey,
        setTaskInactiveKey,
        setTaskActiveKey,
        setTaskAutomaticallyKey,
        showPeriodicityKey
      ])
      .subscribe((results) => {
        const addTaskLabel = results ? results[addTaskKey] : 'Add Task';
        const deleteTaskLabel = results ? results[deleteTaskKey] : 'Delete Task';
        const hideDeletedTaskLabel = results ? results[hideDeletedTaskKey] : 'Hide Deleted Task';
        const showDeletedTaskLabel = results ? results[showDeletedTaskKey] : 'Show Deleted Task';
        const taskInactiveLabel = results ? results[setTaskInactiveKey] : 'Set Task Inactive';
        const setTaskActiveLabel = results ? results[setTaskActiveKey] : 'Set Task Active';
        const setTaskAutomaticallyLabel = results
          ? results[setTaskAutomaticallyKey]
          : 'Select Automatically task within their Alternative';
        const showPeriodicityLabel = results ? results[showPeriodicityKey] : 'Show Periodicity';

        this.navigationLinkList = [];

        if (this.selectedTasks.length === 0) {
          this.navigationLinkList.push({
            label: addTaskLabel,
            command: () => {
              this.taskSearchCode();
            }
          });
        }

        if (this.selectedTasks.length > 0) {
          this.navigationLinkList.push({
            label: deleteTaskLabel,
            command: () => {
              this.removeTasks();
            }
          });
        }

        if (this.selectedTasks.length === 0) {
          if (this.areDeletedTasksHidden) {
            this.navigationLinkList.push({
              label: showDeletedTaskLabel,
              command: () => {
                this.areDeletedTasksHidden = false;
                this.loadTasksAndVisits();
              }
            });
          } else {
            this.navigationLinkList.push({
              label: hideDeletedTaskLabel,
              command: () => {
                this.areDeletedTasksHidden = true;
                this.loadTasksAndVisits();
              }
            });
          }
        }

        if (this.selectedTasks.length > 0) {
          this.navigationLinkList.push({
            label: taskInactiveLabel,
            command: () => {
              this.deactivateTasks();
            }
          });

          this.navigationLinkList.push({
            label: setTaskActiveLabel,
            command: () => {
              this.activateTasks();
            }
          });
        }

        this.navigationLinkList.push({
          label: setTaskAutomaticallyLabel,
          command: () => {
            this.autoSelectMaintenancePlanTasks();
          }
        });

        if (this.selectedTasks.length === 1 && this.selectedTasks[0].status !== 'Deleted Task') {
          this.navigationLinkList.push({
            label: showPeriodicityLabel,
            command: () => {
              this.showTaskCounters();
            }
          });
        }
      });
  }

  private removeTasks(): void {
    const removeTaskList: BaseMpRowInput[] = [];
    this.selectedTasks.forEach((task) => {
      const taskObj: BaseMpRowInput = {
        equipmentCode: task.equipmentCode,
        taskCode: task.taskCode,
        taskVersion: task.version
      };
      removeTaskList.push(taskObj);
    });
    this.tasks = [];
    this.selectedTasks = [];
    this.isLoadingTaskTable = true;
    this.assetMaintenancePlanService.removeTaskBaseMp(removeTaskList).subscribe((result) => {
      if (result) {
        this.messageService.showErrorMessage(result);
      }
      this.loadTasksAndVisits();
    });
  }

  private activateTasks(): void {
    const activateTaskList: BaseMpRowInput[] = [];
    this.selectedTasks.forEach((task) => {
      const taskObj: BaseMpRowInput = {
        equipmentCode: task.equipmentCode,
        taskCode: task.taskCode,
        taskVersion: task.version
      };
      activateTaskList.push(taskObj);
    });
    this.tasks = [];
    this.selectedTasks = [];
    this.isLoadingTaskTable = true;
    this.assetMaintenancePlanService.activateTaskBaseMp(activateTaskList).subscribe((result) => {
      this.loadTasksAndVisits();
    });
  }

  private deactivateTasks(): void {
    const deactivateTaskList: BaseMpRowInput[] = [];
    this.selectedTasks.forEach((task) => {
      const taskObj: BaseMpRowInput = {
        equipmentCode: task.equipmentCode,
        taskCode: task.taskCode,
        taskVersion: task.version
      };
      deactivateTaskList.push(taskObj);
    });
    this.tasks = [];
    this.selectedTasks = [];
    this.isLoadingTaskTable = true;
    this.assetMaintenancePlanService.deactivateTaskBaseMp(deactivateTaskList).subscribe((result) => {
      this.loadTasksAndVisits();
    });
  }

  private setPotentialUnitList(): void {
    this.potentialUnitList = [
      {
        label: BireUnitMeasureConstants.CYCLE,
        command: () => {
          this.updatePotentialUnit(BireUnitMeasureConstants.CYCLE);
        }
      },
      {
        label: BireUnitMeasureConstants.DAY,
        command: () => {
          this.updatePotentialUnit(BireUnitMeasureConstants.DAY);
        }
      },
      {
        label: BireUnitMeasureConstants.HOUR,
        command: () => {
          this.updatePotentialUnit(BireUnitMeasureConstants.HOUR);
        }
      }
    ];
  }

  private updatePotentialUnit(unit: string): void {
    this.potentialUnitSelected = unit;
    this.mpInput.unitCodeEquivalentSelected = unit || undefined;
    this.loadTasksAndVisits();
  }

  public taskSearchCode() {
    const taskTemp: FindBireTaskByCriteriaInput = {
      bireTaskDTO: {}
    };
    const taskSearch: TableColumn[] = [
      { field: 'taskCode', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskVersion', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskDesignation', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskChapter', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskSection', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskSubject', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskTask', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskSubTask', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskStatus', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskApplicabilityDate', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskApplicabilityCode', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'repairCenterCode', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskGroup', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'taskTypeCode', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'overhaul', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
    ];

    this.dialogTaskSearchTableData = {
      componentId: 'taskSearchPopup',
      tableCols: taskSearch,
      tableRows: this.assetMaintenancePlanService.findBireTasksByCriteria(taskTemp),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };

    this.showItemTaskSearchPopup = true;
  }

  public addTask(task: BireTaskDTO) {
    if (!this.assetMaintenanceData.ampCode) {
      this.messageService.showErrorMessage(this.getTranslateKey('noAssociatedPlan'));

      return;
    }

    this.tasks = [];
    this.selectedTasks = [];
    this.isLoadingTaskTable = true;
    this.showItemTaskSearchPopup = false;
    if (task) {
      const taskObj: BaseMpRowInput = {
        equipmentCode: this.bidoEquipmentDTOId.equipmentCode,
        taskCode: task.taskCode,
        taskVersion: task.taskVersion,
        counterCode: this.referenceSelected
      };
      this.assetMaintenancePlanService.addTaskBaseMp(taskObj).subscribe(
        (result) => {
          this.loadTasksAndVisits();
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnaddTask'));
        }
      );
    }
  }

  public approvePlan(flag: boolean) {
    if (this.bidoEquipmentDTOId.equipmentCode) {
      const input: SetActionFlagMpInput = {
        equipmentCode: this.bidoEquipmentDTOId.equipmentCode,
        actionFlag: flag
      };
      this.assetMaintenancePlanService.approveCustomizeBaseMp(input).subscribe(
        (result) => {
          this.loadEquipmentData();
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnapprovePlan'));
        }
      );
    }
  }

  public setActions() {
    this.setNavigationLinkList();
    this.taskConfigurationList = [];
    if (this.selectedTasks.length === 1 && this.selectedTasks[0].isGroup) {
      if (!this.selectedTasks[0].children) {
        return;
      }
      this.taskConfigurationList.push({
        label: '',
        command: () => {
          this.selectTaskConfiguration(undefined);
        }
      });
      this.selectedTasks[0].children.forEach((elem: BaseMaintenancePlanStructureOutput) => {
        this.taskConfigurationList.push({
          label: elem.bireTaskDTO.taskCode,
          command: () => {
            this.selectTaskConfiguration(elem);
          }
        });
      });
    }
  }

  private selectTaskConfiguration(task: BaseMaintenancePlanStructureOutput | undefined): void {
    const param: SelectMaintenancePlanTaskInput = {
      taskGroupCode: this.selectedTasks[0].groupCode,
      equipmentCode: this.bidoEquipmentDTOId.equipmentCode
    };
    if (!!task) {
      param.taskCode = task.bireTaskDTO.taskCode;
    }
    this.assetMaintenancePlanService.selectMaintenancePlanTask(param).subscribe((data: boolean) => {
      this.loadEquipmentData();
    });
  }

  public exportTable() {
    if (!!this.componentData) {
      const list = [...this.tasks];
      list.forEach((row) => {
        delete row.equipmentCode;
      });
      this.exportService.toExcel(list, AssetMaintenancePlanComponent.TABLE_EXPORT_NAME, this.componentData.componentId);
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  public showTaskCounters(): void {
    this.selectedBaseMpRowInput = {
      equipmentCode: this.selectedTasks[0].equipmentCode,
      taskCode: this.selectedTasks[0].taskCode,
      taskVersion: this.selectedTasks[0].version
    };
    this.taskCountersVisible = true;
  }

  public openTaskCode(object: TaskVisitTableRow): void {
    if (object && object.taskCode && object.version !== null && object.version !== undefined) {
      const bireTaskDTO: BireTaskDTO = {
        taskCode: object.taskCode,
        taskVersion: object.version
      };
      const labelKey = 'transaction.TaskFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'TaskFormComponent',
        objectId: this.serializationService.serialize(bireTaskDTO),
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public refreshTasks() {
    this.tasks = [];
    this.selectedTasks = [];
    this.isLoadingTaskTable = true;
    this.loadTasksAndVisits();
  }

  private autoSelectMaintenancePlanTasks(): void {
    this.isLoadingTaskTable = true;
    if (this.bidoEquipmentDTOId.equipmentCode) {
      this.assetMaintenancePlanService
        .autoSelectMaintenancePlanTasks(this.bidoEquipmentDTOId.equipmentCode)
        .subscribe((result) => {
          this.taskReportText = '';
          this.showTaskReportPopup = true;
          this.taskReportText = result;
          this.loadTasksAndVisits();
        });
    }
  }

  public showTaskConfigurationList(): boolean {
    return this.selectedTasks.length === 1 && this.selectedTasks[0].isGroup;
  }
}
