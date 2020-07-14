import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LabelValueHelper } from '../../../../../modules/purchase-contract/utils/label-value-helper';
import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../../shared/constants/bido-attribute-constants';
import { BidoMissionEquipmentConstants } from '../../../../../shared/constants/bido-mission-equipment-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../../shared/constants/lang-constants';
import { ReportConstants } from '../../../../../shared/constants/report-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { SaveFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/save-flight-input.interface';
import { FindAllBidoFlightLoadByFlightInput } from '../../../../../shared/types/api-input-types/fleet-management/find-all-bido-flight-load-by-flight-input.interface';
import { FindBidoFlightAttributeInput } from '../../../../../shared/types/api-input-types/fleet-management/find-bido-flight-attribute-input.interface';
import { FindBidoFlsBySearchCriteriaInput } from '../../../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { SaveBidoFlightAttributeInput } from '../../../../../shared/types/api-input-types/fleet-management/save-bido-flight-attribute-input.interface';
import { AssetFlightTableDTO } from '../../../../../shared/types/api-output-types/airworthiness-management/asset-flight-table-dto.interface';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoFlightAttributeDTO } from '../../../../../shared/types/api-types/bido-flight-attribute-dto.interface';
import { BidoMissionDTOId } from '../../../../../shared/types/api-types/bido-mission-dto-id.interface';
import { BidoMissionDTO } from '../../../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoPropertiesDTO } from '../../../../../shared/types/api-types/bido-properties-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireUnitMeasureDTOId } from '../../../../../shared/types/api-types/bire-unit-measure-dto-id.interface';
import { FlightDTO } from '../../../../../shared/types/api-types/flight-dto.interface';
import { HBidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/h-bido-mission-equipment-dto.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../../shared/utils/bido-equipment-utils';
import { DomUtils } from '../../../../../shared/utils/dom-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { WorkflowUtils } from '../../../../../shared/utils/workflow-utils';
import { FunctionalLocationSearchService } from '../../../../engineering-management/functional-location-search/functional-location-search.service';
import { InstallAssetService } from '../../../../fleet-management/install-asset/install-asset.service';
import { FlightsDTO } from '../../../../maintenance/asset-review/form/types/flights-dto.interface';
import { OverlayService } from '../../../../overlay/overlay.service';
import { FlightInputData } from '../../types/flight-input-data.interface';

import { CrewComponent } from './crew/crew.component';
import { EnginesComponent } from './engines/engines.component';
import { FlightFormService } from './flight-form.service';
import { FlightMeasuresComponent } from './flight-measures/flight-measures.component';
import { FuelComponent } from './fuel/fuel.component';
import { GonogoValidationStatusComponent } from './gonogo-validation-status/gonogo-validation-status.component';
import { GonogoValidationFormComponent } from './gonogo-validation/gonogo-validation-form.component';
import { HumsComponent } from './hums/hums.component';
import { OtherMeasuresComponent } from './other-measures/other-measures.component';
import { PassengersLoadsComponent } from './passengers-loads/passengers-loads.component';
import { PostFlightRecordsComponent } from './post-flight-records/post-flight-records.component';
import { FlightStatusComponent } from './status/status/flight-status.component';

interface Fields {
  [key: string]: unknown;
}

@Component({
  selector: 'aw-flight-form',
  styleUrls: ['flight-form.component.scss'],
  templateUrl: './flight-form.component.html'
})
export class FlightFormComponent extends FormPageComponent<PageComponentData> implements OnInit, AfterViewInit {
  public static readonly ADDITIONAL_INFORMATION_ANCHOR_ID: string = 'additionalInformationAnchor';
  public static readonly CREW_ANCHOR_ID: string = 'crewAnchor';
  public static readonly DATES_AND_DURATION_ANCHOR_ID: string = 'datesAndDurationAnchor';
  public static readonly ENGINES_ANCHOR_ID: string = 'enginesAnchor';
  public static readonly FLIGHT_MEASURES_ANCHOR_ID: string = 'flightMeasuresAnchor';
  public static readonly FUEL_ANCHOR_ID: string = 'fuelAnchor';
  public static readonly GONOGO_VALIDATION_STATUS_ANCHOR_ID: string = 'gonogoValidationStatusAnchor';
  public static readonly HUMS_ANCHOR_ID: string = 'humsAnchor';
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly OTHER_MEASURES_ANCHOR_ID: string = 'otherMeasuresAnchor';
  public static readonly PASSENGERS_LOADS_ANCHOR_ID: string = 'passengersLoadsAnchor';
  public static readonly POST_FLIGHT_RECORDS_ANCHOR_ID: string = 'postFlightRecordsAnchor';
  public static readonly REPLENISHMENTS_VALIDATION_ANCHOR_ID: string = 'replenishmentsValidationAnchor';
  public static readonly SCHEDULE_ANCHOR_ID: string = 'scheduleAnchor';

  private static readonly TOC_HUMS_INDEX: number = 2;

  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  public readonly component: typeof FlightFormComponent;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public componentContext: string;

  public showStatusUpdatesPopup: boolean;

  public aircraftRepresentation: string | undefined;
  public chronoNumber: string | undefined;
  public countryZoneMap: Map<string, string>;
  public equipment: BidoEquipmentDTO;
  public equipmentCode: string;
  public equipmentCodeToSave: string;
  public flightBaseList: SelectItem[];
  public flightCustomerList: SelectItem[];
  public flightOperatorList: SelectItem[];
  public flightLabelList: SelectItem[];
  public flightLabelStatusList: LabelValue<string>[];
  public flightStatusList: SelectItem[];
  public workflowStatus: SelectItem[];
  public flightTypeList: SelectItem[];
  public gonogoValidationCommentReadOnly: boolean;
  public isFunctionalItemStructure: boolean;
  public manualFlightEntries: boolean;
  public measureReferenceList: BireMeasureReferenceDTO[];
  public mission: BidoMissionDTO;
  public missionCode: string;
  public missionEquipment: BidoMissionEquipmentDTO;
  public missionEquipmentEndDate: Date | undefined;
  public missionEquipmentStartDate: Date | undefined;
  public missionPeriodicityList: SelectItem[];
  public operationalConfigurationStatusMap: LabelValue<string>[];
  public occurrence: number;
  public operationalConfigs: BidoFlDTO[];
  public propertyCatalogIdNameMappingList: BidoPropertiesDTO[];
  public areaList: LabelValue<string>[];
  public showOperationalConfigDialog: boolean;
  public sourceSystemId: BidoFlightAttributeDTO;
  public sourceSystemIdList: SelectItem[];
  public sourceSystemReference: BidoFlightAttributeDTO;
  public timeZoneList: SelectItem[];
  public timeZoneSelected: string | undefined;
  public flightInputData: FlightInputData;

  public dialogAircraftVisible: boolean;
  public dialogMissionVisible: boolean;

  private previousEquipmentCode: string | undefined;

  // Validate measures for completed flights
  public flightsTable: AssetFlightTableDTO[];
  public selectedFlight: FlightsDTO;

  // Historic popup
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public tableStatusUpdatesData: DialogTableData<HBidoMissionEquipmentDTO>;

  // DOM references *************************************************************

  @ViewChild(CrewComponent)
  public crewComponent: CrewComponent;

  @ViewChild(EnginesComponent)
  public enginesComponent: EnginesComponent;

  @ViewChild(FlightMeasuresComponent)
  public flightMeasuresComponent: FlightMeasuresComponent;

  @ViewChild(FuelComponent)
  public fuelComponent: FuelComponent;

  @ViewChild(GonogoValidationFormComponent)
  public gonogoValidationFormComponent: GonogoValidationFormComponent;

  @ViewChild(GonogoValidationStatusComponent)
  public gonogoValidationStatusComponent: GonogoValidationStatusComponent;

  @ViewChild(HumsComponent)
  public humsComponent: HumsComponent;

  @ViewChild(OtherMeasuresComponent)
  public otherMeasuresComponent: OtherMeasuresComponent;

  @ViewChild(PassengersLoadsComponent)
  public passengersLoadsComponent: PassengersLoadsComponent;

  @ViewChild(PostFlightRecordsComponent)
  public postFlightRecordsComponent: PostFlightRecordsComponent;

  // Table of content ***********************************************************

  @ViewChild(FlightFormComponent.ADDITIONAL_INFORMATION_ANCHOR_ID)
  public additionalInformationEltRef: ElementRef;

  @ViewChild(FlightFormComponent.CREW_ANCHOR_ID)
  public crewEltRef: ElementRef;

  @ViewChild(FlightFormComponent.DATES_AND_DURATION_ANCHOR_ID)
  public datesAndDurationEltRef: ElementRef;

  @ViewChild(FlightFormComponent.ENGINES_ANCHOR_ID)
  public enginesEltRef: ElementRef;

  @ViewChild(FlightFormComponent.FLIGHT_MEASURES_ANCHOR_ID)
  public flightMeasuresEltRef: ElementRef;

  @ViewChild(FlightFormComponent.FUEL_ANCHOR_ID)
  public fuelEltRef: ElementRef;

  @ViewChild(FlightFormComponent.GONOGO_VALIDATION_STATUS_ANCHOR_ID)
  public gonogoValidationStatusEltRef: ElementRef;

  @ViewChild(FlightFormComponent.HUMS_ANCHOR_ID)
  public humsEltRef: ElementRef;

  @ViewChild(FlightFormComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(FlightFormComponent.OTHER_MEASURES_ANCHOR_ID)
  public otherMeasuresEltRef: ElementRef;

  @ViewChild(FlightFormComponent.PASSENGERS_LOADS_ANCHOR_ID)
  public passengersLoadsEltRef: ElementRef;

  @ViewChild(FlightFormComponent.POST_FLIGHT_RECORDS_ANCHOR_ID)
  public postFlightRecordsEltRef: ElementRef;

  @ViewChild(FlightFormComponent.REPLENISHMENTS_VALIDATION_ANCHOR_ID)
  public replenishmentsValidationEltRef: ElementRef;

  @ViewChild(FlightFormComponent.SCHEDULE_ANCHOR_ID)
  public scheduleEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly flightFormService: FlightFormService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly functionalLocationSearchService: FunctionalLocationSearchService,
    private readonly installAssetService: InstallAssetService,
    private readonly _overlayService: OverlayService
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

    this.aWPropertiesConstants = AWPropertiesConstants;
    this.component = FlightFormComponent;
    this.controlConfigConstants = ControlConfigConstants;
    this.areaList = [];
    this.countryZoneMap = new Map<string, string>();

    this.userWorkflowSubject.subscribe((userWorkflow) => {
      this.updateWorkflowStatusList();
    });

    this.onBeforeLoadOnce();
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_FLIGHT_FORM;
  }

  // ****************************************************************************

  public ngOnInit(): void {
    super.ngOnInit();
    super.updateOpenMode(this.componentData.openMode);

    this.flightFormService.getPropertyCatalogIdNameMapping().subscribe((results) => {
      this.propertyCatalogIdNameMappingList = results || [];
      this.fillDropDown();
    });

    this.onBeforeLoad();

    if (this.isCreateOpenMode) {
      this.componentContext = 'tab.createMode';
      this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
      this.setTableOfContent();
      this.missionEquipment.statusState = '1-dra';
      this.loadUserWorkflow(this.missionEquipment.statusState);
    } else {
      const inputData = this.serializationService.deserialize(this.componentData.objectId as string) as FlightInputData;
      this.flightInputData = inputData;
      this.chronoNumber = inputData.chronoNumber;
      if (!!inputData.equipmentCode) {
        this.equipmentCode = inputData.equipmentCode;
      }
      if (!!inputData.missionCode) {
        this.missionCode = inputData.missionCode;
      }
      this.occurrence = ObjectUtils.isDefined(inputData.occurrence) ? (inputData.occurrence as number) : 0;

      this.onLoad();
    }
  }

  public ngAfterViewInit(): void {
    if (!this.isCreateOpenMode) {
      this.loadEquipment();
    }
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.aircraftRepresentation = undefined;
    this.equipment = {};
    this.flightBaseList = [];
    this.flightCustomerList = [];
    this.flightOperatorList = [];
    this.flightLabelList = [];
    this.flightStatusList = [];
    this.flightTypeList = [];
    this.manualFlightEntries = false;
    this.measureReferenceList = [];
    this.mission = {};
    this.missionEquipment = {};
    this.missionEquipmentEndDate = undefined;
    this.missionEquipmentStartDate = undefined;
    this.missionPeriodicityList = [];
    this.sourceSystemId = {};
    this.sourceSystemIdList = [];
    this.sourceSystemReference = {};
    this.timeZoneList = [];
    this.timeZoneSelected = undefined;

    this.dialogAircraftVisible = false;
    this.dialogMissionVisible = false;
    this.showOperationalConfigDialog = false;

    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    this.loadFlightBaseList();
    this.loadFlightCustomerList();
    this.loadFlightOperatorList();
    this.loadFlightLabelList();
    this.loadFlightStatusList();
    this.loadFlightTypeList();
    this.loadMissionPeriodicityList();
    this.loadTimeZoneList();
    this.loadOperationalConfigurationStatusMap();
    this.loadOperationalConfigs();
    this.loadKardexMode();
  }

  public onCancel(): void {
    super.updateOpenMode(ComponentOpenMode.Read);
    this.clearErrors();
    this.onReload();
  }

  public onEdit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public onLoad(): void {
    this.loadEquipment();
    this.loadFlightAttributeData();
    this.loadMeasureReferenceList(this.equipmentCode);
    this.loadMission();
    this.loadMissionEquipment();
    this.gonogoValidationStatusComponent.onLoad(this.equipmentCode, this.missionCode, this.occurrence);
    this.otherMeasuresComponent.onLoad(this.equipmentCode, this.missionCode, this.occurrence);
    this.ngAfterViewInit();
  }

  public onReload(): void {
    this.onBeforeLoad();
    this.crewComponent.onBeforeLoad();
    this.enginesComponent.onBeforeLoad();
    this.flightMeasuresComponent.onBeforeLoad();
    this.fuelComponent.onBeforeLoad();
    this.gonogoValidationStatusComponent.onBeforeLoad();
    this.otherMeasuresComponent.onBeforeLoad();
    this.passengersLoadsComponent.onBeforeLoad();
    if (!!this.postFlightRecordsComponent) {
      this.postFlightRecordsComponent.onBeforeLoad();
    }
    if (this.sessionService.isSpecificDassault) {
      this.humsComponent.onBeforeLoad();
    }

    this.fillDropDown();
    this.onLoad();
  }

  public onSelectMissionEndDate(): void {
    if (this.isCreateOpenMode && !!this.missionEquipmentStartDate && !!this.missionEquipmentEndDate) {
      const diff = this.dateService.getDurationBetweenDatesInHour(
        this.missionEquipmentStartDate,
        this.missionEquipmentEndDate
      );
      this.missionEquipment.missionDuration = NumberUtils.toString(diff);
    }
  }

  public onSelectDuration(): void {
    if (this.isCreateOpenMode && !!this.missionEquipmentStartDate && !!this.missionEquipment.missionDuration) {
      const diff: number = NumberUtils.fromString(this.missionEquipment.missionDuration);
      this.missionEquipmentEndDate = this.dateService.addDurationToDate(this.missionEquipmentStartDate, diff);
    }
  }

  public onSave(event?: Event): boolean {
    const saved = this.isFlightCompleted();
    if (saved) {
      if (event) {
        super.startTransaction(event);
      }

      const flight = this.fillFlight();
      if (!this.equipmentCode) {
        this.equipmentCode = BidoMissionEquipmentConstants.EMPTY_EQUIPMENT_CODE;
      }

      const saveFlightInput: SaveFlightInput = {
        flight,
        assetCode: !!this.equipmentCodeToSave ? this.equipmentCodeToSave : this.equipmentCode,
        timezone: this.timeZoneSelected,
        previousAssetCode: this.previousEquipmentCode,
        customerOperatorCode: this.missionEquipment.customerOperatorCode
      };

      this.showSaveSpinner = true;
      this.flightFormService
        .saveFlight(saveFlightInput)
        .pipe(
          finalize(() => {
            if (event) {
              super.endTransaction(event);
            }
          })
        )
        .subscribe(
          (result) => {
            if (result.flight && result.result !== ReportConstants.SEVERITY_ERROR) {
              this.occurrence = ObjectUtils.isDefined(result.flight.occurrence)
                ? (result.flight.occurrence as number)
                : 0;

              this.saveFlightAttributeData();

              if (result.flight) {
                super.updateOpenMode(ComponentOpenMode.Read);

                // if no equipment has been selected
                if (!!result.flight.aircraft && result.flight.aircraft.assetCode) {
                  this.equipmentCode = result.flight.aircraft.assetCode;
                }

                this.messageService.showSuccessMessage(super.getTranslateKey('successOnSaveFlight'));
                this.onReload();
              }
            } else if (!StringUtils.isNullOrEmpty(result.message)) {
              this.messageService.showRawErrorMessage(result.message as string);
            } else {
              this.messageService.showErrorMessage(super.getTranslateKey('errorOnSaveFlight'));
            }
            this.showSaveSpinner = false;
          },
          (error) => {
            this.showSaveSpinner = false;
            throw error;
          }
        );
    }

    return saved;
  }

  private onBeforeLoadOnce(): void {
    super.registerPageTocEntryObservable();

    this.componentContext = '';
  }

  // ****************************************************************************

  public fillDropDown() {
    const propertyIds = this.propertyCatalogIdNameMappingList.filter(
      (property) => property.propertiesName && property.propertiesName.toUpperCase() === 'FLIGHT_AREA'
    );
    const currentPropertyId = propertyIds[0] && propertyIds[0].propertiesId;

    if (!!currentPropertyId) {
      this.flightFormService.getFlightArea(parseInt(currentPropertyId, 10)).subscribe((results) => {
        results.forEach((element) => {
          let zoneElement: LabelValue<string>;
          if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
            if (!!element.frPropertiesValue && !!element.propertiesKey) {
              zoneElement = {
                label: element.frPropertiesValue,
                value: element.propertiesKey
              };

              this.areaList.push(zoneElement);
            }
          } else {
            if (!!element.enPropertiesValue && !!element.propertiesKey) {
              zoneElement = {
                label: element.enPropertiesValue,
                value: element.propertiesKey
              };

              this.areaList.push(zoneElement);
            }
          }
        });
      });
    }
  }
  public showUpdateAircraft(): boolean {
    return (
      this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_DRAFT ||
      this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_SCHEDULED
    );
  }

  public showResetAircraft(): boolean {
    return (
      !!this.aircraftRepresentation &&
      (this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_DRAFT ||
        this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_SCHEDULED)
    );
  }

  public createNewMission(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHTS_MISSION_FORM,
      openMode: ComponentOpenMode.Create
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isPostFlightRecordsVisible(): boolean {
    return (
      this.missionEquipment &&
      (this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_GO_VALIDATED ||
        this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_ARRIVED ||
        this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_VALIDATED)
    );
  }

  public onSelectedAircraft(selection: BidoEquipmentDTO): void {
    this.aircraftRepresentation = BidoEquipmentUtils.createAssetName(selection);
    this.equipmentCodeToSave = selection.equipmentCode as string;
    this.copyMissionDatesToFlightDates();
  }

  public onSelectedMission(selection: BidoMissionDTO): void {
    this.mission = selection;
    this.missionCode = selection.missionCode as string;
    this.missionEquipment.flightType = selection.missionType;
    if (selection.customerOperatorCode) {
      this.missionEquipment.customerOperatorCode = selection.customerOperatorCode;
    }

    this.copyMissionDatesToFlightDates();
  }

  public copyMissionDatesToFlightDates(): void {
    if (!!this.mission.startDate) {
      this.missionEquipmentStartDate = this.mission.startDate;
    }
    if (!!this.mission.endDate) {
      this.missionEquipmentEndDate = this.mission.endDate;
    }
    if (!!this.mission.cycleNumber) {
      this.missionEquipment.cycleNumber = this.mission.cycleNumber;
    }
    if (!!this.mission.missionDuration) {
      this.missionEquipment.missionDuration = this.mission.missionDuration;
    }
  }

  public openFlightValidation(objectId: BidoMissionEquipmentDTO | undefined, openMode: ComponentOpenMode): void {
    const componentId = 'FlightOperationsValidationComponent';
    const labelKey = 'transaction.' + componentId;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public validateMeasures(): void {
    this.openFlightValidation(this.missionEquipment, ComponentOpenMode.Read);
  }

  public openLineMaintenance(): void {
    const missionEquipmentId: FlightInputData = {
      equipmentCode: this.equipmentCode,
      missionCode: this.missionCode,
      occurrence: this.occurrence,
      chronoNumber: this.chronoNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_LINE_MAINTENANCE_FORM,
      objectId: this.serializationService.serialize(missionEquipmentId),
      openMode: ComponentOpenMode.Read
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openOperationalConfigDialog(): void {
    if (!this.isReadOpenMode) {
      this.showOperationalConfigDialog = true;
    }
  }

  public setSelectedConfig(requestedOpeConfigCodeSelected: BidoFlDTO): void {
    this.missionEquipment = {
      ...this.missionEquipment,
      requestedOpeConfigCode: requestedOpeConfigCodeSelected.flCode,
      requestedOpeConfigDescription: requestedOpeConfigCodeSelected.flDescription
    };
  }

  public resetConfig(): void {
    this.missionEquipment.requestedOpeConfigCode = undefined;
  }

  public resetAircraft(): void {
    this.aircraftRepresentation = undefined;
    this.equipmentCodeToSave = BidoMissionEquipmentConstants.EMPTY_EQUIPMENT_CODE;
  }

  public resetMission(): void {
    this.mission = {};
  }

  public isFlightStatusCompleted(): boolean {
    return this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_COMPLETED;
  }

  public showAssetReview(): boolean {
    return this.isFlightStatusCompleted();
  }

  public openAssetReview(): void {
    const objectId = {
      equipmentCodeList: [this.equipmentCode]
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public selectAircraft(event: MouseEvent): void {
    if (this.showUpdateAircraft() && !DomUtils.isTargetDisabled(event.target)) {
      this.dialogAircraftVisible = true;
    }
  }

  public selectMissionCode(event: MouseEvent): void {
    if (!DomUtils.isTargetDisabled(event.target)) {
      this.dialogMissionVisible = true;
    }
  }

  public sendFscToHums(): void {
    // TODO
  }

  public updateFlightStatus(newStatus: string): void {
    this.missionEquipment.statusState = newStatus;
    this.onSave();
  }

  private fillFlight(): FlightDTO {
    const flight: FlightDTO = {};

    flight.endBase = this.mission.arrivalLocation;
    flight.missionCode = this.mission.missionCode;
    flight.missionDescription = this.mission.missionDescription;
    flight.missionDetails = this.mission.missionDetails;
    flight.missionNumber = this.mission.missionNumber;
    flight.missionOperationCode = this.mission.operationCode;
    flight.newMission = false;
    flight.operationalMissionCode = this.mission.operationalMissionCode;
    flight.startBase = this.mission.departureLocation;
    flight.type = this.mission.missionType;

    flight.missionComment = this.mission.missionComment;
    flight.missionCycleNumber = this.mission.cycleNumber;
    flight.missionDuration = this.mission.missionDuration;
    flight.missionEndDate = this.mission.endDate;
    flight.missionPeriodicityLimitDate = this.mission.periodicityLimitDate;
    flight.missionPeriodicityType = this.mission.periodicityType;
    flight.missionStartDate = this.mission.startDate;
    flight.environment = this.mission.environment;

    flight.comment = this.missionEquipment.missionComment;
    flight.customerCode = this.missionEquipment.customerCode;
    flight.duration = this.missionEquipment.missionDuration;
    flight.durationIFR = this.missionEquipment.ifrDuration;
    flight.endDate = this.missionEquipmentEndDate;
    flight.flightArrivalLocation = this.missionEquipment.arrivalLocation;
    flight.flightDepartureLocation = this.missionEquipment.departureLocation;
    flight.flightDetails = this.missionEquipment.flightDetails;
    flight.flightLabel = this.missionEquipment.flightLabel;
    flight.flightMeasuresUpdatable =
      this.missionEquipment.statusState !== AWPropertiesConstants.FLIGHT_STATUS_VALIDATED;
    flight.flightRequestedOperationalConfig = this.missionEquipment.requestedOpeConfigCode;
    flight.flightType = this.missionEquipment.flightType;
    flight.missionArea = this.missionEquipment.missionArea;
    flight.nbCycles = this.missionEquipment.cycleNumber;
    flight.nightMission = this.missionEquipment.nightMission;
    flight.number = this.missionEquipment.missionInstanceCode;
    flight.occurrence = this.missionEquipment.occurrence;
    flight.startDate = this.missionEquipmentStartDate;
    flight.status = this.missionEquipment.statusState;
    flight.userFlightNumber = this.missionEquipment.userFlightNumber;

    this.crewComponent.fillFlight(flight, this.missionEquipment);
    this.enginesComponent.fillFlight(flight, this.missionEquipment);
    this.fuelComponent.fillFlight(flight);
    this.passengersLoadsComponent.fillFlight(flight);
    this.otherMeasuresComponent.fillFlight(flight);

    return flight;
  }

  private isFlightCompleted(): boolean {
    if (!this.validateWorkflowMissingFields()) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnMissingRequiredFields'));

      return false;
    }

    if (this.isCreateOpenMode) {
      const endDateFilled = ObjectUtils.isDefined(this.missionEquipmentEndDate);
      const missionFilled = !StringUtils.isNullOrEmpty(this.mission.missionCode);
      const startDateFilled = ObjectUtils.isDefined(this.missionEquipmentStartDate);

      if (endDateFilled && missionFilled && startDateFilled) {
        if (
          !StringUtils.isNullOrEmpty(this.missionEquipment.statusState) &&
          this.missionEquipment.statusState !== AWPropertiesConstants.FLIGHT_STATUS_DRAFT &&
          this.missionEquipment.statusState !== AWPropertiesConstants.FLIGHT_STATUS_SCHEDULED
        ) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnInvalidFlightStatus'));

          return false;
        }

        return true;
      } else {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnMissingRequiredFields'));

        return false;
      }
    }
    if (this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_COMPLETED) {
      if (
        StringUtils.isNullOrEmpty(this.missionEquipment.missionDuration) ||
        StringUtils.isNullOrEmpty(this.missionEquipment.cycleNumber)
      ) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnMissingMissionDurationAndCycle'));

        return false;
      } else {
        const areEngineListCompleted = this.enginesComponent.areEngineListCompleted();
        if (!areEngineListCompleted) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnMissingEngineCycle'));
        }

        return areEngineListCompleted;
      }
    } else {
      return true;
    }
  }

  private validateWorkflowMissingFields(): boolean {
    let validated = true;
    if (this.userWorkflow) {
      let fields: {
        [key: string]: unknown;
      } = {
        aircraftRepresentation: this.aircraftRepresentation,
        ...this.missionEquipment,
        missionCode: this.mission.missionCode,
        sourceSystemId: this.sourceSystemId.attributeValue,
        sourceSystemReference: this.sourceSystemReference.attributeValue,
        missionEquipmentStartDate: this.missionEquipmentStartDate,
        missionEquipmentEndDate: this.missionEquipmentEndDate,
        timeZoneSelected: this.timeZoneSelected,
        engineTable: this.enginesComponent ? this.enginesComponent.engineTable : undefined,
        flightMeasuresTableTitle: this.flightMeasuresComponent ? this.flightMeasuresComponent.table : undefined,
        otherMeasuresTableTitle: this.otherMeasuresComponent ? this.otherMeasuresComponent.table : undefined
      };

      fields = this.addCrewComponentFields(fields);
      fields = this.addPostFlightFields(fields);
      fields = this.addPassengersLoadFields(fields);
      fields = this.addFuelFields(fields);
      fields = this.addHumsFields(fields);
      fields = this.addGonogoFields(fields);

      const missingFields = this.checkMandatoryFields(fields);
      validated = missingFields.length === 0;
    }

    return validated;
  }

  private addGonogoFields(fields: Fields): Fields {
    let returnedFields = fields;
    if (this.gonogoValidationFormComponent) {
      returnedFields = {
        ...fields,
        acrsEventDate: this.gonogoValidationFormComponent.acrsEventDate,
        missionAbilityTable: this.gonogoValidationFormComponent.missionAbilityTable,
        acrsEventStatus: this.gonogoValidationFormComponent.acrsEventStatus,
        acrsAvailabilityTable: this.gonogoValidationFormComponent.acrsAvailabilityTable,
        acrsEventComment: this.gonogoValidationFormComponent.acrsEventComment,
        missionAvailabilityTable: this.gonogoValidationFormComponent.missionAvailabilityTable,
        gonogoValidationComment: this.gonogoValidationFormComponent.gonogoValidationComment,
        defectTable: this.gonogoValidationFormComponent.defectTable
      };
    }

    return returnedFields;
  }

  private addHumsFields(fields: Fields): Fields {
    let returnedFields = fields;
    if (this.humsComponent) {
      returnedFields = {
        ...fields,
        humsStatus: this.humsComponent.humsStatus,
        humsMessage: this.humsComponent.humsMessage
      };
    }

    return returnedFields;
  }

  private addFuelFields(fields: Fields): Fields {
    let returnedFields = fields;
    if (this.fuelComponent) {
      returnedFields = {
        ...fields,
        fuelLoadDesiredTotal: this.fuelComponent.fuelLoadDesiredTotal,
        fuelLoadFactual: this.fuelComponent.fuelLoadFactual,
        fuelLoadDesiredTotal2: this.fuelComponent.fuelLoadDesiredTotal,
        fuelLoadFactual2: this.fuelComponent.fuelLoadFactual,
        realisedFuelUsed: this.fuelComponent.realisedFuelUsed
      };

      if (this.fuelComponent.fuelDataList) {
        this.fuelComponent.fuelDataList.forEach((fuelData) => {
          returnedFields[`fuel${fuelData.type}`] = fuelData.value;
        });
      }
    }

    return returnedFields;
  }

  private addPassengersLoadFields(fields: Fields): Fields {
    let returnedFields = fields;
    if (this.passengersLoadsComponent) {
      returnedFields = {
        ...fields,
        passengers: this.passengersLoadsComponent.passengers,
        shipment: this.passengersLoadsComponent.shipment
      };
    }

    return returnedFields;
  }

  private addPostFlightFields(fields: Fields): Fields {
    let returnedFields = fields;
    if (this.postFlightRecordsComponent) {
      returnedFields = {
        ...fields,
        roleEquipmentTableTitle: this.postFlightRecordsComponent.roleEquipmentTable,
        postFlightVisitTableTitle: this.postFlightRecordsComponent.postFlightVisitTable,
        defectsTableTitle: this.postFlightRecordsComponent.defectTable
      };
    }

    return returnedFields;
  }

  private addCrewComponentFields(fields: Fields): Fields {
    let returnedFields = fields;
    if (this.crewComponent) {
      returnedFields = {
        ...fields,
        crewMemberTableTitle: this.crewComponent.crewMemberTable,
        pilot: this.crewComponent.pilot,
        copilot: this.crewComponent.copilot
      };
    }

    return returnedFields;
  }

  private loadEquipment(): void {
    const equipmentId: BidoEquipmentDTOId = {
      equipmentCode: this.equipmentCode
    };
    this.flightFormService.findBidoEquipment(equipmentId).subscribe((result) => {
      this.equipment = result || {};
      if (this.equipment) {
        this.aircraftRepresentation = BidoEquipmentUtils.createAircraftRepresentation(this.equipment);
      } else {
        this.aircraftRepresentation = '';
      }
      this.previousEquipmentCode = this.equipment.equipmentCode;
      if (!!this.postFlightRecordsComponent) {
        this.postFlightRecordsComponent.onLoad(this.equipment, this.missionCode, this.occurrence);
      }
    });
  }

  /**
   * Return Bido Mission Equipment DTO ID
   */
  private returnBidoMissionEquipmentDTOId(): BidoMissionEquipmentDTOId {
    const bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId = {
      equipmentCode: this.equipmentCode,
      missionCode: this.missionCode,
      occurrence: this.occurrence
    };

    return bidoMissionEquipmentDTOId;
  }

  private loadFlightAttributeData(): void {
    this.flightFormService.getSourceSystemIdList().subscribe((sourceSystemIdList) => {
      this.sourceSystemIdList = ListUtils.orEmpty(sourceSystemIdList);

      const bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId = {
        equipmentCode: this.equipmentCode,
        missionCode: this.missionCode,
        occurrence: this.occurrence
      };

      // Source system id
      const sourceSystemIdInput: FindBidoFlightAttributeInput = {
        bidoMissionEquipmentDTOId,
        attributeId: BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_ID.toString()
      };
      this.flightFormService.findBidoFlightAttribute(sourceSystemIdInput).subscribe((sourceSystemId) => {
        this.sourceSystemId = sourceSystemId || {};
      });

      // Source system reference
      const sourceSystemReferenceInput: FindBidoFlightAttributeInput = {
        bidoMissionEquipmentDTOId,
        attributeId: BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_REFERENCE.toString()
      };
      this.flightFormService.findBidoFlightAttribute(sourceSystemReferenceInput).subscribe((sourceSystemReference) => {
        this.sourceSystemReference = sourceSystemReference || {};
      });
    });
  }

  private loadFlightBaseList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_BASE_MAP).subscribe((results) => {
      this.flightBaseList = SelectItemUtils.fromLabelValues(ListUtils.orEmpty(results));
    });
  }

  private loadFlightCustomerList(): void {
    const criteria: BidoCustomerDTO = {
      customerType: AWPropertiesConstants.CUSTOMER_TYPE_CUS_KEY
    };
    this.flightFormService.findAllBidoCustomerBySearchCriteria(criteria).subscribe((results) => {
      this.flightCustomerList = this.fetchCustomerOperatorList(results);
    });
  }

  private loadFlightOperatorList(): void {
    const criteria: BidoCustomerDTO = {
      isOperator: true
    };
    this.flightFormService.findAllBidoCustomerBySearchCriteria(criteria).subscribe((results) => {
      this.flightOperatorList = this.fetchCustomerOperatorList(results);
    });
  }
  private fetchCustomerOperatorList(results: BidoCustomerDTO[]): SelectItem[] {
    return ListUtils.orEmpty(results)
      .filter((result) => !StringUtils.isNullOrEmpty(result.customerCode))
      .map((result) => {
        const label = StringUtils.isNullOrEmpty(result.customerName)
          ? result.customerCode
          : `${result.customerName} (${result.customerCode})`;

        return {
          label,
          value: result.customerCode as string
        };
      });
  }

  private loadFlightLabelList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_LABEL_MAP).subscribe((results) => {
      this.flightLabelList = SelectItemUtils.fromLabelValues(ListUtils.orEmpty(results));
    });
  }

  private loadFlightLoad(): void {
    const flightLoadInput: FindAllBidoFlightLoadByFlightInput = {
      equipmentCode: this.missionEquipment.equipmentCode as string,
      missionCode: this.missionEquipment.missionCode as string,
      occurrence: this.occurrence
    };
    this.flightFormService.findAllBidoFlightLoadByFlight(flightLoadInput).subscribe((flightLoadResults) => {
      this.propertiesService
        .getConfigurationValue(AWPropertiesConstants.DEFAULT_VOLUME_UNIT)
        .subscribe((defaultVolumeUnitKey) => {
          const uomInput: BireUnitMeasureDTOId = {
            unitCode: defaultVolumeUnitKey
          };
          this.flightFormService.findBireUnitMeasure(uomInput).subscribe((defaultVolumeUnitResult) => {
            this.fuelComponent.onLoad(this.missionEquipment, flightLoadResults, defaultVolumeUnitResult);
            this.passengersLoadsComponent.onLoad(this.missionEquipment, flightLoadResults, defaultVolumeUnitResult);
          });
        });
    });
  }

  private loadFlightStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_STATUS_MAP).subscribe((results) => {
      this.flightStatusList = [];
      results.forEach((result: LabelValue<string>) => {
        this.flightStatusList.push(SelectItemUtils.fromLabelValue(result));
      });
      this.flightLabelStatusList = results;
    });
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.flightStatusList,
      this.missionEquipment ? this.missionEquipment.statusState : undefined
    );
  }

  private loadFlightTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP).subscribe((results) => {
      this.flightTypeList = SelectItemUtils.fromLabelValues(ListUtils.orEmpty(results));
    });
  }

  private loadMeasureReferenceList(equipmentCode: string): void {
    this.flightFormService.findAllBireMeasureReferenceOfStructureByEquipmentCode(equipmentCode).subscribe((results) => {
      this.measureReferenceList = ListUtils.orEmpty(results).filter((result) =>
        ObjectUtils.isDefined(result.counterCode)
      );
    });
  }

  private loadMission(): void {
    const missionId: BidoMissionDTOId = {
      missionCode: this.missionCode
    };
    this.flightFormService.findBidoMission(missionId).subscribe((result) => {
      this.mission = result || {};
      if (!this.mission || StringUtils.isNullOrEmpty(this.mission.missionCode)) {
        this.messageService.showErrorMessage(super.getTranslateKey('errorOnLoadMission'));
      }
    });
  }

  private loadMissionEquipment(): void {
    const missionEquipmentId: BidoMissionEquipmentDTOId = {
      equipmentCode: this.equipmentCode,
      missionCode: this.missionCode,
      occurrence: this.occurrence
    };
    this.flightFormService.findBidoMissionEquipment(missionEquipmentId).subscribe((result) => {
      this.missionEquipment = result || {};
      this.missionEquipmentEndDate = ObjectUtils.isDefined(this.missionEquipment.endDate)
        ? new Date(this.missionEquipment.endDate as number)
        : undefined;
      this.missionEquipmentStartDate = ObjectUtils.isDefined(this.missionEquipment.startDate)
        ? new Date(this.missionEquipment.startDate as number)
        : undefined;
      this.loadUserWorkflow(this.missionEquipment.statusState);
      this.setComponentContextOfGivenFlight(this.missionEquipment.missionInstanceCode);
      this.setTableOfContent();

      if (
        !this.missionEquipment ||
        StringUtils.isNullOrEmpty(this.missionEquipment.equipmentCode) ||
        StringUtils.isNullOrEmpty(this.missionEquipment.missionCode) ||
        StringUtils.isNullOrEmpty(this.missionEquipment.missionInstanceCode)
      ) {
        this.messageService.showErrorMessage(super.getTranslateKey('errorOnLoadMissionEquipment'));
      } else {
        this.chronoNumber = this.missionEquipment.missionInstanceCode;

        if (this.missionEquipment.bidoFlightAttributeDTOList) {
          if (this.sessionService.isSpecificDassault) {
            const manualFlightEntriesAttribute = this.missionEquipment.bidoFlightAttributeDTOList.find(
              (attribute) => attribute.attributeId === BidoAttributeConstants.DAV_MANUAL_FLIGHT_ENTRIES.toString()
            );
            if (manualFlightEntriesAttribute) {
              this.manualFlightEntries = StringUtils.orEmpty(manualFlightEntriesAttribute.attributeValue) === 'true';
            }
          }
        }

        this.loadFlightLoad();

        this.crewComponent.onLoad(this.missionEquipment);
        this.enginesComponent.onLoad(this.equipmentCode, this.missionEquipment);
        this.flightMeasuresComponent.onLoad(this.equipmentCode, this.missionEquipment.missionInstanceCode as string);

        if (this.sessionService.isSpecificDassault) {
          this.humsComponent.onLoad(this.missionEquipment, this.manualFlightEntries);
        }
      }
    });
  }

  private loadMissionPeriodicityList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.MISSION_PERIODICITY_TYPE_MAP).subscribe((results) => {
      this.missionPeriodicityList = SelectItemUtils.fromLabelValues(ListUtils.orEmpty(results));
    });
  }

  public loadOperationalConfigs(): void {
    const criteria: FindBidoFlsBySearchCriteriaInput = {
      bidoFlDTOCriteria: {
        flFunction: AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY,
        statusState: AWPropertiesConstants.FLOC_STATUS_VALIDATED_KEY,
        flIsOpeConf: true
      }
    };
    this.functionalLocationSearchService.searchFunctionalLocationList(criteria).subscribe(
      (results) => {
        if (results) {
          this.operationalConfigs = results.list.map((element) => {
            const statusStateLabel = LabelValueHelper.getLabelByValue(
              this.operationalConfigurationStatusMap,
              element.statusState
            );

            return {
              flCode: element.flCode,
              flDescription: element.flDescription,
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

  public getRequestedConfigLabel(): string {
    let toReturn = '';
    if (!!this.missionEquipment.requestedOpeConfigCode) {
      toReturn = `${this.missionEquipment.requestedOpeConfigCode}`;
      toReturn = toReturn + `(${this.missionEquipment.requestedOpeConfigDescription})`;
    }

    return toReturn;
  }

  private loadOperationalConfigurationStatusMap(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.FLOC_STATUS_MAP)
      .subscribe((result) => (this.operationalConfigurationStatusMap = result));
  }

  private loadKardexMode(): void {
    this.installAssetService.isFunctionalItemStructure().subscribe((result) => {
      this.isFunctionalItemStructure = result;
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
        this.timeZoneSelected = this.dateService.getTimeZoneValue(result);
      });
    });
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: FlightStatusComponent,
      data: this.missionEquipment
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          const currentState = this.missionEquipment.statusState;
          this.missionEquipment.statusState = event.data;
          const saved = this.onSave();
          if (!saved) {
            // Revert status change if save not launched
            this.missionEquipment.statusState = currentState;
          }
        }
      }
    });
  }

  private saveFlightAttributeData(): void {
    const missionEquipmentId: BidoMissionEquipmentDTOId = {
      equipmentCode: this.equipmentCode,
      missionCode: this.missionCode,
      occurrence: this.occurrence
    };

    if (this.sessionService.isSpecificDassault) {
      // Manual Flight entries attribute
      const input: SaveBidoFlightAttributeInput = {
        bidoMissionEquipmentDTOId: missionEquipmentId,
        attributeId: BidoAttributeConstants.DAV_MANUAL_FLIGHT_ENTRIES.toString(),
        attributeValue: String(this.manualFlightEntries)
      };
      this.flightFormService.saveBidoFlightAttribute(input).subscribe();
    }

    if (
      !StringUtils.isNullOrEmpty(this.sourceSystemId.attributeId) ||
      !StringUtils.isNullOrEmpty(this.sourceSystemId.attributeValue)
    ) {
      // Source system id
      const sourceSystemIdInput: SaveBidoFlightAttributeInput = {
        bidoMissionEquipmentDTOId: missionEquipmentId,
        attributeId: BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_ID.toString(),
        attributeValue: StringUtils.orEmpty(this.sourceSystemId.attributeValue)
      };
      this.flightFormService.saveBidoFlightAttribute(sourceSystemIdInput).subscribe();

      // Source system reference
      const sourceSystemReferenceInput: SaveBidoFlightAttributeInput = {
        bidoMissionEquipmentDTOId: missionEquipmentId,
        attributeId: BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_REFERENCE.toString(),
        attributeValue: StringUtils.orEmpty(this.sourceSystemReference.attributeValue)
      };
      this.flightFormService.saveBidoFlightAttribute(sourceSystemReferenceInput).subscribe();
    }
  }

  private setComponentContextOfGivenFlight(missionInstanceCode: string | undefined): void {
    this.componentContext = StringUtils.orEmpty(missionInstanceCode);

    this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
  }

  /******************************************************************************
   * Table Of Content
   *****************************************************************************/

  private setTableOfContent(): void {
    const additionalDataKey = 'page.additionalData';
    const crewKey = this.getTranslateKey('crew');
    const datesAndDurationKey = this.getTranslateKey('datesAndDuration');
    const enginesKey = this.getTranslateKey('engines');
    const flightMeasuresKey = this.getTranslateKey('flightMeasures');
    const fuelKey = this.getTranslateKey('fuel');
    const gonogoValidationStatusKey = this.getTranslateKey('gonogoValidation');
    const humsKey = this.getTranslateKey('hums');
    const mainDataKey = 'page.mainData';
    const otherMeasuresKey = this.getTranslateKey('otherMeasures');
    const passengersLoadsKey = this.getTranslateKey('passengersLoads');
    const postFlightRecordsKey = this.getTranslateKey('postFlightRecords');
    const replenishmentsValidationKey = this.getTranslateKey('replenishmentsValidation');
    const scheduleKey = this.getTranslateKey('schedule');

    this.translateService
      .get([
        additionalDataKey,
        crewKey,
        datesAndDurationKey,
        enginesKey,
        flightMeasuresKey,
        fuelKey,
        gonogoValidationStatusKey,
        humsKey,
        mainDataKey,
        otherMeasuresKey,
        passengersLoadsKey,
        postFlightRecordsKey,
        replenishmentsValidationKey,
        scheduleKey
      ])
      .subscribe((results) => {
        const additionalDataLabel = !!results ? results[additionalDataKey] : 'Additional Information';
        const crewLabel = !!results ? results[crewKey] : 'Crew';
        const datesAndDurationLabel = !!results ? results[datesAndDurationKey] : 'Dates And Duration';
        const enginesLabel = !!results ? results[enginesKey] : 'Engines';
        const flightMeasuresLabel = !!results ? results[flightMeasuresKey] : 'Flight Measures';
        const fuelLabel = !!results ? results[fuelKey] : 'Fuel';
        const gonogoValidationStatusLabel = !!results ? results[gonogoValidationStatusKey] : 'GoNoGo Validation';
        const mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
        const otherMeasuresLabel = !!results ? results[otherMeasuresKey] : 'Other Measures';
        const passengersLoadsLabel = !!results ? results[passengersLoadsKey] : 'Passengers/Loads';
        const replenishmentsValidationLabel = !!results
          ? results[replenishmentsValidationKey]
          : 'Replenishments Validation';
        const scheduleLabel = !!results ? results[scheduleKey] : 'Schedule';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationEltRef,
            label: mainDataLabel
          },
          {
            id: 'gonogoValidationStatusAnchor',
            anchor: this.gonogoValidationStatusEltRef,
            label: gonogoValidationStatusLabel
          },
          {
            id: 'replenishmentsValidationAnchor',
            anchor: this.replenishmentsValidationEltRef,
            label: replenishmentsValidationLabel
          },
          {
            id: 'scheduleAnchor',
            anchor: this.scheduleEltRef,
            label: scheduleLabel
          },
          {
            id: 'datesAndDurationAnchor',
            anchor: this.datesAndDurationEltRef,
            label: datesAndDurationLabel
          },
          {
            id: 'additionalInformationAnchor',
            anchor: this.additionalInformationEltRef,
            label: additionalDataLabel
          },
          {
            id: 'enginesAnchor',
            anchor: this.enginesEltRef,
            label: enginesLabel
          },
          {
            id: 'fuelAnchor',
            anchor: this.fuelEltRef,
            label: fuelLabel
          },
          {
            id: 'flightMeasuresAnchor',
            anchor: this.flightMeasuresEltRef,
            label: flightMeasuresLabel
          },
          {
            id: 'otherMeasuresAnchor',
            anchor: this.otherMeasuresEltRef,
            label: otherMeasuresLabel
          },
          {
            id: 'crewAnchor',
            anchor: this.crewEltRef,
            label: crewLabel
          },
          {
            id: 'passengersLoadsAnchor',
            anchor: this.passengersLoadsEltRef,
            label: passengersLoadsLabel
          }
        ];

        super.selectPageTocEntry('mainInformationAnchor');

        if (this.sessionService.isSpecificDassault) {
          const humsLabel = !!results ? results[humsKey] : 'HUMS';
          const humsTocEntry = {
            id: 'humsAnchor',
            anchor: this.humsEltRef,
            label: humsLabel
          };
          this.toc.splice(FlightFormComponent.TOC_HUMS_INDEX, 0, humsTocEntry);
        }

        if (this.isPostFlightRecordsVisible()) {
          const postFlightRecordsLabel = !!results ? results[postFlightRecordsKey] : 'Post Flight Records';
          const postFlightRecordsEntry = {
            id: 'postFlightRecordsAnchor',
            anchor: this.postFlightRecordsEltRef,
            label: postFlightRecordsLabel
          };
          this.toc = [...this.toc, postFlightRecordsEntry];
        }
      });
  }

  /**
   * Update status update popup
   */
  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;

    const objId: BidoMissionEquipmentDTOId = this.returnBidoMissionEquipmentDTOId();

    const columns: TableColumn[] = [
      { field: 'statusDate', alignment: 'left', width: '6.25rem', isDate: true },
      { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'statusState', alignment: 'left', width: '6.25rem' },
      { field: 'missionInstanceCode', alignment: 'left', width: '6.25rem' },
      { field: 'customerCode', alignment: 'left', width: '6.25rem' },
      { field: 'flightType', alignment: 'left', width: '6.25rem' },
      { field: 'occurrence', alignment: 'left', width: '6.25rem' },
      { field: 'userFlightNumber', alignment: 'left', width: '6.25rem' },
      { field: 'departureLocation', alignment: 'left', width: '6.25rem' },
      { field: 'arrivalLocation', alignment: 'left', width: '6.25rem' },
      { field: 'missionArea', alignment: 'left', width: '6.25rem' },
      { field: 'startDate', alignment: 'left', width: '6.25rem', isDate: true },
      { field: 'endDate', alignment: 'left', width: '6.25rem', isDate: true },
      { field: 'missionDuration', alignment: 'left', width: '6.25rem' },
      { field: 'cycleNumber', alignment: 'left', width: '6.25rem' },
      { field: 'missionCode', alignment: 'left', width: '6.25rem' },
      { field: 'ifrDuration', alignment: 'left', width: '6.25rem' },
      { field: 'dayMission', alignment: 'left', width: '6.25rem' },
      { field: 'nightMission', alignment: 'left', width: '6.25rem' },
      { field: 'flightDetails', alignment: 'left', width: '6.25rem' },
      { field: 'missionComment', alignment: 'left', width: '6.25rem' },
      { field: 'requestedOpeConfigCode', alignment: 'left', width: '6.25rem' },
      { field: 'requestedOpeConfigDetails', alignment: 'left', width: '6.25rem' },
      { field: 'requestedOpeConfigModifs', alignment: 'left', width: '6.25rem' },
      { field: 'engine1AssetCode', alignment: 'left', width: '6.25rem' },
      { field: 'engine2AssetCode', alignment: 'left', width: '6.25rem' },
      { field: 'engine3AssetCode', alignment: 'left', width: '6.25rem' },
      { field: 'engine4AssetCode', alignment: 'left', width: '6.25rem' },
      { field: 'engineStartDate', alignment: 'left', width: '6.25rem', isDate: true },
      { field: 'engineStopDate', alignment: 'left', width: '6.25rem', isDate: true },
      { field: 'engine1CycleNumber', alignment: 'left', width: '6.25rem' },
      { field: 'engine2CycleNumber', alignment: 'left', width: '6.25rem' },
      { field: 'engine3CycleNumber', alignment: 'left', width: '6.25rem' },
      { field: 'engine4CycleNumber', alignment: 'left', width: '6.25rem' },
      { field: 'equipmentCode', alignment: 'left', width: '6.25rem' },
      { field: 'fuelUsed', alignment: 'left', width: '6.25rem' },
      { field: 'commander', alignment: 'left', width: '6.25rem' },
      { field: 'copilot', alignment: 'left', width: '6.25rem' },
      { field: 'crewExtra', alignment: 'left', width: '6.25rem' },
      { field: 'passengerNumber', alignment: 'left', width: '6.25rem' },
      { field: 'shipmentNumber', alignment: 'left', width: '6.25rem' },
      { field: 'plannedPassengerNumber', alignment: 'left', width: '6.25rem' },
      { field: 'deplannedPassengerNumber', alignment: 'left', width: '6.25rem' }
    ];

    this.updatesKeyMap.set('status', of(this.flightLabelStatusList));
    this.updatesKeyMap.set('missionArea', of(this.areaList));

    if (!!objId) {
      this.tableStatusUpdatesData = {
        componentId: 'FlightFormComponent.historicPopup',
        tableCols: columns,
        tableRows: this.flightFormService.findHBidoMissionEquipments(objId),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Multiple,
        globalFilter: false
      };
    } else {
      super.throwUnboundLocalError('openStatusUpdatesPopup', 'this.bidoMissionEquipmentDTO');
    }
  }

  public validateGonogoDisabling(): boolean {
    return (
      this.gonogoValidationFormComponent.gonogoValidationComment === undefined ||
      this.gonogoValidationFormComponent.gonogoValidationComment === null ||
      this.gonogoValidationFormComponent.gonogoValidationComment.trim().length === 0
    );
  }

  public disactivateGonogoCommentReadOnly(): void {
    this.gonogoValidationFormComponent.gonogoValidationCommentReadOnly = false;
  }
}
