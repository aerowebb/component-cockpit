import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

import { LabelValueHelper } from '../../../../modules/purchase-contract/utils/label-value-helper';
import { TaskHistoryApi } from '../../../../shared/api/task-history.api';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributeType } from '../../../../shared/components/dynamic-attributes/enums/dynamic-attribute-type.enum';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BireUnitMeasureConstants } from '../../../../shared/constants/bire-unit-measure-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { TaskFieldsConstant } from '../../../../shared/constants/task-fields-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DavFieldService } from '../../../../shared/services/dassault/field.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../../shared/services/update-historic.service';
import { PnTaskSearchInput } from '../../../../shared/types/api-input-types/task-management/pn-task-search-input.interface';
import { BireTaskMeasurementPointTableDTO } from '../../../../shared/types/api-output-types/task-management/bire-task-measurement-point-table-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTOId } from '../../../../shared/types/api-types/bire-document-dto-id.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireMaintenancePlanDTO } from '../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireOperationDTOId } from '../../../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireQualifTaskDTOId } from '../../../../shared/types/api-types/bire-qualif-task-dto-id.interface';
import { BireQualificationDTO } from '../../../../shared/types/api-types/bire-qualification-dto.interface';
import { BireSmTaskDTO } from '../../../../shared/types/api-types/bire-sm-task-dto.interface';
import { BireTaskAttributeDTOId } from '../../../../shared/types/api-types/bire-task-attribute-dto-id.interface';
import { BireTaskAttributeDTO } from '../../../../shared/types/api-types/bire-task-attribute-dto.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { BireTaskEvolutionDTOId } from '../../../../shared/types/api-types/bire-task-evolution-dto-id.interface';
import { BireTaskEvolutionDTO } from '../../../../shared/types/api-types/bire-task-evolution-dto.interface';
import { BireTaskItemDTOId } from '../../../../shared/types/api-types/bire-task-item-dto-id.interface';
import { BireTaskItemDTO } from '../../../../shared/types/api-types/bire-task-item-dto.interface';
import { BireTaskItemWithItemDTO } from '../../../../shared/types/api-types/bire-task-item-with-item-dto.interface';
import { BireTaskLinkPopupOutput } from '../../../../shared/types/api-types/bire-task-link-popup-output.interface';
import { BireTaskMeasureDTOId } from '../../../../shared/types/api-types/bire-task-measure-dto-id.inteface';
import { BireTaskMeasureDTO } from '../../../../shared/types/api-types/bire-task-measure-dto.interface';
import { BireTaskTaskDTOId } from '../../../../shared/types/api-types/bire-task-task-dto-id.interface';
import { BireTaskTaskDTO } from '../../../../shared/types/api-types/bire-task-task-dto.interface';
import { BireTilDTO } from '../../../../shared/types/api-types/bire-til-dto.interface';
import { BireTilTaskDTOId } from '../../../../shared/types/api-types/bire-til-task-dto-id.interface';
import { BireTilTaskDTO } from '../../../../shared/types/api-types/bire-til-task-dto.interface';
import { GetMaintainanceProgramWithTaskDTO } from '../../../../shared/types/api-types/get-maintainance-program-with-task-dto.interface';
import { HBireTaskAttributeDTO } from '../../../../shared/types/api-types/h-bire-task-attribute-dto.interface';
import { HBireTaskDTO } from '../../../../shared/types/api-types/h-bire-task-dto.interface';
import { LinkedTaskDTO } from '../../../../shared/types/api-types/linked-task-dto.interface';
import { LinkedTasksTableDTO } from '../../../../shared/types/api-types/linked-tasks-table-dto.interface';
import { ObjectStatusDTO } from '../../../../shared/types/api-types/object-status-dto.interface';
import { SaveTaskScreenInput } from '../../../../shared/types/api-types/save-task-screen-input.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BireFamilyVariantUtil } from '../../../../shared/utils/bire-family-variant-utils';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { SettingsUtils } from '../../../../shared/utils/settings-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { UrlUtils } from '../../../../shared/utils/url-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { ObjectStatusComponent } from '../../../object-status/object-status.component';
import { OverlayService } from '../../../overlay/overlay.service';
import { OperationTabData } from '../../operation/types/operation-tab-data.interface';
import { TaskSearchService } from '../search/task-search.service';

import { TaskFormService } from './task-form.service';

interface EvolutionRow {
  evolutionNumber: string;
  evolutionRevisionNumber: string;
  designation: string;
  taskEvolutionTypeCode: string;
  _obj: BireTaskEvolutionDTO;
}

interface DocumentRow {
  docCode?: string;
  docExtension?: string;
  docName?: string;
  docCategory?: string;
  docPublicationDate?: string;
  docSize?: string;
  docSource?: string;
  _obj: BireDocumentDTO;
}

interface MaintainedItemRow {
  designation: string;
  familyVariant: string;
  linkType: string;
  item: string;
  versionNumber: string;
  field: string;
  _obj: BireTaskItemDTO;
}

// @ts-ignore
declare var diff_match_patch;

