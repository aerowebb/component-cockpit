import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindProcurementRequestsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-procurement-requests-by-criteria-input.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { LogisticalUtils } from '../../../../shared/utils/logistic-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics.service';

import { ProcurementRequestSearchService } from './procurement-request-search.service';

interface ProcurementSearchInput {
  siteName?: number;
  whType?: string;
  whName?: string;
  whCode?: number;
  criticality?: string;
  procCode?: string;
  procStatus?: string;
  requestedDate?: Date;
  woCode?: string;
  documentType?: string;
  siteIssue?: number;
  warehouseIssue?: number;
  type?: string;
  customer?: BidoCustomerDTO;
}

interface ProcurementSearchFilter {
  status?: string;
  advancement?: Advancement | undefined;
  advancements?: LabelValue<Advancement>[];
  requestedDate?: Date;
  type?: string;
  criticity?: string;
  workOrder?: string; // TODO
  workOrders?: LabelValue<string>[];
  shipperSite?: number;
  shipperWarehouse?: number;
  shipperWarehouseType?: string;
  shipperWarehouses?: LabelValue<number>[];
  recepientSite?: number;
  recepientWarehouse?: number;
  recepientWarehouseType?: string;
  recepientWarehouses?: LabelValue<number>[];
}

interface ProcurementFormInput {
  id?: number;
  procurementRequest?: string;
  procurementRequestDescription?: string;
  referenceDocument?: string;
  referenceDocumentDesc?: string;
  recipient?: string;
  recipientDesc?: string;
  shipper?: string;
  shipperDesc?: string;
  materials?: string;
  materialsDesc?: string;
  quantity?: string;
  quantityUnit?: string;
  status?: string;
  statusDesc?: Date;
  expectedOn?: Date;
  criticity?: string;
  numberOfRecords?: number;
  advancement: Advancement;
  customerName?: string;
  assetRecipient?: string;
  _obj: BidtProcurementRequestDTO;
}

enum Advancement {
  NOT_SERVED,
  PARTIALLY_SERVED,
  SERVED
}

