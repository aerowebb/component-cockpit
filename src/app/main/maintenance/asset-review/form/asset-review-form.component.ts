import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { finalize, takeUntil } from 'rxjs/operators';

import { TranslateService } from '../../../../../../node_modules/@ngx-translate/core';
import { MenuItem, SelectItem, SortEvent, TreeNode } from '../../../../../../node_modules/primeng/api';
import { Observable, forkJoin, merge } from '../../../../../../node_modules/rxjs';
import { FlightInputData } from '../../../../main/flight-operations/flight/types/flight-input-data.interface';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DefectListService } from '../../../../shared/components/defect-list/defect-list.service';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { BireUnitMeasureConstants } from '../../../../shared/constants/bire-unit-measure-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetReviewInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-review-input.interface';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { CheckEquipmentForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/check-equipment-for-airworthiness-control-input.interface';
import { ComputePotentialForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/compute-potential-for-airworthiness-control-input.interface';
import { CreateAcrsInputEvent } from '../../../../shared/types/api-input-types/airworthiness-management/create-acrs-input-event.interface';
import { GenerateAirworthinessControlTableInput } from '../../../../shared/types/api-input-types/airworthiness-management/generate-airworthiness-control-table-input.interface';
import { ControlConfigurationInput } from '../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { FindAllBidoMissionEquipmentByCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-all-bido-mission-equipment-by-criteria-input.interface';
import { ADSBModRowDTO } from '../../../../shared/types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { AssetFlightTableDTO } from '../../../../shared/types/api-output-types/airworthiness-management/asset-flight-table-dto.interface';
import { AssetWorkPackageStatusTableDTO } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-package-status-table-dto.interface';
import { GenerateAirworthinessControlTableOutput } from '../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { ReportPostponementElementDTO } from '../../../../shared/types/api-output-types/airworthiness-management/report-postponement-element-dto.interface';
import { ControlConfigurationOutput } from '../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidoMissionEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-mission-equipment-lwo.interface';
import { BidoNotificationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { UpcomingEventDTO } from '../../../../shared/types/api-output-types/upcoming-event-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionDTO } from '../../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireModificationDTOId } from '../../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { AppliedConfigurationManagementInput } from '../../../../shared/types/component-input-types/maintenance/applied-configuration-management.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { SummaryRow } from '../../../../shared/types/summary-row.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { ComparatorUtils } from '../../../../shared/utils/comparator-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { AirworthinessRow } from '../../airworthiness-control/form/airworthiness-control-form/types/airworthiness-row.interface';
import { MaintenancePlanTableTypeConstants } from '../../airworthiness-control/form/schedule-maintenance-form/constants/maintenance-plan-table-type-constants';
import { AirworthinessControlFormComponentInput } from '../../airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { ScheduleMaintenanceFormComponentInput } from '../../airworthiness-control/types/schedule-maintenance-form-component-input.interface';
import { SimulationCriteria } from '../../airworthiness-control/types/simulation-criteria.interface';

import { AssetReviewFormService } from './asset-review-form.service';
import { FlightsDTO } from './types/flights-dto.interface';
import { WorkPackageDTO } from './types/work-package-dto.interface';

enum FilterAlert {
  All = 0,
  Critcal
}

interface DefectCountDTO {
  ok: number;
  nok: number;
  warning: number;
}

interface AcrsStatusRow {
  category?: string;
  ok?: number;
  warning?: number;
  nok?: number;
  label?: string;
  tabIndex?: number;
}

@Component({
  selector: 'aw-asset-review-form',
  templateUrl: './asset-review-form.component.html',
  styleUrls: ['./asset-review-form.component.scss', './share.scss']
})
export class AssetReviewFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly GENERAL_ANCHOR_ID: string = 'generalAnchor';
  public static readonly SUMMARY_ANCHOR_ID: string = 'summaryAnchor';
  public static readonly WORK_PACKAGES_ANCHOR_ID: string = 'workPackagesAnchor';
  public static readonly DEFECTS_ANCHOR_ID: string = 'defectsAnchor';
  public static readonly FLIGHTS_ANCHOR_ID: string = 'flightsAnchor';
  public static readonly POSTPONEMENT_ANCHOR_ID: string = 'postponementAnchor';
  public static readonly UPCOMING_EVENTS_ANCHOR_ID: string = 'upcomingEventsAnchor';
  public static readonly AW_DOCUMENTS_ANCHOR_ID: string = 'awDocumentsAnchor';

  private static readonly SUMMARY_TABLE_CONFIGURATION_INDEX: number = 2;
  private static readonly SUMMARY_TABLE_CORE_INDEX: number = 1;
  private static readonly SUMMARY_TABLE_FL_INDEX: number = 8;
  private static readonly SUMMARY_TABLE_LOGBOOK_INDEX: number = 7;
  private static readonly SUMMARY_TABLE_MEL_INDEX: number = 6;
  private static readonly SUMMARY_TABLE_POTENTIAL_INDEX: number = 4;
  private static readonly SUMMARY_TABLE_REFERENTIAL_INDEX: number = 5;
  // private static readonly SUMMARY_TABLE_STRUCTURE_INDEX: number = 3;

  public static readonly SUMMARY_TABLE_ACRS_LABEL: string = 'summaryAcrs';
  public static readonly SUMMARY_TABLE_LOGBOOK_LABEL: string = 'summaryLogbook';
  public static readonly SUMMARY_TABLE_BREAKDOWN_LABEL: string = 'summaryBreakdown';
  public static readonly SUMMARY_TABLE_DEFECTS_LABEL: string = 'summaryDefects';
  public static readonly SUMMARY_TABLE_FLIGHTS_LABEL: string = 'summaryFlights';
  public static readonly SUMMARY_TABLE_POSTPONEMENT_LABEL: string = 'summaryPostponement';
  public static readonly SUMMARY_TABLE_UPCOMING_EVENTS_LABEL: string = 'summaryUpcomingEvents';
  public static readonly SUMMARY_TABLE_AIRWORTHINESS_DOCUMENTS_LABEL: string = 'summaryAirworthinessDocuments';
  public static readonly SUMMARY_TABLE_CONFIGURATION_LABEL: string = 'configuration';
  public static readonly SUMMARY_TABLE_TOTAL_LABEL: string = 'total';

  private static readonly SUMMARY_TABLE_ROW_HEADER: number = 0;
  private static readonly SUMMARY_TABLE_ROW_ACRS: number = 1;
  private static readonly SUMMARY_TABLE_ROW_LOGBOOK: number = 2;
  private static readonly SUMMARY_TABLE_ROW_ASSET_BREAKDOWN: number = 3;
  private static readonly SUMMARY_TABLE_ROW_CONFIGURATION: number = 4;
  private static readonly SUMMARY_TABLE_ROW_DEFECTS: number = 5;
  private static readonly SUMMARY_TABLE_ROW_FLIGHTS: number = 6;
  private static readonly SUMMARY_TABLE_ROW_POSTPONED: number = 7;
  private static readonly SUMMARY_TABLE_ROW_UPCOMING: number = 8;
  private static readonly SUMMARY_TABLE_ROW_DOCUMENTS: number = 9;

  private static readonly HOME_TAB_INDEX: number = 0;
  private static readonly WORK_PACKAGE_TAB_INDEX: number = 1;
  private static readonly DEFECT_TAB_INDEX: number = 2;
  private static readonly FLIGHT_TAB_INDEX: number = 3;
  private static readonly POSTPONED_WORK_ORDER_TAB_INDEX: number = 4;
  private static readonly UPCOMING_TASK_LLP_TAB_INDEX: number = 5;
  private static readonly AIRWORTHINESS_DOCUMENTS_TAB_INDEX: number = 6;

  private static readonly LABEL_AD: string = 'AD';
  private static readonly LABEL_SB: string = 'SB';
  private static readonly LABEL_DEFECT: string = 'DEFECT';
  private static readonly LABEL_LLP: string = 'LLP';
  private static readonly LABEL_OMP: string = 'OMP';
  private static readonly LABEL_TASK: string = 'TASK';

  private static readonly CONTROL_RED_VALUE = 1;
  private static readonly CONTROL_YELLOW_VALUE = 2;
  private static readonly CONTROL_GREEN_VALUE = 3;

  public readonly component: typeof AssetReviewFormComponent;

  private airworthinessMap: Map<string, AirworthinessRow>;
  private airworthinessTreeTable: GenerateAirworthinessControlTableOutput[];

  public navigationLinkList: MenuItem[];
  public potentialUnitList: MenuItem[];

  public readonly filterAlert: typeof FilterAlert;
  public filterAlertList: SelectItem[];
  public selectedFilterAlert: FilterAlert;

  public scope: AirworthinessControlFormComponentInput;
  public topAssetTypeList: string;
  public topEquipmentCodeList: string[];
  public topFamilyVariantList: string;
  public topWarehouse: string | undefined;
  public simulationCriteria: SimulationCriteria | undefined;
  public asset: BidoEquipmentDTO | undefined;
  public airworthinessTableColCsnLabel: string;
  public airworthinessTableColTsnLabel: string;
  public globalAlertListLoading: boolean;

  public assetAirworthiness: AirworthinessRow | undefined;

  public potentialUnitSelected: string;

  public workPackageTable1: AssetWorkPackageStatusTableDTO[];
  public workPackageTableForDisplay: WorkPackageDTO[];
  public workPackageTableCols: TableColumn[];
  public selectedWorkPackages: WorkPackageDTO[];

  public flightsTableDataSource: TableDataSource<FlightsDTO>;
  public flightsTable: AssetFlightTableDTO[];

  public postponementTable: ReportPostponementElementDTO[];
  public postponementTableCols: TableColumn[];

  public upcomingEventsTable: UpcomingEventDTO[];
  private upcomingEventsTableBak: UpcomingEventDTO[];
  public upcomingEventsTableCols: TableColumn[];

  public airworthinessDocumentsTable: ADSBModRowDTO[];
  private airworthinessDocumentsTableBak: ADSBModRowDTO[];
  public airworthinessDocumentsTableCols: TableColumn[];
  public remainingTable: FlightsDTO[];
  public remainingTableCols: TableColumn[];
  public remainingTableCols2: TableColumn[];

  public assetStructure: TreeNode[];
  private assetStructureSrc: TreeNode[];
  public summaryTable: SummaryRow[];

  public adFilterList: SelectItem[];
  public selectedADFilterList: string[];
  public assetList: LabelValue<string>[];
  public selectedAdAsset: string | undefined;
  public adFiltersVisible: boolean;

  public utlFilterList: SelectItem[];
  public selectedUtlFilterList: string[];
  public utlAssetList: LabelValue<string>[];
  public selectedUtlAsset: string | undefined;
  public eventTypeFilterList: SelectItem[];
  public selectedEventTypeFilterList: number[];
  public utlFiltersVisible: boolean;

  public tabIndex: number;

  public acrsStatusTableCols = [
    { field: 'category', alignment: 'left', width: '52%' },
    { field: 'ok', alignment: 'center', width: '16%' },
    { field: 'warning', alignment: 'center', width: '16%' },
    { field: 'nok', alignment: 'center', width: '16%' }
  ];

  public flightSummaryTableCols = [
    { field: 'ok', alignment: 'center' },
    { field: 'warning', alignment: 'center' },
    { field: 'nok', alignment: 'center' }
  ];

  public postponementSummaryTableCols = [
    { field: 'ok', alignment: 'center' },
    { field: 'warning', alignment: 'center' },
    { field: 'nok', alignment: 'center' }
  ];

  public upcomingEventsSummaryTableCols = [
    { field: 'ok', alignment: 'center' },
    { field: 'warning', alignment: 'center' },
    { field: 'nok', alignment: 'center' }
  ];

  public airworthinessDocumentsSummaryTableCols = [
    { field: 'ok', alignment: 'center' },
    { field: 'warning', alignment: 'center' },
    { field: 'nok', alignment: 'center' }
  ];

  public acrsStatusTable: AcrsStatusRow[] = [];

  public workPackageTableSummary: {
    category?: string;
    ok?: number;
    warning?: number;
    nok?: number;
  }[] = [];

  public flightTableSummary: { ok?: number; warning?: number; nok?: number }[] = [];

  public postponementTableSummary: { ok?: number; warning?: number; nok?: number }[] = [];

  public upcomingEventsTableSummary: { ok?: number; warning?: number; nok?: number }[] = [];

  public airworthinessDocumentsTableSummary: { ok?: number; warning?: number; nok?: number }[] = [];

  public isSummaryTableLoading: boolean = false;
  public isWorkPackageLoading: boolean = false;
  public isPostponementTableLoading: boolean = false;
  public isUpcomingEventsTableLoading: boolean = false;
  public isAirworthinessDocumentsTableLoading: boolean = false;

  public isEquivalentPotentialLoading: boolean = false;

  public okString: string;
  public nokString: string | '';
  public warningString: string | '';

  public eventTableData: DialogTableData<BidoNotificationDTO>;

  private acrsWorkPackageOkCount: number;
  private acrsWorkPackageNokCount: number;
  private acrsWorkPackageWarningCount: number;
  private logbookOkCount: number;
  private logbookNokCount: number;
  private logbookWarningCount: number;
  private breakdownOkCount: number;
  private breakdownNokCount: number;
  private breakdownWarningCount: number;
  private configurationOkCount: number;
  private configurationNokCount: number;
  private configurationWarningCount: number;
  private flightOkCount: number;
  private flightNokCount: number;
  private flightWarningCount: number;
  private postponementOkCount: number;
  private postponementNokCount: number;
  private postponementWarningCount: number;
  private upcomingEventsOkCount: number;
  private upcomingEventsNokCount: number;
  private upcomingEventsWarningCount: number;
  private airworthinessDocumentsOkCount: number;
  private airworthinessDocumentsNokCount: number;
  private airworthinessDocumentsWarningCount: number;

  private defectCounts: DefectCountDTO;

  public acrsEventCodeList: BidoNotificationDTOId[];
  private refreshButton: (() => void) | undefined;

  // Table of content

  @ViewChild(AssetReviewFormComponent.GENERAL_ANCHOR_ID)
  public generalEltRef: ElementRef;

  @ViewChild(AssetReviewFormComponent.SUMMARY_ANCHOR_ID)
  public summaryEltRef: ElementRef;

  @ViewChild(AssetReviewFormComponent.WORK_PACKAGES_ANCHOR_ID)
  public workPackagesEltRef: ElementRef;

  @ViewChild(AssetReviewFormComponent.DEFECTS_ANCHOR_ID)
  public defectsEltRef: ElementRef;

  @ViewChild(AssetReviewFormComponent.FLIGHTS_ANCHOR_ID)
  public flightsEltRef: ElementRef;

  @ViewChild(AssetReviewFormComponent.POSTPONEMENT_ANCHOR_ID)
  public postponementEltRef: ElementRef;

  @ViewChild(AssetReviewFormComponent.UPCOMING_EVENTS_ANCHOR_ID)
  public upcomingEventsEltRef: ElementRef;

  @ViewChild(AssetReviewFormComponent.AW_DOCUMENTS_ANCHOR_ID)
  public awDocumentsEltRef: ElementRef;

  public toc: PageTocEntry[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly assetReviewFormService: AssetReviewFormService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly dateService: DateService,
    private readonly defectListService: DefectListService
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

    this.component = AssetReviewFormComponent;

    this.setNavigationLinkList();
    this.setPotentialUnitList();

    this.filterAlert = FilterAlert;
    this.init();
    this.setFilterControlList();
    this.setFiterEventTypeList();
    this.setTableCols();
    this.loadAirworthinessTableColumnLabelList();
    this.initializeOkNokWarning();

    this.registerPageTocEntryObservable();
    this.registrRereshButtonObservables();

    this.tabIndex = AssetReviewFormComponent.HOME_TAB_INDEX;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    if (!this.componentData.objectId) {
      this.messageService.showErrorMessage('global.errorOnNavigate');
    } else {
      this.setTableOfContent();
      // Init scope
      this.scope = this.serializationService.deserialize(this.componentData.objectId as string) || [];

      this.topAssetTypeList = ListUtils.orEmpty(this.scope.functionList)
        .filter((v, i, a) => a.indexOf(v) === i)
        .join(', ');
      this.topEquipmentCodeList = this.scope.equipmentCodeList;
      this.topFamilyVariantList = ListUtils.orEmpty(this.scope.familyVariantList)
        .filter((v, i, a) => a.indexOf(v) === i)
        .join(', ');
      this.topWarehouse = this.scope.warehouse;
      this.simulationCriteria = this.scope.simulationCriteria;

      this.initSummaryCount();
      this.initSummaryTable();
      this.load();
      this.loadAsset();
      this.initWorkPackageSummary();
      this.initFlightSummary();
      this.initPostponementSummary();
      this.initUpcomingEventsSummary();
      this.initAirworthinessDocumentsSummary();
      this.loadAssetReviewTables();
    }
  }

  private setTableOfContent(): void {
    const generalKey = this.getTranslateKey('general');
    const summaryKey = this.getTranslateKey('acrsStatus');
    const workPackagesKey = this.getTranslateKey('workPackages');
    const defectsKey = this.getTranslateKey('defects');
    const flightsKey = this.getTranslateKey('flights');
    const postponementKey = this.getTranslateKey('postponement');
    const upcomingEventsKey = this.getTranslateKey('upcomingEvents');
    const awDocumentsKey = this.getTranslateKey('airworthinessDocuments');

    this.translateService
      .get([
        generalKey,
        summaryKey,
        workPackagesKey,
        defectsKey,
        flightsKey,
        postponementKey,
        upcomingEventsKey,
        awDocumentsKey
      ])
      .subscribe((results) => {
        const generalLabel = !!results ? results[generalKey] : 'General';
        const summaryLabel = !!results ? results[summaryKey] : 'Summary';
        const workPackagesLabel = !!results ? results[workPackagesKey] : 'Work Packages';
        const defectsLabel = !!results ? results[defectsKey] : 'Defects';
        const flightsLabel = !!results ? results[flightsKey] : 'Flights';
        const postponementLabel = !!results ? results[postponementKey] : 'Postponement';
        const upcomingEventsLabel = !!results ? results[upcomingEventsKey] : 'Upcoming Events';
        const awDocumentsLabel = !!results ? results[awDocumentsKey] : 'Airworthiness Documents';

        this.toc = [
          {
            id: 'generalAnchor',
            anchor: this.generalEltRef,
            label: generalLabel
          },
          {
            id: 'summaryAnchor',
            anchor: this.summaryEltRef,
            label: summaryLabel
          },
          {
            id: 'workPackagesAnchor',
            anchor: this.workPackagesEltRef,
            label: workPackagesLabel
          },
          {
            id: 'defectsAnchor',
            anchor: this.defectsEltRef,
            label: defectsLabel
          },
          {
            id: 'flightsAnchor',
            anchor: this.flightsEltRef,
            label: flightsLabel
          },
          {
            id: 'postponementAnchor',
            anchor: this.postponementEltRef,
            label: postponementLabel
          },
          {
            id: 'upcomingEventsAnchor',
            anchor: this.upcomingEventsEltRef,
            label: upcomingEventsLabel
          },
          {
            id: 'awDocumentsAnchor',
            anchor: this.awDocumentsEltRef,
            label: awDocumentsLabel
          }
        ];
        super.selectPageTocEntry(AssetReviewFormComponent.GENERAL_ANCHOR_ID);
      });
  }

  private initializeOkNokWarning(): void {
    const ok = `${this.getComponentName()}.ok`;
    const nok = `${this.getComponentName()}.nok`;
    const warning = `${this.getComponentName()}.warning`;

    this.translateService.get([ok, nok, warning]).subscribe((results) => {
      this.okString = results[ok];
      this.nokString = results[nok];
      this.warningString = results[warning];
    });
  }

  public init(): void {
    this.assetStructure = [];
    this.assetStructureSrc = [];
    this.acrsEventCodeList = [];
    this.selectedFilterAlert = FilterAlert.All;
    this.topAssetTypeList = '';
    this.topEquipmentCodeList = [];
    this.topFamilyVariantList = '';
    this.topWarehouse = undefined;
    this.simulationCriteria = undefined;
    this.assetAirworthiness = undefined;
    this.airworthinessTreeTable = [];
    this.airworthinessMap = new Map<string, AirworthinessRow>();
    this.potentialUnitSelected = BireUnitMeasureConstants.HOUR;
    this.workPackageTable1 = [];
    this.globalAlertListLoading = false;
    this.workPackageTableForDisplay = [];
    this.selectedWorkPackages = [];
    this.postponementTable = [];
    this.upcomingEventsTable = [];
    this.airworthinessDocumentsTable = [];
    this.airworthinessDocumentsTable = [];
    this.airworthinessDocumentsTableBak = [];
    this.remainingTable = [];
    this.remainingTableCols = [];
    this.remainingTableCols2 = [];
    this.assetList = [];
    this.selectedAdAsset = undefined;
    this.selectedUtlAsset = undefined;
    this.adFiltersVisible = false;
    this.utlFiltersVisible = false;
  }

  private initFlightsTableDataSource(): void {
    this.flightsTableDataSource = new TableDataSource<FlightsDTO>({
      allowMultiSelect: true,
      columns: [
        { field: 'control', translateKey: this.getTranslateKey('control'), width: '8%' },
        { field: 'chronoNumber', translateKey: this.getTranslateKey('chronoNumber'), width: '11%' },
        { field: 'missionCode', translateKey: this.getTranslateKey('missionCode'), width: '11%' },
        { field: 'missionType', translateKey: this.getTranslateKey('missionType'), width: '12%' },
        { field: 'startDateText', translateKey: this.getTranslateKey('startDateText'), width: '12%' },
        { field: 'endDateText', translateKey: this.getTranslateKey('endDateText'), width: '12%' },
        { field: 'duration', translateKey: this.getTranslateKey('duration'), width: '11%' },
        { field: 'cycleNumber', translateKey: this.getTranslateKey('cycleNumber'), width: '11%' },
        { field: 'statusStateText', translateKey: this.getTranslateKey('statusStateText'), width: '12%' }
      ],
      data: []
    });
  }

  private setWorkPackageTableCols(): void {
    this.workPackageTableCols = [
      { field: 'acrs', alignment: 'left', width: '8%' },
      { field: 'logbookUpdate', alignment: 'left', width: '8%' },
      { field: 'appliedConfiguration', alignment: 'left', width: '8%' },
      { field: 'number', alignment: 'left', width: '10%' },
      { field: 'name', alignment: 'left', width: '12%' },
      { field: 'startDate', alignment: 'left', width: '15%' },
      { field: 'endDate', alignment: 'left', width: '15%' },
      { field: 'status', alignment: 'left', width: '9%' },
      { field: 'acrsEventCode', alignment: 'left', width: '11%' }
    ];
  }

  public setTableCols(): void {
    this.setWorkPackageTableCols();

    this.initFlightsTableDataSource();

    this.postponementTableCols = [
      { field: 'control', alignment: 'left', width: '8%' },
      { field: 'workOrderCode', alignment: 'left' },
      { field: 'workOrderOrigin', alignment: 'left' },
      { field: 'workOrderType', alignment: 'left', width: '5%' },
      { field: 'workOrderStatus', alignment: 'left' },
      { field: 'workOrderDescription', alignment: 'left', width: '16%' },
      { field: 'postponementEventCode', alignment: 'left', width: '12%' },
      { field: 'postponementDateText', alignment: 'left' },
      { field: 'postponementStatus', alignment: 'left' },
      { field: 'postponementDeadLineText', alignment: 'left' }
    ];

    this.upcomingEventsTableCols = [
      { field: 'control', alignment: 'left', width: '8%' },
      { field: 'designation', alignment: 'left', width: '22%' },
      { field: 'code', alignment: 'left', width: '18%' },
      { field: 'typeString', alignment: 'left', width: '6%' },
      { field: 'eventDescription', alignment: 'left' },
      { field: 'remainingTime', alignment: 'left' },
      { field: 'remainingEquivalentPotential', alignment: 'left' }
    ];

    this.airworthinessDocumentsTableCols = [
      { field: 'control', alignment: 'left', width: '8%' }, // color coding for ok, nok, warning
      { field: 'asset', alignment: 'left', width: '18%' },
      { field: 'id', alignment: 'left' }, // id
      { field: 'description', alignment: 'left' },
      { field: 'effectiveDate', alignment: 'left' },
      { field: 'limitComplianceDate', alignment: 'left' },
      { field: 'firstTime', alignment: 'left' }, // one time
      { field: 'periodicity', alignment: 'left' },
      { field: 'nextApplication', alignment: 'left' },
      { field: 'remainingApplication', alignment: 'left' }
    ];

    this.remainingTableCols = [
      { field: 'missionDepartureLocation', alignment: 'left' },
      { field: 'missionArrivalLocation', alignment: 'left' },
      { field: 'pilot', alignment: 'left' },
      { field: 'copilot', alignment: 'left' }
    ];
    this.remainingTableCols2 = [
      { field: 'ifrDuration', alignment: 'left' },
      { field: 'fuelUsed', alignment: 'left' },
      { field: 'engineStartDateText', alignment: 'left' },
      { field: 'engineStopDateText', alignment: 'left' }
    ];
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_ASSET_REVIEW_FORM;
  }

  public get isAssetAircraft(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY
    );
  }

  public get isAssetEngine(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
    );
  }

  public get isAssetEquipment(): boolean {
    return !!this.asset && !this.isAssetAircraft && !this.isAssetEngine;
  }

  public openConfigurationControlScreen(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(this.scope)
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public toggleWorkPackageExpand(row: WorkPackageDTO): void {
    row._expand = !row._expand;
  }

  public toggleFlightExpand(event: { selectedData: FlightsDTO }): void {
    this.remainingTable = [event.selectedData];
  }

  public togglePostponementExpand(row: ReportPostponementElementDTO): void {
    row._expand = !row._expand;
  }

  public toggleAirworthinessDocumentsExpand(row: ADSBModRowDTO): void {
    row._expand = !row._expand;
  }

  public enableACRSbutton(): boolean {
    let response = true;
    this.selectedWorkPackages.forEach((wp) => {
      response = wp.acrsEventCode === null || wp.acrsEventCode === undefined ? response && true : response && false;
    });

    return response;
  }

  public enableACRSIfWPClosed(): boolean {
    let response = true;

    this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).subscribe((results) => {
      if (!!results) {
        const statusList = SelectItemUtils.fromLabelValues(results);

        statusList.forEach((status) => {
          if (status.value === AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE) {
            this.selectedWorkPackages.forEach((wp) => {
              response = response && wp.status === status.label;
            });
          }
        });
      }
    });

    return response;
  }

  public refreshWorkPackage(): void {
    this.selectedWorkPackages = [];
    this.workPackageTable1 = [];
    this.workPackageTableSummary = [];
    this.workPackageTableForDisplay = [];
    this.initWorkPackageSummaryCount();
    this.initWorkPackageSummary();
    this.remainingTable = [];
    this.isWorkPackageLoading = true;
    this.assetReviewFormService.getWorkPackageList(this.scope.equipmentCodeList[0]).subscribe((results) => {
      this.workPackageTable1 = results;
      this.setWorkPackageTables();
    });
  }

  public refreshFlightTable(): void {
    this.flightsTable = [];
    this.flightsTableDataSource.setData([]);
    this.flightTableSummary = [];
    this.initFlightsSummaryCount();
    this.initFlightSummary();
    this.flightsTableDataSource.isLoading = true;
    this.assetReviewFormService.getAssetFlightList(this.scope.equipmentCodeList[0]).subscribe((results) => {
      this.flightsTable = results;
      this.setFlightsTable();
    });
  }

  private refreshPostponementTable(): void {
    this.postponementTable = [];
    this.postponementTableSummary = [];
    this.initPostponementSummaryCount();
    this.initPostponementSummary();
    this.assetReviewFormService.getPostponedWorkOrderList(this.scope.equipmentCodeList[0]).subscribe((results) => {
      this.postponementTable = results;
      this.setPostponementTable();
    });
  }

  private refreshUpcomingEventsTable(): void {
    this.isEquivalentPotentialLoading = true;
    this.selectedUtlAsset = undefined;
    this.upcomingEventsTableSummary = [];
    this.initUpcomingEventsSummaryCount();
    this.initUpcomingEventsSummary();
    const input: AssetReviewInput = {
      equipmentCode: this.scope.equipmentCodeList[0],
      potentialUnit: this.potentialUnitSelected
    };
    this.assetReviewFormService.getAssetUpcomingEventsPotentialUnit(input).subscribe((results) => {
      this.sortUpcomingEventsTableData(results);
      this.upcomingEventsTable = results;
      this.setUpcomingEventsTable();
      this.upcomingEventsTableBak = [...this.upcomingEventsTable];
      this.createUtlAssetList([...this.upcomingEventsTableBak]);
      this.isEquivalentPotentialLoading = false;
    });
  }

  private refreshAirworthinessDocumentsTable(): void {
    this.isAirworthinessDocumentsTableLoading = true;
    this.selectedAdAsset = undefined;
    this.airworthinessDocumentsTable = [];
    this.airworthinessDocumentsTableBak = [];
    this.airworthinessDocumentsTableSummary = [];
    this.initAirworthinessDocumentsSummaryCount();
    this.initAirworthinessDocumentsSummary();
    this.assetReviewFormService.getAssetAirworthinessDocuments(this.scope.equipmentCodeList[0]).subscribe((results) => {
      this.sortAdTableData(results);
      this.airworthinessDocumentsTable = results;
      this.airworthinessDocumentsTableBak = [...this.airworthinessDocumentsTable];
      this.createAssetList([...results]);
      this.setAirworthinessDocumentsTable();
    });
  }

  private updateUpcomingEventsTable(potentialUnit: string): void {
    this.potentialUnitSelected = potentialUnit;
    this.reload();
    this.refreshUpcomingEventsTable();
  }

  public createAcrsEvent(): void {
    const inputs: CreateAcrsInputEvent[] = [];
    const selectedIndexes: number[] = [];
    this.selectedWorkPackages.forEach((wp) => {
      const index = this.workPackageTableForDisplay.findIndex((pack) => pack.wpId === wp.wpId);
      if (index !== -1) {
        selectedIndexes.push(index);
        const input: CreateAcrsInputEvent = {
          wpId: this.workPackageTableForDisplay[index].wpId,
          equipmentCode: this.scope.equipmentCodeList[0],
          number: this.workPackageTableForDisplay[index].number,
          equipmentFunction: !!this.asset ? this.asset.equipmentFunction : undefined
        };
        inputs.push(input);
      }
    });

    this.assetReviewFormService.createAcrsEvent(inputs).subscribe((eventCode: string) => {
      if (!StringUtils.isNullOrEmpty(eventCode)) {
        this.selectedWorkPackages = [];
        const event: BidoNotificationOutputDTO = {
          notificationCode: eventCode
        };
        this.openEventScreen(event, ComponentOpenMode.Read);
        this.refreshWorkPackage();
      }
    });
  }

  public openWorkPackage(row: WorkPackageDTO) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize({ wpId: row.wpId })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvent(row: WorkPackageDTO) {
    const event: BidoNotificationOutputDTO = {
      notificationCode: row.acrsEventCode
    };
    this.openEventScreen(event, ComponentOpenMode.Read);
  }

  private openEventScreen(objectId: BidoNotificationOutputDTO | undefined, openMode: ComponentOpenMode): void {
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

  public updateConfiguration(): void {
    this.selectedWorkPackages.forEach((workPackage) => {
      if (workPackage.wpId) {
        this.assetReviewFormService.findBidmProject(workPackage.wpId.toString()).subscribe((workPackageObj) => {
          if (workPackageObj.assetCode && workPackageObj.projectId) {
            const objectId: AppliedConfigurationManagementInput = {
              equipmentCodeList: [workPackageObj.assetCode],
              workPackage: workPackageObj.projectId
            };

            const data: PageComponentData = {
              id: this.tabService.generateId(),
              openMode: ComponentOpenMode.Read,
              componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
              objectId: this.serializationService.serialize(objectId)
            };
            const labelKey = 'transaction.' + data.componentId;

            this.tabService.open(this.tabService.create(data, labelKey, true));
          }
        });
      }
    });
  }

  public updateLogbook(): void {
    this.selectedWorkPackages.forEach((wp) => {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_UPDATE_LOGBOOK_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize({
          wpId: wp.wpId,
          assetCode: this.scope.equipmentCodeList[0],
          warningCount: this.logbookWarningCount
        })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public openLinkedEvent(): void {
    // todo
  }

  public showValidateFlightButton(): boolean {
    const response = this.flightsTableDataSource.dataSelection[0].flightValidationVisibility ? true : false;

    return response;
  }

  public validateFlight(data: FlightsDTO[]): void {
    let flight: AssetFlightTableDTO[] = [];
    flight = this.flightsTable.filter((fl) => fl.chronoNumber === data[0].chronoNumber);
    if (!!flight[0]) {
      this.flightValidation(flight[0].bidoEquipmentDTO, ComponentOpenMode.Read);
    }
  }

  public flightValidation(objectId: BidoMissionEquipmentDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.FlightOperationsValidationComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'FlightOperationsValidationComponent',
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openFlight(row: FlightsDTO): void {
    const criteria: FindAllBidoMissionEquipmentByCriteriaInput = {
      hrModuleActivated: this.sessionService.hrModuleActivated,
      missionInstanceCode: this.getSearchMissionInstanceCode(row.chronoNumber),
      onlyNotAffectedFlights: false
    };
    this.assetReviewFormService.findAllBidoMissionEquipmentByCriteria(criteria).subscribe((results) => {
      const missionEquipment: BidoMissionEquipmentLWO = results.list[0];
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLI_FLIGHT_FORM,
        openMode: ComponentOpenMode.Read
      };
      if (!!missionEquipment) {
        if (!!missionEquipment.equipmentCode && !!missionEquipment.missionCode && !!missionEquipment.occurrence) {
          const missionEquipmentId: FlightInputData = {
            equipmentCode: missionEquipment.equipmentCode,
            missionCode: missionEquipment.missionCode,
            occurrence: missionEquipment.occurrence,
            chronoNumber: missionEquipment.chronoNumber
          };
          data.objectId = this.serializationService.serialize(missionEquipmentId);
        }
      }
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  private getSearchMissionInstanceCode(chronoNumber?: string): string | undefined {
    return StringUtils.isNullOrEmpty(chronoNumber) ? undefined : `%${chronoNumber}`;
  }

  public openMission(row: FlightsDTO): void {
    const object: BidoMissionDTO = {
      missionCode: row.missionCode
    };
    const labelKey = 'transaction.MissionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'MissionFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openJobCard(): void {
    // todo
  }

  public consultWorkOrderOrigin(row: ReportPostponementElementDTO): void {
    if (!!row.workOrderOrigin) {
      const bidmWorkOrderDTO = row.bidmWorkOrderDTO;
      const assetWorkOrderOriginInput: AssetWorkOrderOriginInput = {
        woType: bidmWorkOrderDTO.woType,
        woSource: bidmWorkOrderDTO.woSource,
        evolutionType: row.evolutionType,
        familyVariantCode: !!this.scope.familyVariantList ? this.scope.familyVariantList[0] : undefined
      };
      this.assetReviewFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe((result) => {
        if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK === bidmWorkOrderDTO.woType) {
          if (!!result.bireTaskDTOId) {
            // open task form
            const bireTaskDTO: BireTaskDTO = result.bireTaskDTOId as BireTaskDTO;
            this.openTask(bireTaskDTO);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION === bidmWorkOrderDTO.woType) {
          if (BidoEvolutionConstants.CODE_EVOLUTION === row.evolutionType) {
            if (!!result.bireEvolutionDTOId) {
              // open evolution form
              const bireEvolutionDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireEvolutionDTOId
              };
              this.openEvolution(bireEvolutionDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_AD === row.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Airworthiness Directive form
              const bireSBDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.openAD(bireSBDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_SB === row.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Service Bulletin form
              const bireSbDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.openSB(bireSbDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_MODIFICATION === row.evolutionType) {
            if (!!result.bireModificationDTOId) {
              // open modification form
              const bireModificationDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireModificationDTOId
              };
              this.openModification(bireModificationDTOId);
            }
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === bidmWorkOrderDTO.woType) {
          if (!!result.bidoNotificationDTOId && !!result.notNotificationCode) {
            // open event form
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE === bidmWorkOrderDTO.woType) {
          if (!!result.bidoEquipmentDTO) {
            if (AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY === result.bidoEquipmentDTO.equipmentFunction) {
              // open aircraft
              this.goToAircraft(result.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
            } else if (
              AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY === result.bidoEquipmentDTO.equipmentFunction
            ) {
              // open engine
              this.goToEngine(result.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
            } else {
              // open equipment
              this.goToEquipment(result.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
            }
          }
        }
      });
    }
  }

  private openTask(bireTaskDTO: BireTaskDTO): void {
    const labelKey = 'transaction.TaskFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'TaskFormComponent',
      objectId: this.serializationService.serialize(bireTaskDTO),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEventCode(): void {
    // todo
  }

  public openEquipmentDesignation(row: UpcomingEventDTO): void {
    switch (row.bidoEquipmentDTO.equipmentFunction) {
      case AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY:
        this.goToAircraft(row.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
        break;
      case AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY:
        this.goToEngine(row.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
        break;
      default:
        this.goToEquipment(row.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
        break;
    }
  }

  private goToAircraft(aircraftCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
      openMode
    };
    if (!!aircraftCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: aircraftCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEngine(engineCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EngineFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EngineFormComponent',
      openMode
    };
    if (!!engineCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: engineCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEquipment(equipmentCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!equipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEventDetailCode(row: UpcomingEventDTO): void {
    if (row.bireTaskDTOId !== null) {
      this.openTask(row.bireTaskDTOId as BireTaskDTO);
    } else {
      this.openEquipmentDesignation(row);
    }
  }

  public reloadAssetReview(): void {
    this.reload();
    this.refreshWorkPackage();
    this.refreshFlightTable();
    this.refreshUpcomingEventsTable();
    this.refreshAirworthinessDocumentsTable();
    this.refreshPostponementTable();
    this.loadAssetStructure();
    if (this.refreshButton) {
      this.refreshButton();
    }
  }

  public openID(row: ADSBModRowDTO): void {
    switch (row.adSbModType) {
      case 'AD':
        this.openAD(row);
        break;
      case 'SB':
        this.openSB(row);
        break;
      case 'EVOL':
        this.openEvolution(row);
        break;
      case 'MOD':
        this.openModification(row);
        break;
      default:
        break;
    }
  }

  public updateDefectSummary(defectCounts: DefectCountDTO) {
    this.defectCounts = defectCounts;
    this.loadSummaryData();
  }

  private openAD(row: ADSBModRowDTO): void {
    const bireSBDTOId: BireSbDTOId = row.adSbModDTOId as BireSbDTOId;
    const labelKey = 'transaction.AirworthinessDirectiveFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AirworthinessDirectiveFormComponent',
      objectId: this.serializationService.serialize(bireSBDTOId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openSB(row: ADSBModRowDTO): void {
    const bireSBDTOId: BireSbDTOId = row.adSbModDTOId as BireSbDTOId;
    const labelKey = 'transaction.SbadFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'SbadFormComponent',
      objectId: this.serializationService.serialize(bireSBDTOId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEvolution(row: ADSBModRowDTO): void {
    const bireEvolutionDTOId: BireEvolutionDTOId = row.adSbModDTOId as BireEvolutionDTOId;
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(bireEvolutionDTOId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openModification(row: ADSBModRowDTO): void {
    const bireModificationDTOId: BireModificationDTOId = row.adSbModDTOId as BireModificationDTOId;
    const labelKey = 'transaction.ModificationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MODIFICATION_FORM,
      objectId: bireModificationDTOId ? this.serializationService.serialize(bireModificationDTOId) : undefined,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // tslint:disable-next-line:no-any
  public navigateToSelectedSectionFromSummary(anchorId: string, elementRef: ElementRef, event: any): void {
    super.selectPageTocEntry(anchorId);
    super.scrollToAnchorAndStopPropagation(elementRef, event);
  }

  public navigateToRowTabIndex(rowData: AcrsStatusRow): void {
    if (rowData.tabIndex !== undefined) {
      this.tabIndex = rowData.tabIndex;
    }
  }

  private loadAsset(): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode: this.topEquipmentCodeList[0]
    };
    this.assetReviewFormService.getEquipment(input).subscribe((result) => {
      this.asset = result;
      this.initSummaryTable();
      this.initWorkPackageSummary();
      this.setComponentContextForAsset();
    });
  }

  private setNavigationLinkList(): void {
    const airworthinessStatusKey = this.getTranslateKey('airworthinessStatus');
    const appliedConfigManagementKey = this.getTranslateKey('appliedConfigurationControl');
    const assetMaintenancePlanKey = this.getTranslateKey('assetMaintenancePlan');
    const maintenancePlanningKey = this.getTranslateKey('maintenancePlanning');
    this.translateService
      .get([airworthinessStatusKey, appliedConfigManagementKey, assetMaintenancePlanKey, maintenancePlanningKey])
      .subscribe((results: string[]) => {
        const airworthinessStatusLabel = results ? results[airworthinessStatusKey] : 'Airworthiness Status';
        const appliedConfigurationControlLabel = results
          ? results[appliedConfigManagementKey]
          : 'Applied Configuration Control';
        const assetMaintenancePlanLabel = results ? results[assetMaintenancePlanKey] : 'Asset Maintenance Plan';
        const maintenancePlanningLabel = results ? results[maintenancePlanningKey] : 'Asset Review';

        this.navigationLinkList = [
          {
            label: airworthinessStatusLabel,
            command: () => {
              this.openAirworthinessStatus(this.scope);
            }
          },
          {
            label: appliedConfigurationControlLabel,
            command: () => {
              this.openAppliedConfigurationControl();
            }
          },
          {
            label: assetMaintenancePlanLabel,
            command: () => {
              this.openAssetMaintenancePlan();
            }
          },
          {
            label: maintenancePlanningLabel,
            command: () => {
              this.openMaintenancePlanning();
            }
          }
        ];
      });
  }

  private openAppliedConfigurationControl(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: this.scope.equipmentCodeList
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAssetMaintenancePlan(): void {
    const objectId: BidoEquipmentDTOId = {
      equipmentCode: this.scope.equipmentCodeList[0] as string
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: 'AssetMaintenancePlanComponent',
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openMaintenancePlanning() {
    const objectId: ScheduleMaintenanceFormComponentInput = {
      warehouse: this.scope.warehouse as string,
      equipmentCode: this.scope.equipmentCodeList[0] as string,
      familyVariantCode:
        !!this.scope.familyVariantList && this.scope.familyVariantList.length > 0
          ? (this.scope.familyVariantList[0] as string)
          : undefined,
      function:
        !!this.scope.functionList && this.scope.functionList.length > 0
          ? (this.scope.functionList[0] as string)
          : undefined
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

  private setPotentialUnitList(): void {
    const daysKey = this.getTranslateKey('days');
    const cyclesKey = this.getTranslateKey('cycles');
    const hoursKey = this.getTranslateKey('hours');
    this.translateService.get([daysKey, cyclesKey, hoursKey]).subscribe((results) => {
      const daysLabel = results ? results[daysKey] : 'Days';
      const cyclesLabel = results ? results[cyclesKey] : 'Cycles';
      const hoursLabel = results ? results[hoursKey] : 'Hours';

      this.potentialUnitList = [
        {
          label: hoursLabel,
          command: () => {
            this.updateUpcomingEventsTable(BireUnitMeasureConstants.HOUR);
          }
        },
        {
          label: cyclesLabel,
          command: () => {
            this.updateUpcomingEventsTable(BireUnitMeasureConstants.CYCLE);
          }
        },
        {
          label: daysLabel,
          command: () => {
            this.updateUpcomingEventsTable(BireUnitMeasureConstants.DAY);
          }
        }
      ];
    });
  }

  private openAirworthinessStatus(objectId: AirworthinessControlFormComponentInput): void {
    const componentId: string = ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM;

    const data: PageComponentData = {
      componentId,
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadAssetReviewTables(): void {
    this.isSummaryTableLoading = true;
    this.isWorkPackageLoading = true;
    this.flightsTableDataSource.isLoading = true;
    this.isPostponementTableLoading = true;
    this.isUpcomingEventsTableLoading = true;
    this.isAirworthinessDocumentsTableLoading = true;

    const input: AssetReviewInput = {
      equipmentCode: this.scope.equipmentCodeList[0],
      potentialUnit: BireUnitMeasureConstants.HOUR
    };

    // Apply forkjoin on Work Package and Defect APIs
    this.assetReviewFormService.getAssetReviewTabsData(input).subscribe((results) => {
      this.workPackageTable1 = results.assetWorkPackageList || [];
      this.flightsTable = results.assetFlightList || [];
      this.postponementTable = results.assetPostponedWorkOrderList || [];
      // upcoming tasks and LLP
      this.sortUpcomingEventsTableData(results.assetUpcomingEventList);
      this.upcomingEventsTable = results.assetUpcomingEventList || [];

      // Airwothiness documents
      this.sortAdTableData(results.assetAirworthinessDocumentList);
      this.airworthinessDocumentsTable = results.assetAirworthinessDocumentList || [];
      this.airworthinessDocumentsTableBak = results.assetAirworthinessDocumentList || [];
      this.createAssetList([...this.airworthinessDocumentsTableBak]);

      this.initEventTableData();

      // Setting tables
      this.setWorkPackageTables();

      this.setFlightsTable();

      this.setPostponementTable();

      this.setUpcomingEventsTable();
      this.upcomingEventsTableBak = [...this.upcomingEventsTable] || [];
      this.createUtlAssetList([...this.upcomingEventsTableBak]);

      this.setAirworthinessDocumentsTable();

      // Final method call
      this.loadSummaryData();

      this.isSummaryTableLoading = false;
    });
  }

  private initEventTableData(): void {
    const eventTableCols: TableColumn[] = [
      { field: 'notificationCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'reportingPeriodStartDate', alignment: 'left', filterMode: TableColumnFilterMode.Input, isDate: true },
      { field: 'notificationDescription', alignment: 'left', filterMode: TableColumnFilterMode.Input }
    ];

    this.eventTableData = {
      componentId: 'DialogAssetReviewEvent',
      tableCols: eventTableCols,
      tableRows: this.assetReviewFormService.findBidoNotificationList(this.acrsEventCodeList),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private setWorkPackageTables(): void {
    // Bind work packag table
    if (this.workPackageTable1.length > 0) {
      this.bindWorkPackageTable();

      // ACRS Work Package
      this.acrsWorkPackageOkCount = this.workPackageTable1.filter(
        (wp) => wp.checkResultIcon === ControlConfigConstants.ICON_GREEN
      ).length;
      this.acrsWorkPackageNokCount = this.workPackageTable1.filter(
        (wp) => wp.checkResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.acrsWorkPackageWarningCount = this.workPackageTable1.filter(
        (wp) => wp.checkResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      // Logbook Work Package
      this.logbookOkCount = this.workPackageTable1.filter(
        (wp) => wp.logbookCheckResultIcon === ControlConfigConstants.ICON_GREEN
      ).length;
      this.logbookNokCount = this.workPackageTable1.filter(
        (wp) => wp.logbookCheckResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.logbookWarningCount = this.workPackageTable1.filter(
        (wp) => wp.logbookCheckResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      // Asset breakdown Work Package
      this.breakdownOkCount = this.workPackageTable1.filter(
        (wp) => wp.configurationCheckResultIcon === ControlConfigConstants.ICON_GREEN
      ).length;
      this.breakdownNokCount = this.workPackageTable1.filter(
        (wp) => wp.configurationCheckResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.breakdownWarningCount = this.workPackageTable1.filter(
        (wp) => wp.configurationCheckResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      this.workPackageTableSummary[0].ok = this.acrsWorkPackageOkCount;
      this.workPackageTableSummary[0].nok = this.acrsWorkPackageNokCount;
      this.workPackageTableSummary[0].warning = this.acrsWorkPackageWarningCount;

      this.workPackageTableSummary[1].ok = this.logbookOkCount;
      this.workPackageTableSummary[1].nok = this.logbookNokCount;
      this.workPackageTableSummary[1].warning = this.logbookWarningCount;

      this.workPackageTableSummary[2].ok = this.breakdownOkCount;
      this.workPackageTableSummary[2].nok = this.breakdownNokCount;
      this.workPackageTableSummary[2].warning = this.breakdownWarningCount;

      this.loadSummaryForWorkPackage();
    } else {
      this.isWorkPackageLoading = false;
    }
  }

  private bindWorkPackageTable(): void {
    this.workPackageTable1.forEach((wp) => {
      const workPackage: WorkPackageDTO = {};
      workPackage.wpId = wp.wpId;
      workPackage.number = wp.number;
      workPackage.name = wp.name;
      workPackage.startDate = wp.startDate;
      workPackage.endDate = wp.endDate;
      workPackage.dueDate = wp.dueDate;
      workPackage.status = wp.status;
      workPackage.mroCenter = wp.mroCenter;
      workPackage.customer = wp.customer;
      workPackage.assignedTo = wp.assignedTo;
      workPackage.closedBy = wp.closedBy;
      workPackage.acrsEventCode = wp.acrsEventCode;
      workPackage.checkResultTooltip = wp.checkResultTooltip;
      workPackage.logbookCheckResultTooltip = wp.logbookCheckResultTooltip;
      workPackage.configurationCheckResultTooltip = wp.configurationCheckResultTooltip;
      workPackage.acrs =
        wp.checkResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : wp.checkResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : wp.checkResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : '';
      workPackage.logbookUpdate =
        wp.logbookCheckResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : wp.logbookCheckResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : wp.logbookCheckResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : '';
      workPackage.appliedConfiguration =
        wp.configurationCheckResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : wp.configurationCheckResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : wp.configurationCheckResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : '';
      workPackage.checkResultIcon = wp.checkResultIcon;
      workPackage.logbookCheckResultIcon = wp.logbookCheckResultIcon;
      workPackage.configurationCheckResultIcon = wp.configurationCheckResultIcon;
      workPackage._obj = wp;
      this.createAcrsEventList(wp.acrsEventCode);
      this.workPackageTableForDisplay.push(workPackage);

      if (wp.acrsEventCode) {
        const notificationInput: BidoNotificationDTOId = {
          notificationCode: wp.acrsEventCode
        };
        this.assetReviewFormService.findBidoNotification(notificationInput).subscribe((notification) => {
          workPackage.acrsValidatedBy = notification ? notification.statusUser : undefined;
        });
      }
    });
    this.isWorkPackageLoading = false;
  }

  private setFlightsTable(): void {
    if (this.flightsTable.length > 0) {
      this.bindFlightsTable();

      this.flightOkCount = this.flightsTable.filter(
        (fl) => fl.checkResultIcon === ControlConfigConstants.ICON_GREEN
      ).length;
      this.flightNokCount = this.flightsTable.filter(
        (fl) => fl.checkResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.flightWarningCount = this.flightsTable.filter(
        (fl) => fl.checkResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      this.flightTableSummary[0].ok = this.flightOkCount;
      this.flightTableSummary[0].nok = this.flightNokCount;
      this.flightTableSummary[0].warning = this.flightWarningCount;

      this.loadSummaryForFlights();
    } else {
      this.flightsTableDataSource.setData([]);
      this.flightsTableDataSource.isLoading = false;
    }
  }

  private bindFlightsTable(): void {
    const flightsForDisplay: FlightsDTO[] = this.flightsTable.map((fl) => {
      const flight: FlightsDTO = {};
      flight.rowId = Math.random();
      flight.chronoNumber = fl.chronoNumber;
      flight.missionCode = fl.missionCode;
      flight.missionType = fl.missionType;
      flight.startDateText = this.dateService.timestampWithHourMinSecToString(fl.startDateText);
      flight.endDateText = this.dateService.timestampWithHourMinSecToString(fl.endDateText);
      flight.duration = fl.duration;
      flight.cycleNumber = fl.cycleNumber;
      flight.statusStateText = fl.statusStateText;
      flight.control =
        fl.checkResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : fl.checkResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : fl.checkResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : '';
      flight.missionDepartureLocation = fl.missionDepartureLocation;
      flight.missionArrivalLocation = fl.missionArrivalLocation;
      flight.pilot = fl.pilot;
      flight.copilot = fl.copilot;
      flight.ifrDuration = fl.ifrDuration;
      if (fl.fuelUsed !== null && fl.fuelUsed !== undefined) {
        flight.fuelUsed = fl.fuelUsed.toString();
      }
      flight.engineStartDateText = this.dateService.timestampWithHourMinSecToString(fl.engineStartDateText);
      flight.engineStopDateText = this.dateService.timestampWithHourMinSecToString(fl.engineStopDateText);
      flight.flightValidationVisibility = fl.flightValidationVisibility;
      flight._obj = fl;

      return flight;
    });

    this.flightsTableDataSource.setData(flightsForDisplay);
    this.flightsTableDataSource.addContentFilterToColumn('missionCode');
    this.flightsTableDataSource.addContentFilterToColumn('missionType');
    this.flightsTableDataSource.addContentFilterToColumn('statusStateText');

    this.flightsTableDataSource.isLoading = false;
  }

  private setPostponementTable(): void {
    if (this.postponementTable.length > 0) {
      this.bindPostponementTable();
      this.postponementOkCount = this.postponementTable.filter(
        (postponement) => postponement.checkResultIcon === ControlConfigConstants.ICON_GREEN
      ).length;
      this.postponementNokCount = this.postponementTable.filter(
        (postponement) => postponement.checkResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.postponementWarningCount = this.postponementTable.filter(
        (postponement) => postponement.checkResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      this.postponementTableSummary[0].ok = this.postponementOkCount;
      this.postponementTableSummary[0].nok = this.postponementNokCount;
      this.postponementTableSummary[0].warning = this.postponementWarningCount;

      this.loadSummaryForPostponement();
    } else {
      this.isPostponementTableLoading = false;
    }
  }

  private bindPostponementTable(): void {
    this.postponementTable.forEach((p) => {
      p.rowId = Math.random();
      p.control =
        p.checkResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : p.checkResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : p.checkResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : '';
      if (!!p.postponementDateText) {
        const date = new Date(p.postponementDateText);
        p.postponementDateText = this.dateService.dateToString(date);
      }
      if (!!p.postponementDeadLineText) {
        const date = new Date(p.postponementDeadLineText);
        p.postponementDeadLineText = this.dateService.dateToString(date);
      }
    });
    this.isPostponementTableLoading = false;
  }

  private setUpcomingEventsTable(): void {
    if (this.upcomingEventsTable.length > 0) {
      this.bindUpcomingEventsTable();

      this.upcomingEventsOkCount = this.upcomingEventsTable.filter(
        (event) => event.checkResultIcon === ControlConfigConstants.ICON_GREEN || event.checkResultIcon === null
      ).length;
      this.upcomingEventsNokCount = this.upcomingEventsTable.filter(
        (event) => event.checkResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.upcomingEventsWarningCount = this.upcomingEventsTable.filter(
        (event) => event.checkResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      this.upcomingEventsTableSummary[0].ok = this.upcomingEventsOkCount;
      this.upcomingEventsTableSummary[0].nok = this.upcomingEventsNokCount;
      this.upcomingEventsTableSummary[0].warning = this.upcomingEventsWarningCount;

      this.loadSummaryForUpcomingEvents();
    } else {
      this.isUpcomingEventsTableLoading = false;
      this.sortUpcomingEventDTORowOnRemainingPotential();
    }
  }

  private bindUpcomingEventsTable(): void {
    this.upcomingEventsTable.forEach((event) => {
      event.rowId = Math.random();
      event.control =
        event.checkResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : event.checkResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : event.checkResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : this.okString;

      event.typeString = this.convertTypeToString(event.type);
    });
    this.isUpcomingEventsTableLoading = false;
    this.sortUpcomingEventDTORowOnRemainingPotential();
  }

  private convertTypeToString(type?: number): string {
    switch (type) {
      case 1:
        return 'AD';
      case 2:
        return 'AIRCRAFT';
      // tslint:disable-next-line: no-magic-numbers
      case 3:
        return 'DEFECT';
      // tslint:disable-next-line: no-magic-numbers
      case 4:
        return 'GROUP_CODE';
      // tslint:disable-next-line: no-magic-numbers
      case 5:
        return 'ENGINE';
      // tslint:disable-next-line: no-magic-numbers
      case 6:
        return 'EQUIPMENT';
      // tslint:disable-next-line: no-magic-numbers
      case 7:
        return 'LLP';
      // tslint:disable-next-line: no-magic-numbers
      case 8:
        return 'SB';
      // tslint:disable-next-line: no-magic-numbers
      case 9:
        return 'TASK';
      // tslint:disable-next-line: no-magic-numbers
      case 10:
        return 'VISIT';
      default:
        return '';
    }
  }

  private setAirworthinessDocumentsTable(): void {
    if (this.airworthinessDocumentsTable.length > 0) {
      this.bindAirworthinessDocumentsTable();

      this.airworthinessDocumentsOkCount = this.airworthinessDocumentsTable.filter(
        (doc) => doc.checkResultIcon === ControlConfigConstants.ICON_GREEN
      ).length;
      this.airworthinessDocumentsNokCount = this.airworthinessDocumentsTable.filter(
        (doc) => doc.checkResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.airworthinessDocumentsWarningCount = this.airworthinessDocumentsTable.filter(
        (doc) => doc.checkResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      this.airworthinessDocumentsTableSummary[0].ok = this.airworthinessDocumentsOkCount;
      this.airworthinessDocumentsTableSummary[0].nok = this.airworthinessDocumentsNokCount;
      this.airworthinessDocumentsTableSummary[0].warning = this.airworthinessDocumentsWarningCount;
      this.loadSummaryforAD();
    } else {
      this.isAirworthinessDocumentsTableLoading = false;
    }
  }

  private bindAirworthinessDocumentsTable(): void {
    this.airworthinessDocumentsTable.forEach((doc) => {
      doc.id = doc.number;
      doc.rowId = Math.random();
      doc.control =
        doc.checkResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : doc.checkResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : doc.checkResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : '';
      if (!!doc.effectiveDate) {
        const effectiveDate = new Date(doc.effectiveDate);
        doc.effectiveDate = this.dateService.dateToString(effectiveDate);
      }
      if (!!doc.limitComplianceDate) {
        const limitComplianceDate = new Date(doc.limitComplianceDate);
        doc.limitComplianceDate = this.dateService.dateToString(limitComplianceDate);
      }
      if (!!doc.lastApplicationDate) {
        const lastApplicationDate = new Date(doc.lastApplicationDate);
        doc.lastApplicationDate = this.dateService.dateToString(lastApplicationDate);
      }
    });
    this.isAirworthinessDocumentsTableLoading = false;
  }

  private loadAssetStructure(): void {
    const input: ControlConfigurationInput = {
      checkConfiguration: true,
      checkFl: true,
      checkLogbook: true,
      checkMel: true,
      checkPotential: true,
      checkReferential: true,
      checkStructure: true,
      equipmentCode: this.scope.equipmentCodeList[0],
      projectId: undefined,
      withAllCounters: true,
      withFunctionalLocations: true,
      withMelFlag: true
    };
    this.assetReviewFormService.controlConfiguration(input).subscribe((result) => {
      if (result) {
        this.assetStructureSrc = [this.createAssetStructureTreeNode(result)];

        this.assetStructure = _cloneDeep(this.assetStructureSrc);

        this.updateSummaryTable();
      }
    });
  }

  private createAssetStructureTreeNode(asset: ControlConfigurationOutput): TreeNode {
    asset.checkGlobalResult = this.calculateCheckGlobalResultForAssetStructureNode(asset);

    const node: TreeNode = {
      data: asset,
      expanded: false,
      children: ListUtils.orEmpty(asset.children).map((childAsset) => this.createAssetStructureTreeNode(childAsset))
    };

    return node;
  }

  private updateSummaryTable(): void {
    this.initConfigSummaryTable();
    this.assetStructure.forEach((asset) => this.updateSummaryTableWithAssetStructureTreeNode(asset));
    this.updateSummaryTableRowGlobal();
  }

  private initConfigSummaryTable(): void {
    this.summaryTable = [
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: '',
        nok: 0,
        ok: 0,
        warning: 0
      }
    ];
  }

  private calculateCheckGlobalResultForAssetStructureNode(asset: ControlConfigurationOutput): string {
    const checkList = [
      asset.checkCoreResult,
      asset.checkConfigurationResult,
      asset.checkStructureResult,
      asset.checkPotentialResult,
      asset.checkReferentialResult,
      asset.checkMelResult,
      asset.checkLogbookResult,
      asset.checkFlResult
    ].filter((check) => ObjectUtils.isDefined(check));

    return checkList.some((check) => check === ControlConfigConstants.ICON_RED)
      ? ControlConfigConstants.ICON_RED
      : checkList.some((check) => check === ControlConfigConstants.ICON_YELLOW)
      ? ControlConfigConstants.ICON_YELLOW
      : ControlConfigConstants.ICON_GREEN;
  }

  private updateSummaryTableWithAssetStructureTreeNode(node: TreeNode): void {
    const asset = node.data as ControlConfigurationOutput;

    // Configuration check
    this.updateSummaryTableRow(
      AssetReviewFormComponent.SUMMARY_TABLE_CONFIGURATION_INDEX,
      asset.checkConfigurationResult
    );

    // Core check
    this.updateSummaryTableRow(AssetReviewFormComponent.SUMMARY_TABLE_CORE_INDEX, asset.checkCoreResult);

    // FL check
    this.updateSummaryTableRow(AssetReviewFormComponent.SUMMARY_TABLE_FL_INDEX, asset.checkFlResult);

    // Logbook check
    this.updateSummaryTableRow(AssetReviewFormComponent.SUMMARY_TABLE_LOGBOOK_INDEX, asset.checkLogbookResult);

    // MEL check
    this.updateSummaryTableRow(AssetReviewFormComponent.SUMMARY_TABLE_MEL_INDEX, asset.checkMelResult);

    // Potential check
    this.updateSummaryTableRow(AssetReviewFormComponent.SUMMARY_TABLE_POTENTIAL_INDEX, asset.checkPotentialResult);

    // Referential check
    this.updateSummaryTableRow(AssetReviewFormComponent.SUMMARY_TABLE_REFERENTIAL_INDEX, asset.checkReferentialResult);

    // Structure check
    this.updateSummaryTableRow(AssetReviewFormComponent.SUMMARY_TABLE_ROW_CONFIGURATION, asset.checkStructureResult);

    // Children
    if (node.children) {
      node.children.forEach((childAsset) => this.updateSummaryTableWithAssetStructureTreeNode(childAsset));
    }
  }

  private updateSummaryTableRowGlobal(): void {
    const index = AssetReviewFormComponent.SUMMARY_TABLE_ROW_CONFIGURATION;

    const nok = this.summaryTable
      .slice(1)
      .map((row) => row.nok)
      .reduce((a, b) => a + b, 0);

    this.acrsStatusTable[index].nok = nok;
    this.configurationNokCount = nok;

    const ok = this.summaryTable
      .slice(1)
      .map((row) => row.ok)
      .reduce((a, b) => a + b, 0);

    this.acrsStatusTable[index].ok = ok;
    this.configurationOkCount = ok;

    const warning = this.summaryTable
      .slice(1)
      .map((row) => row.warning)
      .reduce((a, b) => a + b, 0);

    this.acrsStatusTable[index].warning = warning;
    this.configurationWarningCount = warning;

    this.loadReviewStatusSummaryData();
  }

  private updateSummaryTableRow(rowIndex: number, checkResult: string | undefined): void {
    this.summaryTable[rowIndex].nok += checkResult === ControlConfigConstants.ICON_RED ? 1 : 0;
    this.summaryTable[rowIndex].ok += checkResult === ControlConfigConstants.ICON_GREEN ? 1 : 0;
    this.summaryTable[rowIndex].warning += checkResult === ControlConfigConstants.ICON_YELLOW ? 1 : 0;
  }

  private loadSummaryData(): void {
    // Workpackage
    this.loadSummaryForWorkPackage();

    // Defects
    this.loadSummaryForDefects();

    // Flights
    this.loadSummaryForFlights();

    // Postponement
    this.loadSummaryForPostponement();

    // Upcoming events
    this.loadSummaryForUpcomingEvents();

    // Airworthiness Documents
    this.loadSummaryforAD();

    // loadGloabSummaryData
    this.loadReviewStatusSummaryData();
  }

  private loadReviewStatusSummaryData(): void {
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_HEADER].ok =
      this.acrsWorkPackageOkCount +
      this.logbookOkCount +
      this.breakdownOkCount +
      this.configurationOkCount +
      this.defectCounts.ok +
      this.flightOkCount +
      this.postponementOkCount +
      this.upcomingEventsOkCount +
      this.airworthinessDocumentsOkCount; // add oks for all the fields to be added in future
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_HEADER].nok =
      this.acrsWorkPackageNokCount +
      this.logbookNokCount +
      this.breakdownNokCount +
      this.configurationNokCount +
      this.defectCounts.nok +
      this.flightNokCount +
      this.postponementNokCount +
      this.upcomingEventsNokCount +
      this.airworthinessDocumentsNokCount; // add noks for all the fields to be added in future
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_HEADER].warning =
      this.acrsWorkPackageWarningCount +
      this.logbookWarningCount +
      this.breakdownWarningCount +
      this.configurationWarningCount +
      this.defectCounts.warning +
      this.flightWarningCount +
      this.postponementWarningCount +
      this.upcomingEventsWarningCount +
      this.airworthinessDocumentsWarningCount; // add warnings for all the fields to be added in future
  }

  private loadSummaryForWorkPackage(): void {
    // Work package
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_ACRS].ok = this.acrsWorkPackageOkCount;
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_ACRS].nok = this.acrsWorkPackageNokCount;
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_ACRS].warning = this.acrsWorkPackageWarningCount;

    // Logbook
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_LOGBOOK].ok = this.logbookOkCount;
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_LOGBOOK].nok = this.logbookNokCount;
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_LOGBOOK].warning = this.logbookWarningCount;

    // Asset breakdown
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_ASSET_BREAKDOWN].ok = this.breakdownOkCount;
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_ASSET_BREAKDOWN].nok = this.breakdownNokCount;
    this.acrsStatusTable[
      AssetReviewFormComponent.SUMMARY_TABLE_ROW_ASSET_BREAKDOWN
    ].warning = this.breakdownWarningCount;
  }

  private loadSummaryForDefects(): void {
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_DEFECTS].ok = this.defectCounts.ok;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_DEFECTS].nok = this.defectCounts.nok;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_DEFECTS].warning = this.defectCounts.warning;
  }

  private loadSummaryForFlights(): void {
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_FLIGHTS].ok = this.flightOkCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_FLIGHTS].nok = this.flightNokCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_FLIGHTS].warning = this.flightWarningCount;
  }

  private loadSummaryForPostponement(): void {
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_POSTPONED].ok = this.postponementOkCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_POSTPONED].nok = this.postponementNokCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_POSTPONED].warning = this.postponementWarningCount;
  }

  private loadSummaryForUpcomingEvents(): void {
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_UPCOMING].ok = this.upcomingEventsOkCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_UPCOMING].nok = this.upcomingEventsNokCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_UPCOMING].warning = this.upcomingEventsWarningCount;
  }

  private loadSummaryforAD(): void {
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[AssetReviewFormComponent.SUMMARY_TABLE_ROW_DOCUMENTS].ok = this.airworthinessDocumentsOkCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[
      AssetReviewFormComponent.SUMMARY_TABLE_ROW_DOCUMENTS
    ].nok = this.airworthinessDocumentsNokCount;
    // tslint:disable-next-line:no-magic-numbers
    this.acrsStatusTable[
      AssetReviewFormComponent.SUMMARY_TABLE_ROW_DOCUMENTS
    ].warning = this.airworthinessDocumentsWarningCount;
  }

  private createAcrsEventList(eventCode: string | undefined): void {
    if (!!eventCode) {
      const id: BidoNotificationDTOId = {
        notificationCode: eventCode
      };
      const exists = this.acrsEventCodeList.some((event) => event.notificationCode === id.notificationCode);
      if (!exists) {
        this.acrsEventCodeList.push(id);
      }
    }
  }

  private setComponentContextForAsset(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP).subscribe((result) => {
      if (this.asset) {
        let componentContext: string;

        if (this.isAssetAircraft) {
          const selectedFunction = ListUtils.orEmpty(result).find(
            (elt) => elt.value === (this.asset as BidoEquipmentDTO).equipmentFunction
          );
          const aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
          componentContext = [StringUtils.orEmpty(aircraftLabel), StringUtils.orEmpty(this.asset.registration)]
            .filter((s) => !StringUtils.isEmpty(s))
            .join(' ');
        } else {
          componentContext = [StringUtils.orEmpty(this.asset.equipmentDesignation), StringUtils.orEmpty(this.asset.sn)]
            .filter((s) => !StringUtils.isEmpty(s))
            .join(' / ');
        }

        this.displayComponentContext(componentContext, this.isCreateOpenMode);
      }
    });
  }

  private loadAirworthinessTableColumnLabelList(): void {
    const observables: Observable<string>[] = [
      this.assetReviewFormService.getCsnLabelForAirworthinessControl(),
      this.assetReviewFormService.getTsnLabelForAirworthinessControl()
    ];

    forkJoin(observables).subscribe(([cycleBireMeasureReferenceLabel, timeBireMeasureReferenceLabel]) => {
      this.airworthinessTableColCsnLabel = cycleBireMeasureReferenceLabel;
      this.airworthinessTableColTsnLabel = timeBireMeasureReferenceLabel;
    });
  }

  private reload(): void {
    this.assetAirworthiness = undefined;
    this.load();
  }

  private load(): void {
    this.globalAlertListLoading = true;

    const airworthinessTableParams: GenerateAirworthinessControlTableInput = {
      equipmentCodeList: this.topEquipmentCodeList,
      simulation: this.simulationCriteria !== undefined,
      simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
      simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
      simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
      unitEquivalent: this.potentialUnitSelected
    };
    this.assetReviewFormService.generateAirworthinessControlTable(airworthinessTableParams).subscribe((results) => {
      this.airworthinessTreeTable = ListUtils.orEmpty(results).filter(
        (elt) => elt.bidoEquipment && !StringUtils.isNullOrEmpty(elt.bidoEquipment.equipmentCode)
      );

      this.createAllAirworhtinessRow(this.airworthinessTreeTable);

      // In asset view mode, show sub assemblies
      const topEquipmentCode = this.airworthinessTreeTable[0].bidoEquipment.equipmentCode as string;
      const topEquipment = this.airworthinessMap.get(topEquipmentCode) as AirworthinessRow;

      this.assetAirworthiness = this.airworthinessMap.get(topEquipmentCode) as AirworthinessRow;

      this.computeGlobalAlertForEachTopEquipment([topEquipment]);
    });
  }

  private createAllAirworhtinessRow(list: GenerateAirworthinessControlTableOutput[]): void {
    if (list.length > 0) {
      list.forEach((elt) => {
        this.airworthinessMap.set(elt.bidoEquipment.equipmentCode as string, this.createAirworthinessRow(elt));
        this.createAllAirworhtinessRow(elt.children);
      });
    }
  }

  private createAirworthinessRow(elt: GenerateAirworthinessControlTableOutput): AirworthinessRow {
    return {
      alert: elt.globalAirworthinessStatus,
      asset: BidoEquipmentUtils.createAssetName(elt.bidoEquipment),
      csn: StringUtils.orEmpty(elt.counterCsn),
      designation: StringUtils.orEmpty(elt.assetDesignation),
      mp: StringUtils.orEmpty(elt.maintenanceProgram),
      nextWorkPackage: StringUtils.orEmpty(elt.nextWorkPackage),
      potential: StringUtils.orEmpty(elt.potential),
      status: StringUtils.orEmpty(elt.status),
      tsn: StringUtils.orEmpty(elt.counterTsn),
      hasChildren: elt.children.length > 0,
      _id: elt.bidoEquipment.equipmentCode as string,
      _obj: elt,
      _alertLoading: false,
      _alertTooltip: '',
      _expand: false,
      _potentialLoading: false
    };
  }

  private computeGlobalAlertForEachTopEquipment(topEquipmentList: AirworthinessRow[]): void {
    topEquipmentList.forEach((equipment) => {
      equipment._alertLoading = true;
    });
    // this.togglePotentialLoadingIndicator(true);

    const observables = topEquipmentList.map((equipment) => {
      const input: CheckEquipmentForAirworthinessControlInput = {
        equipmentCodeList: this.topEquipmentCodeList,
        simulation: this.simulationCriteria !== undefined,
        simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
        simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
        simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
        equipmentToCheck: equipment._obj.bidoEquipment.equipmentCode as string
      };

      return this.assetReviewFormService.checkEquipmentForAirworthinessControl(input);
    });

    merge(...observables)
      .pipe(
        finalize(() => {
          this.computePotentialForAllEquipment();
          this.globalAlertListLoading = false;
        })
      )
      .subscribe((result) => {
        const matchingEquipment = topEquipmentList.find(
          (equipment) => equipment._obj.bidoEquipment.equipmentCode === result.bidoEquipment.equipmentCode
        );

        if (!!matchingEquipment) {
          matchingEquipment._alertLoading = false;

          matchingEquipment.alert = result.globalAirworthinessStatus;
        }
      });
  }

  private computePotentialForAllEquipment(): void {
    const params: ComputePotentialForAirworthinessControlInput = {
      equipmentCodeList: this.topEquipmentCodeList,
      simulation: this.simulationCriteria !== undefined,
      simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
      simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
      simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
      unitMeasure: this.potentialUnitSelected
    };
    this.assetReviewFormService.computePotentialForAirworthinessControlInput(params).subscribe((results) => {
      const treeNodeMap = this.mapTreeNodeByEquipmentCode(results);
      treeNodeMap.forEach((_, key) => {
        const treeNode = treeNodeMap.get(key);
        const matchingElt = this.airworthinessMap.get(key) as AirworthinessRow;
        if (!!treeNode) {
          matchingElt.potential = StringUtils.orEmpty(treeNode.remainingEquivalent);
          matchingElt._obj.remainingEquivalent = treeNode.remainingEquivalent;
          matchingElt._obj.remainingEquivalentIcon = treeNode.remainingEquivalentIcon;
          matchingElt._obj.remainingEquivalentTooltip = treeNode.remainingEquivalentTooltip;

          if (matchingElt.alert === ControlConfigConstants.ICON_YELLOW) {
            const lowRemainingKey = this.getTranslateKey('lowRemaining');
            this.translateService.get(lowRemainingKey).subscribe((translatedKey) => {
              matchingElt._alertTooltip = translatedKey || 'Low remaining';
            });
          } else if (matchingElt.alert === ControlConfigConstants.ICON_RED) {
            const missingAssetInAppliedConfigurationKey = this.getTranslateKey('missingAssetInAppliedConfiguration');
            const overPotentialKey = this.getTranslateKey('overduePotential');
            const overPotentialSubassemblyKey = this.getTranslateKey('overduePotentialSubAssembly');
            this.translateService
              .get([missingAssetInAppliedConfigurationKey, overPotentialKey, overPotentialSubassemblyKey])
              .subscribe((translatedKeys) => {
                const missingAssetInAppliedConfigurationLabel = !!translatedKeys
                  ? translatedKeys[missingAssetInAppliedConfigurationKey]
                  : 'Missing asset in the applied configuration';
                const overPotentialLabel = !!translatedKeys ? translatedKeys[overPotentialKey] : 'Overdue potential';
                const overPotentialSubassemblyLabel = !!translatedKeys
                  ? translatedKeys[overPotentialSubassemblyKey]
                  : 'Overdue potential on sub-assemblies';

                let alertList: string[] = [];
                if (matchingElt.potential.startsWith('-')) {
                  alertList = [...alertList, overPotentialLabel];
                }
                const overduePotentialSubAssembly = matchingElt._obj.children.some((child) =>
                  StringUtils.orEmpty(child.remainingEquivalent).startsWith('-')
                );
                if (overduePotentialSubAssembly) {
                  alertList = [...alertList, overPotentialSubassemblyLabel];
                }
                if (treeNode.checkResultIcon === ControlConfigConstants.ICON_RED) {
                  alertList = [...alertList, missingAssetInAppliedConfigurationLabel];
                }
                matchingElt._alertTooltip = alertList.join(' & ');
              });
          }
        }
      });
    });
  }

  private initSummaryTable(): void {
    const reviewStatusDetail = `${this.getComponentName()}.reviewStatusDetail`;
    let acrsWorkPackages = `${this.getComponentName()}.acrsWorkPackages`;
    if (this.showForm1()) {
      acrsWorkPackages = `${this.getComponentName()}.form1WorkPackages`;
    }
    const logbookWorkPackages = `${this.getComponentName()}.logbookWorkPackages`;
    const assetBreakdownWorkPackages = `${this.getComponentName()}.assetBreakdownWorkPackages`;
    const configuration = `${this.getComponentName()}.configuration`;
    const defects = `${this.getComponentName()}.defects`;
    const flights = `${this.getComponentName()}.flights`;
    const postponement = `${this.getComponentName()}.postponement`;
    const upcomingEvents = `${this.getComponentName()}.upcomingEvents`;
    const airworthinessDocuments = `${this.getComponentName()}.airworthinessDocuments`;
    this.translateService
      .get([
        reviewStatusDetail,
        acrsWorkPackages,
        logbookWorkPackages,
        assetBreakdownWorkPackages,
        configuration,
        defects,
        flights,
        postponement,
        upcomingEvents,
        airworthinessDocuments
      ])
      .subscribe((results) => {
        this.acrsStatusTable = [
          {
            category: results[reviewStatusDetail],
            ok: 0,
            warning: 0,
            nok: 0,
            label: AssetReviewFormComponent.SUMMARY_TABLE_TOTAL_LABEL
          },
          {
            category: results[acrsWorkPackages],
            ok: this.acrsWorkPackageOkCount,
            warning: this.acrsWorkPackageWarningCount,
            nok: this.acrsWorkPackageNokCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_ACRS_LABEL,
            tabIndex: AssetReviewFormComponent.WORK_PACKAGE_TAB_INDEX
          },
          {
            category: results[logbookWorkPackages],
            ok: this.logbookOkCount,
            warning: this.logbookWarningCount,
            nok: this.logbookNokCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_LOGBOOK_LABEL,
            tabIndex: AssetReviewFormComponent.WORK_PACKAGE_TAB_INDEX
          },
          {
            category: results[assetBreakdownWorkPackages],
            ok: this.breakdownOkCount,
            warning: this.breakdownNokCount,
            nok: this.breakdownWarningCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_BREAKDOWN_LABEL,
            tabIndex: AssetReviewFormComponent.WORK_PACKAGE_TAB_INDEX
          },
          {
            category: results[configuration],
            ok: this.configurationOkCount,
            warning: this.configurationWarningCount,
            nok: this.configurationNokCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_CONFIGURATION_LABEL
          },
          {
            category: results[defects],
            ok: this.defectCounts.ok,
            warning: this.defectCounts.warning,
            nok: this.defectCounts.nok,
            label: AssetReviewFormComponent.SUMMARY_TABLE_DEFECTS_LABEL,
            tabIndex: AssetReviewFormComponent.DEFECT_TAB_INDEX
          },
          {
            category: results[flights],
            ok: this.flightOkCount,
            warning: this.flightWarningCount,
            nok: this.flightNokCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_FLIGHTS_LABEL,
            tabIndex: AssetReviewFormComponent.FLIGHT_TAB_INDEX
          },
          {
            category: results[postponement],
            ok: this.postponementOkCount,
            warning: this.postponementWarningCount,
            nok: this.postponementNokCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_POSTPONEMENT_LABEL,
            tabIndex: AssetReviewFormComponent.POSTPONED_WORK_ORDER_TAB_INDEX
          },
          {
            category: results[upcomingEvents],
            ok: this.upcomingEventsOkCount,
            warning: this.upcomingEventsNokCount,
            nok: this.upcomingEventsWarningCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_UPCOMING_EVENTS_LABEL,
            tabIndex: AssetReviewFormComponent.UPCOMING_TASK_LLP_TAB_INDEX
          },
          {
            category: results[airworthinessDocuments],
            ok: this.airworthinessDocumentsOkCount,
            warning: this.airworthinessDocumentsWarningCount,
            nok: this.airworthinessDocumentsNokCount,
            label: AssetReviewFormComponent.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENTS_LABEL,
            tabIndex: AssetReviewFormComponent.AIRWORTHINESS_DOCUMENTS_TAB_INDEX
          }
        ];

        // configuration summary
        this.loadAssetStructure();
      });
  }

  private initWorkPackageSummary(): void {
    let acrs = `${this.getComponentName()}.acrs`;
    if (this.showForm1()) {
      acrs = `${this.getComponentName()}.form1`;
    }
    const logbookUpdate = `${this.getComponentName()}.logbookUpdate`;
    const assetBreakdown = `${this.getComponentName()}.appliedConfiguration`;
    this.translateService.get([acrs, logbookUpdate, assetBreakdown]).subscribe((results) => {
      this.workPackageTableSummary = [
        {
          category: results[acrs],
          ok: this.acrsWorkPackageOkCount,
          warning: this.acrsWorkPackageWarningCount,
          nok: this.acrsWorkPackageNokCount
        },
        {
          category: results[logbookUpdate],
          ok: this.logbookOkCount,
          warning: this.logbookWarningCount,
          nok: this.logbookNokCount
        },
        {
          category: results[assetBreakdown],
          ok: this.breakdownOkCount,
          warning: this.breakdownNokCount,
          nok: this.breakdownWarningCount
        }
      ];
    });
  }

  private initFlightSummary(): void {
    this.flightTableSummary = [
      {
        ok: 0,
        warning: 0,
        nok: 0
      }
    ];
  }

  private initPostponementSummary(): void {
    this.postponementTableSummary = [
      {
        ok: 0,
        warning: 0,
        nok: 0
      }
    ];
  }

  private initUpcomingEventsSummary(): void {
    this.upcomingEventsTableSummary = [
      {
        ok: 0,
        warning: 0,
        nok: 0
      }
    ];
  }

  private initAirworthinessDocumentsSummary(): void {
    this.airworthinessDocumentsTableSummary = [
      {
        ok: 0,
        warning: 0,
        nok: 0
      }
    ];
  }

  private initSummaryCount(): void {
    this.initWorkPackageSummaryCount();
    this.initConfigurationSummaryCount();
    this.initFlightsSummaryCount();
    this.initDefectsSummaryCount();
    this.initPostponementSummaryCount();
    this.initUpcomingEventsSummaryCount();
    this.initAirworthinessDocumentsSummaryCount();
  }

  private initWorkPackageSummaryCount(): void {
    this.acrsWorkPackageOkCount = 0;
    this.acrsWorkPackageNokCount = 0;
    this.acrsWorkPackageWarningCount = 0;
    this.logbookOkCount = 0;
    this.logbookNokCount = 0;
    this.logbookWarningCount = 0;
    this.breakdownOkCount = 0;
    this.breakdownNokCount = 0;
    this.breakdownWarningCount = 0;
  }

  private initConfigurationSummaryCount(): void {
    this.configurationOkCount = 0;
    this.configurationNokCount = 0;
    this.configurationWarningCount = 0;
  }

  private initFlightsSummaryCount(): void {
    this.flightOkCount = 0;
    this.flightNokCount = 0;
    this.flightWarningCount = 0;
  }

  private initDefectsSummaryCount(): void {
    this.defectCounts = {
      ok: 0,
      nok: 0,
      warning: 0
    };
  }

  private initPostponementSummaryCount(): void {
    this.postponementOkCount = 0;
    this.postponementNokCount = 0;
    this.postponementWarningCount = 0;
  }

  private initUpcomingEventsSummaryCount(): void {
    this.upcomingEventsOkCount = 0;
    this.upcomingEventsNokCount = 0;
    this.upcomingEventsWarningCount = 0;
  }

  private initAirworthinessDocumentsSummaryCount(): void {
    this.airworthinessDocumentsOkCount = 0;
    this.airworthinessDocumentsNokCount = 0;
    this.airworthinessDocumentsWarningCount = 0;
  }

  private mapTreeNodeByEquipmentCode(
    list: GenerateAirworthinessControlTableOutput[]
  ): Map<string, GenerateAirworthinessControlTableOutput> {
    const map = new Map<string, GenerateAirworthinessControlTableOutput>();

    let queue = list;
    while (!ListUtils.isEmpty(queue)) {
      const first = queue.shift() as GenerateAirworthinessControlTableOutput;
      queue = [...queue, ...first.children];
      map.set(first.bidoEquipment.equipmentCode as string, first);
    }

    return map;
  }

  public openTopAsset(): void {
    const assetCode = this.scope.equipmentCodeList[0];

    if (this.isAssetAircraft) {
      this.openAircraft(assetCode);
    } else if (this.isAssetEngine) {
      this.openEngine(assetCode);
    } else {
      this.openEquipment(assetCode);
    }
  }

  private openAircraft(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEngine(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEquipment(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private registrRereshButtonObservables(): void {
    this.defectListService.refreshButton$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.refreshButton = f;
    });
  }

  public sortUpcomingEventDTORowOnRemainingPotential(): void {
    this.upcomingEventsTable.sort((data1: UpcomingEventDTO, data2: UpcomingEventDTO) => {
      return this.compareRemainingEquivalent(data1, data2);
    });
  }

  private compareRemainingEquivalent(data1: UpcomingEventDTO, data2: UpcomingEventDTO): number {
    const remainingEquivalent1 = data1.remainingEquivalentPotential;
    const remainingEquivalent2 = data2.remainingEquivalentPotential;
    const isNOK1 = data1.checkResultIcon === ControlConfigConstants.ICON_RED;
    const isNOK2 = data2.checkResultIcon === ControlConfigConstants.ICON_RED;

    return ComparatorUtils.compareByRemainingEquivalent(
      {
        equipment: data1.bidoEquipmentDTO,
        remainingEquivalent: remainingEquivalent1,
        isNOK: isNOK1
      },
      {
        equipment: data2.bidoEquipmentDTO,
        remainingEquivalent: remainingEquivalent2,
        isNOK: isNOK2
      }
    );
  }

  public customSort(event: SortEvent): void {
    if (event.field && event.field === 'remainingEquivalentPotential' && event.data) {
      event.data.sort((data1, data2) => {
        const result = this.compareRemainingEquivalent(data1, data2);

        return event.order ? event.order * result : result;
      });
    }
  }

  private createAssetList(airworthinessRows: ADSBModRowDTO[]) {
    this.assetList = [];
    airworthinessRows.forEach((element) => {
      if (!!element.asset) {
        const assetText: LabelValue<string> = {
          label: element.asset as string,
          value: element.asset as string
        };
        const exists = this.assetList.some((asset) => asset.label === assetText.label);
        if (!exists) {
          this.assetList.push(assetText);
        }
      }
    });
  }

  private createUtlAssetList(upcomingEventRows: UpcomingEventDTO[]) {
    this.utlAssetList = [];
    upcomingEventRows.forEach((row) => {
      if (!!row.designation) {
        const assetText: LabelValue<string> = {
          label: row.designation as string,
          value: row.designation as string
        };
        const exists = this.utlAssetList.some((asset) => asset.label === assetText.label);
        if (!exists) {
          this.utlAssetList.push(assetText);
        }
      }
    });
  }

  private sortAdTableData(tableData: ADSBModRowDTO[]) {
    if (!!tableData) {
      tableData.sort((n1, n2) => {
        const resultIcon1: string = n1.checkResultIcon as string;
        const resultIcon2: string = n2.checkResultIcon as string;

        return this.compareFunction(resultIcon1, resultIcon2);
      });
    }
  }

  private sortUpcomingEventsTableData(tableData: UpcomingEventDTO[]) {
    if (!!tableData) {
      tableData.sort((n1, n2) => {
        const resultIcon1 = !!n1.checkResultIcon ? (n1.checkResultIcon as string) : ControlConfigConstants.ICON_GREEN;
        const resultIcon2 = !!n2.checkResultIcon ? (n2.checkResultIcon as string) : ControlConfigConstants.ICON_GREEN;

        return this.compareFunction(resultIcon1, resultIcon2);
      });
    }
  }

  private compareFunction(resultIcon1: string, resultIcon2: string): number {
    const data1 =
      resultIcon1 === ControlConfigConstants.ICON_RED
        ? this.component.CONTROL_RED_VALUE
        : resultIcon1 === ControlConfigConstants.ICON_YELLOW
        ? this.component.CONTROL_YELLOW_VALUE
        : this.component.CONTROL_GREEN_VALUE;
    const data2 =
      resultIcon2 === ControlConfigConstants.ICON_RED
        ? this.component.CONTROL_RED_VALUE
        : resultIcon2 === ControlConfigConstants.ICON_YELLOW
        ? this.component.CONTROL_YELLOW_VALUE
        : this.component.CONTROL_GREEN_VALUE;
    if (data1 < data2) {
      return -1;
    } else if (data1 > data2) {
      return 1;
    }

    return 0;
  }

  /**********************************
   * FILTER OPERATIONS
   **********************************/
  public filterAdDocuments(): void {
    this.airworthinessDocumentsTable = this.airworthinessDocumentsTableBak.filter((ad) => {
      const asset = !!this.selectedAdAsset ? ad.asset === this.selectedAdAsset : true;
      const control = !ListUtils.isNullOrEmpty(this.selectedADFilterList)
        ? ad.checkResultIcon && this.selectedADFilterList.includes(ad.checkResultIcon)
        : true;

      return asset && control;
    });
    this.initAirworthinessDocumentsSummaryCount();
    this.initAirworthinessDocumentsSummary();
    this.setAirworthinessDocumentsTable();
    if (this.airworthinessDocumentsTable.length === 0) {
      this.loadSummaryforAD();
    }
    this.loadReviewStatusSummaryData();
  }

  public filterUpcomingTasksAndLLP(): void {
    this.upcomingEventsTable = this.upcomingEventsTableBak.filter((utl) => {
      const asset = !!this.selectedUtlAsset ? utl.designation === this.selectedUtlAsset : true;
      const checkResultIcon = !!utl.checkResultIcon ? utl.checkResultIcon : ControlConfigConstants.ICON_GREEN;
      const type = !!utl.type ? utl.type : -1;
      const control = !ListUtils.isNullOrEmpty(this.selectedUtlFilterList)
        ? this.selectedUtlFilterList.includes(checkResultIcon)
        : true;
      const eventType = !ListUtils.isNullOrEmpty(this.selectedEventTypeFilterList)
        ? this.selectedEventTypeFilterList.includes(type)
        : true;

      return asset && control && eventType;
    });
    this.upcomingEventsTableSummary = [];
    this.initUpcomingEventsSummaryCount();
    this.initUpcomingEventsSummary();
    this.setUpcomingEventsTable();
    if (this.upcomingEventsTable.length === 0) {
      this.loadSummaryForUpcomingEvents();
    }
    this.loadReviewStatusSummaryData();
  }

  public resetADFilter(): void {
    this.setDefaultAdFilterList();
    this.selectedAdAsset = undefined;
  }

  public resetUtlFilter(): void {
    this.setDefaultUtlFilterList();
    this.setDefaultEventTypeFilterList();
    this.selectedUtlAsset = undefined;
  }

  private setFilterControlList(): void {
    const OK = ControlConfigConstants.ICON_GREEN;
    const NOK = ControlConfigConstants.ICON_RED;
    const WARNING = ControlConfigConstants.ICON_YELLOW;
    const alertNokKey = this.getTranslateKey('alertNok');
    const alertOkKey = this.getTranslateKey('alertOk');
    const alertWarningKey = this.getTranslateKey('alertWarning');
    this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe((results) => {
      const alertNokLabel: string = results ? results[alertNokKey] : 'NOK';
      const alertOkLabel: string = results ? results[alertOkKey] : 'OK';
      const alertWarningLabel: string = results ? results[alertWarningKey] : 'WARNING';
      this.adFilterList = [
        {
          label: alertOkLabel,
          value: OK
        },
        {
          label: alertNokLabel,
          value: NOK
        },
        {
          label: alertWarningLabel,
          value: WARNING
        }
      ];
      this.utlFilterList = [
        {
          label: alertOkLabel,
          value: OK
        },
        {
          label: alertNokLabel,
          value: NOK
        },
        {
          label: alertWarningLabel,
          value: WARNING
        }
      ];
    });
    this.setDefaultAdFilterList();
    this.setDefaultUtlFilterList();
  }

  private setDefaultAdFilterList(): void {
    this.selectedADFilterList = [
      ControlConfigConstants.ICON_GREEN,
      ControlConfigConstants.ICON_YELLOW,
      ControlConfigConstants.ICON_RED
    ];
  }

  private setDefaultUtlFilterList(): void {
    this.selectedUtlFilterList = [
      ControlConfigConstants.ICON_GREEN,
      ControlConfigConstants.ICON_YELLOW,
      ControlConfigConstants.ICON_RED
    ];
  }

  private setFiterEventTypeList(): void {
    const evenTypeAd = this.getTranslateKey('adType');
    const eventTypeSB = this.getTranslateKey('sbType');
    const eventTypeDefect = this.getTranslateKey('defectType');
    const eventTypeLLP = this.getTranslateKey('llpType');
    const eventTypeOMP = this.getTranslateKey('ompType');
    const eventTypeTASK = this.getTranslateKey('taskType');
    this.translateService
      .get([evenTypeAd, eventTypeSB, eventTypeDefect, eventTypeLLP, eventTypeOMP, eventTypeTASK])
      .subscribe((results) => {
        const adLabel: string = results ? results[evenTypeAd] : this.component.LABEL_AD;
        const sbLabel: string = results ? results[eventTypeSB] : this.component.LABEL_SB;
        const defectLabel: string = results ? results[eventTypeDefect] : this.component.LABEL_DEFECT;
        const llpLabel: string = results ? results[eventTypeLLP] : this.component.LABEL_LLP;
        const ompLabel: string = results ? results[eventTypeOMP] : this.component.LABEL_OMP;
        const taskLabel: string = results ? results[eventTypeTASK] : this.component.LABEL_TASK;
        this.eventTypeFilterList = [
          {
            label: adLabel,
            value: MaintenancePlanTableTypeConstants.AD
          },
          {
            label: sbLabel,
            value: MaintenancePlanTableTypeConstants.SB
          },
          {
            label: defectLabel,
            value: MaintenancePlanTableTypeConstants.DEFECT
          },
          {
            label: llpLabel,
            value: MaintenancePlanTableTypeConstants.LLP
          },
          {
            label: ompLabel,
            value: 0
          },
          {
            label: taskLabel,
            value: MaintenancePlanTableTypeConstants.TASK
          }
        ];
      });
    this.setDefaultEventTypeFilterList();
  }

  private setDefaultEventTypeFilterList(): void {
    this.selectedEventTypeFilterList = [
      MaintenancePlanTableTypeConstants.AD,
      MaintenancePlanTableTypeConstants.SB,
      MaintenancePlanTableTypeConstants.DEFECT,
      MaintenancePlanTableTypeConstants.LLP,
      0, // OMP
      MaintenancePlanTableTypeConstants.TASK
    ];
  }

  public showForm1(): boolean {
    return (
      !!this.asset &&
      (this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY ||
        this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_MAJOR_EQUIPMENT_KEY)
    );
  }
}