@Component({
  selector: 'aw-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentsAnchor';
  public static readonly GENERAL_ANCHOR_ID: string = 'generalAnchor';
  public static readonly DESCRIPTION_ANCHOR_ID: string = 'descriptionTabAnchor';
  public static readonly IMPACTS_ANCHOR_ID: string = 'impactsAnchor';
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly MANUALS_ANCHOR_ID: string = 'manualsAnchor';
  public static readonly PREREQUISITES_ANCHOR_ID: string = 'prerequisitesAnchor';
  public static readonly TASK_CARD_ANCHOR_ID: string = 'taskCardAnchor';
  public static readonly MEASUREMENT_POINTS_ANCHOR_ID: string = 'measurementPointsAnchor';
  public static readonly LINK_MEASURE_ROW = 'Linked';
  public static readonly MAINTENANCE_PROGRAM_TYPE_RMP: number = 0;

  public static readonly TASK_LINK_CODE_SELF: string = '-1';
  public static readonly BOOLEAN: string = 'BOOL';
  public static readonly TEXT: string = 'TEXT';

  public readonly component: typeof TaskFormComponent;

  public componentContext: string;
  public subtitle: string;
  public workflowStatus: LabelValue<string>[];
  public taskStatus: LabelValue<string>[];
  public propertyObjectStatus: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];

  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public tableStatusUpdatesData: DialogTableData<HBireTaskDTO>;
  public deleteApi: string;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  // Tab id
  public readonly tabTaskFieldsId: string;
  public readonly tabTaskCardId: string;
  public readonly tabImpactsId: string;
  public readonly tabManualsId: string;
  public readonly tabPrerequisitesId: string;
  public readonly tabDocumentsId: string;
  public readonly tabAttributesId: string;

  public currentTabId: string;

  // Sub-tab id
  public readonly tabStructureId: string;
  public readonly tabOtherLinksId: string;

  public currentSubTabId: string;

  public task: BireTaskDTO;
  public taskVersion: number;

  // Task fields tab
  public subContracting: string;
  public taskTypes: LabelValue<string>[];
  public applicabilities: LabelValue<string>[];
  public mroCenters: LabelValue<string>[];
  public taskGroups: LabelValue<string>[];

  // Task card tab
  public bireTaskLinkAddedList: BireTaskTaskDTO[];
  public bireTaskLinkUpdatedList: BireTaskTaskDTO[];
  public bireTaskLinkDeletedList: BireTaskTaskDTOId[];

  public currentOperation: BireOperationDTO | undefined;
  public operationAdded: BireOperationDTO[];
  public operationRemoved: BireOperationDTOId[];
  public currentOperationIndex: number | undefined;
  public operationTableDataSource: TableDataSource<BireOperationDTO>;

  public isReadOnlyOperationDialog: boolean;
  public showOperationDialog: boolean;

  public currentTaskSelfLink?: LinkedTaskDTO;

  public superiorTaskTable: LinkedTaskDTO[];
  public selectedSuperiorTask: LinkedTaskDTO[];
  public currentSuperiorTask: LinkedTaskDTO | undefined;
  public currentSuperiorTaskIndex: number | undefined;
  public isReadOnlySuperiorTasksDialog: boolean; // common dialog for associated tasks tab
  public showSuperiorTasksDialog: boolean;
  public superiorTableDataSource: TableDataSource<BireTaskDTO>;

  public topDownTaskInput: BireTaskDTO;
  public topDownTreeTable: TreeNode[];
  public selectedTopDownNodes: TreeNode[];
  public selectedTopDownNodesStore: TreeNode[];
  public topDownTaskStructureTableCols: TableColumn[];
  public currentTopDownTask: LinkedTaskDTO | undefined;
  public currentTopDownTaskIndex: number | undefined;
  public isReadOnlyTopDownTasksDialog: boolean; // common dialog for associated tasks tab
  public showTopDownTasksDialog: boolean;
  public isLoadingTopDownTreeTable: boolean;

  public anteriorTable: LinkedTaskDTO[];
  public selectedAnterior: LinkedTaskDTO[];
  public currentAnterior: LinkedTaskDTO | undefined;
  public currentAnteriorIndex: number | undefined;
  public isReadOnlyAnteriorDialog: boolean; // common dialog for associated tasks tab
  public showAnteriorTasksDialog: boolean;
  public anteriorTaskTableDataSource: TableDataSource<BireTaskDTO>;

  public posteriorTable: LinkedTaskDTO[];
  public posteriorTableCols: TableColumn[];
  public selectedPosterior: LinkedTaskDTO[];
  public currentPosterior: LinkedTaskDTO | undefined;
  public currentPosteriorIndex: number | undefined;
  public isReadOnlyPosteriorDialog: boolean; // common dialog for associated tasks tab
  public showPosteriorDialog: boolean;
  public posteriorTaskTableDataSource: TableDataSource<BireTaskDTO>;

  public linkedTasksInput; // assign
  public linkedTasksTable: LinkedTaskDTO[];
  public selectedLinkedTasks: LinkedTaskDTO[];
  public currentLinkedTask: LinkedTaskDTO | undefined;
  public currentLinkedTaskIndex: number | undefined;
  public isReadOnlyLinkedTasksDialog: boolean; // common dialog for associated tasks tab
  public showLinkedTasksDialog: boolean;
  public linkedTaskTableDataSource: TableDataSource<LinkedTasksTableDTO>;

  // Impacts tab
  public currentEvolution: BireTaskEvolutionDTO | undefined;
  public evolutionAdded: BireTaskEvolutionDTO[];
  public evolutionRemoved: BireTaskEvolutionDTOId[];
  public currentEvolutionIndex: number | undefined;
  public evolutionsTableDataSource: TableDataSource<EvolutionRow>;

  public showEvolutionsDialog: boolean;
  public isReadOnlyEvolutionsDialog: boolean;

  public currentMaintainedItem: BireTaskItemDTO | undefined;
  public maintainedItemAdded: BireTaskItemDTO[];
  public maintainedItemRemoved: BireTaskItemDTOId[];
  public currentMaintainedItemIndex: number | undefined;
  public maintainedItemsTableDataSource: TableDataSource<MaintainedItemRow>;

  public structureType: LabelValue<string>[];

  public showMaintainedItemsDialog: boolean;
  public isReadOnlyMaintainedItemsDialog: boolean;

  // Manuals tab
  public shopManualsTableDataSource: TableDataSource<BireSmTaskDTO>;

  public maintenanceProgramsTableDataSource: TableDataSource<GetMaintainanceProgramWithTaskDTO>;

  // Prerequisites tab
  public qualificationsInput: BireQualificationDTO;
  public currentQualifications: BireQualificationDTO | undefined;
  public qualificationAdded: BireQualificationDTO[];
  public qualificationRemoved: BireQualifTaskDTOId[];
  public currentQualificationsIndex: number | undefined;
  public qualificationsTableDataSource: TableDataSource<BireQualificationDTO>;

  public showQualificationsDialog: boolean;
  public isReadOnlyQualificationsDialog: boolean;

  public currentTil: BireTilDTO | undefined;
  public tilAdded: BireTilTaskDTO[];
  public tilRemoved: BireTilTaskDTOId[];
  public currentTilIndex: number | undefined;
  public tilTableDataSource: TableDataSource<BireTilDTO>;

  private tilName: string[];
  private technicalLevel: string[];
  private tilDescription: string[];

  public showTilDialog: boolean;
  public isReadOnlyTilDialog: boolean;

  // Documents tab
  public currentDocument: BireDocumentDTO | undefined;
  public currentDocumentIndex: number | undefined;
  public bireDocumentDisplayed: DocumentRow[];
  public documentsAdded: BireDocumentDTO[];
  public documentsRemoved: BireDocumentDTOId[];
  public documentsUpdated: BireDocumentDTO[];
  public documentsTableDataSource: TableDataSource<BireDocumentDTO>;
  public documentCategories: LabelValue<string>[];

  public showDocumentDialog: boolean;
  public showAddDocumentDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;

  // Measurement Points tab
  public measurementPointsTableDataSource: TableDataSource<BireTaskMeasurementPointTableDTO>;
  public bireMeasurementRefDTO: BireTaskMeasurementPointTableDTO | undefined;
  public measurementPointRowData: BireTaskMeasurementPointTableDTO | undefined;
  public showMeasurementPointDialog: boolean;
  public measurementPointDialogOpenMode: ComponentOpenMode;
  private createUpdateBireTaskMeasurementList: BireTaskMeasurementPointTableDTO[];
  private removeBireTaskMeasurementList: BireTaskMeasureDTOId[];
  public isLinkedRefMeasurementCode: boolean;

  public measurementPointsAdded: BireTaskMeasureDTO[];
  public showAddMeasurementPointToolDialog: boolean;
  public showAddMeasurementPointFormulaDialog: boolean;
  public pnTaskSearchInput: PnTaskSearchInput;

  // Attributes tab
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForTask: BireAttributeDTO[];
  public bireTaskAttributes: BireTaskAttributeDTO[];
  public dynamicAttributesForTask: DynamicAttributes[];
  public newAttributeDisplayed: string;

  public statuses: LabelValue<string>[];
  public evolutionLinkTypes: LabelValue<string>[];
  public itemLinkTypes: LabelValue<string>[];

  public associatedLinkTypes: LabelValue<string>[];

  public technicalLevels: LabelValue<string> | undefined;
  public descriptions: LabelValue<string>[];

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public superior: LabelValue<string>[];
  public anterior: LabelValue<string>[];
  public posterior: LabelValue<string>[];
  public topDown: LabelValue<string>[];
  public linked: LabelValue<string>[];

  public totalCost: number;
  public currency: string;
  public isCritical: boolean;

  public getTaskItemTypeMap: LabelValue<string>[];

  public newQualification: boolean;
  public showOperationFormDialog: boolean;
  public selectedPnType?: string;

  public highlightUpdate: boolean;
  public updatedFieldIds: string[];
  public previousTaskVersion: BireTaskDTO;
  public taskDescriptionDiff: string;
  public taskDesignationDiff: string;
  public readonly TaskFieldsConstant = TaskFieldsConstant;
  public highlightHome: boolean;
  public highlightTaskCard: boolean;
  public highlightImpacts: boolean;
  public highlightPrerequisites: boolean;
  public highlightAttributes: boolean;
  public highlightDocuments: boolean;
  public highlightMeasurementPoint: boolean;
  public previousTaskVersionLastMP: GetMaintainanceProgramWithTaskDTO;
  public showUpgradeButton: boolean;

  public dmp: { diff_main: Function; diff_cleanupSemantic: Function; diff_prettyHtml: Function };

  // Dynamic historic
  public showDynamicAttributesHistoric: boolean;
  public dynamicAttributesHistoric: Observable<HBireTaskAttributeDTO[]>;

  // Table of content ***********************************************************

  @ViewChild(TaskFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentsEltRef: ElementRef;

  @ViewChild(TaskFormComponent.GENERAL_ANCHOR_ID)
  public generalEltRef: ElementRef;

  @ViewChild(TaskFormComponent.DESCRIPTION_ANCHOR_ID)
  public descriptionElRef: ElementRef;

  @ViewChild(TaskFormComponent.IMPACTS_ANCHOR_ID)
  public impactsEltRef: ElementRef;

  @ViewChild(TaskFormComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(TaskFormComponent.MANUALS_ANCHOR_ID)
  public manualsEltRef: ElementRef;

  @ViewChild(TaskFormComponent.PREREQUISITES_ANCHOR_ID)
  public prerequisitesEltRef: ElementRef;

  @ViewChild(TaskFormComponent.TASK_CARD_ANCHOR_ID)
  public taskCardEltRef: ElementRef;

  @ViewChild(TaskFormComponent.MEASUREMENT_POINTS_ANCHOR_ID)
  public measurementPointsEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************
  public showSaveSpinner: boolean;
  public bireUnitMeasureConstants: typeof BireUnitMeasureConstants;
  public isCostSettingEnabled: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly taskFormService: TaskFormService,
    private readonly taskSearchService: TaskSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly taskHistoryApi: TaskHistoryApi,
    private readonly dateService: DateService,
    private readonly davFieldService: DavFieldService,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = TaskFormComponent;
    this.selectedPnType = AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY;
    this.bireUnitMeasureConstants = BireUnitMeasureConstants;

    super.registerPageTocEntryObservable();

    // Dynamic historic
    this.showDynamicAttributesHistoric = false;

    this.tabTaskFieldsId = 'fields';
    this.tabTaskCardId = 'card';
    this.tabImpactsId = 'impacts';
    this.tabManualsId = 'manuals';
    this.tabPrerequisitesId = 'prerequisites';
    this.tabDocumentsId = 'documents';
    this.tabAttributesId = 'attributes';

    this.tabStructureId = 'structure';
    this.tabOtherLinksId = 'other';

    this.currentTabId = this.tabTaskFieldsId;
    this.currentSubTabId = this.tabStructureId;

    this.currentOperation = undefined;
    this.currentOperationIndex = undefined;
    this.isReadOnlyOperationDialog = true;
    this.showOperationDialog = false;

    this.currentSuperiorTask = undefined;
    this.currentSuperiorTaskIndex = undefined;
    this.isReadOnlySuperiorTasksDialog = true;
    this.showSuperiorTasksDialog = false;

    this.currentTopDownTask = undefined;
    this.currentTopDownTaskIndex = undefined;
    this.isReadOnlyTopDownTasksDialog = true;
    this.showTopDownTasksDialog = false;

    this.currentAnterior = undefined;
    this.currentAnteriorIndex = undefined;
    this.isReadOnlyAnteriorDialog = true;
    this.showAnteriorTasksDialog = false;

    this.currentPosterior = undefined;
    this.currentPosteriorIndex = undefined;
    this.isReadOnlyPosteriorDialog = true;
    this.showPosteriorDialog = false;

    this.currentLinkedTask = undefined;
    this.currentLinkedTaskIndex = undefined;
    this.isReadOnlyLinkedTasksDialog = true;
    this.showLinkedTasksDialog = false;

    this.currentEvolution = undefined;
    this.currentEvolutionIndex = undefined;
    this.isReadOnlyEvolutionsDialog = true;
    this.showEvolutionsDialog = false;

    this.currentMaintainedItem = undefined;
    this.currentMaintainedItemIndex = undefined;
    this.isReadOnlyMaintainedItemsDialog = true;
    this.showMaintainedItemsDialog = false;

    this.currentQualifications = undefined;
    this.currentQualificationsIndex = undefined;
    this.isReadOnlyQualificationsDialog = true;
    this.showQualificationsDialog = false;

    this.currentTil = undefined;
    this.currentTilIndex = undefined;
    this.isReadOnlyTilDialog = true;
    this.showTilDialog = false;

    this.currentDocument = undefined;
    this.currentDocumentIndex = undefined;
    this.isReadOnlyDocumentDialog = true;
    this.showDocumentDialog = false;
    this.showAddDocumentDialog = false;
    this.bireDocumentDisplayed = [];

    this.newQualification = false;
    this.highlightUpdate = false;
    this.dmp = new diff_match_patch();
    this.showMeasurementPointDialog = false;
    this.measurementPointRowData = undefined;

    this.measurementPointDialogOpenMode = ComponentOpenMode.Create;

    this.showAddMeasurementPointToolDialog = false;
    this.showAddMeasurementPointFormulaDialog = false;
    this.init();

    this.initCostSettingDisplay();
    this.initOperationTableDataSource();
    this.initEvolutionsTableDataSource();
    this.initMaintainedItemsTableDataSource();
    this.initShopManualsTableDataSource();
    this.initMaintenanceProgramsTableDataSource();
    this.initQualificationsTableDataSource();
    this.initTilTableDataSource();
    this.initDocumentsTableDataSource();
    this.initSuperiorTableDataSource();
    this.initAnteriorTaskTableDataSource();
    this.initPosteriorTaskTableDataSource();
    this.initMeasurementPointsTableDataSource();
    this.initLinkedTaskTableDataSource();

    this.totalCost = 0;
    this.showUpgradeButton = false;
    this.loadCurrency();

    this.setTableCols();

    this.loadTaskType();
    this.loadStatus();
    this.loadApplicability();
    this.loadMROCenter();
    this.loadTaskGroup();

    this.loadLinkTypes();
    this.loadStructureTypes();
    this.loadAssociatedTaskLinkTypes();

    this.loadTechnicalLevels();

    this.loadDocumentTaskCategories();

    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.bireAttributesForTask = [];
      this.dynamicAttributesForTask = [];
      this.getBireAttributesForTask();
    });
    this.isLoadingTopDownTreeTable = false;

    this.userWorkflowSubject.subscribe((userWorkflow) => {
      this.updateWorkflowStatusList();
    });
  }

  public getComponentName(): string {
    return 'TaskFormComponent';
  }

  public ngOnInit() {
    super.ngOnInit();
    this.setContext();
    this.loadTask();
  }

  public refresh(): void {
    this.reloadTask();
    this.setContext();
  }

  private setContext(openMode?: number) {
    if (!this.componentData.objectId) {
      this.componentContext = 'tab.createMode';
      this.componentData.openMode = ComponentOpenMode.Create;
    } else {
      const componentInputData = this.serializationService.deserialize(this.componentData.objectId) as BireTaskDTO;
      this.componentContext = `${componentInputData.taskCode} - ${componentInputData.taskVersion}`;
      this.componentData.openMode = ComponentOpenMode.Read;
    }
    this.updateOpenMode(openMode ? openMode : this.componentData.openMode);
    this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
    this.setTableOfContent();
  }

  public cancelTask(): void {
    if (this.isCreateOpenMode) {
      this.init();
      this.initAttributeValue();
    } else {
      this.reloadTask();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributesForTask);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  public editTask(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public loadTask(): void {
    this.linkedTaskTableDataSource.setData([]);
    if (!!this.componentData.objectId) {
      const taskTemp: BireTaskDTOId = {
        taskCode: this.serializationService.deserialize(this.componentData.objectId).taskCode,
        taskVersion: this.serializationService.deserialize(this.componentData.objectId).taskVersion
      };

      this.subtitle = taskTemp.taskCode + ':' + taskTemp.taskVersion;

      this.taskFormService.findBireTask(taskTemp).subscribe(
        (result) => {
          this.task = result || {};
          if (this.task.taskApplicabilityDate) {
            this.task.taskApplicabilityDate = new Date(this.task.taskApplicabilityDate.toString());
          }

          if (this.task && this.task.taskCode && this.task.taskVersion) {
            this.taskVersion = Number(this.task.taskVersion);
            const id: BireTaskDTOId = {
              taskCode: this.task.taskCode,
              taskVersion: this.task.taskVersion
            };

            const taskId: BireTaskDTO = {
              taskCode: this.task.taskCode,
              taskVersion: this.task.taskVersion
            };

            // Task fields tab
            this.getSubContracting(taskId);

            // Task Card tab
            this.loadOperationTable(id);
            this.loadAssociatedTasksTables(taskId);

            // Impacts tab
            this.loadEvolutionsTable(id);
            this.loadItemsTable(id);

            // Manuals tab
            this.loadShopManualsTable(id);
            this.loadMaintenanceProgramsTable(id, taskId);

            // Prerequisites tab
            this.loadQualificationsTable(taskId);
            this.loadTilTable(taskId);

            // Documents tab
            this.loadDocumentsTable(id);

            // Attributes tab
            this.getBireTaskAttributes();
            // Measurement Points tab
            this.loadMeasurementPointsTable(id);
            // Load changes
            this.isHighlightTaskUpdate(taskTemp);

            if (!this.task.taskStatus) {
              this.task.taskStatus = AWPropertiesConstants.FUNC_OBJECT_STATUS_ON_GOING_KEY;
            }
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadTask'));
        }
      );
    } else {
      if (!this.task.taskStatus) {
        this.task.taskStatus = AWPropertiesConstants.FUNC_OBJECT_STATUS_ON_GOING_KEY;
      }
    }
  }

  public reloadTask(): void {
    this.init();
    this.loadTask();
  }

  /**
   * upgradeButtonVisibility() - This function is used to display upgrade button for creating new version of Task.
   * @param currentTask - Current Task Input
   * @param maintenanceProgramTableResult - Maintenance program Table Result
   *
   * If length of value is zero, then it is a RMP.
   */
  public upgradeButtonVisibility(currentTask: BireTaskDTOId, maintenanceProgram: GetMaintainanceProgramWithTaskDTO[]) {
    maintenanceProgram.forEach((elements) => {
      const planDTO: BireMaintenancePlanDTO = { planCode: elements.planCode };
      this.taskFormService.findBirePlanAttributesByPlanCode(planDTO).subscribe((value) => {
        if (
          value.length === TaskFormComponent.MAINTENANCE_PROGRAM_TYPE_RMP &&
          elements.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY
        ) {
          this.taskFormService.checkAndReturnNewVersionNumberByTask(currentTask).subscribe((result) => {
            if (!!result) {
              this.showUpgradeButton = true;
            }
          });
        }
      });
    });
  }

  public isValidTask(): boolean {
    if (
      this.task.taskTypeCode &&
      this.task.taskCode &&
      this.task.taskVersion &&
      this.task.taskTypeCode.trim().length !== 0 &&
      this.task.taskCode.trim().length !== 0 &&
      this.task.taskVersion.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  public saveTask(): void {
    if (!!this.task.taskCode && !!this.task.taskVersion && !!this.task.taskTypeCode) {
      const task: BireTaskDTOId = {
        taskCode: this.task.taskCode,
        taskVersion: this.task.taskVersion
      };
      if (
        StringUtils.isNullOrEmpty(this.task.taskCode) ||
        StringUtils.isNullOrEmpty(this.task.taskVersion) ||
        StringUtils.isNullOrEmpty(this.task.taskTypeCode)
      ) {
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else {
        if (!!task) {
          if (this.componentData.openMode === ComponentOpenMode.Create) {
            // creation
            this.taskFormService.findBireTask(task).subscribe((res) => {
              // If task not found, create it
              if (!res) {
                this.save();
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('taskAlreadyExists'));
              }
            });
          } else {
            // updation
            this.taskFormService.findBireTask(task).subscribe((res) => {
              // If task found, update it
              if (res) {
                this.save();
              } else {
                this.messageService.showErrorMessage('global.internalServerError');
              }
            });
          }
        }
      }
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public changeIsCriticalDynamicAttribute() {
    this.dynamicAttributesForTask[0].attributes.forEach((result, index) => {
      this.dynamicAttributesForTask[0].attributes[index].value = this.isCritical;
    });
  }

  private save(): void {
    this.qualificationAdded.forEach((qual) => {
      if (!!qual.averageHourRate) {
        const rate = qual.averageHourRate.split(' ');
        qual.averageHourRate = rate[0];
      }
    });

    if (!!this.task.taskCode && !!this.task.taskVersion && !!this.dynamicAttributesForTask) {
      const bireTaskAttributes = this.dynamicAttributesService.toBireTaskAttribute(
        this.task.taskCode,
        this.task.taskVersion,
        this.dynamicAttributesForTask
      );

      const removedItems = [...this.maintainedItemRemoved];

      removedItems.forEach((item) => {
        this.structureType.forEach((str) => {
          if (str.label === item.structureType) {
            item.structureType = str.value;
          }
        });

        this.getTaskItemTypeMap.forEach((taskItem) => {
          if (taskItem.label === item.taskItemTypeCode) {
            item.taskItemTypeCode = taskItem.value;
          }
        });
      });

      this.createUpdateBireTaskMeasurementList = [];
      this.measurementPointsTableDataSource.dataSrc.forEach((mpoint) => {
        this.createUpdateBireTaskMeasurementList.push({
          counterCode: mpoint.counterCode,
          taskCode: this.task.taskCode,
          taskVersion: this.task.taskVersion,
          sequenceNumber: mpoint.sequenceNumber,
          groupCode: mpoint.groupCode,
          formula: mpoint.formula,
          toolPartNumber: mpoint.toolPartNumber,
          minValue: mpoint.minValue,
          maxValue: mpoint.maxValue,
          description: mpoint.description,
          additionalDescription: mpoint.additionalDescription
        });
      });

      const saveTaskId: SaveTaskScreenInput = {
        bireTaskDTO: this.task,

        bireOperationAddedList: this.operationAdded,
        bireOperationDeletedList: this.operationRemoved,

        bireTaskEvolutionAddedList: this.evolutionAdded,
        bireTaskEvolutionDeletedList: this.evolutionRemoved,

        bireTilTaskAddedList: this.tilAdded,
        bireTilTaskDeletedList: this.tilRemoved,

        bireQualificationAddedList: this.qualificationAdded,
        bireQualificationDeletedList: this.qualificationRemoved,

        bireTaskItemAddedList: this.maintainedItemAdded,
        bireTaskItemDeletedList: removedItems,

        bireDocumentAddedList: this.documentsAdded,
        bireDocumentDeletedList: this.documentsRemoved,
        bireDocumentUpdatedList: this.documentsUpdated,

        bireTaskMeasureAddedList: this.measurementPointsAdded,

        bireTaskAttributeUpdatedList: bireTaskAttributes,

        // TODO: Add a proper list for that
        bireTaskLinkAddedList: this.bireTaskLinkAddedList,
        bireTaskLinkUpdatedList: this.bireTaskLinkUpdatedList,
        bireTaskLinkDeletedList: this.bireTaskLinkDeletedList,
        createUpdateBireTaskMeasurementList: this.createUpdateBireTaskMeasurementList,
        removeBireTaskMeasurementList: this.removeBireTaskMeasurementList
      };

      this.showSaveSpinner = true;
      this.taskFormService.saveTask(saveTaskId).subscribe(
        (result) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveTask'));
          this.updateOpenMode(ComponentOpenMode.Read);
          this.componentData.objectId = this.serializationService.serialize(this.task);
          this.refresh();
          this.showSaveSpinner = false;
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveTask'));
          this.showSaveSpinner = false;
        }
      );
    } else {
      super.throwUnboundLocalError(
        'saveTask',
        'this.task.taskCode && this.task.taskVersion && this.dynamicAttributesForTask'
      );
    }
  }

  private init(): void {
    this.task = {};

    // Historic popup
    this.showStatusUpdatesPopup = false;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('structureType', this.propertiesService.getValue('getStructureTypeMap'));
    this.keyMap.set('itemType', this.propertiesService.getValue('getItemTypeMap'));
    this.keyMap.set('itemFamilyCode', this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP));
    this.keyMap.set('taskItemTypeCode', this.propertiesService.getValue('getTaskItemTypeMap'));

    this.deleteApi = this.taskHistoryApi.removeBireTaskHistory;

    this.bireTaskLinkAddedList = [];
    this.bireTaskLinkUpdatedList = [];
    this.bireTaskLinkDeletedList = [];

    this.operationAdded = [];
    this.operationRemoved = [];

    this.superiorTaskTable = [];
    this.selectedSuperiorTask = [];

    this.topDownTaskInput = {};
    this.topDownTreeTable = [];
    this.selectedTopDownNodes = [];
    this.selectedTopDownNodesStore = [];

    this.anteriorTable = [];
    this.selectedAnterior = [];

    this.posteriorTable = [];
    this.selectedPosterior = [];

    this.linkedTasksInput = {};
    this.linkedTasksTable = [];
    this.selectedLinkedTasks = [];

    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];

    this.evolutionAdded = [];
    this.evolutionRemoved = [];

    this.maintainedItemAdded = [];
    this.maintainedItemRemoved = [];

    this.qualificationAdded = [];
    this.qualificationRemoved = [];

    this.tilAdded = [];
    this.tilRemoved = [];
    this.tilName = [];
    this.tilDescription = [];
    this.technicalLevels = undefined;
    this.technicalLevel = [];

    this.createUpdateBireTaskMeasurementList = [];
    this.removeBireTaskMeasurementList = [];

    this.attributeIdValueMap = new Map<string, string>();
    this.bireAttributesForTask = [];
    this.dynamicAttributesForTask = [];
    this.bireTaskAttributes = [];
    this.getBireAttributesForTask();

    this.getTaskItemTypeMap = [];
    this.getTaskItemTypeMaps();
  }

  private getTaskItemTypeMaps(): void {
    this.propertiesService.getValue('getTaskItemTypeMap').subscribe((results) => {
      this.getTaskItemTypeMap = results || [];
    });
  }

  private getSubContracting(bireTaskDTO: BireTaskDTO): void {
    this.taskFormService.getSubContracting(bireTaskDTO).subscribe((result) => {
      this.subContracting = result || '';
    });
  }

  private loadOperationTable(bireTaskDTOId: BireTaskDTOId) {
    let total = 0;
    this.taskFormService.findBireTaskOperationsByTask(bireTaskDTOId).subscribe(
      (results) => {
        results.forEach((res) => {
          res.ope = `${res.opeCode}-${res.opeVersion}`;
        });
        this.operationTableDataSource.setData(results || []);
        this.sortOperationTable();

        results.forEach((result) => {
          const cost = result.opeCost != undefined ? Number.parseInt(result.opeCost.toString(), 0) : undefined;
          if (cost !== undefined) {
            total = total + cost;
          }
        });
        this.totalCost = total;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindTaskOperations'));
      }
    );
    this.operationTableDataSource.setData(this.operationTableDataSource.dataSrc);
  }

  private loadAssociatedTasksTables(task: BireTaskDTO) {
    this.isLoadingTopDownTreeTable = true;
    this.taskFormService.getTaskLinkInAdequate(task).subscribe((result) => {
      this.isLoadingTopDownTreeTable = false;
      if (
        !!result.superiorTasks &&
        !!result.taskTreeNode &&
        !!result.anteriorInSequence &&
        !!result.posteriorInSequence &&
        !!result.linkedTasks
      ) {
        this.convertTaskTypeInTreeNode(result.taskTreeNode);
        this.setTaskInNodes(result.taskTreeNode);

        this.currentTaskSelfLink = result.currentTask;

        const superiorTasks: LinkedTaskDTO[] = result.superiorTasks;
        superiorTasks.forEach((superiorTask) => {
          if (!!superiorTask.bireTaskDTO) {
            this.superiorTableDataSource.addData([superiorTask.bireTaskDTO]);
          } else {
            super.throwUnboundLocalError('loadAssociatedTaskTables', 'superiorTask.bireTaskDTO');
          }
        });

        superiorTasks.forEach((superiorTask) => {
          if (!!superiorTask.bireTaskDTO) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!superiorTask.bireTaskDTO && group.value === superiorTask.bireTaskDTO.groupCode
            );
            if (superiorTask.bireTaskDTO.groupCode && taskGroup) {
              superiorTask.bireTaskDTO.groupCode = taskGroup[0].label;
            }

            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!superiorTask.bireTaskDTO && type.value === superiorTask.bireTaskDTO.taskTypeCode
            );
            if (superiorTask.bireTaskDTO.taskTypeCode && taskType) {
              superiorTask.bireTaskDTO.taskTypeCode = taskType[0].label;
            }

            const temp: LinkedTaskDTO = {
              bireTaskDTO: {
                taskCode: superiorTask.bireTaskDTO.taskCode,
                taskVersion: superiorTask.bireTaskDTO.taskVersion,
                taskDesignation: superiorTask.bireTaskDTO.taskDesignation,
                groupCode: superiorTask.bireTaskDTO.groupCode,
                taskTypeCode: superiorTask.bireTaskDTO.taskTypeCode
              },
              linkType: superiorTask.linkType,
              sequenceNumber: superiorTask.sequenceNumber
            };
            this.superiorTaskTable.push(temp);
          } else {
            super.throwUnboundLocalError('loadAssociatedTaskTables', 'superiorTask.bireTaskDTO');
          }
        });
        this.superiorTableDataSource.setData(superiorTasks.map((superiorTask) => superiorTask.bireTaskDTO));
        this.topDownTreeTable = [];
        this.topDownTreeTable.push(result.taskTreeNode);
        this.topDownTreeTable = [...this.topDownTreeTable];
        this.topDownTreeTable[0].expanded = true;

        const anteriorTasks: LinkedTaskDTO[] = result.anteriorInSequence;
        const anteriorTasksRows: BireTaskDTO[] = [];
        anteriorTasks.forEach((anteriorTask) => {
          if (!!anteriorTask.bireTaskDTO) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!anteriorTask.bireTaskDTO && group.value === anteriorTask.bireTaskDTO.groupCode
            );
            if (anteriorTask.bireTaskDTO.groupCode && taskGroup) {
              anteriorTask.bireTaskDTO.groupCode = taskGroup[0].label;
            }

            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!anteriorTask.bireTaskDTO && type.value === anteriorTask.bireTaskDTO.taskTypeCode
            );
            if (anteriorTask.bireTaskDTO.taskTypeCode && taskType) {
              anteriorTask.bireTaskDTO.taskTypeCode = taskType[0].label;
            }

            if (!!anteriorTask.sequenceNumber) {
              anteriorTask.bireTaskDTO.sequenceNumber = anteriorTask.sequenceNumber;
            }

            anteriorTasksRows.push(anteriorTask.bireTaskDTO);

            const temp: LinkedTaskDTO = {
              bireTaskDTO: {
                taskCode: anteriorTask.bireTaskDTO.taskCode,
                taskVersion: anteriorTask.bireTaskDTO.taskVersion,
                taskDesignation: anteriorTask.bireTaskDTO.taskDesignation,
                groupCode: anteriorTask.bireTaskDTO.groupCode,
                taskTypeCode: anteriorTask.bireTaskDTO.taskTypeCode
              },
              linkType: anteriorTask.linkType,
              sequenceNumber: anteriorTask.sequenceNumber,
              linkedTaskMain: anteriorTask.linkedTaskMain
            };
            this.anteriorTable.push(temp);
          } else {
            super.throwUnboundLocalError('loadAssociatedTaskTables', 'anteriorTask.bireTaskDTO');
          }
        });
        this.anteriorTaskTableDataSource.setData(anteriorTasksRows);

        const posteriorTasks: LinkedTaskDTO[] = result.posteriorInSequence;
        const posteriorTasksRows: BireTaskDTO[] = [];
        posteriorTasks.forEach((posteriorTask) => {
          if (!!posteriorTask.bireTaskDTO) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!posteriorTask.bireTaskDTO && group.value === posteriorTask.bireTaskDTO.groupCode
            );
            if (posteriorTask.bireTaskDTO.groupCode && taskGroup) {
              posteriorTask.bireTaskDTO.groupCode = taskGroup[0].label;
            }
            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!posteriorTask.bireTaskDTO && type.value === posteriorTask.bireTaskDTO.taskTypeCode
            );
            if (posteriorTask.bireTaskDTO.taskTypeCode && taskType) {
              posteriorTask.bireTaskDTO.taskTypeCode = taskType[0].label;
            }

            if (!!posteriorTask.sequenceNumber) {
              posteriorTask.bireTaskDTO.sequenceNumber = posteriorTask.sequenceNumber;
            }

            posteriorTasksRows.push(posteriorTask.bireTaskDTO);

            const temp: LinkedTaskDTO = {
              bireTaskDTO: {
                taskCode: posteriorTask.bireTaskDTO.taskCode,
                taskVersion: posteriorTask.bireTaskDTO.taskVersion,
                taskDesignation: posteriorTask.bireTaskDTO.taskDesignation,
                groupCode: posteriorTask.bireTaskDTO.groupCode,
                taskTypeCode: posteriorTask.bireTaskDTO.taskTypeCode
              },
              linkType: posteriorTask.linkType,
              sequenceNumber: posteriorTask.sequenceNumber,
              linkedTaskMain: posteriorTask.linkedTaskMain
            };
            this.posteriorTable.push(temp);
          } else {
            super.throwUnboundLocalError('loadAssociatedTaskTables', 'posteriorTask.bireTaskDTO');
          }
        });
        this.posteriorTaskTableDataSource.setData(posteriorTasksRows);

        const linkedTasks: LinkedTaskDTO[] = result.linkedTasks;

        linkedTasks.forEach((linkedTask) => {
          if (!!linkedTask.bireTaskDTO) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!linkedTask.bireTaskDTO && group.value === linkedTask.bireTaskDTO.groupCode
            );
            if (linkedTask.bireTaskDTO.groupCode && taskGroup && taskGroup.length > 0) {
              linkedTask.bireTaskDTO.groupCode = taskGroup[0].label;
            }

            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!linkedTask.bireTaskDTO && type.value === linkedTask.bireTaskDTO.taskTypeCode
            );
            if (linkedTask.bireTaskDTO.taskTypeCode && taskType && taskType.length > 0) {
              linkedTask.bireTaskDTO.taskTypeCode = taskType[0].label;
            }

            let linkType: string | undefined;
            if (this.linked !== undefined && this.linked.length > 0 && linkedTasks.length > 0) {
              linkType = LabelValueHelper.getLabelByValue(this.linked, linkedTask.linkType);
            }

            if (!!linkType && !!linkedTask.bireTaskDTO.taskCode && !!linkedTask.bireTaskDTO.taskVersion) {
              const linkedInput: LinkedTasksTableDTO = {
                linkType,
                taskCode: linkedTask.bireTaskDTO.taskCode,
                taskVersion: linkedTask.bireTaskDTO.taskVersion,
                taskDesignation: linkedTask.bireTaskDTO.taskDesignation,
                taskGroup: linkedTask.bireTaskDTO.groupCode,
                taskType: linkedTask.bireTaskDTO.taskTypeCode
              };

              this.linkedTaskTableDataSource.addData([linkedInput]);

              const temp: LinkedTaskDTO = {
                bireTaskDTO: {
                  taskCode: linkedTask.bireTaskDTO.taskCode,
                  taskVersion: linkedTask.bireTaskDTO.taskVersion,
                  taskDesignation: linkedTask.bireTaskDTO.taskDesignation,
                  groupCode: linkedTask.bireTaskDTO.groupCode,
                  taskTypeCode: linkedTask.bireTaskDTO.taskTypeCode
                },
                linkType: linkedTask.linkType,
                sequenceNumber: linkedTask.sequenceNumber
              };
              this.linkedTasksTable.push(temp);
            } else {
              super.throwUnboundLocalError(
                'loadAssociatedTaskTables',
                'linkType && linkedTask.bireTaskDTO.taskCode && linkedTask.bireTaskDTO.taskVersion'
              );
            }
          } else {
            super.throwUnboundLocalError('loadAssociatedTaskTables', 'linkedTask.bireTaskDTO');
          }
        });
      } else {
        super.throwUnboundLocalError(
          'loadAssociatedTasksTables',
          `result.superiorTasks &&
           result.taskTreeNode &&
           result.anteriorInSequence &&
           result.posteriorInSequence &&
           result.linkedTasks`
        );
      }
    });
    this.superiorTableDataSource.setData(this.superiorTableDataSource.dataSrc);
    this.linkedTaskTableDataSource.setData(this.linkedTaskTableDataSource.dataSrc);

    // Adding object status if necessary
    if (!!this.task.taskStatus && !this.getLabelValueByValue(this.propertyStatus, this.task.taskStatus)) {
      const currentState = this.getLabelValueByValue(this.propertyObjectStatus, this.task.taskStatus);
      if (currentState) {
        this.taskStatus.unshift(currentState);
        this.updateWorkflowStatusList();
      }
    }
  }

  private getLabelValueByValue<T>(references: LabelValue<T>[], value: T): LabelValue<T> | undefined {
    return references.find((lv) => lv.value === value);
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.taskStatus,
      this.task.taskStatus
    );
  }

  private convertTaskTypeInTreeNode(node: TreeNode): void {
    LabelValueUtils.stringValueToLabel(node.data.bireTaskDTO, 'taskTypeCode', this.taskTypes);
    if (!!node.children && node.children.length > 0) {
      node.children.forEach((child) => this.convertTaskTypeInTreeNode(child));
    }
  }

  private setTaskInNodes(node: TreeNode): void {
    node.data.bireTaskDTO.task = `${node.data.bireTaskDTO.taskCode}-${node.data.bireTaskDTO.taskVersion}`;
    if (!!node.children && node.children.length > 0) {
      node.children.forEach((child) => this.setTaskInNodes(child));
    }
  }

  private loadEvolutionsTable(bireTaskDTOId: BireTaskDTOId) {
    this.taskFormService.findBireTaskEvolutionsByTask(bireTaskDTOId).subscribe((results) => {
      this.evolutionsTableDataSource.setData(
        ListUtils.orEmpty(results).map((result) => this.createEvolutionRow(result))
      );
      this.fillDesignationInEvolutionTable();
    });
    this.evolutionsTableDataSource.setData(this.evolutionsTableDataSource.dataSrc);
  }

  private loadItemsTable(bireTaskDTOId: BireTaskDTOId) {
    this.maintainedItemsTableDataSource.setData([]);
    this.maintainedItemsTableDataSource.isLoading = true;
    this.taskFormService.findBireTaskItemsWithItemByTask(bireTaskDTOId).subscribe((results) => {
      this.maintainedItemsTableDataSource.isLoading = false;
      this.maintainedItemsTableDataSource.setData(
        ListUtils.orEmpty(results).map((result) => this.createMaintainedItemRow(result))
      );
    });
  }

  private loadShopManualsTable(bireTaskDTOId: BireTaskDTOId) {
    this.taskFormService.findBireSmTasksByTask(bireTaskDTOId).subscribe(
      (results) => {
        this.shopManualsTableDataSource.setData(results || []);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindShopManuals'));
      }
    );
  }
  /**
   * loadMaintenanceProgramsTable() - This function is used to load Maintenance Program Table.
   * @param bireTaskDTOId - Current Task Id
   * @param bireTaskDTO - Current Task
   */
  private loadMaintenanceProgramsTable(bireTaskDTOId: BireTaskDTOId, bireTaskDTO: BireTaskDTO) {
    this.taskFormService.findBireMaintenanceProgramsByTask(bireTaskDTO).subscribe(
      (results) => {
        this.upgradeButtonVisibility(bireTaskDTOId, results);
        this.maintenanceProgramsTableDataSource.setData(results || []);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindMaintenancePrograms'));
      }
    );
  }

  private loadQualificationsTable(bireTaskDTO: BireTaskDTO) {
    this.taskFormService.findBireQualificationsBySearchCriteria(bireTaskDTO).subscribe(
      (results) => {
        if (results) {
          results.list.forEach((res) => {
            if (!!res.averageHourRate) {
              res.averageHourRate = `${res.averageHourRate} ${this.currency}`;
            }
          });
          this.qualificationsTableDataSource.setData(results.list || []);
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindQualifications'));
      }
    );
  }

  private loadTilTable(bireTaskDTO: BireTaskDTO) {
    this.taskFormService.findBireTilTasksByTask(bireTaskDTO).subscribe(
      (results) => {
        this.tilTableDataSource.setData(results || []);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindTilTasks'));
      }
    );
  }

  private loadDocumentsTable(bireTaskDTOId: BireTaskDTOId) {
    this.documentsTableDataSource.setData([]);
    this.documentsTableDataSource.isLoading = true;
    this.taskFormService.findBireDocumentsByTask(bireTaskDTOId).subscribe(
      (results) => {
        this.documentsTableDataSource.isLoading = false;
        this.documentsTableDataSource.setData(results || []);
        this.bireDocumentDisplayed = [];
        this.documentsTableDataSource.dataSrc.forEach((doc) => {
          LabelValueUtils.stringValueToLabel(doc, 'docCategory', this.documentCategories);
          this.bireDocumentDisplayed.push(this.getCustomDocumentRow(doc));
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindDocuments'));
      }
    );
  }

  private initOperationTableDataSource(): void {
    this.operationTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'opeSequenceNumber',
          translateKey: this.getTranslateKey('opeSequenceNumber'),
          width: '10%'
        },
        {
          field: 'ope',
          translateKey: this.getTranslateKey('ope'),
          width: '20%'
        },
        {
          field: 'opeVersion',
          translateKey: this.getTranslateKey('opeVersion'),
          width: '7.5%'
        },
        {
          field: 'opeDesignation',
          translateKey: this.getTranslateKey('opeDesignation'),
          width: '27.5%'
        },
        {
          field: 'opeDurationTime',
          translateKey: this.getTranslateKey('opeDurationTime'),
          width: '10%'
        },
        {
          field: 'opeManHour',
          translateKey: this.getTranslateKey('opeManHour'),
          width: '7.5%'
        },
        {
          field: 'opeQualification',
          translateKey: this.getTranslateKey('opeQualification'),
          width: '10%'
        },
        {
          field: 'opeCost',
          translateKey: this.getTranslateKey('opeCost'),
          width: '7.5%'
        }
      ],
      data: []
    });
  }
  private initEvolutionsTableDataSource(): void {
    this.evolutionsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'evolutionNumber',
          translateKey: this.getTranslateKey('evolutionNumber'),
          width: '20%'
        },
        {
          field: 'evolutionRevisionNumber',
          translateKey: this.getTranslateKey('evolutionRevisionNumber'),
          width: '20%'
        },
        {
          field: 'designation',
          translateKey: this.getTranslateKey('designation'),
          width: '40%'
        },
        {
          field: 'taskEvolutionTypeCode',
          translateKey: this.getTranslateKey('taskEvolutionTypeCode'),
          width: '20%'
        }
      ],
      data: []
    });
  }
  private initMaintainedItemsTableDataSource(): void {
    this.maintainedItemsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'familyVariant',
          translateKey: this.getTranslateKey('familyVariant'),
          width: '22.5%'
        },
        {
          field: 'item',
          translateKey: this.getTranslateKey('item'),
          width: '12.5%'
        },
        {
          field: 'designation',
          translateKey: this.getTranslateKey('designation'),
          width: '40%'
        },
        {
          field: 'versionNumber',
          translateKey: this.getTranslateKey('versionNumber'),
          width: '12.5%'
        },
        {
          field: 'linkType',
          translateKey: this.getTranslateKey('linkType'),
          width: '12.5%'
        }
      ],
      data: []
    });
    if (this.sessionService.isSpecificDassault) {
      this.maintainedItemsTableDataSource = new TableDataSource({
        allowMultiSelect: true,
        columns: [
          {
            field: 'familyVariant',
            translateKey: this.getTranslateKey('familyVariant'),
            width: '12%'
          },
          {
            field: 'item',
            translateKey: this.getTranslateKey('item'),
            width: '12%'
          },
          {
            field: 'designation',
            translateKey: this.getTranslateKey('designation'),
            width: '40%'
          },
          {
            field: 'versionNumber',
            translateKey: this.getTranslateKey('versionNumber'),
            width: '12%'
          },
          {
            field: 'linkType',
            translateKey: this.getTranslateKey('linkType'),
            width: '12%'
          },
          {
            field: 'field',
            translateKey: this.getTranslateKey('field'),
            width: '12%'
          }
        ],
        data: []
      });
    }
  }

  private initShopManualsTableDataSource(): void {
    this.shopManualsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '20%'
        },
        {
          field: 'taskDescription',
          translateKey: this.getTranslateKey('taskDescription'),
          width: '45%'
        },
        {
          field: 'smVersionStart',
          translateKey: this.getTranslateKey('smVersionStart'),
          width: '17.5%'
        },
        {
          field: 'smVersionEnd',
          translateKey: this.getTranslateKey('smVersionEnd'),
          width: '17.5%'
        }
      ],
      data: []
    });
  }

  private initMaintenanceProgramsTableDataSource(): void {
    this.maintenanceProgramsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'programCode',
          translateKey: this.getTranslateKey('programCode'),
          width: '17.5%'
        },
        {
          field: 'programName',
          translateKey: this.getTranslateKey('programName'),
          width: '17.5%'
        },
        {
          field: 'programRevisionNumber',
          translateKey: this.getTranslateKey('programRevisionNumber'),
          width: '17.5%'
        },
        {
          field: 'programDesignation',
          translateKey: this.getTranslateKey('programDesignation'),
          width: '17.5%'
        },
        {
          field: 'reference',
          translateKey: this.getTranslateKey('reference'),
          width: '15%'
        },
        {
          field: 'periodicity',
          translateKey: this.getTranslateKey('periodicity'),
          width: '15%'
        }
      ],
      data: []
    });
  }

  private initQualificationsTableDataSource(): void {
    this.qualificationsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'qualificationCode',
          translateKey: this.getTranslateKey('qualificationCode'),
          width: '10%'
        },
        {
          field: 'qualificationName',
          translateKey: this.getTranslateKey('qualificationName'),
          width: '20%'
        },
        {
          field: 'qualificationDescription',
          translateKey: this.getTranslateKey('qualificationDescription'),
          width: '50%'
        },
        {
          field: 'averageHourRate',
          translateKey: this.getTranslateKey('averageHourRate'),
          width: '20%'
        }
      ],
      data: []
    });
  }

  private initTilTableDataSource(): void {
    this.tilTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'tilName',
          translateKey: this.getTranslateKey('tilName'),
          width: '25%'
        },
        {
          field: 'tilDescription',
          translateKey: this.getTranslateKey('tilDescription'),
          width: '75%'
        }
      ],
      data: []
    });
  }

  private initDocumentsTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName'),
          width: '37.5%'
        },
        {
          field: 'docCategory',
          translateKey: this.getTranslateKey('docCategory'),
          width: '10.5%'
        },
        {
          field: 'docSource',
          translateKey: this.getTranslateKey('docSource'),
          width: '20.5%'
        },
        {
          field: 'docExtension',
          translateKey: this.getTranslateKey('docExtension'),
          width: '10.5%'
        },
        {
          field: 'docSize',
          translateKey: this.getTranslateKey('docSize'),
          width: '10.5%'
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate'),
          width: '10.5%'
        }
      ],
      data: []
    });
  }

  private initMeasurementPointsTableDataSource(): void {
    this.measurementPointsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'counterCode',
          translateKey: this.getTranslateKey('measureCode'),
          width: '10%'
        },
        {
          field: 'counterRemarks',
          translateKey: this.getTranslateKey('mpTitle'),
          width: '10%'
        },
        {
          field: 'description',
          translateKey: this.getTranslateKey('mpDescription'),
          width: '30%'
        },
        {
          field: 'unitCode',
          translateKey: this.getTranslateKey('unit'),
          width: '10%'
        },
        {
          field: 'toolPartNumber',
          translateKey: this.getTranslateKey('tool'),
          width: '10%'
        },
        {
          field: 'formula',
          translateKey: this.getTranslateKey('formula'),
          width: '10%'
        },
        {
          field: 'sequenceNumber',
          translateKey: this.getTranslateKey('sequence'),
          width: '10%'
        },
        {
          field: 'groupCode',
          translateKey: this.getTranslateKey('mpGroup'),
          width: '10%'
        }
      ],
      data: []
    });
  }

  private initSuperiorTableDataSource(): void {
    this.superiorTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '20%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          width: '7.5%'
        },
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          width: '47.5%'
        },
        {
          field: 'groupCode',
          translateKey: this.getTranslateKey('groupCode'),
          width: '12.5%'
        },
        {
          field: 'taskTypeCode',
          translateKey: this.getTranslateKey('taskTypeCode'),
          width: '12.5%'
        }
      ],
      data: []
    });
  }

  private initAnteriorTaskTableDataSource(): void {
    this.anteriorTaskTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '20%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          width: '7.5%'
        },
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          width: '37.5%'
        },
        {
          field: 'groupCode',
          translateKey: this.getTranslateKey('groupCode'),
          width: '12.5%'
        },
        {
          field: 'taskTypeCode',
          translateKey: this.getTranslateKey('taskTypeCode'),
          width: '12.5%'
        },
        {
          field: 'sequenceNumber',
          translateKey: this.getTranslateKey('sequenceNumber'),
          width: '10%'
        }
      ],
      data: []
    });
  }

  private initPosteriorTaskTableDataSource(): void {
    this.posteriorTaskTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '20%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          width: '7.5%'
        },
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          width: '37.5%'
        },
        {
          field: 'groupCode',
          translateKey: this.getTranslateKey('groupCode'),
          width: '12.5%'
        },
        {
          field: 'taskTypeCode',
          translateKey: this.getTranslateKey('taskTypeCode'),
          width: '12.5%'
        },
        {
          field: 'sequenceNumber',
          translateKey: this.getTranslateKey('sequenceNumber'),
          width: '10%'
        }
      ],
      data: []
    });
  }

  private initLinkedTaskTableDataSource(): void {
    this.linkedTaskTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '20%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          width: '7.5%'
        },
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          width: '35%'
        },
        {
          field: 'taskGroup',
          translateKey: this.getTranslateKey('taskGroup'),
          width: '12.5%'
        },
        {
          field: 'taskType',
          translateKey: this.getTranslateKey('taskType'),
          width: '12.5%'
        },
        {
          field: 'linkType',
          translateKey: this.getTranslateKey('linkType'),
          width: '12.5%'
        }
      ],
      data: []
    });
  }

  private setTableCols(): void {
    this.topDownTaskStructureTableCols = [
      { field: 'taskCode', alignment: 'left', width: '20%' },
      { field: 'taskVersion', alignment: 'left', width: '7.5%' },
      { field: 'taskDesignation', alignment: 'left', width: '37.5%' },
      { field: 'groupCode', alignment: 'left', width: '12.5%' },
      { field: 'taskTypeCode', alignment: 'left', width: '12.5%' },
      { field: 'sequenceNumber', alignment: 'right', width: '10%' }
    ];
  }

  private loadMROCenter(): void {
    this.taskSearchService.findMROCenter().subscribe(
      (results) => {
        this.mroCenters = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorONGetMROCenter'));
      }
    );
  }

  private loadTaskType(): void {
    this.propertiesService.getValue('getTaskTypeMap').subscribe(
      (results) => {
        this.taskTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetTaskTypes'));
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

  private loadStatus(): void {
    this.propertiesService.getValue('getFuncObjectStatusMap').subscribe(
      (results) => {
        this.statuses = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetStatuses'));
      }
    );

    this.taskFormService.getFuncObjectStatusMap().subscribe((results) => {
      this.propertyStatus = results;
      this.taskStatus = [...results];
      this.updateWorkflowStatusList();
    });

    this.taskFormService.getObjectStatusMap().subscribe(
      (results) => {
        this.propertyObjectStatus = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetObjectStatus'));
      }
    );
  }

  private loadApplicability(): void {
    this.propertiesService.getValue('getTaskApplicabilityCodeMap').subscribe(
      (results) => {
        this.applicabilities = results || [];
        this.task.taskApplicabilityCode = results[0].value;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetApplicabilities'));
      }
    );
  }

  private loadTaskGroup(): void {
    this.taskSearchService.getTaskGroups().subscribe(
      (results) => {
        this.taskGroups = results.filter((taskGroup) => taskGroup.value != undefined) || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTaskGroups'));
      }
    );
  }

  private loadLinkTypes(): void {
    this.propertiesService.getValue('getTaskEvolutionTypeMap').subscribe(
      (results) => {
        this.evolutionLinkTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
      }
    );

    this.propertiesService.getValue('getTaskItemTypeMap').subscribe(
      (results) => {
        this.itemLinkTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
      }
    );
  }

  private loadAssociatedTaskLinkTypes(): void {
    this.propertiesService.getValue('getTaskLinkMap').subscribe(
      (results) => {
        if (this.translateService.currentLang === 'en') {
          const linkType: LabelValue<string> = {
            label: 'Download Structure',
            value: '7'
          };
          results.push(linkType);
        } else {
          const linkType: LabelValue<string> = {
            label: 'Structure descendante',
            value: '7'
          };
          results.push(linkType);
        }
        this.associatedLinkTypes = results || [];
        this.superior = this.associatedLinkTypes.filter((type) => type.value === '3');
        this.topDown = this.associatedLinkTypes.filter((type) => type.value === '7');
        this.anterior = this.associatedLinkTypes.filter((type) => type.value === '1');
        this.posterior = this.associatedLinkTypes.filter((type) => type.value === '2');
        this.linked = this.associatedLinkTypes.filter(
          (type) => type.value === '4' || type.value === '5' || type.value === '6'
        );
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
      }
    );
  }

  private loadStructureTypes(): void {
    this.propertiesService.getValue('getStructureTypeMap').subscribe(
      (results) => {
        this.structureType = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadStructureType'));
      }
    );
  }

  /*************************************************************************
   * Task Fields tab
   *************************************************************************/

  public openTaskFieldsTab(): void {
    this.currentTabId = this.tabTaskFieldsId;
  }

  /*************************************************************************
   * Task Card tab
   *************************************************************************/

  public openTaskCardTab(): void {
    this.currentTabId = this.tabTaskCardId;
    this.openStructureTab();
  }

  // Operation table

  public createOperation(): void {
    this.currentOperation = undefined;
    this.isReadOnlyOperationDialog = false;
    this.showOperationDialog = true;
  }

  public openOperation(): void {
    if (this.operationTableDataSource.dataSelectionCount === 1) {
      this.currentOperation = this.operationTableDataSource.dataSelection[0];
      this.currentOperationIndex = undefined;
      this.isReadOnlyOperationDialog = true;
      this.showOperationFormDialog = true;
    }
  }

  public openEditOperationDialog() {
    if (this.operationTableDataSource.dataSelectionCount === 1) {
      this.currentOperation = this.operationTableDataSource.dataSelection[0];
      this.currentOperationIndex = undefined;
      this.isReadOnlyOperationDialog = false;
      this.showOperationFormDialog = true;
    }
  }

  public openOperationForm(operation: BireOperationDTO): void {
    // open operation form when operation screen is ready
    if (!!operation && !!operation.opeCode && !!operation.opeVersion && !!operation.rangeCode) {
      const operationFormId: BireOperationDTOId = {
        opeCode: operation.opeCode,
        opeVersion: operation.opeVersion,
        rangeCode: operation.rangeCode
      };
      const labelKey = 'transaction.OperationFormComponent';
      const data: OperationTabData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.ENG_OPERATION_FORM,
        objectId: this.serializationService.serialize(operationFormId),
        openMode: ComponentOpenMode.Read,
        opeCode: operation.opeCode,
        opeVersion: operation.opeVersion,
        rangeCode: operation.rangeCode
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public deleteOperation(): void {
    const partialMessageKey =
      this.operationTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedOperations'
        : 'confirmDeleteSelectedOperation';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.operationTableDataSource.dataSelection.forEach((operation) => {
          if (!!operation.rangeCode && !!operation.opeCode && !!operation.opeVersion) {
            const operationId: BireOperationDTOId = {
              rangeCode: operation.rangeCode,
              opeCode: operation.opeCode,
              opeVersion: operation.opeVersion
            };
            const operationsAddedWithoutSelection = this.operationAdded.filter((operationAdded) => {
              return !DTOUtils.equalsBireOperationDTO(operation, operationAdded);
            });
            if (this.operationAdded.length !== operationsAddedWithoutSelection.length) {
              this.operationAdded = operationsAddedWithoutSelection;
            } else {
              this.operationRemoved.push(operationId);
            }
          } else {
            super.throwUnboundLocalError(
              'deleteOperation',
              'operation.rangeCode && operation.opeCode && operation.opeVersion'
            );
          }
        });

        this.operationTableDataSource.dataSrc.filter((operation) => {
          return !this.operationTableDataSource.dataSelection.some((selOperation) => {
            return DTOUtils.equalsBireOperationDTO(operation, selOperation);
          });
        });
        this.sortOperationTable();
        this.operationTableDataSource.deleteData(this.operationTableDataSource.dataSelection);
        this.operationTableDataSource.setData(this.operationTableDataSource.dataSrc);
        this.operationTableDataSource.dataSelection = [];
      }
    });
  }

  // Structure tab

  public openStructureTab(): void {
    this.currentSubTabId = this.tabStructureId;
  }

  // 1. Superior task table

  public createSuperiorTask(): void {
    this.currentSuperiorTask = undefined;
    this.isReadOnlySuperiorTasksDialog = false;
    this.showSuperiorTasksDialog = true;
  }

  public editSuperiorTask(): void {
    if (this.superiorTableDataSource.dataSelectionCount === 1) {
      this.currentSuperiorTaskIndex = this.superiorTableDataSource.dataSrc.findIndex((superior) => {
        return DTOUtils.equalsBireTaskDTO(superior, this.superiorTableDataSource.dataSelection[0]);
      });

      const selectedsuperior: BireTaskDTO = { ...this.superiorTableDataSource.dataSelection[0] };
      const inSuperiorTable = this.superiorTaskTable.filter(
        (superior) => superior.bireTaskDTO.taskCode === selectedsuperior.taskCode
      );
      const linkedSuperior: LinkedTaskDTO = {
        bireTaskDTO: selectedsuperior,
        linkType: undefined,
        sequenceNumber: inSuperiorTable[0].sequenceNumber
      };

      const superiorTask = this.superiorTaskTable.filter((task) => {
        if (!!task.bireTaskDTO) {
          DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedsuperior);
        }
      });

      if (superiorTask.length > 0 && superiorTask[0] !== null && superiorTask[0] !== undefined) {
        linkedSuperior.linkType = superiorTask[0].linkType;
        linkedSuperior.sequenceNumber = superiorTask[0].sequenceNumber;
      }

      this.currentSuperiorTask = { ...linkedSuperior };
      const taskType: LabelValue<string>[] = this.taskTypes.filter(
        (type) =>
          !!this.currentSuperiorTask &&
          !!this.currentSuperiorTask.bireTaskDTO &&
          type.label === this.currentSuperiorTask.bireTaskDTO.taskTypeCode
      );
      if (taskType[0]) {
        this.currentSuperiorTask.bireTaskDTO.taskTypeCode = taskType[0].value;
      }

      const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
        (group) =>
          !!this.currentSuperiorTask &&
          !!this.currentSuperiorTask.bireTaskDTO &&
          group.label === this.currentSuperiorTask.bireTaskDTO.groupCode
      );
      if (taskGroup[0]) {
        this.currentSuperiorTask.bireTaskDTO.groupCode = taskGroup[0].value;
      }
      this.isReadOnlySuperiorTasksDialog = false;
      this.showSuperiorTasksDialog = true;
      this.superiorTableDataSource.setData(this.superiorTableDataSource.dataSrc);
    }
  }

  public openSuperiorTask(): void {
    if (this.superiorTableDataSource.dataSelectionCount === 1) {
      const selectedsuperior: BireTaskDTO = { ...this.superiorTableDataSource.dataSelection[0] };
      const inSuperiorTable = this.superiorTaskTable.filter(
        (superior) => superior.bireTaskDTO.taskCode === selectedsuperior.taskCode
      );
      const linkedSuperior: LinkedTaskDTO = {
        bireTaskDTO: selectedsuperior,
        linkType: undefined,
        sequenceNumber: inSuperiorTable[0].sequenceNumber
      };
      const superiorTask = this.superiorTaskTable.filter((task) => {
        if (!!task.bireTaskDTO) {
          DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedsuperior);
        }
      });

      if (!!superiorTask && !!superiorTask[0]) {
        linkedSuperior.linkType = superiorTask[0].linkType;
        linkedSuperior.sequenceNumber = superiorTask[0].sequenceNumber;
      }

      this.currentSuperiorTask = { ...linkedSuperior };
      const taskType: LabelValue<string>[] = this.taskTypes.filter(
        (type) =>
          !!this.currentSuperiorTask &&
          !!this.currentSuperiorTask.bireTaskDTO &&
          type.label === this.currentSuperiorTask.bireTaskDTO.taskTypeCode
      );
      if (taskType[0]) {
        this.currentSuperiorTask.bireTaskDTO.taskTypeCode = taskType[0].value;
      }

      const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
        (group) =>
          !!this.currentSuperiorTask &&
          !!this.currentSuperiorTask.bireTaskDTO &&
          group.label === this.currentSuperiorTask.bireTaskDTO.groupCode
      );
      if (taskGroup[0]) {
        this.currentSuperiorTask.bireTaskDTO.groupCode = taskGroup[0].value;
      }

      this.isReadOnlySuperiorTasksDialog = true;
      this.showSuperiorTasksDialog = true;
    }
  }

  public openTaskForm(task: BireTaskDTO): void {
    const labelKey = 'transaction.TaskFormComponent';
    const taskId: BireTaskDTO = {
      taskCode: task.taskCode,
      taskVersion: task.taskVersion
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'TaskFormComponent',
      objectId: this.serializationService.serialize(taskId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public deleteSuperiorTask(): void {
    const partialMessageKey =
      this.selectedSuperiorTask.length > 1 ? 'confirmDeleteSelectedSuperiorTasks' : 'confirmDeleteSelectedSuperiorTask';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.superiorTableDataSource.dataSelection.forEach((task) => {
          if (
            !!task &&
            !!task.taskCode &&
            !!task.taskVersion &&
            !!this.task &&
            !!this.task.taskCode &&
            !!this.task.taskVersion
          ) {
            const temp: BireTaskTaskDTOId = {
              birTaskCode: task.taskCode,
              birTaskVersion: task.taskVersion,
              taskCode: this.task.taskCode,
              taskVersion: this.task.taskVersion
            };
            const tasksAddedWithoutSelection = this.bireTaskLinkAddedList.filter((taskAdded) => {
              return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
            });
            if (this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
              this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
            } else {
              this.bireTaskLinkDeletedList.push(temp);
            }
            this.superiorTableDataSource.setData(
              this.superiorTableDataSource.dataSrc.filter((element) => !DTOUtils.equalsBireTaskDTO(element, task))
            );
          } else {
            super.throwUnboundLocalError('deleteSuperiorTask', 'task && Task');
          }
        });
        this.superiorTableDataSource.dataSelection = [];
      }
    });
  }

  // 2. Top-down Tasks Structure table

  public onRowSelected(node: TreeNode): void {
    this.deactivePartialSelection(node);
    this.selectedTopDownNodesStore.push(node);
    this.selectedTopDownNodes = [...this.selectedTopDownNodesStore];
    this.topDownTreeTable = [...this.topDownTreeTable];
    this.topDownTreeTable[0].expanded = true;
    this.selectedTopDownNodes = [...this.selectedTopDownNodes];
  }

  public onRowUnSelected(node: TreeNode): void {
    this.deactivePartialSelection(node);
    this.selectedTopDownNodesStore = this.selectedTopDownNodesStore.filter((value) => value !== node);
    this.selectedTopDownNodes = [...this.selectedTopDownNodesStore];
    this.topDownTreeTable = [...this.topDownTreeTable];
    this.selectedTopDownNodes = [...this.selectedTopDownNodes];
  }

  private deactivePartialSelection(node: TreeNode): void {
    if (node.parent != undefined) {
      node.parent.partialSelected = false;
      this.deactivePartialSelection(node.parent);
    }
  }

  public createTopDownTask(): void {
    this.currentTopDownTask = undefined;
    this.newQualification = true;
    this.isReadOnlyTopDownTasksDialog = false;
    this.showTopDownTasksDialog = true;
  }

  public editTopDownTask(): void {
    if (this.selectedTopDownNodes.length === 1) {
      this.newQualification = false;
      this.currentTopDownTask = { ...this.selectedTopDownNodes[0].data };
      if (!!this.currentTopDownTask) {
        const bTaskDTO = { ...this.currentTopDownTask.bireTaskDTO };
        LabelValueUtils.labelToStringValue(bTaskDTO, 'taskTypeCode', this.taskTypes);
        this.currentTopDownTask.bireTaskDTO = bTaskDTO;
        this.currentTopDownTask.linkType = '3';
        if (!ObjectUtils.isDefined(this.selectedTopDownNodes[0].parent)) {
          this.currentTopDownTask.linkType = TaskFormComponent.TASK_LINK_CODE_SELF;
        }
        this.isReadOnlyTopDownTasksDialog = false;
        this.showTopDownTasksDialog = true;
      } else {
        super.throwUnboundLocalError('editTopDownTask', 'this.currentTopDownTask');
      }
    }
  }

  public openTopDownTask(): void {
    if (this.selectedTopDownNodes.length === 1) {
      this.currentTopDownTask = { ...this.selectedTopDownNodes[0].data };
      if (!!this.currentTopDownTask) {
        const bTaskDTO = { ...this.currentTopDownTask.bireTaskDTO };
        LabelValueUtils.labelToStringValue(bTaskDTO, 'taskTypeCode', this.taskTypes);
        this.currentTopDownTask.bireTaskDTO = bTaskDTO;
        this.currentTopDownTask.linkType = '3';
        this.isReadOnlyTopDownTasksDialog = true;
        this.showTopDownTasksDialog = true;
      } else {
        super.throwUnboundLocalError('openTopDownTask', 'this.currentTopDownTask');
      }
    }
  }

  public deleteTopDownTask(): void {
    const partialMessageKey =
      this.selectedTopDownNodes.length > 1 ? 'confirmDeleteSelectedTopDownTasks' : 'confirmDeleteSelectedTopDownTask';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        if (!!this.selectedTopDownNodes) {
          const selectedNode: TreeNode = this.selectedTopDownNodes[0];
          if (!!selectedNode.parent) {
            const parentOfSelectedNode: TreeNode = selectedNode.parent;
            let siblingsOfSelectedNode = parentOfSelectedNode.children;
            const inAddedList = this.bireTaskLinkAddedList.some(
              (task) => task.birTaskCode === this.selectedTopDownNodes[0].data.bireTaskDTO.taskCode
            );
            if (inAddedList) {
              this.bireTaskLinkAddedList = this.bireTaskLinkAddedList.filter(
                (task) => task.birTaskCode !== this.selectedTopDownNodes[0].data.bireTaskDTO.taskCode
              );
            }
            siblingsOfSelectedNode =
              siblingsOfSelectedNode &&
              siblingsOfSelectedNode.filter(
                (sibling) => sibling.data.bireTaskDTO.taskCode !== selectedNode.data.bireTaskDTO.taskCode
              );
            const taskTaskId: BireTaskTaskDTOId = {
              birTaskCode: selectedNode.data.bireTaskDTO.taskCode,
              birTaskVersion: selectedNode.data.bireTaskDTO.taskVersion,
              taskCode: selectedNode.parent.data.bireTaskDTO.taskCode,
              taskVersion: selectedNode.parent.data.bireTaskDTO.taskVersion
            };

            this.bireTaskLinkDeletedList.push(taskTaskId);

            parentOfSelectedNode.children = siblingsOfSelectedNode;
            selectedNode.parent = parentOfSelectedNode;
            this.selectedTopDownNodes = [];
            this.selectedTopDownNodesStore = [];
            this.topDownTreeTable = [...this.topDownTreeTable];
            this.topDownTreeTable[0].expanded = true;
          }
        }
      }
    });
  }

  // Other links tab

  public openOtherLinksTab(): void {
    this.currentSubTabId = this.tabOtherLinksId;
  }

  // 1. Anterior table

  public createAnterior(): void {
    this.currentAnterior = undefined;
    this.isReadOnlyAnteriorDialog = false;
    this.showAnteriorTasksDialog = true;
  }

  public editAnterior(): void {
    if (this.anteriorTaskTableDataSource.dataSelectionCount === 1) {
      this.currentAnteriorIndex = this.anteriorTaskTableDataSource.dataSrc.findIndex((anterior) => {
        return DTOUtils.equalsBireTaskDTO(anterior, this.anteriorTaskTableDataSource.dataSelection[0]);
      });
      const selectedAnterior: BireTaskDTO = { ...this.anteriorTaskTableDataSource.dataSelection[0] };
      const inAnteriorTable = this.anteriorTable.filter(
        (anterior) => anterior.bireTaskDTO.taskCode === selectedAnterior.taskCode
      );
      const linkedAnterior: LinkedTaskDTO = {
        bireTaskDTO: selectedAnterior,
        linkType: undefined,
        sequenceNumber: inAnteriorTable[0].sequenceNumber
      };

      const anteriorTask = this.anteriorTable.filter((task) => {
        if (!!task.bireTaskDTO) {
          DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedAnterior);
        }
      });

      if (!!anteriorTask && !!anteriorTask[0]) {
        linkedAnterior.linkType = anteriorTask[0].linkType;
        linkedAnterior.sequenceNumber = anteriorTask[0].sequenceNumber;
      }

      this.currentAnterior = { ...linkedAnterior };
      const taskType: LabelValue<string>[] = this.taskTypes.filter(
        (type) =>
          !!this.currentAnterior &&
          !!this.currentAnterior.bireTaskDTO &&
          type.label === this.currentAnterior.bireTaskDTO.taskTypeCode
      );
      if (taskType[0]) {
        this.currentAnterior.bireTaskDTO.taskTypeCode = taskType[0].value;
      }

      const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
        (group) =>
          !!this.currentAnterior &&
          !!this.currentAnterior.bireTaskDTO &&
          group.label === this.currentAnterior.bireTaskDTO.groupCode
      );
      if (taskGroup[0]) {
        this.currentAnterior.bireTaskDTO.groupCode = taskGroup[0].value;
      }
      this.isReadOnlyAnteriorDialog = false;
      this.showAnteriorTasksDialog = true;
    }
  }

  public openAnterior(): void {
    if (this.anteriorTaskTableDataSource.dataSelectionCount === 1) {
      const selectedAnterior: BireTaskDTO = { ...this.anteriorTaskTableDataSource.dataSelection[0] };
      const inAnteriorTable = this.anteriorTable.filter(
        (anterior) => anterior.bireTaskDTO.taskCode === selectedAnterior.taskCode
      );
      const linkedAnterior: LinkedTaskDTO = {
        bireTaskDTO: selectedAnterior,
        linkType: undefined,
        sequenceNumber: inAnteriorTable[0].sequenceNumber
      };

      const anteriorTask = this.anteriorTable.filter((task) => {
        if (!!task.bireTaskDTO) {
          DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedAnterior);
        }
      });

      if (!!anteriorTask && !!anteriorTask[0]) {
        linkedAnterior.linkType = anteriorTask[0].linkType;
        linkedAnterior.sequenceNumber = anteriorTask[0].sequenceNumber;
      }

      this.currentAnterior = { ...linkedAnterior };
      const taskType: LabelValue<string>[] = this.taskTypes.filter(
        (type) =>
          !!this.currentAnterior &&
          !!this.currentAnterior.bireTaskDTO &&
          type.label === this.currentAnterior.bireTaskDTO.taskTypeCode
      );
      if (taskType[0]) {
        this.currentAnterior.bireTaskDTO.taskTypeCode = taskType[0].value;
      }

      const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
        (group) =>
          !!this.currentAnterior &&
          !!this.currentAnterior.bireTaskDTO &&
          group.label === this.currentAnterior.bireTaskDTO.groupCode
      );
      if (taskGroup[0]) {
        this.currentAnterior.bireTaskDTO.groupCode = taskGroup[0].value;
      }
      this.isReadOnlyAnteriorDialog = true;
      this.showAnteriorTasksDialog = true;
    }
  }

  private getLinkTaskByTask(
    linkedTaskTable: LinkedTaskDTO[],
    selectedAnterior: BireTaskDTO
  ): LinkedTaskDTO | undefined {
    return linkedTaskTable.find(
      (task) => !!task.bireTaskDTO && DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedAnterior)
    );
  }

  public deleteAnterior(): void {
    const partialMessageKey =
      this.selectedAnterior.length > 1 ? 'confirmDeleteSelectedAnteriors' : 'confirmDeleteSelectedAnterior';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.anteriorTaskTableDataSource.dataSelection.forEach((task) => {
          if (
            !!task &&
            !!this.task &&
            !!task.taskCode &&
            !!task.taskVersion &&
            !!this.task.taskCode &&
            !!this.task.taskVersion
          ) {
            let temp: BireTaskTaskDTOId = {
              birTaskCode: task.taskCode,
              birTaskVersion: task.taskVersion,
              taskCode: this.task.taskCode,
              taskVersion: this.task.taskVersion
            };
            const anteriorTask = this.getLinkTaskByTask(this.anteriorTable, task);
            if (anteriorTask && anteriorTask.linkedTaskMain) {
              temp = {
                birTaskCode: this.task.taskCode,
                birTaskVersion: this.task.taskVersion,
                taskCode: task.taskCode,
                taskVersion: task.taskVersion
              };
            }

            const tasksAddedWithoutSelection = this.bireTaskLinkAddedList.filter((taskAdded) => {
              return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
            });
            if (this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
              this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
            } else {
              this.bireTaskLinkDeletedList.push(temp);
            }
            this.anteriorTaskTableDataSource.setData(
              this.anteriorTaskTableDataSource.dataSrc.filter((element) => !DTOUtils.equalsBireTaskDTO(element, task))
            );
          } else {
            super.throwUnboundLocalError('deleteAnterior', 'task && this.task');
          }
        });
        this.anteriorTaskTableDataSource.dataSelection = [];
      }
    });
  }

  // 2. Posterior table

  public createPosterior(): void {
    this.currentPosterior = undefined;
    this.isReadOnlyPosteriorDialog = false;
    this.showPosteriorDialog = true;
  }

  public editPosterior(): void {
    if (this.posteriorTaskTableDataSource.dataSelectionCount === 1) {
      this.currentPosteriorIndex = this.posteriorTaskTableDataSource.dataSrc.findIndex((posterior) => {
        return DTOUtils.equalsBireTaskDTO(posterior, this.posteriorTaskTableDataSource.dataSelection[0]);
      });
      const selectedPosterior: BireTaskDTO = { ...this.posteriorTaskTableDataSource.dataSelection[0] };
      const inPosteriorTable = this.posteriorTable.filter(
        (posterior) => posterior.bireTaskDTO.taskCode === selectedPosterior.taskCode
      );
      const linkedPosterior: LinkedTaskDTO = {
        bireTaskDTO: selectedPosterior,
        linkType: undefined,
        sequenceNumber: inPosteriorTable[0].sequenceNumber
      };

      const posteriorTask = this.posteriorTable.filter((task) => {
        if (!!task.bireTaskDTO) {
          DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedPosterior);
        }
      });

      if (!!posteriorTask && !!posteriorTask[0]) {
        linkedPosterior.linkType = posteriorTask[0].linkType;
        linkedPosterior.sequenceNumber = posteriorTask[0].sequenceNumber;
      }

      this.currentPosterior = { ...linkedPosterior };

      const taskType: LabelValue<string>[] = this.taskTypes.filter(
        (type) =>
          !!this.currentPosterior &&
          !!this.currentPosterior.bireTaskDTO &&
          type.label === this.currentPosterior.bireTaskDTO.taskTypeCode
      );
      if (taskType[0]) {
        this.currentPosterior.bireTaskDTO.taskTypeCode = taskType[0].value;
      }

      const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
        (group) =>
          !!this.currentPosterior &&
          !!this.currentPosterior.bireTaskDTO &&
          group.label === this.currentPosterior.bireTaskDTO.groupCode
      );
      if (taskGroup[0]) {
        this.currentPosterior.bireTaskDTO.groupCode = taskGroup[0].value;
      }
      this.isReadOnlyPosteriorDialog = false;
      this.showPosteriorDialog = true;
      this.posteriorTaskTableDataSource.setData(this.posteriorTaskTableDataSource.dataSrc);
    }
  }

  public openPosterior(): void {
    if (this.posteriorTaskTableDataSource.dataSelectionCount === 1) {
      const selectedPosterior: BireTaskDTO = { ...this.posteriorTaskTableDataSource.dataSelection[0] };
      const inPosteriorTable = this.posteriorTable.filter(
        (posterior) => posterior.bireTaskDTO.taskCode === selectedPosterior.taskCode
      );
      const linkedPosterior: LinkedTaskDTO = {
        bireTaskDTO: selectedPosterior,
        linkType: undefined,
        sequenceNumber: inPosteriorTable[0].sequenceNumber
      };

      if (!!linkedPosterior && !!linkedPosterior[0]) {
        linkedPosterior.linkType = linkedPosterior[0].linkType;
        linkedPosterior.sequenceNumber = linkedPosterior[0].sequenceNumber;
      }

      this.currentPosterior = { ...linkedPosterior };
      const taskType: LabelValue<string>[] = this.taskTypes.filter(
        (type) =>
          !!this.currentPosterior &&
          !!this.currentPosterior.bireTaskDTO &&
          type.label === this.currentPosterior.bireTaskDTO.taskTypeCode
      );
      if (taskType[0]) {
        this.currentPosterior.bireTaskDTO.taskTypeCode = taskType[0].value;
      }

      const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
        (group) =>
          !!this.currentPosterior &&
          !!this.currentPosterior.bireTaskDTO &&
          group.label === this.currentPosterior.bireTaskDTO.groupCode
      );
      if (taskGroup[0]) {
        this.currentPosterior.bireTaskDTO.groupCode = taskGroup[0].value;
      }

      this.isReadOnlyPosteriorDialog = true;
      this.showPosteriorDialog = true;
    }
  }

  public deletePosterior(): void {
    const partialMessageKey =
      this.selectedPosterior.length > 1 ? 'confirmDeleteSelectedPosteriors' : 'confirmDeleteSelectedPosterior';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.posteriorTaskTableDataSource.dataSelection.forEach((task) => {
          if (
            !!task &&
            !!this.task &&
            !!task.taskCode &&
            !!task.taskVersion &&
            !!this.task.taskCode &&
            !!this.task.taskVersion
          ) {
            let temp: BireTaskTaskDTOId = {
              birTaskCode: task.taskCode,
              birTaskVersion: task.taskVersion,
              taskCode: this.task.taskCode,
              taskVersion: this.task.taskVersion
            };
            const posteriorTask = this.getLinkTaskByTask(this.posteriorTable, task);
            if (posteriorTask && posteriorTask.linkedTaskMain) {
              temp = {
                birTaskCode: this.task.taskCode,
                birTaskVersion: this.task.taskVersion,
                taskCode: task.taskCode,
                taskVersion: task.taskVersion
              };
            }

            const tasksAddedWithoutSelection = this.bireTaskLinkAddedList.filter((taskAdded) => {
              return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
            });
            if (this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
              this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
            } else {
              this.bireTaskLinkDeletedList.push(temp);
            }
            this.posteriorTaskTableDataSource.setData(
              this.posteriorTaskTableDataSource.dataSrc.filter((element) => !DTOUtils.equalsBireTaskDTO(element, task))
            );
          } else {
            super.throwUnboundLocalError('deletePosterior', 'task && this.task');
          }
        });
        this.posteriorTaskTableDataSource.dataSelection = [];
      }
    });
  }

  // 3. Linked Tasks table

  public createLinkedTasks(): void {
    this.currentLinkedTask = undefined;
    this.isReadOnlyLinkedTasksDialog = false;
    this.showLinkedTasksDialog = true;
  }

  public editLinkedTasks(): void {
    if (this.linkedTaskTableDataSource.dataSelectionCount === 1) {
      this.currentLinkedTaskIndex = this.linkedTaskTableDataSource.dataSrc.findIndex((linked) => {
        return DTOUtils.equalsBireTaskDTO(linked, this.linkedTaskTableDataSource.dataSelection[0]);
      });
      const selectedLinked: LinkedTasksTableDTO = { ...this.linkedTaskTableDataSource.dataSelection[0] };
      const inLinkedTable = this.linkedTasksTable.filter(
        (linked) => linked.bireTaskDTO.taskCode === selectedLinked.taskCode
      );
      const linkedLinked: LinkedTaskDTO = {
        bireTaskDTO: {
          taskCode: selectedLinked.taskCode,
          taskVersion: selectedLinked.taskVersion,
          taskDesignation: selectedLinked.taskDesignation,
          groupCode: selectedLinked.taskGroup,
          taskTypeCode: selectedLinked.taskType
        },
        linkType: selectedLinked.linkType,
        sequenceNumber: inLinkedTable[0].sequenceNumber
      };

      const linkedTask = this.linkedTasksTable.filter((task) => {
        if (!!task.bireTaskDTO) {
          DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedLinked);
        }
      });

      if (!!linkedTask && !!linkedTask[0]) {
        linkedLinked.sequenceNumber = linkedTask[0].sequenceNumber;
      }

      this.currentLinkedTask = { ...linkedLinked };

      if (this.currentLinkedTask.linkType) {
        const linkType: LabelValue<string>[] = this.associatedLinkTypes.filter(
          (type) => !!this.currentLinkedTask && type.label === this.currentLinkedTask.linkType
        );
        if (linkType[0]) {
          this.currentLinkedTask.linkType = linkType[0].value;
        }
      }

      if (!!this.currentLinkedTask.bireTaskDTO && this.currentLinkedTask.bireTaskDTO.taskTypeCode) {
        const taskType: LabelValue<string>[] = this.taskTypes.filter(
          (type) =>
            !!this.currentLinkedTask &&
            !!this.currentLinkedTask.bireTaskDTO &&
            type.label === this.currentLinkedTask.bireTaskDTO.taskTypeCode
        );
        if (taskType[0]) {
          this.currentLinkedTask.bireTaskDTO.taskTypeCode = taskType[0].value;
        }
      } else {
        super.throwUnboundLocalError('editLinkedTasks', 'this.currentLinkedTask && this.currentLinkedTask.bireTaskDTO');
      }

      if (!!this.currentLinkedTask.bireTaskDTO && this.currentLinkedTask.bireTaskDTO.groupCode) {
        const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
          (group) =>
            !!this.currentLinkedTask &&
            !!this.currentLinkedTask.bireTaskDTO &&
            group.label === this.currentLinkedTask.bireTaskDTO.groupCode
        );
        if (taskGroup[0]) {
          this.currentLinkedTask.bireTaskDTO.groupCode = taskGroup[0].value;
        }
      }
      this.isReadOnlyLinkedTasksDialog = false;
      this.showLinkedTasksDialog = true;
      this.linkedTaskTableDataSource.setData(this.linkedTaskTableDataSource.dataSrc);
    }
  }

  public openLinkedTasks(): void {
    if (this.linkedTaskTableDataSource.dataSelectionCount === 1) {
      const selectedLinked: LinkedTasksTableDTO = { ...this.linkedTaskTableDataSource.dataSelection[0] };
      const inLinkedTable = this.linkedTasksTable.filter(
        (linked) => linked.bireTaskDTO.taskCode === selectedLinked.taskCode
      );
      const linkedLinked: LinkedTaskDTO = {
        bireTaskDTO: {
          taskCode: selectedLinked.taskCode,
          taskVersion: selectedLinked.taskVersion,
          taskDesignation: selectedLinked.taskDesignation,
          groupCode: selectedLinked.taskGroup,
          taskTypeCode: selectedLinked.taskType
        },
        linkType: selectedLinked.linkType,
        sequenceNumber: inLinkedTable[0].sequenceNumber
      };

      const linkedTask = this.linkedTasksTable.filter((task) => {
        if (!!task.bireTaskDTO) {
          DTOUtils.equalsBireTaskDTO(task.bireTaskDTO, selectedLinked);
        }
      });

      if (!!linkedTask && !!linkedTask[0]) {
        linkedLinked.sequenceNumber = linkedTask[0].sequenceNumber;
      }

      this.currentLinkedTask = { ...linkedLinked };

      if (this.currentLinkedTask.linkType) {
        const linkType: LabelValue<string>[] = this.associatedLinkTypes.filter(
          (type) => !!this.currentLinkedTask && type.label === this.currentLinkedTask.linkType
        );
        if (linkType[0]) {
          this.currentLinkedTask.linkType = linkType[0].value;
        }
      }

      const taskType: LabelValue<string>[] = this.taskTypes.filter(
        (type) =>
          !!this.currentLinkedTask &&
          !!this.currentLinkedTask.bireTaskDTO &&
          type.label === this.currentLinkedTask.bireTaskDTO.taskTypeCode
      );
      if (taskType[0]) {
        this.currentLinkedTask.bireTaskDTO.taskTypeCode = taskType[0].value;
      }
      const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
        (group) =>
          !!this.currentLinkedTask &&
          !!this.currentLinkedTask.bireTaskDTO &&
          group.label === this.currentLinkedTask.bireTaskDTO.groupCode
      );
      if (taskGroup[0]) {
        this.currentLinkedTask.bireTaskDTO.groupCode = taskGroup[0].value;
      }
      this.isReadOnlyLinkedTasksDialog = true;
      this.showLinkedTasksDialog = true;
    }
  }

  public deleteLinkedTasks(): void {
    const partialMessageKey =
      this.selectedLinkedTasks.length > 1 ? 'confirmDeleteSelectedLinkedTasks' : 'confirmDeleteSelectedLinkedTask';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.linkedTaskTableDataSource.dataSelection.forEach((task) => {
          if (
            !!task &&
            !!this.task &&
            !!task.taskCode &&
            !!task.taskVersion &&
            !!this.task.taskCode &&
            !!this.task.taskVersion
          ) {
            const temp: BireTaskTaskDTOId = {
              taskCode: this.task.taskCode,
              taskVersion: this.task.taskVersion,
              birTaskCode: task.taskCode,
              birTaskVersion: task.taskVersion
            };
            const tasksAddedWithoutSelection = this.bireTaskLinkAddedList.filter((taskAdded) => {
              return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
            });
            if (this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
              this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
            } else {
              this.bireTaskLinkDeletedList.push(temp);
            }
            this.linkedTaskTableDataSource.setData(
              this.linkedTaskTableDataSource.dataSrc.filter((element) => !DTOUtils.equalsBireTaskDTO(element, task))
            );
          } else {
            super.throwUnboundLocalError('deleteLinkedTasks', 'task && this.task');
          }
        });
        this.linkedTaskTableDataSource.dataSelection = [];
      }
    });
  }

  /*************************************************************************
   * Impacts tab
   *************************************************************************/

  public openImpactsTab(): void {
    this.currentTabId = this.tabImpactsId;
  }

  // 1. Evolutions table

  public createEvolution(): void {
    this.currentEvolution = undefined;
    this.isReadOnlyEvolutionsDialog = false;
    this.showEvolutionsDialog = true;
  }

  public editEvolution(): void {
    if (this.evolutionsTableDataSource.dataSelectionCount === 1) {
      this.currentEvolutionIndex = this.evolutionsTableDataSource.dataSrc.findIndex((evolution) => {
        return DTOUtils.equalsBireTaskEvolutionDTO(evolution, this.evolutionsTableDataSource.dataSelection[0]);
      });

      this.currentEvolution = { ...this.evolutionsTableDataSource.dataSelection[0] };
      this.isReadOnlyEvolutionsDialog = false;
      this.showEvolutionsDialog = true;
    }
  }

  public openEvolution(): void {
    if (this.evolutionsTableDataSource.dataSelectionCount === 1) {
      this.currentEvolution = { ...this.evolutionsTableDataSource.dataSelection[0] };
      const evolutionLinkType: LabelValue<string>[] = this.evolutionLinkTypes.filter(
        (type) => !!this.currentEvolution && type.label === this.currentEvolution.taskEvolutionTypeCode
      );
      if (evolutionLinkType) {
        this.currentEvolution.taskEvolutionTypeCode = evolutionLinkType[0].value;
      }
      this.currentEvolutionIndex = undefined;
      this.isReadOnlyEvolutionsDialog = true;
      this.showEvolutionsDialog = true;
    }
  }

  public openEvolutionForm(evolution: BireTaskEvolutionDTO): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const evolutionId: BireEvolutionDTOId = {
      evolutionNumber: evolution.evolutionNumber,
      evolutionRevisionNumber: evolution.evolutionRevisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(evolutionId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public deleteEvolution(): void {
    const partialMessageKey =
      this.evolutionsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedEvolutions'
        : 'confirmDeleteSelectedEvolution';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.evolutionsTableDataSource.dataSelection.forEach((selectedEvolution) => {
          selectedEvolution._obj.taskCode = this.task.taskCode;
          selectedEvolution._obj.taskVersion = this.task.taskVersion;
          if (!!this.evolutionAdded) {
            const evolutionAddedWithoutSelection = this.evolutionAdded.filter((evolution) => {
              return !DTOUtils.equalsBireTaskEvolutionDTO(selectedEvolution, evolution);
            });
            if (this.evolutionAdded.length !== evolutionAddedWithoutSelection.length) {
              this.evolutionAdded = evolutionAddedWithoutSelection;
              if (
                !!selectedEvolution &&
                !!selectedEvolution.evolutionRevisionNumber &&
                !!selectedEvolution._obj.taskCode &&
                !!selectedEvolution._obj.evolutionNumber &&
                !!selectedEvolution._obj.taskVersion
              ) {
                const evolutionId: BireTaskEvolutionDTOId = {
                  evolutionRevisionNumber: selectedEvolution.evolutionRevisionNumber,
                  taskCode: selectedEvolution._obj.taskCode,
                  evolutionNumber: selectedEvolution._obj.evolutionNumber,
                  taskVersion: selectedEvolution._obj.taskVersion
                };
                this.evolutionRemoved.push(evolutionId);
              }
            } else {
              const isRemoved = this.evolutionAdded.some((evolution) => {
                return DTOUtils.equalsBireTaskEvolutionDTO(selectedEvolution, evolution);
              });
              if (
                !isRemoved &&
                !!selectedEvolution &&
                !!selectedEvolution.evolutionRevisionNumber &&
                !!selectedEvolution._obj.taskCode &&
                !!selectedEvolution._obj.evolutionNumber &&
                !!selectedEvolution._obj.taskVersion
              ) {
                const evolutionId: BireTaskEvolutionDTOId = {
                  evolutionRevisionNumber: selectedEvolution.evolutionRevisionNumber,
                  taskCode: selectedEvolution._obj.taskCode,
                  evolutionNumber: selectedEvolution._obj.evolutionNumber,
                  taskVersion: selectedEvolution._obj.taskVersion
                };
                this.evolutionRemoved.push(evolutionId);
              }
            }
          }
        });

        this.evolutionsTableDataSource.setData(
          this.evolutionsTableDataSource.dataSrc.filter((evolution) => {
            return !this.evolutionsTableDataSource.dataSelection.some((selectedEvolution) => {
              return DTOUtils.equalsBireTaskEvolutionDTO(evolution, selectedEvolution);
            });
          })
        );
        this.fillDesignationInEvolutionTable();

        this.evolutionsTableDataSource.dataSelection = [];
      }
    });
  }

  // 2. Maintained items table

  public createMaintainedItem(): void {
    this.currentMaintainedItem = undefined;
    this.isReadOnlyMaintainedItemsDialog = false;
    this.showMaintainedItemsDialog = true;
  }

  public editMaintainedItem(): void {
    if (this.maintainedItemsTableDataSource.dataSelectionCount === 1) {
      this.currentMaintainedItemIndex = this.maintainedItemsTableDataSource.dataSrc.findIndex((item) => {
        return DTOUtils.equalsBireTaskItemDTO(item, this.maintainedItemsTableDataSource.dataSelection[0]);
      });

      this.currentMaintainedItem = this.maintainedItemsTableDataSource.dataSelection[0];
      this.isReadOnlyMaintainedItemsDialog = false;
      this.showMaintainedItemsDialog = true;
    }
  }

  public openMaintainedItem(): void {
    if (this.maintainedItemsTableDataSource.dataSelectionCount === 1) {
      this.currentMaintainedItem = { ...this.maintainedItemsTableDataSource.dataSelection[0] };
      const structureType: LabelValue<string>[] = this.structureType.filter(
        (type) => !!this.currentMaintainedItem && type.label === this.currentMaintainedItem.structureType
      );
      const taskItemTypeCode: LabelValue<string>[] = this.itemLinkTypes.filter(
        (type) => !!this.currentMaintainedItem && type.label === this.currentMaintainedItem.taskItemTypeCode
      );
      if (structureType) {
        this.currentMaintainedItem.structureType = structureType[0].value;
      }
      if (taskItemTypeCode) {
        this.currentMaintainedItem.taskItemTypeCode = taskItemTypeCode[0].value;
      }
      this.currentMaintainedItemIndex = undefined;
      this.isReadOnlyMaintainedItemsDialog = true;
      this.showMaintainedItemsDialog = true;
    }
  }

  public deleteMaintainedItem(): void {
    const partialMessageKey =
      this.maintainedItemsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedMaintainedItems'
        : 'confirmDeleteSelectedMaintainedItem';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.maintainedItemsTableDataSource.dataSelection.forEach((selectedItem) => {
          const itemsAddedWithoutSelection = this.maintainedItemAdded.filter((item) => {
            return !DTOUtils.equalsBireTaskItemDTO(selectedItem, item);
          });
          if (this.maintainedItemAdded.length !== itemsAddedWithoutSelection.length) {
            this.maintainedItemAdded = itemsAddedWithoutSelection;
          } else {
            const isRemoved = this.maintainedItemAdded.some((item) => {
              return DTOUtils.equalsBireTaskItemDTO(selectedItem, item);
            });
            if (!isRemoved) {
              if (
                !!this.task &&
                !!this.task.taskCode &&
                !!this.task.taskVersion &&
                !!selectedItem &&
                !!selectedItem._obj.subject &&
                !!selectedItem._obj.versionNumber &&
                !!selectedItem._obj.chapter &&
                !!selectedItem._obj.structureType &&
                !!selectedItem._obj.variantCode &&
                !!selectedItem._obj.familyCode &&
                !!selectedItem._obj.marks &&
                !!selectedItem._obj.sheet &&
                !!selectedItem._obj.section &&
                !!selectedItem._obj.taskItemTypeCode
              ) {
                const itemId: BireTaskItemDTOId = {
                  taskCode: this.task.taskCode,
                  subject: selectedItem._obj.subject,
                  versionNumber: selectedItem._obj.versionNumber,
                  chapter: selectedItem._obj.chapter,
                  structureType: selectedItem._obj.structureType,
                  variantCode: selectedItem._obj.variantCode,
                  familyCode: selectedItem._obj.familyCode,
                  marks: selectedItem._obj.marks,
                  taskVersion: this.task.taskVersion,
                  sheet: selectedItem._obj.sheet,
                  section: selectedItem._obj.section,
                  taskItemTypeCode: selectedItem._obj.taskItemTypeCode
                };
                this.maintainedItemRemoved.push(itemId);
              }
            }
          }
        });

        this.maintainedItemsTableDataSource.setData(
          this.maintainedItemsTableDataSource.dataSrc.filter((maintainedItem) => {
            return !this.maintainedItemsTableDataSource.dataSelection.some((selectedItem) => {
              return DTOUtils.equalsBireTaskItemDTO(maintainedItem, selectedItem);
            });
          })
        );

        this.maintainedItemsTableDataSource.dataSelection = [];
      }
    });
  }

  /*************************************************************************
   * Manuals tab
   *************************************************************************/

  public openManualsTab(): void {
    this.currentTabId = this.tabManualsId;
  }

  // Maintenance program table
  public openMaintenancePrograms(): void {
    if (this.maintenanceProgramsTableDataSource.dataSelectionCount === 1) {
      // TODO open maintenance
    }
  }

  public openMaintenanceProgramsForm(maintenanceRow: GetMaintainanceProgramWithTaskDTO): void {
    // TODO open clicked maintenance program row
    const openMode: ComponentOpenMode = ComponentOpenMode.Read;
    if (!!maintenanceRow && !!maintenanceRow.programCode) {
      const birePlanDTOId: BireMaintenancePlanDTOId = {
        planCode: maintenanceRow.programCode
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM,
        openMode,
        objectId: this.serializationService.serialize(birePlanDTOId)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      super.throwUnboundLocalError('openMaintenanceProgramsForm', 'maintenanceRow');
    }
  }

  /*************************************************************************
   * Prerequisites tab
   *************************************************************************/

  public openPrerequisitesTab(): void {
    this.currentTabId = this.tabPrerequisitesId;
  }

  // 1. Qualifications tab

  public createQualification(): void {
    this.currentQualifications = undefined;
    this.isReadOnlyQualificationsDialog = false;
    this.showQualificationsDialog = true;
  }

  public editQualification(): void {
    if (this.qualificationsTableDataSource.dataSelectionCount === 1) {
      this.currentQualificationsIndex = this.qualificationsTableDataSource.dataSrc.findIndex((qualification) => {
        return DTOUtils.equalsBireQualificationDTO(qualification, this.qualificationsTableDataSource.dataSelection[0]);
      });
      this.currentQualifications = this.qualificationsTableDataSource.dataSelection[0];
      this.isReadOnlyQualificationsDialog = false;
      this.showQualificationsDialog = true;
    }
  }

  public openQualification(): void {
    if (this.qualificationsTableDataSource.dataSelectionCount === 1) {
      this.currentQualifications = this.qualificationsTableDataSource.dataSelection[0];
      this.currentQualificationsIndex = undefined;
      this.isReadOnlyQualificationsDialog = true;
      this.showQualificationsDialog = true;
    }
  }

  public deleteQualification(): void {
    const partialMessageKey =
      this.qualificationsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedQualifications'
        : 'confirmDeleteSelectedQualification';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.qualificationsTableDataSource.dataSelection.forEach((selectedQualification) => {
          if (
            !!this.task &&
            !!this.task.taskCode &&
            !!this.task.taskVersion &&
            !!selectedQualification &&
            !!selectedQualification.qualificationCode
          ) {
            const qualificationId: BireQualifTaskDTOId = {
              taskCode: this.task.taskCode,
              taskVersion: this.task.taskVersion,
              qualificationCode: selectedQualification.qualificationCode
            };
            const qualificationsAddedWithoutSelection = this.qualificationAdded.filter((addedQualification) => {
              return !DTOUtils.equalsBireQualificationDTO(selectedQualification, addedQualification);
            });
            if (this.qualificationAdded.length !== qualificationsAddedWithoutSelection.length) {
              this.qualificationAdded = qualificationsAddedWithoutSelection;
              this.qualificationRemoved.push(qualificationId);
            } else {
              const isRemoved = this.qualificationAdded.some((addedQualificaiton) => {
                return DTOUtils.equalsBireQualificationDTO(selectedQualification, addedQualificaiton);
              });
              if (!isRemoved) {
                this.qualificationRemoved.push(qualificationId);
              }
            }
          } else {
            super.throwUnboundLocalError('deleteQualification', 'selectedQualification');
          }
        });

        this.qualificationsTableDataSource.setData(
          this.qualificationsTableDataSource.dataSrc.filter((qualification) => {
            return !this.qualificationsTableDataSource.dataSelection.some((selectedQualification) => {
              return DTOUtils.equalsBireQualificationDTO(qualification, selectedQualification);
            });
          })
        );
        this.qualificationsTableDataSource.setData(this.qualificationsTableDataSource.dataSrc);
        this.qualificationsTableDataSource.dataSelection = [];
      }
    });
  }

  // 2. TILs tab

  public createTil(): void {
    this.currentTil = undefined;
    this.isReadOnlyTilDialog = false;
    this.showTilDialog = true;
    this.tilTableDataSource.setData(this.tilTableDataSource.dataSrc);
  }

  public editTil(): void {
    if (this.tilTableDataSource.dataSelectionCount === 1) {
      this.currentTilIndex = this.tilTableDataSource.dataSrc.findIndex((til) => {
        return DTOUtils.equalsBireTilTaskDTO(til, this.tilTableDataSource.dataSelection[0]);
      });
      this.currentTil = this.tilTableDataSource.dataSelection[0];
      this.isReadOnlyTilDialog = false;
      this.showTilDialog = true;
    }
  }

  public openTil(): void {
    if (this.tilTableDataSource.dataSelectionCount === 1) {
      this.currentTil = { ...this.tilTableDataSource.dataSelection[0] };
      this.currentTilIndex = undefined;
      this.isReadOnlyTilDialog = true;
      this.showTilDialog = true;
    }
  }

  private loadTechnicalLevels(): void {
    this.taskFormService.findAllBireTils().subscribe((results: BireTilDTO[]) => {
      results.forEach((result) => {
        if (!!result && !!result.tilName && !!result.technicalLevel && !!result.tilDescription) {
          this.tilName.push(result.tilName);

          this.technicalLevel.push(result.technicalLevel.toString());

          this.tilDescription.push(result.tilDescription);
        }
      });
    });
  }

  public deleteTil(): void {
    const partialMessageKey =
      this.tilTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedTils' : 'confirmDeleteSelectedTil';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.tilTableDataSource.dataSelection.forEach((tilSelected) => {
          const tillAddedWithoutSelection = this.tilAdded.filter((addedTil) => {
            return !DTOUtils.equalsBireTilTaskDTO(tilSelected, addedTil);
          });
          if (this.tilAdded.length !== tillAddedWithoutSelection.length) {
            this.tilAdded = tillAddedWithoutSelection;
            if (
              !!this.task &&
              !!this.task.taskCode &&
              !!this.task.taskVersion &&
              !!tilSelected &&
              tilSelected.technicalLevel !== null &&
              tilSelected.technicalLevel !== undefined
            ) {
              const tilId: BireTilTaskDTOId = {
                taskCode: this.task.taskCode,
                taskVersion: this.task.taskVersion,
                technicalLevel: tilSelected.technicalLevel
              };
              this.tilRemoved.push(tilId);
            }
          } else {
            const isRemoved = this.tilAdded.some((addedTil) => {
              return DTOUtils.equalsBireTilTaskDTO(tilSelected, addedTil);
            });
            if (!isRemoved) {
              if (
                !!this.task &&
                !!this.task.taskCode &&
                !!this.task.taskVersion &&
                !!tilSelected &&
                tilSelected.technicalLevel !== null &&
                tilSelected.technicalLevel !== undefined
              ) {
                const tilId: BireTilTaskDTOId = {
                  taskCode: this.task.taskCode,
                  taskVersion: this.task.taskVersion,
                  technicalLevel: tilSelected.technicalLevel
                };
                this.tilRemoved.push(tilId);
              }
            }
          }
        });

        this.tilTableDataSource.setData(
          this.tilTableDataSource.dataSrc.filter((til) => {
            return !this.tilTableDataSource.dataSelection.some((tilSelected) => {
              return DTOUtils.equalsBireTilTaskDTO(til, tilSelected);
            });
          })
        );
        this.tilTableDataSource.dataSelection = [];
      }
    });
  }

  /*************************************************************************
   * Documents tab
   *************************************************************************/

  public openDocumentsTab(): void {
    this.currentTabId = this.tabDocumentsId;
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.documentsTableDataSource.dataSelection.forEach((selectedDocument) => {
          const documentsAddedWithoutSelection = this.documentsAdded.filter((documentAdded) => {
            return !DTOUtils.equalsBireDocumentDTO(selectedDocument, documentAdded);
          });
          // list of added objects contains the selection
          if (this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.documentsAdded = documentsAddedWithoutSelection;
          } else {
            const isRemoved = this.documentsAdded.some((documentAdded) => {
              return DTOUtils.equalsBireDocumentDTO(selectedDocument, documentAdded);
            });
            if (!isRemoved && !!selectedDocument && !!selectedDocument.docCode) {
              const documentId: BireDocumentDTOId = { docCode: selectedDocument.docCode };
              this.documentsRemoved.push(documentId);
            }
          }
        });

        this.documentsTableDataSource.setData(
          this.documentsTableDataSource.dataSrc.filter((document) => {
            return !this.documentsTableDataSource.dataSelection.some((selectedDocument) => {
              return DTOUtils.equalsBireDocumentDTO(document, selectedDocument);
            });
          })
        );

        this.documentsTableDataSource.dataSelection = [];
      }
    });
  }

  private getCustomDocumentRow(newDocument: BireDocumentDTO): DocumentRow {
    return {
      _obj: newDocument,
      docCode: newDocument.docCode,
      docExtension: this.showDocExtension(newDocument),
      docCategory: newDocument.docCategory,
      docName: newDocument.docName,
      docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
      docSize: this.showDocSize(newDocument),
      docSource: newDocument.docSource
    };
  }

  public openUrl(url: string): void {
    UrlUtils.openUrl(url);
  }

  public validateUrl(url: string): boolean {
    return UrlUtils.validateUrl(url);
  }

  public addDocument(): void {
    this.currentDocumentIndex = -1;
    this.currentDocument = undefined;
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
    this.documentsTableDataSource.setData(this.documentsTableDataSource.dataSrc);
  }

  public editDocument(): void {
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = this.documentsTableDataSource.dataSrc.findIndex((document) => {
        return DTOUtils.equalsBireDocumentDTO(document, this.documentsTableDataSource.dataSelection[0]);
      });
      this.currentDocument = { ...this.documentsTableDataSource.dataSelection[0] };
      LabelValueUtils.labelToStringValue(this.currentDocument, 'docCategory', this.documentCategories);
      this.isReadOnlyDocumentDialog = false;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.currentDocument = { ...this.documentsTableDataSource.dataSelection[0] };
      LabelValueUtils.labelToStringValue(this.currentDocument, 'docCategory', this.documentCategories);
      this.currentDocumentIndex = undefined;
      this.isReadOnlyDocumentDialog = true;
      this.showDocumentDialog = true;
    }
  }

  public showDocExtension(document: BireDocumentDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  public showDocSize(document: BireDocumentDTO): string {
    return document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  /*************************************************************************
   * Attributes tab
   *************************************************************************/

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  public getBireAttributesForTask(): void {
    this.taskFormService.findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY).subscribe(
      (results) => {
        this.bireAttributesForTask.push(...results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
      }
    );
    this.taskFormService.findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_TASK_KEY).subscribe(
      (results) => {
        this.bireAttributesForTask.push(...results);
        setTimeout(() => {
          this.dynamicAttributesForTask = this.dynamicAttributesService.from(this.bireAttributesForTask);
          this.getBireTaskAttributes();
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
      }
    );
  }

  public getBireTaskAttributes(): void {
    this.taskFormService.findBireTaskAttributeByTask(this.task).subscribe(
      (results) => {
        this.bireTaskAttributes = results;
        this.dynamicAttributesService.setValues(this.dynamicAttributesForTask, this.bireTaskAttributes);

        this.dynamicAttributesForTask[0].attributes.forEach((result) => {
          if (result.type === DynamicAttributeType.Boolean) {
            this.isCritical = result.value as boolean;
          } else if (result.type === DynamicAttributeType.Text) {
            this.isCritical = result.value === 'true';
          }
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByTask'));
      }
    );
  }

  /*************************************************************************
   * Operations dialog
   *************************************************************************/

  public onAddOperation(operation: BireOperationDTO): void {
    if (operation) {
      const searchInDisplayedTable = this.operationTableDataSource.dataSrc.find(
        (value) =>
          value.opeCode === operation.opeCode &&
          value.rangeCode === operation.rangeCode &&
          value.opeDesignation === operation.opeDesignation
      );

      if (!searchInDisplayedTable) {
        operation.ope = `${operation.opeCode}-${operation.opeVersion}`;
        this.operationTableDataSource.setData([...this.operationTableDataSource.dataSrc, operation]);
        this.sortOperationTable();
        this.operationAdded.push(operation);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('operationExists'));
      }
    }
  }

  /*************************************************************************
   * Evolutions dialog
   *************************************************************************/

  public onAddEvolution(evolution: BireTaskEvolutionDTO): void {
    if (evolution) {
      const searchInDisplayedTable = this.evolutionsTableDataSource.dataSrc.find(
        (row) =>
          row._obj.evolutionNumber === evolution.evolutionNumber &&
          row._obj.evolutionRevisionNumber === evolution.evolutionRevisionNumber
      );

      if (!searchInDisplayedTable) {
        this.evolutionsTableDataSource.setData([
          ...this.evolutionsTableDataSource.dataSrc,
          this.createEvolutionRow(evolution)
        ]);
        this.fillDesignationInEvolutionTable();
        this.evolutionAdded.push(evolution);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('evolutionExists'));
      }
    }
  }

  /*************************************************************************
   * Maintained items dialog
   *************************************************************************/

  public onAddedMaintainedItem(item: BireTaskItemDTO): void {
    if (item) {
      const searchInDisplayedTable = this.maintainedItemsTableDataSource.dataSrc.find(
        (row) =>
          row._obj.familyCode === item.familyCode &&
          row._obj.structureType === item.structureType &&
          row._obj.variantCode === item.variantCode &&
          row._obj.chapter === item.chapter &&
          row._obj.section === item.section &&
          row._obj.subject === item.subject &&
          row._obj.sheet === item.sheet &&
          row._obj.marks === item.marks &&
          row._obj.versionNumber === item.versionNumber &&
          row._obj.taskItemTypeCode === item.taskItemTypeCode
      );

      if (!searchInDisplayedTable) {
        this.maintainedItemAdded = [...this.maintainedItemAdded, item];

        const input: BireItemDTOId = {
          familyCode: item.familyCode,
          chapter: StringUtils.orEmpty(item.chapter),
          subject: StringUtils.orEmpty(item.subject),
          variantCode: item.variantCode,
          section: StringUtils.orEmpty(item.section),
          sheet: StringUtils.orEmpty(item.sheet),
          marks: StringUtils.orEmpty(item.marks),
          structureType: StringUtils.orEmpty(item.structureType)
        };

        this.taskFormService.findBireItem(input).subscribe((result) => {
          const taskItemWithItem: BireTaskItemWithItemDTO = item as BireTaskItemWithItemDTO;
          taskItemWithItem.bireItemDTO = result;
          this.maintainedItemsTableDataSource.setData([
            ...this.maintainedItemsTableDataSource.dataSrc,
            this.createMaintainedItemRow(taskItemWithItem)
          ]);
        });
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('itemExists'));
      }
    }
  }

  /*************************************************************************
   * Qualifications dialog
   *************************************************************************/

  public onAddedQualification(qualification: BireQualificationDTO): void {
    if (qualification) {
      const searchInDisplayedTable = this.qualificationsTableDataSource.dataSrc.find(
        (value) =>
          value.qualificationCode === qualification.qualificationCode &&
          value.qualificationName === qualification.qualificationName &&
          value.qualificationDescription === qualification.qualificationDescription
      );

      if (!searchInDisplayedTable) {
        this.qualificationAdded.push(qualification);
        this.qualificationsTableDataSource.setData([...this.qualificationsTableDataSource.dataSrc, qualification]);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('qualificationExists'));
      }
    }
  }

  /*************************************************************************
   * Til dialog
   *************************************************************************/

  public onAddedTil(til: BireTilDTO): void {
    if (til) {
      const searchInDisplayedTable = this.tilTableDataSource.dataSrc.find(
        (value) =>
          value.technicalLevel === til.technicalLevel &&
          value.tilName === til.tilName &&
          value.tilDescription === til.tilDescription
      );

      const bireTilTask: BireTilTaskDTO = {
        technicalLevel: til.technicalLevel
      };

      if (!searchInDisplayedTable) {
        this.tilTableDataSource.addData([til]);
        this.tilAdded.push(bireTilTask);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('tilExists'));
      }
    }
  }

  /*************************************************************************
   * SuperiorTask dialog
   *************************************************************************/

  public onAssociatedSuperiorTask(output: BireTaskLinkPopupOutput): void {
    const isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;

    const inOtherAssociatedTaskTables =
      (!!this.topDownTreeTable[0].children &&
        this.topDownTreeTable[0].children.some(
          (topDownTask) => !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode
        )) ||
      this.anteriorTaskTableDataSource.dataSrc.some(
        (anteriorTask) => !!output.task && anteriorTask.taskCode === output.task.taskCode
      ) ||
      this.posteriorTaskTableDataSource.dataSrc.some(
        (posteriorTask) => !!output.task && posteriorTask.taskCode === output.task.taskCode
      ) ||
      this.linkedTaskTableDataSource.dataSrc.some(
        (linkedTask) => !!output.task && linkedTask.taskCode === output.task.taskCode
      );

    if (isParentTask) {
      this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
    }
    if (!inOtherAssociatedTaskTables && !isParentTask) {
      if (this.currentSuperiorTaskIndex !== null && this.currentSuperiorTaskIndex !== undefined) {
        const previousSuperiorTask: BireTaskDTO = this.superiorTableDataSource.dataSrc[this.currentSuperiorTaskIndex];
        if (
          !!output &&
          !!output.task &&
          !!output.taskTask &&
          DTOUtils.equalsBireTaskDTO(output.task, previousSuperiorTask)
        ) {
          this.superiorTaskTable[this.currentSuperiorTaskIndex].sequenceNumber = output.taskTask.sequenceNumber;
          const isInsideAddedList = this.bireTaskLinkAddedList.find(
            (element) =>
              !!output.taskTask &&
              element.birTaskCode === output.taskTask.birTaskCode &&
              element.birTaskVersion === output.taskTask.birTaskVersion &&
              element.taskCode === output.taskTask.taskCode &&
              element.taskVersion === output.taskTask.taskVersion
          );
          const isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(
            (element) =>
              !!output.taskTask &&
              element.birTaskCode === output.taskTask.birTaskCode &&
              element.birTaskVersion === output.taskTask.birTaskVersion &&
              element.taskCode === output.taskTask.taskCode &&
              element.taskVersion === output.taskTask.taskVersion
          );
          output.taskTask.birTaskCode = output.task.taskCode;
          output.taskTask.birTaskVersion = output.task.taskVersion;
          output.taskTask.taskCode = this.task.taskCode;
          output.taskTask.taskVersion = this.task.taskVersion;

          if (isInsideAddedList) {
            const index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
            this.bireTaskLinkAddedList[index] = output.taskTask;
          } else if (isInsideUpdatedList) {
            const index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
            this.bireTaskLinkUpdatedList[index] = output.taskTask;
          } else {
            this.bireTaskLinkUpdatedList.push(output.taskTask);
          }
          const temp: BireTaskDTO = { ...output.task };
          if (output.task.taskTypeCode) {
            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!output.task && type.value === output.task.taskTypeCode
            );
            if (taskType[0]) {
              temp.taskTypeCode = taskType[0].label;
            }
          }
          if (output.task.groupCode) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!output && !!output.task && group.value === output.task.groupCode
            );
            if (taskGroup[0]) {
              temp.groupCode = taskGroup[0].label;
            }
          }
          this.superiorTableDataSource.replaceData(
            this.superiorTableDataSource.dataSrc[this.currentSuperiorTaskIndex],
            temp
          );
        }
      } else {
        const searchInDisplayedTable = this.superiorTableDataSource.dataSrc.find(
          (value) =>
            !!output &&
            !!output.task &&
            value.taskCode === output.task.taskCode &&
            value.taskVersion === output.task.taskVersion
        );
        if (!searchInDisplayedTable) {
          if (output.task && output.taskTask) {
            const linkedOutput: LinkedTaskDTO = {
              bireTaskDTO: output.task,
              linkType: output.taskTask.taskLinkCode,
              sequenceNumber: output.taskTask.sequenceNumber
            };
            const temp: LinkedTaskDTO = { ...linkedOutput };
            if (!!temp && !!temp.bireTaskDTO) {
              if (output.task.taskTypeCode) {
                const taskType: LabelValue<string>[] = this.taskTypes.filter(
                  (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
                );
                if (!!temp && !!temp.bireTaskDTO && taskType[0]) {
                  temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                } else {
                  super.throwUnboundLocalError('onAssociatedSuperiorTask', 'temp && temp.bireTaskDTO');
                }
              }
              if (output.task.groupCode) {
                const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
                  (group) => !!output && !!output.task && group.value === output.task.groupCode
                );
                if (!!temp && !!temp.bireTaskDTO && taskGroup[0]) {
                  temp.bireTaskDTO.groupCode = taskGroup[0].label;
                } else {
                  super.throwUnboundLocalError('onAssociatedSuperiorTask', 'temp && temp.bireTaskDTO');
                }
              }
              this.superiorTaskTable.push(temp);
              this.superiorTableDataSource.addData([temp.bireTaskDTO]);
              output.taskTask.birTaskCode = output.task.taskCode;
              output.taskTask.birTaskVersion = output.task.taskVersion;
              output.taskTask.taskCode = this.task.taskCode;
              output.taskTask.taskVersion = this.task.taskVersion;

              this.bireTaskLinkAddedList.push(output.taskTask);
            } else {
              super.throwUnboundLocalError('onAssociatedSuperiorTask', 'temp && temp.bireTaskDTO');
            }
          }
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('superiorAlreadyExists'));
        }
      }

      this.currentSuperiorTaskIndex = undefined;
      this.superiorTableDataSource.setData(this.superiorTableDataSource.dataSrc);
      this.superiorTableDataSource.dataSelection = [];
    }
  }

  /*************************************************************************
   * TopDownTask dialog
   *************************************************************************/

  public onAssociatedTopDownTask(output: BireTaskLinkPopupOutput): void {
    const isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;

    const inOtherAssociatedTaskTables =
      this.superiorTableDataSource.dataSrc.some(
        (superiorTask) => !!output.task && superiorTask.taskCode === output.task.taskCode
      ) ||
      this.anteriorTaskTableDataSource.dataSrc.some(
        (anteriorTask) => !!output.task && anteriorTask.taskCode === output.task.taskCode
      ) ||
      this.posteriorTaskTableDataSource.dataSrc.some(
        (posteriorTask) => !!output.task && posteriorTask.taskCode === output.task.taskCode
      ) ||
      this.linkedTaskTableDataSource.dataSrc.some(
        (linkedTask) => !!output.task && linkedTask.taskCode === output.task.taskCode
      );

    const isSelfLink =
      this.currentTopDownTask && this.currentTopDownTask.linkType === TaskFormComponent.TASK_LINK_CODE_SELF;

    if (isParentTask && !isSelfLink) {
      this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
    } else if (!inOtherAssociatedTaskTables) {
      if (!!output.taskTask && !!output.task) {
        output.taskTask.birTaskCode = output.task.taskCode;
        output.taskTask.birTaskVersion = output.task.taskVersion;
        output.taskTask.taskCode = this.task.taskCode;
        output.taskTask.taskVersion = this.task.taskVersion;
        output.task.task = `${output.task.taskCode}-${output.task.taskVersion}`;

        if (isSelfLink) {
          output.taskTask.taskLinkCode = TaskFormComponent.TASK_LINK_CODE_SELF;
        }

        const tempTableParentNode: TreeNode = { ...this.topDownTreeTable[0] };
        const firstChildren = tempTableParentNode.children;

        const newChild = {
          bireTaskDTO: output.task,
          linkType: output.taskTask && output.taskTask.taskLinkCode,
          sequenceNumber: output.taskTask && output.taskTask.sequenceNumber
        };

        if (!!firstChildren) {
          const inFirstChildren = firstChildren.filter(
            (child) => !!output.task && child.data.bireTaskDTO.taskCode === output.task.taskCode
          );
          if (this.newQualification && inFirstChildren.length === 0 && !!output.taskTask) {
            // new task

            const newChildNode: TreeNode = {
              children: [],
              data: newChild,
              parent: tempTableParentNode
            };

            LabelValueUtils.stringValueToLabel(newChildNode.data.bireTaskDTO, 'taskTypeCode', this.taskTypes);

            firstChildren.push(newChildNode);
            this.bireTaskLinkAddedList.push(output.taskTask);

            this.topDownTreeTable[0] = { ...tempTableParentNode };
            this.topDownTreeTable = [...this.topDownTreeTable];
            this.topDownTreeTable[0].expanded = true;
            this.onRowUnSelected(newChildNode);
          } else {
            const inAddedList = this.bireTaskLinkAddedList.filter(
              (task) => !!output.task && task.taskCode === output.task.taskCode
            );
            const inUpdatedList = this.bireTaskLinkUpdatedList.filter(
              (task) => !!output.task && task.taskCode === output.task.taskCode
            );

            if (inAddedList.length === 1 && !!output.taskTask) {
              // updating newly added node

              const indexInAddedList = this.bireTaskLinkAddedList.findIndex(
                (task) => !!output.task && output.task.taskCode === task.taskCode
              );
              this.bireTaskLinkAddedList[indexInAddedList] = output.taskTask;
            } else if (inUpdatedList.length === 1 && !!output.taskTask) {
              // updating node existing in DB which has already been updated in this session

              const indexInUpdatedList = this.bireTaskLinkUpdatedList.findIndex(
                (task) => !!output.task && output.task.taskCode === task.taskCode
              );
              this.bireTaskLinkUpdatedList[indexInUpdatedList] = output.taskTask;
            } else if (isSelfLink && !ObjectUtils.isDefined(this.currentTaskSelfLink)) {
              this.bireTaskLinkAddedList.push(output.taskTask);
            } else {
              // updating node existing in DB for the first time

              this.bireTaskLinkUpdatedList.push(output.taskTask);
            }

            this.selectedTopDownNodes[0].data.sequenceNumber = output.taskTask.sequenceNumber;

            this.onRowUnSelected(this.selectedTopDownNodes[0]);
          }
        }

        this.selectedTopDownNodes = [];
      }
    }
  }

  /*************************************************************************
   * Anterior dialog
   *************************************************************************/

  public onAssociatedAnteriorTask(output: BireTaskLinkPopupOutput): void {
    const isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;

    const inOtherAssociatedTaskTables =
      this.superiorTableDataSource.dataSrc.some(
        (superiorTask) => !!output.task && superiorTask.taskCode === output.task.taskCode
      ) ||
      (!!this.topDownTreeTable[0].children &&
        this.topDownTreeTable[0].children.some(
          (topDownTask) => !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode
        )) ||
      this.posteriorTaskTableDataSource.dataSrc.some(
        (posteriorTask) => !!output.task && posteriorTask.taskCode === output.task.taskCode
      ) ||
      this.linkedTaskTableDataSource.dataSrc.some(
        (linkedTask) => !!output.task && linkedTask.taskCode === output.task.taskCode
      );

    if (isParentTask) {
      this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
    }
    if (!inOtherAssociatedTaskTables && !isParentTask) {
      if (this.currentAnteriorIndex !== null && this.currentAnteriorIndex !== undefined) {
        const previousAnteriorTask: BireTaskDTO = this.anteriorTaskTableDataSource.dataSrc[this.currentAnteriorIndex];
        if (
          !!output &&
          !!output.task &&
          !!output.taskTask &&
          DTOUtils.equalsBireTaskDTO(output.task, previousAnteriorTask)
        ) {
          const anteriorTask = this.anteriorTable[this.currentAnteriorIndex];
          anteriorTask.sequenceNumber = output.taskTask.sequenceNumber;
          const isInsideAddedList = this.bireTaskLinkAddedList.find(
            (element) =>
              !!output &&
              !!output.taskTask &&
              element.birTaskCode === output.taskTask.birTaskCode &&
              element.birTaskVersion === output.taskTask.birTaskVersion &&
              element.taskCode === output.taskTask.taskCode &&
              element.taskVersion === output.taskTask.taskVersion
          );
          const isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(
            (element) =>
              !!output &&
              !!output.taskTask &&
              element.birTaskCode === output.taskTask.birTaskCode &&
              element.birTaskVersion === output.taskTask.birTaskVersion &&
              element.taskCode === output.taskTask.taskCode &&
              element.taskVersion === output.taskTask.taskVersion
          );

          if (anteriorTask.linkedTaskMain) {
            output.taskTask.birTaskCode = this.task.taskCode;
            output.taskTask.birTaskVersion = this.task.taskVersion;
            output.taskTask.taskLinkCode = anteriorTask.linkType;
          } else {
            output.taskTask.birTaskCode = output.task.taskCode;
            output.taskTask.birTaskVersion = output.task.taskVersion;
            output.taskTask.taskCode = this.task.taskCode;
            output.taskTask.taskVersion = this.task.taskVersion;
          }

          if (isInsideAddedList) {
            const index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
            this.bireTaskLinkAddedList[index] = output.taskTask;
          } else if (isInsideUpdatedList) {
            const index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
            this.bireTaskLinkUpdatedList[index] = output.taskTask;
          } else {
            this.bireTaskLinkUpdatedList.push(output.taskTask);
          }
          const temp: BireTaskDTO = { ...output.task };
          if (output.task.taskTypeCode) {
            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
            );
            if (taskType[0]) {
              temp.taskTypeCode = taskType[0].label;
            }
          }
          if (output.task.groupCode) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!output && !!output.task && group.value === output.task.groupCode
            );
            if (taskGroup[0]) {
              temp.groupCode = taskGroup[0].label;
            }
          }
          temp.sequenceNumber = output.taskTask.sequenceNumber;
          this.anteriorTaskTableDataSource.replaceData(
            this.anteriorTaskTableDataSource.dataSrc[this.currentAnteriorIndex],
            temp
          );
        }
      } else {
        const searchInDisplayedTable = this.anteriorTaskTableDataSource.dataSrc.find(
          (value) =>
            !!output &&
            !!output.task &&
            value.taskCode === output.task.taskCode &&
            value.taskVersion === output.task.taskVersion
        );
        if (!searchInDisplayedTable) {
          if (output.task && output.taskTask) {
            const linkedOutput: LinkedTaskDTO = {
              bireTaskDTO: output.task,
              linkType: output.taskTask.taskLinkCode,
              sequenceNumber: output.taskTask.sequenceNumber
            };
            const temp: LinkedTaskDTO = { ...linkedOutput };
            if (!!temp && !!temp.bireTaskDTO) {
              if (output.task.taskTypeCode) {
                const taskType: LabelValue<string>[] = this.taskTypes.filter(
                  (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
                );
                if (taskType[0]) {
                  temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                }
              }
              if (output.task.groupCode) {
                const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
                  (group) => !!output && !!output.task && group.value === output.task.groupCode
                );
                if (taskGroup[0]) {
                  temp.bireTaskDTO.groupCode = taskGroup[0].label;
                }
              }
              this.anteriorTable.push(temp);
              temp.bireTaskDTO.sequenceNumber = output.taskTask.sequenceNumber;
              this.anteriorTaskTableDataSource.addData([temp.bireTaskDTO]);
              output.taskTask.birTaskCode = output.task.taskCode;
              output.taskTask.birTaskVersion = output.task.taskVersion;
              output.taskTask.taskCode = this.task.taskCode;
              output.taskTask.taskVersion = this.task.taskVersion;

              this.bireTaskLinkAddedList.push(output.taskTask);
            } else {
              super.throwUnboundLocalError('onAssociatedAnteriorTask', 'temp && temp.bireTaskDTO');
            }
          }
        }
      }
      this.currentAnteriorIndex = undefined;
      this.anteriorTaskTableDataSource.dataSelection = [];
    }
  }

  /*************************************************************************
   * PosteriorTask dialog
   *************************************************************************/

  public onAssociatedPosteriorTask(output: BireTaskLinkPopupOutput): void {
    const isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;

    const inOtherAssociatedTaskTables =
      this.superiorTableDataSource.dataSrc.some(
        (superiorTask) => !!output.task && superiorTask.taskCode === output.task.taskCode
      ) ||
      (!!this.topDownTreeTable[0].children &&
        this.topDownTreeTable[0].children.some(
          (topDownTask) => !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode
        )) ||
      this.anteriorTaskTableDataSource.dataSrc.some(
        (anteriorTask) => !!output.task && anteriorTask.taskCode === output.task.taskCode
      ) ||
      this.linkedTaskTableDataSource.dataSrc.some(
        (linkedTask) => !!output.task && linkedTask.taskCode === output.task.taskCode
      );

    if (isParentTask) {
      this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
    }
    if (!inOtherAssociatedTaskTables && !isParentTask) {
      if (this.currentPosteriorIndex !== null && this.currentPosteriorIndex !== undefined) {
        const previousPosteriorTask: BireTaskDTO = this.posteriorTaskTableDataSource.dataSrc[
          this.currentPosteriorIndex
        ];
        if (
          !!output &&
          !!output.task &&
          !!output.taskTask &&
          DTOUtils.equalsBireTaskDTO(output.task, previousPosteriorTask)
        ) {
          const posteriorTask = this.posteriorTable[this.currentPosteriorIndex];
          posteriorTask.sequenceNumber = output.taskTask.sequenceNumber;
          const isInsideAddedList = this.bireTaskLinkAddedList.find(
            (element) =>
              !!output &&
              !!output.taskTask &&
              element.birTaskCode === output.taskTask.birTaskCode &&
              element.birTaskVersion === output.taskTask.birTaskVersion &&
              element.taskCode === output.taskTask.taskCode &&
              element.taskVersion === output.taskTask.taskVersion
          );
          const isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(
            (element) =>
              !!output &&
              !!output.taskTask &&
              element.birTaskCode === output.taskTask.birTaskCode &&
              element.birTaskVersion === output.taskTask.birTaskVersion &&
              element.taskCode === output.taskTask.taskCode &&
              element.taskVersion === output.taskTask.taskVersion
          );

          if (posteriorTask.linkedTaskMain) {
            output.taskTask.birTaskCode = this.task.taskCode;
            output.taskTask.birTaskVersion = this.task.taskVersion;
            output.taskTask.taskLinkCode = posteriorTask.linkType;
          } else {
            output.taskTask.birTaskCode = output.task.taskCode;
            output.taskTask.birTaskVersion = output.task.taskVersion;
            output.taskTask.taskCode = this.task.taskCode;
            output.taskTask.taskVersion = this.task.taskVersion;
          }

          if (isInsideAddedList) {
            const index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
            this.bireTaskLinkAddedList[index] = output.taskTask;
          } else if (isInsideUpdatedList) {
            const index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
            this.bireTaskLinkUpdatedList[index] = output.taskTask;
          } else {
            this.bireTaskLinkUpdatedList.push(output.taskTask);
          }
          const temp: BireTaskDTO = { ...output.task };
          if (output.task.taskTypeCode) {
            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
            );
            if (taskType[0]) {
              temp.taskTypeCode = taskType[0].label;
            }
          }
          if (output.task.groupCode) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!output && !!output.task && group.value === output.task.groupCode
            );
            if (taskGroup[0]) {
              temp.groupCode = taskGroup[0].label;
            }
          }
          temp.sequenceNumber = output.taskTask.sequenceNumber;
          this.posteriorTaskTableDataSource.replaceData(
            this.posteriorTaskTableDataSource.dataSrc[this.currentPosteriorIndex],
            temp
          );
        }
      } else {
        const searchInDisplayedTable = this.posteriorTaskTableDataSource.dataSrc.find(
          (value) =>
            !!output &&
            !!output.task &&
            value.taskCode === output.task.taskCode &&
            value.taskVersion === output.task.taskVersion
        );
        if (!searchInDisplayedTable) {
          if (output.task && output.taskTask) {
            const linkedOutput: LinkedTaskDTO = {
              bireTaskDTO: output.task,
              linkType: output.taskTask.taskLinkCode,
              sequenceNumber: output.taskTask.sequenceNumber
            };
            const temp: LinkedTaskDTO = { ...linkedOutput };
            if (!!temp && !!temp.bireTaskDTO) {
              if (output.task.taskTypeCode) {
                const taskType: LabelValue<string>[] = this.taskTypes.filter(
                  (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
                );
                if (taskType[0]) {
                  temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                }
              }
              if (output.task.groupCode) {
                const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
                  (group) => !!output && !!output.task && group.value === output.task.groupCode
                );
                if (taskGroup[0]) {
                  temp.bireTaskDTO.groupCode = taskGroup[0].label;
                }
              }
              this.posteriorTable.push(temp);
              temp.bireTaskDTO.sequenceNumber = output.taskTask.sequenceNumber;
              this.posteriorTaskTableDataSource.addData([temp.bireTaskDTO]);
              output.taskTask.birTaskCode = output.task.taskCode;
              output.taskTask.birTaskVersion = output.task.taskVersion;
              output.taskTask.taskCode = this.task.taskCode;
              output.taskTask.taskVersion = this.task.taskVersion;

              this.bireTaskLinkAddedList.push(output.taskTask);
            } else {
              super.throwUnboundLocalError('onAssociatedPosteriorTask', 'temp && temp.bireTaskDTO');
            }
          }
        }
      }
      this.currentPosteriorIndex = undefined;
      this.posteriorTaskTableDataSource.dataSelection = [];
    }
  }

  /*************************************************************************
   * LinkedTask dialog
   *************************************************************************/

  public onAssociatedLinkedTask(output: BireTaskLinkPopupOutput): void {
    const isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;

    const inOtherAssociatedTaskTables =
      this.superiorTableDataSource.dataSrc.some(
        (superiorTask) => !!output.task && superiorTask.taskCode === output.task.taskCode
      ) ||
      (!!this.topDownTreeTable[0].children &&
        this.topDownTreeTable[0].children.some(
          (topDownTask) => !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode
        )) ||
      this.anteriorTaskTableDataSource.dataSrc.some(
        (anteriorTask) => !!output.task && anteriorTask.taskCode === output.task.taskCode
      ) ||
      this.posteriorTaskTableDataSource.dataSrc.some(
        (posteriorTask) => !!output.task && posteriorTask.taskCode === output.task.taskCode
      );

    if (isParentTask) {
      this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
    }
    if (!inOtherAssociatedTaskTables && !isParentTask) {
      if (this.currentLinkedTaskIndex !== null && this.currentLinkedTaskIndex !== undefined) {
        const previousLinkedTask: LinkedTasksTableDTO = this.linkedTaskTableDataSource.dataSrc[
          this.currentLinkedTaskIndex
        ];
        if (
          !!output &&
          !!output.task &&
          !!output.taskTask &&
          !!output.taskTask.taskLinkCode &&
          !!output.task.taskCode &&
          !!output.task.taskVersion
        ) {
          const tempOutput: LinkedTasksTableDTO = {
            linkType: output.taskTask.taskLinkCode,
            taskCode: output.task.taskCode,
            taskVersion: output.task.taskVersion,
            taskDesignation: output.task.taskDesignation,
            taskType: output.task.taskTypeCode,
            taskGroup: output.task.groupCode
          };
          if (output.taskTask.taskLinkCode) {
            const linkType: LabelValue<string>[] = this.associatedLinkTypes.filter(
              (type) => !!output && !!output.taskTask && type.value === output.taskTask.taskLinkCode
            );
            if (linkType[0]) {
              tempOutput.linkType = linkType[0].label;
            }
          }
          if (output.task.taskTypeCode) {
            const taskType: LabelValue<string>[] = this.taskTypes.filter(
              (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
            );
            if (taskType[0]) {
              tempOutput.taskType = taskType[0].label;
            }
          }
          if (output.task.groupCode) {
            const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
              (group) => !!output && !!output.task && group.value === output.task.groupCode
            );
            if (taskGroup[0]) {
              tempOutput.taskGroup = taskGroup[0].label;
            }
          }
          if (DTOUtils.equalsLinkedTasksTableDTO(tempOutput, previousLinkedTask)) {
            const isInsideAddedList = this.bireTaskLinkAddedList.find(
              (element) =>
                !!output &&
                !!output.taskTask &&
                element.birTaskCode === output.taskTask.birTaskCode &&
                element.birTaskVersion === output.taskTask.birTaskVersion &&
                element.taskCode === output.taskTask.taskCode &&
                element.taskVersion === output.taskTask.taskVersion
            );
            const isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(
              (element) =>
                !!output &&
                !!output.taskTask &&
                element.birTaskCode === output.taskTask.birTaskCode &&
                element.birTaskVersion === output.taskTask.birTaskVersion &&
                element.taskCode === output.taskTask.taskCode &&
                element.taskVersion === output.taskTask.taskVersion
            );

            output.taskTask.birTaskCode = output.task.taskCode;
            output.taskTask.birTaskVersion = output.task.taskVersion;
            output.taskTask.taskCode = this.task.taskCode;
            output.taskTask.taskVersion = this.task.taskVersion;

            if (isInsideAddedList) {
              const index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
              this.bireTaskLinkAddedList[index] = output.taskTask;
            } else if (isInsideUpdatedList) {
              const index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
              this.bireTaskLinkUpdatedList[index] = output.taskTask;
            } else {
              this.bireTaskLinkUpdatedList.push(output.taskTask);
            }
            const temp: LinkedTasksTableDTO = { ...tempOutput };

            if (output.taskTask.taskLinkCode) {
              const linkType: LabelValue<string>[] = this.associatedLinkTypes.filter(
                (type) => !!output && !!output.taskTask && type.value === output.taskTask.taskLinkCode
              );
              if (linkType[0]) {
                temp.linkType = linkType[0].label;
              }
            }

            if (output.task.taskTypeCode) {
              const taskType: LabelValue<string>[] = this.taskTypes.filter(
                (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
              );
              if (taskType[0]) {
                temp.taskType = taskType[0].label;
              }
            }
            if (output.task.groupCode) {
              const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
                (group) => !!output && !!output.task && group.value === output.task.groupCode
              );
              if (taskGroup[0]) {
                temp.taskGroup = taskGroup[0].label;
              }
            }
            this.linkedTaskTableDataSource.replaceData(
              this.linkedTaskTableDataSource.dataSrc[this.currentLinkedTaskIndex],
              temp
            );
            this.linkedTasksTable[this.currentLinkedTaskIndex].sequenceNumber = output.taskTask.sequenceNumber;
          }
        }
      } else {
        const searchInDisplayedTable = this.linkedTaskTableDataSource.dataSrc.find(
          (value) =>
            !!output &&
            !!output.task &&
            value.taskCode === output.task.taskCode &&
            value.taskVersion === output.task.taskVersion
        );
        if (!searchInDisplayedTable) {
          if (output.task && output.taskTask) {
            const linkedOutput: LinkedTaskDTO = {
              bireTaskDTO: output.task,
              linkType: output.taskTask.taskLinkCode,
              sequenceNumber: output.taskTask.sequenceNumber
            };
            if (!!output.taskTask.taskLinkCode && !!output.task.taskCode && !!output.task.taskVersion) {
              const tableOutput: LinkedTasksTableDTO = {
                taskCode: output.task.taskCode,
                taskVersion: output.task.taskVersion,
                taskDesignation: output.task.taskDesignation,
                taskType: output.task.taskTypeCode,
                taskGroup: output.task.groupCode,
                linkType: output.taskTask.taskLinkCode
              };
              const temp: LinkedTaskDTO = { ...linkedOutput };
              if (!!temp && !!temp.bireTaskDTO) {
                if (output.taskTask.taskLinkCode) {
                  const linkType: LabelValue<string>[] = this.associatedLinkTypes.filter(
                    (type) => !!output && !!output.taskTask && type.value === output.taskTask.taskLinkCode
                  );
                  if (linkType[0]) {
                    temp.linkType = linkType[0].label;
                    tableOutput.linkType = linkType[0].label;
                  }
                }

                if (output.task.taskTypeCode) {
                  const taskType: LabelValue<string>[] = this.taskTypes.filter(
                    (type) => !!output && !!output.task && type.value === output.task.taskTypeCode
                  );
                  if (taskType[0]) {
                    temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                    tableOutput.taskType = taskType[0].label;
                  }
                }
                if (output.task.groupCode) {
                  const taskGroup: LabelValue<string>[] = this.taskGroups.filter(
                    (group) => !!output && !!output.task && group.value === output.task.groupCode
                  );
                  if (taskGroup[0]) {
                    temp.bireTaskDTO.groupCode = taskGroup[0].label;
                    tableOutput.taskGroup = taskGroup[0].label;
                  }
                }
                this.linkedTasksTable.push(temp);
                this.linkedTaskTableDataSource.addData([tableOutput]);
                output.taskTask.birTaskCode = output.task.taskCode;
                output.taskTask.birTaskVersion = output.task.taskVersion;
                output.taskTask.taskCode = this.task.taskCode;
                output.taskTask.taskVersion = this.task.taskVersion;

                this.bireTaskLinkAddedList.push(output.taskTask);
              }
            } else {
              super.throwUnboundLocalError('onAssociatedLinkedTask', 'temp && temp.bireTaskDTO');
            }
          }
        }
      }
      this.currentLinkedTaskIndex = undefined;
      this.linkedTaskTableDataSource.setData(this.linkedTaskTableDataSource.dataSrc);
      this.linkedTaskTableDataSource.dataSelection = [];
    }
  }

  /**************************************************************************
   * Document Dialog
   *************************************************************************/

  public addNewDocument(newDocument: BireDocumentDTO) {
    const searchInDisplayedList = this.documentsTableDataSource.dataSrc.find(
      (value) => value.docName === newDocument.docName
    );
    if (!searchInDisplayedList) {
      this.documentsAdded.push(newDocument);
      this.bireDocumentDisplayed.push(this.getCustomDocumentRow(newDocument));
      const doc: BireDocumentDTO = { ...newDocument };
      LabelValueUtils.stringValueToLabel(doc, 'docCategory', this.documentCategories);
      this.documentsTableDataSource.addData([doc]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('warningOnFileExists'));
    }
  }

  public updateDocument(updatedDocument: BireDocumentDTO): void {
    if (
      this.currentDocumentIndex !== null &&
      this.currentDocumentIndex !== undefined &&
      this.currentDocumentIndex >= 0
    ) {
      if (!this.hasDuplicateDocument(updatedDocument)) {
        const inAddedList = this.documentsAdded.some((doc) => doc.docCode === updatedDocument.docCode);
        const inUpdatedList = this.documentsUpdated.some((doc) => doc.docCode === updatedDocument.docCode);
        if (inAddedList) {
          // added but unsaved
          const indexInAddedList = this.documentsAdded.findIndex((doc) => doc.docCode === updatedDocument.docCode);
          this.documentsAdded[indexInAddedList] = updatedDocument;
        } else if (inUpdatedList) {
          // DB value already updated
          const indexInUpdatedList = this.documentsUpdated.findIndex((doc) => doc.docCode === updatedDocument.docCode);
          this.documentsUpdated[indexInUpdatedList] = updatedDocument;
        } else {
          // non updated DB value
          this.documentsUpdated.push(updatedDocument);
        }
        const document: BireDocumentDTO = { ...updatedDocument };
        LabelValueUtils.stringValueToLabel(document, 'docCategory', this.documentCategories);
        this.documentsTableDataSource.replaceData(this.documentsTableDataSource.dataSelection[0], document);
        this.bireDocumentDisplayed[this.currentDocumentIndex] = this.getCustomDocumentRow(updatedDocument);
        this.documentsTableDataSource.dataSelection = [];
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('warningOnFileExists'));
      }
    }
  }

  private hasDuplicateDocument(rowData: BireDocumentDTO): boolean {
    let measurementPointList = [...this.documentsTableDataSource.dataSrc];
    if (this.documentsTableDataSource.hasDataSelection) {
      const selectedMeasurementRow = this.documentsTableDataSource.dataSelection[0];

      // Return all the rows except selected rows
      measurementPointList = this.documentsTableDataSource.dataSrc.filter((mprow) => {
        return selectedMeasurementRow.docName !== mprow.docName;
      });
    }

    // check whether any other rows have same counter code of row data or not
    const hasAnyDuplicateRow = measurementPointList.some((row) => {
      return row.docName === rowData.docName;
    });

    return hasAnyDuplicateRow;
  }

  public downloadDocument(event): void {
    FileUtils.downloadFile(event.docFile, event.docName);
  }

  // Currency
  private loadCurrency(): void {
    this.taskFormService.getLocalCurrency().subscribe((result) => {
      const currencyRegexp = /^[a-zA-Z]+ \(([A-Z]+)\)$/;
      const mo = result.match(currencyRegexp);
      this.currency = mo ? mo[1] : result;
    });
  }

  // History popup management
  public openStatusUpdatesPopup() {
    if (!!this.task && !!this.task.taskCode && !!this.task.taskVersion) {
      const taskId: BireTaskDTOId = {
        taskCode: this.task.taskCode,
        taskVersion: this.task.taskVersion
      };
      this.showStatusUpdatesPopup = true;
      const columns: TableColumn[] = [
        { field: 'timestamp', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true },
        { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'statusState', width: '250px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskTypeCode', width: '250px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskDesignation', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskDescription', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'groupCode', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'repairCenterCode', width: '250px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskChapter', width: '250px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskSection', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskSubject', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskTask', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskSubTask', width: '250px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskStatus', width: '250px', filterMode: TableColumnFilterMode.Input },
        { field: 'taskApplicabilityDate', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true },
        { field: 'taskApplicabilityCode', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'overhaul', width: '200px', filterMode: TableColumnFilterMode.Input },
        { field: 'inspectionPerEsm', width: '200px', filterMode: TableColumnFilterMode.Input }
      ];
      this.updatesKeyMap.set('statusState', this.propertiesService.getValue('getFuncObjectStatusMap'));
      this.updatesKeyMap.set('taskTypeCode', this.propertiesService.getValue('getTaskTypeMap'));
      this.updatesKeyMap.set('taskStatus', this.propertiesService.getValue('getFuncObjectStatusMap'));
      this.updatesKeyMap.set('taskApplicabilityCode', this.propertiesService.getValue('getTaskApplicabilityCodeMap'));
      this.updatesKeyMap.set('repairCenterCode', this.taskSearchService.findMROCenter());
      this.updatesKeyMap.set('groupCode', this.taskSearchService.getTaskGroups());
      this.tableStatusUpdatesData = {
        componentId: 'TaskFormComponent',
        tableCols: columns,
        tableRows: this.updateHistoricService.findBireTaskHistoric(taskId),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Multiple,
        globalFilter: false
      };
    } else {
      super.throwUnboundLocalError('openStatusUpdatesPopup', 'this.task');
    }
  }

  public updateObjectStatusFromStatusUpdatesHistory(event): void {
    const input: ObjectStatusDTO = {
      statusDate: event.statusDate,
      statusState: event.statusState,
      statusUser: event.statusUser
    };
    // tslint:disable-next-line:no-empty
    this.taskFormService.updateStaus(input).subscribe(() => {});
  }

  public openHistoricAttributes(): void {
    if (!!this.task && !!this.task.taskCode && !!this.task.taskVersion && !!this.dynamicAttributesForTask) {
      this.showDynamicAttributesHistoric = true;

      const attributeIds: BireTaskAttributeDTOId[] = this.dynamicAttributesService.toBireTaskAttributeId(
        this.task.taskCode,
        this.task.taskVersion,
        this.dynamicAttributesForTask
      );
      this.dynamicAttributesHistoric = this.taskFormService.findHBireTaskAttributesByAttributeId(attributeIds);
    } else {
      super.throwUnboundLocalError(
        'openHistoricAttributes',
        'this.task && task.taskCode && this.task.taskVersion && this.dynamicAttributesForTask'
      );
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  public openItem(input: MaintainedItemRow): void {
    const objectId: BireItemDTO = {
      familyCode: input._obj.familyCode,
      chapter: input._obj.chapter,
      section: input._obj.section,
      sheet: input._obj.sheet,
      marks: input._obj.marks,
      subject: input._obj.subject,
      structureType: input._obj.structureType,
      variantCode: input._obj.variantCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openField(input: MaintainedItemRow): void {
    if (!!this.task.taskCode) {
      const taskDmc: string = StringUtils.orEmpty(this.task.taskTask);
      const familyVariantCode: string | undefined = BireFamilyVariantUtil.buildFamilyVariantCodeWithoutStructureType(
        input._obj.familyCode,
        input._obj.variantCode
      );
      if (!familyVariantCode) {
        return;
      }
      this.davFieldService.buildTaskFieldLink({ familyVariantCode, taskDmc }).subscribe((data: string) => {
        window.open(data);
      });
    }
  }
  public isHighlightTaskUpdate(taskTemp: BireTaskDTOId): void {
    this.taskFormService.isHighlightUpdate().subscribe((result) => {
      this.highlightUpdate = result;
      if (result) {
        this.getUpdatedFields(taskTemp);
      }
    });
  }

  public getUpdatedFields(taskTemp: BireTaskDTOId): void {
    this.taskFormService.getTaskLastUpdatedFields(taskTemp).subscribe((result) => {
      this.updatedFieldIds = result;
      if (this.updatedFieldIds.length > 0) {
        this.getPrevisousTaskVersion(taskTemp);
      }
    });
  }

  public getPrevisousTaskVersion(taskTemp: BireTaskDTOId): void {
    this.resetHightlightTabs();
    this.taskFormService.getPreviousTaskByTaskVersion(taskTemp).subscribe((result) => {
      if (result) {
        this.taskFormService.findLastBireMaintenanceProgramsByTask(result).subscribe((lastMP) => {
          this.previousTaskVersionLastMP = lastMP;
        });
        this.previousTaskVersion = result;
        this.getDiff();
      }
    });
  }

  public isUpdatedField(field: string): boolean {
    if (this.highlightUpdate && this.updatedFieldIds && this.updatedFieldIds.indexOf(field) !== -1) {
      this.highlightTabs(field);

      return true;
    }

    return false;
  }

  private resetHightlightTabs(): void {
    this.highlightHome = false;
    this.highlightTaskCard = false;
    this.highlightImpacts = false;
    this.highlightPrerequisites = false;
    this.highlightAttributes = false;
    this.highlightDocuments = false;
    this.highlightMeasurementPoint = false;
  }

  private getDiff(): void {
    if (!this.highlightUpdate) {
      return;
    }
    const descDiff = this.dmp.diff_main(this.previousTaskVersion.taskDescription, this.task.taskDescription);
    const designDiff = this.dmp.diff_main(this.previousTaskVersion.taskDesignation, this.task.taskDesignation);
    this.dmp.diff_cleanupSemantic(designDiff);
    this.dmp.diff_cleanupSemantic(descDiff);
    this.taskDesignationDiff = this.dmp.diff_prettyHtml(designDiff);
    this.taskDescriptionDiff = this.dmp.diff_prettyHtml(descDiff);
  }

  private highlightTabs(field: string): void {
    if (field) {
      if (field.startsWith(TaskFieldsConstant.TASK_CARD)) {
        this.highlightTaskCard = true;
      } else if (field.startsWith(TaskFieldsConstant.IMPACTS)) {
        this.highlightImpacts = true;
      } else if (field.startsWith(TaskFieldsConstant.PREREQUISITES)) {
        this.highlightPrerequisites = true;
      } else if (field.startsWith(TaskFieldsConstant.ATTRIBUTES)) {
        this.highlightAttributes = true;
      } else if (field.startsWith(TaskFieldsConstant.DOCUMENTS)) {
        this.highlightDocuments = true;
      } else if (field.startsWith(TaskFieldsConstant.MEASUREMENT_POINT)) {
        this.highlightMeasurementPoint = true;
      } else {
        this.highlightHome = true;
      }
    }
  }

  private createEvolutionRow(evolution: BireTaskEvolutionDTO): EvolutionRow {
    const evolutionLinkType: LabelValue<string>[] = this.evolutionLinkTypes.filter(
      (type) => type.value === evolution.taskEvolutionTypeCode
    );
    const evolutionRow: EvolutionRow = {
      evolutionNumber: StringUtils.orEmpty(evolution.evolutionNumber),
      evolutionRevisionNumber: StringUtils.orEmpty(evolution.evolutionRevisionNumber),
      designation: '',
      taskEvolutionTypeCode: evolutionLinkType.length ? evolutionLinkType[0].label : '',
      _obj: evolution
    };

    return evolutionRow;
  }

  private createMaintainedItemRow(obj: BireTaskItemWithItemDTO): MaintainedItemRow {
    const selectedLinkType = this.itemLinkTypes.find((type) => type.value === obj.taskItemTypeCode);
    const selectedStructureType = this.structureType.find((structureType) => structureType.value === obj.structureType);

    let familyVariant = StringUtils.orEmpty(obj.familyCode);
    familyVariant +=
      selectedStructureType && !StringUtils.isNullOrEmpty(selectedStructureType.label)
        ? `-${StringUtils.orEmpty(selectedStructureType.label)}`
        : '';
    familyVariant += StringUtils.isNullOrEmpty(obj.variantCode) ? '' : `-${StringUtils.orEmpty(obj.variantCode)}`;

    const item = `${obj.chapter}-${obj.section}-${obj.subject}-${obj.sheet}-${obj.marks}`;

    const row: MaintainedItemRow = {
      familyVariant,
      item,
      designation: !!obj.bireItemDTO && !!obj.bireItemDTO.name ? obj.bireItemDTO.name : '',
      linkType: selectedLinkType ? StringUtils.orEmpty(selectedLinkType.label) : '',
      versionNumber: StringUtils.orEmpty(obj.versionNumber),
      field: this.translateService.instant(this.getTranslateKey('openField')),
      _obj: obj
    };

    return row;
  }

  private fillDesignationInEvolutionTable(): void {
    this.evolutionsTableDataSource.dataSrc.forEach((row) => {
      const input: BireEvolutionDTOId = {
        evolutionRevisionNumber: row._obj.evolutionRevisionNumber,
        evolutionNumber: row._obj.evolutionNumber
      };
      this.taskFormService.findBireEvolution(input).subscribe(
        (result) => {
          row.designation = StringUtils.orEmpty(result.evolutionSummary);
        },
        () => {
          row.designation = '';
        }
      );
    });
  }

  private setTableOfContent(): void {
    const documentsKey = this.getTranslateKey('documents');
    const generalKey = this.getTranslateKey('general');
    const descriptionKey = this.getTranslateKey('taskDescription');
    const impactsKey = this.getTranslateKey('impacts');
    const mainInformationKey = this.getTranslateKey('mainData');
    const manualsKey = this.getTranslateKey('manuals');
    const prerequisitesKey = this.getTranslateKey('prerequisites');
    const taskCardKey = this.getTranslateKey('taskCard');
    const measurementPointsKey = this.getTranslateKey('measurementPoints');
    this.translateService
      .get([
        documentsKey,
        generalKey,
        descriptionKey,
        impactsKey,
        mainInformationKey,
        manualsKey,
        prerequisitesKey,
        taskCardKey,
        measurementPointsKey
      ])
      .subscribe((results: string[]) => {
        const documentsLabel = !!results ? results[documentsKey] : 'Documents';
        const generalLabel = !!results ? results[generalKey] : 'General';
        const descriptionLabel = !!results ? results[descriptionKey] : 'Description';
        const impactsLabel = !!results ? results[impactsKey] : 'Impacts';
        const mainInformationLabel = !!results ? results[mainInformationKey] : 'Main Information';
        const manualsLabel = !!results ? results[manualsKey] : 'Manuals';
        const prerequisitesLabel = !!results ? results[prerequisitesKey] : 'Prerequisites';
        const taskCardLabel = !!results ? results[taskCardKey] : 'Task Card';
        const measurementPointsLabel = !!results ? results[measurementPointsKey] : 'Measurement Points';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationEltRef,
            label: mainInformationLabel
          },
          {
            id: 'taskCardAnchor',
            anchor: this.taskCardEltRef,
            label: taskCardLabel
          },
          {
            id: 'generalAnchor',
            anchor: this.generalEltRef,
            label: generalLabel
          },
          {
            id: 'descriptionTabAnchor',
            anchor: this.descriptionElRef,
            label: descriptionLabel
          },
          {
            id: 'impactsAnchor',
            anchor: this.impactsEltRef,
            label: impactsLabel
          },
          {
            id: 'manualsAnchor',
            anchor: this.manualsEltRef,
            label: manualsLabel
          },
          {
            id: 'prerequisitesAnchor',
            anchor: this.prerequisitesEltRef,
            label: prerequisitesLabel
          },
          {
            id: 'documentsAnchor',
            anchor: this.documentsEltRef,
            label: documentsLabel
          },
          {
            id: 'measurementPointsAnchor',
            anchor: this.measurementPointsEltRef,
            label: measurementPointsLabel
          }
        ];
        super.selectPageTocEntry(this.component.MAIN_INFORMATION_ANCHOR_ID);
      });
  }

  private sortOperationTable(): void {
    this.operationTableDataSource.dataSrc.sort((e1, e2) => {
      if (!ObjectUtils.isDefined(e1.opeSequenceNumber)) {
        return 1;
      } else if (!ObjectUtils.isDefined(e2.opeSequenceNumber)) {
        return -1;
      } else {
        const s1 = e1.opeSequenceNumber as number;
        const s2 = e2.opeSequenceNumber as number;

        return s1 < s2 ? -1 : s1 > s2 ? 1 : 0;
      }
    });
  }

  /**************************************************************************
   * Measurement Points
   *************************************************************************/
  private loadMeasurementPointsTable(bireTaskDTOId: BireTaskDTOId) {
    this.measurementPointsTableDataSource.setData([]);
    this.taskFormService.findAllBireTaskMeasurementPoint(bireTaskDTOId).subscribe(
      (results) => {
        if (!!results) {
          this.measurementPointsTableDataSource.setData(results);
          this.sortMeasurementPointsTable();
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindTilTasks'));
      }
    );
  }

  private sortMeasurementPointsTable(): void {
    this.measurementPointsTableDataSource.dataSrc.sort((a, b) => {
      if (!!a.groupCode && !!b.groupCode && a.groupCode !== b.groupCode) {
        const groupCodeA = a.groupCode.toLowerCase();
        const groupCodeB = b.groupCode.toLowerCase();

        return groupCodeA > groupCodeB ? 1 : -1;
      } else if (!a.groupCode && b.groupCode && b.groupCode.toLowerCase()) {
        return -1;
      } else if (!b.groupCode && a.groupCode && a.groupCode.toLowerCase()) {
        return 1;
      } else {
        return !!a.sequenceNumber && !!b.sequenceNumber ? a.sequenceNumber - b.sequenceNumber : 0;
      }
    });

    this.measurementPointsTableDataSource.setData(this.measurementPointsTableDataSource.dataSrc);
  }

  private getMaxLinkedGroupNumber(): number {
    let maxLinkedGroupId = 0;
    const linkNumber: number[] = [];
    this.measurementPointsTableDataSource.dataSrc.forEach((row) => {
      if (!!row.groupCode && row.groupCode.indexOf(this.component.LINK_MEASURE_ROW) === 0) {
        const linkRow = Number(row.groupCode.replace(this.component.LINK_MEASURE_ROW, '').trim());
        linkNumber.push(linkRow);
      }
    });

    if (linkNumber.length > 0) {
      maxLinkedGroupId = Math.max(...linkNumber);
    }

    return maxLinkedGroupId;
  }

  public addMeasurementPoint(): void {
    this.measurementPointRowData = undefined;
    this.measurementPointDialogOpenMode = ComponentOpenMode.Create;
    this.showMeasurementPointDialog = true;
  }

  public updateMeasurementPoint(): void {
    if (
      this.measurementPointsTableDataSource.hasDataSelection &&
      this.measurementPointsTableDataSource.dataSelectionCount === 1
    ) {
      this.measurementPointRowData = { ...this.measurementPointsTableDataSource.dataSelection[0] };
      const counterCode = this.measurementPointRowData.counterCode;

      this.isLinkedRefMeasurementCode = this.measurementPointsTableDataSource.dataSrc
        .filter((row) => {
          return !!row.counterCode && row.counterCode !== counterCode;
        })
        .some((mpoint) => {
          return (
            !!this.measurementPointRowData &&
            mpoint.unitCode === this.component.BOOLEAN &&
            !!mpoint.groupCode &&
            mpoint.groupCode === this.measurementPointRowData.groupCode
          );
        });

      this.measurementPointDialogOpenMode = ComponentOpenMode.Write;
      this.showMeasurementPointDialog = true;
    }
  }

  public openMeasurementPoint(): void {
    if (this.measurementPointsTableDataSource.dataSelectionCount === 1) {
      this.measurementPointDialogOpenMode = ComponentOpenMode.Read;
      this.measurementPointRowData = { ...this.measurementPointsTableDataSource.dataSelection[0] };
      this.showMeasurementPointDialog = true;
    }
  }

  public onValidatedMeasurementRow(rowData: BireTaskMeasurementPointTableDTO): void {
    if (!!rowData) {
      if (!this.hasDuplicateMeasureCode(rowData)) {
        if (this.measurementPointsTableDataSource.hasDataSelection) {
          this.measurementPointsTableDataSource.replaceData(
            this.measurementPointsTableDataSource.dataSelection[0],
            rowData
          );

          this.measurementPointsTableDataSource.dataSelection = [];
        } else {
          this.measurementPointsTableDataSource.addData([rowData]);
        }

        this.measurementPointRowData = undefined;
        this.sortMeasurementPointsTable();

        this.removeBireTaskMeasurementList.forEach((element, index) => {
          if (element.counterCode === rowData.counterCode) {
            this.removeBireTaskMeasurementList.splice(index, 1);
          }
        });
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('duplicateMeasureCode'));
      }
    }
  }

  private hasDuplicateMeasureCode(rowData: BireTaskMeasurementPointTableDTO): boolean {
    let measurementPointList = [...this.measurementPointsTableDataSource.dataSrc];
    if (this.measurementPointsTableDataSource.hasDataSelection) {
      const selectedMeasurementRow = this.measurementPointsTableDataSource.dataSelection[0];

      // Return all the rows except selected rows
      measurementPointList = this.measurementPointsTableDataSource.dataSrc.filter((mprow) => {
        return selectedMeasurementRow.counterCode !== mprow.counterCode;
      });
    }

    // check whether any other rows have same counter code of row data or not
    const hasAnyDuplicateRow = measurementPointList.some((row) => {
      return row.counterCode === rowData.counterCode;
    });

    return hasAnyDuplicateRow;
  }
  public showMeasurementPointFormulaButton(): boolean {
    let hasRowsBooleanType = false;
    if (
      this.measurementPointsTableDataSource.dataSelectionCount === 1 &&
      this.measurementPointsTableDataSource.dataSelection[0].unitCode &&
      this.measurementPointsTableDataSource.dataSelection[0].unitCode !== this.component.BOOLEAN &&
      this.measurementPointsTableDataSource.dataSelection[0].unitCode !== this.component.TEXT
    ) {
      hasRowsBooleanType = true;
    }

    return hasRowsBooleanType;
  }
  public showMeasurementPointLinkButton(): boolean {
    let hasRowsBooleanType = false;
    if (
      this.measurementPointsTableDataSource.hasDataSelection &&
      this.measurementPointsTableDataSource.dataSelectionCount > 1
    ) {
      hasRowsBooleanType = this.measurementPointsTableDataSource.dataSelection.every((mpRow) => {
        return mpRow.unitCode === this.component.BOOLEAN && !mpRow.groupCode;
      });
    }

    return hasRowsBooleanType;
  }

  public showMeasurementPointUnLinkButton(): boolean {
    let hasRowsLinked = false;
    if (this.measurementPointsTableDataSource.dataSelectionCount === 1) {
      hasRowsLinked = this.measurementPointsTableDataSource.dataSelection.some((mpRow) => {
        return !!mpRow.groupCode && mpRow.unitCode === this.component.BOOLEAN;
      });
    }

    return hasRowsLinked;
  }

  public deleteMeasurementPoints(selectedRows: BireTaskMeasurementPointTableDTO[]): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        selectedRows.length === 1 ? 'confirmDeleteSelectedMeasurementPoint' : 'confirmDeleteSelectedMeasurementPoints'
      ),
      accept: () => {
        selectedRows.map((receipt) =>
          this.removeBireTaskMeasurementList.push({
            counterCode: receipt.counterCode as string,
            taskCode: this.task.taskCode as string,
            taskVersion: this.task.taskVersion as string
          })
        );

        const measurementPointList = this.measurementPointsTableDataSource.dataSrc.filter((mprow) => {
          return !selectedRows.some((deletedRow) => {
            return deletedRow.counterCode === mprow.counterCode && deletedRow.sequenceNumber === mprow.sequenceNumber;
          });
        });

        this.measurementPointsTableDataSource.setData(measurementPointList);
        this.sortMeasurementPointsTable();
      }
    });
  }

  public linkMeasurementPoints(): void {
    if (this.measurementPointsTableDataSource.dataSelectionCount > 1) {
      const maxLinkedGroupId = this.getMaxLinkedGroupNumber() + 1;
      this.measurementPointsTableDataSource.dataSelection.forEach((mpoint) => {
        mpoint.groupCode = `${this.component.LINK_MEASURE_ROW} ${maxLinkedGroupId}`;
      });
    }
  }

  public unLinkMeasurementPoints(): void {
    if (this.measurementPointsTableDataSource.dataSelectionCount === 1) {
      const relatedGroupCodeList = this.measurementPointsTableDataSource.dataSrc.filter((mpoint) => {
        return mpoint.groupCode === (this.measurementPointsTableDataSource.dataSelection[0].groupCode as string);
      });
      if (!!relatedGroupCodeList) {
        relatedGroupCodeList.forEach((mpoints) => {
          mpoints.groupCode = undefined;
        });
      }
    }
  }

  public toolMeasurementPoint(): void {
    if (this.task) {
      this.pnTaskSearchInput = {
        taskCode: this.task.taskCode,
        taskVersion: this.task.taskVersion
      };
    }
    this.showAddMeasurementPointToolDialog = true;
  }
  public formulaMeasurementPoint(): void {
    this.showAddMeasurementPointFormulaDialog = true;
  }

  public setSelectedTool(event: BirePnDTO) {
    this.measurementPointsTableDataSource.dataSelection[0].toolPartNumber = !!event ? event.pnCode : '';
    this.measurementPointsTableDataSource.update();
  }

  public setFormula(event: string) {
    this.measurementPointsTableDataSource.dataSelection[0].formula = event;
    this.measurementPointsTableDataSource.update();
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.task.statusUser,
        currentDate: this.task.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.task.taskStatus, this.workflowStatus),
          value: this.task.taskStatus
        },
        nextStatuses: this.workflowStatus
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.task.taskStatus = event.data;
          this.saveTask();
        }
      }
    });
  }

  /**
   * upgradeTask() - This function is used to create Task with the new Version.
   * @returns void
   */
  public upgradeTask(): void {
    if (!!this.componentData.objectId) {
      const currentTask: BireTaskDTOId = {
        taskCode: this.serializationService.deserialize(this.componentData.objectId).taskCode,
        taskVersion: this.serializationService.deserialize(this.componentData.objectId).taskVersion
      };
      this.taskFormService.checkAndReturnNewVersionNumberByTask(currentTask).subscribe((newTaskVersion) => {
        const partialMessageKey = this.getTranslateKey('upgradeConfirmation');
        // TODO: need to add util to get complete plan code
        this.confirmationService.confirm({
          interpolateParams: { taskversion: `${currentTask.taskCode} : ${newTaskVersion}` },
          messageKey: partialMessageKey,
          accept: () => {
            this.taskFormService.checkNewVersionNumberAndUpgradeBireTaskData(currentTask).subscribe((upgradeTask) => {
              if (!!this.componentData) {
                this.componentData.objectId = this.serializationService.serialize({
                  taskCode: upgradeTask.taskCode,
                  taskVersion: upgradeTask.taskVersion
                });
              }
              this.ngOnInit();
            });
          }
        });
      });
    }
  }

  public initCostSettingDisplay(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.AEROWEBB_CONFIGURATION_MAP)
      .subscribe((awConfiguration) => {
        this.isCostSettingEnabled = SettingsUtils.isPropertyEnabled(
          awConfiguration,
          AWPropertiesConstants.DISPLAY_COST
        );
      });
  }
}