@Component({
  selector: 'aw-procurement-request-search',
  styleUrls: ['./procurement-request-search.component.scss'],
  templateUrl: './procurement-request-search.component.html'
})
export class ProcurementRequestSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly ALL = 'ALL';

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public readonly advancement: typeof Advancement;
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;

  public logisticsTypeList: SelectItem[];
  public criticalList: LabelValue<string | undefined>[];
  public procurementSearchInput: ProcurementSearchInput = {};

  public resultTableCols: TableColumn[];
  public resultsTable: ProcurementFormInput[];
  public resultsTableSrc: ProcurementFormInput[];
  public selectedResults: ProcurementFormInput[];
  public isLoading: boolean;

  // Dropdowns
  public siteList: SelectItem[];
  public shopList: LabelValue<number>[];
  public supplierWarehouses: LabelValue<number>[];
  public statusList: SelectItem[];
  public documentList: SelectItem[];
  public customerList: LabelValue<BidoCustomerDTO>[];

  public showAdvancedSearchCriteria: boolean;
  public showCreateProcurementDialog: boolean;

  public procurementRequestTypes: LabelValue<string | undefined>[];
  public selectedAsset: BidoEquipmentDTO | undefined;
  public selectedAssetName: string;
  public assetDialogVisible: boolean;

  public selectedSupplierWarehouseCategory: string | undefined;

  public selectedAssetPn: BirePnDTO | undefined;
  public assetPnDialogVisible: boolean;
  public selectedDesignation: string | undefined;

  private userSiteId: number | undefined;

  public filtersVisible: boolean;
  public filter: ProcurementSearchFilter = {};

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly propertiesService: PropertiesService,
    private readonly logisticsService: LogisticsService,
    private readonly procurementRequestSearchService: ProcurementRequestSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.advancement = Advancement;
    this.awPropertiesConstants = AWPropertiesConstants;

    this.procurementRequestTypes = [];
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe((res) => {
      this.procurementRequestTypes = [
        {
          label: this.translateService.instant(this.getTranslateKey('all')),
          value: undefined
        },
        ...res
      ];
    });

    this.sessionService.getUserSiteId().subscribe({
      next: (site) => {
        this.userSiteId = site ? site.siteId : undefined;
        this.procurementSearchInput.siteIssue = this.userSiteId;
      }
    });
    this.sessionService.getUserWarehouseId().subscribe({
      next: (warehouse) => {
        this.selectedSupplierWarehouseCategory = warehouse ? warehouse.whCategory : undefined;

        if (warehouse && warehouse.wareHouseId) {
          this.loadSupplierWarehouses();

          this.procurementSearchInput.warehouseIssue = warehouse ? warehouse.wareHouseId : undefined;
        }
      }
    });

    this.filter.advancements = [
      {
        label: this.translateService.instant(this.getTranslateKey('notServed')),
        value: Advancement.NOT_SERVED
      },
      {
        label: this.translateService.instant(this.getTranslateKey('partiallyServed')),
        value: Advancement.PARTIALLY_SERVED
      },
      {
        label: this.translateService.instant(this.getTranslateKey('served')),
        value: Advancement.SERVED
      }
    ];
  }

  public clearTableFilters(): void {
    this.filter.status = undefined;
    this.filter.advancement = undefined;
    this.filter.requestedDate = undefined;
    this.filter.type = undefined;
    this.filter.criticity = undefined;
    this.filter.workOrder = undefined;
    this.filter.shipperSite = undefined;
    this.filter.shipperWarehouse = undefined;
    this.filter.shipperWarehouses = [];
    this.filter.recepientSite = undefined;
    this.filter.recepientWarehouse = undefined;
    this.filter.recepientWarehouses = [];
    this.resultsTable = [...this.resultsTableSrc];
  }

  public filterTable(): void {
    this.resultsTable = this.resultsTableSrc.filter((elt: ProcurementFormInput) => {
      return (
        (!this.filter.status || elt._obj.procStatus === this.filter.status) &&
        (!this.filter.advancement || elt.advancement === this.filter.advancement) &&
        (!this.filter.requestedDate || (!!elt.expectedOn && elt.expectedOn <= this.filter.requestedDate)) &&
        (!this.filter.type || elt._obj.procType === this.filter.type) &&
        (!this.filter.criticity || elt.criticity === this.filter.criticity) &&
        (!this.filter.workOrder ||
          (!!elt._obj.bidmWorkOrder && elt._obj.bidmWorkOrder.woId === this.filter.workOrder)) &&
        (!this.filter.shipperSite ||
          (!!elt._obj.bidtSiteByBidtSiteIssueId && elt._obj.bidtSiteByBidtSiteIssueId === this.filter.shipperSite)) &&
        (!this.filter.shipperWarehouse ||
          (!!elt._obj.bidtWarehouseByBidtWarehouseIssueId &&
            elt._obj.bidtWarehouseByBidtWarehouseIssueId === this.filter.shipperWarehouse)) &&
        (!this.filter.recepientSite ||
          (!!elt._obj.bidtSiteByBidtSiteReceiptId &&
            elt._obj.bidtSiteByBidtSiteReceiptId === this.filter.recepientSite)) &&
        (!this.filter.recepientWarehouse ||
          (!!elt._obj.bidtWarehouseByBidtWarehouseReceiptId &&
            elt._obj.bidtWarehouseByBidtWarehouseReceiptId === this.filter.recepientWarehouse))
      );
    });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_PROCUREMENT_REQUEST_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.siteList = [];
    this.resultsTable = [];
    this.resultsTableSrc = [];
    this.selectedResults = [];
    this.criticalList = [];
    this.logisticsTypeList = [];
    this.displayComponentContext('global.search', true);

    this.loadDropdowns();
    this.resultTableCols = this.procurementRequestSearchService.loadTableCols();
  }

  /************************************
   * Fetch Dropdown Data
   ************************************/
  private loadDropdowns(): void {
    this.procurementRequestSearchService.findAllBireSite().subscribe({
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

    // Load Status List
    this.procurementRequestSearchService.loadStatusList().subscribe((res) => {
      this.statusList = ListUtils.orEmpty(res)
        .filter((status) => status.value !== AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED)
        .sort((s1, s2) => s1.label.localeCompare(s2.label));
    });

    this.documentList = [{ label: this.translateService.instant(this.getTranslateKey('workOrder')), value: '0' }];

    this.procurementRequestSearchService.getWarehouseCategoryMap().subscribe((res) => {
      if (res && res.length) {
        this.logisticsTypeList = res.sort((s1, s2) => s1.value.localeCompare(s2.value));
        this.procurementSearchInput.whType = this.logisticsTypeList[0].value;
        this.selectedSupplierWarehouseCategory = this.logisticsTypeList[0].value;
        this.filter.shipperWarehouseType = this.logisticsTypeList[0].value;
        this.filter.recepientWarehouseType = this.logisticsTypeList[0].value;
      }
    });

    this.procurementRequestSearchService.loadCriticalityList().subscribe((res) => {
      res.forEach((criticity) => {
        this.criticalList.push({
          label: criticity.label,
          value: criticity.value
        });
      });
      this.criticalList = LogisticalUtils.sortCriticities(this.criticalList as LabelValue<string>[]);
      this.criticalList = [
        {
          label: this.translateService.instant(this.getTranslateKey('all')),
          value: undefined
        },
        ...this.criticalList
      ];
    });

    this.customerList = [];
    this.procurementRequestSearchService.findAllBidoCustomer().subscribe((customers: BidoCustomerDTO[]) => {
      customers.forEach((customer: BidoCustomerDTO) => {
        if (customer.isOwner && customer.customerCode) {
          this.customerList.push({
            label:
              (customer.customerCode as string) +
              (customer.customerName ? ' - ' + (customer.customerName as string) : ''),
            value: customer
          });
        }
      });
    });
  }

  public loadRecipientWarehouses(): void {
    this.procurementSearchInput.whCode = undefined;
    this.shopList = [];

    if (!!this.procurementSearchInput.siteName && this.procurementSearchInput.whType) {
      this.loadWareHouses(this.procurementSearchInput.siteName, this.procurementSearchInput.whType).subscribe({
        next: (warehouses) => {
          this.shopList = warehouses;
        }
      });
    }
  }

  public loadRecipientWarehousesFilter(): void {
    this.filter.recepientWarehouse = undefined;
    this.filter.recepientWarehouses = [];

    if (!!this.filter.recepientSite && this.filter.recepientWarehouseType) {
      this.loadWareHouses(this.filter.recepientSite, this.filter.recepientWarehouseType).subscribe({
        next: (warehouses) => {
          this.filter.recepientWarehouses = warehouses;
        }
      });
    }
  }

  public loadSupplierWarehouses(): void {
    this.procurementSearchInput.warehouseIssue = undefined;
    this.supplierWarehouses = [];

    if (!!this.procurementSearchInput.siteIssue && this.selectedSupplierWarehouseCategory) {
      this.loadWareHouses(this.procurementSearchInput.siteIssue, this.selectedSupplierWarehouseCategory).subscribe({
        next: (warehouses) => {
          this.supplierWarehouses = warehouses;
        }
      });
    }
  }

  public loadSupplierWarehousesFilter(): void {
    this.filter.shipperWarehouse = undefined;
    this.filter.shipperWarehouses = [];

    if (!!this.filter.shipperSite && this.filter.shipperWarehouseType) {
      this.loadWareHouses(this.filter.shipperSite, this.filter.shipperWarehouseType).subscribe({
        next: (warehouses) => {
          this.filter.shipperWarehouses = warehouses;
        }
      });
    }
  }

  private loadWareHouses(siteId: number, warehouseCategory: string): Observable<LabelValue<number>[]> {
    return this.procurementRequestSearchService.getWarehousesBySiteId(siteId).pipe(
      map((warehouses) => {
        return warehouses
          .filter(
            (warehouse) =>
              !!warehouse.whCode &&
              !!warehouse.whName &&
              !!warehouse.whCategory &&
              warehouseCategory === warehouse.whCategory
          )
          .map((warehouse) => {
            return {
              label: `${warehouse.whCode} - ${warehouse.whName}`,
              value: warehouse.wareHouseId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      })
    );
  }

  /************************************
   * Action Search
   ************************************/
  public search(): void {
    this.resultsTable = [];
    this.resultsTableSrc = [];
    this.selectedResults = [];
    this.getProcurementTableData();
  }

  /************************************
   * Fetch Table Data
   ************************************/
  private getProcurementTableData(): void {
    this.isLoading = true;

    super.scrollToAnchor(this.resultsContainerAnchor);

    const searchMappedInputValue = this.getMappedInputOfModel();
    this.logisticsService
      .findProcurementRequestsByCriteria(searchMappedInputValue)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((response) => {
        if (response && response.length) {
          this.mapRespToMaterialTableData(response);
        }

        super.differ(() => {
          super.scrollToAnchor(this.resultsContainerAnchor);
        });
      });
  }

  private formatQuantity(procurementRequest: BidtProcurementRequestDTO): string {
    if (
      procurementRequest.bidtProcReqItems &&
      procurementRequest.bidtProcReqItems.length === 1 &&
      procurementRequest.bidtProcReqItems[0].requestedQuantity
    ) {
      return NumberUtils.roundNumber(
        NumberUtils.fromString(procurementRequest.bidtProcReqItems[0].requestedQuantity),
        2
      ).toString();
    }

    return '';
  }

  private formatQuantityUnit(procurementRequest: BidtProcurementRequestDTO): string {
    if (
      procurementRequest.bidtProcReqItems &&
      procurementRequest.bidtProcReqItems.length === 1 &&
      procurementRequest.bidtProcReqItems[0].requestedQuantity
    ) {
      const unit =
        procurementRequest.bidtProcReqItems[0].birePn && procurementRequest.bidtProcReqItems[0].birePn.quantityUnit
          ? procurementRequest.bidtProcReqItems[0].birePn.quantityUnit
          : undefined;

      return StringUtils.orEmpty(unit);
    }

    return '';
  }

  /************************************
   * Mapping API Response
   ************************************/
  private mapRespToMaterialTableData(responseData: BidtProcurementRequestDTO[]): void {
    this.resultsTableSrc = [];
    this.filter.workOrders = [];
    responseData.forEach((value: BidtProcurementRequestDTO) => {
      const tableObject: ProcurementFormInput = {
        _obj: value,
        id: value.id,
        procurementRequest: value.procCode,
        procurementRequestDescription: value.procType,
        referenceDocument: !!value.bidmWorkOrder ? value.bidmWorkOrder.woCode : '',
        referenceDocumentDesc: !!value.bidmWorkOrder ? value.bidmWorkOrder.woDescription : '',
        recipient: !!value.bidtSiteReceipt ? value.bidtSiteReceipt.siteName : '',
        recipientDesc: !!value.bidtWarehouseReceipt ? value.bidtWarehouseReceipt.whName : '',
        shipper: !!value.bidtSiteIssue ? value.bidtSiteIssue.siteName : '',
        shipperDesc: !!value.bidtWarehouseIssue ? value.bidtWarehouseIssue.whName : '',
        quantity: this.formatQuantity(value),
        quantityUnit: this.formatQuantityUnit(value),
        status: value.procStatus,
        statusDesc: value.requestedDate,
        expectedOn: value.requestedDate,
        criticity: value.criticality,
        advancement: this.calculateSituation(value),
        customerName: !!value.bidoCustomer ? value.bidoCustomer.customerName : '',
        assetRecipient: BidoEquipmentUtils.createAssetRepresentation(value.bidoEquipmentDTO)
      };
      if (value.bidtProcReqItems && value.bidtProcReqItems.length) {
        if (value.bidtProcReqItems.length === 1) {
          tableObject.materials = value.bidtProcReqItems[0].birePn
            ? value.bidtProcReqItems[0].birePn.pnCode
            : undefined;
          tableObject.materialsDesc = value.bidtProcReqItems[0].birePn
            ? value.bidtProcReqItems[0].birePn.articleDesignation
            : undefined;
        } else {
          tableObject.numberOfRecords = value.bidtProcReqItems.length;
        }
      }
      if (
        !!this.filter.workOrders &&
        !!value.bidmWorkOrder &&
        !this.filter.workOrders.find((elt) => !!value.bidmWorkOrder && elt.value === value.bidmWorkOrder.woId)
      ) {
        this.filter.workOrders.push({
          label: value.bidmWorkOrder.woCode as string,
          value: value.bidmWorkOrder.woId as string
        });
      }
      this.resultsTableSrc.push(tableObject);
    });
    this.filter.workOrders = this.filter.workOrders.sort((s1, s2) => s1.label.localeCompare(s2.label));
    this.resultsTable = [...this.resultsTableSrc];
  }

  private getMappedInputOfModel(): FindProcurementRequestsByCriteriaInput {
    const mappedModelValue: BidtProcurementRequestDTO = {
      procType: this.procurementSearchInput.type,
      bidtSiteByBidtSiteIssueId: this.procurementSearchInput.siteIssue,
      bidtSiteByBidtSiteReceiptId: this.procurementSearchInput.siteName,
      bidtWarehouseByBidtWarehouseReceiptId: this.procurementSearchInput.whCode,
      bidtWarehouseByBidtWarehouseIssueId: this.procurementSearchInput.warehouseIssue,
      criticality: this.procurementSearchInput.criticality,
      procCode: this.procurementSearchInput.procCode,
      procStatus: this.procurementSearchInput.procStatus,
      requestedDate: this.procurementSearchInput.requestedDate
        ? moment(this.procurementSearchInput.requestedDate)
            .endOf('day')
            .toDate()
        : undefined,
      bidtDocuments:
        !!this.procurementSearchInput.documentType || !!this.procurementSearchInput.woCode
          ? [
              {
                documentType: this.procurementSearchInput.documentType,
                documentCode: this.procurementSearchInput.woCode
              }
            ]
          : [],
      bidoCustomerCustomerCode: !!this.procurementSearchInput.customer
        ? this.procurementSearchInput.customer.customerCode
        : undefined,
      bidoCustomerMandant: !!this.procurementSearchInput.customer
        ? this.procurementSearchInput.customer.customerMandant
        : undefined
    };

    const procReqStatusExcluded = [AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED];
    if (this.procurementSearchInput.procStatus !== AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED) {
      procReqStatusExcluded.push(AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED);
    }

    const criteriaInput: FindProcurementRequestsByCriteriaInput = {
      procReqItemPnCode: this.selectedAssetPn ? this.selectedAssetPn.pnCode : undefined,
      procReqItemDesignation: this.selectedDesignation,
      assetCode: this.selectedAsset ? this.selectedAsset.equipmentCode : undefined,
      bidtProcurementRequest: mappedModelValue,
      procReqStatusExcluded
    };

    return criteriaInput;
  }

  /************************************
   * Open Form Component
   ************************************/
  public openProcurementDetails(rowData: ProcurementFormInput): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
      objectId:
        rowData && rowData.procurementRequest ? this.serializationService.serialize({ id: rowData.id }) : undefined,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isCancelButtonVisible(): boolean {
    return (
      this.selectedResults.length === 1 &&
      (this.selectedResults[0]._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||
        this.selectedResults[0]._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||
        this.selectedResults[0]._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED) &&
      this.sessionService.hasUserRightByUseCase(
        BidoFunctionTypeConstants.UC_MM_PROCUREMENT,
        BidoFunctionTypeConstants.DEGREE_MANAGE
      )
    );
  }

  public isDeleteButtonVisible(): boolean {
    return (
      this.selectedResults.length === 1 &&
      this.selectedResults[0]._obj.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT &&
      !!this.sessionService.loggedUser &&
      this.selectedResults[0]._obj.statusUser === this.sessionService.loggedUser.login
    );
  }

  public cancelProcurementRequest(): void {
    if (this.selectedResults.length === 1) {
      this.logisticsService.cancelProcurementRequest(this.selectedResults[0].id as number).subscribe(() => {
        this.selectedResults = [];
        this.getProcurementTableData();

        this.messageService.showSuccessMessage('successOnCancelProcurementRequest');
      });
    }
  }

  public deleteProcurementRequest(): void {
    if (this.selectedResults.length === 1) {
      this.logisticsService.deleteProcurementRequest(this.selectedResults[0].id as number).subscribe(() => {
        this.selectedResults = [];
        this.getProcurementTableData();

        this.messageService.showSuccessMessage('successOnDeleteProcurementRequest');
      });
    }
  }

  /************************************
   * Manage button visibilty
   ************************************/
  public getManageButtonVisibility(): boolean {
    const result = false;
    this.selectedResults.filter((res) => {
      // TODO: Manage visibility of manage button
    });

    return result;
  }

  public getStatusLabel(statusValue: string | undefined): string {
    const matchingStatus = this.statusList.find((status) => status.value === statusValue);

    return matchingStatus ? StringUtils.orEmpty(matchingStatus.label) : '';
  }

  /************************************
   * Open Material Req Mgmt Form
   ************************************/
  public openProcurementManagmentPage(): void {
    if (this.selectedResults.length === 1 && this.selectedResults[0]._obj.bidtProcReqItems) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize({
          prId: this.selectedResults[0]._obj.id,
          prItemId: this.selectedResults[0]._obj.bidtProcReqItems[0].id
        })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openPart(row: ProcurementFormInput): void {
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

  public openWorkOrder(row: ProcurementFormInput): void {
    if (row._obj.bidmWorkOrder) {
      const data: PageComponentData = {
        componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
        id: this.tabService.generateId(),
        objectId: this.serializationService.serialize({
          projectId: row._obj.bidmWorkOrder.projectId,
          woId: row._obj.bidmWorkOrder.woId
        }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public createProcurementRequest() {
    this.showCreateProcurementDialog = true;
  }

  public openAssetDialog(): void {
    this.assetDialogVisible = true;
  }

  public onSelectAsset(equipment: BidoEquipmentDTO): void {
    this.selectedAsset = equipment;
    this.selectedAssetName = BidoEquipmentUtils.createAssetRepresentation(equipment);
  }

  public openAssetPnDialog(): void {
    this.assetPnDialogVisible = true;
  }

  public clearAssetPn(): void {
    this.selectedAssetPn = undefined;
  }

  public onSelectAssetPn(pn: BirePnDTO): void {
    this.selectedAssetPn = pn;
  }

  private calculateSituation(procurementRequest: BidtProcurementRequestDTO): Advancement {
    const stockMvts = ListUtils.orEmpty(procurementRequest.bidtProcReqItems)
      .map((procReqItem) =>
        ListUtils.orEmpty(procReqItem.workshopEntries).filter(
          (stockMvt) => stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT
        )
      )
      .reduce((acc, x) => acc.concat(x), []);

    const allCount = stockMvts.length;
    const servedCount = stockMvts.filter(
      (stockMvt) => stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    ).length;

    return servedCount === 0
      ? Advancement.NOT_SERVED
      : servedCount > 0 && servedCount < allCount
      ? Advancement.PARTIALLY_SERVED
      : Advancement.SERVED;
  }

  public openWorkPackageAsset(row: ProcurementFormInput): void {
    if (row._obj && row._obj.bidoEquipmentDTO) {
      const equipmentObject = row._obj.bidoEquipmentDTO;
      let componentId: string;
      if (equipmentObject.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
        componentId = ComponentConstants.FLE_AIRCRAFT_FORM;
      } else if (equipmentObject.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY) {
        componentId = ComponentConstants.FLE_ENGINE_FORM;
      } else {
        componentId = ComponentConstants.FLE_EQUIPMENT_FORM;
      }

      const data: PageComponentData = {
        componentId,
        id: this.tabService.generateId(),
        objectId: this.serializationService.serialize({
          equipmentCode: equipmentObject.equipmentCode
        }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }
}
