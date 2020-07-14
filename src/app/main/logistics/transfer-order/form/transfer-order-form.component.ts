import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { BidtStockMvtTypeConstant } from '../../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AddTransferOrderMaterialInput } from '../../../../shared/types/api-input-types/logistic/add-transfer-order-material-input.interface';
import { BidoCustomerDTOId } from '../../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtTorItemDTO } from '../../../../shared/types/api-types/bidt-tor-item-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FindTransferOrdersByCriteriaOutput } from '../../../../shared/types/api-types/find-transfer-orders-by-criteria-output';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { DeliveryFolderSearchService } from '../../goods-receipt/delivery-folder-search.service';
import { LogisticsService } from '../../logistics.service';
import { TransferOrderService } from '../shared/transfer-order-service';

import { TransferOrderFormService } from './transfer-order-form.service';

export interface MainInfoInterface {
  number?: string;
  type?: number;
  status?: string;
  control?: string;
  applicantLogin?: string;
  applicant?: string;
  created?: Date;
  refDocId?: string;
  isProcurementRequestRefDoc?: boolean;
  isWorkPackageRefDoc?: boolean;
  refDocumentNum?: string;
  refDocType?: string;
  refStatus?: string;
  supplierSite?: string;
  supplierShop?: string;
  supplierShipmentDate?: Date;
  recipientSite?: string;
  recipientShop?: string;
  recipientDate?: Date;
  recipientSiteId?: number;
  recipientWarehouseId?: number;
}

interface DocumentTableInterface {
  comment?: string;
  name?: string;
  type?: string;
  extension?: string;
  cut?: string;
  date?: string;
}

export interface ArticleInterface {
  pn?: string;
  articleDesignation?: string;
  quantity?: number;
  quantityUnit?: string;
  itemNumber?: string;
  otanPnReference?: string;
  quantityPerIssue?: string;
  bidtProcReqItemDTO: BidtTorItemDTO;
  selectedNb?: number;
  notSelectedNb?: number;
  shippedNb?: number;
  receivedNb?: number;
}

