import { ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable, forkJoin } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindDeliveryFoldersByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-delivery-folders-by-criteria-input.interface';
import { BidtDeliveryFolderDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfItemDTO } from '../../../../shared/types/api-types/bidt-df-item-dto.interface';
import { BidtPackageDTO } from '../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics.service';
import { TransferOrderService } from '../../transfer-order/shared/transfer-order-service';
import { DeliveryFolderSearchService } from '../delivery-folder-search.service';

export enum ComponentContext {
  LOCALE,
  EXTERNAL
}

enum DocumentType {
  DOCUMENT_TYPE_SHIPPING_FOLDER = 1,
  DOCUMENT_TYPE_TRANSFER_ORDER
}

enum ViewMode {
  COLLAPSE,
  EXPAND
}

interface DfTableRow {
  code?: string;
  criticality?: string;
  designation?: string;
  docCode?: string;
  docType?: string;
  itemDesignation?: string;
  itemPn?: string;
  itemsNb?: number;
  plannedDate?: Date;
  quantity?: number;
  recipientSiteName?: string;
  recipientWarehouseName?: string;
  shipperSiteName?: string;
  shipperWarehouseName?: string;
  status?: string;
  statusDate?: Date;
  _obj: BidtDeliveryFolderDTO;
}

export abstract class GoodsReceiptSearchComponent extends PageComponent<PageComponentData> {
  public readonly appConstants: typeof AppConstants;
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;
  public readonly viewMode: typeof ViewMode;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public criticalities: LabelValue<string | undefined>[];
  public dfStatuses: LabelValue<string>[];
  public dfTypes: LabelValue<number>[];
  public documentTypes: LabelValue<number>[];
  public recipientSites: LabelValue<number>[];
  public recipientWarehouses: LabelValue<number>[];
  public shipperSites: LabelValue<number>[];
  public shipperWarehouses: LabelValue<number>[];
  public warehouseCategories: LabelValue<string>[];

  public selectedAssetPn: BirePnDTO | undefined;
  public selectedBatchNumber: string | undefined;
  public selectedCriticality: string | undefined;
  public selectedDesignation: string | undefined;
  public selectedDfCode: string | undefined;
  public selectedDfType: number | undefined;
  public selectedDocumentCode: string | undefined;
  public selectedDocumentType: number | undefined;
  public selectedItemPn: BirePnDTO | undefined;
  public selectedPackageCode: string | undefined;
  public selectedPlannedDate: Date | undefined;
  public selectedRecipientSite: number | undefined;
  public selectedRecipientWarehouse: number | undefined;
  public selectedRecipientWarehouseCategory: string | undefined;
  public selectedShipperSite: number | undefined;
  public selectedShipperWarehouse: number | undefined;
  public selectedShipperWarehouseCategory: string | undefined;
  public selectedSn: string | undefined;
  public selectedStatus: string | undefined;

  public dfTableColumns: TableColumn[];
  public dfTable: DfTableRow[];
  public dfTableLoading: boolean;
  public dfTableViewMode: ViewMode;
  public selectedDfs: DfTableRow[];

  public advancedCriteriaVisible: boolean;
  public assetPnDialogVisible: boolean;
  public createDialogVisible: boolean;
  public itemPnDialogVisible: boolean;
  public packageScanDialogVisible: boolean;
  public assetScanDialogVisible: boolean;

  private dfs: BidtDeliveryFolderDTO[];
  public typeList: LabelValue<number>[];

  private userSiteId: number | undefined;
  private userWarehouseId: number | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    public readonly dfSearchService: DeliveryFolderSearchService,
    public readonly logisticsService: LogisticsService,
    public readonly propertiesService: PropertiesService,
    public readonly transferOrderService: TransferOrderService,
    public readonly extractTranslationPipe: ExtractTranslationPipe
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.appConstants = AppConstants;
    this.awPropertiesConstants = AWPropertiesConstants;
    this.viewMode = ViewMode;

    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public abstract get getCurrentComponentContext(): number;

  public canSearch(): boolean {
    return ObjectUtils.isDefined(this.selectedRecipientSite);
  }

  public clearAssetPn(): void {
    this.selectedAssetPn = undefined;
  }

  public clearItemPn(): void {
    this.selectedItemPn = undefined;
  }

  public create(): void {
    this.createDialogVisible = true;
  }

  public deleteDf(): void {
    forkJoin(
      this.selectedDfs.map((df) =>
        this.logisticsService.deleteDeliveryFolder({
          id: df._obj.id
        })
      )
    ).subscribe({
      next: () => {
        this.search();
      }
    });
  }

