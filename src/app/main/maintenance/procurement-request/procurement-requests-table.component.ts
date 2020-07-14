import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { BidtStockMvtTypeConstant } from '../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { CalculateWorkOrderImput } from '../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { ProcReqItemAndQtyIndicatorsDTO } from '../../../shared/types/api-output-types/product-structure-management/proc-req-item-and-qty-indicators-dto';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmProjectDTOId } from '../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidtProcReqItemDTO } from '../../../shared/types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtTorItemDTO } from '../../../shared/types/api-types/bidt-tor-item-dto.interface';
import { BidtTransferOrderDTO } from '../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { GenericComponent } from '../../../shared/types/generic-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../shared/utils/list-utils';
import { LogisticalUtils } from '../../../shared/utils/logistic-utils';
import { NumberUtils } from '../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../shared/utils/object-utils';
import { StringUtils } from '../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics/logistics.service';

import { ProcurementRequestsTableService } from './procurement-requests-table.service';

export interface ProcReqItemAndQtyRow {
  procurementRequestId?: number;
  id?: number;
  procurementRequest?: string;
  procurementRequestDescription?: string;
  referenceDocument?: string;
  referenceDocumentDesc?: string;
  recepient?: string;
  recepientDesc?: string;
  materials?: string;
  materialsDesc?: string;
  requestedQuantity?: string;
  status?: string;
  statusDate?: Date;
  statusDesc?: Date;
  expectedOn?: Date;
  criticity?: string;
  numberOfRecords?: number;
  servedMaterial?: number;
  reservedMaterial?: number;
  availableQuantity?: string;
  servedNb?: number;
  isServed?: boolean;
  ok?: boolean;
  nok?: boolean;
  warning?: boolean;
  bidtProcReqItem?: BidtProcReqItemDTO;
  notReversedNb?: number;
  reversedNb?: number;
  _obj: ProcurementRequestAndIndicatorsOutputDTO;
}

@Component({
  selector: 'aw-procurement-requests-table',
  styleUrls: ['./procurement-requests-table.component.scss'],
  templateUrl: './procurement-requests-table.component.html'
})
export class ProcurementRequestsTableComponent extends GenericComponent implements OnInit {
  @Input()
  public statusState: boolean;

  @Input()
  public set workOrder(workOrder: BidmWorkOrderDTO) {
    if (!!workOrder) {
      this.bidmWorkOrderFromInput = workOrder;
      this.bidmWorkOrder = workOrder;
    }
  }

  @Input()
  public set workPackages(workPackagesDTO: BidmProjectDTO[]) {
    if (!ListUtils.isNullOrEmpty(workPackagesDTO)) {
      this.workPackageDTOIdsFromInput = workPackagesDTO.map((workPackageDTO: BidmProjectDTO) => {
        return {
          projectId: workPackageDTO.projectId as string
        };
      });
    }
    this.loadData();
  }

  @Input()
  public set workPackageIds(workPackagesId: string[]) {
    if (!ListUtils.isNullOrEmpty(workPackagesId)) {
      this.workPackageDTOIdsFromInput = workPackagesId.map((workPackageId: string) => {
        return {
          projectId: workPackageId as string
        };
      });
    }
    this.loadData();
  }

  @Input()
  public set procurementRequests(procurementRequests: ProcurementRequestAndIndicatorsOutputDTO[]) {
    if (!!procurementRequests) {
      this.procurementRequestsFromInput = procurementRequests;
    }
    this.loadData();
  }

  @Input()
  public set requestManagementKey(requesteKey: string) {
    if (!!requesteKey) {
      this.initRequestManagementLabel(requesteKey);
    }
  }
  @Output()
  public askParentRefresh: EventEmitter<void>;

  public readonly component: typeof ProcurementRequestsTableComponent;
  public awPropertiesConstants: typeof AWPropertiesConstants;

  public showProcurementRequestDialog: boolean;

  public procurementRequestStatusList: LabelValue<string>[];
  public procurementRequestTypes: LabelValue<string>[];

