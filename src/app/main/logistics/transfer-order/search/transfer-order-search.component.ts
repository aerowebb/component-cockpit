import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindTransferOrdersByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-transfer-orders-by-criteria-input.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FindTransferOrdersByCriteriaOutput } from '../../../../shared/types/api-types/find-transfer-orders-by-criteria-output';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { LogisticsService } from '../../logistics.service';
import { TransferOrderService } from '../shared/transfer-order-service';

import { TransferOrderSearchService } from './transfer-order-search.service';

interface TransferOrderInterface {
  transferOrder?: string;
  transferDesignation?: string;
  refDocument?: string;
  refNum?: string;
  refDesignation?: string;
  supplier?: string;
  supplierCode?: string;
  supplierName?: string;
  supplierWhCode?: string;
  supplierWhName?: string;
  recipient?: string;
  recipientCode?: string;
  recipientName?: string;
  recipientWhCode?: string;
  recipientWhName?: string;
  article?: string;
  hasMultipleArticle?: boolean;
  articleNum?: string;
  articleDesignation?: string;
  quantity?: string;
  quantityUnit?: string;
  status?: string;
  expectedDate?: Date;
  criticalityCode?: string;
  criticality?: string;
  transferOrderDto?: FindTransferOrdersByCriteriaOutput;
  supplierCustomerCode?: string;
  supplierCustomerName?: string;
  recipientCustomerCode?: string;
  recipientCustomerName?: string;
  sn?: string;
  batchNumber?: string;
  _transferOrderDTO?: BidtTransferOrderDTO;
}

interface TransferOrderSearchInput {
  selectedReference?: string;
  selectedType?: string;
  selectedExpectedDate?: Date;
  selectedStatus?: string;
  selectedPartner?: string;
  selectedPartnerCode?: string;
  selectedSite?: number;
  selectedWarehouse?: string;
  warehouseType?: string;
  selectedDocument?: string;
  selectedDocumentNumber?: string;
  recipientSelectedPartner?: string;
  recipientSelectedPartnerCode?: string;
  recipientSelectedWarehouse?: string;
  recipientSelectedSite?: number;
  recipientWarehouseType?: string;
  selectedCriticality?: string;
  selectedDocumentType?: number;
  selectedDocumentCode?: string;
}

enum ViewMode {
  COLLAPSE,
  EXPAND
}

interface ToTableRow {
  code?: string;
  criticality?: string;
  quantity?: number;
  statusDate?: Date;
  _obj: BidtTransferOrderDTO;
}

