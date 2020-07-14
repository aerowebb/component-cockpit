import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomHelper, EventHelper } from 'bryntum-scheduler';
import * as moment from 'moment';
import { MenuItem, SelectItem } from 'primeng/api';
import { Observable, Subject, forkJoin, of } from 'rxjs';
import { concatMap, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

import { EventModel as GenericEventModel } from '../../../../shared/components/scheduler/event-model.interface';
import { SchedulerComponent } from '../../../../shared/components/scheduler/scheduler.component';
import {
  SchedulerDragContext,
  SchedulerDropContext,
  SchedulerEventRecord,
  SchedulerService
} from '../../../../shared/components/scheduler/scheduler.service';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BsdeAttributeConstants } from '../../../../shared/constants/bsde-attribute-constants.interface';
import { BsdeEventTypeConstants } from '../../../../shared/constants/bsde-event-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
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
import { GetQuantityInStockBySiteOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-quantity-in-stock-by-site-output.interface';
import { GetAllMaintenanceForecastingFlightUsageOutput } from '../../../../shared/types/api-output-types/maintenance-plan/get-all-maintenance-forecasting-flight-usage-output.interface';
import { MaintenanceForecastingDefect } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-defect.interface';
import { MaintenanceForecastingElement } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-element.interface';
import { MaintenanceForecastingScheduledEvent } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-scheduled-event.interface';
import { MaintenanceForecastingUnscheduledEvent } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-unscheduled-event.interface';
import { MaintenanceForecastingWorkPackage } from '../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-work-package.interface';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BsdeEventDTO } from '../../../../shared/types/api-types/bsde-event-dto.interface';
import { BsdeProjectAttributeDTO } from '../../../../shared/types/api-types/bsde-project-attribute-dto.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { BsdeSiteDTO } from '../../../../shared/types/api-types/bsde-site-dto.interface';
import { DeferredDefectEventDTO } from '../../../../shared/types/api-types/deferred-defect-event-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { BooleanUtils } from '../../../../shared/utils/boolean-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import {
  ContextMenuItem,
  EventGroupModel,
  EventModel,
  EventModelType,
  ForecastCategory,
  ForecastFormService,
  ForecastLoadOption,
  MaintenanceForecastingUpcomingEvent,
  MaterialAvailability,
  ResourceModel,
  UpcomingEventStatus
} from './forecast-form.service';
import { ForecastFiltering } from './types/forecast-filtering.interface';

