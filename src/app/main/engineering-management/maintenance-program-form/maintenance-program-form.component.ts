import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TableDataSourceWithHistory } from '../../../modules/purchase-contract/utils/table-data-source-with-history';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { AppConstants } from '../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { BireAttributeConstants } from '../../../shared/constants/bire-attribute-constants';
import { BireMaintenancePlanConstants } from '../../../shared/constants/bire-maintenance-plan-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FormatSelectOptionPipe } from '../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { AssetAssignmentMPSaveInput } from '../../../shared/types/api-input-types/airworthiness-management/asset-assignment-mp-save-input.interface';
import { CreateUpdateBireDocPlanInput } from '../../../shared/types/api-input-types/fleet-management/create-update-bire-doc-plan-input.interface';
import { RemoveBireDocPlanInput } from '../../../shared/types/api-input-types/fleet-management/remove-bire-doc-plan-input.interface';
import { CheckAMPComplianceRMPInput } from '../../../shared/types/api-input-types/task-management/check-amp-compliance-rmp-input.interface';
import { SaveMaintenanceProgramScreenInput } from '../../../shared/types/api-input-types/task-management/save-maintenance-program-screen-input.interface';
import { UpgradeBireMaintenancePlanInput } from '../../../shared/types/api-input-types/task-management/upgrade-bire-maintenance-plan-input.interface';
import { BireDocPlanDTOId } from '../../../shared/types/api-output-types/fleet-management/bire-doc-plan-dto-id.interface';
import { BireDocPlanDTO } from '../../../shared/types/api-output-types/fleet-management/bire-doc-plan-dto.interface';
import { AssetAssignmentMPTableDTO } from '../../../shared/types/api-output-types/task-management/asset-assignment-mp-table-dto.interface';
import { ItemsAssociatedTableDTO } from '../../../shared/types/api-output-types/task-management/items-associated-table-dto.interface';
import { PartAssociateTableDTO } from '../../../shared/types/api-output-types/task-management/part-associate-table-dto.interface';
import { PartsAssociatedTableDTO } from '../../../shared/types/api-output-types/task-management/parts-associated-table-dto.interface';
import { PlanTaskCounterTableDTO } from '../../../shared/types/api-output-types/task-management/plan-task-counter-table-dto.interface';
import { UpgradedMaintenacePlanDTO } from '../../../shared/types/api-output-types/task-management/upgraded-maintenance-plan-dto.interface';
import { BidoMaintenancePlanDTO } from '../../../shared/types/api-types/bido-maintenance-plan-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BirePlanAttributeDTO } from '../../../shared/types/api-types/bire-plan-attribute-dto.interface';
import { BirePlanItemDTO } from '../../../shared/types/api-types/bire-plan-item-dto.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { MaintenancePlanDTO } from '../../../shared/types/api-types/maintenance-plan-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';
import { ObjectUtils } from '../../../shared/utils/object-utils';
import { SettingsUtils } from '../../../shared/utils/settings-utils';
import { WorkflowUtils } from '../../../shared/utils/workflow-utils';
import { ObjectStatusComponent } from '../../object-status/object-status.component';
import { OverlayService } from '../../overlay/overlay.service';

import { MaintenanceProgramFormMhiaelService } from './maintenance-program-form-mhiael.service';
import { MaintenanceProgramFormService } from './maintenance-program-form.service';

interface RemainingTaskTableRow {
  taskType: string | undefined;
  taskTypeCode: string | undefined;
  groupCode: string | undefined;
  firstPeriodicity: number | undefined;
  periodicityType: string | undefined;
  comments: string | undefined;
}

interface TaskVisitTableRow {
  taskCode: string;
  visitCode: string;
  planCode: string | undefined;
  version: string;
  visitVersion: string;
  designation: string | undefined;
  taskGroup: string | undefined;
  taskType: string | undefined;
  taskTypeCode: string | undefined;
  groupCode: string | undefined;
  reference: string;
  firstPeriodicity: number | undefined;
  periodicity: number | undefined;
  unit: string | undefined;
  periodicityType: string | undefined;
  tolerance: number | undefined;
  alertThreshold: number | undefined;
  comments: string | undefined;
  compliance: string | undefined;
  rowSpan?: number | undefined;
  planTaskCounterTableDTO: PlanTaskCounterTableDTO | undefined;
  visitbloc?: number | undefined;
  isRemovable?: boolean | undefined;
  visitTasks?: TaskVisitTableRow[] | undefined;
  visitDesignation?: string | undefined;
  expand: boolean;
  childRow: RemainingTaskTableRow[];
  dataKey: number;
  showMore: boolean;
  complianceDetail: string | undefined;
}

interface RowGroupVisit {
  visitCode: string;
  tasks: TaskVisitTableRow[];
}

interface DocumentRow {
  docName?: string;
  docSource?: string;
  docExtension?: string;
  docSize?: string;
  docPublicationDate?: string;
  docDescription?: string;
  _obj?: BireDocumentDTO;
}

