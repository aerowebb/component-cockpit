import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload, SelectItem } from 'primeng/primeng';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidtStockMvtTypeConstant } from '../../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AddShipmentPackageInput } from '../../../../shared/types/api-input-types/logistic/add-shipment-package-input.interface';
import { DfTypeOperationsByDfTypeInput } from '../../../../shared/types/api-input-types/logistic/df-type-operations-by-df-type-input.interface';
import { FindStockMvtsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { SaveDocumentDeliveryFolderInput } from '../../../../shared/types/api-input-types/logistic/save-document-delivery-folder-input.interface';
import { UpdateBidtDfItemOperationInput } from '../../../../shared/types/api-input-types/logistic/update-df-item-operation-input.interce';
import { UpdateBidtDfItemInput } from '../../../../shared/types/api-input-types/logistic/update-items-status-input.interface';
import { UpdatePackageOperationInput } from '../../../../shared/types/api-input-types/logistic/update-package-operation-input.interface';
import { UpdateShipmentFolderInput } from '../../../../shared/types/api-input-types/logistic/update-shipment-status-input.interface';
import { UpdateStockMvtOperationStatusInput } from '../../../../shared/types/api-input-types/logistic/update-stock-mvt-operation-status-input.interface';
import { CatalogPropertiesTableDTO } from '../../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDeliveryFolderIdDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-id-dto.interface';
import { BidtDfItemDTO } from '../../../../shared/types/api-types/bidt-df-item-dto.interface';
import { BidtDfItemOperationDTO } from '../../../../shared/types/api-types/bidt-df-item-operation-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtPackageDTO } from '../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtPackageIdDTO } from '../../../../shared/types/api-types/bidt-package-id-dto.interface';
import { BidtPackageOperationDTO } from '../../../../shared/types/api-types/bidt-package-operation-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtOperationDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-operation-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { CatalogService } from '../../../administration/catalog/catalog.service';
import { OverlayService } from '../../../overlay/overlay.service';
import { GoodsReceiptFormService } from '../../goods-receipt/form/goods-receipt-form.service';
import { LogisticsService } from '../../logistics.service';
import { SearchService } from '../../stock-movements/search/search.service';
import { StockMvtParameters } from '../../stock-movements/stock-movement-parameters.interface';

import { ShipmentFolderStatusComponent } from './status/shipment-folder-status.component';

export interface ShipmentFolderStatusInpput {
  deliveryFolder: BidtDeliveryFolderDTO;
  isAllPackageValidated: boolean;
}

interface TableColumnDynamic extends TableColumn {
  value?: string;
  isDynamic: boolean;
  sequenceCode?: number;
}

interface BidtPackageCustomDTO extends BidtPackageDTO {
  isDisable: boolean;
  litigate?: string;
  received?: boolean;
  packagingCtrl?: boolean;
  quality?: boolean;
  progress?: number;
  _item?: BidtDfItemDTO;
  _obj: BidtPackageDTO;
}

interface BidtDfItemCustomDTO extends BidtDfItemDTO {
  articleDesignation?: string;
  bidtPackageId?: number;
  controlQuantity?: boolean;
  isHide: boolean;
  isDisable: boolean;
  item?: number;
  progress?: number;
  packageNumber?: string;
  unit?: string;
  _obj: BidtDfItemDTO;
}

interface MaterialCustomDTO {
  articleType?: string;
  batchNumber?: string;
  bidoEquipment?: BidoEquipmentDTO;
  bidtpackageStatus?: string;
  dfiCode?: string;
  documentary?: boolean;
  equipmentStatus?: string;
  isContener: boolean;
  isDisable: boolean;
  item?: BidtDfItemDTO;
  manufacturingBatch?: ReferenceBatchDTO;
  opeStatus?: string;
  packageNum?: string;
  packaging?: boolean;
  progress?: number;
  presential?: boolean;
  pnCode?: string;
  pnDesignation?: string;
  quantity?: string;
  sn?: string;
  unit?: string;
  visual?: boolean;
  correctPackageStatus?: boolean;
  _obj: BidtStockMvtDTO;
}

