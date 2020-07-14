import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { Observable, forkJoin, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UpdateHistoricApi } from '../../../../shared/api/update-historic.api';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BireUnitMeasureConstants } from '../../../../shared/constants/bire-unit-measure-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../../shared/services/update-historic.service';
import { StockStatusInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/stock-status-input.interface';
import { WareHouseTableDTO } from '../../../../shared/types/api-input-types/logistics-material/warehouse-table-dto.interface';
import { MaterialDataDTO } from '../../../../shared/types/api-output-types/logistics-material/material-data-dto.interface';
import { BidoCustomerDTOId } from '../../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidtPnAlternativeDTO } from '../../../../shared/types/api-types/bidt-pn-alternative-dto.interface';
import { BidtPriceDTO } from '../../../../shared/types/api-types/bidt-price-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtProductCustomerDTO } from '../../../../shared/types/api-types/bidt-product-customer-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtStorageConditionDTO } from '../../../../shared/types/api-types/bidt-storage-condition-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireContainerPnDTO } from '../../../../shared/types/api-types/bire-container-pn-dto.interface';
import { BirePartUnitConversionDTO } from '../../../../shared/types/api-types/bire-part-unit-conversion-dto.interface';
import { BirePnAttributeDTO } from '../../../../shared/types/api-types/bire-pn-attribute-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { HistoricObjectPnDTO } from '../../../../shared/types/api-types/historic-object-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { ObjectStatusComponent } from '../../../object-status/object-status.component';
import { OverlayService } from '../../../overlay/overlay.service';

import { MaterialFormService } from './material-form.service';

interface ValuationTableRow {
  valuationName?: string;
  priceUnit?: string;
  priceValue?: string;
  unitValueText?: string;
  bidtValuationGroupId?: number;
}
interface SupplierTableRow {
  bidoCustomerCustomerCode?: string;
  productQuantity?: string;
  numberOfDays?: number;
  priceValue?: string;
  priceUnit?: string;
  supplierName?: string;
  priceValueText?: string;
  id?: number;
  dataId: number;
  serviceType?: string;
}
interface ContainerTableRow {
  pnCode?: string;
  articleDesignation?: string;
  statusUser?: string;
  statusDate?: Date;
  statusState?: string;
}
interface SupplyConversionTableRow {
  pnCode?: string;
  unit?: string;
  alternativeUnit?: string;
  factor?: number;
}

