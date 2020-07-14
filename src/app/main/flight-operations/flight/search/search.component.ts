import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';

import { LabelValueHelper } from '../../../../modules/purchase-contract/utils/label-value-helper';
import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidtQualificationConstants } from '../../../../shared/constants/bidt-qualification-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
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
import { GenerateFlightLogbookPdfInput } from '../../../../shared/types/api-input-types/fleet-business/generate-flight-logbook-pdf-input.interface';
import { FindAllBidoMissionEquipmentByCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-all-bido-mission-equipment-by-criteria-input.interface';
import { FindBidoFlsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput } from '../../../../shared/types/api-input-types/fleet-management/find-replenishment-by-mission-equipment-and-type-and-equipment-code-input.interface';
import { BidoMissionEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-mission-equipment-lwo.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoMissionDTO } from '../../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoPropertiesDTO } from '../../../../shared/types/api-types/bido-properties-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { SettingsFormService } from '../../../administration/settings/form/settings-form.service';
import { FunctionalLocationSearchService } from '../../../engineering-management/functional-location-search/functional-location-search.service';
import { FlightInputData } from '../types/flight-input-data.interface';
import { MissionEquipmentRow } from '../types/mission-equipment-row.interface';

import { SearchService } from './search.service';

interface ExportedMissionEquipment {
  asset: string;
  missionCode: string;
  flightType: string;
  missionNumber: string;
  missionDepartureLocation: string;
  missionArrivalLocation: string;
  chronoNumber: string;
  startDate: string;
  endDate: string;
  duration: string;
  ifrDuration: string;
  cycleNumber: string;
  engineStartDate: string;
  engineStopDate: string;
  pilot: string;
  copilot: string;
  resetOilState?: string;
  resetOilEngine?: string;
}

export abstract class SearchComponent extends PageComponent<PageComponentData> implements OnInit {
  /**************************************************************************
   * Abstract methods
   *************************************************************************/

  public abstract get isFlightSearch(): boolean;
  private static readonly AEROWEB_CONFIG_PROPERTY_ID = '1';
  public readonly componentName: string;

  public SEARCH_CRITERIA_ID: string;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;
  public operationalConfigs: BidoFlDTO[];
  public searchObject: BidoMissionEquipmentDTO;
  public bidoMissionEquipmentDTO: BidoMissionEquipmentDTO;
  public showOperationalConfigDialog: boolean;
  public copilotList: SelectItem[];
  public currentTimeZone: string | undefined;
  public eventMissionTypeList: SelectItem[];
  public eventMissionStatusList: SelectItem[];
  public flightBaseList: SelectItem[];
  public isFunctionalItemStructure: boolean;
  public resultsTableDataSource: TableDataSource<MissionEquipmentRow>;
  public pilotList: SelectItem[];
  public searchAdvancedCriteriaVisible: boolean;
  public searchConfigStatus: string | undefined;
  public searchEquipmentCode: string | undefined;
  public searchFlightDateFromDefault: Date | undefined;
  public searchFlightDateToDefault: Date | undefined;
  public searchIsPendingForValidation: boolean;
  public sourceSystemId: string | undefined;
  public sourceSystemReference: string | undefined;
  public sourceSystemIdList: SelectItem[];
  public timeZoneList: SelectItem[];
  public objectStatusMap: LabelValue<string>[];
  public flightCustomerList: LabelValue<string>[];
  public flightOperatorList: LabelValue<string>[];

  public criteria: FindAllBidoMissionEquipmentByCriteriaInput;
  public criteriaToSave: FindAllBidoMissionEquipmentByCriteriaInput;

  private defaultTimezone: string | undefined;
  private previousTimezone: string | undefined;
  private equipmentList: BidoEquipmentDTO[];
  private resetValue: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService,
    private readonly searchService: SearchService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly functionalLocationSearchService: FunctionalLocationSearchService,
    private readonly settingsFormService: SettingsFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.SEARCH_CRITERIA_ID = AppConstants.FLIGHT_OPERATION_SEARCH_SEARCH_CRITERIA_ID;

    this.componentName = 'SearchComponent';

    this.init();
    this.showOperationalConfigDialog = false;
    this.resetSearchCriteria();

    this.loadEventMissionTypeList();
    this.loadEventMissionStatusList();
    this.loadFlightBaseList();
    this.loadSourceSystemIdList();
    this.loadTimeZoneList();
    this.loadObjectStatusMap();
    this.loadOperationalConfigs();
    this.loadReferentialFunctionalItemStructure();
    this.loadFlightCustomerList();
    this.loadFlightOperatorList();

    if (this.sessionService.hrModuleActivated) {
      this.loadEmployeeList(BidtQualificationConstants.CODE_FLIGHT_OPS_PILOT);
      this.loadEmployeeList(BidtQualificationConstants.CODE_FLIGHT_OPS_COPILOT);
    }

    this.initResultsTableDataSource();
  }

  private initResultsTableDataSource(): void {
    this.resultsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'asset', alignment: ColumnAlignment.LEFT, width: '25%', translateKey: this.getTranslateKey('asset') },
        {
          field: 'chronoNumber',
          alignment: ColumnAlignment.LEFT,
          width: '12.5%',
          translateKey: this.getTranslateKey('chronoNumber')
        },
        {
          field: 'missionCode',
          alignment: ColumnAlignment.LEFT,
          width: '12.5%',
          translateKey: this.getTranslateKey('missionCode')
        },
        {
          field: 'flightType',
          alignment: ColumnAlignment.LEFT,
          width: '12.5%',
          translateKey: this.getTranslateKey('flightType')
        },
        {
          field: 'customerOperatorCode',
          alignment: ColumnAlignment.LEFT,
          width: '12.5%',
          translateKey: this.getTranslateKey('operator')
        },
        {
          field: 'startDate',
          alignment: ColumnAlignment.RIGHT,
          width: '12.5%',
          translateKey: this.getTranslateKey('startDate')
        },
        {
          field: 'endDate',
          alignment: ColumnAlignment.RIGHT,
          width: '12.5%',
          translateKey: this.getTranslateKey('endDate')
        },
        {
          field: 'statusState',
          alignment: ColumnAlignment.LEFT,
          width: '12.5%',
          translateKey: this.getTranslateKey('statusState')
        }
      ],
      data: []
    });
  }

  protected getTranslateKey(key: string): string {
    return super.getTranslateKey(key, this.componentName);
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.bidoMissionEquipmentDTO = {};
    this.displayComponentContext('global.search', true);
  }

  private loadReferentialFunctionalItemStructure(): void {
    const bidoPropertiesDTO: BidoPropertiesDTO = {
      propertiesId: SearchComponent.AEROWEB_CONFIG_PROPERTY_ID,
      propertiesName: 'aerowebb_configuration',
      propertiesType: 'TECHNICAL',
      isInternationalized: false
    };
    this.settingsFormService.findBidoPropertyValuesByPropertyId(bidoPropertiesDTO).subscribe((result) => {
      if (!!result) {
        const isFunctionalItemStructureProperty = result.find(
          (property) => property.propertiesKey === 'referential.is_functional_item_structure'
        );
        if (!!isFunctionalItemStructureProperty) {
          this.isFunctionalItemStructure = isFunctionalItemStructureProperty.propertiesValue === 'true' ? true : false;
        }
      }
    });
  }

  private loadFlightCustomerList(): void {
    const criteria: BidoCustomerDTO = {
      customerType: AWPropertiesConstants.CUSTOMER_TYPE_CUS_KEY
    };
    this.searchService.findAllBidoCustomerBySearchCriteria(criteria).subscribe((results) => {
      this.flightCustomerList = this.fetchCustomerOperatorList(results);
    });
  }
  private loadFlightOperatorList(): void {
    const criteria: BidoCustomerDTO = {
      isOperator: true
    };
    this.searchService.findAllBidoCustomerBySearchCriteria(criteria).subscribe((results) => {
      this.flightOperatorList = this.fetchCustomerOperatorList(results);
    });
  }

  private fetchCustomerOperatorList(results: BidoCustomerDTO[]): LabelValue<string>[] {
    return ListUtils.orEmpty(results)
      .filter((result) => !StringUtils.isNullOrEmpty(result.customerCode))
      .map(
        (result): LabelValue<string> => {
          const label = StringUtils.isNullOrEmpty(result.customerName)
            ? `${result.customerCode}`
            : `${result.customerName} (${result.customerCode})`;

          return {
            label,
            value: result.customerCode as string
          };
        }
      );
  }

  public deleteMissionEquipmentSelectedList(): void {
    const confirmMessageKey = this.resultsTableDataSource.hasDataSelection
      ? 'confirmDeleteSelectedMissionEquipments'
      : 'confirmDeleteSelectedMissionEquipment';

    this.confirmationService.confirmDelete({
      messageKey: this.componentName + '.' + confirmMessageKey,
      accept: () => {
        const missionEquipmentIdList = this.resultsTableDataSource.dataSelection.map((missionEquipment) => {
          const missionEquipmentId: BidoMissionEquipmentDTOId = {
            equipmentCode: missionEquipment.equipmentCode as string,
            missionCode: missionEquipment.missionCode as string,
            occurrence: missionEquipment.occurrence as number
          };

          return missionEquipmentId;
        });

        this.searchService.removeBidoMissionEquipment(missionEquipmentIdList).subscribe(() => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMissionEquipment'));
          this.search();
        });
      }
    });
  }

  public exportFlightLogbook(): void {
    const input: GenerateFlightLogbookPdfInput = {
      arrivalLocation: this.criteria.arrivalLocation,
      copilot: this.criteria.copilot,
      departureLocation: this.criteria.departureLocation,
      equipmentCode: this.resultsTableDataSource.data[0].equipmentCode,
      flightDateFrom: this.criteria.flightDateFrom,
      flightDateTo: this.criteria.flightDateTo,
      flightType: this.criteria.flightType,
      hrModuleActivated: this.sessionService.hrModuleActivated,
      missionCode: this.criteria.missionCode,
      missionInstanceCode: this.getSearchMissionInstanceCode(),
      missionNumber: this.criteria.missionNumber,
      onlyNotAffectedFlights: this.criteria.onlyNotAffectedFlights,
      pilot: this.criteria.pilot,
      registration: this.criteria.registration,
      statusState: this.criteria.statusState
    };
    this.searchService.generateFlightLogbookPDF(input).subscribe((result) => {
      FileUtils.downloadFile(result.fileContent, result.fileName);
    });
  }

  public exportFlightLogbookVisible(): boolean {
    return false;
  }

  public exportMissionEquipmentTable(): void {
    const table: ExportedMissionEquipment[] = this.resultsTableDataSource.data.map((missionEquipment) => {
      return {
        asset: missionEquipment.asset,
        missionCode: missionEquipment.missionCode,
        flightType: missionEquipment.flightType,
        missionNumber: missionEquipment.missionNumber,
        missionDepartureLocation: missionEquipment.missionDepartureLocation,
        missionArrivalLocation: missionEquipment.missionArrivalLocation,
        chronoNumber: missionEquipment.chronoNumber,
        startDate: missionEquipment.startDate,
        endDate: missionEquipment.endDate,
        duration: missionEquipment.duration,
        ifrDuration: missionEquipment.ifrDuration,
        cycleNumber: missionEquipment.cycleNumber,
        engineStartDate: missionEquipment.engineStartDate,
        engineStopDate: missionEquipment.engineStopDate,
        pilot: missionEquipment.pilot,
        copilot: missionEquipment.copilot,
        resetOilState: missionEquipment.resetOilState
          ? this.translateService.instant(missionEquipment.resetOilState)
          : undefined,
        resetOilEngine: missionEquipment.resetOilEngine
      };
    });
    this.exportService.toExcel(table, this.getMissionEquipmentTableExportName(), this.componentName);
  }

  public loadOperationalConfigs(): void {
    const criteria: FindBidoFlsBySearchCriteriaInput = {
      bidoFlDTOCriteria: { flFunction: '1-air' }
    };
    this.functionalLocationSearchService.searchFunctionalLocationList(criteria).subscribe(
      (results) => {
        if (results) {
          this.operationalConfigs = results.list.map((element) => {
            const statusStateLabel = LabelValueHelper.getLabelByValue(this.objectStatusMap, element.statusState);

            return {
              flCode: element.flCode,
              statusState: statusStateLabel
            };
          });
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  public openAircraft(missionEquipment: MissionEquipmentRow): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode: missionEquipment.equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openFlight(missionEquipment: MissionEquipmentRow): void {
    const missionEquipmentId: FlightInputData = {
      equipmentCode: missionEquipment.equipmentCode,
      missionCode: missionEquipment.missionCode,
      occurrence: missionEquipment.occurrence,
      chronoNumber: missionEquipment.chronoNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHT_FORM,
      objectId: this.serializationService.serialize(missionEquipmentId),
      openMode: ComponentOpenMode.Read
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openMission(missionEquipment: MissionEquipmentRow): void {
    const objectId: BidoMissionDTO = {
      missionCode: missionEquipment.missionCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHTS_MISSION_FORM,
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openMissionEquipmentSelectedList(): void {
    this.resultsTableDataSource.dataSelection.forEach((missionEquipment) =>
      this.openMissionEquipment(missionEquipment, ComponentOpenMode.Read)
    );
  }

  // Open Operational configuration popup in search criteria
  public openOperationalConfigDialog(): void {
    this.showOperationalConfigDialog = true;
  }

  private resetSearchCriteria(): void {
    this.searchConfigStatus = undefined;
    this.searchEquipmentCode = undefined;

    this.searchIsPendingForValidation = false;
    this.sourceSystemReference = undefined;

    this.criteria = {};
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: {} | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }

    this.criteria = criteria || {};
  }

  public saveSearchCriteriaAsked(): void {
    this.criteriaToSave = this.criteria;
  }

  public search(): void {
    this.clearMissionEquipmentTable();
    super.scrollToAnchor(this.resultsContainerAnchor);

    this.fillCriteria();

    this.searchService.findAllBidoMissionEquipmentByCriteria(this.criteria).subscribe((result) => {
      this.setMissionEquipmentTable(result);
      this.updateMissionEquipmentDates();
      this.getMissionEquipementReplenishement();

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }
  private fillCriteria() {
    this.criteria.hrModuleActivated = this.sessionService.hrModuleActivated;
  }

  public updateMissionEquipmentDates(): void {
    const previousTimezoneValue = Number(this.previousTimezone);
    const currentTimeZoneValue = Number(this.currentTimeZone);

    if (currentTimeZoneValue !== previousTimezoneValue) {
      const gap =
        Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
          ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
          : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
      const isGapPositive = currentTimeZoneValue >= previousTimezoneValue;

      this.resultsTableDataSource.setData(
        this.resultsTableDataSource.data.map((row) => {
          row.startDate = this.updateMissionEquipmentDate(gap, isGapPositive, row.startDate);
          row.endDate = this.updateMissionEquipmentDate(gap, isGapPositive, row.endDate);
          row.engineStartDate = this.updateMissionEquipmentDate(gap, isGapPositive, row.engineStartDate);
          row.engineStopDate = this.updateMissionEquipmentDate(gap, isGapPositive, row.engineStopDate);

          return row;
        })
      );
    }

    this.previousTimezone = this.currentTimeZone;
  }

  public getMissionEquipementReplenishement() {
    this.resultsTableDataSource.setData(
      this.resultsTableDataSource.data.map((row) => {
        const missionEquipmentId: BidoMissionEquipmentDTOId = {
          equipmentCode: row.equipmentCode,
          missionCode: row.missionCode,
          occurrence: row.occurrence
        };
        this.searchService.findEquipmentEngineListByEquipmentCode(row.equipmentCode).subscribe((equipmentList) => {
          this.equipmentList = ListUtils.orEmpty(equipmentList).filter((elt) =>
            ObjectUtils.isDefined(elt.equipmentCode)
          );
          this.equipmentList.forEach((equipment) => {
            const input: FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput = {
              bidoMissionEquipmentDTOId: missionEquipmentId,
              replenishmentType: AWPropertiesConstants.REPLENISHMENT_TYPE_ENGINE_OIL,
              engineCode: equipment.equipmentCode
            };
            this.searchService.findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode(input).subscribe((result) => {
              if (result && result.oilConsumptionReinitDate) {
                this.searchService
                  .getEquipmentRepresentation(this.getEquipmentToFormat(equipment))
                  .subscribe((equipmentRepresentation) => {
                    row.resetOilState = this.resetValue;
                    row.resetOilEngine = equipmentRepresentation;
                  });
              }
            });
          });
        });

        return row;
      })
    );
  }

  public setSelectedConfig(requestedOpeConfigCodeSelected: BidoFlDTO): void {
    this.criteria.requestedOpeConfigCode = requestedOpeConfigCodeSelected.flCode;
  }

  public resetConfig(): void {
    this.criteria.requestedOpeConfigCode = undefined;
  }

  private getEquipmentToFormat(equipment: BidoEquipmentDTO): BidoEquipmentDTO {
    return {
      equipmentCode: equipment.equipmentCode,
      equipmentFunction: equipment.equipmentFunction,
      familyVariantCode: equipment.familyVariantCode,
      pnCode: equipment.pnCode,
      registration: equipment.registration,
      sn: equipment.sn
    };
  }

  private clearMissionEquipmentTable(): void {
    this.resultsTableDataSource.setData([]);
  }

  private getSearchMissionInstanceCode(): string | undefined {
    return StringUtils.isNullOrEmpty(this.criteria.missionInstanceCode)
      ? undefined
      : `%${this.criteria.missionInstanceCode}`;
  }

  private init(): void {
    this.copilotList = [];
    this.currentTimeZone = undefined;
    this.defaultTimezone = undefined;
    this.searchFlightDateFromDefault = moment()
      .startOf('day')
      .toDate();
    this.searchFlightDateToDefault = moment()
      .endOf('day')
      .toDate();
    this.eventMissionTypeList = [];
    this.eventMissionStatusList = [];
    this.equipmentList = [];
    this.flightBaseList = [];
    this.pilotList = [];
    this.previousTimezone = undefined;
    this.searchAdvancedCriteriaVisible = false;
    this.timeZoneList = [];
    this.criteria = {};
    this.getResetLabel();
  }

  public getResetLabel(): void {
    this.resetValue = this.getTranslateKey('reset');
  }

  private loadEventMissionTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP).subscribe((results) => {
      this.eventMissionTypeList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadEventMissionStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_STATUS_MAP).subscribe((results) => {
      this.eventMissionStatusList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadFlightBaseList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_BASE_MAP).subscribe((results) => {
      this.flightBaseList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadEmployeeList(qualificationCode: string): void {
    this.searchService.findAllEmployeeByQualificationCode(qualificationCode).subscribe((results) => {
      this.pilotList = results
        .filter((elt) => ObjectUtils.isDefined(elt.id))
        .map((elt) => {
          let label: string;
          if (!!elt.employeeLastName && !!elt.employeeFirstName) {
            label = elt.employeeLastName + ' ' + elt.employeeFirstName;
          } else if (!!elt.employeeLastName) {
            label = elt.employeeLastName;
          } else if (!!elt.employeeFirstName) {
            label = elt.employeeFirstName;
          } else if (!!elt.employeeNumber) {
            label = elt.employeeNumber;
          } else {
            label = (elt.id as number).toString();
          }

          return {
            label,
            value: (elt.id as number).toString()
          };
        });
    });
  }

  private loadSourceSystemIdList(): void {
    this.searchService.getSourceSystemIdList().subscribe((results) => {
      this.sourceSystemIdList = ListUtils.orEmpty(results);
    });
  }

  private loadTimeZoneList(): void {
    this.propertiesService.getTimeZones().subscribe((results) => {
      this.timeZoneList = results
        .map((result) => {
          return {
            label: result.label,
            value: this.dateService.getTimeZoneValue(result.value)
          };
        })
        .filter((timezone) => !!timezone.value);

      this.propertiesService.getDefaultTimeZoneCode().subscribe((result) => {
        this.defaultTimezone = this.dateService.getTimeZoneValue(result);

        this.resetTimezone();
      });
    });
  }

  private loadObjectStatusMap(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.OBJECT_STATUS_MAP)
      .subscribe((result) => (this.objectStatusMap = result));
  }

  private resetTimezone(): void {
    this.currentTimeZone = this.defaultTimezone;
    this.previousTimezone = this.currentTimeZone;
  }

  private setMissionEquipmentTable(missionEquipmentData: SearchResultsDTO<BidoMissionEquipmentLWO>): void {
    this.resultsTableDataSource.setData(
      missionEquipmentData.list
        .filter(
          (missionEquipment) =>
            !!missionEquipment &&
            !!missionEquipment.equipmentCode &&
            !!missionEquipment.missionCode &&
            !!missionEquipment.occurrence
        )
        .map((missionEquipment) => {
          const missionEquipmentRow: MissionEquipmentRow = {
            equipmentCode: missionEquipment.equipmentCode as string,
            missionCode: missionEquipment.missionCode as string,
            occurrence: missionEquipment.occurrence as number,
            asset: StringUtils.orEmpty(missionEquipment.asset),
            chronoNumber: StringUtils.orEmpty(missionEquipment.chronoNumber),
            copilot: StringUtils.orEmpty(missionEquipment.copilot),
            customer: StringUtils.orEmpty(missionEquipment.customer),
            cycleNumber: StringUtils.orEmpty(missionEquipment.cycleNumber),
            duration: StringUtils.orEmpty(missionEquipment.duration),
            endDate: this.dateService.dateWithHourToString(missionEquipment.endDate),
            engineStartDate: this.dateService.dateWithHourToString(missionEquipment.engineStartDate),
            engineStopDate: this.dateService.dateWithHourToString(missionEquipment.engineStopDate),
            flightType: StringUtils.orEmpty(missionEquipment.flightType),
            fuelUsed: StringUtils.orEmpty(missionEquipment.fuelUsed),
            ifrDuration: StringUtils.orEmpty(missionEquipment.ifrDuration),
            missionArrivalLocation: StringUtils.orEmpty(missionEquipment.missionArrivalLocation),
            missionDepartureLocation: StringUtils.orEmpty(missionEquipment.missionDepartureLocation),
            missionNumber: StringUtils.orEmpty(missionEquipment.missionNumber),
            pilot: StringUtils.orEmpty(missionEquipment.pilot),
            startDate: this.dateService.dateWithHourToString(missionEquipment.startDate),
            statusState: StringUtils.orEmpty(missionEquipment.statusState)
          };

          return missionEquipmentRow;
        })
    );
  }

  private updateMissionEquipmentDate(gap: number, isGapPositive: boolean, date: string): string {
    if (StringUtils.isNullOrEmpty(date)) {
      return '';
    } else {
      const dateValue = new Date(date);
      const updatedDate = isGapPositive
        ? moment(dateValue).add(gap, 'hours')
        : moment(dateValue).subtract(gap, 'hours');

      return updatedDate.format(this.sessionService.dateTimeFormatMomentJS);
    }
  }

  public abstract openNewMissionEquipment(): void;

  protected abstract getMissionEquipmentTableExportName(): string;

  protected abstract openMissionEquipment(
    missionEquipment: MissionEquipmentRow | undefined,
    openMode: ComponentOpenMode
  ): void;
}
