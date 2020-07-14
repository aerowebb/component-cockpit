import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';

import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { BidoPreferenceConstants } from '../../../../shared/constants/bido-preference-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetInstalledInput } from '../../../../shared/types/api-input-types/fleet-history/asset-installed-input.interface';
import { AssetRemovedInput } from '../../../../shared/types/api-input-types/fleet-history/asset-removed-input.interface';
import { FindBidoEquipmentsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-equipments-by-search-criteria-input.interface';
import { FindBidoEquipmentsDTOBySearchCriteriaOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-equipments-dto-by-search-criteria-output';
import { AttributeValueDTO } from '../../../../shared/types/api-types/attribute-value-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/bido-equipment-attribute-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { SendToRepairDTO } from '../../../../shared/types/api-types/send-to-repair-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { AssetSearchService } from './asset-search.service';
import { DavAssetSearchService } from './asset-search.service-dassault';

interface TableToolRow {
  fatherEquipment?: string;
  sn?: string;
  pnCode?: string;
  equipmentDesignation?: string;
  familyVariantCode?: string;
  operationalStatus?: string;
  eisDate?: string;
  equipmentCode?: string;
  equipmentType?: string;
  warehouse?: string;
  maintenanceProgramm?: string;
  _expand?: boolean | false;
  statusState?: string;
}
interface TableEngineRow {
  sn?: string;
  standardTimeCounterCode?: string;
  standardCycleCounterCode?: string;
  pnCode?: string;
  equipmentDesignation?: string;
  familyVariantCode?: string;
  operationalStatus?: string;
  eisDate?: string;
  equipmentCode?: string;
  fatherEquipment?: string;
  aircraft?: string;
  aircraftStatus?: string;
  functionalLocation?: string;
  ownerCustomerCode?: string;
  operatorCustomerCode?: string;
  location?: string;
  itemNumber?: string;
  functionCode?: string;
  maintenanceProgramm?: string;
  davEdmsError?: boolean;
  _expand?: boolean | false;
  statusState?: string;
}

interface TableEquipmentRow {
  sn?: string;
  standardTimeCounterCode?: string;
  standardCycleCounterCode?: string;
  pnCode?: string;
  equipmentDesignation?: string;
  familyVariantCode?: string;
  equipmentFunction?: string;
  operationalStatus?: string;
  equipmentCode?: string;
  eisDate?: string;
  fatherEquipment?: string;
  aircraft?: string;
  aircraftStatus?: string;
  functionalLocation?: string;
  ownerCustomerCode?: string;
  operatorCustomerCode?: string;
  location?: string;
  itemNumber?: string;
  functionCode?: string;
  maintenanceProgramm?: string;
  _expand?: boolean | false;
  statusState?: string;
  statusKey?: string;
}

interface TableAirCraftRow {
  sn?: string;
  standardTimeCounterCode?: string;
  standardCycleCounterCode?: string;
  registration?: string;
  equipmentDesignation?: string;
  familyVariantCode?: string;
  equipmentFunction?: string;
  operationalStatus?: string;
  eisDate?: string;
  equipmentCode?: string;
  functionalLocation?: string;
  ownerCustomerCode?: string;
  operatorCustomerCode?: string;
  location?: string;
  maintenanceProgramm?: string;
  _expand?: boolean | false;
  statusState?: string;
}

interface SearchData {
  searchObject?: BidoEquipmentDTO;
  itemNumber?: string;
  location?: string;
  sourceSystemId?: string;
  sourceSystemReference?: string;
  attributeName?: string;
  attributeBooleanValue?: boolean;
  attributeDdl?: string;
  attributeInput?: string;
  functionalLocation?: string;
  isInput?: boolean;
  isBoolean?: boolean;
  isDate?: boolean;
  isDdl?: boolean;
  isSearchWithCounters?: boolean;
  isWithMP?: boolean;
  isWithTopAsset?: boolean;
  topAsset?: BidoEquipmentDTO;
}

export abstract class AssetSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public exportMethods: MenuItem[];
  public selectedEquipments: TableEquipmentRow[];
  public selectedEngine: TableEngineRow[];
  public selectedAircraft: TableAirCraftRow[];
  public selectedTool: TableToolRow[];
  public isSearchWithCounters: boolean;
  public isNavigationOverlayVisible: boolean;
  public searchData: SearchData;
  public findBidoEquipmentsBySearchCriteriaInput: FindBidoEquipmentsBySearchCriteriaInput;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public resultsTable: SearchResultsDTO<FindBidoEquipmentsDTOBySearchCriteriaOutput>;
  public resultsTableCols: TableColumn[];
  public resultsTableColsWithAircraft: TableColumn[];
  public resultsTableColsExpanded1: TableColumn[];
  public resultsTableColsWithAircraftExpanded1: TableColumn[];
  public resultsTableColsWithCounters: TableColumn[];
  public resultsTableColsWithCountersAndAircraft: TableColumn[];
  public resultsTableColsExpanded2: TableColumn[];
  public resultsTableColsWithMPCodeExpanded2: TableColumn[];
  public searchObject: BidoEquipmentDTO;
  public criteriaToSave: SearchData;
  public criteriaName: string | undefined;
  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;
  public bidoDate: Date | undefined;
  // tslint:disable-next-line:no-any
  public remainingTable: any;

  public familyVariant: string | undefined;
  public propertyVariant: LabelValue<string>[];
  public propertyOperationalStatus: LabelValue<string>[];
  public propertySourceSystemId: LabelValue<string>[];
  public propertyLocation: LabelValue<string>[];
  public propertyFunction: LabelValue<string>[];
  public propertyAttributeName: LabelValue<string>[];
  public propertyAttributeDdl: LabelValue<string>[];
  public groundEquipmentTypes: LabelValue<string>[];
  public warehouseTypes: LabelValue<string>[];

  public functionalLocation: string | undefined;
  public location: string | undefined;
  public sourceSystemId: string | undefined;
  public sourceSystemReference: string | undefined;
  public itemNumber: string | undefined;
  public attributesMap: Map<string, string>;

  public showDialogOwner: boolean;
  public showDialogOperator: boolean;
  public dialogTableDataOwner: DialogTableData<BidoCustomerDTO>;
  public dialogTableDataOperator: DialogTableData<BidoCustomerDTO>;

  public attributeName: string | undefined;
  public attributeInput: string | undefined;
  public attributeStartDate: Date;
  public attributeEndDate: Date;
  public attributeBooleanValue: boolean;
  public attributeDdl: string | undefined;
  public asset: string;
  public allBidoAttributes: BidoAttributeDTO[];
  public selectedBidoAttributes: BidoAttributeDTO | undefined;
  public isDdl: boolean;
  public isDate: boolean;
  public isInput: boolean;
  public isBoolean: boolean;
  public showAdvancedCriteria: boolean;
  public displayFullScreen: boolean;
  public isLoading: boolean;
  public aircraftData: TableAirCraftRow[];
  public engineData: TableEngineRow[];
  public equipmentData: TableEquipmentRow[];
  public toolData: TableToolRow[];
  public selectedWarehouse: string;
  public withMP: boolean;
  public withTopAsset: boolean;
  public topAsset: BidoEquipmentDTO | undefined;
  public aircraftList: LabelValue<BidoEquipmentDTO>[];
  public filteredAircraftList: LabelValue<BidoEquipmentDTO>[];
  public aircraftStatusList: LabelValue<string>[];

  public siteList: SelectItem[];
  public partnerList: SearchResultsDTO<BidoCustomerDTO>;
  public sendToRepairPopupVisible: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly assetSearchService: AssetSearchService,
    private readonly davAssetSearchService: DavAssetSearchService,
    private readonly confirmationService: ConfirmationService,
    public translateService: TranslateService,
    private readonly exportService: ExportService,
    private readonly dateService: DateService,
    private readonly propertiesService: PropertiesService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.sendToRepairPopupVisible = false;
    this.resultsTable = { list: [], moreResults: false };
    this.searchObject = {
      bidoEquipmentAttributeList: [],
      equipmentFunction: undefined
    };
    this.searchData = {};
    this.selectedEquipments = [];
    this.selectedEngine = [];
    this.selectedAircraft = [];
    this.selectedTool = [];
    this.exportMethods = [];
    this.showAdvancedCriteria = false;
    this.isNavigationOverlayVisible = false;

    this.asset = '';
    this.getBidoAttributes();

    this.siteList = [];
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.attributesMap = new Map<string, string>();
    this.propertyVariant = [];
    this.propertySourceSystemId = [];
    this.propertyOperationalStatus = [];
    this.propertyLocation = [];
    this.propertyFunction = [];
    this.propertyAttributeName = [];
    this.propertyAttributeDdl = [];
    this.familyVariant = undefined;
    this.allBidoAttributes = [];
    this.isSearchWithCounters = false;
    this.displayFullScreen = false;
    this.bidoDate = undefined;
    this.remainingTable = [];
    this.withMP = false;
    this.withTopAsset = false;
    this.topAsset = undefined;

    this.isDate = false;
    this.isDdl = false;
    this.isInput = false;
    this.isBoolean = false;
    this.selectedBidoAttributes = undefined;
    this.location = undefined;
    this.engineData = [];
    this.toolData = [];
    this.equipmentData = [];
    this.aircraftData = [];

    this.resultsTableCols = [
      { field: 'sn', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'fatherEquipment', alignment: 'left' }
    ];
    this.resultsTableColsWithAircraft = [
      { field: 'sn', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'aircraft', alignment: 'left' },
      { field: 'aircraftStatus', alignment: 'left' }
    ];
    this.resultsTableColsExpanded1 = [
      { field: 'eisDate', alignment: 'left', width: '25%' },
      { field: 'functionalLocation', alignment: 'left', width: '25%' },
      { field: 'ownerCustomerCode', alignment: 'left', width: '25%' },
      { field: 'equipmentCode', alignment: 'left', width: '25%' }
    ];
    this.resultsTableColsWithAircraftExpanded1 = [
      { field: 'eisDate', alignment: 'left', width: '20%' },
      { field: 'fatherEquipment', alignment: 'left', width: '20%' },
      { field: 'functionalLocation', alignment: 'left', width: '20%' },
      { field: 'ownerCustomerCode', alignment: 'left', width: '20%' },
      { field: 'equipmentCode', alignment: 'left', width: '20%' }
    ];
    this.resultsTableColsExpanded2 = [
      { field: 'operatorCustomerCode', alignment: 'left', width: '20%' },
      { field: 'location', alignment: 'left', width: '20%' },
      { field: 'itemNumber', alignment: 'left', width: '20%' },
      { field: 'functionCode', alignment: 'left', width: '20%' },
      { field: 'lifeRestriction', alignment: 'center', width: '20%' }
    ];

    this.resultsTableColsWithMPCodeExpanded2 = [
      { field: 'operatorCustomerCode', alignment: 'left', width: '16%' },
      { field: 'location', alignment: 'left', width: '16%' },
      { field: 'itemNumber', alignment: 'left', width: '16%' },
      { field: 'functionCode', alignment: 'left', width: '16%' },
      { field: 'lifeRestriction', alignment: 'center', width: '16%' },
      { field: 'maintenanceProgramm', alignment: 'center', width: '20%' }
    ];

    this.resultsTableColsWithCounters = [
      { field: 'sn', alignment: 'left' },
      { field: 'standardTimeCounterCode', alignment: 'left' },
      { field: 'standardCycleCounterCode', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'fatherEquipment', alignment: 'left', width: '20%' }
    ];

    this.resultsTableColsWithCountersAndAircraft = [
      { field: 'sn', alignment: 'left' },
      { field: 'standardTimeCounterCode', alignment: 'left' },
      { field: 'standardCycleCounterCode', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'aircraft', alignment: 'left' },
      { field: 'aircraftStatus', alignment: 'left' }
    ];
    this.findBidoEquipmentsBySearchCriteriaInput = {};
    this.isLoading = false;

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.loadDropDownLists();
    });
  }

  public getComponentName(): string {
    return 'AssetSearchComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    this.loadDropDownLists();
    this.loadStatusList();
  }

  private loadStatusList() {
    this.propertiesService.getValue(GenericPropertyConstants.AIRCRAFT_STATUS_MAP).subscribe((results) => {
      this.aircraftStatusList = results;
    });
  }

  public closeDialog(): void {
    this.displayFullScreen = false;
  }

  public getCols(): TableColumn[] {
    if (this.isSearchWithCounters) {
      if (this.withTopAsset) {
        return this.resultsTableColsWithCountersAndAircraft;
      } else {
        return this.resultsTableColsWithCounters;
      }
    } else {
      if (this.withTopAsset) {
        return this.resultsTableColsWithAircraft;
      } else {
        return this.resultsTableCols;
      }
    }
  }
  public deleteSelectedEquipments(): void {
    const partialMessageKey =
      this.selectedEquipments.length > 1 ? 'confirmDeleteSelectedEquipments' : 'confirmDeleteSelectedEquipment';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const equipmentsId: BidoEquipmentDTOId[] = [];
        this.selectedEquipments.forEach((equipments) => {
          if (!!equipments && !!equipments.equipmentCode) {
            const equipmentId: BidoEquipmentDTOId = {
              equipmentCode: equipments.equipmentCode
            };
            equipmentsId.push(equipmentId);
          }
        });
        this.assetSearchService.removeBidoEquipment(equipmentsId).subscribe(
          () => {
            this.searchWithoutCounters();
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDesc);
          }
        );
        this.selectedEquipments = [];
      }
    });
  }

  public deleteSelectedTool(): void {
    const partialMessageKey = this.selectedTool.length > 1 ? 'confirmDeleteSelectedTools' : 'confirmDeleteSelectedTool';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const equipmentsId: BidoEquipmentDTOId[] = [];
        this.selectedTool.forEach((equipments) => {
          if (!!equipments && !!equipments.equipmentCode) {
            const equipmentId: BidoEquipmentDTOId = {
              equipmentCode: equipments.equipmentCode
            };
            equipmentsId.push(equipmentId);
          }
        });
        this.assetSearchService.removeBidoEquipment(equipmentsId).subscribe(
          () => {
            this.searchWithoutCounters();
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDesc);
          }
        );
        this.selectedEquipments = [];
      }
    });
  }

  public deleteSelectedEngine(): void {
    const partialMessageKey =
      this.selectedEngine.length > 1 ? 'confirmDeleteSelectedEngines' : 'confirmDeleteSelectedEngines';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const equipmentsId: BidoEquipmentDTOId[] = [];
        this.selectedEngine.forEach((equipments) => {
          if (!!equipments && !!equipments.equipmentCode) {
            const equipmentId: BidoEquipmentDTOId = {
              equipmentCode: equipments.equipmentCode
            };
            equipmentsId.push(equipmentId);
          }
        });
        this.assetSearchService.removeBidoEquipment(equipmentsId).subscribe(
          () => {
            this.searchWithoutCounters();
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
          },
          (err) => {
            // tslint:disable-next-line: no-unsafe-any
            this.messageService.showErrorMessage(err.error.errorDesc);
          }
        );
        this.selectedEngine = [];
      }
    });
  }
  public deleteSelectedAircraft(): void {
    const partialMessageKey =
      this.selectedAircraft.length > 1 ? 'confirmDeleteSelectedAircrafts' : 'confirmDeleteSelectedAircraft';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const equipmentsId: BidoEquipmentDTOId[] = [];
        this.selectedAircraft.forEach((equipments) => {
          if (!!equipments && !!equipments.equipmentCode) {
            const equipmentId: BidoEquipmentDTOId = {
              equipmentCode: equipments.equipmentCode
            };
            equipmentsId.push(equipmentId);
          }
        });
        this.assetSearchService.removeBidoEquipment(equipmentsId).subscribe(
          () => {
            this.searchWithoutCounters();
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
          },
          (err) => {
            // tslint:disable-next-line: no-unsafe-any
            this.messageService.showErrorMessage(err.error.errorDesc);
          }
        );
        this.selectedAircraft = [];
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = {
      bidoEquipmentAttributeList: [],
      equipmentFunction: undefined
    };
    this.itemNumber = undefined;
    this.location = undefined;
    this.sourceSystemId = undefined;
    this.sourceSystemReference = undefined;
    this.attributeName = undefined;
    this.attributeBooleanValue = false;
    this.attributeDdl = undefined;
    this.attributeInput = undefined;
    this.functionalLocation = undefined;
    this.isInput = false;
    this.isBoolean = false;
    this.isDate = false;
    this.isDdl = false;
    this.isSearchWithCounters = false;
    this.withMP = false;
    this.withTopAsset = false;
    this.topAsset = undefined;
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: SearchData | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }

    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchData = criteria || {};
      this.searchObject = this.searchData.searchObject || {};
      this.itemNumber = this.searchData.itemNumber;
      this.location = this.searchData.location;
      this.sourceSystemId = this.searchData.sourceSystemId;
      this.sourceSystemReference = this.searchData.sourceSystemReference;
      this.attributeName = this.searchData.attributeName;
      this.attributeBooleanValue = this.searchData.attributeBooleanValue || false;
      this.attributeDdl = this.searchData.attributeDdl;
      this.attributeInput = this.searchData.attributeInput;
      this.functionalLocation = this.searchData.functionalLocation;
      this.isBoolean = this.searchData.isBoolean || false;
      this.isDate = this.searchData.isDate || false;
      this.isSearchWithCounters = this.searchData.isSearchWithCounters || false;
      this.withMP = this.searchData.isWithMP || false;
      this.withTopAsset = this.searchData.isWithTopAsset || false;
      this.topAsset = this.searchData.topAsset;
      this.search(this.isSearchWithCounters);
    } else {
      this.componentData.objectId = undefined;
    }
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: SearchData = {
      searchObject: this.searchObject,
      itemNumber: this.itemNumber,
      location: this.location,
      sourceSystemId: this.sourceSystemId,
      sourceSystemReference: this.sourceSystemReference,
      attributeName: this.attributeName,
      attributeBooleanValue: this.attributeBooleanValue,
      attributeDdl: this.attributeDdl,
      attributeInput: this.attributeInput,
      functionalLocation: this.functionalLocation,
      isInput: this.isInput,
      isBoolean: this.isBoolean,
      isDate: this.isDate,
      isDdl: this.isDdl,
      isSearchWithCounters: this.isSearchWithCounters,
      isWithMP: this.withMP,
      isWithTopAsset: this.withTopAsset,
      topAsset: this.topAsset
    };
    this.criteriaToSave = criteriaToSave;
  }

  public toggleRowDetailsVisibilityEquipment(rowData: TableEquipmentRow) {
    this.remainingTable = [];
    const equipment = this.equipmentData.find((fl) => fl.equipmentCode === rowData.equipmentCode);
    this.remainingTable.push(equipment);
  }

  public toggleRowDetailsVisibilityTool(rowData: TableToolRow) {
    this.remainingTable = [];
    const equipment = this.toolData.find((fl) => fl.equipmentCode === rowData.equipmentCode);
    this.remainingTable.push(equipment);
  }

  public toggleRowDetailsVisibilityEngine(rowData: TableEngineRow) {
    this.remainingTable = [];
    const engine = this.engineData.find((fl) => fl.equipmentCode === rowData.equipmentCode);
    this.remainingTable.push(engine);
  }

  public toggleRowDetailsVisibilityAircraft(rowData: TableAirCraftRow) {
    this.remainingTable = [];
    const aircraft = this.aircraftData.find((fl) => fl.equipmentCode === rowData.equipmentCode);
    this.remainingTable.push(aircraft);
  }

  public searchWithoutCounters() {
    this.selectedEquipments = [];
    this.selectedAircraft = [];
    this.selectedTool = [];
    this.selectedEngine = [];
    this.search(this.isSearchWithCounters);
  }

  public search(withCounters: boolean): void {
    this.resultsTable.list = [];
    this.searchObject.bidoEquipmentAttributeList = [];
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.attributesMap = new Map<string, string>();
    if (!!this.location) {
      this.attributesMap.set(BidoPreferenceConstants.ASSET_LOCATION, this.location);
    }
    if (!!this.sourceSystemId) {
      this.attributesMap.set(BidoPreferenceConstants.EQUIPMENT_SOURCE_SYSTEM_ID, this.sourceSystemId);
    }
    if (!!this.sourceSystemReference) {
      this.attributesMap.set(BidoPreferenceConstants.EQUIPMENT_SOURCE_SYSTEM_REFERENCE, this.sourceSystemReference);
    }
    if (!!this.itemNumber) {
      this.attributesMap.set(BidoPreferenceConstants.EQUIPMENT_ITEM_NUMBER, this.itemNumber);
    }

    const attributesConvMap = {};
    this.attributesMap.forEach((value: string, key: string) => {
      attributesConvMap[key] = value;
    });
    if (!!this.searchObject.bidoEquipmentAttributeList && this.attributeName) {
      const object: BidoEquipmentAttributeDTO = {
        attributeId: this.attributeName,
        attributeValue: this.setAttributeValue()
      };
      this.searchObject.bidoEquipmentAttributeList.push(object);
    }

    if (!this.isTool() && !this.isEngine() && !this.isAircraft()) {
      this.equipmentData = [];
      this.searchObject.equipmentFunction = !!this.searchObject.equipmentFunction
        ? this.searchObject.equipmentFunction
        : '';
      this.findBidoEquipmentsBySearchCriteriaInput = {
        bidoEquipmentDTO: this.searchObject,
        functionalLocationCode: this.functionalLocation,
        attributes: attributesConvMap,
        withCounters,
        assestFunction: '',
        attributeEnddate: this.isDate ? this.attributeEndDate : undefined,
        attributeStartDate: this.isDate ? this.attributeStartDate : undefined,
        withMP: this.withMP,
        withTopAsset: this.withTopAsset,
        topAssetCode: !!this.topAsset ? this.topAsset.equipmentCode : undefined
      };
      this.assetSearchService
        .findBidoEquipmentsDTOBySearchCriteria(this.findBidoEquipmentsBySearchCriteriaInput)
        .subscribe(
          (results) => {
            if (results) {
              this.isLoading = false;
              this.resultsTable = results;
              this.resultsTable.list.forEach((data) => {
                const keyStatus = data.operationalStatus;
                if (!!data.equipmentFunction) {
                  LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                    data,
                    'equipmentFunction',
                    this.propertyFunction
                  );
                }
                if (!!data.operationalStatus) {
                  LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                    data,
                    'operationalStatus',
                    this.propertyOperationalStatus
                  );
                }
                const objRow: TableEquipmentRow = {
                  sn: data.sn,
                  standardTimeCounterCode: data.standardTimeCounterCode,
                  standardCycleCounterCode: data.standardCycleCounterCode,
                  pnCode: data.pnCode,
                  equipmentDesignation: data.equipmentDesignation,
                  familyVariantCode: data.familyVariantCode,
                  equipmentFunction: data.equipmentFunction,
                  operationalStatus: data.operationalStatus,
                  statusKey: keyStatus,
                  equipmentCode: data.equipmentCode,
                  eisDate: this.dateService.dateToString(data.eisDate),
                  fatherEquipment: BidoEquipmentUtils.toString(data.fatherEquipment),
                  aircraft: BidoEquipmentUtils.toString(data.topEquipment),
                  aircraftStatus: data.topEquipment
                    ? this._formatSelectOption.transform(data.topEquipment.operationalStatus, this.aircraftStatusList)
                    : '',
                  functionalLocation: data.functionalLocation,
                  ownerCustomerCode: data.ownerCustomerCode,
                  operatorCustomerCode: data.operatorCustomerCode,
                  location: data.location,
                  itemNumber: data.itemNumber,
                  functionCode: data.functionCode,
                  maintenanceProgramm: data.mpCode,
                  _expand: false,
                  statusState: data.statusState
                };
                this.equipmentData.push(objRow);
              });
            }
          },
          () => {
            this.messageService.showSuccessMessage('global.errorOnGetResults');
          }
        );
      this.selectedEquipments = [];
    }
    if (this.isTool() && !this.isEngine() && !this.isAircraft()) {
      this.toolData = [];
      this.searchObject.equipmentFunction = !!this.searchObject.equipmentFunction
        ? this.searchObject.equipmentFunction
        : undefined;
      this.findBidoEquipmentsBySearchCriteriaInput = {
        bidoEquipmentDTO: this.searchObject,
        functionalLocationCode: this.functionalLocation,
        attributes: attributesConvMap,
        withCounters,
        assestFunction: !!this.searchObject.equipmentFunction
          ? this.searchObject.equipmentFunction
          : AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY,
        groundEquipment: true,
        warehouse: this.selectedWarehouse,
        withMP: this.withMP,
        withTopAsset: this.withTopAsset,
        topAssetCode: !!this.topAsset ? this.topAsset.equipmentCode : undefined
      };
      this.assetSearchService
        .findBidoEquipmentsDTOBySearchCriteria(this.findBidoEquipmentsBySearchCriteriaInput)
        .subscribe(
          (results) => {
            if (results) {
              this.isLoading = false;
              results.list.forEach((element) => {
                if (!!element.equipmentFunction) {
                  LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                    element,
                    'equipmentFunction',
                    this.groundEquipmentTypes
                  );
                }
                if (!!element.operationalStatus) {
                  LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                    element,
                    'operationalStatus',
                    this.propertyOperationalStatus
                  );
                }

                if (!!element.warehouseId) {
                  LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(element, 'warehouseId', this.warehouseTypes);
                }
              });
              this.resultsTable = results;
              this.resultsTable.list.forEach((data) => {
                const objRow: TableToolRow = {
                  sn: data.sn,
                  pnCode: data.pnCode,
                  equipmentDesignation: data.equipmentDesignation,
                  familyVariantCode: data.familyVariantCode,
                  operationalStatus: data.operationalStatus,
                  equipmentCode: data.equipmentCode,
                  eisDate: this.dateService.dateToString(data.eisDate),
                  equipmentType: data.equipmentFunction,
                  warehouse: data.warehouseId,
                  fatherEquipment: BidoEquipmentUtils.toString(data.fatherEquipment),
                  maintenanceProgramm: data.mpCode,
                  _expand: false,
                  statusState: data.statusState
                };
                this.toolData.push(objRow);
              });
            }
          },
          () => {
            this.messageService.showSuccessMessage('global.errorOnGetResults');
          }
        );
      this.selectedTool = [];
    }
    if (this.isEngine() && !this.isAircraft() && !this.isTool()) {
      this.engineData = [];
      this.findBidoEquipmentsBySearchCriteriaInput = {
        bidoEquipmentDTO: this.searchObject,
        functionalLocationCode: this.functionalLocation,
        attributes: attributesConvMap,
        withCounters,
        assestFunction: AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY,
        attributeEnddate: this.isDate ? this.attributeEndDate : undefined,
        attributeStartDate: this.isDate ? this.attributeStartDate : undefined,
        withMP: this.withMP,
        withTopAsset: this.withTopAsset,
        topAssetCode: !!this.topAsset ? this.topAsset.equipmentCode : undefined
      };
      let ws;
      if (this.sessionService.isSpecificDassault) {
        ws = this.davAssetSearchService.findBidoEquipmentsDTOBySearchCriteria(
          this.findBidoEquipmentsBySearchCriteriaInput
        );
      } else {
        ws = this.assetSearchService.findBidoEquipmentsDTOBySearchCriteria(
          this.findBidoEquipmentsBySearchCriteriaInput
        );
      }
      ws.subscribe(
        (results) => {
          if (results) {
            this.isLoading = false;
            results.list.forEach((element) => {
              if (!!element.equipmentFunction) {
                LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                  element,
                  'equipmentFunction',
                  this.propertyFunction
                );
              }
              if (!!element.operationalStatus) {
                LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                  element,
                  'operationalStatus',
                  this.propertyOperationalStatus
                );
              }
            });
            this.resultsTable = results;
            this.resultsTable.list.forEach((data) => {
              const objRow: TableEngineRow = {
                sn: data.sn,
                standardTimeCounterCode: data.standardTimeCounterCode,
                standardCycleCounterCode: data.standardCycleCounterCode,
                pnCode: data.pnCode,
                equipmentDesignation: data.equipmentDesignation,
                familyVariantCode: data.familyVariantCode,
                eisDate: this.dateService.dateToString(data.eisDate),
                operationalStatus: data.operationalStatus,
                equipmentCode: data.equipmentCode,
                fatherEquipment: BidoEquipmentUtils.toString(data.fatherEquipment),
                aircraft: BidoEquipmentUtils.toString(data.topEquipment),
                aircraftStatus: data.topEquipment
                  ? this._formatSelectOption.transform(data.topEquipment.operationalStatus, this.aircraftStatusList)
                  : '',
                maintenanceProgramm: data.mpCode,
                functionalLocation: data.functionalLocation,
                ownerCustomerCode: data.ownerCustomerCode,
                operatorCustomerCode: data.operatorCustomerCode,
                location: data.location,
                itemNumber: data.itemNumber,
                functionCode: data.functionCode,
                davEdmsError: data.davEdmsError,
                _expand: false,
                statusState: data.statusState
              };
              this.engineData.push(objRow);
            });
          }
        },
        () => {
          this.messageService.showSuccessMessage('global.errorOnGetResults');
        }
      );
      this.selectedEngine = [];
    }
    if (this.isAircraft() && !this.isEngine() && !this.isTool()) {
      this.aircraftData = [];
      this.findBidoEquipmentsBySearchCriteriaInput = {
        bidoEquipmentDTO: this.searchObject,
        functionalLocationCode: this.functionalLocation,
        attributes: attributesConvMap,
        withCounters,
        assestFunction: AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY,
        attributeEnddate: this.isDate ? this.attributeEndDate : undefined,
        attributeStartDate: this.isDate ? this.attributeStartDate : undefined,
        withMP: this.withMP,
        withTopAsset: false
      };
      this.assetSearchService
        .findBidoEquipmentsDTOBySearchCriteria(this.findBidoEquipmentsBySearchCriteriaInput)
        .subscribe(
          (results) => {
            if (results) {
              this.isLoading = false;
              results.list.forEach((element) => {
                if (!!element.equipmentFunction) {
                  LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                    element,
                    'equipmentFunction',
                    this.propertyFunction
                  );
                }
                if (!!element.operationalStatus) {
                  LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
                    element,
                    'operationalStatus',
                    this.propertyOperationalStatus
                  );
                }
              });
              this.resultsTable = results;
              this.resultsTable.list.forEach((data) => {
                const objRow: TableAirCraftRow = {
                  sn: data.sn,
                  standardTimeCounterCode: data.standardTimeCounterCode,
                  standardCycleCounterCode: data.standardCycleCounterCode,
                  registration: data.registration,
                  equipmentDesignation: data.equipmentDesignation,
                  familyVariantCode: data.familyVariantCode,
                  eisDate: this.dateService.dateToString(data.eisDate),
                  operationalStatus: data.operationalStatus,
                  equipmentCode: data.equipmentCode,
                  functionalLocation: data.functionalLocation,
                  ownerCustomerCode: data.ownerCustomerCode,
                  operatorCustomerCode: data.operatorCustomerCode,
                  location: data.location,
                  maintenanceProgramm: data.mpCode,
                  _expand: false,
                  statusState: data.statusState
                };
                this.aircraftData.push(objRow);
              });
              const maxLength = 2000;
              if (results.list.length >= maxLength) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningMessage'));
              }
            }
          },
          () => {
            this.messageService.showSuccessMessage('global.errorOnGetResults');
          }
        );
      this.selectedAircraft = [];
    }
  }

  public setAttributeValue(): string {
    let value = '';
    if (this.isBoolean) {
      value = this.attributeBooleanValue.toString();
    }
    if (this.isInput) {
      if (!!this.attributeInput) {
        value = this.attributeInput;
      }
    }
    if (this.isDdl) {
      if (!!this.attributeDdl) {
        value = this.attributeDdl;
      }
    }
    if (this.isDate) {
      value = 'ATTRIBUTE_DATE';
      this.findBidoEquipmentsBySearchCriteriaInput.attributeEnddate = this.attributeEndDate;
      this.findBidoEquipmentsBySearchCriteriaInput.attributeStartDate = this.attributeStartDate;
    }

    return value;
  }

  private loadDropDownLists(): void {
    this.assetSearchService.findAircraftListLabelValue().subscribe(
      (results) => {
        this.aircraftList = results;
        this.filteredAircraftList = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetAircraftList'));
      }
    );

    // Site list
    this.assetSearchService.findAllBireSite().subscribe({
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

    // Partner list
    this.assetSearchService.findBidoCustomersBySearchCriteria({}).subscribe(
      (results) => {
        if (results) {
          this.partnerList = results;
        }
      },
      () => {
        // TODO
      }
    );

    // Equipment case
    if (!this.isEngine() && !this.isTool() && !this.isAircraft()) {
      const familyVariantInput = ' ';
      this.assetSearchService.getFamilyVariant(familyVariantInput).subscribe(
        (results) => {
          this.propertyVariant = results;
        },
        () => {
          this.messageService.showSuccessMessage('global.errorOnGetResults');
        }
      );
      this.assetSearchService.getOperationalStatusMap(familyVariantInput).subscribe(
        (results) => {
          this.propertyOperationalStatus = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
        }
      );
    }
    // Tool / Ground Equipment Case case
    if (!this.isEngine() && this.isTool() && !this.isAircraft()) {
      const familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_GROUND_EQUIPMENT_KEY;
      this.assetSearchService.getFamilyVariant(familyVariantInput).subscribe(
        (results) => {
          this.propertyVariant = results;
        },
        () => {
          this.messageService.showSuccessMessage('global.errorOnGetResults');
        }
      );
      this.propertiesService.getValue(GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP).subscribe(
        (results) => {
          this.propertyOperationalStatus = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
        }
      );
      this.assetSearchService.fetchGroundEquipmentFunctionList().subscribe(
        (results) => {
          this.groundEquipmentTypes = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetGroundEquipmentTypes'));
        }
      );

      this.assetSearchService.findAll().subscribe(
        (results) => {
          this.warehouseTypes = [];
          if (!!results) {
            results.forEach((res) => {
              this.warehouseTypes.push({
                label: `${res.whCode} - ${res.whName}`,
                value: !!res.wareHouseId ? res.wareHouseId.toString() : ''
              });
            });
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetWarehouseList'));
        }
      );

      this.resultsTableCols.push(
        { field: 'equipmentType', alignment: 'left' },
        { field: 'warehouse', alignment: 'left' }
      );
    }
    // Engine Case
    if (this.isEngine() && !this.isTool() && !this.isAircraft()) {
      const familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;
      this.assetSearchService.getFamilyVariant(familyVariantInput).subscribe(
        (results) => {
          this.propertyVariant = results;
        },
        () => {
          this.messageService.showSuccessMessage('global.errorOnGetResults');
        }
      );
      this.assetSearchService.getOperationalStatusMap(familyVariantInput).subscribe(
        (results) => {
          this.propertyOperationalStatus = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
        }
      );
    }
    // Aircaft case
    if (this.isAircraft() && !this.isTool() && !this.isEngine()) {
      const familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
      this.assetSearchService.getFamilyVariant(familyVariantInput).subscribe(
        (results) => {
          this.propertyVariant = results;
        },
        () => {
          this.messageService.showSuccessMessage('global.errorOnGetResults');
        }
      );
      this.assetSearchService.getOperationalStatusMap(familyVariantInput).subscribe(
        (results) => {
          this.propertyOperationalStatus = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
        }
      );
    }

    const bireId: BidoAttributeDTOId = {
      attributeId: BidoAttributeConstants.ASSET_SYSTEM_SOURCE_ID.toString()
    };
    this.assetSearchService.getAssetSourceSystemIdList(bireId).subscribe(
      (results) => {
        this.propertySourceSystemId = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
      }
    );
    this.assetSearchService.getEquipmentLocationList().subscribe(
      (results) => {
        const bidoAttributes: AttributeValueDTO[] = [];
        bidoAttributes.push(...results);
        const list: LabelValue<string>[] = [];
        bidoAttributes.forEach((element) => {
          if (!!element && !!element.textEn) {
            const attribute: LabelValue<string> = {
              label: element.textEn,
              value: element.textEn
            };
            list.push(attribute);
          }
        });
        this.propertyLocation.push(...list);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetLocation'));
      }
    );

    this.assetSearchService.getEquipmentFunctionList().subscribe(
      (results) => {
        let valueLabel: LabelValue<string>[] = [];
        valueLabel = results;
        this.propertyFunction = valueLabel.filter((el) => {
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

  public getBidoAttributes() {
    if (this.isEngine()) {
      this.assetSearchService.findBidoAttributesByAttributeCategory('6-eng').subscribe(
        (results) => {
          const bidoAttributes: BidoAttributeDTO[] = [];
          bidoAttributes.push(...results);
          this.allBidoAttributes.push(...results);
          const list: LabelValue<string>[] = [];
          bidoAttributes.forEach((element) => {
            if (!!element && !!element.attributeNameEn) {
              const attribute: LabelValue<string> = {
                label: element.attributeNameEn,
                value: element.attributeId
              };
              list.push(attribute);
            }
          });
          this.propertyAttributeName.push(...list);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetAttributes'));
        }
      );
    }
    if (!this.isEngine() && !this.isAircraft()) {
      this.assetSearchService.findBidoAttributesByAttributeCategory('7-equ').subscribe(
        (results) => {
          const bidoAttributes: BidoAttributeDTO[] = [];
          bidoAttributes.push(...results);
          this.allBidoAttributes.push(...results);
          const list: LabelValue<string>[] = [];
          bidoAttributes.forEach((element) => {
            if (!!element && !!element.attributeNameEn) {
              const attribute: LabelValue<string> = {
                label: element.attributeNameEn,
                value: element.attributeId
              };
              list.push(attribute);
            }
          });
          this.propertyAttributeName.push(...list);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetAttributes'));
        }
      );
    }
    if (this.isAircraft() && !this.isEngine()) {
      this.assetSearchService.findBidoAttributesByAttributeCategory('5-air').subscribe(
        (results) => {
          const bidoAttributes: BidoAttributeDTO[] = [];
          bidoAttributes.push(...results);
          this.allBidoAttributes.push(...results);
          const list: LabelValue<string>[] = [];
          bidoAttributes.forEach((element) => {
            if (!!element && !!element.attributeNameEn) {
              const attribute: LabelValue<string> = {
                label: element.attributeNameEn,
                value: element.attributeId
              };
              list.push(attribute);
            }
          });
          this.propertyAttributeName.push(...list);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetAttributes'));
        }
      );
    }
  }

  public changeFamilyVariant() {
    if (!!this.aircraftList) {
      this.filteredAircraftList = [];
      this.topAsset = undefined;
      this.aircraftList.forEach((element) => {
        if (!!this.searchObject.familyVariantCode) {
          if (this.searchObject.familyVariantCode === element.value.familyVariantCode) {
            this.filteredAircraftList.push(element);
          }
        } else {
          this.filteredAircraftList.push(element);
        }
      });
    }
  }

  public changeAttribute() {
    this.allBidoAttributes.forEach((attr) => {
      if (attr.attributeId === this.attributeName) {
        this.selectedBidoAttributes = attr;
      }
    });
    if (this.selectedBidoAttributes) {
      if (this.selectedBidoAttributes.attributeType === 'List') {
        const list: LabelValue<string>[] = [];
        if (!!this.selectedBidoAttributes.bidoAttributeValueDatas) {
          this.selectedBidoAttributes.bidoAttributeValueDatas.forEach((element) => {
            const attribute: LabelValue<string> = {
              label: element.textEn,
              value: element.textEn
            };
            list.push(attribute);
          });
          this.propertyAttributeDdl.push(...list);
        }
      }
      switch (this.selectedBidoAttributes.attributeType) {
        case 'Text':
          this.isInput = true;
          this.isDate = false;
          this.isDdl = false;
          this.isBoolean = false;
          break;
        case 'Date':
          this.isInput = false;
          this.isDate = true;
          this.isDdl = false;
          this.isBoolean = false;
          break;
        case 'List':
          this.isInput = false;
          this.isDate = false;
          this.isDdl = true;
          this.isBoolean = false;
          break;
        case 'Boolean':
          this.isInput = false;
          this.isDate = false;
          this.isDdl = false;
          this.isBoolean = true;
          break;
        default:
          this.isInput = true;
          this.isDate = false;
          this.isDdl = false;
          this.isBoolean = false;
          break;
      }
    } else {
      this.isInput = false;
      this.isDate = false;
      this.isDdl = false;
      this.isBoolean = false;
    }
  }

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
      tableRows: this.assetSearchService.findBidoCustomersBySearchCriteria(bire),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedOwner(selectedObject: BidoCustomerDTO) {
    if (selectedObject) {
      this.searchObject.ownerCustomerCode = selectedObject.customerCode;
    }
    this.showDialogOwner = false;
  }

  public searchOperator() {
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
      tableRows: this.assetSearchService.findBidoCustomersBySearchCriteria(bire),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedOperator(selectedObject: BidoCustomerDTO) {
    if (selectedObject) {
      this.searchObject.operatorCustomerCode = selectedObject.customerCode;
    }
    this.showDialogOwner = false;
  }

  public save() {
    // TODO
  }

  public exportTable(): void {
    if (!this.isEngine() && !this.isAircraft() && !this.isTool()) {
      const temp: TableEquipmentRow[] = [];
      this.resultsTable.list.forEach((data) => {
        const obj: TableEquipmentRow = {
          sn: data.sn,
          standardTimeCounterCode: data.standardTimeCounterCode,
          standardCycleCounterCode: data.standardCycleCounterCode,
          pnCode: data.pnCode,
          equipmentDesignation: data.equipmentDesignation,
          familyVariantCode: data.familyVariantCode,
          equipmentFunction: data.equipmentFunction,
          operationalStatus: data.operationalStatus,
          equipmentCode: data.equipmentCode,
          eisDate: this.dateService.dateToString(data.eisDate),
          fatherEquipment: BidoEquipmentUtils.toString(data.fatherEquipment),
          functionalLocation: data.functionalLocation,
          ownerCustomerCode: data.ownerCustomerCode,
          operatorCustomerCode: data.operatorCustomerCode,
          location: data.location,
          itemNumber: data.itemNumber,
          functionCode: data.functionCode
        };
        if (this.withTopAsset) {
          obj.aircraft = BidoEquipmentUtils.toString(data.topEquipment);
        }
        if (this.withMP) {
          obj.maintenanceProgramm = data.mpCode;
        }
        temp.push(obj);
      });
      this.exportService.toExcel(temp, this.getTableExportName(), this.componentData.componentId);
    }
    if (this.isEngine() && !this.isAircraft() && !this.isTool()) {
      const temp: TableEngineRow[] = [];
      this.resultsTable.list.forEach((data) => {
        const obj: TableEngineRow = {
          sn: data.sn,
          standardTimeCounterCode: data.standardTimeCounterCode,
          standardCycleCounterCode: data.standardCycleCounterCode,
          pnCode: data.pnCode,
          equipmentDesignation: data.equipmentDesignation,
          familyVariantCode: data.familyVariantCode,
          eisDate: this.dateService.dateToString(data.eisDate),
          operationalStatus: data.operationalStatus,
          equipmentCode: data.equipmentCode,
          fatherEquipment: BidoEquipmentUtils.toString(data.fatherEquipment),
          functionalLocation: data.functionalLocation,
          ownerCustomerCode: data.ownerCustomerCode,
          operatorCustomerCode: data.operatorCustomerCode,
          location: data.location,
          itemNumber: data.itemNumber,
          functionCode: data.functionCode
        };
        if (this.withTopAsset) {
          obj.aircraft = BidoEquipmentUtils.toString(data.topEquipment);
        }
        if (this.withMP) {
          obj.maintenanceProgramm = data.mpCode;
        }
        temp.push(obj);
      });
      this.exportService.toExcel(temp, this.getTableExportName(), this.componentData.componentId);
    }
    if (this.isAircraft() && !this.isEngine() && !this.isTool()) {
      const temp: TableAirCraftRow[] = [];
      this.resultsTable.list.forEach((data) => {
        const obj: TableAirCraftRow = {
          sn: data.sn,
          standardTimeCounterCode: data.standardTimeCounterCode,
          standardCycleCounterCode: data.standardCycleCounterCode,
          registration: data.registration,
          equipmentDesignation: data.equipmentDesignation,
          familyVariantCode: data.familyVariantCode,
          eisDate: this.dateService.dateToString(data.eisDate),
          operationalStatus: data.operationalStatus,
          equipmentCode: data.equipmentCode,
          functionalLocation: data.functionalLocation,
          ownerCustomerCode: data.ownerCustomerCode,
          operatorCustomerCode: data.operatorCustomerCode,
          location: data.location
        };
        if (this.withMP) {
          obj.maintenanceProgramm = data.mpCode;
        }
        temp.push(obj);
      });
      this.exportService.toExcel(temp, this.getTableExportName(), this.componentData.componentId);
    }
    if (!this.isAircraft() && !this.isEngine() && this.isTool()) {
      const temp: TableToolRow[] = [];
      this.resultsTable.list.forEach((data) => {
        const obj: TableToolRow = {
          sn: data.sn,
          pnCode: data.pnCode,
          familyVariantCode: data.familyVariantCode,
          equipmentDesignation: data.equipmentDesignation,
          operationalStatus: data.operationalStatus,
          eisDate: this.dateService.dateToString(data.eisDate),
          equipmentCode: data.equipmentCode,
          equipmentType: data.equipmentFunction,
          warehouse: data.warehouseId
        };
        if (this.withMP) {
          obj.maintenanceProgramm = data.mpCode;
        }
        temp.push(obj);
      });
      this.exportService.toExcel(temp, this.getTableExportName(), this.componentData.componentId);
    }
  }

  public removeSelectedEquipments(): void {
    const assetsToRemove: AssetRemovedInput = {
      assetCode: []
    };
    this.selectedEquipments.forEach((equipment) => {
      if (!!assetsToRemove && !!assetsToRemove.assetCode && equipment && equipment.equipmentCode) {
        assetsToRemove.assetCode.push(equipment.equipmentCode);
      }
    });
    this.openAssetsToBeRemoved(assetsToRemove, ComponentOpenMode.Read);
  }

  public installSelectedEquipments(): void {
    // const nonSpareEquipment: string[] = [];
    const assetsToInstall: AssetInstalledInput = {
      assetCode: []
    };
    this.selectedEquipments.forEach((equipment) => {
      if (!!assetsToInstall && !!assetsToInstall.assetCode && equipment && equipment.equipmentCode) {
        assetsToInstall.assetCode.push(equipment.equipmentCode);
      }
    });
    if (!!assetsToInstall && !!assetsToInstall.assetCode && assetsToInstall.assetCode.length > 0) {
      this.openAssetsToBeInstalled(assetsToInstall, ComponentOpenMode.Read);
    }
  }

  public openAssetsToBeRemoved(objectId: AssetRemovedInput | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.RemoveAssetComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'RemoveAssetComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.isNavigationOverlayVisible = false;
  }

  public openAssetsToBeInstalled(objectId: AssetInstalledInput | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.InstallAssetComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'InstallAssetComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.isNavigationOverlayVisible = false;
  }

  public showNavigationOverlay(): void {
    this.isNavigationOverlayVisible = true;
  }

  public hideNavigationOverlay(): void {
    this.isNavigationOverlayVisible = false;
  }

  public openAssetsToCustomizeMaintenancePlan(): void {
    this.selectedEquipments.forEach((equipment) => {
      const objectId: BidoEquipmentDTOId = {
        equipmentCode: equipment.equipmentCode
      };
      const labelKey = 'transaction.AssetMaintenancePlanComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'AssetMaintenancePlanComponent',
        objectId: this.serializationService.serialize(objectId),
        openMode: ComponentOpenMode.Read
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
      this.isNavigationOverlayVisible = false;
    });
  }

  public openSendToRepairPopup(): void {
    this.sendToRepairPopupVisible = true;
  }

  public onValidateSendToRepair(sendToRepairDTO: SendToRepairDTO): void {
    this.assetSearchService.validateSendToRepair(sendToRepairDTO).subscribe(() => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successSendToRepair'));
    });
  }

  // TODO operationalStatus get string 'Pending for maintenance' or 'En attente de maintenance' instead of AWPropertiesConstants.OPERATIONAL_STATUS_PENDING_FOR_MAINTENANCE_KEY
  public showSendToRepairButton(selection: { equipmentCode?: string; statusKey?: string }): boolean {
    return (
      !!selection &&
      !!selection.equipmentCode &&
      selection.statusKey === AWPropertiesConstants.OPERATIONAL_STATUS_PENDING_FOR_MAINTENANCE_KEY
    );
  }

  public showLockButton(selection: {
    equipmentCode?: string;
    equEquipmentCode?: string;
    statusState?: string;
  }): boolean {
    return (
      !!selection &&
      !!selection.equipmentCode &&
      !selection.equEquipmentCode &&
      selection.statusState !== AWPropertiesConstants.OBJECT_STATUS_LOCKED_KEY
    );
  }

  public showUnlockButton(selection: {
    equipmentCode?: string;
    equEquipmentCode?: string;
    statusState?: string;
  }): boolean {
    return (
      !!selection &&
      !!selection.equipmentCode &&
      !selection.equEquipmentCode &&
      selection.statusState === AWPropertiesConstants.OBJECT_STATUS_LOCKED_KEY
    );
  }

  public lock(equipment: { equipmentCode?: string; statusState?: string }): void {
    if (equipment.equipmentCode) {
      const partialMessageKey = 'lockFeature';
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.assetSearchService.lockTool(equipment.equipmentCode as string).subscribe(() => {
            this.assetSearchService
              .findBidoEquipment({ equipmentCode: equipment.equipmentCode })
              .subscribe((bidoEquipment) => {
                equipment.statusState = bidoEquipment.statusState;
              });
          });
        }
      });
    }
  }

  public unlock(equipment: { equipmentCode?: string; statusState?: string }): void {
    if (equipment.equipmentCode) {
      const partialMessageKey = 'unlockFeature';
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.assetSearchService.unlockTool(equipment.equipmentCode as string).subscribe(() => {
            this.assetSearchService
              .findBidoEquipment({ equipmentCode: equipment.equipmentCode })
              .subscribe((bidoEquipment) => {
                equipment.statusState = bidoEquipment.statusState;
              });
          });
        }
      });
    }
  }

  /**************************************************************************
   * Abstract methods
   *************************************************************************/

  public abstract isEngine(): boolean;

  public abstract isAircraft(): boolean;
  public abstract isTool(): boolean;

  protected abstract getTableExportName(): string;
}