@Component({
  selector: 'aw-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  @ViewChild('mainAnchor')
  public mainAnchor: ElementRef;
  @ViewChild('warhouseAnchor')
  public warhouseAnchor: ElementRef;
  @ViewChild('valuationAnchor')
  public valuationAnchor: ElementRef;
  @ViewChild('customerEvolutionTableAnchor')
  public customerEvolutionTableAnchor: ElementRef;
  @ViewChild('alternativeAnchor')
  public alternativeAnchor: ElementRef;

  public dynamicAttributes: DynamicAttributes[];
  public materialAttributes: BirePnAttributeDTO[];

  public sparePartClassOptions: LabelValue<string>[];
  public deleteApi: string;
  public pnStatus: BirePnDTO;
  public warehouseTableCols: TableColumn[];
  public suppliersTableCols: TableColumn[];
  public valuationTableCols: TableColumn[];
  public containerTableCols: TableColumn[];
  public alternativeTableCols: TableColumn[];
  public supplyConversionTableCols: TableColumn[];
  public warehouseTable: WareHouseTableDTO[];
  public valuationTable: ValuationTableRow[];
  public supplierTable: SupplierTableRow[];
  public alternativeTable: BidtPnAlternativeDTO[];
  public selectedWarehouse: WareHouseTableDTO[];
  public selectedSuppliers: SupplierTableRow[];
  public selectedAlternatives: BidtPnAlternativeDTO[];
  public selectedValuation: ValuationTableRow[];
  public selectedContainer: ContainerTableRow[];
  public selectedSupplyConversion: SupplyConversionTableRow[];
  public warehouseMappedAddedList: WareHouseTableDTO[];
  public supplierMappedAddedList: BidtProductCustomerDTO[];
  public containerMappedAddedList: BireContainerPnDTO[];
  public supplyConversionMappedAddedList: BirePartUnitConversionDTO[];
  public showWarehousePopup: boolean;
  public showSupplierPopup: boolean;
  public showValuationPopup: boolean;
  public showAlternativePopup: boolean;
  public showContainerPopup: boolean;
  public showSupplyConversionPopup: boolean;
  public materialType: SelectItem[];
  public traceability: SelectItem[];
  public quantityUnit: SelectItem[];
  public expirationThresholdUnit: SelectItem[];
  public storageCondition: SelectItem[];
  public expirationUnit: SelectItem[];
  public unitDropDown: SelectItem[];
  public materialFieldData: BirePnDTO;
  public warehouseDialogOpenMode: ComponentOpenMode;
  public supplierDialogOpenMode: ComponentOpenMode;
  public alternativeDialogOpenMode: ComponentOpenMode;
  public valuationDialogOpenMode: ComponentOpenMode;
  public containerDialogOpenMode: ComponentOpenMode;
  public supplyConversionDialogOpenMode: ComponentOpenMode;
  public currentWarehouse: WareHouseTableDTO | undefined;
  public currentWarehouseIndex: number;
  public currentSupplier: SupplierTableRow | undefined;
  public currentSupplierIndex: number;
  public currentAlternative: BidtPnAlternativeDTO | undefined;
  public currentAlternativeIndex: number;
  public currentValuation: ValuationTableRow | undefined;
  public currentValuationIndex: number;
  public currentContainer: ContainerTableRow | undefined;
  public currentContainerIndex: number;
  public currentSupplyConversion: SupplyConversionTableRow | undefined;
  public currentSupplyConversionIndex: number;
  public storageConditionValue?: string;
  public engineeringView: boolean;
  public priceCurrency: string;
  public toc: PageTocEntry[];
  public workflowToc: PageTocEntry[];
  public selectedAnchor: string | undefined;
  public navigationLinkList: MenuItem[];
  public showSaveSpinner: boolean;
  public showStatusUpdatesPopup: boolean;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public tableStatusUpdatesData: DialogTableData<HistoricObjectPnDTO>;
  public mtbfAndMtburUnit: string;
  public measurementsUnit: string;
  public weightUnit: string;
  public enableUnitOfIssue: boolean;

  public serviceType: SelectItem[];
  public containerTable: ContainerTableRow[];
  public supplyConversionTable: SupplyConversionTableRow[];

  public propertyStatus: LabelValue<string>[];
  public engineeringPnTypes: LabelValue<string>[];
  public partNumberStatus: LabelValue<string>[];
  public propertyObjectStatus: LabelValue<string>[];
  public workflowStatus: LabelValue<string>[];
  public unitOfIssueOptions: LabelValue<string>[];

  public createProcurementDialogVisible: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public inputValidationService: InputValidationService,
    public translateService: TranslateService,
    public dynamicAttributesService: DynamicAttributesService,
    private readonly materialFormService: MaterialFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly propertiesService: PropertiesService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
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

    // For status/updates popup
    this.showStatusUpdatesPopup = false;
    this.enableUnitOfIssue = false;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.deleteApi = this.updateHistoricApi.removeBireSbHistory;

    this.setNavigationLinkList();
    this.setTableCols();
    this.init();
    this.selectedAnchor = undefined;
    this.registerPageTocEntrySelectedObservable();
    this.userWorkflowSubject.subscribe((userWorflow) => {
      this.updateWorkflowToc();
      this.updateWorkflowStatusList();
    });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MATERIAL_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      const context = this.isCreateOpenMode
        ? 'tab.createMode'
        : !!this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId).pnCode;
      this.displayComponentContext(context, this.isCreateOpenMode);
      this.loadMaterialDetailData();

      this.toc = [
        {
          id: 'mainAnchor',
          anchor: this.mainAnchor,
          label: `${this.translateService.instant('page.mainData')}`
        },
        {
          id: 'warhouseAnchor',
          anchor: this.warhouseAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('warehouses'))}`
        },
        {
          id: 'valuationAnchor',
          anchor: this.valuationAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('valuation'))}`
        },
        {
          id: 'customerEvolutionTableAnchor',
          anchor: this.customerEvolutionTableAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('suppliers'))}`
        },
        {
          id: 'alternativeAnchor',
          anchor: this.alternativeAnchor,
          label: `${this.translateService.instant(this.getTranslateKey('alternatives'))}`
        }
      ];
      this.updateWorkflowToc();

      setTimeout(() => {
        this.setSelectedAnchor('mainAnchor');
      });
    }

    if (this.isCreateOpenMode) {
      this.materialFieldData.statusState = AWPropertiesConstants.FUNC_OBJECT_STATUS_IS_INTEGRATED_KEY;
    }
  }

  private updateWorkflowToc() {
    this.workflowToc = this.applyWorkflowOnPageToc(this.toc);
  }

  private setNavigationLinkList(): void {
    const engineeringViewLabelKey = this.getTranslateKey('engineeringView');

    this.translateService.get([engineeringViewLabelKey]).subscribe((results: string[]) => {
      const engineeringViewLabel = results ? results[engineeringViewLabelKey] : 'Engineering View';

      this.navigationLinkList = [
        {
          label: engineeringViewLabel,
          command: () => {
            this.openPartView(ComponentOpenMode.Read);
          }
        }
      ];
    });
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  private registerPageTocEntrySelectedObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.selectedAnchor = pageTocEntrySelected;
    });
  }
  private init(): void {
    this.loadUnitOfIssueOptions();
    this.loadServiceType();
    this.showWarehousePopup = false;
    this.showSupplierPopup = false;
    this.showValuationPopup = false;
    this.showAlternativePopup = false;
    this.showContainerPopup = false;
    this.showSupplyConversionPopup = false;
    this.engineeringView = false;
    this.warehouseDialogOpenMode = ComponentOpenMode.Read;
    this.supplierDialogOpenMode = ComponentOpenMode.Read;
    this.valuationDialogOpenMode = ComponentOpenMode.Read;
    this.alternativeDialogOpenMode = ComponentOpenMode.Read;
    this.containerDialogOpenMode = ComponentOpenMode.Read;
    this.supplyConversionDialogOpenMode = ComponentOpenMode.Read;
    this.currentWarehouse = undefined;
    this.currentWarehouseIndex = -1;
    this.currentSupplier = undefined;
    this.currentSupplierIndex = -1;
    this.currentAlternative = undefined;
    this.currentAlternativeIndex = -1;
    this.currentValuation = undefined;
    this.currentValuationIndex = -1;
    this.currentContainer = undefined;
    this.currentContainerIndex = -1;
    this.currentSupplyConversion = undefined;
    this.currentSupplyConversionIndex = -1;
    this.priceCurrency = '';
    this.mtbfAndMtburUnit = '(H)';
    this.measurementsUnit = '(Cm)';
    this.weightUnit = '(Kg)';
    this.storageConditionValue = undefined;
    this.materialType = [];
    this.traceability = [];
    this.quantityUnit = [];
    this.expirationThresholdUnit = [];
    this.storageCondition = [];
    this.expirationUnit = [];
    this.unitDropDown = [];
    this.warehouseTable = [];
    this.valuationTable = [];
    this.supplierTable = [];
    this.alternativeTable = [];
    this.selectedWarehouse = [];
    this.selectedSuppliers = [];
    this.selectedValuation = [];
    this.selectedContainer = [];
    this.selectedAlternatives = [];
    this.selectedSupplyConversion = [];
    this.warehouseMappedAddedList = [];
    this.supplierMappedAddedList = [];
    this.containerMappedAddedList = [];
    this.supplyConversionMappedAddedList = [];
    this.loadEngineeringPnTypes();
    this.loadDropDown();
    this.materialFieldData = {};
    this.sparePartClassOptions = [];
    this.loadSparePartClassDropdown();
    this.containerTable = [];
    this.supplyConversionTable = [];
  }

  private setTableCols(): void {
    this.alternativeTableCols = [
      { field: 'birePnByFkBidtPnBidtPn2BirePnPnCode', alignment: 'left' },
      { field: 'nameOfInterchangebilty', alignment: 'left' },
      { field: 'alternativeComment', alignment: 'left' }
    ];
    this.suppliersTableCols = [
      { field: 'supplierName', alignment: 'left' },
      { field: 'numberOfDays', alignment: 'left' },
      { field: 'productQuantity', alignment: 'left' },
      { field: 'priceValueText', alignment: 'left' },
      { field: 'serviceType', alignment: 'left' }
    ];
    this.valuationTableCols = [
      { field: 'valuationName', alignment: 'left' },
      { field: 'unitValueText', alignment: 'left' }
    ];
    this.warehouseTableCols = [
      { field: 'siteName', alignment: 'left' },
      { field: 'wHName', alignment: 'left' },
      { field: 'storageBins', alignment: 'left' },
      { field: 'stock', alignment: 'left' },
      { field: 'whPrLowThreshold', alignment: 'left' },
      { field: 'whPrHighThreshold', alignment: 'left' }
    ];
    this.containerTableCols = [
      { field: 'pnCode', alignment: 'left' },
      { field: 'articleDesignation', alignment: 'left' }
    ];
    this.supplyConversionTableCols = [
      { field: 'unit', alignment: 'left' },
      { field: 'alternativeUnit', alignment: 'left' },
      { field: 'factor', alignment: 'left' }
    ];
  }

  public cancelMaterial(): void {
    this.clearErrors();
    this.updateOpenMode(ComponentOpenMode.Read);

    this.reloadMaterial();
  }

  public editMaterial(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadMaterial(): void {
    this.init();
    this.loadMaterialDetailData();
  }
  public enableEngieeringView() {
    if (!!this.engineeringPnTypes && !!this.materialFieldData.pnType) {
      for (const partValue of this.engineeringPnTypes) {
        if (this.materialFieldData.pnType === partValue.value) {
          this.engineeringView = true;
          break;
        } else {
          this.engineeringView = false;
        }
      }
    }
  }
  public saveMaterial(): boolean {
    let saved = false;
    const missingFields = this.checkMandatoryFields({
      ...this.materialFieldData,
      storageConditionValue: this.storageConditionValue,
      warehouseTableTitle: this.warehouseTable,
      valuationTableTitle: this.valuationTable,
      customerEvolutionTableTitle: this.supplierTable,
      alternativeTableTitle: this.alternativeTable,
      dynamicAttributes: this.dynamicAttributes
    });
    if (this.materialFieldData && this.materialFieldData.pnCode && missingFields.length === 0) {
      let update: boolean;
      this.isCreateOpenMode ? (update = false) : (update = true);
      this.warehouseMappedAddedList = [];
      this.materialAttributes = this.dynamicAttributesService.toBirePnAttribute(
        this.materialFieldData.pnCode,
        this.dynamicAttributes
      );

      this.warehouseTable.forEach((warehouse) => {
        const warehouseMapped: WareHouseTableDTO = {
          wareHouseId: warehouse.wareHouseId,
          bidtSiteId: warehouse.bidtSiteId,
          whPrHighThreshold: warehouse.whPrHighThreshold,
          whPrLowThreshold: warehouse.whPrLowThreshold,
          bidtStorageBinDTOList: warehouse.bidtStorageBinDTOList
        };
        this.warehouseMappedAddedList.push(warehouseMapped);
      });
      this.supplierMappedAddedList = [];
      this.supplierTable.forEach((supplier) => {
        this.serviceType.forEach((type) => {
          if (type.label === supplier.serviceType) {
            supplier.serviceType = type.value;
          }
        });
        const supplierMapped: BidtProductCustomerDTO = {
          bidoCustomerCustomerCode: supplier.bidoCustomerCustomerCode,
          numberOfDays: supplier.numberOfDays,
          productQuantity: supplier.productQuantity,
          priceValue: supplier.priceValue,
          priceUnit: this.priceCurrency,
          serviceType: supplier.serviceType
        };
        this.supplierMappedAddedList.push(supplierMapped);
      });
      this.containerMappedAddedList = [];
      if (this.materialFieldData.pnType === AWPropertiesConstants.PN_TYPE_BOX_KEY) {
        this.containerTable.forEach((container) => {
          const containerMapped: BireContainerPnDTO = {
            containerPnCode: this.materialFieldData.pnCode,
            contentPnCode: container.pnCode
          };
          this.containerMappedAddedList.push(containerMapped);
        });
      } else {
        this.containerTable.forEach((container) => {
          const containerMapped: BireContainerPnDTO = {
            containerPnCode: container.pnCode,
            contentPnCode: this.materialFieldData.pnCode
          };
          this.containerMappedAddedList.push(containerMapped);
        });
      }

      this.supplyConversionMappedAddedList = [];
      this.supplyConversionTable.forEach((supplyConversion) => {
        this.unitOfIssueOptions.forEach((res) => {
          if (supplyConversion.unit === res.label) {
            supplyConversion.unit = res.value;
          }
          if (supplyConversion.alternativeUnit === res.label) {
            supplyConversion.alternativeUnit = res.value;
          }
        });
        const supplyConversionMapped: BirePartUnitConversionDTO = {
          pnCode: this.materialFieldData.pnCode,
          unit: supplyConversion.unit,
          alternativeUnit: supplyConversion.alternativeUnit,
          factor: supplyConversion.factor
        };
        this.supplyConversionMappedAddedList.push(supplyConversionMapped);
      });

      const intStorageValue = parseInt(this.storageConditionValue as string, 10);
      const saveId: MaterialDataDTO = {
        birePnDTO: this.materialFieldData,
        isUpdate: update,
        whareHouseTableDtos: this.warehouseMappedAddedList,
        bidtValuationDTOs: this.valuationTable,
        bidtProductCustomerDTOs: this.supplierMappedAddedList,
        bidtProductScDTO: {
          bidtStorageConditionId: intStorageValue
        },

        bidtPnAlternativeDTOs: this.alternativeTable,
        bireContainerPnDTOs: this.containerMappedAddedList,
        bireSupplyConversionDTOs: this.supplyConversionMappedAddedList,
        materialAttributeDTOUpdatedList: this.materialAttributes
      };

      if (this.supplyConversionMappedAddedList.length > 0 && !this.materialFieldData.unitOfIssue) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveMaterialsForUnitOfIssue'));
      } else {
        this.showSaveSpinner = true;
        this.materialFormService.saveMaterial(saveId).subscribe(
          (result) => {
            this.componentData.objectId = this.serializationService.serialize(this.materialFieldData);
            const context = this.serializationService.deserialize(this.componentData.objectId).pnCode;
            this.updateOpenMode(ComponentOpenMode.Write);
            this.displayComponentContext(context, this.isCreateOpenMode);
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveMaterials'));
            this.showSaveSpinner = false;
            this.updateOpenMode(ComponentOpenMode.Read);
            this.reloadMaterial();
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveMaterials'));
            this.showSaveSpinner = false;
          }
        );
        saved = true;
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }

    return saved;
  }

  private loadEngineeringPnTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ENGINEERING_PN_TYPES_MAP).subscribe(
      (results) => {
        this.engineeringPnTypes = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEngineeringPnTypes'));
      }
    );
  }

  private updateWorkflowStatusList() {
    if (!!this.materialFieldData) {
      this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
        this.userWorkflow,
        this.partNumberStatus,
        this.materialFieldData.statusState
      );
    }
  }

  private loadDropDown(): void {
    this.propertiesService.getValue('getPnTraceabilityMap').subscribe(
      (results) => {
        this.traceability = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingTraceability');
      }
    );

    this.propertiesService.getValue('getPnTypeMap').subscribe(
      (results) => {
        this.materialType = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingMaterialType');
      }
    );

    this.propertiesService.getValue('getPnTraceabilityMap').subscribe(
      (results) => {
        this.traceability = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingTraceability');
      }
    );

    this.propertiesService.getValue('getFuncObjectStatusMap').subscribe({
      next: (results) => {
        this.propertyStatus = results || [];
        this.partNumberStatus = [...results];
        this.handleObjectStatus();
        this.loadMaterialUserWorkflow();
        this.updateWorkflowStatusList();
      },
      error: () => {
        this.messageService.showErrorMessage('errorOnLoadingTraceability');
        this.loadUserWorkflow(undefined);
      }
    });

    this.propertiesService.getValue('getObjectStatusMap').subscribe(
      (results) => {
        this.propertyObjectStatus = results;
        this.handleObjectStatus();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetObjectStatus'));
      }
    );

    this.materialFormService.findAllBireUnitMeasures().subscribe((result) => {
      const newLableValue: LabelValue<String>[] = [];
      result.forEach((res) => {
        if (BireUnitMeasureConstants.DAY === res.label) {
          newLableValue.push({
            label: `${res.label}-${res.value}`,
            value: res.value
          });
        }

        if (BireUnitMeasureConstants.MONTH === res.label) {
          newLableValue.push({
            label: `${res.label}-${res.value}`,
            value: res.value
          });
        }

        if (BireUnitMeasureConstants.YEAR === res.label) {
          newLableValue.push({
            label: `${res.label}-${res.value}`,
            value: res.value
          });
        }
      });

      this.expirationUnit = newLableValue;
      this.expirationThresholdUnit = newLableValue;
    });

    this.materialFormService.findQuantityUnitMap().subscribe((res) => {
      this.quantityUnit = res;
    });

    this.materialFormService.findStorageCondition().subscribe((result) => {
      const labelValue: LabelValue<String>[] = [];
      result.forEach((res: BidtStorageConditionDTO) => {
        if (!!res && !!res.id && !!res.scName) {
          labelValue.push({
            label: res.scName,
            value: res.id.toString()
          });
        }
      });
      this.storageCondition = labelValue;
    });

    this.materialFormService.getLocalCurrency().subscribe((result) => {
      this.priceCurrency = result;
    });
  }

  private handleObjectStatus() {
    // Adding object status if necessary
    if (
      !!this.materialFieldData &&
      !!this.materialFieldData.statusState &&
      !this.getLabelValueByValue(this.partNumberStatus, this.materialFieldData.statusState)
    ) {
      const currentState = this.getLabelValueByValue(this.propertyObjectStatus, this.materialFieldData.statusState);
      if (currentState) {
        this.partNumberStatus.unshift(currentState);
        this.updateWorkflowStatusList();
      }
    }
  }

  private getLabelValueByValue<T>(references: LabelValue<T>[], value: T): LabelValue<T> | undefined {
    return references.find((lv) => lv.value === value);
  }

  public loadMaterialDetailData(): void {
    const observables: Observable<BireAttributeDTO[]>[] = [
      this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY),
      this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_MATERIAL_KEY)
    ];

    forkJoin(observables).subscribe((results: BireAttributeDTO[][]) => {
      if (results) {
        const flattenResults: BireAttributeDTO[] = results.reduce((acc, val) => acc.concat(val), []);
        this.dynamicAttributes = this.dynamicAttributesService.from(flattenResults);

        if (this.componentData.objectId) {
          const userId = {
            pnCode: this.serializationService.deserialize(this.componentData.objectId).pnCode
          };
          if (!!userId) {
            this.materialFormService.getMaterialDetails(userId).subscribe(
              (result) => {
                if (result !== null && result !== undefined) {
                  this.materialFieldData = result.birePnDTO;
                  if (result.birePnDTO.averagePrice) {
                    this.materialFieldData.averagePrice = this.convertAveragePrice(result.birePnDTO.averagePrice);
                  }
                  this.enableEngieeringView();
                  this.handleObjectStatus();
                  this.loadMaterialUserWorkflow();

                  if (!!this.materialFieldData.pnCode) {
                    this.materialFormService
                      .findBirePnAttributesByPn(this.materialFieldData.pnCode)
                      .subscribe((attributesResults) => {
                        this.dynamicAttributes.forEach((element) => {
                          element.attributes.forEach((attribute) => {
                            const attributeInResults = attributesResults.filter(
                              (res) => res.attributeId === attribute.id
                            );
                            if (attributeInResults.length === 1) {
                              attribute.value = attributeInResults[0].attributeValue;
                            }
                          });
                        });
                      });
                  }

                  this.warehouseTable = [];
                  result.whareHouseTableDtos.forEach((obj) => {
                    this.warehouseTable.push(this.convertWarehouseDataToRow(obj));
                  });
                  this.valuationTable = [];
                  result.bidtValuationDTOs.forEach((obj) => {
                    this.valuationTable.push(this.convertValuationDataToRow(obj));
                  });
                  this.supplierTable = [];
                  result.bidtProductCustomerDTOs.forEach((obj) => {
                    this.supplierTable.push(this.convertSupplierDataToRow(obj));
                  });
                  this.alternativeTable = result.bidtPnAlternativeDTOs || [];
                  this.storageConditionValue = !!result.bidtProductScDTO.bidtStorageConditionId
                    ? result.bidtProductScDTO.bidtStorageConditionId.toString()
                    : undefined;

                  this.containerTable = [];
                  result.bireContainerPnDTOs.forEach((obj) => {
                    let searchData: BirePnDTO;

                    if (obj.containerPnCode === this.materialFieldData.pnCode) {
                      searchData = {
                        pnCode: obj.contentPnCode
                      };
                    } else {
                      searchData = {
                        pnCode: obj.containerPnCode
                      };
                    }

                    this.materialFormService.getMaterialDetails(searchData).subscribe((matDetails) => {
                      if (matDetails) {
                        this.containerTable.push(this.convertContainerDataToRow(matDetails.birePnDTO));
                      }
                    });
                  });
                  this.supplyConversionTable = [];
                  result.bireSupplyConversionDTOs.forEach((obj) => {
                    this.supplyConversionTable.push(this.convertSupplyConversionDataToRow(obj));
                  });

                  this.enableUnitOfIssue = this.isUnitOfIssueInitialised(result);
                } else {
                  super.throwUnboundLocalError('loadMaterialDetailData', 'result');
                  this.loadUserWorkflow(undefined);
                }
              },
              () => {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadMaterialData'));
                this.loadUserWorkflow(undefined);
              }
            );
          }
        } else {
          this.loadUserWorkflow(undefined);
        }
      }
    });
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BireAttributeDTO[]> {
    return this.materialFormService.findBireAttributesByCategory(attributeCategory);
  }

  private loadMaterialUserWorkflow() {
    if (this.materialFieldData && this.propertyStatus) {
      let status = this.materialFieldData.statusState;
      if (!this.propertyStatus.find((item) => item.value === status)) {
        // Non-functional status is ignored (legacy technical status)
        status = undefined;
      }
      this.loadUserWorkflow(status);
    }
  }

  private convertWarehouseDataToRow(obj: WareHouseTableDTO) {
    const row: WareHouseTableDTO = {
      siteName: obj.siteName,
      bidtSiteId: obj.bidtSiteId,
      wareHouseId: obj.wareHouseId,
      storageBins:
        !!obj.bidtStorageBinDTOList && obj.bidtStorageBinDTOList.length > 0
          ? this.getStorageBins(obj.bidtStorageBinDTOList)
          : '',
      wHName: obj.wHName,
      whPrHighThreshold: obj.whPrHighThreshold,
      whPrLowThreshold: obj.whPrLowThreshold,
      dataId: Math.random(),
      bidtStorageBinDTOList: obj.bidtStorageBinDTOList
    };

    return row;
  }

  private getStorageBins(bidtStorageBinDTOList: BidtStorageBinDTO[]) {
    let sbin = '';

    bidtStorageBinDTOList.forEach((res) => {
      if (!!res.sbNumber) {
        if (!!sbin) {
          sbin = `${sbin} / ${res.sbNumber}`;
        } else {
          sbin = res.sbNumber;
        }
      }
    });

    return sbin;
  }

  private convertAveragePrice(obj: number): number {
    // convert the average price to 2 decimals
    const decimals = 1e2;
    const averagePriceFormatted = Math.round(obj * decimals) / decimals;

    return averagePriceFormatted;
  }

  private convertValuationDataToRow(obj: BidtPriceDTO) {
    const formattedPrice = parseFloat(obj.priceValue as string).toFixed(2);
    const row: ValuationTableRow = {
      bidtValuationGroupId: obj.bidtValuationGroupId,
      priceUnit: this.priceCurrency,
      priceValue: obj.priceValue,
      unitValueText: `${formattedPrice} ${this.priceCurrency}`,
      valuationName: obj.valuationName
    };

    return row;
  }

  private convertSupplierDataToRow(obj: BidtProductCustomerDTO) {
    const formattedQuantity = parseFloat(obj.productQuantity as string).toFixed(0);
    const formattedPrice = parseFloat(obj.priceValue as string).toFixed(2);

    this.serviceType.forEach((type) => {
      if (type.value === obj.serviceType) {
        obj.serviceType = type.label;
      }
    });
    const row: SupplierTableRow = {
      bidoCustomerCustomerCode: obj.bidoCustomerCustomerCode,
      productQuantity: formattedQuantity,
      numberOfDays: obj.numberOfDays,
      priceValue: obj.priceValue,
      priceUnit: this.priceCurrency,
      supplierName: obj.supplierName,
      priceValueText: `${formattedPrice} ${this.priceCurrency}`,
      id: obj.id,
      dataId: Math.random(),
      serviceType: obj.serviceType
    };

    return row;
  }

  private convertContainerDataToRow(obj: BirePnDTO) {
    const row: ContainerTableRow = {
      pnCode: obj.pnCode,
      articleDesignation: obj.articleDesignation,
      statusUser: obj.statusUser,
      statusDate: obj.statusDate,
      statusState: this._formatSelectOption.transform(obj.statusState, this.workflowStatus)
    };

    return row;
  }

  private convertSupplyConversionDataToRow(obj: BirePartUnitConversionDTO) {
    obj.unit = this.unitOfIssueOptions[((obj.unit as unknown) as number) - 1].label;
    obj.alternativeUnit = this.unitOfIssueOptions[((obj.alternativeUnit as unknown) as number) - 1].label;

    const row: SupplyConversionTableRow = {
      pnCode: obj.pnCode,
      unit: obj.unit,
      alternativeUnit: obj.alternativeUnit,
      factor: obj.factor
    };

    return row;
  }

  private openPartView(openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId: this.materialFieldData.pnCode,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
  public openBussinerPartnerForm(objectId: BidtProductCustomerDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_BUSINESS_PARTNER_FORM,
      openMode
    };
    if (!!objectId && !!objectId.bidoCustomerCustomerCode) {
      const businessPartnerFormId: BidoCustomerDTOId = {
        customerCode: objectId.bidoCustomerCustomerCode
      };
      data.objectId = this.serializationService.serialize(businessPartnerFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openContainerPartView(selectedRow: BirePnDTO, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId: selectedRow.pnCode,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**************************************************************************
   * Warehouse Dialog
   *************************************************************************/
  public addWarehouse(): void {
    this.currentWarehouse = undefined;
    this.warehouseDialogOpenMode = ComponentOpenMode.Create;
    this.showWarehousePopup = true;
  }
  public deleteWarehouse(): void {
    const partialMessageKey =
      this.selectedWarehouse.length > 1 ? 'confirmOnDeleteWarehouses' : 'confirmOnDeleteWarehouse';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedWarehouse.forEach((selected) => {
          if (!!this.warehouseTable) {
            this.warehouseTable = this.warehouseTable.filter((warehouse) => warehouse.dataId !== selected.dataId);
          } else {
            super.throwUnboundLocalError('deleteWarehouse', 'this.warehouseTable');
          }
        });
        this.selectedWarehouse = [];
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteWarehouse'));
      }
    });
  }
  public editWarehouse(): void {
    this.currentWarehouse = { ...this.selectedWarehouse[0] };
    if (!!this.currentWarehouse) {
      this.currentWarehouseIndex = this.warehouseTable.findIndex((warehouse) => {
        return (
          !!warehouse.dataId &&
          !!this.selectedWarehouse[0].dataId &&
          warehouse.dataId === this.selectedWarehouse[0].dataId
        );
        //  return DTOUtils.equalsWarehouseTableDTO(warehouse, this.currentWarehouse);
      });
    }
    this.warehouseDialogOpenMode = ComponentOpenMode.Write;
    this.showWarehousePopup = true;
  }
  public openWarehouse(): void {
    if (this.selectedWarehouse.length === 1) {
      this.currentWarehouse = this.selectedWarehouse[0];
      this.currentWarehouseIndex = -1;
      this.warehouseDialogOpenMode = ComponentOpenMode.Read;
      this.showWarehousePopup = true;
    }
  }

  public onAddWarehouse(event: WareHouseTableDTO): void {
    if (!!event) {
      const warehouseAttribute: WareHouseTableDTO = {
        siteName: event.siteName,
        bidtSiteId: event.bidtSiteId,
        wareHouseId: event.wareHouseId,
        wHName: event.wHName,
        whPrHighThreshold: event.whPrHighThreshold,
        whPrLowThreshold: event.whPrLowThreshold,
        dataId: Math.random(),
        bidtStorageBinDTOList: event.bidtStorageBinDTOList
      };
      if (
        !!event.bidtStorageBinDTOList &&
        event.bidtStorageBinDTOList.length > 0 &&
        !!event.bidtStorageBinDTOList[0].bidtWarehouseId
      ) {
        this.materialFormService
          .findByWarehouseId(event.bidtStorageBinDTOList[0].bidtWarehouseId)
          .subscribe((result) => {
            if (!!result && !!result.list && result.list.length > 0) {
              let sbin = '';
              result.list.forEach((res) => {
                (event.bidtStorageBinDTOList as BidtStorageBinDTO[]).forEach((r) => {
                  if (r.id === res.id) {
                    if (!!res.sbNumber) {
                      if (!!sbin) {
                        sbin = `${sbin} / ${res.sbNumber}`;
                      } else {
                        sbin = res.sbNumber;
                      }
                    }
                  }
                });
              });
              warehouseAttribute.storageBins = sbin;
              if (this.warehouseDialogOpenMode === ComponentOpenMode.Write) {
                this.warehouseTable[this.currentWarehouseIndex] = warehouseAttribute;
              } else {
                this.warehouseTable = [...this.warehouseTable, warehouseAttribute];
              }
            }
          });
      } else {
        if (this.warehouseDialogOpenMode === ComponentOpenMode.Write) {
          this.warehouseTable[this.currentWarehouseIndex] = warehouseAttribute;
        } else {
          this.warehouseTable = [...this.warehouseTable, warehouseAttribute];
        }
      }
    }
    this.selectedWarehouse = [];
  }
  public goToStockStatus(): void {
    if (this.selectedWarehouse.length === 1) {
      const stockStatus: StockStatusInput = {
        pnCode: this.materialFieldData.pnCode, // ?
        stockOwnerCode: '',
        warehouseId: this.selectedWarehouse[0].wareHouseId, // ?
        siteId: this.selectedWarehouse[0].bidtSiteId, // ?
        startDate: new Date(),
        endDate: new Date()
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_STOCK_STATUS_SEARCH,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(stockStatus)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
    // }
  }

  public openStatusUpdatesPopup() {
    this.pnStatus = { ...this.materialFieldData };
    this.showStatusUpdatesPopup = true;
    const columns: TableColumn[] = [
      { field: 'date', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'author', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'action', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'status', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'articleDesignation', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'pnType', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'quantityUnit', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'traceability', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'expirationDuration', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'expirationUnit', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'expirationThreshold', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      {
        field: 'expirationThresholdUnit',
        alignment: 'center',
        width: '150px',
        filterMode: TableColumnFilterMode.Input
      },
      { field: 'sparePartClass', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input }
    ];
    this.updatesKeyMap.set('status', of(this.partNumberStatus));
    if (!!this.materialFieldData.sparePartClassCode) {
      this.updatesKeyMap.set('sparePartClass', of(this.sparePartClassOptions));
    }
    if (this.materialFieldData.pnCode) {
      this.tableStatusUpdatesData = {
        componentId: 'MaterialFormComponent.historicPopup',
        tableCols: columns,
        tableRows: this.updateHistoricService.findBirePnHistoric({
          pnCode: this.materialFieldData.pnCode
        }),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Multiple,
        globalFilter: false
      };
    }
  }
  /**************************************************************************
   * Valuation Dialog
   *************************************************************************/
  public addValuation(): void {
    this.currentValuation = undefined;
    this.valuationDialogOpenMode = ComponentOpenMode.Create;
    this.showValuationPopup = true;
  }
  public deleteValuation(): void {
    const partialMessageKey =
      this.selectedWarehouse.length > 1 ? 'confirmOnDeleteValuations' : 'confirmOnDeleteValuation';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedValuation.forEach((selected) => {
          if (!!this.valuationTable) {
            this.valuationTable = this.valuationTable.filter(
              (valuation) => valuation.bidtValuationGroupId !== selected.bidtValuationGroupId
            );
          } else {
            super.throwUnboundLocalError('deleteValuation', 'this.valuationTable');
          }
        });
        this.selectedValuation = [];
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteValuation'));
      }
    });
  }
  public editValuation(): void {
    this.currentValuation = { ...this.selectedValuation[0] };
    if (!!this.currentValuation) {
      this.currentValuationIndex = this.valuationTable.findIndex((valuation) => {
        return (
          !!valuation.bidtValuationGroupId &&
          !!this.selectedValuation[0].bidtValuationGroupId &&
          valuation.bidtValuationGroupId === this.selectedValuation[0].bidtValuationGroupId
        );
      });
    }
    this.valuationDialogOpenMode = ComponentOpenMode.Write;
    this.showValuationPopup = true;
  }
  public openValuation(): void {
    if (this.selectedValuation.length === 1) {
      this.currentValuation = this.selectedValuation[0];
      this.currentValuationIndex = -1;
      this.valuationDialogOpenMode = ComponentOpenMode.Read;
      this.showValuationPopup = true;
    }
  }
  public onAddValuation(event: BidtPriceDTO): void {
    if (!!event) {
      const valuationAttribute: ValuationTableRow = {
        valuationName: event.valuationName,
        priceUnit: event.priceUnit,
        unitValueText: `${event.priceValue} ${event.priceUnit}`,
        bidtValuationGroupId: event.bidtValuationGroupId,
        priceValue: event.priceValue
      };
      const isAdded = this.valuationTable.some((valuationData) => {
        return DTOUtils.equalsValuationTableDTO(valuationAttribute, valuationData);
      });
      if (this.valuationDialogOpenMode === ComponentOpenMode.Write) {
        const checkElement = this.valuationTable.filter((valuationData, index) => {
          return (
            index !== this.currentValuationIndex &&
            valuationData.bidtValuationGroupId === valuationAttribute.bidtValuationGroupId
          );
        });
        if (checkElement.length === 0) {
          this.valuationTable[this.currentValuationIndex] = valuationAttribute;
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnValuationExists'));
        }
      } else {
        if (isAdded) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnValuationExists'));
        } else {
          this.valuationTable = [...this.valuationTable, valuationAttribute];
        }
      }
    }
    this.selectedValuation = [];
  }
  /**************************************************************************
   * Supplier Dialog
   *************************************************************************/
  public addSupplier(): void {
    this.currentSupplier = undefined;
    this.supplierDialogOpenMode = ComponentOpenMode.Create;
    this.showSupplierPopup = true;
  }
  public deleteSupplier(): void {
    const partialMessageKey =
      this.selectedSuppliers.length > 1 ? 'confirmOnDeleteSuppliers' : 'confirmOnDeleteSupplier';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedSuppliers.forEach((selected) => {
          if (!!this.supplierTable) {
            this.supplierTable = this.supplierTable.filter((supplier) => supplier.dataId !== selected.dataId);
          } else {
            super.throwUnboundLocalError('deleteSupplier', 'this.supplierTable');
          }
        });
        this.selectedSuppliers = [];
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteSupplier'));
      }
    });
  }
  public editSupplier(): void {
    this.currentSupplier = { ...this.selectedSuppliers[0] };
    if (!!this.currentSupplier) {
      this.currentSupplierIndex = this.supplierTable.findIndex((supplier) => {
        return (
          !!supplier.dataId &&
          !!this.selectedSuppliers[0].dataId &&
          supplier.dataId === this.selectedSuppliers[0].dataId
        );
      });
    }
    this.supplierDialogOpenMode = ComponentOpenMode.Write;
    this.showSupplierPopup = true;
  }
  public openSupplier(): void {
    if (this.selectedSuppliers.length === 1) {
      // { ...this.selectedSuppliers[0] } allows to keep the correct displayed form of ServiceType in supplier table
      this.currentSupplier = { ...this.selectedSuppliers[0] };
      this.currentSupplierIndex = -1;
      this.supplierDialogOpenMode = ComponentOpenMode.Read;
      this.showSupplierPopup = true;
    }
  }
  public onAddSupplier(event: BidtProductCustomerDTO): void {
    if (!!event) {
      this.serviceType.forEach((type) => {
        if (type.value === event.serviceType) {
          event.serviceType = type.label;
        }
      });
      const supplierAttribute: SupplierTableRow = {
        supplierName: event.supplierName,
        priceUnit: event.priceUnit,
        priceValueText: `${event.priceValue} ${event.priceUnit}`,
        bidoCustomerCustomerCode: event.bidoCustomerCustomerCode,
        priceValue: event.priceValue,
        numberOfDays: event.numberOfDays,
        productQuantity: event.productQuantity,
        dataId: Math.random(),
        serviceType: event.serviceType
      };
      if (this.supplierDialogOpenMode === ComponentOpenMode.Write) {
        this.supplierTable[this.currentSupplierIndex] = supplierAttribute;
      } else {
        this.supplierTable = [...this.supplierTable, supplierAttribute];
      }
    }
    this.selectedSuppliers = [];
  }

  /**************************************************************************
   * Alternative Dialog
   *************************************************************************/
  public addAlternative(): void {
    this.currentAlternative = undefined;
    this.alternativeDialogOpenMode = ComponentOpenMode.Create;
    this.showAlternativePopup = true;
  }
  public deleteAlternative(): void {
    const partialMessageKey =
      this.selectedAlternatives.length > 1 ? 'confirmOnDeleteAlternatives' : 'confirmOnDeleteAlternative';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedAlternatives.forEach((selected) => {
          if (!!this.alternativeTable) {
            this.alternativeTable = this.alternativeTable.filter(
              (alternative) =>
                alternative.birePnByFkBidtPnBidtPn2BirePnPnCode !== selected.birePnByFkBidtPnBidtPn2BirePnPnCode
            );
          } else {
            super.throwUnboundLocalError('deleteAlternative', 'this.alternativeTable');
          }
        });
        this.selectedAlternatives = [];
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteAlternative'));
      }
    });
  }
  public editAlternative(): void {
    this.currentAlternative = { ...this.selectedAlternatives[0] };
    if (!!this.currentAlternative) {
      this.currentAlternativeIndex = this.alternativeTable.findIndex((alternative) => {
        return (
          !!alternative.birePnByFkBidtPnBidtPn2BirePnPnCode &&
          !!this.selectedAlternatives[0].birePnByFkBidtPnBidtPn2BirePnPnCode &&
          alternative.birePnByFkBidtPnBidtPn2BirePnPnCode ===
            this.selectedAlternatives[0].birePnByFkBidtPnBidtPn2BirePnPnCode
        );
      });
    }
    this.alternativeDialogOpenMode = ComponentOpenMode.Write;
    this.showAlternativePopup = true;
  }
  public openAlternative(): void {
    if (this.selectedAlternatives.length === 1) {
      this.currentAlternative = this.selectedAlternatives[0];
      this.currentAlternativeIndex = -1;
      this.alternativeDialogOpenMode = ComponentOpenMode.Read;
      this.showAlternativePopup = true;
    }
  }
  public onAddAlternative(event: BidtPnAlternativeDTO): void {
    if (!!event) {
      const alternativeAttribute: BidtPnAlternativeDTO = {
        birePnByFkBidtPnBidtPn1BirePnPnCode: this.materialFieldData.pnCode,
        birePnByFkBidtPnBidtPn2BirePnPnCode: event.birePnByFkBidtPnBidtPn2BirePnPnCode,
        alternativeType: event.alternativeType ? event.alternativeType : undefined,
        alternativeComment: event.alternativeComment ? event.alternativeComment : '',
        nameOfInterchangebilty: event.nameOfInterchangebilty ? event.nameOfInterchangebilty : ''
      };
      const isAdded = this.alternativeTable.some((alternativeData) => {
        return DTOUtils.equalsAlternativeTableDTO(alternativeAttribute, alternativeData);
      });
      if (this.alternativeDialogOpenMode === ComponentOpenMode.Write) {
        const checkElement = this.alternativeTable.filter((alternativeData, index) => {
          return (
            index !== this.currentAlternativeIndex &&
            alternativeData.birePnByFkBidtPnBidtPn2BirePnPnCode ===
              alternativeAttribute.birePnByFkBidtPnBidtPn2BirePnPnCode
          );
        });
        if (checkElement.length === 0) {
          this.alternativeTable[this.currentAlternativeIndex] = alternativeAttribute;
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnAlternativeExists'));
        }
      } else {
        if (isAdded) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnAlternativeExists'));
        } else {
          this.alternativeTable = [...this.alternativeTable, alternativeAttribute];
        }
      }
    }
    this.selectedAlternatives = [];
  }

  /**************************************************************************
   * Container Dialog
   *************************************************************************/

  public addContainer(): void {
    this.currentContainer = undefined;
    this.containerDialogOpenMode = ComponentOpenMode.Create;
    this.showContainerPopup = true;
  }

  public deleteContainer(): void {
    const partialMessageKey =
      this.selectedContainer.length > 1 ? 'confirmOnDeleteContainerPns' : 'confirmOnDeleteContainerPn';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedContainer.forEach((selected) => {
          if (!!this.containerTable) {
            this.containerTable = this.containerTable.filter((container) => container.pnCode !== selected.pnCode);
          } else {
            super.throwUnboundLocalError('deleteContainer', 'this.containerTable');
          }
        });
        this.selectedContainer = [];
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteContainerPn'));
      }
    });
  }

  public editContainer(): void {
    this.currentContainer = { ...this.selectedContainer[0] };
    if (!!this.currentContainer) {
      this.currentContainerIndex = this.containerTable.findIndex((container) => {
        return (
          !!container.pnCode &&
          !!this.selectedContainer[0].pnCode &&
          container.pnCode === this.selectedContainer[0].pnCode
        );
      });
    }
    this.containerDialogOpenMode = ComponentOpenMode.Write;
    this.showContainerPopup = true;
  }
  public openContainer(): void {
    if (this.selectedContainer.length === 1) {
      this.currentContainer = this.selectedContainer[0];
      this.currentContainerIndex = -1;
      this.containerDialogOpenMode = ComponentOpenMode.Read;
      this.showContainerPopup = true;
    }
  }
  public onAddContainer(event: BirePnDTO): void {
    if (!!event) {
      const containerAttribute: ContainerTableRow = {
        pnCode: event.pnCode,
        articleDesignation: event.articleDesignation
      };
      const isAdded = this.containerTable.some((containerData) => {
        return DTOUtils.equalsContainerTableDTO(containerAttribute, containerData);
      });
      if (this.containerDialogOpenMode === ComponentOpenMode.Write) {
        this.containerTable[this.currentContainerIndex] = containerAttribute;
      } else {
        if (isAdded) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnContainerExists'));
        } else {
          this.containerTable = [...this.containerTable, containerAttribute];
        }
      }
    }
    this.selectedContainer = [];
  }

  /**************************************************************************
   * Supply Conversion Dialog
   *************************************************************************/

  public addSupplyConversion(): void {
    this.currentSupplyConversion = undefined;
    this.supplyConversionDialogOpenMode = ComponentOpenMode.Create;
    this.showSupplyConversionPopup = true;
  }

  public deleteSupplyConversion(): void {
    const partialMessageKey =
      this.selectedSupplyConversion.length > 1 ? 'confirmOnDeleteSupplyConversions' : 'confirmOnDeleteSupplyConversion';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedSupplyConversion.forEach((selected) => {
          if (!!this.supplyConversionTable) {
            this.supplyConversionTable = this.supplyConversionTable.filter(
              (supplyConversion) => supplyConversion.alternativeUnit !== selected.alternativeUnit
            );
          } else {
            super.throwUnboundLocalError('deleteSupplyConversion', 'this.supplyConversionTable');
          }
        });
        this.selectedSupplyConversion = [];
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteSupplyConversion'));
      }
    });
  }

  public editSupplyConversion(): void {
    this.currentSupplyConversion = { ...this.selectedSupplyConversion[0] };
    if (!!this.currentSupplyConversion) {
      this.currentSupplyConversionIndex = this.supplyConversionTable.findIndex((supplyConversion) => {
        return (
          !!supplyConversion.pnCode &&
          !!this.selectedSupplyConversion[0].pnCode &&
          supplyConversion.pnCode === this.selectedSupplyConversion[0].pnCode
        );
      });
    }
    this.supplyConversionDialogOpenMode = ComponentOpenMode.Write;
    this.showSupplyConversionPopup = true;
  }
  public openSupplyConversion(): void {
    if (this.selectedSupplyConversion.length === 1) {
      this.currentSupplyConversion = this.selectedSupplyConversion[0];
      this.currentSupplyConversionIndex = -1;
      this.supplyConversionDialogOpenMode = ComponentOpenMode.Read;
      this.showSupplyConversionPopup = true;
    }
  }
  public onAddSupplyConversion(event: BirePartUnitConversionDTO): void {
    if (!!event) {
      const supplyConversionAttribute: SupplyConversionTableRow = {
        pnCode: event.pnCode,
        unit: event.unit,
        alternativeUnit: event.alternativeUnit,
        factor: event.factor
      };
      const isAdded = this.supplyConversionTable.some((supplyConversionData) => {
        return DTOUtils.equalsSupplyConversionTableDTO(supplyConversionAttribute, supplyConversionData);
      });
      if (this.supplyConversionDialogOpenMode === ComponentOpenMode.Write) {
        this.supplyConversionTable[this.currentSupplyConversionIndex] = supplyConversionAttribute;
      } else {
        if (isAdded) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnSupplyConversionExists'));
        } else {
          this.supplyConversionTable = [...this.supplyConversionTable, supplyConversionAttribute];
        }
      }
    }
    this.selectedSupplyConversion = [];
  }

  private loadUnitOfIssueOptions(): void {
    this.propertiesService.getValue(GenericPropertyConstants.UNIT_OF_ISSUE_MAP).subscribe(
      (results) => {
        this.unitOfIssueOptions = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPartGuidelineTypes'));
      }
    );
  }

  public showCreateProcurementDialog(): void {
    this.createProcurementDialogVisible = true;
  }

  public onCreateProcurementRequest(procurementRequest: BidtProcurementRequestDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
      objectId: this.serializationService.serialize({ id: procurementRequest.id }),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public showStatus(): void {
    if (!this.isCreateOpenMode) {
      const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
        content: ObjectStatusComponent,
        data: {
          currentAuthor: this.materialFieldData.statusUser,
          currentDate: this.materialFieldData.statusDate,
          currentStatus: {
            label: this._formatSelectOption.transform(this.materialFieldData.statusState, this.workflowStatus),
            value: this.materialFieldData.statusState
          },
          nextStatuses: this.workflowStatus
        }
      });

      overlayRef.afterClosed$.subscribe({
        next: (event) => {
          if (event.data) {
            const currentState = this.materialFieldData.statusState;
            this.materialFieldData.statusState = event.data;
            const saved = this.saveMaterial();
            if (!saved) {
              // Revert status change if save not launched
              this.materialFieldData.statusState = currentState;
            }
          }
        }
      });
    }
  }

  private loadSparePartClassDropdown(): void {
    this.propertiesService.getValue(GenericPropertyConstants.SPARE_PART_CLASS_CODE).subscribe((results) => {
      this.sparePartClassOptions = results;
    });
  }

  public isMaterialContainer(): boolean {
    return this.materialFieldData.pnType === AWPropertiesConstants.PN_TYPE_BOX_KEY;
  }

  private isUnitOfIssueInitialised(result: MaterialDataDTO): boolean {
    return !!result.birePnDTO.unitOfIssue;
  }

  private loadServiceType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.MM_SERVICE_TYPE_MAP).subscribe((results) => {
      this.serviceType = results;
    });
  }
}
