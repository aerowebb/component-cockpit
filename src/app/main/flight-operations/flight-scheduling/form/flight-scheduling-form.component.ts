import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventHelper } from 'bryntum-scheduler';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { EventModel as GenericEventModel } from '../../../../shared/components/scheduler/event-model.interface';
import { SchedulerComponent } from '../../../../shared/components/scheduler/scheduler.component';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FlightSchedulingInput } from '../../../../shared/types/api-input-types/fleet-management/flight-scheduling-input.interface';
import { FlightScheduleOutput } from '../../../../shared/types/api-output-types/flight-schedule-output.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoFleetDTOId } from '../../../../shared/types/api-types/bido-fleet-dto-id.interface';
import { BidoMissionDTO } from '../../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { WsTreeNode } from '../../../../shared/types/api-types/ws-tree-node-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { FlightInputData } from '../../flight/types/flight-input-data.interface';

import { FlightSchedulingFormService, ResourceModel } from './flight-scheduling-form.service';

enum CellColor {
  Green = 'cell-green',
  Red = 'cell-red',
  Yellow = 'cell-yellow',
  Blue = 'cell-blue',
  WhiteCellSelected = 'white-cell-selected',
  BlueCellSelected = 'blue-cell-selected'
}

@Component({
  selector: 'aw-flight-scheduling-form',
  styleUrls: ['./flight-scheduling-form.component.scss'],
  templateUrl: './flight-scheduling-form.component.html'
})
export class FlightSchedulingFormComponent extends FormPageComponent<PageComponentData>
  implements OnInit, AfterViewInit {
  public static readonly hoursInADay: number = 24;
  public static readonly minutesInAnHour: number = 60;
  public static readonly secondsInAMinute: number = 60;
  public static readonly milisecondsInASecond: number = 1000;

  // Bryntum scheduler variables
  public static readonly dayAndWeek: string = 'dayAndWeek';
  public static readonly hourAndDay: string = 'hourAndDay';
  public static readonly day: string = 'day';
  public static readonly dateFormat: string = 'DD/MM/YYYY';
  public static readonly displayDateFormat: string = 'DD/MM/YYYY';
  public static readonly TIME_RESOLUTION_MAX_ZOOM: number = 10;
  public static readonly TIME_RESOLUTION_MIN_ZOOM: number = 0;
  private static readonly MISSION_NAME_CLASS: string = 'mission-name-select';
  private static readonly MISSION_EVENT_CLASS: string = 'mission-event-select';

  public milisecondsInADay: number;
  public date: Date;
  public currDate: Date;

  public currYear: number;
  public timeZoneList: SelectItem[];
  public timeZoneSelected: string | undefined;

  public previousTimezone: string | undefined;
  public fleetCode: string;

  public fleetName: string;
  public isScheduleLoading: boolean;
  public isCalendarEvent: boolean;

  public showSaveSpinner: boolean;
  public isTableLoading: boolean;
  public statusList: SelectItem[];
  public treeTable: WsTreeNode[];

  public treeTableCols: TableColumn[];
  public addFlightButtonVisible: boolean;
  public updateFlightButtonVisible: boolean;
  public removeFlightButtonVisible: boolean;

  public resetFlightButtonVisible: boolean;

  private readonly noOfDateToDisplay: number = 14;

  public cellSelected: FlightScheduleOutput;
  public colClicked: string;

  public colsSelected: string[];

  public readonly component: typeof FlightSchedulingFormComponent;

  // Bryntum scheduler variables
  @ViewChild(SchedulerComponent)
  public scheduler: SchedulerComponent;
  public barMargin: number = 10;
  public schedulerConfig: object;
  public resourcesMissionName: ResourceModel[];
  private eventCounter: number = 0;
  public events: GenericEventModel[] = [];
  public schedulerZoomLevel: number;
  private readonly schedulerTimeResolutionChanged: Subject<number>;
  private resourcesMissionNameCounter = 0;
  private previousEventSelected: GenericEventModel | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly flightSchedulingFormService: FlightSchedulingFormService,
    private readonly propertiesService: PropertiesService,
    private readonly dateService: DateService,
    private readonly datePipe: DatePipe,
    private readonly translateService: TranslateService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.component = FlightSchedulingFormComponent;

    // Bryntum init
    this.schedulerZoomLevel = FlightSchedulingFormComponent.TIME_RESOLUTION_MAX_ZOOM;
    this.schedulerTimeResolutionChanged = new Subject<number>();

    this.init();
    this.loadWorkPackageStatusList();
  }

  private loadSchedulerConfig(): void {
    this.schedulerConfig = {
      readOnly: true,
      timeRanges: true,
      timeRangesFeature: {
        showCurrentTimeLine: true
      },
      zoomKeepsOriginalTimespan: true,
      zoomOnMouseWheel: false,
      zoomOnTimeAxisDoubleClick: false,
      eventTooltip: {
        template: (target) => {
          const resourceId = target.eventRecord.data.resourceId;
          const resource = this.recursiveFind(this.resourcesMissionName, resourceId);
          let returnValue = '';
          if (!!resource && !!resource.data) {
            returnValue = this.showTooltip(resource.data, this.dateService.dateToString(target.startDate));
          }

          return returnValue;
        },
        anchorToTarget: false
      },
      treeFeature: true
    };

    this.registerSchedulerTimeResolutionObservable();
    this.setSchedulerDate();
    this.setSchedulerAircraftRegistrationColumn();
    this.setSchedulerViewPreset();
    this.setContextMenuFeature();
  }

  private initSchedulerEngine(): void {
    this.registerSchedulerListeners();
  }

  private registerSchedulerTimeResolutionObservable(): void {
    this.schedulerTimeResolutionChanged.pipe(distinctUntilChanged(), takeUntil(this.unsubscribe)).subscribe({
      next: (value) => {
        this.scheduler.schedulerEngine.zoomTo(value);
      }
    });
  }

  public showToday(): void {
    this.scheduler.schedulerEngine.zoomTo({
      centerDate: new Date(),
      preset: this.scheduler.schedulerEngine.viewPreset
    });
  }

  public onChangeTimeResolution(event: { value: number }): void {
    this.schedulerTimeResolutionChanged.next(event.value);
  }

  private recursiveFind(resourcesMissionNameSearched: ResourceModel[], id: string): ResourceModel | undefined {
    let resourceModelFound = resourcesMissionNameSearched.find((resource) => resource.id === id);
    let index = 0;
    while (!resourceModelFound && index < resourcesMissionNameSearched.length) {
      resourceModelFound = this.recursiveFind(resourcesMissionNameSearched[index].children, id);
      index++;
    }

    return resourceModelFound;
  }

  private registerSchedulerListeners(): void {
    EventHelper.addListener(this.scheduler.schedulerEngine.element, {
      element: this.scheduler.schedulerEngine.element,
      click: (event: MouseEvent) => {
        const eventRecord = 'eventRecord';
        const eventTarget = event.target as HTMLElement;
        if (eventTarget.classList.contains(FlightSchedulingFormComponent.MISSION_NAME_CLASS)) {
          this.openAircraftOrMission(eventTarget);
        } else if (eventTarget.classList.contains(FlightSchedulingFormComponent.MISSION_EVENT_CLASS)) {
          this.configureEventSelectedColorAndButtons(event, eventRecord);
        } else {
          this.clickedOnNoEventAndNoResource();
        }
      }
    });
  }

  private clickedOnNoEventAndNoResource() {
    this.cellSelected = {};
    this.colClicked = '';
    this.colsSelected = [];
    this.buildSchedulerEventList();
    this.addFlightButtonVisible = false;
    this.removeFlightButtonVisible = false;
    this.resetFlightButtonVisible = false;
    this.updateFlightButtonVisible = false;
  }

  private configureEventSelectedColorAndButtons(event: MouseEvent, eventRecord: string) {
    const flightOutputRM = !!this.resourcesMissionName
      ? this.recursiveFind(this.resourcesMissionName, event[eventRecord].resourceId)
      : undefined;
    const flightOutputData = !!flightOutputRM ? flightOutputRM.data : undefined;
    if (!!flightOutputData) {
      // onCellClick will update visible buttons
      this.onCellClick(flightOutputData, this.dateService.dateToString(event[eventRecord].data.startDate));
      // Compute previous event selected style
      const previousEventSelectedFoundInEventsList = this.events.find(
        (anEvent) => !!this.previousEventSelected && anEvent.id === this.previousEventSelected.id
      );

      if (!!previousEventSelectedFoundInEventsList) {
        const previousResource = this.recursiveFind(
          this.resourcesMissionName,
          previousEventSelectedFoundInEventsList.resourceId
        );
        if (!!previousResource) {
          previousEventSelectedFoundInEventsList.cls =
            FlightSchedulingFormComponent.MISSION_EVENT_CLASS +
            ' ' +
            this.getCellColor(
              previousResource.data,
              this.dateService.dateToString(previousEventSelectedFoundInEventsList.startDate)
            );
        }
      }

      // Single event coloration
      const eventSelected = this.events.find((anEvent) => anEvent.id === event[eventRecord].data.id);
      this.previousEventSelected = eventSelected;
      if (!!eventSelected) {
        eventSelected.cls =
          FlightSchedulingFormComponent.MISSION_EVENT_CLASS +
          ' ' +
          this.getCellColor(flightOutputData, this.dateService.dateToString(event[eventRecord].data.startDate));
      }
    }
    this.events = [...this.events];
  }

  private openAircraftOrMission(eventTarget: HTMLElement) {
    const flightOutputRM = !!this.resourcesMissionName
      ? this.recursiveFind(this.resourcesMissionName, eventTarget.id)
      : undefined;
    const flightOutputData = !!flightOutputRM ? flightOutputRM.data : undefined;
    if (!!flightOutputData) {
      this.openFlightSchedulingRowDetail(flightOutputData);
    }
  }

  private setContextMenuFeature(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      contextMenu: {
        items: {
          addEvent: false
        },
        processHeaderItems: () => false
      }
    };
  }

  private setSchedulerViewPreset(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      viewPreset: {
        name: FlightSchedulingFormComponent.dayAndWeek,
        displayDateFormat: FlightSchedulingFormComponent.displayDateFormat,
        timeResolution: {
          unit: FlightSchedulingFormComponent.day,
          increment: 1
        },
        headerConfig: {
          middle: {
            unit: FlightSchedulingFormComponent.day,
            dateFormat: FlightSchedulingFormComponent.dateFormat
          }
        }
      }
    };
  }

  private setSchedulerDate(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      startDate: moment()
        .startOf('year')
        .toDate(),
      endDate: moment()
        .endOf('year')
        .toDate()
    };
  }

  private setSchedulerAircraftRegistrationColumn(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      columns: [
        {
          text: this.translateService.instant(this.getTranslateKey('missionName')),
          type: 'tree',
          field: 'missionName',
          width: 200,
          htmlEncode: false,
          sortable: true,
          editor: false,
          enableCellContextMenu: false,
          renderer: ({ record }: { record: { data: ResourceModel } }) => `
            <div class="info">
                <a id=${record.data.id} class=${FlightSchedulingFormComponent.MISSION_NAME_CLASS}>
                    ${record.data.missionName}
                </a>
            </div>
          `
        }
      ]
    };
  }

  private generateSchedulerColumnsMissionNameId(): number {
    return this.resourcesMissionNameCounter++;
  }

  private generateSchedulerEventId(): number {
    return this.eventCounter++;
  }

  /**
   * Builds scheduler events on current nodes and children nodes by recursion.
   * @param parentResource Parent resource of second parameter
   * @param resource Current resource
   */
  private buildSchedulerEventFromResource(parentResource: ResourceModel, resource: ResourceModel): GenericEventModel[] {
    const returnArray: GenericEventModel[] = [];

    if (!!resource.data && !!resource.data.date) {
      const startDates = Object.keys(resource.data.date);
      const endDates = Object.values(resource.data.date);

      for (let i = 0; i < startDates.length; i++) {
        if (parentResource !== resource) {
          // Push event on the parent node
          returnArray.push({
            resourceId: parentResource.id,
            id: this.generateSchedulerEventId(),
            eventType: '',
            startDate: new Date(startDates[i]),
            endDate: new Date(endDates[i] as string),
            name: '',
            cls:
              FlightSchedulingFormComponent.MISSION_EVENT_CLASS +
              ' ' +
              this.getCellColor(parentResource.data, this.dateService.dateToString(new Date(startDates[i])))
          });
        }

        // Push event on the current node
        returnArray.push({
          resourceId: resource.id,
          id: this.generateSchedulerEventId(),
          eventType: '',
          startDate: new Date(startDates[i]),
          endDate: new Date(endDates[i] as string),
          name: '',
          cls:
            FlightSchedulingFormComponent.MISSION_EVENT_CLASS +
            ' ' +
            this.getCellColor(resource.data, this.dateService.dateToString(new Date(startDates[i])))
        });
      }
    }

    // Recurse into children
    for (let i = 0; i < resource.children.length; i++) {
      returnArray.push(...this.buildSchedulerEventFromResource(resource, resource.children[i]));
    }

    return returnArray;
  }

  /**
   * Builds bryntum scheduler event list
   */
  private buildSchedulerEventList(): void {
    // Reinitialise event list otherwise bryntum scheduler engine does not detect changes
    this.events = [];
    this.resourcesMissionName.forEach((resource) => {
      this.events.push(...this.buildSchedulerEventFromResource(resource, resource));
    });
  }

  private buildSchedulerResourceList(wsTreeNodes: WsTreeNode[]): void {
    this.resourcesMissionName = wsTreeNodes.map((wsTreeNode) => this.buildSchedulerResourceFromFleet(wsTreeNode));
  }

  private buildSchedulerResourceFromFleet(wsTreeNode: WsTreeNode): ResourceModel {
    return {
      id: String(this.generateSchedulerColumnsMissionNameId()),
      missionName: wsTreeNode.data.missionName,
      data: wsTreeNode.data,
      children: !!wsTreeNode.children
        ? wsTreeNode.children.map((childElement) => this.buildSchedulerResourceFromFleet(childElement))
        : []
    };
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_FLIGHT_SCHEDULING_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.milisecondsInADay =
      this.component.hoursInADay *
      this.component.minutesInAnHour *
      this.component.secondsInAMinute *
      this.component.milisecondsInASecond;

    if (!!this.componentData) {
      if (!!this.componentData.objectId) {
        this.fleetCode = this.serializationService.deserialize(this.componentData.objectId).fleetCode;
        this.fleetName = this.serializationService.deserialize(this.componentData.objectId).fleetName;
        const fleetContext =
          !this.isCreateOpenMode &&
          this.componentData &&
          this.componentData.objectId &&
          this.serializationService.deserialize(this.componentData.objectId).fleetName
            ? `${this.fleetCode} - ${this.fleetName}`
            : `${this.fleetCode}`;
        const fleetContextId = fleetContext;
        this.displayComponentContext(fleetContextId, this.isCreateOpenMode);

        this.loadWorkSchdulingTable();
      }
    }
    this.loadTimeZoneList();
    this.loadSchedulerConfig();
  }

  public ngAfterViewInit(): void {
    this.initSchedulerEngine();
    if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
      this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
    } else {
      this.scheduler.schedulerEngine.localeManager.locale = 'En';
    }
    this.showToday();
  }

  public onReload(): void {
    this.loadTimeZoneList();
    this.loadSchedulingAtDate();
  }

  public init(): void {
    this.treeTable = [];
    this.date = new Date();
    this.currDate = new Date();
    const radix = 10;
    this.currYear = Number.parseInt(this.datePipe.transform(this.currDate, 'yyyy') as string, radix);
    this.isScheduleLoading = false;
    this.isCalendarEvent = false;

    this.addFlightButtonVisible = false;
    this.updateFlightButtonVisible = false;
    this.removeFlightButtonVisible = false;
    this.resetFlightButtonVisible = false;

    this.cellSelected = {};
    this.colClicked = '';
    this.colsSelected = [];

    this.setTreeTableCols();
  }

  public loadSchedulingAtDate(): void {
    this.setTreeTableCols();
    this.loadWorkSchdulingTable();
  }

  public loadSchedulingAtTimeZone(): void {
    this.updateFlightScheduleDates();
  }

  public updateFlightScheduleDates(): void {
    const previousTimezoneValue = Number(this.previousTimezone);
    const currentTimeZoneValue = Number(this.timeZoneSelected);

    if (currentTimeZoneValue !== previousTimezoneValue) {
      const gap =
        Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
          ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
          : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
      const isGapPositive = currentTimeZoneValue >= previousTimezoneValue;

      this.treeTable.forEach((treeRow) => {
        if (!!treeRow.children) {
          treeRow.children.forEach((child) => {
            const rowData = child.data as FlightScheduleOutput;
            if (!!rowData && !!rowData.date) {
              const startDates = Object.keys(rowData.date);
              const endDates = Object.values(rowData.date);

              const newDateMap = {};
              for (let i = 0; i < startDates.length; i++) {
                startDates[i] = new Date(
                  this.updateFlightScheduleDate(gap, isGapPositive, `${startDates[i]}`)
                ).toISOString();
                endDates[i] = new Date(
                  this.updateFlightScheduleDate(gap, isGapPositive, `${endDates[i]}`)
                ).toISOString();
                newDateMap[startDates[i] as string] = endDates[i] as string;
              }

              rowData.date = newDateMap as Object;
            }
          });
        }
      });

      this.treeTable = [...this.treeTable];
      this.previousTimezone = _cloneDeep(this.timeZoneSelected);
    }
  }

  private updateFlightScheduleDate(gap: number, isGapPositive: boolean, date: string): string {
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

  private loadTimeZoneList(): void {
    this.timeZoneList = [];
    this.timeZoneSelected = undefined;
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
        this.previousTimezone = _cloneDeep(this.timeZoneSelected);
      });
    });
  }

  public loadWorkSchdulingTable(cue?: string): void {
    this.treeTable = [];
    this.isTableLoading = true;
    const bidoFleetDTOId: BidoFleetDTOId = {
      fleetId: !!this.componentData.objectId
        ? this.serializationService.deserialize(this.componentData.objectId).fleetId
        : ''
    };
    const input: FlightSchedulingInput = {
      bidoFleetDTOId,
      startDate: this.date,
      timeZone: this.timeZoneSelected
    };
    switch (cue) {
      case 'toggle':
        const endDateIndex = 14;
        input.startDate = new Date(this.treeTableCols[1].field);
        input.endDate = new Date(this.treeTableCols[endDateIndex].field);
        break;
      default:
        break;
    }
    this.flightSchedulingFormService.getFlightScheduling(input).subscribe((result) => {
      if (result) {
        this.treeTable = result;
        this.buildSchedulerResourceList(result);
        this.buildSchedulerEventList();
        this.isTableLoading = false;
      }
    });
  }

  private loadWorkPackageStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).subscribe((result) => {
      this.statusList = ListUtils.orEmpty(result);
    });
  }

  public openFlightSchedulingRowDetail(rowData: FlightScheduleOutput) {
    if (!!rowData) {
      if (!!rowData.missionCode) {
        // Go to mission form
        const input: BidoMissionDTO = {
          missionCode: rowData.missionCode
        };
        this.openMission(input, ComponentOpenMode.Read);
      } else {
        // Go to equipment form
        const equipmentFunction = rowData.equiFunction;
        const equipmentCode = rowData.equipmentCode;
        switch (equipmentFunction) {
          case AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY:
            this.goToAircraft(equipmentCode, ComponentOpenMode.Read);
            break;
          case AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY:
            this.goToEngine(equipmentCode, ComponentOpenMode.Read);
            break;
          default:
            this.goToEquipment(equipmentCode, ComponentOpenMode.Read);
            break;
        }
      }
    }
  }

  private openMission(object: BidoMissionDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.MissionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'MissionFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToAircraft(aircraftCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
      openMode
    };
    if (!!aircraftCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: aircraftCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEngine(engineCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EngineFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EngineFormComponent',
      openMode
    };
    if (!!engineCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: engineCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEquipment(equipmentCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!equipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public getCellColor(rowData?: FlightScheduleOutput, colName?: string): string {
    const cellSelectedCheck =
      JSON.stringify(rowData) === JSON.stringify(this.cellSelected) && this.colsSelected.some((col) => col === colName);

    const originalColor = this.getOriginalCellColorWhenCellIsSelected(rowData, colName);
    if (!!rowData) {
      if (cellSelectedCheck && originalColor === '') {
        return CellColor.WhiteCellSelected;
      } else if (cellSelectedCheck && originalColor === CellColor.Blue) {
        return CellColor.BlueCellSelected;
      } else if (this.isCellColourable(rowData, colName)) {
        return CellColor.Blue;
      }
    }

    return '';
  }

  public getOriginalCellColorWhenCellIsSelected(rowData?: FlightScheduleOutput, colName?: string): string {
    if (!!rowData) {
      if (this.isCellColourable(rowData, colName)) {
        return CellColor.Blue;
      }
    }

    return '';
  }

  public showTooltip(flightSchedulingRowData: FlightScheduleOutput, colName: string): string {
    if (!!flightSchedulingRowData && !!flightSchedulingRowData.date) {
      const colDateValue = new Date(colName).valueOf();
      const startDates = Object.keys(flightSchedulingRowData.date);
      const endDates = Object.values(flightSchedulingRowData.date);

      const chronoNumber = flightSchedulingRowData.chronoNumber;
      const flightType = flightSchedulingRowData.flightType;

      let formattedStartDate = '';
      let formattedEndDate = '';

      for (let i = 0; i < startDates.length; i++) {
        const startDateValue = new Date(this.dateService.dateToString(new Date(startDates[i]))).valueOf();
        const endDateValue = new Date(this.dateService.dateToString(new Date(endDates[i] as string))).valueOf();
        const condition = colDateValue >= startDateValue && colDateValue <= endDateValue;

        if (condition) {
          formattedStartDate = this.dateService.dateWitCustomFormatToString(
            new Date(startDates[i]),
            AppConstants.MOMENTJS_DATE_TIME
          );
          formattedEndDate = this.dateService.dateWitCustomFormatToString(
            new Date(endDates[i] as string),
            AppConstants.MOMENTJS_DATE_TIME
          );

          break;
        }
      }

      const status = flightSchedulingRowData.flightStatus;

      const labelStyle = 'style="display: inline-block; width: 120px"';
      const valueStyle = 'style="font-weight: 600"';

      const chronoNumberLabel = this.translateService.instant(`${this.getComponentName()}.chronoNumber`);
      const flightTypeLabel = this.translateService.instant(`${this.getComponentName()}.flightType`);
      const startDateLabel = this.translateService.instant(`${this.getComponentName()}.startDate`);
      const endDateLabel = this.translateService.instant(`${this.getComponentName()}.endDate`);
      const statusLabel = this.translateService.instant(`${this.getComponentName()}.status`);

      const chronoNumberHtml =
        '<div>' +
        `<span ${labelStyle}>${chronoNumberLabel}</span><span ${valueStyle}>${chronoNumber}</span>` +
        '</div>';
      const flightTypeHtml =
        '<div>' + `<span ${labelStyle}>${flightTypeLabel}</span><span ${valueStyle}>${flightType}</span>` + '</div>';
      const startDateHtml =
        '<div>' +
        `<span ${labelStyle}>${startDateLabel}</span><span ${valueStyle}>${formattedStartDate}</span>` +
        '</div>';
      const endDateHtml =
        '<div>' + `<span ${labelStyle}>${endDateLabel}</span><span ${valueStyle}>${formattedEndDate}</span>` + '</div>';
      const statusHtml =
        '<div>' + `<span ${labelStyle}>${statusLabel}</span><span ${valueStyle}>${status}</span>` + '</div>';

      return [chronoNumberHtml, flightTypeHtml, startDateHtml, endDateHtml, statusHtml].join('');
    }

    return '';
  }

  private setTreeTableCols() {
    this.treeTableCols = [];
    this.treeTableCols.push({ field: 'missionName', width: '12%', alignment: 'left' });
    const date = _cloneDeep(this.date);
    for (let i = 1; i <= this.noOfDateToDisplay; i++) {
      this.treeTableCols.push({ field: `${this.dateService.dateToString(date)}`, width: '6%', alignment: 'left' });
      date.setDate(date.getDate() + 1);
    }
  }

  private isCellColourable(rowData?: FlightScheduleOutput, colName?: string): boolean {
    if (!!rowData && !!rowData.equiFunction) {
      // aircraft
      const indexInTreeTable = this.treeTable.findIndex((row) => `${row.data.equipmentCode}` === rowData.equipmentCode);
      const children = this.treeTable[indexInTreeTable].children;

      if (!!children) {
        return children.some((child) => this.isCellColourable(child.data, colName));
      }
    } else {
      // flight

      if (!!rowData && !!rowData.date && !!colName) {
        const columnDate = new Date(colName).valueOf();
        const startDates = Object.keys(rowData.date);
        const endDates = Object.values(rowData.date);

        for (let i = 0; i < startDates.length; i++) {
          const startDate = new Date(this.dateService.dateToString(new Date(startDates[i])));
          const startDateValue = startDate.valueOf();

          const endDate = new Date(this.dateService.dateToString(new Date(endDates[i] as string)));
          const endDateValue = endDate.valueOf();

          if (endDate) {
            if (columnDate >= startDateValue && columnDate <= endDateValue) {
              return true;
            }
          } else {
            return false;
          }
        }
      }
    }

    return false;
  }

  public isAircraft(rowData: FlightScheduleOutput): boolean {
    return !!rowData.equiFunction;
  }

  public onCellClick(rowData: FlightScheduleOutput, colName: string): void {
    this.cellSelected = rowData;
    this.colClicked = colName;

    this.colsSelected = [];
    this.colsSelected.push(colName);

    const cellColor = this.getCellColor(rowData, colName);

    if (!!rowData.equiFunction) {
      // aircraft
      this.addFlightButtonVisible =
        cellColor !== CellColor.Blue && cellColor !== CellColor.BlueCellSelected ? true : false;
      this.updateFlightButtonVisible = false;
      this.removeFlightButtonVisible = false;
      this.resetFlightButtonVisible = false;
    } else {
      // flight
      this.addFlightButtonVisible = false;
      this.updateFlightButtonVisible =
        cellColor === CellColor.Blue || cellColor === CellColor.BlueCellSelected ? true : false;
      this.removeFlightButtonVisible =
        cellColor === CellColor.Blue || cellColor === CellColor.BlueCellSelected ? true : false;
      this.resetFlightButtonVisible =
        cellColor === CellColor.Blue || cellColor === CellColor.BlueCellSelected ? true : false;
    }
  }

  public addFlight(): void {
    if (!StringUtils.isNullOrEmpty(this.colClicked)) {
      const date = new Date(this.colClicked);
      date.setHours(2);

      const missionEquipmentId: FlightInputData = {
        equipmentCode: this.cellSelected.equipmentCode,
        aircraftRepresentation: this.cellSelected.equipmentName,
        startDate: date.getTime(),
        endDate: date.getTime()
      };

      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLI_FLIGHT_FORM,
        objectId: this.serializationService.serialize(missionEquipmentId),
        openMode: ComponentOpenMode.Create
      };

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openFlight(): void {
    if (!!this.cellSelected.equipmentCode && !!this.cellSelected.missionCode && !!this.cellSelected.occurence) {
      const missionEquipmentId: FlightInputData = {
        equipmentCode: this.cellSelected.equipmentCode,
        missionCode: this.cellSelected.missionCode,
        occurrence: this.cellSelected.occurence,
        chronoNumber: this.cellSelected.chronoNumber
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
  }

  public removeFlight(): void {
    const confirmMessageKey = 'confirmDeleteSelectedMissionEquipment';
    this.confirmationService.confirmDelete({
      messageKey: `${this.getComponentName()}.${confirmMessageKey}`,
      accept: () => {
        if (
          !!this.cellSelected &&
          !!this.cellSelected.equipmentCode &&
          !!this.cellSelected.missionCode &&
          this.cellSelected.occurence !== null &&
          this.cellSelected.occurence !== undefined
        ) {
          const missionEquipmentId: BidoMissionEquipmentDTOId = {
            equipmentCode: this.cellSelected.equipmentCode,
            missionCode: this.cellSelected.missionCode,
            occurrence: this.cellSelected.occurence
          };

          this.flightSchedulingFormService.removeBidoMissionEquipment(missionEquipmentId).subscribe(() => {
            this.loadWorkSchdulingTable();
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMissionEquipment'));
          });
        }
      }
    });
  }
}
