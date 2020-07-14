import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { Observable, Subject, forkJoin, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { MaintenancePlanApi } from '../../../../shared/api/maintenance-plan.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { ProjectManagementApi } from '../../../../shared/api/project-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { EventModel as GenericEventModel } from '../../../../shared/components/scheduler/event-model.interface';
import { ResourceModel as GenericResourceModel } from '../../../../shared/components/scheduler/resource-model.interface';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BsdeAttributeConstants } from '../../../../shared/constants/bsde-attribute-constants.interface';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ControlStockInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/control-stock-input.interface';
import { GetWorkPackageWhereDefectIsAffectedInput } from '../../../../shared/types/api-input-types/maintenance-plan/get-work-package-where-defect-is-affected-input.interface';
import { GetWorkPackageWhereScheduledEventIsAffectedInput } from '../../../../shared/types/api-input-types/maintenance-plan/get-work-package-where-scheduled-event-is-affected-input.interface';
import { GetWorkPackageWhereUnscheduledEventIsAffectedInput } from '../../../../shared/types/api-input-types/maintenance-plan/get-work-package-where-unscheduled-event-is-affected-input.interface';
import { LoadMaintenanceForecastingInput } from '../../../../shared/types/api-input-types/maintenance-plan/load-maintenance-forecasting-input.interface';
import { UpdateMaintenanceForecastingInput } from '../../../../shared/types/api-input-types/maintenance-plan/update-maintenance-forecasting-input.interface';
import { UpdateWorkPackageWithBsdeEventInput } from '../../../../shared/types/api-input-types/maintenance-plan/update-work-package-with-bsde-event-input.interface';
import { UpdateWorkPackageWithBsdeScheduledEventInput } from '../../../../shared/types/api-input-types/maintenance-plan/update-work-package-with-bsde-scheduled-event-input.interface';
import { UpdateWorkPackageWithDeferredDefectEventInput } from '../../../../shared/types/api-input-types/maintenance-plan/update-work-package-with-deferred-defect-event-input.interface';
import { BsdeAvailabilityInput } from '../../../../shared/types/api-input-types/project-management/bsde-availability-input.interface';
import { GetQuantityInStockBySiteOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-quantity-in-stock-by-site-output.interface';
import { GetAllMaintenanceForecastingFlightUsageOutput } from '../../../../shared/types/api-output-types/maintenance-plan/get-all-maintenance-forecasting-flight-usage-output.interface';
import { MaintenanceForecastingDefect } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-defect.interface';
import { MaintenanceForecastingElement } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-element.interface';
import { MaintenanceForecastingScheduledEvent } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-scheduled-event.interface';
import { MaintenanceForecastingUnscheduledEvent } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-unscheduled-event.interface';
import { MaintenanceForecastingWorkPackage } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-work-package.interface';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireMeasureReferenceDTOId } from '../../../../shared/types/api-types/bire-measure-reference-dto-id.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { BireUnitMeasureDTOId } from '../../../../shared/types/api-types/bire-unit-measure-dto-id.interface';
import { BireUnitMeasureDTO } from '../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { BsdeAvailabilityDTOCustom } from '../../../../shared/types/api-types/bsde-availability-dto-custom.interface';
import { BsdeAvailabilityDTOId } from '../../../../shared/types/api-types/bsde-availability-dto-id.interface';
import { BsdeAvailabilityDTO } from '../../../../shared/types/api-types/bsde-availability-dto.interface';
import { BsdeEventDTOId } from '../../../../shared/types/api-types/bsde-event-dto-id.interface';
import { BsdeEventDTO } from '../../../../shared/types/api-types/bsde-event-dto.interface';
import { BsdeProjectAttributeDTOId } from '../../../../shared/types/api-types/bsde-project-attribute-dto-id.interface';
import { BsdeProjectAttributeDTO } from '../../../../shared/types/api-types/bsde-project-attribute-dto.interface';
import { BsdeProjectDTOId } from '../../../../shared/types/api-types/bsde-project-dto-id.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { BsdeScheduledEventDTOId } from '../../../../shared/types/api-types/bsde-scheduled-event-dto-id.interface';
import { BsdeScheduledEventDTO } from '../../../../shared/types/api-types/bsde-scheduled-event-dto.interface';
import { BsdeSiteDTO } from '../../../../shared/types/api-types/bsde-site-dto.interface';
import { DeferredDefectEventDTO } from '../../../../shared/types/api-types/deferred-defect-event-dto.interface';
import { GoodsMovementInput } from '../../../../shared/types/component-input-types/logistics/goods-movement-input.interface';
import { ForecastObjectInput } from '../../../../shared/types/component-input-types/maintenance/forecast-object-input.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { FlightInputData } from '../../../flight-operations/flight/types/flight-input-data.interface';
import { AirworthinessControlFormComponentInput } from '../../airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { ScheduleMaintenanceFormComponentInput } from '../../airworthiness-control/types/schedule-maintenance-form-component-input.interface';

import { ForecastFiltering } from './types/forecast-filtering.interface';

export enum EventModelType {
  DEFECT = 'defect',
  FLIGHT = 'flight',
  FLIGHT_USAGE = 'flightUsage',
  EVENT_GROUP = 'eventGroup',
  LLP_ALERT = 'llpAlert',
  SCHEDULED_EVENT = 'scheduledEvent',
  SN_CHANGE = 'snChange',
  UNSCHEDULED_EVENT = 'unscheduledEvent',
  WORK_PACKAGE = 'workPackage'
}

export enum ForecastLoadOption {
  DEFAULT,
  OPTIMIZE
}

export enum ResourceSelectionMode {
  ROW = 'row'
}

export enum UpcomingEventStatus {
  IN_PAST,
  NOK,
  OK,
  WARN,
  ALERT
}

export enum ForecastCategory {
  ASSET,
  FLEET
}

export interface ContextMenuItem {
  text: string;
  icon?: string;
  onItem?: Function;
}

export interface EventGroupModel extends GenericEventModel {
  defectList: EventModel<MaintenanceForecastingDefect>[];
  llpAlertList: EventModel<MaintenanceForecastingScheduledEvent>[];
  scheduledEventList: EventModel<MaintenanceForecastingScheduledEvent>[];
  snChangeList: EventModel<MaintenanceForecastingUnscheduledEvent>[];
  unscheduledEventList: EventModel<MaintenanceForecastingUnscheduledEvent>[];
}

export interface EventModel<T> extends GenericEventModel {
  _obj: T;
}

export interface MaterialAvailability {
  nok: number;
  ok: number;
  warn: number;
}

export interface ResourceModel extends GenericResourceModel {
  asset: BidoEquipmentDTO;
  assetDescription: string;
  flDescription: string;
}

export type MaintenanceForecastingUpcomingEvent =
  | MaintenanceForecastingDefect
  | MaintenanceForecastingScheduledEvent
  | MaintenanceForecastingUnscheduledEvent;

@Injectable()
export class ForecastFormService extends AbstractAwHttpService {
  public static readonly EVENT_COLOR_EVENT: { [status: string]: string } = {
    [UpcomingEventStatus.IN_PAST]: '#000',
    [UpcomingEventStatus.NOK]: '#ab000d',
    [UpcomingEventStatus.OK]: '#7cb342',
    [UpcomingEventStatus.WARN]: '#fbc02d',
    [UpcomingEventStatus.ALERT]: '#EA9107'
  };
  public static readonly EVENT_COLOR_FLIGHT: { [status: string]: string } = {
    REAL: 'purple',
    SIMULATED: 'purple'
  };
  public static readonly EVENT_COLOR_WORK_PACKAGE: { [status: string]: string } = {
    [AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED]: '#63a4ff',
    [AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED]: '#004ba0',
    [AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED]: '#bcbcbc',
    [AWPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING]: '#595959',
    [AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED]: '#595959',
    [AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE]: '#232323'
  };

  private static readonly FORECAST_PROJECT_DEFAULT_END_DATE_OFFSET: number = 3;

  private readonly _forecastFiltering: ForecastFiltering;

  private readonly eventGroupPlannedDateUpdateSource: Subject<{
    eventGroup: EventGroupModel;
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    plannedDate: Date;
  }>;
  private readonly eventsAddedToWorkPackageSource: Subject<{
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }>;
  private readonly eventsRemovedFromWorkPackageSource: Subject<{
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }>;
  private readonly forecastFilteringSource: Subject<ForecastFiltering>;
  private readonly scheduledEventPlannedDateUpdateSource: Subject<{
    event: EventModel<MaintenanceForecastingScheduledEvent>;
    plannedDate: Date;
  }>;
  private readonly unscheduledEventCreateSource: Subject<{
    event: BsdeEventDTO;
  }>;
  private readonly unscheduledEventUpdateSource: Subject<{
    event: EventModel<MaintenanceForecastingUnscheduledEvent>;
  }>;
  private readonly _eventGroupPlannedDateUpdate$: Observable<{
    eventGroup: EventGroupModel;
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    plannedDate: Date;
  }>;
  private readonly _eventsAddedToWorkPackage$: Observable<{
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }>;
  private readonly _eventsRemovedFromWorkPackage$: Observable<{
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }>;
  private readonly _forecastFiltering$: Observable<ForecastFiltering>;
  private readonly _scheduledEventPlannedDateUpdate$: Observable<{
    event: EventModel<MaintenanceForecastingScheduledEvent>;
    plannedDate: Date;
  }>;
  private readonly _unscheduledEventCreate$: Observable<{
    event: BsdeEventDTO;
  }>;
  private readonly _unscheduledEventUpdate$: Observable<{
    event: EventModel<MaintenanceForecastingUnscheduledEvent>;
  }>;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly maintenancePlanApi: MaintenancePlanApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly projectManagementApi: ProjectManagementApi,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly messageService: MessageService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly translateService: TranslateService,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);

    this.eventGroupPlannedDateUpdateSource = new Subject<{
      eventGroup: EventGroupModel;
      events: EventModel<MaintenanceForecastingUpcomingEvent>[];
      plannedDate: Date;
    }>();
    this.eventsAddedToWorkPackageSource = new Subject<{
      events: EventModel<MaintenanceForecastingUpcomingEvent>[];
      workPackage: BidmProjectDTO;
    }>();
    this.eventsRemovedFromWorkPackageSource = new Subject<{
      events: EventModel<MaintenanceForecastingUpcomingEvent>[];
      workPackage: BidmProjectDTO;
    }>();
    this.forecastFilteringSource = new Subject<ForecastFiltering>();
    this.scheduledEventPlannedDateUpdateSource = new Subject<{
      event: EventModel<MaintenanceForecastingScheduledEvent>;
      plannedDate: Date;
    }>();
    this.unscheduledEventCreateSource = new Subject<{
      event: BsdeEventDTO;
    }>();
    this.unscheduledEventUpdateSource = new Subject<{
      event: EventModel<MaintenanceForecastingUnscheduledEvent>;
    }>();
    this._eventGroupPlannedDateUpdate$ = this.eventGroupPlannedDateUpdateSource.asObservable();
    this._eventsAddedToWorkPackage$ = this.eventsAddedToWorkPackageSource.asObservable();
    this._eventsRemovedFromWorkPackage$ = this.eventsRemovedFromWorkPackageSource.asObservable();
    this._forecastFiltering$ = this.forecastFilteringSource.asObservable();
    this._scheduledEventPlannedDateUpdate$ = this.scheduledEventPlannedDateUpdateSource.asObservable();
    this._unscheduledEventCreate$ = this.unscheduledEventCreateSource.asObservable();
    this._unscheduledEventUpdate$ = this.unscheduledEventUpdateSource.asObservable();

    this._forecastFiltering = {
      globalSearch: '',
      upcomingEventStatusList: [
        UpcomingEventStatus.OK,
        UpcomingEventStatus.WARN,
        UpcomingEventStatus.NOK,
        UpcomingEventStatus.IN_PAST
      ],
      upcomingEventTypeList: [],
      workPackageStatusList: []
    };
  }

  public get eventGroupPlannedDateUpdate$(): Observable<{
    eventGroup: EventGroupModel;
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    plannedDate: Date;
  }> {
    return this._eventGroupPlannedDateUpdate$;
  }

  public get eventsAddedToWorkPackage$(): Observable<{
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }> {
    return this._eventsAddedToWorkPackage$;
  }

  public get eventsRemovedFromWorkPackage$(): Observable<{
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }> {
    return this._eventsRemovedFromWorkPackage$;
  }

  public get forecastFiltering(): ForecastFiltering {
    return this._forecastFiltering;
  }

  public get forecastFiltering$(): Observable<ForecastFiltering> {
    return this._forecastFiltering$;
  }

  public get scheduledEventPlannedDateUpdate$(): Observable<{
    event: EventModel<MaintenanceForecastingScheduledEvent>;
    plannedDate: Date;
  }> {
    return this._scheduledEventPlannedDateUpdate$;
  }

  public get unscheduledEventCreate$(): Observable<{
    event: BsdeEventDTO;
  }> {
    return this._unscheduledEventCreate$;
  }

  public get unscheduledEventUpdate$(): Observable<{
    event: EventModel<MaintenanceForecastingUnscheduledEvent>;
  }> {
    return this._unscheduledEventUpdate$;
  }

  public addEventsToWorkPackage(data: {
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }): void {
    this.eventsAddedToWorkPackageSource.next(data);
  }

  public buildUpcomingEventTypeList(): Observable<LabelValue<string>[]> {
    const defectKey = 'defect';
    const llpKey = 'llp';
    const scheduledEventKey = 'scheduledEvent';
    const snChangeKey = 'snChange';
    const unscheduledEventKey = 'unscheduledEvent';

    return this.translateService.get([defectKey, llpKey, scheduledEventKey, snChangeKey, unscheduledEventKey]).pipe(
      map((results: { [key: string]: string }) => {
        const defectLabel = !!results ? results[defectKey] : 'Defect';
        const llpLabel = !!results ? results[llpKey] : 'LLP';
        const scheduledEventLabel = !!results ? results[scheduledEventKey] : 'Scheduled Event';
        const snChangeLabel = !!results ? results[snChangeKey] : 'S/N Change';
        const unscheduledEventLabel = !!results ? results[unscheduledEventKey] : 'Unscheduled Event';

        return [
          { label: defectLabel, value: EventModelType.DEFECT },
          { label: llpLabel, value: EventModelType.LLP_ALERT },
          { label: scheduledEventLabel, value: EventModelType.SCHEDULED_EVENT },
          { label: snChangeLabel, value: EventModelType.SN_CHANGE },
          { label: unscheduledEventLabel, value: EventModelType.UNSCHEDULED_EVENT }
        ];
      })
    );
  }

  public calculateUpcomingEventStatus(
    eventEndDate: Date,
    affectedWorkPackage: BidmProjectDTO | undefined,
    scheduledEvent?: BsdeScheduledEventDTO | undefined
  ): UpcomingEventStatus {
    if (moment(eventEndDate).isBefore(moment())) {
      return UpcomingEventStatus.IN_PAST;
    } else if (!!scheduledEvent && scheduledEvent.alertOnThreshold) {
      return UpcomingEventStatus.ALERT;
    } else if (ObjectUtils.isDefined(affectedWorkPackage)) {
      return moment(eventEndDate).isBefore(moment((affectedWorkPackage as BidmProjectDTO).projectEndDate))
        ? UpcomingEventStatus.NOK
        : UpcomingEventStatus.OK;
    } else {
      return UpcomingEventStatus.WARN;
    }
  }

  public calculateWorkPackageMaterialAvailabilityValue(
    siteDataList: GetQuantityInStockBySiteOutput[]
  ): MaterialAvailability {
    const statusNok = ControlConfigConstants.ICON_RED_LIGHT_CODE;
    const statusOk = ControlConfigConstants.ICON_GREEN_LIGHT_CODE;
    const statusWarn = ControlConfigConstants.ICON_YELLOW_LIGHT_CODE;

    return {
      nok: siteDataList.filter((siteData) => siteData.status === statusNok).length,
      ok: siteDataList.filter((siteData) => siteData.status === statusOk).length,
      warn: siteDataList.filter((siteData) => siteData.status === statusWarn).length
    };
  }

  public checkIfWorkPackageIfModifiable(workPackage: BidmProjectDTO): boolean {
    return (
      workPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED ||
      workPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED
    );
  }

  public createUnscheduledEvent(data: { event: BsdeEventDTO }): void {
    this.unscheduledEventCreateSource.next(data);
  }

  public filterForecast(): void {
    this.forecastFilteringSource.next(this._forecastFiltering);
  }

  public filterForecastByUpcomingEventType(forecastFiltering: ForecastFiltering, eventType: string): boolean {
    return forecastFiltering.upcomingEventTypeList.includes(eventType);
  }

  public filterForecastByUpcomingEventStatus(forecastFiltering: ForecastFiltering, eventColor: string): boolean {
    const status =
      eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.OK]
        ? UpcomingEventStatus.OK
        : eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.WARN]
        ? UpcomingEventStatus.WARN
        : eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.NOK]
        ? UpcomingEventStatus.NOK
        : UpcomingEventStatus.IN_PAST;

    return forecastFiltering.upcomingEventStatusList.includes(status);
  }

  public filterForecastDefect(
    forecastFiltering: ForecastFiltering,
    eventModel: EventModel<MaintenanceForecastingDefect>
  ): boolean {
    const notification = eventModel._obj.deferredDefectEvent.bidoNotificationData as BidoNotificationDTO;

    let notificationCodeCriteria = true;
    if (!StringUtils.isNullOrEmpty(forecastFiltering.globalSearch)) {
      notificationCodeCriteria = StringUtils.orEmpty(notification.notNotificationCode)
        .toUpperCase()
        .includes(forecastFiltering.globalSearch);
    }

    return notificationCodeCriteria;
  }

  public filterForecastScheduledEvent(
    forecastFiltering: ForecastFiltering,
    eventModel: EventModel<MaintenanceForecastingScheduledEvent>
  ): boolean {
    const event = eventModel._obj.bsdeScheduledEvent;

    let taskCodeCriteria = true;
    let taskVersionCriteria = true;
    if (!StringUtils.isNullOrEmpty(forecastFiltering.globalSearch)) {
      taskCodeCriteria = StringUtils.orEmpty(event.taskCode)
        .toUpperCase()
        .includes(forecastFiltering.globalSearch);

      taskVersionCriteria = StringUtils.orEmpty(event.taskVersion)
        .toUpperCase()
        .includes(forecastFiltering.globalSearch);
    }

    return taskCodeCriteria && taskVersionCriteria;
  }

  public filterForecastUnscheduledEvent(
    forecastFiltering: ForecastFiltering,
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>
  ): boolean {
    const event = eventModel._obj.bsdeEvent;

    let taskCodeCriteria = true;
    let taskVersionCriteria = true;
    if (!StringUtils.isNullOrEmpty(forecastFiltering.globalSearch)) {
      taskCodeCriteria = StringUtils.orEmpty(event.taskCode)
        .toUpperCase()
        .includes(forecastFiltering.globalSearch);

      taskVersionCriteria = StringUtils.orEmpty(event.taskVersion)
        .toUpperCase()
        .includes(forecastFiltering.globalSearch);
    }

    return taskCodeCriteria && taskVersionCriteria;
  }

  public filterForecastWorkPackage(
    forecastFiltering: ForecastFiltering,
    eventModel: EventModel<MaintenanceForecastingWorkPackage>
  ): boolean {
    const workPackage = eventModel._obj.bidmProject;

    const statusCriteria = forecastFiltering.workPackageStatusList.includes(workPackage.statusState as string);

    let projectNumberCriteria = true;
    if (!StringUtils.isNullOrEmpty(forecastFiltering.globalSearch)) {
      projectNumberCriteria = NumberUtils.toString(workPackage.projectNumber)
        .toUpperCase()
        .includes(forecastFiltering.globalSearch);
    }

    return statusCriteria && projectNumberCriteria;
  }

  public getDefectList(eventList: GenericEventModel[]): EventModel<MaintenanceForecastingDefect>[] {
    return eventList.filter((event) => event.eventType === EventModelType.DEFECT) as EventModel<
      MaintenanceForecastingDefect
    >[];
  }

  public getEventCategoryLabel(event: BidoNotificationDTO, eventCategoryList: LabelValue<string>[]): string {
    const eventCategory = eventCategoryList.find(
      (category) => category.value === event.bidoNotificationTypeDTO.typeCategory
    );

    return ObjectUtils.isDefined(eventCategory) ? (eventCategory as LabelValue<string>).label : '';
  }

  public getLlpAlertList(eventList: GenericEventModel[]): EventModel<MaintenanceForecastingScheduledEvent>[] {
    return eventList.filter((event) => event.eventType === EventModelType.LLP_ALERT) as EventModel<
      MaintenanceForecastingScheduledEvent
    >[];
  }

  public getScheduledEventList(eventList: GenericEventModel[]): EventModel<MaintenanceForecastingScheduledEvent>[] {
    return eventList.filter((event) => event.eventType === EventModelType.SCHEDULED_EVENT) as EventModel<
      MaintenanceForecastingScheduledEvent
    >[];
  }

  public getSnChangeList(eventList: GenericEventModel[]): EventModel<MaintenanceForecastingUnscheduledEvent>[] {
    return eventList.filter((event) => event.eventType === EventModelType.SN_CHANGE) as EventModel<
      MaintenanceForecastingUnscheduledEvent
    >[];
  }

  public getTaskTypeLabel(task: BireTaskDTO, taskTypeList: LabelValue<string>[]): string {
    const taskType = taskTypeList.find((type) => type.value === task.taskTypeCode);

    return ObjectUtils.isDefined(taskType) ? (taskType as LabelValue<string>).label : '';
  }

  public getUnscheduledEventList(eventList: GenericEventModel[]): EventModel<MaintenanceForecastingUnscheduledEvent>[] {
    return eventList.filter((event) => event.eventType === EventModelType.UNSCHEDULED_EVENT) as EventModel<
      MaintenanceForecastingUnscheduledEvent
    >[];
  }

  public getUpcomingEventKey(eventModel: EventModel<MaintenanceForecastingUpcomingEvent>): string {
    return this.isDefectSchedulerEventType(eventModel.eventType)
      ? 'defect'
      : this.isLlpSchedulerEventType(eventModel.eventType)
      ? 'llp'
      : this.isScheduledEventSchedulerEventType(eventModel.eventType)
      ? 'scheduledEvent'
      : this.isSnChangeSchedulerEventType(eventModel.eventType)
      ? 'snChange'
      : 'unscheduledEvent';
  }

  public initForecastFiltering(
    upcomingEventTypeList: LabelValue<string>[],
    workPackageStatusList: LabelValue<string>[]
  ): void {
    this.setForecastFilteringUpcomingEventTypeList(upcomingEventTypeList.map((elt) => elt.value));
    this.setForecastFilteringWorkPackageStatusList(workPackageStatusList.map((elt) => elt.value));
  }

  public isDefectSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.DEFECT;
  }

  public isEventGroupSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.EVENT_GROUP;
  }

  public isFlightSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.FLIGHT;
  }

  public isLlpSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.LLP_ALERT;
  }

  public isScheduledEventSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.LLP_ALERT || eventType === EventModelType.SCHEDULED_EVENT;
  }

  public isSnChangeSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.SN_CHANGE;
  }

  public isUnscheduledEventSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.SN_CHANGE || eventType === EventModelType.UNSCHEDULED_EVENT;
  }

  public isValidDefect(defect: MaintenanceForecastingDefect): boolean {
    return (
      ObjectUtils.isDefined(defect.deferredDefectEvent.bidoNotificationData) &&
      (ObjectUtils.isDefined((defect.deferredDefectEvent as DeferredDefectEventDTO).plannedDate) ||
        ObjectUtils.isDefined((defect.deferredDefectEvent as DeferredDefectEventDTO).nteDate))
    );
  }

  public isValidFlight(flight: BidoMissionEquipmentDTO): boolean {
    return ObjectUtils.isDefined(flight.startDate) && ObjectUtils.isDefined(flight.endDate);
  }

  public isValidPlannedDateForEventGroup(eventGroup: EventGroupModel, plannedDate: Date): boolean {
    return [...eventGroup.defectList, ...eventGroup.llpAlertList, ...eventGroup.scheduledEventList]
      .map((event) => event.maxEndDate)
      .every((maxEndDate) => moment(maxEndDate).isAfter(moment(plannedDate)));
  }

  public isValidScheduledEvent(event: MaintenanceForecastingScheduledEvent): boolean {
    return ObjectUtils.isDefined(event.bsdeScheduledEvent.nteDate);
  }

  public isValidUnscheduledEvent(event: MaintenanceForecastingUnscheduledEvent): boolean {
    return ObjectUtils.isDefined(event.bsdeEvent.plannedDate);
  }

  public isValidWorkPackage(workPackage: MaintenanceForecastingWorkPackage): boolean {
    const endDate = workPackage.bidmProject.projectEndDate || workPackage.bidmProject.projectDueDate;

    return (
      ObjectUtils.isDefined(workPackage.bidmProject.projectStartDate) &&
      (!ObjectUtils.isDefined(endDate) || moment(endDate).isAfter(workPackage.bidmProject.projectStartDate))
    );
  }

  public isWorkPackageSchedulerEventType(eventType: string): boolean {
    return eventType === EventModelType.WORK_PACKAGE;
  }

  public loadForecastData(
    forecastProject: BsdeProjectDTO,
    forecastProjectId: string,
    forecastProjectLlpEventsGeneration: boolean,
    forecastProjectOccurrenceNumber: number | undefined,
    loadOption: ForecastLoadOption
  ): Observable<MaintenanceForecastingElement[]> {
    const forecastOption: LoadMaintenanceForecastingInput = {
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeProjectDTO: {
        projectFleetId: forecastProject.projectFleetId,
        projectId: forecastProjectId,
        projectPn: forecastProject.projectPn,
        projectSn: forecastProject.projectSn
      },
      maintenancePlanEndDate:
        forecastProject.projectEndDate ||
        moment()
          .add(ForecastFormService.FORECAST_PROJECT_DEFAULT_END_DATE_OFFSET, 'months')
          .toDate(),
      maintenancePlanOccurrence: forecastProjectOccurrenceNumber,
      maintenancePlanStartDate: forecastProject.projectStartDate,
      maintenancePlanTimeScale: 'DAY',
      showSNChanges: true,
      showDeferredDefects: true,
      showScheduledEvents: true,
      showNonRoutineEvents: true,
      showOnlyColumnsWithContent: false,
      urlPNCode: forecastProject.projectPn,
      urlSNCode: forecastProject.projectSn,
      withIwbEvents: true,
      withLlpAlerts: forecastProjectLlpEventsGeneration
    };

    return loadOption === ForecastLoadOption.OPTIMIZE
      ? this.loadWithOptimizerOption(forecastOption)
      : this.loadWithFromDbOption(forecastOption);
  }

  public openAirworthinessStatus(equipmentCodes: string[]): void {
    const pageInput: AirworthinessControlFormComponentInput = {
      equipmentCodeList: equipmentCodes
    };
    this.openPage(ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM, pageInput);
  }

  public openAsset(equipment: BidoEquipmentDTO): void {
    const equipmentCode = equipment.equipmentCode as string;
    const pageInput: BidoEquipmentDTO = {
      equipmentCode
    };

    if (equipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
      this.openPage(ComponentConstants.FLE_AIRCRAFT_FORM, pageInput);
    } else if (equipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY) {
      this.openPage(ComponentConstants.FLE_ENGINE_FORM, pageInput);
    } else {
      this.openPage(ComponentConstants.FLE_EQUIPMENT_FORM, pageInput);
    }
  }

  public openEvent(eventModel: EventModel<MaintenanceForecastingUpcomingEvent>): void {
    const eventType = eventModel.eventType;

    if (this.isDefectSchedulerEventType(eventType)) {
      const defect = (eventModel as EventModel<MaintenanceForecastingDefect>)._obj.deferredDefectEvent;
      const notificationCode = (defect.bidoNotificationData as BidoNotificationDTO).notificationCode as string;
      const pageInput: BidoNotificationDTOId = {
        notificationCode
      };
      this.openPage(ComponentConstants.FLE_DEFECT_FORM, pageInput);
    } else if (this.isScheduledEventSchedulerEventType(eventType)) {
      const event = (eventModel as EventModel<MaintenanceForecastingScheduledEvent>)._obj.bsdeScheduledEvent;

      if (!StringUtils.isNullOrEmpty(event.taskCode) && !StringUtils.isNullOrEmpty(event.taskVersion)) {
        this.openTask(event.taskCode as string, event.taskVersion as string);
      } else if (!StringUtils.isNullOrEmpty(event.pn) && !StringUtils.isNullOrEmpty(event.sn)) {
        this.openAssetByPnAndSn(event.pn as string, event.sn as string);
      }
    } else if (this.isUnscheduledEventSchedulerEventType(eventType)) {
      const event = (eventModel as EventModel<MaintenanceForecastingUnscheduledEvent>)._obj.bsdeEvent;

      if (!StringUtils.isNullOrEmpty(event.taskCode) && !StringUtils.isNullOrEmpty(event.taskVersion)) {
        this.openTask(event.taskCode as string, event.taskVersion as string);
      } else if (
        !StringUtils.isNullOrEmpty(event.evolutionNumber) &&
        !StringUtils.isNullOrEmpty(event.evolutionRevisionNumber)
      ) {
        const pageInput: BireEvolutionDTOId = {
          evolutionNumber: event.evolutionNumber,
          evolutionRevisionNumber: event.evolutionRevisionNumber
        };
        this.openPage(ComponentConstants.ENG_EVOLUTION_FORM, pageInput);
      } else if (!StringUtils.isNullOrEmpty(event.newPn) && !StringUtils.isNullOrEmpty(event.newSn)) {
        this.openAssetByPnAndSn(event.newPn as string, event.newSn as string);
      }
    }
  }

  public openFlight(missionEquipment: BidoMissionEquipmentDTO): void {
    const missionEquipmentByIdInput: BidoMissionEquipmentDTOId = {
      equipmentCode: missionEquipment.equipmentCode as string,
      missionCode: missionEquipment.missionCode as string,
      occurrence: missionEquipment.occurrence as number
    };
    super
      .post<BidoMissionEquipmentDTOId, BidoMissionEquipmentDTO>(
        this.fleetManagementApi.checkBidoMissionEquipmentById,
        missionEquipmentByIdInput
      )
      .subscribe((missionEquipmentById) => {
        if (missionEquipmentById) {
          const pageInput: FlightInputData = {
            chronoNumber: missionEquipment.missionInstanceCode,
            endDate: missionEquipment.endDate,
            equipmentCode: missionEquipment.equipmentCode,
            missionCode: missionEquipment.missionCode,
            occurrence: missionEquipment.occurrence,
            startDate: missionEquipment.startDate
          };

          this.openPage(ComponentConstants.FLI_FLIGHT_FORM, pageInput);
        } else {
          const missionEquipmentByEquipmentCodeAndMissionCodeInput: BidoMissionEquipmentDTO = {
            equipmentCode: missionEquipment.equipmentCode,
            missionCode: missionEquipment.missionCode
          };
          super
            .post<BidoMissionEquipmentDTO, BidoMissionEquipmentDTO>(
              this.fleetManagementApi.checkBidoMissionEquipmentByEquipmentCodeAndMissionCode,
              missionEquipmentByEquipmentCodeAndMissionCodeInput
            )
            .subscribe((missionEquipmentByEquipmentCodeAndMissionCode) => {
              if (missionEquipmentByEquipmentCodeAndMissionCodeInput) {
                const pageInput: FlightInputData = {
                  chronoNumber: missionEquipment.missionInstanceCode,
                  endDate: missionEquipment.endDate,
                  equipmentCode: missionEquipment.equipmentCode,
                  missionCode: missionEquipment.missionCode,
                  occurrence: missionEquipmentByEquipmentCodeAndMissionCode.occurrence,
                  startDate: missionEquipment.startDate
                };

                this.openPage(ComponentConstants.FLI_FLIGHT_FORM, pageInput);
              } else {
                this.messageService.showErrorMessage('errorMessage.openFlight');
              }
            });
        }
      });
  }

  public openMaintenancePlanning(equipmentCode: string): void {
    const pageInput: ScheduleMaintenanceFormComponentInput = {
      equipmentCode
    };
    this.openPage(ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM, pageInput);
  }

  public openMaterialAvailability(workPackageId: string): void {
    const pageInput: GoodsMovementInput = {
      workPackageId
    };
    this.openPage(ComponentConstants.LOG_MATERIAL_AVAILABILITY_WORK_PACKAGE_FORM, pageInput);
  }

  public openMaterialAvailabilityForAllWorkPackage(
    siteId: number,
    workPackageIds: string[],
    startDate: Date,
    endDate: Date
  ): void {
    const pageInput: ForecastObjectInput = {
      endDate,
      siteId,
      startDate,
      workPackageIdList: workPackageIds
    };
    this.openPage(ComponentConstants.LOG_MATERIAL_AVAILABILITY_FORECASTING_FORM, pageInput);
  }

  public openStaffPlanning(companyId: number, siteId: number, startDate: Date, endDate: Date): void {
    const pageInput = { companyId, endDate, siteId, startDate };
    this.openPage(ComponentConstants.HR_EMPLOYEE_PLANNING_FORM, pageInput);
  }

  public openWorkOrders(workPackage: BidmProjectDTO): void {
    const pageInput = workPackage;
    this.openPage(ComponentConstants.MAI_WORK_ORDERS_FORM, pageInput);
  }

  public openWorkPackage(workPackage: BidmProjectDTO): void {
    const pageInput = { wpId: workPackage.projectId };
    this.openPage(ComponentConstants.MAI_WORK_PACKAGE_FORM, pageInput);
  }

  public removeEventsFromWorkPackage(data: {
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }): void {
    this.eventsRemovedFromWorkPackageSource.next(data);
  }

  public saveForecastProjectAttributes(
    forecastProjectId: string,
    forecastProjectLlpEventsGeneration: boolean,
    forecastProjectOccurrenceNumber: number | undefined
  ): Observable<unknown> {
    return forkJoin({
      llpEventsGeneration: this.removeBsdeProjectAttribute({
        attributeId: BsdeAttributeConstants.MFO_LLP_EVENTS_GENERATION,
        projectId: forecastProjectId
      }),
      occurrenceNumber: this.removeBsdeProjectAttribute({
        attributeId: BsdeAttributeConstants.MFO_OCCURRENCE_NUMBER_OPTION,
        projectId: forecastProjectId
      })
    }).pipe(
      concatMap(() =>
        forkJoin({
          llpEventsGeneration: this.createBsdeProjectAttribute({
            attributeId: BsdeAttributeConstants.MFO_LLP_EVENTS_GENERATION,
            attributeValue: forecastProjectLlpEventsGeneration.toString(),
            projectId: forecastProjectId
          }),
          occurrenceNumber: this.createBsdeProjectAttribute({
            attributeId: BsdeAttributeConstants.MFO_OCCURRENCE_NUMBER_OPTION,
            attributeValue: NumberUtils.toString(forecastProjectOccurrenceNumber),
            projectId: forecastProjectId
          })
        })
      )
    );
  }

  public setWorkPackageToNextStatus(workPackage: BidmProjectDTO): void {
    const currentStatus = workPackage.statusState;

    if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE;
    }
  }

  public setWorkPackageToPreviousStatus(workPackage: BidmProjectDTO): void {
    const currentStatus = workPackage.statusState;

    if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED;
    } else if (currentStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED) {
      workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED;
    }
  }

  public sortWorkPackages(wp1: BidmProjectDTO, wp2: BidmProjectDTO): number {
    return NumberUtils.toString(wp1.projectNumber).localeCompare(NumberUtils.toString(wp2.projectNumber));
  }

  public tooltipWorkPackageSchedulerEventType(
    model: EventModel<MaintenanceForecastingWorkPackage>,
    workPackageStatusList: LabelValue<string>[]
  ): string {
    const wp = model._obj.bidmProject;

    const wpStatus = workPackageStatusList.find((status) => status.value === wp.statusState);
    const wpStatusLabel = ObjectUtils.isDefined(wpStatus) ? (wpStatus as LabelValue<string>).label : '';

    return `
    <div class="scheduler-tooltip-container">
      ${this.translateService.instant('workPackageNumberShort')} n°${wp.projectNumber} (${wpStatusLabel})
    </div>
    `;
  }

  public updateEventGroupPlannedDate(data: {
    eventGroup: EventGroupModel;
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    plannedDate: Date;
  }): void {
    this.eventGroupPlannedDateUpdateSource.next(data);
  }

  public updateScheduledEventPlannedDate(data: {
    event: EventModel<MaintenanceForecastingScheduledEvent>;
    plannedDate: Date;
  }): void {
    this.scheduledEventPlannedDateUpdateSource.next(data);
  }

  public updateUnscheduledEvent(data: { event: EventModel<MaintenanceForecastingUnscheduledEvent> }): void {
    this.unscheduledEventUpdateSource.next(data);
  }

  private openAssetByPnAndSn(pn: string, sn: string): void {
    const input: BidoEquipmentDTO = {
      sn,
      pnCode: pn
    };
    this.getBidoEquipmentsByPnAndSn(input).subscribe((assetList) => {
      if (!ListUtils.isNullOrEmpty(assetList) && assetList.length === 1) {
        this.openAsset(assetList[0]);
      }
    });
  }

  private openPage(componentId: string, objectId: object): void {
    const data: PageComponentData = {
      componentId,
      id: this.tabService.generateId(),
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openTask(taskCode: string, taskVersion: string): void {
    const pageInput: BireTaskDTOId = {
      taskCode,
      taskVersion
    };
    this.openPage(ComponentConstants.ENG_TASK_FORM, pageInput);
  }

  private setForecastFilteringUpcomingEventTypeList(list: string[]): void {
    this._forecastFiltering.upcomingEventTypeList = list;
  }

  private setForecastFilteringWorkPackageStatusList(list: string[]): void {
    this._forecastFiltering.workPackageStatusList = list.filter(
      (elt) => elt !== AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE
    );
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Aircraft  maintenance api
  // ////////////////////////////////////////////////////////////////////////////

  public createBidmWorkOrder(input: BidmWorkOrderDTO): Observable<BidmWorkOrderDTO> {
    return super.post<BidmWorkOrderDTO, BidmWorkOrderDTO>(this.aircraftMaintenanceApi.createBidmWorkOrder, input);
  }

  public removeBidmWorkOrder(input: BidmWorkOrderDTOId): Observable<void> {
    return super.post<BidmWorkOrderDTOId, void>(this.aircraftMaintenanceApi.removeBidmWorkOrder, input);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Airworthiness management api
  // ////////////////////////////////////////////////////////////////////////////

  public getTsnLabel(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // AM project management api
  // ////////////////////////////////////////////////////////////////////////////

  public createBidmProject(input: BidmProjectDTO): Observable<BidmProjectDTOId> {
    return super.post<BidmProjectDTO, BidmProjectDTOId>(this.amProjectManagementApi.createBidmProject, input);
  }

  public getWorkPackage(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }

  public removeBidmProject(input: BidmProjectDTOId): Observable<void> {
    return super.post<BidmProjectDTOId, void>(this.amProjectManagementApi.removeBidmProject, input);
  }

  public updateBidmProject(input: BidmProjectDTO): Observable<void> {
    return super.post<BidmProjectDTO, void>(this.amProjectManagementApi.updateBidmProject, input);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Bidt site api
  // ////////////////////////////////////////////////////////////////////////////

  public getAllSiteByCriteria(input: BidtSiteDTO): Observable<BidtSiteDTO[]> {
    return super.post<BidtSiteDTO, BidtSiteDTO[]>(this.bidtSiteApi.findAllByCriteria, input);
  }

  public getAllWorkPackageSite(): Observable<LabelValue<string>[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findAll).pipe(
      map((siteList) => {
        return siteList.map((site) => {
          return {
            label: `${site.siteName}`,
            value: site.siteCode as string
          };
        });
      })
    );
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Bidt stock mvt api
  // ////////////////////////////////////////////////////////////////////////////

  public controlStock(bidmProject: BidmProjectDTO): Observable<GetQuantityInStockBySiteOutput[]> {
    const input: ControlStockInput = {
      date: bidmProject.projectStartDate,
      mvtStatusExcluded: [
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_CLOSED_KEY
      ],
      projectId: { projectId: bidmProject.projectId as string },
      withItsAlternatives: true
    };

    return super.post<ControlStockInput, GetQuantityInStockBySiteOutput[]>(this.bidtStockMvtApi.controlStock, input);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Fleet management api
  // ////////////////////////////////////////////////////////////////////////////

  public getBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public getForecastProjectAsset(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public updateBidoNotification(input: BidoNotificationDTO): Observable<void> {
    return super.post<BidoNotificationDTO, void>(this.fleetManagementApi.updateBidoNotification, input);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Maintenance plan api
  // ////////////////////////////////////////////////////////////////////////////

  public addBsdeEventSnChangeToWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeScheduledEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeEvent
    };

    return super.post<UpdateWorkPackageWithBsdeEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.addBsdeEventSnChangeToWorkPackage,
      input
    );
  }

  public addBsdeScheduledEventToWorkPackage(
    eventModel: EventModel<MaintenanceForecastingScheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeScheduledEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeScheduledEvent
    };

    return super.post<UpdateWorkPackageWithBsdeScheduledEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.addBsdeScheduledEventToWorkPackage,
      input
    );
  }

  public addBsdeUnscheduledEventEvolutionToWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeEvent
    };

    return super.post<UpdateWorkPackageWithBsdeEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.addBsdeUnscheduledEventEvolutionToWorkPackage,
      input
    );
  }

  public addBsdeUnscheduledEventTaskToWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeEvent
    };

    return super.post<UpdateWorkPackageWithBsdeEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.addBsdeUnscheduledEventTaskToWorkPackage,
      input
    );
  }

  public addDeferredDefectEventToWorkPackage(
    eventModel: EventModel<MaintenanceForecastingDefect>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const defect = eventModel._obj.deferredDefectEvent;
    const input: UpdateWorkPackageWithDeferredDefectEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      notificationCode: (defect.bidoNotificationData as BidoNotificationDTO).notificationCode as string,
      nteDate: defect.nteDate as Date
    };

    return super.post<UpdateWorkPackageWithDeferredDefectEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.addDeferredDefectEventToWorkPackage,
      input
    );
  }

  public clearMaintenanceForecastingCache(input: string): Observable<void> {
    return super.post<string, void>(this.maintenancePlanApi.clearMaintenanceForecastingCache, input);
  }

  public getAllFamilyVariantByUcMfoNonRoutineEvent(): Observable<LabelValue<BireVariantVersionDTO>[]> {
    return super.post<void, LabelValue<BireVariantVersionDTO>[]>(
      this.maintenancePlanApi.findAllFamilyVariantByUcMfoNonRoutineEvent
    );
  }

  public getAllForecastFlightUsage(input: string): Observable<GetAllMaintenanceForecastingFlightUsageOutput[]> {
    return super.post<string, GetAllMaintenanceForecastingFlightUsageOutput[]>(
      this.maintenancePlanApi.getAllMaintenanceForecastingFlightUsage,
      input
    );
  }

  public getAllForecastProjectCustomer(): Observable<LabelValue<BidoCustomerDTO>[]> {
    return super.post<void, LabelValue<BidoCustomerDTO>[]>(this.maintenancePlanApi.geAllMaintenanceForecastingCustomer);
  }

  public getAllForecastProjectSite(): Observable<LabelValue<BsdeSiteDTO>[]> {
    return super.post<void, LabelValue<BsdeSiteDTO>[]>(this.maintenancePlanApi.geAllMaintenanceForecastingSite);
  }

  public getWorkPackageWhereDefectIsAffected(
    input: GetWorkPackageWhereDefectIsAffectedInput
  ): Observable<BidmProjectDTO> {
    return super.post<GetWorkPackageWhereDefectIsAffectedInput, BidmProjectDTO>(
      this.maintenancePlanApi.getWorkPackageWhereDefectIsAffected,
      input
    );
  }

  public getWorkPackageWhereScheduledEventIsAffected(
    input: GetWorkPackageWhereScheduledEventIsAffectedInput
  ): Observable<BidmProjectDTO> {
    return super.post<GetWorkPackageWhereScheduledEventIsAffectedInput, BidmProjectDTO>(
      this.maintenancePlanApi.getWorkPackageWhereDefectIsAffected,
      input
    );
  }

  public getWorkPackageWhereUnscheduledEventIsAffected(
    input: GetWorkPackageWhereUnscheduledEventIsAffectedInput
  ): Observable<BidmProjectDTO> {
    return super.post<GetWorkPackageWhereUnscheduledEventIsAffectedInput, BidmProjectDTO>(
      this.maintenancePlanApi.getWorkPackageWhereDefectIsAffected,
      input
    );
  }

  public initialize(input: string): Observable<void> {
    return super.post<string, void>(this.maintenancePlanApi.initMaintenanceForecastingCache, input);
  }

  public isForecastProjectLocked(input: string): Observable<boolean> {
    return super.post<string, boolean>(this.maintenancePlanApi.isForecastProjectLocked, input);
  }

  public loadWithForecasterOption(input: LoadMaintenanceForecastingInput): Observable<MaintenanceForecastingElement[]> {
    return super.post<LoadMaintenanceForecastingInput, MaintenanceForecastingElement[]>(
      this.maintenancePlanApi.loadMaintenanceForecastingWithForecasterOption,
      input
    );
  }

  public loadWithFromDbOption(input: LoadMaintenanceForecastingInput): Observable<MaintenanceForecastingElement[]> {
    return super.post<LoadMaintenanceForecastingInput, MaintenanceForecastingElement[]>(
      this.maintenancePlanApi.loadMaintenanceForecastingWithFromDbOption,
      input
    );
  }

  public loadWithLocalRefreshOption(
    input: LoadMaintenanceForecastingInput
  ): Observable<MaintenanceForecastingElement[]> {
    return super.post<LoadMaintenanceForecastingInput, MaintenanceForecastingElement[]>(
      this.maintenancePlanApi.loadMaintenanceForecastingWithLocalRefreshOption,
      input
    );
  }

  public loadWithOptimizerOption(input: LoadMaintenanceForecastingInput): Observable<MaintenanceForecastingElement[]> {
    return super.post<LoadMaintenanceForecastingInput, MaintenanceForecastingElement[]>(
      this.maintenancePlanApi.loadMaintenanceForecastingWithOptimizerOption,
      input
    );
  }

  public removeBsdeEventSnChangeFromWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeEvent
    };

    return super.post<UpdateWorkPackageWithBsdeEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.removeBsdeEventSnChangeFromWorkPackage,
      input
    );
  }

  public removeBsdeScheduledEventFromWorkPackage(
    eventModel: EventModel<MaintenanceForecastingScheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeScheduledEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeScheduledEvent
    };

    return super.post<UpdateWorkPackageWithBsdeScheduledEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.removeBsdeScheduledEventFromWorkPackage,
      input
    );
  }

  public removeBsdeUnscheduledEventEvolutionFromWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeEvent
    };

    return super.post<UpdateWorkPackageWithBsdeEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.removeBsdeUnscheduledEventEvolutionFromWorkPackage,
      input
    );
  }

  public removeBsdeUnscheduledEventTaskFromWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const input: UpdateWorkPackageWithBsdeEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      bsdeEvent: eventModel._obj.bsdeEvent
    };

    return super.post<UpdateWorkPackageWithBsdeEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.removeBsdeUnscheduledEventTaskFromWorkPackage,
      input
    );
  }

  public removeDeferredDefectEventFromWorkPackage(
    eventModel: EventModel<MaintenanceForecastingDefect>,
    bidmProject: BidmProjectDTO,
    bidoEquipment: BidoEquipmentDTO,
    forecastProjectId: string
  ): Observable<BidmProjectDTO> {
    const defect = eventModel._obj.deferredDefectEvent;
    const input: UpdateWorkPackageWithDeferredDefectEventInput = {
      bidmProject,
      bidoEquipment,
      maintenanceForecastingProjectId: forecastProjectId,
      notificationCode: (defect.bidoNotificationData as BidoNotificationDTO).notificationCode as string,
      nteDate: defect.nteDate as Date
    };

    return super.post<UpdateWorkPackageWithDeferredDefectEventInput, BidmProjectDTO>(
      this.maintenancePlanApi.removeDeferredDefectEventFromWorkPackage,
      input
    );
  }

  public updateMaintenanceForecasting(bsdeProject: BsdeProjectDTO, forecastProjectId: string): Observable<void> {
    const input: UpdateMaintenanceForecastingInput = {
      bsdeProjectDTO: bsdeProject,
      maintenanceForecastingProjectId: forecastProjectId
    };

    return super.post<UpdateMaintenanceForecastingInput, void>(
      this.maintenancePlanApi.updateMaintenanceForecasting,
      input
    );
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Project management api
  // ////////////////////////////////////////////////////////////////////////////

  public getBireMeasureReference(input: BireMeasureReferenceDTOId): Observable<BireMeasureReferenceDTO> {
    return super.post<BireMeasureReferenceDTOId, BireMeasureReferenceDTO>(
      this.productStructureManagementApi.findBireMeasureReference,
      input
    );
  }

  public getBireUnitMeasure(input: BireUnitMeasureDTOId): Observable<BireUnitMeasureDTO> {
    return super.post<BireUnitMeasureDTOId, BireUnitMeasureDTO>(
      this.productStructureManagementApi.findBireUnitMeasure,
      input
    );
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Project management api
  // ////////////////////////////////////////////////////////////////////////////

  public createBsdeEvent(input: BsdeEventDTO): Observable<BsdeEventDTOId> {
    return super.post<BsdeEventDTO, BsdeEventDTOId>(this.projectManagementApi.createBsdeEvent, input);
  }

  public createBsdeProject(input: BsdeProjectDTO): Observable<BsdeProjectDTOId> {
    return super.post<BsdeProjectDTO, BsdeProjectDTOId>(this.projectManagementApi.createBsdeProject, input);
  }

  public createBsdeProjectAttribute(input: BsdeProjectAttributeDTO): Observable<BsdeProjectAttributeDTOId> {
    return super.post<BsdeProjectAttributeDTO, BsdeProjectAttributeDTOId>(
      this.projectManagementApi.createBsdeProjectAttribute,
      input
    );
  }

  public createBsdeScheduledEvent(input: BsdeScheduledEventDTO): Observable<BsdeScheduledEventDTOId> {
    return super.post<BsdeScheduledEventDTO, BsdeScheduledEventDTOId>(
      this.projectManagementApi.createBsdeScheduledEvent,
      input
    );
  }

  public createOrUpdateBsdeAvailability(input: BsdeAvailabilityDTO[]): Observable<void> {
    return super.post<BsdeAvailabilityDTO[], void>(this.projectManagementApi.createOrUpdateBsdeAvailability, input);
  }

  public findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode(
    input: BsdeAvailabilityInput
  ): Observable<BsdeAvailabilityDTO[]> {
    return super.post<BsdeAvailabilityInput, BsdeAvailabilityDTO[]>(
      this.projectManagementApi.findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode,
      input
    );
  }

  public getBsdeProject(input: BsdeProjectDTOId): Observable<BsdeProjectDTO> {
    return super.post<BsdeProjectDTOId, BsdeProjectDTO>(this.projectManagementApi.findBsdeProject, input);
  }

  public getBsdeProjectAttributeList(input: BsdeProjectDTOId): Observable<BsdeProjectAttributeDTO[]> {
    return super.post<BsdeProjectDTOId, BsdeProjectAttributeDTO[]>(
      this.projectManagementApi.findBsdeProjectAttributesByProject,
      input
    );
  }

  public getBsdeProjectListByFleetId(input: string): Observable<BsdeProjectDTO[]> {
    return super.post<string, BsdeProjectDTO[]>(this.projectManagementApi.findBsdeProjectsByFleetId, input);
  }

  public getBsdeProjectListByPnAndSn(input: BidoEquipmentDTO): Observable<BsdeProjectDTO[]> {
    return super.post<BidoEquipmentDTO, BsdeProjectDTO[]>(this.projectManagementApi.findBsdeProjectsByPnAndSn, input);
  }

  public removeBsdeAvailability(input: BsdeAvailabilityDTOId[]): Observable<void> {
    return super.post<BsdeAvailabilityDTOId[], void>(this.projectManagementApi.removeBsdeAvailability, input);
  }

  public removeBsdeProjectAttribute(input: BsdeProjectAttributeDTOId): Observable<void> {
    return super.post<BsdeProjectAttributeDTOId, void>(this.projectManagementApi.removeBsdeProjectAttribute, input);
  }

  public synchronizeWithHR(input: number): Observable<BsdeAvailabilityDTOCustom[]> {
    return super.post<number, BsdeAvailabilityDTOCustom[]>(this.projectManagementApi.synchronizeWithHR, input);
  }

  public updateBsdeEvent(input: BsdeEventDTO): Observable<void> {
    return super.post<BsdeEventDTO, void>(this.projectManagementApi.updateBsdeEvent, input);
  }

  public updateBsdeScheduledEvent(input: BsdeScheduledEventDTO): Observable<void> {
    return super.post<BsdeScheduledEventDTO, void>(this.projectManagementApi.updateBsdeScheduledEvent, input);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Task maintenance api
  // ////////////////////////////////////////////////////////////////////////////

  public findAllBireQualificationDatasDropDown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.createOrUpdateBsdeAvailability);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // User profile maintenance api
  // ////////////////////////////////////////////////////////////////////////////

  public workPackageAssignedToList(): Observable<LabelValue<string>[]> {
    return super
      .post<string, BidoUserDTO[]>(
        this.userProfileManagementApi.findBidoUsersWithUseCase,
        BidoFunctionTypeConstants.UC_AIRM_RECEPTION
      )
      .pipe(
        map((userList) => {
          return ListUtils.isNullOrEmpty(userList)
            ? []
            : userList
                .map((user) => {
                  return {
                    label: `${user.lastname} ${user.firstname}`,
                    value: user.userId as string
                  };
                })
                .sort((user1, user2) => user1.label.toUpperCase().localeCompare(user2.label.toUpperCase()));
        })
      );
  }

  public loadWorkCenterListBySite(input: string | undefined): Observable<SelectItem[]> {
    if (StringUtils.isNullOrEmpty(input)) {
      return of<SelectItem[]>([]);
    } else {
      return super.post<string, SelectItem[]>(this.bidtWarehouseApi.findByMandantAndSiteCode, input);
    }
  }

  public loadAllWorkCenterList(): Observable<SelectItem[]> {
    return super.post<void, SelectItem[]>(this.bidtWarehouseApi.findAllWarehouseByUserRights);
  }
}