  public originalProcReqRow: ProcReqItemAndQtyRow[];
  public procReqItemsTableDataSource: TableDataSource<ProcReqItemAndQtyRow>;
  public procurementRequestAndQuantitys: ProcurementRequestAndIndicatorsOutputDTO[];
  public procurementRequest: BidtProcurementRequestDTO[];

  public bidmProjectDTO: BidmProjectDTO;
  public woStatus: string;
  public bidmWorkOrder: BidmWorkOrderDTO;
  public bidmWorkOrderFromInput: BidmWorkOrderDTO;
  public workPackageDTOIdsFromInput: BidmProjectDTOId[];

  public procurementRequestsFromInput: ProcurementRequestAndIndicatorsOutputDTO[];

  public stockMvtTableFiltersVisible: boolean = false;

  public filtersAvailabilityDefaultList: SelectItem[];
  public procReqItemFiltersAvailabilityList: number[];
  private readonly okKey = 1;
  private readonly warningKey = 2;
  private readonly nOkKey = 3;

  public wpFiltersList: SelectItem[];
  public selectedProcReqFilterWPValue: number;

  public procReqItemStatusList: SelectItem[];
  public selectedProcReqFilterStatusValue: string | undefined;

  public requestManagementLabel: string;

  private readonly defaultRequestManagementKey = 'requestManagement';

  public constructor(
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    private readonly sessionService: SessionService,
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    public translateService: TranslateService,
    private readonly procurementRequestsTableService: ProcurementRequestsTableService
  ) {
    super(ComponentOpenMode.Write);
    this.component = ProcurementRequestsTableComponent;
    this.askParentRefresh = new EventEmitter<void>();
  }

