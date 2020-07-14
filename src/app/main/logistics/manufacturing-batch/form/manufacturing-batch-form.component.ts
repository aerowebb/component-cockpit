import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { PropertiesService } from '../../../..//shared/services/properties.service';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetInputDto } from '../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { AssetOutputDto } from '../../../../shared/types/api-output-types/fleet-management/asset-output-dto.interface';
import { BidoDocumentationTableOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-documentation-table-output-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types//bido-customer-dto.interface';
import { BidoDocumentationDTOId } from '../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { StockTableDto } from '../../../../shared/types/api-types/stock-table-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics.service';
import { ManufacturingBatchSearchService } from '../search/manufacturing-batch-search.service';

import { ManufacturingBatchFormService } from './manufacturing-batch-form.service';

interface MainInformation {
  partNumber?: string;
  batchNumber?: string;
  quantity?: string;
  familyVariant?: string;
  designation?: string;
  expirationDate?: string;
  operationalStatus?: string;
}
interface GeneratedBatchRow {
  batchNumber: string;
  quantity?: number;
  creationDate?: Date;
  batchOriginQty?: number;
  operationalStatus?: string;
  location?: string;
  locationDescription?: string;
  emplacement?: string;
  emplacementDesc?: string;
  warehouseDes?: string;
}

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
@Component({
  selector: 'aw-manufacturing-batch-form',
  styleUrls: ['./manufacturing-batch-form.component.scss'],
  templateUrl: './manufacturing-batch-form.component.html'
})
export class ManufacturingBatchFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;
  public equipment: AssetOutputDto;
  public equipmentModelCodeAndName: string | undefined;
  public equipmentRatingCodeAndName: string | undefined;
  public mainInfo: MainInformation;
  public awPropertiesConstants: typeof AWPropertiesConstants;

  public configurationTracked: boolean;
  public locationValue: string | undefined;
  public propertyLocations: LabelValue<string>[];
  public propertyPositions: LabelValue<string>[];
  public propertyZones: LabelValue<string>[];
  public propertyCountries: LabelValue<string>[];
  public propertyFunctions: LabelValue<string>[];
  public statusList: LabelValue<string>[];
  public appConstants: typeof AppConstants;

  public bidoStockDisplayed: StockTableDto[] | undefined;
  public stockTableCols: TableColumn[];
  public stockTableColsExpanded: TableColumn[];

  public ownerCustomerName: string | undefined;
  public maxDate: Date;
  public context: string;
  public showSaveSpinner: boolean;

  // Color
  public COLOR_NONE: string = '';
  public COLOR_RED: string = 'red';
  public COLOR_GREEN: string = 'green';
  public COLOR_YELLOW: string = 'yellow';
  public NOT_ACTIVATED: string = 'Not Activated';

  public documents: BidoDocumentationTableOutputDTO[];
  public documentTypes: SelectItem[];

  public gereratedBatcheTableDataSource: TableDataSource<GeneratedBatchRow>;
  public documentTableDataSource: TableDataSource<DocumentTableRow>;
  public toc;
  public selectedAnchor: string | undefined;
  public operatorCustomerName: string | undefined;
  public assetCode: string;

  public dialogTableDataOwner: DialogTableData<BidoCustomerDTO>;
  public dialogTableDataOperator: DialogTableData<BidoCustomerDTO>;

  private documentsAdded: BidoDocumentationTableOutputDTO[];
  private documentsUpdated: BidoDocumentationTableOutputDTO[];
  public currentDocumentIndex: number;
  public addedDocumentIndex: number;
  public currentDocument: BidoDocumentationDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showAddDocumentDialog: Boolean;
  private eventAdded: BidoNotificationDTO[];

  @ViewChild('mainAnchor')
  public mainAnchor: ElementRef;

  @ViewChild('gereratedBatches')
  public gereratedBatches: ElementRef;

  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;

  @ViewChild('stockAnchor')
  public stockAnchor: ElementRef;

  @ViewChild('documentAnchor')
  public documentAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    pageTocService: PageTocService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly sessionService: SessionService,
    private readonly dateService: DateService,
    public readonly translateService: TranslateService,
    private readonly manufacturingBatchFormService: ManufacturingBatchFormService,
    private readonly manufacturingBatchSearchService: ManufacturingBatchSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly confirmationService: ConfirmationService,
    private readonly logisticsService: LogisticsService
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

    super.registerPageTocEntryObservable();
    this.appConstants = AppConstants;
    this.initInput();
    this.initializeTableHeader();
    this.loadDocumentTypes();
    this.fillDropDown();
    this.awPropertiesConstants = AWPropertiesConstants;

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      /* Change the DropDownList content regarding the langage */
      this.fillDropDown();
    });
  }

  private initInput(): void {
    this.mainInfo = {};
    this.toc = [];
    this.bidoStockDisplayed = [];
    this.propertyLocations = [];
    this.propertyPositions = [];
    this.propertyZones = [];
    this.propertyCountries = [];
    this.propertyFunctions = [];
    this.documents = [];
    this.documentTypes = [];
    this.equipment = {
      bidoEquipmentDTO: {},
      measureTableDtos: [],
      bidoDocumentationTableOutputDTOs: [],
      stockOutputDto: {},
      superiorAsset: {},
      usageCounterCalculationDTO: {},
      saveUsageEquipment: {
        updateBidoEquipmentUsageDTOList: []
      }
    };
    this.documentsAdded = [];
    this.documentsUpdated = [];
    this.currentDocumentIndex = -1;
    this.addedDocumentIndex = -1;
    this.documentDialogOpenMode = ComponentOpenMode.Read;
    this.showAddDocumentDialog = false;
    this.eventAdded = [];
  }

  private onSavedAsset(): void {
    this.eventAdded = [];
    this.documentsAdded = [];
    this.documents = [];
    this.documentsUpdated = [];
    this.documentTableDataSource.dataSelection = [];
    super.updateOpenMode(ComponentOpenMode.Read);
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MANUFACTURING_BATCH_FORM;
  }

  // Documents
  private loadDocumentTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_ASSET_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  public ngOnInit(): void {
    super.ngOnInit();
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
    }
    if (this.componentData && this.componentData.objectId) {
      this.manufacturingBatchSearchService.getMfgBatchList({}).subscribe((batchList) => {
        if (batchList && batchList.length) {
          batchList.forEach((batch) => {
            if (!!this.componentData.objectId) {
              if (
                batch.batchNumber ===
                  (this.serializationService.deserialize(this.componentData.objectId) as {
                    customerCode: string;
                  }).customerCode ||
                ''
              ) {
                if (!!batch.equipmentCode) {
                  this.assetCode = batch.equipmentCode;
                }
              }
            }
          });
        }
        this.init();
      });
    }
    this.initializeSideBar();
  }

  private init() {
    this.loadManufacturingBatch();
  }

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

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  public searchOperators() {
    const itemCol: TableColumn[] = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
    const bidoCustomerDTO: BidoCustomerDTO = {
      isOwner: false,
      isOperator: true
    };
    this.dialogTableDataOperator = {
      componentId: 'PartnerPopupDialog',
      tableCols: itemCol,
      tableRows: this.manufacturingBatchFormService.findBidoCustomersBySearchCriteria(bidoCustomerDTO),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public searchOwners() {
    const itemCol: TableColumn[] = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' }
    ];
    const bidoCustomerDTO: BidoCustomerDTO = {
      isOwner: true,
      isOperator: false
    };
    this.dialogTableDataOwner = {
      componentId: 'PartnerPopupDialog',
      tableCols: itemCol,
      tableRows: this.manufacturingBatchFormService.findBidoCustomersBySearchCriteria(bidoCustomerDTO),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private loadManufacturingBatch(): void {
    if (!!this.assetCode) {
      const assetId: AssetInputDto = {
        bidoEquipmentDTOId: {
          equipmentCode: this.assetCode
        },
        assetfunction: ' '
      };
      this.manufacturingBatchFormService.findBidoEquipmentAlternative(assetId).subscribe(
        (result) => {
          if (result) {
            this.equipment = { ...result };
            if (this.equipment && this.equipment.bidoEquipmentDTO) {
              if (this.componentData) {
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
              this.equipment.bidoEquipmentDTO.quantity = this.equipment.bidoEquipmentDTO.quantity
                ? Math.trunc(this.equipment.bidoEquipmentDTO.quantity)
                : undefined;
              this.ownerCustomerName = this.equipment.ownerCustomerName;
              this.equipment.bidoEquipmentDTO.equipmentFunction = !!this.equipment.bidoEquipmentDTO.equipmentFunction
                ? this.equipment.bidoEquipmentDTO.equipmentFunction
                : undefined;
              this.operatorCustomerName = this.equipment.operatorCustomerName;
              if (!!this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList) {
                const locationData = this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList.filter((el) => {
                  if (el.attributeId === BidoAttributeConstants.ASSET_LOCATION.toString()) {
                    return el;
                  }
                });
                this.locationValue = !!locationData[0] ? locationData[0].attributeValue : undefined;
              }
              this.loadGenreatedBatchList();
            }
            this.loadStocks();
            this.loadDocuments();
          }
          if (!!this.equipment.modelCode && !!this.equipment.modelName) {
            this.equipmentModelCodeAndName = this.equipment.modelCode + ' - ' + this.equipment.modelName;
          }
          if (!!this.equipment.ratingCode && !!this.equipment.ratingName) {
            this.equipmentRatingCodeAndName = this.equipment.ratingCode + ' - ' + this.equipment.ratingName;
          }
        },
        (err) => {
          this.messageService.showErrorMessage(err.error.errorDetail);
        }
      );
    }
  }

  private initializeSideBar() {
    this.toc = [
      {
        id: 'mainAnchor',
        anchor: this.mainAnchor,
        label: this.translateService.instant(this.getTranslateKey('informationPrincipales'))
      },
      {
        id: 'gereratedBatches',
        anchor: this.gereratedBatches,
        label: this.translateService.instant(this.getTranslateKey('generatedBatches'))
      },
      {
        id: 'generalAnchor',
        anchor: this.generalAnchor,
        label: this.translateService.instant(this.getTranslateKey('tabGeneral'))
      },
      {
        id: 'stockAnchor',
        anchor: this.stockAnchor,
        label: this.translateService.instant(this.getTranslateKey('stock'))
      },
      {
        id: 'documentAnchor',
        anchor: this.documentAnchor,
        label: this.translateService.instant(this.getTranslateKey('document'))
      }
    ];
    setTimeout(() => {
      this.setSelectedAnchor('mainAnchor');
    });
  }

  private loadGenreatedBatchList() {
    if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
      this.manufacturingBatchFormService
        .getGeneratedBatchList(this.equipment.bidoEquipmentDTO.equipmentCode)
        .subscribe((result) => {
          if (result && result.length) {
            this.mapGeneratedBatchList(result);
          }
        });
    }
  }

  private mapGeneratedBatchList(result: BidoEquipmentDTO[]): void {
    result.forEach((element) => {
      const subAssemblyObj: GeneratedBatchRow = {
        batchNumber: element.batchNumber || '',
        quantity: element.quantity || undefined,
        creationDate: element.manufacturingDate,
        operationalStatus: element.operationalStatus,
        location:
          element.stockInformationDTO && element.stockInformationDTO.siteText
            ? element.stockInformationDTO.siteText
            : '',
        warehouseDes: element.stockInformationDTO && element.stockInformationDTO.warehouseText,
        emplacementDesc: element.stockInformationDTO && element.stockInformationDTO.storageBinText,
        emplacement: element.stockInformationDTO && element.stockInformationDTO.storageBinId
      };
      if (this.mainInfo && this.mainInfo.quantity) {
        subAssemblyObj.batchOriginQty = parseInt(this.mainInfo.quantity, 10);
        const newQuantityValue = parseInt(this.mainInfo.quantity, 10) - (subAssemblyObj.quantity || 0);
        this.mainInfo.quantity = newQuantityValue.toString();
      }
      this.gereratedBatcheTableDataSource.addData([subAssemblyObj]);
    });
  }

  private initializeTableHeader(): void {
    this.gereratedBatcheTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'batchNumber',
          translateKey: this.getTranslateKey('batchNumber')
        },
        {
          field: 'quantity',
          translateKey: this.getTranslateKey('partNumber')
        },
        {
          field: 'creationDate',
          translateKey: this.getTranslateKey('familyVariant')
        },
        {
          field: 'operationalStatus',
          translateKey: this.getTranslateKey('operationalStatus')
        },
        {
          field: 'location',
          translateKey: this.getTranslateKey('eisDate')
        },
        {
          field: 'emplacement',
          translateKey: this.getTranslateKey('assetCode')
        }
      ],
      data: []
    });

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

    this.stockTableCols = [
      { field: 'code', alignment: 'left', width: '10%' },
      { field: 'stockMvtDate', alignment: 'left', width: '11%' },
      { field: 'stockMvtWay', alignment: 'left', width: '7%' },
      { field: 'mvtStatus', alignment: 'left', width: '12%' },
      { field: 'site', alignment: 'left', width: '25%' },
      { field: 'warehouse', alignment: 'left', width: '25%' },
      { field: 'document', alignment: 'left', width: '10%' }
    ];
  }

  private loadStocks(): void {
    if (!!this.equipment.stockOutputDto && !!this.bidoStockDisplayed) {
      this.bidoStockDisplayed = this.equipment.stockOutputDto.stockTableDtos;
    }
  }

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

  private fillDropDown() {
    this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP).subscribe((results) => {
      this.statusList = results;
    });
    this.manufacturingBatchFormService.getCountryZoneMap().subscribe(
      (results) => {
        results.forEach((element) => {
          let zoneElement: LabelValue<string>;
          let countryElement: LabelValue<string>;
          const keyCountry: string = element.value;
          const mapLabel: string[] = element.label.split(';');
          const zone: string = mapLabel[1];
          const country: string = mapLabel[0];
          // this.countryZoneMap.set(country, zone);

          zoneElement = {
            label: zone,
            value: zone
          };
          countryElement = {
            label: country,
            value: keyCountry
          };
          if (!this.propertyZones.find((value) => value.label === zoneElement.label)) {
            this.propertyZones.push(zoneElement);
          }

          this.propertyCountries.push(countryElement);
          // this.propertyAllCountries.push(countryElement);
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCountryZone'));
      }
    );

    const bireId: BireAttributeDTO = {
      attributeId: BidoAttributeConstants.ASSET_LOCATION.toString()
    };
    this.manufacturingBatchFormService.getAssetSourceSystemIdList(bireId).subscribe(
      (results) => {
        this.propertyLocations = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetLocation'));
      }
    );

    this.manufacturingBatchFormService.getEquipmentFunctionList().subscribe(
      (results) => {
        this.propertyFunctions = results.filter((el) => {
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

    this.manufacturingBatchFormService.getPositionMap().subscribe(
      (results) => {
        this.propertyPositions = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPosition'));
      }
    );
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

  public onCancel(): void {
    super.updateOpenMode(ComponentOpenMode.Read);
    this.reloadBatch();
  }

  private updateAsset(): void {
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
        this.showSaveSpinner = false;
        this.messageService.showSuccessMessage('global.successOnSave');
      },
      (err) => {
        this.messageService.showErrorMessage(err.errorDesc);
        this.showSaveSpinner = false;
      }
    );
  }

  private createBidoNotification(bidoNotificationDTO: BidoNotificationDTO[]): void {
    this.logisticsService.createBidoNotification(bidoNotificationDTO).subscribe(() => {
      this.onSavedAsset();
    });
  }

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      if (!!documentRow._obj) {
        FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
      }
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
          this.documentTableDataSource[this.currentDocumentIndex] = this.addData(newDocument);
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
}
