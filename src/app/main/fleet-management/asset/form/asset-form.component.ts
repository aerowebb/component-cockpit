// tslint:disable
// TODO: remove tslint disable
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MenuItem, SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Observable, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { BidoEquipmentEvolutionConstant } from '../../../../shared/constants/bido-equipment-evolution-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetInstalledInput } from '../../../../shared/types/api-input-types/fleet-history/asset-installed-input.interface';
import { AssetRemovedInput } from '../../../../shared/types/api-input-types/fleet-history/asset-removed-input.interface';
import { AssetInputDto } from '../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { FindBidoVariantVersionsInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-variant-versions-input.interface';
import { FindBireItemsBySearchCriteriaFMInput } from '../../../../shared/types/api-input-types/fleet-management/find-bire-items-by-search-criteria-fm-input.interface';
import { GetIsConfigurationTrackedInput } from '../../../../shared/types/api-input-types/fleet-management/get-isconfiguration-tracked-input.interface';
import { SaveUsageEquipmentInput } from '../../../../shared/types/api-input-types/fleet-management/save-usage-equipment-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { PartsSearchInput } from '../../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { AssetOutputDto } from '../../../../shared/types/api-output-types/fleet-management/asset-output-dto.interface';
import { BidoDocumentationTableOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-documentation-table-output-dto.interface';
import { BidoNotificationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { FindAllAssetForAirworthinessControlOutput } from '../../../../shared/types/api-output-types/product-structure-management/find-all-asset-for-airworthiness-control-output.interface';
import { AssetStructureTableDto } from '../../../../shared/types/api-types/asset-structure-table-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoCounterReferenceDTOId } from '../../../../shared/types/api-types/bido-counter-reference-dto-id.interface';
import { BidoCounterReferenceDTO } from '../../../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoDocumentationDTOId } from '../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentAttributeDTOId } from '../../../../shared/types/api-types/bido-equipment-attribute-dto-id.interface';
import { BidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/bido-equipment-attribute-dto.interface';
import { BidoEquipmentCounterDTOId } from '../../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentCounterDTO } from '../../../../shared/types/api-types/bido-equipment-counter-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentEvolutionDTOId } from '../../../../shared/types/api-types/bido-equipment-evolution-dto-id.interface';
import { BidoEquipmentEvolutionDTO } from '../../../../shared/types/api-types/bido-equipment-evolution-dto.interface';
import { BidoEquipmentEvolutionInputOutputDTO } from '../../../../shared/types/api-types/bido-equipment-evolution-input-output-dto.interface';
import { BidoEquipmentUsageDTO } from '../../../../shared/types/api-types/bido-equipment-usage-dto.interface';
import { BidoMissionDTO } from '../../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireVariantDTO } from '../../../../shared/types/api-types/bire-variant-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { HBidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/h-bido-equipment-attribute-dto.interface';
import { MissionTableDTO } from '../../../../shared/types/api-types/mission-table-dtO.interface';
import { NotificationTableDto } from '../../../../shared/types/api-types/notification-table-dto.interface';
import { StockTableDto } from '../../../../shared/types/api-types/stock-table-dto.interface';
import { SuperiorAssetDTO } from '../../../../shared/types/api-types/superior-asset-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BireFamilyVariantUtil } from '../../../../shared/utils/bire-family-variant-utils';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { AirworthinessControlFormComponentInput } from '../../../maintenance/airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { ScheduleMaintenanceFormComponentInput } from '../../../maintenance/airworthiness-control/types/schedule-maintenance-form-component-input.interface';

import { AssetFormService } from './asset-form.service';
import { BidtStockMvtTypeDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtSiteDTO } from '../../../../../../generated_files/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { AssetSearchService } from '../search/asset-search.service';
import { SendToRepairDTO } from '../../../../shared/types/api-types/send-to-repair-dto.interface';

interface XYData {
  x: Date;
  y: number;
}

interface XYChartType {
  datasets: {
    data: XYData[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    fill: boolean;
  }[];
}

interface LabeledChartType {
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
interface DocumentTableRow {
  docName?: string;
  docPublicationDate?: string;
  docEndOfValidityDate?: string;
  docDescription?: string;
  docExtension?: string;
  docCode?: string;
  docCategory?: string;
  _obj?: BidoDocumentationDTO;
}
interface VisitTableRow {
  projectId?: number;
  projectNumber?: number;
  projectName?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  customerCode?: string;
  repairCenterCode?: string;
  projectPn?: string;
  projectSn?: string;
  projectNum?: string;
  statusStateText?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  _expand?: boolean;
}

interface FLHistory {
  flCode?: string;
  flDescription?: string;
  flFunction?: string;
  attachementDate?: Date;
  deAttachementDate?: Date;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}

interface UsageData {
  id?: string;
  isUpdateH?: boolean;
  isUpdateC?: boolean;
  monthCode?: string;
  usageValueH?: string;
  usageValueC?: string;
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

interface StockMovementRow {
  stockMvtCode?: string;
  bidtStockMvtType?: BidtStockMvtTypeDTO;
  siteName?: string;
  warehousename?: string;
  bidtStorageBinZoneIssue?: BidtStorageBinDTO;
  bidtStorageBinBinIssue?: BidtStorageBinDTO;
  bidtStorageBinZoneReceipt?: BidtStorageBinDTO;
  bidtStorageBinBinReceipt?: BidtStorageBinDTO;
  smoStatus?: SelectItem;
  documentNum?: string;
  documentDescription?: string;
  statusDate?: Date;
  _bidtSiteReceipt?: BidtSiteDTO;
  _bidtWarehouseReceipt?: BidtWarehouseDTO;
  _procurementRequest?: BidtProcurementRequestDTO;
  _transferOrder?: BidtTransferOrderDTO;
  _deliveryFolder?: BidtDeliveryFolderDTO;
  _stockMvt?: BidtStockMvtDTO;
}

const TSN_COLOR = '#D3C632';
const CSN_COLOR = '#42A5F5';

export abstract class AssetFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly TIMEZONE_VALUE_REGEX: RegExp = /([+-]\d\d):\d\d/;
  public readonly attributesColumnWidth: number = 3;

  @ViewChild('mainAnchor')
  public mainAnchor: ElementRef;

  @ViewChild('measureAnchor')
  public measureAnchor: ElementRef;

  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;

  @ViewChild('eventAnchor')
  public eventAnchor: ElementRef;

  @ViewChild('subEquipmentAnchor')
  public subEquipmentAnchor: ElementRef;

  @ViewChild('sbadAnchor')
  public sbadAnchor: ElementRef;

  @ViewChild('stockAnchor')
  public stockAnchor: ElementRef;

  @ViewChild('usageAnchor')
  public usageAnchor: ElementRef;

  @ViewChild('visitAnchor')
  public visitAnchor: ElementRef;

  @ViewChild('documentAnchor')
  public documentAnchor: ElementRef;

  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;
  public isLoadingMeasureTable: boolean;
  public equipment: AssetOutputDto;
  public equipmentModelCodeAndName: string | undefined;
  public equipmentRatingCodeAndName: string | undefined;
  public equipmentId: BidoEquipmentDTOId;
  public subtitle: string;
  public displayStatusPopup: boolean;
  public criteria: FindBireItemsBySearchCriteriaFMInput;
  public currentDocumentIndex: number;
  public addedDocumentIndex: number;
  public isReadOnlyDocumentDialog: boolean;
  public documentDialogOpenMode: ComponentOpenMode;
  public showHideButton: boolean;
  public operationalFlag: boolean;
  public familyFlag: boolean;
  public snFlag: boolean;
  public registrationFlag: boolean;
  public ratingFlag: boolean;
  public modelFlag: boolean;
  public pnFlag: boolean;
  public geoFlag: boolean;
  public showItemTableDialog: boolean;
  public itemTableData: DialogTableData<BireItemDTO>;
  public maxDate: Date;
  public types: SelectItem[];
  public selectedType: string;
  public showFlStatusFlag: boolean;
  public showUsageDialogFlag: boolean;
  public flHistoryData: FLHistory[];
  public usageHistoryData: UsageData[];
  public openStatusInfo: boolean;
  public fatherEquipmentStatus: {
    statusState?: string;
    statusUser?: string;
    statusDate?: Date;
  };
  public showHideEvent: boolean;
  public timeZoneList: SelectItem[];
  public currentTimeZone: string | undefined;
  private defaultTimezone: string | undefined;
  private previousTimezone: string | undefined;
  public navigationLinkList: MenuItem[];
  public bidoNotificationData: BidoNotificationDTO[];
  public context: string;
  public typeList: LabelValue<string>[];
  public showAlertPopup: boolean;
  public reportAlertMessage: string | undefined;
  public showAlertMessageWarning: boolean;
  public showAlertMessageError: boolean;
  public showDefferedMessage: boolean | undefined;
  public assetLoading: boolean;
  public subequipmentsLoading: boolean;
  public saveUsageEquipment: SaveUsageEquipmentInput;
  public categories: LabelValue<string>[];
  // tslint:disable-next-line:no-any
  public remainingTable: any;
  public subTitleAircraft: string;
  // Show popup boolean
  public showCounterPopup: boolean;
  public showLimitPopup: boolean;
  public showMeasurePopup: boolean;

  public eventsTableDataSource: TableDataSource<NotificationTableDto>;
  public showEventDisplayed: NotificationTableDto[];

  public bidoSbadDisplayed: BidoEquipmentEvolutionInputOutputDTO[];
  public selectedSbad: BidoEquipmentEvolutionInputOutputDTO[];
  public sbadTableCols: TableColumn[];
  public sbadTableColsExpanded: TableColumn[];

  public bidoStockDisplayed: StockTableDto[] | undefined;
  public stockTableCols: TableColumn[];
  public stockTableColsExpanded: TableColumn[];
  public bidoMissionDisplayed: MissionTableDTO[] | undefined;
  public missionTableCols: TableColumn[];

  public bidoVisitDisplayed: VisitTableRow[] | undefined;
  public visitDisplayed: VisitTableRow[] | undefined;
  public visitTableCols: TableColumn[];

  public subEquipmentTableDataSource: TableDataSource<AssetStructureTableDto>;

  private documentsAdded: BidoDocumentationTableOutputDTO[];
  private documentsUpdated: BidoDocumentationTableOutputDTO[];
  private documents: BidoDocumentationTableOutputDTO[];
  public documentTableDataSource: TableDataSource<DocumentTableRow>;
  public showAddDocumentDialog: Boolean;
  public currentDocument: BidoDocumentationDTO | undefined;
  public documentTypes: SelectItem[];

  public interventionOption: string;
  public valueResettable: boolean;

  public measuresTableCols: TableColumn[];
  public bidoMeasuresDisplayed: MeasureDataRow[];
  public selectedMeasure: MeasureDataRow[];
  public dataMeasure: PopupEntry<FindBidoCounterReferencesByEquipmentCodeOutput>;
  public measureTableFilteredRowsNb: number;
  public currentMeasure: FindBidoCounterReferencesByEquipmentCodeOutput;

  public measuresUpdateTableCols: TableColumn[];
  public bidoMeasuresUpdateDisplayed: BidoCounterReferenceDTO[];
  public dataMeasureUpdate: PopupEntry<BidoCounterReferenceDTO>;
  public currentMeasureUpdateIndex: number;
  public measureUpdateTableFilteredRowsNb: number;
  public currentMeasureUpdate: BidoCounterReferenceDTO;
  public bidoMeasureUpdate: BidoCounterReferenceDTO;
  public bidoMeasureUpdateId: string;
  public isReadOnlyMeasureUpdateDialog: boolean;
  public isNewMeasureUpdate: boolean;

  public propertyLocations: LabelValue<string>[];
  public propertyPositions: LabelValue<string>[];
  public propertyZones: LabelValue<string>[];
  public propertyCountries: LabelValue<string>[];
  public propertyFunctions: LabelValue<string>[];
  public allFunctions: LabelValue<string>[];
  public propertyAllCountries: LabelValue<string>[];
  public propertyOperationalStatus: LabelValue<string>[];
  public propertyAircraftStatus: LabelValue<string>[];
  public evolutionSourceList: LabelValue<string>[];
  public groundEquipmentTypes: LabelValue<string>[];
  public usageStorageStatus: string;
  public storageStatus: string;
  public usageStatus: string;
  public name: string | undefined;
  public code: string | undefined;
  public manufacturer: string;
  public locationValue: string | undefined;
  public operatorCustomerName: string | undefined;
  public ownerCustomerName: string | undefined;
  public configurationTracked: boolean;
  public function: string;
  public position: string;
  public fatherEquipment: SuperiorAssetDTO;
  public superiorAircraftFront: string;
  public superiorEngineFront: string;
  public isInstalledOnAircraft: boolean;

  public dialogTableDataItems: DialogTableData<BireItemDTO>;
  public showItemsDialog: boolean;

  public isForUpdate: boolean;
  public toc;
  public selectedAnchor: string | undefined;
  public editDataPopupFlag: boolean;
  public editPopupData: BidoEquipmentDTO;
  public statusDialog: boolean;
  public workPackageListToShowVisible: boolean;
  public showVisible: boolean;
  public showLockFlag: boolean;

  /*DYNAMIC Attributes*/
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForEquipment: BidoEquipmentAttributeDTO[];
  public dynamicAttributes: DynamicAttributes[];
  public dynamicAttributesHistoric: Observable<HBidoEquipmentAttributeDTO[]>;

  /* Tab Management */
  public selectedTraceability: string;
  public selectedUnit: string;
  public familyVariant: BireFamilyDTO;
  public itemNumber: string | undefined;

  /* DropDown Lists */

  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;

  public dialogTableDataFamilyCode: DialogTableData<BireFamilyDTO>;
  public showFamilyCodeDialog: boolean;

  public dialogTableDataPnCode: DialogTableData<BirePnDTO>;
  public showPnCodeDialog: boolean;

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public countryZoneMap: Map<string, string>;

  public showDialogOwner: boolean;
  public showDialogOperator: boolean;
  public dialogTableDataOwner: DialogTableData<BidoCustomerDTO>;
  public dialogTableDataOperator: DialogTableData<BidoCustomerDTO>;
  public dialogTableFlHistory: DialogTableData<FLHistory>;

  // Event
  public currentEvent: NotificationTableDto | undefined;
  public eventPopupOpenMode: ComponentOpenMode;
  public showEventPopup: boolean;
  private eventAdded: BidoNotificationDTO[];
  public assetTitle: string;

  // SBAD
  public currentSbad: BidoEquipmentEvolutionInputOutputDTO | undefined;
  public sbadPopupOpenMode: ComponentOpenMode;
  public showSbadPopup: boolean;
  private currentSbadIndex: number;
  private sbadAdded: BidoEquipmentEvolutionInputOutputDTO[];
  private sbadAddedList: BidoEquipmentEvolutionInputOutputDTO[];
  private sbadRemoved: BidoEquipmentEvolutionDTOId[];
  public usageGraphData: LabeledChartType;
  public chartContentReady: boolean;
  public isLoadingEventTable: boolean;
  public isLoadingSbad: boolean;
  public isLoadingStockTable: boolean;
  public isLoadingVisitTable: boolean;
  public isLoadingDocumentTable: boolean;

  public startDate: Date;
  public endDate: Date;
  public tsn: string | undefined;
  public csn: string | undefined;
  public measureVariationData: XYChartType;
  // tslint:disable-next-line:no-any
  public measureChartOptions: any;
  // tslint:disable-next-line:no-any
  public usageChartOptions: any;
  public measureTypes: SelectItem[];
  public selectedMeasureType: string | undefined;
  private measureChartDataObj: FindBidoMeasuresByEquipmentAndCounterCodesOutput[][];
  public showMeasureChart: boolean;
  private followedInRatingVisibility: boolean;
  private counterMap: Map<string, BireMeasureReferenceDTO>;

  public readonly bidoEquipmentEvolutionConstant: typeof BidoEquipmentEvolutionConstant;

  // Stock
  public showCreateReceipt: boolean;
  public csnLabel: string;
  public tsnLabel: string;

  public showMeasureReportText: boolean;
  public measureReportText: string;
  // Airowthiness application
  public partiallyApplied: string | undefined;
  public fullyApplied: string | undefined;
  public notAppliable: string | undefined;

  public eventStatus: LabelValue<string>[];
  public showSaveSpinner: boolean;

  public filterStatusMap: LabelValue<string>[];

  // Color
  public COLOR_NONE: string = '';
  public COLOR_RED: string = 'red';
  public COLOR_GREEN: string = 'green';
  public COLOR_YELLOW: string = 'yellow';
  public NOT_ACTIVATED: string = 'Not Activated';

  public showSearchPartDialog: boolean;
  public partsSearch: PartsSearchInput;

  public displayLockUnlockButton: boolean = true;

  public awPropertiesConstants: typeof AWPropertiesConstants;
  public readonly bidtStockMvtConstants: typeof BidtStockMvtConstants;
  public mmfSiteText?: string;
  public mmfWarehouseText?: string;
  public mmfStorageZoneText?: string;
  public mmfStorageBinText?: string;

  // Material Management Full
  public stockMvtTableDataSource: TableDataSource<StockMovementRow>;

  // map status
  public movementsStatusMap: SelectItem[];
  public stockMovementRows: StockMovementRow[];

  // button send to repair
  public sendToRepairPopupVisible: boolean;
  public siteList: SelectItem[];
  public partnerList: SearchResultsDTO<BidoCustomerDTO>;

  // operational status
  public operationalStatus: string;

  // document map
  public transferOrderTypeMap: LabelValue<number>[];
  public procurementRequestTypeMap: LabelValue<string>[];

  public bidoEquipmentCounterDTOIds: BidoEquipmentCounterDTOId[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly assetFormService: AssetFormService,
    private readonly confirmationService: ConfirmationService,
    public readonly translateService: TranslateService,
    public readonly dynamicAttributesService: DynamicAttributesService,
    public readonly sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly propertiesService: PropertiesService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly assetSearchService: AssetSearchService
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

    this.bidoEquipmentEvolutionConstant = BidoEquipmentEvolutionConstant;

    this.awPropertiesConstants = AWPropertiesConstants;
    this.bidtStockMvtConstants = BidtStockMvtConstants;
    this.mmfSiteText = '';
    this.mmfWarehouseText = '';
    this.mmfStorageBinText = '';
    this.initChart();
    this.initMeasureChart();
    this.setNavigationLinkList();
    this.isForUpdate = true;
    this.showFamilyCodeDialog = false;
    this.currentTimeZone = undefined;
    this.timeZoneList = [];
    this.defaultTimezone = undefined;
    this.isLoadingMeasureTable = false;
    this.propertyCountries = [];
    this.propertyZones = [];
    this.propertyFunctions = [];
    this.allFunctions = [];
    this.propertyLocations = [];
    this.propertyPositions = [];
    this.propertyAllCountries = [];
    this.propertyOperationalStatus = [];
    this.propertyAircraftStatus = [];
    this.bidoNotificationData = [];
    this.selectedAnchor = undefined;
    this.showMeasurePopup = false;
    this.showHideButton = true;
    this.maxDate = new Date();
    this.selectedType = 'graph';
    this.translateService
      .get([`${this.getComponentName()}.usageModel`, `${this.getComponentName()}.flights`])
      .subscribe((data: string[]) => {
        this.types = [
          { label: data[`${this.getComponentName()}.usageModel`], value: 'graph' },
          { label: data[`${this.getComponentName()}.flights`], value: 'table' }
        ];
      });
    // this.types = [{ label: 'Usage Model', value: 'graph' }, { label: 'Flights', value: 'table' }];
    this.measureTypes = [];

    this.attributeIdValueMap = new Map<string, string>();
    this.countryZoneMap = new Map<string, string>();
    this.selectedSbad = [];
    this.selectedMeasure = [];
    this.showEventDisplayed = [];
    this.bidoMeasuresDisplayed = [];
    this.bidoMeasuresUpdateDisplayed = [];
    this.selectedSbad = [];
    this.typeList = [];
    this.remainingTable = [];
    this.bidoSbadDisplayed = [];
    this.stockTableCols = [];
    this.stockTableColsExpanded = [];
    this.bidoStockDisplayed = [];
    this.documentsAdded = [];
    this.documents = [];
    this.documentsUpdated = [];
    this.categories = [];
    this.stockMovementRows = [];
    this.editDataPopupFlag = false;
    this.showAddDocumentDialog = false;
    this.isReadOnlyDocumentDialog = true;
    this.documentDialogOpenMode = ComponentOpenMode.Read;
    this.documentTypes = [];
    this.operationalFlag = false;
    this.familyFlag = false;
    this.snFlag = false;
    this.registrationFlag = false;
    this.ratingFlag = false;
    this.modelFlag = false;
    this.pnFlag = false;
    this.geoFlag = false;
    this.showItemTableDialog = false;
    this.showFlStatusFlag = false;
    this.flHistoryData = [];
    this.usageHistoryData = [];
    this.openStatusInfo = false;
    this.statusDialog = false;
    this.showHideEvent = true;
    this.showAlertPopup = false;
    this.showAlertMessageWarning = false;
    this.showAlertMessageError = false;
    this.showDefferedMessage = false;
    this.isLoadingEventTable = false;
    this.isLoadingDocumentTable = false;
    this.isLoadingSbad = false;
    this.isLoadingStockTable = false;
    this.isLoadingVisitTable = false;
    this.showUsageDialogFlag = false;
    this.evolutionSourceList = [];
    this.filterStatusMap = [];

    this.editPopupData = {};
    this.bidoMissionDisplayed = [];
    this.bidoVisitDisplayed = [];
    this.visitDisplayed = [];
    this.currentDocumentIndex = -1;
    this.addedDocumentIndex = -1;
    this.workPackageListToShowVisible = false;
    this.showVisible = false;
    this.assetLoading = false;
    this.saveUsageEquipment = {
      updateBidoEquipmentUsageDTOList: [],
      createBidoEquipmentUsageDTOList: []
    };

    this.equipment = {
      bidoEquipmentDTO: {},
      measureTableDtos: [],
      bidoDocumentationTableOutputDTOs: [],
      stockOutputDto: {},
      superiorAsset: {},
      superiorAircraft: {},
      superiorEngine: {},
      usageCounterCalculationDTO: {},
      saveUsageEquipment: {
        updateBidoEquipmentUsageDTOList: []
      }
    };
    this.fatherEquipment = {};
    this.superiorAircraftFront = '';
    this.superiorEngineFront = '';
    this.sendToRepairPopupVisible = false;

    this.transferOrderTypeMap = [];
    this.procurementRequestTypeMap = [];

    this.bidoEquipmentCounterDTOIds = [];

    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.registerPageTocEntrySelectedObservable();
    this.initLists();
    this.initSubEquipmentTableDataSource();
    this.initEventsTableDataSource();
    this.initDocumentTableDataSource();
    this.loadTablesHeader();
    this.initStockMvtTable();
    this.fillDropDown();

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.assetFormService.getFamilyFunctionMap());
    this.keyMap.set('structureType', this.assetFormService.getStructureTypeMap());

    // TODO
    this.usageStatus = 'Not Activated';
    this.storageStatus = 'Not Activated';
    this.usageStorageStatus = 'Not Activated';

    this.bidoMeasuresDisplayed = [];
    this.selectedMeasure = [];

    // event
    this.currentEvent = undefined;
    this.eventPopupOpenMode = ComponentOpenMode.Read;
    this.showEventPopup = false;
    this.eventAdded = [];

    // sbad
    this.currentSbad = undefined;
    this.sbadPopupOpenMode = ComponentOpenMode.Read;
    this.showSbadPopup = false;
    this.currentSbadIndex = -1;
    this.sbadAdded = [];
    this.sbadAddedList = [];
    this.sbadRemoved = [];
    this.measureChartDataObj = [];
    this.showMeasureChart = false;
    this.selectedMeasureType = 'ALL';

    this.chartContentReady = false;

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Change the DropDownList content regarding the langage
      this.fillDropDown();
    });

    // Stock
    this.showCreateReceipt = false;

    this.partiallyApplied = undefined;
    this.fullyApplied = undefined;
    this.notAppliable = undefined;

    this.showSearchPartDialog = false;
    this.partsSearch = {};
  }

  public getComponentName(): string {
    return 'AssetFormComponent';
  }

  private initChart(): void {
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
          label: this.translateService.instant('global.hours'),
          borderColor: '#D3C632',
          backgroundColor: '#D3C632',
          hoverBackgroundColor: '#D3C632',
          fill: false
        },
        {
          // tslint:disable-next-line:no-magic-numbers
          data: [], // To do
          label: this.translateService.instant('global.cycles'),
          borderColor: '#42A5F5',
          backgroundColor: '#42A5F5',
          hoverBackgroundColor: '#42A5F5',
          fill: false
        }
      ],
      labels: [] // To do
    };
  }

  private initMeasureChart(): void {
    this.measureVariationData = {
      datasets: []
    };
    this.setMeasureChartOptions();
  }

  public initLists() {
    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Reset the right attribute name regarding the langage
    });
  }

  public ngOnInit() {
    this.translateADApplicationText();
    this.loadDocumentTypes();
    this.loadEvolutionSourceList();
    super.ngOnInit();

    // Load counter labels
    const observablesCounterLabel: Observable<string>[] = [
      this.assetFormService.getCsnLabelForAirworthinessControl(),
      this.assetFormService.getTsnLabelForAirworthinessControl()
    ];

    forkJoin(observablesCounterLabel).subscribe(([cycleBireMeasureReferenceLabel, timeBireMeasureReferenceLabel]) => {
      this.csnLabel = cycleBireMeasureReferenceLabel;
      this.tsnLabel = timeBireMeasureReferenceLabel;
      this.measureTypes = [
        { label: this.translateService.instant('global.all').toUpperCase(), value: 'ALL' },
        { label: this.tsnLabel, value: this.tsnLabel },
        { label: this.csnLabel, value: this.csnLabel }
      ];

      if (this.componentData) {
        this.updateOpenMode(this.componentData.openMode);
        if (this.componentData.objectId && this.componentData.objectId.length > 0) {
          this.isForUpdate = true;
          this.equipmentId = this.serializationService.deserialize(this.componentData.objectId);
          this.loadSubEquipments();
          this.loadAirworthiness();
        } else {
          this.context = 'tab.createMode';
          this.displayComponentContext(this.context, this.isCreateOpenMode);
        }
        this.loadEquipment();
      }

      if (this.isCreateOpenMode) {
        this.equipment.bidoEquipmentDTO.operationalStatus = AWPropertiesConstants.AIRCRAFT_STATUS_UNKNKOWN_KEY;
        if (this.isTool()) {
          this.equipment.bidoEquipmentDTO.equipmentFunction =
            AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY;
        }
      }
    });

    // Site list
    this.assetSearchService.findAllBireSite().subscribe({
      next: (sites) => {
        this.siteList = ListUtils.orEmpty(sites)
          .filter((site) => !!site.siteId && !StringUtils.isNullOrEmpty(site.siteName))
          .map((site) => {
            return {
              label: `${site.siteCode} - ${site.siteName}`,
              value: site.siteId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });

    // Partner list
    this.assetSearchService.findBidoCustomersBySearchCriteria({}).subscribe((results) => {
      if (results) {
        this.partnerList = results;
      }
    });

    if (this.isAircraft()) {
      this.toc = [
        {
          id: 'mainAnchor',
          anchor: this.mainAnchor,
          label: this.translateService.instant('page.mainData')
        },
        {
          id: 'subEquipmentAnchor',
          anchor: this.subEquipmentAnchor,
          label: this.translateService.instant('global.structure')
        },
        {
          id: 'measureAnchor',
          anchor: this.measureAnchor,
          label: this.translateService.instant(this.getTranslateKey('measures'))
        },
        {
          id: 'generalAnchor',
          anchor: this.generalAnchor,
          label: this.translateService.instant('page.additionalData')
        },
        {
          id: 'eventAnchor',
          anchor: this.eventAnchor,
          label: this.translateService.instant(this.getTranslateKey('events'))
        },
        {
          id: 'sbadAnchor',
          anchor: this.sbadAnchor,
          label: this.translateService.instant(this.getTranslateKey('airworthinessDocuments'))
        },
        {
          id: 'usageAnchor',
          anchor: this.usageAnchor,
          label: this.translateService.instant(this.getTranslateKey('usage'))
        },
        {
          id: 'visitAnchor',
          anchor: this.visitAnchor,
          label: this.translateService.instant(this.getTranslateKey('visits'))
        },
        {
          id: 'documentAnchor',
          anchor: this.documentAnchor,
          label: this.translateService.instant(this.getTranslateKey('document'))
        }
      ];
    }
    if (this.isTool()) {
      this.toc = [
        {
          id: 'mainAnchor',
          anchor: this.mainAnchor,
          label: this.translateService.instant('page.mainData')
        },
        {
          id: 'subEquipmentAnchor',
          anchor: this.subEquipmentAnchor,
          label: this.translateService.instant('global.structure')
        },
        {
          id: 'measureAnchor',
          anchor: this.measureAnchor,
          label: this.translateService.instant(this.getTranslateKey('tabMeasures'))
        },
        {
          id: 'generalAnchor',
          anchor: this.generalAnchor,
          label: this.translateService.instant('page.additionalData')
        },
        {
          id: 'eventAnchor',
          anchor: this.eventAnchor,
          label: this.translateService.instant(this.getTranslateKey('tabEvents'))
        },
        {
          id: 'sbadAnchor',
          anchor: this.sbadAnchor,
          label: this.translateService.instant(this.getTranslateKey('airworthinessDocuments'))
        },
        {
          id: 'stockAnchor',
          anchor: this.stockAnchor,
          label: this.translateService.instant(this.getTranslateKey('tabStock'))
        },
        {
          id: 'usageAnchor',
          anchor: this.usageAnchor,
          label: this.translateService.instant(this.getTranslateKey('tabUsage'))
        },
        {
          id: 'visitAnchor',
          anchor: this.visitAnchor,
          label: this.translateService.instant(this.getTranslateKey('tabVisit'))
        },
        {
          id: 'documentAnchor',
          anchor: this.documentAnchor,
          label: this.translateService.instant(this.getTranslateKey('tabDocument'))
        }
      ];
    }
    if (!this.isAircraft() && !this.isTool()) {
      this.toc = [
        {
          id: 'mainAnchor',
          anchor: this.mainAnchor,
          label: this.translateService.instant('page.mainData')
        },
        {
          id: 'subEquipmentAnchor',
          anchor: this.subEquipmentAnchor,
          label: this.translateService.instant(this.getTranslateKey('structure'))
        },
        {
          id: 'measureAnchor',
          anchor: this.measureAnchor,
          label: this.translateService.instant(this.getTranslateKey('measures'))
        },
        {
          id: 'generalAnchor',
          anchor: this.generalAnchor,
          label: this.translateService.instant('page.additionalData')
        },
        {
          id: 'eventAnchor',
          anchor: this.eventAnchor,
          label: this.translateService.instant(this.getTranslateKey('events'))
        },
        {
          id: 'sbadAnchor',
          anchor: this.sbadAnchor,
          label: this.translateService.instant(this.getTranslateKey('airworthinessDocuments'))
        },
        {
          id: 'stockAnchor',
          anchor: this.stockAnchor,
          label: this.translateService.instant(this.getTranslateKey('stock'))
        },
        {
          id: 'usageAnchor',
          anchor: this.usageAnchor,
          label: this.translateService.instant(this.getTranslateKey('usage'))
        },
        {
          id: 'visitAnchor',
          anchor: this.visitAnchor,
          label: this.translateService.instant(this.getTranslateKey('visits'))
        },
        {
          id: 'documentAnchor',
          anchor: this.documentAnchor,
          label: this.translateService.instant(this.getTranslateKey('document'))
        }
      ];
    }
    setTimeout(() => {
      this.setSelectedAnchor('mainAnchor');
    });

    this.assetFormService.fetchTransferOrderTypeList().subscribe((results) => {
      this.transferOrderTypeMap = results;
    });

    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe((results) => {
      this.procurementRequestTypeMap = results;
    });
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

  public loadEvolutionSourceList(): void {
    const adTypeKey = this.getTranslateKey('adType');
    const evolutionTypeKey = this.getTranslateKey('evolutionTypeLabel');
    const modificationTypeKey = this.getTranslateKey('modificationType');
    const sbTypeKey = this.getTranslateKey('sbType');
    this.translateService
      .get([adTypeKey, evolutionTypeKey, modificationTypeKey, sbTypeKey])
      .subscribe((results: string[]) => {
        const adTypeLabel = !!results ? results[adTypeKey] : 'AD (Airworthiness Directive)';
        const evolutionTypeLabel = !!results ? results[evolutionTypeKey] : 'SB Configuration';
        const modificationTypeLabel = !!results ? results[modificationTypeKey] : 'Modification';
        const sbTypeLabel = !!results ? results[sbTypeKey] : 'Others SB';

        this.evolutionSourceList = [
          {
            label: evolutionTypeLabel,
            value: BidoEvolutionConstants.CODE_EVOLUTION
          },
          {
            label: sbTypeLabel,
            value: BidoEvolutionConstants.CODE_SB
          },
          {
            label: adTypeLabel,
            value: BidoEvolutionConstants.CODE_AD
          },
          {
            label: modificationTypeLabel,
            value: BidoEvolutionConstants.CODE_MODIFICATION
          }
        ];
      });
  }

  private initOnCreate(): void {
    this.selectedSbad = [];
    this.selectedMeasure = [];
    this.bidoMeasuresDisplayed = [];
    this.bidoMeasuresUpdateDisplayed = [];
    this.bidoVisitDisplayed = [];
    this.bidoStockDisplayed = [];
    this.bidoMissionDisplayed = [];
    this.documentsAdded = [];
    this.documents = [];
    this.documentsUpdated = [];
    this.eventAdded = [];
    this.equipment = {
      bidoEquipmentDTO: {},
      measureTableDtos: [],
      bidoDocumentationTableOutputDTOs: [],
      stockOutputDto: {},
      superiorAsset: {},
      superiorAircraft: {},
      superiorEngine: {},
      usageCounterCalculationDTO: {},
      saveUsageEquipment: {
        updateBidoEquipmentUsageDTOList: []
      }
    };
    this.fatherEquipment = {};
    this.superiorAircraftFront = '';
    this.superiorEngineFront = '';
    this.saveUsageEquipment = {
      updateBidoEquipmentUsageDTOList: [],
      createBidoEquipmentUsageDTOList: []
    };
    this.stockMovementRows = [];
    this.initAttributeValue();
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributes);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  public cancel(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadEquipment();
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }
  public refresh(): void {
    this.reloadEquipment();
  }
  private setNavigationLinkList(): void {
    const assetPlanKey = this.getTranslateKey('assetPlan');
    const assetReviewKey = this.getTranslateKey('assetReview');
    const aControlKey = this.getTranslateKey('aControl');
    const mPlanningKey = this.getTranslateKey('mPlanning');
    const assetAtDatekey = this.getTranslateKey('assetAtDate');
    const configControlkey = this.getTranslateKey('configControl');

    this.translateService
      .get([assetPlanKey, assetReviewKey, aControlKey, mPlanningKey, assetAtDatekey, configControlkey])
      .subscribe((results) => {
        const assetPlanLabel = results ? results[assetPlanKey] : 'Asset Maintenance Plan';
        const assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';
        const aControlLabel = results ? results[aControlKey] : 'Airworthiness Status';
        const mPlanningLabel = results ? results[mPlanningKey] : 'Maintenance Planning';
        const assetAtDateLabel = results ? results[assetAtDatekey] : 'Asset at Date';
        const configControlLabel = results ? results[configControlkey] : 'Applied Configuration Management';
        const groundEquipmentMPlaningLabel = results ? results[mPlanningKey] : 'Maintenance Planning';

        if (!this.isTool()) {
          this.navigationLinkList = [
            {
              label: assetPlanLabel,
              command: () => {
                this.openAssetPlan();
              }
            },
            {
              label: assetReviewLabel,
              command: () => {
                this.openAssetReview();
              }
            },
            {
              label: aControlLabel,
              command: () => {
                this.openAcontrol();
              }
            },
            {
              label: mPlanningLabel,
              command: () => {
                this.openMaintenancePlanning();
              }
            },
            {
              label: assetAtDateLabel,
              command: () => {
                this.openAssetAtDate();
              }
            },
            {
              label: configControlLabel,
              command: () => {
                this.openConfigurationControl();
              }
            }
          ];
        }
        if (this.isTool()) {
          this.navigationLinkList = [
            {
              label: groundEquipmentMPlaningLabel,
              command: () => {
                this.openToolMaintenancePlanningForm();
              }
            }
          ];
        }
      });
  }

  public openToolMaintenancePlanningForm() {
    if (
      this.equipment.bidoEquipmentDTO.equipmentCode &&
      this.equipment.bidoEquipmentDTO.familyVariantCode &&
      this.equipment.bidoEquipmentDTO.equipmentFunction
    ) {
      const objectId: ScheduleMaintenanceFormComponentInput = {
        warehouse: undefined,
        equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
        familyVariantCode: this.equipment.bidoEquipmentDTO.familyVariantCode,
        function: this.equipment.bidoEquipmentDTO.equipmentFunction
      };

      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_PLANNING_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openWorkPackage(visitTableRow: VisitTableRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize({ wpId: visitTableRow.projectId })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openFlAssignment() {
    const openMode = ComponentOpenMode.Read;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'FunctionalLocationAssignmentComponent',
      openMode
    };
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      data.objectId = this.serializationService.serialize(this.equipment.bidoEquipmentDTO);
    }
    const labelKey = 'transaction.FunctionalLocationAssignmentComponent';

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAssetPlan(): void {
    const objectId: BidoEquipmentDTOId = {
      equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode
    };
    const labelKey = 'transaction.AssetMaintenancePlanComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AssetMaintenancePlanComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
  public openMaintenancePlanning(): void {
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      const objectId: ScheduleMaintenanceFormComponentInput = {
        equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode
      };

      const data: PageComponentData = {
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Write,
        componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openAssetReview(): void {
    const list: string[] = [];
    const componentId: string = ComponentConstants.MAI_ASSET_REVIEW_FORM;
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      list.push(this.equipment.bidoEquipmentDTO.equipmentCode);
      const objectId: AirworthinessControlFormComponentInput = {
        equipmentCodeList: list
      };
      const data: PageComponentData = {
        componentId,
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openAcontrol(): void {
    const list: string[] = [];
    const componentId: string = ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM;
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      list.push(this.equipment.bidoEquipmentDTO.equipmentCode);
      const objectId: AirworthinessControlFormComponentInput = {
        equipmentCodeList: list
      };
      const data: PageComponentData = {
        componentId,
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openAssetAtDate(): void {
    const inputData: FindAllAssetForAirworthinessControlOutput[] = [];
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      const obj = {
        equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
        function:
          this.equipment.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
            ? 'Aircraft'
            : this.equipment.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
            ? 'Engine'
            : 'Equipment',
        registration: this.equipment.bidoEquipmentDTO.registration,
        snCode: this.equipment.bidoEquipmentDTO.sn,
        pnCode: this.equipment.bidoEquipmentDTO.pnCode,
        designation: this.equipment.bidoEquipmentDTO.equipmentDesignation,
        familyVariant: this.equipment.bidoEquipmentDTO.familyVariantCode
      };
      inputData.push(obj as FindAllAssetForAirworthinessControlOutput);
    }
    const labelKey = `transaction.${ComponentConstants.FLE_ASSET_AT_DATE_FORM}`;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_ASSET_AT_DATE_FORM,
      objectId: `structure-----${this.serializationService.serialize(
        inputData[0] as FindAllAssetForAirworthinessControlOutput
      )}`,
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openConfigurationControl(): void {
    const list: string[] = [];
    const componentId: string = ComponentConstants.MAI_CONFIGURATION_CONTROL;
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      list.push(this.equipment.bidoEquipmentDTO.equipmentCode);
      const objectId: AirworthinessControlFormComponentInput = {
        equipmentCodeList: list
      };
      const data: PageComponentData = {
        componentId,
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public reloadEquipment(): void {
    this.chartContentReady = false;
    this.initOnCreate();
    this.loadTablesHeader();
    this.fillDropDown();
    this.loadEquipment();
    this.loadSubEquipments();
  }

  public loadEquipment(): void {
    this.assetLoading = true;
    /* this.isLoadingEventTable = true;
    this.isLoadingDocumentTable = true;
    this.isLoadingStockTable = true;
    this.isLoadingVisitTable = true; */
    let observables: Observable<BidoAttributeDTO[]>[] = [];

    observables = [
      this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ALL_KEY),
      this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ALL_ASSETS_KEY)
    ];

    if (!this.isEngine() && !this.isAircraft() && !this.isTool()) {
      observables.push(this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_EQUIPMENT_KEY));
    }
    if (this.isEngine() && !this.isAircraft() && !this.isTool()) {
      observables.push(this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ENGINE_KEY));
    }

    if (this.isAircraft() && !this.isEngine() && !this.isTool()) {
      observables.push(this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_AIRCRAFT_KEY));
    }

    forkJoin(observables).subscribe(
      (results: BidoAttributeDTO[][]) => {
        if (results) {
          const filteredAttributesList: BidoAttributeDTO[][] = [];
          results.forEach((element) => {
            const innerElements = element.filter((element2) => {
              return (
                element2.attributeId !== BidoAttributeConstants.ITEM_NUMBER.toString() &&
                element2.attributeId !== BidoAttributeConstants.SAP_EQUIPMENT_CODE.toString() &&
                element2.attributeId !== BidoAttributeConstants.ASSET_LOCATION.toString()
              );
            });

            filteredAttributesList.push(innerElements);
          });

          let flattenResults: BidoAttributeDTO[] = filteredAttributesList.reduce((acc, val) => acc.concat(val), []);
          flattenResults = this.sortAttributes(flattenResults);

          this.dynamicAttributes = this.dynamicAttributesService.from(flattenResults);

          if (!!this.equipmentId) {
            const assetId: AssetInputDto = {
              bidoEquipmentDTOId: this.equipmentId,
              assetfunction: ' '
            };
            this.assetFormService.findBidoEquipmentAlternative(assetId).subscribe(
              (result) => {
                if (result) {
                  this.assetLoading = false;
                  this.equipment = { ...result };
                  this.operationalStatus = this.equipment.bidoEquipmentDTO.operationalStatus as string;
                  if (this.equipment && this.equipment.bidoEquipmentDTO) {
                    if (this.componentData) {
                      if (this.isAircraft() && !this.isEngine()) {
                        this.context = [
                          StringUtils.orEmpty(this.equipment.bidoEquipmentDTO.familyVariantCode),
                          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn)
                            ? ''
                            : `MSN ${this.equipment.bidoEquipmentDTO.sn}`,
                          StringUtils.orEmpty(this.equipment.bidoEquipmentDTO.registration)
                        ]
                          .filter((s) => !StringUtils.isEmpty(s))
                          .join(' | ');
                      }
                      if (!this.isAircraft() && this.isEngine()) {
                        this.context = [
                          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.pnCode)
                            ? ''
                            : `P/N ${this.equipment.bidoEquipmentDTO.pnCode}`,
                          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn)
                            ? ''
                            : `ESN ${this.equipment.bidoEquipmentDTO.sn}`
                        ]
                          .filter((s) => !StringUtils.isEmpty(s))
                          .join(' | ');
                      }
                      if (!this.isAircraft() && !this.isEngine()) {
                        this.context = [
                          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.pnCode)
                            ? ''
                            : `P/N ${this.equipment.bidoEquipmentDTO.pnCode}`,
                          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn)
                            ? ''
                            : `S/N ${this.equipment.bidoEquipmentDTO.sn}`
                        ]
                          .filter((s) => !StringUtils.isEmpty(s))
                          .join(' | ');
                      }

                      // Displaying description along with context
                      if (!!this.equipment.bidoEquipmentDTO.equipmentDesignation) {
                        this.context = [
                          StringUtils.isNullOrEmpty(this.context) ? '' : this.context,
                          this.equipment.bidoEquipmentDTO.equipmentDesignation
                        ]
                          .filter((s) => !StringUtils.isEmpty(s))
                          .join(' | ');
                      }

                      this.displayComponentContext(this.context, this.isCreateOpenMode);
                    }

                    this.loadReport();

                    if (!!this.equipment.superiorAsset) {
                      this.fatherEquipment = this.equipment.superiorAsset;
                    }
                    if (!!this.equipment.superiorAircraft && !!this.equipment.superiorAircraft.equipmentLabel) {
                      this.superiorAircraftFront = this.equipment.superiorAircraft.equipmentLabel;
                      if (this.superiorAircraftFront.length > 0) {
                        this.isInstalledOnAircraft = true;
                      } else {
                        this.isInstalledOnAircraft = false;
                      }
                    }
                    if (!!this.equipment.superiorEngine && !!this.equipment.superiorEngine.equipmentLabel) {
                      this.superiorEngineFront = this.equipment.superiorEngine.equipmentLabel;
                    }
                    this.ownerCustomerName = this.equipment.ownerCustomerName;

                    // Checking lock/unlock button visiblity
                    if (!this.isAircraft()) {
                      // For Equipment, check if it is spare
                      this.displayLockUnlockButton = !!this.equipment.bidoEquipmentDTO.equEquipmentCode ? false : true;
                    }

                    this.equipment.bidoEquipmentDTO.equipmentFunction = !!this.equipment.bidoEquipmentDTO
                      .equipmentFunction
                      ? this.equipment.bidoEquipmentDTO.equipmentFunction
                      : undefined;
                    this.operatorCustomerName = this.equipment.operatorCustomerName;
                    this.editPopupData = { ...this.equipment.bidoEquipmentDTO };
                    LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                      this.equipment.bidoEquipmentDTO,
                      'operationalStatus',
                      this.propertyOperationalStatus
                    );
                    LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                      this.equipment.bidoEquipmentDTO,
                      'equiPosition',
                      this.propertyPositions
                    );
                    LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                      this.equipment.bidoEquipmentDTO,
                      'country',
                      this.propertyCountries
                    );

                    this.showLockFlag =
                      this.equipment.bidoEquipmentDTO.statusState === AWPropertiesConstants.OBJECT_STATUS_LOCKED_KEY;

                    this.getMeasureTabData();
                    this.loadConfigurationValue();
                    if (!this.isAircraft()) {
                      this.loadStocks();
                      this.loadStockMvtMatMgmtFull();
                    }
                    this.loadMissions();
                    this.loadVisits();
                    this.loadDocuments();

                    this.setUsageChartData();
                    this.loadDialogUsageData();
                    if (!!this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList) {
                      const locationData = this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList.filter((el) => {
                        if (el.attributeId === BidoAttributeConstants.ASSET_LOCATION.toString()) {
                          return el;
                        }
                      });
                      this.locationValue = !!locationData[0] ? locationData[0].attributeValue : undefined;
                      this.dynamicAttributesService.setValues(
                        this.dynamicAttributes,
                        this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList
                      );
                    }
                  }
                }
                this.equipmentModelCodeAndName = this.equipment.modelCode + ' - ' + this.equipment.modelName;
                this.equipmentRatingCodeAndName = this.equipment.ratingCode + ' - ' + this.equipment.ratingName;
                this.loadEvents();
                this.openHistoricAttributes();
              },
              (err) => {
                this.messageService.showErrorMessage(err.error.errorDetail);
              }
            );
          }
        }
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  private sortAttributes(attributes: BidoAttributeDTO[]): BidoAttributeDTO[] {
    return attributes.sort((attr1, attr2) => {
      const attrLabel1 = this.getAttributeLabel(attr1);
      const attrLabel2 = this.getAttributeLabel(attr2);
      if (StringUtils.isNullOrEmpty(attrLabel1)) {
        return 1;
      }
      if (StringUtils.isNullOrEmpty(attrLabel2)) {
        return 1;
      }

      return attrLabel1.localeCompare(attrLabel2);
    });
  }

  private getAttributeLabel(attribute: BidoAttributeDTO): string {
    switch (this.translateService.currentLang) {
      case LangConstants.ENGLISH_CODE:
        return !!attribute.attributeNameEn ? attribute.attributeNameEn : '';

      case LangConstants.FRENCH_CODE:
        return !!attribute.attributeNameFr ? attribute.attributeNameFr : '';

      default:
        return '';
    }
  }

  public loadConfigurationValue() {
    const input: GetIsConfigurationTrackedInput = {
      familyVariantCode: this.equipment.bidoEquipmentDTO.familyVariantCode,
      equipmentFunction: this.equipment.bidoEquipmentDTO.equipmentFunction,
      chapter: this.equipment.bidoEquipmentDTO.chapter,
      section: this.equipment.bidoEquipmentDTO.section,
      subject: this.equipment.bidoEquipmentDTO.subject,
      sheet: this.equipment.bidoEquipmentDTO.sheet,
      mark: this.equipment.bidoEquipmentDTO.marks,
      pnCode: this.equipment.bidoEquipmentDTO.pnCode,
      functionCode: this.equipment.bidoEquipmentDTO.functionCode,
      itemNumber: this.equipment.itemNumber
    };
    this.assetFormService.FindConfigurationTracked(input).subscribe((result) => {
      this.configurationTracked = result;
    });
  }

  public loadEvents(): void {
    if (!!this.equipmentId && !!this.equipmentId.equipmentCode) {
      this.isLoadingEventTable = true;
      this.assetFormService.getEvents(this.equipmentId.equipmentCode).subscribe((result) => {
        if (result && result.bidoNotificationDTOs) {
          this.equipment.bidoNotificationDTOs = result.bidoNotificationDTOs;
          this.equipment.deferredDefectAlerText = result.deferredDefectAlerText;
          this.showDefferedMessage = result.showDeferredDefectAler;

          this.equipment.bidoNotificationDTOs.forEach((element) => {
            this.bidoNotificationData.push(element.bidoNotificationDTO);
          });

          this.eventsTableDataSource.setData(
            ListUtils.orEmpty(this.equipment.bidoNotificationDTOs).map((event: any) => {
              event.bidoNotificationDTO.reportingDateStr = this.dateService.dateToString(
                event.bidoNotificationDTO.reportingDate
              );
              event.bidoNotificationDTO.reportingPeriodStartDateStr = this.dateService.dateWithHourToString(
                event.bidoNotificationDTO.reportingPeriodStartDate
              );
              event.reportingPeriodStartDateStr = event.bidoNotificationDTO.reportingPeriodStartDateStr;
              event.eventStatus = !!event.bidoNotificationDTO.status
                ? this.eventStatus.filter((status) => {
                    return status.value === event.bidoNotificationDTO.status;
                  })[0].label
                : '';
              LabelValueUtils.stringValueToLabel<BidoNotificationDTO>(
                event.bidoNotificationDTO,
                'typeCode',
                this.typeList
              );
              event.typeCode = event.bidoNotificationDTO.typeCode;
              event.notificationSubject = event.bidoNotificationDTO.notificationSubject;

              return event;
            })
          );
          this.showEventDisplayed = this.eventsTableDataSource.dataSrc;
        }
        this.isLoadingEventTable = false;
      });
    }
  }

  public loadAirworthiness(): void {
    if (!!this.equipmentId && !!this.equipmentId.equipmentCode) {
      this.isLoadingSbad = true;
      this.assetFormService.getEvolutions(this.equipmentId.equipmentCode).subscribe((result) => {
        this.equipment.bidoEquipmentEvolutionsFromRequest = result;
        this.bidoSbadDisplayed =
          !!this.equipment && !!this.equipment.bidoEquipmentEvolutionsFromRequest
            ? this.equipment.bidoEquipmentEvolutionsFromRequest
            : [];
        this.bidoSbadDisplayed.forEach((sbad) => {
          sbad.bidoEquipmentEvolutionDTO.dateAppliedStr = this.dateService.dateToString(
            sbad.bidoEquipmentEvolutionDTO.dateApplied
          );
          sbad.bidoEquipmentEvolutionDTO.dateRemoveStr = this.dateService.dateToString(
            sbad.bidoEquipmentEvolutionDTO.dateRemove
          );
          LabelValueUtils.stringValueToLabel<BidoEquipmentEvolutionDTO>(
            sbad.bidoEquipmentEvolutionDTO,
            'evolutionType',
            this.evolutionSourceList
          );
          this.setAirwothinessApplication(sbad);
        });

        this.isLoadingSbad = false;
      });
    }
  }

  public loadSubEquipments(): void {
    if (!!this.equipmentId && !!this.equipmentId.equipmentCode) {
      this.subequipmentsLoading = true;
      this.assetFormService.getSubEquipments(this.equipmentId.equipmentCode).subscribe((result) => {
        const newData: AssetStructureTableDto[] = ListUtils.orEmpty(result).map((elt) => {
          const selectedEquipmentFunction = this.allFunctions.find(
            (equipmentFunction) => equipmentFunction.value === elt.function
          );

          const row = { ...elt };
          row.function = selectedEquipmentFunction ? selectedEquipmentFunction.label : '';
          LabelValueUtils.stringValueToLabel<AssetStructureTableDto>(row, 'operationalStatus', this.filterStatusMap);

          return row;
        });

        newData.sort(this.dynamicSort('designation'));
        this.subEquipmentTableDataSource.setData([...newData]);
        this.subequipmentsLoading = false;
      });
    }
  }

  public dynamicSort(property) {
    let sortOrder = 1;

    if (property[0] === '-') {
      sortOrder = -1;
      // tslint:disable-next-line:no-parameter-reassignment
      property = property.substr(1);
    }

    return (a, b) => {
      if (sortOrder === -1) {
        return b[property] && b[property].localeCompare(a[property]);
      } else {
        return a[property] && a[property].localeCompare(b[property]);
      }
    };
  }

  public loadStocks(): void {
    if (!AWPropertiesConstants.MM_FULL_MODULE_ACTIVATED) {
      this.isLoadingStockTable = false;
      if (!!this.equipment.stockOutputDto && !!this.bidoStockDisplayed) {
        this.bidoStockDisplayed = this.equipment.stockOutputDto.stockTableDtos;
      }
    }
  }

  public createStockMovement(): void {
    this.showCreateReceipt = true;
  }

  public reloadStockReceipt(): void {
    this.bidoStockDisplayed = [];
    this.isLoadingStockTable = true;
    const assetId: AssetInputDto = {
      bidoEquipmentDTOId: this.equipmentId,
      assetfunction: ' '
    };
    this.assetFormService.findBidoEquipmentAlternative(assetId).subscribe((result) => {
      this.isLoadingStockTable = false;
      if (result) {
        this.equipment.stockOutputDto.site = result.stockOutputDto.site;
        this.equipment.stockOutputDto.warehouse = result.stockOutputDto.warehouse;
        this.equipment.stockOutputDto.storageBin = result.stockOutputDto.storageBin;
        this.bidoStockDisplayed = result.stockOutputDto.stockTableDtos;
      }
    });
  }

  public setUsageChartData(): void {
    const hoursData: number[] = [];
    const cyclesData: number[] = [];
    if (!!this.equipment.usageEquipmentDto && !!this.equipment.usageEquipmentDto.bidoEquipmentUsageTableOutputDTOs) {
      this.chartContentReady = true;
      this.equipment.usageEquipmentDto.bidoEquipmentUsageTableOutputDTOs.forEach((obj) => {
        if (!!obj.bidoEquipmentDTO && !!obj.bidoEquipmentDTO.monthCode) {
          const i = obj.bidoEquipmentDTO.monthCode;
          if (obj.bidoEquipmentDTO.unitCode === 'H') {
            hoursData[i] = Number(obj.bidoEquipmentDTO.usageValue);
          } else if (obj.bidoEquipmentDTO.unitCode === 'C') {
            cyclesData[i] = Number(obj.bidoEquipmentDTO.usageValue);
          }
        }
      });
    }
    const month = 11;
    moment.locale(this.translateService.currentLang);
    for (let i = 0; i <= month; i++) {
      this.usageGraphData.labels[i] = moment()
        .month(i)
        .format('MMMM');
      this.usageGraphData.datasets[0].data[i] = hoursData[i];
      this.usageGraphData.datasets[1].data[i] = cyclesData[i];
    }
  }

  public loadDialogUsageData() {
    this.usageHistoryData = [];
    const hours: string[] = [];
    const cycles: string[] = [];
    const isUpdateH: boolean[] = [];
    const isUpdateC: boolean[] = [];
    if (!!this.equipment.usageEquipmentDto && !!this.equipment.usageEquipmentDto.bidoEquipmentUsageTableOutputDTOs) {
      this.equipment.usageEquipmentDto.bidoEquipmentUsageTableOutputDTOs.forEach((obj) => {
        if (!!obj.bidoEquipmentDTO && !!obj.bidoEquipmentDTO.monthCode) {
          const i = obj.bidoEquipmentDTO.monthCode;
          if (obj.bidoEquipmentDTO.unitCode === 'H') {
            hours[i] = !!obj.bidoEquipmentDTO.usageValue ? obj.bidoEquipmentDTO.usageValue : '';
            isUpdateH[i] = !!obj.bidoEquipmentDTO.usageValue ? true : false;
          } else if (obj.bidoEquipmentDTO.unitCode === 'C') {
            cycles[i] = !!obj.bidoEquipmentDTO.usageValue ? obj.bidoEquipmentDTO.usageValue : '';
            isUpdateC[i] = !!obj.bidoEquipmentDTO.usageValue ? true : false;
          }
        }
      });
    }
    const month = 11;
    for (let i = 0; i <= month; i++) {
      const data: UsageData = {
        id: String(i),
        isUpdateH: isUpdateH[i],
        isUpdateC: isUpdateC[i],
        monthCode: moment()
          .month(i)
          .format('MMMM'),
        usageValueH: hours[i],
        usageValueC: cycles[i]
      };
      this.usageHistoryData.push(data);
    }
  }

  public showDialogUsage() {
    this.showUsageDialogFlag = true;
  }

  public onAddUsageData(data: UsageData[]) {
    this.usageHistoryData = data;
    this.saveUsageEquipment.updateBidoEquipmentUsageDTOList = [];
    this.saveUsageEquipment.createBidoEquipmentUsageDTOList = [];
    data.forEach((el) => {
      let objCycleUpdated: BidoEquipmentUsageDTO = {};
      let objHourUpdated: BidoEquipmentUsageDTO = {};
      let objCycleCreated: BidoEquipmentUsageDTO = {};
      let objHourCreated: BidoEquipmentUsageDTO = {};
      if (el.isUpdateH) {
        objHourUpdated = {
          equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
          monthCode: el.id,
          unitCode: 'H',
          usageValue: !!el.usageValueH ? String(el.usageValueH) : undefined
        };
      } else {
        objHourCreated = {
          equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
          monthCode: el.id,
          unitCode: 'H',
          usageValue: !!el.usageValueH ? String(el.usageValueH) : undefined
        };
      }
      if (el.isUpdateC) {
        objCycleUpdated = {
          equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
          monthCode: el.id,
          unitCode: 'C',
          usageValue: !!el.usageValueC ? String(el.usageValueC) : undefined
        };
      } else {
        objCycleCreated = {
          equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
          monthCode: el.id,
          unitCode: 'C',
          usageValue: !!el.usageValueC ? String(el.usageValueC) : undefined
        };
      }

      if (!!this.saveUsageEquipment.updateBidoEquipmentUsageDTOList) {
        if (!!objCycleUpdated.usageValue) {
          this.saveUsageEquipment.updateBidoEquipmentUsageDTOList.push(objCycleUpdated);
        }
        if (!!objHourUpdated.usageValue) {
          this.saveUsageEquipment.updateBidoEquipmentUsageDTOList.push(objHourUpdated);
        }
      }

      if (!!this.saveUsageEquipment.createBidoEquipmentUsageDTOList) {
        if (!!objCycleCreated.usageValue) {
          this.saveUsageEquipment.createBidoEquipmentUsageDTOList.push(objCycleCreated);
        }
        if (!!objHourCreated.usageValue) {
          this.saveUsageEquipment.createBidoEquipmentUsageDTOList.push(objHourCreated);
        }
      }
    });
  }

  public loadMissions(): void {
    this.bidoMissionDisplayed = this.equipment.missionTableDTOs;
    this.updateMissionEquipmentDates();
  }

  public loadVisits(): void {
    this.isLoadingVisitTable = false;
    if (!!this.equipment.vistTableDtos) {
      this.bidoVisitDisplayed = this.equipment.vistTableDtos;
      this.visitDisplayed = this.equipment.vistTableDtos;
    }
  }

  public loadDocuments() {
    this.isLoadingDocumentTable = false;
    this.documentTableDataSource.setData([]);
    if (!!this.equipment.bidoDocumentationTableOutputDTOs) {
      this.documents = this.equipment.bidoDocumentationTableOutputDTOs;
      this.equipment.bidoDocumentationTableOutputDTOs.forEach((doc) => {
        if (!!doc.bidoDocumentationDTO) {
          const selectedDocumentType = this.documentTypes.find(
            (documentType) =>
              !!doc.bidoDocumentationDTO &&
              !!doc.bidoDocumentationDTO.docCategory &&
              (documentType.value as string) === doc.bidoDocumentationDTO.docCategory
          );
          const newDoc: DocumentTableRow = {
            docExtension: FileUtils.getExtension(doc.bidoDocumentationDTO.docName).toUpperCase(),
            docName: doc.bidoDocumentationDTO.docName,
            docPublicationDate: this.dateService.dateToString(doc.bidoDocumentationDTO.docPublicationDate),
            docDescription: doc.bidoDocumentationDTO.docDescription,
            docEndOfValidityDate: this.dateService.dateToString(doc.bidoDocumentationDTO.docEndOfValidityDate),
            docCategory: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
            docCode: doc.bidoDocumentationDTO.docCode,
            _obj: doc.bidoDocumentationDTO
          };
          this.documentTableDataSource.addData([newDoc]);
        }
      });
    }
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BidoAttributeDTO[]> {
    return this.assetFormService.findBidoAttributesByAttributeCategory(attributeCategory);
  }

  public initializeAttributes() {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      this.equipment.bidoEquipmentDTO.chapter = undefined;
      this.equipment.bidoEquipmentDTO.sheet = undefined;
      this.equipment.bidoEquipmentDTO.subject = undefined;
      this.equipment.bidoEquipmentDTO.marks = undefined;
      this.equipment.bidoEquipmentDTO.section = undefined;
      this.equipment.bidoEquipmentDTO.equipmentDesignation = undefined;
    }
  }

  public searchPNCode() {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (this.equipment.bidoEquipmentDTO.familyVariantCode || this.equipment.bidoEquipmentDTO.pnCode) {
        let familyCode;
        let structureType;
        let variantCode;
        if (this.equipment.bidoEquipmentDTO.familyVariantCode) {
          const familyTab: string[] = this.equipment.bidoEquipmentDTO.familyVariantCode.split('-');
          familyCode = familyTab[0];
          structureType = AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY;
          variantCode = familyTab[1];
        }

        const pnTmp: string | undefined = this.equipment.bidoEquipmentDTO.pnCode
          ? this.equipment.bidoEquipmentDTO.pnCode + '%'
          : undefined;

        const bidoTmp: BidoEquipmentDTO = { ...this.equipment.bidoEquipmentDTO };
        bidoTmp.pnCode = pnTmp;

        let toolSearch = false;
        let pnType: string | undefined;
        if (!!bidoTmp.equipmentFunction) {
          if (bidoTmp.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY) {
            toolSearch = true;
          } else if (
            bidoTmp.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY
          ) {
            pnType = AWPropertiesConstants.PN_TYPE_GROUND_SUPPORT_EQUIPMENT_KEY;
          } else if (bidoTmp.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY) {
            pnType = AWPropertiesConstants.PN_TYPE_PILOT_EQUIPMENT_KEY;
          } else {
            pnType = AWPropertiesConstants.PN_TYPE_PART_KEY;
          }
        }

        this.partsSearch = {
          familyVariantSelected: BireFamilyVariantUtil.buildFamilyVariantCodeWithStructureType(
            familyCode,
            structureType,
            variantCode
          ),
          type: pnType,
          toolSearch
        };
        this.showSearchPartDialog = true;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('familyVariantMissing'));
      }
    }
  }

  public searchOperationalStatus() {
    this.editDataPopupFlag = true;
    this.operationalFlag = true;
    this.familyFlag = false;
    this.snFlag = false;
    this.pnFlag = false;
    this.geoFlag = false;
    this.ratingFlag = false;
    this.modelFlag = false;
    this.registrationFlag = false;
  }

  public searchFamilyPopup() {
    this.editDataPopupFlag = true;
    this.familyFlag = true;
    this.operationalFlag = false;
    this.snFlag = false;
    this.pnFlag = false;
    this.geoFlag = false;
    this.ratingFlag = false;
    this.modelFlag = false;
    this.registrationFlag = false;
  }

  public searchSnCodePopup() {
    this.editDataPopupFlag = true;
    this.snFlag = true;
    this.familyFlag = false;
    this.operationalFlag = false;
    this.pnFlag = false;
    this.geoFlag = false;
    this.ratingFlag = false;
    this.modelFlag = false;
    this.registrationFlag = false;
  }
  public searchRegistrationPopup() {
    this.editDataPopupFlag = true;
    this.snFlag = false;
    this.registrationFlag = true;
    this.familyFlag = false;
    this.operationalFlag = false;
    this.pnFlag = false;
    this.geoFlag = false;
    this.ratingFlag = false;
    this.modelFlag = false;
  }

  public searchModelCodePopup() {
    this.editDataPopupFlag = true;
    this.snFlag = false;
    this.familyFlag = false;
    this.operationalFlag = false;
    this.pnFlag = false;
    this.geoFlag = false;
    this.ratingFlag = false;
    this.modelFlag = true;
    this.registrationFlag = false;
  }

  public searchRatingCodePopup() {
    this.editDataPopupFlag = true;
    this.snFlag = false;
    this.familyFlag = false;
    this.operationalFlag = false;
    this.pnFlag = false;
    this.geoFlag = false;
    this.ratingFlag = true;
    this.modelFlag = false;
    this.registrationFlag = false;
  }

  public searchPnPopup() {
    if (!!this.equipment.bidoEquipmentDTO.familyVariantCode || !!this.equipment.bidoEquipmentDTO.pnCode) {
      this.editDataPopupFlag = true;
      this.pnFlag = true;
      this.snFlag = false;
      this.familyFlag = false;
      this.operationalFlag = false;
      this.geoFlag = false;
      this.ratingFlag = false;
      this.modelFlag = false;
      this.registrationFlag = false;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('familyVariantMissing'));
    }
  }

  public searchGeoLocation() {
    this.editDataPopupFlag = true;
    this.geoFlag = true;
    this.snFlag = false;
    this.familyFlag = false;
    this.operationalFlag = false;
    this.pnFlag = false;
    this.ratingFlag = false;
    this.modelFlag = false;
    this.registrationFlag = false;
  }

  public openItemTableDialog(): void {
    if (!!this.equipment.bidoEquipmentDTO.familyVariantCode) {
      this.initItemTableData();
      this.showItemTableDialog = true;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('familyVariantMissing'));
    }
  }
  private initItemTableData(): void {
    const itemTableCols: TableColumn[] = [
      {
        field: 'familyCode',
        alignment: 'left',
        width: '10%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'variantCode',
        alignment: 'left',
        width: '10%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'designation',
        alignment: 'left',
        width: '30%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'chapter',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'section',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'subject',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'sheet',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'marks',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'itemNumber',
        alignment: 'left',
        width: '10%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'functionCode',
        alignment: 'left',
        width: '15%',
        filterMode: TableColumnFilterMode.Input
      }
    ];

    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO.familyVariantCode) {
      const familyTab: string[] = this.equipment.bidoEquipmentDTO.familyVariantCode.split('-');
      const params: FindBireItemsBySearchCriteriaInput = {
        bireItemDTOCriteria: {
          familyCode: familyTab[0],
          structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
          variantCode: familyTab[1]
        },
        pnCode: this.equipment.bidoEquipmentDTO.pnCode
      };
      this.itemTableData = {
        componentId: 'DialogItem',
        tableCols: itemTableCols,
        tableRows: this.assetFormService.findBireItemsBySearchCriteria(params),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
    } else {
      super.throwUnboundLocalError('initItemTableData', 'this.familyCode && this.structureType && this.variantCode');
    }
  }

  public setSelectedPnCode(selectedObject: BirePnDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        this.equipment.bidoEquipmentDTO.pnCode = selectedObject.pnCode;
        const criteria = this.setBireInput();
        this.assetFormService.findBireItemsBySearchCriteriaFM(criteria).subscribe(
          (results) => {
            if (results.list.length === 1) {
              this.setSelectedItems(results.list[0]);
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetLocation'));
          }
        );
      }
      this.showPnCodeDialog = false;
    }
  }

  public searchFamilyCode() {
    let bire: FindBidoVariantVersionsInput = {};
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      this.showFamilyCodeDialog = true;

      const familyTable: TableColumn[] = [
        { field: 'familyFunction', alignment: 'left', filterMode: TableColumnFilterMode.Input },
        { field: 'familyCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
        { field: 'familyName', alignment: 'left', filterMode: TableColumnFilterMode.Input },
        { field: 'structureType', alignment: 'left', filterMode: TableColumnFilterMode.Input },
        { field: 'variantCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
        { field: 'variantName', alignment: 'left', filterMode: TableColumnFilterMode.Input }
      ];
      if (this.isAircraft() && !this.isEngine() && !this.isTool()) {
        bire = {
          pnCode: this.equipment.bidoEquipmentDTO.pnCode,
          module: BidoFunctionTypeConstants.MODULE_FAMILY,
          useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
          familyFunction: AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
        };
      }
      if (!this.isAircraft() && this.isEngine() && !this.isTool()) {
        bire = {
          pnCode: this.equipment.bidoEquipmentDTO.pnCode,
          module: BidoFunctionTypeConstants.MODULE_FAMILY,
          useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
          familyFunction: AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
        };
      }
      if (!this.isAircraft() && !this.isEngine() && !this.isTool()) {
        bire = {
          pnCode: this.equipment.bidoEquipmentDTO.pnCode,
          module: BidoFunctionTypeConstants.MODULE_FAMILY,
          useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
          familyFunction: ''
        };
      }

      if (!this.isAircraft() && !this.isEngine() && this.isTool()) {
        bire = {
          pnCode: this.equipment.bidoEquipmentDTO.pnCode,
          module: BidoFunctionTypeConstants.MODULE_FAMILY,
          useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
          familyFunction: AWPropertiesConstants.FAMILY_FUNCTION_GROUND_EQUIPMENT_KEY
        };
      }
      this.dialogTableDataFamilyCode = {
        componentId: 'EquipmentPopupDialog',
        tableCols: familyTable,
        tableRows: this.assetFormService.findBidoVariantVersions(bire),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
    }
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        const familyCode = selectedObject.familyCode;
        const variantCode = selectedObject.variantCode;
        this.equipment.bidoEquipmentDTO.familyVariantCode = `${familyCode}-${variantCode}`;
      }
      this.showFamilyCodeDialog = false;
    }
  }

  private setBireInput(): FindBireItemsBySearchCriteriaFMInput {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      const chapter = this.equipment.bidoEquipmentDTO.chapter
        ? this.equipment.bidoEquipmentDTO.chapter + '%'
        : undefined;
      const section = this.equipment.bidoEquipmentDTO.section
        ? this.equipment.bidoEquipmentDTO.section + '%'
        : undefined;
      const sheet = this.equipment.bidoEquipmentDTO.sheet ? this.equipment.bidoEquipmentDTO.sheet + '%' : undefined;
      const subject = this.equipment.bidoEquipmentDTO.subject
        ? this.equipment.bidoEquipmentDTO.subject + '%'
        : undefined;
      const marks = this.equipment.bidoEquipmentDTO.marks ? this.equipment.bidoEquipmentDTO.marks + '%' : undefined;

      const familyTab: string[] | undefined = !!this.equipment.bidoEquipmentDTO.familyVariantCode
        ? this.equipment.bidoEquipmentDTO.familyVariantCode.split('-')
        : undefined;
      const bire: BireItemDTO = {
        familyCode: !!familyTab ? familyTab[0] : undefined,
        structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
        variantCode: !!familyTab ? familyTab[1] : undefined,
        chapter,
        sheet,
        section,
        subject,
        marks
      };
      this.criteria = {
        bireItemDTOCriteria: bire,
        pnCode: this.equipment.bidoEquipmentDTO.pnCode,
        useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
        module: BidoFunctionTypeConstants.MODULE_FAMILY
      };
    }

    return this.criteria;
  }

  public searchItemList() {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (this.equipment.bidoEquipmentDTO.familyVariantCode != undefined) {
        this.showItemsDialog = true;
        const itemCol: TableColumn[] = [
          { field: 'familyCode', width: '70px', filterMode: TableColumnFilterMode.Input },
          { field: 'variantCode', width: '70px', filterMode: TableColumnFilterMode.Input },
          { field: 'name', width: '100px', filterMode: TableColumnFilterMode.Input },
          { field: 'chapter', width: '60px', filterMode: TableColumnFilterMode.Input },
          { field: 'section', width: '60px', filterMode: TableColumnFilterMode.Input },
          { field: 'subject', width: '60px', filterMode: TableColumnFilterMode.Input },
          { field: 'sheet', width: '60px', filterMode: TableColumnFilterMode.Input },
          { field: 'marks', width: '60px', filterMode: TableColumnFilterMode.Input },
          { field: 'itemNumber', width: '70px', filterMode: TableColumnFilterMode.Input },
          { field: 'functionCode', width: '90px', filterMode: TableColumnFilterMode.Input }
        ];
        const criteria = this.setBireInput();

        this.dialogTableDataItems = {
          componentId: 'EquipmentPopupDialog',
          tableCols: itemCol,
          tableRows: this.assetFormService.findBireItemsBySearchCriteriaFM(criteria),
          dataKey: undefined,
          selectionMode: TableSelectionMode.Single,
          globalFilter: true
        };
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('familyVariantMissing'));
      }
    }
  }

  public setSelectedItems(selectedObject: BireItemDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        const familyCode = selectedObject.familyCode;
        const variantCode = selectedObject.variantCode;
        this.equipment.bidoEquipmentDTO.familyVariantCode = `${familyCode}-${variantCode}`;
        this.equipment.bidoEquipmentDTO.section = selectedObject.section;
        this.equipment.bidoEquipmentDTO.marks = selectedObject.marks;
        this.equipment.bidoEquipmentDTO.chapter = selectedObject.chapter;
        this.equipment.bidoEquipmentDTO.sheet = selectedObject.sheet;
        this.equipment.bidoEquipmentDTO.subject = selectedObject.subject;
        this.equipment.bidoEquipmentDTO.statusDate = selectedObject.statusDate;
        this.equipment.bidoEquipmentDTO.statusUser = selectedObject.statusUser;
        this.equipment.bidoEquipmentDTO.statusState = selectedObject.statusState;
        this.equipment.itemNumber = selectedObject.itemNumber;
        this.equipment.bidoEquipmentDTO.equipmentDesignation = selectedObject.name;
        this.equipment.bidoEquipmentDTO.functionCode = selectedObject.functionCode;
      }
    }
  }

  /***********************
   * TABLES MANAGEMENT
   ***********************/

  /***********************
   * GENERAL TAB
   ***********************/
  private loadTimeZoneList(): void {
    this.propertiesService.getTimeZones().subscribe((results) => {
      this.timeZoneList = results
        .map((result) => {
          const matches = AssetFormComponent.TIMEZONE_VALUE_REGEX.exec(result.value);

          return {
            label: result.label,
            value: !!matches && matches.length > 0 ? Number(matches[1]).toString() : undefined
          };
        })
        .filter((timezone) => !!timezone.value);

      this.propertiesService.getDefaultTimeZoneCode().subscribe((result) => {
        const matches = AssetFormComponent.TIMEZONE_VALUE_REGEX.exec(result);
        if (!!matches && matches.length > 0) {
          this.defaultTimezone = Number(matches[1]).toString();

          this.resetTimezone();
        }
      });
    });
  }

  private resetTimezone(): void {
    this.currentTimeZone = this.defaultTimezone;
    this.previousTimezone = this.currentTimeZone;
  }

  public updateMissionEquipmentDates(): void {
    const previousTimezoneValue = Number(this.previousTimezone);
    const currentTimeZoneValue = Number(this.currentTimeZone);

    if (currentTimeZoneValue !== previousTimezoneValue) {
      const gap =
        Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
          ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
          : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
      const isGapPositive = currentTimeZoneValue >= previousTimezoneValue;
      if (!!this.bidoMissionDisplayed) {
        this.bidoMissionDisplayed.forEach((row) => {
          if (!!row.startDateText && !!row.endDateText && !!row.engineStartDateText && !!row.engineStopDateText) {
            row.startDateText = this.updateMissionEquipmentDate(gap, isGapPositive, row.startDateText);
            row.endDateText = this.updateMissionEquipmentDate(gap, isGapPositive, row.endDateText);
            row.engineStartDateText = this.updateMissionEquipmentDate(gap, isGapPositive, row.engineStartDateText);
            row.engineStopDateText = this.updateMissionEquipmentDate(gap, isGapPositive, row.engineStopDateText);
          }
        });
        this.bidoMissionDisplayed = [...this.bidoMissionDisplayed];
      }
      this.previousTimezone = this.currentTimeZone;
    }
  }

  private updateMissionEquipmentDate(gap: number, isGapPositive: boolean, date: string): string {
    if (StringUtils.isNullOrEmpty(date)) {
      return '';
    } else {
      const dateValue = new Date(date);
      const updatedDate = isGapPositive
        ? moment(dateValue).add(gap, 'hours')
        : moment(dateValue).subtract(gap, 'hours');

      return updatedDate.format(this.sessionService.dateTimeFormatMomentJS);
    }
  }

  public searchOwners() {
    this.showDialogOwner = true;
    const itemCol: TableColumn[] = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
    const bire: BidoCustomerDTO = {
      isOwner: true,
      isOperator: false
    };
    this.dialogTableDataOwner = {
      componentId: 'PartnerPopupDialog',
      tableCols: itemCol,
      tableRows: this.assetFormService.findBidoCustomersBySearchCriteria(bire),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedOwner(selectedObject: BidoCustomerDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        this.equipment.bidoEquipmentDTO.ownerCustomerCode = selectedObject.customerCode;
        this.ownerCustomerName = selectedObject.customerName;
      }
      this.showDialogOwner = false;
    }
  }

  public searchOperators() {
    this.showDialogOperator = true;
    const itemCol: TableColumn[] = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
    const bire: BidoCustomerDTO = {
      isOwner: false,
      isOperator: true
    };
    this.dialogTableDataOperator = {
      componentId: 'PartnerPopupDialog',
      tableCols: itemCol,
      tableRows: this.assetFormService.findBidoCustomersBySearchCriteria(bire),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedOperator(selectedObject: BidoCustomerDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        this.equipment.bidoEquipmentDTO.operatorCustomerCode = selectedObject.customerCode;
        this.operatorCustomerName = selectedObject.customerName;
      }
      this.showDialogOwner = false;
    }
  }

  public showFlStatus() {
    this.showFlStatusFlag = true;
    this.flHistoryData = [];
    if (!!this.equipment.bidoFlTableDtos) {
      this.equipment.bidoFlTableDtos.forEach((obj) => {
        if (!!obj.bidoFlDTO) {
          const data: FLHistory = {
            flCode: obj.bidoFlDTO.flCode,
            flDescription: obj.bidoFlDTO.flDescription,
            flFunction: obj.bidoFlDTO.flDescription,
            statusDate: obj.bidoFlDTO.statusDate,
            statusState: obj.bidoFlDTO.statusState,
            statusUser: obj.bidoFlDTO.statusUser,
            attachementDate: obj.attachementDate,
            deAttachementDate: obj.deAttachementDate
          };
          this.flHistoryData.push(data);
        }
      });
    }
  }

  public openEquipment(objectId: AssetStructureTableDto | undefined, openMode: ComponentOpenMode): void {
    if (objectId && objectId.equipmentCode) {
      this.assetFormService.findBidoEquipment({ equipmentCode: objectId.equipmentCode }).subscribe((equipment) => {
        let componentId: string;
        if (equipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
          componentId = ComponentConstants.FLE_AIRCRAFT_FORM;
        } else if (equipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY) {
          componentId = ComponentConstants.FLE_ENGINE_FORM;
        } else {
          componentId = ComponentConstants.FLE_EQUIPMENT_FORM;
        }

        const data: PageComponentData = {
          componentId,
          id: this.tabService.generateId(),
          objectId: this.serializationService.serialize(objectId),
          openMode: ComponentOpenMode.Read
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      });
    }
  }

  public openSuperiorAircraft(): void {
    let component = ComponentConstants.FLE_AIRCRAFT_FORM;
    const labelKey = `transaction.${component}`;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: component,
      openMode: ComponentOpenMode.Read
    };

    if (this.equipment.superiorAircraft) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: this.equipment.superiorAircraft.equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openSuperiorEngine(): void {
    let component = ComponentConstants.FLE_ENGINE_FORM;
    const labelKey = `transaction.${component}`;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: component,
      openMode: ComponentOpenMode.Read
    };
    if (this.equipment.superiorEngine) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: this.equipment.superiorEngine.equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  /*********************************
   * LOADING TABLES AND DROPDOWN
   *********************************/

  private loadMeasureTableHeader(showRating: boolean, showDateLimit: boolean): void {
    this.measuresTableCols = [
      { field: 'counterCode', alignment: 'left' },
      { field: 'cumulatedCounterValue', alignment: 'left' },
      { field: 'counterUnit', alignment: 'left' }
    ];
    if (showRating) {
      this.measuresTableCols.push({ field: 'ratingText', alignment: 'left' });
      this.measuresTableCols.push({ field: 'ratingCounterValue', alignment: 'left' });
    }

    this.measuresTableCols.push({ field: 'remainingValue', alignment: 'left' });
    this.measuresTableCols.push({ field: 'referenceValue', alignment: 'left' });

    if (showDateLimit) {
      this.measuresTableCols.push({ field: 'dateLimit', alignment: 'left' });
    }

    this.measuresTableCols.push({ field: 'readingDate', alignment: 'left' });
    this.measuresTableCols.push({ field: 'source', alignment: 'left' });
  }

  private initSubEquipmentTableDataSource(): void {
    this.subEquipmentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'designation',
          translateKey: this.getTranslateKey('designation'),
          width: '20%'
        },
        {
          field: 'pn',
          translateKey: this.getTranslateKey('pn'),
          width: '15%'
        },
        {
          field: 'sn',
          translateKey: this.getTranslateKey('sn'),
          width: '15%'
        },
        {
          field: 'familyVariant',
          translateKey: this.getTranslateKey('familyVariant'),
          width: '15%'
        },
        {
          field: 'function',
          translateKey: this.getTranslateKey('function'),
          width: '10%'
        },
        {
          field: 'flCode',
          translateKey: this.getTranslateKey('flCode'),
          width: '12%'
        },
        {
          field: 'seStatus',
          translateKey: this.getTranslateKey('seStatus'),
          alignment: ColumnAlignment.CENTER,
          width: '13%'
        }
      ],
      data: []
    });
  }

  private initEventsTableDataSource(): void {
    this.eventsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'notificationCode',
          translateKey: this.getTranslateKey('notificationCode'),
          width: '12%'
        },
        {
          field: 'reportingPeriodStartDateStr',
          translateKey: this.getTranslateKey('reportingPeriodStartDateStr'),
          width: '15%'
        },
        {
          field: 'equipmentText',
          translateKey: this.getTranslateKey('equipmentText'),
          width: '25%'
        },
        {
          field: 'typeCode',
          translateKey: this.getTranslateKey('typeCode'),
          width: '10%'
        },
        {
          field: 'notificationSubject',
          translateKey: this.getTranslateKey('notificationSubject'),
          width: '28%'
        },
        {
          field: 'eventStatus',
          translateKey: this.getTranslateKey('eventStatus'),
          width: '10%'
        }
      ],
      data: []
    });
  }

  private initDocumentTableDataSource(): void {
    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName')
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate')
        },
        {
          field: 'docEndOfValidityDate',
          translateKey: this.getTranslateKey('docEndOfValidityDate')
        },
        {
          field: 'docCategory',
          translateKey: this.getTranslateKey('docCategory')
        },
        {
          field: 'docDescription',
          translateKey: this.getTranslateKey('docDescription')
        }
      ],
      data: []
    });
  }

  public loadTablesHeader(): void {
    this.sbadTableCols = [
      { field: 'evolutionNumber', alignment: 'left' },
      { field: 'evolutionRevisionNumber', alignment: 'left', width: '8%' },
      { field: 'summary', alignment: 'left', width: '25%' },
      { field: 'evolutionType', alignment: 'left' },
      { field: 'dateAppliedStr', alignment: 'left', width: '10%' },
      { field: 'dateRemoveStr', alignment: 'left', width: '10%' },
      { field: 'newApplication', alignment: 'left' }
    ];

    this.sbadTableColsExpanded = [
      { field: 'description', alignment: 'left' },
      { field: 'manufacturingModification', alignment: 'left' },
      { field: 'event', alignment: 'left' }
    ];

    this.stockTableCols = [
      { field: 'code', alignment: 'left', width: '10%' },
      { field: 'stockMvtDate', alignment: 'left', width: '11%' },
      { field: 'stockMvtWay', alignment: 'left', width: '7%' },
      { field: 'mvtStatus', alignment: 'left', width: '12%' },
      { field: 'site', alignment: 'left', width: '25%' },
      { field: 'warehouse', alignment: 'left', width: '25%' },
      { field: 'document', alignment: 'left', width: '10%' }
    ];
    this.stockTableColsExpanded = [
      { field: 'stockMvtBatchNumber', alignment: 'left' },
      { field: 'bin', alignment: 'left' },
      { field: 'stockType', alignment: 'left' },
      { field: 'valuation', alignment: 'left' },
      { field: 'comments', alignment: 'left' }
    ];

    this.missionTableCols = [
      { field: 'missionCode', alignment: 'left' },
      { field: 'missionType', alignment: 'left' },
      { field: 'missionNumber', alignment: 'left' },
      { field: 'missionStatus', alignment: 'left' },
      { field: 'periodicityEndDateToString', alignment: 'left' },
      { field: 'duration', alignment: 'left' },
      { field: 'iFRDuration', alignment: 'left' },
      { field: 'cycleNumber', alignment: 'left' }
    ];

    this.visitTableCols = [
      { field: 'projectNum', alignment: 'left', width: '15%' },
      { field: 'projectName', alignment: 'left', width: '20%' },
      { field: 'statusStateText', alignment: 'left', width: '12%' },
      { field: 'projectPn', alignment: 'left', width: '15%' },
      { field: 'projectSn', alignment: 'left', width: '12%' },
      { field: 'projectStartDate', alignment: 'left', width: '13%' },
      { field: 'projectEndDate', alignment: 'left', width: '13%' }
    ];
  }

  public propagate() {
    if (!!this.equipment.bidoEquipmentDTO.eisDate) {
      const partialMessageKey = 'propagateEisDateMsg';
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
            const inputData: BidoEquipmentDTO = {
              equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
              eisDate: this.equipment.bidoEquipmentDTO.eisDate
            };
            this.assetFormService.propagateEisDate(inputData).subscribe(() => {
              this.messageService.showSuccessMessage(this.getTranslateKey('eisTansactionCompletion'));
            });
          }
        }
      });
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('validEisDate'));
    }
  }

  public fillDropDown() {
    this.assetFormService.getCountryZoneMap().subscribe(
      (results) => {
        results.forEach((element) => {
          let zoneElement: LabelValue<string>;
          let countryElement: LabelValue<string>;
          const keyCountry: string = element.value;
          const mapLabel: string[] = element.label.split(';');
          const zone: string = mapLabel[1];
          const country: string = mapLabel[0];
          this.countryZoneMap.set(country, zone);

          zoneElement = {
            label: zone,
            value: zone
          };
          countryElement = {
            label: country,
            value: keyCountry
          };
          if (!this.propertyZones.find((value) => value.label === zoneElement.label)) {
            this.propertyZones.push(zoneElement);
          }

          this.propertyCountries.push(countryElement);
          this.propertyAllCountries.push(countryElement);
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCountryZone'));
      }
    );

    const bireId: BireAttributeDTO = {
      attributeId: BidoAttributeConstants.ASSET_LOCATION.toString()
    };
    this.assetFormService.getAssetSourceSystemIdList(bireId).subscribe(
      (results) => {
        this.propertyLocations = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetLocation'));
      }
    );
    this.assetFormService.getEquipmentFunctionList().subscribe(
      (results) => {
        this.allFunctions = results;
        let valueLabel: LabelValue<string>[] = [];
        valueLabel = results;
        this.propertyFunctions = valueLabel.filter((el) => {
          if (
            el.value !== AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY &&
            el.value !== AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY &&
            el.value !== AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY
          ) {
            return el;
          }
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFunction'));
      }
    );
    this.assetFormService.getPositionMap().subscribe(
      (results) => {
        this.propertyPositions = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPosition'));
      }
    );

    let familyVariantInput: string;
    let operationalStatusObservable;

    if (!this.isEngine() && !this.isTool() && !this.isAircraft()) {
      familyVariantInput = ' ';
      operationalStatusObservable = this.assetFormService.getOperationalStatusMap(familyVariantInput);
    }
    if (!this.isEngine() && this.isTool() && !this.isAircraft()) {
      operationalStatusObservable = this.propertiesService.getValue(
        GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP
      );
      this.assetFormService.fetchGroundEquipmentFunctionList().subscribe(
        (results) => {
          this.groundEquipmentTypes = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetGroundEquipmentTypes'));
        }
      );
    }
    if (this.isEngine() && !this.isTool() && !this.isAircraft()) {
      familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;
      operationalStatusObservable = this.assetFormService.getOperationalStatusMap(familyVariantInput);
    }
    if (this.isAircraft() && !this.isTool() && !this.isEngine()) {
      familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
      operationalStatusObservable = this.assetFormService.getStatusMap(familyVariantInput);
    }

    operationalStatusObservable.subscribe(
      (results) => {
        this.propertyOperationalStatus = results;
        this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((result) => {
          this.filterStatusMap = result;
          this.filterStatusMap = [...this.propertyOperationalStatus, ...this.filterStatusMap];
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
      }
    );

    this.assetFormService.findAllTypes().subscribe(
      (results) => {
        this.typeList = results;
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
    this.propertiesService.getValue('getEventCategoryMap').subscribe(
      (results) => {
        this.categories = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetCategories'));
      }
    );
    this.propertiesService.getValue('getEventStatusMap').subscribe((results) => {
      this.eventStatus = results;
    });
    this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP).subscribe((results) => {
      this.movementsStatusMap = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    this.loadTimeZoneList();
  }

  public onAddEditPopuData(data: BidoEquipmentDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (this.pnFlag) {
        this.equipment.bidoEquipmentDTO.section = data.section;
        this.equipment.bidoEquipmentDTO.marks = data.marks;
        this.equipment.bidoEquipmentDTO.chapter = data.chapter;
        this.equipment.bidoEquipmentDTO.sheet = data.sheet;
        this.equipment.bidoEquipmentDTO.subject = data.subject;
      }
      this.equipment.bidoEquipmentDTO.operationalStatus = data.operationalStatus;
      this.equipment.bidoEquipmentDTO.familyVariantCode = data.familyVariantCode;
      this.equipment.bidoEquipmentDTO.sn = data.sn;
      this.equipment.bidoEquipmentDTO.pnCode = data.pnCode;
      this.equipment.bidoEquipmentDTO.statusDate = data.statusDate;
      this.equipment.bidoEquipmentDTO.statusUser = data.statusUser;
      this.equipment.bidoEquipmentDTO.statusState = data.statusState;
      this.equipment.bidoEquipmentDTO.equipmentDesignation = data.equipmentDesignation;
      this.equipment.bidoEquipmentDTO.functionCode = data.functionCode;
      this.equipment.bidoEquipmentDTO.zone = data.zone;
      this.equipment.bidoEquipmentDTO.country = data.country;
      this.equipment.bidoEquipmentDTO.registration = data.registration;

      LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
        this.equipment.bidoEquipmentDTO,
        'operationalStatus',
        this.propertyOperationalStatus
      );
      LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
        this.equipment.bidoEquipmentDTO,
        'country',
        this.propertyCountries
      );
    }
  }

  // tslint:disable-next-line:no-any
  public onAddEnginePopupData(data: any) {
    if (this.modelFlag) {
      this.equipment.modelCode = data.modelCode;
      this.equipment.modelName = data.modelName;
      this.equipmentModelCodeAndName = this.equipment.modelCode + ' - ' + this.equipment.modelName;
    }

    if (this.ratingFlag) {
      this.equipment.ratingCode = data.ratingCode;
      this.equipment.ratingName = data.ratingName;
      this.equipmentRatingCodeAndName = this.equipment.ratingCode + ' - ' + this.equipment.ratingName;
    }
  }

  public changeZone() {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (this.equipment.bidoEquipmentDTO.zone) {
        this.equipment.bidoEquipmentDTO.country = undefined;
        const zoneLabel: string = this.selectPropertyZone(this.equipment.bidoEquipmentDTO.zone);
        // this.propertyZones.find((value) => this.equipment.zone === value.value).label;
        this.propertyCountries = [];
        this.assetFormService.findCountriesByZone(zoneLabel).subscribe(
          (results) => {
            results.forEach((element) => {
              let countryElement: LabelValue<string>;
              const key: string = element.value;
              const mapLabel: string[] = element.label.split(';');
              const country: string = mapLabel[0];

              countryElement = {
                label: country,
                value: key
              };
              this.propertyCountries.push(countryElement);
            });
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCountryZone'));
          }
        );
      } else {
        this.equipment.bidoEquipmentDTO.zone = undefined;
        this.equipment.bidoEquipmentDTO.country = undefined;
        this.propertyCountries = this.propertyAllCountries;
      }
    }
  }

  private selectPropertyZone(equipmentZone: string | undefined): string {
    if (!!equipmentZone) {
      const selectedPropertyZone = this.propertyZones.find((zone) => zone.value === equipmentZone);

      return !!selectedPropertyZone && !!selectedPropertyZone.label ? selectedPropertyZone.label : '';
    } else {
      return '';
    }
  }

  public changeCountry() {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (this.equipment.bidoEquipmentDTO.country) {
        const countryName: string = this.selectCountry(this.equipment.bidoEquipmentDTO.country);
        this.assetFormService.findZoneByCountries(countryName).subscribe(
          (results) => {
            results.forEach((element) => {
              this.equipment.bidoEquipmentDTO.zone = element.label;
            });
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCountryZone'));
          }
        );
      } else {
        this.equipment.bidoEquipmentDTO.zone = undefined;
        this.propertyCountries = this.propertyAllCountries;
      }
    }
  }

  private selectCountry(country: string | undefined): string {
    if (!!country) {
      const selectedCountry = this.propertyCountries.find((propertyCountry) => propertyCountry.value === country);

      return !!selectedCountry && !!selectedCountry.label ? selectedCountry.label : '';
    } else {
      return '';
    }
  }

  /******************************
   * ACTIONS COUNTER
   ******************************/

  public associateCounter(): void {
    this.showCounterPopup = true;
    this.dataMeasure = {
      componentId: 'MeasurePopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Read
    };
  }

  public addCounter(counter: FindBidoCounterReferencesByEquipmentCodeOutput) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      const searchInDisplayedList = this.bidoMeasuresDisplayed.find(
        (value) => value.counterUnit === counter.counterUnit && value.counterCode === counter.counterCode
      );
      if (!searchInDisplayedList && counter.counterCode) {
        const bidoCounterId: BidoCounterReferenceDTOId = {
          counterCode: counter.counterCode
        };

        this.assetFormService.findBidoCounterReference(bidoCounterId).subscribe(
          (result) => {
            if (!result) {
              const bidoCounter: BidoCounterReferenceDTO = {
                counterCode: counter.counterCode,
                unitCode: counter.counterUnit
              };
              this.assetFormService.createBidoCounterReference(bidoCounter).subscribe((_) => {
                this.createCounter(counter);
              });
            } else {
              this.createCounter(counter);
            }
          },
          () => {
            const bidoCounter: BidoCounterReferenceDTO = {
              counterCode: counter.counterCode,
              unitCode: counter.counterUnit
            };
            this.assetFormService.createBidoCounterReference(bidoCounter).subscribe((_) => {
              this.createCounter(counter);
            });
          }
        );
      }
    }
  }

  private createCounter(counter: FindBidoCounterReferencesByEquipmentCodeOutput) {
    counter.ratingCode = counter.ratingCode || '_';
    counter.familyCode = !!this.equipment.bidoEquipmentDTO.familyVariantCode
      ? this.equipment.bidoEquipmentDTO.familyVariantCode.split('-')[0]
      : undefined;
    const bidoEquipmentCounter: BidoEquipmentCounterDTO = {
      counterCode: counter.counterCode,
      equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
      familyCode: counter.familyCode,
      ratingCode: counter.ratingCode
    };
    this.assetFormService.createBidoEquipmentCounter(bidoEquipmentCounter).subscribe(
      (results) => {
        this.selectedMeasure = [];
        this.showCounterPopup = false;
        this.getMeasureTabData();
      },
      (err) => {
        if (err && err.error && err.error.errorDesc) {
          this.selectedMeasure = [];
          this.messageService.showErrorMessage(err.error.errorDesc);
        }
      }
    );
  }

  public confirmDissociateCounter(): void {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      this.selectedMeasure.forEach((element) => {
        if (element._obj.bidoEquipmentCounterDto) {
          const bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId = {
            counterCode: element._obj.counterCode,
            equipmentCode: element._obj.bidoEquipmentCounterDto.equipmentCode,
            familyCode: element._obj.bidoEquipmentCounterDto.familyCode
              ? element._obj.bidoEquipmentCounterDto.familyCode
              : undefined,
            ratingCode: element._obj.bidoEquipmentCounterDto.ratingCode || '_'
          };
          const indexInDisplayedList = this.bidoMeasuresDisplayed.indexOf(element);
          this.bidoMeasuresDisplayed.splice(indexInDisplayedList, 1);
          this.bidoEquipmentCounterDTOIds.push(bidoEquipmentCounterDTOId);
        }
      });
      this.selectedMeasure = [];
    }
  }

  public dissociateCounter(): void {
    this.assetFormService.removeBidoEquipmentCounter(this.bidoEquipmentCounterDTOIds).subscribe(
      (result) => {
        this.selectedMeasure = [];
        this.getMeasureTabData();
      },
      (err) => {
        if (err && err.error && err.error.errorDesc) {
          this.selectedMeasure = [];
          this.messageService.showErrorMessage(err.error.errorDesc);
        }
      }
    );
  }

  /******************************
   * ACTIONS EDIT LIMITS
   ******************************/

  public editLimit(): void {
    if (this.selectedMeasure.length === 1) {
      this.currentMeasure = { ...this.selectedMeasure[0]._obj };
      this.showLimitPopup = true;
      this.dataMeasure = {
        componentId: 'EditLimitPopupDialog',
        selectedRow: [],
        object: this.currentMeasure,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public updateLimit(): void {
    this.selectedMeasure = [];
    this.showLimitPopup = false;
    this.getMeasureTabData();
  }

  /******************************
   * ACTIONS ADD MEASURE
   ******************************/

  public addMeasure(): void {
    this.isReadOnlyMeasureUpdateDialog = false;
    if (this.selectedMeasure.length === 1) {
      this.currentMeasure = { ...this.selectedMeasure[0]._obj };
      this.showMeasurePopup = true;
      this.dataMeasure = {
        componentId: 'MeasureUpdatePopupDialog',
        selectedRow: [],
        object: this.currentMeasure,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public createMeasure(measure: FindBidoCounterReferencesByEquipmentCodeOutput): void {
    if (this.selectedMeasure.length === 1) {
      const measureDataRow: MeasureDataRow = {
        _obj: measure,
        counterCode: measure.counterCode,
        counterUnit: measure.counterUnit,
        cumulatedCounterValue: measure.cumulatedCounterValue,
        ratingCounterValue: measure.ratingCounterValue,
        ratingText: measure.ratingText,
        readingDate: this.dateService.dateWithHourToString(measure.counterDate),
        referenceValue: measure.referenceValue,
        remainingValue: measure.remainingValue,
        dateLimit: this.dateService.dateToString(measure.dateLimit),
        source: measure.source
      };

      const selectedRowIndex = this.bidoMeasuresDisplayed.findIndex((row) => row === this.selectedMeasure[0]);
      if (selectedRowIndex >= 0) {
        this.bidoMeasuresDisplayed[selectedRowIndex] = measureDataRow;
        this.bidoMeasuresDisplayed = [...this.bidoMeasuresDisplayed];

        this.assetFormService.getMeasureTabData(this.equipment.bidoEquipmentDTO).subscribe((result) => {
          this.equipment.measureTableDtos = result;
          this.loadMeasureChartData();
        });
      }
    }
    this.selectedMeasure = [];
  }

  private openHistoricAttributes() {
    if (!!this.equipment && this.equipment.bidoEquipmentDTO && !!this.equipment.bidoEquipmentDTO.equipmentCode) {
      const attributeIds: BidoEquipmentAttributeDTOId[] = this.dynamicAttributesService.toBireEquipmentAttributeId(
        this.equipment.bidoEquipmentDTO.equipmentCode,
        this.dynamicAttributes
      );
      this.dynamicAttributesHistoric = this.assetFormService.findHBidoEquipmentAttributesByAttributeId(attributeIds);
    }
  }

  public openStatusUpdatesPopup() {
    // TODO
  }

  public openInstallAsset(openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.InstallAssetComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'InstallAssetComponent',
      objectId: this.serializationService.serialize(this.equipment),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // Events

  public hideClosedEvents() {
    this.showHideEvent = false;
    this.eventsTableDataSource.setData(
      this.eventsTableDataSource.dataSrc.filter((obj) => {
        if (obj.bidoNotificationDTO.status !== AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY) {
          return obj;
        }
      })
    );
  }

  public showClosedEvents() {
    this.showHideEvent = true;
    this.eventsTableDataSource.setData(this.showEventDisplayed);
  }

  public createEvents(): void {
    this.currentEvent = undefined;
    this.eventPopupOpenMode = ComponentOpenMode.Create;
    this.showEventPopup = true;
    if (!this.isAircraft()) {
      this.assetTitle = `P/N ${this.equipment.bidoEquipmentDTO.pnCode} | S/N ${this.equipment.bidoEquipmentDTO.sn}`;
    }
    if (this.isAircraft()) {
      this.assetTitle = `${this.equipment.bidoEquipmentDTO.familyVariantCode}
      | MSN ${this.equipment.bidoEquipmentDTO.sn} | ${this.equipment.bidoEquipmentDTO.registration}`;
    }
  }

  public onAddEvent(event: NotificationTableDto): void {
    let isExistingEvent = false;
    event.bidoNotificationDTO.reportingPeriodStartDateStr = this.dateService.dateWithHourToString(
      event.bidoNotificationDTO.reportingPeriodStartDate
    );
    if (!!this.eventsTableDataSource) {
      this.eventsTableDataSource.dataSrc.forEach((eventDisplayed) => {
        if (
          !!eventDisplayed.bidoNotificationDTO &&
          !!event.bidoNotificationDTO &&
          eventDisplayed.bidoNotificationDTO.typeCode === event.bidoNotificationDTO.typeCode &&
          eventDisplayed.bidoNotificationDTO.reportingDateStr === event.bidoNotificationDTO.reportingPeriodStartDateStr
        ) {
          isExistingEvent = true;
        }
      });
    }
    if (isExistingEvent) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnEventExists'));
    } else {
      event.bidoNotificationDTO.equipmentCode = this.equipment.bidoEquipmentDTO.equipmentCode;

      event.bidoNotificationDTO.operatorCode = this.equipment.bidoEquipmentDTO.operatorCustomerCode;

      event.bidoNotificationDTO.ownerCode = this.equipment.bidoEquipmentDTO.ownerCustomerCode;
      event.bidoNotificationDTO.familyVariantCode = this.equipment.bidoEquipmentDTO.familyVariantCode;

      if (!!this.equipment.bidoEquipmentDTO) {
        event.bidoNotificationDTO.chapter = this.equipment.bidoEquipmentDTO.chapter;
        event.bidoNotificationDTO.section = this.equipment.bidoEquipmentDTO.section;
        event.bidoNotificationDTO.sheet = this.equipment.bidoEquipmentDTO.sheet;
        event.bidoNotificationDTO.subject = this.equipment.bidoEquipmentDTO.subject;
        event.bidoNotificationDTO.marks = this.equipment.bidoEquipmentDTO.marks;

        event.bidoNotificationDTO.statusState = this.equipment.bidoEquipmentDTO.statusState;
        event.bidoNotificationDTO.statusDate = this.equipment.bidoEquipmentDTO.statusDate;
      }

      this.eventAdded.push(event.bidoNotificationDTO);
      this.assetFormService.createBidoNotification(this.eventAdded).subscribe(() => {
        this.eventAdded = [];
        this.loadEvents();
      });
    }
    this.eventsTableDataSource.dataSelection = [];
  }

  // Airworthiness
  public addSbad(): void {
    this.currentSbadIndex = -1;
    this.currentSbad = undefined;
    this.sbadPopupOpenMode = ComponentOpenMode.Create;
    this.showSbadPopup = true;
  }

  public editSbad(): void {
    if (this.selectedSbad.length === 1) {
      this.currentSbadIndex = this.bidoSbadDisplayed.indexOf(this.selectedSbad[0]);
      this.currentSbad = { ...this.selectedSbad[0] };
      this.sbadPopupOpenMode = ComponentOpenMode.Write;
      this.showSbadPopup = true;
    }
  }

  public openSbad(): void {
    if (this.selectedSbad.length === 1) {
      this.currentSbad = this.selectedSbad[0];
      this.currentSbadIndex = -1;
      this.sbadPopupOpenMode = ComponentOpenMode.Read;
      this.showSbadPopup = true;
    }
  }

  public onAddSbad(sbad: BidoEquipmentEvolutionInputOutputDTO): void {
    LabelValueUtils.stringValueToLabel<BidoEquipmentEvolutionDTO>(
      sbad.bidoEquipmentEvolutionDTO,
      'evolutionType',
      this.evolutionSourceList
    );
    sbad.bidoEquipmentEvolutionDTO.equipmentCode = this.equipment.bidoEquipmentDTO.equipmentCode;
    sbad.application = sbad.bidoEquipmentEvolutionDTO.isPartiallyApplied;
    this.setAirwothinessApplication(sbad); // enhancement
    let isExists = false;
    let updatedSbadIndex = -1;
    if (!!sbad) {
      sbad.bidoEquipmentEvolutionDTO.dateAppliedStr = this.dateService.dateToString(
        sbad.bidoEquipmentEvolutionDTO.dateApplied
      );
      sbad.bidoEquipmentEvolutionDTO.dateRemoveStr = this.dateService.dateToString(
        sbad.bidoEquipmentEvolutionDTO.dateRemove
      );
      isExists = this.bidoSbadDisplayed.some((sbadDisplayed) =>
        DTOUtils.equalsBidoEquipmentEvolutionDTO(
          sbadDisplayed.bidoEquipmentEvolutionDTO,
          sbad.bidoEquipmentEvolutionDTO
        )
      );
      if (isExists) {
        updatedSbadIndex = this.bidoSbadDisplayed.findIndex((sbadDisplayed) =>
          DTOUtils.equalsBidoEquipmentEvolutionDTO(
            sbadDisplayed.bidoEquipmentEvolutionDTO,
            sbad.bidoEquipmentEvolutionDTO
          )
        );
        if (updatedSbadIndex !== -1 && this.currentSbadIndex === updatedSbadIndex && this.currentSbadIndex !== -1) {
          this.sbadAdded[updatedSbadIndex] = sbad;
          this.bidoSbadDisplayed[updatedSbadIndex] = sbad;
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('duplicatesValue'));
        }
      } else {
        if (this.currentSbadIndex !== -1) {
          this.sbadAdded[this.currentSbadIndex] = sbad;
          this.bidoSbadDisplayed[this.currentSbadIndex] = sbad;
        } else {
          this.sbadAdded = [...this.sbadAdded, sbad];
          this.bidoSbadDisplayed = [...this.bidoSbadDisplayed, sbad];
        }
      }
    }
    this.selectedSbad = [];
  }

  public deleteSbad(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.selectedSbad.forEach((sbad) => {
          LabelValueUtils.labelToStringValue<BidoEquipmentEvolutionDTO>(
            sbad.bidoEquipmentEvolutionDTO,
            'evolutionType',
            this.evolutionSourceList
          );
          const bidoEquipmentEvolutionDTOId: BidoEquipmentEvolutionDTOId = {
            evolutionNumber: sbad.bidoEquipmentEvolutionDTO.evolutionNumber,
            equipmentCode: sbad.bidoEquipmentEvolutionDTO.equipmentCode,
            evolutionType: sbad.bidoEquipmentEvolutionDTO.evolutionType,
            evolutionRevisionNumber: sbad.bidoEquipmentEvolutionDTO.evolutionRevisionNumber
          };
          const sbadAddedWithoutSelection = this.sbadAdded.filter((sbadAdded) => {
            return !DTOUtils.equalsBidoEquipmentEvolutionDTO(
              sbad.bidoEquipmentEvolutionDTO,
              sbadAdded.bidoEquipmentEvolutionDTO
            );
          });

          if (this.sbadAdded.length !== sbadAddedWithoutSelection.length) {
            this.sbadAdded = sbadAddedWithoutSelection;
          } else {
            this.sbadRemoved.push(bidoEquipmentEvolutionDTOId);
          }
        });

        this.bidoSbadDisplayed = this.bidoSbadDisplayed.filter((sbad) => {
          return !this.selectedSbad.some((selectedSbad) => {
            return DTOUtils.equalsBidoEquipmentEvolutionDTO(
              sbad.bidoEquipmentEvolutionDTO,
              selectedSbad.bidoEquipmentEvolutionDTO
            );
          });
        });
        this.selectedSbad = [];
      }
    });
  }

  // Documents
  private loadDocumentTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_ASSET_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    let flag = false;
    if (!!event.files) {
      const file: File = event.files[0];
      this.documents.forEach((document) => {
        if (!!document.bidoDocumentationDTO) {
          if (document.bidoDocumentationDTO.docName === file.name) {
            flag = true;
          }
        }
      });
      if (flag) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          const fileNameParts = file.name && file.name.includes('.') ? file.name.split('.') : [];
          const docType = fileNameParts.length > 0 ? fileNameParts[fileNameParts.length - 1].toUpperCase() : undefined;

          if (!!fileContent) {
            const document: BidoDocumentationDTO = {
              docType,
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date(),
              equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode
            };
            const bidoDoc: BidoDocumentationTableOutputDTO = {
              bidoDocumentationDTO: document
            };
            this.documents = [...this.documents, bidoDoc];
            this.documentsAdded = [...this.documentsAdded, bidoDoc];

            this.documentTableDataSource.addData([this.addData(document)]);
          }
        });
      }

      fileUploader.clear();
    }
  }

  public openDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = -1;
      this.addedDocumentIndex = -1;
      this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
      this.documentDialogOpenMode = ComponentOpenMode.Read;
      this.showAddDocumentDialog = true;
    }
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const temp: BidoDocumentationDTOId[] = [];
        this.documentTableDataSource.dataSelection.forEach((data) => {
          if (!!data && !!data._obj && !!data._obj.docCode) {
            const codeId: BidoDocumentationDTOId = {
              docCode: data._obj.docCode
            };
            temp.push(codeId);
          }
        });
        this.equipment.removeBidoDocumentationId = temp;

        this.documentTableDataSource.setData(
          this.documentTableDataSource.dataSrc.filter((data) => {
            return !this.documentTableDataSource.dataSelection.some((row) => {
              return data.docName === row.docName;
            });
          })
        );

        this.documents = this.documents.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });

        this.documentsAdded = this.documentsAdded.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });
        this.documentsUpdated = this.documentsUpdated.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });

        this.documentTableDataSource.dataSelection = [];
      }
    });
  }

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      if (!!documentRow._obj) {
        FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
      }
    });
  }

  // Save Asset

  public saveAssetData(): void {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO && !!this.equipment.bidoEquipmentDTO.operationalStatus) {
      if (
        !!this.equipment.bidoEquipmentDTO &&
        StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.familyVariantCode)
      ) {
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else if (
        this.isTool() &&
        (StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.equipmentFunction) ||
          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn))
      ) {
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else {
        this.eventAdded.forEach((obj) => {
          LabelValueUtils.labelToStringValue<BidoNotificationDTO>(obj, 'typeCode', this.typeList);
        });
        this.bidoSbadDisplayed.forEach((sbad) => {
          LabelValueUtils.labelToStringValue<BidoEquipmentEvolutionDTO>(
            sbad.bidoEquipmentEvolutionDTO,
            'evolutionType',
            this.evolutionSourceList
          );
          const sbadTable: BidoEquipmentEvolutionInputOutputDTO = {
            bidoEquipmentEvolutionDTO: sbad.bidoEquipmentEvolutionDTO,
            application: sbad.application,
            designation: sbad.designation,
            event: sbad.event ? sbad.event : false
          };
          this.sbadAddedList.push(sbadTable);
        });
        if (!this.isAircraft() && !this.isEngine() && !this.isTool()) {
          this.equipment.bidoEquipmentDTO.equipmentFunction = !!this.equipment.bidoEquipmentDTO.equipmentFunction
            ? this.equipment.bidoEquipmentDTO.equipmentFunction
            : '';
        }
        if (this.isAircraft() && !this.isEngine() && !this.isTool()) {
          this.equipment.bidoEquipmentDTO.equipmentFunction = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
        }
        if (this.isEngine() && !this.isAircraft() && !this.isTool()) {
          this.equipment.bidoEquipmentDTO.equipmentFunction = AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;
        }

        if (this.isCreateOpenMode) {
          this.createAsset(this.equipment.bidoEquipmentDTO);
        } else {
          this.updateAsset();
        }
      }
    }
  }

  private createAsset(bidoEquipmentDTO: BidoEquipmentDTO): void {
    this.showSaveSpinner = true;
    this.assetFormService.saveCreateAsset(bidoEquipmentDTO).subscribe(
      (result) => {
        const id: BidoEquipmentDTOId = {
          equipmentCode: result.equipmentCode
        };
        this.equipmentId = id;
        this.componentData.objectId = this.serializationService.serialize(id);
        this.equipment.bidoEquipmentDTO.equipmentCode = result.equipmentCode;
        this.updateAsset();
        this.updateOpenMode(ComponentOpenMode.Write);
        if (this.isAircraft() && !this.isEngine()) {
          this.context = [
            StringUtils.orEmpty(this.equipment.bidoEquipmentDTO.familyVariantCode),
            StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn)
              ? ''
              : `MSN ${this.equipment.bidoEquipmentDTO.sn}`,
            StringUtils.orEmpty(this.equipment.bidoEquipmentDTO.registration)
          ]
            .filter((s) => !StringUtils.isEmpty(s))
            .join(' | ');
        }
        if (!this.isAircraft() && this.isEngine()) {
          this.context = [
            StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.pnCode)
              ? ''
              : `P/N ${this.equipment.bidoEquipmentDTO.pnCode}`,
            StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn)
              ? ''
              : `ESN ${this.equipment.bidoEquipmentDTO.sn}`
          ]
            .filter((s) => !StringUtils.isEmpty(s))
            .join(' | ');
        }
        if (!this.isAircraft() && !this.isEngine()) {
          this.context = [
            StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.pnCode)
              ? ''
              : `P/N ${this.equipment.bidoEquipmentDTO.pnCode}`,
            StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn)
              ? ''
              : `S/N ${this.equipment.bidoEquipmentDTO.sn}`
          ]
            .filter((s) => !StringUtils.isEmpty(s))
            .join(' | ');
        }
        this.displayComponentContext(this.context, this.isCreateOpenMode);
        this.messageService.showSuccessMessage('global.successOnSave');
        setTimeout(() => {
          this.setSelectedAnchor('mainAnchor');
        });
        this.showSaveSpinner = false;
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDesc);
        this.showSaveSpinner = false;
      }
    );
  }

  private updateAsset(): void {
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      this.equipment.bidoEquipmentAttributeDTOList = this.dynamicAttributesService.toBidoEquipmentAttribute(
        this.equipment.bidoEquipmentDTO.equipmentCode,
        this.dynamicAttributes
      );
      const object: BidoEquipmentAttributeDTO = {
        attributeId: BidoAttributeConstants.ASSET_LOCATION.toString(),
        equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
        attributeValue: this.locationValue
      };
      this.equipment.bidoEquipmentAttributeDTOList.push(object);
    }
    const assetOutputDto: AssetOutputDto = {
      bidoEquipmentDTO: this.equipment.bidoEquipmentDTO,
      createBidoDocumentationTableOutputDTOs: this.documentsAdded,
      updateBidoDocumentationTableOutputDTOs: this.documentsUpdated,
      removeBidoDocumentationId: this.equipment.removeBidoDocumentationId,
      saveBidoMeasureDTO: [],
      bidoEquipmentEvolutionsFromRequest: this.sbadAddedList,
      bidoEquipmentEvolutionsRemovedList: this.sbadRemoved,
      stockOutputDto: {},
      usageCounterCalculationDTO: {},
      superiorAsset: {},
      superiorAircraft: {},
      superiorEngine: {},
      bidoEquipmentAttributeDTOList: this.equipment.bidoEquipmentAttributeDTOList,
      saveUsageEquipment: this.saveUsageEquipment,
      itemNumber: this.equipment.itemNumber,
      modelCode: this.equipment.modelCode,
      modelName: this.equipment.modelName,
      ratingCode: this.equipment.ratingCode,
      ratingName: this.equipment.ratingName
    };
    const bidoNotificationDTO: BidoNotificationDTO[] = this.eventAdded;
    this.showSaveSpinner = true;
    this.assetFormService.updateAsset(assetOutputDto).subscribe(
      () => {
        this.dissociateCounter();
        this.onSavedAsset();
        this.createBidoNotification(bidoNotificationDTO);
        this.reloadEquipment();
        this.messageService.showSuccessMessage('global.successOnSave');
        this.showSaveSpinner = false;
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDesc);
        this.showSaveSpinner = false;
      }
    );
  }

  private createBidoNotification(bidoNotificationDTO: BidoNotificationDTO[]): void {
    this.assetFormService.createBidoNotification(bidoNotificationDTO).subscribe(() => {
      this.onSavedAsset();
    });
  }

  private onSavedAsset(): void {
    this.sbadAdded = [];
    this.sbadAddedList = [];
    this.sbadRemoved = [];
    this.eventAdded = [];
    this.documentsAdded = [];
    this.documents = [];
    this.documentsUpdated = [];
    this.bidoEquipmentCounterDTOIds = [];
    this.documentTableDataSource.dataSelection = [];
    super.updateOpenMode(ComponentOpenMode.Read);
  }

  public editDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = this.documents.findIndex((list) => {
        return (
          !!list.bidoDocumentationDTO &&
          !!this.documentTableDataSource.dataSelection[0].docName &&
          list.bidoDocumentationDTO.docName === this.documentTableDataSource.dataSelection[0].docName
        );
      });
      this.addedDocumentIndex = this.documentsAdded.findIndex((list) => {
        return (
          !!list.bidoDocumentationDTO &&
          !!this.documentTableDataSource.dataSelection[0].docName &&
          list.bidoDocumentationDTO.docName === this.documentTableDataSource.dataSelection[0].docName
        );
      });
      this.currentDocument = { ...this.documentTableDataSource.dataSelection[0]._obj };
      this.documentDialogOpenMode = ComponentOpenMode.Write;
      this.showAddDocumentDialog = true;
    }
  }

  public addNewDocument(newDocument: BidoDocumentationDTO) {
    const bidoDoc: BidoDocumentationTableOutputDTO = {
      bidoDocumentationDTO: newDocument
    };
    let fileExists = true;
    if (!!newDocument) {
      this.documentTableDataSource.dataSrc.forEach((doc, i) => {
        if (doc.docName === newDocument.docName) {
          if (this.currentDocumentIndex === i) {
            fileExists = true;
          } else {
            fileExists = false;
            this.messageService.showWarningMessage('global.warningOnFileExists');
          }
        }
      });
      if (fileExists) {
        if (this.currentDocumentIndex !== -1) {
          this.documents[this.currentDocumentIndex] = bidoDoc;
          this.documentTableDataSource.replaceData(
            this.documentTableDataSource.dataSrc[this.currentDocumentIndex],
            this.addData(newDocument)
          );
          const updatedDocumentIndex = this.documentsUpdated.findIndex((obj) => {
            return (
              !!obj.bidoDocumentationDTO &&
              !!obj.bidoDocumentationDTO.docName &&
              !!bidoDoc.bidoDocumentationDTO &&
              !!bidoDoc.bidoDocumentationDTO.docName &&
              obj.bidoDocumentationDTO.docName === bidoDoc.bidoDocumentationDTO.docName
            );
          });
          if (newDocument.docCode) {
            if (updatedDocumentIndex !== -1) {
              this.documentsUpdated[updatedDocumentIndex] = bidoDoc;
            } else {
              this.documentsUpdated = [...this.documentsUpdated, bidoDoc];
            }
          } else {
            if (this.addedDocumentIndex !== -1) {
              this.documentsAdded[this.addedDocumentIndex] = bidoDoc;
            } else {
              this.documentsAdded = [...this.documentsAdded, bidoDoc];
            }
          }
        } else {
          const isAdded = this.documentsAdded.some((documentAdded) => this.areSameDocument(documentAdded, bidoDoc));
          if (isAdded) {
            this.messageService.showWarningMessage('global.warningOnDocumentExists');
          } else {
            this.documents = [...this.documents, bidoDoc];
            this.documentsAdded = [...this.documentsAdded, bidoDoc];
            this.documentTableDataSource.addData([this.addData(newDocument)]);
          }
        }
      }
      this.documentTableDataSource.dataSelection = [];
    }
  }

  private areSameDocument(
    obj1: BidoDocumentationTableOutputDTO | undefined,
    obj2: BidoDocumentationTableOutputDTO | undefined
  ): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return (
        !!obj1.bidoDocumentationDTO &&
        !!obj1.bidoDocumentationDTO.docName &&
        !!obj2.bidoDocumentationDTO &&
        !!obj2.bidoDocumentationDTO.docName &&
        obj1.bidoDocumentationDTO.docName === obj2.bidoDocumentationDTO.docName
      );
    }
  }

  public addData(newDocument: BidoDocumentationDTO): DocumentTableRow {
    const selectedDocumentType = this.documentTypes.find(
      (documentType) => !!newDocument.docCategory && (documentType.value as string) === newDocument.docCategory
    );
    const row: DocumentTableRow = {
      docName: newDocument.docName,
      docExtension: this.showDocExtension(newDocument),
      docDescription: newDocument.docDescription,
      docCategory: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
      docEndOfValidityDate: this.dateService.dateToString(newDocument.docEndOfValidityDate),
      _obj: newDocument
    };

    return row;
  }

  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  // Stock

  public showClosedMaintenance(): void {
    this.bidoVisitDisplayed = this.visitDisplayed;
    this.showHideButton = true;
  }

  public hideClosedMaintenance(): void {
    if (this.bidoVisitDisplayed) {
      this.bidoVisitDisplayed = this.bidoVisitDisplayed.filter((obj) => {
        if (obj.statusStateText !== 'Closed') {
          return obj;
        }
      });
      this.showHideButton = false;
    }
  }

  public openFatherEquipment(): void {
    if (!!this.fatherEquipment) {
      let component = ComponentConstants.FLE_EQUIPMENT_FORM;
      if (this.isTool()) {
        component = ComponentConstants.LOG_TOOL_FORM;
      } else if (!!this.fatherEquipment.equipmentFunction) {
        if (this.fatherEquipment.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
          component = ComponentConstants.FLE_AIRCRAFT_FORM;
        } else if (this.fatherEquipment.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
          component = ComponentConstants.FLE_ENGINE_FORM;
        }
      }
      const labelKey = `transaction.${component}`;
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: component,
        openMode: ComponentOpenMode.Read
      };

      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: this.fatherEquipment.equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  // sub Equipments

  public openLinkEquipment(code: AssetStructureTableDto): void {
    if (!!code.equipmentCode) {
      this.openEquipment(code, ComponentOpenMode.Read);
    }
  }

  public openLinkEvolution(code: BireEvolutionDTOId): void {
    if (code) {
      const id: BireEvolutionDTOId = {
        evolutionNumber: code.evolutionNumber,
        evolutionRevisionNumber: code.evolutionRevisionNumber
      };
      this.openEvolution(id);
    }
  }

  private openEvolution(objectId: BireEvolutionDTOId | undefined): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public OpenStatusInfo() {
    this.statusDialog = true;
    this.fatherEquipmentStatus = {
      statusState: this.fatherEquipment.statusState,
      statusUser: this.fatherEquipment.statusUser,
      statusDate: this.fatherEquipment.statusDate
    };
  }

  public OpenStatusInfoSubEquipment(rowData: AssetStructureTableDto) {
    this.fatherEquipmentStatus = {};
    this.statusDialog = true;
    this.fatherEquipmentStatus = {
      statusState: rowData.statusState,
      statusUser: rowData.statusUser,
      statusDate: rowData.statusDate
    };
  }

  public OpenStatusInfoMission(rowData: MissionTableDTO) {
    this.fatherEquipmentStatus = {};
    this.statusDialog = true;
    this.fatherEquipmentStatus = {
      statusState: rowData.statusState,
      statusUser: rowData.statusUser,
      statusDate: rowData.statusDate
    };
  }

  // Asset -Log
  public openAssetLog(objectId: BidoEquipmentDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AssetLogFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AssetLogFormComponent',
      openMode
    };
    const assetFormId: BidoEquipmentDTO = {
      pnCode:
        this.equipment.bidoEquipmentDTO && this.equipment.bidoEquipmentDTO.pnCode
          ? this.equipment.bidoEquipmentDTO.pnCode
          : '',
      equipmentCode: this.componentData.objectId,
      sn:
        this.equipment.bidoEquipmentDTO && this.equipment.bidoEquipmentDTO.sn ? this.equipment.bidoEquipmentDTO.sn : '',
      equipmentFunction: this.isAircraft() ? AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY : undefined
    };
    data.objectId = this.serializationService.serialize(assetFormId);
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAssetMeasureLog(
    objectId: FindBidoCounterReferencesByEquipmentCodeOutput | undefined,
    openMode: ComponentOpenMode
  ): void {
    const labelKey = 'transaction.AssetMeasureLogFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AssetMeasureLogFormComponent',
      openMode
    };
    const currentMeasure = JSON.parse(JSON.stringify(this.selectedMeasure[0]._obj));
    data.objectId = this.serializationService.serialize(currentMeasure);
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**************************************************************************
   * Abstract methods
   *************************************************************************/

  public abstract isEngine(): boolean;

  public abstract isAircraft(): boolean;

  public abstract isTool(): boolean;

  private transformMeasures(listMeasures: FindBidoCounterReferencesByEquipmentCodeOutput[]) {
    return listMeasures.map((obj) => {
      const measureDataRow: MeasureDataRow = {
        _obj: obj,
        counterCode: obj.counterCode,
        counterUnit: obj.counterUnit,
        cumulatedCounterValue: obj.cumulatedCounterValue,
        ratingCounterValue: obj.ratingCounterValue,
        ratingText: obj.ratingText,
        readingDate: this.dateService.dateWithHourToString(obj.counterDate),
        referenceValue: obj.referenceValue,
        remainingValue: obj.remainingValue,
        dateLimit: this.dateService.dateToString(obj.dateLimit),
        source: obj.source
      };

      return measureDataRow;
    });
  }

  private getMeasureTabData(): void {
    this.equipment.measureTableDtos = [];
    this.assetFormService.getMeasureTabData(this.equipment.bidoEquipmentDTO).subscribe((result) => {
      if (result) {
        this.equipment.measureTableDtos = result;
        this.loadMeasureChartData();
      }
    });
  }

  public loadMeasureChartData(): void {
    this.isLoadingMeasureTable = true;
    this.counterMap = new Map<string, BireMeasureReferenceDTO>();
    this.assetFormService.findAllBireMeasureReferences().subscribe((list) => {
      list.forEach((element) => {
        if (element.counterCode) {
          this.counterMap.set(element.counterCode, element);
        }
      });
      this.setTableDynamicHeaders();
      // Load measure table here with dynamic columns
      this.bidoMeasuresDisplayed = this.transformMeasures(this.equipment.measureTableDtos || []);
      this.showMeasureChart = false;

      if (this.bidoMeasuresDisplayed.length > 0) {
        const observables: Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>[] = [];
        const setUpCounters: string[] = [];
        this.bidoMeasuresDisplayed
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
                observables.push(this.assetFormService.getMeasureDetailTableData(bidoEquipmentCounterDTOId));
                setUpCounters.push(counterCode || '');
              }
            }
          });

        if (observables.length > 0) {
          forkJoin(observables).subscribe((results) => {
            this.showMeasureChart = true;
            this.measureChartDataObj = results;
            let allMeasures: FindBidoMeasuresByEquipmentAndCounterCodesOutput[] = [];
            this.measureChartDataObj.forEach((element) => {
              allMeasures = [...allMeasures, ...element];
            });
            this.initDateValues(allMeasures);
            this.setMeasureChartData();
          });
        }
      }
      this.isLoadingMeasureTable = false;
    });
  }

  public setMeasureChartData() {
    if (
      this.measureChartDataObj !== null &&
      this.measureChartDataObj !== undefined &&
      this.measureChartDataObj.length > 0
    ) {
      this.measureVariationData.datasets = [];
      this.measureChartDataObj
        .filter((obj: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) => {
          if (obj && obj.length > 0 && this.selectedMeasureType && this.selectedMeasureType !== 'ALL') {
            return obj[0].counterCode === this.selectedMeasureType;
          }

          return true;
        })
        .forEach((element: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) => {
          const getFirstElement = element[0];
          if (getFirstElement) {
            const data: XYData[] = [];
            const datasetObj = {
              data,
              label: getFirstElement.counterCode === this.tsnLabel ? 'Hours' : 'Cycle',
              borderColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              backgroundColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              hoverBackgroundColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              fill: false,
              cubicInterpolationMode: 'monotone'
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
                  datasetObj.data.push({
                    x: new Date(st.readingDate),
                    y: parseInt(st.cumulatedCounterValue, 10)
                  });
                }
              }
            });
          }
        });
      this.measureVariationData = { ...this.measureVariationData };
    }
    this.setMeasureChartOptions();
  }

  private setMeasureChartOptions(): void {
    this.measureChartOptions = {
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              min: this.startDate,
              max: this.endDate,
              unit: 'month',
              displayFormats: {
                month: AppConstants.MOMENTJS_DATE
              }
            }
          }
        ],
        yAxes: [{}]
      },
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  private initDateValues(measures: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) {
    const dateArray: Date[] = [];
    if (!!measures && measures.length > 0) {
      measures.forEach((st) => {
        if (st.readingDate !== null && st.readingDate !== undefined) {
          dateArray.push(st.readingDate);
        }
      });

      const lastYear: Date = new Date();
      lastYear.setFullYear(lastYear.getFullYear() - 1);
      this.startDate = lastYear;
      this.endDate = new Date();
    }
  }

  public getAlertIcon(obj: MeasureDataRow): string {
    const row: FindBidoCounterReferencesByEquipmentCodeOutput = obj._obj;
    if (
      row &&
      row.aPotentialAlertData &&
      row.aPotentialAlertData.potentialAlertLevel !== null &&
      row.aPotentialAlertData.potentialAlertLevel !== undefined
    ) {
      return this.getColorByIconCode(row.aPotentialAlertData.potentialAlertLevel);
    }

    return '';
  }

  public getAlertIconTooltip(obj: MeasureDataRow): string {
    const row: FindBidoCounterReferencesByEquipmentCodeOutput = obj._obj;
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.alertTooltip) {
      return row.aPotentialAlertData.alertTooltip;
    }

    return '';
  }

  public getMonthGapToolTip(obj: MeasureDataRow): string {
    const row: FindBidoCounterReferencesByEquipmentCodeOutput = obj._obj;
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.monthGapToolTip) {
      return row.aPotentialAlertData.monthGapToolTip;
    }

    return '';
  }

  public getColorByIconCode(iconCode: string): string {
    switch (iconCode) {
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

  /**
   * Open Event creation screen
   */
  public openEvent(rowData: NotificationTableDto) {
    if (!!rowData.bidoNotificationDTO && !!rowData.bidoNotificationDTO.notificationCode) {
      const dto: BidoNotificationOutputDTO = {
        notificationCode: rowData.bidoNotificationDTO.notificationCode,
        typeCode: rowData.bidoNotificationDTO.typeCode
      };

      const bidoNotificationDTOId: BidoNotificationDTOId = {
        notificationCode: rowData.bidoNotificationDTO.notificationCode as string
      };
      this.assetFormService.findBidoNotification(bidoNotificationDTOId).subscribe((res: BidoNotificationDTO) => {
        if (
          !!res.bidoNotificationTypeDTO &&
          res.bidoNotificationTypeDTO.typeCategory === AWPropertiesConstants.EVENT_CATEGORY_DEFECT_KEY
        ) {
          this.openDefect(dto.notificationCode);
        } else {
          this.openEventUC(dto, ComponentOpenMode.Read);
        }
      });
    }
  }

  private openEventUC(objectId: BidoNotificationOutputDTO | undefined, openMode: ComponentOpenMode): void {
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

  public toggleRowDetailsVisibilityVisit(rowData: VisitTableRow) {
    rowData._expand = !rowData._expand;
  }

  public toggleRowDetailsVisibilityStock(rowData: StockTableDto) {
    rowData._expand = !rowData._expand;
  }

  public toggleRowDetailsVisibilitySabd(rowData: BidoEquipmentEvolutionInputOutputDTO) {
    rowData._expand = !rowData._expand;
  }

  public openAlertDialog() {
    this.showAlertPopup = true;
    if (!!this.equipment.reportDTO && !!this.equipment.reportDTO.displayDate) {
      this.reportAlertMessage = this.equipment.reportDTO.displayDate;
    }
  }

  public openAlertDeferredDialog() {
    this.showAlertPopup = true;
    this.reportAlertMessage = this.equipment.deferredDefectAlerText;
  }

  public setTableDynamicHeaders() {
    this.followedInRatingVisibility = false;
    if (
      !this.isAircraft() &&
      !this.isTool() &&
      this.equipment &&
      this.equipment.bidoEquipmentDTO &&
      this.equipment.bidoEquipmentDTO.familyVariantCode
    ) {
      this.assetFormService.isFollowedInRating(this.equipment.bidoEquipmentDTO.familyVariantCode).subscribe(
        (results) => {
          this.followedInRatingVisibility = results;

          const checkRatingExists = this.bidoMeasuresDisplayed.filter((obj) => {
            if (obj.counterCode) {
              return this.getRatingDataVisibility(this.counterMap.get(obj.counterCode));
            }
          })[0];
          const checkLimitDateExists = this.bidoMeasuresDisplayed.filter((obj) => {
            return !!obj.dateLimit;
          })[0];

          this.loadMeasureTableHeader(!!checkRatingExists, !!checkLimitDateExists);
        },
        (err) => {
          this.messageService.showErrorMessage(err.error.errorDetail);
          this.loadMeasureTableHeader(false, false);
        }
      );
    } else {
      this.loadMeasureTableHeader(false, false);
    }
  }

  private getRatingDataVisibility(selectedBireMeasureReferenceDTO: BireMeasureReferenceDTO | undefined): boolean {
    if (selectedBireMeasureReferenceDTO) {
      if (!selectedBireMeasureReferenceDTO.isCounter) {
        return false;
      }
    }

    return this.followedInRatingVisibility;
  }

  public openMissionScreen(code) {
    if (!!code) {
      const mission: BidoMissionDTO = {
        missionCode: code
      };
      this.openMission(mission, ComponentOpenMode.Read);
    }
  }

  private openMission(object: BidoMissionDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.MissionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'MissionFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public removeSelectedEquipments(): void {
    const assetsToRemove: AssetRemovedInput = {
      assetCode: [],
      date: new Date()
    };
    if (
      !!assetsToRemove &&
      !!assetsToRemove.assetCode &&
      this.equipment &&
      this.equipment.bidoEquipmentDTO.equipmentCode
    ) {
      assetsToRemove.assetCode.push(this.equipment.bidoEquipmentDTO.equipmentCode);
    }

    if (this.fatherEquipment && this.fatherEquipment.equipmentCode) {
      assetsToRemove.superiorAssetCode = this.fatherEquipment.equipmentCode;
    }

    this.openAssetsToBeRemoved(assetsToRemove, ComponentOpenMode.Read);
  }

  public installSelectedEquipments(): void {
    const assetsToInstall: AssetInstalledInput = {
      assetCode: []
    };

    if (
      !!assetsToInstall &&
      !!assetsToInstall.assetCode &&
      this.equipment &&
      this.equipment.bidoEquipmentDTO.equipmentCode
    ) {
      assetsToInstall.assetCode.push(this.equipment.bidoEquipmentDTO.equipmentCode);
    }

    if (!!assetsToInstall && !!assetsToInstall.assetCode && assetsToInstall.assetCode.length > 0) {
      this.openAssetsToBeInstalled(assetsToInstall, ComponentOpenMode.Read);
    }
  }

  public openAssetsToBeRemoved(objectId: AssetRemovedInput | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.RemoveAssetComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'RemoveAssetComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAssetsToBeInstalled(objectId: AssetInstalledInput | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.InstallAssetComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'InstallAssetComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public onUpdatedStatus(date: Date): void {
    this.fatherEquipmentStatus.statusDate = date;
  }

  public lockToolResources() {
    const partialMessageKey = 'lockFeature';
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        if (!!this.equipment && !!this.equipment.bidoEquipmentDTO.equipmentCode) {
          this.assetFormService.lockTool(this.equipment.bidoEquipmentDTO.equipmentCode).subscribe(
            () => {
              this.showLockFlag = true;
              this.updateOpenMode(ComponentOpenMode.Read);
            },
            (err) => {
              this.messageService.showErrorMessage(err.error.errorDetail);
            }
          );
        }
      }
    });
  }

  public unLockToolResources() {
    const partialMessageKey = 'unlockFeature';
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        if (!!this.equipment && !!this.equipment.bidoEquipmentDTO.equipmentCode) {
          this.assetFormService.unlockTool(this.equipment.bidoEquipmentDTO.equipmentCode).subscribe(
            () => {
              this.showLockFlag = false;
            },
            (err) => {
              this.messageService.showErrorMessage(err.error.errorDetail);
            }
          );
        }
      }
    });
  }

  private translateADApplicationText(): void {
    const partiallyApplied = `CreateSbadComponent.isPartiallyApplied`;
    const notApplicable = `CreateSbadComponent.isNotApplicable`;
    const fullyApplied = `CreateSbadComponent.isFullyApplied`;
    this.translateService.get([partiallyApplied, notApplicable, fullyApplied]).subscribe((results) => {
      this.partiallyApplied = !!results ? results[partiallyApplied] : 'Partially Applied';
      this.notAppliable = !!results ? results[notApplicable] : 'Not Applicable';
      this.fullyApplied = !!results ? results[fullyApplied] : 'Fully Applied';
    });
  }

  private setAirwothinessApplication(sbAd: BidoEquipmentEvolutionInputOutputDTO): void {
    sbAd.newApplication = this.fullyApplied;
    if (!!sbAd.bidoEquipmentEvolutionDTO.isPartiallyApplied) {
      sbAd.newApplication = sbAd.bidoEquipmentEvolutionDTO.isPartiallyApplied
        ? this.partiallyApplied
        : this.fullyApplied;
    }
    if (!!sbAd.bidoEquipmentEvolutionDTO.isNotApplicable) {
      sbAd.newApplication = sbAd.bidoEquipmentEvolutionDTO.isNotApplicable ? this.notAppliable : this.fullyApplied;
    }
  }

  public showMeasureReport(reportText: string): void {
    if (reportText) {
      this.showMeasurePopup = false;
      this.showMeasureReportText = true;
      this.measureReportText = reportText;
    }
  }

  public removeSubEquipments(): void {
    if (this.equipment.bidoEquipmentDTO && this.equipment.bidoEquipmentDTO.equipmentCode) {
      const assetsToRemove: AssetRemovedInput = {
        assetCode: [],
        superiorAssetCode: this.equipment.bidoEquipmentDTO.equipmentCode,
        date: new Date()
      };
      this.subEquipmentTableDataSource.dataSelection.forEach((obj) => {
        if (!!assetsToRemove && !!assetsToRemove.assetCode && obj.equipmentCode) {
          assetsToRemove.assetCode.push(obj.equipmentCode);
        }
      });

      this.openAssetsToBeRemoved(assetsToRemove, ComponentOpenMode.Read);
    }
  }

  public installSubEquipment(): void {
    const assetsToInstall: AssetInstalledInput = {
      assetCode: []
    };

    if (
      !!assetsToInstall &&
      !!assetsToInstall.assetCode &&
      this.equipment &&
      this.equipment.bidoEquipmentDTO.equipmentCode
    ) {
      assetsToInstall.superiorAssetCode = this.equipment.bidoEquipmentDTO.equipmentCode;
      assetsToInstall.date = new Date();
    }

    if (this.equipment && this.equipment.bidoEquipmentDTO.equipmentCode) {
      this.openAssetsToBeInstalled(assetsToInstall, ComponentOpenMode.Read);
    }
  }

  public onClickDocument(row: StockTableDto) {
    if (row.projectId && row.woId) {
      const objectId: BidmWorkOrderDTOId = {
        projectId: row.projectId,
        woId: row.woId
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      // TODO: open either purchase request or sales request
    }
  }

  private loadReport(): void {
    if (this.equipment.bidoEquipmentDTO.equipmentCode) {
      this.assetFormService
        .checkIfAssetIsConcernedBySbAdEvoMod(this.equipment.bidoEquipmentDTO.equipmentCode)
        .subscribe({
          next: (report) => {
            if (report) {
              this.equipment.reportDTO = report;
              if (report.messages && report.messages.length > 0) {
                // TODO: remove tslint:disable
                // tslint:disable-next-line:no-magic-numbers
                this.showAlertMessageError = report.messages[0].severity === 3 ? true : false;
                this.showAlertMessageWarning = report.messages[0].severity === 2 ? true : false;
              }
            }
          }
        });
    }
  }

  private loadStockMvtMatMgmtFull(): void {
    if (AWPropertiesConstants.MM_FULL_MODULE_ACTIVATED) {
      this.stockMvtTableDataSource.setData([]);
      this.assetFormService.findBidtStockMvtMmf(this.equipmentId).subscribe((results) => {
        if (!!results) {
          if (!!results.bidtStockMvts) {
            results.bidtStockInfoList.forEach((movement) => {
              // Get docuement description
              let torTypeLabel = '';
              let procReqTypeLabel = '';
              if (movement.procurementRequest) {
                const procReqType = this.procurementRequestTypeMap.find(
                  (proc) => proc.value === movement.procurementRequest.procType
                );
                if (!!procReqType) {
                  procReqTypeLabel = procReqType.label;
                }
              }
              if (movement.transferOrder) {
                const torType = this.transferOrderTypeMap.find(
                  (tor) => tor.value === Number(movement.transferOrder.torType)
                );
                if (!!torType) {
                  torTypeLabel = torType.label;
                }
              }
              const movementRow: StockMovementRow = {
                stockMvtCode: movement.stockMvt.stockMvtCode,
                bidtStockMvtType: movement.stockMvt.bidtStockMvtType,
                siteName: movement.site ? `${movement.site.siteCode} - ${movement.site.siteName}` : undefined,
                warehousename: movement.warehouse
                  ? `${movement.warehouse.whCode} - ${movement.warehouse.whName}`
                  : undefined,
                bidtStorageBinZoneIssue: movement.stockMvt.bidtStorageBinZoneIssue,
                bidtStorageBinBinIssue: movement.stockMvt.bidtStorageBinBinIssue,
                bidtStorageBinZoneReceipt: movement.stockMvt.bidtStorageBinZoneReceipt,
                bidtStorageBinBinReceipt: movement.stockMvt.bidtStorageBinBinReceipt,
                smoStatus: this.getMvtStockStatus(movement.stockMvt.mvtStatus as string),
                documentNum: movement.procurementRequest
                  ? movement.procurementRequest.procCode
                  : movement.transferOrder
                  ? movement.transferOrder.torCode
                  : movement.deliveryFolder
                  ? movement.deliveryFolder.dfCode
                  : undefined,
                documentDescription: movement.procurementRequest
                  ? procReqTypeLabel
                  : movement.transferOrder
                  ? torTypeLabel
                  : movement.deliveryFolder
                  ? StringUtils.orEmpty(
                      this.extractTranslationPipe.transform(
                        (movement.deliveryFolder.bidtDfType as BidtDfTypeDTO).dftDesignation
                      )
                    )
                  : undefined,
                statusDate: movement.stockMvt.statusDate,
                _bidtSiteReceipt: movement.site,
                _bidtWarehouseReceipt: movement.warehouse,
                _procurementRequest: movement.procurementRequest,
                _transferOrder: movement.transferOrder,
                _deliveryFolder: movement.deliveryFolder,
                _stockMvt: movement.stockMvt
              };
              this.stockMovementRows.push(movementRow);
            });
            this.stockMvtTableDataSource.setData([...this.stockMovementRows]);
          }
          if (!!results.stockInformation) {
            this.mmfSiteText = results.stockInformation.siteText;
            this.mmfWarehouseText = results.stockInformation.warehouseText;
            this.mmfStorageBinText = results.stockInformation.storageBinText;
            this.mmfStorageZoneText = results.stockInformation.areaText;
          }
        }
      });
    }
  }

  public openDocOrigine(movementRow: StockMovementRow): void {
    if (movementRow._procurementRequest) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
        objectId: this.serializationService.serialize({ id: movementRow._procurementRequest.id }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (movementRow._transferOrder) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
        objectId: this.serializationService.serialize(movementRow._transferOrder.id),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (movementRow._deliveryFolder) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_GOODS_RECEIPT_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize({ id: movementRow._deliveryFolder.id })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public getMvtStockStatus(key: string): SelectItem {
    return this.movementsStatusMap.filter((status) => status.value === key)[0];
  }

  private initStockMvtTable(): void {
    this.stockMvtTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '12.5%' },
        { field: 'type', translateKey: this.getTranslateKey('type'), alignment: ColumnAlignment.CENTER, width: '5%' },
        { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
        { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '17.5%' },
        { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '17.5%' },
        { field: 'status', translateKey: this.getTranslateKey('status'), width: '12.5%' },
        { field: 'document', translateKey: this.getTranslateKey('document'), width: '15%' }
      ],
      data: []
    });
  }

  public showSendToRepairButton(): boolean {
    return (
      !!this.operationalStatus &&
      this.operationalStatus === AWPropertiesConstants.OPERATIONAL_STATUS_PENDING_FOR_MAINTENANCE_KEY
    );
  }

  public openSendToRepairPopup(): void {
    this.sendToRepairPopupVisible = true;
  }

  public onValidateSendToRepair(sendToRepairDTO: SendToRepairDTO): void {
    this.assetSearchService.validateSendToRepair(sendToRepairDTO).subscribe(() => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successSendToRepair'));
    });
  }
}