  public ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.initRequestManagementLabel(undefined);
    this.originalProcReqRow = [];
    this.procReqItemFiltersAvailabilityList = [];
    this.awPropertiesConstants = AWPropertiesConstants;
    this.initProcurementRequestsTableDataSource();
  }

  public initRequestManagementLabel(fromInputKey: string | undefined): void {
    let requestManagementKey = this.defaultRequestManagementKey;
    if (!!fromInputKey) {
      requestManagementKey = fromInputKey;
    }
    const requestManagement = this.getTranslateKey(requestManagementKey);
    this.translateService.get([requestManagement]).subscribe((results) => {
      this.requestManagementLabel = `${results[requestManagement]}`;
    });
  }

  public loadData(): void {
    this.originalProcReqRow = [];
    this.procReqItemFiltersAvailabilityList = [];
    this.selectedProcReqFilterStatusValue = undefined;
    this.selectedProcReqFilterWPValue = -1;
    this.loadProcurementStatusMap();
    this.loadProcurementTypeMap();
    this.initProcurementRequestsTableDataSource();
    this.loadProcurementRequestAndQuantity();
    this.setStockMvtTableFiltersAvailabilityList();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_PROCUREMENT_REQUESTS_TABLE;
  }

  public loadProcurementStatusMap(): void {
    this.procurementRequestStatusList = [];
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP).subscribe((res) => {
      this.procurementRequestStatusList = res;
      this.procReqItemStatusList = res;
    });
  }

  public loadProcurementTypeMap(): void {
    this.procurementRequestTypes = [];
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe((res) => {
      this.procurementRequestTypes = res;
    });
  }

  public getProcurementRequestAndQuantityAsObservable(
    bidmWorkOrder: BidmWorkOrderDTO | undefined,
    workPackageDTOIdsTab: BidmProjectDTOId[] | undefined
  ): Observable<ProcurementRequestAndIndicatorsOutputDTO[]> {
    return this.procurementRequestsTableService.findProcReqItemsAndStockQuantityIndicators(
      bidmWorkOrder,
      workPackageDTOIdsTab
    );
  }

  public loadProcurementRequestAndQuantity(): void {
    if (!ListUtils.isNullOrEmpty(this.procurementRequestsFromInput)) {
      this.loadDataOnProcReqReception(this.procurementRequestsFromInput);
    } else if (!!this.workPackageDTOIdsFromInput) {
      this.procurementRequestsTableService
        .findProcReqItemsAndStockQuantityIndicators(undefined, this.workPackageDTOIdsFromInput)
        .subscribe((results: ProcurementRequestAndIndicatorsOutputDTO[]) => {
          this.procurementRequestsFromInput = results;
          this.loadDataOnProcReqReception(results);
        });
    }
  }

  private loadDataOnProcReqReception(results: ProcurementRequestAndIndicatorsOutputDTO[]) {
    this.procReqItemsTableDataSource.deleteDataSelection();
    this.procReqItemsTableDataSource.setData([]);
    results.forEach((elt: ProcurementRequestAndIndicatorsOutputDTO) => {
      const procReqRow: ProcReqItemAndQtyRow[] = this.createProcReqItemRow(elt);
      this.procReqItemsTableDataSource.addData(procReqRow);
      this.setWPfiltersList();
    });
  }

  public createProcReqItemRow(procurementRequest: ProcurementRequestAndIndicatorsOutputDTO): ProcReqItemAndQtyRow[] {
    let servedMaterialNb = 0;
    let reservedMaterialNb = 0;
    if (!ListUtils.isNullOrEmpty(procurementRequest.procReqItemsAndQtyIndicatorsDTO)) {
      const stockMvts = procurementRequest.procReqItemsAndQtyIndicatorsDTO[0].workshopEntries;

      if (stockMvts) {
        servedMaterialNb = stockMvts
          .filter(
            (stockMvt) =>
              stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
              ((stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.RECEIPT &&
                (procurementRequest.bidtWarehouseReceipt as BidtWarehouseDTO).whCategory ===
                  AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE) ||
                (stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.WORKSHOP_ENTRY &&
                  (procurementRequest.bidtWarehouseReceipt as BidtWarehouseDTO).whCategory ===
                    AWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP))
          )
          .filter((stockMvt) => stockMvt.stockMvtQuantity)
          .map((stockMvt) => NumberUtils.fromString(stockMvt.stockMvtQuantity as string))
          .reduce((a, b) => a + b, 0);

        reservedMaterialNb = stockMvts
          .filter(
            (stockMvt) =>
              stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
              stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY &&
              (stockMvt.stockMvtSn || stockMvt.stockMvtBatchNumber) &&
              ((stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.RECEIPT &&
                (procurementRequest.bidtWarehouseReceipt as BidtWarehouseDTO).whCategory ===
                  AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE) ||
                (stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.WORKSHOP_ENTRY &&
                  (procurementRequest.bidtWarehouseReceipt as BidtWarehouseDTO).whCategory ===
                    AWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP))
          )
          .filter((stockMvt) => stockMvt.stockMvtQuantity)
          .map((stockMvt) => NumberUtils.fromString(stockMvt.stockMvtQuantity as string))
          .reduce((a, b) => a + b, 0);
      }
    }
    const bidtProcReqItems = procurementRequest.procReqItemsAndQtyIndicatorsDTO as BidtProcReqItemDTO[];
    procurementRequest.bidtProcReqItems = bidtProcReqItems;
    const bidtProcurementRequestDTO: BidtProcurementRequestDTO = {
      ...procurementRequest,
      ...bidtProcReqItems
    };
    const servedIndicators = LogisticalUtils.getServedIndicators(bidtProcurementRequestDTO);

    return procurementRequest.procReqItemsAndQtyIndicatorsDTO.map(
      (procReqItemsAndQtyIndicatorsDTO: ProcReqItemAndQtyIndicatorsDTO) => {
        let procReqItemAndQtyRow: ProcReqItemAndQtyRow = {
          procurementRequestId: procurementRequest.id,
          id: procReqItemsAndQtyIndicatorsDTO.id,
          procurementRequest: procurementRequest.procCode,
          procurementRequestDescription: procurementRequest.procType,
          referenceDocument: !!procurementRequest.bidmWorkOrder ? procurementRequest.bidmWorkOrder.woCode : '',
          referenceDocumentDesc: !!procurementRequest.bidmWorkOrder
            ? procurementRequest.bidmWorkOrder.woDescription
            : '',
          recepient: !!procurementRequest.bidtSiteReceipt ? procurementRequest.bidtSiteReceipt.siteName : '',
          recepientDesc: !!procurementRequest.bidtWarehouseReceipt
            ? procurementRequest.bidtWarehouseReceipt.whName
            : '',
          status: procurementRequest.procStatus,
          statusDate: procurementRequest.statusDate,
          statusDesc: procurementRequest.requestedDate,
          expectedOn: procurementRequest.requestedDate,
          criticity: procurementRequest.criticality,
          servedMaterial: servedMaterialNb,
          reservedMaterial: reservedMaterialNb,
          servedNb: servedIndicators ? servedIndicators.servedNb : 0,
          isServed: servedIndicators ? servedIndicators.isServed : false,
          materials: procReqItemsAndQtyIndicatorsDTO.birePn ? procReqItemsAndQtyIndicatorsDTO.birePn.pnCode : undefined,
          materialsDesc: procReqItemsAndQtyIndicatorsDTO.birePn
            ? procReqItemsAndQtyIndicatorsDTO.birePn.articleDesignation
            : undefined,
          requestedQuantity: procReqItemsAndQtyIndicatorsDTO.requestedQuantity
            ? NumberUtils.roundNumber(
                NumberUtils.fromString(procReqItemsAndQtyIndicatorsDTO.requestedQuantity),
                2
              ).toString()
            : '',
          notReversedNb: 0,
          reversedNb: 0,
          bidtProcReqItem: procReqItemsAndQtyIndicatorsDTO as BidtProcReqItemDTO,
          _obj: procurementRequest
        };

        // Get procurement request item rows
        const procurementRequestItems = LogisticalUtils.buildProcurementRequestItemsRows(procReqItemAndQtyRow._obj);

        // Search transfer order by bidtProcurementRequestItemId
        const reverseObservables$ = procurementRequestItems
          .map((item) => item.obj.id)
          .map((itemId) =>
            this.logisticsService.findTransferOrdersByCriteria({
              transferOrder: { bidtProcReqItemId: itemId },
              transferOrderStatusExcluded: []
            })
          );

        forkJoin(reverseObservables$).subscribe((results) => {
          const transferOrder = results
            .reduce((acc, x) => acc.concat(x), [])
            .map((result) => result.bidtTransferOrder)
            .find(
              (to) => (to as BidtTransferOrderDTO).torType === AWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT
            );

          if (transferOrder) {
            const reverseProcurementRequestItems = (transferOrder.bidtTorItems as BidtTorItemDTO[]).map((torItem) => {
              // Compute reverse item progress
              const progress = LogisticalUtils.computeProcurementRequestReverseItemProgress(torItem.pickingMovements);

              return {
                obj: torItem,
                allNb: progress.allNb,
                reversedNb: progress.reversedNb,
                notReversedNb: progress.notReversedNb,
                warehouseName: transferOrder.bidtWarehouseIssue ? transferOrder.bidtWarehouseIssue.whName : undefined,
                siteName: transferOrder.bidtSiteIssue ? transferOrder.bidtSiteIssue.siteName : undefined
              };
            });

            // Compute transfer ordes's reverse items progress
            let spareClassResversedNb = 0;
            let spareClassNotReversedNb = 0;
            reverseProcurementRequestItems.forEach((item) => {
              spareClassResversedNb += item.reversedNb;
              spareClassNotReversedNb += item.notReversedNb;
            });
            procReqItemAndQtyRow.notReversedNb = spareClassNotReversedNb;
            procReqItemAndQtyRow.reversedNb = spareClassResversedNb;
            const tmp = this.procReqItemsTableDataSource.dataSrc.find((d) => d.id === procReqItemAndQtyRow.id);
            if (!!tmp) {
              this.procReqItemsTableDataSource.replaceData(tmp, procReqItemAndQtyRow);
            }
          }
        });

        if (AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CLOSED !== (procurementRequest.procStatus as string)) {
          const qLabel = this.getTranslateKey('quantityQ');
          this.translateService.get([qLabel]).subscribe((results) => {
            const availableQuantity = `${results[qLabel]} = ${procReqItemsAndQtyIndicatorsDTO.availableQuantity}`;
            procReqItemAndQtyRow = {
              ...procReqItemAndQtyRow,
              availableQuantity,
              ok: procReqItemsAndQtyIndicatorsDTO.ok,
              nok: procReqItemsAndQtyIndicatorsDTO.nok,
              warning: procReqItemsAndQtyIndicatorsDTO.warning
            };
          });
        }

        this.originalProcReqRow.push(procReqItemAndQtyRow);

        return procReqItemAndQtyRow;
      }
    );
  }

  public get enableOpenProcurementOnAdd(): boolean {
    return (
      this.procReqItemsTableDataSource.dataSelectionCount === 0 && !!this.bidmWorkOrderFromInput && !this.statusState
    );
  }

  public get enableOpenProcurementOnEdit(): boolean {
    if (this.procReqItemsTableDataSource.hasDataSelection) {
      const selectedProcurementRequest = this.procReqItemsTableDataSource.dataSelection[0]._obj;

      return (
        this.procReqItemsTableDataSource.dataSelectionCount === 1 &&
        !!selectedProcurementRequest.bidmWorkOrder &&
        (selectedProcurementRequest.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT ||
          selectedProcurementRequest.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||
          selectedProcurementRequest.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED) &&
        !this.isReadOpenMode
      );
    } else {
      return false;
    }
  }

  public openProcurementRequestDialog(): void {
    if (this.procReqItemsTableDataSource.dataSelectionCount === 1) {
      const selectedProcurementRequest = this.procReqItemsTableDataSource.dataSelection[0]._obj;
      this.bidmWorkOrder = selectedProcurementRequest.bidmWorkOrder as BidmWorkOrderDTO;
      this.woStatus = this.bidmWorkOrder.calculatedStatus as string;
      this.bidmProjectDTO = selectedProcurementRequest.projectDTO;
      this.showProcurementRequestDialog = true;
    } else if (this.procReqItemsTableDataSource.dataSelectionCount === 0) {
      this.bidmWorkOrder = this.bidmWorkOrderFromInput;
      const calculateWorkOrderImput: CalculateWorkOrderImput = {
        workOrderData: this.bidmWorkOrderFromInput,
        fromLineMaintenance: false
      };
      this.procurementRequestsTableService
        .calculateWorkOrderStatus(calculateWorkOrderImput)
        .subscribe((calculateWorkOrderOutput) => {
          this.woStatus = calculateWorkOrderOutput.workOrderDetail.status as string;
          this.procurementRequestsTableService
            .findBidmProject(this.bidmWorkOrderFromInput.projectId as string)
            .subscribe((result: BidmProjectDTO) => {
              this.bidmProjectDTO = result;
              this.showProcurementRequestDialog = true;
            });
        });
    }
  }

  public getStatusLabel(statusValue: string | undefined): string {
    const matchingStatus = this.procurementRequestStatusList.find((status) => status.value === statusValue);

    return matchingStatus ? StringUtils.orEmpty(matchingStatus.label) : '';
  }

  public openProcurementDetails(rowData: ProcReqItemAndQtyRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
      objectId:
        rowData && rowData.procurementRequest
          ? this.serializationService.serialize({ id: rowData._obj.id })
          : undefined,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isDeleteButtonVisible(): boolean {
    return (
      this.procReqItemsTableDataSource.hasDataSelection &&
      this.procReqItemsTableDataSource.dataSelection.reduce((sum, next) => sum && this.isDeletableRow(next), true) &&
      !this.statusState
    );
  }

  public isDeletableRow(elt: ProcReqItemAndQtyRow): boolean {
    return (
      (elt._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT ||
        elt._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED) &&
      !!this.sessionService.loggedUser &&
      elt._obj.statusUser === this.sessionService.loggedUser.login &&
      !this.isReadOpenMode
    );
  }

  public deleteProcurementRequest(): void {
    forkJoin(
      this.procReqItemsTableDataSource.dataSelection.map((element) => {
        return this.logisticsService.deleteProcurementRequest(
          (element as ProcReqItemAndQtyRow).procurementRequestId as number
        );
      })
    ).subscribe(() => {
      this.procReqItemsTableDataSource.deleteDataSelection();
    });
  }

  public isCancelButtonVisible(): boolean {
    return (
      this.procReqItemsTableDataSource.hasDataSelection &&
      this.procReqItemsTableDataSource.dataSelection.reduce((sum, next) => sum && this.isCancelableRow(next), true)
    );
  }

  public isCancelableRow(elt: ProcReqItemAndQtyRow): boolean {
    return (
      (elt._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||
        elt._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||
        elt._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED) &&
      this.sessionService.hasUserRightByUseCase(
        BidoFunctionTypeConstants.UC_MM_PROCUREMENT,
        BidoFunctionTypeConstants.DEGREE_MANAGE
      )
    );
  }

  public cancelProcurementRequest(): void {
    forkJoin(
      this.procReqItemsTableDataSource.dataSelection.map((element) => {
        return this.logisticsService.cancelProcurementRequest(
          (element as ProcReqItemAndQtyRow).procurementRequestId as number
        );
      })
    ).subscribe(() => {
      const rowToUpdateStatusAtCanceled = this.procReqItemsTableDataSource.dataSelection.map((row) => {
        const rowData = row as ProcReqItemAndQtyRow;

        return this.findProcurementRequestById(rowData.procurementRequestId as number);
      });
      rowToUpdateStatusAtCanceled.forEach((element) => {
        element.procStatus = AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED;
      });
      this.procReqItemsTableDataSource.deleteDataSelection();
      this.loadProcurementRequestAndQuantity();
    });
  }

  private findProcurementRequestById(id: number): ProcurementRequestAndIndicatorsOutputDTO {
    return this.procurementRequestsFromInput.find(
      (procurementRequestAndIndicatorsOutputDTO: ProcurementRequestAndIndicatorsOutputDTO) =>
        procurementRequestAndIndicatorsOutputDTO.id === id
    ) as ProcurementRequestAndIndicatorsOutputDTO;
  }

  private initProcurementRequestsTableDataSource(): void {
    this.procReqItemsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'procurementRequest',
          translateKey: this.getTranslateKey('procurementRequest'),
          alignment: ColumnAlignment.LEFT,
          width: '13%'
        },
        {
          field: 'recepient',
          translateKey: this.getTranslateKey('recepient'),
          alignment: ColumnAlignment.LEFT,
          width: '11%'
        },
        {
          field: 'materials',
          translateKey: this.getTranslateKey('materials'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        },
        {
          field: 'requestedQuantity',
          translateKey: this.getTranslateKey('requestedQuantity'),
          alignment: ColumnAlignment.RIGHT,
          width: '5%'
        },
        {
          field: 'status',
          translateKey: this.getTranslateKey('status'),
          alignment: ColumnAlignment.LEFT,
          width: '9%'
        },
        {
          field: 'statusDate',
          translateKey: this.getTranslateKey('statusDate'),
          alignment: ColumnAlignment.LEFT,
          width: '8%'
        },
        {
          field: 'expectedOn',
          translateKey: this.getTranslateKey('expectedOn'),
          alignment: ColumnAlignment.LEFT,
          width: '8%'
        },
        {
          field: 'criticity',
          translateKey: this.getTranslateKey('criticity'),
          alignment: ColumnAlignment.LEFT,
          width: '8%'
        },
        {
          field: 'progress',
          translateKey: this.getTranslateKey('advancement'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'availableQuantity',
          translateKey: this.getTranslateKey('availableQuantity'),
          alignment: ColumnAlignment.CENTER,
          width: '8%'
        }
      ],
      data: []
    });
  }

  public openPart(row: ProcReqItemAndQtyRow): void {
    if (row.materials) {
      const data: PageComponentData = {
        componentId: ComponentConstants.ENG_PART_NUMBER_FORM,
        id: this.tabService.generateId(),
        objectId: row.materials,
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openProcurementManagmentPage(): void {
    if (
      this.procReqItemsTableDataSource.dataSelectionCount === 1 &&
      this.procReqItemsTableDataSource.dataSelection[0]._obj.procReqItemsAndQtyIndicatorsDTO
    ) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize({
          prId: this.procReqItemsTableDataSource.dataSelection[0]._obj.id,
          prItemId: this.procReqItemsTableDataSource.dataSelection[0]._obj.procReqItemsAndQtyIndicatorsDTO[0].id
        })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public setWPfiltersList(): void {
    const wpKey = this.getTranslateKey('wp');
    const msnKey = this.getTranslateKey('msn');
    this.wpFiltersList = [];
    this.translateService.get([wpKey, msnKey]).subscribe((results) => {
      this.originalProcReqRow.forEach((procReqItemAndQtyRow) => {
        const bidmProjectDTO = procReqItemAndQtyRow._obj.projectDTO;
        procReqItemAndQtyRow._obj.procReqItemsAndQtyIndicatorsDTO.forEach(() => {
          let selectedItem: SelectItem = {
            label: `${results[wpKey]} n°${bidmProjectDTO.projectNumber}`,
            value: procReqItemAndQtyRow.procurementRequestId
          };
          if (bidmProjectDTO.aircraftMsn) {
            selectedItem = {
              label: `${selectedItem.label} | ${results[msnKey]} ${bidmProjectDTO.aircraftMsn}`,
              value: selectedItem.value
            };
          }
          const workPackage = this.wpFiltersList.find((wp) => (wp.value = selectedItem.value));
          if (!ObjectUtils.isDefined(workPackage)) {
            this.wpFiltersList = [...this.wpFiltersList, selectedItem];
          }
        });
      });
    });
  }

  public setStockMvtTableFiltersAvailabilityList(): void {
    const okKey = this.getTranslateKey('ok');
    const warningKey = this.getTranslateKey('warning');
    const nokKey = this.getTranslateKey('nok');

    this.translateService
      .get([okKey, warningKey, nokKey])
      .pipe(
        map((results) => {
          return [
            {
              label: results[okKey],
              value: this.okKey
            },
            {
              label: results[warningKey],
              value: this.warningKey
            },
            {
              label: results[nokKey],
              value: this.nOkKey
            }
          ];
        })
      )
      .subscribe((result) => {
        this.filtersAvailabilityDefaultList = result;
        this.procReqItemFiltersAvailabilityList = [this.okKey, this.warningKey, this.nOkKey];
      });
  }

  public filterStockMvtTableByCriteria(): void {
    let dataToShow: ProcReqItemAndQtyRow[] = [];
    if (!!this.procReqItemFiltersAvailabilityList) {
      this.procReqItemFiltersAvailabilityList.forEach((key: number) => {
        if (key === this.okKey) {
          dataToShow = [...dataToShow, ...this.originalProcReqRow.filter((row) => row.ok as boolean)];
        }
        if (key === this.warningKey) {
          dataToShow = [...dataToShow, ...this.originalProcReqRow.filter((row) => row.warning as boolean)];
        }
        if (key === this.nOkKey) {
          dataToShow = [...dataToShow, ...this.originalProcReqRow.filter((row) => row.nok as boolean)];
        }
      });
    }

    if (!!this.selectedProcReqFilterStatusValue) {
      let dataStatusFilter: ProcReqItemAndQtyRow[] = [];
      dataStatusFilter = dataToShow.filter(
        (row) => this.selectedProcReqFilterStatusValue === (row._obj.procStatus as string)
      );

      if (dataStatusFilter.length > 0) {
        dataToShow = [...dataStatusFilter];
      } else if (dataStatusFilter.length === 0) {
        dataToShow = [];
      }
    }

    if (!!this.selectedProcReqFilterWPValue) {
      let dataWPFilter: ProcReqItemAndQtyRow[] = [];
      dataWPFilter = dataToShow.filter(
        (row) => this.selectedProcReqFilterWPValue === (row.procurementRequestId as number)
      );

      if (dataWPFilter.length > 0) {
        dataToShow = [...dataWPFilter];
      }
    }

    dataToShow = dataToShow.reduce(
      (unique, item) => (unique.every((elt) => elt.id !== item.id) ? [...unique, item] : unique),
      [] as ProcReqItemAndQtyRow[]
    );
    this.procReqItemsTableDataSource.setData(dataToShow);
  }

  public setStockMvtTableFiltersVisible(): void {
    this.stockMvtTableFiltersVisible = !this.stockMvtTableFiltersVisible;
  }

  public onUpdateProcurementRequest(event: BidtProcurementRequestDTO): void {
    this.askParentRefresh.emit();
  }
}
