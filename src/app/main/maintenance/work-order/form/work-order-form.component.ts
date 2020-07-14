import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MenuItem, SelectItem, TreeNode } from 'primeng/api';
import { Observable, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TableDataSourceWithHistory } from '../../../../modules/purchase-contract/utils/table-data-source-with-history';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ColumnAlignment } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidoNotificationTypeConstants } from '../../../../shared/constants/bido-notification-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
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
import { BidmTimeTrackingByOperationInputDTO } from '../../../../shared/types/api-input-types/aircraft-maintenance/bidm-time-tracking-by-operation-input-dto.interface';
import { BidmTimeTrackingByOperationOutputDTO } from '../../../../shared/types/api-input-types/aircraft-maintenance/bidm-time-tracking-by-operation-output-dto.interface';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { StaffPlanningInput } from '../../../../shared/types/api-input-types/bidt-employee/staff-planning-input.interface';
import { ControlStockInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/control-stock-input.interface';
import { ControlConfigurationInput } from '../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { FindForRemovalInput } from '../../../../shared/types/api-input-types/logistic/find-for-removal-input.interface';
import { UsersForWorkOrderInput } from '../../../../shared/types/api-input-types/user-profile-management/users-for-work-order.interface';
import { BidmWoAssignmentInput } from '../../../../shared/types/api-input-types/work-order/bidm-wo-assignment-input.interface';
import { CalculateWorkOrderImput } from '../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { ProgressFromOperationStatusInput } from '../../../../shared/types/api-input-types/work-order/progress-from-operation-status-input';
import { UpdateJobCardInput } from '../../../../shared/types/api-input-types/work-order/update-job-card-input.interface';
import { WorkPostponementInput } from '../../../../shared/types/api-input-types/work-order/work-postponement-input.interface';
import { ADSBModRowDTO } from '../../../../shared/types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { FindEmployeeQualificationDTO } from '../../../../shared/types/api-output-types/bidt-qualif-employee/find-employee-qualification-dto.interface';
import { GetQuantityInStockBySiteOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-quantity-in-stock-by-site-output.interface';
import { ControlConfigurationOutput } from '../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidoEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-lwo.interface';
import { BidoNotificationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmDocumentDTO } from '../../../../shared/types/api-types/bidm-document-dto.interface';
import { BidmOperationDTOId } from '../../../../shared/types/api-types/bidm-operation-dto-id.interface';
import { BidmOperationDTO } from '../../../../shared/types/api-types/bidm-operation-dto.interface';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWoAssignmentDTOId } from '../../../../shared/types/api-types/bidm-wo-assignment-dto-id.interface';
import { BidmWoAssignmentDTO } from '../../../../shared/types/api-types/bidm-wo-assignment-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoUserDTOId } from '../../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtEmployeeDTO } from '../../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireModificationDTOId } from '../../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireOperationDTOId } from '../../../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { HBidmOperationDTO } from '../../../../shared/types/api-types/h-bidm-operation-dto.interface';
import { UpdateLogbookFromWorkOrderInput } from '../../../../shared/types/api-types/update-logbook-from-work-order-input.interface';
import { WoAssetManagementDTO } from '../../../../shared/types/api-types/wo-asset-management-dto.interface';
import { WoAssetManagementInputDTO } from '../../../../shared/types/api-types/wo-asset-management-input-dto.interface';
import { WorkOrderStatusDetailDTO } from '../../../../shared/types/api-types/work-order-status-detail-dto.interface';
import { GoodsMovementInput } from '../../../../shared/types/component-input-types/logistics/goods-movement-input.interface';
import { AppliedConfigurationManagementInput } from '../../../../shared/types/component-input-types/maintenance/applied-configuration-management.interface';
import { WorkDataDefect } from '../../../../shared/types/component-input-types/maintenance/work-data-defect.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidmDocumentUtils, DocumentRow } from '../../../../shared/utils/bidm-document-utils';
import { BidmWorkOrderUtils } from '../../../../shared/utils/bidm-work-order-utils';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { BireItemUtils } from '../../../../shared/utils/bire-item-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ImageUtils } from '../../../../shared/utils/image-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { UrlUtils } from '../../../../shared/utils/url-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { EmployeeFormService } from '../../../human-resources/employee-form/employee-form.service';
import { LogisticsService } from '../../../logistics/logistics.service';
import { OverlayService } from '../../../overlay/overlay.service';
import { ProcurementRequestsTableService } from '../../procurement-request/procurement-requests-table.service';
import { WorkPackageFormService } from '../../work-package/form/work-package-form.service';

import { WorkOrderStatusComponent } from './status/work-order-status.component';
import { WorkOrderFormService } from './work-order-form.service';

interface ChartType {
  labels: string[];
  datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[] }[];
}
interface ChartDataset {
  statusList: string[];
  value: number;
  color: string;
  label: string;
}

/* interface TreeTableColumns {
  field: string;
  alignment: string;
  width: string;
} */

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

interface DocumentTableRow {
  docTask?: string;
  docName?: string;
  docExternal?: string;
  docExtension?: string;
  docSize?: string;
  docPublicationDate?: Date;
  docDescription?: string;
  docIsIllustration?: boolean;
  materialIllustration?: SafeResourceUrl;
  _obj?: BidoDocumentationDTO;
  docCode?: string;
  docFile?: Uint8Array;
}

interface JobCardOperation extends BidmOperationDTO {
  opeDesignation?: string;
  opeSequence?: number;
  opeQualification?: string;
  opeStdDurationDisplay?: string;
  opePerformedDurationDisplay?: string;
  opePerformedElapsedDisplay?: string;
  opeStartDateDisplay?: string;
  opePerformedOnDisplay?: string;
  opeStatusPercent?: string;
  opeStatusDisplay?: string;
  opePerformedLastByDisplay?: string;
  opeCheckByDisplay?: string;
  opeCheckOnDisplay?: string;
  opeComment?: string;
  isOpeOnPerformed?: boolean;
  isOpeOnElapsed?: boolean;
  isCriticalTask?: boolean;
  canAchieveOperation?: boolean;
  canStartOrEndDuration?: boolean;
  _expand?: boolean | false;
}

interface JobCardWoAssetManagement extends WoAssetManagementDTO {
  key: string;
  event?: string;
  fl?: string;
  availableDecisions?: SelectItem[];
  availableSuperiorAssets?: SelectItem[];
  availablePNs?: SelectItem[];
  availableEquipments?: SelectItem[];
  availableWarehouses?: SelectItem[];
  availableItems?: SelectItem[];
  availableFunctionCodes?: SelectItem[];
  availableStatuses?: SelectItem[];
  availableFls?: SelectItem[];
  isReady?: boolean | false;
  isLoading?: boolean | false;
  transferOrders: BidtTransferOrderDTO[];
  _obj?: WoAssetManagementDTO;
  _expand?: boolean | false;
  _existingReversal?: boolean;
}

interface DurationInterface {
  performedDuration: Date;
  elapsedTime: Date;
}

interface TimeTrackingOutput {
  durationInterface?: DurationInterface;
  addedBidmTimeTracking?: BidmTimeTrackingByOperationOutputDTO[];
}

interface StakeholdersRow {
  stakeholderName?: string;
  qualification?: string;
  isController?: boolean;
  _obj?: BidmWoAssignmentDTO;
}