@Component({
  selector: 'aw-transfer-order-form',
  styleUrls: ['./transfer-order-form.component.scss'],
  templateUrl: './transfer-order-form.component.html'
})
export class TransferOrderFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  public readonly bidtStockMvtConstants: typeof BidtStockMvtConstants;
  public readonly bidtStockMvtTypeConstants: typeof BidtStockMvtTypeConstant;

  public documentTableDataSource: TableDataSource<DocumentTableInterface>;
  public stockMovementTableDataSource: TableDataSource<BidtStockMvtDTO>;

  public articleList: ArticleInterface[];
  public selectedArticle: ArticleInterface;

  public snList: BidtStockMvtDTO[];
  public selectedSN: BidtStockMvtDTO | undefined;

  public showMaterialInfo: boolean;
  public articlesTableCols: TableColumn[];
  public snTableCols: TableColumn[];

  public readonly component: typeof TransferOrderFormComponent;

  private transferOrderId: number;

  public mainInfo: MainInfoInterface;

  public tor: BidtTransferOrderDTO;
  public procRequest: BidtProcurementRequestDTO;

  public criticalitiesList: LabelValue<string>[];
  public procurementRequestStatusList: LabelValue<string>[];
  public procurementRequestTypeList: LabelValue<string>[];
  public torStatusList: LabelValue<string>[];
  public torTypeList: LabelValue<number>[];
  public torTypeListObject: LabelValue<BidtDfTypeDTO>[];
  public selectedBidtDfTypeDTO: BidtDfTypeDTO;
  public stockMvtStatuses: LabelValue<string>[];
  public operationalStatuses: LabelValue<string>[];
  public workPackageStatuses: LabelValue<string>[];
  public workPackageTypes: LabelValue<string>[];
  public siteList: LabelValue<number>[];
  public warehouseList: LabelValue<number>[];
  public siteSrcList: BidtSiteDTO[];
  public warehouseSrcList: BidtWarehouseDTO[];

  public bidoCustomerReceipt: BidoCustomerDTO | undefined;
  public customerDialogVisible: boolean;

  public stockMvtSubject: Subject<BidtStockMvtDTO[]>;
  public showDetails: boolean;
  public itemDialogVisible: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    private readonly logisticsService: LogisticsService,
    public translateService: TranslateService,
    public readonly sessionService: SessionService,
    private readonly torFormService: TransferOrderFormService,
    private readonly torService: TransferOrderService,
    private readonly dfSearchService: DeliveryFolderSearchService
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
    super.registerPageTocEntryObservable();
    this.bidtStockMvtConstants = BidtStockMvtConstants;
    this.aWPropertiesConstants = AWPropertiesConstants;
    this.component = TransferOrderFormComponent;
    this.bidtStockMvtTypeConstants = BidtStockMvtTypeConstant;

    this.stockMvtSubject = new Subject<BidtStockMvtDTO[]>();
    this.showDetails = false;
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_TRANSFER_ORDER_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.init();
  }

  public init(): void {
    this.tor = {};
    this.procRequest = {};
    this.mainInfo = {};
    this.articleList = [];
    this.snList = [];
    this.siteList = [];
    this.warehouseList = [];
    this.siteSrcList = [];
    this.warehouseSrcList = [];
    this.customerDialogVisible = false;
    this.itemDialogVisible = false;

    if (this.componentData.objectId) {
      this.transferOrderId = this.serializationService.deserialize(this.componentData.objectId) as number;
    }

    forkJoin({
      criticalitiesList: this.torService.fetchCriticalityList(),
      procurementRequestStatusList: this.torService.fetchProcurementRequestStatusList(),
      procurementRequestTypeList: this.torService.fetchProcurementRequestTypeList(),
      torStatusList: this.torService.fetchStatusList(),
      torTypeList: this.torService.fetchTypeList(),
      torTypeListObject: this.torService.fetchTypeObjectList(),
      operationalStatuses: this.torService.fetchOperationalStatuses(),
      stockMvtStatuses: this.torService.fetchStockMvtStatuses(),
      findTorOutput: this.torFormService.findTransferOrderById(this.transferOrderId),
      workPackageStatuses: this.torService.fetchWorkPackageStatuses(),
      workPackageTypes: this.torService.fetchWorkPackageTypes()
    }).subscribe((values) => {
      this.criticalitiesList = values.criticalitiesList;
      this.procurementRequestStatusList = values.procurementRequestStatusList;
      this.procurementRequestTypeList = values.procurementRequestTypeList;
      this.torStatusList = values.torStatusList;
      this.torTypeList = values.torTypeList;
      this.torTypeListObject = values.torTypeListObject;
      this.operationalStatuses = values.operationalStatuses;
      this.stockMvtStatuses = values.stockMvtStatuses;
      this.workPackageStatuses = values.workPackageStatuses;
      this.workPackageTypes = values.workPackageTypes;
      this.fetchTransferOrder(values.findTorOutput);
    });

    this.loadSites();

    this.updateOpenMode(this.componentData.openMode);

    this.initTableCols();
  }

  private fetchTransferOrder(tor: FindTransferOrdersByCriteriaOutput) {
    this.tor = tor.bidtTransferOrder;
    this.getSelectedDfType();
    if (!!tor.bidtTransferOrder.bidtTorItems) {
      tor.bidtTransferOrder.bidtTorItems.forEach((torItem) => {
        const fistMovementsList = this.getListSNForItem(torItem.birePnPnCode);
        fistMovementsList.forEach((firstMvt) => {
          this.logisticsService.findStockMvtStoryFromFirstStockMvt(firstMvt).subscribe((mvts) => {
            if (!!torItem.pickingMovements) {
              torItem.pickingMovements.concat(mvts);
            }
          });
        });
      });
    }
    this.fetchMainInfo(tor);
    this.fetchItems(tor);
    this.procRequest = tor.bidtProcurementRequest;
  }

  private getSelectedDfType(): void {
    this.selectedBidtDfTypeDTO = this.torTypeListObject.filter(
      (type) => type.value.id === Number(this.tor.torType)
    )[0].value;
  }

  private fetchMainInfo(findTorOutput: FindTransferOrdersByCriteriaOutput) {
    if (findTorOutput.bidtTransferOrder.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode) {
      const customerDTOIdReceipt: BidoCustomerDTOId = {
        customerCode: findTorOutput.bidtTransferOrder.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode
      };
      forkJoin({
        torInfo: this.torFormService.fetchTransferOrderData(findTorOutput.bidtTransferOrder),
        torRefDocumentInfo: this.torFormService.fetchTorRefDocument(findTorOutput.bidtProcurementRequest),
        torCreatedInfo: this.torFormService.fetchTorCreated(findTorOutput.bidtTransferOrder),
        bidoCustomer: this.torFormService.findBidoCustomer(customerDTOIdReceipt)
      }).subscribe((values) => {
        this.mainInfo = { ...values.torInfo, ...values.torRefDocumentInfo, ...values.torCreatedInfo };
        this.bidoCustomerReceipt = values.bidoCustomer;
      });
    } else {
      forkJoin({
        torInfo: this.torFormService.fetchTransferOrderData(findTorOutput.bidtTransferOrder),
        torRefDocumentInfo: this.torFormService.fetchTorRefDocument(findTorOutput.bidtProcurementRequest),
        torCreatedInfo: this.torFormService.fetchTorCreated(findTorOutput.bidtTransferOrder)
      }).subscribe((values) => {
        this.mainInfo = { ...values.torInfo, ...values.torRefDocumentInfo, ...values.torCreatedInfo };
        if (!!this.mainInfo.recipientSiteId) {
          this.loadWareHouses(this.mainInfo.recipientSiteId);
        }
      });
    }
  }

  private fetchItems(tor: FindTransferOrdersByCriteriaOutput) {
    if (tor.bidtTransferOrder.bidtTorItems) {
      tor.bidtTransferOrder.bidtTorItems.forEach((torItem) => {
        this.torFormService.fetchArticleData(torItem).subscribe((item) => {
          this.articleList.push(item);
          this.calculateSituation(item);
          this.selectedArticle = this.articleList[0];
          this.fillSNList();
        });
      });
    }
  }

  public cancel(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  private calculateSituation(row: ArticleInterface): void {
    const stockMvts = ListUtils.orEmpty(row.bidtProcReqItemDTO.pickingMovements).filter(
      (stockMvt) => stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT
    );
    const transferedStockMvts = stockMvts.filter(
      (stockMvt) => stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );

    row.selectedNb = stockMvts
      .filter(
        (stockMvt) =>
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY &&
          (!StringUtils.isNullOrEmpty(stockMvt.stockMvtSn) || !StringUtils.isNullOrEmpty(stockMvt.stockMvtBatchNumber))
      )
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);

    row.receivedNb = ListUtils.orEmpty(row.bidtProcReqItemDTO.pickingMovements)
      .filter(
        (stockMvt) =>
          stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT &&
          stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      )
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);

    row.shippedNb =
      transferedStockMvts
        .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
        .reduce((acc, x) => acc + x, 0) - row.receivedNb;

    if (!!row.quantity) {
      row.notSelectedNb = row.quantity - row.shippedNb - row.selectedNb - row.receivedNb;
    } else {
      row.notSelectedNb = 0;
    }
  }

  /***************************************
   * INIT TABLE
   ***************************************/
  private initTableCols(): void {
    // Stock movement Table
    this.stockMovementTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '20%' },
        { field: 'type', translateKey: this.getTranslateKey('type'), alignment: ColumnAlignment.CENTER, width: '10%' },
        { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
        { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '18%' },
        { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '18%' },
        { field: 'status', translateKey: this.getTranslateKey('status'), width: '14%' }
      ],
      data: []
    });

    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'name', translateKey: this.getTranslateKey('name') },
        { field: 'comment', translateKey: this.getTranslateKey('comment') },
        { field: 'type', translateKey: this.getTranslateKey('type') },
        { field: 'extension', translateKey: this.getTranslateKey('extension') },
        { field: 'cut', translateKey: this.getTranslateKey('cut') },
        { field: 'date', translateKey: this.getTranslateKey('date') }
      ],
      data: []
    });

    this.articlesTableCols = [{ field: 'articles' }];
    this.snTableCols = [{ field: 'sn' }];
  }

  /***********************************
   * FORM DATA
   ***********************************/
  public getQuantityMissing(rowData: ArticleInterface): number {
    if (!!rowData && !!rowData.quantity) {
      if (!!this.snList && this.snList.length < rowData.quantity) {
        return rowData.quantity - this.snList.length;
      }
    }

    return 0;
  }

  public fillSNList() {
    this.stockMvtSubject.next([]);
    this.showDetails = false;
    if (!!this.selectedArticle) {
      this.snList = this.getListSNForItemBySelectedArticle(this.selectedArticle.pn);
      this.selectedSN = this.snList[0];
      this.fillStockMovementList();
    }
  }

  private getListSNForItem(pn: string | undefined): BidtStockMvtDTO[] {
    if (!(pn && this.tor && this.tor.bidtTorItems)) {
      return [];
    } else {
      const bidtTorItems = this.tor.bidtTorItems;
      const datas = bidtTorItems
        .filter((torItem) => torItem.birePnPnCode === pn)
        .map((torItem) => torItem.pickingMovements)
        .filter((stockMvts) => !ListUtils.isNullOrEmpty(stockMvts))
        .map((stockMvts) => stockMvts as BidtStockMvtDTO[])
        .reduce((acc, x) => acc.concat(x), [])
        .filter((stockMvt) => ObjectUtils.isDefined(stockMvt) && !ObjectUtils.isDefined(stockMvt.bidtStockMvtId));

      return datas
        ? Array.from(new Set(datas.map((stockMvt) => stockMvt.stockMvtSn)))
            .map((sn) => datas.filter((stockMvt) => (stockMvt ? stockMvt.stockMvtSn === sn : false)))
            .reduce((acc, x) => acc.concat(x), [])
        : [];
    }
  }

  private getListSNForItemBySelectedArticle(pn: string | undefined): BidtStockMvtDTO[] {
    if (!(pn && this.tor && this.tor.bidtTorItems && this.selectedArticle)) {
      return [];
    } else {
      const bidtTorItems = this.tor.bidtTorItems;
      const datas = bidtTorItems
        .filter((torItem) => torItem.birePnPnCode === pn && this.selectedArticle.bidtProcReqItemDTO.id === torItem.id)
        .map((torItem) => torItem.pickingMovements)
        .filter((stockMvts) => !ListUtils.isNullOrEmpty(stockMvts))
        .map((stockMvts) => stockMvts as BidtStockMvtDTO[])
        .reduce((acc, x) => acc.concat(x), [])
        .filter((stockMvt) => ObjectUtils.isDefined(stockMvt) && !ObjectUtils.isDefined(stockMvt.bidtStockMvtId));

      return datas
        ? Array.from(new Set(datas.map((stockMvt) => stockMvt.stockMvtSn)))
            .map((sn) => datas.filter((stockMvt) => (stockMvt ? stockMvt.stockMvtSn === sn : false)))
            .reduce((acc, x) => acc.concat(x), [])
        : [];
    }
  }

  public onArticleRowUnselect() {
    this.selectedSN = undefined;
    this.stockMvtSubject.next([]);
  }

  public onSNRowUnselect() {
    this.stockMvtSubject.next([]);
    this.showDetails = false;
    this.selectedSN = undefined;
  }

  public fillStockMovementList() {
    if (!!this.selectedSN && !!this.tor.bidtTorItems) {
      const selectedTorItem = this.tor.bidtTorItems.find(
        (torItem) => !!this.selectedSN && torItem.id === this.selectedSN.bidtTorItemId
      );
      if (!!selectedTorItem && !!selectedTorItem.pickingMovements) {
        if (
          (this.selectedSN as BidtStockMvtDTO).stockMvtSn ||
          (this.selectedSN as BidtStockMvtDTO).stockMvtBatchNumber
        ) {
          const stocks = selectedTorItem.pickingMovements.filter(
            (mvt) =>
              !!this.selectedSN &&
              (mvt.stockMvtSn === this.selectedSN.stockMvtSn ||
                mvt.stockMvtBatchNumber === this.selectedSN.stockMvtBatchNumber)
          );
          this.stockMovementTableDataSource.setData(stocks);
          this.stockMvtSubject.next(stocks);
          this.showDetails = false;
        } else {
          this.stockMovementTableDataSource.setData([]);
          this.stockMvtSubject.next([]);
        }
      }
    }
  }

  public openReferenceDocument(): void {
    if (this.mainInfo.refDocumentNum) {
      if (this.mainInfo.isProcurementRequestRefDoc) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
          openMode: ComponentOpenMode.Read,
          objectId: this.serializationService.serialize({ id: this.procRequest.id })
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      } else if (this.mainInfo.isWorkPackageRefDoc) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
          openMode: ComponentOpenMode.Read,
          objectId: this.serializationService.serialize({ wpId: this.mainInfo.refDocId })
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
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

  public openStovkMvt(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openBatch(stockMvtBatchNumber: string) {
    const input: BidoEquipmentDTO = {
      batchNumber: stockMvtBatchNumber,
      pnCode: this.selectedArticle.pn
    };
    this.torService.findBidoEquipmentByPnAndBatchNumber(input).subscribe((equipments) => {
      if (equipments) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
          openMode: ComponentOpenMode.Read,
          objectId: equipments.equipmentCode
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    });
  }

  public openEquipment(stockSn: string): void {
    const input: BidoEquipmentDTO = {
      sn: stockSn,
      pnCode: this.selectedArticle.pn
    };
    this.torService.findBidoEquipmentsByPnAndSn(input).subscribe((equipments) => {
      if (equipments && equipments.length > 0) {
        const objectId: BidoEquipmentDTO = {
          equipmentCode: equipments[0].equipmentCode
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
    });
  }

  public openManufacturingBatch(stockMvtBatchNumber: string): void {
    if (stockMvtBatchNumber) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
        objectId: this.serializationService.serialize({ customerCode: stockMvtBatchNumber }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openSelectedStock() {
    this.showMaterialInfo = true;
  }

  public goback() {
    this.showMaterialInfo = false;
    const addSn = this.torFormService.addSN();
    this.snList.push(addSn);
  }

  public showStatus(): void {
    // implement status workflow
  }

  public manageTransfertOrderItem(row: ArticleInterface): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({
        torId: this.transferOrderId,
        torItemId: row.bidtProcReqItemDTO.id
      })
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadSites(): void {
    this.dfSearchService.findAllBireSite().subscribe({
      next: (sites: BidtSiteDTO[]) => {
        this.siteList = ListUtils.orEmpty(sites)
          .map((site) => {
            return {
              label: `${site.siteCode}`,
              value: site.siteId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
        this.siteSrcList = sites;
      }
    });
  }

  public loadWareHouses(site: number): void {
    this.dfSearchService.getWarehousesBySiteId(site).subscribe({
      next: (warehouses: BidtWarehouseDTO[]) => {
        this.warehouseList = ListUtils.orEmpty(warehouses)
          .map((warehouse) => {
            return {
              label: `${warehouse.whName}`,
              value: warehouse.wareHouseId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));

        this.warehouseSrcList = warehouses;
      }
    });
  }

  public save(): void {
    this.tor.bidtWarehouseByBidtWarehouseReceiverId = this.mainInfo.recipientWarehouseId;
    this.tor.bidtSiteByBidtSiteReceiverId = this.mainInfo.recipientSiteId;
    this.tor.bidtSiteReceipt = this.siteSrcList.find((site) => site.siteId === this.mainInfo.recipientSiteId);
    this.tor.bidtWarehouseReceipt = this.warehouseSrcList.find(
      (warehouse) => warehouse.wareHouseId === this.mainInfo.recipientWarehouseId
    );
    if (!!this.mainInfo.recipientDate) {
      this.tor.receiptExpectedDate = new Date(this.mainInfo.recipientDate);
    }
    if (!!this.mainInfo.supplierShipmentDate) {
      this.tor.shipmentExpectedDate = new Date(this.mainInfo.supplierShipmentDate);
    }
    if (!!this.tor.bidtTorItems) {
      this.tor.bidtTorItems.forEach((torItem) => {
        if (!!torItem.pickingMovements) {
          torItem.pickingMovements.forEach((mvt) => {
            if (mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT) {
              mvt.bidtWarehouseByBidtWarehouseReceiptId = this.tor.bidtWarehouseByBidtWarehouseReceiverId;
              mvt.bidtSiteByBidtSiteReceiptId = this.tor.bidtSiteByBidtSiteReceiverId;
              mvt.stockMvtDate = !!this.mainInfo.recipientDate ? new Date(this.mainInfo.recipientDate) : undefined;
            } else if (
              mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT ||
              mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_TRANSFER
            ) {
              mvt.stockMvtDate = !!this.mainInfo.supplierShipmentDate
                ? new Date(this.mainInfo.supplierShipmentDate)
                : undefined;
            }
          });
        }
      });
    }
    this.logisticsService.addOrUpdateTransferOrder(this.tor).subscribe((res) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdate'));
      this.init();
    });
  }

  public openCustomerDialog() {
    this.customerDialogVisible = true;
  }

  public unselectFinalCustomer(): void {
    this.bidoCustomerReceipt = undefined;
    this.tor.bidoCustomerReceipt = undefined;
    this.tor.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode = undefined;
  }

  public onSelectCustomer(customer: BidoCustomerDTO): void {
    this.bidoCustomerReceipt = customer;
    this.tor.bidoCustomerReceipt = customer;
    this.tor.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode = customer.customerCode;
  }

  public toggleDetailsTable(showDetails: boolean): void {
    this.showDetails = showDetails;
  }

  public onValidateAddItem(event: { pn: BirePnDTO; quantity: string }) {
    const input: AddTransferOrderMaterialInput = {
      bidtTransferOrder: this.tor,
      pnCode: event.pn.pnCode as string,
      quantity: event.quantity
    };
    this.logisticsService
      .createTransferOrderTorIem(input)
      .pipe(
        finalize(() => {
          this.itemDialogVisible = false;
        })
      )
      .subscribe({
        next: () => {
          this.messageService.showSuccessMessage('successOnAddItem');
          this.init();
        }
      });
  }

  public showItemDialog(): void {
    this.itemDialogVisible = true;
  }
}