@Component({
  selector: 'aw-maintenance-program-form',
  templateUrl: './maintenance-program-form.component.html',
  styleUrls: ['./maintenance-program-form.component.scss']
})
export class MaintenanceProgramFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly PERCENTAGE_CONST = 100;
  public static readonly ONE_DECIMAL_ROUND = 10;
  public static readonly ALERT_THRESHOLD_FIELD = 'alertThreshold';

  public MAINTENANCE_PLAN = { ...BireMaintenancePlanConstants };
  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;

  public NUMBER_OF_ROWS: number = 4;
  public COMPLIANCE_RED: string = 'red';
  public COMPLIANCE_GREEN: string = 'green';
  public selectedAnchor: string | undefined;
  public toc;

  @ViewChild('mainDataAnchor')
  public mainDataAnchor: ElementRef;

  @ViewChild('taskAnchor')
  public taskAnchor: ElementRef;

  @ViewChild('visitAnchor')
  public visitAnchor: ElementRef;

  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;

  @ViewChild('documentsAnchor')
  public documentsAnchor: ElementRef;

  public readonly tabGeneralId: string;
  public readonly tabTaskId: string;
  public readonly tabVisitId: string;
  public readonly tabAttributesId: string;

  public currentMaintenanceProgramAssets: AssetAssignmentMPTableDTO[];
  public previousMaintenanceProgramAssets: AssetAssignmentMPTableDTO[];
  public maintenanceProgramApprovedAsset: BireMaintenancePlanDTO;
  public isCurrentMaintenanceProgramHasAssets: boolean;
  public isAnteriorVersionWithAssetsFound: boolean;
  public isAnteriorVersionWithApprovedAssetsFound: boolean;
  public alertThreshold: string;
  public isUnitFh: boolean;
  public currentTabId: string;
  public itemsTableCols: TableColumn[];
  public partsTableCols: TableColumn[];
  public taskTableCols: TableColumn[];
  public visitTableCols: TableColumn[];
  public remainingTaskTableCols: TableColumn[];
  public remainingTaskTableCols1: TableColumn[];
  public remainingVisitTableCols: TableColumn[];
  public remainingVisitTableCols1: TableColumn[];
  public removedTaskTableCols: TableColumn[];
  public removedVisitTableCols: TableColumn[];
  public workflowStatus: LabelValue<string>[];
  public status: LabelValue<string>[];
  public currentMaintenancePlan: BireMaintenancePlanDTO;
  public tasks: TaskVisitTableRow[];
  public removedTasks: TaskVisitTableRow[];
  public visits: TaskVisitTableRow[];
  public removedVisits: TaskVisitTableRow[];
  public items: ItemsAssociatedTableDTO[];
  public parts: PartAssociateTableDTO[];
  public dynamicAttributes: DynamicAttributes[];
  public planType: string;
  public planCode: string;
  public relatedRecommendedMaintenancePlanCode: string;
  public relatedApplicableMaintenancePlanCode: string | undefined;
  public selectedStatus: string;
  public approvedStatus: string;
  public disableMpEdit: boolean;
  public isNewPlanCode: boolean;
  public isStatusReadOnly: boolean;
  public hasRelatedBidoMaintenancePlan: boolean;
  public showCreateAmpButton: boolean;
  public isConsultMode: boolean;
  public showAssignAssetsButton: boolean;
  public revisionNumber: string;

  // For part section
  public dataPart: PopupEntry<PartAssociateTableDTO>;
  public isReadOnlyPartDialog: boolean;
  public currentParts: PartAssociateTableDTO;
  public currentPartIndex: number;
  public showPartPopup: boolean;
  public selectedParts: PartAssociateTableDTO[];
  public partAssociateTableDTOAddedList: PartAssociateTableDTO[];
  public partAssociateTableDTODeletedList: PartAssociateTableDTO[];

  // For item section
  public dataItem: PopupEntry<ItemsAssociatedTableDTO>;
  public isReadOnlyItemDialog: boolean;
  public currentItems: ItemsAssociatedTableDTO;
  public currentItemIndex: number;
  public showItemPopup: boolean;
  public selectedItems: ItemsAssociatedTableDTO[];
  public itemsAssociatedTableDTOAddedList: ItemsAssociatedTableDTO[];
  public itemsAssociatedTableDTODeletedList: ItemsAssociatedTableDTO[];

  // For task and visit tab
  public dataVisitTask: PopupEntry<PlanTaskCounterTableDTO>;
  public isReadOnlyVisitTaskDialog: boolean;
  public currentTasks: TaskVisitTableRow | undefined;
  public currentVisits: TaskVisitTableRow | undefined;
  public currentTaskIndex: number;
  public currentVisitIndex: number;
  public showVisitTaskPopup: boolean;
  public selectedTasks: TaskVisitTableRow[];
  public selectedVisits: TaskVisitTableRow[];
  public popUpType: string;

  public planTaskCounterTableDTOAddedList: PlanTaskCounterTableDTO[];
  public planTaskCounterTableDTODeletedList: PlanTaskCounterTableDTO[];
  public planTaskCounterTableDTOUpdatedList: PlanTaskCounterTableDTO[];

  // Attributes tab
  public dynamicAttributesForMaintenancePlan: DynamicAttributes[];
  public birePlanAttributeDTOAddedList: BirePlanAttributeDTO[];
  public birePlanAttributeDTOUpdatedList: BirePlanAttributeDTO[];
  public birePlanAttributeDTODeletedList: BirePlanAttributeDTO[];

  // For Removed task and visit from RMP
  public dataRemovedVisitTask: PopupEntry<PlanTaskCounterTableDTO>;
  public isReadOnlyRemovedVisitTaskDialog: boolean;
  public showRemovedVisitTaskPopup: boolean;

  public currentRemovedTasks: TaskVisitTableRow | undefined;
  public currentRemovedTaskIndex: number;
  public selectedRemovedTasks: TaskVisitTableRow[];
  public currentRemovedVisits: TaskVisitTableRow | undefined;
  public currentRemovedVisitIndex: number;
  public selectedRemovedVisits: TaskVisitTableRow[];

  public planTaskCounterTableDTORemovedVisitTaskAddedList: PlanTaskCounterTableDTO[];
  public planTaskCounterTableDTORemovedVisitTaskDeletedList: PlanTaskCounterTableDTO[];

  // For Assets
  public dataAsset: PopupEntry<BireMaintenancePlanDTO>;
  public isReadOnlyAssetDialog: boolean;
  public showAssetPopup: boolean;
  public showUpgradeButton: boolean;

  public taskTypes: LabelValue<string>[];
  public periodicityTypes: LabelValue<string>[];
  public taskGroups: LabelValue<string>[];
  public references: LabelValue<string>[];

  public taskTypeMap: Map<string, string>;
  public periodicityTypeMap: Map<string, string>;
  public taskGroupMap: Map<string, string>;
  public referencesMap: Map<string, string>;
  public unitCodeMap: Map<string, string>;

  public complianceColor: string | undefined;

  public rowGroupVisit: RowGroupVisit[] = [];
  public rowGroupMissingVisit: RowGroupVisit[] = [];
  public isCreateMode: boolean;
  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public statusPopupTitle: string;
  public showApproveAmpButton: boolean;
  public enableTaskDelete: boolean;
  public enableVisitDelete: boolean;
  public displayName: string;
  public showUpgradePopup: boolean;

  public isAmpOfRmpApproved: boolean;
  public tasksDisplayedRowNb: number | undefined;
  public visitsDisplayedRowNb: number;
  public partsDisplayedRowNb: number;
  public itemsDisplayedRowNb: number;
  public removedVisitsDisplayedRowNb: number;
  public removedTasksDisplayedRowNb: number;
  public isLoadingTaskTable: boolean;
  public isLoadingRemovedTaskTabble: boolean;
  public isLoadingVisitTable: boolean;
  public isLoadingRemovedVisitTable: boolean;
  public isLoadingItemTable: boolean;
  public isLoadingPartTable: boolean;
  public showGenerateCommentPopup: boolean;
  public comment: PopupEntry<string>;
  public showSaveSpinner: boolean;
  private planAttributeIdValueMap: Map<string, string>;

  // Document Import
  public documentsTableDataSource: TableDataSourceWithHistory<DocumentRow>;
  public displayDocumentDialog: boolean;
  public showAddDocumentDialog: boolean;
  public currentDocument?: DocumentRow;
  public isReadOnlyDocumentDialog: boolean;
  public createdBireDocplanList: BireDocPlanDTOId[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly maintenanceProgramFormService: MaintenanceProgramFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly propertiesService: PropertiesService,
    pageTocService: PageTocService,
    private readonly translateService: TranslateService,
    private readonly dateService: DateService,
    private readonly maintenanceProgramFormMhiaelService: MaintenanceProgramFormMhiaelService,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.registerPageTocEntrySelectedObservable();
    this.tabTaskId = 'task';
    this.tabVisitId = 'visit';
    this.tabGeneralId = 'general';
    this.tabAttributesId = 'attributes';
    this.isNewPlanCode = true;
    this.isCreateMode = false;
    this.planType = BireMaintenancePlanConstants.PLAN_TYPE_RMP;
    this.alertThreshold = MaintenanceProgramFormComponent.ALERT_THRESHOLD_FIELD;

    this.taskTypeMap = new Map<string, string>();
    this.referencesMap = new Map<string, string>();
    this.periodicityTypeMap = new Map<string, string>();
    this.taskGroupMap = new Map<string, string>();
    this.unitCodeMap = new Map<string, string>();

    this.showItemPopup = false;
    this.showPartPopup = false;

    this.currentMaintenanceProgramAssets = [];
    this.previousMaintenanceProgramAssets = [];
    this.tasks = [];
    this.removedTasks = [];
    this.visits = [];
    this.removedVisits = [];
    this.items = [];
    this.parts = [];
    this.selectedStatus = AWPropertiesConstants.FUNC_OBJECT_STATUS_ON_GOING_KEY;
    this.approvedStatus = AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY;

    this.initMeasureUnit();
    this.loadTaskTypeMap();
    this.loadPeriodicityTypeMap();
    this.loadReferences();
    this.loadTaskGroups();
    this.openGeneralTab();
    this.setTableCols();

    this.isAmpOfRmpApproved = false;
    this.status = [];
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
    this.maintenanceProgramFormService.findAllBireTaskGroups().subscribe((results) => {
      results.forEach((element) => {
        this.taskGroupMap.set(element.value, element.label);
      });
    });
  }

  public loadReferences() {
    this.maintenanceProgramFormService.findAllBireMeasureReferencesMaintenanceProgram().subscribe((results) => {
      results.forEach((element) => {
        if (!!element.counterCode) {
          this.referencesMap.set(element.counterCode, `${element.counterRemarks} (${element.counterCode})`);
          if (!!element.unitCode) {
            this.unitCodeMap.set(element.counterCode, element.unitCode);
          }
        }
      });
    });
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BireAttributeDTO[]> {
    return this.maintenanceProgramFormService.findBireAttributesByCategory(attributeCategory);
  }

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public openTaskTab(): void {
    this.currentTabId = this.tabTaskId;
  }

  public openVisitTab(): void {
    this.currentTabId = this.tabVisitId;
  }

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM;
  }

  private setTableCols(planType?: string): void {
    let taskDesignationWidth = '30%';
    let visitDesignationWidth = '41%';
    if (planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
      taskDesignationWidth = '22%';
      visitDesignationWidth = '33%';
    }

    this.itemsTableCols = [
      { field: 'familyVariant', alignment: 'left' },
      { field: 'itemCode', alignment: 'left' },
      { field: 'designation', alignment: 'left' }
    ];

    this.partsTableCols = [
      { field: 'pnCode', alignment: 'left' },
      { field: 'pnName', alignment: 'left' },
      { field: 'planPnTypeText', alignment: 'left' }
    ];

    this.taskTableCols = [
      { field: 'taskCode', alignment: 'left', width: '12%' },
      { field: 'version', alignment: 'left', width: '5%' },
      { field: 'designation', alignment: 'left', width: taskDesignationWidth },
      { field: 'taskGroup', alignment: 'left', width: '10%' },
      { field: 'reference', alignment: 'left', width: '25%' },
      { field: 'periodicity', alignment: 'left', width: '8%' },
      { field: 'unit', alignment: 'left', width: '5%' }
    ];
    if (planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
      this.taskTableCols.push({ field: 'compliance', alignment: 'left', width: '8%' });
    }

    this.remainingTaskTableCols = [
      { field: 'taskType', alignment: 'left', width: '25%' },
      { field: 'groupCode', alignment: 'left', width: '25%' },
      { field: 'firstPeriodicity', alignment: 'left', width: '25%' },
      { field: 'periodicityType', alignment: 'left', width: '25%' }
    ];

    this.remainingTaskTableCols1 = [
      { field: 'tolerance', alignment: 'left', width: '25%' },
      { field: 'alertThreshold', alignment: 'left', width: '25%' },
      { field: 'comments', alignment: 'left', width: '25%' }
    ];

    this.removedTaskTableCols = [
      { field: 'taskCode', alignment: 'left' },
      { field: 'version', alignment: 'left' },
      { field: 'designation', alignment: 'left' },
      { field: 'taskGroup', alignment: 'left' },
      { field: 'taskType', alignment: 'left' },
      { field: 'groupCode', alignment: 'left' },
      { field: 'reference', alignment: 'left' },
      { field: 'firstPeriodicity', alignment: 'left' },
      { field: 'periodicity', alignment: 'left' },
      { field: 'unit', alignment: 'left' },
      { field: 'periodicityType', alignment: 'left' },
      { field: 'tolerance', alignment: 'left' },
      { field: 'alertThreshold', alignment: 'left' },
      { field: 'comments', alignment: 'left' }
    ];

    this.visitTableCols = [
      { field: 'visitCode', alignment: 'left', width: '12%' },
      { field: 'visitVersion', alignment: 'left', width: '5%' },
      { field: 'visitDesignation', alignment: 'left', width: visitDesignationWidth },
      { field: 'reference', alignment: 'left', width: '25%' },
      { field: 'periodicity', alignment: 'left', width: '7%' },
      { field: 'unit', alignment: 'left', width: '5%' }
    ];
    if (planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
      this.visitTableCols.push({ field: 'compliance', alignment: 'left', width: '8%' });
    }

    this.remainingVisitTableCols = [
      { field: 'taskType', alignment: 'left', width: '33%' },
      { field: 'firstPeriodicity', alignment: 'left', width: '33%' },
      { field: 'tolerance', alignment: 'left', width: '33%' }
    ];

    this.remainingVisitTableCols1 = [
      { field: 'alertThreshold', alignment: 'left', width: '33%' },
      { field: 'comments', alignment: 'left', width: '33%' }
    ];

    this.removedVisitTableCols = [
      { field: 'visitCode', alignment: 'left' },
      { field: 'visitVersion', alignment: 'left' },
      { field: 'visitDesignation', alignment: 'left' },
      { field: 'reference', alignment: 'left' },
      { field: 'periodicity', alignment: 'left' },
      { field: 'unit', alignment: 'left' },
      { field: 'tolerance', alignment: 'left' },
      { field: 'alertThreshold', alignment: 'left' }
    ];
  }

  private init(): void {
    this.currentMaintenancePlan = {};
    this.showUpgradeButton = false;
    this.complianceColor = '';
    this.isStatusReadOnly = false;
    this.hasRelatedBidoMaintenancePlan = false;
    this.showCreateAmpButton = false;
    this.isConsultMode = false;
    this.disableMpEdit = false;
    // Historic popup
    this.showStatusUpdatesPopup = false;
    this.showApproveAmpButton = false;
    this.showUpgradePopup = false;

    this.planTaskCounterTableDTODeletedList = [];
    this.planTaskCounterTableDTOAddedList = [];
    this.planTaskCounterTableDTOUpdatedList = [];

    this.itemsAssociatedTableDTOAddedList = [];
    this.itemsAssociatedTableDTODeletedList = [];

    this.partAssociateTableDTOAddedList = [];
    this.partAssociateTableDTODeletedList = [];

    this.dynamicAttributesForMaintenancePlan = [];
    this.birePlanAttributeDTOAddedList = [];
    this.birePlanAttributeDTOUpdatedList = [];
    this.birePlanAttributeDTODeletedList = [];

    this.isCurrentMaintenanceProgramHasAssets = false;
    this.isAnteriorVersionWithApprovedAssetsFound = false;
    this.isAnteriorVersionWithAssetsFound = false;
    this.previousMaintenanceProgramAssets = [];
    this.selectedItems = [];
    this.currentItemIndex = -1;
    this.showItemPopup = false;
    this.currentItems = {};

    this.selectedParts = [];
    this.currentPartIndex = -1;
    this.showPartPopup = false;
    this.currentParts = {};

    this.selectedTasks = [];
    this.currentTaskIndex = -1;
    this.currentTasks = undefined;

    this.selectedVisits = [];
    this.currentVisitIndex = -1;
    this.currentVisits = undefined;

    this.selectedRemovedTasks = [];
    this.currentRemovedTaskIndex = -1;
    this.currentRemovedTasks = undefined;
    this.selectedRemovedVisits = [];
    this.currentRemovedVisitIndex = -1;
    this.currentRemovedVisits = undefined;

    this.popUpType = '';
    this.enableTaskDelete = true;
    this.enableVisitDelete = true;
    this.planAttributeIdValueMap = new Map<string, string>();
    this.initDocumentsTableDataSource();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!this.isCreateOpenMode && this.componentData.objectId) {
        this.createContentTable();
      }
      this.loadOnInit();
    }
  }

  public editMaintenancePlan(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  private loadOnInit() {
    this.init();
    if (!!this.componentData.objectId) {
      const planDTOId = this.serializationService.deserialize(this.componentData.objectId);
      this.planCode = planDTOId.planCode;
      this.loadDocumentsTableDataSourceData();
      const planDTO: BireMaintenancePlanDTO = { planCode: planDTOId.planCode };

      // Load dynamic attributes
      const observables: Observable<BireAttributeDTO[]>[] = [
        this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY),
        this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_MAINTENANCE_PLAN_KEY)
      ];

      forkJoin(observables).subscribe(([allAttribute, customerAttribute]) => {
        let attributes: BireAttributeDTO[] = [];
        attributes = !!allAttribute ? [...attributes, ...allAttribute] : attributes;
        attributes = !!customerAttribute ? [...attributes, ...customerAttribute] : attributes;
        attributes = attributes.filter((element) => {
          return element.attributeId !== BireAttributeConstants.MAINTENANCE_PLAN_RMP_PLAN_CODE;
        });
        this.dynamicAttributesForMaintenancePlan = this.dynamicAttributesService.from(attributes);

        this.maintenanceProgramFormService.findBirePlanAttributesByPlanCode(planDTO).subscribe((results) => {
          let rmpAttribute: BirePlanAttributeDTO = {};
          results.forEach((obj) => {
            if (obj.attributeId === BireAttributeConstants.MAINTENANCE_PLAN_RMP_PLAN_CODE) {
              rmpAttribute = obj;
            } else {
              if (obj.attributeId) {
                this.planAttributeIdValueMap.set(obj.attributeId, obj.attributeValue || '');
              }
            }
          });
          // set bire maintenance plan attributes
          this.dynamicAttributesService.setValues(this.dynamicAttributesForMaintenancePlan, results);

          this.planType =
            rmpAttribute && rmpAttribute.attributeValue
              ? BireMaintenancePlanConstants.PLAN_TYPE_AMP
              : BireMaintenancePlanConstants.PLAN_TYPE_RMP;

          if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP) {
            // Get AMP code
            this.maintenanceProgramFormService
              .findApplicableMaintenancePlanCodeByRecommendedPlanCode(this.planCode)
              .subscribe((ampCode) => {
                this.relatedApplicableMaintenancePlanCode = ampCode;
                this.loadMaintenanceProgram();
              });
          } else if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
            // get RMP code from attribute value
            if (!!rmpAttribute.attributeValue) {
              this.relatedRecommendedMaintenancePlanCode = rmpAttribute.attributeValue;
            }
            // reset table coumns for AMP
            this.setTableCols(this.planType);
            this.loadMaintenanceProgram();
          }

          this.userWorkflowSubject.pipe(takeUntil(this.unsubscribe)).subscribe((_userWorkflow) => {
            this.updateWorkflowStatusList();
          });
        });
      });
    } else {
      const context = 'tab.createMode';
      this.displayComponentContext(context, this.isCreateOpenMode);
    }
  }

  private loadMaintenanceProgram(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      const bireMaintenancePlanDTOId: BireMaintenancePlanDTOId = {
        planCode: this.planCode
      };

      this.maintenanceProgramFormService.findBireMaintenancePlan(bireMaintenancePlanDTOId).subscribe((result) => {
        if (this.checkNotIsNullOrUndefined(result) && result.planCode) {
          this.isNewPlanCode = false;
          this.displayName = `${result.planCode}-${result.planName}`;
          this.displayComponentContext(this.displayName, this.isCreateOpenMode);
          // Create observables for data necessary before load
          const bidoMaintenanceObservable = this.maintenanceProgramFormService.findBidoMaintenancePlanByPlanCode(
            (result && result.planCode) || ''
          );

          let uObservable;

          if (!this.relatedRecommendedMaintenancePlanCode) {
            const upgradeBireMaintenancePlanInput: UpgradeBireMaintenancePlanInput = {
              currentRevisionNumber: result && result.planRevisionNumber,
              planCode: result && result.planCode
            };
            uObservable = this.maintenanceProgramFormService.checkAndReturnNewRevisionNumberByMaintenancePlan(
              upgradeBireMaintenancePlanInput
            );
          } else {
            uObservable = this.maintenanceProgramFormService.checkAndReturnNewRevisionNumberByMaintenancePlan();
          }

          const checkUpdateAccess = this.maintenanceProgramFormService.hasUpdateRights();

          const ampPlanObservable = this.maintenanceProgramFormService.findBireMaintenancePlan({
            planCode: this.relatedApplicableMaintenancePlanCode || ''
          });

          forkJoin([ampPlanObservable, bidoMaintenanceObservable, uObservable, checkUpdateAccess]).subscribe(
            (results) => {
              const bidoPlanIndex = 1;
              const hasUpdateRightsIndex = 2;
              const resultAmp = results[0] as BireMaintenancePlanDTO; // FIXME
              const bidoMaintenancePlan = results[bidoPlanIndex] as BidoMaintenancePlanDTO[]; // FIXME
              const hasUpdateRights = results[hasUpdateRightsIndex] as boolean; // FIXME

              this.statusPopupTitle = `${result.planCode}${result.planName ? '-' + result.planName : ''}`;

              if (!!result.planRevisionNumber) {
                this.revisionNumber = result.planRevisionNumber;
              }
              this.currentMaintenancePlan = result;
              this.currentMaintenancePlan.planApprovalDate =
                this.currentMaintenancePlan.planApprovalDate && new Date(this.currentMaintenancePlan.planApprovalDate);
              this.currentMaintenancePlan.planRevisionDate =
                this.currentMaintenancePlan.planRevisionDate && new Date(this.currentMaintenancePlan.planRevisionDate);
              this.currentMaintenancePlan.planValidityEndDate =
                this.currentMaintenancePlan.planValidityEndDate &&
                new Date(this.currentMaintenancePlan.planValidityEndDate);
              // set default status if status not found
              this.selectedStatus =
                this.currentMaintenancePlan.statusState || AWPropertiesConstants.FUNC_OBJECT_STATUS_ON_GOING_KEY;
              // set consult mode
              this.isConsultMode =
                this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP &&
                this.currentMaintenancePlan.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY &&
                resultAmp &&
                resultAmp.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY
                  ? true
                  : false;

              // disable task/visit delete if RMP is approved
              this.disableMpEdit =
                this.currentMaintenancePlan.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY;

              // show approve AMP only if AMP is not approved and remove approve option from status list
              if (!!this.currentMaintenancePlan.statusState) {
                this.loadStatus(this.currentMaintenancePlan.statusState);
                this.loadUserWorkflow(this.currentMaintenancePlan.statusState);
              }

              // Initialise RMP/AMP Comparison in case of AMP
              if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
                this.checkAmpComplianceWithRmp();
              } else if (!!result.planCode) {
                this.loadTasksAndVisits(result.planCode);
              }
              if (!!result.planCode) {
                this.loadItems(result.planCode);
                this.loadParts(result.planCode);
              }

              // check upgrade visibility
              if (
                hasUpdateRights &&
                this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP &&
                !!result.planRevisionNumber
              ) {
                this.showUpgradeButton = true;
              }
              // check if mp has relate bido maintenance plan
              this.hasRelatedBidoMaintenancePlan = bidoMaintenancePlan && bidoMaintenancePlan.length > 0 ? true : false;
              // check assign assets visibilty
              this.checkAssetsAndCreateAmpVisibility();
              // set status dropdown mode
              this.checkStatusReadOnly(resultAmp);

              this.getPreviousAssetData(this.currentMaintenancePlan);
              this.getAssetData();

              this.isAmpOfRmpApproved = resultAmp.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY;
            }
          );
        }
      });
    }
  }

  private checkStatusReadOnly(resultAmp: BireMaintenancePlanDTO): void {
    if (
      this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP &&
      resultAmp &&
      resultAmp.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY
    ) {
      // RMP: there is no AMP.
      this.isStatusReadOnly = true;
    } else if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP && this.hasRelatedBidoMaintenancePlan) {
      // AMP: has been assigned to Assets
      this.isStatusReadOnly = true;
    }
  }

  private loadTasksAndVisits(planCode: string): void {
    this.isLoadingTaskTable = true;
    this.isLoadingVisitTable = true;
    this.maintenanceProgramFormService.findBirePlanTaskCountersByPlanCode(planCode).subscribe((results) => {
      this.loadTasksRows(results);
      this.isLoadingTaskTable = false;
      this.loadVisitsRows(results);
      this.isLoadingVisitTable = false;
    });
  }

  private loadTasksRows(results: PlanTaskCounterTableDTO[]): void {
    if (!!results) {
      const tasks: TaskVisitTableRow[] = [];
      results
        .filter((element) => {
          return (
            !element.visitCode &&
            element.bireTaskDTO &&
            element.bireTaskDTO.taskTypeCode !== AWPropertiesConstants.TASK_TYPE_VISIT_KEY
          );
        })
        .forEach((element, index) => {
          const temp = this.convertPlanTaskCounterTableDTOToRow(element, index);
          if (!!temp) {
            tasks.push(temp);
          }
        });
      this.tasks = tasks;
    }
  }

  private loadVisitsRows(results: PlanTaskCounterTableDTO[]): void {
    if (!!results) {
      const visitsTemp: TaskVisitTableRow[] = [];
      results
        .filter((element) => {
          return !!element.visitCode;
        })
        .forEach((element, index) => {
          const temp = this.convertPlanTaskCounterTableDTOToRow(element, index);
          if (!!temp) {
            visitsTemp.push(temp);
          }
        });
      this.buildVisits(visitsTemp);
    }
  }

  private buildVisits(visits: TaskVisitTableRow[]): void {
    this.rowGroupVisit = this.createRowGroupVisit(visits);
    this.visits = [];
    this.rowGroupVisit.forEach((element, index) => {
      const vistsTask = { ...element.tasks[0] };
      vistsTask.visitbloc = index;
      vistsTask.visitTasks = element.tasks || [];
      vistsTask.taskType = 'Visit';
      vistsTask.taskTypeCode = AWPropertiesConstants.TASK_TYPE_VISIT_KEY;
      this.visits.push(vistsTask);
    });
  }

  private createRowGroupVisit(visits: TaskVisitTableRow[]): RowGroupVisit[] {
    const initArr: RowGroupVisit[] = [];

    return visits.reduce((arr, item) => {
      const visitExistence = arr.filter((element) => {
        return element.visitCode === `${item.visitCode}-${item.visitVersion}-${item.reference}`;
      });
      if (visitExistence.length > 0) {
        const existingObj = visitExistence[0];
        existingObj.tasks.push(item);
      } else {
        arr.push({
          visitCode: `${item.visitCode}-${item.visitVersion}-${item.reference}`,
          tasks: [item]
        });
      }

      return arr;
    }, initArr);
  }

  private loadMissingTasksRows(results: PlanTaskCounterTableDTO[]): void {
    if (!!results) {
      const removedTasks: TaskVisitTableRow[] = [];
      results
        .filter((element) => {
          return (
            !element.visitCode &&
            element.bireTaskDTO &&
            element.bireTaskDTO.taskTypeCode !== AWPropertiesConstants.TASK_TYPE_VISIT_KEY
          );
        })
        .forEach((element, index) => {
          const temp = this.convertPlanTaskCounterTableDTOToRow(element, index);
          if (!!temp) {
            removedTasks.push(temp);
          }
        });
      this.removedTasks = removedTasks;
    }
  }

  private loadMissingVisitsRows(results: PlanTaskCounterTableDTO[]): void {
    if (!!results) {
      const removedVisits: TaskVisitTableRow[] = [];
      results
        .filter((element) => {
          return !!element.visitCode;
        })
        .map((element, index) => {
          const temp = this.convertPlanTaskCounterTableDTOToRow(element, index);
          if (!!temp) {
            removedVisits.push(temp);
          }
        });

      this.buildMissingVisits(removedVisits);
    }
  }

  private buildMissingVisits(visits: TaskVisitTableRow[]): void {
    this.rowGroupMissingVisit = this.createRowGroupVisit(visits);
    this.removedVisits = [];
    this.rowGroupMissingVisit.forEach((element, index) => {
      const vistsTask = { ...element.tasks[0] };
      vistsTask.visitbloc = index;
      vistsTask.visitTasks = element.tasks || [];
      vistsTask.taskType = 'Visit';
      vistsTask.taskTypeCode = AWPropertiesConstants.TASK_TYPE_VISIT_KEY;
      this.removedVisits.push(vistsTask);
    });
  }

  private loadItems(planCode: string): void {
    this.isLoadingItemTable = true;
    this.maintenanceProgramFormService.findBirePlanItemsByPlanCode(planCode).subscribe((results) => {
      this.items = results;
      this.isLoadingItemTable = false;
    });
  }

  private loadParts(planCode: string): void {
    this.isLoadingPartTable = true;
    this.maintenanceProgramFormService.findBirePlanPnsByPlanCode(planCode).subscribe((results) => {
      this.parts = results;
      this.isLoadingPartTable = false;
    });
  }

  public cancelMaintenanceProgram(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.reloadMaintenanceProgram();
  }

  public editMaintenanceProgram(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadMaintenanceProgram(): void {
    this.loadOnInit();
  }

  /***********************************************************************************
   * Part Section
   ***********************************************************************************/
  /*public openPart(): void {
    this.isReadOnlyPartDialog = true;
    if (this.selectedParts.length === 1) {
      this.currentParts = { ...this.selectedParts[0] };
      this.currentPartIndex = this.parts.indexOf(this.selectedParts[0]);
      this.showPartPopup = true;
      this.dataPart = {
        componentId: 'PartPopupFormComponent',
        selectedRow: this.selectedParts,
        object: this.currentParts,
        openMode: ComponentOpenMode.Write
      };
    }
  }*/

  public createPart(): void {
    this.currentParts = {};
    this.showPartPopup = true;
    this.isReadOnlyPartDialog = false;
    this.dataPart = {
      componentId: 'PartPopupFormComponent',
      selectedRow: undefined,
      object: this.currentParts,
      openMode: ComponentOpenMode.Write
    };
    this.currentPartIndex = -1;
    this.selectedParts = [];
  }

  public deletePart(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedParts.forEach((element) => {
          const indexInDisplayedList = this.parts.indexOf(element);
          this.parts.splice(indexInDisplayedList, 1);
          this.partAssociateTableDTODeletedList.push(element);
        });

        this.selectedParts = [];
      }
    });
  }

  public savePart(item: PartsAssociatedTableDTO): void {
    const partObj: PartAssociateTableDTO = {
      birePlanPnDTO: item.birePnDTO,
      pnCode: item.consumableCode,
      pnName: item.consumableName,
      pnType: item.consumableTypeKey,
      planPnTypeText: item.consumableTypeValue
    };

    if (this.isNewPlanCode) {
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey('createMaintenanceProgramConfirmation'),
        accept: () => {
          this.addPart(partObj);
          this.saveMaintenanceProgram();
        }
      });
    } else {
      this.addPart(partObj);
    }
    this.selectedParts = [];
  }

  private addPart(partObj: PartAssociateTableDTO): void {
    if (!!partObj) {
      const getParts = this.parts.filter((obj) => {
        return obj.pnCode === partObj.pnCode && obj.pnName === partObj.pnName && obj.pnType === partObj.pnType;
      });
      if (getParts.length > 0) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnPartAdd'));

        return;
      }

      if (!!partObj.birePlanPnDTO) {
        partObj.birePlanPnDTO.planCode = this.currentMaintenancePlan.planCode;
      }

      if (this.currentPartIndex > -1) {
        this.parts[this.currentPartIndex] = partObj;
      } else {
        this.parts = [...this.parts, partObj];
      }
      this.partAssociateTableDTOAddedList.push(partObj);
    }
  }

  /***********************************************************************************
   * Item Section
   ***********************************************************************************/
  /*public openItem(): void {
    this.isReadOnlyItemDialog = true;
    if (this.selectedItems.length === 1) {
      this.currentItems = { ...this.selectedItems[0] };
      this.currentItemIndex = this.items.indexOf(this.selectedItems[0]);
      this.showItemPopup = true;
      this.dataItem = {
        componentId: 'ItemPopupFormComponent',
        selectedRow: this.selectedItems,
        object: this.currentItems,
        openMode: ComponentOpenMode.Write
      };
    }
  }*/

  public createItem(): void {
    this.showItemPopup = true;
    this.isReadOnlyItemDialog = false;
    this.dataItem = {
      componentId: 'ItemPopupFormComponent',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Write
    };
    this.currentItemIndex = -1;
    this.selectedItems = [];
  }

  public deleteItem(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedItems.forEach((element) => {
          const indexInDisplayedList = this.items.indexOf(element);
          this.items.splice(indexInDisplayedList, 1);
          this.itemsAssociatedTableDTODeletedList.push(element);
        });

        this.selectedItems = [];
      }
    });
  }

  public saveItem(itemObj: BireItemDTO): void {
    const item: BirePlanItemDTO = {};
    item.chapter = itemObj.chapter;
    item.section = itemObj.section;
    item.subject = itemObj.subject;
    item.sheet = itemObj.sheet;
    item.marks = itemObj.marks;

    const familyVariant = `${itemObj.familyCode}-${itemObj.structureType}-${itemObj.variantCode}`;

    const itemCode = `${item.chapter}-${item.section}-${item.subject}-${item.sheet}-${item.marks}`;

    const designation = `${itemObj.name}`;

    const obj: ItemsAssociatedTableDTO = {
      familyVariant,
      itemCode,
      designation,
      birePlanItemDTO: itemObj
    };

    if (!!obj.birePlanItemDTO) {
      obj.birePlanItemDTO.familyCode = itemObj.familyCode;
      obj.birePlanItemDTO.structureType = itemObj.structureType;
      obj.birePlanItemDTO.variantCode = itemObj.variantCode;
    }

    if (this.isNewPlanCode) {
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey('createMaintenanceProgramConfirmation'),
        accept: () => {
          this.addItem(obj);
          this.saveMaintenanceProgram();
        }
      });
    } else {
      this.addItem(obj);
    }
    this.selectedItems = [];
  }

  private addItem(itemObj: ItemsAssociatedTableDTO): void {
    if (!!itemObj) {
      const getItems = this.items.filter((obj) => {
        return obj.itemCode === itemObj.itemCode && obj.familyVariant === itemObj.familyVariant;
      });
      if (getItems.length > 0) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnItemAdd'));

        return;
      }

      if (!!itemObj.birePlanItemDTO) {
        itemObj.birePlanItemDTO.planCode = this.currentMaintenancePlan.planCode;
      }

      if (this.currentItemIndex > -1) {
        this.items[this.currentItemIndex] = itemObj;
      } else {
        this.items = [...this.items, itemObj];
      }
      this.itemsAssociatedTableDTOAddedList.push(itemObj);
    }
  }

  /***********************************************************************************
   * Visit Task Section
   ***********************************************************************************/
  public editTaskVisit(type: string): void {
    this.isReadOnlyVisitTaskDialog = false;
    this.isCreateMode = false;
    this.popUpType = type;
    if (type === 'task' && this.selectedTasks.length === 1) {
      this.currentTasks = { ...this.selectedTasks[0] };
      this.currentTaskIndex = this.tasks.indexOf(this.selectedTasks[0]);
      this.showVisitTaskPopup = true;
      if (!!this.currentTasks.planTaskCounterTableDTO) {
        this.dataVisitTask = {
          componentId: 'TaskVisitPopupFormComponent',
          selectedRow: [],
          object: this.currentTasks.planTaskCounterTableDTO,
          openMode: ComponentOpenMode.Write
        };
      }
    } else if (type === 'visit' && this.selectedVisits.length === 1) {
      this.currentVisits = { ...this.selectedVisits[0] };
      this.currentVisitIndex = this.tasks.indexOf(this.selectedVisits[0]);
      this.showVisitTaskPopup = true;
      if (!!this.currentVisits.planTaskCounterTableDTO) {
        this.dataVisitTask = {
          componentId: 'TaskVisitPopupFormComponent',
          selectedRow: [],
          object: this.currentVisits.planTaskCounterTableDTO,
          openMode: ComponentOpenMode.Write
        };
      }
    }
  }

  public openTaskVisit(type: string): void {
    this.isReadOnlyVisitTaskDialog = true;
    this.isCreateMode = false;
    this.popUpType = type;
    if (type === 'task' && this.selectedTasks.length === 1) {
      this.currentTasks = { ...this.selectedTasks[0] };
      this.currentTaskIndex = this.tasks.indexOf(this.selectedTasks[0]);
      this.showVisitTaskPopup = true;
      if (!!this.currentTasks.planTaskCounterTableDTO) {
        this.dataVisitTask = {
          componentId: 'TaskVisitPopupFormComponent',
          selectedRow: [],
          object: this.currentTasks.planTaskCounterTableDTO,
          openMode: ComponentOpenMode.Read
        };
      }
    } else if (type === 'visit' && this.selectedVisits.length === 1) {
      this.currentVisits = { ...this.selectedVisits[0] };
      this.currentVisitIndex = this.tasks.indexOf(this.selectedVisits[0]);
      this.showVisitTaskPopup = true;
      if (!!this.currentVisits.planTaskCounterTableDTO) {
        this.dataVisitTask = {
          componentId: 'TaskVisitPopupFormComponent',
          selectedRow: [],
          object: this.currentVisits.planTaskCounterTableDTO,
          openMode: ComponentOpenMode.Read
        };
      }
    }
  }

  public createTaskVisit(type: string): void {
    this.isCreateMode = true;
    const newVisitOrTask: PlanTaskCounterTableDTO = {
      birePlanTaskCounterDTO: {
        planCode: this.currentMaintenancePlan.planCode
      },
      bireTaskDTO: {}
    };
    if (type === 'visit') {
      this.currentVisitIndex = -1;
      this.selectedVisits = [];
    } else {
      this.currentTaskIndex = -1;
      this.selectedTasks = [];
    }
    this.showVisitTaskPopup = true;
    this.isReadOnlyVisitTaskDialog = false;
    this.popUpType = type;
    this.dataVisitTask = {
      componentId: 'TaskVisitPopupFormComponent',
      selectedRow: undefined,
      object: newVisitOrTask,
      openMode: ComponentOpenMode.Write
    };
  }

  public createNewTaskVisit(type: string): void {
    const openMode: ComponentOpenMode = ComponentOpenMode.Create;
    if (type === 'task') {
      const labelKey = 'transaction.TaskFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'TaskFormComponent',
        objectId: undefined,
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (type === 'visit') {
      const labelKey = 'transaction.VisitFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'VisitFormComponent',
        objectId: undefined,
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public deleteTaskVisit(type: string): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        if (type === 'task') {
          this.selectedTasks.forEach((element) => {
            const indexInDisplayedList = this.tasks.indexOf(element);
            this.tasks.splice(indexInDisplayedList, 1);
            if (
              !!element.planTaskCounterTableDTO &&
              this.planTaskCounterTableDTODeletedList.indexOf(element.planTaskCounterTableDTO) < 0
            ) {
              this.planTaskCounterTableDTODeletedList.push(element.planTaskCounterTableDTO);
            }
          });
          this.selectedTasks = [];
        } else if (type === 'visit') {
          this.selectedVisits.forEach((element) => {
            const indexInDisplayedList = this.visits.indexOf(element);
            // delete including tasks of this visit also
            this.visits.splice(indexInDisplayedList, 1);
            if (
              !!element.planTaskCounterTableDTO &&
              this.planTaskCounterTableDTODeletedList.indexOf(element.planTaskCounterTableDTO) < 0
            ) {
              this.planTaskCounterTableDTODeletedList.push(element.planTaskCounterTableDTO);
            }
          });
          this.selectedVisits = [];
        }
      }
    });
  }

  public saveTaskVisit(elements: PlanTaskCounterTableDTO[]): void {
    if (this.isNewPlanCode) {
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey('createMaintenanceProgramConfirmation'),
        accept: () => {
          this.addUpdateRowData(elements);
          this.saveMaintenanceProgram();
        }
      });
    } else {
      this.addUpdateRowData(elements);
    }
    this.selectedTasks = [];
    this.selectedVisits = [];
  }

  // tslint:disable-next-line:no-any
  private checkNotIsNullOrUndefined(obj: any) {
    return obj !== null && obj !== undefined;
  }

  private addUpdateRowData(elements: PlanTaskCounterTableDTO[]): void {
    const element: PlanTaskCounterTableDTO = elements[0];

    let checkExistingTaskIndex = -1;
    let checkExistingVisitIndex = -1;
    if (
      this.checkNotIsNullOrUndefined(element.visitCode) &&
      this.checkNotIsNullOrUndefined(element.visitVersion) &&
      element.visitCode !== '' &&
      element.visitVersion !== ''
    ) {
      this.visits.forEach((visit, index) => {
        if (
          visit.visitCode === element.visitCode &&
          visit.visitVersion === element.visitVersion &&
          !!visit.planTaskCounterTableDTO &&
          !!visit.planTaskCounterTableDTO.birePlanTaskCounterDTO &&
          !!element.birePlanTaskCounterDTO &&
          visit.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode ===
            element.birePlanTaskCounterDTO.counterCode
        ) {
          checkExistingVisitIndex = index;

          return;
        }
      });
    } else if (
      !!element.birePlanTaskCounterDTO &&
      this.checkNotIsNullOrUndefined(element.birePlanTaskCounterDTO.taskCode) &&
      this.checkNotIsNullOrUndefined(element.birePlanTaskCounterDTO.taskVersion) &&
      element.birePlanTaskCounterDTO.taskCode !== '' &&
      element.birePlanTaskCounterDTO.taskVersion !== ''
    ) {
      this.tasks.forEach((task, index) => {
        if (
          !!element.birePlanTaskCounterDTO &&
          task.taskCode === element.birePlanTaskCounterDTO.taskCode &&
          task.version === element.birePlanTaskCounterDTO.taskVersion &&
          !!task.planTaskCounterTableDTO &&
          !!task.planTaskCounterTableDTO.birePlanTaskCounterDTO &&
          task.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode === element.birePlanTaskCounterDTO.counterCode
        ) {
          checkExistingTaskIndex = index;

          return;
        }
      });
    }

    if (this.isCreateMode && this.popUpType === 'visit' && checkExistingVisitIndex > -1) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnVisitAdd'));

      return;
    } else if (this.isCreateMode && this.popUpType === 'task' && checkExistingTaskIndex > -1) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnTaskAdd'));

      return;
    }

    // Add to added and updated list in save api
    if (checkExistingTaskIndex < 0 && checkExistingVisitIndex < 0) {
      const planTaskCounterTableDTOAddedList = [...this.planTaskCounterTableDTOAddedList];
      planTaskCounterTableDTOAddedList.forEach((obj, indexOfTask) => {
        if (
          obj.birePlanTaskCounterDTO &&
          element.birePlanTaskCounterDTO &&
          obj.birePlanTaskCounterDTO.taskCode === element.birePlanTaskCounterDTO.taskCode &&
          obj.birePlanTaskCounterDTO.taskVersion === element.birePlanTaskCounterDTO.taskVersion &&
          obj.birePlanTaskCounterDTO.counterCode === element.birePlanTaskCounterDTO.counterCode
        ) {
          this.planTaskCounterTableDTOAddedList.splice(indexOfTask, 1);
        }
      });
      this.planTaskCounterTableDTOAddedList.push(element);

      const planTaskCounterTableDTODeletedList = [...this.planTaskCounterTableDTODeletedList];
      planTaskCounterTableDTODeletedList.forEach((obj, indexOfDeletedTask) => {
        if (
          obj.birePlanTaskCounterDTO &&
          element.birePlanTaskCounterDTO &&
          obj.birePlanTaskCounterDTO.taskCode === element.birePlanTaskCounterDTO.taskCode &&
          obj.birePlanTaskCounterDTO.taskVersion === element.birePlanTaskCounterDTO.taskVersion &&
          obj.birePlanTaskCounterDTO.counterCode === element.birePlanTaskCounterDTO.counterCode
        ) {
          this.planTaskCounterTableDTODeletedList.splice(indexOfDeletedTask, 1);
        }
      });
    } else {
      // Check if newly added from added if exists
      let isFound = false;
      const planTaskCounterTableDTOAddedList = [...this.planTaskCounterTableDTOAddedList];
      planTaskCounterTableDTOAddedList.forEach((obj, indexOfTask) => {
        if (
          obj.birePlanTaskCounterDTO &&
          element.birePlanTaskCounterDTO &&
          obj.birePlanTaskCounterDTO.taskCode === element.birePlanTaskCounterDTO.taskCode &&
          obj.birePlanTaskCounterDTO.taskVersion === element.birePlanTaskCounterDTO.taskVersion &&
          obj.birePlanTaskCounterDTO.counterCode === element.birePlanTaskCounterDTO.counterCode
        ) {
          this.planTaskCounterTableDTOAddedList[indexOfTask] = element;
          isFound = true;
        }
      });

      if (!isFound) {
        const planTaskCounterTableDTOUpdatedList = [...this.planTaskCounterTableDTOUpdatedList];
        planTaskCounterTableDTOUpdatedList.forEach((obj, indexOfTask) => {
          if (
            obj.birePlanTaskCounterDTO &&
            element.birePlanTaskCounterDTO &&
            obj.birePlanTaskCounterDTO.taskCode === element.birePlanTaskCounterDTO.taskCode &&
            obj.birePlanTaskCounterDTO.taskVersion === element.birePlanTaskCounterDTO.taskVersion &&
            obj.birePlanTaskCounterDTO.counterCode === element.birePlanTaskCounterDTO.counterCode
          ) {
            this.planTaskCounterTableDTOUpdatedList.splice(indexOfTask, 1);
          }
        });
        this.planTaskCounterTableDTOUpdatedList.push(element);
      }
    }

    // convert to task row
    const itemObj: TaskVisitTableRow[] = [];
    elements.forEach((item) => {
      let index = 0;
      if (this.popUpType === 'task') {
        index = checkExistingTaskIndex === -1 ? this.tasks.length : checkExistingTaskIndex;
      } else if (this.popUpType === 'visit') {
        index = checkExistingVisitIndex === -1 ? this.visits.length : checkExistingVisitIndex;
      }
      const temp = this.convertPlanTaskCounterTableDTOToRow(item, index);
      if (!!temp) {
        itemObj.push(temp);
      }
    });

    // Check AMP compliance when a task/visit is validated
    if (this.relatedRecommendedMaintenancePlanCode) {
      this.validateCompliance(itemObj, checkExistingVisitIndex, checkExistingTaskIndex);
    } else {
      this.setTaskvisitRow(itemObj, checkExistingVisitIndex, checkExistingTaskIndex);
    }
  }

  private setTaskvisitRow(items: TaskVisitTableRow[], visitIndex: number, taskIndex: number) {
    const itemObj: TaskVisitTableRow = items[0];
    // just to verify if item is visit
    if (!!itemObj.visitCode) {
      if (visitIndex > -1) {
        this.visits[visitIndex] = this.appendTasksToVisit(items, visitIndex)[0];
      } else {
        this.visits = this.visits.concat(this.appendTasksToVisit(items, this.visits.length));
      }
    } else {
      if (taskIndex > -1) {
        this.tasks[taskIndex] = itemObj;
      } else {
        this.tasks = this.tasks.concat(items);
      }
    }
  }

  private appendTasksToVisit(newVisits: TaskVisitTableRow[], visitIndex: number): TaskVisitTableRow[] {
    this.rowGroupVisit = this.createRowGroupVisit(newVisits);
    const visit: TaskVisitTableRow[] = [];
    this.rowGroupVisit.forEach((element, index) => {
      const vistsTask = { ...element.tasks[0] };
      vistsTask.visitbloc = visitIndex;
      vistsTask.visitTasks = element.tasks || [];
      vistsTask.taskType = 'Visit';
      vistsTask.taskTypeCode = AWPropertiesConstants.TASK_TYPE_VISIT_KEY;
      visit.push(vistsTask);
    });

    return visit;
  }

  public initMeasureUnit(): void {
    this.isUnitFh = true;
    this.propertiesService
      .getValue(GenericPropertyConstants.AEROWEBB_CONFIGURATION_MAP)
      .subscribe((awConfiguration) => {
        if (
          SettingsUtils.isPropertyEnabled(
            awConfiguration,
            AWPropertiesConstants.REFERENTIAL_ALERT_THRESHOLD_IS_PERCENTAGE
          )
        ) {
          this.isUnitFh = false;
        }
      });
  }

  private calculateFhValueFromPercentage(
    percent: number,
    periodicityFirst: number | undefined,
    periodicity: number | undefined
  ): number {
    if (!!periodicity) {
      return (
        Math.round(
          ((percent * periodicity) / MaintenanceProgramFormComponent.PERCENTAGE_CONST) *
            MaintenanceProgramFormComponent.ONE_DECIMAL_ROUND
        ) / MaintenanceProgramFormComponent.ONE_DECIMAL_ROUND
      );
    }

    if (!!periodicityFirst) {
      return (
        Math.round(
          ((percent * periodicityFirst) / MaintenanceProgramFormComponent.PERCENTAGE_CONST) *
            MaintenanceProgramFormComponent.ONE_DECIMAL_ROUND
        ) / MaintenanceProgramFormComponent.ONE_DECIMAL_ROUND
      );
    }

    return 0;
  }

  private convertPlanTaskCounterTableDTOToRow(
    element: PlanTaskCounterTableDTO,
    rowIndex: number
  ): TaskVisitTableRow | undefined {
    if (!!element.bireTaskDTO && !!element.birePlanTaskCounterDTO && !!element.birePlanTaskCounterDTO.counterCode) {
      const tempReference = this.referencesMap.get(element.birePlanTaskCounterDTO.counterCode);

      const itemObj: TaskVisitTableRow = {
        taskCode: element.bireTaskDTO.taskCode || '',
        visitCode: element.visitCode || '',
        planCode: element.birePlanTaskCounterDTO.planCode,
        version: element.bireTaskDTO.taskVersion || '',
        visitVersion: element.visitVersion || '',
        designation: element.bireTaskDTO.taskDesignation || '',
        taskGroup: element.bireTaskDTO.groupCode && this.taskGroupMap.get(element.bireTaskDTO.groupCode),
        taskType: element.bireTaskDTO.taskTypeCode && this.taskTypeMap.get(element.bireTaskDTO.taskTypeCode),
        taskTypeCode: element.bireTaskDTO.taskTypeCode,
        groupCode: element.birePlanTaskCounterDTO.groupCode,
        reference: (element.birePlanTaskCounterDTO.counterCode && tempReference) || '',
        firstPeriodicity: element.birePlanTaskCounterDTO.periodicityFirst || 0,
        periodicity: element.birePlanTaskCounterDTO.periodicity || 0,
        unit: this.unitCodeMap.get(element.birePlanTaskCounterDTO.counterCode),
        periodicityType:
          element.birePlanTaskCounterDTO.periodicityType &&
          this.periodicityTypeMap.get(element.birePlanTaskCounterDTO.periodicityType),
        tolerance: element.birePlanTaskCounterDTO.tolerance || 0,
        alertThreshold: element.birePlanTaskCounterDTO.threshold || 0,
        comments: this.getDisplayComments(element.birePlanTaskCounterDTO.comments || ''),
        compliance: element.complianceLight || undefined,
        planTaskCounterTableDTO: element,
        isRemovable: element.isRemovable,
        visitTasks: [],
        visitDesignation: element.visitDesignation || '',
        expand: false,
        showMore: false,
        childRow: [
          {
            comments: this.getDisplayComments(element.birePlanTaskCounterDTO.comments || ''),
            firstPeriodicity: element.birePlanTaskCounterDTO.periodicityFirst,
            groupCode: element.birePlanTaskCounterDTO.groupCode,
            periodicityType:
              element.birePlanTaskCounterDTO.periodicityType &&
              this.periodicityTypeMap.get(element.birePlanTaskCounterDTO.periodicityType),
            taskType: element.bireTaskDTO.taskTypeCode && this.taskTypeMap.get(element.bireTaskDTO.taskTypeCode),
            taskTypeCode: element.bireTaskDTO.taskTypeCode
          }
        ],
        dataKey: rowIndex,
        complianceDetail: element.complianceDetail
      };

      if (this.isUnitFh && !!itemObj.alertThreshold && (!!itemObj.periodicity || !!itemObj.firstPeriodicity)) {
        itemObj.alertThreshold = this.calculateFhValueFromPercentage(
          itemObj.alertThreshold,
          itemObj.firstPeriodicity,
          itemObj.periodicity
        );
      }

      return itemObj;
    }
  }

  public getDisplayComments(comment: string): string {
    try {
      if (comment) {
        const commentObj = JSON.parse(comment);
        if (commentObj && commentObj.length === 1) {
          return commentObj[0].comment;
        } else if (commentObj && commentObj.length > 1) {
          return !!commentObj[0].comment ? commentObj[0].comment : comment;
        }
      }

      return '';
    } catch (e) {
      return comment;
    }
  }

  public assignAssets(): void {
    if (
      !this.currentMaintenancePlan.planValidityEndDate ||
      new Date(this.currentMaintenancePlan.planValidityEndDate).getTime() > new Date().getTime()
    ) {
      this.isReadOnlyAssetDialog = false;
      this.showAssetPopup = true;
      this.dataAsset = {
        componentId: 'AssignAssetsPopupFormComponent',
        selectedRow: undefined,
        object: this.currentMaintenancePlan,
        openMode: ComponentOpenMode.Write
      };
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorValidityExpire'));
    }
  }

  public createAmp(): void {
    if (!!this.currentMaintenancePlan.planCode) {
      this.maintenanceProgramFormService.generateAMPFromRMP(this.currentMaintenancePlan.planCode).subscribe((anAMP) => {
        if (!!anAMP) {
          this.currentMaintenancePlan.ampplanCode = anAMP.planCode;
          this.relatedApplicableMaintenancePlanCode = anAMP.planCode;
          this.showCreateAmpButton = false;

          // Check if there is a previous revision available to propose to fetch customization
          this.maintenanceProgramFormService
            .getPreviousRMPRevisionOfMaintenancePlan(this.currentMaintenancePlan)
            .subscribe((previousRMP) => {
              if (previousRMP && previousRMP.ampplanCode) {
                // Ask for retrieval of customization
                this.confirmationService.confirm({
                  messageKey: this.getTranslateKey('createCustomizeAmp'),
                  accept: () => {
                    this.maintenanceProgramFormService
                      .applyPreviousAMPCustomizationOnAMP(this.currentMaintenancePlan)
                      .subscribe(() => {
                        this.messageService.showSuccessMessage(this.getTranslateKey('customizationAmpSuccessful'));
                      });
                  }
                });
              }
            });
        }
      });
    }
  }

  public checkAmpComplianceWithRmp(): void {
    let checkAMPComplianceRMPInput: CheckAMPComplianceRMPInput;

    checkAMPComplianceRMPInput = {
      recommendedMaintenancePlanCode: this.relatedRecommendedMaintenancePlanCode,
      applicableMaintenancePlanCode: this.planCode
    };

    this.isLoadingTaskTable = true;
    this.isLoadingVisitTable = true;
    this.maintenanceProgramFormService.controlComplianceWithRMP(checkAMPComplianceRMPInput).subscribe((result) => {
      this.complianceColor = result && result.maintenancePlanControlIcon;
      // Update compliance data in task & visit Table
      if (result && result.updatedPlanTaskCounterTableDTOs) {
        this.loadTasksRows(result.updatedPlanTaskCounterTableDTOs);
        this.isLoadingTaskTable = false;
        this.loadVisitsRows(result.updatedPlanTaskCounterTableDTOs);
        this.isLoadingVisitTable = false;
      }
      if (result && result.missingPlanTaskCounterTableDTOs) {
        this.loadMissingTasksRows(result.missingPlanTaskCounterTableDTOs);
        this.loadMissingVisitsRows(result.missingPlanTaskCounterTableDTOs);
      }
    });
  }

  public saveMaintenanceProgram(): void {
    if (
      this.currentMaintenancePlan.planCode &&
      this.currentMaintenancePlan.planName &&
      this.currentMaintenancePlan.planRevisionNumber
    ) {
      const saveMaintenanceProgramScreenInput: SaveMaintenanceProgramScreenInput = {
        mpCodeSelected: this.currentMaintenancePlan.planCode,
        isForUpdate: !this.isNewPlanCode,
        statusSelected: this.selectedStatus
      };

      saveMaintenanceProgramScreenInput.isForUpdate = !this.isNewPlanCode;
      saveMaintenanceProgramScreenInput.bireMaintenancePlanDTO = this.currentMaintenancePlan;
      // update status
      saveMaintenanceProgramScreenInput.bireMaintenancePlanDTO.statusState = this.selectedStatus;
      if (!!this.sessionService.loggedUser) {
        const login = this.sessionService.loggedUser.login;
        saveMaintenanceProgramScreenInput.bireMaintenancePlanDTO.statusUser = login;
      }
      saveMaintenanceProgramScreenInput.itemsAssociatedTableDTOAddedList = this.itemsAssociatedTableDTOAddedList;
      saveMaintenanceProgramScreenInput.itemsAssociatedTableDTODeletedList = this.itemsAssociatedTableDTODeletedList;
      saveMaintenanceProgramScreenInput.partAssociateTableDTOAddedList = this.partAssociateTableDTOAddedList;
      saveMaintenanceProgramScreenInput.partAssociateTableDTODeletedList = this.partAssociateTableDTODeletedList;
      saveMaintenanceProgramScreenInput.planTaskCounterTableDTOAddedList = this.planTaskCounterTableDTOAddedList;
      saveMaintenanceProgramScreenInput.planTaskCounterTableDTODeletedList = this.planTaskCounterTableDTODeletedList;
      saveMaintenanceProgramScreenInput.planTaskCounterTableDTOUpdatedList = this.planTaskCounterTableDTOUpdatedList;

      const bireAttributeDtos: BirePlanAttributeDTO[] = this.dynamicAttributesService.toBirePlanAttribute(
        this.currentMaintenancePlan.planCode,
        this.dynamicAttributesForMaintenancePlan
      );

      saveMaintenanceProgramScreenInput.birePlanAttributeDTOAddedList = [];
      saveMaintenanceProgramScreenInput.birePlanAttributeDTOUpdatedList = [];
      saveMaintenanceProgramScreenInput.birePlanAttributeDTODeletedList = [];

      if (bireAttributeDtos !== null && bireAttributeDtos !== undefined) {
        bireAttributeDtos.forEach((attr) => {
          if (!attr.attributeValue) {
            if (
              attr.attributeId &&
              this.planAttributeIdValueMap.get(attr.attributeId) &&
              saveMaintenanceProgramScreenInput.birePlanAttributeDTODeletedList
            ) {
              saveMaintenanceProgramScreenInput.birePlanAttributeDTODeletedList.push(attr);
            }
          } else {
            if (attr.attributeId && this.planAttributeIdValueMap.get(attr.attributeId)) {
              if (saveMaintenanceProgramScreenInput.birePlanAttributeDTOUpdatedList) {
                saveMaintenanceProgramScreenInput.birePlanAttributeDTOUpdatedList.push(attr);
              }
            } else {
              if (saveMaintenanceProgramScreenInput.birePlanAttributeDTOAddedList) {
                saveMaintenanceProgramScreenInput.birePlanAttributeDTOAddedList.push(attr);
              }
            }
          }
        });
      }

      saveMaintenanceProgramScreenInput.bireTaskTaskDTO = [];
      this.showSaveSpinner = true;
      this.maintenanceProgramFormService.saveMaintenanceProgram(saveMaintenanceProgramScreenInput).subscribe(
        (result) => {
          this.currentMaintenancePlan.planCode = result;
          if (this.isNewPlanCode) {
            this.updateComponentOpenMode();
          } else {
            this.loadOnInit();
          }
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveProgram'));
          this.updateOpenMode(ComponentOpenMode.Read);
          this.showSaveSpinner = false;
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveProgram'));
          this.showSaveSpinner = false;
        }
      );

      if (
        this.currentMaintenancePlan.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY &&
        this.sessionService.isSpecificMHIAEL
      ) {
        this.maintenanceProgramFormMhiaelService
          .updateInMassRMPSubObjectStatus(this.currentMaintenancePlan)
          .subscribe();
        this.maintenanceProgramFormMhiaelService.updateRMPCsv(this.currentMaintenancePlan).subscribe();
      }
    } else {
      // If plan is new, clear tables
      if (!this.componentData.objectId) {
        this.parts = [];
        this.items = [];
        this.tasks = [];
        this.visits = [];
      }
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  private updateComponentOpenMode(): void {
    if (!!this.currentMaintenancePlan.planCode && !!this.componentData) {
      const birePlanDTOId: BireMaintenancePlanDTOId = {
        planCode: this.currentMaintenancePlan.planCode
      };

      this.componentData.openMode = ComponentOpenMode.Write;
      this.componentData.objectId = this.serializationService.serialize(birePlanDTOId);
      this.componentData.componentId = ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM;
      this.ngOnInit();
    }
  }

  private checkAssetsAndCreateAmpVisibility(): void {
    this.getCeateAMPVisibility();
    this.getAssignAssetsVisibility();
  }

  public openMaintenanceProgram(planCode: string): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM,
      openMode: ComponentOpenMode.Read
    };
    if (!!planCode) {
      const birePlanDTOId: BireMaintenancePlanDTOId = {
        planCode
      };
      data.objectId = this.serializationService.serialize(birePlanDTOId);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openItemCode(itemCode: string): void {
    // TODO: open item screen
    return;
  }

  public openPartCode(pnCode: string, pnType: string): void {
    if (pnType === '4-par') {
      const labelKey = 'transaction.PartNumberFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'PartNumberFormComponent',
        objectId: pnCode,
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      const materialFormId: BirePnDTO = {
        pnCode,
        pnType
      };
      const labelKey = 'transaction.MaterialFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'MaterialFormComponent',
        objectId: this.serializationService.serialize(materialFormId),
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openVisitOrTaskCode(object: PlanTaskCounterTableDTO, type: string): void {
    if (!!object.visitCode) {
      const labelKey = 'transaction.VisitFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'VisitFormComponent',
        objectId: this.serializationService.serialize(object.birePlanTaskCounterDTO),
        openMode: ComponentOpenMode.Read
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      const labelKey = 'transaction.TaskFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'TaskFormComponent',
        objectId: this.serializationService.serialize(object.birePlanTaskCounterDTO),
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public checkUpgradeMaintenancePlan(): void {
    if (
      this.currentMaintenancePlan.planRevisionNumber !== null &&
      this.currentMaintenancePlan.planRevisionNumber !== undefined &&
      !isNaN(Number(this.currentMaintenancePlan.planRevisionNumber))
    ) {
      this.upgradeMaintenancePlan();
    } else {
      this.showUpgradePopup = true;
    }
  }
  public upgradeMaintenancePlan(): void {
    const upgradeBireMaintenancePlanInput: UpgradeBireMaintenancePlanInput = {
      currentRevisionNumber: this.currentMaintenancePlan.planRevisionNumber,
      planCode: this.currentMaintenancePlan.planCode
    };
    this.maintenanceProgramFormService
      .checkAndReturnNewRevisionNumberByMaintenancePlan(upgradeBireMaintenancePlanInput)
      .subscribe((newerVersionDTO) => {
        this.confirmAndUpgradeVersion(newerVersionDTO);
      });
  }
  private confirmAndUpgradeVersion(newerVersionDTO: UpgradedMaintenacePlanDTO | undefined) {
    const partialMessageKey = this.getTranslateKey('upgradeConfirmation');
    // TODO: need to add util to get complete plan code
    this.confirmationService.confirm({
      interpolateParams: { planRevision: newerVersionDTO && newerVersionDTO.planCode },
      messageKey: partialMessageKey,
      accept: () => {
        if (this.currentMaintenancePlan.planCode) {
          const upgradeBireMaintenancePlan: UpgradeBireMaintenancePlanInput = {
            bireMaintenancePlanDTOId: {
              planCode: this.currentMaintenancePlan.planCode
            },
            targetRevisionNumber: newerVersionDTO && newerVersionDTO.revisionNumber
          };
          this.maintenanceProgramFormService
            .upgradeBireMaintenancePlanData(upgradeBireMaintenancePlan)
            .subscribe((upgradePlanDTO) => {
              if (!!this.componentData) {
                this.componentData.objectId = this.serializationService.serialize({
                  planCode: upgradePlanDTO.planCode
                });
              }
              this.loadOnInit();
            });
        }
      }
    });
  }
  public manualUpgradeMaintenancePlan(newVersion: string): void {
    if (this.currentMaintenancePlan.planCode) {
      const splitPlanCode = this.currentMaintenancePlan.planCode.split(':');
      splitPlanCode.pop();
      this.confirmAndUpgradeVersion({
        planCode: splitPlanCode.join(':') + ':' + newVersion,
        revisionNumber: newVersion
      });
    }
  }
  public getCeateAMPVisibility(): void {
    // Consult mode?
    if (this.isConsultMode) {
      this.showCreateAmpButton = false;

      return;
    }

    // AMP ?
    if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
      this.showCreateAmpButton = false;

      return;
    }
    // RMP with already an AMP ?
    if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP && this.relatedApplicableMaintenancePlanCode) {
      this.showCreateAmpButton = false;

      return;
    }
    // RMP status not approved
    if (
      this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP &&
      AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY !== this.currentMaintenancePlan.statusState
    ) {
      this.showCreateAmpButton = false;

      return;
    }
    // RMP with assigned Assets?
    if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP && this.hasRelatedBidoMaintenancePlan) {
      this.showCreateAmpButton = false;

      return;
    }
    this.showCreateAmpButton = true;
  }

  public getAssignAssetsVisibility(): void {
    this.maintenanceProgramFormService
      .hasDisplayRights(BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS)
      .subscribe((result) => {
        this.showAssignAssetsButton = false;

        if (
          AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY === this.currentMaintenancePlan.statusState &&
          this.planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP
        ) {
          this.showAssignAssetsButton = true;
        }
      });
  }

  public addMissingTasks(): void {
    this.selectedRemovedTasks.forEach((element) => {
      const existingTask = this.tasks.filter((taskAndVisit) => {
        return (
          taskAndVisit.taskCode === element.taskCode &&
          taskAndVisit.version === element.version &&
          taskAndVisit.reference === element.reference
        );
      });

      if (existingTask.length === 0) {
        if (
          !!element.planTaskCounterTableDTO &&
          this.planTaskCounterTableDTOAddedList.indexOf(element.planTaskCounterTableDTO) < 0
        ) {
          this.planTaskCounterTableDTOAddedList.push(element.planTaskCounterTableDTO);
          this.tasks.push(element);
        }
      }
      if (!!element.planTaskCounterTableDTO) {
        const indexOfDeletedTask = this.planTaskCounterTableDTODeletedList.indexOf(element.planTaskCounterTableDTO);
        if (indexOfDeletedTask > -1) {
          this.planTaskCounterTableDTODeletedList.splice(indexOfDeletedTask, 1);
        }
      }
      const indexInDisplayedList = this.removedTasks.indexOf(element);
      this.removedTasks.splice(indexInDisplayedList, 1);
    });
    this.selectedRemovedTasks = [];
    this.selectedTasks = [];
  }

  public addMissingVisits(): void {
    this.selectedRemovedVisits.forEach((element) => {
      const existingVisit = this.visits.filter((taskAndVisit) => {
        return (
          taskAndVisit.visitCode === element.visitCode &&
          taskAndVisit.visitVersion === element.visitVersion &&
          taskAndVisit.reference === element.reference
        );
      });

      if (existingVisit.length === 0) {
        if (
          !!element.planTaskCounterTableDTO &&
          this.planTaskCounterTableDTOAddedList.indexOf(element.planTaskCounterTableDTO) < 0
        ) {
          this.planTaskCounterTableDTOAddedList.push(element.planTaskCounterTableDTO);
          element.visitbloc = this.visits.length;
          this.visits.push(element);
        }
      }

      // if item is already deleted and then added, remove it from deleted list as well
      if (!!element.planTaskCounterTableDTO) {
        const indexOfDeletedVisit = this.planTaskCounterTableDTODeletedList.indexOf(element.planTaskCounterTableDTO);
        if (indexOfDeletedVisit > -1) {
          this.planTaskCounterTableDTODeletedList.splice(indexOfDeletedVisit, 1);
        }
      }
      const indexInDisplayedList = this.removedVisits.indexOf(element);
      this.removedVisits.splice(indexInDisplayedList, 1);
    });
    this.selectedRemovedVisits = [];
    this.selectedVisits = [];
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.currentMaintenancePlan.statusUser,
        currentDate: this.currentMaintenancePlan.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.currentMaintenancePlan.statusState, this.workflowStatus),
          value: this.currentMaintenancePlan.statusState
        },
        nextStatuses: this.workflowStatus
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.selectedStatus = event.data;
          this.save();
        }
      }
    });
  }

  private validationAssetConfirmation(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('setPreviousAssetConfirmation'),
      accept: () => {
        this.setPreviousAssetData();
      },
      reject: () => {
        this.saveMaintenanceProgram();
        this.setContext(ComponentOpenMode.Read);
      }
    });
  }

  private getPreviousAssetData(amp: BireMaintenancePlanDTO): void {
    this.maintenanceProgramFormService.getPreviousAMPRevisionOfMaintenancePlan(amp).subscribe((previousAMP) => {
      if (previousAMP) {
        if (
          previousAMP.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY &&
          !this.isAnteriorVersionWithApprovedAssetsFound
        ) {
          this.isAnteriorVersionWithApprovedAssetsFound = true;
          this.maintenanceProgramApprovedAsset = previousAMP;
        }
        this.maintenanceProgramFormService
          .findBidoEquipmentsEligibleToMaintenancePlan(previousAMP)
          .subscribe((results) => {
            if (!this.isAnteriorVersionWithAssetsFound) {
              results.forEach((res) => {
                if (res.isAssigned) {
                  this.previousMaintenanceProgramAssets.push(res);
                }
              });

              if (this.previousMaintenanceProgramAssets.length > 0) {
                this.isAnteriorVersionWithAssetsFound = true;
              } else {
                this.getPreviousAssetData(previousAMP);
              }
            }
          });
      }
    });
  }

  private getAssetData(): void {
    this.isCurrentMaintenanceProgramHasAssets = false;
    this.currentMaintenanceProgramAssets = [];

    this.maintenanceProgramFormService
      .findBidoEquipmentsEligibleToMaintenancePlan(this.currentMaintenancePlan)
      .subscribe((results) => {
        results.forEach((res) => {
          if (res.isAssigned) {
            this.currentMaintenanceProgramAssets.push(res);
          }
        });

        if (this.currentMaintenanceProgramAssets.length > 0) {
          this.isCurrentMaintenanceProgramHasAssets = true;
        }
      });
  }

  private setPreviousAssetData(): void {
    const maintenancePlanAssignedList: MaintenancePlanDTO[] = [];

    this.previousMaintenanceProgramAssets.forEach((element) => {
      const maintenancePlan: MaintenancePlanDTO = {
        planCode: element.planCode,
        equipmentCode: element.bidoEquipmentDTO && element.bidoEquipmentDTO.equipmentCode
      };

      maintenancePlanAssignedList.push(maintenancePlan);
    });

    const inputObj: AssetAssignmentMPSaveInput = {
      planCode: this.currentMaintenancePlan.planCode,
      maintenancePlanDTOsAssignedList: maintenancePlanAssignedList,
      maintenancePlanDTOsUnAssignedList: []
    };

    this.maintenanceProgramFormService.saveAssetAssignedToMaintenancePlan(inputObj).subscribe(() => {
      this.saveMaintenanceProgram();
      this.setContext(ComponentOpenMode.Read);
    });
  }

  public approveAmp(): void {
    let checkAMPComplianceRMPInput: CheckAMPComplianceRMPInput;
    checkAMPComplianceRMPInput = {
      recommendedMaintenancePlanCode: this.relatedRecommendedMaintenancePlanCode,
      applicableMaintenancePlanCode: this.planCode
    };
    this.maintenanceProgramFormService.controlComplianceWithRMP(checkAMPComplianceRMPInput).subscribe((result) => {
      this.complianceColor = result && result.maintenancePlanControlIcon;
      if (this.complianceColor === 'green') {
        this.selectedStatus = AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY;
        this.saveMaintenanceProgram();
      } else {
        // Update compliance data in task & visit Table
        if (result && result.updatedPlanTaskCounterTableDTOs) {
          this.loadTasksRows(result.updatedPlanTaskCounterTableDTOs);
          this.loadVisitsRows(result.updatedPlanTaskCounterTableDTOs);
        }
        if (result && result.missingPlanTaskCounterTableDTOs) {
          this.loadMissingTasksRows(result.missingPlanTaskCounterTableDTOs);
          this.loadMissingVisitsRows(result.missingPlanTaskCounterTableDTOs);
        }
        this.messageService.showErrorMessage(this.getTranslateKey('ampNotApproved'));
      }
    });
  }

  public checkTasks(): void {
    this.enableTaskDelete = true;
    this.selectedTasks.every((task) => {
      if (task.isRemovable === false) {
        this.enableTaskDelete = false;

        return false;
      }

      return true;
    });
  }

  public checkVisits(): void {
    this.enableVisitDelete = true;
    this.selectedVisits.every((task) => {
      if (task.isRemovable === false) {
        this.enableVisitDelete = false;

        return false;
      }

      return true;
    });
  }

  public refreshAfterAssetAssignment(event: boolean): void {
    this.loadOnInit();
  }

  public save(): void {
    if (this.selectedStatus === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY) {
      if (!!this.currentMaintenancePlan.planCode) {
        if (this.isAnteriorVersionWithAssetsFound && this.planType === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
          this.validationAssetConfirmation();
        } else {
          this.saveMaintenanceProgram();
          this.setContext(ComponentOpenMode.Read);
        }
      }
    } else if (this.currentMaintenancePlan.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY) {
      // RMP
      if (this.planType === BireMaintenancePlanConstants.PLAN_TYPE_RMP) {
        if (!this.isAmpOfRmpApproved) {
          this.saveMaintenanceProgram();
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnDisapprovingRMP'));
        }
        // AMP
      } else {
        if (!this.isCurrentMaintenanceProgramHasAssets) {
          this.saveMaintenanceProgram();
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnDisapprovingAMP'));
        }
      }
    } else {
      this.saveMaintenanceProgram();
    }
  }

  private setContext(openMode?: number) {
    if (!this.componentData.objectId) {
      this.componentData.openMode = ComponentOpenMode.Create;
    } else {
      this.componentData.openMode = ComponentOpenMode.Read;
    }
    this.updateOpenMode(openMode ? openMode : this.componentData.openMode);
  }

  public toggleRowDetailsVisibility(row: TaskVisitTableRow): void {
    row.showMore = false;
    row.expand = !row.expand;
  }

  public toggleShowMoreRowDetailsVisibility(row: TaskVisitTableRow): void {
    row.expand = false;
    row.showMore = !row.showMore;
  }

  // tslint:disable-next-line:no-any
  public onTasksFilter(event: any): void {
    this.tasksDisplayedRowNb =
      this.tasks && event.filteredValue.length && this.tasks.length === event.filteredValue.length
        ? undefined
        : event.filteredValue.length;
  }

  // tslint:disable-next-line:no-any
  public onVisitsFilter(event: any): void {
    this.visitsDisplayedRowNb = event.filteredValue.length;
  }

  // tslint:disable-next-line:no-any
  public onRemovedTasksFilter(event: any): void {
    this.removedTasksDisplayedRowNb = event.filteredValue.length;
  }

  // tslint:disable-next-line:no-any
  public onRemovedVisitsFilter(event: any): void {
    this.removedVisitsDisplayedRowNb = event.filteredValue.length;
  }

  // tslint:disable-next-line:no-any
  public onItemsFilter(event: any): void {
    this.itemsDisplayedRowNb = event.filteredValue.length;
  }

  // tslint:disable-next-line:no-any
  public onPartsFilter(event: any): void {
    this.partsDisplayedRowNb = event.filteredValue.length;
  }

  private createContentTable(): void {
    this.toc = [
      {
        id: 'mainDataAnchor',
        anchor: this.mainDataAnchor,
        label: this.translateService.instant('page.mainData')
      },
      {
        id: 'taskAnchor',
        anchor: this.taskAnchor,
        label: this.translateService.instant(this.getTranslateKey('tasks'))
      },
      {
        id: 'visitAnchor',
        anchor: this.visitAnchor,
        label: this.translateService.instant(this.getTranslateKey('visits'))
      },
      {
        id: 'generalAnchor',
        anchor: this.generalAnchor,
        label: this.translateService.instant('page.additionalData')
      },
      {
        id: 'documentsAnchor',
        anchor: this.documentsAnchor,
        label: this.translateService.instant(this.getTranslateKey('documents'))
      }
    ];

    const SET_TIME_OUT = 500;

    setTimeout(() => {
      this.setSelectedAnchor('mainDataAnchor');
    }, SET_TIME_OUT);
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  private registerPageTocEntrySelectedObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.selectedAnchor = pageTocEntrySelected;
    });
  }

  public generateTaskComment(): void {
    const taskRow: TaskVisitTableRow = { ...this.selectedTasks[0] };
    this.showGenerateCommentPopup = true;
    this.comment = {
      componentId: 'DialogGenerateCommentComponent',
      selectedRow: undefined,
      object:
        (taskRow.planTaskCounterTableDTO && taskRow.planTaskCounterTableDTO.birePlanTaskCounterDTO.comments) || '',
      openMode: ComponentOpenMode.Write
    };
  }

  public saveComments(comment: string) {
    const row: TaskVisitTableRow = this.selectedTasks[0];
    if (
      row.planTaskCounterTableDTO &&
      row.planTaskCounterTableDTO.birePlanTaskCounterDTO &&
      row.planTaskCounterTableDTO.birePlanTaskCounterDTO.comments !== comment
    ) {
      row.comments = this.getDisplayComments(comment);
      row.childRow[0].comments = row.comments;
      row.planTaskCounterTableDTO.birePlanTaskCounterDTO.comments = comment;
      this.planTaskCounterTableDTOUpdatedList.push(row.planTaskCounterTableDTO);
    }
  }

  public validateCompliance(rows: TaskVisitTableRow[], visitIndex: number, taskIndex: number) {
    let checkAMPComplianceRMPInput: CheckAMPComplianceRMPInput;
    checkAMPComplianceRMPInput = {
      recommendedMaintenancePlanCode: this.relatedRecommendedMaintenancePlanCode,
      applicableMaintenancePlanCode: this.planCode,
      birePlanTaskCounters: rows[0].planTaskCounterTableDTO && rows[0].planTaskCounterTableDTO.birePlanTaskCounterDTO
    };

    this.maintenanceProgramFormService.checkAmpTaskCompliance(checkAMPComplianceRMPInput).subscribe((result) => {
      this.complianceColor = result && result.maintenancePlanControlIcon;
      // Update compliance data in task & visit Table
      if (result && result.updatedPlanTaskCounterTableDTOs && result.updatedPlanTaskCounterTableDTOs.length > 0) {
        this.loadRowsOnValidate(result.updatedPlanTaskCounterTableDTOs, rows[0]);
        this.setTaskvisitRow(rows, visitIndex, taskIndex);
        this.displayCompliance();
      }
    });
  }

  private loadRowsOnValidate(results: PlanTaskCounterTableDTO[], row: TaskVisitTableRow): void {
    if (!!results && results.length > 0) {
      const res = results[0];
      row.complianceDetail = res.complianceDetail;
      row.compliance = res.complianceLight;
      row.planTaskCounterTableDTO = res;
    }
  }

  private displayCompliance() {
    const tasks = this.tasks.filter((element) => {
      return element.compliance === 'red';
    });
    const visits = this.visits.filter((element) => {
      return element.compliance === 'red';
    });

    if (tasks.length > 0 || visits.length > 0) {
      this.complianceColor = 'red';
    } else {
      this.complianceColor = 'green';
    }
  }

  private initDocumentsTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSourceWithHistory({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName')
        },
        {
          field: 'docSource',
          translateKey: this.getTranslateKey('docExternal')
        },
        {
          field: 'docExtension',
          translateKey: this.getTranslateKey('docExtension')
        },
        {
          field: 'docSize',
          translateKey: this.getTranslateKey('docSize')
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate')
        },
        {
          field: 'docDescription',
          translateKey: this.getTranslateKey('docDescription')
        }
      ],
      data: []
    });
    this.isReadOnlyDocumentDialog = true;
    this.displayDocumentDialog = false;
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';
    this.confirmationService.confirmDelete({
      messageKey: `global.${partialMessageKey}`,
      accept: () => {
        this.documentsTableDataSource.deleteDataSelection();
      }
    });
  }

  public addDocument(): void {
    this.currentDocument = undefined;
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public onAddDocument(documentDTO: BireDocumentDTO): void {
    const editedOrAddedDocumentRow = this.createDocumentRowFromBireDocumentDTO(documentDTO);
    // We are editing an existing document
    if (!!this.currentDocument) {
      const oldDoc = this.documentsTableDataSource.data.find((docRow) => {
        return !!this.currentDocument && docRow.docName === this.currentDocument.docName;
      });
      if (!!oldDoc && !!oldDoc._obj) {
        this.documentsTableDataSource.replaceData(oldDoc, editedOrAddedDocumentRow);
        this.currentDocument = undefined;
      }
    } else {
      // We have just uploaded a new document
      this.documentsTableDataSource.addData([editedOrAddedDocumentRow]);
    }
  }

  public editDocument(): void {
    this.currentDocument = { ...this.documentsTableDataSource.dataSelection[0] };
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public openDocument(): void {
    this.isReadOnlyDocumentDialog = true;
    this.showAddDocumentDialog = true;
  }

  public downloadFile(document: DocumentRow): void {
    if (!!document._obj) {
      FileUtils.downloadFile(document._obj.docFile, document.docName);
    }
  }

  private createDocumentRowFromBireDocumentDTO(documentDTO: BireDocumentDTO): DocumentRow {
    return {
      docName: documentDTO.docName,
      docSource: documentDTO.docSource,
      docExtension: FileUtils.getExtension(documentDTO.docName).toUpperCase(),
      docSize: !!documentDTO.docFile ? FileUtils.getFormattedSize(documentDTO.docFile.length) : '',
      docPublicationDate: this.dateService.dateToString(documentDTO.docPublicationDate),
      docDescription: documentDTO.docDescription,
      _obj: documentDTO
    };
  }

  private createDocumentsRowsFromBireDocPlanDTO(documentsDTO: BireDocPlanDTO[]): DocumentRow[] {
    return documentsDTO.map((elt) => this.createDocumentRowFromBireDocumentDTO(elt.bireDocumentDTO));
  }

  public saveDocPlans(): void {
    const forkedObservables: Observable<void>[] = [];

    // saveAddedBireDocPlan
    const createBireDocPlanInputList = this.documentsTableDataSource
      .getAddedList()
      .map((row) => this.getCreateUpdateBireDocPlanInputFromDocumentRow(row));

    if (!!createBireDocPlanInputList && createBireDocPlanInputList.length > 0) {
      forkedObservables.push(this.maintenanceProgramFormService.createBireDocPlan(createBireDocPlanInputList));
    }

    // saveUpdatedBireDocPlan
    const updateBireDocPlanInputList = this.documentsTableDataSource
      .getUpdatedList()
      .map((row) => this.getCreateUpdateBireDocPlanInputFromDocumentRow(row));

    if (!!updateBireDocPlanInputList && updateBireDocPlanInputList.length > 0) {
      forkedObservables.push(this.maintenanceProgramFormService.updateBireDocPlan(updateBireDocPlanInputList));
    }

    // saveDeletedBireDocPlan
    const removeBireDocPlanInputList: RemoveBireDocPlanInput[] = [];
    this.documentsTableDataSource.getDeletedList().forEach((row) => {
      removeBireDocPlanInputList.push(this.getRemoveBireDocPlanInputFromDocumentRow(row));
    });

    if (!!removeBireDocPlanInputList && removeBireDocPlanInputList.length > 0) {
      forkedObservables.push(this.maintenanceProgramFormService.removeBireDocPlan(removeBireDocPlanInputList));
    }

    this.documentsTableDataSource.clearHistory();

    forkJoin(forkedObservables).subscribe((errors) => {
      if (errors.every((error) => !ObjectUtils.isDefined(error))) {
        this.messageService.showSuccessMessage('global.successOnSave');
        this.loadDocumentsTableDataSourceData();
      } else {
        this.messageService.showErrorMessage('global.errorOnSave');
      }
    });
  }

  private getCreateUpdateBireDocPlanInputFromDocumentRow(docRow: DocumentRow): CreateUpdateBireDocPlanInput {
    return {
      planCode: this.planCode,
      bireDocumentDTO: docRow._obj as BireDocumentDTO
    };
  }

  private getRemoveBireDocPlanInputFromDocumentRow(docRow: DocumentRow): RemoveBireDocPlanInput {
    return {
      planCode: this.planCode,
      bireDocumentDTOId: {
        birMandant: undefined,
        planCode: this.planCode,
        mandant: undefined,
        docCode: (docRow._obj as BireDocumentDTO).docCode as string
      }
    };
  }

  private loadDocumentsTableDataSourceData(): void {
    this.maintenanceProgramFormService.findBreDocPlansListByPlanCode(this.planCode).subscribe((results) => {
      this.documentsTableDataSource.setData(this.createDocumentsRowsFromBireDocPlanDTO(results));
    });
  }

  public showSaveDocumentPlanBtn(): boolean {
    return this.documentsTableDataSource.tableDataSourceHasBeenModified();
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.status,
      this.currentMaintenancePlan.statusState
    );
  }

  private loadStatus(statusState: string): void {
    this.propertiesService.getObjectStatusList(true, false, false, statusState, false).subscribe(
      (results) => {
        if (results) {
          results.forEach((element) => {
            if (this.status.filter((status) => status.value === element.value).length === 0) {
              this.status.push(element);
            }
          });
          this.status = [...this.status];
          this.updateWorkflowStatusList();
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStatusList'));
      }
    );
  }
}
