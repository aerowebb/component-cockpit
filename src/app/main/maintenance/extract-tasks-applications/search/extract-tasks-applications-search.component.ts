import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ExtractTaskApplicationInputDTO } from '../../../../shared/types/api-input-types/airworthiness-management/extract-task-application-input-dto.interface';
import { TaskApplicationVOOutputDTO } from '../../../../shared/types/api-output-types/airworthiness-management/task-application-vo-output-dto.interface';
import { BidoEquipmentOVSOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { ExtractTasksApplicationsSearchService } from './extract-tasks-applications-search.service';

interface BidoEquipmentOVSOutputDTOCustom {
  asset?: string;
  familyVariantCode?: string;
  registration?: string;
  pnCode?: string;
  equipmentDesignation?: string;
  equipmentFunction?: string;
  sn?: string;
  fatherEquipment?: string;
  ownerCustomerCode?: string;
  operatorCustomerCode?: string;
  location?: string;
  operationalStatus?: string;
  equipmentCode?: string;
  _expand?: boolean;
}

interface BireTaskDTOCustom {
  taskCode?: string;
  code?: string;
  version?: string;
  taskVersion?: string;
  taskDesignation?: string;
  taskChapter?: string;
  taskSection?: string;
  taskSubject?: string;
  taskTask?: string;
  taskSubTask?: string;
  taskStatus?: string;
  taskApplicabilityCode?: string;
  repairCenterCode?: string;
  groupCode?: string;
  taskTypeCode?: string;
  overhaul?: boolean;
  _expand?: boolean;
}

@Component({
  selector: 'aw-extract-tasks-applications-search',
  styleUrls: ['./extract-tasks-applications-search.component.scss'],
  templateUrl: './extract-tasks-applications-search.component.html'
})
export class ExtractTasksApplicationsSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly TASK_TABLE_EXPORT_NAME: string = 'task-list';

  public toDate: Date;

  // Asset Table
  public assetsCols: TableColumn[];
  public assetsList: BidoEquipmentOVSOutputDTOCustom[];
  public selectedAssets: BidoEquipmentOVSOutputDTOCustom[];

  // Task Table
  public tasksCols: TableColumn[];
  public tasksList: BireTaskDTOCustom[];
  public selectedTasks: BireTaskDTOCustom[];

  // Extract Task Table
  public extractTableCols: TableColumn[];
  public extractTableList: TaskApplicationVOOutputDTO[];

  // Visiblity Params
  public showItemTaskSearchPopup: boolean;
  public dialogAddAssetVisible: boolean;
  public panelLoading: boolean;

  private propertyFunctions: LabelValue<string>[];
  private propertyStatus: LabelValue<string>[];
  private taskTypeList: LabelValue<string>[];
  private taskStatusList: LabelValue<string>[];
  private taskGroupList: LabelValue<string>[];
  private modApplicabilityList: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly exportService: ExportService,
    private readonly extractTasksApplicationsSearchService: ExtractTasksApplicationsSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_EXTRACT_TASKS_APPLICATIONS;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);

    this.loadDropdowns();
    this.loadTableColumns();
    this.init();
  }

  private init() {
    this.assetsList = [];
    this.selectedAssets = [];
    this.tasksList = [];
    this.selectedTasks = [];
    this.extractTableList = [];
  }

  public refresh() {
    this.init();
  }

  /**************************************************************************
   * Load Dropdowns
   *************************************************************************/
  private loadDropdowns() {
    const getTaskTypeMap = this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP);
    const getFuncObjectStatusMap = this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP);
    const applicability = this.propertiesService.getValue(GenericPropertyConstants.TASK_APPLICABILITY_CODE_MAP);
    const propertyStatus = this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
    const propertyFunction = this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP);
    const getTaskGroupMap = this.extractTasksApplicationsSearchService.getTaskGroups();

    forkJoin([
      getTaskTypeMap,
      getFuncObjectStatusMap,
      applicability,
      propertyStatus,
      propertyFunction,
      getTaskGroupMap
    ]).subscribe(
      ([
        getTaskTypeResult,
        getFuncObjectStatusResult,
        getApplicability,
        getPropertyStatus,
        getPropertyFunction,
        getTaskGroupResult
      ]) => {
        this.taskTypeList = getTaskTypeResult.filter((obj) => {
          return obj.value !== AWPropertiesConstants.TASK_TYPE_VISIT_KEY;
        });
        this.taskStatusList = getFuncObjectStatusResult;
        this.modApplicabilityList = getApplicability;
        this.propertyStatus = getPropertyStatus;
        this.propertyFunctions = getPropertyFunction;
        this.taskGroupList = getTaskGroupResult;
      }
    );
  }

  private formatKeyToLabel(key: string | undefined, list: LabelValue<string>[]) {
    if (!!key) {
      const selectedData = list.find((data) => data.value === key);

      return !!selectedData && !!selectedData.label ? selectedData.label : '';
    } else {
      return '';
    }
  }

  /**************************************************************************
   * Table Columns
   *************************************************************************/
  private loadTableColumns() {
    this.assetsCols = [
      { field: 'asset', alignment: 'left' },
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'sn', alignment: 'left' },
      { field: 'fatherEquipment', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' }
    ];

    this.tasksCols = [
      { field: 'code', alignment: 'left', width: '10%' },
      { field: 'version', alignment: 'left', width: '10%' },
      { field: 'taskDesignation', alignment: 'left', width: '25%' },
      { field: 'taskTask', alignment: 'left', width: '10%' },
      { field: 'taskSubTask', alignment: 'left', width: '10%' },
      { field: 'taskStatus', alignment: 'left', width: '5%' },
      { field: 'taskApplicabilityCode', alignment: 'left', width: '15%' },
      { field: 'taskTypeCode', alignment: 'left', width: '15%' }
    ];

    this.extractTableCols = [
      { field: 'taskCode', alignment: 'left', width: '10%' },
      { field: 'taskVersion', alignment: 'left', width: '10%' },
      { field: 'taskDescription', alignment: 'left', width: '35%' },
      { field: 'taskType', alignment: 'left', width: '10%' },
      { field: 'assetPn', alignment: 'left', width: '10%' },
      { field: 'assetSn', alignment: 'left', width: '10%' },
      { field: 'assetItem', alignment: 'left', width: '15%' }
    ];
  }

  /**************************************************************************
   * Asset Table and Dialog Operations
   *************************************************************************/
  public deleteSelectedAsset() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedAssets'),
      accept: () => {
        this.selectedAssets.forEach((element) => {
          const indexInDisplayedList = this.assetsList.indexOf(element);
          this.assetsList.splice(indexInDisplayedList, 1);
        });
        this.selectedAssets = [];
      }
    });
  }

  public showAssetDialog() {
    this.dialogAddAssetVisible = true;
  }

  public onAddAsset(newAssetList: BidoEquipmentOVSOutputDTO[]): void {
    let isFound = false;
    newAssetList.forEach((data) => {
      this.assetsList.filter((row) => {
        if (row.equipmentCode === data.equipmentCode) {
          isFound = true;
        }
      });
    });

    if (isFound) {
      this.messageService.showErrorMessage(this.getTranslateKey('duplicateAsset'));
    } else {
      newAssetList.forEach((data) => {
        this.assetsList.push({
          asset: data.equipmentCode,
          equipmentCode: data.equipmentCode,
          equipmentDesignation: data.equipmentDesignation,
          equipmentFunction: this.formatKeyToLabel(data.equipmentFunction, this.propertyFunctions),
          familyVariantCode: data.familyVariantCode,
          fatherEquipment: data.fatherEquipment,
          location: undefined,
          operationalStatus: this.formatKeyToLabel(data.operationalStatus, this.propertyStatus),
          operatorCustomerCode: data.operatorCustomerCode,
          ownerCustomerCode: data.ownerCustomerCode,
          pnCode: data.pnCode,
          registration: data.registration,
          sn: data.sn,
          _expand: false
        });
      });

      // Setting asset name
      this.assetsList.forEach((row) => {
        if (!!row && !!row.equipmentCode) {
          this.fetchEquipmentName(row.equipmentCode, (name) => {
            row.asset = name as string;
          });
        }
      });
    }
  }

  public toggleResultTableRowDetailsVisibility(row: BidoEquipmentOVSOutputDTOCustom): void {
    row._expand = !row._expand;
  }

  private fetchEquipmentName(assetCode: string, callback) {
    const equipmentId: BidoEquipmentDTOId = {
      equipmentCode: assetCode
    };
    this.extractTasksApplicationsSearchService.getEquipmentName(equipmentId).subscribe((res) => {
      callback(res);
    });
  }

  /**************************************************************************
   * Task Table and Dialog Operations
   *************************************************************************/
  public deleteSelectedTasks() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedTasks'),
      accept: () => {
        this.selectedTasks.forEach((element) => {
          const indexInDisplayedList = this.tasksList.indexOf(element);
          this.tasksList.splice(indexInDisplayedList, 1);
        });
        this.selectedTasks = [];
      }
    });
  }

  public openTaskDialog() {
    this.showItemTaskSearchPopup = true;
  }

  public addTask(taskListAdded: BireTaskDTO[]) {
    this.showItemTaskSearchPopup = false;

    let isFound = false;
    taskListAdded.forEach((data) => {
      this.tasksList.filter((row) => {
        if (row.taskCode === data.taskCode) {
          isFound = true;
        }
      });
    });

    if (isFound) {
      this.messageService.showErrorMessage(this.getTranslateKey('duplicateTask'));
    } else {
      taskListAdded.forEach((task) => {
        this.tasksList.push({
          groupCode: this.formatKeyToLabel(task.groupCode, this.taskGroupList),
          overhaul: task.overhaul,
          repairCenterCode: task.repairCenterCode,
          taskApplicabilityCode: this.formatKeyToLabel(task.taskApplicabilityCode, this.modApplicabilityList),
          taskChapter: task.taskChapter,
          taskCode: task.taskCode,
          code: task.taskCode,
          taskDesignation: task.taskDesignation,
          taskSection: task.taskSection,
          taskStatus: this.formatKeyToLabel(task.taskStatus, this.taskStatusList),
          taskSubTask: task.taskSubTask,
          taskSubject: task.taskSubject,
          taskTask: task.taskTask,
          taskTypeCode: this.formatKeyToLabel(task.taskTypeCode, this.taskTypeList),
          taskVersion: task.taskVersion,
          version: task.taskVersion,
          _expand: false
        });
      });
    }
  }

  public toggleTaskTableRowDetailsVisibility(row: BireTaskDTOCustom): void {
    row._expand = !row._expand;
  }

  /**************************************************************************
   * Extract Tasks
   *************************************************************************/
  public search() {
    if (this.validate()) {
      const assetList: string[] = [];
      this.assetsList.forEach((row) => {
        if (!!row && !!row.equipmentCode) {
          assetList.push(row.equipmentCode);
        }
      });

      this.panelLoading = true;
      const extractTaskApplicationInputDTO: ExtractTaskApplicationInputDTO = {
        selectedEquipmentCodes: assetList,
        selectedTaskKeys: this.tasksList,
        toDate: this.toDate
      };

      this.extractTasksApplicationsSearchService
        .extractTasksApplicationsFromAssetCodeListAndTaskKeyList(extractTaskApplicationInputDTO)
        .pipe(
          finalize(() => {
            this.panelLoading = false;
          })
        )
        .subscribe((res) => {
          this.extractTableList = res;
        });
    }
  }

  /**************************************************************************
   * Validate Screen
   *************************************************************************/
  private validate(): boolean {
    const MAX_ALLOWED_SIZE = 10;
    if (this.assetsList.length === 0) {
      this.messageService.showWarningMessage(this.getTranslateKey('noAssetSelected'));

      return false;
    }

    if (this.tasksList.length === 0) {
      this.messageService.showWarningMessage(this.getTranslateKey('noTaskSelected'));

      return false;
    }

    if (this.assetsList.length > MAX_ALLOWED_SIZE) {
      this.messageService.showWarningMessage(this.getTranslateKey('assetSelectionLimitReached'));

      return false;
    }

    if (this.tasksList.length > MAX_ALLOWED_SIZE) {
      this.messageService.showWarningMessage(this.getTranslateKey('taskSelectionLimitReached'));

      return false;
    }

    return true;
  }

  /**************************************************************************
   * Extract Task Application Table Operations
   *************************************************************************/
  public exportTable() {
    const table: TaskApplicationVOOutputDTO[] = this.extractTableList.map((data) => {
      return {
        taskCode: data.taskCode,
        taskVersion: data.taskVersion,
        taskDescription: data.taskDescription,
        taskType: data.taskType,
        counterCode: data.counterCode,
        taskPeriodicity: data.taskPeriodicity,
        ageing: data.ageing,
        unitCode: data.unitCode,
        assetPn: data.assetPn,
        assetSn: data.assetSn,
        assetDescription: data.assetDescription,
        assetItem: data.assetItem,
        topAircraftRegistration: data.topAircraftRegistration,
        nha: data.nha,
        nextTerm: data.nextTerm,
        wpNumber: data.wpNumber,
        woCode: data.woCode
      };
    });

    this.exportService.toExcel(
      table,
      ExtractTasksApplicationsSearchComponent.TASK_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public toggleExtractTaskTableRowDetailsVisibility(row: BireTaskDTOCustom): void {
    row._expand = !row._expand;
  }
}
