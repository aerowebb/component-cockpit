import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';
import { FileUpload } from 'primeng/fileupload';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { HBidoEquipmentDTO } from '../../../../../../generated_files/api-types/h-bido-equipment-dto.interface';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidoNotificationTypeConstants } from '../../../../shared/constants/bido-notification-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetAtDateInput } from '../../../../shared/types/api-input-types/fleet-business/asset-at-date-input.interface';
import { FindBidoEquipmentByEquipmentCodeFromDateInput } from '../../../../shared/types/api-input-types/fleet-history/find-bido-equipment-by-equipment-code-from-date-input.interface';
import { SaveBidoEventExtensionCustomDTO } from '../../../../shared/types/api-input-types/fleet-management/save-bido-event-extension-custom-dto.interface';
import { SendEventNotificationToContactsDTO } from '../../../../shared/types/api-input-types/fleet-management/send-event-notification-to-contacts-dto.interface';
import { UpdateFieldsOfBidoDocumentationInput } from '../../../../shared/types/api-input-types/fleet-management/update-fields-of-bido-documentation-input.interface';
import { FindAllBirePnByCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-bire-pn-by-criteria-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { SaveEventInput } from '../../../../shared/types/api-input-types/task-management/save-event-input.interface';
import { BidoEquipmentOVSOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { BidoEventSymptomTableOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-event-symptom-table-output-dto.interface';
import { BidoNotificationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { BidoParameterCustomTableDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-parameter-custom-table-dto.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { EventOVSOutputDTO } from '../../../../shared/types/api-output-types/ovs-popup/event-ovs-output-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoContactDTO } from '../../../../shared/types/api-types/bido-contact-dto.interface';
import { BidoDocumentationDTOId } from '../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentCounterDTOId } from '../../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEventExtensionDTO } from '../../../../shared/types/api-types/bido-event-extension-dto.interface';
import { BidoEventParameterDTO } from '../../../../shared/types/api-types/bido-event-parameter-dto.interface';
import { BidoNotificationAttributeDTO } from '../../../../shared/types/api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationContactDTO } from '../../../../shared/types/api-types/bido-notification-contact-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoNotificationEvolutionDTO } from '../../../../shared/types/api-types/bido-notification-evolution-dto.interface';
import { BidoNotificationTypeDTO } from '../../../../shared/types/api-types/bido-notification-type-dto.interface';
import { BidoParameterDTO } from '../../../../shared/types/api-types/bido-parameter-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { EventCriteriaInputDTO } from '../../../../shared/types/api-types/event-criteria-input-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { HBidoNotificationAttributeDTO } from '../../../../shared/types/api-types/h-bido-notification-attribute-dto.interface';
import { HBidoNotificationDTO } from '../../../../shared/types/api-types/h-bido-notification-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { WorkPostponementAccepted } from '../../../../shared/types/work-postponement-accepted.interface';
import { WorkPostponementRefused } from '../../../../shared/types/work-postponement-refused.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { DomUtils } from '../../../../shared/utils/dom-utils';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { ObjectStatusComponent } from '../../../object-status/object-status.component';
import { OverlayService } from '../../../overlay/overlay.service';
import { EventService } from '../event.service';

import { EventCreateService } from './event-create.service';

const TSN_COLOR = '#D3C632';
const CSN_COLOR = '#42A5F5';

interface ChartType {
  labels: string[];
  datasets: {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    fill: boolean;
  }[];
}

interface BidoNotificationContactCustomDTO {
  notificationCode?: string;
  contactName?: string;
  firstName?: string;
  lastName?: string;
  customerName?: string;
  customerCode?: string;
  email?: string;
}

enum SearchAsset {
  Equipment,
  Part,
  Item
}

interface DocumentRow {
  docCode?: string;
  docExtension?: string;
  docName?: string;
  docPublicationDate?: string;
  docSize?: string;
  docSource?: string;
  docCategory?: string;
  _obj: BireDocumentDTO;
}

interface SymptomRow {
  symptomName?: string;
  symptomComment?: string;
  symptomCode?: string;
  rowId?: number;
}

interface ArisingEventTableColsCustom {
  notificationCode?: string;
  asset?: string;
  eventType?: string;
  typeCode?: string;
  notificationSubject?: string;
  reportingPeriodStartDate?: string;
  reportingPeriodEndDate?: string;
  closureDate?: string;
  reportingDate?: string;
  equipmentCode?: string;
  equipmentFunction?: string;
}

interface MeasureDataRow {
  counterCode?: string;
  cumulatedCounterValue?: string;
  counterUnit?: string;
  ratingText?: string;
  ratingCounterValue?: string;
  remainingValue?: string;
  referenceValue?: string;
  readingDate?: string;
  source?: string;
  dateLimit?: string;
  _obj: FindBidoCounterReferencesByEquipmentCodeOutput;
}

@Component({
  selector: 'aw-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_ANCHOR_ID: string = 'mainInfoAnchor';
  public static readonly ASSET_AT_DATE_ANCHOR_ID: string = 'assetAtDate';
  public static readonly GENERAL_ANCHOR_ID: string = 'general';
  public static readonly ARISING_EVENT_ANCHOR_ID: string = 'arisingEvents';
  public static readonly WORK_POSTPONMENT_ANCHOR_ID: string = 'workPostponment';
  public static readonly ATTRIBUTES_ANCHOR_ID: string = 'attributes';
  public static readonly DIFFUSION_ANCHOR_ID: string = 'diffusion';
  public static readonly EVOLUTION_ANCHOR_ID: string = 'evolution';
  public static readonly STRUCTURE_ANCHOR_ID: string = 'structure';
  public static readonly TASK_ANCHOR_ID: string = 'task';
  public static readonly DOCUMENT_ANCHOR_ID: string = 'document';
  public static readonly ROOT_CAUSE_ANCHOR_ID: string = 'rootCause';
  public static readonly CIRCUMSTANCES_ANCHOR_ID: string = 'circumstances';
  public static readonly TIMEOUT_LIMIT: number = 400;
  private static readonly WPR_TYPE_CODE = 'WPR';

  public readonly component: typeof EventCreateComponent;
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;

  @ViewChild(EventCreateComponent.MAIN_ANCHOR_ID)
  public mainInfoAnchor: ElementRef;

  @ViewChild(EventCreateComponent.ASSET_AT_DATE_ANCHOR_ID)
  public assetAtDate: ElementRef;

  @ViewChild(EventCreateComponent.GENERAL_ANCHOR_ID)
  public general: ElementRef;

  @ViewChild(EventCreateComponent.ARISING_EVENT_ANCHOR_ID)
  public arisingEvents: ElementRef;

  @ViewChild(EventCreateComponent.WORK_POSTPONMENT_ANCHOR_ID)
  public workPostponment: ElementRef;

  @ViewChild(EventCreateComponent.ATTRIBUTES_ANCHOR_ID)
  public attributes: ElementRef;

  @ViewChild(EventCreateComponent.DIFFUSION_ANCHOR_ID)
  public diffusion: ElementRef;

  @ViewChild(EventCreateComponent.EVOLUTION_ANCHOR_ID)
  public evolution: ElementRef;

  @ViewChild(EventCreateComponent.STRUCTURE_ANCHOR_ID)
  public structure: ElementRef;

  @ViewChild(EventCreateComponent.TASK_ANCHOR_ID)
  public task: ElementRef;

  @ViewChild(EventCreateComponent.DOCUMENT_ANCHOR_ID)
  public document: ElementRef;

  @ViewChild(EventCreateComponent.ROOT_CAUSE_ANCHOR_ID)
  public rootCause: ElementRef;

  @ViewChild(EventCreateComponent.CIRCUMSTANCES_ANCHOR_ID)
  public circumstances: ElementRef;

  public bidoNotificationDTO: BidoNotificationDTO;
  public bidoEquipmentDTO: HBidoEquipmentDTO;
  public readonly componentName: string;
  public selectedZone: string;
  public linkedEventType: string | undefined;
  public linkedEventSubject: string | undefined;
  public linkedEventStatus: string | undefined;
  public systemReference: string;
  public selectedSystemId: string;
  public selectedType: string | undefined;
  public selectedFlightType: string | undefined;
  public savedEventStatus: string | undefined;
  public location: string;
  public typeCategory: string;
  public functionLocationStr: string;
  public linkedEventInfo: EventOVSOutputDTO | undefined;
  public componentSubtitle: string;
  public eventHasBeenSaved: boolean;

  // Fields visibility
  public showQuickSearchEventPopup: boolean;
  public showQuickSearchEquipmentPopup: boolean;
  public disableStatus: boolean;
  public generateACRSFormVisible: boolean;
  public isAssetAtDateTabVisible: boolean;
  public isFieldEnabled: boolean;
  public isReopenEnabled: boolean;
  public isShowEventStatus: boolean;
  // Table loaders
  public isLoadingMeasureTable: boolean;
  public isLoadingEventsTable: boolean;
  public isLoadingDiffusionTable: boolean;

  // Measure
  public measureTypes: SelectItem[];
  public selectedMeasureType: string | undefined;

  // Arising Event
  public arisingEventTableDataSource: TableDataSource<ArisingEventTableColsCustom>;
  public navigationLinkList: MenuItem[];

  /** Diffusion */

  public diffusionTableDataSource: TableDataSource<BidoNotificationContactCustomDTO>;

  /** Evolution */
  public notificationEvolutionDTO: BidoNotificationEvolutionDTO;
  public evolutionType: string | undefined;
  public originalDeadlines: string;
  public isIgnoreInitialDeadlines: boolean;
  public showEvolutionDialog: boolean;
  public evolutionTableData: DialogTableData<BireEvolutionDTO>;
  private evolutionSourceMap: Map<string, string>;

  /** Dropdowns */
  public eventCauseMap: LabelValue<string>[];
  public categoryMap: LabelValue<string>[];
  public eventPriorityMap: LabelValue<string>[];
  public countryMap: LabelValue<string>[];
  public zoneMap: LabelValue<string>[];
  public eventTypeMap: LabelValue<string>[];
  public countryZoneMap: LabelValue<string>[];
  public eventReasonMap: LabelValue<string>[];
  public statusMap: LabelValue<string>[];
  public workflowStatus: LabelValue<string>[];
  public systemIdMap: SelectItem[];
  private propertyOperationalStatus: LabelValue<string>[];
  public flightTypes: SelectItem[];
  public defectNameMap: SelectItem[];
  public locationMap: SelectItem[];
  public eventLocationMap: SelectItem[];
  public contextMissionMap: LabelValue<string>[];
  public contextNameMap: LabelValue<string>[];
  public symptomNameMap: LabelValue<string>[];

  /* DYNAMIC Attributes */
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForEvent: BireAttributeDTO[];
  public bireNotificationAttributes: BidoNotificationAttributeDTO[];
  public dynamicAttributesForEvent: DynamicAttributes[];
  public dynamicAttributesHistoric: Observable<HBidoNotificationAttributeDTO[]>;

  /* Work Postponemnt tab */
  public requestAuthorTxt: string;
  public postponmentRelatedWO: string;
  public relatedEvolutionKey: string;
  public requestDecisionAuthorTxt: string;
  public postponementAuthorizationNum: string;
  public postponementNewLimitDate: Date;
  public flightRestriction: string;
  public hDynamicAttributesForEvent: DynamicAttributes[];
  public showDynamicAttributesHistoric: boolean;
  public workPostponmentRefusalReason: string | undefined;
  public workPostponmentDecisionAuthor: string | undefined;

  /* Structure */
  public assetName: string | undefined;
  public assetDesignation: string | undefined;
  public oldAssetName: string | undefined;
  public oldDesignation: string | undefined;
  public shopName: string;
  public shopTechnicalLevel: string;
  public shopTechnicalLevelMap: LabelValue<string>[];
  public shopNameMap: LabelValue<string>[];
  public familyVariantEquipmentCode: string | undefined;

  /* Task */
  public searchAssetList: SelectItem[];
  public readonly findAsset: typeof SearchAsset;
  public selectedSearchAsset: SearchAsset = 0;
  public eventAtaCode: BireItemDTO;
  public itemTableData: DialogTableData<BireItemDTO>;
  public selectedAssetSN: string | undefined;
  public selectedAssetPN: string | undefined;
  public selectedAssetName: string | undefined;
  public selectedAssetDesignation: string | undefined;
  public showItemDialog: boolean;
  public dialogTableDataItems: DialogTableData<BireItemDTO>;
  public showItemTaskSearchPopup: boolean;
  public selectedTaskDesignation: string | undefined;
  public selectedTaskDescription: string | undefined;

  private itemDialogSource: number;
  private assetDialogSource: number | undefined;

  /** ROOT Cause */
  public rootCauseList: SelectItem[];
  public displayDefectEquipmentBlock: boolean;
  public displayDefectFunctionalLocationBlock: boolean;
  public displayDefectPartBlock: boolean;
  public displayDefectItemBlock: boolean;
  public defectEquipmentName: string | undefined;
  public defectEquipmentPn: string | undefined;
  public defectEquipmentSn: string | undefined;
  public defectAssetCode: string | undefined;
  public flCodeList: SelectItem[];
  public pnTypeList: LabelValue<string>[];
  public rootCausePn: string | undefined;
  public rootCauseQuantity: number | undefined;
  public itemSource: number | undefined;
  public selectedRootCause: string | undefined;
  public rootCauseFlCode: string | undefined;
  private hasPropertyByCode: boolean;
  private hasFMDNotClosed: boolean;
  public selectedDefectName: string | undefined;
  public selectedDefectLocation: string | undefined;
  public rootCauseComment: string | undefined;

  // Defect part dialog
  public defectPartTableData: DialogTableData<BirePnDTO>;
  public showDefectPartDialog: boolean;

  // Documents tab
  public documentsTable: BidoDocumentationDTO[];
  public currentDocument: BidoDocumentationDTO | undefined;
  public currentDocumentIndex: number | undefined;
  public bireDocumentDisplayedDataSource: TableDataSource<DocumentRow>;
  public documentsAdded: BidoDocumentationDTO[];
  public documentsRemoved: BidoDocumentationDTOId[];
  public documentsUpdated: UpdateFieldsOfBidoDocumentationInput[];
  public documentTypes: LabelValue<string>[];

  public showDocumentDialog: boolean;
  public showAddDocumentDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;

  // Circumstance Tab
  public contextTabData: BidoEventSymptomTableOutputDTO;

  public addedContextParam: BidoParameterCustomTableDTO[];
  public symptomAdded: SymptomRow[];
  public symptomRowDataSource: TableDataSource<SymptomRow>;
  public contextTableDataSource: TableDataSource<BidoParameterCustomTableDTO>;
  public symptomParameterTableDataSource: TableDataSource<BidoParameterCustomTableDTO>;
  public symptomTabData: BidoEventSymptomTableOutputDTO[];
  public showSymptomTableDialog: boolean;
  public dataSymptom: PopupEntry<SymptomRow>;
  public editedSymptomIndex: number;
  public showSymptomHeader: boolean;
  public showContextHeader: boolean;
  public showContextTableDialog: boolean;
  public dataContext: PopupEntry<string>;
  public addedSymptomParam: BidoParameterCustomTableDTO[];
  public showSymptomParamHeader: boolean;
  public showSymptomParamDialog: boolean;

  /** Chart */
  public measureVariationData: ChartType;
  // tslint:disable-next-line:no-any
  public measureChartOptions: any;
  public chartType: string;
  // tslint:disable-next-line:no-any
  public usageChartOptions: any;
  public usageGraphData: ChartType;
  public showMeasureChart: boolean;
  public tsn: string | undefined;
  public csn: string | undefined;
  private measureChartDataObj: FindBidoMeasuresByEquipmentAndCounterCodesOutput[][];
  public startDate: Date;
  public endDate: Date;

  /** Tabs Visibility */
  public isGeneralTabVisible: boolean;
  public isArisingEventTabVisible: boolean;
  public isWorkPostponmentTabVisible: boolean;
  public isAttributeTabVisible: boolean;
  public isStructureTabVisible: boolean;
  public isEvolutionTabVisible: boolean;
  public isDiffusionTabVisible: boolean;
  public isTaskTabVisible: boolean;
  public isRootCauseTabVisible: boolean;
  public isCircumstancesTabVisible: boolean;
  public isDocumentTabVisible: boolean = true;

  /** Status Update */
  public eventStatus: BidoNotificationDTO;
  public showStatusUpdatesPopup: boolean;
  public propertyStatus: LabelValue<string>[];
  public tableStatusUpdatesData: DialogTableData<HBidoNotificationDTO>;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  // Table of content
  public toc: PageTocEntry[];

  public partNumberTableData: DialogTableData<BirePnDTO>;
  public showPartNumberDialog: boolean;

  // Chart
  public csnLabel: string;
  public tsnLabel: string;
  public bidoMeasuresDisplayedDataSource: TableDataSource<MeasureDataRow>;

  private workOrder: BidmWorkOrderDTO | undefined;

  // TODO
  public specificSNVisibility: boolean;
  public notificationAsset: string;
  public showSaveSpinner: boolean;

  public isAirMInstalled: boolean;
  public woCode: string;

  // Measure
  public showMeasurePopup: boolean;
  public showMeasureReportText: boolean;
  public measureReportText: string;
  public isReadOnlyMeasureUpdateDialog: boolean;
  public currentMeasure: FindBidoCounterReferencesByEquipmentCodeOutput;
  public dataMeasure: PopupEntry<FindBidoCounterReferencesByEquipmentCodeOutput>;

  private readonly email = 'email';

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    private readonly propertiesService: PropertiesService,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    public dynamicAttributesService: DynamicAttributesService,
    public eventCreateService: EventCreateService,
    public eventService: EventService,
    private readonly confirmationService: ConfirmationService,
    public dateService: DateService
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
    this.aWPropertiesConstants = AWPropertiesConstants;
    super.registerPageTocEntryObservable();

    this.component = EventCreateComponent;
    this.showMeasureChart = false;
    this.loadTablesHeader();
    this.initChart();
    this.initMeasureChart();
    this.setNavigationLinkList();
    this.loadPnTypeList();
    this.componentName = ComponentConstants.FLE_EVENT_CREATE;

    this.userWorkflowSubject.subscribe((userWorkflow) => {
      this.updateWorkflowStatusList();
    });
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_EVENT_CREATE;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.specificSNVisibility = this.sessionService.isSpecificSAE;

    this.bidoNotificationDTO = {
      bidoNotificationTypeDTO: {}
    };
    this.bidoEquipmentDTO = {};

    this.evolutionSourceMap = new Map();
    this.evolutionSourceMap.set(BidoEvolutionConstants.CODE_EVOLUTION, 'Configuration SB');
    this.evolutionSourceMap.set(BidoEvolutionConstants.CODE_SB, 'Other SB');
    this.evolutionSourceMap.set(BidoEvolutionConstants.CODE_AD, 'AD (Airworthiness Directive)');
    this.evolutionSourceMap.set(BidoEvolutionConstants.CODE_MODIFICATION, 'Modification');

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      if (!this.isCreateOpenMode && this.componentData.objectId) {
        this.bidoNotificationDTO.notificationCode = this.serializationService
          .deserialize(this.componentData.objectId)
          .notificationCode.trim();
        this.componentSubtitle = this.bidoNotificationDTO.notificationCode as string;
        this.displayComponentContext(this.bidoNotificationDTO.notificationCode as string, this.isCreateOpenMode);
        this.init(() => {
          this.getBidoNotificationData();
        });
      } else {
        this.loadUserWorkflow(undefined);
        if (!!this.componentData.objectId) {
          this.init(() => {
            if (!!this.componentData && !!this.componentData.objectId) {
              this.bidoNotificationDTO.equipmentCode = this.serializationService.deserialize(
                this.componentData.objectId
              ).equipmentCode;

              if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.equipmentCode) {
                this.getBidoEquipmentWithRepresentation(this.bidoNotificationDTO.equipmentCode);
              }
            }

            if (!!this.componentData && !!this.componentData.objectId) {
              this.bidoNotificationDTO.notNotificationCode = this.serializationService.deserialize(
                this.componentData.objectId
              ).notNotificationCode;
              this.componentSubtitle = this.bidoNotificationDTO.notNotificationCode as string;
              this.displayComponentContext(
                this.bidoNotificationDTO.notNotificationCode as string,
                this.isCreateOpenMode
              );
            }
            if (
              !!this.componentData &&
              !!this.componentData.objectId &&
              !!this.bidoNotificationDTO.bidoNotificationTypeDTO
            ) {
              this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory = this.serializationService.deserialize(
                this.componentData.objectId
              ).bidoNotificationTypeDTO.typeCategory;
            }
            if (!!this.componentData && !!this.componentData.objectId) {
              this.bidoNotificationDTO.bidoEquipmentDTO = this.serializationService.deserialize(
                this.componentData.objectId
              ).bidoEquipmentDTO;
            }
            this.getTypeMap(() => {
              // TODO
            });
          });
        } else {
          this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
          this.init(() => {
            // TODO
          });
        }
      }
    }

    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Reset the right attribute name regarding the langage
      this.dynamicAttributesForEvent = this.dynamicAttributesService.from(this.bireAttributesForEvent);
      this.hDynamicAttributesForEvent = this.dynamicAttributesService.from(this.bireAttributesForEvent);
    });

    this.toc = [
      {
        id: 'mainInfoAnchor',
        anchor: this.mainInfoAnchor,
        label:
          this.translateService.currentLang === LangConstants.ENGLISH_CODE
            ? 'Main Information'
            : 'Informations principales'
      }
    ];

    setTimeout(() => {
      super.selectPageTocEntry(this.component.MAIN_ANCHOR_ID);
    });
  }

  /*************************************************************************
   * Init Screen
   *************************************************************************/
  private init(callback) {
    this.eventCauseMap = [];
    this.categoryMap = [];
    this.eventPriorityMap = [];
    this.countryMap = [];
    this.countryZoneMap = [];
    this.zoneMap = [];
    this.eventTypeMap = [];
    this.searchAssetList = [];
    this.statusMap = [];
    this.flCodeList = [];
    this.pnTypeList = [];

    this.dynamicAttributesForEvent = [];
    this.hDynamicAttributesForEvent = [];

    this.shopTechnicalLevelMap = [];
    this.shopNameMap = [];
    this.propertyOperationalStatus = [];

    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];
    this.documentTypes = [];

    this.defectNameMap = [];

    this.locationMap = [];
    this.eventLocationMap = [];
    this.measureTypes = [];
    this.eventAtaCode = {};
    this.familyVariantEquipmentCode = '';

    this.contextTabData = {
      bidoParameterCustomTableDTOList: []
    };
    this.symptomAdded = [];
    this.addedContextParam = [];
    this.componentSubtitle = '';
    this.addedSymptomParam = [];
    this.showSymptomHeader = false;
    this.showContextHeader = false;
    this.showSymptomParamHeader = false;

    this.selectedMeasureType = 'ALL';
    this.bidoNotificationDTO.reportingPeriodStartDate = new Date();

    this.notificationEvolutionDTO = {};
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.flightTypes = [
      { label: 'TSN', value: 'TSN' },
      { label: 'CSN', value: 'CSN' }
    ];
    this.eventReasonMap = [];
    this.systemIdMap = [];
    this.initDropdowns(() => {
      if (!!callback) {
        callback();
      }
    });
    this.setSearchAssetList();
    this.initEvolutionTableData();
    this.setConstants();
  }

  /*************************************************************************
   * Render table headers
   *************************************************************************/
  private loadTablesHeader(): void {
    this.bidoMeasuresDisplayedDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'counterCode', translateKey: this.getTranslateKey('counterCode') },
        { field: 'cumulatedCounterValue', translateKey: this.getTranslateKey('cumulatedCounterValue') },
        { field: 'counterUnit', translateKey: this.getTranslateKey('counterUnit') },
        { field: 'remainingValue', translateKey: this.getTranslateKey('remainingValue') },
        { field: 'referenceValue', translateKey: this.getTranslateKey('referenceValue') },
        { field: 'source', translateKey: this.getTranslateKey('source') }
      ],
      data: []
    });

    this.arisingEventTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'notificationCode', translateKey: this.getTranslateKey('notificationCode') },
        { field: 'asset', translateKey: this.getTranslateKey('asset') },
        { field: 'eventType', translateKey: this.getTranslateKey('eventType') },
        { field: 'notificationSubject', translateKey: this.getTranslateKey('notificationSubject') },
        { field: 'reportingPeriodStartDate', translateKey: this.getTranslateKey('reportingPeriodStartDate') },
        { field: 'reportingDate', translateKey: this.getTranslateKey('reportingDate') },
        { field: 'reportingPeriodEndDate', translateKey: this.getTranslateKey('reportingPeriodEndDate') }
      ],
      data: []
    });

    this.diffusionTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'customerCode', translateKey: this.getTranslateKey('customerCode') },
        { field: 'customerName', translateKey: this.getTranslateKey('customerName') },
        { field: 'contactName', translateKey: this.getTranslateKey('contactName') },
        { field: 'email', translateKey: this.getTranslateKey('email') }
      ],
      data: []
    });

    this.bireDocumentDisplayedDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'docName', translateKey: this.getTranslateKey('docName'), width: '47.5%' },
        { field: 'docCategory', translateKey: this.getTranslateKey('docCategory'), width: '12.5%' },
        { field: 'docExtension', translateKey: this.getTranslateKey('docExtension'), width: '12.5%' },
        { field: 'docSize', translateKey: this.getTranslateKey('docSize'), width: '12.5%' },
        { field: 'docPublicationDate', translateKey: this.getTranslateKey('docPublicationDate'), width: '15%' }
      ],
      data: []
    });

    this.contextTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        { field: 'name', translateKey: this.getTranslateKey('name') },
        { field: 'unit', translateKey: this.getTranslateKey('unit') },
        { field: 'value', translateKey: this.getTranslateKey('value') }
      ],
      data: []
    });

    this.symptomParameterTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        { field: 'name', translateKey: this.getTranslateKey('name') },
        { field: 'unit', translateKey: this.getTranslateKey('unit') },
        { field: 'value', translateKey: this.getTranslateKey('value') }
      ],
      data: []
    });

    this.symptomRowDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        { field: 'symptomName', translateKey: this.getTranslateKey('symptomName') },
        { field: 'symptomComment', translateKey: this.getTranslateKey('symptomComment') }
      ],
      data: []
    });
  }

  /*************************************************************************
   * Gets event screen data for particular notidification code
   *************************************************************************/
  private getBidoNotificationData() {
    if (!!this.bidoNotificationDTO.notificationCode) {
      const timer = 300;
      const bidoNotificationDTOId: BidoNotificationDTOId = {
        notificationCode: this.bidoNotificationDTO.notificationCode
      };
      this.eventCreateService.findBidoNotification(bidoNotificationDTOId).subscribe((res: BidoNotificationDTO) => {
        this.bidoNotificationDTO = {
          bidoNotificationTypeDTO: {}
        };
        this.bidoNotificationDTO = { ...res };
        this.loadUserWorkflow(this.bidoNotificationDTO.status);
        if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.notificationCode) {
          const eventId: BidoNotificationDTOId = {
            notificationCode: this.bidoNotificationDTO.notificationCode as string
          };
          this.componentData.objectId = this.serializationService.serialize(eventId);
          // Component Subtitle
          this.componentSubtitle = res.notificationCode as string;
          this.displayComponentContext(this.componentSubtitle, this.isCreateOpenMode);
        }
        this.selectedType = undefined;
        this.getTypeMap(() => {
          setTimeout(() => {
            this.selectedType = res.bidoNotificationTypeDTO.typeCode;
            this.bidoNotificationDTO.status = res.status;
            this.searchEquipments();
            this.searchTask();
            if (this.bidoNotificationDTO.status === '4-clo') {
              this.isFieldEnabled = true;
            }
            this.setPriorityField();
            this.getEvent();
            this.getBidoEquipment();
            this.findBireAttributesByCategory();
            this.loadDefect();
            this.hasFMDNotClosedFun();
            this.getStatusVal();
            // this.reopenButtonVisibility();
            this.setWorkOrderVisibility();
          }, timer);
        });
      });
    }
  }

  /*************************************************************************
   * Screen Operations
   *************************************************************************/
  public cancelEvent() {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.clearErrors();
    // this.getBidoNotificationData();
    this.init(() => {
      this.getBidoNotificationData();
      this.fillAttibuteDropdown();
      if (this.isReopenEnabled) {
        this.isReopenEnabled = !this.isReopenEnabled;
      }
    });
  }

  public editEvent() {
    this.updateOpenMode(ComponentOpenMode.Write);
    this.reopenButtonVisibility();
  }

  public reloadEvent() {
    this.init(() => {
      this.getBidoNotificationData();
    });
  }

  private resetRootCauseFields() {
    this.defectAssetCode = undefined;
    this.defectEquipmentSn = undefined;
    this.defectEquipmentPn = undefined;
    this.defectEquipmentName = undefined;
    this.rootCausePn = undefined;
    this.rootCauseQuantity = undefined;
    this.eventAtaCode = {};
    this.rootCauseFlCode = undefined;

    this.selectedDefectName = undefined;
    this.selectedDefectLocation = undefined;
    this.rootCauseComment = undefined;
    this.isDefectBlockVisible();

    this.bidoNotificationDTO.bidoRootCauseDTO = {};
  }

  public reopenButtonVisibility() {
    if (
      !!this.bidoNotificationDTO.status &&
      this.bidoNotificationDTO.status === AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY
    ) {
      if (this.isStatusEnabled()) {
        if (this.selectedType !== 'ACRS') {
          // Reopen not shown in acrs
          this.isReopenEnabled = true;
          this.updateOpenMode(ComponentOpenMode.Read);
        }
      } else if (this.selectedType === 'ACRS') {
        // Reopen not shown in acrs
        this.isReopenEnabled = false;
      } else if (this.isWorkPostponmentTabVisible && !!this.workPostponmentRefusalReason) {
        this.isReopenEnabled = true;
        this.updateOpenMode(ComponentOpenMode.Read);
      }
    }
  }

  public reopenEvent() {
    if (
      !!this.bidoNotificationDTO.status &&
      this.bidoNotificationDTO.status === AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY
    ) {
      // The reopening of an Event leads to the positioning of the value of the Status a UNDER INVESTIGATION
      this.bidoNotificationDTO.status = AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY;
      this.isReopenEnabled = false;
    }

    if (this.selectedType === EventCreateComponent.WPR_TYPE_CODE) {
      this.bidoNotificationDTO.status = AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY;
    }

    this.updateOpenMode(ComponentOpenMode.Write);
    // TODO: onActionReopenEvent() WDP: 12398
  }

  private isTabPresentAlready(id: string): boolean {
    let isPresent = false;

    this.toc.forEach((tab) => {
      if (tab.id === id) {
        isPresent = true;
      }
    });

    return isPresent;
  }

  public isAircraft(): boolean {
    if (
      !!this.bidoEquipmentDTO &&
      !!this.bidoEquipmentDTO.currentBidoEquipmentData &&
      !!this.bidoEquipmentDTO.currentBidoEquipmentData.equipmentFunction &&
      this.bidoEquipmentDTO.currentBidoEquipmentData.equipmentFunction ===
        AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
    ) {
      return true;
    }

    return false;
  }

  public isEngine(): boolean {
    if (this.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
      return true;
    }

    return false;
  }

  public openXLSFormat() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.notificationCode) {
      this.eventCreateService.openXLSFormat(this.bidoNotificationDTO.notificationCode).subscribe((result) => {
        FileUtils.downloadFile(result.fileContent, result.fileName);
      });
    }
  }

  private searchEquipments(): void {
    if (!!this.bidoNotificationDTO.taskAssetCode) {
      const bidoEquipmentDTOId: BidoEquipmentDTOId = {
        equipmentCode: this.bidoNotificationDTO.taskAssetCode
      };

      this.eventCreateService.findBidoEquipment(bidoEquipmentDTOId).subscribe((res: BidoEquipmentDTO) => {
        this.bidoNotificationDTO.taskAssetCode = res.equipmentCode;
        this.selectedAssetPN = res.pnCode;
        this.selectedAssetSN = res.sn;
        this.selectedAssetName = res.equipmentCode;
        this.selectedAssetDesignation = res.equipmentDesignation;
      });
    }

    if (!!this.bidoNotificationDTO.fieldNewValue) {
      const bidoEquipmentDTOId: BidoEquipmentDTOId = {
        equipmentCode: this.bidoNotificationDTO.fieldNewValue
      };

      this.eventCreateService.findBidoEquipment(bidoEquipmentDTOId).subscribe((res: BidoEquipmentDTO) => {
        if (res) {
          this.assetDesignation = res.equipmentDesignation;
          this.fetchEquipmentName(bidoEquipmentDTOId.equipmentCode, (name: string) => {
            this.assetName = !!name ? name : undefined;
          });
        }
      });
    }

    if (!!this.bidoNotificationDTO.fieldOldValue) {
      const bidoEquipmentDTOId: BidoEquipmentDTOId = {
        equipmentCode: this.bidoNotificationDTO.fieldOldValue
      };

      this.eventCreateService.findBidoEquipment(bidoEquipmentDTOId).subscribe((res: BidoEquipmentDTO) => {
        if (res) {
          this.oldDesignation = res.equipmentDesignation;
          this.fetchEquipmentName(bidoEquipmentDTOId.equipmentCode, (name: string) => {
            this.oldAssetName = !!name ? name : undefined;
          });
        }
      });
    }

    if (!!this.defectAssetCode) {
      const bidoEquipmentDTOId: BidoEquipmentDTOId = {
        equipmentCode: this.defectAssetCode
      };

      this.eventCreateService.findBidoEquipment(bidoEquipmentDTOId).subscribe((res: BidoEquipmentDTO) => {
        if (res) {
          this.defectEquipmentPn = res.pnCode;
          this.defectEquipmentSn = res.sn;
          this.fetchEquipmentName(bidoEquipmentDTOId.equipmentCode, (name: string) => {
            this.defectEquipmentName = !!name ? name : undefined;
          });
        }
      });
    }
  }

  private setPriorityField() {
    switch (this.selectedType) {
      case 'BSD': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'MS': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'OB': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'HL': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'IBR': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'Misc Failures': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'NTCAN': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'NTDEL': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'OP22': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'OP21': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'OP20': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'STJ': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      case 'UM': {
        this.bidoNotificationDTO.priority = '2-nsi';
        break;
      }
      default: {
        this.bidoNotificationDTO.priority = '1-sig';
        break;
      }
    }
  }

  /*************************************************************************
   * Fetch dropdown lists
   *************************************************************************/
  private initDropdowns(callback) {
    const indexThree = 3;
    const indexFour = 4;
    const indexFive = 5;
    const indexSix = 6;

    const eventMap = this.propertiesService.getValue('getEventCauseMap');
    const categoryMap = this.propertiesService.getValue('getEventCategoryMap');
    const status = this.propertiesService.getValue('getEventStatusMap');
    const priority = this.propertiesService.getValue('getEventPriorityMap');
    const removal = this.propertiesService.getValue('getRemovalReasonMap');
    const defectName = this.propertiesService.getValue('getDefectNameMap');
    const defectLocation = this.propertiesService.getValue('getDefectLocationMap');

    this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory = undefined;
    this.bidoNotificationDTO.status = undefined;

    forkJoin([eventMap, categoryMap, status, priority, removal, defectName, defectLocation]).subscribe((results) => {
      this.eventCauseMap = results[0];

      this.statusMap = results[2];
      if (this.isCreateOpenMode) {
        this.bidoNotificationDTO.status = '1-dra';
        this.disableStatus = true;
      }

      this.categoryMap = results[1].filter((category) => {
        return category.value !== AWPropertiesConstants.EVENT_CATEGORY_LOGISTICAL_KEY;
      });
      this.eventPriorityMap = results[indexThree];
      this.eventReasonMap = results[indexFour];
      this.defectNameMap = results[indexFive];
      this.locationMap = results[indexSix];

      if (!this.componentData) {
        if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
          this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory = this.categoryMap[0].label;
        }
      }

      this.eventCreateService.getOperationalStatusMap().subscribe(
        (res) => {
          this.propertyOperationalStatus = res;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
        }
      );

      this.getCountryZoneDropdownMap();

      if (!!callback) {
        callback();
      }
    });

    // Load counter labels
    const observablesCounterLabel: Observable<string>[] = [
      this.eventCreateService.getCsnLabelForAirworthinessControl(),
      this.eventCreateService.getTsnLabelForAirworthinessControl()
    ];

    forkJoin(observablesCounterLabel).subscribe(([cycleBireMeasureReferenceLabel, timeBireMeasureReferenceLabel]) => {
      this.csnLabel = cycleBireMeasureReferenceLabel;
      this.tsnLabel = timeBireMeasureReferenceLabel;
      this.measureTypes = [
        { label: 'ALL', value: 'ALL' },
        { label: this.tsnLabel, value: this.tsnLabel },
        { label: this.csnLabel, value: this.csnLabel }
      ];
    });

    this.loadDocumentTypes();
    this.loadCircumstancesDropdown();
    this.fillAttibuteDropdown();
  }

  private updateWorkflowStatusList(): void {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.statusMap,
      this.bidoNotificationDTO ? this.bidoNotificationDTO.status : undefined
    );
  }

  private getCountryZoneDropdownMap() {
    // Country Zone map
    this.propertiesService.getValue('getCountryZoneMap').subscribe((results) => {
      this.zoneMap = [];
      this.countryMap = [];
      this.countryZoneMap = results;
      this.countryMap = this.getListOfAllCountries();

      results.forEach((dto) => {
        let isFound = false;
        this.zoneMap.filter((res) => {
          if (res.label === dto.label.split(';')[1]) {
            isFound = true;
          }
        });

        if (!isFound) {
          this.zoneMap.push({
            label: dto.label.split(';')[1],
            value: dto.label.split(';')[1]
          });
        }
      });
    });
  }

  private getListOfAllCountries(): LabelValue<string>[] {
    const countryMap: LabelValue<string>[] = [];
    this.countryZoneMap.forEach((dto) => {
      countryMap.push({
        label: dto.label.split(';')[0],
        value: dto.value
      });
    });

    return countryMap;
  }

  public getCountries() {
    this.countryMap = [];
    this.bidoNotificationDTO.country = undefined;
    this.countryZoneMap.forEach((dto) => {
      if (!!this.bidoNotificationDTO.zone && dto.label.split(';')[1] === this.bidoNotificationDTO.zone) {
        this.countryMap.push({
          label: dto.label.split(';')[0],
          value: dto.value
        });
      } else if (!this.bidoNotificationDTO.zone) {
        this.countryMap.push({
          label: dto.label.split(';')[0],
          value: dto.value
        });
      }
    });
  }

  public getTypeMap(callback?) {
    this.eventTypeMap = [];
    this.selectedType = undefined;
    let event;
    if (
      !!this.bidoNotificationDTO &&
      !!this.bidoNotificationDTO.bidoNotificationTypeDTO &&
      !!this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
    ) {
      event = !!this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
        ? this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
        : '1-ope';

      // Event Type Map
      this.eventCreateService
        .findAllBidoNotificationTypeByTypeCategory(event)
        .subscribe((res: BidoNotificationTypeDTO[]) => {
          res.forEach((dto) => {
            if (!!dto && !!dto.typeDescription && !!dto.typeCode) {
              if (this.isCreateOpenMode && dto.typeCode === EventCreateComponent.WPR_TYPE_CODE) {
                // Skipping Work Postponment in creation mod
              } else {
                this.eventTypeMap.push({
                  label: dto.typeDescription,
                  value: dto.typeCode
                });
              }

              if (this.isCreateOpenMode && this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory === '5-def') {
                // this.selectedType = 'TECHLOG';
                this.selectedType = 'MISC';
              }
            }
          });

          if (!!callback) {
            callback();
          }
        });
    }
  }

  private loadDocumentTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_ASSET_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? results : [];
    });
  }

  private getLabel(val: string, itemList: LabelValue<string>[]): string {
    let value: LabelValue<string>[];
    value = itemList.filter((res) => {
      return res.value === val;
    });

    return value.length > 0 ? value[0].label : val;
  }

  private loadCircumstancesDropdown() {
    // Load dropdowns
    const observables: Observable<LabelValue<string>[]>[] = [
      this.eventCreateService.findAllBidoExtensionList('C'),
      this.eventCreateService.findAllBidoExtensionList('S'),
      this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP)
    ];

    forkJoin(observables).subscribe(([contextMap, symptomMap, missionMap]) => {
      this.contextNameMap = contextMap;
      this.symptomNameMap = symptomMap;
      this.contextMissionMap = missionMap;
    });
  }

  private loadCustomerOperatorName(): void {
    if (!!this.bidoEquipmentDTO) {
      if (!!this.bidoEquipmentDTO.ownerCustomerCode) {
        this.eventService
          .findBidoCustomer({ customerCode: this.bidoEquipmentDTO.ownerCustomerCode })
          .subscribe((customer) => {
            this.bidoEquipmentDTO.ownerCustomerCode = `${
              this.bidoEquipmentDTO.ownerCustomerCode
            } (${StringUtils.orEmpty(customer.customerName)})`;
          });
      }

      if (!!this.bidoEquipmentDTO.operatorCustomerCode) {
        this.eventService
          .findBidoCustomer({ customerCode: this.bidoEquipmentDTO.operatorCustomerCode })
          .subscribe((customer) => {
            this.bidoEquipmentDTO.operatorCustomerCode = `${
              this.bidoEquipmentDTO.operatorCustomerCode
            } (${StringUtils.orEmpty(customer.customerName)})`;
          });
      }
    }
  }

  /*************************************************************************
   * Fetch Attribute data and operations related
   *************************************************************************/
  private fillAttibuteDropdown() {
    if (this.specificSNVisibility) {
      const attribute: BidoAttributeDTOId = {
        attributeId: '141'
      };
      this.eventService.findBidoAttribute(attribute).subscribe((res: BidoAttributeDTO) => {
        this.shopTechnicalLevelMap = [];
        if (!!res && !!res.bidoAttributeValueDatas) {
          res.bidoAttributeValueDatas.forEach((resp) => {
            this.shopTechnicalLevelMap.push({
              label: resp.textEn,
              value: resp.attributeValue
            });
          });
        }
      });

      const attribute1: BidoAttributeDTOId = {
        attributeId: '140'
      };
      this.eventService.findBidoAttribute(attribute1).subscribe((res: BidoAttributeDTO) => {
        this.shopNameMap = [];
        if (!!res && !!res.bidoAttributeValueDatas) {
          res.bidoAttributeValueDatas.forEach((resp) => {
            this.shopNameMap.push({
              label: resp.textEn,
              value: resp.attributeValue
            });
          });
        }
      });
    }

    const attribute2: BidoAttributeDTOId = {
      attributeId: BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID.toString()
    };
    this.eventService.findBidoAttribute(attribute2).subscribe((res: BidoAttributeDTO) => {
      this.systemIdMap = [];
      if (!!res && !!res.bidoAttributeValueDatas) {
        res.bidoAttributeValueDatas.forEach((resp) => {
          this.systemIdMap.push({
            label: resp.textEn,
            value: resp.attributeValue
          });
        });
      }
    });

    const attribute3: BidoAttributeDTOId = {
      attributeId: BidoAttributeConstants.EVENT_LOCATION.toString()
    };
    this.eventService.findBidoAttribute(attribute3).subscribe((res: BidoAttributeDTO) => {
      this.eventLocationMap = [];
      if (!!res && !!res.bidoAttributeValueDatas) {
        res.bidoAttributeValueDatas.forEach((resp) => {
          this.eventLocationMap.push({
            label: resp.textEn,
            value: resp.attributeValue
          });
        });
      }
    });
  }

  public findAllBidoNotificationAttributeByNotificationCode(): void {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.notificationCode) {
      const bidoNotificationDTOId: BidoNotificationDTOId = {
        notificationCode: this.bidoNotificationDTO.notificationCode
      };

      this.eventCreateService.findAllBidoNotificationAttributeByNotificationCode(bidoNotificationDTOId).subscribe(
        (results) => {
          this.bireNotificationAttributes = results;
          results.forEach((res) => {
            if (!!res.attributeValue) {
              if (res.attributeId === '9') {
                setTimeout(() => {
                  if (!!res.attributeValue) {
                    this.selectedSystemId = res.attributeValue;
                  }
                }, EventCreateComponent.TIMEOUT_LIMIT);
              }

              if (res.attributeId === '10') {
                this.systemReference = res.attributeValue;
              }

              if (res.attributeId === BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHOR.toString()) {
                this.requestAuthorTxt = res.attributeValue;
              }

              if (res.attributeId === BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_WO_CONTEXT.toString()) {
                this.postponmentRelatedWO = res.attributeValue;
                this.findProjectId();
              }

              if (res.attributeId === BidoAttributeConstants.MAINTENANCE_PLAN_ORIGINAL_DEADLINES.toString()) {
                this.originalDeadlines = res.attributeValue;
              }

              if (
                res.attributeId ===
                BidoAttributeConstants.IGNORE_INITIAL_DEADLINE_NEXT_OCCURRENCE_CALCULATION.toString()
              ) {
                this.isIgnoreInitialDeadlines = res.attributeValue === 'true' ? true : false;
              }

              if (
                res.attributeId ===
                BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR.toString()
              ) {
                this.requestDecisionAuthorTxt = res.attributeValue;
              }

              if (
                res.attributeId ===
                BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER.toString()
              ) {
                this.postponementAuthorizationNum = res.attributeValue;
              }

              if (res.attributeId === BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_LIMIT_DATE.toString()) {
                this.postponementNewLimitDate = new Date(res.attributeValue);
              }

              if (
                res.attributeId ===
                BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS.toString()
              ) {
                this.flightRestriction = res.attributeValue;
              }

              if (this.specificSNVisibility) {
                // Shop
                if (res.attributeId === '140') {
                  setTimeout(() => {
                    if (!!res.attributeValue) {
                      this.shopName = res.attributeValue;
                    }
                  }, EventCreateComponent.TIMEOUT_LIMIT);
                }

                // Shop technical level
                if (res.attributeId === '141') {
                  setTimeout(() => {
                    if (!!res.attributeValue) {
                      this.shopTechnicalLevel = res.attributeValue;
                    }
                  }, EventCreateComponent.TIMEOUT_LIMIT);
                }
              }

              if (
                res.attributeId === BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_REFUSAL_REASON.toString()
              ) {
                this.workPostponmentRefusalReason = res.attributeValue;
              }

              if (
                res.attributeId ===
                BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR.toString()
              ) {
                this.workPostponmentDecisionAuthor = res.attributeValue;
              }

              if (res.attributeId === BidoAttributeConstants.EVENT_LOCATION.toString()) {
                this.location = res.attributeValue;
              }

              if (res.attributeId === BidoAttributeConstants.EVENT_WORK_ORDER_SOURCE.toString()) {
                this.woCode = res.attributeValue;
                if (
                  !!res.attributeValue &&
                  (BidoNotificationTypeConstants.TASK_APPLIED_TYPE_CODE === this.bidoNotificationDTO.typeCode ||
                    BidoNotificationTypeConstants.EVOLUTION_APPLIED_TYPE_CODE === this.bidoNotificationDTO.typeCode)
                ) {
                  this.eventCreateService.getWorkOrderForEvent(res.attributeValue).subscribe((code: string) => {
                    this.woCode = code;
                  });
                }
              }
            }
          });

          this.dynamicAttributesService.setValues(this.dynamicAttributesForEvent, this.bireNotificationAttributes);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByEvent'));
        }
      );
    }
  }

  private findProjectId(): void {
    this.eventCreateService
      .findBidmWorkOrderByMandantAndWoCode(this.postponmentRelatedWO)
      .subscribe((data: BidmWorkOrderDTO) => {
        this.workOrder = data;
      });
  }

  private findBireAttributesByCategory() {
    this.bireAttributesForEvent = [];
    this.eventCreateService
      .findBidoAttributesByAttributeCategory(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ALL_KEY)
      .subscribe((resultsAll) => {
        this.eventCreateService
          .findBidoAttributesByAttributeCategory(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_EVENT_KEY)
          .subscribe((results) => {
            const attributeArr: BireAttributeDTO[] = [...results, ...resultsAll];

            attributeArr.forEach((attri) => {
              if (
                attri.attributeId !== '9' &&
                attri.attributeId !== '10' &&
                attri.attributeId !== '34' &&
                attri.attributeId !== '29' &&
                attri.attributeId !== '28' &&
                attri.attributeId !== '33' &&
                attri.attributeId !== '35' &&
                attri.attributeId !== '30' &&
                attri.attributeId !== '31' &&
                attri.attributeId !== '32' &&
                attri.attributeId !== '11' &&
                attri.attributeId !== '40'
              ) {
                this.bireAttributesForEvent.push(attri);
              }
            });
            setTimeout(() => {
              this.dynamicAttributesForEvent = this.dynamicAttributesService.from(this.bireAttributesForEvent);
              this.hDynamicAttributesForEvent = this.getHistoryArributeArray(attributeArr);
              this.findAllBidoNotificationAttributeByNotificationCode();
            });
          });
      });
  }

  private getHistoryArributeArray(eventArr: BireAttributeDTO[]): DynamicAttributes[] {
    let arr: BireAttributeDTO[] = [];

    if (this.selectedType === EventCreateComponent.WPR_TYPE_CODE) {
      arr = eventArr.filter((attri) => {
        if (
          // tslint:disable-next-line: prefer-switch
          attri.attributeId === '29' ||
          attri.attributeId === '28' ||
          attri.attributeId === '33' ||
          attri.attributeId === '35' ||
          attri.attributeId === '30' ||
          attri.attributeId === '31' ||
          attri.attributeId === '32'
        ) {
          return attri;
        }
      });
    } else {
      arr = eventArr;
    }

    const hDynamicAttributesForEvent: DynamicAttributes[] = this.dynamicAttributesService.from(arr);

    return hDynamicAttributesForEvent;
  }

  /*************************************************************************
   * Handling tabs and field visibility
   *************************************************************************/
  private handleTabVisibility() {
    this.showGeneralTab();
    this.showCircumstanceTab();
    this.showRootCauseTab();
    this.showAssetAtDateTab();
    this.showStructureTab();
    this.showArisingEventTab();
    this.showWorkPostponmentTab();
    this.showWPRRefusalPanel();
    this.showAttributeTab();
    this.showEvolutionTab();
    this.showTaskTab();
    this.showDocumentTab();
    this.showDiffusionTab();
  }

  private showDocumentTab() {
    if (this.isDocumentTabVisible && !this.isCreateOpenMode) {
      if (!this.isTabPresentAlready('document')) {
        this.toc.push({
          id: 'document',
          anchor: this.document,
          label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Document' : 'Document'
        });
      }
    }
  }

  private showGeneralTab() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      this.isGeneralTabVisible =
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY &&
        this.bidoNotificationDTO.typeCode === EventCreateComponent.WPR_TYPE_CODE
          ? false
          : true;

      if (this.isGeneralTabVisible) {
        if (!this.isTabPresentAlready('general')) {
          this.toc.push({
            id: 'general',
            anchor: this.general,
            label:
              this.translateService.currentLang === LangConstants.ENGLISH_CODE
                ? 'Additional Information'
                : 'Informations complémentaires'
          });
        }
      }
    }
  }

  private showRootCauseTab() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      this.isRootCauseTabVisible =
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY;

      if (this.isRootCauseTabVisible) {
        if (!this.isTabPresentAlready('rootCause')) {
          this.toc.push({
            id: 'rootCause',
            anchor: this.rootCause,
            label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Root Cause' : 'Cause racine'
          });
        }
      }
    }
  }

  private showAssetAtDateTab() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO && !this.isCreateOpenMode) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY
      ) {
        if (this.selectedType === EventCreateComponent.WPR_TYPE_CODE) {
          this.isAssetAtDateTabVisible = false;
        } else if (this.selectedType === 'ACRS') {
          this.isAssetAtDateTabVisible = false;
        } else {
          this.isAssetAtDateTabVisible = true;
        }
      } else {
        this.isAssetAtDateTabVisible = true;
      }

      this.eventCreateService.getFunctionLocationLabel(this.bidoNotificationDTO).subscribe((res) => {
        this.functionLocationStr = res;
      });

      if (this.isAssetAtDateTabVisible) {
        if (!this.isTabPresentAlready('assetAtDate')) {
          this.toc.push({
            id: 'assetAtDate',
            anchor: this.assetAtDate,
            label:
              this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Asset At Date' : 'Individu à date'
          });
        }
      }
    }
  }

  private showCircumstanceTab() {
    this.isCircumstancesTabVisible =
      this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
      AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY;

    if (this.isCircumstancesTabVisible) {
      if (!this.isTabPresentAlready('circumstances')) {
        this.toc.push({
          id: 'circumstances',
          anchor: this.circumstances,
          label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Circumstances' : 'Circonstances'
        });
      }
    }
  }

  private showArisingEventTab() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY &&
        this.bidoNotificationDTO.typeCode === EventCreateComponent.WPR_TYPE_CODE
      ) {
        this.isArisingEventTabVisible = false;

        return false;
      }
    }

    if (!this.isTabPresentAlready('arisingEvents')) {
      this.toc.push({
        id: 'arisingEvents',
        anchor: this.arisingEvents,
        label:
          this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Arising Events' : 'Evènements induits'
      });
    }

    this.isArisingEventTabVisible = true;

    return true;
  }

  private showStructureTab() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY
      ) {
        switch (this.bidoNotificationDTO.typeCode) {
          case 'AS': {
            this.isStructureTabVisible = true;
            break;
          }
          case 'DI': {
            this.isStructureTabVisible = true;
            break;
          }
          case 'MVI': {
            this.isStructureTabVisible = true;
            break;
          }
          case 'MVR': {
            this.isStructureTabVisible = true;
            break;
          }
          default: {
            this.isStructureTabVisible = false;
            break;
          }
        }

        if (this.isStructureTabVisible) {
          if (!this.isTabPresentAlready('structure')) {
            this.toc.push({
              id: 'structure',
              anchor: this.structure,
              label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Structure' : 'Structure'
            });
          }
        }
      }
    }
  }

  private showAttributeTab() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY
      ) {
        if (this.bidoNotificationDTO.typeCode === EventCreateComponent.WPR_TYPE_CODE) {
          this.isAttributeTabVisible = false;

          return false;
        } else if (this.bidoNotificationDTO.typeCode === 'ACRS') {
          this.isAttributeTabVisible = false;

          return false;
        }
      }

      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY
      ) {
        if (!this.isTabPresentAlready('attributes')) {
          this.toc.push({
            id: 'attributes',
            anchor: this.attributes,
            label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Attributes' : 'Attributs'
          });
        }

        this.isAttributeTabVisible = true;

        return true;
      }
    }

    return false;
  }

  private showDiffusionTab() {
    if (
      AWPropertiesConstants.EVENT_CATEGORY_DEFECT_KEY ===
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ||
      AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
    ) {
      this.isDiffusionTabVisible = true;
      if (!this.isTabPresentAlready('diffusion')) {
        this.toc.push({
          id: 'diffusion',
          anchor: this.diffusion,
          label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Diffusion' : 'Diffusion'
        });
      }

      return true;
    }

    this.isDiffusionTabVisible = false;

    return false;
  }

  private showWorkPostponmentTab() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY
      ) {
        if (this.bidoNotificationDTO.typeCode === EventCreateComponent.WPR_TYPE_CODE) {
          if (!this.isTabPresentAlready('workPostponment')) {
            this.toc.push({
              id: 'workPostponment',
              anchor: this.workPostponment,
              label:
                this.translateService.currentLang === LangConstants.ENGLISH_CODE
                  ? 'Work Postponent'
                  : 'Report de travail'
            });
          }

          this.isWorkPostponmentTabVisible = true;

          return true;
        }
      }
    }

    return false;
  }

  public showWPRAcceptationPanel(): boolean {
    if (!!this.bidoNotificationDTO) {
      if (
        AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY === this.bidoNotificationDTO.status ||
        AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY === this.bidoNotificationDTO.status ||
        !!this.postponementNewLimitDate ||
        !!this.flightRestriction
      ) {
        return true;
      }
    }

    return false;
  }

  public showWPRRefusalPanel(): boolean {
    if (!!this.bidoNotificationDTO) {
      if (
        AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY === this.bidoNotificationDTO.status ||
        AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY === this.bidoNotificationDTO.status ||
        !!this.workPostponmentRefusalReason
      ) {
        return true;
      }
    }

    return false;
  }

  private showEvolutionTab() {
    if (
      this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
      AWPropertiesConstants.EVENT_CATEGORY_CONFIGURATION_KEY
    ) {
      this.isEvolutionTabVisible = true;
      if (!this.isTabPresentAlready('evolution')) {
        this.toc.push({
          id: 'evolution',
          anchor: this.evolution,
          label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Evolution' : 'Evolution'
        });
      }
    } else {
      this.isEvolutionTabVisible = false;
    }
  }

  private showTaskTab() {
    if (
      this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY &&
      this.selectedType === 'TA'
    ) {
      this.isTaskTabVisible = true;
      if (!this.isTabPresentAlready('task')) {
        this.toc.push({
          id: 'task',
          anchor: this.task,
          label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Task' : 'Tâche'
        });
      }
    }
  }

  /** Fields Visibility Handling */
  public isTypeEditable() {
    if (this.isCreateOpenMode) {
      return false;
    }

    if (this.isReadOpenMode) {
      return true;
    }

    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY
      ) {
        return false;
      }
    }

    return true;
  }

  public isEventDateEditable() {
    if (this.isCreateOpenMode) {
      return false;
    }

    if (this.isReadOpenMode) {
      return true;
    }

    if (AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY === this.bidoNotificationDTO.status) {
      return true;
    }

    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY
      ) {
        if (this.selectedType === 'AS' || this.selectedType === 'DI') {
          return true;
        }
      }
    }

    return false;
  }

  public isStatusEnabled(): boolean {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_CONFIGURATION_KEY
      ) {
        return false;
      }

      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_LOGISTICAL_KEY
      ) {
        return false;
      }

      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY
      ) {
        if (this.selectedType === 'ACRS') {
          this.disableStatus = true;

          return true;
        } else {
          return false;
        }
      }
    }

    if (!this.isCreateOpenMode) {
      this.disableStatus = false;
    }

    return true;
  }

  public isEventReasonVisible() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY ||
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_LOGISTICAL_KEY
      ) {
        return true;
      }
    }

    return false;
  }

  public isScheduleVisible(): boolean {
    return this.selectedType === 'AS' || this.selectedType === 'TA' || this.selectedType === 'DI' ? true : false;
  }

  public isCriticalityVisible(): boolean {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY
      ) {
        return true;
      }
    }

    return false;
  }

  public getStatusVal() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY &&
        (this.selectedType === BidoNotificationTypeConstants.ACRS_TYPE_CODE ||
          this.selectedType === BidoNotificationTypeConstants.FORM1_TYPE_CODE)
      ) {
        this.disableStatus = true;
        this.generateACRSFormVisible = true;
      }
      this.savedEventStatus = this.bidoNotificationDTO.status;
    }
  }

  public acrsButtonVisibility(): boolean {
    if (
      this.selectedType === BidoNotificationTypeConstants.ACRS_TYPE_CODE ||
      this.selectedType === BidoNotificationTypeConstants.FORM1_TYPE_CODE
    ) {
      if (AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY !== this.bidoNotificationDTO.status) {
        return true;
      }
    }

    return false;
  }

  /*************************************************************************
   * Fetch screen data
   *************************************************************************/
  private loadScreenData() {
    // Measure Tab
    this.loadMeasureTableData();

    // Arising Event Tab
    this.loadArisingEventData();

    // Evolution Tab
    this.loadEvolutionTabData();

    // Get evolution key
    this.getEvolutionKey();

    // DiffusionnTab
    this.loadDiffusionTableData();

    // Documents tab
    this.loadDocumentsTable();

    // Circumstance tab
    this.loadContextTable();
    this.loadSymptomTable();
  }

  /**************************************************************************
   * Evolution Tab Operations
   *************************************************************************/
  private loadEvolutionTabData() {
    if (this.isEvolutionTabVisible && !!this.bidoNotificationDTO.notificationCode) {
      this.eventCreateService
        .findBidoNotificationEvolutionsByNotificationCode(this.bidoNotificationDTO.notificationCode)
        .subscribe((res: BidoNotificationEvolutionDTO[]) => {
          this.notificationEvolutionDTO = res[0] || {};
          if (!!this.notificationEvolutionDTO && !!this.notificationEvolutionDTO.evolutionType) {
            this.evolutionType = this.evolutionSourceMap.get(this.notificationEvolutionDTO.evolutionType);
          }
        });
    }
  }

  private initEvolutionTableData(): void {
    const evolutionTableCols: TableColumn[] = [
      { field: 'evolutionNumber', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionRevisionNumber', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionType', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionLevel', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionCompliance', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'tracked', alignment: 'center', width: '5rem', filterMode: TableColumnFilterMode.Tricheckbox },
      { field: 'evolutionSummary', alignment: 'left', width: '20rem', filterMode: TableColumnFilterMode.Input }
    ];

    this.evolutionTableData = {
      componentId: 'DialogEvolution',
      tableCols: evolutionTableCols,
      tableRows: this.eventService.findBireEvolutionsByEvolutionCriteria({}, undefined, undefined, undefined),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private getEvolutionKey() {
    if (this.isWorkPostponmentTabVisible) {
      if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.notificationCode) {
        this.eventCreateService
          .fetchWorkPostponementEvolutionNumber(this.bidoNotificationDTO.notificationCode)
          .subscribe((res: string) => {
            this.relatedEvolutionKey = res;
          });
      }
    }
  }

  /**************************************************************************
   * Root Cause Tab Operations
   *************************************************************************/
  private setConstants(): void {
    const defectItem = 'global.ata';
    const defectEquipment = 'global.equipment';
    const defetctFunctionalLocation = 'global.functionalLocation';
    const defectPart = 'global.part';
    this.translateService
      .get([defectItem, defectEquipment, defetctFunctionalLocation, defectPart])
      .subscribe((results) => {
        if (!!results) {
          this.rootCauseList = [
            {
              label: results[defectItem],
              value: 'defectItem'
            },
            {
              label: results[defectEquipment],
              value: 'defectEquipment'
            },
            {
              label: results[defetctFunctionalLocation],
              value: 'defetctFunctionalLocation'
            },
            {
              label: results[defectPart],
              value: 'defectPart'
            }
          ];
        }
      });
  }

  public onChangeDefectRootCause(newRootCause: string): void {
    this.displayDefectEquipmentBlock = newRootCause === 'defectEquipment';
    this.displayDefectFunctionalLocationBlock = newRootCause === 'defetctFunctionalLocation';
    this.displayDefectPartBlock = newRootCause === 'defectPart';
    this.displayDefectItemBlock = newRootCause === 'defectItem';

    this.resetRootCauseFields();
  }

  private setSelectedDefect() {
    if (!!this.bidoNotificationDTO.bidoRootCauseDTO) {
      if (!!this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseAssetCode) {
        this.selectedRootCause = 'defectEquipment';
      } else if (!!this.bidoNotificationDTO.bidoRootCauseDTO.rootCausePn) {
        this.selectedRootCause = 'defectPart';
      } else if (!!this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseFlCode) {
        this.selectedRootCause = 'defetctFunctionalLocation';
      } else if (!!this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseChapter) {
        this.selectedRootCause = 'defectItem';
      } else {
        this.selectedRootCause = undefined;
      }
    }
  }

  private loadDefect(): void {
    if (!!this.bidoNotificationDTO.bidoRootCauseDTO) {
      this.setSelectedDefect();
      this.eventAtaCode.chapter = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseChapter;
      this.eventAtaCode.section = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseSection;
      this.eventAtaCode.subject = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseSubject;
      this.eventAtaCode.sheet = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseSheet;
      this.eventAtaCode.marks = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseMark;

      this.rootCausePn = this.bidoNotificationDTO.bidoRootCauseDTO.rootCausePn;
      this.rootCauseQuantity = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseQuantity;
      this.rootCauseFlCode = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseFlCode;
      this.selectedDefectName = this.bidoNotificationDTO.bidoRootCauseDTO.defectName;
      this.selectedDefectLocation = this.bidoNotificationDTO.bidoRootCauseDTO.defectLocation;
      this.rootCauseComment = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseComment;

      this.defectAssetCode = this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseAssetCode as string;
      this.searchEquipments();

      this.displayDefectEquipmentBlock = !StringUtils.isNullOrEmpty(
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseAssetCode
      );

      this.displayDefectFunctionalLocationBlock = !StringUtils.isNullOrEmpty(
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseFlCode
      );

      this.displayDefectPartBlock = !StringUtils.isNullOrEmpty(this.bidoNotificationDTO.bidoRootCauseDTO.rootCausePn);

      this.displayDefectItemBlock = !StringUtils.isNullOrEmpty(
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseChapter
      );
    }
  }

  public isDefectBlockVisible(): boolean {
    if (
      !!this.eventAtaCode.chapter ||
      !!this.defectAssetCode ||
      !!this.rootCausePn ||
      !!this.rootCauseQuantity ||
      !!this.selectedDefectName ||
      !!this.selectedDefectLocation ||
      !!this.rootCauseComment ||
      !!this.rootCauseFlCode
    ) {
      return true;
    }

    return false;
  }

  public openDefectPart(event: MouseEvent): void {
    if (!DomUtils.isTargetDisabled(event.target)) {
      const defectPartTableCols: TableColumn[] = [
        { field: 'pnCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
        { field: 'articleDesignation', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '20rem' },
        { field: 'manufacturerOtanCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
        { field: 'otanPnReference', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
        { field: 'quantityUnit', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '8rem' }
      ];

      const criteria: FindAllBirePnByCriteriaInput = {};
      if (!!this.bidoEquipmentDTO) {
        criteria.familyCode = BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(
          this.bidoEquipmentDTO.familyVariantCode
        );
        criteria.variantCode = BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(
          this.bidoEquipmentDTO.familyVariantCode
        );
      }
      const selectedPnType = this.pnTypeList.find((pnType) => pnType.label.toLowerCase() === 'part');
      if (!!selectedPnType) {
        criteria.birePnDTO = {};
        criteria.birePnDTO.pnType = selectedPnType.value;
      }

      this.defectPartTableData = {
        componentId: this.getComponentName() + '.defectPartDialog',
        tableCols: defectPartTableCols,
        tableRows: this.eventService.findAllBirePnByCriteria(criteria),
        dataKey: 'pnCode',
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };

      this.showDefectPartDialog = true;
    }
  }

  private loadPnTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PN_TYPE_MAP).subscribe((results) => {
      this.pnTypeList = ListUtils.orEmpty(results);
    });
  }

  public onSelectDefectPart(pn: BirePnDTO): void {
    this.rootCausePn = pn.pnCode;

    if (this.rootCauseQuantity === undefined || this.rootCauseQuantity === null) {
      this.rootCauseQuantity = 0;
    }
  }

  private fetchEquipmentName(assetCode, callback) {
    const equipmentId: BidoEquipmentDTOId = {
      equipmentCode: assetCode
    };
    this.eventCreateService.getEquipmentName(equipmentId).subscribe((res) => {
      if (!!callback) {
        callback(res);
      }
    });
  }

  public resetRootCauseAssetField() {
    this.defectAssetCode = undefined;
    this.defectEquipmentName = undefined;
    this.defectEquipmentPn = undefined;
    this.defectEquipmentSn = undefined;
    this.selectedDefectName = undefined;
    this.selectedDefectLocation = undefined;
    this.rootCauseComment = undefined;
    this.isDefectBlockVisible();
  }

  public resetRootCausePNField() {
    this.rootCausePn = undefined;
    this.rootCauseQuantity = undefined;
    this.selectedDefectName = undefined;
    this.selectedDefectLocation = undefined;
    this.rootCauseComment = undefined;
    this.isDefectBlockVisible();
  }

  public showAcceptPostponement(): boolean {
    let showAcceptPostponement = false;
    if (!!this.bidoNotificationDTO) {
      if (
        AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY === this.bidoNotificationDTO.status ||
        AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY === this.bidoNotificationDTO.status
      ) {
        showAcceptPostponement = true;
      } else if (
        AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY === this.bidoNotificationDTO.status &&
        this.sessionService.isSpecificBRASIDAS
      ) {
        showAcceptPostponement = true;
      }
    }

    return showAcceptPostponement && this.isWriteOpenMode;
  }

  public showRefusePostponement(): boolean {
    let showRefusePostponement = false;
    if (!!this.bidoNotificationDTO) {
      if (
        AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY === this.bidoNotificationDTO.status ||
        AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY === this.bidoNotificationDTO.status
      ) {
        showRefusePostponement = true;
      } else if (
        AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY === this.bidoNotificationDTO.status &&
        this.sessionService.isSpecificBRASIDAS
      ) {
        showRefusePostponement = true;
      }
    }

    return showRefusePostponement && this.isWriteOpenMode;
  }

  public onAcceptPostponement(): void {
    // TODO : check if a date is needed
    if (!this.postponementNewLimitDate) {
      this.messageService.showWarningMessage(this.getTranslateKey('postponementDateNotPresent'));

      return;
    }
    if (this.postponementNewLimitDate.getTime() < new Date().getTime()) {
      this.messageService.showWarningMessage(this.getTranslateKey('postponementDateInPast'));

      return;
    }
    const partialMessageKey = this.getTranslateKey('confirmAcceptPostponement');
    this.confirmationService.confirm({
      messageKey: partialMessageKey,
      accept: () => {
        const input: WorkPostponementAccepted = {
          notificationCode: this.bidoNotificationDTO.notificationCode,
          newLimitDate: this.postponementNewLimitDate,
          flightRestriction: this.flightRestriction,
          authorizationNumber: this.postponementAuthorizationNum
        };
        this.eventCreateService.acceptWorkPostponementRequest(input).subscribe((data: BidoNotificationDTO) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('postponementTreated'));
          this.bidoNotificationDTO = data;
          this.updateOpenMode(ComponentOpenMode.Read);
          this.reloadEvent();
        });
      }
    });
  }

  public onRefusePostpone(): void {
    if (!this.workPostponmentRefusalReason) {
      this.messageService.showWarningMessage(this.getTranslateKey('postponementRefusalReasonNotPresent'));

      return;
    }
    const partialMessageKey = this.getTranslateKey('refuseAcceptPostponement');
    this.confirmationService.confirm({
      messageKey: partialMessageKey,
      accept: () => {
        const input: WorkPostponementRefused = {
          notificationCode: this.bidoNotificationDTO.notificationCode,
          refusalReason: this.workPostponmentRefusalReason
        };
        this.eventCreateService.refuseWorkPostponementRequest(input).subscribe((data: BidoNotificationDTO) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('postponementTreated'));
          this.bidoNotificationDTO = data;
          this.updateOpenMode(ComponentOpenMode.Read);
          this.reloadEvent();
        });
      }
    });
  }

  /*************************************************************************
   * Diffusion Tab Operations
   *************************************************************************/
  private loadDiffusionTableData() {
    if (this.isDiffusionTabVisible && !!this.bidoNotificationDTO.notificationCode) {
      this.diffusionTableDataSource.setData([]);
      this.isLoadingDiffusionTable = true;
      this.eventCreateService
        .findBidoNotificationContactsByNotificationCode(this.bidoNotificationDTO.notificationCode)
        .subscribe((res: BidoNotificationContactDTO[]) => {
          res.forEach((data: BidoNotificationContactDTO) => {
            if (!!data && !!data.bidoContactDTO) {
              this.diffusionTableDataSource.addData([
                {
                  customerCode: data.bidoContactDTO.customerCode,
                  customerName: data.bidoContactDTO.customerName,
                  contactName: data.bidoContactDTO.contactName,
                  email: data.bidoContactDTO[this.email]
                }
              ]);
            }
          });
          this.isLoadingDiffusionTable = false;
        });
    }
  }

  public sendDiffusionMail() {
    const contactsList: BidoContactDTO[] = [];
    this.diffusionTableDataSource.dataSelection.forEach((res) => {
      if (!!res && !!res.email) {
        contactsList.push({
          eMail: res.email,
          contactName: res.contactName,
          customerCode: res.customerCode,
          customerName: res.customerName,
          firstName: res.firstName,
          lastName: res.lastName
        });
      }
    });

    const sendEventNotificationToContactsDTO: SendEventNotificationToContactsDTO = {
      bidoNotificationDTOId: {
        notificationCode: this.bidoNotificationDTO.notificationCode as string
      },
      contactList: contactsList
    };
    this.eventCreateService.sendEventNotificationToContacts(sendEventNotificationToContactsDTO).subscribe((res) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('notificationSent'));
    });
  }

  /*************************************************************************
   * Structure Tab Operations
   *************************************************************************/
  public openPartNumberScreen(pnCode: string, ev): void {
    if (!!pnCode) {
      this.openPN(pnCode, ComponentOpenMode.Read);
    }
    ev.stopPropagation();
  }

  private openPN(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /*************************************************************************
   * Arising Event Tab Operations
   *************************************************************************/
  private loadArisingEventData() {
    if (this.isArisingEventTabVisible) {
      this.isLoadingEventsTable = true;
      const eventCriteriaInputDTO: EventCriteriaInputDTO = {
        notNotificationCode: this.bidoNotificationDTO.notificationCode
      };
      this.eventCreateService
        .findLinkingEventData(eventCriteriaInputDTO)
        .subscribe((res: SearchResultsDTO<BidoNotificationOutputDTO>) => {
          this.isLoadingEventsTable = false;
          this.arisingEventTableDataSource.setData([]);
          res.list.forEach((row) => {
            const tableArr: ArisingEventTableColsCustom = {
              notificationCode: row.notificationCode,
              typeCode: row.typeCode,
              asset: row.asset,
              closureDate: row.reportingDate,
              eventType: row.typeCode,
              notificationSubject: row.notificationSubject,
              reportingDate: row.reportingDate,
              reportingPeriodEndDate: row.reportingPeriodEndDate,
              reportingPeriodStartDate: row.reportingPeriodStartDate,
              equipmentCode: row.equipmentCode,
              equipmentFunction: row.equipmentFunction
            };

            this.arisingEventTableDataSource.addData([tableArr]);
          });
        });
    }
  }

  private setNavigationLinkList(): void {
    const operational = this.getTranslateKey('operational');
    const maintenance = this.getTranslateKey('maintenance');
    const configuration = this.getTranslateKey('configuration');
    this.translateService.get([operational, maintenance, configuration]).subscribe((results) => {
      const operationalLabel: string = results ? results[operational] : 'Asset Maintenance Plan';
      const maintenanceLabel: string = results ? results[maintenance] : 'Asset Review';
      const configurationLabel: string = results ? results[configuration] : 'Airworthiness Control';

      this.navigationLinkList = [
        {
          label: operationalLabel,
          command: () => {
            this.openCreateEvent(AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY);
          }
        },
        {
          label: maintenanceLabel,
          command: () => {
            this.openCreateEvent(AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY);
          }
        },
        {
          label: configurationLabel,
          command: () => {
            this.openCreateEvent(AWPropertiesConstants.EVENT_CATEGORY_CONFIGURATION_KEY);
          }
        }
      ];
    });
  }

  private openCreateEvent(code: string) {
    const bidoNotificationDTO: BidoNotificationDTO = {
      bidoNotificationTypeDTO: {
        typeCategory: code
      },
      equipmentCode: this.bidoEquipmentDTO.equipmentCode,
      bidoEquipmentDTO: this.bidoEquipmentDTO,
      notNotificationCode: this.bidoNotificationDTO.notificationCode
    };

    this.openLinkedCreateEventUC(bidoNotificationDTO, ComponentOpenMode.Create);
  }

  private openLinkedCreateEventUC(objectId: BidoNotificationDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public deleteEvents(): void {
    const confirmMessageKey =
      this.arisingEventTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedEvents'
        : 'confirmDeleteSelectedEvent';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const eventIds: BidoNotificationDTOId[] = [];
        this.arisingEventTableDataSource.dataSelection.map((event) => {
          if (!!event && !!event.notificationCode) {
            const dto: BidoNotificationDTOId = {
              notificationCode: event.notificationCode
            };

            eventIds.push(dto);
          }
        });

        this.eventService.removeBidoNotification(eventIds).subscribe(() => {
          const successMessageKey =
            this.arisingEventTableDataSource.dataSelectionCount > 1 ? 'successOnDeleteEvents' : 'successOnDeleteEvent';
          this.messageService.showSuccessMessage(this.getTranslateKey(successMessageKey));
          this.arisingEventTableDataSource.deleteDataSelection();
        });
      }
    });
  }

  public openArisingEventAsset(row: BidoNotificationOutputDTO) {
    if (!!row) {
      this.openAssetUC(row.equipmentCode, ComponentOpenMode.Read, row.equipmentFunction || undefined);
    }
  }

  /*************************************************************************
   * Measure Tab Operations
   *************************************************************************/
  private loadMeasureTableData() {
    if (this.isAssetAtDateTabVisible) {
      const assetAtDateInput: AssetAtDateInput = {
        equipmentCode: this.bidoEquipmentDTO.equipmentCode || '',
        fromDate: this.bidoNotificationDTO.reportingPeriodStartDate
      };
      this.bidoMeasuresDisplayedDataSource.setData([]);
      this.isLoadingMeasureTable = true;
      this.eventCreateService
        .assetAtDateForMeasureTab(assetAtDateInput)
        .subscribe((res: FindBidoCounterReferencesByEquipmentCodeOutput[]) => {
          this.isLoadingMeasureTable = false;
          this.bidoMeasuresDisplayedDataSource.addData(this.transformMeasures(res || []));
          this.loadMeasureChartData();
        });
    }
  }

  private getBidoEquipmentWithRepresentation(code: string) {
    let reportingPeriodStartDate = new Date();

    if (!!this.bidoNotificationDTO.reportingPeriodStartDate) {
      reportingPeriodStartDate = this.bidoNotificationDTO.reportingPeriodStartDate;
    }
    const findBidoEquipmentByEquipmentCodeFromDateInput: FindBidoEquipmentByEquipmentCodeFromDateInput = {
      equipmentCode: code,
      notificationStartDate: reportingPeriodStartDate
    };
    this.eventCreateService
      .findHFBidoEquipmentByEquipmentCodeFromDate(findBidoEquipmentByEquipmentCodeFromDateInput)
      .subscribe((res: HBidoEquipmentDTO) => {
        this.handleTabVisibility();
        if (!!res.operationalStatus) {
          res.operationalStatus = this.propertyOperationalStatus.filter(
            (resp) => resp.value === res.operationalStatus
          )[0].label;
        }
        this.bidoEquipmentDTO = res;
        this.familyVariantEquipmentCode = this.bidoEquipmentDTO.familyVariantCode;
        if (!!res.owner) {
          this.bidoEquipmentDTO.ownerCustomerCode = res.owner.customerCode;
        }
        if (!!res.operator) {
          this.bidoEquipmentDTO.operatorCustomerCode = res.operator.customerCode;
        }

        this.eventService
          .getEquipmentRepresentation(this.bidoEquipmentDTO)
          .subscribe((equipmentRepresentationResult) => {
            this.notificationAsset = StringUtils.orEmpty(equipmentRepresentationResult);
          });
      });
  }

  private getBidoEquipment() {
    let reportingPeriodStartDate = new Date();

    if (!!this.bidoNotificationDTO.reportingPeriodStartDate) {
      reportingPeriodStartDate = this.bidoNotificationDTO.reportingPeriodStartDate;
    }
    const findBidoEquipmentByEquipmentCodeFromDateInput: FindBidoEquipmentByEquipmentCodeFromDateInput = {
      equipmentCode: this.bidoNotificationDTO.equipmentCode as string,
      notificationStartDate: reportingPeriodStartDate
    };

    this.eventCreateService
      .findHFBidoEquipmentByEquipmentCodeFromDate(findBidoEquipmentByEquipmentCodeFromDateInput)
      .subscribe((res: HBidoEquipmentDTO) => {
        this.handleTabVisibility();
        if (!!res.operationalStatus) {
          res.operationalStatus = this.propertyOperationalStatus.filter(
            (resp) => resp.value === res.operationalStatus
          )[0].label;
        }

        this.bidoEquipmentDTO = res;
        this.familyVariantEquipmentCode = this.bidoEquipmentDTO.familyVariantCode;
        if (!!res.owner) {
          this.bidoEquipmentDTO.ownerCustomerCode = res.owner.customerCode;
        }
        if (!!res.operator) {
          this.bidoEquipmentDTO.operatorCustomerCode = res.operator.customerCode;
        }

        this.eventService
          .getEquipmentRepresentation(this.bidoEquipmentDTO)
          .subscribe((equipmentRepresentationResult) => {
            this.notificationAsset = StringUtils.orEmpty(equipmentRepresentationResult);
          });

        this.loadScreenData();

        if (!!this.bidoEquipmentDTO.equipmentCode) {
          this.eventService
            .findAllFlInStructureByEquipmentCodeForDefect(this.bidoEquipmentDTO.equipmentCode)
            .subscribe((results) => {
              this.flCodeList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
            });
        }

        if (!this.isCreateOpenMode) {
          if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.familyVariantCode) {
            this.eventCreateService
              .haspropertyByFamilyCode(
                BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(
                  this.bidoEquipmentDTO.familyVariantCode
                ) as string
              )
              .subscribe((resp: boolean) => {
                this.hasPropertyByCode = !!resp ? resp : false;
              });
          }
        }
        this.isAircraft();
        this.loadCustomerOperatorName();
      });
  }

  public isEstimateCounterVisible() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
          this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory &&
        !this.hasPropertyByCode
      ) {
        return true;
      }
    }

    return false;
  }

  public estimateCounter() {
    this.eventCreateService.generateEstimatedMeasures(this.bidoNotificationDTO).subscribe((res) => {
      this.loadMeasureTableData();
    });
  }

  private initMeasureChart(): void {
    this.measureVariationData = {
      datasets: [],
      labels: []
    };
    this.setMeasureChartOptions();
  }

  private initChart(): void {
    this.chartType = 'line';
    this.usageChartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
    this.usageGraphData = {
      datasets: [
        {
          // tslint:disable-next-line:no-magic-numbers
          data: [], // To do
          label: 'Hours',
          borderColor: '#D3C632',
          backgroundColor: '#D3C632',
          hoverBackgroundColor: '#D3C632',
          fill: false
        },
        {
          // tslint:disable-next-line:no-magic-numbers
          data: [], // To do
          label: 'Cycle',
          borderColor: '#42A5F5',
          backgroundColor: '#42A5F5',
          hoverBackgroundColor: '#42A5F5',
          fill: false
        }
      ],
      labels: [] // To do
    };
  }

  private transformMeasures(listMeasures: FindBidoCounterReferencesByEquipmentCodeOutput[]) {
    return listMeasures.map((obj) => {
      const measureDataRow: MeasureDataRow = {
        _obj: obj,
        counterCode: obj.counterCode,
        counterUnit: obj.counterUnit,
        cumulatedCounterValue: obj.cumulatedCounterValue,
        readingDate: this.dateService.dateWithHourToString(obj.counterDate),
        referenceValue: obj.referenceValue,
        remainingValue: obj.remainingValue,
        dateLimit: this.dateService.dateToString(obj.dateLimit),
        source: obj.source
      };

      return measureDataRow;
    });
  }

  public loadMeasureChartData(): void {
    this.showMeasureChart = false;
    const observables: Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>[] = [];
    if (this.bidoMeasuresDisplayedDataSource.hasData) {
      const setUpCounters: string[] = [];
      this.bidoMeasuresDisplayedDataSource.dataSrc
        .filter((res) => {
          return res.counterCode === this.tsnLabel || res.counterCode === this.csnLabel;
        })
        .forEach((res) => {
          if (res && res._obj && res._obj.bidoEquipmentCounterDto) {
            const counterCode = res.counterCode || '';
            if (setUpCounters.indexOf(counterCode) < 0) {
              const bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId = {
                equipmentCode: res._obj.bidoEquipmentCounterDto.equipmentCode,
                counterCode: res._obj.bidoEquipmentCounterDto.counterCode,
                ratingCode: res._obj.bidoEquipmentCounterDto.ratingCode
                  ? res._obj.bidoEquipmentCounterDto.ratingCode
                  : '_',
                familyCode: res._obj.bidoEquipmentCounterDto.familyCode
              };

              if (counterCode === this.tsnLabel) {
                this.tsn = !!res.cumulatedCounterValue ? `${res.cumulatedCounterValue} ${res.counterUnit}` : '';
              }
              if (counterCode === this.csnLabel) {
                this.csn = !!res.cumulatedCounterValue ? `${res.cumulatedCounterValue} ${res.counterUnit}` : '';
              }
              observables.push(this.eventCreateService.getMeasureDetailTableData(bidoEquipmentCounterDTOId));
              setUpCounters.push(counterCode || '');
            }
          }
        });

      if (observables.length > 0) {
        forkJoin(observables).subscribe((results) => {
          this.showMeasureChart = true;
          this.measureChartDataObj = results;
          this.measureChartDataObj.forEach((element) => {
            this.initDateValues(element);
          });
          this.setMeasureChartData();
        });
      }
    }
  }

  private initDateValues(measures: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) {
    const dateArray: Date[] = [];
    if (!!measures) {
      measures.forEach((st) => {
        if (st.readingDate !== null && st.readingDate !== undefined) {
          dateArray.push(st.readingDate);
        }
      });
    }
    this.startDate = dateArray[0];
    this.endDate = dateArray[0];

    // iterate over array values and update min & max
    dateArray.forEach((v) => {
      this.endDate = v > this.endDate ? v : this.endDate;
      this.startDate = v < this.startDate ? v : this.startDate;
    });
  }

  public setMeasureChartData() {
    if (
      this.measureChartDataObj !== null &&
      this.measureChartDataObj !== undefined &&
      this.measureChartDataObj.length > 0
    ) {
      this.measureVariationData.datasets = [];
      this.measureVariationData.labels = [];
      const dateLabels: Date[] = [];
      this.measureChartDataObj
        .filter((obj) => {
          if (this.selectedMeasureType && obj && obj.length > 0) {
            if (this.selectedMeasureType === 'ALL') {
              return true;
            }
            const getFirstElement = obj[0];

            return getFirstElement.counterCode === this.selectedMeasureType;
          }

          return true;
        })
        .forEach((element) => {
          const getFirstElement = element[0];
          if (getFirstElement) {
            const data: number[] = [];
            const datasetObj = {
              data,
              label: getFirstElement.counterCode === this.tsnLabel ? 'Hours' : 'Cycle',
              borderColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              backgroundColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              hoverBackgroundColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              fill: false
            };
            this.measureVariationData.datasets.push(datasetObj);
            element.forEach((st) => {
              if (
                !!this.startDate &&
                !!this.endDate &&
                !!st.readingDate &&
                st.readingDate >= this.startDate &&
                st.readingDate <= this.endDate
              ) {
                if (st.cumulatedCounterValue !== null && st.cumulatedCounterValue !== undefined) {
                  dateLabels.push(st.readingDate);
                  datasetObj.data.push(parseInt(st.cumulatedCounterValue, 10));
                }
              }
            });
            datasetObj.data.reverse();
          }
        });

      dateLabels.sort((a, b) => {
        return b.getTime() - a.getTime();
      });
      dateLabels.reverse();
      dateLabels.forEach((label) => {
        if (this.measureVariationData.labels.indexOf(this.dateService.dateWithHourToStringWithoutHour(label)) < 0) {
          this.measureVariationData.labels.push(this.dateService.dateWithHourToStringWithoutHour(label));
        }
      });
      this.measureVariationData = { ...this.measureVariationData };
    }
  }

  private setMeasureChartOptions(): void {
    this.measureChartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  public getMonthGapToolTip(row: FindBidoCounterReferencesByEquipmentCodeOutput): string {
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.monthGapToolTip) {
      return row.aPotentialAlertData.monthGapToolTip;
    }

    return '';
  }

  public getAlertIcon(row: FindBidoCounterReferencesByEquipmentCodeOutput): string {
    if (
      row &&
      row.aPotentialAlertData &&
      row.aPotentialAlertData.potentialAlertLevelInt !== null &&
      row.aPotentialAlertData.potentialAlertLevelInt !== undefined
    ) {
      return this.getColorByIconCode(row.aPotentialAlertData.potentialAlertLevelInt);
    }

    return '';
  }

  public getColorByIconCode(iconCode: number): string {
    switch (iconCode.toString()) {
      case ControlConfigConstants.ICON_GREEN_LIGHT_CODE:
        return 'green';
      case ControlConfigConstants.ICON_YELLOW_LIGHT_CODE:
        return 'yellow';
      case ControlConfigConstants.ICON_RED_LIGHT_CODE:
        return 'red';
      case ControlConfigConstants.ICON_NONE_LIGHT_CODE:
        return '';
      case ControlConfigConstants.ICON_GREEN_LED_CODE:
        return 'green';
      case ControlConfigConstants.ICON_YELLOW_LED_CODE:
        return 'yellow';
      case ControlConfigConstants.ICON_RED_LED_CODE:
        return 'red';
      case ControlConfigConstants.ICON_NONE_LED_CODE:
        return '';
      default:
        return '';
    }
  }

  public getAlertIconTooltip(row: FindBidoCounterReferencesByEquipmentCodeOutput): string {
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.alertTooltip) {
      return row.aPotentialAlertData.alertTooltip;
    }

    return '';
  }

  /*************************************************************************
   * Asset At Date Tab Operations
   *************************************************************************/
  public downloadACRSForm() {
    this.eventCreateService.generateAPRSCertificateForACRSEvent(this.bidoNotificationDTO).subscribe((result) => {
      FileUtils.downloadFile(result.fileContent, result.fileName);
    });
  }

  public downloadEASAForm() {
    this.eventCreateService.generateEASACertificateFromACRSEvent(this.bidoNotificationDTO).subscribe((result) => {
      FileUtils.downloadFile(result.fileContent, result.fileName);
    });
  }

  public openHistoricAttributes(): void {
    this.showDynamicAttributesHistoric = true;
    if (!!this.bidoNotificationDTO.notificationCode) {
      this.showDynamicAttributesHistoric = true;
      const attributeIds = this.dynamicAttributesService.toBireNotificationAttributeId(
        this.bidoNotificationDTO.notificationCode as string,
        this.hDynamicAttributesForEvent
      );

      this.dynamicAttributesHistoric = this.eventCreateService.findHBidoNotificationAttributesByAttributeId(
        attributeIds
      );
    }
  }

  public updateACRS() {
    let partialMessageKey = this.getTranslateKey('closeACRSEvent');
    if (this.showForm1()) {
      partialMessageKey = this.getTranslateKey('closeForm1Event');
    }
    this.confirmationService.confirm({
      messageKey: partialMessageKey,
      accept: () => {
        this.eventCreateService.updateBidoNotificationACRS(this.bidoNotificationDTO).subscribe((res) => {
          this.getBidoNotificationData();
          this.disableStatus = true;
        });
      }
    });
  }

  public showForm1(): boolean {
    return (
      !!this.bidoEquipmentDTO &&
      !!this.bidoEquipmentDTO.currentBidoEquipmentData &&
      (this.bidoEquipmentDTO.currentBidoEquipmentData.equipmentFunction ===
        AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY ||
        this.bidoEquipmentDTO.currentBidoEquipmentData.equipmentFunction ===
          AWPropertiesConstants.ITEM_FAMILY_CODE_MAJOR_EQUIPMENT_KEY)
    );
  }

  /*************************************************************************
   * Task Tab Operations
   *************************************************************************/
  private setSearchAssetList(): void {
    const equipmentKey = 'global.equipment';
    const partKey = 'global.part';
    const itemKey = 'global.item';
    this.translateService.get([equipmentKey, partKey, itemKey]).subscribe((results) => {
      const equipmentLabel = !!results ? results[equipmentKey] : 'Equipment';
      const partLabel = !!results ? results[partKey] : 'Part';
      const itemLabel = !!results ? results[itemKey] : 'Item';
      this.searchAssetList = [
        { label: equipmentLabel, value: SearchAsset.Equipment },
        { label: partLabel, value: SearchAsset.Part },
        { label: itemLabel, value: SearchAsset.Item }
      ];
      this.selectedSearchAsset = SearchAsset.Equipment;
    });
  }

  public openPartNumberDialog(event: MouseEvent, source: number): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      this.itemDialogSource = source;
      this.showPartNumberDialog = true;
      this.initPartNumberTableData();
    }
  }

  public clearPartNumber(ev) {
    this.bidoNotificationDTO.movementPn = undefined;
    ev.stopPropagation();
  }

  private initPartNumberTableData(): void {
    const partNumberTableCols: TableColumn[] = [
      { field: 'pnCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
      { field: 'articleDesignation', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '20rem' },
      { field: 'manufacturerOtanCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
      { field: 'otanPnReference', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
      { field: 'quantityUnit', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '8rem' }
    ];
    const criteria: FindAllBirePnByCriteriaInput = {};
    if (!!this.bidoNotificationDTO.movementPn) {
      criteria.birePnDTO = {};
      criteria.birePnDTO.pnCode = this.bidoNotificationDTO.movementPn;
    }
    this.partNumberTableData = {
      componentId: this.getComponentName() + '.partDialog',
      tableCols: partNumberTableCols,
      tableRows: this.eventCreateService.findAllBirePnByCriteria(criteria),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public onSelectedPartNumber(birePnDTO: BirePnDTO): void {
    if (!!birePnDTO) {
      if (this.itemDialogSource === 0) {
        this.bidoNotificationDTO.movementPn = birePnDTO.pnCode;
      } else {
        this.bidoNotificationDTO.taskAssetPn = birePnDTO.pnCode;
      }
    }
  }

  public searchItems(event: MouseEvent, itemSource?: number) {
    if (!this.isReadOpenMode) {
      this.itemSource = itemSource;
      this.showItemDialog = true;

      const itemCol: TableColumn[] = [
        { field: 'familyCode', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'structureType', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'variantCode', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'name', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'chapter', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'section', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'subject', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sheet', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'marks', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'functionCode', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'itemNumber', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'itemType', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'flocType', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'itemFamily', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'configurableItem', filterMode: TableColumnFilterMode.Tricheckbox, alignment: 'left' }
      ];

      const findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput = {
        bireItemDTOCriteria: {
          chapter: this.eventAtaCode.chapter,
          sheet: this.eventAtaCode.sheet,
          marks: this.eventAtaCode.marks,
          section: this.eventAtaCode.section,
          subject: this.eventAtaCode.subject
        }
      };
      this.dialogTableDataItems = {
        componentId: 'ImpactsItemPopupDialog',
        tableCols: itemCol,
        tableRows: this.eventCreateService.findBireItemsBySearchCriteria(findBireItemsBySearchCriteriaInput),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
    }
  }

  public isItemExists(): Observable<SearchResultsDTO<BireItemDTO>> {
    const findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: {
        chapter: this.eventAtaCode.chapter,
        sheet: this.eventAtaCode.sheet,
        marks: this.eventAtaCode.marks,
        section: this.eventAtaCode.section,
        subject: this.eventAtaCode.subject
      }
    };

    return this.eventCreateService.findBireItemsBySearchCriteria(findBireItemsBySearchCriteriaInput);
  }

  public setSelectedItems(selectedObject: BireItemDTO) {
    this.showItemDialog = false;
    if (this.itemSource === 0) {
      this.bidoNotificationDTO.taskAtaChapter = selectedObject.chapter;
      this.bidoNotificationDTO.taskAtaSection = selectedObject.section;
      this.bidoNotificationDTO.taskAtaSubject = selectedObject.subject;
    } else {
      this.eventAtaCode.chapter = selectedObject.chapter;
      this.eventAtaCode.section = selectedObject.section;
      this.eventAtaCode.subject = selectedObject.subject;
      this.eventAtaCode.sheet = selectedObject.sheet;
      this.eventAtaCode.marks = selectedObject.marks;
    }
  }

  private searchTask() {
    if (!!this.bidoNotificationDTO.taskCode) {
      const findBireTaskByCriteriaInput: FindBireTaskByCriteriaInput = {
        bireTaskDTO: {
          taskCode: this.bidoNotificationDTO.taskCode
        }
      };
      this.eventCreateService.findBireTasksByCriteria(findBireTaskByCriteriaInput).subscribe((taskRes) => {
        if (taskRes.list.length > 0) {
          this.bidoNotificationDTO.taskCode = taskRes.list[0].taskCode;
          this.bidoNotificationDTO.taskVersion = taskRes.list[0].taskVersion;
          this.selectedTaskDesignation = taskRes.list[0].taskDesignation;
          this.selectedTaskDescription = taskRes.list[0].taskDescription;
        }
      });
    }
  }

  public taskSearchCode(event: MouseEvent) {
    if (!DomUtils.isTargetDisabled(event.target)) {
      this.showItemTaskSearchPopup = true;
    }
  }

  public addTask(task: BireTaskDTO) {
    this.showItemTaskSearchPopup = false;
    this.bidoNotificationDTO.taskCode = task.taskCode;
    this.bidoNotificationDTO.taskVersion = task.taskVersion;
    this.selectedTaskDesignation = task.taskDesignation;
    this.selectedTaskDescription = task.taskDescription;
  }

  public changeTaskAssetType() {
    this.bidoNotificationDTO.taskAssetCode = undefined;
    this.selectedAssetPN = undefined;
    this.selectedAssetSN = undefined;
    this.selectedAssetName = undefined;
    this.selectedAssetDesignation = undefined;

    this.bidoNotificationDTO.taskAssetPn = undefined;

    this.bidoNotificationDTO.taskAtaChapter = undefined;
    this.bidoNotificationDTO.taskAtaSection = undefined;
    this.bidoNotificationDTO.taskAtaSubject = undefined;
  }

  public resetTaskAssetField(ev) {
    this.bidoNotificationDTO.taskAssetCode = undefined;
    this.selectedAssetPN = undefined;
    this.selectedAssetSN = undefined;
    this.selectedAssetName = undefined;
    this.selectedAssetDesignation = undefined;
    ev.stopPropagation();
  }

  public clearTaskPn(ev) {
    this.bidoNotificationDTO.taskAssetPn = undefined;
    ev.stopPropagation();
  }

  public clearTaskCode(ev) {
    this.bidoNotificationDTO.taskCode = undefined;
    this.bidoNotificationDTO.taskVersion = undefined;
    this.selectedTaskDesignation = undefined;
    this.selectedTaskDescription = undefined;
    ev.stopPropagation();
  }

  /*************************************************************************
   * Documents tab Operations
   *************************************************************************/
  public addDocument(): void {
    this.currentDocumentIndex = -1;
    this.currentDocument = undefined;
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public editDocument(): void {
    if (this.bireDocumentDisplayedDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = this.documentsTable.findIndex((document) => {
        return DTOUtils.equalsBireDocumentDTO(document, this.bireDocumentDisplayedDataSource.dataSelection[0]._obj);
      });
      this.currentDocument = { ...this.bireDocumentDisplayedDataSource.dataSelection[0]._obj };
      this.isReadOnlyDocumentDialog = false;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.bireDocumentDisplayedDataSource.dataSelectionCount === 1) {
      this.currentDocument = this.bireDocumentDisplayedDataSource.dataSelection[0]._obj;
      this.currentDocumentIndex = undefined;
      this.isReadOnlyDocumentDialog = true;
      this.showDocumentDialog = true;
    }
  }

  private loadDocumentsTable() {
    if (!!this.bidoNotificationDTO.notificationCode) {
      this.documentsTable = [];
      this.eventCreateService
        .findAllBidoDocumentationByNotificationCode(this.bidoNotificationDTO.notificationCode)
        .subscribe((results) => {
          this.documentsTable = results || [];
          this.bireDocumentDisplayedDataSource.setData([]);
          this.documentsTable.forEach((doc) => {
            this.bireDocumentDisplayedDataSource.addData([this.getCustomDocumentRow(doc)]);
          });
        });
    }
  }

  private getCustomDocumentRow(newDocument: BidoDocumentationDTO): DocumentRow {
    return {
      _obj: newDocument,
      docCode: newDocument.docCode,
      docExtension: this.showDocExtension(newDocument),
      docName: newDocument.docName,
      docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
      docSize: this.showDocSize(newDocument),
      docSource: newDocument.docSource,
      docCategory: !!newDocument.docType ? this.getLabel(newDocument.docType, this.documentTypes) : undefined
    };
  }

  public showDocExtension(document: BireDocumentDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  public showDocSize(document: BireDocumentDTO): string {
    return document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documentsTable.some((document) => {
        return document.docName === file.name;
      });
      if (fileExists) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnFileExists'));
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (fileContent) {
            const document: BireDocumentDTO = {
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };

            this.documentsTable = [...this.documentsTable, document];
            this.documentsAdded = [...this.documentsAdded, document];
          }
        });
      }

      fileUploader.clear();
    }
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.bireDocumentDisplayedDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.bireDocumentDisplayedDataSource.dataSelection.forEach((selectedDocument) => {
          const documentsAddedWithoutSelection = this.documentsAdded.filter((documentAdded) => {
            return selectedDocument.docName !== documentAdded.docName;
          });
          // list of added objects contains the selection
          if (this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.documentsAdded = documentsAddedWithoutSelection;
          } else {
            const isRemoved = this.documentsAdded.some((documentAdded) => {
              return DTOUtils.equalsBireDocumentDTO(selectedDocument._obj, documentAdded);
            });
            if (!isRemoved && !!selectedDocument && !!selectedDocument.docCode) {
              const documentId: BidoDocumentationDTOId = { docCode: selectedDocument.docCode };
              this.documentsRemoved.push(documentId);
            }
          }
          this.bireDocumentDisplayedDataSource.deleteDataSelection();
        });
        this.documentsTable = this.documentsTable.filter((document) => {
          return !this.bireDocumentDisplayedDataSource.dataSelection.some((selectedDocument) => {
            return DTOUtils.equalsBireDocumentDTO(document, selectedDocument._obj);
          });
        });
      }
    });
  }

  public addNewDocument(newDocument: BidoDocumentationDTO) {
    const searchInDisplayedList = this.documentsTable.find((value) => value.docName === newDocument.docName);
    const searchInAddedList = this.documentsAdded.find((value) => value.docName === newDocument.docName);
    if (!searchInDisplayedList) {
      if (searchInAddedList) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
      } else {
        newDocument.notificationCode = this.bidoNotificationDTO.notificationCode;
        this.documentsAdded.push(newDocument);
        this.bireDocumentDisplayedDataSource.addData([this.getCustomDocumentRow(newDocument)]);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
    }
  }

  public updateDocument(updatedDocument: BidoDocumentationDTO): void {
    if (
      this.currentDocumentIndex !== null &&
      this.currentDocumentIndex !== undefined &&
      this.currentDocumentIndex >= 0
    ) {
      const inAddedList = this.documentsAdded.some((doc) => doc.docCode === updatedDocument.docCode);
      const inUpdatedList = this.documentsUpdated.some(
        (doc) => doc.bidoDocumentationDTO.docCode === updatedDocument.docCode
      );
      if (inAddedList) {
        // added but unsaved
        const indexInAddedList = this.documentsAdded.findIndex((doc) => doc.docCode === updatedDocument.docCode);
        this.documentsAdded[indexInAddedList] = updatedDocument;
      } else if (inUpdatedList) {
        // DB value already updated
        const indexInUpdatedList = this.documentsUpdated.findIndex(
          (doc) => doc.bidoDocumentationDTO.docCode === updatedDocument.docCode
        );
        const updatedDoc: UpdateFieldsOfBidoDocumentationInput = {
          docCategory: updatedDocument.docType as string,
          endOfValidityDate: new Date(), // TODO need to handle as this is not avialable
          bidoDocumentationDTO: updatedDocument,
          docDescription: updatedDocument.docDescription as string,
          docLanguage: updatedDocument.docLanguage as string,
          docName: updatedDocument.docName as string,
          docVersion: updatedDocument.docVersion as string,
          publicationDate: updatedDocument.docPublicationDate as Date
        };
        this.documentsUpdated[indexInUpdatedList] = updatedDoc;
      } else {
        updatedDocument.notificationCode = this.bidoNotificationDTO.notificationCode;
        const updatedDoc: UpdateFieldsOfBidoDocumentationInput = {
          docCategory: updatedDocument.docType as string,
          endOfValidityDate: new Date(), // TODO need to handle as this is not avialable
          bidoDocumentationDTO: updatedDocument,
          docDescription: updatedDocument.docDescription as string,
          docLanguage: updatedDocument.docLanguage as string,
          docName: updatedDocument.docName as string,
          docVersion: updatedDocument.docVersion as string,
          publicationDate: updatedDocument.docPublicationDate as Date
        };
        // non updated DB value
        this.documentsUpdated.push(updatedDoc);
      }
      this.documentsTable[this.currentDocumentIndex] = updatedDocument;
      this.bireDocumentDisplayedDataSource.replaceData(
        this.bireDocumentDisplayedDataSource.dataSrc[this.currentDocumentIndex],
        this.getCustomDocumentRow(updatedDocument)
      );
      this.bireDocumentDisplayedDataSource.dataSelection = [];
    }
  }

  public downloadDocument(event): void {
    FileUtils.downloadFile(event._obj.docFile, event._obj.docName);
  }

  /*************************************************************************
   * Symptom and Context Operations
   *************************************************************************/
  public onChangeContext(dto?: BidoEventExtensionDTO) {
    this.showContextHeader = false;
    let bidoEventExtensionDTO: BidoEventExtensionDTO = {};
    if (!dto) {
      bidoEventExtensionDTO = {
        contextMissionType: this.contextTabData.missionType,
        extensionCode: this.contextTabData.symptomCode,
        notificationCode: this.bidoNotificationDTO.notificationCode
      };
    } else {
      bidoEventExtensionDTO = dto;
    }

    this.eventCreateService
      .getAddedSymptomParameterList(bidoEventExtensionDTO)
      .subscribe((result: BidoParameterDTO[]) => {
        if (!!result) {
          if (!dto) {
            this.contextTableDataSource.setData([]);
          } else {
            this.symptomParameterTableDataSource.setData([]);
          }
          result.forEach((res) => {
            if (!dto) {
              this.contextTableDataSource.addData([
                {
                  code: res.code,
                  extensionCode: res.extensionCode,
                  unit: res.unit,
                  name: res.name
                }
              ]);
            } else {
              this.symptomParameterTableDataSource.addData([
                {
                  code: res.code,
                  extensionCode: res.extensionCode,
                  name: res.name,
                  unit: res.unit
                }
              ]);
            }
          });
        }
      });

    if (!this.contextTabData.symptomCode) {
      this.contextTabData.missionType = undefined;
      this.contextTabData.symptomComment = undefined;
    }
  }

  public loadContextTable() {
    this.contextTableDataSource.setData([]);
    this.eventCreateService
      .findBidoEventExtensionsTypedContextByNotificationCode(this.bidoNotificationDTO.notificationCode as string)
      .subscribe((result: BidoEventSymptomTableOutputDTO) => {
        if (!!result) {
          this.contextTabData = result;
          this.contextTableDataSource.addData(
            !!result.bidoParameterCustomTableDTOList ? result.bidoParameterCustomTableDTOList : []
          );
        }
      });
  }

  public loadSymptomTable() {
    this.symptomRowDataSource.setData([]);
    this.eventCreateService
      .findBidoEventExtensionsTypedSymptomByNotificationCode(this.bidoNotificationDTO.notificationCode as string)
      .subscribe((result: BidoEventSymptomTableOutputDTO[]) => {
        this.symptomTabData = result;

        result.forEach((data) => {
          this.symptomRowDataSource.addData([
            {
              symptomComment: data.symptomComment,
              symptomName: data.symptomName,
              symptomCode: data.symptomCode,
              rowId: Math.random()
            }
          ]);
        });
      });
  }

  private hideSymptomParamheader() {
    this.symptomParameterTableDataSource.dataSelection = [];
    this.showSymptomParamHeader = false;
  }

  public onSymptomRowSelect(event) {
    this.showSymptomHeader = true;
    this.hideSymptomParamheader();
    const data = event.selectedData;
    let dtoArr: BidoEventSymptomTableOutputDTO[] = [];
    dtoArr = this.symptomTabData.filter((res) => {
      return res.symptomName === data.symptomName && res.symptomCode === data.symptomCode;
    });
    if (dtoArr.length > 0) {
      this.symptomParameterTableDataSource.setData([]);
      this.symptomParameterTableDataSource.addData(
        !!dtoArr[0].bidoParameterCustomTableDTOList ? dtoArr[0].bidoParameterCustomTableDTOList : []
      );
    } else {
      const bidoEventExtensionDTO: BidoEventExtensionDTO = {
        extensionCode: this.symptomRowDataSource.dataSelection[0].symptomCode,
        notificationCode: this.bidoNotificationDTO.notificationCode
      };
      this.onChangeContext(bidoEventExtensionDTO);
    }
  }

  private hideSymptomRowHeader() {
    this.showSymptomHeader = false;
  }

  public onSymptomRowUnselect() {
    this.hideSymptomParamheader();
    this.hideSymptomRowHeader();
    this.symptomParameterTableDataSource.setData([]);
    this.showSymptomParamHeader = false;
  }

  public onChangeMissionType() {
    this.showContextHeader = false;
  }

  public onContextRowSelect(_event) {
    this.showContextHeader = true;
  }

  public onContextRowUnselect() {
    this.showContextHeader = false;
  }

  public onSymptomParamRowSelect(_event) {
    this.showSymptomParamHeader = true;
  }

  public onSymptomParamRowUnselect() {
    this.showSymptomParamHeader = false;
  }

  public editSelectedContextParam() {
    this.dataContext = {
      componentId: 'DialogAddSymptomComponent',
      openMode: ComponentOpenMode.Write,
      object: this.contextTableDataSource.dataSelection[0].value as string,
      selectedRow: undefined
    };
    this.showContextTableDialog = true;
  }

  public onAddContextParam(event) {
    this.contextTableDataSource.dataSelection[0].value = event;
    // to avoid a call to update();
    this.contextTableDataSource.replaceData(
      this.contextTableDataSource.dataSelection[0],
      this.contextTableDataSource.dataSelection[0]
    );
    this.addedContextParam.push(this.contextTableDataSource.dataSelection[0]);
    this.contextTableDataSource.dataSelection = [];
    this.showContextHeader = false;
  }

  public onAddSymptomParamParam(event) {
    this.symptomParameterTableDataSource.dataSelection[0].value = event;
    this.symptomParameterTableDataSource.replaceData(
      this.symptomParameterTableDataSource.dataSelection[0],
      this.symptomParameterTableDataSource.dataSelection[0]
    );
    this.addedSymptomParam.push(this.symptomParameterTableDataSource.dataSelection[0]);
    this.symptomParameterTableDataSource.dataSelection = [];
    this.showSymptomParamHeader = false;
  }

  public editSelectedSymptomParam() {
    this.dataContext = {
      componentId: 'DialogAddParamValueComponent',
      openMode: ComponentOpenMode.Write,
      object: this.symptomParameterTableDataSource.dataSelection[0].value as string,
      selectedRow: undefined
    };
    this.showSymptomParamDialog = true;
  }

  public editSymptom(): void {
    this.symptomRowDataSource.dataSrc.filter((data, index) => {
      if (data.symptomCode === this.symptomRowDataSource.dataSelection[0].symptomCode) {
        this.editedSymptomIndex = index;
      }
    });
    this.dataSymptom = {
      componentId: 'DialogAddSymptomComponent',
      openMode: ComponentOpenMode.Write,
      object: this.symptomRowDataSource.dataSelection[0],
      selectedRow: undefined
    };
    this.showSymptomTableDialog = true;
  }

  public addSymptom(): void {
    this.dataSymptom = {
      componentId: 'DialogAddSymptomComponent',
      openMode: ComponentOpenMode.Create,
      object: {},
      selectedRow: undefined
    };
    this.showSymptomTableDialog = true;
  }

  public deleteSelectedSymptom() {
    this.symptomRowDataSource.deleteDataSelection();
    this.showSymptomHeader = false;
  }

  public onUpdateSymptom(event: SymptomRow) {
    this.symptomRowDataSource.replaceData(this.symptomRowDataSource.dataSrc[this.editedSymptomIndex], {
      symptomCode: event.symptomCode,
      symptomName: this.getLabel(event.symptomCode as string, this.symptomNameMap),
      symptomComment: event.symptomComment,
      rowId: event.rowId
    });

    let addedIndex = -1;
    this.symptomAdded.forEach((data, index) => {
      if (data.rowId === event.rowId) {
        addedIndex = index;
      }
    });

    if (addedIndex !== -1) {
      this.symptomAdded[addedIndex] = this.symptomRowDataSource.dataSrc[this.editedSymptomIndex];
    }

    this.symptomRowDataSource.dataSelection = [];
    this.showSymptomHeader = false;
    this.symptomParameterTableDataSource.setData([]);
  }

  public onAddSymptom(event: SymptomRow) {
    let isFound = false;
    this.symptomRowDataSource.dataSrc.forEach((data) => {
      if (data.symptomCode === event.symptomCode) {
        isFound = true;
      }
    });

    if (!isFound) {
      const id = Math.random();
      this.symptomRowDataSource.addData([
        {
          symptomCode: event.symptomCode,
          symptomName: this.getLabel(event.symptomCode as string, this.symptomNameMap),
          symptomComment: event.symptomComment,
          rowId: id
        }
      ]);
      this.symptomAdded.push({
        symptomCode: event.symptomCode,
        symptomName: this.getLabel(event.symptomCode as string, this.symptomNameMap),
        symptomComment: event.symptomComment,
        rowId: id
      });
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryAlreadyExist'));
    }
  }

  /*************************************************************************
   * Opening UC and Dialog Operations
   *************************************************************************/
  public openAsset(rowData) {
    if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentFunction) {
      this.openLinkEquipment(rowData.equipmentCode, this.bidoEquipmentDTO.equipmentFunction);
    }
  }

  public openLinkAssetEquipment(ev) {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.equipmentCode) {
      const bidoEquipmentDTOId: BidoEquipmentDTOId = {
        equipmentCode: this.bidoNotificationDTO.equipmentCode
      };
      this.eventCreateService.findBidoEquipment(bidoEquipmentDTOId).subscribe((res) => {
        this.openLinkEquipment(res.equipmentCode as string, res.equipmentFunction as string);
      });
      ev.stopPropagation();
    }
  }

  public openLinkEquipment(code: string, functionNm: string): void {
    if (code) {
      this.openAssetUC(code, ComponentOpenMode.Read, functionNm);
    }
  }

  public openLinkedEventAsset(code: string) {
    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: code
    };
    this.eventCreateService.findBidoNotification(bidoNotificationDTOId).subscribe((res: BidoNotificationDTO) => {
      if (!!res) {
        const bidoNotificationDTO: BidoNotificationDTO = {
          bidoNotificationTypeDTO: {
            typeCode: res.typeCode
          },
          notificationCode: res.notificationCode,
          typeCode: res.typeCode
        };
        if (!!res.bidoNotificationTypeDTO && res.bidoNotificationTypeDTO.typeCategory === '5-def') {
          this.openDefect(bidoNotificationDTO.notificationCode);
        } else {
          this.openEventUC(bidoNotificationDTO, ComponentOpenMode.Read);
        }
      }
    });
  }

  public openAssetUC(objectId: string | undefined, openMode: ComponentOpenMode, functionNm?: string): void {
    let labelNm;
    let componentName;
    if (functionNm && functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
      labelNm = 'transaction.AircraftFormComponent';
      componentName = 'AircraftFormComponent';
    } else if (functionNm && functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
      labelNm = 'transaction.EngineFormComponent';
      componentName = 'EngineFormComponent';
    } else if (functionNm && functionNm === AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY) {
      labelNm = 'transaction.ToolFormComponent';
      componentName = 'ToolFormComponent';
    } else {
      labelNm = 'transaction.EquipmentFormComponent';
      componentName = 'EquipmentFormComponent';
    }

    const labelKey: string = labelNm;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: componentName as string,
      openMode
    };
    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvent(rowData: BidoNotificationOutputDTO) {
    const bidoNotificationDTO: BidoNotificationDTO = {
      bidoNotificationTypeDTO: {
        typeCode: rowData.typeCode
      },
      notificationCode: rowData.notificationCode,
      typeCode: rowData.typeCode
    };
    this.openEventUC(bidoNotificationDTO, ComponentOpenMode.Read);
  }

  public openEvolutionDialog(event: MouseEvent): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      this.showEvolutionDialog = true;
    }
  }

  private openEventUC(objectId: BidoNotificationDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode
    };
    if (!!objectId) {
      const eventId: BidoNotificationDTOId = {
        notificationCode: objectId.notificationCode as string
      };
      data.objectId = this.serializationService.serialize(eventId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    let labelNm;
    let componentName;
    const functionNm = this.bidoEquipmentDTO.equipmentFunction;

    if (!functionNm || functionNm === AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY) {
      labelNm = 'transaction.EquipmentFormComponent';
      componentName = 'EquipmentFormComponent';
    } else {
      if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        labelNm = 'transaction.EngineFormComponent';
        componentName = 'EngineFormComponent';
      } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
        labelNm = 'transaction.AircraftFormComponent';
        componentName = 'AircraftFormComponent';
      } else {
        labelNm = 'transaction.EquipmentFormComponent';
        componentName = 'EquipmentFormComponent';
      }
    }

    const labelKey = labelNm;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: componentName,
      openMode
    };

    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public onSelectedEvolution(customerEvolution: BireEvolutionDTO): void {
    if (!!customerEvolution) {
      this.notificationEvolutionDTO.evolutionNumber = customerEvolution.evolutionNumber;
      this.notificationEvolutionDTO.evolutionRevisionNumber = customerEvolution.evolutionRevisionNumber;
      if (!!this.notificationEvolutionDTO && !!this.notificationEvolutionDTO.evolutionType) {
        this.evolutionType = this.evolutionSourceMap.get(this.notificationEvolutionDTO.evolutionType);
      }
    }
  }

  public openWorkOrderUC(workOrder: string) {
    if (!this.workOrder || !this.workOrder.projectId || !this.workOrder.woId) {
      return;
    }
    const bidmWorkOrderDTOId: BidmWorkOrderDTOId = {
      projectId: this.workOrder.projectId,
      woId: this.workOrder.woId
    };
    this.openWOUC(bidmWorkOrderDTOId);
  }

  private openWOUC(bidmWorkOrderDTOId: BidmWorkOrderDTOId) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(bidmWorkOrderDTOId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvolutionUC(evolutionKey: string) {
    const evolArr = evolutionKey.split(' ')[0].split('-');
    const bireEvolutionId: BireEvolutionDTOId = {
      evolutionNumber: evolArr[0],
      evolutionRevisionNumber: evolArr[1]
    };
    this.openEvolution(bireEvolutionId, ComponentOpenMode.Read);
  }

  private openEvolution(objectId: BireEvolutionDTOId | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public searchEventCode(event: MouseEvent) {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      if (!this.isFieldEnabled) {
        this.showQuickSearchEventPopup = true;
      }
    }
  }

  private getEvent() {
    this.isShowEventStatus = false;
    if (!!this.bidoNotificationDTO.notNotificationCode) {
      const searchObject: EventCriteriaInputDTO = {
        notificationCode: this.bidoNotificationDTO.notNotificationCode
      };
      this.eventCreateService.findEvent(searchObject).subscribe((res) => {
        if (!!res.list && res.list.length > 0) {
          this.linkedEventType = res.list[0].eventType;
          this.linkedEventSubject = res.list[0].eventSubject;
          this.isShowEventStatus = res.list[0].notificationStatusVisibility || false;
          if (!!res.list[0]) {
            this.linkedEventStatus = this.statusMap.filter((resp) => {
              return resp.value === res.list[0].eventStatus;
            })[0].label;
          }
        }
      });
    }
  }

  public resetEventField() {
    this.bidoNotificationDTO.notNotificationCode = undefined;
    this.linkedEventType = undefined;
    this.linkedEventSubject = undefined;
    this.linkedEventStatus = undefined;
  }

  public searchAsset(event: MouseEvent, source?: number) {
    if (!this.isReadOpenMode && !this.isFieldEnabled && !DomUtils.isTargetDisabled(event.target)) {
      this.showQuickSearchEquipmentPopup = true;
      this.assetDialogSource = source;
    }
  }

  public resetAssetField(ev: Event) {
    this.notificationAsset = '';
    this.bidoNotificationDTO.equipmentCode = undefined;
    ev.stopPropagation();
  }

  public setSelectedEvent(event: EventOVSOutputDTO) {
    if (!!event) {
      if (!!this.bidoNotificationDTO) {
        this.bidoNotificationDTO.notNotificationCode = event.eventCode;

        this.linkedEventSubject = event.eventSubject;
        if (!!event.eventStatus) {
          this.linkedEventStatus = this.statusMap.filter((res) => {
            return res.value === event.eventStatus;
          })[0].label;
        }
        this.linkedEventInfo = event;
        // Event Type Map
        this.eventCreateService
          .findAllBidoNotificationTypeByTypeCategory(event.eventCategory as string)
          .subscribe((res: BidoNotificationTypeDTO[]) => {
            res.forEach((dto) => {
              if (dto.typeCode === event.eventType) {
                this.linkedEventType = dto.typeDescription;
              }
            });
          });
      }
    }
  }

  public setSelectedAsset(event: BidoEquipmentOVSOutputDTO): void {
    if (!!event) {
      if (this.assetDialogSource === 0) {
        this.bidoNotificationDTO.equipmentCode = !!event.equipmentCode ? event.equipmentCode : '';

        if (!this.isCreateOpenMode) {
          this.getBidoEquipment();
        } else {
          this.getBidoEquipmentWithRepresentation(this.bidoNotificationDTO.equipmentCode);
        }
      } else if (this.assetDialogSource === 1) {
        if (!!event) {
          this.bidoNotificationDTO.taskAssetCode = event.equipmentCode;
          this.selectedAssetPN = event.pnCode;
          this.selectedAssetSN = event.sn;
          this.fetchEquipmentName(event.equipmentCode, (name: string) => {
            this.selectedAssetName = !!name ? name : undefined;
          });
          this.selectedAssetDesignation = event.equipmentDesignation;
        }
      } else {
        if (!!event) {
          this.defectAssetCode = event.equipmentCode;
          this.defectEquipmentSn = event.sn;
          this.defectEquipmentPn = event.pnCode;
          this.fetchEquipmentName(event.equipmentCode, (name: string) => {
            this.defectEquipmentName = !!name ? name : undefined;
          });

          const arr = !!event.ataCode ? event.ataCode : undefined;

          if (!!arr) {
            const three = 3;
            const four = 4;
            const five = 5;
            this.eventAtaCode.chapter = arr[1];
            this.eventAtaCode.section = arr[2];
            this.eventAtaCode.subject = arr[three];
            this.eventAtaCode.sheet = arr[four];
            this.eventAtaCode.marks = arr[five];
          }
        }
      }
    }
  }

  public openDefect(objectId: string | undefined): void {
    if (!!objectId) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        openMode: ComponentOpenMode.Read
      };

      const defectId: BidoNotificationDTOId = {
        notificationCode: objectId
      };
      data.objectId = this.serializationService.serialize(defectId);

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  /*************************************************************************
   * Status Update History Popup Operations
   *************************************************************************/
  public openStatusUpdatesPopup() {
    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: this.bidoNotificationDTO.notificationCode as string
    };
    this.showStatusUpdatesPopup = true;
    this.eventStatus = { ...this.bidoNotificationDTO };
    const columns: TableColumn[] = [
      { field: 'timestamp', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true, alignment: 'left' },
      { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'statusState', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'type', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'subject', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'status', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'cause', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'priority', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'owner', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'operator', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input }
    ];
    this.updatesKeyMap.set('statusState', this.propertiesService.getValue('getFuncObjectStatusMap'));
    this.tableStatusUpdatesData = {
      componentId: 'EventCreateComponent.historicPopup',
      tableCols: columns,
      tableRows: this.eventCreateService.findHBidoNotifications(bidoNotificationDTOId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  /**************************************************************************
   * Save Operations
   *************************************************************************/
  public preSavedEvent() {
    if (this.selectedRootCause === 'defectItem') {
      if (
        !this.eventAtaCode.chapter ||
        !this.eventAtaCode.section ||
        !this.eventAtaCode.subject ||
        !this.eventAtaCode.sheet ||
        !this.eventAtaCode.marks
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('itemCodeMandatory'));

        return;
      }

      this.isItemExists().subscribe((result) => {
        if (result.list.length > 0) {
          this.saveEvent();
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('itemCodeMissing'));
        }
      });
    } else {
      this.saveEvent();
    }
  }

  public saveEvent() {
    this.eventHasBeenSaved = false;

    if (this.isScreenValidated()) {
      if (this.isTypeValid()) {
        if (this.checkEventStatus()) {
          if (this.isCreateOpenMode) {
            if (this.isDateFromFuture()) {
              this.bidoNotificationDTO.typeCode = this.selectedType;
              this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCode = this.selectedType;

              if (!!this.sessionService.loggedUser) {
                this.bidoNotificationDTO.statusUser = this.sessionService.loggedUser.login;
              }

              this.bidoNotificationDTO.operatorCode = this.bidoEquipmentDTO.operatorCustomerCode;

              this.bidoNotificationDTO.ownerCode = this.bidoEquipmentDTO.ownerCustomerCode;
              this.bidoNotificationDTO.familyVariantCode = this.bidoEquipmentDTO.familyVariantCode;

              if (!!this.bidoEquipmentDTO.currentBidoEquipmentData) {
                this.bidoNotificationDTO.chapter = this.bidoEquipmentDTO.currentBidoEquipmentData.chapter;
                this.bidoNotificationDTO.section = this.bidoEquipmentDTO.currentBidoEquipmentData.section;
                this.bidoNotificationDTO.sheet = this.bidoEquipmentDTO.currentBidoEquipmentData.sheet;
                this.bidoNotificationDTO.subject = this.bidoEquipmentDTO.currentBidoEquipmentData.subject;
                this.bidoNotificationDTO.marks = this.bidoEquipmentDTO.currentBidoEquipmentData.marks;

                this.bidoNotificationDTO.statusState = this.bidoEquipmentDTO.currentBidoEquipmentData.statusState;
                this.bidoNotificationDTO.statusDate = this.bidoEquipmentDTO.currentBidoEquipmentData.statusDate;
              }

              this.showSaveSpinner = true;
              this.eventCreateService
                .createBidoNotification(this.bidoNotificationDTO)
                .pipe(
                  finalize(() => {
                    this.showSaveSpinner = false;
                  })
                )
                .subscribe((res: BidoNotificationDTOId) => {
                  this.bidoNotificationDTO.notificationCode = res.notificationCode;
                  if (
                    !!this.bidoNotificationDTO &&
                    !!this.bidoNotificationDTO.bidoNotificationTypeDTO &&
                    this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory === '5-def'
                  ) {
                    this.closeComponent();
                    const timer = 10;
                    setTimeout(() => {
                      this.openDefect(this.bidoNotificationDTO.notificationCode);
                    }, timer);
                  } else {
                    this.updateOpenMode(ComponentOpenMode.Read);
                    this.getBidoNotificationData();
                    this.isStatusEnabled();
                    this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateEvent'));
                  }
                });
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('dateFromFuture'));
            }
          } else {
            if (this.isDateFromFuture()) {
              if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.notificationCode) {
                // Attributes
                this.bireNotificationAttributes = this.dynamicAttributesService.toBireEventAttributeId(
                  this.bidoNotificationDTO.notificationCode,
                  this.dynamicAttributesForEvent
                );
                this.setAttributeArray();
              }

              this.setRootCauseTabData();

              this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCode = this.selectedType; // Setting the type field
              this.bidoNotificationDTO.typeCode = this.selectedType; // Setting the type field
              const saveEventInput: SaveEventInput = {
                bidoNotificationDTO: this.bidoNotificationDTO,
                bireNotificationAttributes: this.bireNotificationAttributes,
                bidoDocumentAddedList: this.documentsAdded,
                bidoDocumentRemovedList: this.documentsRemoved,
                bidoDocumentUpdatedList: this.documentsUpdated
              };

              const circumstancesDTO: SaveBidoEventExtensionCustomDTO = this.setCircumstanceTabData();
              if (Object.keys(circumstancesDTO).length > 0) {
                saveEventInput.saveBidoEventExtensionCustomDTO = circumstancesDTO;
              }

              if (this.isEvolutionTabVisible) {
                const bidoNotificationEvolutionDTO: BidoNotificationEvolutionDTO = {
                  evolutionNumber: this.notificationEvolutionDTO.evolutionNumber,
                  evolutionRevisionNumber: this.notificationEvolutionDTO.evolutionRevisionNumber,
                  evolutionType: this.notificationEvolutionDTO.evolutionType,
                  notificationCode: this.bidoNotificationDTO.notificationCode
                };
                saveEventInput.saveBidoNotificationEvolution = bidoNotificationEvolutionDTO;
              }

              this.showSaveSpinner = true;
              this.eventCreateService.saveEvent(saveEventInput).subscribe(
                (res) => {
                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveEvent'));
                  this.resetData();
                  this.getBidoNotificationData();
                  this.showSaveSpinner = false;
                  this.updateOpenMode(ComponentOpenMode.Read);
                },
                (error) => {
                  this.showSaveSpinner = false;
                }
              );
              this.eventHasBeenSaved = true;
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('dateFromFuture'));
            }
          }
        }
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  private resetData() {
    this.bireNotificationAttributes = [];
    this.documentsAdded = [];
    this.documentsUpdated = [];
    this.documentsRemoved = [];
    this.symptomAdded = [];
    this.addedContextParam = [];
    this.addedSymptomParam = [];
  }

  private setRootCauseTabData() {
    // Setting asset block
    if (!!this.defectAssetCode) {
      if (!this.bidoNotificationDTO.bidoRootCauseDTO) {
        this.bidoNotificationDTO.bidoRootCauseDTO = {};
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseAssetCode = this.defectAssetCode;
      } else {
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseAssetCode = this.defectAssetCode;
      }
    }

    if (!!this.rootCausePn) {
      if (!this.bidoNotificationDTO.bidoRootCauseDTO) {
        this.bidoNotificationDTO.bidoRootCauseDTO = {};
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCausePn = this.rootCausePn;
      } else {
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCausePn = this.rootCausePn;
      }
    }

    if (!!this.rootCauseQuantity) {
      if (!this.bidoNotificationDTO.bidoRootCauseDTO) {
        this.bidoNotificationDTO.bidoRootCauseDTO = {};
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseQuantity = this.rootCauseQuantity;
      } else {
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseQuantity = this.rootCauseQuantity;
      }
    }

    if (!!this.eventAtaCode.chapter) {
      if (!this.bidoNotificationDTO.bidoRootCauseDTO) {
        this.bidoNotificationDTO.bidoRootCauseDTO = {};
      }
      this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseChapter = this.eventAtaCode.chapter;
      this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseSection = this.eventAtaCode.section;
      this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseSubject = this.eventAtaCode.subject;
      this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseSheet = this.eventAtaCode.sheet;
      this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseMark = this.eventAtaCode.marks;
    }

    if (!!this.rootCauseFlCode) {
      if (!this.bidoNotificationDTO.bidoRootCauseDTO) {
        this.bidoNotificationDTO.bidoRootCauseDTO = {};
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseFlCode = this.rootCauseFlCode;
      } else {
        this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseFlCode = this.rootCauseFlCode;
      }
    }

    // Setting defect block
    if (!!this.bidoNotificationDTO.bidoRootCauseDTO) {
      this.bidoNotificationDTO.bidoRootCauseDTO.defectLocation = this.selectedDefectLocation;
      this.bidoNotificationDTO.bidoRootCauseDTO.defectName = this.selectedDefectName;
      this.bidoNotificationDTO.bidoRootCauseDTO.rootCauseComment = this.rootCauseComment;
    }
  }

  private setCircumstanceTabData(): SaveBidoEventExtensionCustomDTO {
    const symptomArr: BidoEventExtensionDTO[] = [];
    this.symptomRowDataSource.dataSrc.forEach((res) => {
      symptomArr.push({
        notificationCode: this.bidoNotificationDTO.notificationCode,
        extensionCode: res.symptomCode,
        extensionComment: res.symptomComment
      });
    });

    let eventExtensionDTO: BidoEventExtensionDTO;

    if (!!this.contextTabData.symptomCode) {
      eventExtensionDTO = {
        contextMissionType: this.contextTabData.missionType,
        extensionCode: this.contextTabData.symptomCode,
        extensionComment: this.contextTabData.symptomComment,
        notificationCode: this.bidoNotificationDTO.notificationCode
      };
    } else {
      eventExtensionDTO = {};
    }

    const saveBidoEventExtensionCustomDTO: SaveBidoEventExtensionCustomDTO = {};

    if (!!eventExtensionDTO && Object.keys(eventExtensionDTO).length > 0) {
      const paramDTO: BidoEventParameterDTO[] = [];
      this.contextTableDataSource.data.forEach((row: BidoParameterCustomTableDTO) => {
        paramDTO.push({
          extensionCode: this.contextTabData.symptomCode,
          notificationCode: this.bidoNotificationDTO.notificationCode,
          parameterCode: row.code,
          parameterValue: !!row.value ? row.value : undefined
        });
      });
      eventExtensionDTO.bidoEventParameterDTOList = paramDTO;

      saveBidoEventExtensionCustomDTO.bidoEventExtensionDTO = eventExtensionDTO;
      saveBidoEventExtensionCustomDTO.notificationCode = this.bidoNotificationDTO.notificationCode;
    }

    if (symptomArr.length > 0) {
      this.symptomParameterTableDataSource.data.forEach((param) => {
        symptomArr.forEach((symptom) => {
          if (param.extensionCode === symptom.extensionCode) {
            let paramDTO: BidoEventParameterDTO = {};
            paramDTO = {
              extensionCode: symptom.extensionCode,
              notificationCode: this.bidoNotificationDTO.notificationCode,
              parameterCode: param.code,
              parameterValue: !!param.value ? param.value : undefined
            };
            if (!!symptom) {
              if (symptom.bidoEventParameterDTOList !== undefined) {
                symptom.bidoEventParameterDTOList.push(paramDTO);
              } else {
                symptom.bidoEventParameterDTOList = [];
                symptom.bidoEventParameterDTOList.push(paramDTO);
              }
            }
          }
        });
      });
      saveBidoEventExtensionCustomDTO.bidoEventExtensionDTOList = symptomArr;
      saveBidoEventExtensionCustomDTO.notificationCode = this.bidoNotificationDTO.notificationCode;
    }

    return saveBidoEventExtensionCustomDTO;
  }

  private isDateFromFuture(): boolean {
    let res = false;
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.reportingPeriodStartDate) {
      const now = new Date();
      if (this.bidoNotificationDTO.reportingPeriodStartDate <= now) {
        res = true;
      } else {
        res = false;

        return false;
      }

      if (!!this.bidoNotificationDTO.reportingPeriodEndDate) {
        if (this.bidoNotificationDTO.reportingPeriodEndDate <= now) {
          res = true;
        } else {
          res = false;

          return false;
        }
      }

      if (!!this.bidoNotificationDTO.reportingDate) {
        if (this.bidoNotificationDTO.reportingDate <= now) {
          res = true;
        } else {
          res = false;

          return false;
        }
      }
    }

    return res;
  }

  private isTypeValid(): boolean {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      if (
        this.isCreateOpenMode &&
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY &&
        (this.selectedType === 'AS' || this.selectedType === 'DI' || this.selectedType === 'RP')
      ) {
        this.messageService.showWarningMessage(this.getTranslateKey('cannotCreateEvent'));

        return false;
      }

      if (
        this.isCreateOpenMode &&
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY &&
        this.selectedType === 'MS'
      ) {
        this.messageService.showWarningMessage(this.getTranslateKey('cannotCreateEvent'));

        return false;
      }

      if (this.bidoNotificationDTO.typeCode !== EventCreateComponent.WPR_TYPE_CODE) {
        if (this.bidoNotificationDTO.status === AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY) {
          if (
            !this.defectAssetCode &&
            !this.rootCausePn &&
            !this.rootCauseFlCode &&
            !this.eventAtaCode.chapter &&
            !this.eventAtaCode.section &&
            !this.eventAtaCode.subject &&
            !this.eventAtaCode.sheet &&
            !this.eventAtaCode.marks
          ) {
            this.messageService.showWarningMessage(this.getTranslateKey('rootCauseIsMandatory'));

            return false;
          }
        }
      }

      if (
        !this.isCreateOpenMode &&
        this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
          AWPropertiesConstants.EVENT_CATEGORY_CONFIGURATION_KEY
      ) {
        if (
          this.notificationEvolutionDTO.evolutionNumber === undefined &&
          this.notificationEvolutionDTO.evolutionRevisionNumber === undefined
        ) {
          this.messageService.showWarningMessage(this.getTranslateKey('entryOfValidEvolutionNumber'));

          return false;
        }
      }

      if (!this.isCreateOpenMode && this.selectedType === 'TA') {
        if (this.bidoNotificationDTO.taskCode === undefined || this.bidoNotificationDTO.taskVersion === undefined) {
          this.messageService.showWarningMessage(this.getTranslateKey('entryOfValidTaskIsRequired'));

          return false;
        }
      }
    }

    return true;
  }

  private isScreenValidated(): boolean {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
      const missingFields = this.checkMandatoryFields({
        ...this.bidoNotificationDTO,
        ...this.contextTabData,
        // ...this.bidoEquipmentDTO,
        ...this.notificationEvolutionDTO,
        dynamicAttributes: this.dynamicAttributesForEvent,
        notificationCode: this.bidoNotificationDTO.notificationCode,
        typeCategory: this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory,
        notificationDescription2: this.bidoNotificationDTO.notificationDescription,
        linkedEventStatus: this.linkedEventStatus,
        selectedAssetPN: this.selectedAssetPN,
        selectedDefectLocation: this.selectedDefectLocation,
        contextTableDataSourceTitle: this.contextTableDataSource.dataSrc,
        defectAssetCode: this.defectAssetCode,
        bireDocumentDisplayedDataSourceTitle: this.bireDocumentDisplayedDataSource.dataSrc,
        linkedEventSubject: this.linkedEventSubject,
        linkedEventType: this.linkedEventType,
        selectedAssetName: this.selectedAssetName,
        functionLocationStr: this.functionLocationStr,
        eventAtaCode: this.eventAtaCode.chapter,
        selectedType: this.selectedType,
        requestDecisionAuthorTxt: this.requestDecisionAuthorTxt,
        workPostponmentRefusalReason: this.workPostponmentRefusalReason,
        selectedDefectName: this.selectedDefectName,
        selectedTaskDescription: this.selectedTaskDescription,
        originalDeadlines2: this.originalDeadlines,
        oldAssetName: this.oldAssetName,
        rootCauseQuantity: this.rootCauseQuantity,
        diffusionTableDataSourceTitle: this.diffusionTableDataSource.dataSrc,
        flightRestriction: this.flightRestriction,
        assetDesignation: this.assetDesignation,
        defectEquipmentName: this.defectEquipmentName,
        evolutionType: this.evolutionType,
        symptomRowDataSourceTitle: this.symptomRowDataSource.dataSrc,
        symptomParameterTableDataSourceTitle: this.symptomParameterTableDataSource.dataSrc,
        shopName: this.shopName,
        postponementAuthorizationNum: this.postponementAuthorizationNum,
        shopTechnicalLevel: this.shopTechnicalLevel,
        workPostponmentDecisionAuthor: this.workPostponmentDecisionAuthor,
        isIgnoreInitialDeadlines: this.isIgnoreInitialDeadlines,
        systemReference: this.systemReference,
        selectedSearchAsset: this.selectedSearchAsset,
        selectedTaskDesignation: this.selectedTaskDesignation,
        defectEquipmentPn: this.defectEquipmentPn,
        rootCausePn: this.rootCausePn,
        requestAuthorTxt: this.requestAuthorTxt,
        oldDesignation: this.oldDesignation,
        originalDeadlines: this.originalDeadlines,
        selectedAssetSN: this.selectedAssetSN,
        notificationAsset: this.notificationAsset,
        selectedSystemId: this.selectedSystemId,
        bidoMeasuresDisplayedDataSourceTitle: this.bidoMeasuresDisplayedDataSource.dataSrc,
        isIgnoreInitialDeadlines2: this.isIgnoreInitialDeadlines,
        arisingEventTableDataSourceTitle: this.arisingEventTableDataSource.dataSrc,
        postponementNewLimitDate: this.postponementNewLimitDate,
        rootCauseComment: this.rootCauseComment,
        defectEquipmentSn: this.defectEquipmentSn,
        assetName: this.assetName,
        location: this.location,
        selectedAssetDesignation: this.selectedAssetDesignation,
        rootCauseFlCode: this.rootCauseFlCode,
        selectedRootCause: this.selectedRootCause
      });

      if (
        missingFields.length === 0 &&
        !!this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory &&
        !!this.selectedType &&
        !!this.bidoNotificationDTO.reportingPeriodStartDate &&
        !!this.bidoNotificationDTO.equipmentCode
      ) {
        return true;
      }
    }

    return false;
  }

  private setAttributeArray() {
    const attribute1: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID.toString(),
      attributeValue: this.selectedSystemId
    };

    const attribute2: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_SYSTEM_SOURCE_REFERENCE.toString(),
      attributeValue: this.systemReference
    };

    const attribute3: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER.toString(),
      attributeValue: this.requestAuthorTxt
    };

    const attribute4: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_WO_CONTEXT.toString(),
      attributeValue: this.postponmentRelatedWO
    };

    const attribute5: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR.toString(),
      attributeValue: this.requestDecisionAuthorTxt
    };

    const attribute6: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER.toString(),
      attributeValue: this.postponementAuthorizationNum
    };

    const attribute7: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_LIMIT_DATE.toString(),
      attributeValue: this.postponementNewLimitDate ? this.postponementNewLimitDate.toString() : undefined
    };

    const attribute8: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS.toString(),
      attributeValue: this.flightRestriction
    };

    const attribute9: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.MAINTENANCE_PLAN_ORIGINAL_DEADLINES.toString(),
      attributeValue: this.originalDeadlines
    };

    const attribute10: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.IGNORE_INITIAL_DEADLINE_NEXT_OCCURRENCE_CALCULATION.toString(),
      attributeValue: this.isIgnoreInitialDeadlines ? this.isIgnoreInitialDeadlines.toString() : 'false'
    };

    if (this.specificSNVisibility) {
      const attribute11: BidoNotificationAttributeDTO = {
        notificationCode: this.bidoNotificationDTO.notificationCode,
        attributeId: '140',
        attributeValue: this.shopName
      };

      const attribute12: BidoNotificationAttributeDTO = {
        notificationCode: this.bidoNotificationDTO.notificationCode,
        attributeId: '141',
        attributeValue: this.shopTechnicalLevel
      };

      this.bireNotificationAttributes.push(attribute11);
      this.bireNotificationAttributes.push(attribute12);
    }

    const attribute13: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_REFUSAL_REASON.toString(),
      attributeValue: this.workPostponmentRefusalReason
    };

    const attribute14: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR.toString(),
      attributeValue: this.workPostponmentDecisionAuthor
    };

    const attribute15: BidoNotificationAttributeDTO = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_LOCATION.toString(),
      attributeValue: this.location
    };

    this.bireNotificationAttributes.push(attribute1);
    this.bireNotificationAttributes.push(attribute2);
    this.bireNotificationAttributes.push(attribute3);
    this.bireNotificationAttributes.push(attribute4);
    this.bireNotificationAttributes.push(attribute5);
    this.bireNotificationAttributes.push(attribute6);
    this.bireNotificationAttributes.push(attribute7);
    this.bireNotificationAttributes.push(attribute8);
    this.bireNotificationAttributes.push(attribute9);
    this.bireNotificationAttributes.push(attribute10);
    this.bireNotificationAttributes.push(attribute13);
    this.bireNotificationAttributes.push(attribute14);
    this.bireNotificationAttributes.push(attribute15);
  }

  public checkEventStatus(): boolean {
    if (!this.isCreateOpenMode) {
      const currentEventStatus = this.bidoNotificationDTO.status;
      const previousEventStatus = this.savedEventStatus;

      if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.bidoNotificationTypeDTO) {
        if (!this.selectedType) {
          this.messageService.showErrorMessage(this.getTranslateKey('eventTypeMandatory'));
          if (
            AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
            this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
          ) {
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);
          }

          return false;
        } else if (!this.bidoEquipmentDTO) {
          this.messageService.showErrorMessage(this.getTranslateKey('noEquipmentSelected'));
          if (
            AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
            this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
          ) {
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);
          }

          return false;
        } else if (!this.bidoNotificationDTO.reportingPeriodStartDate) {
          if (
            AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
            this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
          ) {
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);
          }

          return false;
        } else if (!!this.bidoNotificationDTO.reportingPeriodStartDate && !this.isDateFromFuture()) {
          this.messageService.showErrorMessage(this.getTranslateKey('futureDateApplied'));
          if (
            AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
            this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
          ) {
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);
          }

          return false;
        } else if (!!this.bidoNotificationDTO.reportingDate && !this.isDateFromFuture()) {
          this.messageService.showErrorMessage(this.getTranslateKey('futureDateApplied'));
          if (
            AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
            this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
          ) {
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);
          }

          return false;
        } else if (!!this.bidoNotificationDTO.reportingPeriodEndDate && !this.isDateFromFuture()) {
          this.messageService.showErrorMessage(this.getTranslateKey('futureDateApplied'));
          if (
            AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
            this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
          ) {
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);
          }

          return false;
        } else if (
          !!this.bidoNotificationDTO.reportingPeriodStartDate &&
          !!this.bidoNotificationDTO.reportingPeriodEndDate &&
          !this.endAfterStart(
            this.bidoNotificationDTO.reportingPeriodStartDate,
            this.bidoNotificationDTO.reportingPeriodEndDate
          )
        ) {
          this.messageService.showErrorMessage(this.getTranslateKey('eventDateGreaterThanEndDate'));
          if (
            AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
            this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
          ) {
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);
          }

          return false;
        }

        if (
          AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY ===
          this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory
        ) {
          // If we are in DRAFT status or if we do not change to DRAFT status
          if (
            AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY === previousEventStatus ||
            AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY !== currentEventStatus
          ) {
            // wdContext.currentContextElement().setOpenStatusState(WDState.REQUIRED);
            // this.bidoNotificationDTO.status = AWPropertiesConstants.EVENT_STATUS_OPENED_KEY;
          }

          // Si on est au statut OPEN ou si on change pas pour aller au statut OPEN ou DRAFT
          if (
            AWPropertiesConstants.EVENT_STATUS_OPENED_KEY === previousEventStatus ||
            (AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY !== currentEventStatus &&
              AWPropertiesConstants.EVENT_STATUS_OPENED_KEY !== currentEventStatus)
          ) {
            // wdContext.currentContextElement().setUnderInvestigationState(WDState.REQUIRED);
            // this.bidoNotificationDTO.status = AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY;
          }

          // Notification Date obligatoire si Non Draft
          if (AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY !== currentEventStatus) {
            if (!this.bidoNotificationDTO.reportingDate) {
              this.messageService.showErrorMessage(this.getTranslateKey('notificationDateIsRequired'));
              setTimeout(() => {
                this.bidoNotificationDTO.status = previousEventStatus;
              }, EventCreateComponent.TIMEOUT_LIMIT);

              return false;
            }
          }

          if (
            !!this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory &&
            AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY !== currentEventStatus &&
            !this.bidoNotificationDTO.reportingDate
          ) {
            // Le message d'erreur sur la date est automatiquement généré par le selector
            // La liste déroulante est automatiquement repositionnée sur la valeur précédente
            setTimeout(() => {
              this.bidoNotificationDTO.status = previousEventStatus;
            }, EventCreateComponent.TIMEOUT_LIMIT);

            return false;
          } else {
            if (previousEventStatus !== currentEventStatus) {
              if (AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY === previousEventStatus) {
                if (AWPropertiesConstants.EVENT_STATUS_OPENED_KEY !== currentEventStatus) {
                  // Displaying a warning message
                  this.messageService.showErrorMessage(this.getTranslateKey('cannotChangeStatus'));
                  setTimeout(() => {
                    this.bidoNotificationDTO.status = previousEventStatus;
                  }, EventCreateComponent.TIMEOUT_LIMIT);

                  return false;
                }
              } else if (AWPropertiesConstants.EVENT_STATUS_OPENED_KEY === previousEventStatus) {
                // Retour vers le statut Draft interdit
                if (AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY === currentEventStatus) {
                  // Displaying a warning message
                  this.messageService.showErrorMessage(this.getTranslateKey('cannotChangeStatus'));
                  setTimeout(() => {
                    this.bidoNotificationDTO.status = previousEventStatus;
                  }, EventCreateComponent.TIMEOUT_LIMIT);

                  return false;
                }
              } else if (AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY === previousEventStatus) {
                // Retour vers le statut Draft et Open interdit
                if (AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY !== currentEventStatus) {
                  // Displaying a warning message
                  this.messageService.showErrorMessage(this.getTranslateKey('cannotChangeStatus'));
                  setTimeout(() => {
                    this.bidoNotificationDTO.status = previousEventStatus;
                  }, EventCreateComponent.TIMEOUT_LIMIT);

                  return false;
                }
              } else if (AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY === previousEventStatus) {
                // Retour vers le statut Draft et Open interdit
                if (AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY !== currentEventStatus) {
                  // Displaying a warning message
                  this.messageService.showErrorMessage(this.getTranslateKey('cannotChangeStatus'));
                  setTimeout(() => {
                    this.bidoNotificationDTO.status = previousEventStatus;
                  }, EventCreateComponent.TIMEOUT_LIMIT);

                  return false;
                }
              }
              // >>++ MSA : Gemini 11467 : Contrôles actifs même sans changement de statut
            }

            if (!this.location && AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY !== currentEventStatus) {
              // Displaying a warning message
              this.messageService.showErrorMessage(this.getTranslateKey('locationMandatory'));
              setTimeout(() => {
                this.bidoNotificationDTO.status = previousEventStatus;
              }, EventCreateComponent.TIMEOUT_LIMIT);

              return false;
            } else if (
              !this.isRootCauseFilledIn() &&
              !this.hasPropertyByCode &&
              AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY !== currentEventStatus &&
              AWPropertiesConstants.EVENT_STATUS_OPENED_KEY !== currentEventStatus
            ) {
              // Displaying a warning message
              this.messageService.showErrorMessage(this.getTranslateKey('rootCauseMandatory'));
              setTimeout(() => {
                this.bidoNotificationDTO.status = previousEventStatus;
              }, EventCreateComponent.TIMEOUT_LIMIT);

              return false;
            } else if (
              this.hasFMDNotClosed &&
              AWPropertiesConstants.EVENT_STATUS_DRAFT_KEY !== currentEventStatus &&
              AWPropertiesConstants.EVENT_STATUS_OPENED_KEY !== currentEventStatus &&
              AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY !== currentEventStatus
            ) {
              // Displaying a warning message
              this.messageService.showErrorMessage(this.getTranslateKey('formNotClosed'));
              setTimeout(() => {
                this.bidoNotificationDTO.status = previousEventStatus;
              }, EventCreateComponent.TIMEOUT_LIMIT);

              return false;
            } else if (AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY === currentEventStatus) {
              const hasRights = true; // TODO getHasManageRights()
              // Si les droits adequat pour cloturer un evenement
              if (!hasRights) {
                // Displaying a warning message
                this.messageService.showErrorMessage(this.getTranslateKey('rightsNotFound'));
                setTimeout(() => {
                  this.bidoNotificationDTO.status = previousEventStatus;
                }, EventCreateComponent.TIMEOUT_LIMIT);

                return false;
              } else {
                this.bidoNotificationDTO.reportingPeriodEndDate = new Date();
                // this.notificationDateSelectorComponent.setReadOnly(true);
                // // >>++VVA : Gemini 12936 - Prevent from updating end date on defects
                // this.endDateSelectorComponent.setReadOnly(isDefectMode());
                // // <<++VVA : Gemini 12936 - Prevent from updating end date on defects
                // this.equipmentSelectorComponent_AssetAssociatedToTask.setReadOnly(true);
                // this.equipmentSelectorComponent_AssetAssociatedToRootCause.setReadOnly(true);
              }
              this.reopenButtonVisibility();
              this.updateOpenMode(ComponentOpenMode.Read);
            }
          }
        }
      }
    } else {
      if (!this.isDateFromFuture()) {
        this.messageService.showErrorMessage(this.getTranslateKey('dateFromFuture'));

        return false;
      }

      this.bidoNotificationDTO.status = '1-dra';
    }

    return true;
  }

  private isRootCauseFilledIn(): boolean {
    if (
      !!this.defectAssetCode ||
      !!this.rootCausePn ||
      (!!this.eventAtaCode.chapter &&
        !!this.eventAtaCode.section &&
        !!this.eventAtaCode.subject &&
        !!this.eventAtaCode.sheet &&
        !!this.eventAtaCode.marks) ||
      !!this.rootCauseFlCode
    ) {
      return true;
    }

    return false;
  }

  private hasFMDNotClosedFun() {
    this.eventCreateService.hasFmdNotClosed(this.bidoNotificationDTO.notificationCode as string).subscribe((res) => {
      this.hasFMDNotClosed = res;
    });
  }

  private endAfterStart(start: Date, end: Date): boolean {
    return end.getTime() >= start.getTime();
  }

  private setWorkOrderVisibility() {
    this.eventService
      .isBuildingBlockInstalled(BidoFunctionTypeConstants.MODULE_AIRM)
      .subscribe((isBuildingBlockInstalled) => {
        this.isAirMInstalled = isBuildingBlockInstalled;
      });
  }

  public openWorkOrder(code: string) {
    const woCode = code.indexOf('-') !== -1 ? code.split('-')[0] : code;
    this.eventCreateService.findBidmWorkOrderByMandantAndWoCode(woCode).subscribe((data: BidmWorkOrderDTO) => {
      if (!!data.projectId && !!data.woId) {
        const bidmWorkOrderDTOId: BidmWorkOrderDTOId = {
          projectId: data.projectId,
          woId: data.woId
        };
        this.openWOUC(bidmWorkOrderDTOId);
      }
    });
  }

  /******************************
   * ACTIONS ADD MEASURE
   ******************************/

  public addMeasure(): void {
    this.isReadOnlyMeasureUpdateDialog = false;
    if (this.bidoMeasuresDisplayedDataSource.dataSelectionCount === 1) {
      this.currentMeasure = { ...this.bidoMeasuresDisplayedDataSource.dataSelection[0]._obj };
      this.showMeasurePopup = true;
      this.dataMeasure = {
        componentId: 'MeasureUpdatePopupDialog',
        selectedRow: [],
        object: this.currentMeasure,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public showMeasureReport(reportText: string): void {
    if (reportText) {
      this.showMeasurePopup = false;
      this.showMeasureReportText = true;
      this.measureReportText = reportText;
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.bidoNotificationDTO.statusUser,
        currentDate: this.bidoNotificationDTO.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.bidoNotificationDTO.status, this.statusMap),
          value: this.bidoNotificationDTO.status
        },
        nextStatuses: this.workflowStatus
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          const currentState = this.bidoNotificationDTO.status;
          this.bidoNotificationDTO.status = event.data;
          this.preSavedEvent();
          if (!this.eventHasBeenSaved) {
            // Revert status change if save not launched
            this.bidoNotificationDTO.status = currentState;
          }
        }
      }
    });
  }

  public displayReviewToCentral(): boolean {
    const displayReviewToCentral =
      !!this.bidoNotificationDTO &&
      !!this.bidoNotificationDTO.bidoNotificationTypeDTO &&
      (AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY === this.bidoNotificationDTO.status ||
        AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY) &&
      this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY &&
      this.workOrder &&
      this.bidoNotificationDTO.typeCode === EventCreateComponent.WPR_TYPE_CODE &&
      this.sessionService.isSpecificBRASIDAS &&
      this.isWriteOpenMode
        ? true
        : false;

    return displayReviewToCentral;
  }

  public enableReviewToCentral(): boolean {
    const enableReviewToCentral =
      !!this.bidoNotificationDTO &&
      !!this.bidoNotificationDTO.bidoNotificationTypeDTO &&
      AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY === this.bidoNotificationDTO.status &&
      this.bidoNotificationDTO.bidoNotificationTypeDTO.typeCategory ===
        AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY &&
      this.workOrder &&
      this.bidoNotificationDTO.typeCode === EventCreateComponent.WPR_TYPE_CODE &&
      this.sessionService.isSpecificBRASIDAS &&
      this.isWriteOpenMode
        ? true
        : false;

    return enableReviewToCentral;
  }

  public reviewToCentral(): void {
    const input: BidmWorkOrderDTOId = {
      projectId: (this.workOrder as BidmWorkOrderDTO).projectId as string,
      woId: (this.workOrder as BidmWorkOrderDTO).woId as string
    };
    this.eventCreateService.submitRTAToCentral(input).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successSubmitRTAToCentral'));
        this.reloadEvent();
        this.updateOpenMode(ComponentOpenMode.Read);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSubmitRTAToCentral'));
      }
    );
  }

  public addATACode(ev: BireItemDTO) {
    this.eventAtaCode = ev;
  }
}
