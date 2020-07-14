import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Observable, forkJoin } from 'rxjs';

import { BidtSiteDTO } from '../../../../../../generated_files/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../../../generated_files/api-types/bidt-warehouse-dto.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { BireMeasureReferenceConstants } from '../../../../shared/constants/bire-measure-reference-constants';
import { BireRatingConstants } from '../../../../shared/constants/bire-rating-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetInputDto } from '../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { AssetOutputDto } from '../../../../shared/types/api-output-types/fleet-management/asset-output-dto.interface';
import { BidoDocumentationTableOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-documentation-table-output-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoDocumentationDTOId } from '../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentAttributeDTOId } from '../../../../shared/types/api-types/bido-equipment-attribute-dto-id.interface';
import { BidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/bido-equipment-attribute-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtTypeDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { HBidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/h-bido-equipment-attribute-dto.interface';
import { StockTableDto } from '../../../../shared/types/api-types/stock-table-dto.interface';
import { SuperiorAssetDTO } from '../../../../shared/types/api-types/superior-asset-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics.service';

import { PackagingBatchFormService } from './packaging-batch-form.service';

interface DocumentTableRow {
  docName?: string;
  docPublicationDate?: string;
  docEndOfValidityDate?: string;
  docDescription?: string;
  docExtension?: string;
  docCode?: string;
  docCategory?: string;
  _obj?: BidoDocumentationDTO;
}

interface SubAssemblyInterface {
  batchNumber?: string;
  quantity?: number;
  creationDate?: Date;
  batchOriginQty?: number;
  operationalStatus?: string;
  zone?: string;
  zoneId?: string;
  location?: string;
  locationId?: string;
  statusUser?: string;
  equipmentCode?: string;
}

interface FormData {
  batchNumber?: string;
  quantity?: string;
  manufaturingBatchNumber?: string;
  batchQuantity?: string;
  manufaturingBatchDate?: Date;
  originalPackagingBatchNumber?: string;
  originalPackagingBatchQuantity?: string;
  originalPackagingBatchDate?: Date;
  expirationDate?: Date;
}

interface StockMovementRow {
  stockMvtCode?: string;
  bidtStockMvtType?: BidtStockMvtTypeDTO;
  siteName?: string;
  warehousename?: string;
  bidtStorageBinZoneIssue?: BidtStorageBinDTO;
  bidtStorageBinBinIssue?: BidtStorageBinDTO;
  bidtStorageBinZoneReceipt?: BidtStorageBinDTO;
  bidtStorageBinBinReceipt?: BidtStorageBinDTO;
  smoStatus?: SelectItem;
  documentNum?: string;
  documentDescription?: string;
  statusDate?: Date;
  _bidtSiteReceipt?: BidtSiteDTO;
  _bidtWarehouseReceipt?: BidtWarehouseDTO;
  _procurementRequest?: BidtProcurementRequestDTO;
  _transferOrder?: BidtTransferOrderDTO;
  _deliveryFolder?: BidtDeliveryFolderDTO;
  _stockMvt?: BidtStockMvtDTO;
}

@Component({
  selector: 'aw-packaging-batch-form',
  styleUrls: ['./packaging-batch-form.component.scss'],
  templateUrl: './packaging-batch-form.component.html'
})
export class PackagingBatchFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;
  public readonly bidtStockMvtConstants: typeof BidtStockMvtConstants;
  public awPropertiesConstants: typeof AWPropertiesConstants;
  public mainInfo: FormData;
  public documentTableDataSource: TableDataSource<DocumentTableRow>;
  public stockTableCols: TableColumn[];
  public stockMvtStatuses: LabelValue<string>[];

  // TEST DATA
  public assetCode: string;
  // Material Management Full
  public stockMvtTableDataSource: TableDataSource<BidtStockMvtDTO>;

  public equipment: AssetOutputDto;
  public equipmentModelCodeAndName: string | undefined;
  public equipmentRatingCodeAndName: string | undefined;
  public bidoStockDisplayed: StockTableDto[] | undefined;
  public documents: BidoDocumentationTableOutputDTO[];
  public documentTypes: SelectItem[];
  public propertyLocations: LabelValue<string>[];

  /*DYNAMIC Attributes*/
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForEquipment: BidoEquipmentAttributeDTO[];
  public dynamicAttributes: DynamicAttributes[];
  public dynamicAttributesHistoric: Observable<HBidoEquipmentAttributeDTO[]>;

  public locationValue: string | undefined;
  public ownerCustomerName: string | undefined;
  public fatherEquipment: SuperiorAssetDTO;
  public operatorCustomerName: string | undefined;
  public subAssemblyTableCols: TableColumn[];
  public subAssemblyTableData: SubAssemblyInterface[];

  public context: string;

  // Color
  public COLOR_NONE: string = '';
  public COLOR_RED: string = 'red';
  public COLOR_GREEN: string = 'green';
  public COLOR_YELLOW: string = 'yellow';
  public NOT_ACTIVATED: string = 'Not Activated';

  public showSaveSpinner: boolean;

  public showDialogOwner: boolean;
  public showDialogOperator: boolean;
  public dialogTableDataOwner: DialogTableData<BidoCustomerDTO>;
  public dialogTableDataOperator: DialogTableData<BidoCustomerDTO>;

  public showItemTableDialog: boolean;
  public itemTableData: DialogTableData<BireItemDTO>;

  public propertyPositions: LabelValue<string>[];
  public propertyFunctions: LabelValue<string>[];
  public allFunctions: LabelValue<string>[];
  public statusList: LabelValue<string>[];
  private procurementRequestTypes: LabelValue<string | undefined>[];

  public openAddUpdatedialog: boolean;
  public subAssemblyPopupObject: SubAssemblyInterface;

  // map status
  public movementsStatusMap: SelectItem[];
  public stockMovementRows: StockMovementRow[];
  public areaText?: string;

  private documentsAdded: BidoDocumentationTableOutputDTO[];
  private documentsUpdated: BidoDocumentationTableOutputDTO[];
  public currentDocumentIndex: number;
  public addedDocumentIndex: number;
  public currentDocument: BidoDocumentationDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showAddDocumentDialog: Boolean;
  private eventAdded: BidoNotificationDTO[];
  private transferTypeList: BidtDfTypeDTO[];

  public packagingBatchUnit: string | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly propertiesService: PropertiesService,
    private readonly confirmationService: ConfirmationService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    public translateService: TranslateService,
    private readonly packagingBatchFormService: PackagingBatchFormService,
    private readonly logisticsService: LogisticsService,
    private readonly extractTranslationPipe: ExtractTranslationPipe
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initInput();
    this.bidtStockMvtConstants = BidtStockMvtConstants;
    this.awPropertiesConstants = AWPropertiesConstants;
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_PACKAGING_BATCH_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);
    this.assetCode = !!this.componentData.objectId ? this.componentData.objectId : '';
    this.displayComponentContext(this.assetCode, this.isCreateOpenMode);

    this.init();
  }

  /******************************************************
   * init
   ******************************************************/
  private initInput() {
    this.equipment = {
      bidoEquipmentDTO: {},
      stockOutputDto: {},
      usageCounterCalculationDTO: {},
      superiorAsset: {},
      manufacturingBatch: {},
      superiorPackagingBatch: {}
    };

    this.mainInfo = {};
    this.bidoStockDisplayed = [];
    this.documents = [];
    this.fatherEquipment = {};
    this.stockMvtStatuses = [];
    this.stockMovementRows = [];
    this.documentsAdded = [];
    this.documentsUpdated = [];
    this.currentDocumentIndex = -1;
    this.addedDocumentIndex = -1;
    this.documentDialogOpenMode = ComponentOpenMode.Read;
    this.showAddDocumentDialog = false;
    this.eventAdded = [];
    this.procurementRequestTypes = [];
    this.transferTypeList = [];
  }

  private onSavedAsset(): void {
    this.eventAdded = [];
    this.documentsAdded = [];
    this.documents = [];
    this.documentsUpdated = [];
    this.documentTableDataSource.dataSelection = [];
    super.updateOpenMode(ComponentOpenMode.Read);
  }

  private init() {
    this.stockTableCols = [
      { field: 'code', alignment: 'left', width: '10%' },
      { field: 'stockMvtDate', alignment: 'left', width: '11%' },
      { field: 'stockMvtWay', alignment: 'left', width: '7%' },
      { field: 'mvtStatus', alignment: 'left', width: '12%' },
      { field: 'site', alignment: 'left', width: '25%' },
      { field: 'warehouse', alignment: 'left', width: '25%' },
      { field: 'document', alignment: 'left', width: '10%' }
    ];

    this.subAssemblyTableCols = [
      { field: 'batchNumber', alignment: 'left', width: '10%' },
      { field: 'quantity', alignment: 'left', width: '11%' },
      { field: 'creationDate', alignment: 'left', width: '11%' },
      { field: 'batchOriginQty', alignment: 'left', width: '11%' },
      { field: 'operationalStatus', alignment: 'left', width: '11%' },
      { field: 'zone', alignment: 'left', width: '11%' },
      { field: 'emp', alignment: 'left', width: '11%' }
    ];

    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe((res) => {
      this.procurementRequestTypes = res;
    });

    this.initInput();
    this.fillDropdown();
    this.loadDocumentTypes();
    this.initDocumentTableDataSource();
    this.loadEquipment();
    this.initAttributeValue();
    this.initStockMvtTable();
    this.loadStovkMvtStatuses();
    this.getShipmentTypeValue();
  }

  /******************************************************
   * Fill Dropdowns
   ******************************************************/
  private getShipmentTypeValue() {
    this.packagingBatchFormService.getShipmentDfTypes().subscribe((res) => {
      this.transferTypeList = res;
    });
  }

  private fillDropdown() {
    this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP).subscribe((results) => {
      this.statusList = results;
    });

    this.packagingBatchFormService.getPositionMap().subscribe(
      (results) => {
        this.propertyPositions = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPosition'));
      }
    );

    this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP).subscribe((results) => {
      this.movementsStatusMap = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    const bireId: BireAttributeDTO = {
      attributeId: BidoAttributeConstants.ASSET_LOCATION.toString()
    };
    this.packagingBatchFormService.getAssetSourceSystemIdList(bireId).subscribe(
      (results) => {
        this.propertyLocations = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetLocation'));
      }
    );

    this.packagingBatchFormService.getEquipmentFunctionList().subscribe(
      (results) => {
        this.allFunctions = results;
        let valueLabel: LabelValue<string>[] = [];
        valueLabel = results;
        this.propertyFunctions = valueLabel.filter((el) => {
          if (
            el.value !== AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY &&
            el.value !== AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY &&
            el.value !== AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY
          ) {
            return el;
          }
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFunction'));
      }
    );
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributes);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  /******************************************************
   * Cancel, Edit and Reload
   ******************************************************/
  public cancelBatch(): void {
    this.updateOpenMode(ComponentOpenMode.Read);

    this.reloadBatch();
  }

  public editBatch(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadBatch(): void {
    this.init();
  }

  /******************************************************
   * init Document table columns
   ******************************************************/
  private initDocumentTableDataSource(): void {
    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName')
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate')
        },
        {
          field: 'docEndOfValidityDate',
          translateKey: this.getTranslateKey('docEndOfValidityDate')
        },
        {
          field: 'docCategory',
          translateKey: this.getTranslateKey('docCategory')
        },
        {
          field: 'docDescription',
          translateKey: this.getTranslateKey('docDescription')
        }
      ],
      data: []
    });
  }

  public isTool() {
    return false;
  }

  public isAircraft() {
    return false;
  }

  public isEngine() {
    return false;
  }

  // Documents
  private loadDocumentTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_ASSET_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BidoAttributeDTO[]> {
    return this.packagingBatchFormService.findBidoAttributesByAttributeCategory(attributeCategory);
  }

  /******************************************************
   * Load Equipment Data with Attributes
   ******************************************************/
  public loadEquipment(): void {
    let observables: Observable<BidoAttributeDTO[]>[] = [];

    observables = [
      this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ALL_KEY),
      this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ALL_ASSETS_KEY)
    ];

    if (!this.isEngine() && !this.isAircraft() && !this.isTool()) {
      observables.push(this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_EQUIPMENT_KEY));
    }
    if (this.isEngine() && !this.isAircraft() && !this.isTool()) {
      observables.push(this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ENGINE_KEY));
    }

    if (this.isAircraft() && !this.isEngine() && !this.isTool()) {
      observables.push(this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_AIRCRAFT_KEY));
    }

    forkJoin(observables).subscribe(
      (results: BidoAttributeDTO[][]) => {
        if (results) {
          const filteredAttributesList: BidoAttributeDTO[][] = [];
          results.forEach((element) => {
            const innerElements = element.filter((element2) => {
              return (
                element2.attributeId !== BidoAttributeConstants.ITEM_NUMBER.toString() &&
                element2.attributeId !== BidoAttributeConstants.SAP_EQUIPMENT_CODE.toString() &&
                element2.attributeId !== BidoAttributeConstants.ASSET_LOCATION.toString()
              );
            });

            filteredAttributesList.push(innerElements);
          });

          let flattenResults: BidoAttributeDTO[] = filteredAttributesList.reduce((acc, val) => acc.concat(val), []);
          flattenResults = this.sortAttributes(flattenResults);

          this.dynamicAttributes = this.dynamicAttributesService.from(flattenResults);

          if (!!this.assetCode) {
            const assetId: AssetInputDto = {
              bidoEquipmentDTOId: {
                equipmentCode: this.assetCode
              },
              assetfunction: ' '
            };
            this.packagingBatchFormService.findBidoEquipmentAlternative(assetId).subscribe(
              (result) => {
                if (result) {
                  this.equipment = { ...result };
                  if (this.equipment && this.equipment.bidoEquipmentDTO) {
                    this.loadSubAssemblies();
                    this.equipment.bidoEquipmentDTO.quantity = this.equipment.bidoEquipmentDTO.quantity
                      ? Math.trunc(this.equipment.bidoEquipmentDTO.quantity)
                      : undefined;
                    if (this.componentData) {
                      if (!this.isAircraft() && !this.isEngine()) {
                        this.context = [
                          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.pnCode)
                            ? ''
                            : `P/N ${this.equipment.bidoEquipmentDTO.pnCode}`,
                          StringUtils.isNullOrEmpty(this.equipment.bidoEquipmentDTO.sn)
                            ? ''
                            : `S/N ${this.equipment.bidoEquipmentDTO.sn}`
                        ]
                          .filter((s) => !StringUtils.isEmpty(s))
                          .join(' | ');
                      }

                      // Displaying description along with context
                      if (!!this.equipment.bidoEquipmentDTO.equipmentDesignation) {
                        this.context = [
                          StringUtils.isNullOrEmpty(this.context) ? '' : this.context,
                          this.equipment.bidoEquipmentDTO.equipmentDesignation
                        ]
                          .filter((s) => !StringUtils.isEmpty(s))
                          .join(' | ');
                      }

                      this.displayComponentContext(this.context, this.isCreateOpenMode);
                    }

                    if (!!this.equipment.superiorAsset) {
                      this.fatherEquipment = this.equipment.superiorAsset;
                    }
                    this.ownerCustomerName = this.equipment.ownerCustomerName;

                    this.equipment.bidoEquipmentDTO.equipmentFunction = !!this.equipment.bidoEquipmentDTO
                      .equipmentFunction
                      ? this.equipment.bidoEquipmentDTO.equipmentFunction
                      : undefined;
                    this.operatorCustomerName = this.equipment.operatorCustomerName;
                    this.loadStocks();
                    this.loadStockMvtMatMgmtFull();
                    this.loadDocuments();
                    if (!!this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList) {
                      const locationData = this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList.filter((el) => {
                        if (el.attributeId === BidoAttributeConstants.ASSET_LOCATION.toString()) {
                          return el;
                        }
                      });
                      this.locationValue = !!locationData[0] ? locationData[0].attributeValue : undefined;
                      this.dynamicAttributesService.setValues(
                        this.dynamicAttributes,
                        this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList
                      );
                    }
                  }
                  this.getBatchReference();
                  this.loadExpirationDate();
                }
                if (!!this.equipment.modelCode && !!this.equipment.modelName) {
                  this.equipmentModelCodeAndName = this.equipment.modelCode + ' - ' + this.equipment.modelName;
                }
                if (!!this.equipment.ratingCode && !!this.equipment.ratingName) {
                  this.equipmentRatingCodeAndName = this.equipment.ratingCode + ' - ' + this.equipment.ratingName;
                }
                this.openHistoricAttributes();
              },
              (err) => {
                this.messageService.showErrorMessage(err.error.errorDetail);
              }
            );
          }
        }
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  private loadExpirationDate(): void {
    this.logisticsService
      .findBidoEquipmentCounter({
        equipmentCode: this.assetCode,
        counterCode: BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_CALENDAR_LIMIT,
        familyCode: BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(
          this.equipment.bidoEquipmentDTO.familyVariantCode
        ),
        ratingCode: BireRatingConstants.DEFAULT
      })
      .subscribe((bidoEquipmentCounter) => {
        if (bidoEquipmentCounter) {
          this.mainInfo.expirationDate = bidoEquipmentCounter.dateLimit;
        }
      });
  }

  private loadStockMvtMatMgmtFull(): void {
    if (AWPropertiesConstants.MM_FULL_MODULE_ACTIVATED) {
      this.stockMvtTableDataSource.setData([]);
      const equipMentCode: BidoEquipmentDTOId = {
        equipmentCode: this.assetCode
      };

      this.packagingBatchFormService.findBidtStockMvtMmf(equipMentCode).subscribe((results) => {
        if (!!results) {
          if (!!results) {
            if (!!results.bidtStockMvts) {
              if (!!results.bidtStockInfoList[0].birePnDTO) {
                this.packagingBatchUnit = results.bidtStockInfoList[0].birePnDTO.quantityUnit;
              }
              results.bidtStockInfoList.forEach((movement) => {
                const movementRow: StockMovementRow = {
                  stockMvtCode: movement.stockMvt.stockMvtCode,
                  bidtStockMvtType: movement.stockMvt.bidtStockMvtType,
                  siteName: movement.site ? `${movement.site.siteCode} - ${movement.site.siteName}` : undefined,
                  warehousename: movement.warehouse
                    ? `${movement.warehouse.whCode} - ${movement.warehouse.whName}`
                    : undefined,
                  bidtStorageBinZoneIssue: movement.stockMvt.bidtStorageBinZoneIssue,
                  bidtStorageBinBinIssue: movement.stockMvt.bidtStorageBinBinIssue,
                  bidtStorageBinZoneReceipt: movement.stockMvt.bidtStorageBinZoneReceipt,
                  bidtStorageBinBinReceipt: movement.stockMvt.bidtStorageBinBinReceipt,
                  smoStatus: this.getMvtStockStatus(movement.stockMvt.mvtStatus as string),
                  documentNum: movement.procurementRequest
                    ? movement.procurementRequest.procCode
                    : movement.transferOrder
                    ? movement.transferOrder.torCode
                    : movement.deliveryFolder
                    ? movement.deliveryFolder.dfCode
                    : undefined,
                  documentDescription: movement.procurementRequest
                    ? this.getProcTypeDescription(movement.procurementRequest.procType || '')
                    : movement.transferOrder
                    ? this.getTransferTypeDescription(movement.transferOrder.torType || '')
                    : movement.deliveryFolder
                    ? StringUtils.orEmpty(
                        this.extractTranslationPipe.transform(
                          (movement.deliveryFolder.bidtDfType as BidtDfTypeDTO).dftDesignation
                        )
                      )
                    : undefined,
                  statusDate: movement.stockMvt.statusDate,
                  _bidtSiteReceipt: movement.site,
                  _bidtWarehouseReceipt: movement.warehouse,
                  _procurementRequest: movement.procurementRequest,
                  _transferOrder: movement.transferOrder,
                  _deliveryFolder: movement.deliveryFolder,
                  _stockMvt: movement.stockMvt
                };
                this.stockMovementRows.push(movementRow);
              });
              this.stockMvtTableDataSource.setData([...this.stockMovementRows]);
            }
            if (!!results.stockInformation) {
              this.equipment.stockOutputDto.site = results.stockInformation.siteText;
              this.equipment.stockOutputDto.warehouse = results.stockInformation.warehouseText;
              this.equipment.stockOutputDto.storageBin = results.stockInformation.storageBinText;
              this.areaText = results.stockInformation.areaText;
            }
          }
        }
      });
    }
  }

  private getProcTypeDescription(typeCode: string): string {
    const typeValue = this.procurementRequestTypes.find((type) => type.value === typeCode);

    return typeValue ? typeValue.label : typeCode;
  }

  private getTransferTypeDescription(typeCode: string): string {
    const typeValue = this.transferTypeList.find((type) => (type.id && type.id.toString()) === typeCode);

    return typeValue ? StringUtils.orEmpty(this.extractTranslationPipe.transform(typeValue.dftDesignation)) : typeCode;
  }

  public openDocOrigine(movementRow: StockMovementRow): void {
    if (movementRow._procurementRequest) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
        objectId: this.serializationService.serialize({ id: movementRow._procurementRequest.id }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (movementRow._transferOrder) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
        objectId: this.serializationService.serialize(movementRow._transferOrder.id),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (movementRow._deliveryFolder) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_GOODS_RECEIPT_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize({ id: movementRow._deliveryFolder.id })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public getMvtStockStatus(key: string): SelectItem {
    return this.movementsStatusMap.filter((status) => status.value === key)[0];
  }

  private initStockMvtTable(): void {
    this.stockMvtTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '12.5%' },
        { field: 'type', translateKey: this.getTranslateKey('type'), alignment: ColumnAlignment.CENTER, width: '5%' },
        { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
        { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '17.5%' },
        { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '17.5%' },
        { field: 'status', translateKey: this.getTranslateKey('status'), width: '12.5%' },
        { field: 'document', translateKey: this.getTranslateKey('document'), width: '15%' }
      ],
      data: []
    });
  }

  private getBatchReference(): void {
    if (
      !this.equipment.manufacturingBatch &&
      this.equipment.superiorPackagingBatch &&
      this.equipment.superiorPackagingBatch.equipmentCode
    ) {
      this.packagingBatchFormService
        .getTopManufacturingBatch(this.equipment.superiorPackagingBatch.equipmentCode)
        .subscribe((manufacturingBatch) => {
          this.equipment.manufacturingBatch = manufacturingBatch;
        });
    }
  }

  /******************************************************
   * Attributes
   ******************************************************/
  private sortAttributes(attributes: BidoAttributeDTO[]): BidoAttributeDTO[] {
    return attributes.sort((attr1, attr2) => {
      const attrLabel1 = this.getAttributeLabel(attr1);
      const attrLabel2 = this.getAttributeLabel(attr2);
      if (StringUtils.isNullOrEmpty(attrLabel1)) {
        return 1;
      }
      if (StringUtils.isNullOrEmpty(attrLabel2)) {
        return 1;
      }

      return attrLabel1.localeCompare(attrLabel2);
    });
  }

  private getAttributeLabel(attribute: BidoAttributeDTO): string {
    switch (this.translateService.currentLang) {
      case LangConstants.ENGLISH_CODE:
        return !!attribute.attributeNameEn ? attribute.attributeNameEn : '';

      case LangConstants.FRENCH_CODE:
        return !!attribute.attributeNameFr ? attribute.attributeNameFr : '';

      default:
        return '';
    }
  }

  /******************************************************
   * Load Stocks Table
   ******************************************************/
  public loadStocks(): void {
    if (!AWPropertiesConstants.MM_FULL_MODULE_ACTIVATED) {
      if (!!this.equipment.stockOutputDto && !!this.bidoStockDisplayed) {
        this.bidoStockDisplayed = this.equipment.stockOutputDto.stockTableDtos;
      }
    }
  }

  public openStockMovement(rowData: StockMovementRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_MOVEMENT_FORM,
      openMode: ComponentOpenMode.Read
    };
    const inputObject = {
      id: rowData._stockMvt && rowData._stockMvt.id,
      bidtProcReqItemId: rowData._stockMvt && rowData._stockMvt.bidtProcReqItemId
    };
    data.objectId = this.serializationService.serialize(inputObject);
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
  /******************************************************
   * Load Documents Table
   ******************************************************/
  public loadDocuments() {
    this.documentTableDataSource.setData([]);
    if (!!this.equipment.bidoDocumentationTableOutputDTOs) {
      this.documents = this.equipment.bidoDocumentationTableOutputDTOs;
      this.equipment.bidoDocumentationTableOutputDTOs.forEach((doc) => {
        if (!!doc.bidoDocumentationDTO) {
          const selectedDocumentType = this.documentTypes.find(
            (documentType) =>
              !!doc.bidoDocumentationDTO &&
              !!doc.bidoDocumentationDTO.docCategory &&
              (documentType.value as string) === doc.bidoDocumentationDTO.docCategory
          );
          const newDoc: DocumentTableRow = {
            docExtension: FileUtils.getExtension(doc.bidoDocumentationDTO.docName).toUpperCase(),
            docName: doc.bidoDocumentationDTO.docName,
            docPublicationDate: this.dateService.dateToString(doc.bidoDocumentationDTO.docPublicationDate),
            docDescription: doc.bidoDocumentationDTO.docDescription,
            docEndOfValidityDate: this.dateService.dateToString(doc.bidoDocumentationDTO.docEndOfValidityDate),
            docCategory: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
            docCode: doc.bidoDocumentationDTO.docCode,
            _obj: doc.bidoDocumentationDTO
          };
          this.documentTableDataSource.addData([newDoc]);
        }
      });
    }
  }

  /******************************************************
   * Historic Attributes
   ******************************************************/
  private openHistoricAttributes() {
    if (!!this.equipment && this.equipment.bidoEquipmentDTO && !!this.equipment.bidoEquipmentDTO.equipmentCode) {
      const attributeIds: BidoEquipmentAttributeDTOId[] = this.dynamicAttributesService.toBireEquipmentAttributeId(
        this.equipment.bidoEquipmentDTO.equipmentCode,
        this.dynamicAttributes
      );
      this.dynamicAttributesHistoric = this.packagingBatchFormService.findHBidoEquipmentAttributesByAttributeId(
        attributeIds
      );
    }
  }

  private loadSubAssemblies() {
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      this.subAssemblyTableData = [];
      this.packagingBatchFormService
        .findSubBatches(this.equipment.bidoEquipmentDTO.equipmentCode)
        .subscribe((result) => {
          if (result && result.length) {
            this.mapSubBatchResult(result);
            this.subAssemblyTableData.sort((a, b) => {
              if (!!a.batchNumber && !!b.batchNumber && a.batchNumber > b.batchNumber) {
                return 1;
              }
              if (!!a.batchNumber && !!b.batchNumber && a.batchNumber < b.batchNumber) {
                return -1;
              }

              return 0;
            });
          }
        });
    }
  }

  private mapSubBatchResult(result: BidoEquipmentDTO[]): void {
    result.forEach((element) => {
      this.packagingBatchFormService.getStockInformationByAsset(element).subscribe((stockInfo) => {
        const subAssemblyObj: SubAssemblyInterface = {
          equipmentCode: element.equipmentCode,
          batchNumber: element.batchNumber,
          quantity: element.quantity,
          creationDate: element.manufacturingDate,
          operationalStatus: element.operationalStatus,
          zone: stockInfo.storageBinText,
          location: stockInfo.areaText,
          zoneId: stockInfo.storageBinId,
          locationId: stockInfo.areaId,
          batchOriginQty: Number(this.equipment.bidoEquipmentDTO.quantity) + Number(element.quantity)
        };

        this.subAssemblyTableData.push(subAssemblyObj);
      });
    });
  }

  public openPackagingBatch(equipmentCode: string): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: equipmentCode
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
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

  public toggleRowDetailsVisibilityStock(rowData: StockTableDto) {
    rowData._expand = !rowData._expand;
  }

  public createStockMovement(): void {
    // TODO
  }

  /******************************************************
   * Open Work Order UC
   ******************************************************/
  public onClickDocument(row: StockTableDto) {
    if (row.projectId && row.woId) {
      const objectId: BidmWorkOrderDTOId = {
        projectId: row.projectId,
        woId: row.woId
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      // TODO: open either purchase request or sales request
    }
  }

  /******************************************************
   * Search Owners
   ******************************************************/
  public searchOwners() {
    this.showDialogOwner = true;
    const itemCol: TableColumn[] = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
    const bire: BidoCustomerDTO = {
      isOwner: true,
      isOperator: false
    };
    this.dialogTableDataOwner = {
      componentId: 'PartnerPopupDialog',
      tableCols: itemCol,
      tableRows: this.packagingBatchFormService.findBidoCustomersBySearchCriteria(bire),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedOwner(selectedObject: BidoCustomerDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        this.equipment.bidoEquipmentDTO.ownerCustomerCode = selectedObject.customerCode;
        this.ownerCustomerName = selectedObject.customerName;
      }
      this.showDialogOwner = false;
    }
  }

  /******************************************************
   * Search operators
   ******************************************************/
  public searchOperators() {
    this.showDialogOperator = true;
    const itemCol: TableColumn[] = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
    const bire: BidoCustomerDTO = {
      isOwner: false,
      isOperator: true
    };
    this.dialogTableDataOperator = {
      componentId: 'PartnerPopupDialog',
      tableCols: itemCol,
      tableRows: this.packagingBatchFormService.findBidoCustomersBySearchCriteria(bire),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedOperator(selectedObject: BidoCustomerDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        this.equipment.bidoEquipmentDTO.operatorCustomerCode = selectedObject.customerCode;
        this.operatorCustomerName = selectedObject.customerName;
      }
      this.showDialogOwner = false;
    }
  }

  public openItemTableDialog(): void {
    if (!!this.equipment.bidoEquipmentDTO.familyVariantCode) {
      this.initItemTableData();
      this.showItemTableDialog = true;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('familyVariantMissing'));
    }
  }

  /******************************************************
   * Item Table Data
   ******************************************************/
  private initItemTableData(): void {
    const itemTableCols: TableColumn[] = [
      {
        field: 'familyCode',
        alignment: 'left',
        width: '10%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'variantCode',
        alignment: 'left',
        width: '10%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'designation',
        alignment: 'left',
        width: '30%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'chapter',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'section',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'subject',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'sheet',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'marks',
        alignment: 'left',
        width: '5%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'itemNumber',
        alignment: 'left',
        width: '10%',
        filterMode: TableColumnFilterMode.Input
      },
      {
        field: 'functionCode',
        alignment: 'left',
        width: '15%',
        filterMode: TableColumnFilterMode.Input
      }
    ];

    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO.familyVariantCode) {
      const familyTab: string[] = this.equipment.bidoEquipmentDTO.familyVariantCode.split('-');
      const params: FindBireItemsBySearchCriteriaInput = {
        bireItemDTOCriteria: {
          familyCode: familyTab[0],
          structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
          variantCode: familyTab[1]
        },
        pnCode: this.equipment.bidoEquipmentDTO.pnCode
      };
      this.itemTableData = {
        componentId: 'DialogItem',
        tableCols: itemTableCols,
        tableRows: this.packagingBatchFormService.findBireItemsBySearchCriteria(params),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
    } else {
      super.throwUnboundLocalError('initItemTableData', 'this.familyCode && this.structureType && this.variantCode');
    }
  }

  public setSelectedItems(selectedObject: BireItemDTO) {
    if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
      if (selectedObject) {
        const familyCode = selectedObject.familyCode;
        const variantCode = selectedObject.variantCode;
        this.equipment.bidoEquipmentDTO.familyVariantCode = `${familyCode}-${variantCode}`;
        this.equipment.bidoEquipmentDTO.section = selectedObject.section;
        this.equipment.bidoEquipmentDTO.marks = selectedObject.marks;
        this.equipment.bidoEquipmentDTO.chapter = selectedObject.chapter;
        this.equipment.bidoEquipmentDTO.sheet = selectedObject.sheet;
        this.equipment.bidoEquipmentDTO.subject = selectedObject.subject;
        this.equipment.bidoEquipmentDTO.statusDate = selectedObject.statusDate;
        this.equipment.bidoEquipmentDTO.statusUser = selectedObject.statusUser;
        this.equipment.bidoEquipmentDTO.statusState = selectedObject.statusState;
        this.equipment.itemNumber = selectedObject.itemNumber;
        this.equipment.bidoEquipmentDTO.equipmentDesignation = selectedObject.name;
        this.equipment.bidoEquipmentDTO.functionCode = selectedObject.functionCode;
      }
    }
  }

  public searchGeoLocation() {
    // TODO
  }

  public showAddUpdatePopup(): void {
    this.subAssemblyPopupObject = {};
    if (this.subAssemblyTableData && this.subAssemblyTableData.length) {
      const assemblyObject = this.subAssemblyTableData[this.subAssemblyTableData.length - 1];
      this.subAssemblyPopupObject.batchNumber = assemblyObject.batchNumber || '';
    } else {
      this.subAssemblyPopupObject.batchNumber = this.equipment.bidoEquipmentDTO.batchNumber;
    }
    this.subAssemblyPopupObject.statusUser = this.equipment.ownerCustomerName;
    this.subAssemblyPopupObject.quantity = 0;
    this.openAddUpdatedialog = true;
  }

  public updateSubAssembly(subAssemblyObject: SubAssemblyInterface): void {
    const bidoEquipmentObject: BidoEquipmentDTO = { ...this.equipment.bidoEquipmentDTO };
    bidoEquipmentObject.equEquipmentCode = bidoEquipmentObject.equipmentCode;
    bidoEquipmentObject.quantity = subAssemblyObject.quantity;
    bidoEquipmentObject.batchNumber = subAssemblyObject.batchNumber;
    bidoEquipmentObject.operationalStatus = subAssemblyObject.batchNumber;
    bidoEquipmentObject.operationalStatus = subAssemblyObject.operationalStatus;
    bidoEquipmentObject.manufacturingDate = subAssemblyObject.creationDate;
    bidoEquipmentObject.statusUser = subAssemblyObject.statusUser;
    bidoEquipmentObject.equipmentCode = undefined;

    this.packagingBatchFormService.addOrUpdateBatch(bidoEquipmentObject).subscribe(() => {
      this.loadSubAssemblies();
      this.reloadBatch();
      this.openAddUpdatedialog = false;
    });
  }

  public saveBatch(): void {
    if (this.isCreateOpenMode) {
      this.logisticsService.addOrUpdateBatch(this.equipment.bidoEquipmentDTO).subscribe({
        next: (equipmentValue) => {
          this.updateOpenMode(ComponentOpenMode.Read);
        }
      });
    } else {
      this.updateAsset();
    }
  }

  private loadStovkMvtStatuses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP).subscribe({
      next: (stockMvtStatuses) => {
        this.stockMvtStatuses = ListUtils.orEmpty(stockMvtStatuses);
      }
    });
  }

  public onCancel(): void {
    super.updateOpenMode(ComponentOpenMode.Read);
    this.reloadBatch();
  }

  private updateAsset(): void {
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      this.equipment.bidoEquipmentAttributeDTOList = this.dynamicAttributesService.toBidoEquipmentAttribute(
        this.equipment.bidoEquipmentDTO.equipmentCode,
        this.dynamicAttributes
      );
      const object: BidoEquipmentAttributeDTO = {
        attributeId: BidoAttributeConstants.ASSET_LOCATION.toString(),
        equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
        attributeValue: this.locationValue
      };
      this.equipment.bidoEquipmentAttributeDTOList.push(object);
    }
    const assetOutputDto: AssetOutputDto = {
      bidoEquipmentDTO: this.equipment.bidoEquipmentDTO,
      createBidoDocumentationTableOutputDTOs: this.documentsAdded,
      updateBidoDocumentationTableOutputDTOs: this.documentsUpdated,
      removeBidoDocumentationId: this.equipment.removeBidoDocumentationId,
      stockOutputDto: {},
      usageCounterCalculationDTO: {},
      superiorAsset: {},
      bidoEquipmentAttributeDTOList: this.equipment.bidoEquipmentAttributeDTOList,
      itemNumber: this.equipment.itemNumber,
      modelCode: this.equipment.modelCode,
      modelName: this.equipment.modelName,
      ratingCode: this.equipment.ratingCode,
      ratingName: this.equipment.ratingName
    };
    const bidoNotificationDTO: BidoNotificationDTO[] = this.eventAdded;
    this.showSaveSpinner = true;
    this.logisticsService.updateAsset(assetOutputDto).subscribe(
      () => {
        this.onSavedAsset();
        this.createBidoNotification(bidoNotificationDTO);
        this.reloadBatch();
        this.messageService.showSuccessMessage('global.successOnSave');
        this.showSaveSpinner = false;
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDesc);
        this.showSaveSpinner = false;
      }
    );
  }

  private createBidoNotification(bidoNotificationDTO: BidoNotificationDTO[]): void {
    this.logisticsService.createBidoNotification(bidoNotificationDTO).subscribe(() => {
      this.onSavedAsset();
    });
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const temp: BidoDocumentationDTOId[] = [];
        this.documentTableDataSource.dataSelection.forEach((data) => {
          if (!!data && !!data._obj && !!data._obj.docCode) {
            const codeId: BidoDocumentationDTOId = {
              docCode: data._obj.docCode
            };
            temp.push(codeId);
          }
        });
        this.equipment.removeBidoDocumentationId = temp;

        this.documentTableDataSource.setData(
          this.documentTableDataSource.dataSrc.filter((data) => {
            return !this.documentTableDataSource.dataSelection.some((row) => {
              return data.docName === row.docName;
            });
          })
        );

        this.documents = this.documents.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });

        this.documentsAdded = this.documentsAdded.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });
        this.documentsUpdated = this.documentsUpdated.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });

        this.documentTableDataSource.dataSelection = [];
      }
    });
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    let flag = false;
    if (!!event.files) {
      const file: File = event.files[0];
      this.documents.forEach((document) => {
        if (!!document.bidoDocumentationDTO) {
          if (document.bidoDocumentationDTO.docName === file.name) {
            flag = true;
          }
        }
      });
      if (flag) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          const fileNameParts = file.name && file.name.includes('.') ? file.name.split('.') : [];
          const docType = fileNameParts.length > 0 ? fileNameParts[fileNameParts.length - 1].toUpperCase() : undefined;

          if (!!fileContent) {
            const document: BidoDocumentationDTO = {
              docType,
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date(),
              equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode
            };
            const bidoDoc: BidoDocumentationTableOutputDTO = {
              bidoDocumentationDTO: document
            };
            this.documents = [...this.documents, bidoDoc];
            this.documentsAdded = [...this.documentsAdded, bidoDoc];

            this.documentTableDataSource.addData([this.addData(document)]);
          }
        });
      }

      fileUploader.clear();
    }
  }

  public openDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = -1;
      this.addedDocumentIndex = -1;
      this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
      this.documentDialogOpenMode = ComponentOpenMode.Read;
      this.showAddDocumentDialog = true;
    }
  }

  public editDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = this.documents.findIndex((list) => {
        return (
          !!list.bidoDocumentationDTO &&
          !!this.documentTableDataSource.dataSelection[0].docName &&
          list.bidoDocumentationDTO.docName === this.documentTableDataSource.dataSelection[0].docName
        );
      });
      this.addedDocumentIndex = this.documentsAdded.findIndex((list) => {
        return (
          !!list.bidoDocumentationDTO &&
          !!this.documentTableDataSource.dataSelection[0].docName &&
          list.bidoDocumentationDTO.docName === this.documentTableDataSource.dataSelection[0].docName
        );
      });
      this.currentDocument = { ...this.documentTableDataSource.dataSelection[0]._obj };
      this.documentDialogOpenMode = ComponentOpenMode.Write;
      this.showAddDocumentDialog = true;
    }
  }

  public addData(newDocument: BidoDocumentationDTO): DocumentTableRow {
    const selectedDocumentType = this.documentTypes.find(
      (documentType) => !!newDocument.docCategory && (documentType.value as string) === newDocument.docCategory
    );
    const row: DocumentTableRow = {
      docName: newDocument.docName,
      docDescription: newDocument.docDescription,
      docCategory: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
      docEndOfValidityDate: this.dateService.dateToString(newDocument.docEndOfValidityDate),
      _obj: newDocument
    };

    return row;
  }

  public addNewDocument(newDocument: BidoDocumentationDTO) {
    const bidoDoc: BidoDocumentationTableOutputDTO = {
      bidoDocumentationDTO: newDocument
    };
    let fileExists = true;
    if (!!newDocument) {
      this.documentTableDataSource.dataSrc.forEach((doc, i) => {
        if (doc.docName === newDocument.docName) {
          if (this.currentDocumentIndex === i) {
            fileExists = true;
          } else {
            fileExists = false;
            this.messageService.showWarningMessage('global.warningOnFileExists');
          }
        }
      });
      if (fileExists) {
        if (this.currentDocumentIndex !== -1) {
          this.documents[this.currentDocumentIndex] = bidoDoc;
          this.documentTableDataSource.replaceData(
            this.documentTableDataSource.dataSrc[this.currentDocumentIndex],
            this.addData(newDocument)
          );
          const updatedDocumentIndex = this.documentsUpdated.findIndex((obj) => {
            return (
              !!obj.bidoDocumentationDTO &&
              !!obj.bidoDocumentationDTO.docName &&
              !!bidoDoc.bidoDocumentationDTO &&
              !!bidoDoc.bidoDocumentationDTO.docName &&
              obj.bidoDocumentationDTO.docName === bidoDoc.bidoDocumentationDTO.docName
            );
          });
          if (newDocument.docCode) {
            if (updatedDocumentIndex !== -1) {
              this.documentsUpdated[updatedDocumentIndex] = bidoDoc;
            } else {
              this.documentsUpdated = [...this.documentsUpdated, bidoDoc];
            }
          } else {
            if (this.addedDocumentIndex !== -1) {
              this.documentsAdded[this.addedDocumentIndex] = bidoDoc;
            } else {
              this.documentsAdded = [...this.documentsAdded, bidoDoc];
            }
          }
        } else {
          const isAdded = this.documentsAdded.some((documentAdded) => this.areSameDocument(documentAdded, bidoDoc));
          if (isAdded) {
            this.messageService.showWarningMessage('global.warningOnDocumentExists');
          } else {
            this.documents = [...this.documents, bidoDoc];
            this.documentsAdded = [...this.documentsAdded, bidoDoc];
            this.documentTableDataSource.addData([this.addData(newDocument)]);
          }
        }
      }
      this.documentTableDataSource.dataSelection = [];
    }
  }

  private areSameDocument(
    obj1: BidoDocumentationTableOutputDTO | undefined,
    obj2: BidoDocumentationTableOutputDTO | undefined
  ): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return (
        !!obj1.bidoDocumentationDTO &&
        !!obj1.bidoDocumentationDTO.docName &&
        !!obj2.bidoDocumentationDTO &&
        !!obj2.bidoDocumentationDTO.docName &&
        obj1.bidoDocumentationDTO.docName === obj2.bidoDocumentationDTO.docName
      );
    }
  }

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      if (!!documentRow._obj) {
        FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
      }
    });
  }
}
