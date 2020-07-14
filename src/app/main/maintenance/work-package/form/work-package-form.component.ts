import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MenuItem, SelectItem, TreeNode } from 'primeng/api';
import { UIChart } from 'primeng/chart';
import { FileUpload } from 'primeng/fileupload';
import { OverlayPanel } from 'primeng/overlaypanel';
import { forkJoin } from 'rxjs';
import { concatMap, finalize } from 'rxjs/operators';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogSearchCustomerService } from '../../../../shared/components/dialog-search-customer/dialog-search-customer.service';
import { WPType } from '../../../../shared/components/dialog-work-package/dialog-work-package.component';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import {
  GenericPropertyConstants,
  GenericPropertyConstants as gpc
} from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PageService } from '../../../../shared/services/page.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ControlStockInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/control-stock-input.interface';
import { ControlConfigurationInput } from '../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { CreateWorkbenchInspectionDTO } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/create-workbench-inspection-dto.interface';
import { GetQuantityInStockBySiteOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-quantity-in-stock-by-site-output.interface';
import { ControlConfigurationOutput } from '../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidoEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-lwo.interface';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmDocumentDTOId } from '../../../../shared/types/api-types/bidm-document-dto-id.interface';
import { BidmDocumentDTO } from '../../../../shared/types/api-types/bidm-document-dto.interface';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoCusCustomerDTO } from '../../../../shared/types/api-types/bido-cus-customer-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidtPurchaseRequestDTO } from '../../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { BidtSalesRequestDTO } from '../../../../shared/types/api-types/bidt-sales-request-dto.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { GoodsMovementInput } from '../../../../shared/types/component-input-types/logistics/goods-movement-input.interface';
import { AppliedConfigurationManagementInput } from '../../../../shared/types/component-input-types/maintenance/applied-configuration-management.interface';
import { WorkDataDefect } from '../../../../shared/types/component-input-types/maintenance/work-data-defect.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidmDocumentUtils, DocumentRow } from '../../../../shared/utils/bidm-document-utils';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { DomUtils } from '../../../../shared/utils/dom-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { SettingsUtils } from '../../../../shared/utils/settings-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { OverlayService } from '../../../overlay/overlay.service';
import { AirworthinessControlFormComponentInput } from '../../airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { ProcurementRequestsTableService } from '../../procurement-request/procurement-requests-table.service';
import { WorkPackageService } from '../work-package.service';

import { DialogWorkOrderEditService } from './popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { WorkOrderScheduleInfo } from './popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component';
import { WorkPackageStatusComponent } from './status/work-package-status.component';
import { WorkOrderRow, WorkPackageFormService } from './work-package-form.service';

interface ChartTypeDataset {
  label?: string;
  data: number[];
  backgroundColor: string | string[];
  hoverBackgroundColor?: string[];
}

interface ChartType {
  labels: string[];
  datasets: ChartTypeDataset[];
}
interface ChartDataset {
  statusList: string[];
  value: number;
  color: string;
  label: string;
}

interface Chart {
  chartVisible: boolean;
  chartType: string;
  chartData: ChartType;
  chartOptions?: unknown;
  chartDataset?: ChartDataset[];
}
interface OutgoinConfiguration {
  ok?: number;
  warning?: number;
  nok?: number;
}

interface StockControlConf {
  ok?: number;
  warning?: number;
  nok?: number;
}

interface WorkOrderEditionObject {
  display: boolean;
  workOrderSelected: BidmWorkOrderDTOId | undefined;
  workPackage: BidmProjectDTO;
  workOrderList: BidmWorkOrderDTO[];
}

interface UpdateSchedulingObject {
  display: boolean;
  selectedWorkOrders: TreeNode[];
}

interface CustomPageComponentData extends PageComponentData {
  isFromWorkPackage?: boolean;
}

