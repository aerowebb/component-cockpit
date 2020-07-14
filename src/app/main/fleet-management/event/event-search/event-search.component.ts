import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/components/common/selectitem';
import { forkJoin } from 'rxjs';

import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { SearchCriteriaConstants } from '../../../../shared/constants/search-criteria.constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SearchEventInputDTO } from '../../../../shared/types/api-input-types/fleet-management/search-event-input-dto.interface';
import { BidoNotificationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoFleetDTO } from '../../../../shared/types/api-types/bido-fleet-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoNotificationTypeDTO } from '../../../../shared/types/api-types/bido-notification-type-dto.interface';
import { BireEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-dto.interface';
import { EventCriteriaInputDTO } from '../../../../shared/types/api-types/event-criteria-input-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { EventService } from '../event.service';

enum SearchAsset {
  All = 1,
  Aircraft,
  Equipment,
  Engine,
  GroundEquipment
}

interface SearchData {
  searchObject?: EventCriteriaInputDTO;
  selectedSearchAsset?: SearchAsset;
  assetCode?: string;
  selectedFamilyVariant?: string;
  pnCode?: string;
  airRegistration?: string;
  snCode?: string;
  eventDate?: Date[];
  closureDate?: Date;
  isSearchWithCounters?: boolean;
  selectedSystemId?: string;
  systemReference?: string;
  rationalOperator?: number;
  rationalOperand?: number;
  isDeduced?: boolean;
  isNotDeduced?: boolean;
  defferedDefectsSelected?: boolean;
  criticalDefectsSelected?: boolean;
}

@Component({
  selector: 'aw-event-search',
  styleUrls: ['./event-search.component.scss'],
  templateUrl: './event-search.component.html'
})
export class EventSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly EVENT_TABLE_EXPORT_NAME: string = 'event-list';
  private static readonly FMD_HYPERLINK_CREATE_VALUE: string = 'Create FMD';

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public fmdHyperlinkCreateValue: string;
  public selectedAssetType: string;
  public searchObject: EventCriteriaInputDTO;
  public selectedFamilyVariant: string | undefined;
  public airRegistration: string | undefined;
  public snCode: string | undefined;
  public pnCode: string | undefined;
  public selectedFunction: string | undefined;
  public selectedStatus: string | undefined;
  public assetCode: string | undefined;
  public modelCode: string | undefined;
  public mpName: string | undefined;
  public mpRevision: string | undefined;
  public selectedLocation: string | undefined;
  public selectedWarehouse: string | undefined;
  public isDeduced: boolean;
  public isNotDeduced: boolean;
  public selectedSystemId: string | undefined;
  public systemReference: string | undefined;
  public defferedDefectsSelected: boolean;
  public criticalDefectsSelected: boolean;
  public equipmentDesignation: string | undefined;
  // tslint:disable-next-line:no-any
  public attributesMap: Map<any, any>;

  // Event
  public selectedCategory: string;
  public eventDate: Date[] | undefined;
  public closureDate: Date | undefined;
  public selectedEventStatus: string | undefined;
  public eventCode: string | undefined;
  public selectedEventType: string | undefined;

  public resultsTableDataSource: TableDataSource<BidoNotificationOutputDTO>;
  public selectedBusinessPartner: string | undefined;

  public searchAssetList: SelectItem[];
  public readonly searchAsset: typeof SearchAsset;
  public businessPartnerList: SelectItem[];
  public operationalStatusList: SelectItem[];
  public familyVariantList: SelectItem[];
  public fleetList: SelectItem[];
  public functionList: SelectItem[];
  public locationList: SelectItem[];
  public wareHouseList: SelectItem[];
  public eventCauseMap: SelectItem[];
  public categoryMap: SelectItem[];
  public statusMap: SelectItem[];
  public eventTypeMap: SelectItem[];
  public systemIdMap: SelectItem[];
  public fhMap: LabelValue<number>[];

  public showOperatorDialog: boolean;
  public showOwnerDialog: boolean;
  public showEvolutionDialog: boolean;
  public evolutionTableData: DialogTableData<BireEvolutionDTO>;

  public selectedSearchAsset: SearchAsset;

  public showAdvancedCriteria: boolean;
  public showEventAdvancedCriteria: boolean;
  public rationalOperator?: number;
  public rationalOperand?: number = 0;

  public isLoading: boolean = false;
  public isSearchWithCounters: boolean;

  public searchData: SearchData;
  public criteriaToSave: SearchData;
  public criteriaName: string | undefined;
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.EVENT_SEARCH_CRITERIA_ID;

  // FMD Search
  public showFMDSearchCriteria: boolean;
  public defectNameOptions: LabelValue<string>[];
  public defectLocationOptions: LabelValue<string>[];
  public dateOptions: LabelValue<string>[];
  public closeoutReasonOptions: LabelValue<string>[];
  public statusOptions: LabelValue<string>[];
  public fmdLogNumber?: string;
  public fmdContext?: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly eventService: EventService,
    public sessionService: SessionService,
    private readonly exportService: ExportService,
    private readonly translateService: TranslateService,
    private readonly propertiesService: PropertiesService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.searchAsset = SearchAsset;
    this.searchObject = {};
    this.searchAssetList = [];
    this.businessPartnerList = [];
    this.operationalStatusList = [];
    this.familyVariantList = [];
    this.fleetList = [];
    this.locationList = [];
    this.functionList = [];
    this.wareHouseList = [];
    this.eventCauseMap = [];
    this.categoryMap = [];
    this.statusMap = [];
    this.eventTypeMap = [];
    this.systemIdMap = [];
    this.fhMap = [];
    this.fmdHyperlinkCreateValue = EventSearchComponent.FMD_HYPERLINK_CREATE_VALUE;

    this.initEventTableCols();
    this.loadOperationalStatusList();

    this.loadBusinessPartnerList();
    this.loadFamilyVariantList();
    this.loadFleetList();
    this.loadFunctionList();
    this.loadLocationList();
    this.loadWareHouseList();
    this.initSearchObject();
    this.initDropdowns();
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_EVENT_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.searchData = {};
    this.setSearchAssetList();
    this.initEvolutionTableData();
    this.displayComponentContext('global.search', true);
  }

  private setSearchAssetList(): void {
    const allKey = 'global.all';
    const aircraftKey = 'global.aircraft';
    const engineKey = 'global.engine';
    const equipmentKey = 'global.equipment';
    const groundEquipmentKey = 'global.groundEquipment';
    this.translateService
      .get([allKey, aircraftKey, engineKey, equipmentKey, groundEquipmentKey])
      .subscribe((results) => {
        const allLabel = !!results ? results[allKey] : 'All';
        const aircraftLabel = !!results ? results[aircraftKey] : 'Aircraft';
        const engineLabel = !!results ? results[engineKey] : 'Engine';
        const equipmentLabel = !!results ? results[equipmentKey] : 'Equipment';
        const groundEquipmentLabel = !!results ? results[groundEquipmentKey] : 'Ground Equipment';
        this.searchAssetList = [
          { label: allLabel, value: SearchAsset.All },
          { label: aircraftLabel, value: SearchAsset.Aircraft },
          { label: engineLabel, value: SearchAsset.Engine },
          { label: equipmentLabel, value: SearchAsset.Equipment },
          { label: groundEquipmentLabel, value: SearchAsset.GroundEquipment }
        ];
        this.selectedSearchAsset = SearchAsset.All;
      });
  }

  /**
   * Fetch dropdown lists
   */
  private initDropdowns() {
    this.eventService.findNotificationDateOrderCriteria().subscribe((results) => {
      this.dateOptions = results;
      this.searchObject.fmdStartDateOrderCriteria = this.dateOptions[0].value;
      this.searchObject.fmdEndDateOrderCriteria = this.dateOptions[0].value;
    });
    const attribute: BidoAttributeDTOId = {
      attributeId: BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID.toString()
    };

    const eventMap = this.propertiesService.getValue('getEventCauseMap');
    const categoryMap = this.propertiesService.getValue('getEventCategoryMap');
    const status = this.eventService.getEventStatusValues();
    const systemId = this.eventService.getAssetSourceSystemIdList(attribute);
    const defectNameMap = this.propertiesService.getValue('getDefectNameMap');
    const defectLocationMap = this.propertiesService.getValue('getDefectLocationMap');
    const closeoutReasonMap = this.propertiesService.getValue('getFmdCloseoutReasonMap');
    const statusOps = this.propertiesService.getValue('getFmdStatusMap');

    forkJoin([
      eventMap,
      categoryMap,
      status,
      systemId,
      defectNameMap,
      defectLocationMap,
      closeoutReasonMap,
      statusOps
    ]).subscribe((results) => {
      this.eventCauseMap = results[0];
      this.categoryMap = results[1];
      this.statusMap = results[2];
      // tslint:disable-next-line:no-magic-numbers
      this.systemIdMap = results[3];
      // tslint:disable-next-line: no-magic-numbers
      this.defectNameOptions = results[4];
      // tslint:disable-next-line: no-magic-numbers
      this.defectLocationOptions = results[5];
      // tslint:disable-next-line: no-magic-numbers
      this.closeoutReasonOptions = results[6];
      // tslint:disable-next-line: no-magic-numbers
      this.statusOptions = results[7];
    });

    const fhMapObj = {
      1: '=',
      3: '<',
      4: '>',
      2: '<>'
    };

    const keys = Object.keys(fhMapObj);
    keys.forEach((val) => {
      this.fhMap.push({
        value: Number(val),
        label: fhMapObj[val]
      });
    });
  }

  /**
   * Get type map on basis of category
   */
  public getTypeMap() {
    this.eventTypeMap = [];
    this.searchObject.typeCode = undefined;

    if (!!this.searchObject && !!this.searchObject.notificationTypeCategoryCriteria) {
      // Event Type Map
      this.eventService
        .findAllBidoNotificationTypeByTypeCategory(this.searchObject.notificationTypeCategoryCriteria)
        .subscribe((res: BidoNotificationTypeDTO[]) => {
          res.forEach((dto) => {
            if (!!dto && !!dto.typeDescription && !!dto.typeCode) {
              this.eventTypeMap.push({
                label: dto.typeDescription,
                value: dto.typeCode
              });
            }
          });
        });
    }
  }

  public openOperatorDialog() {
    this.showOperatorDialog = true;
  }

  public openOwnerDialog() {
    this.showOwnerDialog = true;
  }

  /**
   * Delete selected event(s)
   */
  public deleteEvents(): void {
    const confirmMessageKey =
      this.resultsTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedEvents' : 'confirmDeleteSelectedEvent';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const eventIds: BidoNotificationDTOId[] = [];
        this.resultsTableDataSource.dataSelection.map((event) => {
          if (!!event && !!event.notificationCode) {
            const dto: BidoNotificationDTOId = {
              notificationCode: event.notificationCode
            };

            eventIds.push(dto);
          }
        });

        this.eventService.removeBidoNotification(eventIds).subscribe((msg: string) => {
          const successMessageKey =
            this.resultsTableDataSource.dataSelectionCount > 1 ? 'successOnDeleteEvents' : 'successOnDeleteEvent';
          if (!msg) {
            this.messageService.showSuccessMessage(this.getTranslateKey(successMessageKey));
          } else {
            this.messageService.showWarningMessage(msg);
          }
          this.resultsTableDataSource.deleteDataSelection();
          this.search();
        });
      }
    });
  }

  /**
   * Exports table
   */
  public exportTable(): void {
    const table: BidoNotificationOutputDTO[] = this.resultsTableDataSource.dataSrc.map((event) => {
      return {
        notificationCode: event.notificationCode,
        asset: event.asset,
        typeCode: event.typeCode,
        notificationSubject: event.notificationSubject,
        reportingPeriodStartDate: event.reportingPeriodStartDate,
        reportingDate: event.reportingDate,
        reportingPeriodEndDate: event.reportingPeriodEndDate,
        status: event.status
      };
    });

    this.exportService.toExcel(table, EventSearchComponent.EVENT_TABLE_EXPORT_NAME, this.componentData.componentId);
  }

  /**
   * Initilize table cols
   */
  private initEventTableCols(): void {
    this.resultsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'notificationCode', translateKey: this.getTranslateKey('notificationCode') },
        { field: 'asset', translateKey: this.getTranslateKey('asset') },
        { field: 'typeCode', translateKey: this.getTranslateKey('typeCode') },
        { field: 'notificationSubject', translateKey: this.getTranslateKey('notificationSubject') },
        { field: 'reportingPeriodStartDate', translateKey: this.getTranslateKey('reportingPeriodStartDate') },
        { field: 'reportingPeriodEndDate', translateKey: this.getTranslateKey('reportingPeriodEndDate') },
        { field: 'status', translateKey: this.getTranslateKey('status') }
      ],
      data: []
    });
  }

  public onChangeSearchAsset(): void {
    this.initSearchObject();
    this.resetAssetFields();
    this.loadFamilyVariantList();
    this.loadOperationalStatusList();
    this.loadWareHouseList();
  }

  /**
   * Init search Object
   */
  public initSearchObject() {
    this.criteriaName = undefined;
    this.selectedBusinessPartner = undefined;
    this.assetCode = undefined;
    this.selectedFamilyVariant = undefined;
    this.selectedLocation = undefined;
    this.selectedStatus = undefined;
    this.airRegistration = undefined;
    this.assetCode = undefined;
    this.snCode = undefined;
    this.pnCode = undefined;
    this.selectedFunction = undefined;
    this.modelCode = undefined;
    this.fmdLogNumber = undefined;
    this.fmdContext = undefined;
    this.equipmentDesignation = undefined;

    this.searchObject.notificationTypeCategoryCriteria = undefined;
    this.searchObject.typeCode = undefined;
    this.searchObject.notificationCode = undefined;
    this.searchObject.status = undefined;
    this.eventDate = undefined;
    this.closureDate = undefined;
    this.searchObject.evolutionNumberCriteria = undefined;
    this.searchObject.evolutionRevisionNumberCriteria = undefined;
    this.searchObject.evolutionTypeCriteria = undefined;
    this.searchObject.notNotificationCode = undefined;
    this.searchObject.cause = undefined;
    this.selectedSystemId = undefined;
    this.systemReference = undefined;
    this.searchObject.notificationSubject = undefined;
    this.searchObject.description = undefined;
    this.searchObject.notificationWithFmd = undefined;
    this.isDeduced = false;
    this.isNotDeduced = false;
    this.defferedDefectsSelected = false;
    this.criticalDefectsSelected = false;
    this.rationalOperator = undefined;
    this.rationalOperand = 0;

    this.searchObject.notificationCreationDateCriteria1 = undefined;
    this.searchObject.notificationCreationDateCriteria2 = undefined;
    this.searchObject.notificationCreationDateOrderCriteria1 = undefined;
    this.searchObject.notificationCreationDateOrderCriteria2 = undefined;
    this.searchObject.notificationEndDateCriteria = undefined;
    this.searchObject.notificationEndDateOrderCriteria = undefined;
    this.searchObject.attributeMap = {};

    this.searchObject = {};
  }

  /**
   * IS aircraft or engine check
   */
  public isEngine(): boolean {
    return false;
  }

  public isAircraft(): boolean {
    return false;
  }

  /**
   * Gets Type Code
   */
  private getsTypeCode(code): string {
    const caseType = 3;
    let type;
    switch (code) {
      case 1: {
        type = undefined;
        break;
      }
      case 2: {
        type = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
        break;
      }
      case caseType: {
        type = AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY;
        break;
      }
      case SearchAsset.GroundEquipment: {
        type = AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY;
        break;
      }
      default: {
        type = AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;
        break;
      }
    }

    return type;
  }

  private setAttributeDTO() {
    // tslint:disable-next-line:no-any
    this.searchObject.attributeMap = {};
    // tslint:disable-next-line: no-any
    this.attributesMap = new Map<any, any>();
    if (!!this.defferedDefectsSelected) {
      this.attributesMap.set(BidoAttributeConstants.EVENT_IS_DEFERRED_DEFECT, this.defferedDefectsSelected);
    }
    if (!!this.criticalDefectsSelected) {
      this.attributesMap.set(BidoAttributeConstants.EVENT_DEFECT_IS_CRITICAL, this.criticalDefectsSelected);
    }
    if (!!this.selectedSystemId) {
      this.attributesMap.set(BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID, this.selectedSystemId);
    }
    if (!!this.systemReference) {
      this.attributesMap.set(BidoAttributeConstants.EVENT_SYSTEM_SOURCE_REFERENCE, this.systemReference);
    }
    if (!!this.fmdLogNumber) {
      this.attributesMap.set(BidoAttributeConstants.EVENT_DEFECT_LOG_NUMBER, this.fmdLogNumber);
    }
    if (!!this.fmdContext) {
      this.attributesMap.set(BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT, this.fmdContext);
    }

    const attributesConvMap = {};

    if (this.attributesMap.size !== 0) {
      this.attributesMap.forEach((value: string, key: string) => {
        attributesConvMap[key] = value;
      });
      if (Object.keys(attributesConvMap).length > 0) {
        this.searchObject.attributeMap = { ...attributesConvMap };
      }
    }
  }

  private resetAssetFields() {
    this.searchObject.aircraftAirframer = undefined;
    this.searchObject.aircraftCode = undefined;
    this.searchObject.aircraftFamilyVariantCode = undefined;
    this.searchObject.aircraftLocation = undefined;
    this.searchObject.aircraftOperationalStatus = undefined;
    this.searchObject.aircraftRegistration = undefined;
    this.searchObject.aircraftManufacturerSerialNumber = undefined;
    this.searchObject.engineCode = undefined;
    this.searchObject.engineFamilyVariantCode = undefined;
    this.searchObject.engineLocation = undefined;
    this.searchObject.engineOperationalStatus = undefined;
    this.searchObject.engineRegistration = undefined;
    this.searchObject.engineSerialNumber = undefined;
    this.searchObject.engineModelCode = undefined;
    this.searchObject.equipmentCode = undefined;
    this.searchObject.equipmentDesignation = undefined;
    this.searchObject.equipmentFamilyVariantCode = undefined;
    this.searchObject.equipmentLocation = undefined;
    this.searchObject.equipmentOperationalStatus = undefined;
    this.searchObject.equipmentPartNumber = undefined;
    this.searchObject.equipmentSerialNumber = undefined;
    this.searchObject = {};
    this.fmdLogNumber = undefined;
    this.fmdContext = undefined;
  }

  /**
   * Responsible for converting ui to search input dto
   */
  private convertSearchObjToResponseInputDTO(): SearchEventInputDTO {
    this.setAttributeDTO();
    const eventDTO: EventCriteriaInputDTO = this.searchObject;

    if (!!this.eventDate) {
      eventDTO.notificationCreationDateOrderCriteria1 = this.eventDate[1]
        ? SearchCriteriaConstants.DATE_AFTER_KEY
        : SearchCriteriaConstants.DATE_AT_KEY;
      eventDTO.notificationCreationDateOrderCriteria2 = SearchCriteriaConstants.DATE_BEFORE_KEY;
      // if search between 2 dates:  remove 1 day to the start date in order to include it in the search
      // Alose add 1 day to the end date to include it.
      eventDTO.notificationCreationDateCriteria1 = this.eventDate[1]
        ? moment(this.eventDate[0])
            .subtract(1, 'days')
            .toDate()
        : this.eventDate[0];
      eventDTO.notificationCreationDateCriteria2 = moment(this.eventDate[1])
        .add(1, 'days')
        .toDate();
    }

    if (this.closureDate) {
      eventDTO.notificationEndDateOrderCriteria = SearchCriteriaConstants.DATE_AT_KEY;
      eventDTO.notificationEndDateCriteria = this.closureDate;
    }

    switch (this.selectedSearchAsset) {
      case this.searchAsset.Aircraft: {
        // TODO
        eventDTO.assetFunctionCriteria = this.getsTypeCode(this.searchAsset.Aircraft);
        eventDTO.aircraftCode = this.assetCode;
        eventDTO.aircraftFamilyVariantCode = this.selectedFamilyVariant;
        eventDTO.aircraftLocation = this.selectedLocation;
        eventDTO.aircraftOperationalStatus = this.selectedStatus;
        eventDTO.aircraftRegistration = this.airRegistration;
        eventDTO.aircraftManufacturerSerialNumber = this.snCode;

        break;
      }
      case this.searchAsset.Engine: {
        // TODO
        eventDTO.assetFunctionCriteria = this.getsTypeCode(this.searchAsset.Engine);
        eventDTO.engineCode = this.assetCode;
        eventDTO.engineFamilyVariantCode = this.selectedFamilyVariant;
        eventDTO.engineLocation = this.selectedLocation;
        eventDTO.engineOperationalStatus = this.selectedStatus;
        eventDTO.engineRegistration = this.airRegistration;
        eventDTO.engineSerialNumber = this.snCode;
        eventDTO.engineModelCode = this.modelCode;

        break;
      }
      case this.searchAsset.Equipment: {
        // TODO
        eventDTO.assetFunctionCriteria = this.getsTypeCode(this.searchAsset.Equipment);
        eventDTO.equipmentCode = this.assetCode;
        eventDTO.equipmentFamilyVariantCode = this.selectedFamilyVariant;
        eventDTO.equipmentLocation = this.selectedLocation;
        eventDTO.equipmentOperationalStatus = this.selectedStatus;
        eventDTO.equipmentPartNumber = this.pnCode;
        eventDTO.equipmentSerialNumber = this.snCode;
        eventDTO.equipmentDesignation = this.equipmentDesignation;

        break;
      }
      case this.searchAsset.GroundEquipment: {
        // TODO
        eventDTO.assetFunctionCriteria = this.getsTypeCode(this.searchAsset.GroundEquipment);
        eventDTO.equipmentCode = this.assetCode;
        eventDTO.equipmentFamilyVariantCode = this.selectedFamilyVariant;
        eventDTO.equipmentLocation = this.selectedLocation;
        eventDTO.equipmentOperationalStatus = this.selectedStatus;
        eventDTO.equipmentPartNumber = this.pnCode;
        eventDTO.equipmentSerialNumber = this.snCode;
        eventDTO.equipmentDesignation = this.equipmentDesignation;

        break;
      }
      default: {
        eventDTO.assetFunctionCriteria = this.getsTypeCode(this.searchAsset.All);
        eventDTO.aircraftCode = this.assetCode;
        eventDTO.aircraftFamilyVariantCode = this.selectedFamilyVariant;
        eventDTO.aircraftLocation = this.selectedLocation;
        eventDTO.aircraftOperationalStatus = this.selectedStatus;
        eventDTO.aircraftRegistration = this.airRegistration;
        eventDTO.engineCode = this.assetCode;
        eventDTO.engineFamilyVariantCode = this.selectedFamilyVariant;
        eventDTO.engineLocation = this.selectedLocation;
        eventDTO.engineOperationalStatus = this.selectedStatus;
        eventDTO.engineRegistration = this.airRegistration;
        eventDTO.engineSerialNumber = this.snCode;
        eventDTO.engineModelCode = this.modelCode;
        eventDTO.equipmentCode = this.assetCode;
        eventDTO.equipmentFamilyVariantCode = this.selectedFamilyVariant;
        eventDTO.equipmentLocation = this.selectedLocation;
        eventDTO.equipmentOperationalStatus = this.selectedStatus;
        eventDTO.equipmentPartNumber = this.pnCode;
        eventDTO.equipmentSerialNumber = this.snCode;

        break;
      }
    }

    eventDTO.notificationCode = !!this.searchObject.notificationCode ? this.searchObject.notificationCode : undefined;

    const searchEventDTO: SearchEventInputDTO = {
      eventCriteriaInputDTO: eventDTO
    };

    if (this.rationalOperator) {
      searchEventDTO.rationalOperator = this.rationalOperator;
      searchEventDTO.rationalOperand = this.rationalOperand;
    }

    return searchEventDTO;
  }

  private isColumnPresent(): boolean {
    let isFound = false;
    this.resultsTableDataSource.columns.filter((row) => {
      if (row.field === 'currentTSNValue') {
        isFound = true;
      }
    });

    return isFound;
  }

  /**
   * Action on search button
   */
  public search() {
    if (this.isScreenValidate()) {
      this.resultsTableDataSource.dataSrc.forEach((res) => {
        res._expand = false;
      });
      this.resultsTableDataSource.setData([]);
      super.scrollToAnchor(this.resultsContainerAnchor);

      this.isLoading = true;

      this.eventService
        .findBidoNotificationsBySearchCriteria(this.convertSearchObjToResponseInputDTO())
        .subscribe((res: SearchResultsDTO<BidoNotificationOutputDTO>) => {
          if (this.isSearchWithCounters) {
            const index = 3;
            if (!this.isColumnPresent()) {
              this.resultsTableDataSource.columns.splice(2, 0, {
                field: 'currentTSNValue',
                translateKey: this.getTranslateKey('currentTSNValue'),
                width: '5rem'
              });
              this.resultsTableDataSource.columns.splice(index, 0, {
                field: 'currentCSNValue',
                translateKey: this.getTranslateKey('currentCSNValue'),
                width: '5rem'
              });
            }
          } else {
            let isFound = false;
            this.resultsTableDataSource.columns.filter((row) => {
              if (row.field === 'currentTSNValue') {
                isFound = true;
              }
            });

            // Splicing columns of cy and ts
            if (isFound) {
              this.resultsTableDataSource.columns.splice(2, 1);
              this.resultsTableDataSource.columns.splice(2, 1);
            }
          }

          res.list.forEach((data) => {
            if (!!data.status) {
              const statusConst = this.statusMap.filter((f) => {
                return f.value === data.status;
              });
              if (statusConst.length > 0) {
                data.status = statusConst[0].label;
              }
              data._expand = false;
            }
            this.resultsTableDataSource.addData([data]);
          });
          this.resultsTableDataSource.dataSelection = [];
          super.differ(() => {
            super.scrollToAnchor(this.resultsContainerAnchor);
          });
          this.isLoading = false;
        });
    }
  }

  private isScreenValidate(): boolean {
    if (!!this.rationalOperator && this.rationalOperand !== undefined) {
      if (!!this.snCode) {
        return true;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('snFieldMandory'));

        return false;
      }
    } else {
      if (!!this.rationalOperator && !this.rationalOperand) {
        this.searchObject.equipmentTsnOp = undefined;
      }
    }

    return true;
  }

  public openEvolutionDialog(): void {
    this.showEvolutionDialog = true;
  }

  /**
   * Load Business partner list
   */
  private loadBusinessPartnerList(): void {
    this.eventService.findAllBidoCustomer().subscribe((results) => {
      this.businessPartnerList = ListUtils.orEmpty(results)
        .filter((customer) => !!customer.customerCode)
        .map((customer) => {
          return {
            label: StringUtils.isNullOrEmpty(customer.customerName)
              ? customer.customerCode
              : `${customer.customerName} (${customer.customerCode})`,
            value: customer.customerCode
          };
        });
    });
  }

  /**
   * Load Family variant list
   */
  private loadFamilyVariantList(): void {
    let familyFunction: string;
    if (this.selectedSearchAsset === SearchAsset.Aircraft) {
      familyFunction = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
    } else if (this.selectedSearchAsset === SearchAsset.Engine) {
      familyFunction = AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;
    } else {
      familyFunction = '';
    }

    this.eventService.findAllBireVariantVersionByFamilyFunction(familyFunction).subscribe((results) => {
      this.familyVariantList = ListUtils.orEmpty(results)
        .filter((familyVariant) => !!familyVariant.familyCode && !!familyVariant.variantCode)
        .map((familyVariant) => {
          const label =
            `${familyVariant.familyName || familyVariant.familyCode}` +
            '-' +
            `${familyVariant.variantName || familyVariant.variantCode}`;

          return {
            label,
            value: `${familyVariant.familyCode}-${familyVariant.variantCode}`
          };
        });
    });
  }

  /**
   * Load Fleet list
   */
  private loadFleetList(): void {
    const criteria: BidoFleetDTO = this.selectedBusinessPartner ? { customerCode: this.selectedBusinessPartner } : {};
    this.eventService.findAllBidoFleetByCriteria(criteria).subscribe((results) => {
      this.fleetList = ListUtils.orEmpty(results)
        .filter((fleet) => !!fleet.fleetCode)
        .map((fleet) => {
          return {
            label: StringUtils.isNullOrEmpty(fleet.fleetName)
              ? fleet.fleetCode
              : `${fleet.fleetCode} - ${fleet.fleetName}`,
            value: fleet.fleetId
          };
        });
    });
  }

  /**
   * Load Function List
   */
  private loadFunctionList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((results) => {
      this.functionList = SelectItemUtils.fromLabelValues(
        ListUtils.orEmpty(results).filter((elt) => {
          return (
            elt.value !== AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY &&
            elt.value !== AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
          );
        })
      );
    });
  }

  /**
   * Loads Location list
   */
  private loadLocationList(): void {
    this.eventService.findAllBidoAttributeByAttributeId(BidoAttributeConstants.ASSET_LOCATION).subscribe((results) => {
      this.locationList = ListUtils.orEmpty(results).map((location) => {
        return {
          label: this.translateService.currentLang === LangConstants.FRENCH_CODE ? location.textFr : location.textEn,
          value: location.attributeValue
        };
      });
    });
  }

  /***
   * Loads Operational status list
   */
  private loadOperationalStatusList(): void {
    let mapKey: string;
    switch (this.selectedSearchAsset) {
      case SearchAsset.Aircraft:
        mapKey = GenericPropertyConstants.AIRCRAFT_STATUS_MAP;
        break;

      default:
        mapKey = GenericPropertyConstants.OPERATIONAL_STATUS_MAP;
        break;
    }

    this.propertiesService.getValue(mapKey).subscribe((results) => {
      this.operationalStatusList = SelectItemUtils.fromLabelValues(ListUtils.orEmpty(results));
    });
  }

  /**
   * Loads warehouse List
   */
  private loadWareHouseList(): void {
    this.eventService.findAllWarehouse().subscribe((results) => {
      this.wareHouseList = ListUtils.orEmpty(results)
        .filter((warehouse) => !!warehouse.whCode)
        .map((warehouse) => {
          return {
            label: StringUtils.isNullOrEmpty(warehouse.whName)
              ? warehouse.whCode
              : `${warehouse.whCode} - ${warehouse.whName}`,
            value: warehouse.wareHouseId
          };
        });
    });
  }

  /**
   * Opens Event UC
   */
  public openSelectedEvent(): void {
    this.resultsTableDataSource.dataSelection.forEach((event) => {
      const dto: BidoNotificationOutputDTO = {
        notificationCode: event.notificationCode,
        typeCode: event.typeCode
      };

      this.openEvent(dto);
    });
  }

  public openEvent(rowData: BidoNotificationOutputDTO) {
    const dto: BidoNotificationOutputDTO = {
      notificationCode: rowData.notificationCode,
      typeCode: rowData.typeCode
    };

    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: rowData.notificationCode as string
    };
    this.eventService.findBidoNotification(bidoNotificationDTOId).subscribe((res: BidoNotificationDTO) => {
      if (!!res.bidoNotificationTypeDTO && res.bidoNotificationTypeDTO.typeCategory === '5-def') {
        this.openDefect(dto.notificationCode);
      } else {
        this.openEventUC(dto, ComponentOpenMode.Read);
      }
    });
  }

  private openEventUC(objectId: BidoNotificationOutputDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode
    };

    if (!!objectId) {
      const eventId: BidoNotificationDTOId = {
        notificationCode: objectId.notificationCode as string
      };
      data.objectId = this.serializationService.serialize(eventId);
    }

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openDefect(objectId: string | undefined): void {
    if (!!objectId) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        openMode: ComponentOpenMode.Read
      };

      const defectId: BidoNotificationDTOId = {
        notificationCode: objectId
      };
      data.objectId = this.serializationService.serialize(defectId);

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  private initEvolutionTableData(): void {
    const evolutionTableCols: TableColumn[] = [
      { field: 'evolutionNumber', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionRevisionNumber', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionType', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionLevel', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionCompliance', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'tracked', alignment: 'center', width: '5rem', filterMode: TableColumnFilterMode.Tricheckbox },
      { field: 'evolutionSummary', alignment: 'left', width: '20rem', filterMode: TableColumnFilterMode.Input }
    ];

    this.evolutionTableData = {
      componentId: 'DialogEvolution',
      tableCols: evolutionTableCols,
      tableRows: this.eventService.findBireEvolutionsByEvolutionCriteria({}, undefined, undefined, undefined),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  /**************************************************************************
   * Evolution Dialog
   *************************************************************************/

  public onSelectedEvolution(customerEvolution: BireEvolutionDTO): void {
    if (!!customerEvolution) {
      // TODO
      this.searchObject.evolutionNumberCriteria = customerEvolution.evolutionNumber;
      this.searchObject.evolutionRevisionNumberCriteria = customerEvolution.evolutionRevisionNumber;
      this.searchObject.evolutionTypeCriteria = customerEvolution.evolutionType;
    }
  }

  public resetCustomerEvolution(): void {
    this.searchObject.evolutionNumberCriteria = undefined;
    this.searchObject.evolutionRevisionNumberCriteria = undefined;
    this.searchObject.evolutionTypeCriteria = undefined;
  }

  public getNotDeducedEvent() {
    if (this.isNotDeduced && this.isDeduced) {
      this.isDeduced = false;
    }

    if (this.isNotDeduced) {
      this.searchObject.isDeduced = false;
    }
  }

  public getDeducedEvent() {
    if (this.isDeduced && this.isNotDeduced) {
      this.isNotDeduced = false;
    }

    this.searchObject.isDeduced = this.isDeduced ? true : false;
  }

  public openNewEvent() {
    this.openEventUC(undefined, ComponentOpenMode.Create);
  }

  public openAsset(rowData) {
    const engine = 4;
    const functionNm =
      rowData.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
        ? AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
        : rowData.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
        ? AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
        : this.selectedSearchAsset === 2
        ? AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
        : this.selectedSearchAsset === engine
        ? AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
        : AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY;
    this.openLinkEquipment(rowData.equipmentCode, functionNm || undefined);
  }

  public openLinkEquipment(code: string, functionNm?: string): void {
    if (code) {
      this.openEquipment(code, ComponentOpenMode.Read, functionNm || undefined);
    }
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode, functionNm?: string): void {
    let labelNm;
    let componentName;
    if (!functionNm || functionNm === AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY) {
      labelNm = 'transaction.EquipmentFormComponent';
      componentName = 'EquipmentFormComponent';
    } else {
      if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        labelNm = 'transaction.EngineFormComponent';
        componentName = 'EngineFormComponent';
      } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
        labelNm = 'transaction.AircraftFormComponent';
        componentName = 'AircraftFormComponent';
      }
    }

    const labelKey = labelNm;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: componentName,
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

  // Search save
  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: SearchData | undefined = event.criteria;
    if (!criteria) {
      this.initSearchObject();

      return;
    }

    if (!this.componentData.objectId) {
      this.searchData = criteria || {};
      this.searchObject = this.searchData.searchObject || {};
      this.selectedSearchAsset = this.searchData.selectedSearchAsset as SearchAsset;
      this.criteriaName = event.name;
      this.assetCode = this.searchData.assetCode;
      this.selectedFamilyVariant = this.searchData.selectedFamilyVariant;
      this.pnCode = this.searchData.pnCode;
      this.airRegistration = this.searchData.airRegistration;
      this.snCode = this.searchData.snCode;
      this.eventDate = this.searchData.eventDate;
      this.closureDate = this.searchData.closureDate || undefined;
      this.isSearchWithCounters = this.searchData.isSearchWithCounters || false;
      this.selectedSystemId = this.searchData.selectedSystemId;
      this.systemReference = this.searchData.systemReference;
      this.rationalOperator = this.searchData.rationalOperator;
      this.isDeduced = this.searchData.isDeduced || false;
      this.isNotDeduced = this.searchData.isNotDeduced || false;
      this.defferedDefectsSelected = this.searchData.defferedDefectsSelected || false;
      this.criticalDefectsSelected = this.searchData.criticalDefectsSelected || false;
      this.search();
    } else {
      this.componentData.objectId = undefined;
    }
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: SearchData = {
      searchObject: this.searchObject,
      assetCode: this.assetCode,
      selectedSearchAsset: this.selectedSearchAsset,
      selectedFamilyVariant: this.selectedFamilyVariant,
      pnCode: this.pnCode,
      airRegistration: this.airRegistration,
      snCode: this.snCode,
      eventDate: this.eventDate,
      closureDate: this.closureDate || undefined,
      isSearchWithCounters: this.isSearchWithCounters || false,
      selectedSystemId: this.selectedSystemId,
      systemReference: this.systemReference,
      rationalOperator: this.rationalOperator,
      isDeduced: this.isDeduced || false,
      isNotDeduced: this.isNotDeduced || false,
      defferedDefectsSelected: this.defferedDefectsSelected || false,
      criticalDefectsSelected: this.criticalDefectsSelected || false
    };
    this.criteriaToSave = criteriaToSave;
  }

  public openFmdEvent(rowData: BidoNotificationOutputDTO) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_FDM_EVENT_FORM,
      openMode:
        rowData.fmdReference !== this.fmdHyperlinkCreateValue ? ComponentOpenMode.Write : ComponentOpenMode.Create
    };

    const dtoId: BidoNotificationDTOId = {
      notificationCode: rowData.notificationCode as string
    };

    data.objectId = this.serializationService.serialize(dtoId);

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public toggleResultTableRowDetailsVisibility(row: BidoNotificationOutputDTO): void {
    row._expand = !row._expand;
  }

  public deleteFMDEvents(): void {
    const confirmMessageKey =
      this.resultsTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedEvents' : 'confirmDeleteSelectedEvent';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        this.resultsTableDataSource.dataSelection.forEach((sel) => {
          this.eventService
            .removeBidoNotificationFmdByNotificationCode(StringUtils.orEmpty(sel.notificationCode))
            .subscribe((res) => {
              this.search();
              if (this.resultsTableDataSource.dataSelectionCount > 1) {
                this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteFmdEvents'));
              } else {
                this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteFmdEvent'));
              }
              this.resultsTableDataSource.dataSelection = [];
            });
        });
      }
    });
  }

  public deleteFmdVisible(): boolean {
    let response = true;

    this.resultsTableDataSource.dataSelection.forEach((event) => {
      if (!!event.removeFmdVisibility) {
        response = response && event.removeFmdVisibility;
      } else {
        response = false;
      }
    });

    return response;
  }
}
