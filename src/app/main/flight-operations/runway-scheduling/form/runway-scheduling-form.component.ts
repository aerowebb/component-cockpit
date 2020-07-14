import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PresetManager } from 'bryntum-scheduler';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { BidoEquipmentDTO } from '../../../../../../generated_files/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../../../../generated_files/api-types/bido-fl-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../../generated_files/id/bido-equipment-dto-id.interface';
import { EventModel as GenericEventModel } from '../../../../shared/components/scheduler/event-model.interface';
import { ResourceModel as GenericResourceModel } from '../../../../shared/components/scheduler/resource-model.interface';
import { SchedulerComponent } from '../../../../shared/components/scheduler/scheduler.component';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoRunwaySchedulingFlightInputDTO } from '../../../../shared/types/api-input-types/fleet-management/bido-runway-scheduling-flight-input-dto.interface';
import { FindAllAircraftByCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-all-aircraft-by-criteria-input.interface';
import { FindAllBidoMissionEquipmentByCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-all-bido-mission-equipment-by-criteria-input.interface';
import { BidoMissionEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-mission-equipment-lwo.interface';
import { RunwaySchedulingFlightInfoOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/runway-scheduling-flight-info-outpout-dto.interface';
import { BidoMissionDTO } from '../../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { SaveFlightEquipmentInputDTO } from '../../../../shared/types/api-types/save-flight-equipment-input-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { FlightFormService } from '../../flight/form/flight/flight-form.service';
import { SearchService } from '../../flight/search/search.service';
import { FlightInputData } from '../../flight/types/flight-input-data.interface';
import { MissionEquipmentRow } from '../../flight/types/mission-equipment-row.interface';
import { SchedulingService } from '../scheduling.service';

interface ZoomLevel {
  width: number;
  increment: number;
  resolution: number;
  preset: string;
  resolutionUnit: string;
}

export interface AircraftDisplayedInfo {
  aircraft: BidoEquipmentDTO;
  bidoMissionEquipmentLWO: BidoMissionEquipmentLWO;
  runwaySchedulingFlightInfoOutputDTO?: RunwaySchedulingFlightInfoOutputDTO;
  borderClassColor?: string;
  potentialLabelClassColor?: string;
  aircraftStructureIsLoading: boolean;
  aircraftStructureLoaded: boolean;
}

export interface ResourceModel extends GenericResourceModel {
  data?: BidoMissionEquipmentLWO;
}

export interface EventModel extends GenericEventModel {
  bidoMissionEquipmentLWO: BidoMissionEquipmentLWO;
  runwaySchedulingFlightInfoOutputDTO?: RunwaySchedulingFlightInfoOutputDTO;
  _isSelected?: boolean;
}

@Component({
  selector: 'aw-runway-scheduling-form',
  styleUrls: ['./runway-scheduling-form.component.scss'],
  templateUrl: './runway-scheduling-form.component.html'
})
export class RunwaySchedulingFormComponent extends FormPageComponent<PageComponentData>
  implements OnInit, AfterViewInit {
  // Bryntum default preset
  public static readonly presetHourAndDay: string = 'hourAndDay';

  private static readonly COLUMN_LABEL_CLASS: string = 'column-label';
  private static readonly RED_LABEL_CLASS: string = 'red-label';

  private static readonly ON_CLICK_OPEN_AIRCRAFT_SELECT_CLASS: string = 'aircraft-select';
  private static readonly ON_CLICK_SET_SELECTED_FLIGHT_CLASS: string = 'on-click-set-selected-flight';
  private static readonly ON_CLICK_REMOVE_ASSOCIATION_CLASS: string = 'on-click-remove-flight-association';
  private static readonly ON_CLICK_OPEN_MISSION_CLASS: string = 'mission-number-select';
  private static readonly ON_CLICK_OPEN_FLIGHT_CLASS: string = 'flight-chrono-select';
  private static readonly ON_CLICK_OPEN_OPERATIONAL_CONFIGURATION_CLASS: string = 'operational-configuration-select';

  private static readonly ACTIVE_OVERLOAD: string = 'active-overload';

  private static readonly AIRCRAFT_DEFAULT_CLASS: string = 'aircraft-default';
  private static readonly AIRCRAFT_STATUS_OK_CLASS: string = 'aircraft-status-ok';
  private static readonly AIRCRAFT_STATUS_WARNING_CLASS: string = 'aircraft-status-warning';
  private static readonly AIRCRAFT_STATUS_NOK_CLASS: string = 'aircraft-status-nok';
  private static readonly NO_AIRCRAFT_ASSIGNED_CLASS: string = 'no-aircraft-assigned';

  private static readonly SCHEDULER_ROW_HEIGHT: number = 100;

  private static readonly NO_ATTRIBUTE: string = 'N/A';
  private static readonly EMPTY: string = 'EMPTY';

  public static readonly DURATION_6_HOURS_HOURS_UNIT: number = 6;
  public static readonly DURATION_12_HOURS_HOURS_UNIT: number = 12;
  public static readonly DURATION_24_HOURS_HOURS_UNIT: number = 24;
  public static readonly DURATION_7_DAYS_HOURS_UNIT: number = 168;

  public static readonly DURATION_6_HOURS_KEY: string = 'duration6Hours';
  public static readonly DURATION_12_HOURS_KEY: string = 'duration12Hours';
  public static readonly DURATION_24_HOURS_KEY: string = 'duration24Hours';
  public static readonly DURATION_7_DAYS_KEY: string = 'duration7days';
  public static readonly FIFTY_PERCENT_THAT_IS_VISUAL_CUE: number = 50;

  private static readonly timeDurationUnit: string = 'H';

  private static readonly potentialUnitLabel: string = 'FH';
  private static readonly secondsInMinute: number = 60;
  private static readonly minutesInHour: number = 60;

  private static readonly secondsInHours: number = 3600;
  public context: string;

  public readonly component: typeof RunwaySchedulingFormComponent;
  // Bryntum scheduler variables
  @ViewChild(SchedulerComponent)
  public scheduler: SchedulerComponent;
  public schedulerConfig: object;

  public barMargin: number = 10;
  public flightResources: ResourceModel[];
  private missionFlightCounter = 0;
  public flightEvents: EventModel[] = [];
  public selectedFlight: EventModel;

  private eventCounter: number = 0;
  private bidoMissionEquipmentLWOArray: BidoMissionEquipmentLWO[];
  public availablesAircraftsDto: BidoEquipmentDTO[];
  public availablesAircraftsDisplayedInfo: AircraftDisplayedInfo[];
  public selectedAirCraft: AircraftDisplayedInfo | undefined;

  public showAircraftAssociationColumn: boolean;
  public startViewDate: Date;
  public startDateFormated: string;

  public endViewDate: Date;
  public timeOptionToDisplayList: SelectItem[];
  public defaultSplitButtonValue: number;

  public onTimeOptionChangeLastValue: number;
  public flightBaseList: SelectItem[];

  public selectedBase: string;

  private readonly nbDecimalOnPotential = 2;
  public operationalStatusList: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly schedulingService: SchedulingService,
    private readonly flightFormService: FlightFormService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly searchService: SearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.component = RunwaySchedulingFormComponent;

    // Bryntum init
    this.init();
    this.loadTimeOptionsToDiplayList();
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_RUNWAY_SCHEDULING_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.init();
  }

  public onReload(): void {
    this.startViewDate = new Date();
    this.hideAvailablesAircraftBlock();
    this.defaultSplitButtonValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
    this.onTimeOptionChangeLastValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
    this.roundStartViewDateToThirtyMinutes();
    this.onTimeOptionChange(this.onTimeOptionChangeLastValue);
    this.loadAvailableFlights();
  }

  public init(): void {
    this.flightBaseList = [];
    this.showAircraftAssociationColumn = false;
    this.defaultSplitButtonValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
    this.onTimeOptionChangeLastValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
    this.loadStartViewDateEndViewDate(this.component.DURATION_24_HOURS_HOURS_UNIT);
    this.loadFlightBaseList();
    this.loadOperationalStatusList();
    this.loadSchedulerConfig();
    this.selectedBase = '2';
    this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
    this.displayComponentContext(this.context, this.isCreateOpenMode);
    this.loadAvailableFlights();
  }

  private loadFlightBaseList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_BASE_MAP).subscribe((results) => {
      this.flightBaseList = SelectItemUtils.fromLabelValues(ListUtils.orEmpty(results));
    });
  }

  private loadOperationalStatusList(): void {
    this.schedulingService.getOperationalStatusMap().subscribe((result) => (this.operationalStatusList = result));
  }

  public loadBidoMissionEquipmentByCriteria(startViewDate: Date, endViewDate: Date) {
    const criteria: FindAllBidoMissionEquipmentByCriteriaInput = {
      departureLocation: this.selectedBase,
      flightEndDateFrom: startViewDate,
      flightDateTo: endViewDate,
      hrModuleActivated: true,
      onlyNotAffectedFlights: false
    };
    this.searchService
      .findAllBidoMissionEquipmentByCriteria(criteria)
      .subscribe((resultfindAllBidoMissionEquipmentByCriteria: SearchResultsDTO<BidoMissionEquipmentLWO>) => {
        if (!!resultfindAllBidoMissionEquipmentByCriteria && !!resultfindAllBidoMissionEquipmentByCriteria.list) {
          this.bidoMissionEquipmentLWOArray = resultfindAllBidoMissionEquipmentByCriteria.list;
          this.flightResources = [];
          this.flightEvents = [];
          this.bidoMissionEquipmentLWOArray.forEach((bidoMissionEquipment: BidoMissionEquipmentLWO) => {
            this.buildFlightResource(bidoMissionEquipment);
          });
        }
      });
  }

  private loadAvailableFlights() {
    const criteria: FindAllAircraftByCriteriaInput = {};
    this.schedulingService
      .findAllAircraftByCriteria(criteria)
      .subscribe((results: SearchResultsDTO<BidoEquipmentDTO>) => {
        this.availablesAircraftsDto = results.list;
      });
  }

  private loadRunwaySchedulingFlightInfoOutputDTOAttributeForFlightEventDisplay(
    bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId,
    bidoMissionEquipmentLWO: BidoMissionEquipmentLWO
  ): Observable<RunwaySchedulingFlightInfoOutputDTO> {
    let requestedOpeConfigCode;
    let flightTime;
    if (!!bidoMissionEquipmentLWO) {
      requestedOpeConfigCode = bidoMissionEquipmentLWO.requestedOpeConfigCode;
      if (!!bidoMissionEquipmentLWO.startDate && !!bidoMissionEquipmentLWO.endDate) {
        flightTime = this.getDurationInTimeDuratonUnit(
          bidoMissionEquipmentLWO.startDate,
          bidoMissionEquipmentLWO.endDate
        );
      }
    }
    const bidoRunwaySchedulingFlightInputDTO: BidoRunwaySchedulingFlightInputDTO = {
      bidoMissionEquipmentDTOId,
      requestedOpeConfigCode,
      flightTime,
      flightTimeUnit: this.component.timeDurationUnit
    };

    return this.schedulingService.getRunwaySchedulingFlightInfo(bidoRunwaySchedulingFlightInputDTO);
  }

  public buildAircraftDisplayedInfo(
    aircraft: BidoEquipmentDTO,
    selectedFlight: EventModel,
    requestedOpeConfigCode: string | undefined
  ): void {
    const bidoMissionEquipmentLWO = selectedFlight.bidoMissionEquipmentLWO;
    const bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId = {
      missionCode: bidoMissionEquipmentLWO.missionCode as string,
      equipmentCode: bidoMissionEquipmentLWO.equipmentCode,
      occurrence: bidoMissionEquipmentLWO.occurrence as number
    };
    const runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO = {};
    let aircraftDisplayedInfo: AircraftDisplayedInfo = {
      aircraft,
      bidoMissionEquipmentLWO,
      runwaySchedulingFlightInfoOutputDTO,
      borderClassColor: this.component.AIRCRAFT_DEFAULT_CLASS,
      potentialLabelClassColor: '',
      aircraftStructureIsLoading: true,
      aircraftStructureLoaded: false
    };
    this.availablesAircraftsDisplayedInfo.push(aircraftDisplayedInfo);
    let durationInTimeDuratonUnit = 0;
    if (!!bidoMissionEquipmentLWO && !!bidoMissionEquipmentLWO.startDate && !!bidoMissionEquipmentLWO.endDate) {
      durationInTimeDuratonUnit = this.getDurationInTimeDuratonUnit(
        bidoMissionEquipmentLWO.startDate,
        bidoMissionEquipmentLWO.endDate
      );
    }
    const bidoRunwaySchedulingFlightInputDTO: BidoRunwaySchedulingFlightInputDTO = {
      bidoMissionEquipmentDTOId,
      allocableEquipmentCode: aircraft.equipmentCode,
      requestedOpeConfigCode,
      flightTime: durationInTimeDuratonUnit,
      flightTimeUnit: this.component.timeDurationUnit
    };
    this.schedulingService
      .getRunwaySchedulingFlightInfo(bidoRunwaySchedulingFlightInputDTO)
      .pipe(
        finalize(() => {
          aircraftDisplayedInfo = {
            ...aircraftDisplayedInfo,
            aircraftStructureIsLoading: false
          };
          this.availablesAircraftsDisplayedInfo.splice(
            this.findAvailablesAircraftsDisplayedInfoIndex(aircraftDisplayedInfo),
            1,
            aircraftDisplayedInfo
          );
        })
      )
      .subscribe((result) => {
        aircraftDisplayedInfo = {
          ...aircraftDisplayedInfo,
          runwaySchedulingFlightInfoOutputDTO: result,
          aircraftStructureLoaded: true,
          borderClassColor: this.getEventColorClass(result),
          potentialLabelClassColor: this.getPotentialLabelClass(result)
        };
      });
  }

  private findAvailablesAircraftsDisplayedInfoIndex(aircraftsDisplayedInfo: AircraftDisplayedInfo): number {
    return this.availablesAircraftsDisplayedInfo.findIndex(
      (elt) => elt.aircraft.equipmentCode === aircraftsDisplayedInfo.aircraft.equipmentCode
    );
  }

  private getDurationInTimeDuratonUnit(startDate: Date, endDate: Date): number {
    let duration = 0;
    if (this.component.secondsInHours.toString().toUpperCase() === 's'.toUpperCase()) {
      duration = moment(endDate).seconds() - moment(startDate).seconds();
    } else if (this.component.secondsInHours.toString().toUpperCase() === 'm'.toUpperCase()) {
      duration = moment(endDate).seconds() - moment(startDate).seconds() / this.component.secondsInMinute;
    } else if (this.component.secondsInHours.toString().toUpperCase() === 'h'.toUpperCase()) {
      duration = moment(endDate).seconds() - moment(startDate).seconds() / this.component.secondsInHours;
    }

    return duration;
  }

  private buildFlightResource(bidoMissionEquipment): void {
    const flightResource = {
      id: String(this.generateMissionFlightId()),
      data: bidoMissionEquipment,
      children: []
    };
    this.buildFlightEvent(flightResource);
    this.flightResources.push(flightResource);
    this.flightResources = [...this.flightResources];
  }

  private buildFlightEvent(flightResource: ResourceModel) {
    if (!!flightResource.data) {
      const bidoMissionEquipmentLWO = flightResource.data as BidoMissionEquipmentLWO;
      const startDate = bidoMissionEquipmentLWO.startDate as Date;
      const endDate = bidoMissionEquipmentLWO.endDate as Date;
      let eventModel: EventModel = {
        id: this.generateSchedulerEventId(),
        resourceId: flightResource.id,
        eventType: '',
        startDate,
        endDate,
        bidoMissionEquipmentLWO,
        _isSelected: false,
        eventColor: 'null',
        eventStyle: 'null'
      };

      if (!this.isEmptyEquipmentCode(bidoMissionEquipmentLWO)) {
        const name = this.getName(flightResource.data);
        const bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId = {
          equipmentCode: bidoMissionEquipmentLWO.equipmentCode,
          missionCode: bidoMissionEquipmentLWO.missionCode as string,
          occurrence: bidoMissionEquipmentLWO.occurrence as number
        };
        this.loadRunwaySchedulingFlightInfoOutputDTOAttributeForFlightEventDisplay(
          bidoMissionEquipmentDTOId,
          bidoMissionEquipmentLWO
        ).subscribe((runwaySchedulingFlightInfoOutputDTO) => {
          eventModel = {
            ...eventModel,
            name: runwaySchedulingFlightInfoOutputDTO.sn || name,
            runwaySchedulingFlightInfoOutputDTO
          };
          this.flightEvents.push(eventModel);
          this.flightEvents = [...this.flightEvents];
        });
      } else {
        this.flightEvents.push(eventModel);
      }
    }

    this.flightEvents = [...this.flightEvents];
  }

  private loadStartViewDateEndViewDate(timeDurationHoursUnit: number) {
    if (this.startViewDate == undefined) {
      this.roundStartViewDateToThirtyMinutes();
    }
    this.startDateFormated = moment(this.startViewDate).format(this.sessionService.dateTimeFormatMomentJS);
    this.endViewDate = moment(this.startViewDate)
      .add(timeDurationHoursUnit, 'hours')
      .toDate();
  }

  private loadTimeOptionsToDiplayList(): void {
    const label6Hours = this.getTranslateKey(this.component.DURATION_6_HOURS_KEY);
    const label12Hours = this.getTranslateKey(this.component.DURATION_12_HOURS_KEY);
    const label24Hours = this.getTranslateKey(this.component.DURATION_24_HOURS_KEY);
    const labe7days = this.getTranslateKey(this.component.DURATION_7_DAYS_KEY);
    this.translateService.get([label6Hours, label12Hours, label24Hours, labe7days]).subscribe({
      next: (results: { [key: string]: string }) => {
        this.timeOptionToDisplayList = [
          {
            label: results[label6Hours],
            value: this.component.DURATION_6_HOURS_HOURS_UNIT
          },
          {
            label: results[label12Hours],
            value: this.component.DURATION_12_HOURS_HOURS_UNIT
          },
          {
            label: results[label24Hours],
            value: this.component.DURATION_24_HOURS_HOURS_UNIT
          },
          {
            label: results[labe7days],
            value: this.component.DURATION_7_DAYS_HOURS_UNIT
          }
        ];
      }
    });
  }

  private loadSchedulerConfig(): void {
    this.schedulerConfig = {
      timeRangesFeature: false,
      enableHeaderContextMenu: false,
      zoomOnMouseWheel: false,
      zoomOnTimeAxisDoubleClick: false,
      cellEditFeature: false,
      dependenciesFeature: false,
      dependencyEditFeature: false,
      eventContextMenuFeature: false,
      scheduleContextMenuFeature: false,
      eventDragCreateFeature: false,
      eventDragFeature: false,
      eventEditFeature: false,
      columnLinesFeature: false,
      columnPickerFeature: false,
      columnReorderFeature: false,
      columnResizeFeature: true,
      groupFeature: false,
      sortFeature: false,
      eventResizeFeature: false,
      columnDragToolbarFeature: false,
      zoomKeepsOriginalTimespan: false,
      readOnly: true,
      timeRanges: true,
      filterBarFeature: true,
      eventFilterFeature: false,
      headerContextMenuFeature: {
        processItems({ items }) {
          // Hook to disabled menuItems en right click
          items.length = 0;
        }
      },
      cellTooltipFeature: false,
      scheduleTooltipFeature: false,
      eventTooltipFeature: {
        // Tooltip configs can be used here
        align: 'l-r',
        // A custom HTML template
        template: ({ eventRecord }) =>
          this.getEventTooltip(
            eventRecord.data.bidoMissionEquipmentLWO,
            eventRecord.data.runwaySchedulingFlightInfoOutputDTO
          )
      },
      rowHeight: this.component.SCHEDULER_ROW_HEIGHT,

      eventRenderer: (event) => this.getEventRenderer(event)
    };
    this.setSchedulerDate();
    this.setSchedulerFlightColumn();
    this.setZoomLevelsConfig();
  }

  private setSchedulerDate(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      startDate: this.startViewDate,
      endDate: this.endViewDate,
      viewPreset: this.component.presetHourAndDay
    };
  }

  private setSchedulerFlightColumn(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      columns: [
        {
          text: this.translateService.instant(`${this.getComponentName()}.flights`),
          width: 200,
          htmlEncode: false,
          editor: false,
          enableCellContextMenu: false,
          sortable: (data1, data2) => this.compareToSort(data1.data, data2.data),
          filterable: ({ value, record }) => this.filterMissionColumn(record.data, value),
          renderer: ({ record }) => this.getMissionColumnRenderer(record.data)
        }
      ]
    };
  }

  private setZoomLevelsConfig(): void {
    this.setCustomPresetConfig();
    const zoomLevels: ZoomLevel[] = [
      { width: 50, increment: 15, resolution: 30, preset: 'minuteAndHour', resolutionUnit: 'minute' }, // 6h/15min = 24 ; 24*50 = 1200px
      { width: 50, increment: 30, resolution: 30, preset: 'minuteAndHourCustom', resolutionUnit: 'minute' }, // 12h/30min = 24 ; 24*50 = 1200px
      { width: 50, increment: 1, resolution: 30, preset: 'hourAndDay', resolutionUnit: 'hour' }, // 24h/1day = 24 ; 24*50 = 1200px
      { width: 43, increment: 6, resolution: 30, preset: 'hourAndDay', resolutionUnit: 'hour' } // 7j/6day = 28 ; 1200/28 28*50 ~ 43px
    ];
    this.schedulerConfig = { ...this.schedulerConfig, zoomLevels };
  }

  private setCustomPresetConfig(): void {
    let minuteAndHourCustom: object;
    minuteAndHourCustom = {
      tickWidth: 100,
      tickHeight: 60,
      displayDateFormat: 'll LT',
      shiftIncrement: 1,
      shiftUnit: 'hour',
      defaultSpan: 24,
      timeResolution: {
        unit: 'minute',
        increment: 30
      },
      headerConfig: {
        middle: {
          unit: 'minute',
          increment: '30',
          dateFormat: 'LT'
        },
        top: {
          unit: 'hour',
          dateFormat: 'ddd MM/DD'
        }
      }
    };
    PresetManager.registerPreset('minuteAndHourCustom', minuteAndHourCustom);
  }

  private getMissionColumnRenderer(data: ResourceModel): string {
    const missionCodeLabel = this.translateService.instant(`${this.getComponentName()}.mission`);
    const flightChronoLabel = this.translateService.instant(`${this.getComponentName()}.flightChrono`);
    const operationalConfigLabel = this.translateService.instant(`${this.getComponentName()}.operationalConfig`);
    let returnTemplate = '';
    if (!!data.data) {
      let operationalConfigTemplate = '';
      if (data.data.requestedOpeConfigCode) {
        const requestedOpeConfigCode = data.data.requestedOpeConfigCode;
        operationalConfigTemplate = `<a id=${data.id}>
              <span id=${data.id}
                    class="${this.component.COLUMN_LABEL_CLASS}
                     ${this.component.ON_CLICK_OPEN_OPERATIONAL_CONFIGURATION_CLASS}">
                    ${operationalConfigLabel}: ${requestedOpeConfigCode}
              </span>
          </a>`;
      }
      returnTemplate = `
          <div>
              <a id=${data.id}>
                  <span id=${data.id} class="${this.component.COLUMN_LABEL_CLASS}
                  ${this.component.ON_CLICK_OPEN_MISSION_CLASS}">
                      ${missionCodeLabel}: ${data.data.missionCode}
                  </span>
              </a>
              </br>
              <a id=${data.id}>
                  <span id=${data.id} class="${this.component.COLUMN_LABEL_CLASS}
                   ${this.component.ON_CLICK_OPEN_FLIGHT_CLASS}">
                      ${flightChronoLabel}: ${data.data.chronoNumber}
                  </span>
              </a>
              </br>
              ${operationalConfigTemplate}
          </div>
        `;
    }

    return returnTemplate;
  }

  private getEventTooltip(
    bidoMissionEquipmentLWO: BidoMissionEquipmentLWO,
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let eventHTML = '<table><tbody>';
    if (!!runwaySchedulingFlightInfoOutputDTO) {
      const msnRowHTML = this.getMSNRow(runwaySchedulingFlightInfoOutputDTO);
      eventHTML += msnRowHTML;
    }
    const startDateRowHTML = this.getStartDateRow(bidoMissionEquipmentLWO);
    if (!!startDateRowHTML) {
      eventHTML += startDateRowHTML;
    }
    const endDateRowHTML = this.getEndDateRow(bidoMissionEquipmentLWO);
    if (!!endDateRowHTML) {
      eventHTML += endDateRowHTML;
    }
    if (!!runwaySchedulingFlightInfoOutputDTO) {
      const aicraftStateRowHTML = this.getAicraftStateRow(runwaySchedulingFlightInfoOutputDTO);
      if (!!aicraftStateRowHTML) {
        eventHTML += aicraftStateRowHTML;
      }
      const nbInstallsRemovalsHTML = this.getInstallationsRemovalsRow(runwaySchedulingFlightInfoOutputDTO);
      eventHTML += nbInstallsRemovalsHTML;

      const potentialStatus = this.potentialStatusRow(runwaySchedulingFlightInfoOutputDTO);
      eventHTML += potentialStatus;

      const taskRowHTML = this.getTaskRow(runwaySchedulingFlightInfoOutputDTO);
      if (!!taskRowHTML) {
        eventHTML += taskRowHTML;
      }
      const defectRowHTML = this.getDefectRow(runwaySchedulingFlightInfoOutputDTO);
      if (!!defectRowHTML) {
        eventHTML += defectRowHTML;
      }
      const workPackageRowHTML = this.getWorkPackageRow(runwaySchedulingFlightInfoOutputDTO);
      if (!!workPackageRowHTML) {
        eventHTML += workPackageRowHTML;
      }
      const fuelDeltaRowHTML = this.getFuelDeltaRow(runwaySchedulingFlightInfoOutputDTO);
      if (!!fuelDeltaRowHTML) {
        eventHTML += fuelDeltaRowHTML;
      }
    }
    eventHTML += '</tbody></table>';

    return eventHTML;
  }

  private potentialStatusRow(runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO): string {
    let potentialStatusRowHTML;
    const insufficiantLabel = this.translateService.instant(`${this.getComponentName()}.insufficientPotential`);
    const sufficiantLabel = this.translateService.instant(`${this.getComponentName()}.sufficientPotential`);
    const potentialStatus =
      runwaySchedulingFlightInfoOutputDTO.potentialStatus === ControlConfigConstants.ICON_GREEN_LED_CODE
        ? sufficiantLabel
        : insufficiantLabel;

    potentialStatusRowHTML = `<tr><td>${potentialStatus}</td><tr>`;

    return potentialStatusRowHTML;
  }

  private getInstallationsRemovalsRow(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO
  ): string {
    let installationsRemovalsRowHTML;
    const installRemovalsLabel = this.translateService.instant(
      `${this.getComponentName()}.requiredInstallationsRemovals`
    );
    const installations = this.getInstallations(runwaySchedulingFlightInfoOutputDTO);
    const removals = this.getRemovals(runwaySchedulingFlightInfoOutputDTO);
    const installationsRemovals = !!installations
      ? installations + ' - ' + removals
      : RunwaySchedulingFormComponent.NO_ATTRIBUTE + ' - ' + RunwaySchedulingFormComponent.NO_ATTRIBUTE;

    installationsRemovalsRowHTML = `<tr><td>${installRemovalsLabel}:</td><td>${installationsRemovals}</td><tr>`;

    return installationsRemovalsRowHTML;
  }

  private getWorkPackageRow(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO
  ): string | undefined {
    let workPackageRowHTML;
    if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
      const workPackageLabel = this.translateService.instant(`${this.getComponentName()}.workPackage`);
      const woNumber = this.getWorkPackagesNumber(runwaySchedulingFlightInfoOutputDTO);
      workPackageRowHTML = `<tr><td>${workPackageLabel}:</td><td>${woNumber}</td><tr>`;
    }

    return workPackageRowHTML;
  }

  private getFuelDeltaRow(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string | undefined {
    let fuelDeltaRowHTML;
    if (runwaySchedulingFlightInfoOutputDTO && !!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
      const fuelDeltaLabel = this.translateService.instant(`${this.getComponentName()}.fuelDelta`);
      const fuelDelta = this.getFuelDeltaNumber(runwaySchedulingFlightInfoOutputDTO);
      const fuelDeltaUnit = this.getFuelDeltaUnit(runwaySchedulingFlightInfoOutputDTO);
      fuelDeltaRowHTML = `<tr><td>${fuelDeltaLabel}:</td><td>${fuelDelta} ${fuelDeltaUnit}</td><tr>`;
    }

    return fuelDeltaRowHTML;
  }

  private getDefectRow(runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO): string | undefined {
    let defectRowHTML;
    if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
      const defectsLabel = this.translateService.instant(`${this.getComponentName()}.defects`);
      const defectNumber = this.getDefectsNumber(runwaySchedulingFlightInfoOutputDTO);
      defectRowHTML = `<tr><td>${defectsLabel}:</td><td>${defectNumber}</td><tr>`;
    }

    return defectRowHTML;
  }

  private getTaskRow(runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO): string | undefined {
    let tasksRowHTML;
    if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
      const tasksLabel = this.translateService.instant(`${this.getComponentName()}.tasks`);
      const taskNumber = this.getTasksNumber(runwaySchedulingFlightInfoOutputDTO);
      tasksRowHTML = `<tr><td>${tasksLabel}:</td><td>${taskNumber}</td><tr>`;
    }

    return tasksRowHTML;
  }

  private getAicraftStateRow(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO
  ): string | undefined {
    let acStateRowHTML;
    if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
      const acStateLabel = this.translateService.instant(`${this.getComponentName()}.acState`);
      const acState = this.findOperationalStatusLabelByValue(runwaySchedulingFlightInfoOutputDTO.equipmentStatus);
      acStateRowHTML = `<tr><td>${acStateLabel}:</td><td>${acState}</td><tr>`;
    }

    return acStateRowHTML;
  }

  private getMSNRow(runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO) {
    return `<tr><td>${runwaySchedulingFlightInfoOutputDTO.sn}</td><tr>`;
  }

  private getStartDateRow(bidoMissionEquipmentLWO: BidoMissionEquipmentLWO): string | undefined {
    let startDateRowHTML;
    if (!!bidoMissionEquipmentLWO.startDate) {
      const startDateLabel = this.translateService.instant(`${this.getComponentName()}.startDate`);
      const startDateValue = moment(bidoMissionEquipmentLWO.startDate).format(
        this.sessionService.dateTimeFormatMomentJS
      );
      startDateRowHTML = `<tr><td>${startDateLabel}:</td><td>${startDateValue}</td><tr>`;
    }

    return startDateRowHTML;
  }

  private getEndDateRow(bidoMissionEquipmentLWO: BidoMissionEquipmentLWO): string | undefined {
    let endDateRowHTML;
    if (!!bidoMissionEquipmentLWO.endDate) {
      const endDateLabel = this.translateService.instant(`${this.getComponentName()}.endDate`);
      endDateRowHTML = moment(bidoMissionEquipmentLWO.endDate).format(this.sessionService.dateTimeFormatMomentJS);
      endDateRowHTML = `<tr><td>${endDateLabel}:</td><td>${endDateRowHTML}</td><tr>`;
    }

    return endDateRowHTML;
  }

  private getEventRenderer(event: { eventRecord; resourceRecord; tplData }): string {
    let eventHTML = '';
    const eventModel = event.tplData.event.data as EventModel;

    const bidoMissionEquipmentLWO = eventModel.bidoMissionEquipmentLWO;
    const runwaySchedulingFlightInfoOutputDTO = eventModel.runwaySchedulingFlightInfoOutputDTO;
    if (this.isEmptyEquipmentCode(bidoMissionEquipmentLWO)) {
      const noAircraftAssignedOnFlightLabel = this.translateService.instant(
        `${this.getComponentName()}.noAircraftAssigned`
      );
      let NO_AIRCRAFT =
        this.component.AIRCRAFT_DEFAULT_CLASS +
        ' ' +
        this.component.NO_AIRCRAFT_ASSIGNED_CLASS +
        ' ' +
        this.component.ON_CLICK_SET_SELECTED_FLIGHT_CLASS;
      if (eventModel._isSelected) {
        NO_AIRCRAFT = NO_AIRCRAFT + ' ' + this.component.ACTIVE_OVERLOAD;
      }
      event.tplData.cls += NO_AIRCRAFT;
      eventHTML = `
                <div id=${bidoMissionEquipmentLWO.chronoNumber}>
                    ${noAircraftAssignedOnFlightLabel}
                </div>
      `;
    } else {
      let installationsRemovalsHTML = '';
      if (!!bidoMissionEquipmentLWO && !!bidoMissionEquipmentLWO.requestedOpeConfigCode) {
        const installationsRemovals = this.getInstallationsRemovals(runwaySchedulingFlightInfoOutputDTO);
        installationsRemovalsHTML = `
          <div>
            ${installationsRemovals}
          </div>`;
      }
      const potential = this.getPotentialInHours(runwaySchedulingFlightInfoOutputDTO);
      const eventColorClass = this.getEventColorClass(runwaySchedulingFlightInfoOutputDTO);
      const potentialLabelClass = this.getPotentialLabelClass(runwaySchedulingFlightInfoOutputDTO);
      event.tplData.cls += eventColorClass;
      eventHTML = `
      <div>
        <div>
          <a id=${event.resourceRecord.id}
            class=${this.component.ON_CLICK_OPEN_AIRCRAFT_SELECT_CLASS}>
                ${eventModel.name}
          </a>
          <i class="material-icons ${this.component.ON_CLICK_REMOVE_ASSOCIATION_CLASS}">
            close
          </i>
        </div>
          ${installationsRemovalsHTML}
        <div class=${potentialLabelClass}> ${this.potentialLabel}: ${potential}</div>
      </div>
      `;
    }

    return eventHTML;
  }

  public getPotentialInHours(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let durationInpoint = this.component.NO_ATTRIBUTE;
    if (
      !!runwaySchedulingFlightInfoOutputDTO &&
      !!runwaySchedulingFlightInfoOutputDTO.potential &&
      !!runwaySchedulingFlightInfoOutputDTO.potentialUnit
    ) {
      if (runwaySchedulingFlightInfoOutputDTO.potentialUnit.toUpperCase() === 's'.toUpperCase()) {
        durationInpoint = (runwaySchedulingFlightInfoOutputDTO.potential / this.component.secondsInHours).toFixed(
          this.nbDecimalOnPotential
        );
      } else if (runwaySchedulingFlightInfoOutputDTO.potentialUnit.toUpperCase() === 'm'.toUpperCase()) {
        durationInpoint = (runwaySchedulingFlightInfoOutputDTO.potential / this.component.minutesInHour).toFixed(
          this.nbDecimalOnPotential
        );
      } else if (runwaySchedulingFlightInfoOutputDTO.potentialUnit.toUpperCase() === 'h'.toUpperCase()) {
        durationInpoint = runwaySchedulingFlightInfoOutputDTO.potential.toFixed(this.nbDecimalOnPotential);
      }
    }
    durationInpoint += ' ' + this.component.potentialUnitLabel;

    return durationInpoint;
  }

  private getPotentialLabelClass(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let potentialLabelClass = '';
    if (
      !!runwaySchedulingFlightInfoOutputDTO &&
      !!runwaySchedulingFlightInfoOutputDTO.potentialStatus &&
      ControlConfigConstants.ICON_RED === runwaySchedulingFlightInfoOutputDTO.potentialStatus
    ) {
      potentialLabelClass = this.component.RED_LABEL_CLASS;
    }

    return potentialLabelClass;
  }

  private getEventColorClass(runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined) {
    let statusClass = this.component.AIRCRAFT_DEFAULT_CLASS;
    if (!!runwaySchedulingFlightInfoOutputDTO && !!runwaySchedulingFlightInfoOutputDTO.eventStatus) {
      if (runwaySchedulingFlightInfoOutputDTO.eventStatus === ControlConfigConstants.ICON_GREEN) {
        statusClass += ' ' + this.component.AIRCRAFT_STATUS_OK_CLASS;
      } else if (runwaySchedulingFlightInfoOutputDTO.eventStatus === ControlConfigConstants.ICON_YELLOW) {
        statusClass += ' ' + this.component.AIRCRAFT_STATUS_WARNING_CLASS;
      } else if (runwaySchedulingFlightInfoOutputDTO.eventStatus === ControlConfigConstants.ICON_RED) {
        statusClass += ' ' + this.component.AIRCRAFT_STATUS_NOK_CLASS;
      }
    }

    return statusClass;
  }

  public get potentialLabel() {
    return this.translateService.instant(`${this.getComponentName()}.potential`);
  }

  private registerSchedulerListeners(): void {
    if (!!this.scheduler.schedulerEngine) {
      this.scheduler.schedulerEngine.on({
        eventClick: 'onEventClick',
        cellClick: 'onCellClick',
        thisObj: this
      });
    }
  }

  private changeEventSelectedClass(): void {
    if (!!this.scheduler.schedulerEngine) {
      this.scheduler.schedulerEngine.setEventSelectedCls('active-overload');
    }
  }

  // tslint:disable-next-line:no-any
  public onCellClick(config: any): void {
    const eventTarget = config.event.target as HTMLElement;
    if (eventTarget.classList.contains(this.component.ON_CLICK_OPEN_MISSION_CLASS)) {
      this.openMission(eventTarget.id);
    } else if (eventTarget.classList.contains(this.component.ON_CLICK_OPEN_FLIGHT_CLASS)) {
      this.openFlightFromResourceId(eventTarget.id);
    } else if (eventTarget.classList.contains(this.component.ON_CLICK_OPEN_OPERATIONAL_CONFIGURATION_CLASS)) {
      this.openOperationalConfigurationFromResourceId(eventTarget.id);
    }
  }

  // tslint:disable-next-line:no-any
  public onEventClick(config: any): void {
    this.scheduler.schedulerEngine.clearEventSelection();
    if (!!config.eventRecord) {
      const eventModel = config.eventRecord.data as EventModel;
      if (!!eventModel && !!eventModel.bidoMissionEquipmentLWO) {
        if (this.isEmptyEquipmentCode(eventModel.bidoMissionEquipmentLWO)) {
          this.setSelectedFlight(eventModel.bidoMissionEquipmentLWO.chronoNumber as string);
        } else {
          this.hideAvailablesAircraftBlock();
        }
      }
      if (
        !!config &&
        !!config.event &&
        !!config.event.target &&
        !!eventModel.bidoMissionEquipmentLWO.equipmentCode &&
        config.event.target.classList.contains(this.component.ON_CLICK_OPEN_AIRCRAFT_SELECT_CLASS)
      ) {
        this.openAircraft(eventModel.bidoMissionEquipmentLWO.equipmentCode);
      }
      if (
        !!config &&
        !!config.event &&
        !!config.event.target &&
        !!eventModel.bidoMissionEquipmentLWO &&
        config.event.target.classList.contains(this.component.ON_CLICK_REMOVE_ASSOCIATION_CLASS)
      ) {
        this.unAssociateAircraft(eventModel.bidoMissionEquipmentLWO);
      }
    }
  }

  public onTimeOptionChange(timeInHours: number): void {
    this.loadStartEndViewDateAndChangeSchedulerConfigAccordingly(timeInHours);
    if (this.onTimeOptionChangeLastValue < timeInHours) {
      this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
    }
    this.onTimeOptionChangeLastValue = timeInHours;
  }

  private loadStartEndViewDateAndChangeSchedulerConfigAccordingly(timeInHours: number) {
    this.loadStartViewDateEndViewDate(timeInHours);
    this.scheduler.schedulerEngine.zoomLevel = this.getZoomLevelAccordingToSelectedTimeDurationHoursUnit(timeInHours);
    this.scheduler.schedulerEngine.setTimeSpan(this.startViewDate, this.endViewDate);
    this.scheduler.schedulerEngine.scrollLeft = 0;
  }

  public setSelectedFlight(chronoNumber: string): void {
    const selectedFlight = this.findFlightEventByChronoNumber(chronoNumber);

    if (!!selectedFlight && this.isEmptyEquipmentCode(selectedFlight.bidoMissionEquipmentLWO)) {
      if (!!this.selectedFlight && selectedFlight !== this.selectedFlight) {
        this.selectedFlight._isSelected = false;
      }
      this.showAvailablesAircraftBlock();
      selectedFlight._isSelected = true;
      this.selectedFlight = selectedFlight;
      const requestedOpeConfigCode =
        !!selectedFlight && !!selectedFlight.bidoMissionEquipmentLWO.requestedOpeConfigCode
          ? selectedFlight.bidoMissionEquipmentLWO.requestedOpeConfigCode
          : undefined;
      this.availablesAircraftsDisplayedInfo = [];
      this.availablesAircraftsDto.forEach((aircraftDto) => {
        this.buildAircraftDisplayedInfo(aircraftDto, selectedFlight, requestedOpeConfigCode);
      });
    }
  }

  private unAssociateAircraft(bidoMissionEquipmentLWO: BidoMissionEquipmentLWO): void {
    this.confirmationService.confirm({
      messageKey: this.translateService.instant(`${this.getComponentName()}.confirmUnAssociate`),
      accept: () => {
        if (!!bidoMissionEquipmentLWO.equipmentCode && !!bidoMissionEquipmentLWO.chronoNumber) {
          this.saveUnAssociateAircraft(bidoMissionEquipmentLWO.chronoNumber, bidoMissionEquipmentLWO.equipmentCode);
        }
      }
    });
  }

  private saveUnAssociateAircraft(chrononumber: string, equipmentCode: string): void {
    const flightToDissociate = this.findFlightEventByChronoNumber(chrononumber) as EventModel;
    const equipmentDTO = this.findavailablesAircraftsDtoByEquipmentCode(equipmentCode) as BidoEquipmentDTO;

    const saveFlightEquipmentInputDTO: SaveFlightEquipmentInputDTO = {
      newEquipmentCode: this.component.EMPTY,
      missionCode: flightToDissociate.bidoMissionEquipmentLWO.missionCode as string,
      familyVariantCode: equipmentDTO.familyVariantCode as string,
      occurence: flightToDissociate.bidoMissionEquipmentLWO.occurrence as number,
      previousEquipmentCode: equipmentDTO.equipmentCode
    };
    this.flightFormService.updateFlightEquipment(saveFlightEquipmentInputDTO).subscribe(
      () => {
        this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  public associateAircraft(acToAssociate: AircraftDisplayedInfo) {
    this.confirmationService.confirm({
      messageKey: this.translateService.instant(`${this.getComponentName()}.confirmAircraftAssignment`),
      accept: () => {
        if (!!acToAssociate.aircraft.equipmentCode) {
          this.selectedFlight.bidoMissionEquipmentLWO.equipmentCode = acToAssociate.aircraft.equipmentCode;
          this.saveFlightAttributeData(acToAssociate);
        }
      }
    });
  }

  private saveFlightAttributeData(acToAssociate: AircraftDisplayedInfo): void {
    const missionEquipment = this.findMissionEquipmentTableOutputByChronoNumber(
      this.selectedFlight.bidoMissionEquipmentLWO.chronoNumber as string
    ) as BidoMissionEquipmentLWO;
    const saveFlightEquipmentInputDTO: SaveFlightEquipmentInputDTO = {
      newEquipmentCode: acToAssociate.aircraft.equipmentCode as string,
      missionCode: missionEquipment.missionCode as string,
      familyVariantCode: acToAssociate.aircraft.familyVariantCode as string,
      occurence: missionEquipment.occurrence as number,
      previousEquipmentCode: ''
    };
    this.flightFormService.updateFlightEquipment(saveFlightEquipmentInputDTO).subscribe(
      () => {
        this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  private getName(bidoMissionEquipmentLWO: BidoMissionEquipmentLWO): string {
    let name = this.component.NO_ATTRIBUTE;
    if (bidoMissionEquipmentLWO.asset) {
      name = this.getMSNFromLabel(bidoMissionEquipmentLWO.asset);
    }

    return name;
  }

  private getInstallationsRemovals(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ) {
    const requiredInstallationsRemovalsLabel = this.translateService.instant(
      `${this.getComponentName()}.requiredInstallationsRemovals`
    );
    const installationsRemovals = `
      ${requiredInstallationsRemovalsLabel}:
       ${this.getInstallations(runwaySchedulingFlightInfoOutputDTO)} - ${this.getRemovals(
      runwaySchedulingFlightInfoOutputDTO
    )}`;

    return installationsRemovals;
  }

  private findOperationalStatusLabelByValue(potentialStatus: string): string {
    const operationalStatus = this.operationalStatusList.find(
      (elt: LabelValue<string>) => elt.value === potentialStatus
    ) as LabelValue<string>;

    return operationalStatus.label;
  }

  private getInstallations(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let installations = this.component.NO_ATTRIBUTE;
    if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.requiredInstalls != undefined) {
      installations = runwaySchedulingFlightInfoOutputDTO.requiredInstalls.toString();
    }

    return installations;
  }

  private getRemovals(runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined): string {
    let removals = this.component.NO_ATTRIBUTE;
    if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.requiredRemovals != undefined) {
      removals = runwaySchedulingFlightInfoOutputDTO.requiredRemovals.toString();
    }

    return removals;
  }

  private getTasksNumber(runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined): string {
    let task = this.component.NO_ATTRIBUTE;
    if (runwaySchedulingFlightInfoOutputDTO && !!runwaySchedulingFlightInfoOutputDTO.nbTasks) {
      task = runwaySchedulingFlightInfoOutputDTO.nbTasks.toString();
    }

    return task;
  }

  private getDefectsNumber(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let defect = this.component.NO_ATTRIBUTE;
    if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.nbDefects != undefined) {
      defect = runwaySchedulingFlightInfoOutputDTO.nbDefects.toString();
    }

    return defect;
  }

  private getFuelDeltaNumber(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let fuelDelta = this.component.NO_ATTRIBUTE;
    if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.fuelDelta != undefined) {
      fuelDelta = runwaySchedulingFlightInfoOutputDTO.fuelDelta.toString();
    }

    return fuelDelta;
  }

  private getFuelDeltaUnit(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let fuelDeltaUnit = this.component.NO_ATTRIBUTE;
    if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.fuelDeltaUnit) {
      fuelDeltaUnit = runwaySchedulingFlightInfoOutputDTO.fuelDeltaUnit.toString();
    }

    return fuelDeltaUnit;
  }

  private getWorkPackagesNumber(
    runwaySchedulingFlightInfoOutputDTO: RunwaySchedulingFlightInfoOutputDTO | undefined
  ): string {
    let wp = this.component.NO_ATTRIBUTE;
    if (
      runwaySchedulingFlightInfoOutputDTO &&
      runwaySchedulingFlightInfoOutputDTO.nbScheduledWorkPackages != undefined
    ) {
      wp = runwaySchedulingFlightInfoOutputDTO.nbScheduledWorkPackages.toString();
    }

    return wp;
  }

  private openFlightFromResourceId(resourceId: string): void {
    const missionEquipmentTableOutputDTO = this.findFlightResrourceFromId(resourceId);

    if (!!missionEquipmentTableOutputDTO) {
      const flight: MissionEquipmentRow = {
        equipmentCode: missionEquipmentTableOutputDTO.equipmentCode as string,
        missionCode: missionEquipmentTableOutputDTO.missionCode as string,
        occurrence: missionEquipmentTableOutputDTO.occurrence as number,
        asset: '',
        chronoNumber: '',
        copilot: '',
        customer: '',
        cycleNumber: '',
        duration: '',
        endDate: '',
        engineStartDate: '',
        engineStopDate: '',
        flightType: '',
        fuelUsed: '',
        ifrDuration: '',
        missionArrivalLocation: '',
        missionDepartureLocation: '',
        missionNumber: '',
        pilot: '',
        startDate: '',
        statusState: ''
      };

      this.openMissionEquipment(flight, ComponentOpenMode.Read);
    }
  }

  private openOperationalConfigurationFromResourceId(resourceId: string): void {
    const missionEquipmentTableOutputDTO = this.findFlightResrourceFromId(resourceId);
    if (!!missionEquipmentTableOutputDTO) {
      const functionalLocationDto: BidoFlDTO = {
        flCode: missionEquipmentTableOutputDTO.requestedOpeConfigCode
      };
      this.openOperationalConfiguration(functionalLocationDto, ComponentOpenMode.Read);
    }
  }

  private openOperationalConfiguration(functionalLocationDto: BidoFlDTO, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_OPERATIONAL_CONFIGURATION_FORM,
      objectId:
        functionalLocationDto != undefined ? this.serializationService.serialize(functionalLocationDto) : undefined,
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openMissionEquipment(missionEquipment: MissionEquipmentRow | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHT_FORM,
      openMode
    };
    if (!!missionEquipment) {
      const missionEquipmentId: FlightInputData = {
        equipmentCode: missionEquipment.equipmentCode,
        missionCode: missionEquipment.missionCode,
        occurrence: missionEquipment.occurrence,
        chronoNumber: missionEquipment.chronoNumber
      };
      data.objectId = this.serializationService.serialize(missionEquipmentId);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openMission(resourceId: string): void {
    const missionEquipmentTableOutputDTO = this.findFlightResrourceFromId(resourceId);
    const bidoMissionDTO: BidoMissionDTO = {
      missionCode: !!missionEquipmentTableOutputDTO ? missionEquipmentTableOutputDTO.missionCode : ''
    };

    const labelKey = 'transaction.MissionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHTS_MISSION_FORM,
      objectId: this.serializationService.serialize(bidoMissionDTO),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAircraft(aircraftEquipmentCode: string): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
      openMode: ComponentOpenMode.Read
    };
    if (!!aircraftEquipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: aircraftEquipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private compareToSort(data1: BidoMissionEquipmentLWO, data2: BidoMissionEquipmentLWO): number {
    const moment1 = moment(data1.startDate);
    const moment2 = moment(data2.startDate);
    if (moment1.isSame(moment2)) {
      return 0;
    } else if (moment1.isBefore(moment2)) {
      return -1;
    } else {
      return 1;
    }
  }

  private filterMissionColumn(data: ResourceModel, value: string): boolean {
    const bidoMissionEquipmentLWO = data.data as BidoMissionEquipmentLWO;

    return (
      !!bidoMissionEquipmentLWO &&
      ((!!bidoMissionEquipmentLWO.chronoNumber &&
        bidoMissionEquipmentLWO.chronoNumber.toUpperCase().includes(value.toUpperCase())) ||
        (!!bidoMissionEquipmentLWO.requestedOpeConfigCode &&
          bidoMissionEquipmentLWO.requestedOpeConfigCode.toUpperCase().includes(value.toUpperCase())) ||
        (!!bidoMissionEquipmentLWO.missionCode &&
          bidoMissionEquipmentLWO.missionCode.toUpperCase().includes(value.toUpperCase())))
    );
  }

  private getZoomLevelAccordingToSelectedTimeDurationHoursUnit(timeDurationHoursUnit: number): number {
    let zoomLevel;
    if (timeDurationHoursUnit === this.component.DURATION_6_HOURS_HOURS_UNIT) {
      zoomLevel = 0;
    } else if (timeDurationHoursUnit === this.component.DURATION_12_HOURS_HOURS_UNIT) {
      zoomLevel = 1;
    } else if (timeDurationHoursUnit === this.component.DURATION_24_HOURS_HOURS_UNIT) {
      zoomLevel = 2;
    } else if (timeDurationHoursUnit === this.component.DURATION_7_DAYS_HOURS_UNIT) {
      // tslint:disable-next-line:no-magic-numbers
      zoomLevel = 3;
    } else {
      zoomLevel = 2;
    }

    return zoomLevel;
  }

  public ngAfterViewInit(): void {
    this.registerSchedulerListeners();
    this.changeEventSelectedClass();
    if (!!this.scheduler.schedulerEngine) {
      if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
        this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
      } else {
        this.scheduler.schedulerEngine.localeManager.locale = 'En';
      }
    }
  }

  private findavailablesAircraftsDtoByEquipmentCode(equipmentCode: string): BidoEquipmentDTO | undefined {
    return this.availablesAircraftsDto.find((elt) => equipmentCode === elt.equipmentCode);
  }

  private findMissionEquipmentTableOutputByChronoNumber(chronoNumber: string): BidoMissionEquipmentLWO | undefined {
    return this.bidoMissionEquipmentLWOArray.find((elt) => elt.chronoNumber === chronoNumber);
  }

  private findFlightEventByChronoNumber(chronoNumber: string): EventModel | undefined {
    return this.flightEvents.find((flight) => {
      return flight.bidoMissionEquipmentLWO.chronoNumber === chronoNumber;
    });
  }

  private findFlightResrourceFromId(resourceId: string): BidoMissionEquipmentLWO | undefined {
    const flightResourceModel = this.flightResources.find((flight) => flight.id === resourceId);

    return !!flightResourceModel ? flightResourceModel.data : undefined;
  }

  private isEmptyEquipmentCode(bidoMissionEquipmentLWO: BidoMissionEquipmentLWO | undefined): boolean {
    if (!bidoMissionEquipmentLWO) {
      return true;
    } else {
      return !bidoMissionEquipmentLWO.equipmentCode || this.component.EMPTY === bidoMissionEquipmentLWO.equipmentCode;
    }
  }

  private getMSNFromLabel(label: string): string {
    return label.split('|')[2].trim();
  }

  private generateMissionFlightId(): number {
    return this.missionFlightCounter++;
  }

  private generateSchedulerEventId(): number {
    return ++this.eventCounter;
  }

  private hideAvailablesAircraftBlock(): void {
    this.showAircraftAssociationColumn = false;
  }

  private showAvailablesAircraftBlock(): void {
    if (!(this.availablesAircraftsDto.length > 0)) {
      this.messageService.showInfoMessage(this.getTranslateKey('noAircraftAvailable'));
    } else {
      this.showAircraftAssociationColumn = true;
    }
  }

  public getPercentageOfTieProgressBar(aircraftTieTarget: number, tieElement: number): number {
    return (this.component.FIFTY_PERCENT_THAT_IS_VISUAL_CUE * tieElement) / aircraftTieTarget;
  }

  public changeStartDateOfSchedulerAndReloadResourcesAndEvents() {
    this.loadStartEndViewDateAndChangeSchedulerConfigAccordingly(this.onTimeOptionChangeLastValue);
    this.scheduler.schedulerEngine.setStartDate(this.startViewDate);
    this.scheduler.schedulerEngine.setEndDate(this.endViewDate);
    this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
  }

  private roundStartViewDateToThirtyMinutes() {
    const startDate = moment();
    const minute = startDate.minute();
    const halfHour = 30;
    if (minute < halfHour) {
      this.startViewDate = startDate.subtract(minute, 'minutes').toDate();
    } else if (minute >= halfHour) {
      this.startViewDate = startDate.subtract(minute - halfHour, 'minutes').toDate();
    }
  }
}