@Component({
  selector: 'aw-work-package-form',
  styleUrls: ['./work-package-form.component.scss'],
  templateUrl: './work-package-form.component.html'
})
export class WorkPackageFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly ONE_DAY_IN_MS = 86400000;
  private static readonly DUE_DATE_WARNING_DAYS = 7;
  private static readonly DELETE_WORK_PACKAGE = 'delete';

  public static readonly STATUS_ANCHOR_ID: string = 'statusAnchor';
  public static readonly MAIN_ANCHOR_ID: string = 'mainAnchor';
  public static readonly MATERIAL_AVAILABILITY_ANCHOR_ID: string = 'materialAvailabilityAnchor';
  public static readonly TIMELINE_AND_COSTS_ANCHOR_ID: string = 'timelineAndCostsAnchor';
  public static readonly OUTGOING_CONFIGURAION_ANCHOR_ID: string = 'outgoingConfigurationAnchor';
  public static readonly PROGRESS_ANCHOR_ID: string = 'workOrderProgressAnchor';
  public static readonly GENERAL_ANCHOR_ID: string = 'generalAnchor';
  public static readonly DEFECTS_ANCHOR_ID: string = 'defectsAnchor';
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentAnchor';

  @ViewChild(WorkPackageFormComponent.STATUS_ANCHOR_ID)
  public statusAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.MAIN_ANCHOR_ID)
  public mainAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.MATERIAL_AVAILABILITY_ANCHOR_ID)
  public materialAvailabilityAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.OUTGOING_CONFIGURAION_ANCHOR_ID)
  public outgoingConfigurationAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.PROGRESS_ANCHOR_ID)
  public workOrderProgressAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.TIMELINE_AND_COSTS_ANCHOR_ID)
  public timelineAndCostsAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.GENERAL_ANCHOR_ID)
  public generalAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.DEFECTS_ANCHOR_ID)
  public defectsAnchor: ElementRef;
  @ViewChild(WorkPackageFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentAnchor: ElementRef;

  @ViewChild('workloadChartElement')
  public workloadChartElement: UIChart;
  @ViewChild('durationChartElement')
  public durationChartElement: UIChart;
  @ViewChild('costsChartElement')
  public costsChartElement: UIChart;

  public readonly component: typeof WorkPackageFormComponent;
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;

  public componentOpenMode: ComponentOpenMode;
  public workDataDefect: WorkDataDefect;
  public workPackage: BidmProjectDTO = {};
  public workPackageObject: BidmProjectDTO;
  public dueDateDelta: string;
  public projectTargetedTat: string;
  public dueDateDeltaColor: string;
  public workOrderList: BidmWorkOrderDTO[];
  public workOrderTable: TreeNode[];
  public currency: string;

  public typeList: SelectItem[];
  public mroCenterList: SelectItem[];
  public operationList: SelectItem[];
  public workShopList: SelectItem[];
  public userList: SelectItem[];
  public returnReasonList: SelectItem[];
  public statusList: SelectItem[];
  public workflowStatus: SelectItem[];
  public receptionPriorityList: SelectItem[];
  public receptionInventoryList: SelectItem[];
  public statusActionList: MenuItem[] = [];
  public workOrderCount: number = 0;
  public outgoinConfiguration: OutgoinConfiguration = { ok: undefined, warning: undefined, nok: undefined };
  public stockControlConf: StockControlConf = { ok: undefined, warning: undefined, nok: undefined };

  public searchObject: BidoCustomerDTO;
  public allCustomers: SearchResultsDTO<BidoCustomerDTO>;

  public showEquipmentDialog: Boolean = false;
  public showCustomerDialog: boolean = false;
  public showSaleRequestDialog: boolean = false;
  public showPurchaseRequestDialog: boolean = false;
  public isLoadingWorkOrderTable: boolean = false;
  public isLoadingOutgoingConf: boolean = false;
  public isLoadingStockControlConf: boolean = false;
  public chartData: ChartType;
  public chartDataset: ChartDataset[];
  public chartLegend: ChartDataset[];
  public chartOptions: unknown;
  public chartType: string;
  public chartVisible: boolean = false;
  public workloadChart: Chart;
  public durationChart: Chart;
  public costsChart: Chart;

  public toc: PageTocEntry[];
  public wpReportToShowVisible: boolean;

  public acrsEventCodeList: BidoNotificationDTOId[] = [];
  public bidoEquipment: BidoEquipmentDTO;
  public familyCode: string | undefined;
  public variantCode: string | undefined;
  public customerFilter: BidoCustomerDTO;

  public projectId: string;
  private readonly days: string = `${this.translateService.instant(this.getTranslateKey('days'))}`;

  public showSaveSpinner: boolean;

  public isCostSettingEnabled: boolean;
  public isFinalStep: boolean;
  public showCloseButton: boolean;
  public showReopenButton: boolean;
  public canUpdateCloseWp: boolean;
  public canManageCloseWp: boolean;
  public isWorkPackageHasAssetName: boolean;
  // public tatDelta: string;

  // Documents tab
  public documentTableDataSource: TableDataSource<DocumentRow>;
  public documentTableColList: TableColumn[];
  public documentTypeList: SelectItem[];
  public selectedDocumentList: DocumentRow[];

  private documentAddedList: BidmDocumentDTO[];
  private documentList: BidmDocumentDTO[];
  private documentRemovedList: BidmDocumentDTO[];
  private documentUpdatedList: BidmDocumentDTO[];

  // Document dialog
  public currentDocument: BidmDocumentDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showDocumentDialog: boolean;

  public showImportTaskPopup: boolean;
  public showLastUpdatePopup: boolean;
  public importTaskReportMessage: string;
  public showImportTaskReport: boolean;

  // work order edition dialog
  public displayWorkOrderEdit: boolean = false;
  public workOrderSelected: BidmWorkOrderDTOId | undefined;
  public workOrderListWOEdition: BidmWorkOrderDTO[];
  public workPackageWOEdition: BidmProjectDTO;

  // update scheduling edit
  public displayWorkOrderSchedulingEdit: boolean = false;
  public selectedWorkOrders: TreeNode[];

  public procurementRequests: ProcurementRequestAndIndicatorsOutputDTO[];

  // Component Cockpit Tab
  public isBsdeProjectExist: boolean;
  public bsdeProject: BsdeProjectDTO;
  private cockpitComponentData: CustomPageComponentData;
  public bsdeProjectLoading: boolean;
  public isComponentCockpitModuleInstalled: boolean;
  public showCockpitTab: boolean = true;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    public sessionService: SessionService,
    private readonly wpFormService: WorkPackageFormService,
    private readonly wpService: WorkPackageService,
    private readonly pageService: PageService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly _overlayService: OverlayService,
    private readonly dialogSearchCustomerService: DialogSearchCustomerService,
    private readonly procurementRequestsTableService: ProcurementRequestsTableService,
    private readonly dialogWorkOrderEditService: DialogWorkOrderEditService
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
    this.awPropertiesConstants = AWPropertiesConstants;
    this.component = WorkPackageFormComponent;
    super.registerPageTocEntryObservable();
    this.initDocumentTableDataSource();

    this.documentTableDataSource.dataSelection = [];
    this.documentAddedList = [];
    this.documentList = [];
    this.documentRemovedList = [];
    this.documentUpdatedList = [];
    this.documentTypeList = [];
    this.loadDocumentTypeList();

    this.workOrderTable = [];
    this.canUpdateCloseWp = false;
    this.showImportTaskPopup = false;
    this.showImportTaskReport = false;
    this.initCostSettingDisplay();
    this.initChart();

    this.userWorkflowSubject.subscribe((userWorkflow) => {
      this.updateWorkflowStatusList();
    });
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_WORK_PACKAGE_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.workPackage = {};
    this.workPackageObject = {};

    this.initToc();
    this.loadLists();

    this.wpService.loadUserList().subscribe((users) => (this.userList = users));

    this.updateOpenMode(this.componentData.openMode);
    this.componentOpenMode = this.componentData.openMode;
    if (this.componentData.objectId) {
      const objectId = this.serializationService.deserialize(this.componentData.objectId);
      this.projectId = objectId.wpId;
      this.initDocumentTable();
      this.loadWorkPackage();

      // Check if Component Cockpit module is enable
      this.setComponentCockpitTabVisibility();
    } else {
      this.loadUserWorkflow(undefined);
    }

    this.canUpdateCloseWp = this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_AIRM_WP_CLOSING,
      BidoFunctionTypeConstants.DEGREE_UPDATE
    );
    this.canManageCloseWp = this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_AIRM_WP_CLOSING,
      BidoFunctionTypeConstants.DEGREE_MANAGE
    );

    this.searchCustomers();
  }

  public refresh(): void {
    this.initDocumentTable();
    this.loadWorkPackage();
    this.loadBsdeProject();
  }

  private initToc() {
    if (!this.isCreateOpenMode) {
      this.toc = [
        {
          id: this.component.STATUS_ANCHOR_ID,
          anchor: this.statusAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('statusandTimelines'))}`
        },
        {
          id: this.component.MAIN_ANCHOR_ID,
          anchor: this.mainAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('mainInformation'))}`
        },
        {
          id: this.component.MATERIAL_AVAILABILITY_ANCHOR_ID,
          anchor: this.materialAvailabilityAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('materialAvailability'))}`
        },
        {
          id: this.component.OUTGOING_CONFIGURAION_ANCHOR_ID,
          anchor: this.outgoingConfigurationAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('outgoingConfiguration'))}`
        },
        {
          id: this.component.PROGRESS_ANCHOR_ID,
          anchor: this.workOrderProgressAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('workInProgress'))}`
        },
        {
          id: this.component.TIMELINE_AND_COSTS_ANCHOR_ID,
          anchor: this.timelineAndCostsAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('timelineAndCosts'))}`
        },
        {
          id: this.component.GENERAL_ANCHOR_ID,
          anchor: this.generalAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('general'))}`
        },
        {
          id: this.component.DEFECTS_ANCHOR_ID,
          anchor: this.defectsAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('defects'))}`
        },
        {
          id: this.component.DOCUMENTS_ANCHOR_ID,
          anchor: this.documentAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('document'))}`
        }
      ];
    } else {
      this.toc = [
        {
          id: this.component.STATUS_ANCHOR_ID,
          anchor: this.statusAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('statusandTimelines'))}`
        },
        {
          id: this.component.MAIN_ANCHOR_ID,
          anchor: this.mainAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('mainInformation'))}`
        },
        {
          id: this.component.GENERAL_ANCHOR_ID,
          anchor: this.generalAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('general'))}`
        }
      ];
    }
    super.selectPageTocEntry(this.component.STATUS_ANCHOR_ID);
  }

  private loadLists() {
    const removedstatuses = [AWPropertiesConstants.AIRM_PROJECT_STATUS_LINE_MAINTENANCE];

    this.wpService.loadStatusList(removedstatuses).subscribe((res) => (this.statusList = res));
    this.wpFormService.getLocalCurrency().subscribe((res) => (this.currency = res));
    this.wpService.loadGenProps(gpc.WORK_PACKAGE_TYPE_MAP).subscribe((res) => {
      this.typeList = res;
      this.workPackage.projectType = `${WPType.ACRS}`;
    });
    this.wpService.loadGenProps(gpc.RECEPTION_PRIORITY_MAP).subscribe((res) => (this.receptionPriorityList = res));
    this.wpService.loadGenProps(gpc.RECEPTION_INVENTORY_MAP).subscribe((res) => (this.receptionInventoryList = res));

    this.wpService.loadMROCenterList().subscribe((result) => (this.mroCenterList = result));
    this.wpService.loadOperationList().subscribe((result) => (this.operationList = result));
    this.wpFormService.loadReturnReasons().subscribe((result) => (this.returnReasonList = result));

    this.workShopList = [];
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.statusList,
      this.workPackage.statusState
    );
  }

  private initChart(): void {
    this.chartLegend = [
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONED],
        value: 0,
        color: AppConstants.COLOR_GREEN,
        label: `${this.translateService.instant(this.getTranslateKey('chartPostponed'))}`
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED],
        value: 0,
        color: AppConstants.COLOR_YELLOW,
        label: `${this.translateService.instant(this.getTranslateKey('chartPostponementRequest'))}`
      }
    ];

    this.chartDataset = [
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED],
        value: 0,
        color: AppConstants.COLOR_GREY,
        label: `${this.translateService.instant(this.getTranslateKey('chartScheduled'))}`
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING],
        value: 0,
        color: AppConstants.COLOR_BLUE_LIGHT,
        label: `${this.translateService.instant(this.getTranslateKey('chartOngoing'))}`
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED],
        value: 0,
        color: AppConstants.COLOR_BLUE_LIGHT,
        label: `${this.translateService.instant(this.getTranslateKey('chartToBeConfirmed'))}`
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED],
        value: 0,
        color: AppConstants.COLOR_BLUE_DARK,
        label: `${this.translateService.instant(this.getTranslateKey('chartPerformed'))}`
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE],
        value: 0,
        color: AppConstants.COLOR_GREEN,
        label: `${this.translateService.instant(this.getTranslateKey('chartClose'))}`
      }
    ];
    this.chartType = 'bar';
    this.chartVisible = false;
    this.chartData = {
      datasets: [
        {
          data: this.chartDataset.map((cd) => cd.value),
          backgroundColor: this.chartDataset.map((cd) => cd.color),
          hoverBackgroundColor: this.chartDataset.map((cd) => cd.color)
        }
      ],
      labels: this.chartDataset.map((cd) => cd.label)
    };
    this.setChartOptions();
    this.chartVisible = true;

    this.workloadChart = this.initPlannedRealChart([
      this.initPlannedRealCharTypeDataset('workload', AppConstants.COLOR_GREEN)
    ]);

    this.durationChart = this.initPlannedRealChart([
      this.initPlannedRealCharTypeDataset('duration', AppConstants.COLOR_BLUE_LIGHT)
    ]);

    this.costsChart = this.initPlannedRealChart(
      [
        this.initPlannedRealCharTypeDataset('labourCost', AppConstants.COLOR_RED),
        this.initPlannedRealCharTypeDataset('materialCost', AppConstants.COLOR_ORANGE),
        this.initPlannedRealCharTypeDataset('subcontractCost', AppConstants.COLOR_YELLOW)
      ],
      true
    );
  }

  private initCharTypeDataset(labelKey: string, backgroundColor: string | string[], data: number[] = []) {
    return {
      label: `${this.translateService.instant(this.getTranslateKey(labelKey))}`,
      backgroundColor,
      data
    };
  }

  private initPlannedRealCharTypeDataset(labelKey: string, backgroundColor: string | string[]): ChartTypeDataset {
    return this.initCharTypeDataset(labelKey, backgroundColor, [0, 0]);
  }

  private toNumber(str: string | undefined) {
    return str ? Number(str) : 0;
  }

  private addPlannedRealChart(chart: Chart, planned: string | undefined, real: string | undefined, index: number = 0) {
    if (chart && chart.chartData && chart.chartData.datasets && chart.chartData.datasets[index]) {
      this.addPlannedRealDataSet(chart.chartData.datasets[index], this.toNumber(planned), this.toNumber(real));
    }
  }

  private addPlannedRealDataSet(dataset: ChartTypeDataset, planned: number, real: number) {
    if (dataset && dataset.data && dataset.data.length > 1) {
      dataset.data[0] += planned;
      dataset.data[1] += real;
    }
  }

  private initPlannedRealChart(datasets: ChartTypeDataset[], stacked: boolean = false): Chart {
    return {
      chartVisible: true,
      chartType: 'bar',
      chartData: {
        labels: [
          `${this.translateService.instant(this.getTranslateKey('planned'))}`,
          `${this.translateService.instant(this.getTranslateKey('real'))}`
        ],
        datasets
      },
      chartOptions: {
        legend: { display: true },
        tooltips: {
          bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
        },
        scales: {
          xAxes: [
            {
              ticks: { autoSkip: false },
              stacked
            }
          ],
          yAxes: [
            {
              ticks: { beginAtZero: true },
              stacked
            }
          ]
        }
      }
    };
  }

  private updateChart(): void {
    this.workOrderCount = 0;
    // init charts values
    this.chartDataset.map((d) => {
      d.value = 0;

      return d;
    });
    this.chartLegend.map((d) => {
      d.value = 0;

      return d;
    });

    this.calculateChart(this.workOrderTable);

    this.chartData.datasets[0].data = this.chartDataset.map((cd) => cd.value);
    this.chartData = { ...this.chartData };

    this.refreshChart(this.workloadChartElement);
    this.refreshChart(this.durationChartElement);
    this.refreshChart(this.costsChartElement);
  }

  private refreshChart(chart: UIChart): void {
    if (chart) {
      chart.refresh();
    }
  }

  private calculateChart(woList: TreeNode[] = []) {
    woList.forEach((wo) => {
      this.workOrderCount++;
      const workOrderRow: WorkOrderRow = wo.data;
      this.chartDataset.forEach((cd) => {
        if (cd.statusList.includes(workOrderRow.status)) {
          cd.value++;
        }
      });
      this.chartLegend.forEach((cd) => {
        if (cd.statusList.includes(workOrderRow.status)) {
          cd.value++;
        }
      });

      this.addPlannedRealChart(this.durationChart, workOrderRow.planDuration, workOrderRow.Duration);
      this.addPlannedRealChart(this.workloadChart, workOrderRow.planWorkload, workOrderRow.Workload);
      this.addPlannedRealChart(this.costsChart, workOrderRow.planLaborCost, workOrderRow.LaborCost, 0);
      this.addPlannedRealChart(this.costsChart, workOrderRow.planMaterialCost, workOrderRow.MaterialCost, 1);
      this.addPlannedRealChart(this.costsChart, workOrderRow.planSubcontractCost, workOrderRow.SubcontractingCost, 2);

      this.calculateChart(wo.children);
    });
  }

  private setChartOptions(): void {
    this.chartOptions = {
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              precision: 0
            }
          }
        ]
      }
    };
  }

  public loadWorkPackage() {
    if (!!this.projectId) {
      this.wpFormService.findBidmProject(this.projectId).subscribe((result) => {
        if (result === null) {
          this.messageService.showErrorMessage(this.getTranslateKey('notFound'));
        } else if (result.assetCode) {
          this.workDataDefect = {
            workPackage: result,
            equipementCode: result.assetCode
          };

          let componentContext = NumberUtils.toString(result.projectNumber);
          componentContext += StringUtils.isNullOrEmpty(result.projectName) ? '' : ` | ${result.projectName}`;
          this.displayComponentContext(componentContext, false);

          this.workPackage = result;
          this.loadUserWorkflow(this.workPackage.statusState);
          this.getWorkShops();
          this.workPackageObject = this.workPackage;
          this.procurementRequestsTableService
            .findProcReqItemsAndStockQuantityIndicators(undefined, [
              { projectId: this.workPackageObject.projectId as string }
            ])
            .subscribe((proqReq: ProcurementRequestAndIndicatorsOutputDTO[]) => {
              this.procurementRequests = proqReq;
            });
          const bidoEquipmentDTOId: BidoEquipmentDTOId = {
            equipmentCode: result.assetCode
          };
          this.wpFormService.findBidoEquipment(bidoEquipmentDTOId).subscribe((equipment) => {
            this.bidoEquipment = equipment;
            if (!!equipment && !!equipment.familyVariantCode) {
              this.familyCode = BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode);
              this.variantCode = BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(
                equipment.familyVariantCode
              );
            }
          });

          this.projectTargetedTat = StringUtils.isNullOrEmpty(result.projectTargetedTat)
            ? ''
            : `${result.projectTargetedTat} ${this.days}`;
          this.initStatusActions();
          this.loadWorkOrders();
          this.calculateDeltaDates();
          this.ctrlStock();
          this.ctrlConfiguration();

          this.isWorkPackageHasAssetName = !StringUtils.isNullOrEmpty(this.workPackage.assetName);
          this.loadBsdeProject();
        }
      });
    } else {
      this.workPackage = {};
      this.workPackageObject = {};
      this.isWorkPackageHasAssetName = !StringUtils.isNullOrEmpty(this.workPackage.assetName);
    }
  }

  private initStatusActions() {
    switch (this.workPackage.statusState) {
      case AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED:
        this.statusActionList = [
          {
            label: `${this.translateService.instant(this.getTranslateKey('scheduleWorkPackage'))}`,
            command: () => this.statusActionBtn(AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED)
          },
          {
            label: `${this.translateService.instant(this.getTranslateKey('deleteWorkPackage'))}`,
            command: () => this.statusActionBtn(WorkPackageFormComponent.DELETE_WORK_PACKAGE)
          }
        ];
        break;
      case AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED:
        this.statusActionList = [
          {
            label: `${this.translateService.instant(this.getTranslateKey('cancelScheduling'))}`,
            command: () => this.statusActionBtn(AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED)
          },
          {
            label: `${this.translateService.instant(this.getTranslateKey('releaseWorkPackage'))}`,
            command: () => this.statusActionBtn(AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED)
          }
        ];
        break;
      case AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED:
        this.statusActionList = [
          {
            label: `${this.translateService.instant(this.getTranslateKey('closeWorkPackage'))}`,
            command: () => this.statusActionBtn(AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE)
          }
        ];
        break;
      case AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED:
        this.statusActionList = [
          {
            label: `${this.translateService.instant(this.getTranslateKey('cancelRelease'))}`,
            command: () => this.statusActionBtn(AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED)
          }
        ];
        break;
      default:
        this.statusActionList = [];
        break;
    }
  }

  private loadWorkOrders() {
    this.isLoadingWorkOrderTable = true;
    this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe((woList) => {
      this.workOrderTable = [...woList];
      this.workOrderList = this.flatDeep(woList);
      this.updateChart();
      this.checkWorkPackageStatus();
      this.isLoadingWorkOrderTable = false;
      this.defineCloseState();
    });
  }

  private defineCloseState(): void {
    this.isFinalStep = false;
    this.showCloseButton = false;
    this.showReopenButton = false;
    const wp: BidmProjectDTO = this.workPackage;
    if (!wp.statusState) {
      return;
    }
    if (
      wp.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE ||
      wp.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED
    ) {
      this.isFinalStep = true;
      if (wp.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE) {
        this.showReopenButton = true;
      }
    } else {
      // check status of work orders
      if (!!this.workOrderList) {
        let allWOAreClosedOrPostponed: boolean = this.workOrderList.length > 0;
        // tslint:disable-next-line:no-any
        this.workOrderList.forEach((value: any) => {
          allWOAreClosedOrPostponed =
            allWOAreClosedOrPostponed &&
            (value.status === AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONED ||
              value.status === AWPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE);
        });
        this.isFinalStep = allWOAreClosedOrPostponed;
        this.showCloseButton = allWOAreClosedOrPostponed;
      }
    }
  }

  private flatDeep(tree: TreeNode[]): BidmWorkOrderDTO[] {
    return tree.reduce(
      (acc, val) => [...acc, ...(val ? [val.data] : []), ...(val.children ? this.flatDeep(val.children) : [])],
      []
    );
  }

  public openWorkOrders() {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDERS_FORM,
      openMode: ComponentOpenMode.Read
    };
    data.objectId = this.serializationService.serialize(this.workPackage);
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public statusActionBtn(newStatus: string) {
    if (newStatus === WorkPackageFormComponent.DELETE_WORK_PACKAGE) {
      // #TODO ABT: Delete WP not implemented yet
    } else {
      this.workPackage.statusState = newStatus;
      this.editWorkPackage();
    }
  }

  public editWorkPackage() {
    this.updateOpenMode(ComponentOpenMode.Write);
    this.componentOpenMode = ComponentOpenMode.Write;
  }

  public cancelWorkPackage() {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.componentOpenMode = ComponentOpenMode.Read;
    this.initDocumentTable();
    this.loadWorkPackage();
    this.clearErrors();
  }

  public saveWorkPackage() {
    let saved = false;

    const missingFields = this.checkMandatoryFields({
      ...this.workPackage,
      documentTableDataSource: this.documentTableDataSource.dataSrc
    });

    if (missingFields.length > 0 || !this.workPackage.projectType) {
      this.messageService.showErrorMessage('global.missingFields');
    } else if (!!this.projectId) {
      this.showSaveSpinner = true;
      this.wpFormService
        .updateBidmProject(this.workPackage)
        .pipe(
          finalize(() => {
            this.showSaveSpinner = false;
          })
        )
        .subscribe(() => {
          this.updateOpenMode(ComponentOpenMode.Read);
          this.componentOpenMode = ComponentOpenMode.Read;
          this.saveDocuments();
        });
      saved = true;
    } else {
      if (!this.workPackage.assetCode || !this.workPackage.projectStartDate) {
        this.messageService.showErrorMessage('global.missingFields');

        return;
      }
      this.workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED;
      this.showSaveSpinner = true;
      this.wpFormService
        .createBidmProject(this.workPackage)
        .pipe(
          finalize(() => {
            this.showSaveSpinner = false;
          })
        )
        .subscribe((bidmProjectId: BidmProjectDTOId) => {
          this.documentList.forEach((doc) => {
            doc.projectId = bidmProjectId.projectId;
            doc.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED;
          });
          this.documentAddedList.forEach((doc) => {
            doc.projectId = bidmProjectId.projectId;
            doc.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED;
          });

          this.projectId = bidmProjectId.projectId;
          this.componentData.objectId = this.serializationService.serialize(this.projectId);
          this.updateOpenMode(ComponentOpenMode.Read);
          this.componentOpenMode = ComponentOpenMode.Read;
          this.initToc();
          this.saveDocuments();

          this.loadWorkPackage();
        });
      saved = true;
    }

    return saved;
  }

  public openEquipmentDialog(event: MouseEvent): void {
    if (!this.isReadOpenMode && !this.isWorkPackageHasAssetName) {
      this.showEquipmentDialog = true;
    }
  }

  public openCustomerDialog(event: MouseEvent): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      const bidoCustomerDto: BidoCusCustomerDTO = { customerCode: this.workPackage.bidoCustomerCode };
      this.customerFilter = bidoCustomerDto;
      this.showCustomerDialog = true;
    }
  }

  public openSaleRequestDialog(event: MouseEvent): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      this.showSaleRequestDialog = true;
    }
  }

  public openPurchaseRequestDialog(event: MouseEvent): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      this.showPurchaseRequestDialog = true;
    }
  }

  public onSelectEquipment(equipment: BidoEquipmentLWO): void {
    this.workPackage.assetCode = equipment.equipmentCode;
    this.workPackage.assetName = this.getEquipmentRepresentation(equipment);
  }

  private getEquipmentRepresentation(equipment: BidoEquipmentLWO): string | undefined {
    let toReturn: string | undefined = '';
    const VALUES_SEPARATOR = ' | ';
    const LABEL_VALUE_SEPARATOR = ' ';
    if (equipment.equipmentFunctionCode === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
      toReturn = equipment.familyVariantCode;
      if (!!equipment.sn) {
        toReturn += VALUES_SEPARATOR + 'MSN' + LABEL_VALUE_SEPARATOR + equipment.sn;
      }
      if (!!equipment.registration) {
        toReturn += VALUES_SEPARATOR + equipment.registration;
      }
    } else if (equipment.equipmentFunctionCode === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY) {
      toReturn = equipment.familyVariantCode;
      if (!!equipment.sn) {
        toReturn += VALUES_SEPARATOR + 'ESN' + LABEL_VALUE_SEPARATOR + equipment.sn;
      }
    } else {
      if (!!equipment.pnCode) {
        toReturn += 'PN' + LABEL_VALUE_SEPARATOR + equipment.pnCode;
        if (!!equipment.sn) {
          toReturn += VALUES_SEPARATOR + 'SN' + LABEL_VALUE_SEPARATOR + equipment.sn;
        } else if (!!equipment.sn) {
          toReturn += 'SN' + LABEL_VALUE_SEPARATOR + equipment.sn;
        } else {
          toReturn += equipment.equipmentCode;
        }
      }
    }

    return toReturn;
  }

  public onSelectCustomer(equipment: BidoCustomerDTO): void {
    this.workPackage.bidoCustomerCode = equipment.customerCode;
  }

  public onSelectSaleRequest(saleRequest: BidtSalesRequestDTO): void {
    this.workPackage.salesRequestCode = saleRequest.srCode;
  }

  public setSelectedPurchaseRequest(purchaseRequest: BidtPurchaseRequestDTO): void {
    this.workPackage.purchaseRequestCode = purchaseRequest.prCode;
  }

  public calculateDeltaDates(): void {
    const refDate = this.workPackage.projectEndDate ? this.workPackage.projectEndDate : new Date();
    let status = 'ok';

    if (!this.workPackage.projectDueDate) {
      status = 'default';
    } else {
      const dueDays = Math.ceil(
        (this.workPackage.projectDueDate.valueOf() - refDate.valueOf()) / WorkPackageFormComponent.ONE_DAY_IN_MS
      );
      this.dueDateDelta = `${dueDays.toString()} ${this.days}`;
      if (refDate > this.workPackage.projectDueDate) {
        status = 'error';
      } else if (dueDays < WorkPackageFormComponent.DUE_DATE_WARNING_DAYS) {
        status = 'warning';
      }
    }
    this.dueDateDeltaColor = status + '-field';

    // TODO: Calculate TAT Delta
    // const targetedTat = this.projectTargetedTat ? Number(this.projectTargetedTat) : undefined;
    // const projectTat = 0;
    // if (targetedTat && projectTat) {
    //   const dueTat = Math.ceil(targetedTat - projectTat);
    //   this.tatDelta = `${dueTat.toString()} ${this.days}`;
    // }
  }

  public ctrlStock() {
    this.isLoadingStockControlConf = true;
    const projectIdDto: BidmProjectDTOId = {
      projectId: this.projectId
    };
    const input: ControlStockInput = {
      projectId: projectIdDto,
      mvtStatusExcluded: [
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_CLOSED_KEY
      ],
      date: moment().toDate()
    };
    this.wpFormService.controlStock(input).subscribe((stockMvtList) => {
      this.stockControlConf = { ok: 0, warning: 0, nok: 0 };
      this.checkStock(stockMvtList);
      this.isLoadingStockControlConf = false;
    });
  }

  private checkStock(stockList: GetQuantityInStockBySiteOutput[]) {
    stockList.forEach((stock) => {
      this.countStockConfig(stock);
    });
  }

  private countStockConfig(stock: GetQuantityInStockBySiteOutput) {
    this.stockControlConf.ok = this.stockControlConf.ok || 0;
    this.stockControlConf.warning = this.stockControlConf.warning || 0;
    this.stockControlConf.nok = this.stockControlConf.nok || 0;
    this.stockControlConf.ok += stock.status === ControlConfigConstants.ICON_GREEN_LIGHT_CODE ? 1 : 0;
    this.stockControlConf.warning += stock.status === ControlConfigConstants.ICON_YELLOW_LIGHT_CODE ? 1 : 0;
    this.stockControlConf.nok += stock.status === ControlConfigConstants.ICON_RED_LIGHT_CODE ? 1 : 0;
  }

  public isConfStockOk(): boolean {
    return (
      (this.stockControlConf.nok === undefined ? 0 : this.stockControlConf.nok) === 0 &&
      (this.stockControlConf.warning === undefined ? 0 : this.stockControlConf.warning) === 0 &&
      (this.stockControlConf.ok === undefined ? 0 : this.stockControlConf.ok) > 0
    );
  }

  public isConStockfWarning(): boolean {
    return (
      (this.stockControlConf.nok === undefined ? 0 : this.stockControlConf.nok) === 0 &&
      (this.stockControlConf.warning === undefined ? 0 : this.stockControlConf.warning) > 0
    );
  }

  public isConfStockNok(): boolean {
    return (this.stockControlConf.nok === undefined ? 0 : this.stockControlConf.nok) > 0;
  }

  public ctrlConfiguration() {
    this.isLoadingOutgoingConf = true;
    const input: ControlConfigurationInput = {
      checkConfiguration: true,
      checkFl: true,
      checkLogbook: true,
      checkMel: true,
      checkPotential: true,
      checkReferential: true,
      checkStructure: true,
      equipmentCode: this.workPackage.assetCode || '',
      projectId: this.workPackage.projectId,
      withAllCounters: true,
      withFunctionalLocations: true,
      withMelFlag: true
    };
    this.wpFormService.controlConfiguration(input).subscribe((result) => {
      this.outgoinConfiguration = { ok: 0, warning: 0, nok: 0 };
      this.checkConfiguration(result);
      this.isLoadingOutgoingConf = false;
    });
  }

  private checkConfiguration(asset: ControlConfigurationOutput) {
    const checkList = [
      asset.checkConfigurationCause,
      asset.checkCoreCause,
      asset.checkFlCause,
      asset.checkMelCause,
      asset.checkReferentialCause,
      asset.checkStructureCause,
      asset.checkConfigurationCauseAlt,
      asset.checkCoreCauseAlt,
      asset.checkFlCauseAlt,
      asset.checkMelCauseAlt,
      asset.checkReferentialCauseAlt,
      asset.checkStructureCauseAlt,
      asset.checkConfigurationResult,
      asset.checkCoreResult,
      asset.checkFlResult,
      asset.checkMelResult,
      asset.checkReferentialResult,
      asset.checkStructureResult,
      asset.checkLogbookCause,
      asset.checkLogbookCauseAlt,
      asset.checkLogbookResult,
      asset.checkPotentialCause,
      asset.checkPotentialCauseAlt,
      asset.checkPotentialResult
    ];
    for (const checkElement of checkList) {
      this.countConfiguration(checkElement);
    }

    if (asset.children) {
      asset.children.forEach((childAsset) => this.checkConfiguration(childAsset));
    }
  }

  private countConfiguration(checkPart?: string) {
    this.outgoinConfiguration.ok = this.outgoinConfiguration.ok || 0;
    this.outgoinConfiguration.warning = this.outgoinConfiguration.warning || 0;
    this.outgoinConfiguration.nok = this.outgoinConfiguration.nok || 0;
    this.outgoinConfiguration.ok += checkPart === ControlConfigConstants.ICON_GREEN ? 1 : 0;
    this.outgoinConfiguration.warning += checkPart === ControlConfigConstants.ICON_YELLOW ? 1 : 0;
    this.outgoinConfiguration.nok += checkPart === ControlConfigConstants.ICON_RED ? 1 : 0;
  }

  public callAssetReview(): void {
    if (!!this.workPackage.assetCode) {
      const objectId: AirworthinessControlFormComponentInput = {
        equipmentCodeList: [this.workPackage.assetCode]
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Read,
        componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openAppliedConfigurationManagement(): void {
    if (this.workPackage.assetCode) {
      const objectId: AppliedConfigurationManagementInput = {
        equipmentCodeList: [this.workPackage.assetCode],
        workPackage: this.workPackage.projectId
      };

      const data: PageComponentData = {
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Read,
        componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      // TODO
    }
  }

  public callGoodsMovement(): void {
    const goodsMovementInput: GoodsMovementInput = {
      workPackageId: this.projectId
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(goodsMovementInput)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public callMaterialAvailability(): void {
    const goodsMovementInput: GoodsMovementInput = {
      workPackageId: this.projectId
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_AVAILABILITY_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(goodsMovementInput)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isConfOk(): boolean {
    return (
      (this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) === 0 &&
      (this.outgoinConfiguration.warning === undefined ? 0 : this.outgoinConfiguration.warning) === 0 &&
      (this.outgoinConfiguration.ok === undefined ? 0 : this.outgoinConfiguration.ok) > 0
    );
  }

  public isConfWarning(): boolean {
    return (
      (this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) === 0 &&
      (this.outgoinConfiguration.warning === undefined ? 0 : this.outgoinConfiguration.warning) > 0
    );
  }

  public isConfNok(): boolean {
    return (this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) > 0;
  }

  public docDownloaded(overlaypanel: OverlayPanel) {
    overlaypanel.visible = false;
  }

  public openAsset(): void {
    if (this.workPackage.assetName) {
      this.pageService.openAsset(this.workPackage.assetCode, this.workPackage.equipmentFunction);
    }
  }

  /**
   * Updating status of Work Package
   */
  public checkWorkPackageStatus() {
    if (AWPropertiesConstants.AIRM_PROJECT_STATUS_LINE_MAINTENANCE !== this.workPackage.statusState) {
      const bidmProjectDTOId: BidmProjectDTOId = {
        projectId: this.workPackage.projectId as string
      };
      this.wpFormService
        .findBidmProjectWithLinkedObjects(bidmProjectDTOId)
        .pipe(concatMap((bidmProject) => this.wpFormService.calculateBidmProjectStatus(bidmProject)))
        .subscribe((projectStatus: string) => {
          this.workPackage.statusState =
            projectStatus !== this.workPackage.statusState ? projectStatus : this.workPackage.statusState;
        });
    }
  }

  /**************************************************************************
   * Documents tab
   *************************************************************************/

  private initDocumentTableDataSource(): void {
    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName'),
          alignment: ColumnAlignment.LEFT,
          width: '30%'
        },
        {
          field: 'docType',
          translateKey: this.getTranslateKey('docType'),
          alignment: ColumnAlignment.LEFT,
          width: '30%'
        },
        {
          field: 'docExtension',
          translateKey: this.getTranslateKey('docExtension'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'docSize',
          translateKey: this.getTranslateKey('docSize'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate'),
          alignment: ColumnAlignment.LEFT,
          width: '10%'
        }
      ],
      data: []
    });
  }

  private initDocumentTable(): void {
    const projectId: BidmProjectDTOId = {
      projectId: this.projectId
    };
    this.wpFormService.findBidmDocumentsByProject(projectId).subscribe((documentList) => {
      this.documentList = documentList;
      this.documentTableDataSource.setData(this.documentList.map((document) => this.createDocumentRow(document)));
    });
  }

  private loadDocumentTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_EVENT_CATEGORY_MAP).subscribe((results) => {
      this.documentTypeList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  public saveDocuments(): void {
    const observables = this.documentAddedList.map((document) => this.wpFormService.createBidmDocument(document));

    forkJoin(observables).subscribe((bidmObjectId) => {
      this.documentAddedList = [];
      this.initDocumentTable();
      this.loadWorkPackage();
    });
  }

  public deleteDocuments(): void {
    this.documentRemovedList = [];
    const partialMessageKey =
      this.documentTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: 'global.' + partialMessageKey,
      accept: () => {
        this.documentTableDataSource.dataSelection.forEach((selectedDocumentRow) => {
          const documentsAddedWithoutSelection = this.documentAddedList.filter(
            (document) => !BidmDocumentUtils.areSameDocument(document, selectedDocumentRow._obj)
          );
          // list of added objects contains the selection
          if (this.documentAddedList.length !== documentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.documentAddedList = documentsAddedWithoutSelection;
          } else {
            const documentsUpdatedWithoutSelection = this.documentUpdatedList.filter(
              (document) => !BidmDocumentUtils.areSameDocument(document, selectedDocumentRow._obj)
            );
            // list of updated objects contains the selection
            if (this.documentUpdatedList.length !== documentsUpdatedWithoutSelection.length) {
              // Remove selection from added objects
              this.documentUpdatedList = documentsUpdatedWithoutSelection;
            }

            this.documentRemovedList = [...this.documentRemovedList, selectedDocumentRow._obj];
          }
        });

        this.documentList = this.documentList.filter((document) => {
          return !this.documentTableDataSource.dataSelection.some((selectedRow) =>
            BidmDocumentUtils.areSameDocument(document, selectedRow._obj)
          );
        });

        this.documentTableDataSource.setData(
          this.documentTableDataSource.dataSrc.filter((documentRow) => {
            return !this.documentTableDataSource.dataSelection.some((selectedDocumentRow) => {
              return BidmDocumentUtils.areSameDocument(documentRow._obj, selectedDocumentRow._obj);
            });
          })
        );

        const observables = this.documentRemovedList
          .filter((doc) => !StringUtils.isNullOrEmpty(doc.documentId))
          .map((document) => {
            const bidmDocumentDTOId: BidmDocumentDTOId = {
              documentId: document.documentId as string
            };

            return this.wpFormService.removeBidmDocument(bidmDocumentDTOId);
          });

        forkJoin(observables).subscribe(() => {
          this.documentRemovedList = [];
        });

        this.documentTableDataSource.dataSelection = [];
      }
    });
  }

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      FileUtils.downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
    });
  }

  public editDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocument = { ...this.documentTableDataSource.dataSelection[0]._obj };
      this.documentDialogOpenMode = ComponentOpenMode.Write;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.documentTableDataSource.dataSelection.length === 1) {
      this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
      this.documentDialogOpenMode = ComponentOpenMode.Read;
      this.showDocumentDialog = true;
    }
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documentList.some((document) => document.documentName === file.name);
      if (fileExists) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (!!fileContent) {
            const document: BidmDocumentDTO = {
              documentContent: fileContent,
              projectId: this.workPackage.projectId,
              documentName: file.name,
              documentCode: file.name,
              documentType: BidmDocumentUtils.typeFile(file.name),
              statusState: this.workPackage.statusState,
              statusDate: moment().toDate(),
              documentPublicationDate: moment().toDate()
            };
            this.documentList = [...this.documentList, document];
            this.documentAddedList = [...this.documentAddedList, document];
            this.documentTableDataSource.addData([this.createDocumentRow(document)]);
          }
        });
      }

      fileUploader.clear();
    }
  }

  private createDocumentRow(document: BidmDocumentDTO): DocumentRow {
    const selectedDocumentType = this.documentTypeList.find(
      (documentType) => !!document.documentCategory && (documentType.value as string) === document.documentCategory
    );

    const documentRow: DocumentRow = {
      docExtension: BidmDocumentUtils.formatDocExtension(document),
      docName: document.documentName as string,
      docPublicationDate: this.dateService.momentToString(moment(Number(document.documentPublicationDate))),
      docSize: BidmDocumentUtils.formatDocSize(document),
      docType: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      isChecked: false,
      _obj: document
    };

    return documentRow;
  }

  public importTask(): void {
    this.showImportTaskPopup = true;
  }

  public lastUpdateDetails(): void {
    this.showLastUpdatePopup = true;
  }

  public refreshOnImport(importTaskReportMessage: string): void {
    if (importTaskReportMessage) {
      this.importTaskReportMessage = importTaskReportMessage;
      this.showImportTaskReport = true;
      this.refresh();
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: WorkPackageStatusComponent,
      data: this.workPackage
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          const currentState = this.workPackage.statusState;

          if (
            currentState === AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE &&
            event.data === AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED
          ) {
            this.wpFormService.checkAcrsEventForBidmProject(this.workPackage).subscribe((result: boolean) => {
              if (result) {
                this.confirmationService.confirm({
                  messageKey: this.getTranslateKey('acrsEventToDelete'),
                  accept: () => {
                    this.updateWorkPackageStatus(currentState, event.data);
                  }
                });
              } else {
                this.updateWorkPackageStatus(currentState, event.data);
              }
            });
          } else {
            this.updateWorkPackageStatus(currentState, event.data);
          }
        }
      }
    });
  }

  private updateWorkPackageStatus(currentStatus: string | undefined, newStatus: string | undefined): void {
    this.workPackage.statusState = newStatus;
    const saved = this.saveWorkPackage();
    if (!saved) {
      // Revert status change if save not launched
      this.workPackage.statusState = currentStatus;
    }
  }

  public onEditWorkOrder(workOrderEditObject: WorkOrderEditionObject) {
    this.displayWorkOrderEdit = workOrderEditObject.display;
    this.workOrderSelected = workOrderEditObject.workOrderSelected;
    this.workOrderListWOEdition = this.workOrderList;
    this.workPackageWOEdition = this.workPackage;
  }

  public onUpdateSchedulingEdit(updateSchedulingObject: UpdateSchedulingObject): void {
    this.displayWorkOrderSchedulingEdit = updateSchedulingObject.display;
    this.selectedWorkOrders = updateSchedulingObject.selectedWorkOrders;
  }

  public onAddWorkOrder(isCreated: boolean): void {
    if (isCreated) {
      this.wpFormService.calculateBidmProjectStatus(this.workPackage).subscribe((statusState) => {
        if (this.workPackage.statusState !== statusState) {
          this.updateOpenMode(ComponentOpenMode.Write);
          this.componentOpenMode = ComponentOpenMode.Write;
          this.workPackage.statusState = statusState;
        }
      });
    }
    this.workPackageObject = { ...this.workPackage };
  }

  public onWorkOrderSchedulingEdited(woScheduleInfo: WorkOrderScheduleInfo): void {
    const isAssignedToUpdate = woScheduleInfo.assignedTo !== undefined && woScheduleInfo.assignedTo.length > 0;
    const isStartDateToUpdate = woScheduleInfo.woScheduledStartDate !== undefined;
    const isEndDateToUpdate = woScheduleInfo.woScheduledEndDate !== undefined;

    if (isAssignedToUpdate || isStartDateToUpdate || isEndDateToUpdate) {
      const woList: WorkOrderRow[] = this.selectedWorkOrders.map((node) => node.data as WorkOrderRow);

      const bidmWorkOrderList = woList.map((wo) => {
        const bidmWorkOrder = wo.bidmWorkOrder;
        bidmWorkOrder.woAssignedTo = isAssignedToUpdate ? woScheduleInfo.assignedTo : bidmWorkOrder.woAssignedTo;
        bidmWorkOrder.woScheduledStartDate = isStartDateToUpdate
          ? woScheduleInfo.woScheduledStartDate
          : bidmWorkOrder.woScheduledStartDate;
        bidmWorkOrder.woScheduledEndDate = isEndDateToUpdate
          ? woScheduleInfo.woScheduledEndDate
          : bidmWorkOrder.woScheduledEndDate;

        return bidmWorkOrder;
      });

      this.wpFormService.updateBidmWorkOrders(bidmWorkOrderList).subscribe(
        (result) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateScheduleWO'));
          this.workPackageObject = { ...this.workPackage };
        },
        (error) => {
          if (!!error.error && !!error.error.errorDesc && error.error.errorDesc.length > 0) {
            this.messageService.showErrorMessage(error.error.errorDesc);
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnUpdateScheduleWO'));
          }
          this.workPackageObject = { ...this.workPackage };
        }
      );
    }
  }

  public searchCustomers(): void {
    this.searchObject = {};
    this.searchObject.isOwner = true;
    this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe((results) => {
      this.allCustomers = results;
    });
  }

  public onTransferOfWO(): void {
    this.refresh();
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

  /**********************************
   * Component Cockpit Tab handling
   **********************************/
  private loadBsdeProject() {
    if (!!this.workPackage.projectNumber) {
      this.showCockpitTab = false;
      this.wpFormService.getBsdeProjectData(`${this.workPackage.projectNumber}`).subscribe(
        (res: BsdeProjectDTO) => {
          if (!!res) {
            this.cockpitComponentData = {
              id: this.tabService.generateId(),
              componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_OPERATION_FORM,
              openMode: ComponentOpenMode.Read,
              isFromWorkPackage: true
            };

            if (!!res) {
              this.cockpitComponentData.objectId = this.serializationService.serialize(res.projectNumber);
            }

            this.isBsdeProjectExist = true;
            this.bsdeProject = res;
            this.showCockpitTab = true;
          }
        },
        (error) => {
          this.isBsdeProjectExist = false;
          this.showCockpitTab = true;
        }
      );
    }
  }

  /**************************************
   * Create Component Cockpit Project
   **************************************/
  public createComponentCockpit() {
    if (this.validateProjectCreation()) {
      // Check whether Project already exist or not with same PN and SN
      this.wpFormService.getBsdeProjectListByPnAndSn(this.bidoEquipment).subscribe((res) => {
        if (!!res && res.length > 0) {
          const isAnyProjectNotClosed = res.find(
            (project) => project.statusState !== BidoFunctionTypeConstants.UC_IWB_PROJECT_CLOSING
          );

          if (!!isAnyProjectNotClosed) {
            const errMsg = `${this.translateService.instant(this.getTranslateKey('componentCockpit'))} ${
              isAnyProjectNotClosed.projectNumber
            } ${this.translateService.instant(this.getTranslateKey('alreadyExistonItem'))} ${this.getKey(
              this.bidoEquipment
            )} `;
            this.messageService.showErrorMessage(errMsg);
          } else {
            this.createProject();
          }
        } else {
          this.createProject();
        }
      });
    }
  }

  private createProject() {
    const input: CreateWorkbenchInspectionDTO = {
      bidoEquipmentDTO: this.bidoEquipment,
      bidmProjectDTO: this.workPackage
    };

    this.bsdeProjectLoading = true;
    this.wpFormService
      .createWorkbenchInspection(input)
      .pipe(
        finalize(() => {
          this.bsdeProjectLoading = false;
        })
      )
      .subscribe((resp) => {
        if (!!resp) {
          this.loadBsdeProject();
        }
      });
  }

  /**************************************
   * Validate project creation
   *************************************/
  private validateProjectCreation(): boolean {
    // TODO: add more checks
    if (!this.bidoEquipment.pnCode) {
      this.messageService.showErrorMessage(this.getTranslateKey('pnRequired'));

      return false;
    }

    return true;
  }

  /**********************************************
   * Handling the visibility of CC Tab
   **********************************************/
  private setComponentCockpitTabVisibility() {
    this.wpFormService
      .isBuildingBlockInstalled(BidoFunctionTypeConstants.MODULE_IWB)
      .subscribe((isBuildingBlockInstalled) => {
        this.isComponentCockpitModuleInstalled = isBuildingBlockInstalled;
      });
  }

  /**
   * To get the list of workshops on selection of MRO center
   */
  public getWorkShops(): void {
    this.dialogWorkOrderEditService.loadWarehouseList(this.workPackage.bireRepairCenterCode).subscribe((result) => {
      this.workShopList = result.map((workCenter) => {
        return {
          label: workCenter.label,
          value: Number(workCenter.value)
        };
      });
    });
  }

  public disableDefectsTableButtonsInClosedStatus(): boolean {
    return (
      !!this.workDataDefect &&
      !!this.workDataDefect.workPackage &&
      this.workDataDefect.workPackage.statusState === this.awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE
    );
  }

  private getKey(input: BidoEquipmentDTO) {
    return `${input.chapter}-${input.section}-${input.subject}-${input.sheet}-${input.marks}`;
  }
}