  public onChangeRecipientSite(): void {
    this.onChangeRecipientWarehouseCategory();
  }

  public onChangeRecipientWarehouseCategory(): void {
    this.unselectRecipientWarehouse();

    if (this.selectedRecipientSite) {
      this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory as string).subscribe({
        next: (warehouses) => {
          this.recipientWarehouses = warehouses;
        }
      });
    }
  }

  public onChangeShipperSite(): void {
    this.onChangeShipperWarehouseCategory();
  }

  public onChangeShipperWarehouseCategory(): void {
    this.unselectShipperWarehouse();

    if (this.selectedShipperSite) {
      this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory as string).subscribe({
        next: (warehouses) => {
          this.shipperWarehouses = warehouses;
        }
      });
    }
  }

  public loadByAssetBatchNumber(batchNumber: string): void {
    this.logisticsService
      .findDeliveryFoldersByCriteria({
        batchNumber,
        folderStatusExcluded: [AWPropertiesConstants.RECEIPT_FOLDER_STATUS_PERFORMED],
        deliveryFolder: {}
      })
      .subscribe({
        next: (bidtDeliveryFolders) => {
          if (!bidtDeliveryFolders || bidtDeliveryFolders.length === 0) {
            // No match
            this.messageService.showErrorMessage(this.getTranslateKey('noMatchingDeliveryFolder'));
          } else if (bidtDeliveryFolders.length === 1) {
            // One match
            const bidtDeliveryFolder = bidtDeliveryFolders[0];

            if (
              !this.userSiteId ||
              !this.userWarehouseId ||
              !bidtDeliveryFolder.bidtSiteReceiver ||
              !bidtDeliveryFolder.bidtWarehouseReceiver ||
              this.userSiteId !== bidtDeliveryFolder.bidtSiteReceiver.siteId ||
              this.userWarehouseId !== bidtDeliveryFolder.bidtWarehouseReceiver.wareHouseId
            ) {
              this.messageService.showErrorMessage(this.getTranslateKey('missingRights'));
            } else {
              const bidtDfItems = ListUtils.orEmpty(bidtDeliveryFolder.bidtDfItems).filter((item) =>
                ListUtils.orEmpty(item.bidtStockMvts).some((stockMvt) => stockMvt.stockMvtBatchNumber === batchNumber)
              );

              const assetsToUpdate$ = bidtDfItems
                .map((bidtDfItem) => {
                  const bidtPackage = bidtDfItem.bidtPackage as BidtPackageDTO;
                  const bidtPackageOperation = ListUtils.orEmpty(bidtPackage.bidtPackageOperations).find(
                    (operation) =>
                      operation.packopeDesignation === AWPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
                  );
                  const bidtStockMvt = ListUtils.orEmpty(bidtDfItem.bidtStockMvts).find(
                    (stockMvt) => stockMvt.stockMvtBatchNumber === batchNumber
                  ) as BidtStockMvtDTO;
                  const bidtStockMvtOperation = ListUtils.orEmpty(bidtStockMvt.bidtStockMvtOperations).find(
                    (operation) =>
                      operation.smoDesignation === AWPropertiesConstants.LOGISTICAL_OPERATION_VISUAL_CONTROL
                  );

                  if (
                    bidtDeliveryFolder.dfStatus !== AWPropertiesConstants.RECEIPT_FOLDER_STATUS_DRAFT &&
                    !!bidtPackageOperation &&
                    bidtPackageOperation.packopeStatus ===
                      AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED &&
                    !!bidtStockMvtOperation &&
                    bidtStockMvtOperation.smoStatus !== AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED
                  ) {
                    return this.logisticsService.performStockMovementOperations([
                      {
                        bidtDfItem,
                        bidtStockMvt,
                        newStatus: AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED,
                        operationId: bidtStockMvtOperation.id as number
                      }
                    ]);
                  } else {
                    return undefined;
                  }
                })
                .filter((elt) => elt !== undefined) as Observable<void>[];

              // Perform visual check on given asset
              if (assetsToUpdate$.length > 0) {
                forkJoin(assetsToUpdate$).subscribe(() => {
                  this.messageService.showSuccessMessage(this.getTranslateKey('visualCheckPerformed'));
                  this.openDf({ id: bidtDeliveryFolder.id });
                });
              } else {
                this.openDf({ id: bidtDeliveryFolder.id });
              }
            }
          } else {
            // Several matches
            this.dfs = bidtDeliveryFolders;

            this.createDfTable();

            super.differ(() => {
              super.scrollToAnchor(this.resultsContainerAnchor);
            });
          }
        }
      });
  }

  public loadByPackageCode(packageCode: string): void {
    this.logisticsService.findDeliveryFoldersByPackageCode(packageCode).subscribe({
      next: (bidtDeliveryFolders) => {
        if (!bidtDeliveryFolders || bidtDeliveryFolders.length === 0) {
          // No match
          this.messageService.showErrorMessage(this.getTranslateKey('noMatchingDeliveryFolder'));
        } else if (bidtDeliveryFolders.length === 1) {
          // One match
          if (
            !this.userSiteId ||
            !this.userWarehouseId ||
            !bidtDeliveryFolders[0].bidtSiteReceiver ||
            !bidtDeliveryFolders[0].bidtWarehouseReceiver ||
            this.userSiteId !== bidtDeliveryFolders[0].bidtSiteReceiver.siteId ||
            this.userWarehouseId !== bidtDeliveryFolders[0].bidtWarehouseReceiver.wareHouseId
          ) {
            this.messageService.showErrorMessage(this.getTranslateKey('missingRights'));
          } else {
            const bidtPackage = (ListUtils.orEmpty(bidtDeliveryFolders[0].bidtDfItems).find(
              (dfItem) =>
                !!dfItem.bidtPackage &&
                (dfItem.bidtPackage.packageCode === packageCode ||
                  dfItem.bidtPackage.externalPackageCode === packageCode)
            ) as BidtDfItemDTO).bidtPackage as BidtPackageDTO;
            const bidtPackageOperation = ListUtils.orEmpty(bidtPackage.bidtPackageOperations).find(
              (operation) =>
                operation.packopeDesignation === AWPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
            );

            // Perform physical receipt if delivery folder is not draft
            if (
              bidtDeliveryFolders[0].dfStatus !== AWPropertiesConstants.RECEIPT_FOLDER_STATUS_DRAFT &&
              !!bidtPackageOperation &&
              bidtPackageOperation.packopeStatus !== AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED
            ) {
              this.logisticsService
                .performPackageOperations([
                  {
                    bidtDeliveryFolderDto: bidtDeliveryFolders[0],
                    newStatus: AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED,
                    operationId: bidtPackageOperation.id as number
                  }
                ])
                .subscribe(() => {
                  this.messageService.showSuccessMessage(this.getTranslateKey('packageReceived'));
                  this.openDf({ id: bidtDeliveryFolders[0].id });
                });
            } else {
              this.openDf({ id: bidtDeliveryFolders[0].id });
            }
          }
        } else {
          // Several matches
          this.dfs = bidtDeliveryFolders;

          this.createDfTable();

          super.differ(() => {
            super.scrollToAnchor(this.resultsContainerAnchor);
          });
        }
      }
    });
  }

  public onSelectAssetPn(pn: BirePnDTO): void {
    this.selectedAssetPn = pn;
  }

  public onSelectItemPn(pn: BirePnDTO): void {
    this.selectedItemPn = pn;
  }

  public openArticle(pn: string): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ pnCode: pn })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAssetPnDialog(): void {
    this.assetPnDialogVisible = true;
  }

  public openDf(df: BidtDeliveryFolderDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_RECEIPT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ id: df.id })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openItemPnDialog(): void {
    this.itemPnDialogVisible = true;
  }

  public openDocument(dfRow: DfTableRow): void {
    if (dfRow._obj.bidtTransferOrder) {
      // Transfer Order
      // TODO: add objectId
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (dfRow.docCode) {
      const searchCriteria: FindDeliveryFoldersByCriteriaInput = {
        folderStatusExcluded: [],
        deliveryFolder: {
          dfCode: dfRow.docCode
        }
      };
      this.logisticsService.findDeliveryFoldersByCriteria(searchCriteria).subscribe((deliveryFolderList) => {
        // Delivery Folder
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.LOG_GOODS_SHIPMENT_FORM,
          openMode: ComponentOpenMode.Read,
          objectId: this.serializationService.serialize({ id: deliveryFolderList[0].id })
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      });
    }
  }

  public scanPackage(): void {
    this.packageScanDialogVisible = true;
  }

  public scanAsset(): void {
    this.assetScanDialogVisible = true;
  }

  public search(): void {
    this.dfs = [];
    this.dfTableLoading = true;
    this.selectedDfs = [];

    const searchCriteria: FindDeliveryFoldersByCriteriaInput = {
      assetDesignation: this.selectedDesignation,
      assetPn: this.selectedAssetPn ? this.selectedAssetPn.pnCode : undefined,
      batchNumber: this.selectedBatchNumber,
      folderStatusExcluded: this.selectedStatus ? [] : [AWPropertiesConstants.RECEIPT_FOLDER_STATUS_PERFORMED],
      itemPn: this.selectedItemPn ? this.selectedItemPn.pnCode : undefined,
      packageCode: this.selectedPackageCode,
      sn: this.selectedSn,
      shippingFolderCode:
        this.selectedDocumentType === DocumentType.DOCUMENT_TYPE_SHIPPING_FOLDER
          ? this.selectedDocumentCode
          : undefined,
      torCode:
        this.selectedDocumentType === DocumentType.DOCUMENT_TYPE_TRANSFER_ORDER ? this.selectedDocumentCode : undefined,
      deliveryFolder: {
        bidtDfTypeId: this.selectedDfType,
        bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
        bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
        bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
        bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
        criticality: this.selectedCriticality,
        dfCode: this.selectedDfCode,
        dfStatus: this.selectedStatus,
        plannedDate: this.selectedPlannedDate
          ? moment(this.selectedPlannedDate)
              .endOf('day')
              .toDate()
          : undefined
      },
      folderCategorie: this.selectedDfType ? undefined : AWPropertiesConstants.DELIVERY_CATEGORY_RECEIPT,
      transferType:
        this.getCurrentComponentContext === ComponentContext.LOCALE
          ? [AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY]
          : [AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY, AWPropertiesConstants.MM_TRANSFER_TYPE_EXTERNAL_KEY]
    };

    this.logisticsService
      .findDeliveryFoldersByCriteria(searchCriteria)
      .pipe(
        finalize(() => {
          this.dfTableLoading = false;
        })
      )
      .subscribe({
        next: (dfs) => {
          this.dfs = dfs;

          this.createDfTable();

          super.differ(() => {
            super.scrollToAnchor(this.resultsContainerAnchor);
          });
        }
      });
  }

  public toogleViewMode(): void {
    this.dfTableViewMode = this.dfTableViewMode === ViewMode.COLLAPSE ? ViewMode.EXPAND : ViewMode.COLLAPSE;

    this.createDfTable();
  }

  // ////////////////////////////////////////////////////////////////////////////

  private createDfTable(): void {
    if (this.dfTableViewMode === ViewMode.COLLAPSE) {
      this.dfTable = this.dfs.map((df) => this.createDfTableRowForCollapseView(df));
    } else {
      this.dfTable = this.dfs
        .map((df) => ListUtils.orEmpty(df.bidtDfItems).map((dfItem) => this.createDfTableRowForExpandView(df, dfItem)))
        .reduce((acc, curr) => acc.concat(curr), []);
    }
  }

  private createDfTableRow(df: BidtDeliveryFolderDTO): DfTableRow {
    const dfRow = {
      code: df.dfCode,
      criticality: df.criticality,
      designation: df.bidtDfType ? df.bidtDfType.dftDesignation : '',
      plannedDate: df.plannedDate,
      recipientSiteName: df.bidtSiteReceiver ? df.bidtSiteReceiver.siteName : '',
      recipientWarehouseName: df.bidtWarehouseReceiver ? df.bidtWarehouseReceiver.whName : '',
      shipperSiteName: df.bidtSiteSender ? df.bidtSiteSender.siteName : '',
      shipperWarehouseName: df.bidtWarehouseSender ? df.bidtWarehouseSender.whName : '',
      status: df.dfStatus,
      statusDate: df.statusDate,
      _obj: df
    };

    this.retrieveDocData(df, dfRow);

    return dfRow;
  }

  private createDfTableRowForCollapseView(df: BidtDeliveryFolderDTO): DfTableRow {
    const items = ListUtils.orEmpty(df.bidtDfItems);
    const quantity = items
      .filter((item) => !StringUtils.isNullOrEmpty(item.quantity))
      .map((item) => NumberUtils.fromString(item.quantity as string))
      .reduce((a, b) => a + b, 0);

    let itemDesignation: string | undefined;
    let itemPn: string | undefined;
    if (items.length === 1 && items[0] && items[0].birePn) {
      itemDesignation = items[0].birePn.articleDesignation;
      itemPn = items[0].birePn.pnCode;
    }

    return { itemDesignation, itemPn, quantity, itemsNb: items.length, ...this.createDfTableRow(df) };
  }

  private createDfTableRowForExpandView(df: BidtDeliveryFolderDTO, dfItem: BidtDfItemDTO | undefined): DfTableRow {
    let itemDesignation: string | undefined;
    let itemPn: string | undefined;
    let quantity = 0;
    if (dfItem && dfItem.birePn) {
      itemDesignation = dfItem.birePn.articleDesignation;
      itemPn = dfItem.birePn.pnCode;
      quantity = dfItem.quantity ? NumberUtils.fromString(dfItem.quantity) : 0;
    }

    return { itemDesignation, itemPn, quantity, ...this.createDfTableRow(df) };
  }

  private formatSites(sites: BidtSiteDTO[]): LabelValue<number>[] {
    return ListUtils.orEmpty(sites)
      .map((site) => {
        return {
          label: `${site.siteCode} - ${site.siteName}`,
          value: site.siteId as number
        };
      })
      .sort((s1, s2) => s1.label.localeCompare(s2.label));
  }

  private init(): void {
    this.criticalities = [];
    this.dfs = [];
    this.dfStatuses = [];
    this.dfTypes = [];
    this.documentTypes = [];
    this.recipientSites = [];
    this.recipientWarehouses = [];
    this.shipperSites = [];
    this.shipperWarehouses = [];
    this.warehouseCategories = [];

    this.selectedAssetPn = undefined;
    this.selectedBatchNumber = undefined;
    this.selectedCriticality = undefined;
    this.selectedDesignation = undefined;
    this.selectedDfCode = undefined;
    this.selectedDfType = undefined;
    this.selectedDocumentCode = undefined;
    this.selectedDocumentType = undefined;
    this.selectedItemPn = undefined;
    this.selectedPackageCode = undefined;
    this.selectedPlannedDate = undefined;
    this.selectedRecipientSite = undefined;
    this.selectedRecipientWarehouse = undefined;
    this.selectedRecipientWarehouseCategory = undefined;
    this.selectedShipperSite = undefined;
    this.selectedShipperWarehouse = undefined;
    this.selectedShipperWarehouseCategory = undefined;
    this.selectedSn = undefined;
    this.selectedStatus = undefined;

    this.dfTable = [];
    this.dfTableLoading = false;
    this.dfTableViewMode = ViewMode.COLLAPSE;
    this.selectedDfs = [];

    this.advancedCriteriaVisible = false;
    this.assetPnDialogVisible = false;
    this.createDialogVisible = false;
    this.itemPnDialogVisible = false;
    this.packageScanDialogVisible = false;
    this.assetScanDialogVisible = false;

    this.sessionService.getUserSiteId().subscribe({
      next: (site) => {
        this.userSiteId = site ? site.siteId : undefined;
        this.selectedRecipientSite = site ? site.siteId : undefined;
      }
    });
    this.sessionService.getUserWarehouseId().subscribe({
      next: (warehouse) => {
        this.userWarehouseId = warehouse ? warehouse.wareHouseId : undefined;
        this.selectedRecipientWarehouseCategory = warehouse ? warehouse.whCategory : undefined;

        this.loadWareHouses(
          this.selectedRecipientSite as number,
          this.selectedRecipientWarehouseCategory as string
        ).subscribe({
          next: (warehouses) => {
            this.recipientWarehouses = warehouses;

            if (warehouse && warehouse.wareHouseId) {
              this.selectedRecipientWarehouse = warehouse ? warehouse.wareHouseId : undefined;
            }
          }
        });
      }
    });

    this.loadCriticalities();
    this.loadDfStatuses();
    this.loadDfTypes();
    this.loadDocumentTypes();
    this.loadRecipientSites();
    this.loadShipperSites();
    this.loadWarehouseCategories();
    this.setDfTableColumns();
  }

  private loadCriticalities(): void {
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP).subscribe({
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

  private loadDfStatuses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.RECEIPT_FOLDER_STATUS_MAP).subscribe({
      next: (dfStatuses) => {
        this.dfStatuses = dfStatuses;
      }
    });
  }

  private loadDfTypes(): void {
    if (this.getCurrentComponentContext === ComponentContext.LOCALE) {
      this.logisticsService.findReceiptDfTypes().subscribe({
        next: (dfTypes) => {
          this.dfTypes = ListUtils.orEmpty(dfTypes)
            .filter((dfType) => !StringUtils.isNullOrEmpty(dfType.dftDesignation))
            .filter((dfType) => dfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY)
            .map((dfType) => {
              return {
                label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
                value: dfType.id as number
              };
            })
            .sort((s1, s2) => s1.label.localeCompare(s2.label));

          this.selectedDfType = this.dfTypes.length === 1 ? this.dfTypes[0].value : undefined;
        }
      });
    } else if (this.getCurrentComponentContext === ComponentContext.EXTERNAL) {
      this.logisticsService.findReceiptDfTypes().subscribe({
        next: (dfTypes) => {
          this.dfTypes = ListUtils.orEmpty(dfTypes)
            .filter((dfType) => !StringUtils.isNullOrEmpty(dfType.dftDesignation))
            .filter(
              (dfType) =>
                dfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY ||
                dfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_EXTERNAL_KEY
            )
            .map((dfType) => {
              return {
                label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
                value: dfType.id as number
              };
            })
            .sort((s1, s2) => s1.label.localeCompare(s2.label));

          this.selectedDfType = this.dfTypes.length === 1 ? this.dfTypes[0].value : undefined;
        }
      });
    }

    this.transferOrderService.fetchTypeList().subscribe((res) => {
      this.typeList = res;
    });
  }

  private loadDocumentTypes(): void {
    this.documentTypes = [
      {
        label: this.translateService.instant('shippingFolder') as string,
        value: DocumentType.DOCUMENT_TYPE_SHIPPING_FOLDER
      },
      {
        label: this.translateService.instant('transferOrder') as string,
        value: DocumentType.DOCUMENT_TYPE_TRANSFER_ORDER
      }
    ];
  }

  private loadRecipientSites(): void {
    this.dfSearchService.findAllSiteList().subscribe({
      next: (sites) => {
        this.recipientSites = this.formatSites(sites);
      }
    });
  }

  private loadShipperSites(): void {
    this.dfSearchService.findAllBireSite().subscribe({
      next: (sites) => {
        this.shipperSites = this.formatSites(sites);
      }
    });
  }

  private loadWarehouseCategories(): void {
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP).subscribe({
      next: (warehouseCategories) => {
        this.warehouseCategories = ListUtils.orEmpty(warehouseCategories).sort((s1, s2) =>
          s1.value.localeCompare(s2.value)
        );

        const warehouseCategory = this.warehouseCategories.length > 0 ? this.warehouseCategories[0].value : undefined;
        this.selectedRecipientWarehouseCategory = warehouseCategory;
        this.selectedShipperWarehouseCategory = warehouseCategory;
      }
    });
  }

  private loadWareHouses(site: number, warehouseCategory: string): Observable<LabelValue<number>[]> {
    return this.dfSearchService.getWarehousesBySiteId(site).pipe(
      map((warehouses) => {
        return ListUtils.orEmpty(warehouses)
          .filter((warehouse) => warehouse.whCategory === warehouseCategory)
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

  private retrieveDocData(df: BidtDeliveryFolderDTO, dfRow: DfTableRow): void {
    if (df.bidtTransferOrder) {
      dfRow.docCode = df.bidtTransferOrder.torCode;
      dfRow.docType = this.typeList
        .filter((ty) => ty.value.toString() === (df.bidtTransferOrder as BidtTransferOrderDTO).torType)
        .map((res) => res.label)[0];
    } else if (df.externalDeliveryNumber) {
      dfRow.docCode = df.externalDeliveryNumber;
    }
  }

  private setDfTableColumns(): void {
    this.dfTableColumns = [
      { field: 'receptionFile', alignment: 'left', width: '12.5%' },
      { field: 'referenceDocument', alignment: 'left', width: '12.5%' },
      { field: 'sender', alignment: 'left', width: '12.5%' },
      { field: 'recipient', alignment: 'left', width: '12.5%' },
      { field: 'articles', alignment: 'left', width: '20%' },
      { field: 'quantity', alignment: 'left', width: '7.5%' },
      { field: 'status', alignment: 'left', width: '7.5%' },
      { field: 'expectedOn', alignment: 'left', width: '7.5%' },
      { field: 'situation', alignment: 'left', width: '7.5%' }
    ];
  }

  private unselectRecipientWarehouse(): void {
    this.recipientWarehouses = [];
    this.selectedRecipientWarehouse = undefined;
  }

  private unselectShipperWarehouse(): void {
    this.shipperWarehouses = [];
    this.selectedShipperWarehouse = undefined;
  }

  public isCreateButtonnIsVisible() {
    return this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_MM_RECEIVING,
      BidoFunctionTypeConstants.DEGREE_MANAGE
    );
  }
}