@Component({
  selector: 'aw-transfer-order-search',
  styleUrls: ['./transfer-order-search.component.scss'],
  templateUrl: './transfer-order-search.component.html'
})
export class TransferOrderSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly ALL: string = 'ALL';
  public static readonly SHIPMENT: string = 'shipment';

  public static readonly SUPPLIER_INTERNAL: number = 0;
  public static readonly SUPPLIER_EXTERNAL: number = 1;
  public static readonly RECIPIENT_INTERNAL: number = 0;
  public static readonly RECIPIENT_EXTERNAL: number = 1;

  public readonly viewMode: typeof ViewMode;

  public readonly SEARCH_CRITERIA_ID: string; // TODO: Add a search ID

  public readonly component: typeof TransferOrderSearchComponent;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public showAdvancedCriteria: boolean;
  public showCreateTransferOrderDialog: boolean;

  // Dropdowns
  public typeList: LabelValue<number>[];
  public statusList: LabelValue<string>[];
  public partnerList: LabelValue<string>[];
  public siteList: SelectItem[];
  public warehouseList: LabelValue<string>[];
  public documentTypes: LabelValue<number>[];
  public procurementRequestTypeList: LabelValue<string>[];

  public suppliers: LabelValue<number>[];
  public selectedSupplier: number | undefined;
  public recipients: LabelValue<number>[];
  public selectedRecipient: number | undefined;
  public showAdvancedSearchCriteria: boolean;
  public criticalities: LabelValue<string | undefined>[];

  public resultsTableDataSource: TableDataSource<TransferOrderInterface>;

  public showCustomerDialog: boolean;
  public customDialogSource: number | undefined;

  public awPropertiesConstants: typeof AWPropertiesConstants;
  public shopList: SelectItem[];
  public recipientshopList: SelectItem[];
  private completeSiteList: BidtWarehouseDTO[];
  private completeSiteListRecipient: BidtWarehouseDTO[];

  public toTableColumns: TableColumn[];
  public toTable: ToTableRow[];
  public toTableLoading: boolean;
  public toTableViewMode: ViewMode;
  public selectedTos: ToTableRow[];

  public searchCriteria: TransferOrderSearchInput = {};

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly translateService: TranslateService,
    public readonly sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly transferOrderSearchService: TransferOrderSearchService,
    private readonly logisticsService: LogisticsService,
    private readonly transferOrderService: TransferOrderService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.component = TransferOrderSearchComponent;
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_TRANSFER_ORDER_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
    this.awPropertiesConstants = AWPropertiesConstants;

    this.completeSiteList = [];
    this.suppliers = [];
    this.recipients = [];

    this.criticalities = [];
    this.toTable = [];
    this.toTableLoading = false;
    this.toTableViewMode = ViewMode.COLLAPSE;
    this.selectedTos = [];

    this.documentTypes = this.transferOrderService.loadDocumentTypes();

    this.loadCriticalities();
    this.loadSuppliers();
    this.loadRecipients();
    this.loadDropdown();
    this.loadProcurementRequestType();
    this.initTableCols();
    this.setToTableColumns();
  }

  /***************************************
   * INIT TABLE
   ***************************************/
  private initTableCols(): void {
    this.resultsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'transferOrder',
          translateKey: this.getTranslateKey('transferOrder'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'refDocument',
          translateKey: this.getTranslateKey('refDocument'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'supplier',
          translateKey: this.getTranslateKey('supplier'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'recipient',
          translateKey: this.getTranslateKey('recipient'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'article',
          translateKey: this.getTranslateKey('article'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'quantity',
          translateKey: this.getTranslateKey('quantity'),
          alignment: ColumnAlignment.LEFT,
          width: '5%'
        },
        {
          field: 'status',
          translateKey: this.getTranslateKey('status'),
          alignment: ColumnAlignment.LEFT,
          width: '7.5%'
        },
        {
          field: 'expectedDate',
          translateKey: this.getTranslateKey('expectedDate'),
          alignment: ColumnAlignment.LEFT,
          width: '7.5%'
        },
        {
          field: 'criticality',
          translateKey: this.getTranslateKey('criticality'),
          alignment: ColumnAlignment.LEFT,
          width: '7.5%'
        }
      ],
      data: [],
      customGlobalFilter: (currentData: TransferOrderInterface, globalSearchText: string | undefined) => {
        if (!globalSearchText) {
          return true;
        }
        const upperCaseSearchText = globalSearchText.toUpperCase();

        return (currentData.transferOrder && currentData.transferOrder.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.transferDesignation &&
            currentData.transferDesignation.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.refNum && currentData.refNum.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.refDesignation && currentData.refDesignation.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.recipientCode && currentData.recipientCode.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.recipientName && currentData.recipientName.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.recipientWhCode && currentData.recipientWhCode.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.recipientWhName && currentData.recipientWhName.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.supplierCode && currentData.supplierCode.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.supplierName && currentData.supplierName.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.supplierWhCode && currentData.supplierWhCode.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.supplierWhName && currentData.supplierWhName.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.articleNum && currentData.articleNum.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.articleNum && currentData.articleNum.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.articleDesignation &&
            currentData.articleDesignation.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.status && currentData.status.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.quantity && currentData.quantity.toUpperCase().includes(upperCaseSearchText)) ||
          (currentData.criticality && currentData.criticality.toUpperCase().includes(upperCaseSearchText))
          ? true
          : false;
      }
    });
  }

  /***************************************
   * Load Dropdowns
   ***************************************/
  private loadDropdown() {
    this.siteList = [];
    this.transferOrderSearchService.fetchSiteList().subscribe((res: BidtSiteDTO[]) => {
      res.forEach((site) => {
        if (!!site.siteId && !!site.siteName) {
          this.siteList.push({
            label: site.siteName,
            value: site.siteId
          });
        }
      });
    });

    this.partnerList = this.transferOrderSearchService.fetchPartnerList();
    this.getWarehouseWorkshopList();
    this.transferOrderService.fetchStatusList().subscribe((res) => {
      this.statusList = res;
    });
    this.transferOrderService.fetchTypeList().subscribe((res) => {
      this.typeList = res;
    });
  }

  private loadCriticalities(): void {
    this.transferOrderService.fetchCriticalityList().subscribe({
      next: (criticalities) => {
        this.criticalities = [
          {
            label: this.translateService.instant(this.getTranslateKey('all')) as string,
            value: undefined
          },
          ...criticalities.map((criticality) => {
            return {
              label: criticality.label,
              value: criticality.value
            };
          })
        ];
      }
    });
  }

  private loadProcurementRequestType() {
    this.transferOrderService
      .fetchProcurementRequestTypeList()
      .subscribe((procReq) => (this.procurementRequestTypeList = ListUtils.orEmpty(procReq)));
  }

  private loadSuppliers() {
    this.suppliers = [
      {
        label: this.translateService.instant('internal') as string,
        value: TransferOrderSearchComponent.SUPPLIER_INTERNAL
      },
      {
        label: this.translateService.instant('external') as string,
        value: TransferOrderSearchComponent.SUPPLIER_EXTERNAL
      }
    ];
    this.selectedSupplier = this.suppliers[0].value;
  }

  private loadRecipients() {
    this.recipients = [
      {
        label: this.translateService.instant('internal') as string,
        value: TransferOrderSearchComponent.RECIPIENT_INTERNAL
      },
      {
        label: this.translateService.instant('external') as string,
        value: TransferOrderSearchComponent.RECIPIENT_EXTERNAL
      }
    ];
    this.selectedRecipient = this.recipients[0].value;
  }

  private getWarehouseWorkshopList(): void {
    this.transferOrderSearchService.fetchWarehouseList().subscribe((res) => {
      if (res && res.length) {
        this.warehouseList = [...res].sort((s1, s2) => s1.value.localeCompare(s2.value));
        this.searchCriteria.recipientWarehouseType =
          this.warehouseList && this.warehouseList.length ? this.warehouseList[0].value : '';
        this.searchCriteria.warehouseType =
          this.warehouseList && this.warehouseList.length ? this.warehouseList[0].value : '';
      }
    });
  }

  public search(): void {
    this.toTableLoading = true;
    this.selectedTos = [];

    const searchCriteria: FindTransferOrdersByCriteriaInput = {
      transferOrder: {
        shipmentExpectedDate: this.searchCriteria.selectedExpectedDate,
        criticality: this.searchCriteria.selectedCriticality,
        torStatus: this.searchCriteria.selectedStatus,
        torType: this.searchCriteria.selectedType,
        torCode: this.searchCriteria.selectedReference,
        bidtSiteByBidtSiteSenderId: this.searchCriteria.selectedSite,
        bidtWarehouseByBidtWarehouseSenderId: this.completeSiteList
          ? this.completeSiteList
              .filter((site) => site.whCode === this.searchCriteria.selectedWarehouse)
              .map((site) => site.wareHouseId)[0]
          : undefined,
        bidtSiteByBidtSiteReceiverId: this.searchCriteria.recipientSelectedSite,
        bidtWarehouseByBidtWarehouseReceiverId: this.completeSiteListRecipient
          ? this.completeSiteListRecipient
              .filter((site) => site.whCode === this.searchCriteria.recipientSelectedWarehouse)
              .map((site) => site.wareHouseId)[0]
          : undefined,
        bidoCustomerByFkBidtTraTorSendeBidoCusCustomerCode: this.searchCriteria.selectedPartnerCode,
        bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode: this.searchCriteria.recipientSelectedPartner
      },
      transferOrderStatusExcluded: this.searchCriteria.selectedStatus
        ? []
        : [AWPropertiesConstants.TRANSFER_ORDER_STATUS_PERFORMED, AWPropertiesConstants.TRANSFER_ORDER_STATUS_CANCELED]
    };

    this.logisticsService
      .findTransferOrdersByCriteria(searchCriteria)
      .pipe(
        finalize(() => {
          this.toTableLoading = false;
        })
      )
      .subscribe({
        next: (datas) => {
          super.differ(() => {
            this.resultsTableDataSource.setData([]);
            datas.forEach((data) => this.loadTransferOrderInterface(data));
            super.scrollToAnchor(this.resultsContainerAnchor);
          });
        }
      });
  }
  public loadTransferOrderInterface(data: FindTransferOrdersByCriteriaOutput) {
    const refNum = data.bidtProcurementRequest ? data.bidtProcurementRequest.procCode : undefined;
    const refDesignation = data.bidtProcurementRequest ? data.bidtProcurementRequest.procType : undefined;
    let birePn$: Observable<BirePnDTO> | undefined;

    const result: TransferOrderInterface = {};
    if (data.bidtTransferOrder) {
      result._transferOrderDTO = data.bidtTransferOrder;
      result.transferOrder = data.bidtTransferOrder.torCode;

      result.transferDesignation = this.typeList
        .filter((ty) => ty.value.toString() === data.bidtTransferOrder.torType)
        .map((res) => res.label)[0];

      result.refDesignation = refDesignation
        ? this.procurementRequestTypeList.filter((pr) => pr.value === refDesignation).map((pr) => pr.label)[0]
        : data.bidtTransferOrder.bidmProject
        ? (this.translateService.instant(this.getTranslateKey('workPackage')) as string)
        : undefined;
      result.refDocument = result.refDesignation;
      result.status = this.statusList
        .filter((st) => st.value === data.bidtTransferOrder.torStatus)
        .map((res) => res.label)[0];
      result.criticalityCode = data.bidtTransferOrder.criticality;
      result.criticality = this.criticalities
        .filter((cr) => cr.value === data.bidtTransferOrder.criticality)
        .map((res) => res.label)[0];
      result.transferOrderDto = data;

      if (refNum || data.bidtTransferOrder.bidmProjectProjectId) {
        result.refNum = refNum
          ? refNum
          : !!data.bidtTransferOrder.bidmProject
          ? `${data.bidtTransferOrder.bidmProject.projectNumber}`
          : '';
      }

      if (data.bidtTransferOrder.bidtSiteIssue) {
        result.supplierCode = data.bidtTransferOrder.bidtSiteIssue.siteCode;
        result.supplierName = data.bidtTransferOrder.bidtSiteIssue.siteName;
        result.supplier = `${result.supplierCode} ${result.supplierName}`;
      }

      if (data.bidtTransferOrder.bidtWarehouseIssue) {
        result.supplierWhCode = data.bidtTransferOrder.bidtWarehouseIssue.whCode;
        result.supplierWhName = data.bidtTransferOrder.bidtWarehouseIssue.whName;
      }

      if (data.bidtTransferOrder.bidtSiteReceipt) {
        result.recipientCode = data.bidtTransferOrder.bidtSiteReceipt.siteCode;
        result.recipientName = data.bidtTransferOrder.bidtSiteReceipt.siteName;
        result.recipient = `${result.recipientCode} ${result.recipientName}`;
      }

      if (data.bidtTransferOrder.bidtWarehouseReceipt) {
        result.recipientWhCode = data.bidtTransferOrder.bidtWarehouseReceipt.whCode;
        result.recipientWhName = data.bidtTransferOrder.bidtWarehouseReceipt.whName;
      }

      if (data.bidtTransferOrder.bidoCustomerIssue) {
        result.supplierCustomerCode = data.bidtTransferOrder.bidoCustomerIssue.customerCode;
        result.supplierCustomerName = data.bidtTransferOrder.bidoCustomerIssue.customerName;
      }

      if (data.bidtTransferOrder.bidoCustomerReceipt) {
        result.recipientCustomerCode = data.bidtTransferOrder.bidoCustomerReceipt.customerCode;
        result.recipientCustomerName = data.bidtTransferOrder.bidoCustomerReceipt.customerName;
      }

      if (data.bidtTransferOrder.bidtTorItems) {
        result.hasMultipleArticle = data.bidtTransferOrder.bidtTorItems.length > 1;
        if (result.hasMultipleArticle) {
          result.quantity = `${data.bidtTransferOrder.bidtTorItems.length}`;
        } else {
          if (data.bidtTransferOrder.bidtTorItems[0] && data.bidtTransferOrder.bidtTorItems[0].birePnPnCode) {
            birePn$ = this.transferOrderSearchService.getBirePnByPn({
              pnCode: data.bidtTransferOrder.bidtTorItems[0].birePnPnCode
            });
            result.quantity = `${data.bidtTransferOrder.bidtTorItems[0].quantity}`;
          }
        }
      }

      if (data.bidtTransferOrder.shipmentExpectedDate) {
        result.expectedDate = new Date(data.bidtTransferOrder.shipmentExpectedDate);
      }
    }

    if (birePn$) {
      birePn$.subscribe((birePn) => {
        result.article = `${birePn.pnCode} ${birePn.articleDesignation}`;
        result.articleNum = birePn.pnCode;
        result.articleDesignation = birePn.articleDesignation;
        result.quantityUnit = birePn.quantityUnit;
        this.resultsTableDataSource.addData([result]);
      });
    } else {
      this.resultsTableDataSource.addData([result]);
    }
    let nbSelectedMaterial = 0;
    if (
      data.bidtTransferOrder.bidtTorItems &&
      data.bidtTransferOrder.bidtTorItems.length === 1 &&
      data.bidtTransferOrder.bidtTorItems[0].pickingMovements
    ) {
      data.bidtTransferOrder.bidtTorItems[0].pickingMovements.forEach((mvt: BidtStockMvtDTO) => {
        if (mvt.bidtStockMvtId === null) {
          result.sn = mvt.stockMvtSn;
          result.batchNumber = mvt.stockMvtBatchNumber;
          nbSelectedMaterial++;
        }
      });
    }
    if (nbSelectedMaterial > 1) {
      result.sn = undefined;
      result.batchNumber = undefined;
    }
  }

  public toogleViewMode(): void {
    this.toTableViewMode = this.toTableViewMode === ViewMode.COLLAPSE ? ViewMode.EXPAND : ViewMode.COLLAPSE;
  }

  public isAllOrderPlanned(): boolean {
    return (
      this.resultsTableDataSource.dataSelection.filter(
        (row) =>
          !!row._transferOrderDTO &&
          !!row._transferOrderDTO.torStatus &&
          row._transferOrderDTO.torStatus === AWPropertiesConstants.TRANSFER_ORDER_STATUS_PLANNED
      ).length === this.resultsTableDataSource.dataSelection.length
    );
  }

  public cancelSelectedOrder(): void {
    const partialMessageKey =
      this.resultsTableDataSource.dataSelection.length > 1 ? 'confirmCancelMany' : 'confirmCancelOne';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const transferOrderToCancelList = this.resultsTableDataSource.dataSelection
          .filter((row) => !!row._transferOrderDTO)
          .map((transferOrderRow) => {
            return transferOrderRow._transferOrderDTO as BidtTransferOrderDTO;
          });
        this.logisticsService.cancelTransferOrder(transferOrderToCancelList).subscribe((result) => {
          this.resultsTableDataSource.dataSelection = [];
          this.search();
        });
      }
    });
  }

  public openSelectedOrder() {
    if (this.resultsTableDataSource.dataSelectionCount === 1) {
      if (this.resultsTableDataSource.dataSelection[0].transferOrderDto) {
        this.openOrder(this.resultsTableDataSource.dataSelection[0].transferOrderDto.bidtTransferOrder.id);
      }
    }
  }

  public openOrder(id: number | undefined) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
      objectId: this.serializationService.serialize(id),
      openMode: ComponentOpenMode.Read
    };

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openProcurementRequest(tor: TransferOrderInterface) {
    if (!!tor.transferOrderDto && !!tor.transferOrderDto.bidtProcurementRequest) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
        objectId:
          tor.transferOrderDto && tor.transferOrderDto.bidtProcurementRequest
            ? this.serializationService.serialize({ id: tor.transferOrderDto.bidtProcurementRequest.id })
            : undefined,
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (!!tor.transferOrderDto && !!tor.transferOrderDto.bidtTransferOrder.bidmProject) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize({
          wpId: tor.transferOrderDto.bidtTransferOrder.bidmProject.projectId
        })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openCustomerDialog(source?: number): void {
    this.showCustomerDialog = true;
    if (source === 0) {
      this.customDialogSource = source;
    }
  }

  public openArticle(pnCode: string): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ pnCode })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEquipment(tor: TransferOrderInterface): void {
    const equip: BidoEquipmentDTO = {};
    if (tor.sn) {
      equip.sn = tor.sn;
    }
    equip.pnCode = tor.articleNum;
    equip.batchNumber = tor.batchNumber;
    equip.bidoEquipmentAttributeList = [];
    equip.equipmentFunction = '';

    if (tor.sn) {
      this.transferOrderService.findBidoEquipmentsByPnAndSn(equip).subscribe({
        next: (results) => {
          if (results.length === 1) {
            const objectId: BidoEquipmentDTO = {
              equipmentCode: results[0].equipmentCode
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
        }
      });
    } else {
      this.transferOrderService.findBidoEquipmentByPnAndBatchNumber(equip).subscribe({
        next: (result) => {
          if (result) {
            const data: PageComponentData = {
              id: this.tabService.generateId(),
              componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
              openMode: ComponentOpenMode.Read
            };

            data.objectId = result.equipmentCode;
            const labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          }
        }
      });
    }
  }

  /** On selecting business partner */
  public onSelectedCustomer(event: { customerCode: string; customerName: string }): void {
    if (this.customDialogSource === 0) {
      this.searchCriteria.selectedPartnerCode = event.customerCode;
      this.searchCriteria.selectedPartner = event.customerName;
    } else {
      this.searchCriteria.recipientSelectedPartnerCode = event.customerCode;
      this.searchCriteria.recipientSelectedPartner = event.customerName;
    }

    this.customDialogSource = undefined;
  }

  public loadWareHouseList(type: string): void {
    let selectedSite = 0;
    if (type === 'recipient') {
      this.searchCriteria.recipientSelectedWarehouse = undefined;
      this.completeSiteListRecipient = [];
      this.recipientshopList = [];
      selectedSite = this.searchCriteria.recipientSelectedSite || 0;
    } else {
      this.searchCriteria.selectedWarehouse = undefined;
      this.completeSiteList = [];
      this.shopList = [];
      selectedSite = this.searchCriteria.selectedSite || 0;
    }
    if (selectedSite !== 0) {
      this.transferOrderSearchService.getWarehousesBySiteId(selectedSite).subscribe((res: BidtWarehouseDTO[]) => {
        if (res && res.length) {
          if (type === 'recipient') {
            this.completeSiteListRecipient = res;
          } else {
            this.completeSiteList = res;
          }
          this.getSelectedWareHouseList(type);
        }
      });
    }
  }

  public getSelectedWareHouseList(type: string): void {
    let arrayObject: BidtWarehouseDTO[];
    let selectedWarehouseType;
    if (type === 'recipient') {
      arrayObject = [...this.completeSiteListRecipient];
      this.recipientshopList = [];
      selectedWarehouseType = this.searchCriteria.recipientWarehouseType;
      this.searchCriteria.recipientSelectedWarehouse = undefined;
    } else {
      arrayObject = [...this.completeSiteList];
      this.shopList = [];
      selectedWarehouseType = this.searchCriteria.warehouseType;
      this.searchCriteria.selectedWarehouse = undefined;
    }

    if (arrayObject && arrayObject.length) {
      arrayObject.forEach((siteObj) => {
        if (siteObj && siteObj.whCategory === selectedWarehouseType) {
          const shopListObj = {
            label: siteObj.whName,
            value: siteObj.whCode
          };
          type === 'recipient' ? this.recipientshopList.push(shopListObj) : this.shopList.push(shopListObj);
        }
      });
    }
  }

  public createTransferOrder() {
    this.showCreateTransferOrderDialog = true;
  }

  public resetInputSupplier(): void {
    if (this.selectedSupplier === TransferOrderSearchComponent.SUPPLIER_INTERNAL) {
      this.resetSupplierCustomerCode();
    } else {
      this.searchCriteria.selectedSite = undefined;
      this.searchCriteria.selectedWarehouse = undefined;
    }
  }

  public resetInputRecipient(): void {
    if (this.selectedRecipient === TransferOrderSearchComponent.RECIPIENT_INTERNAL) {
      this.resetRecipientCustomerCode();
    } else {
      this.searchCriteria.recipientSelectedSite = undefined;
      this.searchCriteria.recipientSelectedWarehouse = undefined;
    }
  }

  public resetSupplierCustomerCode(): void {
    this.searchCriteria.selectedPartnerCode = '';
    this.searchCriteria.selectedPartner = undefined;
  }

  public resetRecipientCustomerCode(): void {
    this.searchCriteria.recipientSelectedPartnerCode = '';
    this.searchCriteria.recipientSelectedPartner = undefined;
  }

  private setToTableColumns(): void {
    this.toTableColumns = [
      { field: 'transferOrder', alignment: 'left', width: '13%' },
      { field: 'refDocument', alignment: 'left', width: '13%' },
      { field: 'supplier', alignment: 'left', width: '13%' },
      { field: 'recipient', alignment: 'left', width: '13%' },
      { field: 'article', alignment: 'left', width: '21%' },
      { field: 'quantity', alignment: 'left', width: '9%' },
      { field: 'status', alignment: 'left', width: '9%' },
      { field: 'criticality', alignment: 'left', width: '9%' }
    ];
  }

  public onCreate(transferOrder: BidtTransferOrderDTO): void {
    this.openOrder(transferOrder.id);
  }
}
