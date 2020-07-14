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
import { BireMeasureReferenceConstants } from '../../../../shared/constants/bire-measure-reference-constants';
import { BireRatingConstants } from '../../../../shared/constants/bire-rating-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { DfTypeOperationsByDfTypeInput } from '../../../../shared/types/api-input-types/logistic/df-type-operations-by-df-type-input.interface';
import { FindDeliveryFoldersByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-delivery-folders-by-criteria-input.interface';
import { FindStockMvtsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { SaveDocumentDeliveryFolderInput } from '../../../../shared/types/api-input-types/logistic/save-document-delivery-folder-input.interface';
import { UpdateBidtDfItemOperationInput } from '../../../../shared/types/api-input-types/logistic/update-df-item-operation-input.interce';
import { UpdatePackageOperationInput } from '../../../../shared/types/api-input-types/logistic/update-package-operation-input.interface';
import { UpdateStockMvtOperationStatusInput } from '../../../../shared/types/api-input-types/logistic/update-stock-mvt-operation-status-input.interface';
import { CatalogPropertiesTableDTO } from '../../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDeliveryFolderIdDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-id-dto.interface';
import { BidtDfItemDTO } from '../../../../shared/types/api-types/bidt-df-item-dto.interface';
import { BidtDfItemIdDTO } from '../../../../shared/types/api-types/bidt-df-item-id-dto.interface';
import { BidtDfItemOperationDTO } from '../../../../shared/types/api-types/bidt-df-item-operation-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDfTypeOperationDTO } from '../../../../shared/types/api-types/bidt-df-type-operation-dto.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtPackageDTO } from '../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtPackageIdDTO } from '../../../../shared/types/api-types/bidt-package-id-dto.interface';
import { BidtPackageOperationDTO } from '../../../../shared/types/api-types/bidt-package-operation-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtIdDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-id-dto.interface';
import { BidtStockMvtOperationDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-operation-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { CatalogService } from '../../../administration/catalog/catalog.service';
import { OverlayService } from '../../../overlay/overlay.service';
import { LogisticsService } from '../../logistics.service';
import { SearchService } from '../../stock-movements/search/search.service';
import { StockMvtParameters } from '../../stock-movements/stock-movement-parameters.interface';

import { GoodsReceiptFormService } from './goods-receipt-form.service';
import { GoodReceiptStatusComponent } from './status/good-receipt-status.component';

interface OperationRowData {
  bidtStockMvtOperationDTO?: BidtStockMvtOperationDTO;
  bidtDfTypeOperation?: BidtDfTypeOperationDTO;
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
  isGoodStatus: boolean;
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
  physical?: boolean;
  expirationDate?: Date;
  _obj: BidtStockMvtDTO;
  _operations: OperationRowData[];
  _operationDocumentary: OperationRowData | undefined;
  _operationVisual: OperationRowData | undefined;
  _operationPhysical: OperationRowData | undefined;
}

@Component({
  selector: 'aw-goods-receipt-form',
  styleUrls: ['./goods-receipt-form.component.scss'],
  templateUrl: './goods-receipt-form.component.html'
})
export class GoodsReceiptFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly PROGRESS_MAX: number = 100;

  private readonly LOG_TYPE_MAP: number = 138;
  public readonly component: typeof GoodsReceiptFormComponent;
  public awPropertiesConstants: typeof AWPropertiesConstants;

  public deliveryFolder: BidtDeliveryFolderDTO;
  public deliveryFolderId: BidtDeliveryFolderIdDTO;
  public deliveryFolderStatuses: LabelValue<string>[] = [];
  public shipmentFolderStatuses: LabelValue<string>[] = [];
  public shipmentFolderLinked: BidtDeliveryFolderDTO;
  public shipmentFolderLinkedType: string;
  public packageStatusMap: LabelValue<string>[];
  public itemStatusMap: LabelValue<string>[];
  public opeartionalStatusMap: SelectItem[];
  public documentTypes: SelectItem[];
  public deleteDocument: Observable<number>[];
  public torTypeList: LabelValue<number>[] = [];
  public transfertOrderStatusMap: LabelValue<string>[] = [];

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
  public openAddMaterialDialog: boolean;
  public openAddItemDialog: boolean;
  public openDocumentCategorieDialog: boolean;

  public docType: string | undefined;
  public receiptFolder: BidtDeliveryFolderIdDTO | undefined;
  public refStatus: string | undefined;
  public scannedPackageCode: string;

  public pnTypeList: LabelValue<string>[];
  public packageTypeList: LabelValue<string>[];
  public documentTableDataSource: TableDataSource<BidtDocumentDTO>;
  public selectedDocuments: BidtDocumentDTO[];

  public selectedOperation: BidtDfTypeOperationDTO;

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

  // next mvt variables
  public nextMvtList: BidtStockMvtDTO[];
  public isNextMvtContainStockPilling: boolean;
  public isNextMvtContainCrossDocking: boolean;

  public assetScanDialogVisible: boolean;

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
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly searchService: SearchService,
    private readonly goodsReceiptFormService: GoodsReceiptFormService
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
    this.component = GoodsReceiptFormComponent;
    this.getAllMaps();
    this.init();
  }

  public getAllMaps(): void {
    const deliveryFolderStatuses$ = this.propertiesService.getValue(GenericPropertyConstants.RECEIPT_FOLDER_STATUS_MAP);
    const shipmentFolderStatuses$ = this.propertiesService.getValue(
      GenericPropertyConstants.SHIPMENT_FOLDER_STATUS_MAP
    );
    const packageStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.PACKAGE_STATUS_MAP);
    const documentTypes$ = this.propertiesService.getValue(GenericPropertyConstants.DOC_PARTNER_CATEGORY_MAP);
    // status equipment maps
    const opeartionalStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
    const batchStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP);
    const transferOrderStatusMap$ = this.propertiesService.getValue(
      GenericPropertyConstants.TRANSFER_FOLDER_STATUS_MAP
    );

    this.torTypeList = [];
    this.goodsReceiptFormService.fetchTrasnfertOrderTypeList().subscribe((results) => {
      this.torTypeList = results;
    });
    forkJoin([
      deliveryFolderStatuses$,
      shipmentFolderStatuses$,
      packageStatusMap$,
      documentTypes$,
      opeartionalStatusMap$,
      batchStatusMap$,
      transferOrderStatusMap$
    ]).subscribe({
      next: ([
        deliveryFolderStatuses,
        shipmentFolderStatuses,
        packageStatusMap,
        documentTypes,
        opeartionalStatusMap,
        batchStatusMap,
        transferOrderStatusMap
      ]) => {
        this.deliveryFolderStatuses = deliveryFolderStatuses;
        this.shipmentFolderStatuses = shipmentFolderStatuses;
        this.packageStatusMap = packageStatusMap;
        this.documentTypes = !!documentTypes ? SelectItemUtils.fromLabelValues(documentTypes) : [];
        this.opeartionalStatusMap = !!opeartionalStatusMap ? SelectItemUtils.fromLabelValues(opeartionalStatusMap) : [];
        this.opeartionalStatusMap = this.opeartionalStatusMap.concat(
          !!batchStatusMap ? SelectItemUtils.fromLabelValues(batchStatusMap) : []
        );
        this.transfertOrderStatusMap = transferOrderStatusMap;
      }
    });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_GOODS_RECEIPT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.awPropertiesConstants = AWPropertiesConstants;
    if (this.componentData.objectId) {
      this.deliveryFolderId = this.serializationService.deserialize(
        this.componentData.objectId
      ) as BidtDeliveryFolderIdDTO;

      this.logisticService.findReceiptFolderWithAllObjectsById(this.deliveryFolderId).subscribe((deliveryFolder) => {
        this.deliveryFolder = deliveryFolder;
        this.findNextMvtReceiptFolder();

        if (this.deliveryFolder.externalDeliveryNumber) {
          const searchCriteria: FindDeliveryFoldersByCriteriaInput = {
            folderStatusExcluded: [],
            deliveryFolder: {
              dfCode: this.deliveryFolder.externalDeliveryNumber
            }
          };
          this.logisticService.findDeliveryFoldersByCriteria(searchCriteria).subscribe((deliveryFolderList) => {
            this.shipmentFolderLinked = deliveryFolderList[0];
            this.shipmentFolderLinkedType = StringUtils.orEmpty(
              this.extractTranslationPipe.transform(
                (this.shipmentFolderLinked.bidtDfType as BidtDfTypeDTO).dftDesignation
              )
            );
          });
        }

        this.goodsReceiptFormService
          .findDocumentByDeliveryFolderId(deliveryFolder.id as number)
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

  public findNextMvtReceiptFolder(): void {
    this.goodsReceiptFormService.findNextMvtReceiptFolder(this.deliveryFolder).subscribe((result) => {
      this.nextMvtList = result.bidtStockMvtDtoList;
      this.isNextMvtContainStockPilling = result.containMvtStockPilling;
      this.isNextMvtContainCrossDocking = result.containMvtCrossDocking;
    });
  }

  private init() {
    this.deliveryFolder = {};
    this.parcelColsDynamicNumber = 0;
    this.postsColsDynamicNumber = 0;
    this.materialsColsDynamicNumber = 0;
    this.deleteDocument = [];
    this.isNextMvtContainStockPilling = false;
    this.isNextMvtContainCrossDocking = false;
    this.assetScanDialogVisible = false;

    this.packageList = [];
    this.itemsList = [];
    this.selectedPost = [];
    this.selectedParcels = [];
    this.postsTableData = [];
    this.parcelTableData = [];
    this.selectedMaterials = [];
    this.materialTableData = [];
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
      { field: 'quantity', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'dfiStatus', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'packageNumber', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'litigate', alignment: 'left', isDynamic: false, width: '10%' }
    ];

    this.materialTableCols = [
      { field: 'dfiCode', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'refeArticle', alignment: 'left', isDynamic: false, width: '20%' },
      { field: 'batchNumber', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'sn', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'manufacturingBatch', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'expirationDate', alignment: 'left', isDynamic: false, width: '10%' },
      { field: 'qty', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
      { field: 'packageNum', alignment: 'left', isDynamic: false, width: '10%' }
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
    this.loadTableColumns();

    this.isLoading = true;

    this.logisticService
      .findReceiptFolderWithAllObjectsById(this.deliveryFolderId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((deliveryFolder) => {
        this.deliveryFolder = deliveryFolder;
        this.findNextMvtReceiptFolder();
        this.goodsReceiptFormService
          .findDocumentByDeliveryFolderId(deliveryFolder.id as number)
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
    this.sortPackages();
    this.sortItems();
    this.sortMaterials();
  }

  private sortPackages(): void {
    if (this.parcelTableData && this.parcelTableData.length > 0) {
      this.parcelTableData.sort((a, b) => (a.packageCode as string).localeCompare(b.packageCode as string));
    }
  }

  private sortItems(): void {
    if (this.postsTableData && this.postsTableData.length > 0) {
      this.postsTableData.sort((a, b) => Number(a.dfiCode) - Number(b.dfiCode));
    }
  }

  private sortMaterials(): void {
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
    const operationsList = ListUtils.orEmpty(this.deliveryFolder.bidtDfItems)
      .filter((item) => !!item.bidtPackage && !!item.bidtPackage.bidtPackageOperations)
      .map((item) => (item.bidtPackage as BidtPackageDTO).bidtPackageOperations)
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
          width: '7%'
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
        const packageAllreadyAdded: number[] = [];
        this.deliveryFolder.bidtDfItems.forEach((items) => {
          if (!!items.bidtPackage && !!items.bidtPackage.id && !packageAllreadyAdded.includes(items.bidtPackage.id)) {
            packageAllreadyAdded.push(items.bidtPackage.id);
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

            const packageData: BidtPackageCustomDTO = {
              id: bidtPackage.id,
              isDisable: this.isItemOnGoingOrPerformed(items),
              packageCode: bidtPackage.externalPackageCode ? bidtPackage.externalPackageCode : bidtPackage.packageCode,
              packageStatus: this.getPackageStatus(bidtPackage.packageStatus as string),
              isGoodStatus: this.isGoodPackageStatus(bidtPackage.packageStatus as string),
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
                : undefined
            };
            packageData.progress = this.calculateProgress([
              packageData.packagingCtrl as boolean,
              packageData.received as boolean,
              packageData.quality as boolean
            ]);
            this.parcelTableData.push(packageData);
            this.packageList.push(bidtPackage);
          }
        });
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
        this.sortPackages();
      }
    });
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

  public isGoodPackageStatus(key: string): boolean {
    return key !== AWPropertiesConstants.PACKAGE_STATUS_AWAITING;
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
            : undefined
        };

        postData.progress = this.calculateProgresssItem(item);

        this.postsTableData.push(postData);
        this.sortItems();

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
            if (equipment[0] && equipment[0].operationalStatus) {
              material.equipmentStatus = this.getOperationnalStatus(equipment[0].operationalStatus);
            }
            this.sortMaterials();
          });
        } else if (material.item && material.item.birePn && material._obj.stockMvtBatchNumber) {
          const equipmentInput: BidoEquipmentDTO = {
            batchNumber: material._obj.stockMvtBatchNumber,
            pnCode: material.item.birePn.pnCode
          };
          this.goodsReceiptFormService.findBidoEquipmentByPnAndBatchNumber(equipmentInput).subscribe((equipment) => {
            material.bidoEquipment = equipment;
            if (equipment && equipment.equipmentCode) {
              this.logisticService
                .findBidoEquipmentCounter({
                  equipmentCode: equipment.equipmentCode,
                  counterCode: BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_CALENDAR_LIMIT,
                  familyCode: BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                  ratingCode: BireRatingConstants.DEFAULT
                })
                .subscribe((bidoEquipmentCounter) => {
                  if (bidoEquipmentCounter) {
                    material.expirationDate = bidoEquipmentCounter.dateLimit;
                  }
                });
            }
            if (
              ((material.item as BidtDfItemDTO).birePn as BirePnDTO).traceability ===
              AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH
            ) {
              this.goodsReceiptFormService
                .getManufacturingBatchByEquipment(equipment)
                .subscribe((manufacturingBatch) => {
                  material.manufacturingBatch = manufacturingBatch;
                });
            }
            if (equipment.operationalStatus) {
              material.equipmentStatus = this.getOperationnalStatus(equipment.operationalStatus);
            }
          });
          this.sortMaterials();
        }
        if (material._operations.length > 0) {
          const operationsList = material._operations.map((operation) => {
            return operation.bidtStockMvtOperationDTO as BidtStockMvtOperationDTO;
          });

          this.goodsReceiptFormService.getOperationCategories(operationsList).subscribe((dfOperationsList) => {
            if (dfOperationsList.dfTypeOperationList && dfOperationsList.dfTypeOperationList.length > 0) {
              dfOperationsList.dfTypeOperationList.forEach((dfOperation) => {
                material._operations.filter(
                  (ope) =>
                    !!ope.bidtStockMvtOperationDTO &&
                    ope.bidtStockMvtOperationDTO.bidtDfTypeOperationId === dfOperation.id
                )[0].bidtDfTypeOperation = dfOperation;
              });
            }
          });
        }
      });
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
      { field: 'progress', alignment: 'center', isDynamic: false, width: '7%' }
    ];
    this.materialTableCols = this.materialTableCols.reduce(
      (unique: TableColumnDynamic[], column: TableColumnDynamic) =>
        unique.every((elt) => elt.field !== column.field) ? [...unique, column] : unique,
      []
    );

    const materialList: MaterialCustomDTO[] = [];
    if (!!rowData.bidtStockMvts && rowData.bidtStockMvts.length > 0) {
      rowData.bidtStockMvts.forEach((material) => {
        const operationsDatas: OperationRowData[] = [];
        const operationDocumentary = this.getMaterialOperation(
          material.bidtStockMvtOperations as BidtStockMvtOperationDTO[],
          AWPropertiesConstants.LOGISTICAL_OPERATION_DOCUMENT_CONTROL
        );
        if (operationDocumentary) {
          operationsDatas.push(operationDocumentary);
        }
        const operationVisual = this.getMaterialOperation(
          material.bidtStockMvtOperations as BidtStockMvtOperationDTO[],
          AWPropertiesConstants.LOGISTICAL_OPERATION_VISUAL_CONTROL
        );
        if (operationVisual) {
          operationsDatas.push(operationVisual);
        }
        const operationPhysical = this.getMaterialOperation(
          material.bidtStockMvtOperations as BidtStockMvtOperationDTO[],
          AWPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
        );
        if (operationPhysical) {
          operationsDatas.push(operationPhysical);
        }

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
          _operations: operationsDatas,
          _operationDocumentary: operationDocumentary,
          _operationVisual: operationVisual,
          _operationPhysical: operationPhysical,
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
          documentary:
            !!operationDocumentary && operationDocumentary.bidtStockMvtOperationDTO
              ? this.isStatusPerformed(operationDocumentary.bidtStockMvtOperationDTO.smoStatus as string)
                ? true
                : false
              : undefined,
          visual:
            !!operationVisual && operationVisual.bidtStockMvtOperationDTO
              ? this.isStatusPerformed(operationVisual.bidtStockMvtOperationDTO.smoStatus as string)
                ? true
                : false
              : undefined,
          physical:
            !!operationPhysical && operationPhysical.bidtStockMvtOperationDTO
              ? this.isStatusPerformed(operationPhysical.bidtStockMvtOperationDTO.smoStatus as string)
                ? true
                : false
              : undefined
        };

        materialCustom.progress = this.calculateProgress([
          materialCustom.documentary,
          materialCustom.visual,
          materialCustom.physical
        ]);

        materialList.push(materialCustom);
      });
    }

    return materialList;
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
  ): OperationRowData | undefined {
    const bidtStockMvtOperation = bidtPackageOperationDTOList.filter(
      (operation) => (operation.smoDesignation as string) === colField
    );

    if (bidtStockMvtOperation.length > 0) {
      const operationRowData: OperationRowData = {
        bidtStockMvtOperationDTO: bidtStockMvtOperation[0]
      };

      return operationRowData;
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

    if (operationCheck && operationCheck.bidtStockMvtOperationDTO) {
      if (this.isStatusPerformed(operationCheck.bidtStockMvtOperationDTO.smoStatus as string)) {
        operationCheck.bidtStockMvtOperationDTO.smoStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PLANNED;
      } else {
        operationCheck.bidtStockMvtOperationDTO.smoStatus = AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED;
      }
      const input: UpdateStockMvtOperationStatusInput = {
        bidtStockMvt: rowData._obj,
        operationId: operationCheck.bidtStockMvtOperationDTO.id as number,
        bidtDfItem: rowData.item as BidtDfItemDTO,
        newStatus: operationCheck.bidtStockMvtOperationDTO.smoStatus as string
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

  public addPackageDialog() {
    this.openAddPackageDialog = true;
  }

  public addItemDialog() {
    this.openAddItemDialog = true;
  }

  public addMaterialDialog() {
    this.openAddMaterialDialog = true;
  }

  public openDocumentDialog(dfTypeOperation: BidtDfTypeOperationDTO) {
    this.selectedOperation = dfTypeOperation;
    this.openDocumentCategorieDialog = true;
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
  public deleteReceiptPackage() {
    this.selectedParcels.forEach((res) => {
      const input: BidtPackageIdDTO = {
        id: res.id
      };

      // C54
      this.logisticService.deleteReceiptPackage(input).subscribe((data) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeletePackages'));
        this.selectedParcels = [];
        this.refresh();
      });
    });
  }

  /************************************
   * Delete Item
   ************************************/
  public deleteReceiptItem() {
    this.selectedPost.forEach((res) => {
      const input: BidtDfItemIdDTO = {
        id: res.id
      };

      // C53
      this.logisticService.deleteReceiptItem(input).subscribe((data) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteItems'));
        this.selectedPost = [];
        this.refresh();
      });
    });
  }

  /************************************
   * Delete Materials
   ************************************/
  public deleteReceiptMaterial() {
    this.selectedMaterials.forEach((res) => {
      const input: BidtStockMvtIdDTO = {
        id: res._obj.id
      };

      // C55
      this.logisticService.deleteReceiptMaterial(input).subscribe((data) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMaterial'));
        this.selectedMaterials = [];
        this.refresh();
      });
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
    if (this.deliveryFolder.dfStatus !== AWPropertiesConstants.RECEIPT_FOLDER_STATUS_CANCELED) {
      const overlayRef = this.overlayService.openWithPositionCenter<string | undefined>({
        content: GoodReceiptStatusComponent,
        data: this.deliveryFolder
      });

      overlayRef.afterClosed$.subscribe({
        next: (event) => {
          if (event.data) {
            if (event.data === AWPropertiesConstants.RECEIPT_FOLDER_STATUS_ON_GOING) {
              const input = ListUtils.orEmpty(this.deliveryFolder.bidtDfItems).map((dfItem) => {
                return {
                  bidtDfItemDTO: dfItem,
                  newStatus: AWPropertiesConstants.RECEIPT_FOLDER_STATUS_ON_GOING
                };
              });
              this.goodsReceiptFormService.updateItemsStatus(input).subscribe(() => {
                this.refresh();
              });
            } else {
              this.deliveryFolder.dfStatus = event.data;
              this.save();
            }
          }
        }
      });
    }
  }

  public save(): void {
    this.goodsReceiptFormService.addOrUpdateReceiptFolder(this.deliveryFolder).subscribe({
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
    if (this.deliveryFolder.dfStatus === AWPropertiesConstants.RECEIPT_FOLDER_STATUS_DRAFT) {
      return true;
    } else {
      return false;
    }
  }

  public isDeliveryFolderPerformedStatus(): boolean {
    if (this.deliveryFolder.dfStatus === AWPropertiesConstants.RECEIPT_FOLDER_STATUS_PERFORMED) {
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

  /**********************************
   * open shipment folder
   **********************************/
  public openShipmentFolder(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_SHIPMENT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ id: this.shipmentFolderLinked.id })
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * go to stockpilling
   **********************************/
  public toStockpilling(): void {
    this.searchService.findByCriteria(this.getSearchCriteriaStockpilling()).subscribe((mvtList) => {
      const params: StockMvtParameters = {
        searchParameters: this.getSearchCriteriaStockpilling(),
        bidtStockList: mvtList,
        bidtReceiptFolder: this.deliveryFolder
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(params)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  private getSearchCriteriaStockpilling(): FindStockMvtsByCriteriaInput {
    const searchCriteria: FindStockMvtsByCriteriaInput = {
      mvtStatus: [],
      mvtStatusExcluded: [
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ],
      untilPlannedDate: new Date(),
      untilRealDate: undefined,
      stockMvt: {
        bidtSiteByBidtSiteIssueId: undefined,
        bidtSiteByBidtSiteReceiptId: this.deliveryFolder.bidtSiteReceiver
          ? this.deliveryFolder.bidtSiteReceiver.siteId
          : undefined,
        bidtWarehouseByBidtWarehouseIssueId: undefined,
        bidtWarehouseByBidtWarehouseReceiptId: this.deliveryFolder.bidtWarehouseReceiver
          ? this.deliveryFolder.bidtWarehouseReceiver.wareHouseId
          : undefined,
        bidtStockMvtTypeId: BidtStockMvtTypeConstant.STORAGE
      },
      finalReceiverCustomerCode: undefined,
      finalReceiverSiteId: undefined,
      finalReceiverWarehouseId: undefined,
      pnCode: undefined,
      withAlternatives: false,
      criticality: undefined,
      dfShipmentSearch: false
    };

    return searchCriteria;
  }

  /**********************************
   * go to crossDocking
   **********************************/
  public toCrossDocking(): void {
    this.searchService.findByCriteria(this.getSearchCriteriaCrossDocking()).subscribe((mvtList) => {
      const params: StockMvtParameters = {
        searchParameters: this.getSearchCriteriaCrossDocking(),
        bidtStockList: mvtList,
        bidtReceiptFolder: this.deliveryFolder
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

  private getSearchCriteriaCrossDocking(): FindStockMvtsByCriteriaInput {
    const searchCriteria: FindStockMvtsByCriteriaInput = {
      mvtStatus: [],
      mvtStatusExcluded: [
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ],
      untilPlannedDate: new Date(),
      stockMvt: {
        bidtSiteByBidtSiteReceiptId: this.deliveryFolder.bidtSiteReceiver
          ? this.deliveryFolder.bidtSiteReceiver.siteId
          : undefined,
        bidtWarehouseByBidtWarehouseReceiptId: this.deliveryFolder.bidtWarehouseReceiver
          ? this.deliveryFolder.bidtWarehouseReceiver.wareHouseId
          : undefined,
        bidtStockMvtTypeId: BidtStockMvtTypeConstant.CROSS_DOCKING
      },
      withAlternatives: false,
      dfShipmentSearch: false
    };

    return searchCriteria;
  }

  /**********************************
   * OPEN TRANSFERT ORDER
   **********************************/
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

  public toNumber(str: string): number {
    return Number(str);
  }

  public scanAsset(): void {
    this.assetScanDialogVisible = true;
  }

  public onScanAssetBatchNumber(batchNumber: string): void {
    const matchingAsset = this.materialTableData.find((elt) => elt._obj.stockMvtBatchNumber === batchNumber);

    if (!matchingAsset) {
      this.messageService.showErrorMessage(this.getTranslateKey('noAssetWithBatchNumber'));
    } else {
      const bidtDfItem = matchingAsset.item as BidtDfItemDTO;
      const bidtPackage = bidtDfItem.bidtPackage as BidtPackageDTO;
      const bidtPackageOperation = ListUtils.orEmpty(bidtPackage.bidtPackageOperations).find(
        (operation) => operation.packopeDesignation === AWPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
      );

      if (
        !!bidtPackageOperation &&
        bidtPackageOperation.packopeStatus !== AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('physicalReceiptOnPackageNotPerformed'));
      } else {
        const operationCheck = this.getMaterialOperation(
          matchingAsset._obj.bidtStockMvtOperations as BidtStockMvtOperationDTO[],
          AWPropertiesConstants.LOGISTICAL_OPERATION_VISUAL_CONTROL
        );

        if (operationCheck && operationCheck.bidtStockMvtOperationDTO) {
          if (this.isStatusPerformed(operationCheck.bidtStockMvtOperationDTO.smoStatus as string)) {
            this.messageService.showWarningMessage(this.getTranslateKey('visualControlAlreadyPerformed'));
          } else {
            const input: UpdateStockMvtOperationStatusInput = {
              bidtStockMvt: matchingAsset._obj,
              operationId: operationCheck.bidtStockMvtOperationDTO.id as number,
              bidtDfItem: matchingAsset.item as BidtDfItemDTO,
              newStatus: AWPropertiesConstants.LOGISTICAL_OPERATION_STATUS_PERFORMED
            };
            this.performStockMovementOperations([input]);
          }
        }
      }
    }
  }
}
