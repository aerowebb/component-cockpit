import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../shared/constants/bido-attribute-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { BireMeasurementCustomDTO } from '../../../shared/types/api-output-types/task-management/bire-measurement-custom-dto.interface';
import { MaintenanceProgramUpdatedOutputDTO } from '../../../shared/types/api-output-types/task-management/maintenance-program-updated-output-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentCustomDTO } from '../../../shared/types/api-types/bire-document-custom-dto.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireOperationCustomDTO } from '../../../shared/types/api-types/bire-operation-custom-dto.interface';
import { BireQualificationDTO } from '../../../shared/types/api-types/bire-qualification-dto.interface';
import { BireSmTaskDTO } from '../../../shared/types/api-types/bire-sm-task-dto.interface';
import { BireTaskAttributeCustomDTO } from '../../../shared/types/api-types/bire-task-attribute-custom-dto.interface';
import { BireTaskDTOId } from '../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { BireTaskEvolutionMaintenanceDTO } from '../../../shared/types/api-types/bire-task-evolution-maintenance-dto.interface';
import { BireTaskItemWithItemCustomDTO } from '../../../shared/types/api-types/bire-task-item-with-item-custom-dto.interface';
import { BireTilDTO } from '../../../shared/types/api-types/bire-til-dto.interface';
import { GetMaintainanceProgramWithTaskDTO } from '../../../shared/types/api-types/get-maintainance-program-with-task-dto.interface';
import { LinkedTaskCustomDTO } from '../../../shared/types/api-types/linked-task-custom-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { MaintenanceProgramUpdatesListService } from './maintenance-program-updates-list.service';

interface UpdatedTasksRow {
  taskCode?: string;
  taskVersion?: string;
  tabName?: string;
  panelName?: string;
  fieldName?: string;
  currentValue?: string;
  previousValue?: string;
  previousTaskVersion?: string;
  previousRmpVersion?: string;
}

interface OperationRow {
  opeSequenceNumber?: number;
  opeCode?: string;
  opeVersion?: string;
  opeDesignation?: string;
  opeDurationTime?: number;
  opeManHour?: number;
  opeQualification?: string;
  opeCost: number;
}

interface TechnicalLevelRow {
  tilName?: string;
  tilDescription?: string;
}

interface EvolutionRow {
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  taskEvolutionTypeCode?: string;
  evolutionSummary?: string;
}

interface MaintenanceProgramRow {
  programName?: string;
  reference?: string;
  periodicity?: number;
  programCode?: string;
  programDesignation?: string;
  programRevisionNumber?: string;
}

interface ItemRow {
  familyVariant?: string;
  item?: string;
  versionNumber?: string;
  taskItemTypeCode?: string;
  name?: string;
}

interface TaskRow {
  taskDesignation?: string;
  taskDescription?: string;
  taskStatus?: string;
  taskApplicabilityDate?: string;
  taskApplicabilityCode?: string;
  repairCenterCode?: string;
  groupCode?: string;
  taskTypeCode?: string;
  overhaul?: boolean;
  inspectionPerEsm?: string;
  taskZone?: string;
  taskChapter?: string;
  taskSection?: string;
  taskSubject?: string;
  taskTask?: string;
  taskSubTask?: string;
}

interface ShopManualsRow {
  smCode?: string;
  smVersionStart?: string;
  smVersionEnd?: string;
}

interface QualificationRow {
  qualificationCode?: string;
  qualificationName?: string;
  qualificationDescription?: string;
  averageHourRate?: string;
}

interface MeasurementPointRow {
  counterCode?: string;
  counterRemarks?: string;
  description?: string;
  unitCode?: string;
  toolPartNumber?: string;
  formula?: string;
  sequenceNumber?: number;
  groupCode?: string;
}

interface DocumentRow {
  docType?: string;
  docName?: string;
  docCategory?: string;
  docPublicationDate?: string;
  docSource?: string;
}

interface AdequateTaskRow {
  sequenceNumber?: number;
  linkType?: string;
  taskDesignation?: string;
  taskCode?: string;
  taskVersion?: string;
  groupCode?: string;
  taskTypeCode?: string;
}