@Component({
  selector: 'aw-shipment-folder-form',
  styleUrls: ['./shipment-folder-form.component.scss'],
  templateUrl: './shipment-folder-form.component.html'
})
export class ShipmentFolderFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly PROGRESS_MAX: number = 100;

  private readonly LOG_TYPE_MAP: number = 138;
  public readonly component: typeof ShipmentFolderFormComponent;
  public awPropertiesConstants: typeof AWPropertiesConstants;

  public deliveryFolder: BidtDeliveryFolderDTO;
  public deliveryFolderId: BidtDeliveryFolderIdDTO;
  public deliveryFolderStatuses: LabelValue<string>[];
  public packageStatusMap: LabelValue<string>[];
  public itemStatusMap: LabelValue<string>[];
  public opeartionalStatusMap: SelectItem[];
  public documentTypes: SelectItem[];
  public deleteDocument: Observable<number>[];

  public packageList: BidtPackageDTO[];
  public itemsList: BidtDfItemDTO[];
  public catalogPropertiesTableDTO: CatalogPropertiesTableDTO[];

  public isLoading: boolean;

  // Parcel Table
  public parcelColsDynamicNumber: number;
  public parcelTableCols: TableColumnDynamic[];
  public parcelTableData: BidtPackageCustomDTO[];
  public selectedParcels: BidtPackageCustomDTO[];

  // Posts Table
  public postsColsDynamicNumber: number;
  public postsTableCols: TableColumnDynamic[];
  public postsTableData: BidtDfItemCustomDTO[];
  public selectedPost: BidtDfItemCustomDTO[];

  public showLitigation: boolean;

  public materialsColsDynamicNumber: number;
  public materialTableCols: TableColumnDynamic[];
  public materialTableData: MaterialCustomDTO[];
  public selectedMaterials: MaterialCustomDTO[];

  public openAddPackageDialog: boolean;

  public docType: string | undefined;
  public receiptFolder: BidtDeliveryFolderIdDTO | undefined;
  public refStatus: string | undefined;
  public scannedPackageCode: string;

  public pnTypeList: LabelValue<string>[];
  public packageTypeList: LabelValue<string>[];
  public documentTableDataSource: TableDataSource<BidtDocumentDTO>;
  public selectedDocuments: BidtDocumentDTO[];
  private selectedRowForComplience: BidtPackageCustomDTO | undefined;
  private selectedComplienceCol: string;
  // Package Counters
  public pExpected: number = 0;
  public pReceived: number = 0;
  public pAccepted: number = 0;
  public pDispute: number = 0;

  // Item Counters
  public iPlanned: number = 0;
  public iProgress: number = 0;
  public iReleased: number = 0;
  public iDispute: number = 0;

  // Material Counters
  public mExpected: number = 0;
  public mOK: number = 0;
  public mDispute: number = 0;

  // Package List with out item
  public packageListWithOutItem: BidtPackageDTO[] | undefined;
  public pakcageIdWithOutItem: Set<number>;

  public workOrderLinkToAssetId: string | undefined;
  public assetWithOT: boolean;
  public haveAsset: boolean;
  public editPackage: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly logisticService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    private readonly catalogService: CatalogService,
    private readonly overlayService: OverlayService,
    private readonly goodsReceiptFormService: GoodsReceiptFormService,
    private readonly searchService: SearchService
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
    this.component = ShipmentFolderFormComponent;
    this.getAllMaps();
    this.init();
  }

  public getAllMaps(): void {
    const deliveryFolderStatuses$ = this.propertiesService.getValue(
      GenericPropertyConstants.SHIPMENT_FOLDER_STATUS_MAP
    );
    const packageStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.PACKAGE_STATUS_MAP);
    const documentTypes$ = this.propertiesService.getValue(GenericPropertyConstants.DOC_PARTNER_CATEGORY_MAP);
    // status equipment maps
    const opeartionalStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
    const batchStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP);

    forkJoin([
      deliveryFolderStatuses$,
      packageStatusMap$,
      documentTypes$,
      opeartionalStatusMap$,
      batchStatusMap$
    ]).subscribe({
      next: ([deliveryFolderStatuses, packageStatusMap, documentTypes, opeartionalStatusMap, batchStatusMap]) => {
        this.deliveryFolderStatuses = deliveryFolderStatuses;
        this.packageStatusMap = packageStatusMap;
        this.documentTypes = !!documentTypes ? SelectItemUtils.fromLabelValues(documentTypes) : [];
        this.opeartionalStatusMap = !!opeartionalStatusMap ? SelectItemUtils.fromLabelValues(opeartionalStatusMap) : [];
        this.opeartionalStatusMap = this.opeartionalStatusMap.concat(
          !!batchStatusMap ? SelectItemUtils.fromLabelValues(batchStatusMap) : []
        );
      }
    });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_GOODS_SHIPMENT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.awPropertiesConstants = AWPropertiesConstants;
    if (this.componentData.objectId) {
      this.deliveryFolderId = this.serializationService.deserialize(
        this.componentData.objectId
      ) as BidtDeliveryFolderIdDTO;

      this.logisticService.findShipmentFolderWithAllObjectsById(this.deliveryFolderId).subscribe((deliveryFolder) => {
        this.deliveryFolder = deliveryFolder.bidtDeliveryFolderDTO;
        if (this.deliveryFolder.bidtDfItems) {
          this.deliveryFolder.bidtDfItems = this.deliveryFolder.bidtDfItems.sort((a, b) =>
            (a.dfiCode as string).localeCompare(b.dfiCode as string)
          );
        }
        this.packageListWithOutItem = deliveryFolder.packageList;

        this.goodsReceiptFormService
          .findDocumentByDeliveryFolderId(deliveryFolder.bidtDeliveryFolderDTO.id as number)
          .subscribe((documentDtolist) => {
            this.deliveryFolder.bidtDocuments = documentDtolist;
            this.documentTableDataSource.setData(ListUtils.orEmpty(this.deliveryFolder.bidtDocuments));
          });

        const logTypes = this.catalogService.fetchPropertyValuesTableData(this.LOG_TYPE_MAP);

        const pnTypes = this.propertiesService.getValue(GenericPropertyConstants.PN_TYPE_MAP);

        const packageTypes = this.propertiesService.getValue(GenericPropertyConstants.PACKAGE_TYPE_MAP);

        forkJoin({ logTypes, pnTypes, packageTypes }).subscribe({
          next: (results) => {
            this.pnTypeList = ListUtils.orEmpty(results.pnTypes);
            this.catalogPropertiesTableDTO = results.logTypes;
            this.packageTypeList = results.packageTypes;
            this.loadTableData();
          }
        });
      });
    }
  }

  private init() {
    this.deliveryFolder = {};
    this.parcelColsDynamicNumber = 0;
    this.postsColsDynamicNumber = 0;
    this.materialsColsDynamicNumber = 0;
    this.deleteDocument = [];
    this.assetWithOT = false;
    this.haveAsset = false;
    this.editPackage = false;

    this.packageList = [];
    this.itemsList = [];
    this.selectedPost = [];
    this.selectedParcels = [];
    this.postsTableData = [];
    this.parcelTableData = [];
    this.selectedMaterials = [];
    this.materialTableData = [];
    this.pakcageIdWithOutItem = new Set();
    this.loadTableColumns();
    this.documentTableDataSource.setData([]);
  }

  ///////////////////////////////////////////////////////////////////////////////

  /********************************
   * Load Table Columns
   ********************************/
  private loadTableColumns() {
    this.parcelTableCols = [
      { field: 'packageNum', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'packageType', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'status', alignment: 'left', isDynamic: false, width: '10%' }
    ];

    this.postsTableCols = [
      { field: 'dfiCode', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'refeArticle', alignment: 'left', isDynamic: false },
      { field: 'quantity', alignment: 'right', isDynamic: false, width: '10%' },
      { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'dfiStatus', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'packageNumber', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'litigate', alignment: 'left', isDynamic: false, width: '10%' }
    ];

    this.materialTableCols = [
      { field: 'dfiCode', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'refeArticle', alignment: 'left', isDynamic: false, width: '20%' },
      { field: 'batchNumber', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'SnAndManufactoring', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'qty', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'packageNum', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'litigate', alignment: 'left', isDynamic: false, width: '10%' }
    ];

    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'documentName', translateKey: this.getTranslateKey('name'), width: '90%' },
        { field: 'documentPublicationDate', translateKey: this.getTranslateKey('dateAdded'), width: '10%' }
      ],
      data: []
    });
  }

  public refresh(): void {
    this.parcelColsDynamicNumber = 0;
    this.postsColsDynamicNumber = 0;
    this.materialsColsDynamicNumber = 0;
    this.deleteDocument = [];
    this.documentTableDataSource.setData([]);
    this.deliveryFolder = {};
    this.packageList = [];
    this.packageList = [];
    this.itemsList = [];
    this.parcelTableData = [];
    this.parcelTableCols = [];
    this.postsTableData = [];
    this.postsTableCols = [];
    this.materialTableData = [];
    this.materialTableCols = [];
    this.selectedPost = [];
    this.postsTableData = [];
    this.workOrderLinkToAssetId = undefined;
    this.loadTableColumns();

    this.isLoading = true;
    this.assetWithOT = false;
    this.haveAsset = false;

    this.logisticService
      .findShipmentFolderWithAllObjectsById(this.deliveryFolderId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((deliveryFolder) => {
        this.deliveryFolder = deliveryFolder.bidtDeliveryFolderDTO;
        if (this.deliveryFolder.bidtDfItems) {
          this.deliveryFolder.bidtDfItems = this.deliveryFolder.bidtDfItems.sort((a, b) =>
            (a.dfiCode as string).localeCompare(b.dfiCode as string)
          );
        }
        this.packageListWithOutItem = deliveryFolder.packageList;
        this.goodsReceiptFormService
          .findDocumentByDeliveryFolderId(deliveryFolder.bidtDeliveryFolderDTO.id as number)
          .subscribe((documentDtolist) => {
            this.deliveryFolder.bidtDocuments = documentDtolist;
            this.documentTableDataSource.setData(ListUtils.orEmpty(this.deliveryFolder.bidtDocuments));
            this.loadTableData();
          });
      });
  }

  /********************************
   * Load Table Date
   ********************************/
  private loadTableData() {
    // Fetch Package Table Data
    this.renderPackageTableData();

    // Fetch Items Table Data
    this.renderItemsTableData();

    this.sortTables();
  }

  private sortTables(): void {
    if (this.parcelTableData && this.parcelTableData.length > 0) {
      this.parcelTableData.sort((a, b) => (a.packageCode as string).localeCompare(b.packageCode as string));
    }
    if (this.postsTableData && this.postsTableData.length > 0) {
      this.postsTableData.sort((a, b) => Number(a.dfiCode) - Number(b.dfiCode));
    }
    if (this.materialTableData && this.materialTableData.length > 0) {
      this.materialTableData.sort((a, b) => {
        if ((a.dfiCode as string).localeCompare(b.dfiCode as string) === 0 && a.bidoEquipment && b.bidoEquipment) {
          if (a.bidoEquipment.sn && b.bidoEquipment.sn) {
            return a.bidoEquipment.sn.localeCompare(b.bidoEquipment.sn);
          } else {
            return (a.bidoEquipment.batchNumber as string).localeCompare(b.bidoEquipment.batchNumber as string);
          }
        } else {
          return Number(a.dfiCode) - Number(b.dfiCode);
        }
      });
    }
  }

  public getPackageStatus(key: string): string {
    return this.packageStatusMap.filter((status) => status.value === key)[0].label;
  }

  public getItemStatus(key: string): string {
    return this.deliveryFolderStatuses.filter((status) => status.value === key)[0].label;
  }

  public getOperationnalStatus(key: string): string {
    return this.opeartionalStatusMap.filter((status) => status.value === key)[0].label as string;
  }

  public getPackageType(key: string): string {
    return this.packageTypeList.filter((type) => type.value === key)[0].label as string;
  }

  /********************************
   * Fetch Package Table data
   ********************************/
  private renderPackageTableData() {
    let packageList: BidtPackageDTO[] = ListUtils.orEmpty(this.deliveryFolder.bidtDfItems)
      .filter((item) => !!item.bidtPackage)
      .map((item) => {
        return item.bidtPackage as BidtPackageDTO;
      });
    if (this.packageListWithOutItem && this.packageListWithOutItem.length > 0) {
      packageList = packageList.concat(this.packageListWithOutItem);
    }
    const operationsList = packageList
      .filter((packageRow) => !!packageRow.bidtPackageOperations)
      .map((packageRow) => packageRow.bidtPackageOperations)
      .reduce(
        (acc, val) => (acc as BidtPackageOperationDTO[]).concat(val as BidtPackageOperationDTO[]),
        []
      ) as BidtPackageOperationDTO[];

    const input: DfTypeOperationsByDfTypeInput = {
      operations: operationsList,
      bidtDfTypeDTOId: (this.deliveryFolder.bidtDfType as BidtDfTypeDTO).id as number
    };
    this.goodsReceiptFormService.getBidtDfTypeOperationsByDfType(input).subscribe((operationsResult) => {
      const operations = operationsResult.map((operation) => {
        const operationList = this.catalogPropertiesTableDTO.filter(
          (ope) => ope.propertiesKey === operation.packopeDesignation
        );
        const tableColumn: TableColumnDynamic = {
          field: `${operation.packopeDesignation}`,
          alignment: 'center',
          value:
            this.translateService.currentLang.toUpperCase() === AWPropertiesConstants.PROPERTY_EN
              ? operationList[0].enPropertiesValue
              : operationList[0].frPropertiesValue,
          isDynamic: true,
          sequenceCode: Number(operation.packopeCode),
          width: '10%'
        };
        this.parcelColsDynamicNumber++;

        return tableColumn;
      });

      operations.sort((a, b) => (a.sequenceCode as number) - (b.sequenceCode as number));
      this.parcelTableCols = this.parcelTableCols.concat(operations);
      this.parcelTableCols = [
        ...this.parcelTableCols,
        { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
      ];
      this.parcelTableCols = this.parcelTableCols.reduce(
        (unique: TableColumnDynamic[], column: TableColumnDynamic) =>
          unique.every((elt) => elt.field !== column.field) ? [...unique, column] : unique,
        []
      );

      if (this.deliveryFolder.bidtDfItems && ListUtils.orEmpty(this.deliveryFolder.bidtDfItems)) {
        this.deliveryFolder.bidtDfItems.forEach((items) => {
          if (!!items.bidtPackage) {
            const bidtPackage = items.bidtPackage;
            const operationRowList = operationsResult.filter((opeDTO) => opeDTO.bidtPackageId === bidtPackage.id);
            const operationQuality = this.getPackageOperation(
              operationRowList,
              AWPropertiesConstants.LOGISTICAL_OPERATION_QUALITY_CONTROL
            );
            const operationReceived = this.getPackageOperation(
              operationRowList,
              AWPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
            );
            const operationPackaging = this.getPackageOperation(
              operationRowList,
              AWPropertiesConstants.LOGISTICAL_OPERATION_PACKAGING_CONTROL
            );

            this.packageList.push(bidtPackage);
            const packageData: BidtPackageCustomDTO = {
              id: bidtPackage.id,
              isDisable: this.isItemOnGoingOrPerformed(items),
              packageCode: bidtPackage.externalPackageCode ? bidtPackage.externalPackageCode : bidtPackage.packageCode,
              packageStatus: this.getPackageStatus(bidtPackage.packageStatus as string),
              packageType: bidtPackage.packageType ? this.getPackageType(bidtPackage.packageType) : undefined,
              bidtPackageOperations: operationRowList,
              quality: !!operationQuality
                ? this.isStatusPerformed(operationQuality.packopeStatus as string)
                  ? true
                  : false
                : undefined,
              packagingCtrl: !!operationPackaging
                ? this.isStatusPerformed(operationPackaging.packopeStatus as string)
                  ? true
                  : false
                : undefined,
              progress: 0,
              received: !!operationReceived
                ? this.isStatusPerformed(operationReceived.packopeStatus as string)
                  ? true
                  : false
                : undefined,
              _item: items,
              _obj: bidtPackage
            };
            packageData.progress = this.calculateProgress([
              packageData.packagingCtrl as boolean,
              packageData.received as boolean,
              packageData.quality as boolean
            ]);
            this.parcelTableData.push(packageData);
          }
        });
        this.createRowForPackageWithoutItem(operationsResult);
        this.parcelTableData = this.parcelTableData.reduce(
          (unique: BidtPackageCustomDTO[], bidtPackage: BidtPackageCustomDTO) =>
            unique.every((elt) => elt.packageCode !== bidtPackage.packageCode) ? [...unique, bidtPackage] : unique,
          []
        );
        this.packageList = this.packageList.reduce(
          (unique: BidtPackageDTO[], bidtPackage: BidtPackageDTO) =>
            unique.every((elt) => elt.packageCode !== bidtPackage.packageCode) ? [...unique, bidtPackage] : unique,
          []
        );
      }
    });
  }

  private createRowForPackageWithoutItem(operationsResult: BidtPackageOperationDTO[]): void {
    if (this.packageListWithOutItem && this.packageListWithOutItem.length > 0) {
      this.packageListWithOutItem.forEach((bidtPackageInput) => {
        const bidtPackage = bidtPackageInput;
        this.pakcageIdWithOutItem.add(bidtPackageInput.id as number);
        const operationRowList = operationsResult.filter((opeDTO) => opeDTO.bidtPackageId === bidtPackage.id);
        const operationQuality = this.getPackageOperation(
          operationRowList,
          AWPropertiesConstants.LOGISTICAL_OPERATION_QUALITY_CONTROL
        );
        const operationReceived = this.getPackageOperation(
          operationRowList,
          AWPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
        );
        const operationPackaging = this.getPackageOperation(
          operationRowList,
          AWPropertiesConstants.LOGISTICAL_OPERATION_PACKAGING_CONTROL
        );

        this.packageList.push(bidtPackage);
        const packageData: BidtPackageCustomDTO = {
          id: bidtPackage.id,
          isDisable: false,
          packageCode: bidtPackage.externalPackageCode ? bidtPackage.externalPackageCode : bidtPackage.packageCode,
          packageStatus: this.getPackageStatus(bidtPackage.packageStatus as string),
          packageType: bidtPackage.packageType ? this.getPackageType(bidtPackage.packageType) : undefined,
          bidtPackageOperations: operationRowList,
          quality: !!operationQuality
            ? this.isStatusPerformed(operationQuality.packopeStatus as string)
              ? true
              : false
            : undefined,
          packagingCtrl: !!operationPackaging
            ? this.isStatusPerformed(operationPackaging.packopeStatus as string)
              ? true
              : false
            : undefined,
          progress: 0,
          received: !!operationReceived
            ? this.isStatusPerformed(operationReceived.packopeStatus as string)
              ? true
              : false
            : undefined,
          _obj: bidtPackage
        };
        packageData.progress = this.calculateProgress([
          packageData.packagingCtrl as boolean,
          packageData.received as boolean,
          packageData.quality as boolean
        ]);
        this.parcelTableData.push(packageData);
      });
    }
  }

  public isItemOnGoingOrPerformed(item: BidtDfItemDTO): boolean {
    if (item.bidtDfItemOperations && item.bidtDfItemOperations.length > 0) {
      return (
        (item.dfiStatus as string) === AWPropertiesConstants.RECEIPT_FOLDER_STATUS_ON_GOING ||
        (item.dfiStatus as string) === AWPropertiesConstants.RECEIPT_FOLDER_STATUS_PERFORMED
      );
    } else {
      return this.isOneMaterialOperationPerformed(item);
    }
  }

  public getPackageOperation(
    bidtPackageOperationDTOList: BidtPackageOperationDTO[],
    colField: string
  ): BidtPackageOperationDTO | undefined {
    const bidtPackageOperation = bidtPackageOperationDTOList.filter(
      (operation) => operation.packopeDesignation === colField
    );

    if (bidtPackageOperation.length > 0) {
      return bidtPackageOperation[0];
    } else {
      return undefined;
    }
  }

  public isStatusPerformed(key: string): boolean {
    if (key === AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED) {
      return true;
    } else {
      return false;
    }
  }

  /********************************
   * Fetch Items Table data
   ********************************/
  private renderItemsTableData() {
    const operations = (ListUtils.orEmpty(this.deliveryFolder.bidtDfItems)
      .filter((item) => !!item.bidtDfItemOperations)
      .map((item) => item.bidtDfItemOperations)
      .reduce(
        (acc, val) => (acc as BidtDfItemOperationDTO[]).concat(val as BidtDfItemOperationDTO[]),
        []
      ) as BidtDfItemOperationDTO[]).map((operation) => {
      const operationList = this.catalogPropertiesTableDTO.filter(
        (ope) => ope.propertiesKey === operation.dfioDesignation
      );
      const tableColumn: TableColumnDynamic = {
        field: `${operation.dfioDesignation}`,
        alignment: 'center',
        value:
          this.translateService.currentLang.toUpperCase() === AWPropertiesConstants.PROPERTY_EN
            ? operationList[0].enPropertiesValue
            : operationList[0].frPropertiesValue,
        isDynamic: true,
        sequenceCode: Number(operation.dfioCode),
        width: '10%'
      };
      this.postsColsDynamicNumber++;

      return tableColumn;
    });

    operations.sort((a, b) => (a.sequenceCode as number) - (b.sequenceCode as number));
    this.postsTableCols = this.postsTableCols.concat(operations);
    this.postsTableCols = [
      ...this.postsTableCols,
      { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
    ];
    this.postsTableCols = this.postsTableCols.reduce(
      (unique: TableColumnDynamic[], column: TableColumnDynamic) =>
        unique.every((elt) => elt.field !== column.field) ? [...unique, column] : unique,
      []
    );

    this.postsTableData = [];
    this.materialTableData = [];
    if (!!this.deliveryFolder && !!this.deliveryFolder.bidtDfItems && this.deliveryFolder.bidtDfItems.length > 0) {
      const cloneItemList = [...this.deliveryFolder.bidtDfItems];
      cloneItemList.sort((a: BidtDfItemDTO, b: BidtDfItemDTO) => {
        if (!!a.dfiCode && !!b.dfiCode) {
          return parseInt(a.dfiCode, 10) - parseInt(b.dfiCode, 10);
        }

        return -1;
      });

      this.itemsList = [];
      cloneItemList.forEach((item, index) => {
        let i = index;
        this.itemsList.push(item);
        const operationQuality = this.getItemOperation(
          item.bidtDfItemOperations as BidtDfItemOperationDTO[],
          AWPropertiesConstants.LOGISTICAL_OPERATION_QUALITY_CONTROL
        );

        const disable = this.isOneMaterialOperationPerformed(item);

        let hide = false;
        if (item.bidtPackage) {
          hide = true;
          if (item.bidtPackage.packageStatus === AWPropertiesConstants.PACKAGE_STATUS_DELIVERED) {
            hide = false;
          }
        }

        const postData: BidtDfItemCustomDTO = {
          item: i++,
          id: item.id,
          bidtDeliveryFolder: item.bidtDeliveryFolder,
          articleDesignation: !!item.birePn ? item.birePn.articleDesignation : undefined,
          birePnPnCode: item.birePnPnCode,
          bidtDfItemOperations: item.bidtDfItemOperations,
          quantity: item.quantity,
          unit: item.birePn ? item.birePn.quantityUnit : undefined,
          dfiCode: item.dfiCode,
          isHide: hide,
          isDisable: disable,
          dfiStatus: this.getItemStatus(item.dfiStatus as string),
          packageNumber: !!item.bidtPackage
            ? item.bidtPackage.externalPackageCode
              ? item.bidtPackage.externalPackageCode
              : item.bidtPackage.packageCode
            : undefined,
          progress: 0,
          controlQuantity: !!operationQuality
            ? this.isStatusPerformed(operationQuality.dfioStatus as string)
              ? true
              : false
            : undefined,
          _obj: item
        };

        postData.progress = this.calculateProgresssItem(item);

        this.postsTableData.push(postData);

        if (!!item.bidtStockMvts && item.bidtStockMvts.length > 0) {
          this.materialTableData.push(...this.renderMaterialsTableData(item));
        }
      });

      this.materialTableData.forEach((material) => {
        if (material.item && material.item.birePn && material.sn) {
          const equipmentInput: BidoEquipmentDTO = {
            sn: material.sn,
            pnCode: material.item.birePn.pnCode
          };

          this.goodsReceiptFormService.findBidoEquipmentsByPnAndSn(equipmentInput).subscribe((equipment) => {
            material.bidoEquipment = equipment[0];
            if (equipment[0].operationalStatus) {
              material.equipmentStatus = this.getOperationnalStatus(equipment[0].operationalStatus);
            }
            this.sortTables();
          });
        } else if (material.item && material.item.birePn && material._obj.stockMvtBatchNumber) {
          const equipmentInput: BidoEquipmentDTO = {
            batchNumber: material._obj.stockMvtBatchNumber,
            pnCode: material.item.birePn.pnCode
          };
          this.goodsReceiptFormService.findBidoEquipmentByPnAndBatchNumber(equipmentInput).subscribe((equipment) => {
            if (
              ((material.item as BidtDfItemDTO).birePn as BirePnDTO).traceability ===
              AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH
            ) {
              this.goodsReceiptFormService
                .getManufacturingBatchByEquipment(equipment)
                .subscribe((manufacturingBatch) => {
                  material.bidoEquipment = equipment;
                  material.manufacturingBatch = manufacturingBatch;
                  if (equipment.operationalStatus) {
                    material.equipmentStatus = this.getOperationnalStatus(equipment.operationalStatus);
                  }
                });
            }
          });
          this.sortTables();
        }
      });
      if (this.materialTableData && this.materialTableData.length > 0) {
        this.goodsReceiptFormService
          .calculateShipmentFolderCriticality(this.deliveryFolder)
          .subscribe((criticality) => {
            this.deliveryFolder.criticality = criticality;
          });
      }

      if (
        !this.workOrderLinkToAssetId &&
        this.materialTableData &&
        this.materialTableData.length > 0 &&
        this.deliveryFolder.bidtWarehouseReceiver &&
        this.deliveryFolder.bidtWarehouseReceiver.whCategory === AWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP
      ) {
        this.goodsReceiptFormService
          .findWorkOrderByMvts([this.materialTableData[0]._obj])
          .subscribe((workOrderList) => {
            if (workOrderList && workOrderList.length > 0) {
              this.assetWithOT = true;
              if (workOrderList[0] && workOrderList[0].woId) {
                this.workOrderLinkToAssetId = workOrderList[0].woId;
              }
            }
          });
      }
    }
  }

  public getItemOperation(
    bidtPackageOperationDTOList: BidtDfItemOperationDTO[],
    colField: string
  ): BidtDfItemOperationDTO | undefined {
    const bidtDfItemOperation = bidtPackageOperationDTOList.filter(
      (operation) => operation.dfioDesignation === colField
    );

    if (bidtDfItemOperation.length > 0) {
      return bidtDfItemOperation[0];
    } else {
      return undefined;
    }
  }

  public isOneMaterialOperationPerformed(item: BidtDfItemDTO): boolean {
    let state = false;
    if (item.bidtStockMvts && item.bidtStockMvts.length > 0) {
      item.bidtStockMvts
        .filter((stock) => !!stock.bidtStockMvtOperations && stock.bidtStockMvtOperations.length > 0)
        .forEach((stockWithOperation) => {
          (stockWithOperation.bidtStockMvtOperations as BidtStockMvtOperationDTO[]).forEach((operation) => {
            if (operation.smoStatus === AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED) {
              state = true;
            }
          });
        });
    }

    return state;
  }

  /********************************
   * Fetch Material Table data
   ********************************/
  private renderMaterialsTableData(rowData: BidtDfItemDTO): MaterialCustomDTO[] {
    const operations = (ListUtils.orEmpty(rowData.bidtStockMvts)
      .filter((material) => !!material.bidtStockMvtOperations)
      .map((material) => material.bidtStockMvtOperations)
      .reduce(
        (acc, val) => (acc as BidtStockMvtOperationDTO[]).concat(val as BidtStockMvtOperationDTO[]),
        []
      ) as BidtStockMvtOperationDTO[]).map((operation) => {
      const operationList = this.catalogPropertiesTableDTO.filter(
        (ope) => ope.propertiesKey === operation.smoDesignation
      );
      const tableColumn: TableColumnDynamic = {
        field: `${operation.smoDesignation}`,
        alignment: 'center',
        value:
          this.translateService.currentLang.toUpperCase() === AWPropertiesConstants.PROPERTY_EN
            ? operationList[0].enPropertiesValue
            : operationList[0].frPropertiesValue,
        isDynamic: true,
        sequenceCode: Number(operation.smoCode),
        width: '10%'
      };
      this.materialsColsDynamicNumber++;

      return tableColumn;
    });

    operations.sort((a, b) => (a.sequenceCode as number) - (b.sequenceCode as number));
    this.materialTableCols = this.materialTableCols.concat(operations);
    this.materialTableCols = [
      ...this.materialTableCols,
      { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
    ];
    this.materialTableCols = this.materialTableCols.reduce(
      (unique: TableColumnDynamic[], column: TableColumnDynamic) =>
        unique.every((elt) => elt.field !== column.field) ? [...unique, column] : unique,
      []
    );

    const materialList: MaterialCustomDTO[] = [];
    if (!!rowData.bidtStockMvts && rowData.bidtStockMvts.length > 0) {
      this.haveAsset = true;
      rowData.bidtStockMvts.forEach((material) => {
        const operationDocumentary = this.getMaterialOperation(
          material.bidtStockMvtOperations as BidtStockMvtOperationDTO[],
          AWPropertiesConstants.LOGISTICAL_OPERATION_DOCUMENT_CONTROL
        );
        const operationVisual = this.getMaterialOperation(
          material.bidtStockMvtOperations as BidtStockMvtOperationDTO[],
          AWPropertiesConstants.LOGISTICAL_OPERATION_VISUAL_CONTROL
        );

        let disable = false;
        if (material.bidtStockMvtOperations && material.bidtStockMvtOperations.length > 0) {
          if (rowData.bidtDfItemOperations && rowData.bidtDfItemOperations.length > 0) {
            disable = this.isItemOperationNotPerformed(rowData);
          } else if (rowData.bidtPackage) {
            disable = true;
            if (rowData.bidtPackage.packageStatus === AWPropertiesConstants.PACKAGE_STATUS_DELIVERED) {
              disable = false;
            }
          }
        }

        const materialCustom: MaterialCustomDTO = {
          _obj: material,
          item: rowData,
          isDisable: disable,
          pnCode: rowData.birePn ? rowData.birePn.pnCode : undefined,
          pnDesignation: rowData.birePn ? rowData.birePn.articleDesignation : undefined,
          sn: material.stockMvtSn ? material.stockMvtSn : undefined,
          batchNumber: material.stockMvtBatchNumber ? material.stockMvtBatchNumber : undefined,
          unit: rowData.birePn ? rowData.birePn.quantityUnit : undefined,
          quantity: material.stockMvtQuantity,
          packageNum: rowData.bidtPackage
            ? rowData.bidtPackage.externalPackageCode
              ? rowData.bidtPackage.externalPackageCode
              : rowData.bidtPackage.packageCode
            : undefined,
          bidtpackageStatus: rowData.bidtPackage
            ? this.getPackageStatus(rowData.bidtPackage.packageStatus as string)
            : undefined,
          dfiCode: rowData.dfiCode,
          isContener: rowData.bidtPackage ? true : false,
          documentary: !!operationDocumentary
            ? this.isStatusPerformed(operationDocumentary.smoStatus as string)
              ? true
              : false
            : undefined,
          visual: !!operationVisual
            ? this.isStatusPerformed(operationVisual.smoStatus as string)
              ? true
              : false
            : undefined,
          correctPackageStatus: rowData.bidtPackage
            ? this.isPackageCorectStatus(rowData.bidtPackage.packageStatus as string)
            : undefined
        };

        materialCustom.progress = this.calculateProgress([materialCustom.documentary, materialCustom.visual]);

        materialList.push(materialCustom);
      });
    }

    return materialList;
  }

  private isPackageCorectStatus(key: string): boolean {
    return key === AWPropertiesConstants.PACKAGE_STATUS_PLANNED;
  }

  private isItemOperationNotPerformed(item: BidtDfItemDTO): boolean {
    let count = 0;
    (item.bidtDfItemOperations as BidtDfItemOperationDTO[]).forEach((itemOperation) => {
      if (itemOperation.dfioStatus === AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED) {
        count++;
      }
    });

    return (item.bidtDfItemOperations as BidtDfItemOperationDTO[]).length === count ? false : true;
  }

  public getMaterialOperation(
    bidtPackageOperationDTOList: BidtStockMvtOperationDTO[],
    colField: string
  ): BidtStockMvtOperationDTO | undefined {
    const bidtStockMvtOperation = bidtPackageOperationDTOList.filter(
      (operation) => (operation.smoDesignation as string) === colField
    );

    if (bidtStockMvtOperation.length > 0) {
      return bidtStockMvtOperation[0];
    } else {
      return undefined;
    }
  }

  public calculateProgress(boolList: (boolean | undefined)[]): number {
    const maxProgress = 100;
    const specificCase = 3;
    let numberCol = 0;
    boolList.forEach((bool) => {
      if (bool !== undefined) {
        numberCol++;
      }
    });

    const progressForOneOpe = Math.floor(maxProgress / numberCol);
    let count = numberCol === specificCase ? 1 : 0;

    boolList.forEach((bool) => {
      if (bool) {
        count = count + progressForOneOpe;
      }
    });

    return count;
  }

  private calculateProgresssItem(item: BidtDfItemDTO): number {
    const waitingQuantity = Number(item.quantity);
    let receiptQuantity = 0;
    const multiplier = 100;

    if (item.bidtStockMvts && item.bidtStockMvts.length > 0) {
      item.bidtStockMvts
        .filter((stockMvt) => !!stockMvt.bidtStockMvtOperations && stockMvt.bidtStockMvtOperations.length > 0)
        .forEach((stockMvt) => {
          const nbOperation = (stockMvt.bidtStockMvtOperations as BidtStockMvtOperationDTO[]).length;
          let nbOperationDone = 0;
          (stockMvt.bidtStockMvtOperations as BidtStockMvtOperationDTO[]).forEach((operation) => {
            if (operation.smoStatus === AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED) {
              nbOperationDone++;
            }
          });
          if (nbOperation === nbOperationDone) {
            receiptQuantity = receiptQuantity + Number(stockMvt.stockMvtQuantity);
          }
        });
    }

    return Math.floor((receiptQuantity / waitingQuantity) * multiplier);
  }

  /********************************
   * Validate Operations
   ********************************/
  public validateOperations() {
    const partialMessageKey = this.getTranslateKey('validateParcel');
    this.confirmationService.confirm({
      messageKey: partialMessageKey,
      accept: () => {
        const imputList: UpdatePackageOperationInput[] = [];
        this.selectedParcels.forEach((packageCustom) => {
          (packageCustom.bidtPackageOperations as BidtPackageOperationDTO[]).forEach((operation) => {
            const updatepackageInput: UpdatePackageOperationInput = {
              operationId: Number(operation.id),
              bidtDeliveryFolderDto: this.deliveryFolder,
              newStatus: AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED
            };
            imputList.push(updatepackageInput);
          });
        });
        this.performPackageOperations(imputList);
      }
    });
  }

  /********************************
   * Open Selected Posts
   ********************************/
  public openLitigationDialog() {
    this.showLitigation = true;
  }

  /********************************
   * Is Object Empty
   ********************************/
  public isEmpty(obj: {}): number {
    return !!obj && Object.keys(obj).length > 0 ? Object.keys(obj).length : 0;
  }

  public onChangeReceivedAndCompliance(rowData: BidtPackageCustomDTO, colField: string) {
    const operationCheck = this.getPackageOperation(
      rowData.bidtPackageOperations as BidtPackageOperationDTO[],
      colField
    );
    this.selectedRowForComplience = undefined;
    this.selectedComplienceCol = '';
    if (
      operationCheck &&
      !this.isStatusPerformed(operationCheck.packopeStatus as string) &&
      !(rowData._obj.length && rowData._obj.width && rowData._obj.height && rowData._obj.weight) &&
      this.deliveryFolder.bidtDfType &&
      (this.deliveryFolder.bidtDfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY ||
        this.deliveryFolder.bidtDfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_EXTERNAL_KEY)
    ) {
      this.selectedRowForComplience = rowData;
      this.selectedComplienceCol = colField;
      this.openAddPackageDialog = true;

      return;
    }
    if (rowData.bidtPackageOperations) {
      this.updatePackageOperations(rowData.bidtPackageOperations, colField);
    }
  }

  private updatePackageOperations(bidtPackageOperations: BidtPackageOperationDTO[], colField: string): void {
    const operationCheck = this.getPackageOperation(bidtPackageOperations as BidtPackageOperationDTO[], colField);

    if (operationCheck) {
      if (this.isStatusPerformed(operationCheck.packopeStatus as string)) {
        operationCheck.packopeStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PLANNED;
      } else {
        operationCheck.packopeStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED;
      }
      const updatepackageInput: UpdatePackageOperationInput = {
        operationId: Number(operationCheck.id),
        bidtDeliveryFolderDto: this.deliveryFolder,
        newStatus: operationCheck.packopeStatus as string
      };
      this.performPackageOperations([updatepackageInput]);
    }
  }

  /**********************************************
   * Operation on Package
   **********************************************/
  private performPackageOperations(operationCheckList: UpdatePackageOperationInput[]) {
    this.logisticService.performPackageOperations(operationCheckList).subscribe((res) => {
      this.selectedParcels = [];
      this.refresh();
    });
  }

  public onChangeItemControl(rowData: BidtDfItemCustomDTO, colField: string) {
    const operationCheck = this.getItemOperation(rowData.bidtDfItemOperations as BidtDfItemOperationDTO[], colField);

    if (operationCheck) {
      if (this.isStatusPerformed(operationCheck.dfioStatus as string)) {
        operationCheck.dfioStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PLANNED;
      } else {
        operationCheck.dfioStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED;
      }
      const updateBidtDfItemOperationInput: UpdateBidtDfItemOperationInput = {
        operationId: operationCheck.id as number,
        newStatus: operationCheck.dfioStatus as string
      };
      this.performItemOperations([updateBidtDfItemOperationInput]);
    }
  }

  /**********************************************
   * Operation on Item
   **********************************************/
  private performItemOperations(res: UpdateBidtDfItemOperationInput[]) {
    this.logisticService.performItemOperations(res).subscribe((result) => {
      this.selectedPost = [];
      this.refresh();
    });
  }

  public onChangeMaterialControl(rowData: MaterialCustomDTO, colField: string) {
    const operationCheck = this.getMaterialOperation(
      rowData._obj.bidtStockMvtOperations as BidtStockMvtOperationDTO[],
      colField
    );

    if (operationCheck) {
      if (this.isStatusPerformed(operationCheck.smoStatus as string)) {
        operationCheck.smoStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PLANNED;
      } else {
        operationCheck.smoStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED;
      }
      const input: UpdateStockMvtOperationStatusInput = {
        bidtStockMvt: rowData._obj,
        operationId: operationCheck.id as number,
        bidtDfItem: rowData.item as BidtDfItemDTO,
        newStatus: operationCheck.smoStatus as string
      };
      this.performStockMovementOperations([input]);
    }
  }

  /**********************************************
   * Operation on Material
   **********************************************/
  private performStockMovementOperations(input: UpdateStockMvtOperationStatusInput[]): void {
    this.logisticService.performStockMovementOperations(input).subscribe(() => {
      this.selectedMaterials = [];
      this.refresh();
    });
  }

  /********************************
   * Validate Operations
   ********************************/
  public validateMaterialOperations() {
    const partialMessageKey = this.getTranslateKey('validateAsset');
    this.confirmationService.confirm({
      messageKey: partialMessageKey,
      accept: () => {
        const imputList: UpdateStockMvtOperationStatusInput[] = [];
        this.selectedMaterials.forEach((material) => {
          (material._obj.bidtStockMvtOperations as BidtStockMvtOperationDTO[]).forEach((operation) => {
            const updatepackageInput: UpdateStockMvtOperationStatusInput = {
              bidtStockMvt: material._obj,
              operationId: operation.id as number,
              bidtDfItem: material.item as BidtDfItemDTO,
              newStatus: AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED
            };
            imputList.push(updatepackageInput);
          });
        });
        this.performStockMovementOperations(imputList);
      }
    });
  }

  public addPackageDialog(): void {
    this.selectedRowForComplience = undefined;
    this.selectedComplienceCol = '';
    this.openAddPackageDialog = true;
  }

  public editPackageDialog(): void {
    this.selectedRowForComplience = this.selectedParcels[0];
    this.selectedComplienceCol = '';
    this.editPackage = true;
    this.openAddPackageDialog = true;
  }

  private getSearchCriteria(): FindStockMvtsByCriteriaInput {
    const searchCriteria: FindStockMvtsByCriteriaInput = {
      mvtStatus: [],
      mvtStatusExcluded: [
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ],
      untilPlannedDate: new Date(),
      untilRealDate: undefined,
      stockMvt: {
        bidtSiteByBidtSiteIssueId: this.deliveryFolder.bidtSiteSender
          ? this.deliveryFolder.bidtSiteSender.siteId
          : undefined,
        bidtSiteByBidtSiteReceiptId: undefined,
        bidtWarehouseByBidtWarehouseIssueId: this.deliveryFolder.bidtWarehouseSender
          ? this.deliveryFolder.bidtWarehouseSender.wareHouseId
          : undefined,
        bidtWarehouseByBidtWarehouseReceiptId: undefined,
        bidtStockMvtTypeId: BidtStockMvtTypeConstant.SHIPMENT
      },
      finalReceiverCustomerCode: undefined,
      finalReceiverSiteId: undefined,
      finalReceiverWarehouseId: undefined,
      pnCode: undefined,
      withAlternatives: false,
      criticality: undefined,
      dfShipmentSearch: true
    };

    return searchCriteria;
  }

  public addMaterialDialog() {
    this.searchService.findByCriteria(this.getSearchCriteria()).subscribe((mvtList) => {
      const params: StockMvtParameters = {
        searchParameters: this.getSearchCriteria(),
        bidtStockList: mvtList,
        bidtShipmentFolder: this.deliveryFolder,
        workOrderLinkToAssetId: this.workOrderLinkToAssetId ? this.workOrderLinkToAssetId : undefined,
        assetWithOT: this.assetWithOT,
        folderHaveAsset: this.haveAsset
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(params)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public addMaterialDialogToPackage() {
    this.searchService.findByCriteria(this.getSearchCriteria()).subscribe((mvtList) => {
      const params: StockMvtParameters = {
        searchParameters: this.getSearchCriteria(),
        bidtStockList: mvtList,
        bidtShipmentFolder: this.deliveryFolder,
        bidtPackageDTO: this.selectedParcels[0]._obj,
        workOrderLinkToAssetId: this.workOrderLinkToAssetId ? this.workOrderLinkToAssetId : undefined,
        assetWithOT: this.assetWithOT,
        folderHaveAsset: this.haveAsset
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(params)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public openSelectedGoods() {
    // TODO
  }

  /***********************************************
   * Control Quantity Visibility
   ***********************************************/
  public getControlQuantityVisibility(rowData: BidtDfItemCustomDTO): boolean {
    const COMPLETED = 100;
    let isQuantityEnabled = false;
    this.parcelTableData.filter((res) => {
      if (res.progress === COMPLETED && rowData.packageNumber === res.packageCode) {
        isQuantityEnabled = true;
      }
    });

    return isQuantityEnabled;
  }

  public getPresentialVisibility(rowData: MaterialCustomDTO): boolean {
    let isPresentialEnabled = false;
    this.postsTableData.filter((res) => {
      if (res.controlQuantity && rowData.packageNum === res.bidtPackageId) {
        isPresentialEnabled = true;
      }
    });

    return isPresentialEnabled;
  }

  /************************************
   * Delete Package
   ************************************/
  public deleteShipmentPackage() {
    let listItem: BidtDfItemDTO[] = [];
    this.selectedParcels.forEach((res) => {
      if (res._item) {
        listItem = listItem.concat(
          this.itemsList.filter((item) => !!item.bidtPackage && item.bidtPackage.id === res.id)
        );
      }

      if (this.pakcageIdWithOutItem.has(res._obj.id as number)) {
        const input: BidtPackageIdDTO = {
          id: res.id
        };
        // C54
        this.logisticService.deleteReceiptPackage(input).subscribe((data) => {
          if (listItem.length > 0) {
            this.logisticService.deleteShipmentItem(listItem).subscribe((dataSupr) => {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeletePackages'));
              this.selectedParcels = [];
              this.refresh();
            });
          } else {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeletePackages'));
            this.selectedParcels = [];
            this.refresh();
          }
        });
      } else {
        if (listItem.length > 0) {
          this.logisticService.deleteShipmentItem(listItem).subscribe((dataSupr) => {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeletePackages'));
            this.selectedParcels = [];
            this.refresh();
          });
        }
      }
    });
  }

  /************************************
   * Delete Item
   ************************************/
  public deleteReceiptItem() {
    const itemsInput = this.selectedPost.map((item) => {
      return item._obj;
    });
    this.logisticService.deleteShipmentItem(itemsInput).subscribe((data) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteItems'));
      this.selectedPost = [];
      this.refresh();
    });
  }

  /************************************
   * Delete Materials
   ************************************/
  public deleteShipmentMaterial() {
    const bidtStockList = this.selectedMaterials.map((row) => {
      return row._obj;
    });

    this.goodsReceiptFormService.deleteShipmentAsset(bidtStockList).subscribe((data) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMaterial'));
      this.selectedMaterials = [];
      this.refresh();
    });
  }

  // on create package
  public onCreatePackage(event: BidtPackageDTO): void {
    this.refresh();
  }

  // on create item
  public onCreateItem(event: BidtDeliveryFolderDTO): void {
    this.refresh();
  }

  // on create material
  public onCreateMaterial(event: BidtStockMvtDTO): void {
    this.refresh();
  }

  public showStatus(): void {
    if (this.deliveryFolder.dfStatus !== AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_CANCELED) {
      const input: ShipmentFolderStatusInpput = {
        deliveryFolder: this.deliveryFolder,
        isAllPackageValidated: this.isAllPackageValidated()
      };
      const overlayRef = this.overlayService.openWithPositionCenter<string | undefined>({
        content: ShipmentFolderStatusComponent,
        data: input
      });

      overlayRef.afterClosed$.subscribe({
        next: (event) => {
          if (event.data) {
            if (this.deliveryFolder.bidtDfItems && this.deliveryFolder.bidtDfItems.length > 0) {
              const updateItemsStatusInput = this.deliveryFolder.bidtDfItems.map((item) => {
                const row: UpdateBidtDfItemInput = {
                  bidtDfItemDTO: item,
                  newStatus: event.data as string
                };

                return row;
              });

              this.goodsReceiptFormService.updateItemsStatus(updateItemsStatusInput).subscribe((result) => {
                this.changeStatus(event.data as string);
              });
            } else {
              this.changeStatus(event.data);
            }
          }
        }
      });
    }
  }

  private changeStatus(status: string) {
    if (status === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_AWAITING) {
      this.waitValidate();
    } else if (
      status === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_ON_GOING &&
      this.deliveryFolder.dfStatus === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_AWAITING
    ) {
      this.cancelWait();
    } else if (status === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_TAKEN_IN_CHARGE) {
      this.waitValidate();
    } else {
      this.deliveryFolder.dfStatus = status;
      this.save();
    }
  }

  public save(): void {
    this.goodsReceiptFormService.addOrUpdateShipmentFolder(this.deliveryFolder).subscribe({
      next: (deliveryFolder) => {
        this.deliveryFolderId = {
          id: deliveryFolder.id
        };
        this.refresh();
      }
    });
  }

  public openLinkEquipment(code: string): void {
    if (code) {
      this.openEquipment(code, ComponentOpenMode.Read);
    }
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
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

  public openLink(equipment: BidoEquipmentDTO) {
    if (equipment.sn) {
      this.openEquipment(equipment.equipmentCode, ComponentOpenMode.Read);
    } else {
      this.openSelectedBatch(equipment.equipmentCode as string);
    }
  }

  public openSelectedBatch(code: string) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
      openMode: ComponentOpenMode.Read
    };

    data.objectId = code;

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documentTableDataSource.data.some((document) => document.documentName === file.name);
      if (fileExists) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (!!fileContent) {
            const selectedDocumentType = this.documentTypes.find(
              (documentType) => !!file.type && (documentType.value as string) === file.type
            );
            const document: BidtDocumentDTO = {
              documentContent: fileContent,
              documentName: file.name,
              documentType: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
              documentPublicationDate: new Date()
            };

            this.deliveryFolder.bidtDocuments = [...ListUtils.orEmpty(this.deliveryFolder.bidtDocuments), document];
            this.documentTableDataSource.addData([document]);
            this.saveBidtDocuments();
          }
        });
      }
      fileUploader.clear();
    }
  }

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      if (!!documentRow) {
        FileUtils.downloadFile(documentRow.documentContent, documentRow.documentName);
      }
    });
  }

  public saveBidtDocuments(): void {
    if (this.deliveryFolder.bidtDocuments) {
      const saveDocumentDeliveryFolderInput: SaveDocumentDeliveryFolderInput = {
        deliveryFolderDTO: this.deliveryFolder,
        documentList: this.deliveryFolder.bidtDocuments
      };

      this.goodsReceiptFormService.saveDocuments(saveDocumentDeliveryFolderInput).subscribe((document) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateDocument'));
      });
    }
  }

  public deleteDocuments(): void {
    this.documentTableDataSource.dataSelection.forEach((selection) => {
      this.deleteDocument.push(this.goodsReceiptFormService.deleteByid(selection.id as number));
    });

    forkJoin(this.deleteDocument).subscribe((result) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteDocument'));
      this.refresh();
    });
  }

  public isDeliveryFolderDraftStatus(): boolean {
    if (this.deliveryFolder.dfStatus === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_DRAFT) {
      return true;
    } else {
      return false;
    }
  }

  public isDeliveryFolderEditable(): boolean {
    if (
      this.deliveryFolder.dfStatus === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_AWAITING ||
      this.deliveryFolder.dfStatus === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_TAKEN_IN_CHARGE ||
      this.deliveryFolder.dfStatus === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_PERFORMED
    ) {
      return true;
    } else {
      return false;
    }
  }

  public isDeliveryFolderWaiting(): boolean {
    if (this.deliveryFolder.dfStatus === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_AWAITING) {
      return true;
    } else {
      return false;
    }
  }

  public isDeliveryFoldertaken(): boolean {
    if (this.deliveryFolder.dfStatus === AWPropertiesConstants.SHIPMENT_FOLDER_STATUS_TAKEN_IN_CHARGE) {
      return true;
    } else {
      return false;
    }
  }

  public isUserCanAddHaveRightOnDeliveryFolder(): boolean {
    return this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_MM_RECEIVING,
      BidoFunctionTypeConstants.DEGREE_MANAGE
    );
  }

  public openMfgBatch(objectId: string | undefined): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
      objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * OPEN PART NUMBER UC
   **********************************/
  public openPartNumberLink(item: BidtDfItemCustomDTO): void {
    this.openPN(item.birePnPnCode, ComponentOpenMode.Read);
  }

  private openPN(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_PART_NUMBER_FORM,
      objectId,
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public addorUpdatePackageShipment(input: AddShipmentPackageInput): void {
    const observables: Observable<BidtPackageDTO>[] = [];
    if ((this.selectedRowForComplience && this.selectedComplienceCol) || this.editPackage) {
      observables.push(this.goodsReceiptFormService.updateShipmentPackage(input.bidtPackageDTO));
    } else {
      observables.push(this.goodsReceiptFormService.addShipmentPackage(input));
    }

    forkJoin(observables).subscribe((output) => {
      if (!this.editPackage) {
        if (!!this.selectedRowForComplience) {
          const ackageOperationsList = this.selectedRowForComplience.bidtPackageOperations || [];
          this.updatePackageOperations(ackageOperationsList, this.selectedComplienceCol);
        } else {
          this.selectedRowForComplience = undefined;
          this.selectedComplienceCol = '';
          this.refresh();
        }
      } else {
        this.editPackage = false;
        this.selectedRowForComplience = undefined;
        this.selectedComplienceCol = '';
        this.refresh();
      }
    });
  }

  public cancelPackageEdit(): void {
    this.selectedParcels = [];
    this.editPackage = false;
    this.selectedRowForComplience = undefined;
    this.selectedComplienceCol = '';
    this.refresh();
  }

  public isPackageValidated(): boolean {
    return (
      this.selectedParcels[0].packageStatus === this.getPackageStatus(AWPropertiesConstants.PACKAGE_STATUS_VALIDATED)
    );
  }

  public isAllPackageValidated(): boolean {
    if (this.parcelTableData && this.parcelTableData.length > 0) {
      let nbRowValidated = 0;
      this.parcelTableData.forEach((packageRow) => {
        if (packageRow.packageStatus === this.getPackageStatus(AWPropertiesConstants.PACKAGE_STATUS_VALIDATED)) {
          nbRowValidated++;
        }
      });
      if (nbRowValidated === this.parcelTableData.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  public waitValidate(): void {
    const input: UpdateShipmentFolderInput = {
      bidtDeliveryFolderDTO: this.deliveryFolder,
      needCancel: false
    };
    this.goodsReceiptFormService.updateShipmentFolderStatus(input).subscribe((updatedFolder) => {
      this.refresh();
    });
  }

  public cancelWait(): void {
    const input: UpdateShipmentFolderInput = {
      bidtDeliveryFolderDTO: this.deliveryFolder,
      needCancel: true
    };
    this.goodsReceiptFormService.updateShipmentFolderStatus(input).subscribe((updatedFolder) => {
      this.refresh();
    });
  }

  public isAllPackageInGoodStatus(): boolean {
    return (
      this.selectedMaterials.filter(
        (row) => row.correctPackageStatus === true || row.correctPackageStatus === undefined
      ).length === this.selectedMaterials.length
    );
  }
}