@Component({
  selector: 'aw-forecast-form',
  styleUrls: ['./forecast-form.component.scss'],
  templateUrl: './forecast-form.component.html'
})
export class ForecastFormComponent extends FormPageComponent<PageComponentData>
  implements AfterViewInit, OnDestroy, OnInit {
  public static readonly TIME_RESOLUTION_MAX_ZOOM: number = 15;
  public static readonly TIME_RESOLUTION_MIN_ZOOM: number = 0;

  private static readonly COLUMN_ASSET_WIDTH: number = 300;
  private static readonly COLUMN_FUNCTIONAL_LOCATION_WIDTH: number = 300;
  private static readonly SCHEDULER_ROW_HEIGHT: number = 40;

  private static readonly ASSET_NAME_CLS = 'asset';
  private static readonly EVENT_HIGHLIGHT_CLS: string = 'event-focus';
  private static readonly EVENT_IN_PAST_CLS: string = 'in-past';
  private static readonly EVENT_NOK_CLS: string = 'nok';
  private static readonly EVENT_OK_CLS: string = 'ok';
  private static readonly EVENT_WARN_CLS: string = 'warn';
  private static readonly EVENT_ALERT_CLS: string = 'alert';
  private static readonly WORK_PACKAGE_HIGHLIGHT_CLS: string = 'workpackage-focus';
  private static readonly WORK_PACKAGE_MATERIAL_AVAILABILITY_NOK_CLS: string = 'material-nok';
  private static readonly WORK_PACKAGE_MATERIAL_AVAILABILITY_WARN_CLS: string = 'material-warn';

  private static readonly EVENT_GROUP_MAX_VALUE_DISPLAYED: number = 99;
  private static readonly EVENT_GROUP_MAX_VALUE_LABEL: string = '++';

  public readonly bidoFunctionTypeConstants: typeof BidoFunctionTypeConstants;
  public readonly forecastCategory: typeof ForecastCategory;
  public readonly component: typeof ForecastFormComponent;

  public columnList: object[];
  public componentContext: string;
  public customerList: LabelValue<BidoCustomerDTO>[];
  public eventCategoryList: LabelValue<string>[];
  public eventList: GenericEventModel[];
  public filteredEventList: GenericEventModel[];
  public filteredResourceList: ResourceModel[];
  public flightStatusList: LabelValue<string>[];
  public flightTypeList: LabelValue<string>[];
  public forecastCategoryList: SelectItem[];
  public forecastProject: BsdeProjectDTO;
  public forecastProjectId: string | undefined;
  public forecastProjectSrc: BsdeProjectDTO;
  public forecastProjectAsset: BidoEquipmentDTO;
  public forecastProjectLlpEventsGeneration: boolean;
  public forecastProjectOccurrenceNumber: number | undefined;
  public globalMaterialAvailability: MaterialAvailability;
  public occurrenceList: LabelValue<number>[];
  public repairCenterList: LabelValue<BsdeSiteDTO>[];
  public schedulerConfig: object;
  public schedulerLoading: boolean;
  public schedulerZoomLevel: number;
  public taskTypeList: LabelValue<string>[];
  public topAssetList: BidoEquipmentDTO[];
  public upcomingEventsInPastWithWarnStatus: number;
  public upcomingEventsWithNokStatus: number;
  public upcomingEventsWithOkStatus: number;
  public upcomingEventsWithWarnStatus: number;
  public upcomingEventsWithAlertStatus: number;
  public upcomingEventTypeList: LabelValue<string>[];
  public workPackageAssignedToList: LabelValue<string>[];
  public workPackageList: BidmProjectDTO[];
  public workPackageSiteList: LabelValue<string>[];
  public workPackageStatusList: LabelValue<string>[];
  public workPackageTypeList: LabelValue<string>[];

  public selectedAsset: BidoEquipmentDTO | undefined;
  public selectedAssets: BidoEquipmentDTO[];
  public selectedCustomer: BidoCustomerDTO | undefined;
  public selectedEventModel: GenericEventModel | undefined;
  public selectedForecastCategory: ForecastCategory;
  public selectedEndDate: Date | undefined;
  public selectedRepairCenter: BsdeSiteDTO | undefined;
  public selectedStartDate: Date | undefined;
  public selectedWorkCenter: number | undefined;

  public showAssetRequiredAvailabilitiesDialog: boolean;
  public showDefectDialog: boolean;
  public showScheduledEventDialog: boolean;
  public showEventGroupDialog: boolean;
  public showFlightDialog: boolean;
  public showForecastLegendDialog: boolean;
  public showForecastManagementBlock: boolean;
  public showResourcesdAvailabilitiesDialog: boolean;
  public showSearchAssetDialog: boolean;
  public showSearchFleetDialog: boolean;
  public showUnscheduledEventDialog: boolean;
  public showWorkPackageCreateDialog: boolean;
  public showWorkPackageUpdateDialog: boolean;

  public assetList: BidoEquipmentDTO[];
  public assetListSelected: BidoEquipmentDTO[];
  public filterAssetLabel: string;

  public actions: MenuItem[];
  public navigations: MenuItem[];

  @ViewChild(SchedulerComponent)
  private readonly scheduler: SchedulerComponent;

  private readonly schedulerTimeResolutionChanged: Subject<number>;

  private assetMap: Map<string, BidoEquipmentDTO>;
  private endDate: Date | undefined;
  private eventCounter: number;
  private flightUsage: GetAllMaintenanceForecastingFlightUsageOutput[];
  private materialAvailabilityByWorkPackage: Map<string, MaterialAvailability>;
  private resourceList: ResourceModel[];
  private startDate: Date | undefined;
  private tsnLabel: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public forecastFormService: ForecastFormService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly schedulerService: SchedulerService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.bidoFunctionTypeConstants = BidoFunctionTypeConstants;
    this.forecastCategory = ForecastCategory;
    this.component = ForecastFormComponent;

    this.schedulerTimeResolutionChanged = new Subject<number>();

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_FORECAST_FORM;
  }

  public ngAfterViewInit(): void {
    this.initSchedulerEngine();
  }

  public ngOnDestroy(): void {
    if (!this.isCreateOpenMode) {
      this.forecastFormService.clearMaintenanceForecastingCache(this.forecastProjectId as string).subscribe();
    }
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    const componentInput = ObjectUtils.isDefined(this.componentData.objectId)
      ? (this.serializationService.deserialize(this.componentData.objectId as string) as string)
      : undefined;
    this.forecastProjectId = componentInput;

    this.showForecastManagementBlock = this.isCreateOpenMode;

    this.loadForecast();

    this.filterAssetLabel = this.translateService.instant(this.getTranslateKey('filterAssetLabel'));
  }

  public onBeforeLoad(): void {
    this.assetMap = new Map<string, BidoEquipmentDTO>();
    this.componentContext = '';
    this.endDate = undefined;
    this.eventCounter = 1;
    this.eventList = [];
    this.filteredEventList = [];
    this.filteredResourceList = [];
    this.flightUsage = [];
    this.forecastProject = {};
    this.forecastProjectSrc = {};
    this.forecastProjectAsset = {};
    this.forecastProjectLlpEventsGeneration = false;
    this.forecastProjectOccurrenceNumber = undefined;
    this.globalMaterialAvailability = { nok: 0, ok: 0, warn: 0 };
    this.materialAvailabilityByWorkPackage = new Map<string, MaterialAvailability>();
    this.resourceList = [];
    this.schedulerLoading = false;
    this.schedulerZoomLevel = ForecastFormComponent.TIME_RESOLUTION_MIN_ZOOM;
    this.startDate = undefined;
    this.topAssetList = [];
    this.upcomingEventsInPastWithWarnStatus = 0;
    this.upcomingEventsWithNokStatus = 0;
    this.upcomingEventsWithOkStatus = 0;
    this.upcomingEventsWithWarnStatus = 0;
    this.upcomingEventsWithAlertStatus = 0;
    this.workPackageList = [];

    this.selectedAsset = undefined;
    this.selectedAssets = [];
    this.selectedCustomer = undefined;
    this.selectedEventModel = undefined;
    this.selectedForecastCategory = ForecastCategory.FLEET;
    this.selectedEndDate = undefined;
    this.selectedRepairCenter = undefined;
    this.selectedWorkCenter = undefined;
    this.selectedStartDate = undefined;

    this.showAssetRequiredAvailabilitiesDialog = false;
    this.showDefectDialog = false;
    this.showScheduledEventDialog = false;
    this.showEventGroupDialog = false;
    this.showFlightDialog = false;
    this.showForecastLegendDialog = false;
    this.showForecastManagementBlock = false;
    this.showResourcesdAvailabilitiesDialog = false;
    this.showSearchAssetDialog = false;
    this.showSearchFleetDialog = false;
    this.showUnscheduledEventDialog = false;
    this.showWorkPackageCreateDialog = false;
    this.showWorkPackageUpdateDialog = false;
  }

  public onBeforeLoadOnce(): void {
    this.customerList = [];
    this.eventCategoryList = [];
    this.flightStatusList = [];
    this.flightTypeList = [];
    this.forecastProjectId = undefined;
    this.repairCenterList = [];
    this.taskTypeList = [];
    this.upcomingEventTypeList = [];
    this.workPackageAssignedToList = [];
    this.workPackageSiteList = [];
    this.workPackageStatusList = [];
    this.workPackageTypeList = [];

    this.registerEventUpdateObservable();
    this.registerForecastFilteringObservable();
    this.registerSchedulerTimeResolutionObservable();
    this.setActions();
    this.setForecastCategoryList();
    this.setNavigations();
    this.setSchedulerColumnList();
    this.setSchedulerConfig();
    this.setOccurrenceList();
    this.setTsnLabel();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public get forecastProjectAssetDesignation(): string {
    return BidoEquipmentUtils.createAssetName(this.forecastProjectAsset);
  }

  public addUnscheduledEvent(): void {
    this.selectedAsset = this.selectedAssets[0];
    this.selectedEventModel = undefined;
    this.showUnscheduledEventDialog = true;
  }

  public hideForecastManagement(): void {
    this.showForecastManagementBlock = false;
  }

  public launchOptimizer(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmLaunchOptimizer'),
      accept: () => {
        this.reloadForecast(undefined, ForecastLoadOption.OPTIMIZE);
      }
    });
  }

  public manageForecastProject(): void {
    this.showForecastManagementBlock = true;
  }

  public onChangeTimeResolution(event: { value: number }): void {
    this.schedulerTimeResolutionChanged.next(event.value);
  }

  public onCreatedWorkPackage(workPackage: MaintenanceForecastingWorkPackage): void {
    workPackage.bidmProject.assetCode = (this.selectedAsset as BidoEquipmentDTO).equipmentCode;
    workPackage.bidmProject.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED;

    this.createWorkPackage(workPackage.bidmProject);
  }

  public onUpdatedWorkPackage(event: EventModel<MaintenanceForecastingWorkPackage>): void {
    this.updateWorkPackage(event);
  }

  public openAirworthinessStatus(): void {
    this.forecastFormService.openAirworthinessStatus(this.selectedAssets.map((asset) => asset.equipmentCode as string));
  }

  public openForecastLegendDialog(): void {
    this.showForecastLegendDialog = true;
  }

  public openMaterialAvailabilityForAllWorkPackage(): void {
    const repairCenterCode = (this.getForecastRepairCenter() as BsdeSiteDTO).repairCenterCode as string;
    const workPackageIds = this.workPackageList
      .filter((workPackage) => workPackage.statusState !== AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE)
      .map((workPackage) => workPackage.projectId as string);
    this.forecastFormService.getAllSiteByCriteria({ siteCode: repairCenterCode }).subscribe({
      next: (siteList) => {
        if (ListUtils.isNullOrEmpty(siteList) && siteList.length !== 1) {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenMaterialAvailability'));
        } else {
          this.forecastFormService.openMaterialAvailabilityForAllWorkPackage(
            siteList[0].siteId as number,
            workPackageIds,
            this.forecastProject.projectStartDate as Date,
            this.forecastProject.projectEndDate as Date
          );
        }
      }
    });
  }

  public openMaintenancePlanning(): void {
    this.forecastFormService.openMaintenancePlanning(this.selectedAssets[0].equipmentCode as string);
  }

  public openStaffPlanning(): void {
    const repairCenterCode = (this.getForecastRepairCenter() as BsdeSiteDTO).repairCenterCode as string;
    this.forecastFormService.getAllSiteByCriteria({ siteCode: repairCenterCode }).subscribe({
      next: (siteList) => {
        if (ListUtils.isNullOrEmpty(siteList) && siteList.length !== 1) {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenStaffPlanning'));
        } else {
          this.forecastFormService.openStaffPlanning(
            siteList[0].bidtCompanyId as number,
            siteList[0].siteId as number,
            this.forecastProject.projectStartDate as Date,
            this.forecastProject.projectEndDate as Date
          );
        }
      }
    });
  }

  public showToday(): void {
    this.scheduler.schedulerEngine.zoomTo({
      centerDate: new Date(),
      preset: this.scheduler.schedulerEngine.viewPreset
    });
  }

  public reloadForecast(id?: string | undefined, loadOption: ForecastLoadOption = ForecastLoadOption.DEFAULT): void {
    this.onBeforeLoad();
    if (!!id) {
      this.forecastProjectId = id;
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.loadForecast({ loadOption, forceInit: !!id });
  }

  private addUpcomingEventsToWorkPackage(data: {
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }): Observable<unknown> {
    const asset = this.getAssetFromResourceId(data.events[0].resourceId);

    let observable = this.handleUpcomintEventAddedToWorkPackage(
      data.events[0],
      data.workPackage.projectId as string,
      asset
    );
    data.events.slice(1).forEach((event) => {
      observable = observable.pipe(
        concatMap(() => this.handleUpcomintEventAddedToWorkPackage(event, data.workPackage.projectId as string, asset))
      );
    });

    return observable;
  }

  private adjustEndDateOfSchedulerEventList(): void {
    this.eventList
      .filter((event) => event.eventType === EventModelType.WORK_PACKAGE)
      .filter((event) => !ObjectUtils.isDefined(event.endDate))
      .forEach((event) => {
        event.endDate = this.schedulerService.formatEventDate(this.endDate as Date);
      });
  }

  private buildAssetMap(elementList: MaintenanceForecastingElement[]): void {
    let counter = 0;

    const aux = (list: MaintenanceForecastingElement[]) => {
      list.forEach((elt) => {
        this.assetMap.set(counter.toString(), elt.equipment);
        counter++;
        aux(elt.children);
      });
    };

    aux(elementList);
  }

  private buildSchedulerEventFromDefect(
    defect: MaintenanceForecastingDefect,
    resourceId: string
  ): EventModel<MaintenanceForecastingDefect> {
    const date = defect.deferredDefectEvent.plannedDate || (defect.deferredDefectEvent.nteDate as Date);
    const eventStatus = this.forecastFormService.calculateUpcomingEventStatus(date, defect.affectedWorkPackage);
    const formattedDate = this.schedulerService.formatEventDate(date);

    const eventModel = {
      resourceId,
      id: this.generateSchedulerEventId(),
      startDate: formattedDate,
      endDate: formattedDate,
      name: '1',
      maxEndDate: defect.deferredDefectEvent.nteDate,
      eventType: EventModelType.DEFECT,
      resizable: false,
      _obj: defect
    };
    this.setEventColor(eventModel, eventStatus);

    return eventModel;
  }

  private buildSchedulerEventFromFlight(
    flight: BidoMissionEquipmentDTO,
    resourceId: string
  ): EventModel<BidoMissionEquipmentDTO> {
    return {
      resourceId,
      id: this.generateSchedulerEventId(),
      startDate: this.schedulerService.formatEventTimestamp(flight.startDate as number),
      endDate: this.schedulerService.formatEventTimestamp(flight.endDate as number),
      name: '',
      draggable: false,
      eventColor: ForecastFormService.EVENT_COLOR_FLIGHT.REAL,
      eventStyle: 'line',
      eventType: EventModelType.FLIGHT,
      resizable: false,
      _obj: flight
    };
  }

  private buildSchedulerEventFromScheduledEvent(
    event: MaintenanceForecastingScheduledEvent,
    eventType: string,
    resourceId: string
  ): EventModel<MaintenanceForecastingScheduledEvent> {
    const date = event.bsdeScheduledEvent.plannedDate || (event.bsdeScheduledEvent.nteDate as Date);
    const eventStatus = this.forecastFormService.calculateUpcomingEventStatus(
      date,
      event.affectedWorkPackage,
      event.bsdeScheduledEvent
    );
    const formattedDate = this.schedulerService.formatEventDate(date);

    const eventModel = {
      eventType,
      resourceId,
      id: this.generateSchedulerEventId(),
      startDate: formattedDate,
      endDate: formattedDate,
      name: '1',
      maxEndDate: event.bsdeScheduledEvent.nteDate,
      resizable: false,
      _obj: event
    };

    this.setEventColor(eventModel, eventStatus);

    return eventModel;
  }

  private buildSchedulerEventFromUnscheduledEvent(
    event: MaintenanceForecastingUnscheduledEvent,
    eventType: string,
    resourceId: string
  ): EventModel<MaintenanceForecastingUnscheduledEvent> {
    const date = event.bsdeEvent.plannedDate as Date;
    const eventStatus = this.forecastFormService.calculateUpcomingEventStatus(date, event.affectedWorkPackage);

    const eventModel = {
      eventType,
      resourceId,
      id: this.generateSchedulerEventId(),
      startDate: this.schedulerService.formatEventDate(date),
      endDate: this.schedulerService.formatEventDate(date),
      name: '1',
      resizable: false,
      _obj: event
    };

    this.setEventColor(eventModel, eventStatus);

    return eventModel;
  }

  private buildSchedulerEventFromWorkPackage(
    workPackage: MaintenanceForecastingWorkPackage,
    resourceId: string
  ): EventModel<MaintenanceForecastingWorkPackage> {
    const name = `${this.translateService.instant('workPackageNumberShort')}${workPackage.bidmProject.projectNumber}`;
    const startDate = workPackage.bidmProject.projectStartDate as Date;
    const endDate = workPackage.bidmProject.projectEndDate || workPackage.bidmProject.projectDueDate;
    const isModifiable = this.forecastFormService.checkIfWorkPackageIfModifiable(workPackage.bidmProject);

    const eventModel = {
      name,
      resourceId,
      id: this.generateSchedulerEventId(),
      startDate: this.schedulerService.formatEventDate(startDate),
      endDate: ObjectUtils.isDefined(endDate) ? this.schedulerService.formatEventDate(endDate as Date) : undefined,
      draggable: isModifiable,
      eventType: EventModelType.WORK_PACKAGE,
      resizable: isModifiable,
      _obj: workPackage
    };

    this.setWorkPackageColor(eventModel, workPackage.bidmProject.statusState as string);

    return eventModel;
  }

  private buildSchedulerEventList(elementList: MaintenanceForecastingElement[]): void {
    elementList.forEach((element) => {
      const resourceId = element.equipment.equipmentCode as string;

      ListUtils.orEmpty(element.missionEquipments)
        .filter(this.forecastFormService.isValidFlight)
        .forEach((flight) => this.eventList.push(this.buildSchedulerEventFromFlight(flight, resourceId)));

      ListUtils.orEmpty(element.workPackages)
        .filter(this.forecastFormService.isValidWorkPackage)
        .forEach((workPackage) =>
          this.eventList.push(this.buildSchedulerEventFromWorkPackage(workPackage, resourceId))
        );

      ListUtils.orEmpty(element.defects)
        .filter(this.forecastFormService.isValidDefect)
        .forEach((defect) => this.eventList.push(this.buildSchedulerEventFromDefect(defect, resourceId)));

      ListUtils.orEmpty(element.llpAlerts)
        .filter(this.forecastFormService.isValidScheduledEvent)
        .forEach((event) =>
          this.eventList.push(this.buildSchedulerEventFromScheduledEvent(event, EventModelType.LLP_ALERT, resourceId))
        );

      ListUtils.orEmpty(element.scheduledEvents)
        .filter(this.forecastFormService.isValidScheduledEvent)
        .forEach((event) =>
          this.eventList.push(
            this.buildSchedulerEventFromScheduledEvent(event, EventModelType.SCHEDULED_EVENT, resourceId)
          )
        );

      ListUtils.orEmpty(element.snChanges)
        .filter(this.forecastFormService.isValidUnscheduledEvent)
        .forEach((event) =>
          this.eventList.push(this.buildSchedulerEventFromUnscheduledEvent(event, EventModelType.SN_CHANGE, resourceId))
        );

      ListUtils.orEmpty(element.unscheduledEvents)
        .filter(this.forecastFormService.isValidUnscheduledEvent)
        .forEach((event) =>
          this.eventList.push(
            this.buildSchedulerEventFromUnscheduledEvent(event, EventModelType.UNSCHEDULED_EVENT, resourceId)
          )
        );

      this.buildSchedulerEventList(element.children);
    });
  }

  private buildSchedulerResourceFromAsset(element: MaintenanceForecastingElement): ResourceModel {
    return {
      id: element.equipment.equipmentCode as string,
      asset: element.equipment,
      assetDescription: element.equipmentDescription,
      children: element.children.map((childElement) => this.buildSchedulerResourceFromAsset(childElement)),
      flDescription: element.flDescription
    };
  }

  private buildSchedulerResourceList(elementList: MaintenanceForecastingElement[]): void {
    this.resourceList = elementList.map((element) => this.buildSchedulerResourceFromAsset(element));
  }

  private buildTopAssetList(elementList: MaintenanceForecastingElement[]): void {
    this.topAssetList = elementList.map((element) => element.equipment);
  }

  private calculateGlobalMaterialAvailability(): void {
    this.globalMaterialAvailability = Array.from(this.materialAvailabilityByWorkPackage.values()).reduce(
      (acc, val) => {
        return {
          nok: val.nok + acc.nok,
          ok: val.ok + acc.ok,
          warn: val.warn + acc.warn
        };
      },
      { nok: 0, ok: 0, warn: 0 }
    );
  }

  private calculateUpcomingEventNumberByStatus(eventList: GenericEventModel[]): void {
    const allUpcomingEvents = eventList
      .filter((event) => !this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType))
      .map((event) => {
        if (this.forecastFormService.isEventGroupSchedulerEventType(event.eventType)) {
          const eventGroup = event as EventGroupModel;

          return [
            ...eventGroup.defectList,
            ...eventGroup.llpAlertList,
            ...eventGroup.scheduledEventList,
            ...eventGroup.snChangeList,
            ...eventGroup.unscheduledEventList
          ];
        } else {
          return [event];
        }
      })
      .reduce((acc, val) => acc.concat(val), []);

    this.upcomingEventsInPastWithWarnStatus = allUpcomingEvents.filter(
      (event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.IN_PAST]
    ).length;
    this.upcomingEventsWithOkStatus = allUpcomingEvents.filter(
      (event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.OK]
    ).length;
    this.upcomingEventsWithWarnStatus = allUpcomingEvents.filter(
      (event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.WARN]
    ).length;
    this.upcomingEventsWithAlertStatus = allUpcomingEvents.filter(
      (event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.ALERT]
    ).length;
    this.upcomingEventsWithNokStatus = allUpcomingEvents.filter(
      (event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.NOK]
    ).length;
  }

  private clearHighlight(): void {
    this.eventList.forEach((eventModel) => {
      this.setEventCls(
        eventModel,
        this.getEventClasses(eventModel).filter(
          (cls) =>
            cls !== ForecastFormComponent.EVENT_HIGHLIGHT_CLS &&
            cls !== ForecastFormComponent.WORK_PACKAGE_HIGHLIGHT_CLS
        )
      );
    });

    this.filterForecast(this.forecastFormService.forecastFiltering);
    this.mergeFilteredEvents();
  }

  private createWorkPackage(workPackage: BidmProjectDTO): void {
    this.forecastFormService
      .createBidmProject(workPackage)
      .pipe(
        concatMap((newWorkPackageId) => {
          return forkJoin({
            newWorkPackage: this.forecastFormService.getWorkPackage(newWorkPackageId.projectId),
            siteDataList: this.forecastFormService.controlStock(workPackage)
          });
        })
      )
      .subscribe({
        next: (data) => {
          this.workPackageList = [...this.workPackageList, data.newWorkPackage];

          this.updateWorkPackageMaterialAvailabilityValue(data.newWorkPackage, data.siteDataList);

          const selectedResource = this.getResourceFromResourceId(
            data.newWorkPackage.assetCode as string
          ) as ResourceModel;
          const newWorkPackageEvent = this.buildSchedulerEventFromWorkPackage(
            { bidmProject: data.newWorkPackage, bidmWorkOrderList: [] },
            selectedResource.id
          );
          this.eventList.push(newWorkPackageEvent);

          this.messageService.showSuccessMessage('successMessage.createWorkPackage');

          this.updateSchedulerView();
        }
      });
  }

  private filterForecast(forecastFiltering: ForecastFiltering): void {
    this.filteredResourceList = StringUtils.isNullOrEmpty(forecastFiltering.globalSearch)
      ? this.resourceList
      : this.resourceList.filter((resource) => {
          const equipmentName = BidoEquipmentUtils.createAssetName(resource.asset);

          return (
            equipmentName.includes(forecastFiltering.globalSearch) ||
            resource.assetDescription.includes(forecastFiltering.globalSearch) ||
            resource.flDescription.includes(forecastFiltering.globalSearch)
          );
        });

    const filteredResourceIdList = this.filteredResourceList.map((resource) => resource.id);

    this.filteredEventList = this.eventList
      .filter((event) => filteredResourceIdList.includes(event.resourceId))
      .filter((event) => {
        if (this.forecastFormService.isDefectSchedulerEventType(event.eventType)) {
          return (
            this.forecastFormService.filterForecastByUpcomingEventStatus(
              forecastFiltering,
              event.eventColor as string
            ) &&
            this.forecastFormService.filterForecastByUpcomingEventType(forecastFiltering, event.eventType) &&
            this.forecastFormService.filterForecastDefect(
              forecastFiltering,
              event as EventModel<MaintenanceForecastingDefect>
            )
          );
        } else if (this.forecastFormService.isScheduledEventSchedulerEventType(event.eventType)) {
          return (
            this.forecastFormService.filterForecastByUpcomingEventStatus(
              forecastFiltering,
              event.eventColor as string
            ) &&
            this.forecastFormService.filterForecastByUpcomingEventType(forecastFiltering, event.eventType) &&
            this.forecastFormService.filterForecastScheduledEvent(
              forecastFiltering,
              event as EventModel<MaintenanceForecastingScheduledEvent>
            )
          );
        } else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(event.eventType)) {
          return (
            this.forecastFormService.filterForecastByUpcomingEventStatus(
              forecastFiltering,
              event.eventColor as string
            ) &&
            this.forecastFormService.filterForecastByUpcomingEventType(forecastFiltering, event.eventType) &&
            this.forecastFormService.filterForecastUnscheduledEvent(
              forecastFiltering,
              event as EventModel<MaintenanceForecastingUnscheduledEvent>
            )
          );
        } else if (this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType)) {
          return this.forecastFormService.filterForecastWorkPackage(
            forecastFiltering,
            event as EventModel<MaintenanceForecastingWorkPackage>
          );
        } else {
          return true;
        }
      });
  }

  private fillAssetListForFilter(elementList: MaintenanceForecastingElement[]): void {
    this.assetList = [];
    this.assetListSelected = [];
    elementList.forEach((maintenance: MaintenanceForecastingElement) => {
      if (maintenance.equipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
        maintenance.equipment._displayableField = maintenance.equipment.registration;
      } else {
        maintenance.equipment._displayableField = `${maintenance.equipment.pnCode}/${maintenance.equipment.sn}`;
      }
      this.assetList.push(maintenance.equipment);
      this.assetListSelected.push(maintenance.equipment);
    });
  }

  public onFilterAsset(): void {
    this.filteredResourceList = this.resourceList.filter((resource) => {
      let assetFound = false;
      this.assetListSelected.forEach((asset: BidoEquipmentDTO) => {
        if (asset.equipmentCode === resource.asset.equipmentCode) {
          assetFound = true;
        }
      });

      return assetFound;
    });
  }

  private fillWorkPackageList(elementList: MaintenanceForecastingElement[]): void {
    const extractWorkPackages = (elt: MaintenanceForecastingElement): BidmProjectDTO[] => {
      return elt.workPackages
        .map((workPackage) => workPackage.bidmProject)
        .concat(elt.children.map(extractWorkPackages).reduce((acc, val) => acc.concat(val), []));
    };

    this.workPackageList = elementList
      .map(extractWorkPackages)
      .reduce((acc, val) => acc.concat(val), [])
      .reduce((acc: BidmProjectDTO[], val) => {
        return acc.some((elt) => elt.projectId === val) ? acc : [...acc, val];
      }, []);
  }

  private findEventModelSrcById(id: number): GenericEventModel | undefined {
    return this.eventList.find((event) => event.id === id);
  }

  private generateSchedulerEventId(): number {
    return this.eventCounter++;
  }

  private getAllParentResourceIds(resourceId: string): string[] {
    const aux = (resource: ResourceModel, lineage: string[]): string[] => {
      if (resource.id === resourceId) {
        return lineage;
      } else {
        return resource.children
          .map((childResource: ResourceModel) => aux(childResource, [...lineage, resource.id]))
          .reduce((acc, val) => acc.concat(val), []);
      }
    };

    return this.resourceList.map((resource) => aux(resource, [])).reduce((acc, val) => acc.concat(val), []);
  }

  private getAssetFromResourceId(resourceId: string): BidoEquipmentDTO {
    const selectedResource = this.getResourceFromResourceId(resourceId) as ResourceModel;

    return selectedResource.asset;
  }

  private getEventClasses(event: GenericEventModel): string[] {
    return event.cls ? event.cls.split(' ') : [];
  }

  private getEventModelType(eventModel: GenericEventModel): string {
    return eventModel.eventType;
  }

  private getEventTooltip(eventModel: GenericEventModel): string {
    const eventModelType = this.getEventModelType(eventModel);

    if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
      const workPackageModel = eventModel as EventModel<MaintenanceForecastingWorkPackage>;

      return this.forecastFormService.tooltipWorkPackageSchedulerEventType(
        workPackageModel,
        this.workPackageStatusList
      );
    } else {
      return '';
    }
  }

  private getForecastRepairCenter(): BsdeSiteDTO | undefined {
    const matchingRepairCenter = this.repairCenterList.find(
      (repairCenter) => repairCenter.value.repairCenterCode === this.forecastProject.repairCenterCode
    );

    return ObjectUtils.isDefined(matchingRepairCenter)
      ? (matchingRepairCenter as LabelValue<BsdeSiteDTO>).value
      : undefined;
  }

  private getNextWorkPackageStatusLabel(workPackage: BidmProjectDTO): string {
    let key: string;
    if (workPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED) {
      key = 'validateSimulation';
    } else {
      key = 'releaseWorkPackage';
    }

    return this.translateService.instant(this.getTranslateKey(key as string)) as string;
  }

  private getPreviousWorkPackageStatusLabel(workPackage: BidmProjectDTO): string {
    let key: string;
    if (workPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED) {
      key = 'cancelRelease';
    } else {
      key = 'cancelScheduling';
    }

    return this.translateService.instant(this.getTranslateKey(key as string)) as string;
  }

  private getResourceFromResourceId(resourceId: string): ResourceModel | undefined {
    const queue = [...this.resourceList];
    while (queue.length > 0) {
      const first = queue.shift() as ResourceModel;
      if (first.id === resourceId) {
        return first;
      } else if (!ListUtils.isNullOrEmpty(first.children)) {
        queue.push(...(first.children as ResourceModel[]));
      }
    }

    return undefined;
  }

  private handleUpcomintEventAddedToWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUpcomingEvent>,
    workPackageId: string,
    asset: BidoEquipmentDTO
  ): Observable<unknown> {
    const workPackageEventModel = this.eventList.find((genericEventModel) => {
      return (
        this.forecastFormService.isWorkPackageSchedulerEventType(genericEventModel.eventType) &&
        (genericEventModel as EventModel<MaintenanceForecastingWorkPackage>)._obj.bidmProject.projectId ===
          workPackageId
      );
    }) as EventModel<MaintenanceForecastingWorkPackage>;
    const workPackage = workPackageEventModel._obj.bidmProject;

    let observable: Observable<BidmProjectDTO> | undefined;

    if (this.forecastFormService.isDefectSchedulerEventType(eventModel.eventType)) {
      observable = this.forecastFormService.addDeferredDefectEventToWorkPackage(
        eventModel as EventModel<MaintenanceForecastingDefect>,
        workPackage,
        asset,
        this.forecastProjectId as string
      );
    } else if (this.forecastFormService.isScheduledEventSchedulerEventType(eventModel.eventType)) {
      observable = this.forecastFormService.addBsdeScheduledEventToWorkPackage(
        eventModel as EventModel<MaintenanceForecastingScheduledEvent>,
        workPackage,
        asset,
        this.forecastProjectId as string
      );
    } else if (this.forecastFormService.isSnChangeSchedulerEventType(eventModel.eventType)) {
      observable = this.forecastFormService.addBsdeEventSnChangeToWorkPackage(
        eventModel as EventModel<MaintenanceForecastingUnscheduledEvent>,
        workPackage,
        asset,
        this.forecastProjectId as string
      );
    } else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModel.eventType)) {
      const unscheduledEventModel = eventModel as EventModel<MaintenanceForecastingUnscheduledEvent>;
      const bsdeEvent = unscheduledEventModel._obj.bsdeEvent;
      if (bsdeEvent.eventType === BsdeEventTypeConstants.EVOLUTION_TYPE_CODE) {
        observable = this.forecastFormService.addBsdeUnscheduledEventEvolutionToWorkPackage(
          unscheduledEventModel,
          workPackage,
          asset,
          this.forecastProjectId as string
        );
      } else if (bsdeEvent.eventType === BsdeEventTypeConstants.TASK_TYPE_CODE) {
        observable = this.forecastFormService.addBsdeUnscheduledEventTaskToWorkPackage(
          unscheduledEventModel,
          workPackage,
          asset,
          this.forecastProjectId as string
        );
      }
    }

    if (ObjectUtils.isDefined(observable)) {
      return (observable as Observable<BidmProjectDTO>).pipe(
        concatMap((updatedWorkPackage) => {
          workPackageEventModel._obj.bidmProject = updatedWorkPackage;

          return this.forecastFormService.controlStock(workPackage);
        }),
        concatMap((siteDataList) => {
          this.updateWorkPackageMaterialAvailabilityValue(workPackage, siteDataList);

          const newStatus = this.forecastFormService.calculateUpcomingEventStatus(
            eventModel.endDate as Date,
            workPackage
          );

          // Update event reference into events
          const eventModelSrc = this.findEventModelSrcById(eventModel.id) as EventModel<
            MaintenanceForecastingUpcomingEvent
          >;
          eventModelSrc._obj.affectedWorkPackage = workPackage;
          this.setEventColor(eventModelSrc, newStatus);

          this.messageService.showSuccessMessage(this.getTranslateKey('successOnAddEventToWorkPackage'));

          return of(undefined);
        })
      );
    } else {
      return of(undefined);
    }
  }

  private handleUpcomintEventRemovedFromWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUpcomingEvent>,
    workPackageId: string,
    asset: BidoEquipmentDTO
  ): Observable<unknown> {
    const workPackageEventModel = this.eventList.find((genericEventModel) => {
      return (
        this.forecastFormService.isWorkPackageSchedulerEventType(genericEventModel.eventType) &&
        (genericEventModel as EventModel<MaintenanceForecastingWorkPackage>)._obj.bidmProject.projectId ===
          workPackageId
      );
    }) as EventModel<MaintenanceForecastingWorkPackage>;
    const workPackage = workPackageEventModel._obj.bidmProject;

    let observable: Observable<BidmProjectDTO> | undefined;

    if (this.forecastFormService.isDefectSchedulerEventType(eventModel.eventType)) {
      observable = this.forecastFormService.removeDeferredDefectEventFromWorkPackage(
        eventModel as EventModel<MaintenanceForecastingDefect>,
        workPackage,
        asset,
        this.forecastProjectId as string
      );
    } else if (this.forecastFormService.isScheduledEventSchedulerEventType(eventModel.eventType)) {
      observable = this.forecastFormService.removeBsdeScheduledEventFromWorkPackage(
        eventModel as EventModel<MaintenanceForecastingScheduledEvent>,
        workPackage,
        asset,
        this.forecastProjectId as string
      );
    } else if (this.forecastFormService.isSnChangeSchedulerEventType(eventModel.eventType)) {
      observable = this.forecastFormService.removeBsdeEventSnChangeFromWorkPackage(
        eventModel as EventModel<MaintenanceForecastingUnscheduledEvent>,
        workPackage,
        asset,
        this.forecastProjectId as string
      );
    } else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModel.eventType)) {
      const unscheduledEventModel = eventModel as EventModel<MaintenanceForecastingUnscheduledEvent>;
      const bsdeEvent = unscheduledEventModel._obj.bsdeEvent;
      if (bsdeEvent.eventType === BsdeEventTypeConstants.EVOLUTION_TYPE_CODE) {
        observable = this.forecastFormService.removeBsdeUnscheduledEventEvolutionFromWorkPackage(
          unscheduledEventModel,
          workPackage,
          asset,
          this.forecastProjectId as string
        );
      } else if (bsdeEvent.eventType === BsdeEventTypeConstants.TASK_TYPE_CODE) {
        observable = this.forecastFormService.removeBsdeUnscheduledEventTaskFromWorkPackage(
          unscheduledEventModel,
          workPackage,
          asset,
          this.forecastProjectId as string
        );
      }
    }

    if (ObjectUtils.isDefined(observable)) {
      return (observable as Observable<BidmProjectDTO>).pipe(
        concatMap((updatedWorkPackage) => {
          workPackageEventModel._obj.bidmProject = updatedWorkPackage;

          return this.forecastFormService.controlStock(workPackage);
        }),
        concatMap((siteDataList) => {
          const eventModelToUpdate = this.findEventModelSrcById(eventModel.id) as EventModel<
            MaintenanceForecastingUpcomingEvent
          >;

          // Update event
          eventModelToUpdate._obj.affectedWorkPackage = undefined;

          const newStatus = this.forecastFormService.calculateUpcomingEventStatus(
            eventModelToUpdate.endDate as Date,
            eventModelToUpdate._obj.affectedWorkPackage
          );

          this.setEventColor(eventModelToUpdate, newStatus);

          // Update work package
          this.updateWorkPackageMaterialAvailabilityValue(workPackage, siteDataList);

          this.messageService.showSuccessMessage(this.getTranslateKey('successOnRemoveEventToWorkPackage'));

          return of(undefined);
        })
      );
    } else {
      return of(undefined);
    }
  }

  private highlightEventsAssociatedToWorkPackage(
    selectedEventModel: EventModel<MaintenanceForecastingWorkPackage>
  ): void {
    const workPackage = selectedEventModel._obj.bidmProject;

    // Keep only events associated to selected work package
    this.filteredEventList = this.filteredEventList.filter((eventModel) => {
      if (eventModel.resourceId !== selectedEventModel.resourceId) {
        return true;
      } else {
        const eventModelType = this.getEventModelType(eventModel);

        if (
          this.forecastFormService.isDefectSchedulerEventType(eventModelType) ||
          this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType) ||
          this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)
        ) {
          const upcomingEventModel = eventModel as EventModel<MaintenanceForecastingUpcomingEvent>;

          return this.isEventAssociatedToWorkPackage(upcomingEventModel, workPackage);
        } else if (this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
          const eventGroupModel = eventModel as EventGroupModel;

          return (
            eventGroupModel.defectList.some((event) => this.isEventAssociatedToWorkPackage(event, workPackage)) ||
            eventGroupModel.llpAlertList.some((event) => this.isEventAssociatedToWorkPackage(event, workPackage)) ||
            eventGroupModel.scheduledEventList.some((event) =>
              this.isEventAssociatedToWorkPackage(event, workPackage)
            ) ||
            eventGroupModel.snChangeList.some((event) => this.isEventAssociatedToWorkPackage(event, workPackage)) ||
            eventGroupModel.unscheduledEventList.some((event) =>
              this.isEventAssociatedToWorkPackage(event, workPackage)
            )
          );
        } else {
          return true;
        }
      }
    });

    // Highlight selected work pacakge
    this.filteredEventList.forEach((eventModel) => {
      if (eventModel.id === selectedEventModel.id) {
        this.setEventCls(eventModel, [
          ...this.getEventClasses(eventModel),
          ForecastFormComponent.WORK_PACKAGE_HIGHLIGHT_CLS
        ]);
      }
    });
  }

  private highlightWorkPackagesAssociatedToEvent(selectedEventModel: GenericEventModel): void {
    // Keep only work packages associated to selected event
    const workPackages: (BidmProjectDTO | undefined)[] = [];
    if (
      this.forecastFormService.isDefectSchedulerEventType(selectedEventModel.eventType) ||
      this.forecastFormService.isScheduledEventSchedulerEventType(selectedEventModel.eventType) ||
      this.forecastFormService.isUnscheduledEventSchedulerEventType(selectedEventModel.eventType)
    ) {
      workPackages.push(
        (selectedEventModel as EventModel<MaintenanceForecastingUpcomingEvent>)._obj.affectedWorkPackage
      );
    } else if (this.forecastFormService.isEventGroupSchedulerEventType(selectedEventModel.eventType)) {
      const eventGroup = selectedEventModel as EventGroupModel;

      workPackages.push(
        ...[
          ...eventGroup.defectList,
          ...eventGroup.llpAlertList,
          ...eventGroup.scheduledEventList,
          ...eventGroup.snChangeList,
          ...eventGroup.unscheduledEventList
        ].map((eventModel) => (eventModel as EventModel<MaintenanceForecastingUpcomingEvent>)._obj.affectedWorkPackage)
      );
    }

    const workPackageIds = workPackages
      .filter((workPackage) => ObjectUtils.isDefined(workPackage))
      .map((workPackage) => (workPackage as BidmProjectDTO).projectId);

    this.filteredEventList = this.filteredEventList.filter((eventModel) => {
      if (eventModel.resourceId !== selectedEventModel.resourceId) {
        return true;
      } else {
        if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModel.eventType)) {
          const workPackageEventModel = eventModel as EventModel<MaintenanceForecastingWorkPackage>;

          return workPackageIds.includes(workPackageEventModel._obj.bidmProject.projectId);
        } else {
          return true;
        }
      }
    });

    // Highlight selected event
    this.filteredEventList.forEach((eventModel) => {
      if (eventModel.id === selectedEventModel.id) {
        this.setEventCls(eventModel, [...this.getEventClasses(eventModel), ForecastFormComponent.EVENT_HIGHLIGHT_CLS]);
      }
    });
  }

  private initSchedulerEngine(): void {
    if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
      this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
    } else {
      this.scheduler.schedulerEngine.localeManager.locale = 'En';
    }

    this.registerSchedulerBeforeDragCreateFinalize();
    this.registerSchedulerBeforeEventdropfinalize();
    this.registerSchedulerBeforeEventEdit();
    this.registerSchedulerCellClick();
    this.registerSchedulerClick();
    this.registerSchedulerEventClick();
    this.registerSchedulerEventDrop();
    this.registerSchedulerEventResizeEnd();
    this.registerSchedulerListeners();

    this.setSchedulerResourceColumnWidth();
  }

  private isEventAssociatedToWorkPackage(
    eventModel: EventModel<MaintenanceForecastingUpcomingEvent>,
    workPackage: BidmProjectDTO
  ): boolean {
    return (
      ObjectUtils.isDefined(eventModel._obj.affectedWorkPackage) &&
      (eventModel._obj.affectedWorkPackage as BidmProjectDTO).projectId === workPackage.projectId
    );
  }

  private loadForecast(
    { loadOption, forceInit }: { loadOption: ForecastLoadOption; forceInit: boolean } = {
      loadOption: ForecastLoadOption.DEFAULT,
      forceInit: true
    }
  ): void {
    this.schedulerLoading = !this.isCreateOpenMode;

    forkJoin({
      forecast: StringUtils.isNullOrEmpty(this.forecastProjectId)
        ? of(undefined)
        : forkJoin({
            init: forceInit ? this.forecastFormService.initialize(this.forecastProjectId as string) : of(undefined),
            projectAttributeList: this.forecastFormService.getBsdeProjectAttributeList({
              projectId: this.forecastProjectId as string
            }),
            projectData: this.forecastFormService.getBsdeProject({ projectId: this.forecastProjectId as string })
          }).pipe(
            tap((result) => {
              this.setProjectAttributeList(result.projectAttributeList);
            }),
            concatMap((result1) => {
              const project = result1.projectData;

              return forkJoin({
                projectAsset:
                  ObjectUtils.isDefined(project.projectPn) || ObjectUtils.isDefined(project.projectSn)
                    ? this.forecastFormService.getForecastProjectAsset({
                        pnCode: project.projectPn,
                        sn: project.projectSn
                      })
                    : of(undefined),
                data: this.forecastFormService.loadForecastData(
                  project,
                  this.forecastProjectId as string,
                  this.forecastProjectLlpEventsGeneration,
                  this.forecastProjectOccurrenceNumber,
                  loadOption
                )
              }).pipe(
                concatMap((result2) => {
                  this.fillWorkPackageList(result2.data);
                  this.fillAssetListForFilter(result2.data);

                  return forkJoin({
                    data: of(result2.data),
                    flightUsage: this.forecastFormService.getAllForecastFlightUsage(this.forecastProjectId as string),
                    materialAvailabilityByWorkPackage: ListUtils.isEmpty(this.workPackageList)
                      ? of([])
                      : forkJoin(
                          this.workPackageList.map((workPackage) => this.forecastFormService.controlStock(workPackage))
                        ),
                    project: of(project),
                    projectAsset: of(result2.projectAsset)
                  });
                })
              );
            })
          ),
      customerList: ListUtils.isEmpty(this.customerList)
        ? this.forecastFormService.getAllForecastProjectCustomer()
        : of(this.customerList),
      eventCategoryList: ListUtils.isEmpty(this.eventCategoryList)
        ? this.propertiesService.getValue(GenericPropertyConstants.EVENT_CATEGORY_MAP)
        : of(this.eventCategoryList),
      flightStatusList: ListUtils.isEmpty(this.flightStatusList)
        ? this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_STATUS_MAP)
        : of(this.flightStatusList),
      flightTypeList: ListUtils.isEmpty(this.flightTypeList)
        ? this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP)
        : of(this.flightTypeList),
      repairCenterList: ListUtils.isEmpty(this.repairCenterList)
        ? this.forecastFormService.getAllForecastProjectSite()
        : of(this.repairCenterList),
      taskTypeList: ListUtils.isEmpty(this.taskTypeList)
        ? this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP)
        : of(this.taskTypeList),
      upcomingEventTypeList: ListUtils.isEmpty(this.upcomingEventTypeList)
        ? this.forecastFormService.buildUpcomingEventTypeList()
        : of(this.upcomingEventTypeList),
      workPackageAssignedToList: ListUtils.isEmpty(this.workPackageAssignedToList)
        ? this.forecastFormService.workPackageAssignedToList()
        : of(this.workPackageAssignedToList),
      workPackageSiteList: ListUtils.isEmpty(this.workPackageSiteList)
        ? this.forecastFormService.getAllWorkPackageSite()
        : of(this.workPackageSiteList),
      workPackageStatusList: ListUtils.isEmpty(this.workPackageStatusList)
        ? this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP)
        : of(this.workPackageStatusList),
      workPackageTypeList: ListUtils.isEmpty(this.workPackageTypeList)
        ? this.propertiesService.getValue(GenericPropertyConstants.WORK_PACKAGE_TYPE_MAP)
        : of(this.workPackageTypeList)
    }).subscribe({
      next: (result) => {
        this.customerList = result.customerList;
        this.eventCategoryList = result.eventCategoryList;
        this.flightStatusList = result.flightStatusList;
        this.flightTypeList = result.flightTypeList;
        this.repairCenterList = result.repairCenterList;
        this.taskTypeList = result.taskTypeList;
        this.upcomingEventTypeList = result.upcomingEventTypeList;
        this.workPackageAssignedToList = result.workPackageAssignedToList;
        this.workPackageSiteList = result.workPackageSiteList;
        this.workPackageStatusList = result.workPackageStatusList;
        this.workPackageTypeList = result.workPackageTypeList;

        if (!this.isCreateOpenMode) {
          this.forecastFormService.initForecastFiltering(this.upcomingEventTypeList, this.workPackageStatusList);

          const forecast = result.forecast as {
            data: MaintenanceForecastingElement[];
            flightUsage: GetAllMaintenanceForecastingFlightUsageOutput[];
            materialAvailabilityByWorkPackage: GetQuantityInStockBySiteOutput[][];
            project: BsdeProjectDTO;
            projectAsset: BidoEquipmentDTO | undefined;
          };

          this.forecastProjectSrc = forecast.project;
          this.forecastProject = { ...this.forecastProjectSrc };
          this.forecastProjectAsset = forecast.projectAsset || {};
          this.flightUsage = forecast.flightUsage;

          this.setComponentContext();

          this.setForecastCategory();
          this.setForecastCustomerCode();
          this.setForecastRepairCenterCode();
          this.setForecastWorkCenterCode();

          forecast.materialAvailabilityByWorkPackage.forEach((siteDataList, i) => {
            this.updateWorkPackageMaterialAvailabilityValue(this.workPackageList[i], siteDataList);
          });

          this.buildSchedulerResourceList(forecast.data);
          this.buildSchedulerEventList(forecast.data);
          this.buildAssetMap(forecast.data);
          this.buildTopAssetList(forecast.data);

          this.adjustEndDateOfSchedulerEventList();

          this.updateSchedulerView();

          setTimeout(() => {
            this.scheduler.schedulerEngine.zoomToFit();

            this.schedulerZoomLevel =
              this.scheduler.schedulerEngine.zoomLevel > ForecastFormComponent.TIME_RESOLUTION_MAX_ZOOM
                ? ForecastFormComponent.TIME_RESOLUTION_MAX_ZOOM
                : this.scheduler.schedulerEngine.zoomLevel < ForecastFormComponent.TIME_RESOLUTION_MIN_ZOOM
                ? ForecastFormComponent.TIME_RESOLUTION_MIN_ZOOM
                : this.scheduler.schedulerEngine.zoomLevel;

            this.schedulerLoading = false;
          });

          if (loadOption === ForecastLoadOption.OPTIMIZE) {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnLaunchOptimizer'));
          }
        }
      }
    });
  }

  private mergeFilteredEvents(): void {
    const eventMap = new Map<string, GenericEventModel[]>();

    this.filteredEventList
      .filter((event) => {
        return (
          !this.forecastFormService.isFlightSchedulerEventType(event.eventType) &&
          !this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType)
        );
      })
      .forEach((event) => {
        const eventKey = `${event.resourceId}#${event.startDate}`;
        if (!eventMap.has(eventKey)) {
          eventMap.set(eventKey, []);
        }
        eventMap.set(eventKey, [...eventMap.get(eventKey), event]);
      });

    [...eventMap.values()]
      .filter((eventList) => eventList.length > 1)
      .forEach((eventToMergeList) => {
        // 1. Remove all events with same date from eventList
        const eventToMergeIdList = eventToMergeList.map((event) => event.id);
        this.filteredEventList = this.filteredEventList.filter((event) => !eventToMergeIdList.includes(event.id));

        // 2. Add a new event regrouping all events at given date
        const defectList = this.forecastFormService.getDefectList(eventToMergeList);
        const llpAlertList = this.forecastFormService.getLlpAlertList(eventToMergeList);
        const scheduledEventList = this.forecastFormService.getScheduledEventList(eventToMergeList);
        const snChangeList = this.forecastFormService.getSnChangeList(eventToMergeList);
        const unscheduledEventList = this.forecastFormService.getUnscheduledEventList(eventToMergeList);

        const upcomingEventsCount =
          defectList.length +
          llpAlertList.length +
          scheduledEventList.length +
          snChangeList.length +
          unscheduledEventList.length;

        const eventGroup: EventGroupModel = {
          defectList,
          llpAlertList,
          scheduledEventList,
          snChangeList,
          unscheduledEventList,
          id: this.generateSchedulerEventId(),
          resourceId: eventToMergeList[0].resourceId,
          startDate: eventToMergeList[0].startDate,
          endDate: eventToMergeList[0].endDate,
          name:
            upcomingEventsCount > ForecastFormComponent.EVENT_GROUP_MAX_VALUE_DISPLAYED
              ? ForecastFormComponent.EVENT_GROUP_MAX_VALUE_LABEL
              : `${upcomingEventsCount}`,
          eventType: EventModelType.EVENT_GROUP,
          resizable: false
        };
        this.setEventGroupColor(eventGroup);

        this.filteredEventList.push(eventGroup);
      });
  }

  private registerEventUpdateObservable(): void {
    this.forecastFormService.eventGroupPlannedDateUpdate$.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: {
        eventGroup: EventGroupModel;
        events: EventModel<MaintenanceForecastingUpcomingEvent>[];
        plannedDate: Date;
      }) => {
        this.updatePlannedDateForEventGroup(data).subscribe({
          next: () => {
            this.updateSchedulerView();
          }
        });
      }
    });

    this.forecastFormService.eventsAddedToWorkPackage$.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: { events: EventModel<MaintenanceForecastingUpcomingEvent>[]; workPackage: BidmProjectDTO }) => {
        this.addUpcomingEventsToWorkPackage(data).subscribe({
          next: () => {
            this.updateSchedulerView();
          }
        });
      }
    });

    this.forecastFormService.eventsRemovedFromWorkPackage$.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: { events: EventModel<MaintenanceForecastingUpcomingEvent>[]; workPackage: BidmProjectDTO }) => {
        this.removeUpcomingEventsFromWorkPackage(data).subscribe({
          next: () => {
            this.updateSchedulerView();
          }
        });
      }
    });

    this.forecastFormService.scheduledEventPlannedDateUpdate$.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: { event: EventModel<MaintenanceForecastingScheduledEvent>; plannedDate: Date }) => {
        this.updatePlannedDateForScheduledEvent(
          data.event as EventModel<MaintenanceForecastingScheduledEvent>,
          data.plannedDate
        ).subscribe({
          next: () => {
            this.updateSchedulerView();
          }
        });
      }
    });

    this.forecastFormService.unscheduledEventCreate$.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: { event: BsdeEventDTO }) => {
        this.forecastFormService.createBsdeEvent(data.event).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('successMessage.createUnscheduledEvent');

            this.reloadForecast(undefined); // TODO: avoid full reload
          }
        });
      }
    });

    this.forecastFormService.unscheduledEventUpdate$.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: { event: EventModel<MaintenanceForecastingUnscheduledEvent> }) => {
        this.updatePlannedDateForUnscheduledEvent(data.event, data.event._obj.bsdeEvent.plannedDate as Date).subscribe({
          next: () => {
            this.updateSchedulerView();
          }
        });
      }
    });
  }

  private registerForecastFilteringObservable(): void {
    this.forecastFormService.forecastFiltering$.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: () => {
        this.updateSchedulerView();
      }
    });
  }

  private registerSchedulerBeforeDragCreateFinalize(): void {
    this.scheduler.schedulerEngine.on('beforeDragCreateFinalize', ({ context }: { context: SchedulerDragContext }) => {
      context.async = true;

      this.selectedAsset = this.getAssetFromResourceId(context.resourceRecord.id);
      this.selectedEndDate = context.endDate;
      this.selectedStartDate = context.startDate;
      this.showWorkPackageCreateDialog = true;

      context.finalize(false);
    });
  }

  private registerSchedulerBeforeEventdropfinalize(): void {
    this.scheduler.schedulerEngine.on('beforeeventdropfinalize', ({ context }: { context: SchedulerDropContext }) => {
      context.async = true;

      let dropStatus = false;

      if (this.forecastFormService.isWorkPackageSchedulerEventType(context.record.data.eventType)) {
        if (context.targetEventRecord || context.newResource.id !== context.record.data.resourceId) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnInvalidOperation'));
        } else {
          dropStatus = true;
        }
      } else if (this.forecastFormService.isEventGroupSchedulerEventType(context.record.data.eventType)) {
        if (context.targetEventRecord) {
          if (
            !this.forecastFormService.isWorkPackageSchedulerEventType(context.targetEventRecord.data.eventType) ||
            (context.newResource.id !== context.record.data.resourceId &&
              !this.getAllParentResourceIds(context.record.data.resourceId).includes(context.newResource.id))
          ) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnInvalidOperation'));
          } else {
            const eventGroup = context.record.data as EventGroupModel;
            const eventsInEventGroup = [
              ...eventGroup.defectList,
              ...eventGroup.llpAlertList,
              ...eventGroup.scheduledEventList,
              ...eventGroup.snChangeList,
              ...eventGroup.unscheduledEventList
            ];
            const hasEventAlreadyAffected = eventsInEventGroup.some((event) =>
              ObjectUtils.isDefined((event as EventModel<MaintenanceForecastingUpcomingEvent>)._obj.affectedWorkPackage)
            );
            if (hasEventAlreadyAffected) {
              this.messageService.showWarningMessage(
                this.getTranslateKey('warningOnSomeEventsAlreadyAffectedToWorkPackage')
              );
            } else {
              this.confirmationService.confirm({
                interpolateParams: {
                  value: (context.targetEventRecord.data as EventModel<MaintenanceForecastingWorkPackage>)._obj
                    .bidmProject.projectNumber
                },
                messageKey: this.getTranslateKey('confirmAddToWorkPackage'),
                accept: () => {
                  this.addUpcomingEventsToWorkPackage({
                    events: eventsInEventGroup,
                    workPackage: ((context.targetEventRecord as SchedulerEventRecord<GenericEventModel>)
                      .data as EventModel<MaintenanceForecastingWorkPackage>)._obj.bidmProject
                  }).subscribe({
                    next: () => {
                      this.updateSchedulerView();
                    }
                  });
                }
              });
            }
          }
        } else if (
          !this.forecastFormService.isValidPlannedDateForEventGroup(
            context.record.data as EventGroupModel,
            context.endDate
          )
        ) {
          this.messageService.showWarningMessage(
            this.getTranslateKey('warningOnChosenDatePosteriorToSomeNotToExceedDate')
          );
        } else {
          dropStatus = true;
        }
      } else if (
        this.forecastFormService.isDefectSchedulerEventType(context.record.data.eventType) ||
        this.forecastFormService.isScheduledEventSchedulerEventType(context.record.data.eventType) ||
        this.forecastFormService.isUnscheduledEventSchedulerEventType(context.record.data.eventType)
      ) {
        if (context.targetEventRecord) {
          if (
            !this.forecastFormService.isWorkPackageSchedulerEventType(context.targetEventRecord.data.eventType) ||
            (context.newResource.id !== context.record.data.resourceId &&
              !this.getAllParentResourceIds(context.record.data.resourceId).includes(context.newResource.id))
          ) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnInvalidOperation'));
          } else {
            this.confirmationService.confirm({
              interpolateParams: {
                value: (context.targetEventRecord.data as EventModel<MaintenanceForecastingWorkPackage>)._obj
                  .bidmProject.projectNumber
              },
              messageKey: this.getTranslateKey('confirmAddToWorkPackage'),
              accept: () => {
                this.handleUpcomintEventAddedToWorkPackage(
                  context.record.data as EventModel<MaintenanceForecastingUpcomingEvent>,
                  ((context.targetEventRecord as SchedulerEventRecord<GenericEventModel>).data as EventModel<
                    MaintenanceForecastingWorkPackage
                  >)._obj.bidmProject.projectId as string,
                  this.getAssetFromResourceId(context.record.data.resourceId)
                ).subscribe({
                  next: () => {
                    this.updateSchedulerView();
                  }
                });
              }
            });
          }
        } else if (
          (this.forecastFormService.isDefectSchedulerEventType(context.record.data.eventType) ||
            this.forecastFormService.isScheduledEventSchedulerEventType(context.record.data.eventType)) &&
          moment(context.endDate).isAfter(moment(context.record.data.maxEndDate))
        ) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnChosenDatePosteriorToNotToExceedDate'));
        } else {
          dropStatus = true;
        }
      }

      context.finalize(dropStatus);
    });
  }

  private registerSchedulerBeforeEventEdit(): void {
    this.scheduler.schedulerEngine.on(
      'beforeEventEdit',
      ({ eventRecord }: { eventRecord: SchedulerEventRecord<GenericEventModel> }) => {
        const eventModel = eventRecord.data;
        const eventModelType = this.getEventModelType(eventModel);

        this.selectedEventModel = eventModel;

        if (this.forecastFormService.isDefectSchedulerEventType(eventModelType)) {
          this.showDefectDialog = true;
        } else if (this.forecastFormService.isFlightSchedulerEventType(eventModelType)) {
          this.forecastFormService.openFlight((eventModel as EventModel<BidoMissionEquipmentDTO>)._obj);
        } else if (this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
          this.showEventGroupDialog = true;
        } else if (this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType)) {
          this.showScheduledEventDialog = true;
        } else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)) {
          this.showUnscheduledEventDialog = true;
        } else if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
          this.showWorkPackageUpdateDialog = true;
        }

        return false;
      }
    );
  }

  private registerSchedulerCellClick(): void {
    this.scheduler.schedulerEngine.on(
      'cellClick',
      ({ cellElement, record }: { cellElement: HTMLElement; record: ResourceModel }) => {
        if (cellElement.classList.contains('b-tree-cell')) {
          cellElement.classList.remove('b-focused');
          cellElement.classList.remove('b-selected');
          if (cellElement.parentElement) {
            cellElement.parentElement.classList.remove('b-selected');
          }

          if (this.selectedAssets.includes(record.asset)) {
            cellElement.classList.remove('resource-selected');

            this.selectedAssets = this.selectedAssets.filter((selectedAsset) => selectedAsset !== record.asset);
          } else {
            cellElement.classList.add('resource-selected');

            this.selectedAssets = [...this.selectedAssets, record.asset];
          }
        }
      }
    );
  }

  private registerSchedulerClick(): void {
    this.scheduler.schedulerEngine.on('scheduleClick', () => {
      this.clearHighlight();
    });
  }

  private registerSchedulerEventClick(): void {
    this.scheduler.schedulerEngine.on(
      'eventClick',
      ({ eventRecord }: { eventRecord: SchedulerEventRecord<GenericEventModel> }) => {
        const eventModelType = this.getEventModelType(eventRecord.data);

        if (
          this.forecastFormService.isDefectSchedulerEventType(eventModelType) ||
          this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType) ||
          this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType) ||
          this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)
        ) {
          if (this.getEventClasses(eventRecord.data).includes(ForecastFormComponent.EVENT_HIGHLIGHT_CLS)) {
            this.clearHighlight();
          } else {
            this.highlightWorkPackagesAssociatedToEvent(eventRecord.data);
          }
        } else if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
          if (this.getEventClasses(eventRecord.data).includes(ForecastFormComponent.WORK_PACKAGE_HIGHLIGHT_CLS)) {
            this.clearHighlight();
          } else {
            this.highlightEventsAssociatedToWorkPackage(
              eventRecord.data as EventModel<MaintenanceForecastingWorkPackage>
            );
          }
        } else {
          this.clearHighlight();
        }
      }
    );
  }

  private registerSchedulerEventDrop(): void {
    this.scheduler.schedulerEngine.on(
      'eventDrop',
      ({ eventRecords }: { eventRecords: SchedulerEventRecord<GenericEventModel>[] }) => {
        const eventRecord = eventRecords[0];
        const eventModel = eventRecord.data;
        const eventModelType = this.getEventModelType(eventModel);

        if (this.forecastFormService.isDefectSchedulerEventType(eventModelType)) {
          this.updateDefectDates(eventModel as EventModel<MaintenanceForecastingDefect>, eventModel.startDate);
        } else if (this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType)) {
          this.updatePlannedDateForScheduledEvent(
            eventModel as EventModel<MaintenanceForecastingScheduledEvent>,
            eventModel.startDate
          ).subscribe({
            next: () => {
              this.updateSchedulerView();
            }
          });
        } else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)) {
          this.updatePlannedDateForUnscheduledEvent(
            eventModel as EventModel<MaintenanceForecastingUnscheduledEvent>,
            eventModel.startDate
          ).subscribe({
            next: () => {
              this.updateSchedulerView();
            }
          });
        } else if (this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
          const eventGroup = eventModel as EventGroupModel;

          this.updatePlannedDateForEventGroup({
            eventGroup,
            events: [
              ...eventGroup.defectList,
              ...eventGroup.llpAlertList,
              ...eventGroup.scheduledEventList,
              ...eventGroup.snChangeList,
              ...eventGroup.unscheduledEventList
            ],
            plannedDate: eventModel.endDate as Date
          }).subscribe({
            next: () => {
              this.updateSchedulerView();
            }
          });
        } else if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
          this.updateWorkPackageDates(
            eventModel as EventModel<MaintenanceForecastingWorkPackage>,
            eventModel.startDate,
            eventModel.endDate as Date
          );
        }
      }
    );
  }

  private registerSchedulerEventResizeEnd(): void {
    this.scheduler.schedulerEngine.on(
      'eventResizeEnd',
      ({ eventRecord }: { eventRecord: SchedulerEventRecord<GenericEventModel> }) => {
        const eventModel = eventRecord.data;
        const eventModelType = this.getEventModelType(eventModel);

        if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
          this.updateWorkPackageDates(
            eventModel as EventModel<MaintenanceForecastingWorkPackage>,
            eventModel.startDate,
            eventModel.endDate as Date
          );
        }
      }
    );
  }

  private registerSchedulerListeners(): void {
    EventHelper.addListener(this.scheduler.schedulerEngine.element, {
      element: this.scheduler.schedulerEngine.element,
      click: (event: MouseEvent) => {
        const eventTarget = event.target as HTMLElement;
        if (
          eventTarget.classList.contains(ForecastFormComponent.ASSET_NAME_CLS) &&
          ObjectUtils.isDefined(this.assetMap.get(eventTarget.id))
        ) {
          this.forecastFormService.openAsset(this.assetMap.get(eventTarget.id) as BidoEquipmentDTO);
        }
      }
    });
  }

  private registerSchedulerTimeResolutionObservable(): void {
    this.schedulerTimeResolutionChanged.pipe(distinctUntilChanged(), takeUntil(this.unsubscribe)).subscribe({
      next: (value) => {
        this.scheduler.schedulerEngine.zoomTo(value);
      }
    });
  }

  private removeUpcomingEventsFromWorkPackage(data: {
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    workPackage: BidmProjectDTO;
  }): Observable<unknown> {
    const asset = this.getAssetFromResourceId(data.events[0].resourceId);

    let observable = this.handleUpcomintEventRemovedFromWorkPackage(
      data.events[0],
      data.workPackage.projectId as string,
      asset
    );
    data.events.slice(1).forEach((event) => {
      observable = observable.pipe(
        concatMap(() =>
          this.handleUpcomintEventRemovedFromWorkPackage(event, data.workPackage.projectId as string, asset)
        )
      );
    });

    return observable;
  }

  private removeWorkPackage(eventModel: EventModel<MaintenanceForecastingWorkPackage>): void {
    const workPackageToRemove = eventModel._obj.bidmProject;

    this.confirmationService.confirmDelete({
      messageKey: 'confirmationMessage.removeWorkPackage',
      accept: () => {
        const input: BidmProjectDTOId = {
          projectId: workPackageToRemove.projectId as string
        };
        this.forecastFormService.removeBidmProject(input).subscribe({
          next: () => {
            // Remove work package from materialAvailabilityByWorkPackage map
            this.materialAvailabilityByWorkPackage.delete(workPackageToRemove.projectId as string);

            // Remove work package from scheduler events
            this.eventList = this.eventList.filter((event) => event.id !== eventModel.id);

            // Update upcoming events associated to that work package
            const updateEventAssociatedToWorkPackage = (event: EventModel<MaintenanceForecastingUpcomingEvent>) => {
              if (
                event._obj.affectedWorkPackage &&
                event._obj.affectedWorkPackage.projectId === workPackageToRemove.projectId
              ) {
                event._obj.affectedWorkPackage = undefined;

                const newStatus = this.forecastFormService.calculateUpcomingEventStatus(
                  event.endDate as Date,
                  undefined
                );

                this.setEventColor(event, newStatus);
              }
            };

            this.eventList.forEach((genericEvent) => {
              if (
                this.forecastFormService.isDefectSchedulerEventType(genericEvent.eventType) ||
                this.forecastFormService.isScheduledEventSchedulerEventType(genericEvent.eventType) ||
                this.forecastFormService.isUnscheduledEventSchedulerEventType(genericEvent.eventType)
              ) {
                updateEventAssociatedToWorkPackage(genericEvent as EventModel<MaintenanceForecastingUpcomingEvent>);
              } else if (this.forecastFormService.isEventGroupSchedulerEventType(genericEvent.eventType)) {
                const eventGroup = genericEvent as EventGroupModel;

                eventGroup.defectList.forEach(updateEventAssociatedToWorkPackage);
                eventGroup.llpAlertList.forEach(updateEventAssociatedToWorkPackage);
                eventGroup.scheduledEventList.forEach(updateEventAssociatedToWorkPackage);
                eventGroup.snChangeList.forEach(updateEventAssociatedToWorkPackage);
                eventGroup.unscheduledEventList.forEach(updateEventAssociatedToWorkPackage);

                this.setEventGroupColor(eventGroup);
              }
            });

            this.messageService.showSuccessMessage('successMessage.removeWorkPackage');

            this.updateSchedulerView();
          }
        });
      }
    });
  }

  public displayAssetRequiredAvailabilitiesDialog() {
    this.showAssetRequiredAvailabilitiesDialog = true;
  }

  public displayResourcesdAvailabilitiesDialog() {
    this.showResourcesdAvailabilitiesDialog = true;
  }

  private setActions(): void {
    const configureAssetRequiredAvailabilitiesKey = this.getTranslateKey('configureAssetRequiredAvailabilities');
    const configureResourcesAvailabilitiesKey = this.getTranslateKey('configureResourcesAvailabilities');
    const editProjectHeaderKey = this.getTranslateKey('editProjectHeader');
    const launchOptimizerKey = this.getTranslateKey('launchOptimizer');
    this.translateService
      .get([
        configureAssetRequiredAvailabilitiesKey,
        configureResourcesAvailabilitiesKey,
        editProjectHeaderKey,
        launchOptimizerKey
      ])
      .subscribe({
        next: (translations: { [key: string]: string }) => {
          this.actions = [
            {
              label: translations[editProjectHeaderKey],
              command: () => {
                this.manageForecastProject();
              }
            },
            {
              label: translations[configureAssetRequiredAvailabilitiesKey],
              command: () => {
                this.showAssetRequiredAvailabilitiesDialog = true;
              }
            },
            {
              label: translations[configureResourcesAvailabilitiesKey],
              command: () => {
                this.showResourcesdAvailabilitiesDialog = true;
              }
            },
            {
              label: translations[launchOptimizerKey],
              command: () => {
                this.launchOptimizer();
              }
            }
          ];
        }
      });
  }

  private setComponentContext(): void {
    this.componentContext = ObjectUtils.isDefined(this.forecastProjectId)
      ? `${this.forecastProject.projectNumber} | ${this.forecastProject.projectName}`
      : 'tab.createMode';
    this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
  }

  private setEventCls(event: GenericEventModel, classes: string[]): void {
    event.cls = classes.join(' ');
  }

  private setEventColor(event: GenericEventModel, status: UpcomingEventStatus): void {
    event.eventColor = ForecastFormService.EVENT_COLOR_EVENT[status];

    this.updateEventCls(event);
  }

  private setEventContextMenu(eventModel: GenericEventModel, items: { [key: string]: ContextMenuItem }): void {
    const eventModelType = this.getEventModelType(eventModel);

    if (
      this.forecastFormService.isDefectSchedulerEventType(eventModelType) ||
      this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType) ||
      this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)
    ) {
      this.setEventContextMenuForUpcomingEvent(eventModel as EventModel<MaintenanceForecastingUpcomingEvent>, items);
    } else if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
      this.setEventContextMenuForWorkPackage(eventModel as EventModel<MaintenanceForecastingWorkPackage>, items);
    } else if (this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
      this.setEventContextMenuForUpcomingEventGroup(items);
    } else if (this.forecastFormService.isFlightSchedulerEventType(eventModelType)) {
      this.setEventContextMenuForFlight(items);
    }
  }

  private setEventContextMenuForFlight(items: { [key: string]: ContextMenuItem }): void {
    items.editEvent.text = this.translateService.instant('openFlight') as string;
    items.editEvent.icon = '';
  }

  private setEventContextMenuForUpcomingEvent(
    eventModel: EventModel<MaintenanceForecastingUpcomingEvent>,
    items: { [key: string]: ContextMenuItem }
  ): void {
    items.editEvent.text = this.translateService.instant(this.getTranslateKey('editMainInformation')) as string;
    items.editEvent.icon = '';

    items.open = {
      text: this.translateService.instant('openObject', {
        value: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel))
      }) as string,
      onItem: () => {
        this.forecastFormService.openEvent(eventModel);
      }
    };

    const asset = this.getAssetFromResourceId(eventModel.resourceId);

    if (ObjectUtils.isDefined(eventModel._obj.affectedWorkPackage)) {
      const contextMenuEntryPrefix = this.translateService.instant('removeFromWorkPackage');
      const workPackage = eventModel._obj.affectedWorkPackage as BidmProjectDTO;

      items[`${contextMenuEntryPrefix}${workPackage.projectId}`] = {
        text: `${contextMenuEntryPrefix} n°${workPackage.projectNumber}`,
        onItem: () => {
          this.handleUpcomintEventRemovedFromWorkPackage(eventModel, workPackage.projectId as string, asset).subscribe({
            next: () => {
              this.updateSchedulerView();
            }
          });
        }
      };
    } else {
      const contextMenuEntryPrefix = this.translateService.instant('addToWorkPackageNb');

      this.eventList
        .filter((event) => event.resourceId === eventModel.resourceId)
        .filter((event) => this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType))
        .map((event) => (event as EventModel<MaintenanceForecastingWorkPackage>)._obj.bidmProject)
        .sort(this.forecastFormService.sortWorkPackages)
        .forEach((workPackage) => {
          items[`${contextMenuEntryPrefix}${workPackage.projectId}`] = {
            text: `${contextMenuEntryPrefix} ${workPackage.projectNumber}`,
            onItem: () => {
              this.handleUpcomintEventAddedToWorkPackage(eventModel, workPackage.projectId as string, asset).subscribe({
                next: () => {
                  this.updateSchedulerView();
                }
              });
            }
          };
        });
    }
  }

  private setEventContextMenuForUpcomingEventGroup(items: { [key: string]: ContextMenuItem }): void {
    items.editEvent.text = this.translateService.instant(this.getTranslateKey('updatePlannedDate')) as string;
    items.editEvent.icon = '';

    items.updatePlannedDateForSubset = {
      text: this.translateService.instant(this.getTranslateKey('manageUpcomingEvents')) as string,
      onItem: ({ eventRecord }: { eventRecord: SchedulerEventRecord<GenericEventModel> }) => {
        const eventModel = eventRecord.data;

        this.selectedEventModel = eventModel;
        this.selectedStartDate = eventModel.startDate;
        this.showEventGroupDialog = true;
      }
    };
  }

  private setEventContextMenuForWorkPackage(
    eventModel: EventModel<MaintenanceForecastingWorkPackage>,
    items: { [key: string]: ContextMenuItem }
  ): void {
    items.editEvent.text = this.translateService.instant(this.getTranslateKey('editMainInformation')) as string;
    items.editEvent.icon = '';

    items.openWorkPackage = {
      text: this.translateService.instant(this.getTranslateKey('openWorkPackage')) as string,
      onItem: () => {
        this.forecastFormService.openWorkPackage(eventModel._obj.bidmProject);
      }
    };

    items.materialAvailability = {
      text: this.translateService.instant(this.getTranslateKey('openMaterialAvailability')) as string,
      onItem: () => {
        this.forecastFormService.openMaterialAvailability(eventModel._obj.bidmProject.projectId as string);
      }
    };

    items.openWorkOrders = {
      text: this.translateService.instant(this.getTranslateKey('openWorkOrders')) as string,
      onItem: () => {
        this.forecastFormService.openWorkOrders(eventModel._obj.bidmProject);
      }
    };

    if (
      eventModel._obj.bidmProject.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED ||
      eventModel._obj.bidmProject.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED
    ) {
      items.goToNextWorkPackageStatus = {
        text: this.getNextWorkPackageStatusLabel(eventModel._obj.bidmProject),
        onItem: () => {
          this.forecastFormService.setWorkPackageToNextStatus(eventModel._obj.bidmProject);
          this.updateWorkPackage(eventModel);
        }
      };
    }

    if (
      eventModel._obj.bidmProject.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED ||
      eventModel._obj.bidmProject.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED
    ) {
      items.goToPreviousWorkPackageStatus = {
        text: this.getPreviousWorkPackageStatusLabel(eventModel._obj.bidmProject),
        onItem: () => {
          this.forecastFormService.setWorkPackageToPreviousStatus(eventModel._obj.bidmProject);
          this.updateWorkPackage(eventModel);
        }
      };
    }

    if (eventModel._obj.bidmProject.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED) {
      items.removeWorkPackage = {
        text: this.translateService.instant('removeWorkPackage') as string,
        onItem: () => {
          this.removeWorkPackage(eventModel);
        }
      };
    }
  }

  private setEventGroupColor(eventGroup: EventGroupModel): void {
    const eventList = [
      ...eventGroup.defectList,
      ...eventGroup.llpAlertList,
      ...eventGroup.scheduledEventList,
      ...eventGroup.snChangeList,
      ...eventGroup.unscheduledEventList
    ];

    const atLeastOneInPast = eventList.some(
      (event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.IN_PAST]
    );
    const atLeastOneNok =
      !atLeastOneInPast &&
      eventList.some((event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.NOK]);
    const atLeastOneWarn =
      !atLeastOneNok &&
      !atLeastOneInPast &&
      eventList.some((event) => event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.WARN]);

    eventGroup.eventColor =
      ForecastFormService.EVENT_COLOR_EVENT[
        atLeastOneInPast
          ? UpcomingEventStatus.IN_PAST
          : atLeastOneNok
          ? UpcomingEventStatus.NOK
          : atLeastOneWarn
          ? UpcomingEventStatus.WARN
          : UpcomingEventStatus.OK
      ];

    this.updateEventCls(eventGroup);
  }

  private setForecastCategory(): void {
    if (this.forecastProject.projectFleetCode) {
      this.selectedForecastCategory = ForecastCategory.FLEET;
    } else if (this.forecastProjectAsset) {
      this.selectedForecastCategory = ForecastCategory.ASSET;
    }
  }

  private setForecastCategoryList(): void {
    const assetKey = 'asset';
    const fleetKey = 'fleet';
    this.translateService.get([assetKey, fleetKey]).subscribe({
      next: (results: { [key: string]: string }) => {
        const assetLabel = !!results ? results[assetKey] : 'Asset';
        const fleetLabel = !!results ? results[fleetKey] : 'Fleet';
        this.forecastCategoryList = [
          { label: assetLabel, value: ForecastCategory.ASSET },
          { label: fleetLabel, value: ForecastCategory.FLEET }
        ];
      }
    });
  }

  private setForecastCustomerCode(): void {
    if (ObjectUtils.isDefined(this.forecastProject.customerCode)) {
      const matchingCustomer = this.customerList.find(
        (customer) => customer.value.customerCode === this.forecastProject.customerCode
      );
      this.selectedCustomer = ObjectUtils.isDefined(matchingCustomer)
        ? (matchingCustomer as LabelValue<BidoCustomerDTO>).value
        : undefined;
    }
  }

  private setForecastRepairCenterCode(): void {
    if (ObjectUtils.isDefined(this.forecastProject.repairCenterCode)) {
      this.selectedRepairCenter = this.getForecastRepairCenter();
    }
  }
  private setForecastWorkCenterCode(): void {
    if (ObjectUtils.isDefined(this.forecastProject.whId)) {
      this.selectedWorkCenter = this.forecastProject.whId as number;
    }
  }

  private setNavigations(): void {
    const materialAvailabilityKey = 'materialAvailability';
    const staffPlanningKey = 'staffPlanning';
    this.translateService.get([materialAvailabilityKey, staffPlanningKey]).subscribe({
      next: (translations: { [key: string]: string }) => {
        this.navigations = [
          {
            label: translations[materialAvailabilityKey],
            command: () => {
              this.openMaterialAvailabilityForAllWorkPackage();
            }
          },
          {
            label: translations[staffPlanningKey],
            command: () => {
              this.openStaffPlanning();
            }
          }
        ];
      }
    });
  }

  private setOccurrenceList(): void {
    const OCCURRENCE_MAX_VALUE = 5; // TODO: get value from backend
    this.occurrenceList = Array.from(Array(OCCURRENCE_MAX_VALUE + 1).keys())
      .slice(1)
      .map((value) => {
        return {
          value,
          label: value.toString()
        };
      });
  }

  private setProjectAttributeList(attributeList: BsdeProjectAttributeDTO[] | undefined): void {
    ListUtils.orEmpty(attributeList)
      .filter((attribute) => !StringUtils.isNullOrEmpty(attribute.attributeValue))
      .forEach((attribute) => {
        const attributeValue = attribute.attributeValue as string;

        if (attribute.attributeId === BsdeAttributeConstants.MFO_LLP_EVENTS_GENERATION) {
          this.forecastProjectLlpEventsGeneration = BooleanUtils.isTrue(attributeValue);
        } else if (attribute.attributeId === BsdeAttributeConstants.MFO_OCCURRENCE_NUMBER_OPTION) {
          this.forecastProjectOccurrenceNumber = NumberUtils.fromString(attributeValue);
        }
      });
  }

  private setSchedulerColumnList(): void {
    this.columnList = [
      {
        enableCellContextMenu: false,
        htmlEncode: false,
        locked: true,
        text: this.translateService.instant('asset'),
        type: 'tree',
        width: ForecastFormComponent.COLUMN_ASSET_WIDTH,
        renderer: ({ record }: { record: { data: ResourceModel } }) => {
          let assetId: string | undefined;
          this.assetMap.forEach((value, key) => {
            if (value.equipmentCode === record.data.asset.equipmentCode) {
              assetId = key;
            }
          });
          const assetName = BidoEquipmentUtils.createAssetName(record.data.asset);

          return `
          <div class="asset">
            <div>${record.data.assetDescription}</div>
            <div>
              <a
                id="${assetId}"
                class="${ForecastFormComponent.ASSET_NAME_CLS}"
                style="cursor: pointer; font-style: italic; font-weight: 600;"
              >
                ${assetName}
              </a>
            </div>
          </div>
          `;
        }
      },
      {
        enableCellContextMenu: false,
        field: 'flDescription',
        locked: true,
        text: this.translateService.instant('functionalLocation'),
        width: ForecastFormComponent.COLUMN_FUNCTIONAL_LOCATION_WIDTH
      }
    ];
  }

  private setSchedulerConfig(): void {
    this.schedulerConfig = {
      cellEditFeature: false,
      emptyText: '',
      rowHeight: ForecastFormComponent.SCHEDULER_ROW_HEIGHT,
      treeFeature: true,
      zoomKeepsOriginalTimespan: true,
      zoomOnMouseWheel: false,
      zoomOnTimeAxisDoubleClick: false,

      eventContextMenuFeature: {
        items: {
          deleteEvent: false,
          unassignEvent: false
        },
        processItems: ({
          eventRecord,
          items
        }: {
          eventRecord: SchedulerEventRecord<GenericEventModel>;
          items: { [key: string]: ContextMenuItem };
        }) => {
          this.setEventContextMenu(eventRecord.data, items);
        }
      },

      eventDragFeature: {
        constrainDragToResource: false
      },

      eventRenderer: ({
        eventRecord,
        tplData
      }: {
        eventRecord: SchedulerEventRecord<GenericEventModel>;
        tplData: { style: string };
      }) => {
        const eventModel = eventRecord.data;
        const eventModelType = this.getEventModelType(eventModel);

        if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
          const workPackageModel = eventModel as EventModel<MaintenanceForecastingWorkPackage>;
          const workPackageStatus = workPackageModel._obj.bidmProject.statusState as string;
          if (
            workPackageStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED ||
            workPackageStatus === AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED
          ) {
            tplData.style = 'color:black';
          } else {
            tplData.style = 'color:white';
          }
        }

        return eventModel.name;
      },

      eventTooltipFeature: {
        template: ({ eventRecord }: { eventRecord: SchedulerEventRecord<GenericEventModel> }) => {
          return this.getEventTooltip(eventRecord.data);
        }
      },

      scheduleContextMenuFeature: {
        items: {
          addEvent: false
        }
      },

      scheduleTooltipFeature: {
        getText: (date: Date, event: MouseEvent) => {
          const resourceModel = this.scheduler.schedulerEngine.resolveResourceRecord(
            DomHelper.elementFromPoint(event.clientX, event.clientY)
          );

          if (!resourceModel) {
            return '';
          }

          const momentOfDate = moment(date);
          const flightUsage = this.flightUsage
            .filter((elt) => elt.asset === resourceModel.id)
            .find((elt) => momentOfDate.isBetween(elt.startPeriod, elt.endPeriod, undefined, '[]'));

          if (!ObjectUtils.isDefined(flightUsage)) {
            return '';
          }

          return `
            <div style="display: flex; flex-direction: row">
              <div style="width: 3rem">${this.tsnLabel}</div>
              <div>${(flightUsage as GetAllMaintenanceForecastingFlightUsageOutput).tsnMax}</div>
            </div>`;
        }
      },

      timeRangesFeature: {
        showCurrentTimeLine: true
      }
    };
  }

  private setSchedulerEndDate(): void {
    this.endDate = this.schedulerService.getLastEventEndDate(this.filteredEventList);
  }

  private setSchedulerResourceColumnWidth(): void {
    this.scheduler.schedulerEngine.getSubGrid('locked').width = ForecastFormComponent.COLUMN_ASSET_WIDTH - 1;
  }

  private setSchedulerStartDate(): void {
    this.startDate = this.schedulerService.getFirstEventStartDate(this.filteredEventList);
  }

  private setSchedulerTimeSpan(): void {
    if (ObjectUtils.isDefined(this.startDate) && ObjectUtils.isDefined(this.endDate)) {
      if (!!this.startDate && !!this.endDate && this.startDate.getTime() === this.endDate.getTime()) {
        this.endDate.setTime(this.endDate.getTime() + 1);
      }
      this.scheduler.schedulerEngine.setTimeSpan(this.startDate as Date, this.endDate as Date);
    }
  }

  private setTsnLabel(): void {
    this.forecastFormService.getTsnLabel().subscribe({
      next: (result) => {
        this.tsnLabel = StringUtils.orEmpty(result);
      }
    });
  }

  private setWorkPackageColor(event: GenericEventModel, status): void {
    event.eventColor = ForecastFormService.EVENT_COLOR_WORK_PACKAGE[status];

    this.updateEventCls(event);
  }

  private updateAllEventStatusByAffectedWorkPackage(workPackage: BidmProjectDTO): void {
    const hasAffectedWorkPackage = (event: EventModel<MaintenanceForecastingUpcomingEvent>) => {
      return (
        ObjectUtils.isDefined(event._obj.affectedWorkPackage) &&
        (event._obj.affectedWorkPackage as BidmProjectDTO).projectNumber === workPackage.projectNumber
      );
    };

    const updateEventColor = (event: EventModel<MaintenanceForecastingUpcomingEvent>) => {
      const newStatus = this.forecastFormService.calculateUpcomingEventStatus(event.endDate as Date, workPackage);

      this.setEventColor(event, newStatus);
    };

    this.eventList.forEach((genericEvent) => {
      if (this.forecastFormService.isEventGroupSchedulerEventType(genericEvent.eventType)) {
        const eventGroup = genericEvent as EventGroupModel;

        eventGroup.defectList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
        eventGroup.llpAlertList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
        eventGroup.scheduledEventList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
        eventGroup.snChangeList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
        eventGroup.unscheduledEventList.filter(hasAffectedWorkPackage).forEach(updateEventColor);

        this.setEventGroupColor(eventGroup);
      } else {
        const event = genericEvent as EventModel<MaintenanceForecastingUpcomingEvent>;

        if (hasAffectedWorkPackage(event)) {
          updateEventColor(event);
        }
      }
    });
  }

  private updateDefect(defect: DeferredDefectEventDTO): Observable<unknown> {
    return this.forecastFormService.updateBidoNotification(defect.bidoNotificationData as BidoNotificationDTO).pipe(
      tap(() => {
        this.messageService.showSuccessMessage('successMessage.updateDefect');
      })
    );
  }

  private updateDefectDates(eventModel: EventModel<MaintenanceForecastingDefect>, date: Date): void {
    const defect = eventModel._obj.deferredDefectEvent as DeferredDefectEventDTO;
    const notification = defect.bidoNotificationData as BidoNotificationDTO;

    notification.reportingPeriodStartDate = date;
    notification.reportingPeriodEndDate = date;

    this.updateDefect(defect).subscribe({
      next: () => {
        this.updateSchedulerView();
      }
    });
  }

  private updateEventCls(event: GenericEventModel): void {
    if (
      this.forecastFormService.isDefectSchedulerEventType(event.eventType) ||
      this.forecastFormService.isScheduledEventSchedulerEventType(event.eventType) ||
      this.forecastFormService.isUnscheduledEventSchedulerEventType(event.eventType) ||
      this.forecastFormService.isEventGroupSchedulerEventType(event.eventType)
    ) {
      this.updateUpcomingEventCls(event);
    } else if (this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType)) {
      this.updateWorkPackageCls(event as EventModel<MaintenanceForecastingWorkPackage>);
    }
  }

  private updatePlannedDateForEventGroup(data: {
    eventGroup: EventGroupModel;
    events: EventModel<MaintenanceForecastingUpcomingEvent>[];
    plannedDate: Date;
  }): Observable<unknown> {
    // Save modified events
    const observables = data.events.map((genericEvent) => {
      if (this.forecastFormService.isDefectSchedulerEventType(genericEvent.eventType)) {
        const event = genericEvent as EventModel<MaintenanceForecastingDefect>;
        event.startDate = data.plannedDate;
        event.endDate = data.plannedDate;
        event._obj.deferredDefectEvent.plannedDate = data.plannedDate;

        return this.updateDefect(event._obj.deferredDefectEvent);
      } else if (this.forecastFormService.isScheduledEventSchedulerEventType(genericEvent.eventType)) {
        return this.updatePlannedDateForScheduledEvent(
          genericEvent as EventModel<MaintenanceForecastingScheduledEvent>,
          data.plannedDate
        );
      } else {
        return this.updatePlannedDateForUnscheduledEvent(
          genericEvent as EventModel<MaintenanceForecastingUnscheduledEvent>,
          data.plannedDate
        );
      }
    });

    return forkJoin(observables);
  }

  private updatePlannedDateForScheduledEvent(
    event: EventModel<MaintenanceForecastingScheduledEvent>,
    date: Date
  ): Observable<unknown> {
    event.startDate = date;
    event.endDate = date;
    event._obj.bsdeScheduledEvent.plannedDate = date;

    return this.updateScheduledEvent(event);
  }

  private updatePlannedDateForUnscheduledEvent(
    event: EventModel<MaintenanceForecastingUnscheduledEvent>,
    date: Date
  ): Observable<unknown> {
    event.startDate = date;
    event.endDate = date;
    event._obj.bsdeEvent.plannedDate = date;

    return this.updateUnscheduledEvent(event);
  }

  private updateScheduledEvent(event: EventModel<MaintenanceForecastingScheduledEvent>): Observable<unknown> {
    const eventSrc = this.findEventModelSrcById(event.id) as EventModel<MaintenanceForecastingScheduledEvent>;
    eventSrc._obj.bsdeScheduledEvent = event._obj.bsdeScheduledEvent;

    return this.forecastFormService.updateBsdeScheduledEvent(event._obj.bsdeScheduledEvent).pipe(
      tap(() => {
        this.messageService.showSuccessMessage('successMessage.updateScheduledEvent');
      })
    );
  }

  private updateSchedulerView(): void {
    this.filterForecast(this.forecastFormService.forecastFiltering);
    this.mergeFilteredEvents();

    this.calculateGlobalMaterialAvailability();
    this.calculateUpcomingEventNumberByStatus(this.filteredEventList);

    this.setSchedulerStartDate();
    this.setSchedulerEndDate();
    this.setSchedulerTimeSpan();
  }

  private updateUnscheduledEvent(event: EventModel<MaintenanceForecastingUnscheduledEvent>): Observable<unknown> {
    const eventSrc = this.findEventModelSrcById(event.id) as EventModel<MaintenanceForecastingUnscheduledEvent>;
    eventSrc._obj.bsdeEvent = event._obj.bsdeEvent;

    return this.forecastFormService.updateBsdeScheduledEvent(event._obj.bsdeEvent).pipe(
      tap(() => {
        this.messageService.showSuccessMessage('successMessage.updateUnscheduledEvent');
      })
    );
  }

  private updateUpcomingEventCls(event: GenericEventModel): void {
    const clsToKeep = this.getEventClasses(event).filter(
      (cls) =>
        cls !== ForecastFormComponent.EVENT_IN_PAST_CLS &&
        cls !== ForecastFormComponent.EVENT_NOK_CLS &&
        cls !== ForecastFormComponent.EVENT_WARN_CLS &&
        cls !== ForecastFormComponent.EVENT_OK_CLS &&
        cls !== ForecastFormComponent.EVENT_ALERT_CLS
    );

    const clsToAdd =
      event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.IN_PAST]
        ? ForecastFormComponent.EVENT_IN_PAST_CLS
        : event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.NOK]
        ? ForecastFormComponent.EVENT_NOK_CLS
        : event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.WARN]
        ? ForecastFormComponent.EVENT_WARN_CLS
        : event.eventColor === ForecastFormService.EVENT_COLOR_EVENT[UpcomingEventStatus.ALERT]
        ? ForecastFormComponent.EVENT_ALERT_CLS
        : ForecastFormComponent.EVENT_OK_CLS;

    this.setEventCls(event, [...clsToKeep, clsToAdd]);
  }

  private updateWorkPackage(event: EventModel<MaintenanceForecastingWorkPackage>): void {
    const workPackage = event._obj.bidmProject;
    this.forecastFormService
      .updateBidmProject(workPackage)
      .pipe(concatMap(() => this.forecastFormService.controlStock(workPackage)))
      .subscribe({
        next: (siteDataList) => {
          this.updateWorkPackageMaterialAvailabilityValue(workPackage, siteDataList);

          const eventSrc = this.findEventModelSrcById(event.id) as EventModel<MaintenanceForecastingWorkPackage>;

          const color = ForecastFormService.EVENT_COLOR_WORK_PACKAGE[workPackage.statusState as string];
          const endDate = workPackage.projectEndDate || workPackage.projectDueDate || (this.endDate as Date);
          const isModifiable = this.forecastFormService.checkIfWorkPackageIfModifiable(workPackage);
          const startDate = workPackage.projectStartDate as Date;

          eventSrc.endDate = this.schedulerService.formatEventDate(endDate);
          eventSrc.eventColor = color;
          eventSrc.draggable = isModifiable;
          eventSrc.resizable = isModifiable;
          eventSrc.startDate = this.schedulerService.formatEventDate(startDate);
          eventSrc._obj.bidmProject = workPackage;

          this.updateAllEventStatusByAffectedWorkPackage(workPackage);

          this.messageService.showSuccessMessage('successMessage.updateWorkPackage');

          this.updateSchedulerView();
        }
      });
  }

  private updateWorkPackageCls(event: EventModel<MaintenanceForecastingWorkPackage>): void {
    const clsToKeep = this.getEventClasses(event).filter(
      (cls) => cls !== ForecastFormComponent.WORK_PACKAGE_MATERIAL_AVAILABILITY_NOK_CLS
    );

    const materialAvailability = this.materialAvailabilityByWorkPackage.get(
      event._obj.bidmProject.projectId as string
    ) as MaterialAvailability;

    const clsToAdd =
      materialAvailability.nok > 0
        ? ForecastFormComponent.WORK_PACKAGE_MATERIAL_AVAILABILITY_NOK_CLS
        : materialAvailability.warn > 0
        ? ForecastFormComponent.WORK_PACKAGE_MATERIAL_AVAILABILITY_WARN_CLS
        : '';

    this.setEventCls(event, [...clsToKeep, clsToAdd]);
  }

  private updateWorkPackageDates(
    eventModel: EventModel<MaintenanceForecastingWorkPackage>,
    startDate: Date,
    endDate: Date
  ): void {
    eventModel._obj.bidmProject.projectStartDate = startDate;
    eventModel._obj.bidmProject.projectEndDate = endDate;

    this.updateWorkPackage(eventModel);
  }

  private updateWorkPackageMaterialAvailabilityValue(
    workPackage: BidmProjectDTO,
    siteDataList: GetQuantityInStockBySiteOutput[]
  ): void {
    this.materialAvailabilityByWorkPackage.set(
      workPackage.projectId as string,
      this.forecastFormService.calculateWorkPackageMaterialAvailabilityValue(siteDataList)
    );
  }
}