@Component({
  selector: 'aw-work-order',
  styleUrls: ['./work-order-form.component.scss'],
  templateUrl: './work-order-form.component.html'
})
export class WorkOrderFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;
  public readonly bidoNotificationTypeConstants: typeof BidoNotificationTypeConstants;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @ViewChild('mainAnchor')
  public mainAnchor: ElementRef;
  @ViewChild('workPackageAnchor')
  public workPackageAnchor: ElementRef;
  @ViewChild('progressAnchor')
  public workOrderProgressAnchor: ElementRef;
  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;
  @ViewChild('operationsAnchor')
  public operationsAnchor: ElementRef;
  @ViewChild('commentAnchor')
  public commentAnchor: ElementRef;
  @ViewChild('additionalWorkAnchor')
  public additionalWorkAnchor: ElementRef;
  @ViewChild('taskDocumentsAnchor')
  public taskDocumentsAnchor: ElementRef;
  @ViewChild('woDocumentsAnchor')
  public woDocumentsAnchor: ElementRef;
  @ViewChild('defectsAnchor')
  public defectsAnchor: ElementRef;
  @ViewChild('requestManagmentAnchor')
  public requestManagmentAnchor: ElementRef;
  @ViewChild('installRemoveAnchor')
  public installRemoveAnchor: ElementRef;

  @ViewChild('procurementRequestsTable')
  public procurementRequestTableAnchor: ElementRef;

  public currentIllustration: SafeResourceUrl | undefined;
  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;
  public pageTitle: string;
  public navigationLinkList: MenuItem[];
  public actionLinkList: MenuItem[];
  public bidmWorkOrderId: BidmWorkOrderDTOId;
  public toc: PageTocEntry[];
  public selectedAnchor: string | undefined;
  public workOrder: BidmWorkOrderDTO = {};
  public workPackage: BidmProjectDTO = {};
  public woStatus: WorkOrderStatusDetailDTO;
  public assetRepresentation: string;
  public isLoadingOperationsTable: boolean;
  public operationTable: JobCardOperation[];
  public operationTableCols: TableColumn[];
  public selectedOperations: BidmOperationDTO[];
  public bireTask: BireTaskDTO;
  public woItemDTO: BireItemDTO;
  public wpEquipementDto: BidoEquipmentDTO;
  public woEquipementDto: BidoEquipmentDTO;
  public outgoinConfiguration: OutgoinConfiguration = { ok: undefined, warning: undefined, nok: undefined };
  public stockControlConf: StockControlConf = { ok: undefined, warning: undefined, nok: undefined };
  public dateStartPerformedDuration?: number;
  public dateEndPerformedDuration?: number;
  public dateStartElapsedDuration?: number;
  public dateEndElapsedDuration?: number;
  public user?: BidoUserDTO;
  public userText?: string;
  public showSaveSpinner: boolean = false;
  public isPostPonement: boolean = false;
  public originText: string;
  public evolutionType: string;

  public woTask: string | undefined;
  public woAssignedTo: string | undefined;
  public bidtWorkCenter: string | undefined;
  public bidtWarehouseDTO: BidtWarehouseDTO | undefined;
  public wpAircraftType: string | undefined;
  public woPerformedBy: string | undefined;
  public woCheckedBy: string | undefined;
  public totalDuration: string | undefined;
  public totalElapsed: string | undefined;
  public qualificationNeeded: string | undefined;
  public woComments: string | undefined;
  public woAdditionalWork: string | undefined;
  public woEquipement: string | undefined;
  public woStatusProgressType: string | undefined;
  public woStatusProgressPercent: string | undefined;
  public woDescription: string | undefined;

  public addWorkOrder: BidmWorkOrderDTOId;
  public displayWorkOrderEdit: boolean = false;
  public workOrderList: BidmWorkOrderDTO[];

  public selectedDocuments: DocumentTableRow[];
  public documentsTableCols: TableColumn[];
  public documentTableDisplayed: DocumentTableRow[];

  public workDataDefect: WorkDataDefect;
  public acrsEventCodeList: BidoNotificationDTOId[] = [];
  public statusList: SelectItem[];
  public workflowStatus: SelectItem[];
  public woTypeList: SelectItem[];
  public userList: SelectItem[];
  public woUserList: SelectItem[];
  public mroCenterList: SelectItem[];

  public isWoNeedCheck: boolean = true;
  public displayRequestPostponement: boolean = false;
  public displayOperationCheck: boolean = false;
  public selectedOperationToCheck: JobCardOperation;
  public selectedOperation: JobCardOperation;
  public chartData: ChartType;
  public chartDataset: ChartDataset[];
  public chartOptions: unknown;
  public chartType: string;
  public chartVisible: boolean = false;
  public isLoadingOutgoingConf: boolean = false;
  public isAskRequestConf: boolean = false;
  public iscancelPostConf: boolean = false;
  public isLoadingStockControlConf: boolean = false;
  public isCommentEdit: boolean = false;
  public isAdditionnalWorkEdit: boolean = false;
  public displayTimeTracking: boolean;
  public displayEditDuration: boolean;
  public displayPrintIdLabel: boolean = false;

  public relatedItem: string;

  private opStatusList: (string | undefined)[];

  public bidmTimeTracking: BidmTimeTrackingByOperationOutputDTO[];
  public operationSelectedIndex: number = -1;
  public addedBidmTimeTracking: BidmTimeTrackingByOperationOutputDTO[];

  public woBidmDocumentsTableData: TableDataSourceWithHistory<DocumentRow>;
  public woBidmDocumentsResource: BidmDocumentDTO[];
  public selectedWOBidmDocument: BidmDocumentDTO;
  public openModeWOImportDoc: ComponentOpenMode;
  public showAddWODocumentDialog: boolean;
  public wODocsHasBeeEdited: boolean;

  // Qualification on going
  public findEmployeeQualificationDTO: FindEmployeeQualificationDTO[];
  public isQualificationOngoing: boolean;

  public procurementRequestStatusList: LabelValue<string>[];
  public procurementRequestTypes: LabelValue<string>[];

  // Stakeholders table
  public stakeholdersTableDataSource: TableDataSourceWithHistory<StakeholdersRow>;
  public selectedStakeholder: BidmWoAssignmentDTO;
  public openModeStakeholder: ComponentOpenMode;
  public showAddStakeholderDialog: boolean;
  public currentStakeholderIndex: number;
  public stakeholder: BidmWoAssignmentDTO = {};
  public employeeQualification: string;

  public showLastUpdatePopup: boolean;
  public workOrderDTOIdList: BidmWorkOrderDTOId[];

  public procurementRequests: ProcurementRequestAndIndicatorsOutputDTO[];

  // Install Remove - WoAssetMangement
  public woAssetManagementTable: JobCardWoAssetManagement[];
  public woAssetManagementTableCols: TableColumn[];
  public selectedWoAssetManagements: JobCardWoAssetManagement[];
  public isLoadingWoAssetManagementTable: boolean;
  public isExecutingWoAssetManagementDecision: boolean;
  public isUndoingWoAssetManagementDecision: boolean;
  public isSavingWoAssetManagementTable: boolean;
  public allWoAssetManagements: WoAssetManagementDTO[];
  public installOperationalStatuses: SelectItem[];
  public removeOperationalStatuses: SelectItem[];
  public isGroundEquipment: boolean;
  public propertyRemovalReason: LabelValue<string>[];
  public expandedWoAssetRows = {};
  public woAssetManagementReadyToExecuteDecision = false;

  // Operation Update popup
  public showOperationUpdatesPopup: boolean;
  public propertyStatus: LabelValue<string>[];
  public tableOperationUpdatesData: DialogTableData<HBidmOperationDTO>;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  // Logbook Update popup
  public showUpdateLogbookDialog: boolean;
  public updateLogbookFromWorkOrderInput: UpdateLogbookFromWorkOrderInput;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly logisticsService: LogisticsService,
    private readonly domSanitizer: DomSanitizer,
    private readonly employeeFormService: EmployeeFormService,
    public translateService: TranslateService,
    public sessionService: SessionService,
    private readonly woFormService: WorkOrderFormService,
    private readonly workPackageFormService: WorkPackageFormService,
    private readonly davFieldService: DavFieldService,
    private readonly dateService: DateService,
    private readonly confirmationService: ConfirmationService,
    private readonly procurementRequestsTableService: ProcurementRequestsTableService,
    private readonly propertiesService: PropertiesService,
    private readonly _overlayService: OverlayService
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
    this.documentTableDisplayed = [];
    this.documentsTableCols = [];
    this.selectedDocuments = [];
    this.awPropertiesConstants = AWPropertiesConstants;
    this.bidoNotificationTypeConstants = BidoNotificationTypeConstants;
    this.controlConfigConstants = ControlConfigConstants;
    this.operationTable = [];
    this.selectedOperations = [];
    this.bidmTimeTracking = [];
    this.addedBidmTimeTracking = [];
    this.selectedWOBidmDocument = {};
    this.woBidmDocumentsResource = [];
    this.showAddWODocumentDialog = false;
    this.wODocsHasBeeEdited = false;
    this.isQualificationOngoing = false;
    this.currentStakeholderIndex = -1;
    this.woAssetManagementTable = [];
    this.allWoAssetManagements = [];
    this.selectedWoAssetManagements = [];
    this.propertyRemovalReason = [];
    this.expandedWoAssetRows = {};
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.initTablesHeader();

    this.initDates();
    this.initChart();
    this.setLinkLists();

    // Load Status List
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP).subscribe((res) => {
      this.procurementRequestStatusList = res;
    });

    this.procurementRequestTypes = [];
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe((res) => {
      this.procurementRequestTypes = res;
    });

    this.propertiesService.getValue(GenericPropertyConstants.REMOVAL_REASON_MAP).subscribe((results) => {
      this.propertyRemovalReason = results;
    });

    this.userWorkflowSubject.subscribe(() => {
      this.updateWorkflowStatusList();
    });
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_WORK_ORDER_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.loadLists();
    this.woStatus = {
      costAndDuration: {}
    };

    if (this.sessionService.loggedUser) {
      this.woFormService.findBidoUserByLogin(this.sessionService.loggedUser.login).subscribe((user) => {
        this.user = user;
        if (user.employeeId) {
          this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe((employee) => {
            this.userText = this.getEmployeeText(employee, user);
          });
          // Load screen if qualification is on going
          this.employeeFormService
            .findQualificationsByEmployeeId(Number(user.employeeId))
            .subscribe((qualifications) => {
              this.findEmployeeQualificationDTO = qualifications;
              this.initWorkOrderWithQualificationOngoing();
            });
        } else {
          this.userText = this.getUserText(user);
        }
        if (this.componentData.objectId) {
          const objectId = this.serializationService.deserialize(this.componentData.objectId);
          this.bidmWorkOrderId = {
            projectId: objectId.projectId,
            woId: objectId.woId
          };
          this.loadWorkOrder();
          this.loadBidmDocumentTableData();
          this.loadStakeholdersTable();
          this.initInstallRemoveStatuses();
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('notFound'));
        }

        this.initToc();
      });
    }
  }

  private setLinkLists(): void {
    this.setActionLinkList();
    this.setNavigationLinkList();
    this.loadPostponementConf();
  }

  public getStakeholderNameById(stakeholderId: number | undefined): string | undefined {
    const matchingUser: SelectItem | undefined = this.userList.find((user) => user.value === stakeholderId);

    return matchingUser ? matchingUser.label : undefined;
  }

  public getEmployeeQualificationById(stakeholderRow: StakeholdersRow): void {
    if (stakeholderRow && !stakeholderRow.qualification && stakeholderRow._obj && stakeholderRow._obj.woAssignedTo) {
      this.employeeFormService
        .getEmployeeQualificationText(stakeholderRow._obj.woAssignedTo.toString())
        .subscribe((result) => {
          stakeholderRow.qualification = result;
          this.stakeholdersTableDataSource.update();
        });
    }
  }

  public updateQualificationOnStakeholderDataSource() {
    this.stakeholdersTableDataSource.dataSrc.forEach((row) => {
      this.getEmployeeQualificationById(row);
    });
  }

  private initWorkOrderWithQualificationOngoing(): void {
    if (this.qualificationNeeded && this.findEmployeeQualificationDTO) {
      const qualificationNeededCode = this.qualificationNeeded.split(';');

      if (qualificationNeededCode[qualificationNeededCode.length - 1] === '') {
        qualificationNeededCode.length = qualificationNeededCode.length - 1;
      }

      const selectedQualificationsNeeded = this.findEmployeeQualificationDTO.filter(
        (qualification) => qualification.qualificationCode === qualificationNeededCode[0]
      );

      this.isQualificationOngoing = qualificationNeededCode.some((qualificationCode) => {
        const qualification = this.findEmployeeQualificationDTO.find(
          (employeeQualification) => employeeQualification.qualificationCode === qualificationCode
        );

        return (
          !qualification ||
          (!!qualification.bidtQualifEmployeeDTO && !!qualification.bidtQualifEmployeeDTO.qualifOngoing)
        );
      });

      if (selectedQualificationsNeeded) {
        const isSelectedQualifOngoing = selectedQualificationsNeeded.find(
          (qualification) =>
            (qualification.bidtQualifEmployeeDTO && qualification.bidtQualifEmployeeDTO.qualifOngoing) as boolean
        );

        if (isSelectedQualifOngoing) {
          this.isQualificationOngoing = true;
        }

        this.initEmployeeQualificationsStatus();
      }
    }
  }

  private initEmployeeQualificationsStatus() {
    if (this.operationTable) {
      this.operationTable.forEach((operation) => {
        if (operation) {
          if (operation.opeQualification && !!this.findEmployeeQualificationDTO) {
            const qualification = this.findEmployeeQualificationDTO.find(
              (employeeQualification) => employeeQualification.qualificationCode === operation.opeQualification
            );

            operation.canAchieveOperation =
              !!qualification &&
              !!qualification.bidtQualifEmployeeDTO &&
              !qualification.bidtQualifEmployeeDTO.qualifOngoing;
            operation.canStartOrEndDuration = !!qualification;
          } else {
            // Can always work on unqualified operation
            operation.canAchieveOperation = true;
            operation.canStartOrEndDuration = true;
          }
        }
      });
    }
  }

  private initBidmDocumentTableData(): void {
    this.woBidmDocumentsTableData = new TableDataSourceWithHistory({
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
      data: [],
      allowUniqueValue: true,
      propertiesWitchIdentifyData: ['docName'],
      errorOnAddedDuplicate: this.translateService.instant('global.warningOnFileExists'),
      errorOnUpdatedDuplicate: this.translateService.instant('global.warningOnFileExists')
    });
  }

  private initStakeholdersTableDataSource(): void {
    this.stakeholdersTableDataSource = new TableDataSourceWithHistory({
      allowMultiSelect: true,
      enableSelection: true,
      columns: [
        {
          field: 'stakeholderName',
          translateKey: this.getTranslateKey('stakeholderName')
        },
        {
          field: 'qualification',
          translateKey: this.getTranslateKey('qualification')
        },
        {
          field: 'isController',
          translateKey: this.getTranslateKey('isController')
        }
      ],
      data: [],
      allowUniqueValue: true,
      propertiesWitchIdentifyData: ['stakeholderName'],
      errorOnAddedDuplicate: this.translateService.instant('WorkOrderFormComponent.warningOnStakeholderExists'),
      errorOnUpdatedDuplicate: this.translateService.instant('WorkOrderFormComponent.warningOnStakeholderExists')
    });
  }

  private createDocumentRow(document: BidmDocumentDTO): DocumentRow {
    const documentRow: DocumentRow = {
      docExtension: BidmDocumentUtils.formatDocExtension(document),
      docName: document.documentName as string,
      docPublicationDate: this.dateService.momentToString(moment(Number(document.documentPublicationDate))),
      docSize: BidmDocumentUtils.formatDocSize(document),
      docType: document.documentType as string,
      isChecked: false,
      _obj: document
    };

    return documentRow;
  }

  public openWOImportDocDialInEditMode() {
    this.openModeWOImportDoc = ComponentOpenMode.Write;
    this.woBidmDocumentsResource = this.woBidmDocumentsTableData.dataSrc.map((row) => row._obj);
    this.selectedWOBidmDocument = this.woBidmDocumentsTableData.dataSelection[0]._obj;
    if (this.woBidmDocumentsResource && this.selectedWOBidmDocument) {
      this.showAddWODocumentDialog = true;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('notFound'));
    }
  }

  public openWOImportDocDialInCreateMode() {
    this.openModeWOImportDoc = ComponentOpenMode.Create;
    this.woBidmDocumentsResource = this.woBidmDocumentsTableData.dataSrc.map((row) => row._obj);
    this.showAddWODocumentDialog = true;
  }

  private loadBidmDocumentTableData(): void {
    this.woBidmDocumentsTableData.setData([]);
    this.woFormService.findBidmDocumentsByWorkOrder(this.bidmWorkOrderId).subscribe((result: BidmDocumentDTO[]) => {
      this.woBidmDocumentsResource = [...result];
      this.woBidmDocumentsTableData.setData(result.map((doc) => this.createDocumentRow(doc)));
    });
  }

  private loadStakeholdersTable(): void {
    this.stakeholdersTableDataSource.setData([]);
    this.woFormService.userList$.subscribe((list) => {
      this.userList = list;
      this.initWoUserList();
      this.woFormService
        .findBidmWoAssignmentsByWorkOrder(this.bidmWorkOrderId)
        .subscribe((result: BidmWoAssignmentDTO[]) => {
          result.forEach((elt) => {
            this.employeeFormService
              .getEmployeeQualificationText((elt.woAssignedTo as number).toString())
              .subscribe((res: string) => {
                elt.employeeQualification = res;
              });
            if (this.user && elt.woAssignedTo) {
              this.woFormService.findUserById({ userId: elt.woAssignedTo.toString() }).subscribe((receivingUser) => {
                if (this.user && receivingUser.userId === this.user.userId) {
                  this.updateOpenMode(ComponentOpenMode.Write);
                }
              });
            }
          });
          this.stakeholdersTableDataSource.setData(result.map((stakeholder) => this.createStakeholderRow(stakeholder)));
          this.updateQualificationOnStakeholderDataSource();
        });
    });
  }

  public downloadTaskFiles(): void {
    this.selectedDocuments.forEach((documentRow) => {
      if (!!documentRow._obj) {
        FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
      }
    });
  }

  public downloadWOFiles(): void {
    this.woBidmDocumentsTableData.dataSelection.forEach((documentRow) => {
      if (!!documentRow._obj) {
        FileUtils.downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
      }
    });
  }

  private findBidmDocumentByDocumentRow(documentRow: DocumentRow): BidmDocumentDTO {
    return this.woBidmDocumentsResource.find((elt) => elt.documentName === documentRow.docName) as BidmDocumentDTO;
  }

  public updateWODoc(docToUpdate: BidmDocumentDTO): void {
    const index = this.woBidmDocumentsResource.findIndex(
      (elt) => elt.documentName === this.woBidmDocumentsTableData.dataSelection[0].docName
    );
    if (index !== -1) {
      this.woBidmDocumentsResource.splice(index, 1, docToUpdate);
    }
    this.woBidmDocumentsTableData.replaceData(
      this.woBidmDocumentsTableData.dataSelection[0],
      this.createDocumentRow(docToUpdate)
    );
    this.wODocsHasBeeEdited = true;
    this.setWODocAttributeAfterAnyUpdateAction();
  }

  public addWODoc(docToAdd: BidmDocumentDTO): void {
    this.woBidmDocumentsTableData.addData([this.createDocumentRow(docToAdd)]);
    this.woBidmDocumentsResource.push(docToAdd);
    this.wODocsHasBeeEdited = true;
    this.setWODocAttributeAfterAnyUpdateAction();
  }

  private setWODocAttributeAfterAnyUpdateAction(): void {
    this.woBidmDocumentsTableData.dataSelection = [];
    this.selectedWOBidmDocument = {};
    this.wODocsHasBeeEdited = true;
  }

  public deleteWODocs(): void {
    const partialMessageKey =
      this.woBidmDocumentsTableData.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: 'global.' + partialMessageKey,
      accept: () => {
        this.woBidmDocumentsTableData.dataSelection.forEach((docTodDel) => {
          this.woBidmDocumentsResource.filter((doc) => (docTodDel as DocumentRow).docName !== doc.documentName);
        });

        this.woBidmDocumentsTableData.deleteDataSelection();
        this.setWODocAttributeAfterAnyUpdateAction();
      }
    });
  }

  public addStakeholder() {
    this.currentStakeholderIndex = -1;
    this.openModeStakeholder = ComponentOpenMode.Create;
    this.showAddStakeholderDialog = true;
  }

  public editStakeholder(): void {
    if (this.stakeholdersTableDataSource.hasDataSelection) {
      this.currentStakeholderIndex = this.stakeholdersTableDataSource.dataSrc.findIndex(
        (stakeholder) => stakeholder === this.stakeholdersTableDataSource.dataSelection[0]
      );
      this.openModeStakeholder = ComponentOpenMode.Read;
      this.showAddStakeholderDialog = true;
    }
    this.selectedStakeholder = this.stakeholdersTableDataSource.dataSelection[0]._obj as BidmWoAssignmentDTO;
  }

  public deleteStakeholders(): void {
    const partialMessageKey =
      this.stakeholdersTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedStakeholders'
        : 'confirmDeleteSelectedStakeholder';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.stakeholdersTableDataSource.dataSelection.forEach((stakeholder) => {
          if (!!stakeholder._obj) {
            const stakeholderToDelete: BidmWoAssignmentDTOId = {
              woId: stakeholder._obj.woId,
              projectId: stakeholder._obj.projectId,
              woAssignedTo: stakeholder._obj.woAssignedTo
            };
            this.woFormService.removeBidmWoAssignment(stakeholderToDelete).subscribe(() => {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteStakeholder'));
              this.stakeholdersTableDataSource.deleteDataSelection();
              this.loadStakeholdersTable();
            });
          }
        });
      }
    });
  }

  public onAddStakeholder(event: BidmWoAssignmentDTO): void {
    if (!!event && !!this.workOrder.projectId && !!this.workOrder.woId) {
      const saveBidmWoAssignmentInput: BidmWoAssignmentInput = {
        projectId: this.workOrder.projectId,
        woId: this.workOrder.woId,
        woAssignedTo: event.woAssignedTo,
        controller: event.controller
      };
      const addedStakeholder = this.stakeholdersTableDataSource.addData([this.createStakeholderRow(event)]);
      if (addedStakeholder) {
        this.woFormService.createBidmWoAssignment(saveBidmWoAssignmentInput).subscribe((_result) => {
          this.messageService.showSuccessMessage('global.successOnSave');
          this.loadStakeholdersTable();
        });
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('propertyValueAlreadyExists'));
    }
  }

  public onUpdateStakeholder(event: BidmWoAssignmentDTO): void {
    if (!!event) {
      const saveBidmWoAssignmentInput: BidmWoAssignmentInput = {
        projectId: this.workOrder.projectId,
        woId: this.workOrder.woId,
        woAssignedTo: event.woAssignedTo,
        controller: event.controller
      };
      const updatedStakeholder = this.stakeholdersTableDataSource.replaceData(
        this.stakeholdersTableDataSource.dataSelection[0],
        this.createStakeholderRow(event)
      );

      if (updatedStakeholder) {
        this.woFormService.updateBidmWoAssignment(saveBidmWoAssignmentInput).subscribe((_result) => {
          this.messageService.showSuccessMessage('global.successOnSave');
          this.loadStakeholdersTable();
          this.updateQualificationOnStakeholderDataSource();
        });
      }
      this.stakeholdersTableDataSource.dataSelection = [];
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('propertyValueAlreadyExists'));
    }
  }

  private createStakeholderRow(stakeholder: BidmWoAssignmentDTO): StakeholdersRow {
    const stakeholderRow: StakeholdersRow = {
      stakeholderName: this.getStakeholderNameById(stakeholder.woAssignedTo),
      isController: stakeholder.controller,
      _obj: stakeholder
    };

    return stakeholderRow;
  }

  private setActionLinkList(): void {
    const addWoLabelKey = this.getTranslateKey('addWo');
    const printLabelKey = this.getTranslateKey('print');
    const cancelPostLabelKey = this.getTranslateKey('cancelPost');
    const requestLabelKey = this.getTranslateKey('request');
    const confirmLabelKey = this.getTranslateKey('confirm');
    const cancelLabelKey = this.getTranslateKey('cancel');
    const openLabelKey = this.getTranslateKey('open');
    const closeLabelKey = this.getTranslateKey('close');
    this.translateService
      .get([
        addWoLabelKey,
        printLabelKey,
        cancelPostLabelKey,
        requestLabelKey,
        confirmLabelKey,
        cancelLabelKey,
        openLabelKey,
        closeLabelKey
      ])
      .subscribe((results: string[]) => {
        const addWoLabel: string = results ? results[addWoLabelKey] : 'Add Work order';
        const printLabel: string = results ? results[printLabelKey] : 'Print';
        const cancelPostLabel: string = results ? results[cancelPostLabelKey] : 'Cancel Postponement Request';
        const requestLabel: string = results ? results[requestLabelKey] : 'Cancel Postponement Request';
        const confirmLabel: string = results ? results[confirmLabelKey] : 'Confirm Work Completion';
        const cancelLabel: string = results ? results[cancelLabelKey] : 'Cancel Work Completion';
        const openLabel: string = results ? results[openLabelKey] : 'Open Work Order';
        const closeLabel: string = results ? results[closeLabelKey] : 'Close Work Order';
        let tmpTab: MenuItem[] = [];
        tmpTab = [
          {
            label: printLabel,
            command: () => {
              this.printJobCard();
            }
          }
        ];

        if (!this.isQualificationOngoing) {
          tmpTab.push({
            label: addWoLabel,
            command: () => {
              this.displayWorkOrderScreenEdit();
            }
          });
        }

        if (this.isPostPonement) {
          tmpTab.push({
            label: cancelPostLabel,
            command: () => {
              this.requestOrCancelPostponement();
            }
          });
        }

        if (
          this.totalElapsed === '0:00:00' &&
          !!this.woStatus &&
          (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
            this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
          !this.isPostPonement
        ) {
          tmpTab.push({
            label: requestLabel,
            command: () => {
              this.requestOrCancelPostponement();
            }
          });
        }

        if (
          (!!this.woStatus &&
            this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED) ||
          (!!this.woStatus &&
            (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
              this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
            this.operationTable.length === 0)
        ) {
          tmpTab.push({
            label: confirmLabel,
            command: () => {
              this.stratOrRestartWo(false);
            }
          });
        }

        if (
          (!!this.woStatus &&
            this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
            !this.isWoNeedCheck) ||
          (!!this.woStatus &&
            this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&
            !this.woStatus.isCritical)
        ) {
          tmpTab.push({
            label: cancelLabel,
            command: () => {
              this.stratOrRestartWo(false);
            }
          });
        }

        if (
          !!this.woStatus &&
          this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&
          this.isWoNeedCheck &&
          this.woStatus.isCritical
        ) {
          tmpTab.push({
            label: openLabel,
            command: () => {
              this.checkWorkOrder(false);
            }
          });
        }

        if (
          !!this.woStatus &&
          this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
          this.isWoNeedCheck &&
          this.woStatus.isCritical
        ) {
          tmpTab.push({
            label: closeLabel,
            command: () => {
              this.checkWorkOrder(false);
            }
          });
        }

        this.actionLinkList = tmpTab;
      });
  }

  public showButtonStartWo(): boolean {
    return (
      !!this.woStatus &&
      (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
      this.operationTable.length === 0
    );
  }

  public showButtonConfirmWorkCompletion(): boolean {
    return (
      !!this.woStatus &&
      this.operationTable.length === 0 &&
      this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING
    );
  }

  public showButtonCancelWorkCompletion(): boolean {
    return (
      (!!this.woStatus &&
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
        !this.isWoNeedCheck) ||
      (!!this.woStatus &&
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
        this.isCritical()) ||
      (!!this.woStatus &&
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED &&
        this.isCriticalWithoutOperation()) ||
      (!!this.woStatus &&
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
        this.isNotCriticalWithoutOperation())
    );
  }

  public disableDefectsTableButtonsInClosedStatus(): boolean {
    return (
      !!this.workDataDefect &&
      !!this.workDataDefect.workOrder &&
      this.workDataDefect.workOrder.calculatedStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE
    );
  }

  private setNavigationLinkList(): void {
    const logisticLabelKey = this.getTranslateKey('goodsMovements');
    const seeLabelKey = this.getTranslateKey('see');
    const openFieldLabelKey = this.getTranslateKey('openField');

    this.translateService.get([logisticLabelKey, seeLabelKey, openFieldLabelKey]).subscribe((results: string[]) => {
      const goodsMovementsLabel: string = results ? results[logisticLabelKey] : 'Goods Movements';
      const seeLabel: string = results ? results[seeLabelKey] : 'See Postponed Task Event';
      const openFieldLabel: string = results ? results[openFieldLabelKey] : 'Open FIELD';
      let tmpTab: MenuItem[] = [];
      tmpTab = [
        {
          label: goodsMovementsLabel,
          command: () => {
            this.callGoodsMovement();
          }
        }
      ];

      if (this.isPostPonement) {
        tmpTab.push({
          label: seeLabel,
          command: () => {
            this.openRequest();
          }
        });
      }

      if (this.sessionService.isSpecificDassault && !!this.woTask) {
        tmpTab.push({
          label: openFieldLabel,
          command: () => {
            this.openField();
          }
        });
      }

      this.navigationLinkList = tmpTab;
    });
  }

  public displayWorkOrderScreenEdit(): void {
    if (this.workOrder.projectId) {
      this.workPackageFormService.getBidmWorkOrdersStructureByProject(this.workOrder.projectId).subscribe((woList) => {
        this.workOrderList = this.flatDeep(woList);
        if (this.workOrder.projectId && this.workOrder.woId) {
          this.addWorkOrder = {
            projectId: this.workOrder.projectId,
            woId: this.workOrder.woId
          };
          this.displayWorkOrderEdit = true;
        }
      });
    }
  }

  private flatDeep(tree: TreeNode[]): BidmWorkOrderDTO[] {
    return tree.reduce(
      (acc, val) => [...acc, ...(val ? [val.data] : []), ...(val.children ? this.flatDeep(val.children) : [])],
      []
    );
  }

  public onAddWorkOrder(isCreated: boolean): void {
    if (isCreated) {
      this.updateInterface(false);
    }
  }

  private loadLists() {
    this.woFormService.woStatusList$.subscribe((list) => (this.statusList = list));
    this.woFormService.woTypeList$.subscribe((list) => (this.woTypeList = list));
    this.woFormService.loadMROCenterList().subscribe((result) => (this.mroCenterList = result));
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.statusList,
      this.woStatus ? this.woStatus.status : undefined
    );
  }

  private initToc() {
    this.toc = [
      {
        id: 'mainAnchor',
        anchor: this.mainAnchor,
        label: this.translateService.instant(this.getTranslateKey('mainInformation'))
      },
      {
        id: 'workPackageAnchor',
        anchor: this.workPackageAnchor,
        label: this.translateService.instant(this.getTranslateKey('workPackage'))
      },
      {
        id: 'progressAnchor',
        anchor: this.workOrderProgressAnchor,
        label: this.translateService.instant(this.getTranslateKey('workInProgress'))
      },
      {
        id: 'operationsAnchor',
        anchor: this.operationsAnchor,
        label: this.translateService.instant(this.getTranslateKey('operations'))
      },
      {
        id: 'commentAnchor',
        anchor: this.commentAnchor,
        label: this.translateService.instant(this.getTranslateKey('comment'))
      },
      {
        id: 'additionalWorkAnchor',
        anchor: this.additionalWorkAnchor,
        label: this.translateService.instant(this.getTranslateKey('additionalWork'))
      },
      {
        id: 'requestManagmentAnchor',
        anchor: this.requestManagmentAnchor,
        label: this.translateService.instant(this.getTranslateKey('requestManagment'))
      },
      {
        id: 'defectsAnchor',
        anchor: this.defectsAnchor,
        label: this.translateService.instant(this.getTranslateKey('defects'))
      },
      {
        id: 'taskDocumentsAnchor',
        anchor: this.taskDocumentsAnchor,
        label: this.translateService.instant(this.getTranslateKey('taskDocuments'))
      },
      {
        id: 'woDocumentsAnchor',
        anchor: this.woDocumentsAnchor,
        label: this.translateService.instant(this.getTranslateKey('woDocuments'))
      }
    ];
    this.registerPageTocEntrySelectedObservable();
  }

  private registerPageTocEntrySelectedObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.selectedAnchor = pageTocEntrySelected;
    });
  }

  public initDates(): void {
    this.dateStartPerformedDuration = undefined;
    this.dateEndPerformedDuration = undefined;
    this.dateStartElapsedDuration = undefined;
    this.dateEndElapsedDuration = undefined;
  }

  public resetPerformedDates(): void {
    this.dateStartPerformedDuration = undefined;
    this.dateEndPerformedDuration = undefined;
  }

  public resetElapsedDates(): void {
    this.dateStartElapsedDuration = undefined;
    this.dateEndElapsedDuration = undefined;
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  public onSelectEquipment(equipment: BidoEquipmentLWO): void {
    this.assetRepresentation = StringUtils.orEmpty(equipment.equipmentCode);
  }

  public requestOrCancelPostponement(): void {
    if (!this.isPostPonement && !this.woStatus.workPostponementRequestBidoNotificationData) {
      this.displayRequestPostponement = true;
    } else {
      this.cancelPostponement();
    }
  }

  public openRequest(): void {
    if (
      this.woStatus.workPostponementRequestBidoNotificationData &&
      this.woStatus.workPostponementRequestBidoNotificationData.notificationCode
    ) {
      const dto: BidoNotificationOutputDTO = {
        notificationCode: this.woStatus.workPostponementRequestBidoNotificationData.notificationCode,
        typeCode: this.woStatus.workPostponementRequestBidoNotificationData.typeCode
      };
      this.openEvent(dto);
    }
  }

  public onValidateRequest(requestReason: string): void {
    this.isPostPonement = true;
    this.setLinkLists();
    if (this.user && this.user.login) {
      const workPostponementInput: WorkPostponementInput = {
        bidmWorkOrderDTO: this.workOrder,
        postponementReason: requestReason
      };
      this.woFormService.createWorkPostponementRequest(workPostponementInput).subscribe(() => {
        const calculateWorkOrderImput: CalculateWorkOrderImput = {
          workOrderData: this.workOrder,
          fromLineMaintenance: false
        };
        this.woFormService.calculateWorkOrderStatus(calculateWorkOrderImput).subscribe((calculateWorkOrderOutput) => {
          this.woStatus = calculateWorkOrderOutput.workOrderDetail;
          this.initWoDescription();
          this.setLinkLists();
          this.updateInterface(false);
        });
      });
    }
  }

  public cancelPostponement(): void {
    if (
      this.woStatus.workPostponementRequestBidoNotificationData &&
      this.woStatus.workPostponementRequestBidoNotificationData.notificationCode
    ) {
      const notificationId: BidoNotificationDTOId = {
        notificationCode: this.woStatus.workPostponementRequestBidoNotificationData.notificationCode
      };
      this.woFormService.cancelWorkPostponementRequest(notificationId).subscribe(() => {
        this.isPostPonement = false;
        this.setLinkLists();
        const calculateWorkOrderImput: CalculateWorkOrderImput = {
          workOrderData: this.workOrder,
          fromLineMaintenance: false
        };
        this.woFormService.calculateWorkOrderStatus(calculateWorkOrderImput).subscribe((calculateWorkOrderOutput) => {
          this.woStatus = calculateWorkOrderOutput.workOrderDetail;
          this.initWoDescription();
          this.setLinkLists();
          this.updateInterface(false);
        });
      });
    }
  }

  public editAdditionalWork() {
    this.isAdditionnalWorkEdit = true;
  }

  public saveAdditionalWork() {
    const missingFields = this.checkMandatoryFields({
      woAdditionalWork: this.woAdditionalWork
    });

    if (missingFields.length > 0) {
      this.messageService.showErrorMessage('global.missingFields');
    } else {
      this.workOrder.woAdditionalWork = this.woAdditionalWork;
      this.saveWorkOrder();
      this.isAdditionnalWorkEdit = false;
    }
  }

  public editComments() {
    this.isCommentEdit = true;
  }

  public saveComents() {
    const missingFields = this.checkMandatoryFields({
      woComments: this.woComments
    });

    if (missingFields.length > 0) {
      this.messageService.showErrorMessage('global.missingFields');
    } else {
      this.workOrder.woComments = this.woComments;
      this.saveWorkOrder();
      this.isCommentEdit = false;
    }
  }

  public saveWOBidmDoc() {
    const missingFields = this.checkMandatoryFields({
      woBidmDocumentsTableData: this.woBidmDocumentsTableData.dataSrc
    });

    if (missingFields.length > 0) {
      this.messageService.showErrorMessage('global.missingFields');
    } else {
      this.workOrder.bidmDocumentAddedList = this.woBidmDocumentsTableData
        .getAddedList()
        .map((elt) => this.findBidmDocumentByDocumentRow(elt));
      this.workOrder.bidmDocumentUpdatedList = this.woBidmDocumentsTableData
        .getUpdatedList()
        .map((elt) => this.findBidmDocumentByDocumentRow(elt));
      this.workOrder.bidmDocumentDeletedList = this.woBidmDocumentsTableData.getDeletedList().map((elt) => {
        return {
          documentId: this.findBidmDocumentByDocumentRow(elt).documentId as string
        };
      });
      this.saveWorkOrder();
      this.woBidmDocumentsTableData.dataSelection = [];
      this.selectedWOBidmDocument = {};
      this.wODocsHasBeeEdited = false;
    }
  }

  public saveWorkOrder(onSaveSucess?: Function) {
    if (this.componentData.objectId) {
      const param: UpdateJobCardInput = {
        bidmWorkOrderDTO: this.workOrder,
        woComment: this.workOrder.woComments,
        woAdditionalData: this.workOrder.woAdditionalWork
      };
      this.woFormService.updateWorkOrder(param).subscribe(() => {
        this.woBidmDocumentsTableData.clearHistory();
        this.loadWorkOrder();
        if (onSaveSucess) {
          onSaveSucess();
        }
        /* this.woFormService.findBidmWorkOrder(this.bidmWorkOrderId).subscribe((result) => {
          this.woStatus = result.workOrderStatusDetail;
          this.calculateAndUpdateBidmWorkOrderStatus();
          this.initWoDescription();
          this.setLinkLists();
          if (this.woStatus.status) {
            this.woStatusProgressType = this.woStatus.status.slice(2);
          }
          this.woStatusProgressPercent = Math.floor(Number(result.statusPercent)).toString();
          this.updateInterface(false);
        });
        this.woFormService.findBidmDocumentsByWorkOrder(this.bidmWorkOrderId).subscribe((result: BidmDocumentDTO[]) => {
          this.woBidmDocumentsResource = [...result];
          this.woBidmDocumentsTableData.setData(result.map((doc) => this.createDocumentRow(doc)));
        });*/
      });
    }
  }

  public callGoodsMovement(): void {
    const goodsMovementInput: GoodsMovementInput = {
      workOrderId: this.workOrder.woId,
      workPackageId: this.workOrder.projectId
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_WORK_ORDER_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(goodsMovementInput)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openStaffPlanning(): void {
    const defaultDateToAdd = 15;
    const startDate = this.woStatus.startDate ? this.woStatus.startDate : (this.workPackage.projectStartDate as Date);
    const endDate: Date = this.woStatus.endDate
      ? this.woStatus.endDate
      : this.workPackage.projectEndDate
      ? this.workPackage.projectEndDate
      : moment(startDate)
          .add(defaultDateToAdd, 'day')
          .toDate();
    const componentData: StaffPlanningInput = {
      startDate,
      endDate
    };
    if (this.bidtWarehouseDTO) {
      this.openStaffPlanningFormWithWarehouse(componentData);
    } else if (this.workPackage && this.workPackage.bireRepairCenterCode) {
      this.openStaffPlanningFormWithWPReparirCenterCode(componentData);
    } else {
      this.openStaffPlanningSearch(componentData);
    }
  }

  private openStaffPlanningFormWithWarehouse(componentData: StaffPlanningInput): void {
    if (this.bidtWarehouseDTO && this.bidtWarehouseDTO.bidtSiteId) {
      componentData.warehouseId = this.workOrder.bidtWarehouseId;
      componentData.warehouseName = this.bidtWarehouseDTO.whName;
      this.woFormService.findBidtSiteById(this.bidtWarehouseDTO.bidtSiteId).subscribe((site) => {
        this.openStaffPlanningFormBySite(componentData, site);
      });
    }
  }

  private openStaffPlanningFormWithWPReparirCenterCode(componentData: StaffPlanningInput): void {
    if (this.workPackage && this.workPackage.bireRepairCenterCode) {
      this.woFormService
        .findBidtSiteByCriteria({ siteCode: this.workPackage.bireRepairCenterCode })
        .subscribe((sites) => {
          if (sites && sites.length > 0) {
            this.openStaffPlanningFormBySite(componentData, sites[0]);
          }
        });
    }
  }

  private openStaffPlanningFormBySite(componentData: StaffPlanningInput, site: BidtSiteDTO) {
    componentData.siteId = site.siteId;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.HR_EMPLOYEE_PLANNING_FORM,
      openMode: ComponentOpenMode.Read
    };
    componentData.siteName = site.siteName;
    if (!!site.bidtCompanyId) {
      componentData.companyId = Number(site.bidtCompanyId);
    }
    data.objectId = this.serializationService.serialize(componentData);
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openStaffPlanningSearch(componentData: StaffPlanningInput): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.HR_EMPLOYEE_PLANNING_SEARCH,
      openMode: ComponentOpenMode.Read
    };
    data.objectId = this.serializationService.serialize(componentData);
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public callMaterialAvailability(): void {
    const goodsMovementInput: GoodsMovementInput = {
      workOrderId: this.workOrder.woId,
      workPackageId: this.workOrder.projectId
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_AVAILABILITY_WORK_ORDER_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(goodsMovementInput)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public deleteOperation(): void {
    // #TODO
  }

  /**
   * Operation on edit click
   */
  public openEditDuration(): void {
    this.operationSelectedIndex = this.operationTable.findIndex(
      (res) => res.bireOpeCode === this.selectedOperations[0].bireOpeCode
    );
    this.displayEditDuration = true;
  }

  /**
   * Validate duration
   */
  public onValidateDuration(ev: DurationInterface, source: number) {
    if (ev.elapsedTime && ev.performedDuration) {
      const DEFAULT_DISPLAY_TIME = '0:00:00';
      const TIME = 60;
      const NUM = 1000;
      const pHour = ev.performedDuration.getHours();
      const pMin = ev.performedDuration.getMinutes();
      const pSec = ev.performedDuration.getSeconds();

      const eHour = ev.elapsedTime.getHours();
      const eMin = ev.elapsedTime.getMinutes();
      const eSec = ev.elapsedTime.getSeconds();

      let newDuration = (pHour * TIME * TIME + pMin * TIME + pSec) * NUM;
      let newElapsed = (eHour * TIME * TIME + eMin * TIME + eSec) * NUM;
      const actualDuration = newDuration;
      const actualElapsed = newElapsed;

      if (source === 0) {
        if (!!this.selectedOperations[0] && this.selectedOperations[0].opePerformedDuration) {
          newDuration += this.selectedOperations[0].opePerformedDuration;
        }

        if (!!this.selectedOperations[0] && this.selectedOperations[0].opePerformedElapsed) {
          newElapsed += this.selectedOperations[0].opePerformedElapsed;
        }
      }

      if (this.timeToDisplay(actualDuration) !== DEFAULT_DISPLAY_TIME) {
        this.operationTable[this.operationSelectedIndex].opePerformedDuration = newDuration;
        this.operationTable[this.operationSelectedIndex].opePerformedDurationDisplay = this.timeToDisplay(newDuration);

        this.operationTable[this.operationSelectedIndex].opePerformedElapsed = newElapsed;
        this.operationTable[this.operationSelectedIndex].opePerformedElapsedDisplay = this.timeToDisplay(newElapsed);

        if (
          !this.operationTable[this.operationSelectedIndex].opeStartDateDisplay ||
          !this.operationTable[this.operationSelectedIndex].opePerformedBy
        ) {
          this.operationTable[this.operationSelectedIndex].opeStartDateDisplay = this.getFullDateFormatWithDate(
            ev.performedDuration
          );
          if (!!this.sessionService.loggedUser && !!this.sessionService.loggedUser.login) {
            this.operationTable[
              this.operationSelectedIndex
            ].opePerformedOnDisplay = this.sessionService.loggedUser.login;
          }
        }

        if (source === 0) {
          // add entry in log table
          this.addedBidmTimeTracking.push({
            bidmTimeTrackingDTO: {
              bireOpeCode: this.selectedOperations[0].bireOpeCode,
              bireOpeVersion: this.selectedOperations[0].bireOpeVersion,
              ttPerformedClockOut: new Date(),
              ttPerformedDuration: actualDuration,
              ttPerformedElapsed: actualElapsed,
              woId: this.workOrder.woId,
              projectId: this.workOrder.projectId
            },
            isInDB: false,
            performedBy: this.operationTable[this.operationSelectedIndex].opePerformedOnDisplay,
            operation: this.selectedOperations[0].bireOpeCode,
            clockOutText: this.dateService.dateWithHourMinSecToString(new Date()),
            durationText: this.timeToDisplay(actualDuration),
            duration: actualDuration,
            elapsed: actualElapsed,
            elapsedText: this.timeToDisplay(actualElapsed),
            isDelete: true,
            isEditable: true
          });
        }
      }
    }
  }

  /**
   * Dialog Operation Log
   */
  public openOperationLog(): void {
    this.fetchTimeTracking();
  }

  /**
   * API To fetch time tracking list
   */
  private fetchTimeTracking() {
    const input: BidmTimeTrackingByOperationInputDTO = {
      projectId: this.workOrder.projectId as string,
      woId: this.workOrder.woId as string,
      bidmOperationDTO: this.selectedOperations[0],
      opeCode: this.selectedOperations[0].bireOpeCode,
      opeVersion: this.selectedOperations[0].bireOpeVersion
    };

    this.woFormService.fetchBidmTimeTrackings(input).subscribe((res) => {
      if (!!res) {
        this.bidmTimeTracking = res;
      }
      this.displayTimeTracking = true;
    });
  }

  /**
   * Validate event of time tracking popup
   */
  public onValidateTimeTracking(ev: TimeTrackingOutput) {
    this.addedBidmTimeTracking = ev.addedBidmTimeTracking || [];
    if (!!ev.durationInterface && !!ev.durationInterface.elapsedTime && !!ev.durationInterface.performedDuration) {
      this.onValidateDuration(ev.durationInterface, 1);
    }
  }

  public refresh(): void {
    this.documentTableDisplayed = [];
    this.loadWorkOrder();
  }

  public loadWorkOrder() {
    this.isLoadingOperationsTable = true;
    this.woFormService.findBidmWorkOrder(this.bidmWorkOrderId).subscribe((result) => {
      if (result === null) {
        this.messageService.showErrorMessage(this.getTranslateKey('notFound'));
      } else {
        this.displayComponentContext(StringUtils.orEmpty(result.bidmWorkOrder.woCode), false);
        this.workOrderDTOIdList = [
          {
            projectId: result.bidmWorkOrder.projectId as string,
            woId: result.bidmWorkOrder.woId as string
          }
        ];
        this.workOrder = result.bidmWorkOrder;

        this.initWoAssetMangement();

        this.procurementRequestsTableService
          .findProcReqItemsAndStockQuantityIndicators(this.workOrder, undefined)
          .subscribe((proqReq: ProcurementRequestAndIndicatorsOutputDTO[]) => {
            this.procurementRequests = proqReq;
          });
        this.woAdditionalWork = result.bidmWorkOrder.woAdditionalWork;
        this.woComments = result.bidmWorkOrder.woComments;
        this.relatedItem = result.relatedItem;
        this.woItemDTO = {
          familyCode: this.workOrder.bireItemFamilyCode,
          variantCode: this.workOrder.bireItemVariantCode,
          chapter: this.workOrder.bireItemChapter,
          section: this.workOrder.bireItemSection,
          subject: this.workOrder.bireItemSubject,
          sheet: this.workOrder.bireItemSheet,
          marks: this.workOrder.bireItemMarks,
          structureType: this.awPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
        };
        this.workPackage = result.bidmProjectData;

        if (this.workPackage) {
          const equipementId: BidoEquipmentDTOId = {
            equipmentCode: this.workPackage.assetCode
          };
          this.woStatus = result.workOrderStatusDetail;
          this.initWoDescription();
          this.setLinkLists();
          this.woFormService.findBidoEquipment(equipementId).subscribe((wpEquipementDtoDto) => {
            this.wpEquipementDto = wpEquipementDtoDto;

            if (this.workPackage && this.workOrder && this.wpEquipementDto && this.wpEquipementDto.equipmentCode) {
              this.workDataDefect = {
                workOrder: this.workOrder,
                workPackage: this.workPackage,
                equipementCode: this.wpEquipementDto.equipmentCode
              };
            }

            if (this.woStatus.bidoEquipmentData) {
              this.wpEquipementDto = this.woStatus.bidoEquipmentData;
            }

            if (this.woStatus && this.wpEquipementDto) {
              this.woEquipement = BidoEquipmentUtils.toString(this.wpEquipementDto);
            }
            if (
              this.wpEquipementDto &&
              (this.wpEquipementDto.equipmentFunction ===
                AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
                this.wpEquipementDto.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY ||
                this.wpEquipementDto.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY)
            ) {
              this.isGroundEquipment = true;
            }
          });
        }

        this.calculateWorkOrderStatus();
        this.woTask = result.woTask;

        if (this.woStatus.status === AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED) {
          this.isPostPonement = true;
          this.setLinkLists();
        }

        if (this.woStatus.status) {
          this.woStatusProgressType = this.woStatus.status.slice(2);
          this.woStatusProgressPercent = Math.floor(Number(result.statusPercent)).toString();
        }
        this.loadUserWorkflow(this.woStatus.status);

        this.wpAircraftType = result.wpAircraftType;

        if (result.woAssignedTo) {
          const userDtoId: BidoUserDTOId = {
            userId: result.woAssignedTo
          };
          this.woFormService.findUserById(userDtoId).subscribe((user) => {
            if (this.user) {
              if (user.userId === this.user.userId) {
                this.updateOpenMode(ComponentOpenMode.Write);
              } else if (result.bidmProjectData.receivingAssignedTo) {
                this.woFormService
                  .findUserById({ userId: result.bidmProjectData.receivingAssignedTo })
                  .subscribe((receivingUser) => {
                    if (this.user && receivingUser.userId === this.user.userId) {
                      this.updateOpenMode(ComponentOpenMode.Write);
                    }
                  });
              }
            }
            if (user.employeeId) {
              this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe((employee) => {
                this.woAssignedTo = `${this.getEmployeeText(employee, user)}`;
              });
            } else {
              this.woAssignedTo = `${this.getUserText(user)}`;
            }
          });
        } else {
          this.updateOpenMode(ComponentOpenMode.Write);
        }

        if (result.woPerformedBy) {
          const userDtoId: BidoUserDTOId = {
            userId: result.woPerformedBy
          };
          this.woFormService.findUserById(userDtoId).subscribe((user) => {
            if (user.employeeId) {
              this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe((employee) => {
                this.woPerformedBy = `${this.getEmployeeText(employee, user)} (${moment(
                  result.bidmWorkOrder.woPerformedOn
                ).format('MM/DD/YYYY hh:mm')})`;
              });
            } else {
              this.woPerformedBy = `${this.getUserText(user)} (${moment(result.bidmWorkOrder.woPerformedOn).format(
                'MM/DD/YYYY hh:mm'
              )})`;
            }
          });
        }

        if (result.woCheckedBy) {
          const userDtoId: BidoUserDTOId = {
            userId: result.woCheckedBy
          };
          this.woFormService.findUserById(userDtoId).subscribe((user) => {
            if (user.employeeId) {
              this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe((employee) => {
                this.woCheckedBy = `${this.getEmployeeText(employee, user)} (${moment(
                  result.bidmWorkOrder.woCheckedOn
                ).format('MM/DD/YYYY hh:mm')})`;
              });
            } else {
              this.woCheckedBy = `${this.getUserText(user)} (${moment(result.bidmWorkOrder.woCheckedOn).format(
                'MM/DD/YYYY hh:mm'
              )})`;
            }
          });
        }
        this.totalDuration = result.totalDuration;
        this.totalElapsed = result.totalElapsed;

        this.setLinkLists();
        this.qualificationNeeded = result.qualificationNeeded;
        this.initWorkOrderWithQualificationOngoing();
        const bireOperationDataDTO = 'bireOperationData'; // #TODO: interface to be declared
        this.operationTable = [];
        if (result.workOrderStatusDetail.bidmOperationDataList) {
          result.workOrderStatusDetail.bidmOperationDataList.forEach((bidmOperation: BidmOperationDTO) => {
            const jobCardOperation: JobCardOperation = bidmOperation;
            jobCardOperation.opeDesignation = bidmOperation[bireOperationDataDTO].ope_DESIGNATION;
            jobCardOperation.opeQualification = bidmOperation[bireOperationDataDTO].ope_QUALIFICATION;
            jobCardOperation.opeSequence = bidmOperation[bireOperationDataDTO].ope_SEQUENCE_NUMBER;
            jobCardOperation.isOpeOnPerformed = false;
            jobCardOperation.isOpeOnElapsed = false;
            jobCardOperation.isCriticalTask = result.workOrderStatusDetail.isCritical;
            this.operationTable.push(jobCardOperation);
          });
          this.initEmployeeQualificationsStatus();
        }
        // this.operationTable = result.workOrderStatusDetail.bidmOperationDataList || []; //.map((op) => op[bireOperationDataDTO]) || [];
        this.updateInterface(true);
        this.isLoadingOperationsTable = false;
        this.initOperationTable();
        this.ctrlStock();
        this.loadWorkCenter();

        if (!!this.workOrder.assetPn && !!this.workOrder.assetSn) {
          this.displayPrintIdLabel = true;
        }
      }
    });
  }

  private calculateWorkOrderStatus(): void {
    const calculateWorkOrderImput: CalculateWorkOrderImput = {
      workOrderData: this.workOrder,
      fromLineMaintenance: false
    };
    this.woFormService.calculateWorkOrderStatus(calculateWorkOrderImput).subscribe((calculateWorkOrderOutput) => {
      this.woStatus.status = calculateWorkOrderOutput.workOrderDetail.status;
      this.originText = calculateWorkOrderOutput.originText;
      this.setLinkLists();
      if (
        !!this.originText &&
        this.wpEquipementDto &&
        AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK === this.workOrder.woType
      ) {
        const assetWorkOrderOriginInput: AssetWorkOrderOriginInput = {
          woType: this.workOrder.woType,
          woSource: this.workOrder.woSource,
          evolutionType: this.evolutionType,
          familyVariantCode: this.wpEquipementDto.familyVariantCode
        };
        this.woFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe((assetOutput) => {
          if (!!assetOutput.bireTaskDTOId) {
            // open task form
            const bireTaskDTO: BireTaskDTOId = assetOutput.bireTaskDTOId;
            this.getTask(bireTaskDTO);
          }
        });
      } else if (!!this.woTask && AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === this.workOrder.woType) {
        const bireTaskDTO: BireTaskDTOId = {
          taskCode: BidmWorkOrderUtils.getTaskCodeFromTaskId(this.woTask),
          taskVersion: BidmWorkOrderUtils.getTaskVersionFromTaskId(this.woTask)
        };
        this.getTask(bireTaskDTO);
      } else if (this.woStatus.bidmOperationDataList && this.woStatus.bidmOperationDataList.length > 0) {
        if (
          this.woStatus.bidmOperationDataList[0].bireTaskCode &&
          this.woStatus.bidmOperationDataList[0].bireTaskVersion
        ) {
          const bireTaskId: BireTaskDTOId = {
            taskCode: this.woStatus.bidmOperationDataList[0].bireTaskCode,
            taskVersion: this.woStatus.bidmOperationDataList[0].bireTaskVersion
          };
          this.getTask(bireTaskId);
        }
      }
      if (calculateWorkOrderOutput.evolutionType) {
        this.evolutionType = calculateWorkOrderOutput.evolutionType;
      }
    });
  }

  private loadWorkCenter(): void {
    if (this.workOrder.bidtWarehouseId) {
      this.woFormService.getWarehouseById(this.workOrder.bidtWarehouseId).subscribe((warehouse) => {
        this.bidtWorkCenter = StringUtils.orEmpty(warehouse.whName);
        this.bidtWarehouseDTO = warehouse;
      });
    }
  }

  private loadPostponementConf(): void {
    this.isAskRequestConf = false;
    this.iscancelPostConf = false;
    if (
      this.totalElapsed === '0:00:00' &&
      !!this.woStatus &&
      (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
      !this.isPostPonement
    ) {
      this.isAskRequestConf = true;
    }

    if (this.isPostPonement) {
      this.iscancelPostConf = true;
    }
  }

  private updateInterface(withChart: boolean): void {
    if (withChart) {
      this.opStatusList = this.woStatus.bidmOperationDataList
        ? this.woStatus.bidmOperationDataList.map((op) => op.opeStatus)
        : [];
      this.updateChart();
    }
    const status = this.statusList.filter((s) => s.value === this.woStatus.status).map((s) => s.label);
    this.pageTitle = `${this.workOrder.woCode} - ${status}`;
  }

  private initChart(): void {
    this.chartDataset = [
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_SIMULATED],
        value: 0,
        color: AppConstants.COLOR_GREY,
        label: this.translateService.instant(this.getTranslateKey('chartSimulated'))
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED],
        value: 0,
        color: AppConstants.COLOR_GREY,
        label: this.translateService.instant(this.getTranslateKey('chartPlanned'))
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED],
        value: 0,
        color: AppConstants.COLOR_GREY,
        label: this.translateService.instant(this.getTranslateKey('chartReleased'))
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING],
        value: 0,
        color: AppConstants.COLOR_BLUE_LIGHT,
        label: this.translateService.instant(this.getTranslateKey('chartOngoing'))
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED],
        value: 0,
        color: AppConstants.COLOR_BLUE_LIGHT,
        label: this.translateService.instant(this.getTranslateKey('chartToBeConfirmed'))
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED],
        value: 0,
        color: AppConstants.COLOR_BLUE_DARK,
        label: this.translateService.instant(this.getTranslateKey('chartPerformed'))
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE],
        value: 0,
        color: AppConstants.COLOR_GREEN,
        label: this.translateService.instant(this.getTranslateKey('chartClose'))
      } /*,
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONED],
        value: 0,
        color: AppConstants.COLOR_GREEN,
        label: this.translateService.instant(this.getTranslateKey('chartPostponed'))
      },
      {
        statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED],
        value: 0,
        color: AppConstants.COLOR_YELLOW,
        label: this.translateService.instant(this.getTranslateKey('chartPostponementRequest'))
      }*/
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
  }

  private updateChart(): void {
    // init charts values
    this.chartDataset.map((d) => {
      d.value = 0;

      return d;
    });

    this.calculateChart();

    this.chartData.datasets[0].data = this.chartDataset.map((cd) => cd.value);
    this.chartData = { ...this.chartData };
  }

  private calculateChart() {
    this.opStatusList.forEach((status) => {
      this.chartDataset.forEach((cd) => {
        if (cd.statusList.includes(status || '')) {
          cd.value++;
        }
      });
    });
  }

  public toggleWorkPackageExpand(row: JobCardOperation): void {
    row._expand = !row._expand;
  }

  public toggleInstallRemoveExpand(row: JobCardWoAssetManagement): void {
    row._expand = !row._expand;
  }

  private setChartOptions(): void {
    this.chartOptions = {
      title: {
        display: true,
        text: this.translateService.instant(this.getTranslateKey('operations'))
      },
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

  public printJobCard(): void {
    this.showSaveSpinner = true;
    if (this.workOrder.woId && this.workOrder.projectId) {
      const bidmWorkOrderId: BidmWorkOrderDTOId = {
        woId: this.workOrder.woId,
        projectId: this.workOrder.projectId
      };
      this.woFormService.generateJobcard(bidmWorkOrderId).subscribe({
        next: (jobcard) => {
          FileUtils.downloadFile(jobcard.fileContent, jobcard.fileName);
          this.showSaveSpinner = false;
        }
      });
    }
  }

  public initTablesHeader(): void {
    this.operationTableCols = [
      { field: 'sequence', alignment: 'center', width: '2.5%' },
      { field: 'bireOpeCode', alignment: 'center', width: '10%' },
      { field: 'opeDesignation', alignment: 'left', width: '30%' },
      { field: 'opePerformedDuration', alignment: 'center', width: '10%' },
      { field: 'opePerformedElapsed', alignment: 'center', width: '10%' },
      { field: 'achievement', alignment: 'center', width: '7.5%' },
      { field: 'opeStatusDisplay', alignment: 'center', width: '7.5%' }
    ];

    this.documentsTableCols = [
      { field: 'docTask', alignment: 'left' },
      { field: 'docName', alignment: 'left' },
      { field: 'docExternal', alignment: 'left' },
      { field: 'docExtension', alignment: 'left' },
      { field: 'docSize', alignment: 'left' },
      { field: 'docPublicationDate', alignment: 'left' },
      { field: 'docDescription', alignment: 'left' }
    ];

    this.woAssetManagementTableCols = [
      { field: 'decision', alignment: 'left', width: '10%' },
      { field: 'superiorAsset', alignment: 'left', width: '10%' },
      { field: 'item', alignment: 'left', width: '10%' },
      { field: 'pn', alignment: 'left', width: '10%' },
      { field: 'sn', alignment: 'left', width: '10%' },
      { field: 'status', alignment: 'left', width: '10%' },
      { field: 'eventDate', alignment: 'left', width: '10%' },
      { field: 'event', alignment: 'left', width: '10%' }
    ];
    this.initBidmDocumentTableData();
    this.initStakeholdersTableDataSource();
  }

  private initOperationTable() {
    const opeCheckUsers: BidoUserDTOId[] = [];
    const opePerformedUsers: BidoUserDTOId[] = [];
    const operationsList: BidmOperationDTO[] = [];

    this.operationTable.forEach((operationRow) => {
      if (operationRow.opeStatus) {
        if (operationRow.opeStatus !== this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
          this.isWoNeedCheck = false;
          this.setLinkLists();
        }
        operationRow.opeStatusDisplay = operationRow.opeStatus.slice(2);
      }

      if (operationRow.opeOpeningDate) {
        operationRow.opeStartDateDisplay = this.getFullDateFormatWithDate(operationRow.opeOpeningDate);
      }

      if (operationRow.opeCheckedOn) {
        operationRow.opeCheckOnDisplay = this.getFullDateFormatWithDate(operationRow.opeCheckedOn);
      }
      const bireOperationDataDTO = 'bireOperationData';
      if (operationRow[bireOperationDataDTO].ope_DURATION_TIME) {
        this.changeOpeStdDurationDisplay(operationRow, operationRow[bireOperationDataDTO].ope_DURATION_TIME);
      } else {
        const noDurationTime = 0;
        this.changeOpeStdDurationDisplay(operationRow, noDurationTime);
      }

      if (operationRow.opePerformedOn) {
        operationRow.opePerformedOnDisplay = this.getFullDateFormatWithDate(operationRow.opePerformedOn);
      }

      // initialize performed Duration and Elapsed duration
      if (!operationRow.opePerformedDuration && !operationRow.opePerformedElapsed) {
        operationRow.opePerformedDuration = 0;
        operationRow.opePerformedElapsed = 0;
      }
      this.changeOpePerformedDurationDisplay(operationRow);
      this.changeOpePerformedElapsedDisplay(operationRow);

      // create list of userDTOId for checkBy
      if (operationRow.opeCheckedBy) {
        const userDtoId: BidoUserDTOId = {
          userId: operationRow.opeCheckedBy
        };
        opeCheckUsers.push(userDtoId);
      }

      // create list of userDTOId for performedBy
      if (operationRow.opePerformedLastBy) {
        const userDtoId: BidoUserDTOId = {
          userId: operationRow.opePerformedLastBy
        };
        opePerformedUsers.push(userDtoId);
      }

      // create list of operation
      if (operationRow) {
        operationsList.push(operationRow);
      }
    });

    const observableListCheckBy: Observable<BidoUserDTO>[] = [];
    const observableListPerformedBy: Observable<BidoUserDTO>[] = [];
    const listStatusPercentWrapper: { [key: string]: Observable<number> } = {};

    opeCheckUsers.forEach((user) => {
      observableListCheckBy.push(this.woFormService.findUserById(user));
    });
    forkJoin(observableListCheckBy).subscribe((userCheckByList) => {
      for (let i = 0; i < userCheckByList.length; i++) {
        this.operationTable[i].opeCheckedBy = userCheckByList[i].userId;
        if (!!userCheckByList[i].employeeId) {
          this.woFormService.getEmployeeById(Number(userCheckByList[i].employeeId)).subscribe((employee) => {
            this.operationTable[i].opeCheckByDisplay = this.getEmployeeText(employee, userCheckByList[i]);
          });
        } else {
          this.operationTable[i].opeCheckByDisplay = this.getUserText(userCheckByList[i]);
        }
      }
    });

    opePerformedUsers.forEach((user) => {
      observableListPerformedBy.push(this.woFormService.findUserById(user));
    });
    forkJoin(observableListPerformedBy).subscribe((userPerformedByList) => {
      for (let i = 0; i < userPerformedByList.length; i++) {
        this.operationTable[i].opePerformedLastBy = userPerformedByList[i].userId;
        if (!!userPerformedByList[i].employeeId) {
          this.woFormService.getEmployeeById(Number(userPerformedByList[i].employeeId)).subscribe((employee) => {
            this.operationTable[i].opePerformedLastByDisplay = this.getEmployeeText(employee, userPerformedByList[i]);
          });
        } else {
          this.operationTable[i].opePerformedLastByDisplay = this.getUserText(userPerformedByList[i]);
        }
      }
    });

    operationsList.forEach((ope) => {
      const bireOpeRow = 'bireOperationData';
      const bireOperationDtoRow: BireOperationDTO = {
        opeDurationTime: ope[bireOpeRow].ope_DURATION_TIME
      };
      const progressFromOperationStatusInput: ProgressFromOperationStatusInput = {
        bireOperationDto: bireOperationDtoRow,
        bidmOperationDto: ope
      };

      listStatusPercentWrapper[ope[bireOpeRow].ope_CODE] = this.woFormService.getProgressFromOperationStatus(
        progressFromOperationStatusInput
      );
    });
    forkJoin(listStatusPercentWrapper).subscribe((statusPercentList) => {
      Object.keys(statusPercentList).forEach((key) => {
        const bireOpeRow = 'bireOperationData';
        const operationRow = this.operationTable.find((row) => row[bireOpeRow].ope_CODE === key);
        if (operationRow) {
          operationRow.opeStatusPercent = Math.floor(statusPercentList[key]).toString();
        }
      });
    });

    this.operationTable.sort((a, b): number => {
      if (a.opeSequence !== undefined && b.opeSequence !== undefined && a.opeSequence !== b.opeSequence) {
        return a.opeSequence - b.opeSequence;
      } else {
        if (!!a.bireOpeCode && !!b.bireOpeCode) {
          const boll = a.bireOpeCode.localeCompare(b.bireOpeCode);

          return boll;
        } else {
          return 0;
        }
      }
    });
  }

  private getEmployeeText(employee: BidtEmployeeDTO, user: BidoUserDTO): string {
    if (employee.employeeNumber) {
      const opeDisplay = `${employee.employeeNumber} (${user.firstname} ${user.lastname})`;

      return opeDisplay;
    } else {
      const opeDisplay = `${user.firstname} ${user.lastname}`;

      return opeDisplay;
    }
  }

  private getUserText(user: BidoUserDTO): string {
    const opeDisplay = `${user.firstname} ${user.lastname}`;

    return opeDisplay;
  }

  public resetCheck(row: JobCardOperation) {
    row.opeCheckedOn = undefined;
    row.opeCheckOnDisplay = undefined;
    row.opeCheckedBy = undefined;
    row.opeCheckByDisplay = undefined;
  }

  public performOperation(row: JobCardOperation, eSign: boolean) {
    this.resetCheck(row);
    if (!row.isOpeOnElapsed) {
      if (
        row.opeStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED ||
        row.opeStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE
      ) {
        if (!!row.opePerformedDuration || !!row.opePerformedElapsed) {
          row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING;
        } else {
          row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED;
        }
        row.opeClosingDate = undefined;
        row.opePerformedBy = undefined;
        row.opePerformedOn = undefined;
        row.opePerformedOnDisplay = undefined;
        row.opePerformedWithEsign = false;
      } else {
        const currentDate = moment().unix();
        row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;

        if (this.user) {
          row.opePerformedBy = this.user.userId;
          row.opePerformedLastBy = this.user.userId;
          row.opePerformedLastByDisplay = this.userText;
        }

        if (!row.opeOpeningDate) {
          row.opeOpeningDate = moment.unix(currentDate).toDate();
          row.opeStartDateDisplay = this.getFullDateFormatWithUnixTime(currentDate);
        }
        row.opeClosingDate = moment.unix(currentDate).toDate();
        row.opePerformedOn = moment.unix(currentDate).toDate();
        row.opePerformedOnDisplay = this.getFullDateFormatWithUnixTime(currentDate);
        row.opePerformedWithEsign = eSign;
        if (!row.isCriticalTask) {
          this.checkOperation(row, eSign);
        }
      }
      // call save method
      this.saveOperation(row);
      // set workOrderStatusDetail with new value
    }
  }

  public onOperationValidationOK(comment: string) {
    this.selectedOperationToCheck.opeComment = comment;
    this.validateOperationOK(this.selectedOperationToCheck, false);
  }

  public onOperationValidationKO(comment: string) {
    this.selectedOperationToCheck.opeComment = comment;
    this.validateOperationKO(this.selectedOperationToCheck);
  }

  public checkCriticalOperation(row: JobCardOperation, eSign: boolean) {
    this.displayOperationCheck = true;
    this.selectedOperationToCheck = row;
  }

  private checkOperation(row: JobCardOperation, eSign: boolean) {
    if (row.opeStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
      this.validateOperationKO(row);
    } else {
      this.validateOperationOK(row, eSign);
    }
  }

  public validateOperationKO(row: JobCardOperation) {
    if (!row.isCriticalTask) {
      row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
    } else {
      row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING;
    }
    this.isWoNeedCheck = false;
    this.setLinkLists();
    if (this.user) {
      row.opeCheckedBy = this.user.userId;
      const currentDate = moment().unix();
      row.opeCheckedOn = moment.unix(currentDate).toDate();
      row.opeCheckOnDisplay = this.getFullDateFormatWithUnixTime(currentDate);
    }
    row.opeCheckByDisplay = this.userText;
    row.opePerformedWithEsign = false;
    this.saveOperation(row);
  }

  public validateOperationOK(row: JobCardOperation, eSign: boolean) {
    const currentDate = moment().unix();
    row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE;
    if (this.user) {
      if (row.isCriticalTask) {
        this.isWoNeedCheck = true;
        this.setLinkLists();
      }
      row.opeCheckedBy = this.user.userId;
      row.opeCheckByDisplay = this.userText;
      row.opeCheckedOn = moment.unix(currentDate).toDate();
      row.opeCheckOnDisplay = this.getFullDateFormatWithUnixTime(currentDate);
      row.opePerformedWithEsign = eSign;
    }
    this.saveOperation(row);
  }

  public checkWorkOrder(eSign: boolean) {
    let onSaveSucess: Function | undefined;
    if (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
      this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
      this.workOrder.woCheckedBy = undefined;
      this.woCheckedBy = undefined;
      this.workOrder.woCheckedOn = undefined;
      this.workOrder.woCheckedWithEsign = undefined;
      if (this.sessionService.isSpecificDassault) {
        onSaveSucess = () => {
          this.deleteLogbookNotificationFromWorkOrder();
        };
      }
    } else {
      const currentDate = moment().unix();
      this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE;
      if (this.user) {
        this.workOrder.woCheckedBy = this.user.userId;
      }
      this.woCheckedBy = `${this.userText} (${moment.unix(currentDate).format('MM/DD/YYYY')})`;
      this.workOrder.woCheckedOn = moment.unix(currentDate).toDate();
      this.workOrder.woCheckedWithEsign = eSign;
      if (this.sessionService.isSpecificDassault) {
        onSaveSucess = () => {
          this.manageUpdateLogbookFromWorkOrder();
        };
      }
    }
    this.saveWorkOrder(onSaveSucess);
  }

  public saveOperation(row: JobCardOperation) {
    const bidmOperationDtoRow: BidmOperationDTO = row;
    const bireOpeRow = 'bireOperationData';
    const bireOperationDtoRow: BireOperationDTO = {
      opeDurationTime: row[bireOpeRow].ope_DURATION_TIME
    };

    const progressFromOperationStatusInput: ProgressFromOperationStatusInput = {
      bireOperationDto: bireOperationDtoRow,
      bidmOperationDto: bidmOperationDtoRow
    };

    this.woFormService.updateBidmOperation(bidmOperationDtoRow).subscribe(() => {
      this.woFormService.getProgressFromOperationStatus(progressFromOperationStatusInput).subscribe((percent) => {
        if (row.opeStatus) {
          row.opeStatusDisplay = row.opeStatus.slice(2);
          row.opeStatusPercent = Math.floor(percent).toString();
        }
        const calculateWorkOrderImput: CalculateWorkOrderImput = {
          workOrderData: this.workOrder,
          fromLineMaintenance: false
        };
        this.woFormService.calculateAndUpdateBidmWorkOrderStatus(calculateWorkOrderImput).subscribe((newStatus) => {
          this.woStatus.status = newStatus;
          this.woFormService.findBidmWorkOrder(this.bidmWorkOrderId).subscribe((result) => {
            this.woStatus = result.workOrderStatusDetail;
            this.initWoDescription();
            this.setLinkLists();
            if (this.woStatus.status) {
              this.woStatusProgressType = this.woStatus.status.slice(2);
            }
            this.woStatusProgressPercent = Math.floor(Number(result.statusPercent)).toString();
            this.updateInterface(true);
          });
        });
      });
    });
  }

  private initWoDescription(): void {
    if (!!this.woStatus && !!this.woStatus.taskDesignation) {
      let jcDescription: string = this.woStatus.taskDesignation;
      if (this.sessionService.isSpecificDassault) {
        if (!!this.woStatus.taskDescription) {
          jcDescription += '\n' + this.woStatus.taskDescription;
        }
      }
      this.woDescription = jcDescription;
    } else {
      this.woDescription = this.workOrder.woDescription;
    }
  }

  public timeToDisplay(millisecond: number): string {
    const secondInmillisecond = 1000;
    const hourInSecond = 3600;
    const minuteInSecond = 60;
    const secondModulo = 60;
    const check = 10;
    const second = Math.floor(millisecond / secondInmillisecond);
    const hours = Math.floor(second / hourInSecond);
    const minutes = Math.floor((second - hours * hourInSecond) / minuteInSecond);
    const seconds = second % secondModulo;
    let minutesDisplay: string = minutes.toString();
    let secondsDisplay: string = seconds.toString();

    if (minutes < check || seconds < check) {
      if (minutes < check) {
        minutesDisplay = `0${minutes}`;
      }
      if (seconds < check) {
        secondsDisplay = `0${seconds}`;
      }
      const displayLessTen = `${hours}:${minutesDisplay}:${secondsDisplay}`;

      return displayLessTen;
    }

    const display = `${hours}:${minutesDisplay}:${secondsDisplay}`;

    return display;
  }

  public changeOpePerformedDurationDisplay(row: JobCardOperation): void {
    if (row.opePerformedDuration !== undefined) {
      row.opePerformedDurationDisplay = this.timeToDisplay(row.opePerformedDuration);
    }
  }

  public changeOpePerformedElapsedDisplay(row: JobCardOperation): void {
    if (row.opePerformedElapsed !== undefined) {
      row.opePerformedElapsedDisplay = this.timeToDisplay(row.opePerformedElapsed);
    }
  }

  public changeOpeStdDurationDisplay(row: JobCardOperation, num: number): void {
    if (num !== undefined) {
      const durationTimeInmillisecond = 3600000;
      row.opeStdDurationDisplay = this.timeToDisplay(num * durationTimeInmillisecond);
    }
  }

  public getFullDateFormatWithUnixTime(seconds: number): string {
    const dateDisplay = moment.unix(seconds);

    return dateDisplay.format('MM/DD/YYYY HH:mm');
  }

  public getFullDateFormatWithSecond(second: number): string {
    const dateDisplay = moment(second);

    return dateDisplay.format('MM/DD/YYYY HH:mm');
  }

  public getFullDateFormatWithDate(date: Date): string {
    const dateDisplay = moment(date);

    return dateDisplay.format('MM/DD/YYYY HH:mm');
  }

  private getTask(bireTaskId: BireTaskDTOId) {
    this.woFormService.findBireTask(bireTaskId).subscribe((task) => {
      this.bireTask = task;
      if (!this.workOrder.woDescription) {
        this.workOrder.woDescription = this.bireTask.taskDescription;
      }
      this.initDocumentTable();
      this.initWoUserList();
    });
  }

  public startOrEndDuration(operationRow: JobCardOperation): void {
    this.resetCheck(operationRow);
    if (!operationRow.isOpeOnPerformed) {
      this.dateStartPerformedDuration = moment().valueOf();
      operationRow.isOpeOnPerformed = true;
      operationRow.opeStatus = AWPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING;
      if (!operationRow.isOpeOnElapsed) {
        this.dateStartElapsedDuration = moment().valueOf();
        operationRow.isOpeOnElapsed = true;
      }
      if (!operationRow.opeOpeningDate) {
        const currentDate = moment().unix();
        operationRow.opeOpeningDate = moment.unix(currentDate).toDate();
        operationRow.opeStartDateDisplay = this.getFullDateFormatWithUnixTime(currentDate);
      }
      if (this.user) {
        operationRow.opePerformedLastBy = this.user.userId;
        operationRow.opePerformedLastByDisplay = this.userText;
      }
    } else if (
      this.dateStartPerformedDuration &&
      operationRow.opePerformedDuration !== undefined &&
      this.dateStartElapsedDuration !== undefined
    ) {
      this.dateEndPerformedDuration = moment().valueOf();
      const duration = this.dateEndPerformedDuration - this.dateStartPerformedDuration;
      const elasped = this.dateEndPerformedDuration - this.dateStartElapsedDuration;
      operationRow.opePerformedDuration += duration;
      this.addBidmTimeTrackingData(
        operationRow,
        new Date(this.dateStartPerformedDuration),
        new Date(this.dateEndPerformedDuration),
        duration,
        elasped
      );
      this.changeOpePerformedDurationDisplay(operationRow);
      this.resetPerformedDates();
      operationRow.isOpeOnPerformed = false;
    }

    this.saveOperation(operationRow);
  }

  public startOrEndElapsed(operationRow: JobCardOperation): void {
    if (
      operationRow.isOpeOnElapsed &&
      this.dateStartElapsedDuration !== undefined &&
      operationRow.opePerformedElapsed !== undefined
    ) {
      this.dateEndElapsedDuration = moment().valueOf();
      const elasped = this.dateEndElapsedDuration - this.dateStartElapsedDuration;
      if (operationRow.isOpeOnPerformed) {
        this.startOrEndDuration(operationRow);
      } else {
        this.addBidmTimeTrackingData(
          operationRow,
          new Date(this.dateStartElapsedDuration),
          new Date(this.dateEndElapsedDuration),
          0,
          elasped
        );
      }
      operationRow.opePerformedElapsed += elasped;
      this.changeOpePerformedElapsedDisplay(operationRow);
      this.resetElapsedDates();
      operationRow.isOpeOnElapsed = false;
      this.saveOperation(operationRow);
    }
  }

  private addBidmTimeTrackingData(
    operationRow: JobCardOperation,
    dateIn: Date,
    dateOut: Date,
    duration: number,
    elapsed: number
  ): void {
    // add entry in log table
    const bidmTimeTrackingToSave: BidmTimeTrackingByOperationOutputDTO = {
      bidmTimeTrackingDTO: {
        bireOpeCode: operationRow.bireOpeCode,
        bireOpeVersion: operationRow.bireOpeVersion,
        ttPerformedClockOut: dateOut,
        ttPerformedClockIn: dateIn,
        ttPerformedDuration: duration,
        ttPerformedElapsed: elapsed,
        woId: this.workOrder.woId,
        projectId: this.workOrder.projectId
      },
      isInDB: false,
      performedBy: operationRow.opePerformedOnDisplay,
      operation: operationRow.bireOpeCode,
      clockOutText: this.dateService.dateWithHourMinSecToString(new Date()),
      durationText: this.timeToDisplay(duration),
      duration,
      elapsed,
      elapsedText: this.timeToDisplay(elapsed),
      isDelete: true,
      isEditable: true
    };
    this.woFormService.saveBidmTimeTracking([bidmTimeTrackingToSave]).subscribe(() => {
      this.bidmTimeTracking.push(bidmTimeTrackingToSave);
    });
  }

  public openWo(): void {
    if (
      this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED ||
      ((this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
        !!this.operationTable)
    ) {
      this.woFormService.openBidmWorkOrder(this.bidmWorkOrderId).subscribe(() => {
        const calculateWorkOrderImput: CalculateWorkOrderImput = {
          workOrderData: this.workOrder,
          fromLineMaintenance: false
        };
        this.woFormService.calculateAndUpdateBidmWorkOrderStatus(calculateWorkOrderImput).subscribe((newStatus) => {
          this.woStatus.status = newStatus;
          this.loadWorkOrder();
        });
      });
    }
  }

  public performWo(eSign: boolean): void {
    this.setPerformed(eSign);
    this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
    this.saveWorkOrder();
  }

  public clickConfirmWorkCompletion(): void {
    if (
      this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING &&
      this.isCriticalWithoutOperation()
    ) {
      this.woFormService.setWoToBeConfirmed(this.bidmWorkOrderId).subscribe(() => {
        this.loadWorkOrder();
      });
    } else {
      this.stratOrRestartWo(false);
    }
  }

  public clickCancelWorkCompletion(): void {
    if (
      this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED &&
      this.isCriticalWithoutOperation()
    ) {
      this.woFormService.unsetWoToBeConfirmed(this.bidmWorkOrderId).subscribe(() => {
        this.loadWorkOrder();
      });
    } else {
      this.stratOrRestartWo(false);
    }
  }

  private isCritical(): boolean {
    if (this.woStatus.isCritical) {
      return true;
    }

    return false;
  }

  private isCriticalWithoutOperation(): boolean {
    if (this.woStatus.isCritical) {
      if (!this.operationTable || this.operationTable.length === 0) {
        return true;
      }
    }

    return false;
  }

  private isNotCriticalWithoutOperation(): boolean {
    if (!this.woStatus.isCritical) {
      if (!this.operationTable || this.operationTable.length === 0) {
        return true;
      }
    }

    return false;
  }

  public stratOrRestartWo(eSign: boolean): void {
    let onSaveSucess: Function | undefined;
    if (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED) {
      this.cancelPerformed();
      // this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED;
    } else if (
      this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED ||
      ((this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED ||
        this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING) &&
        !!this.operationTable)
    ) {
      this.setPerformed(eSign);
      this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
      /* if (!this.woStatus.isCritical) {
        this.setChecked(eSign);
        this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE;
        if (this.sessionService.isSpecificDassault) {
          onSaveSucess = () => {
            this.manageUpdateLogbookFromWorkOrder();
          };
        }
      }*/
    } else if (
      this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&
      !this.woStatus.isCritical
    ) {
      this.cancelPerformed();
      this.cancelChecked();
      if (this.sessionService.isSpecificDassault) {
        onSaveSucess = () => {
          this.deleteLogbookNotificationFromWorkOrder();
        };
      }
      // this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED;
    }
    this.saveWorkOrder(onSaveSucess);
  }

  private deleteLogbookNotificationFromWorkOrder(): void {
    if (this.workPackage.projectId && this.workOrder.woId) {
      const proj: BidmWorkOrderDTOId = {
        projectId: this.workPackage.projectId,
        woId: this.workOrder.woId
      };
      this.woFormService.deleteLogbookNotificationFromWorkOrder(proj).subscribe(
        () => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnLogbookNotificationDeletion'));
        },
        (err) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLogbookNotificationDeletion'));
        }
      );
    }
  }

  private manageUpdateLogbookFromWorkOrder(): void {
    if (this.workPackage.projectId && this.workOrder.woId) {
      const proj: BidmWorkOrderDTO = {
        projectId: this.workPackage.projectId,
        woId: this.workOrder.woId,
        woScheduledEndDate: moment().toDate()
      };
      this.woFormService.initializeUpdateLogbookFromWorkOrderInput(proj).subscribe(
        (input) => {
          if (input.evolutionPnUpdateAvailable) {
            this.updateLogbookFromWorkOrderInput = input;
            this.showUpdateLogbookDialog = true;
          } else {
            this.updateLogbookFromWorkOrder(input);
          }
        },
        (err) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLogbookInitialization'));
        }
      );
    }
  }

  public updateLogbookFromWorkOrder(input: UpdateLogbookFromWorkOrderInput): void {
    this.woFormService.updateLogbookFromWorkOrderInput(input).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnLogbookUpdate'));
      },
      (err) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLogbookUpdate'));
      }
    );
  }

  private cancelPerformed() {
    this.woPerformedBy = undefined;
    this.workOrder.woPerformedBy = undefined;
    this.workOrder.woPerformedOn = undefined;
    this.workOrder.woPerformedWithEsign = false;
  }

  private setPerformed(eSign: boolean) {
    const currentDate = moment().unix();
    if (this.user) {
      this.woPerformedBy = `${this.userText} (${moment.unix(currentDate).format('MM/DD/YYYY')})`;
      this.workOrder.woPerformedBy = this.user.userId;
    }
    this.workOrder.woPerformedOn = moment.unix(currentDate).toDate();
    this.workOrder.woPerformedWithEsign = eSign;
  }

  private cancelChecked() {
    this.workOrder.woCheckedWithEsign = false;
    this.woCheckedBy = undefined;
    this.workOrder.woCheckedBy = undefined;
    this.workOrder.woCheckedOn = undefined;
  }

  /*
  private setChecked(eSign: boolean) {
    const currentDate = moment().unix();
    if (this.user) {
      this.woCheckedBy = `${this.userText} (${moment.unix(currentDate).format('MM/DD/YYYY')})`;
      this.workOrder.woCheckedBy = this.user.userId;
    }
    this.workOrder.woCheckedOn = moment.unix(currentDate).toDate();
    this.workOrder.woCheckedWithEsign = eSign;
  } */

  public ctrlConfiguration(): void {
    this.isLoadingOutgoingConf = true;
    let equipmentCode: string | undefined;
    if (!!this.wpEquipementDto) {
      equipmentCode = this.wpEquipementDto.equipmentCode;
    }
    const input: ControlConfigurationInput = {
      checkConfiguration: true,
      checkFl: false,
      checkLogbook: false,
      checkMel: false,
      checkPotential: false,
      checkReferential: false,
      checkStructure: false,
      equipmentCode: equipmentCode || '',
      projectId: this.workPackage.projectId,
      withAllCounters: true,
      withFunctionalLocations: true,
      withMelFlag: true
    };
    this.woFormService.controlConfiguration(input).subscribe((controlConfigurationOutput) => {
      this.outgoinConfiguration = { ok: 0, warning: 0, nok: 0 };
      this.checkConfiguration(controlConfigurationOutput);
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
      if (checkElement) {
        this.countConfiguration(checkElement);
      }
    }

    if (asset.children) {
      asset.children.forEach((childAsset) => this.checkConfiguration(childAsset));
    }
  }

  private countConfiguration(checkPart: string) {
    this.outgoinConfiguration.ok = this.outgoinConfiguration.ok || 0;
    this.outgoinConfiguration.warning = this.outgoinConfiguration.warning || 0;
    this.outgoinConfiguration.nok = this.outgoinConfiguration.nok || 0;
    this.outgoinConfiguration.ok += checkPart === ControlConfigConstants.ICON_GREEN ? 1 : 0;
    this.outgoinConfiguration.warning += checkPart === ControlConfigConstants.ICON_YELLOW ? 1 : 0;
    this.outgoinConfiguration.nok += checkPart === ControlConfigConstants.ICON_RED ? 1 : 0;
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

  public goToAsset(equipment: BidoEquipmentDTO | undefined): void {
    if (equipment) {
      switch (equipment.equipmentFunction) {
        case this.awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY:
          this.goToAircraft(equipment.equipmentCode, ComponentOpenMode.Read);
          break;
        case this.awPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY:
          this.goToEngine(equipment.equipmentCode, ComponentOpenMode.Read);
          break;
        default:
          this.goToEquipment(equipment.equipmentCode, ComponentOpenMode.Read);
          break;
      }
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

  public openTaskLink(task: BireTaskDTO): void {
    if (task) {
      if (task.taskCode && task.taskCode.trim().length > 0) {
        this.openTask(task, ComponentOpenMode.Read);
      } else {
        this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTaskCode'));
      }
    }
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

  public openEvent(rowData: BidoNotificationOutputDTO) {
    const dto: BidoNotificationOutputDTO = {
      notificationCode: rowData.notificationCode,
      typeCode: rowData.typeCode
    };

    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: rowData.notificationCode as string
    };
    this.woFormService.findBidoNotification(bidoNotificationDTOId).subscribe((res: BidoNotificationDTO) => {
      if (
        !!res.bidoNotificationTypeDTO &&
        res.bidoNotificationTypeDTO.typeCategory === '5-def' &&
        dto.notificationCode
      ) {
        const notificationId: BidoNotificationDTOId = {
          notificationCode: dto.notificationCode
        };
        this.openDefect(notificationId);
      } else {
        this.openEventUC(dto, ComponentOpenMode.Read);
      }
    });
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

  public openDefect(eventId: BidoNotificationDTOId): void {
    if (eventId) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        objectId: this.serializationService.serialize(eventId),
        openMode: ComponentOpenMode.Read
      };

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openItemLink(item: BireItemDTO) {
    if (!!item) {
      if (StringUtils.isNullOrEmpty(item.familyCode)) {
        this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCode'));
      } else {
        this.openItem(item, ComponentOpenMode.Read);
      }
    }
  }

  private openItem(objectId: BireItemDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode
    };
    if (!!objectId) {
      const itemFormId: BireItemDTO = {
        familyCode: objectId.familyCode,
        chapter: objectId.chapter,
        section: objectId.section,
        sheet: objectId.sheet,
        marks: objectId.marks,
        subject: objectId.subject,
        structureType: objectId.structureType,
        variantCode: objectId.variantCode
      };
      data.objectId = this.serializationService.serialize(itemFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openWorkPackageLink(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize({ wpId: this.workPackage.projectId })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public consultWorkOrderOrigin(): void {
    if (!!this.originText && this.wpEquipementDto) {
      const assetWorkOrderOriginInput: AssetWorkOrderOriginInput = {
        woType: this.workOrder.woType,
        woSource: this.workOrder.woSource,
        evolutionType: this.evolutionType,
        familyVariantCode: this.wpEquipementDto.familyVariantCode
      };
      this.woFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe((result) => {
        if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK === this.workOrder.woType) {
          if (!!result.bireTaskDTOId) {
            // open task form
            const bireTaskDTO: BireTaskDTO = result.bireTaskDTOId as BireTaskDTO;
            this.openTask(bireTaskDTO, ComponentOpenMode.Read);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION === this.workOrder.woType) {
          if (BidoEvolutionConstants.CODE_EVOLUTION === this.evolutionType) {
            if (!!result.bireEvolutionDTOId) {
              // open evolution form
              const bireEvolutionDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireEvolutionDTOId
              };
              this.openEvolution(bireEvolutionDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_AD === this.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Airworthiness Directive form
              const bireSBDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.openAD(bireSBDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_SB === this.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Service Bulletin form
              const bireSbDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.openSB(bireSbDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_MODIFICATION === this.evolutionType) {
            if (!!result.bireModificationDTOId) {
              // open modification form
              const bireModificationDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireModificationDTOId
              };
              this.openModification(bireModificationDTOId);
            }
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === this.workOrder.woType) {
          if (!!result.bidoNotificationDTOId) {
            // open event form
            const bidoNotificationDTOId: BidoNotificationDTOId = result.bidoNotificationDTOId;
            this.openDefect(bidoNotificationDTOId);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE === this.workOrder.woType) {
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
    } else if (!!this.originText && AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === this.workOrder.woType) {
      const bidoNotificationDTOId: BidoNotificationDTOId = { notificationCode: this.originText };
      this.openDefect(bidoNotificationDTOId);
    }
  }

  public todo() {
    // #TODO
  }

  // documents

  public initDocumentTable(): void {
    if (this.bireTask.taskCode && this.bireTask.taskVersion) {
      const bireTaskId: BireTaskDTOId = {
        taskCode: this.bireTask.taskCode,
        taskVersion: this.bireTask.taskVersion
      };
      this.woFormService.findBireDocTaskByTask(bireTaskId).subscribe((docTaskList) => {
        docTaskList.forEach((docTask) => {
          const docRow: DocumentTableRow = {
            docTask: `${this.bireTask.taskCode}-${this.bireTask.taskVersion}`,
            docName: docTask.docName,
            docExtension: docTask.docType,
            docDescription: docTask.docDescription,
            docExternal: docTask.docSource,
            docPublicationDate: docTask.docPublicationDate,
            docIsIllustration: docTask.docIsIllustration,
            docCode: docTask.docCode,
            _obj: docTask,
            docFile: docTask.docFile
          };
          let fileSize: string | undefined;
          if (docTask.docFile) {
            fileSize = FileUtils.getFormattedSize(docTask.docFile.length);
          }
          docRow.docSize = fileSize;
          if (docRow.docExtension === 'PNG' || docRow.docExtension === 'JPG') {
            this.processMaterialIllustration(docRow);
          }

          this.documentTableDisplayed.push(docRow);
        });
      });
    }
  }
  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }
  private processMaterialIllustration(documentRow: DocumentTableRow): void {
    if (ObjectUtils.isDefined(documentRow.docFile) && !StringUtils.isNullOrEmpty(documentRow.docExtension)) {
      documentRow.materialIllustration = this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${ImageUtils.getBase64Prefix(documentRow.docExtension)}${documentRow.docFile}`
      );
    }
  }

  public showIllustration(illustration: SafeResourceUrl): void {
    this.currentIllustration = illustration;
  }

  public hideIllustration(): void {
    this.currentIllustration = undefined;
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

  public ctrlStock() {
    this.isLoadingStockControlConf = true;
    if (this.workPackage.projectId && this.workOrder.woId) {
      const projectIdDto: BidmProjectDTOId = {
        projectId: this.workPackage.projectId
      };
      const workOrderIdDto: BidmWorkOrderDTOId = {
        woId: this.workOrder.woId,
        projectId: this.workPackage.projectId
      };
      const input: ControlStockInput = {
        projectId: projectIdDto,
        workOrderId: workOrderIdDto,
        mvtStatusExcluded: [
          AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY,
          AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
          AWPropertiesConstants.MM_MVT_STATUS_CLOSED_KEY
        ],
        date: moment().toDate()
      };
      this.woFormService.controlStock(input).subscribe((stockMvtList) => {
        this.stockControlConf = { ok: 0, warning: 0, nok: 0 };
        this.checkStock(stockMvtList);
        this.isLoadingStockControlConf = false;
      });
    }
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

  public showButtonOpenField(): boolean {
    return this.sessionService.isSpecificDassault && !!this.woTask;
  }

  public showButtonOpenStaffPlanning(): boolean {
    return this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_HR_EMPLOYEE,
      BidoFunctionTypeConstants.DEGREE_DISPLAY
    );
  }

  public openField(): void {
    if (this.woStatus && !!this.woStatus.bidoEquipmentData) {
      this.davFieldService
        .buildTaskFieldLink({
          taskCodeAndVersion: this.woTask,
          familyVariantCode: this.woStatus.bidoEquipmentData.familyVariantCode
        })
        .subscribe((data: string) => {
          window.open(data);
        });
    }
  }

  public openOperationUC(rowData: BidmOperationDTO) {
    if (!!rowData.bireOpeCode && !!rowData.bireOpeVersion && !!rowData.bireOpeRangeCode) {
      const object: BireOperationDTOId = {
        opeCode: rowData.bireOpeCode,
        opeVersion: rowData.bireOpeVersion,
        rangeCode: rowData.bireOpeRangeCode
      };

      const labelKey = 'transaction.OperationSearchComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'OperationFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode: ComponentOpenMode.Read
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: WorkOrderStatusComponent,
      data: {
        statusState: this.woStatus.status,
        statusDate: this.workOrder.statusDate,
        statusUser: this.workOrder.statusUser
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          if (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED) {
            this.stratOrRestartWo(false);
          } else if (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED) {
            this.checkWorkOrder(false);
          } else if (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
            /* if (!this.woStatus.isCritical) {
              this.stratOrRestartWo(false);
            } else {
              this.checkWorkOrder(false);
            } */
            this.checkWorkOrder(false);
          }
        }
      }
    });
  }

  public lastUpdateDetails(): void {
    this.showLastUpdatePopup = true;
  }

  public addWoAssetManagement(): void {
    this.isLoadingWoAssetManagementTable = true;
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTOs: this.allWoAssetManagements.length > 0 ? this.allWoAssetManagements : undefined
    };
    this.woFormService.addWoAssetManagementToWo(input).subscribe((result) => {
      this.addJobCardWoAssetManagementRow(result);
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  private initInstallRemoveStatuses(): void {
    const observable = this.isGroundEquipment
      ? this.propertiesService.getValue(GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP)
      : this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
    observable.subscribe((list) => {
      this.removeOperationalStatuses = ListUtils.orEmpty(list)
        .filter((elt) => elt.value !== AWPropertiesConstants.OPERATIONAL_STATUS_IN_OPERATION_KEY)
        .sort((elt1, elt2) => elt1.label.localeCompare(elt2.label));
      this.installOperationalStatuses = ListUtils.orEmpty(list)
        .filter(
          (elt) =>
            elt.value !== AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY &&
            elt.value !== AWPropertiesConstants.OPERATIONAL_STATUS_SCRAPPED_KEY
        )
        .sort((elt1, elt2) => elt1.label.localeCompare(elt2.label));
    });
  }

  private initWoAssetMangement(): void {
    this.isLoadingWoAssetManagementTable = true;
    this.woAssetManagementTable = [];
    this.selectedWoAssetManagements = [];
    this.expandedWoAssetRows = {};
    this.woFormService.getByWorkOrder(this.bidmWorkOrderId).subscribe((result) => {
      result.forEach((woAssetManagementDTO: WoAssetManagementDTO) => {
        const row = this.addJobCardWoAssetManagementRow(woAssetManagementDTO);

        this.loadTransferOrders(woAssetManagementDTO, row);
      });
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  private loadTransferOrders(woAssetManagementDTO: WoAssetManagementDTO, row: JobCardWoAssetManagement): void {
    if (
      !!row.selectedBidoEquipmentDTO &&
      !!row.selectedPn &&
      !!row.selectedBidoEquipmentDTO.sn &&
      !!this.workOrder.projectId &&
      !!this.workOrder.woId
    ) {
      const input: FindForRemovalInput = {
        projectId: this.workOrder.projectId,
        woId: this.workOrder.woId,
        assetPn: row.selectedPn,
        assetSn: row.selectedBidoEquipmentDTO.sn
      };
      this.logisticsService.findTransferOrdersByRemoval(input).subscribe({
        next: (transferOrders) => {
          if (transferOrders && transferOrders.length > 0) {
            row.transferOrders = transferOrders;
            row.createReverseTransfer = true;
            row._existingReversal = true;
          }
        }
      });
    }
  }

  private addJobCardWoAssetManagementRow(woAssetManagementDTO: WoAssetManagementDTO): JobCardWoAssetManagement {
    const row: JobCardWoAssetManagement = {
      ...woAssetManagementDTO,
      key: `${this.woAssetManagementTable.length}-id`,
      availableDecisions: this.getAvailableDecisions(),
      availableEquipments: this.getAvailableEquipments(woAssetManagementDTO),
      availableSuperiorAssets: this.getAvailableSuperiorAssets(woAssetManagementDTO),
      availableWarehouses: this.getAvailableWarehouses(woAssetManagementDTO),
      availableItems: this.getAvailableItems(woAssetManagementDTO),
      availableFunctionCodes: this.getAvailableFunctionCodes(woAssetManagementDTO),
      availablePNs: this.getAvailablePns(woAssetManagementDTO),
      availableStatuses: this.getAvailableStatuses(woAssetManagementDTO),
      availableFls: this.getAvailableFls(woAssetManagementDTO),
      transferOrders: [],
      _obj: woAssetManagementDTO
    };
    if (!woAssetManagementDTO.bidoNotificationDTO) {
      this.expandedWoAssetRows[row.key] = true;
      row._expand = true;
    }
    if (this.workOrder.bidtWarehouseId) {
      row.selectedWarehouseId = this.workOrder.bidtWarehouseId;
      woAssetManagementDTO.selectedWarehouseId = this.workOrder.bidtWarehouseId;
    }
    row.isLoading = false;
    this.initWoAssetAlert(row);
    this.woAssetManagementTable.push(row);
    this.allWoAssetManagements.push(woAssetManagementDTO);

    return row;
  }

  private updateJobCardWoAssetManagementRow(
    row: JobCardWoAssetManagement,
    woAssetManagementDTO: WoAssetManagementDTO
  ): void {
    Object.assign(row, woAssetManagementDTO);
    this.loadTransferOrders(woAssetManagementDTO, row);
    row.availableEquipments = this.getAvailableEquipments(woAssetManagementDTO);
    row.availableSuperiorAssets = this.getAvailableSuperiorAssets(woAssetManagementDTO);
    row.availableWarehouses = this.getAvailableWarehouses(woAssetManagementDTO);
    row.availableItems = this.getAvailableItems(woAssetManagementDTO);
    row.availablePNs = this.getAvailablePns(woAssetManagementDTO);
    row.availableStatuses = this.getAvailableStatuses(woAssetManagementDTO);
    row.availableFls = this.getAvailableFls(woAssetManagementDTO);
    row.isLoading = false;
    row._obj = woAssetManagementDTO;
    this.initWoAssetAlert(row);
    this.woAssetManagementReadyToExecute();
  }

  private initWoAssetAlert(row: JobCardWoAssetManagement): void {
    if (!row.alertIcon && !row.bidoNotificationDTO) {
      if (this.woAssetManagementIsReady(row)) {
        row.isReady = true;
        row.alertIcon = ControlConfigConstants.ICON_GREEN_LIGHT_CODE;
      } else {
        row.alertIcon = ControlConfigConstants.ICON_RED_LIGHT_CODE;
      }
    }
  }

  private getAvailableDecisions(): SelectItem[] {
    const decisionList: SelectItem[] = [];
    decisionList.push({
      label: this.translateService.instant(this.getTranslateKey('install')),
      value: BidoNotificationTypeConstants.ASSEMBLY_TYPE_CODE
    });
    decisionList.push({
      label: this.translateService.instant(this.getTranslateKey('remove')),
      value: BidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE
    });

    return decisionList;
  }

  private getAvailableWarehouses(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    return ListUtils.orEmpty(woAssetManagementDTO.availableWarehouseList)
      .filter((warehouse) => ObjectUtils.isDefined(warehouse.whCode))
      .map((warehouse) => {
        return {
          label: StringUtils.isNullOrEmpty(warehouse.whName)
            ? warehouse.whCode
            : `${warehouse.whCode} - ${warehouse.whName}`,
          value: warehouse.wareHouseId
        };
      });
  }

  private getAvailableSuperiorAssets(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    return ListUtils.orEmpty(woAssetManagementDTO.avaialableSuperiorAssetList)
      .filter((data) => ObjectUtils.isDefined(data.equipmentCode))
      .map((data) => {
        return {
          label: BidoEquipmentUtils.toString(data),
          value: data
        };
      });
  }

  private getAvailableEquipments(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    return ListUtils.orEmpty(woAssetManagementDTO.availableBidoEquipmentList)
      .filter((data) => ObjectUtils.isDefined(data.equipmentCode))
      .map((data) => {
        return {
          label: data.sn,
          value: data
        };
      });
  }

  private getAvailableItems(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    return ListUtils.orEmpty(woAssetManagementDTO.availableItemDTOList).map((data) => {
      return {
        label: `${BireItemUtils.createItemKey(data)}-${data.name}`,
        value: data
      };
    });
  }

  private getAvailableFunctionCodes(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    return ListUtils.orEmpty(woAssetManagementDTO.availableFunctionCodeList).map((data) => {
      return {
        label: data,
        value: data
      };
    });
  }

  private getAvailablePns(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    return ListUtils.orEmpty(woAssetManagementDTO.availablePNDTOList).map((data) => {
      return {
        label: `${data.pnCode}`,
        value: data.pnCode
      };
    });
  }

  private getAvailableStatuses(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    if (
      woAssetManagementDTO &&
      woAssetManagementDTO.notificationType === BidoNotificationTypeConstants.ASSEMBLY_TYPE_CODE
    ) {
      return this.installOperationalStatuses;
    } else {
      return this.removeOperationalStatuses;
    }
  }

  private getAvailableFls(woAssetManagementDTO: WoAssetManagementDTO): SelectItem[] {
    return ListUtils.orEmpty(woAssetManagementDTO.availableFlDTOList).map((data) => {
      return {
        label: data.bidoFlData ? data.bidoFlData.flCode : '',
        value: data.bidoFlData ? data.bidoFlData.flCode : undefined
      };
    });
  }

  public updateWoAssetDecision(rowData: JobCardWoAssetManagement): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTO: rowData,
      woAssetManagementDTOs: this.allWoAssetManagements.filter(
        (woAssetManagement) => woAssetManagement !== rowData._obj
      ),
      decision: rowData.notificationType
    };
    rowData.alertIcon = undefined;
    rowData.alertMessage = undefined;
    rowData.isLoading = true;
    this.woFormService.woAssetManagementUpdateDecision(input).subscribe((result) => {
      this.updateJobCardWoAssetManagementRow(rowData, result);
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  public updateWoAssetSuperiorAsset(rowData: JobCardWoAssetManagement): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTO: rowData,
      woAssetManagementDTOs: this.allWoAssetManagements.filter(
        (woAssetManagement) => woAssetManagement !== rowData._obj
      ),
      selectedSuperiorBidoEquipmentDTO: rowData.selectedSuperiorBidoEquipmentDTO
    };
    rowData.alertIcon = undefined;
    rowData.alertMessage = undefined;
    rowData.isLoading = true;
    this.woFormService.woAssetManagementUpdateSuperiorAsset(input).subscribe((result) => {
      this.updateJobCardWoAssetManagementRow(rowData, result);
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  public updateWoAssetEquipment(rowData: JobCardWoAssetManagement): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTO: rowData,
      woAssetManagementDTOs: this.allWoAssetManagements.filter(
        (woAssetManagement) => woAssetManagement !== rowData._obj
      ),
      selectedBidoEquipmentDTO: rowData.selectedBidoEquipmentDTO
    };
    rowData.alertIcon = undefined;
    rowData.alertMessage = undefined;
    rowData.isLoading = true;
    this.woFormService.woAssetManagementUpdateSelectedEquipment(input).subscribe((result) => {
      this.updateJobCardWoAssetManagementRow(rowData, result);
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  public updateWoAssetItem(rowData: JobCardWoAssetManagement): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTO: rowData,
      woAssetManagementDTOs: this.allWoAssetManagements.filter(
        (woAssetManagement) => woAssetManagement !== rowData._obj
      ),
      selectedBireItemDTO: rowData.selectedBireItemDTO,
      selectedFunctionCode: rowData.selectedFunctionCode
    };
    rowData.alertIcon = undefined;
    rowData.alertMessage = undefined;
    rowData.isLoading = true;
    this.woFormService.woAssetManagementUpdateItemOrFunctionCode(input).subscribe((result) => {
      this.updateJobCardWoAssetManagementRow(rowData, result);
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  public updateWoAssetPn(rowData: JobCardWoAssetManagement): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTO: rowData,
      woAssetManagementDTOs: this.allWoAssetManagements.filter(
        (woAssetManagement) => woAssetManagement !== rowData._obj
      ),
      selectedPnCode: rowData.selectedPn
    };
    rowData.alertIcon = undefined;
    rowData.alertMessage = undefined;
    rowData.isLoading = true;
    this.woFormService.woAssetManagementUpdatePn(input).subscribe((result) => {
      this.updateJobCardWoAssetManagementRow(rowData, result);
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  public updateWoAssetWarehouse(rowData: JobCardWoAssetManagement): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTO: rowData,
      woAssetManagementDTOs: this.allWoAssetManagements.filter(
        (woAssetManagement) => woAssetManagement !== rowData._obj
      ),
      selectedWarehouseId: rowData.selectedWarehouseId
    };
    rowData.alertIcon = undefined;
    rowData.alertMessage = undefined;
    rowData.isLoading = true;
    this.woFormService.woAssetManagementUpdateSelectedWarehouse(input).subscribe((result) => {
      this.updateJobCardWoAssetManagementRow(rowData, result);
      this.isLoadingWoAssetManagementTable = false;
    });
  }

  public controlWoAsset(rowData: JobCardWoAssetManagement): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTO: rowData,
      woAssetManagementDTOs: this.allWoAssetManagements.filter(
        (woAssetManagement) => woAssetManagement !== rowData._obj
      ),
      decision: rowData.notificationType
    };
    rowData.alertIcon = undefined;
    rowData.alertMessage = undefined;
    rowData.isLoading = true;
    this.woFormService.woAssetManagementControl(input).subscribe((result) => {
      this.updateJobCardWoAssetManagementRow(rowData, result);
    });
  }

  public executeSelectedDecision(): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTOs: this.selectedWoAssetManagements
    };
    this.isExecutingWoAssetManagementDecision = true;
    this.woFormService.woAssetManagementExecuteDecisions(input).subscribe(() => {
      this.initWoAssetMangement();
      this.isExecutingWoAssetManagementDecision = false;
    });
  }

  public undoSelectedDecision(): void {
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTOs: this.selectedWoAssetManagements
    };
    this.isUndoingWoAssetManagementDecision = true;
    this.woFormService.woAssetManagementUndoDecisions(input).subscribe(() => {
      this.initWoAssetMangement();
      this.isUndoingWoAssetManagementDecision = false;
    });
  }

  public woAssetManagementReadyToExecute(): void {
    const allReadyElements: JobCardWoAssetManagement[] = [];
    let allAreReady = true;
    this.selectedWoAssetManagements.forEach((woAssetManagement) => {
      if (this.woAssetManagementIsReady(woAssetManagement)) {
        allReadyElements.push(woAssetManagement);
      } else {
        allAreReady = false;
      }
    });

    this.woAssetManagementReadyToExecuteDecision = !(allReadyElements.length > 0 && allAreReady);
  }

  public saveWoAssetManagement(): void {
    this.isSavingWoAssetManagementTable = true;
    const input: WoAssetManagementInputDTO = {
      bidmWorkOrderDTOId: this.bidmWorkOrderId,
      woAssetManagementDTOs: this.woAssetManagementTable.length > 0 ? this.woAssetManagementTable : undefined
    };
    this.woFormService.woAssetManagementSave(input).subscribe((result) => {
      this.initWoAssetMangement();
      this.isSavingWoAssetManagementTable = false;
    });
  }

  public woAssetManagementIsReady(rowData: JobCardWoAssetManagement): boolean {
    if (
      !!rowData.bidoNotificationDTO ||
      !rowData.notificationDate ||
      !rowData.selectedPn ||
      !rowData.selectedBidoEquipmentDTO ||
      !rowData.selectedStatus
    ) {
      return false;
    }

    if (rowData.alertIcon === this.controlConfigConstants.ICON_RED_LIGHT_CODE) {
      return false;
    }

    return true;
  }

  public openUrl(url: string): void {
    UrlUtils.openUrl(url);
  }

  public validateUrl(url: string): boolean {
    return UrlUtils.validateUrl(url);
  }

  public openStatusUpdatesPopup() {
    this.selectedOperation = this.selectedOperations[0];
    const bidmOperationId: BidmOperationDTOId = {
      woId: this.selectedOperation.woId as string,
      projectId: this.selectedOperation.projectId as string,
      bireOpeCode: this.selectedOperation.bireOpeCode as string,
      bireOpeVersion: this.selectedOperation.bireOpeVersion as string
    };
    this.showOperationUpdatesPopup = true;
    const columns: TableColumn[] = [
      { field: 'timestamp', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true, alignment: 'left' },
      { field: 'opeStatus', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeComment', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeCheckedBy', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      {
        field: 'opeCheckedOn',
        alignment: 'left',
        width: '6.25rem',
        filterMode: TableColumnFilterMode.Input,
        isDateWithHour: true
      },
      { field: 'opePerformedBy', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      {
        field: 'opePerformedOn',
        alignment: 'left',
        width: '6.25rem',
        filterMode: TableColumnFilterMode.Input,
        isDateWithHour: true
      }
    ];
    this.updatesKeyMap.set(
      'opeStatus',
      this.propertiesService.getValue(GenericPropertyConstants.AIRM_OPERATION_STATUS_MAP)
    );
    this.updatesKeyMap.set('opeCheckedBy', this.woFormService.findUsers());
    this.updatesKeyMap.set('opePerformedBy', this.woFormService.findUsers());
    this.tableOperationUpdatesData = {
      componentId: 'OperationComponent.historicPopup',
      tableCols: columns,
      tableRows: this.woFormService.findHBidmOperation(bidmOperationId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  /**
   * This method is to check the visibility of Print Id Label button
   * 1. The selected line should be removal only
   * 2. The selected line should be executed (has bidoNotifactionDTO)
   */
  public showPrintIdLabelButton(): boolean {
    if (
      !!this.selectedWoAssetManagements &&
      this.selectedWoAssetManagements.length === 1 &&
      !!this.selectedWoAssetManagements[0]._obj &&
      this.selectedWoAssetManagements[0]._obj.notificationType ===
        BidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE &&
      !!this.selectedWoAssetManagements[0]._obj.bidoNotificationDTO
    ) {
      return true;
    }

    return false;
  }

  public openTransferOrder(transferOrder: BidtTransferOrderDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
      objectId: this.serializationService.serialize(transferOrder.id),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public initWoUserList(): void {
    const param: UsersForWorkOrderInput = {
      useCaseCode: BidoFunctionTypeConstants.UC_AIRM_EXECUTION
    };
    if (!!this.bireTask) {
      param.taskCode = this.bireTask.taskCode;
      param.taskVersion = this.bireTask.taskVersion;
    }
    param.projectId = this.workOrder.projectId;
    param.startDate = this.workOrder.woScheduledStartDate;
    this.woFormService.findUsersWithUseCaseForWorkOrder(param).subscribe((data: BidoUserDTO[]) => {
      this.woUserList = data.map((user) => {
        return {
          label: `${user.lastname} ${user.firstname}`,
          value: user.userId
        };
      });
    });
  }
}