@Component({
  selector: 'aw-maintenance-program-updates-list',
  templateUrl: './maintenance-program-updates-list.component.html'
})
export class MaintenanceProgramUpdatesListComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly HOME: string = 'home';
  public static readonly TASK_CARD = 'taskCard';
  public static readonly IMPACTS = 'impacts';
  public static readonly PREREQUISITES = 'prerequisites';
  public static readonly ATTRIBUTES = 'attributes';
  public static readonly DOCUMENTS = 'documents';
  public static readonly MEASUREMENT_POINT = 'measurementPoint';
  public static readonly MAINTENANCE_PROGRAMS = 'maintenancePrograms';
  public static readonly SHOP_MANUALS = 'shopManuals';
  public static readonly OPERATIONS = 'operations';
  public static readonly EVOLUTIONS = 'evolutions';
  public static readonly ITEMS = 'items';
  public static readonly TECHNICAL_LEVEL = 'technicalLevel';
  public static readonly ASSOCIATED_QUALIFICATIONS = 'associatedQualifications';
  public static readonly TOP_DOWN_STRUCTURE = 'topDownStructure';
  public static readonly SUPERIOR_TASKS = 'superiorTasks';
  public static readonly ANTERIOR_TASKS = 'anteriorInSequence';
  public static readonly POSTERIOR_TASKS = 'posteriorInSequence';
  public static readonly LINKED_TASK = 'linkedTasks';
  public static readonly MAIN_INFORMATION = 'mainInformation';
  public static readonly ADDITIONAL_INFORMATION = 'additionalInformation';
  public static readonly REFERENCE_MANUAL = 'referenceManual';
  public static readonly TOTAL_COST = 'totalCost';
  public static readonly ENG = 'en';

  public updatedTasksTableDataSource: TableDataSource<UpdatedTasksRow>;
  public previousTaskVersion: BireTaskDTO[];
  public planDTO: BireMaintenancePlanDTO;
  public displayName: string;
  public taskGroups: LabelValue<string>[];
  public taskApplicabilityCode: LabelValue<string>[];
  public mroCenters: LabelValue<string>[];
  public taskTypes: LabelValue<string>[];
  public status: LabelValue<string>[];
  public evolutionLinkTypes: LabelValue<string>[];
  public itemLinkTypes: LabelValue<string>[];
  public associatedLinkTypes: LabelValue<string>[];
  public documentCategories: LabelValue<string>[];
  public structureType: LabelValue<string>[];
  public attributeList: BireAttributeDTO[];
  public isLoading: boolean;
  public currency: string;
  public pTotalCost: number;
  public cTotalCost: number;
  public isAttribute: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly maintenanceProgramUpdatesListService: MaintenanceProgramUpdatesListService,
    private readonly propertiesService: PropertiesService,
    public translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initMaintenanceProgramTableDataSource();
    this.isLoading = true;
    this.isAttribute = false;
    this.currency = '';
    this.pTotalCost = 0;
    this.cTotalCost = 0;
    this.loadTaskGroup();
    this.loadApplicability();
    this.loadMROCenter();
    this.loadTaskType();
    this.loadStatus();
    this.loadLinkTypes();
    this.loadAssociatedTaskLinkTypes();
    this.loadDocumentTaskCategories();
    this.loadCurrency();
    this.loadStructureTypes();
    this.loadAttributeList();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_MAINTENANCE_PROGRAM_UPDATES_LIST;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.loadUpdatesList();
  }
  /**
   * loadUpdatesList - This function is used to display the heading of the component (Code and Name).
   */
  private loadUpdatesList(): void {
    if (!!this.componentData.objectId) {
      this.planDTO = this.serializationService.deserialize(this.componentData.objectId);
    }
    this.displayName = `${this.planDTO.planCode}-${this.planDTO.planName}`;
    this.displayComponentContext(this.displayName, this.isCreateOpenMode);
    if (!!this.planDTO.planCode) {
      this.getTaskRows(this.planDTO.planCode);
    }
  }

  /**
   * initMaintenanceProgramTableDataSource - This function is used to diplay the table columns.
   */
  private initMaintenanceProgramTableDataSource(): void {
    this.updatedTasksTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '15%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          width: '6%'
        },
        {
          field: 'tabName',
          translateKey: this.getTranslateKey('tabName'),
          width: '11%'
        },
        {
          field: 'panelName',
          translateKey: this.getTranslateKey('panelName'),
          width: '12%'
        },
        {
          field: 'fieldName',
          translateKey: this.getTranslateKey('fieldName'),
          width: '11%'
        },
        {
          field: 'currentValue',
          translateKey: this.getTranslateKey('currentValue'),
          width: '12%'
        },
        {
          field: 'previousValue',
          translateKey: this.getTranslateKey('previousValue'),
          width: '12%'
        },
        {
          field: 'previousTaskVersion',
          translateKey: this.getTranslateKey('previousTaskVersion'),
          width: '10%'
        },
        {
          field: 'previousRmpVersion',
          translateKey: this.getTranslateKey('previousRmpVersion'),
          width: '11%'
        }
      ],
      data: []
    });
  }

  private getTaskRows(planCode: string) {
    let panelName: string;
    this.maintenanceProgramUpdatesListService.getMainteanceProgramUpdatedList(planCode).subscribe((result) => {
      if (!!result) {
        this.isLoading = false;
        result.forEach((element: MaintenanceProgramUpdatedOutputDTO) => {
          const currentTask: BireTaskDTOId = {
            taskCode: element.cVersionBireTaskDTO.taskCode as string,
            taskVersion: element.cVersionBireTaskDTO.taskVersion as string
          };
          const previousTask: BireTaskDTOId = {
            taskCode: element.pVersionBireTaskDTO.taskCode as string,
            taskVersion: element.pVersionBireTaskDTO.taskVersion as string
          };
          const previousRmpVersion = !!element.pVersionGetMaintainanceProgramWithTaskDTO
            ? (element.pVersionGetMaintainanceProgramWithTaskDTO.programCode as string)
            : '';
          this.loadTaskData(
            currentTask,
            previousTask,
            element.cVersionBireTaskDTO,
            element.pVersionBireTaskDTO,
            previousRmpVersion
          );

          if (!!currentTask && !!previousTask) {
            if (!!element.cVersionBireOperationDTO || !!element.pVersionBireOperationDTO) {
              this.loadOperationData(
                currentTask,
                previousTask,
                element.cVersionBireOperationDTO,
                element.pVersionBireOperationDTO,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireSmTaskList || !!element.pVersionBireSmTaskList) {
              this.loadShopManualsData(
                currentTask,
                previousTask,
                element.cVersionBireSmTaskList,
                element.pVersionBireSmTaskList,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireTaskEvolutionDTO || !!element.pVersionBireTaskEvolutionDTO) {
              this.loadEvolutionData(
                currentTask,
                previousTask,
                element.cVersionBireTaskEvolutionDTO,
                element.pVersionBireTaskEvolutionDTO,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireTilList || !!element.pVersionBireTilList) {
              this.loadTechnicalLevelData(
                currentTask,
                previousTask,
                element.cVersionBireTilList,
                element.pVersionBireTilList,
                previousRmpVersion
              );
            }
            if (!!element.cVersionMaintainanceWithTask || !!element.pVersionMaintainanceWithTask) {
              this.loadMaintenanceProgramData(
                currentTask,
                previousTask,
                element.cVersionMaintainanceWithTask,
                element.pVersionMaintainanceWithTask,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireQualificationList || !!element.pVersionBireQualificationList) {
              this.loadQualificationData(
                currentTask,
                previousTask,
                element.cVersionBireQualificationList,
                element.pVersionBireQualificationList,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireTaskMeasureList || !!element.pVersionBireTaskMeasureList) {
              this.loadMeasurementPointData(
                currentTask,
                previousTask,
                element.cVersionBireTaskMeasureList,
                element.pVersionBireTaskMeasureList,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireDocumentDTO || !!element.pVersionBireDocumentDTO) {
              this.loadDocumentsData(
                currentTask,
                previousTask,
                element.cVersionBireDocumentDTO,
                element.pVersionBireDocumentDTO,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireTaskItemList || !!element.pVersionBireTaskItemList) {
              this.loadItemsData(
                currentTask,
                previousTask,
                element.cVersionBireTaskItemList,
                element.pVersionBireTaskItemList,
                previousRmpVersion
              );
            }
            if (!!element.cVersionBireTaskAttribute || !!element.pVersionBireTaskAttribute) {
              this.loadAttributeData(
                currentTask,
                previousTask,
                element.cVersionBireTaskAttribute,
                element.pVersionBireTaskAttribute,
                previousRmpVersion
              );
            }
            if (!!element.cGetTaskLinkInAdequateTableDTO || !!element.pGetTaskLinkInAdequateTableDTO) {
              if (
                !!element.cGetTaskLinkInAdequateTableDTO.anteriorInSequence ||
                !!element.pGetTaskLinkInAdequateTableDTO.anteriorInSequence
              ) {
                panelName = MaintenanceProgramUpdatesListComponent.ANTERIOR_TASKS;
                this.loadsuperiorAnteriorPosteriorLinkedTopDownData(
                  currentTask,
                  previousTask,
                  panelName,
                  previousRmpVersion,
                  element.cGetTaskLinkInAdequateTableDTO.anteriorInSequence,
                  element.pGetTaskLinkInAdequateTableDTO.anteriorInSequence
                );
              }
              if (
                !!element.cGetTaskLinkInAdequateTableDTO.posteriorInSequence ||
                !!element.pGetTaskLinkInAdequateTableDTO.posteriorInSequence
              ) {
                panelName = MaintenanceProgramUpdatesListComponent.POSTERIOR_TASKS;
                this.loadsuperiorAnteriorPosteriorLinkedTopDownData(
                  currentTask,
                  previousTask,
                  panelName,
                  previousRmpVersion,
                  element.cGetTaskLinkInAdequateTableDTO.posteriorInSequence,
                  element.pGetTaskLinkInAdequateTableDTO.posteriorInSequence
                );
              }
              if (
                !!element.cGetTaskLinkInAdequateTableDTO.linkedTasks ||
                !!element.pGetTaskLinkInAdequateTableDTO.linkedTasks
              ) {
                panelName = MaintenanceProgramUpdatesListComponent.LINKED_TASK;
                this.loadsuperiorAnteriorPosteriorLinkedTopDownData(
                  currentTask,
                  previousTask,
                  panelName,
                  previousRmpVersion,
                  element.cGetTaskLinkInAdequateTableDTO.linkedTasks,
                  element.pGetTaskLinkInAdequateTableDTO.linkedTasks
                );
              }
              if (
                !!element.cGetTaskLinkInAdequateTableDTO.superiorTasks ||
                !!element.pGetTaskLinkInAdequateTableDTO.superiorTasks
              ) {
                panelName = MaintenanceProgramUpdatesListComponent.SUPERIOR_TASKS;
                this.loadsuperiorAnteriorPosteriorLinkedTopDownData(
                  currentTask,
                  previousTask,
                  panelName,
                  previousRmpVersion,
                  element.cGetTaskLinkInAdequateTableDTO.superiorTasks,
                  element.pGetTaskLinkInAdequateTableDTO.superiorTasks
                );
              }
              if (
                !!element.cGetTaskLinkInAdequateTableDTO.taskTreeCustomNode &&
                !!element.pGetTaskLinkInAdequateTableDTO.taskTreeCustomNode &&
                (element.cGetTaskLinkInAdequateTableDTO.taskTreeCustomNode.children ||
                  element.pGetTaskLinkInAdequateTableDTO.taskTreeCustomNode.children)
              ) {
                panelName = MaintenanceProgramUpdatesListComponent.TOP_DOWN_STRUCTURE;
                this.loadsuperiorAnteriorPosteriorLinkedTopDownData(
                  currentTask,
                  previousTask,
                  panelName,
                  previousRmpVersion,
                  element.cGetTaskLinkInAdequateTableDTO.taskTreeCustomNode.children,
                  element.pGetTaskLinkInAdequateTableDTO.taskTreeCustomNode.children
                );
              }
            }
          }
        });
      }
    });
  }
  private getObjectDiff<T>(obj1: T, obj2: T) {
    const result = {};
    if (Object.is(obj1, obj2)) {
      return undefined;
    }
    if (!obj2 || typeof obj2 !== 'object') {
      return obj2;
    }

    Object.keys(obj1 || {})
      .concat(Object.keys(obj2 || {}))
      .forEach((key) => {
        if (obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
          result[key] = obj2[key] || '';
        }
        if (typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
          const value = this.getObjectDiff(obj1[key], obj2[key]);
          if (value !== undefined) {
            result[key] = value;
          }
        }
      });

    return result;
  }

  private loadTaskData(
    cTaskDTOId: BireTaskDTOId,
    pTaskDTOId: BireTaskDTOId,
    currentTask: BireTaskDTO,
    previousTask: BireTaskDTO,
    previousRmpVersion: string
  ) {
    const tabName = MaintenanceProgramUpdatesListComponent.HOME;
    const cBireTaskRow = this.createTaskRow(currentTask);
    const pBireTaskRow = this.createTaskRow(previousTask);
    let panelName: string;
    const diff = this.getObjectDiff(cBireTaskRow, pBireTaskRow);
    if (!!diff) {
      for (const fieldName in diff) {
        if (pBireTaskRow.hasOwnProperty(fieldName)) {
          if (
            fieldName === 'taskTypeCode' ||
            fieldName === 'taskApplicabilityDate' ||
            fieldName === 'groupCode' ||
            fieldName === 'taskApplicabilityCode' ||
            fieldName === 'taskDesignation'
          ) {
            panelName = MaintenanceProgramUpdatesListComponent.MAIN_INFORMATION;
          } else if (
            fieldName === 'taskChapter' ||
            fieldName === 'taskSubject' ||
            fieldName === 'taskSection' ||
            fieldName === 'taskSubTask' ||
            fieldName === 'taskTask'
          ) {
            panelName = MaintenanceProgramUpdatesListComponent.REFERENCE_MANUAL;
          } else {
            panelName = MaintenanceProgramUpdatesListComponent.ADDITIONAL_INFORMATION;
          }
          this.createMaintenanceProgramTaskUpdatedRow(
            cTaskDTOId,
            pTaskDTOId,
            cBireTaskRow[fieldName],
            pBireTaskRow[fieldName],
            fieldName,
            tabName,
            panelName,
            previousRmpVersion
          );
        }
      }
    }
  }

  private createTaskRow(bireTaskDTO: BireTaskDTO): TaskRow {
    const taskRow: TaskRow = {
      taskDesignation: bireTaskDTO.taskDesignation,
      taskDescription: bireTaskDTO.taskDescription,
      taskStatus: !!bireTaskDTO.taskStatus
        ? this.status.filter((type) => type.value === bireTaskDTO.taskStatus)[0].label
        : '',
      taskApplicabilityDate: !!bireTaskDTO.taskApplicabilityDate ? bireTaskDTO.taskApplicabilityDate.toString() : '',
      taskApplicabilityCode: !!bireTaskDTO.taskApplicabilityCode
        ? this.taskApplicabilityCode.filter((type) => type.value === bireTaskDTO.taskApplicabilityCode)[0].label
        : '',
      repairCenterCode: !!bireTaskDTO.repairCenterCode
        ? this.mroCenters.filter((type) => type.value === bireTaskDTO.repairCenterCode)[0].label
        : '',
      groupCode: !!bireTaskDTO.groupCode
        ? this.taskGroups.filter((type) => type.value === bireTaskDTO.groupCode)[0].label
        : '',
      taskTypeCode: !!bireTaskDTO.taskTypeCode
        ? this.taskTypes.filter((type) => type.value === bireTaskDTO.taskTypeCode)[0].label
        : '',
      overhaul: bireTaskDTO.overhaul,
      inspectionPerEsm: bireTaskDTO.inspectionPerEsm,
      taskZone: bireTaskDTO.taskZone,
      taskChapter: bireTaskDTO.taskChapter,
      taskSubject: bireTaskDTO.taskSubject,
      taskSection: bireTaskDTO.taskSection,
      taskSubTask: bireTaskDTO.taskSubTask,
      taskTask: bireTaskDTO.taskTask
    };

    return taskRow;
  }

  private loadOperationData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireOperationCustomDTO[],
    pVersion: BireOperationCustomDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireOperationCustomDTO | undefined = {};
    let pCost = 0;
    let cCost = 0;
    let panelName = MaintenanceProgramUpdatesListComponent.OPERATIONS;
    let tabName = MaintenanceProgramUpdatesListComponent.TASK_CARD;
    let fieldName: string;
    const value = '';
    const cBireOperationRow = cVersion.map((row) => this.createOperationRow(row));
    const pBireOperationRow = pVersion.map((row) => this.createOperationRow(row));

    if (pBireOperationRow.length >= cBireOperationRow.length) {
      pBireOperationRow.forEach((row, index) => {
        if (!!cBireOperationRow[index]) {
          diff = this.getObjectDiff(row, cBireOperationRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pBireOperationRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cBireOperationRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pBireOperationRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
        pCost = !!row.opeCost ? Number.parseInt(row.opeCost.toString(), 0) : 0;
        cCost =
          !!cBireOperationRow[index] && !!cBireOperationRow[index].opeCost
            ? Number.parseInt(cBireOperationRow[index].opeCost.toString(), 0)
            : 0;

        this.pTotalCost = this.pTotalCost + pCost;
        this.cTotalCost = this.cTotalCost + cCost;
      });
    } else {
      cBireOperationRow.forEach((row, index) => {
        if (!!pBireOperationRow[index]) {
          diff = this.getObjectDiff(row, pBireOperationRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cBireOperationRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pBireOperationRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cBireOperationRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
        cCost = !!row.opeCost ? Number.parseInt(row.opeCost.toString(), 0) : 0;
        pCost =
          !!pBireOperationRow[index] && !!pBireOperationRow[index].opeCost
            ? Number.parseInt(pBireOperationRow[index].opeCost.toString(), 0)
            : 0;

        this.pTotalCost = this.pTotalCost + pCost;
        this.cTotalCost = this.cTotalCost + cCost;
      });
    }
    if (this.pTotalCost !== this.cTotalCost) {
      fieldName = MaintenanceProgramUpdatesListComponent.TOTAL_COST;
      panelName = MaintenanceProgramUpdatesListComponent.ADDITIONAL_INFORMATION;
      tabName = MaintenanceProgramUpdatesListComponent.HOME;
      this.createMaintenanceProgramTaskUpdatedRow(
        currentTask,
        previousTask,
        this.cTotalCost.toString(),
        this.pTotalCost.toString(),
        fieldName,
        tabName,
        panelName,
        previousRmpVersion
      );
    }
  }

  private createOperationRow(bireOperationDTO: BireOperationCustomDTO): OperationRow {
    const operationRow: OperationRow = {
      opeCode: `${bireOperationDTO.opeCode}-${bireOperationDTO.opeVersion}`,
      opeDesignation: bireOperationDTO.opeDesignation,
      opeSequenceNumber: bireOperationDTO.opeSequenceNumber,
      opeVersion: bireOperationDTO.opeVersion,
      opeDurationTime: bireOperationDTO.opeDurationTime,
      opeQualification: bireOperationDTO.opeQualification,
      opeManHour: bireOperationDTO.opeManHour,
      opeCost: !!bireOperationDTO.opeCost ? bireOperationDTO.opeCost : 0
    };

    return operationRow;
  }

  private loadEvolutionData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireTaskEvolutionMaintenanceDTO[],
    pVersion: BireTaskEvolutionMaintenanceDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireTaskEvolutionMaintenanceDTO | undefined = {};
    const panelName = MaintenanceProgramUpdatesListComponent.EVOLUTIONS;
    const tabName = MaintenanceProgramUpdatesListComponent.IMPACTS;
    let fieldName: string;
    const value = '';
    const cBireEvolutionRow = cVersion.map((row) => this.createEvolutionRow(row));
    const pBireEvolutionRow = pVersion.map((row) => this.createEvolutionRow(row));

    if (pBireEvolutionRow.length >= cBireEvolutionRow.length) {
      pBireEvolutionRow.forEach((row, index) => {
        if (!!cBireEvolutionRow[index]) {
          diff = this.getObjectDiff(row, cBireEvolutionRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pBireEvolutionRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cBireEvolutionRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pBireEvolutionRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cBireEvolutionRow.forEach((row, index) => {
        if (!!pBireEvolutionRow[index]) {
          diff = this.getObjectDiff(row, pBireEvolutionRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cBireEvolutionRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pBireEvolutionRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cBireEvolutionRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createEvolutionRow(bireEvolutionDTO: BireTaskEvolutionMaintenanceDTO): EvolutionRow {
    const evolutionRow: EvolutionRow = {
      evolutionNumber: bireEvolutionDTO.evolutionNumber,
      evolutionRevisionNumber: bireEvolutionDTO.evolutionRevisionNumber,
      taskEvolutionTypeCode: !!bireEvolutionDTO.taskEvolutionTypeCode
        ? this.evolutionLinkTypes.filter((type) => type.value === bireEvolutionDTO.taskEvolutionTypeCode)[0].label
        : '',
      evolutionSummary: bireEvolutionDTO.evolutionSummary
    };

    return evolutionRow;
  }

  private loadItemsData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireTaskItemWithItemCustomDTO[],
    pVersion: BireTaskItemWithItemCustomDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireTaskItemWithItemCustomDTO | undefined = {};
    const panelName = MaintenanceProgramUpdatesListComponent.ITEMS;
    const tabName = MaintenanceProgramUpdatesListComponent.IMPACTS;
    let fieldName: string;
    const value = '';
    const cBireItemRow = cVersion.map((row) => this.createItemsRow(row));
    const pBireItemRow = pVersion.map((row) => this.createItemsRow(row));

    if (pBireItemRow.length >= cBireItemRow.length) {
      pBireItemRow.forEach((row, index) => {
        if (!!cBireItemRow[index]) {
          diff = this.getObjectDiff(row, cBireItemRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pBireItemRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cBireItemRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pBireItemRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cBireItemRow.forEach((row, index) => {
        if (!!pBireItemRow[index]) {
          diff = this.getObjectDiff(row, pBireItemRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cBireItemRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pBireItemRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cBireItemRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createItemsRow(bireItemDTO: BireTaskItemWithItemCustomDTO): ItemRow {
    const structureType = !!bireItemDTO.structureType
      ? this.structureType.filter((type) => type.value === bireItemDTO.structureType)[0].label
      : '';
    const itemRow: ItemRow = {
      familyVariant: `${bireItemDTO.familyCode}-${structureType}-${bireItemDTO.variantCode}`,
      item: `${bireItemDTO.chapter}-${bireItemDTO.subject}-${bireItemDTO.section}-
             ${bireItemDTO.sheet}-${bireItemDTO.marks}`,
      versionNumber: bireItemDTO.versionNumber,
      taskItemTypeCode: !!bireItemDTO.taskItemTypeCode
        ? this.itemLinkTypes.filter((type) => type.value === bireItemDTO.taskItemTypeCode)[0].label
        : '',
      name: bireItemDTO.name
    };

    return itemRow;
  }

  private loadTechnicalLevelData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireTilDTO[],
    pVersion: BireTilDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireTilDTO | undefined = {};
    const panelName = MaintenanceProgramUpdatesListComponent.TECHNICAL_LEVEL;
    const tabName = MaintenanceProgramUpdatesListComponent.PREREQUISITES;
    let fieldName: string;
    const value = '';
    const cBireTilRow = cVersion.map((row) => this.createTechnicalLevelRow(row));
    const pBireTilRow = pVersion.map((row) => this.createTechnicalLevelRow(row));

    if (pBireTilRow.length >= cBireTilRow.length) {
      pBireTilRow.forEach((row, index) => {
        if (!!cBireTilRow[index]) {
          diff = this.getObjectDiff(row, cBireTilRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pBireTilRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cBireTilRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pBireTilRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cBireTilRow.forEach((row, index) => {
        if (!!pBireTilRow[index]) {
          diff = this.getObjectDiff(row, pBireTilRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cBireTilRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pBireTilRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cBireTilRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createTechnicalLevelRow(bireTilDTO: BireTilDTO): TechnicalLevelRow {
    const tilRow: TechnicalLevelRow = {
      tilName: bireTilDTO.tilName,
      tilDescription: bireTilDTO.tilDescription
    };

    return tilRow;
  }

  private loadQualificationData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireQualificationDTO[],
    pVersion: BireQualificationDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireQualificationDTO | undefined = {};
    const panelName = MaintenanceProgramUpdatesListComponent.ASSOCIATED_QUALIFICATIONS;
    const tabName = MaintenanceProgramUpdatesListComponent.PREREQUISITES;
    let fieldName: string;
    const value = '';
    const cBireQualificationRow = cVersion.map((row) => this.createQualificationRow(row));
    const pBireQualificationRow = pVersion.map((row) => this.createQualificationRow(row));

    if (pBireQualificationRow.length >= cBireQualificationRow.length) {
      pBireQualificationRow.forEach((row, index) => {
        if (!!cBireQualificationRow[index]) {
          diff = this.getObjectDiff(row, cBireQualificationRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pBireQualificationRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cBireQualificationRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pBireQualificationRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cBireQualificationRow.forEach((row, index) => {
        if (!!pBireQualificationRow[index]) {
          diff = this.getObjectDiff(row, pBireQualificationRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cBireQualificationRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pBireQualificationRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cBireQualificationRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createQualificationRow(bireQualificationDTO: BireQualificationDTO): QualificationRow {
    const qualificationDTO: QualificationRow = {
      qualificationCode: bireQualificationDTO.qualificationCode,
      qualificationName: bireQualificationDTO.qualificationName,
      qualificationDescription: bireQualificationDTO.qualificationDescription,
      averageHourRate: !!bireQualificationDTO.averageHourRate
        ? `${bireQualificationDTO.averageHourRate} ${this.currency}`
        : ''
    };

    return qualificationDTO;
  }

  private loadMaintenanceProgramData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: GetMaintainanceProgramWithTaskDTO[],
    pVersion: GetMaintainanceProgramWithTaskDTO[],
    previousRmpVersion: string
  ) {
    const panelName = MaintenanceProgramUpdatesListComponent.MAINTENANCE_PROGRAMS;
    const tabName = MaintenanceProgramUpdatesListComponent.HOME;
    let fieldName: string;
    const value = '';
    const cBireMaintenanceProgramRow = cVersion.map((row) => this.createMaintenanceProgramRow(row));
    const pBireMaintenanceProgramRow = pVersion.map((row) => this.createMaintenanceProgramRow(row));

    if (pBireMaintenanceProgramRow.length >= cBireMaintenanceProgramRow.length) {
      pBireMaintenanceProgramRow.forEach((row, index) => {
        if (!!cBireMaintenanceProgramRow[index]) {
          const diff = this.getObjectDiff(row, cBireMaintenanceProgramRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pBireMaintenanceProgramRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cBireMaintenanceProgramRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pBireMaintenanceProgramRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cBireMaintenanceProgramRow.forEach((row, index) => {
        if (!!pBireMaintenanceProgramRow[index]) {
          const diff = this.getObjectDiff(row, pBireMaintenanceProgramRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cBireMaintenanceProgramRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pBireMaintenanceProgramRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cBireMaintenanceProgramRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createMaintenanceProgramRow(
    bireMaintenanceProgramDTO: GetMaintainanceProgramWithTaskDTO
  ): MaintenanceProgramRow {
    const maintenanceProgramRow: MaintenanceProgramRow = {
      programCode: bireMaintenanceProgramDTO.programCode,
      programName: bireMaintenanceProgramDTO.programName,
      programDesignation: bireMaintenanceProgramDTO.programDesignation,
      programRevisionNumber: bireMaintenanceProgramDTO.programRevisionNumber,
      reference: bireMaintenanceProgramDTO.reference,
      periodicity: bireMaintenanceProgramDTO.periodicity
    };

    return maintenanceProgramRow;
  }

  private loadShopManualsData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireSmTaskDTO[],
    pVersion: BireSmTaskDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireSmTaskDTO | undefined = {};
    const panelName = MaintenanceProgramUpdatesListComponent.SHOP_MANUALS;
    const tabName = MaintenanceProgramUpdatesListComponent.HOME;
    let fieldName: string;
    const value = '';
    const cBireShopManualRow = cVersion.map((row) => this.createShopManualsRow(row));
    const pBireShopManualRow = pVersion.map((row) => this.createShopManualsRow(row));

    if (pBireShopManualRow.length >= cBireShopManualRow.length) {
      pBireShopManualRow.forEach((row, index) => {
        if (!!cBireShopManualRow[index]) {
          diff = this.getObjectDiff(row, cBireShopManualRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pBireShopManualRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cBireShopManualRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pBireShopManualRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cBireShopManualRow.forEach((row, index) => {
        if (!!pBireShopManualRow[index]) {
          diff = this.getObjectDiff(row, pBireShopManualRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cBireShopManualRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pBireShopManualRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cBireShopManualRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createShopManualsRow(bireShopManualsDTO: BireSmTaskDTO): ShopManualsRow {
    const shopManualsRow: ShopManualsRow = {
      smCode: bireShopManualsDTO.smCode,
      smVersionStart: bireShopManualsDTO.smVersionStart,
      smVersionEnd: bireShopManualsDTO.smVersionEnd
    };

    return shopManualsRow;
  }

  private loadMeasurementPointData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireMeasurementCustomDTO[],
    pVersion: BireMeasurementCustomDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireMeasurementCustomDTO | undefined = {};
    const panelName = MaintenanceProgramUpdatesListComponent.MEASUREMENT_POINT;
    const tabName = MaintenanceProgramUpdatesListComponent.MEASUREMENT_POINT;
    let fieldName: string;
    const value = '';
    const cMeasurementPointRow = cVersion.map((row) => this.createMeasurementPointRow(row));
    const pMeasurementPointRow = pVersion.map((row) => this.createMeasurementPointRow(row));

    if (pMeasurementPointRow.length >= cMeasurementPointRow.length) {
      pMeasurementPointRow.forEach((row, index) => {
        if (!!cMeasurementPointRow[index]) {
          diff = this.getObjectDiff(row, cMeasurementPointRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pMeasurementPointRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cMeasurementPointRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pMeasurementPointRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cMeasurementPointRow.forEach((row, index) => {
        if (!!pMeasurementPointRow[index]) {
          diff = this.getObjectDiff(row, pMeasurementPointRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cMeasurementPointRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pMeasurementPointRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cMeasurementPointRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createMeasurementPointRow(bireMeasurementPointDTO: BireMeasurementCustomDTO): MeasurementPointRow {
    const measurementPointRow: MeasurementPointRow = {
      counterCode: bireMeasurementPointDTO.counterCode,
      counterRemarks: bireMeasurementPointDTO.counterRemarks,
      description: bireMeasurementPointDTO.description,
      unitCode: bireMeasurementPointDTO.unitCode,
      toolPartNumber: bireMeasurementPointDTO.toolPartNumber,
      formula: bireMeasurementPointDTO.formula,
      sequenceNumber: bireMeasurementPointDTO.sequenceNumber,
      groupCode: bireMeasurementPointDTO.groupCode
    };

    return measurementPointRow;
  }

  private loadsuperiorAnteriorPosteriorLinkedTopDownData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    panelName: string,
    previousRmpVersion: string,
    cVersion?: LinkedTaskCustomDTO[],
    pVersion?: LinkedTaskCustomDTO[]
  ) {
    const tabName = MaintenanceProgramUpdatesListComponent.TASK_CARD;
    let fieldName: string;
    const value = '';

    const cAdequateTaskRow =
      !!cVersion && cVersion.map((row) => this.createSuperiorAnteriorPosteriorLinkedTopDownRow(row));
    const pAdequateTaskRow =
      !!pVersion && pVersion.map((row) => this.createSuperiorAnteriorPosteriorLinkedTopDownRow(row));
    if (
      (!!pAdequateTaskRow && !!cAdequateTaskRow && pAdequateTaskRow.length >= cAdequateTaskRow.length) ||
      (!!pAdequateTaskRow && cAdequateTaskRow === undefined)
    ) {
      pAdequateTaskRow.forEach((row, index) => {
        if (!!cAdequateTaskRow[index]) {
          const diff = this.getObjectDiff(row, cAdequateTaskRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pAdequateTaskRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cAdequateTaskRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pAdequateTaskRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else if (
      (!!pAdequateTaskRow && !!cAdequateTaskRow && pAdequateTaskRow.length <= cAdequateTaskRow.length) ||
      (!!cAdequateTaskRow && pAdequateTaskRow === undefined)
    ) {
      cAdequateTaskRow.forEach((row, index) => {
        if (!!pAdequateTaskRow[index]) {
          const diff = this.getObjectDiff(row, pAdequateTaskRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cAdequateTaskRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pAdequateTaskRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cAdequateTaskRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createSuperiorAnteriorPosteriorLinkedTopDownRow(bireAdequateTaskDTO: LinkedTaskCustomDTO): AdequateTaskRow {
    const adequateTaskRow: AdequateTaskRow = {
      sequenceNumber: bireAdequateTaskDTO.sequenceNumber,
      linkType: !!bireAdequateTaskDTO.linkType
        ? this.associatedLinkTypes.filter((type) => type.value === bireAdequateTaskDTO.linkType)[0].label
        : '',
      taskDesignation: bireAdequateTaskDTO.bireTaskDTO.taskDesignation,
      taskCode: bireAdequateTaskDTO.bireTaskDTO.taskCode,
      taskVersion: bireAdequateTaskDTO.bireTaskDTO.taskVersion,
      groupCode: !!bireAdequateTaskDTO.bireTaskDTO.groupCode
        ? this.taskGroups.filter((type) => type.value === bireAdequateTaskDTO.bireTaskDTO.groupCode)[0].label
        : '',
      taskTypeCode: !!bireAdequateTaskDTO.bireTaskDTO.taskTypeCode
        ? this.taskTypes.filter((type) => type.value === bireAdequateTaskDTO.bireTaskDTO.taskTypeCode)[0].label
        : ''
    };

    return adequateTaskRow;
  }

  private loadDocumentsData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cVersion: BireDocumentCustomDTO[],
    pVersion: BireDocumentCustomDTO[],
    previousRmpVersion: string
  ) {
    let diff: BireDocumentCustomDTO | undefined = {};
    const panelName = MaintenanceProgramUpdatesListComponent.DOCUMENTS;
    const tabName = MaintenanceProgramUpdatesListComponent.DOCUMENTS;
    let fieldName: string;
    const value = '';
    const cDocumentRow = cVersion.map((row) => this.createDocumentRow(row));
    const pDocumentRow = pVersion.map((row) => this.createDocumentRow(row));
    if (pDocumentRow.length >= cDocumentRow.length) {
      pDocumentRow.forEach((row, index) => {
        if (!!cDocumentRow[index]) {
          diff = this.getObjectDiff(row, cDocumentRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (pDocumentRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  cDocumentRow[index][fieldName],
                  row[fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (pDocumentRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                value,
                row[fieldName],
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    } else {
      cDocumentRow.forEach((row, index) => {
        if (!!pDocumentRow[index]) {
          diff = this.getObjectDiff(row, pDocumentRow[index]);
          if (!!diff) {
            for (fieldName in diff) {
              if (cDocumentRow[index].hasOwnProperty(fieldName)) {
                this.createMaintenanceProgramTaskUpdatedRow(
                  currentTask,
                  previousTask,
                  row[fieldName],
                  pDocumentRow[index][fieldName],
                  fieldName,
                  tabName,
                  panelName,
                  previousRmpVersion
                );
              }
            }
          }
        } else {
          for (fieldName in row) {
            if (cDocumentRow[index].hasOwnProperty(fieldName) && !!row[fieldName]) {
              this.createMaintenanceProgramTaskUpdatedRow(
                currentTask,
                previousTask,
                row[fieldName],
                value,
                fieldName,
                tabName,
                panelName,
                previousRmpVersion
              );
            }
          }
        }
      });
    }
  }

  private createDocumentRow(bireDocumentDTO: BireDocumentCustomDTO): DocumentRow {
    const documentRow: DocumentRow = {
      docType: bireDocumentDTO.docType,
      docName: bireDocumentDTO.docName,
      docCategory: !!bireDocumentDTO.docCategory
        ? this.documentCategories.filter((type) => type.value === bireDocumentDTO.docCategory)[0].label
        : '',
      docPublicationDate: !!bireDocumentDTO.docPublicationDate ? bireDocumentDTO.docPublicationDate.toString() : '',
      docSource: bireDocumentDTO.docSource
    };

    return documentRow;
  }

  private createMaintenanceProgramTaskUpdatedRow(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    cValue: string,
    pValue: string,
    fieldName: string,
    tabName: string,
    panelName: string,
    pRmpVersion: string
  ) {
    const updatedTasksRows: UpdatedTasksRow = {
      taskCode: currentTask.taskCode,
      taskVersion: currentTask.taskVersion,
      previousTaskVersion: previousTask.taskVersion,
      fieldName: this.isAttribute ? fieldName : this.getTranslatedValue(fieldName),
      currentValue: cValue,
      previousValue: pValue,
      panelName: this.getTranslatedValue(panelName),
      tabName: this.getTranslatedValue(tabName),
      previousRmpVersion: pRmpVersion
    };
    this.isAttribute = false;
    this.updatedTasksTableDataSource.addData([updatedTasksRows]);
  }

  private loadAttributeData(
    currentTask: BireTaskDTOId,
    previousTask: BireTaskDTOId,
    current: BireTaskAttributeCustomDTO[],
    previous: BireTaskAttributeCustomDTO[],
    previousRmpVersion: string
  ) {
    let previousValue: string;
    let currentValue: string;
    let fieldName: string;
    const value = '';
    const panelName = MaintenanceProgramUpdatesListComponent.ATTRIBUTES;
    const tabName = MaintenanceProgramUpdatesListComponent.ATTRIBUTES;
    this.attributeList.forEach((element) => {
      this.isAttribute = true;
      const previousAttribute =
        !!previous &&
        !!previous.find((data) => data.attributeId === element.attributeId && data.attributeValue !== value)
          ? previous.filter((data) => data.attributeId === element.attributeId)[0].attributeValue
          : element.attributeType === BidoAttributeConstants.ATTRIBUTE_TYPE_BOOLEAN
          ? 'false'
          : value;
      const currentAttribute =
        !!current && !!current.find((data) => data.attributeId === element.attributeId && data.attributeValue !== value)
          ? current.filter((data) => data.attributeId === element.attributeId)[0].attributeValue
          : element.attributeType === BidoAttributeConstants.ATTRIBUTE_TYPE_BOOLEAN
          ? 'false'
          : value;
      if (currentAttribute === previousAttribute) {
        this.isAttribute = false;

        return;
      } else {
        currentValue = !!currentAttribute ? currentAttribute : value;
        previousValue = !!previousAttribute ? previousAttribute : value;
        fieldName = this.fetchAttributeLabel(element);
      }

      this.createMaintenanceProgramTaskUpdatedRow(
        currentTask,
        previousTask,
        currentValue,
        previousValue,
        fieldName,
        tabName,
        panelName,
        previousRmpVersion
      );
    });
  }

  /**
   * fetchAttributeLabel() - This function is used to fill the field name in the Attribute Panel.
   * @param attribute - Attribute DTO
   */
  private fetchAttributeLabel(attribute: BireTaskAttributeCustomDTO) {
    let value = '';
    const label = this.attributeList.filter((type) => type.attributeId === attribute.attributeId)[0];
    if (!!this.attributeList) {
      if (this.translateService.currentLang === MaintenanceProgramUpdatesListComponent.ENG) {
        value = label && label.attributeNameEn ? label.attributeNameEn : '';
      } else {
        value = label && label.attributeNameFr ? label.attributeNameFr : '';
      }
    }

    return value;
  }

  private loadApplicability(): void {
    this.maintenanceProgramUpdatesListService.getApplicability().subscribe(
      (results) => {
        this.taskApplicabilityCode = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetApplicabilities'));
      }
    );
  }

  private loadTaskGroup(): void {
    this.maintenanceProgramUpdatesListService.getTaskGroups().subscribe(
      (results) => {
        this.taskGroups = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTaskGroups'));
      }
    );
  }
  private loadMROCenter(): void {
    this.maintenanceProgramUpdatesListService.findMROCenter().subscribe(
      (results) => {
        this.mroCenters = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorONGetMROCenter'));
      }
    );
  }

  private loadTaskType(): void {
    this.maintenanceProgramUpdatesListService.getTaskType().subscribe(
      (results) => {
        this.taskTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetTaskTypes'));
      }
    );
  }
  private loadStatus(): void {
    this.maintenanceProgramUpdatesListService.getFuncObjectStatusMap().subscribe(
      (results) => {
        this.status = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetObjectStatus'));
      }
    );
  }

  private loadAssociatedTaskLinkTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_LINK_MAP).subscribe(
      (results) => {
        this.associatedLinkTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
      }
    );
  }

  private loadLinkTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_EVOLUTION_TYPE_MAP).subscribe(
      (results) => {
        this.evolutionLinkTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
      }
    );

    this.propertiesService.getValue(GenericPropertyConstants.TASK_ITEM_TYPE_MAP).subscribe(
      (results) => {
        this.itemLinkTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
      }
    );
  }

  private loadDocumentTaskCategories(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_TASK_CATEGORY_MAP).subscribe(
      (results) => {
        this.documentCategories = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetDocumentTaskCategories'));
      }
    );
  }

  private loadStructureTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.STRUCTURE_TYPE_MAP).subscribe(
      (results) => {
        this.structureType = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadStructureType'));
      }
    );
  }

  private getTranslatedValue(key): string {
    return this.translateService.instant(this.getTranslateKey(key));
  }

  private loadCurrency(): void {
    this.maintenanceProgramUpdatesListService.getLocalCurrency().subscribe((result) => {
      const currencyRegexp = /^[a-zA-Z]+ \(([A-Z]+)\)$/;
      const mo = result.match(currencyRegexp);
      this.currency = mo ? mo[1] : result;
    });
  }
  private loadAttributeList(): void {
    this.maintenanceProgramUpdatesListService
      .findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_TASK_KEY)
      .subscribe((results) => {
        this.attributeList = results || [];
      });
  }
}
