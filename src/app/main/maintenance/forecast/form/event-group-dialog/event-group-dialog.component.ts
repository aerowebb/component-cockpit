import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

import { EventModel as GenericEventModel } from '../../../../../shared/components/scheduler/event-model.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { MaintenanceForecastingDefect } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-defect.interface';
import { MaintenanceForecastingScheduledEvent } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-scheduled-event.interface';
import { MaintenanceForecastingUnscheduledEvent } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-unscheduled-event.interface';
import { MaintenanceForecastingWorkPackage } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-work-package.interface';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoNotificationDTO } from '../../../../../shared/types/api-types/bido-notification-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import {
  EventGroupModel,
  EventModel,
  EventModelType,
  ForecastFormService,
  MaintenanceForecastingUpcomingEvent
} from '../forecast-form.service';

interface EventRow {
  eventDescription: string;
  eventName: string;
  eventType: string;
  formattedType: string;
  plannedDate: string;
  workPackage: string;
  _obj: EventModel<MaintenanceForecastingUpcomingEvent>;
  _type: EventModelType;
  _workPackages: BidmProjectDTO[];
}

@Component({
  selector: 'aw-dialog-forecast-form-event-group',
  templateUrl: './event-group-dialog.component.html'
})
export class EventGroupForecastFormDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public eventCategoryList: LabelValue<string>[];

  @Input()
  public eventModel: EventGroupModel;

  @Input()
  public taskTypeList: LabelValue<string>[];

  @Input()
  public eventList: GenericEventModel[];

  public eventTable: EventRow[];
  public eventTableColList: TableColumn[];
  public eventTableSelection: EventRow[];
  public workPackageItemList: MenuItem[];

  public selectedEventModel: EventModel<MaintenanceForecastingUpcomingEvent> | undefined;

  public showAddToWorkPackage: boolean;
  public showDefectDialog: boolean;
  public showPlannedDateDialog: boolean;
  public showRemoveFromWorkPackage: boolean;
  public showScheduledEventDialog: boolean;
  public showUnscheduledEventDialog: boolean;

  private workPackagePrefix: string;

  public constructor(
    public forecastFormService: ForecastFormService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly messageService: MessageService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'EventGroupForecastFormDialogComponent');

    this.init();

    this.setEventTableColList();
  }

  public ngOnInit(): void {
    this.setEventTable();
  }

  // //////////////////////////////////////////////////////////////////////////

  public editEvent(): void {
    if (this.forecastFormService.isDefectSchedulerEventType(this.eventTableSelection[0]._type)) {
      this.showDefectDialog = true;
    } else if (this.forecastFormService.isScheduledEventSchedulerEventType(this.eventTableSelection[0]._type)) {
      this.showScheduledEventDialog = true;
    } else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(this.eventTableSelection[0]._type)) {
      this.showUnscheduledEventDialog = true;
    }

    this.selectedEventModel = this.eventTableSelection[0]._obj;
  }

  public onSelectAllRows(event: { checked: boolean }): void {
    if (event.checked) {
      this.onSelectRow();
    } else {
      this.onUnselectRow();
    }
  }

  public onSelectedPlannedDate(date: Date): void {
    if (this.forecastFormService.isValidPlannedDateForEventGroup(this.eventModel, date)) {
      this.forecastFormService.updateEventGroupPlannedDate({
        eventGroup: this.eventModel,
        events: this.eventTableSelection.map((event) => event._obj),
        plannedDate: date
      });
    } else {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnChosenDatePosteriorToSomeNotToExceedDate'));
    }
  }

  public onSelectRow(): void {
    this.calculateAddToWorkPackageVisibility();
    this.calculateRemoveFromWorkPackageVisibility();

    if (this.showAddToWorkPackage) {
      this.workPackageItemList = this.eventTableSelection
        .map((selection) => selection._workPackages)
        .reduce((acc, val) => acc.concat(val), [])
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort(this.forecastFormService.sortWorkPackages)
        .map((workPackage) => {
          return {
            label: `${this.workPackagePrefix} ${workPackage.projectNumber}`,
            command: () => {
              this.addSelectionToWorkPackage(workPackage);
            }
          };
        });
    }
  }

  public onUnselectRow(): void {
    this.calculateAddToWorkPackageVisibility();
    this.calculateRemoveFromWorkPackageVisibility();
  }

  public openEvent(): void {
    this.forecastFormService.openEvent(this.eventTableSelection[0]._obj);
    this.closeDialog();
  }

  public removeSelectionFromWorkPackage(): void {
    const eventModel = this.eventTableSelection[0]._obj as
      | EventModel<MaintenanceForecastingDefect>
      | EventModel<MaintenanceForecastingScheduledEvent>
      | EventModel<MaintenanceForecastingUnscheduledEvent>;

    this.forecastFormService.removeEventsFromWorkPackage({
      events: this.eventTableSelection.map((selection) => selection._obj),
      workPackage: eventModel._obj.affectedWorkPackage as BidmProjectDTO
    });

    this.closeDialog();
  }

  public updatePlannedDate(): void {
    this.showPlannedDateDialog = true;
  }

  private addSelectionToWorkPackage(workPackage: BidmProjectDTO): void {
    this.forecastFormService.addEventsToWorkPackage({
      events: this.eventTableSelection.map((selection) => selection._obj),
      workPackage
    });

    this.closeDialog();
  }

  private buildEventRowFromDefect(eventModel: EventModel<MaintenanceForecastingDefect>): EventRow {
    const event = eventModel._obj.deferredDefectEvent.bidoNotificationData as BidoNotificationDTO;

    const eventName = `${event.bidoNotificationTypeDTO.typeDescription} (${event.notificationCode})`;
    const eventType = this.forecastFormService.getEventCategoryLabel(event, this.eventCategoryList);

    return {
      eventName,
      eventType,
      eventDescription: '',
      formattedType: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel)) as string,
      plannedDate: this.dateService.dateToString(eventModel._obj.deferredDefectEvent.plannedDate),
      workPackage: this.formatWorkPackage(eventModel._obj.affectedWorkPackage),
      _obj: eventModel,
      _type: EventModelType.DEFECT,
      _workPackages: this.getAvailableWorkPackagesForEvent(eventModel)
    };
  }

  private buildEventRowFromDefectList(): EventRow[] {
    return ListUtils.orEmpty(this.eventModel.defectList).map((defect) => this.buildEventRowFromDefect(defect));
  }

  private buildEventRowFromScheduledEvent(
    eventModel: EventModel<MaintenanceForecastingScheduledEvent>,
    eventType: EventModelType
  ): EventRow {
    return {
      eventDescription: StringUtils.orEmpty(eventModel._obj.bireTask.taskDesignation),
      eventName: `${eventModel._obj.bireTask.taskCode}-${eventModel._obj.bireTask.taskVersion}`,
      eventType: this.forecastFormService.getTaskTypeLabel(eventModel._obj.bireTask, this.taskTypeList),
      formattedType: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel)) as string,
      plannedDate: this.dateService.dateToString(eventModel._obj.bsdeScheduledEvent.plannedDate),
      workPackage: this.formatWorkPackage(eventModel._obj.affectedWorkPackage),
      _obj: eventModel,
      _type: eventType,
      _workPackages: this.getAvailableWorkPackagesForEvent(eventModel)
    };
  }

  private buildEventRowFromLlpAlertList(): EventRow[] {
    return ListUtils.orEmpty(this.eventModel.llpAlertList).map((event) =>
      this.buildEventRowFromScheduledEvent(event, EventModelType.LLP_ALERT)
    );
  }

  private buildEventRowFromScheduledEventList(): EventRow[] {
    return ListUtils.orEmpty(this.eventModel.scheduledEventList).map((event) =>
      this.buildEventRowFromScheduledEvent(event, EventModelType.SCHEDULED_EVENT)
    );
  }

  private buildEventRowFromUnscheduledEvent(
    eventModel: EventModel<MaintenanceForecastingUnscheduledEvent>,
    eventType: EventModelType
  ): EventRow {
    return {
      eventDescription: StringUtils.orEmpty(eventModel._obj.bireTask.taskDesignation),
      eventName: `${eventModel._obj.bireTask.taskCode}-${eventModel._obj.bireTask.taskVersion}`,
      eventType: this.forecastFormService.getTaskTypeLabel(eventModel._obj.bireTask, this.taskTypeList),
      formattedType: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel)) as string,
      plannedDate: this.dateService.dateToString(eventModel._obj.bsdeEvent.plannedDate),
      workPackage: this.formatWorkPackage(eventModel._obj.affectedWorkPackage),
      _obj: eventModel,
      _type: eventType,
      _workPackages: this.getAvailableWorkPackagesForEvent(eventModel)
    };
  }

  private calculateAddToWorkPackageVisibility(): void {
    this.showAddToWorkPackage =
      this.eventTableSelection.length > 0 &&
      this.eventTableSelection.every((selection) => {
        const eventModel = selection._obj as
          | EventModel<MaintenanceForecastingDefect>
          | EventModel<MaintenanceForecastingScheduledEvent>
          | EventModel<MaintenanceForecastingUnscheduledEvent>;

        return (
          !ObjectUtils.isDefined(eventModel._obj.affectedWorkPackage) && !ListUtils.isEmpty(selection._workPackages)
        );
      });
  }

  private calculateRemoveFromWorkPackageVisibility(): void {
    this.showRemoveFromWorkPackage =
      this.eventTableSelection.length > 0 &&
      this.eventTableSelection.every((selection) => {
        const eventModel = selection._obj as
          | EventModel<MaintenanceForecastingDefect>
          | EventModel<MaintenanceForecastingScheduledEvent>
          | EventModel<MaintenanceForecastingUnscheduledEvent>;

        return ObjectUtils.isDefined(eventModel._obj.affectedWorkPackage);
      });
  }

  private getAvailableWorkPackagesForEvent(selectedEvent: GenericEventModel): BidmProjectDTO[] {
    return this.eventList
      .filter((event) => event.resourceId === selectedEvent.resourceId)
      .filter((event) => this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType))
      .map((event) => (event as EventModel<MaintenanceForecastingWorkPackage>)._obj.bidmProject);
  }

  private buildEventRowFromSnChangeList(): EventRow[] {
    return ListUtils.orEmpty(this.eventModel.snChangeList).map((event) =>
      this.buildEventRowFromUnscheduledEvent(event, EventModelType.SN_CHANGE)
    );
  }

  private buildEventRowFromUnscheduledEventList(): EventRow[] {
    return ListUtils.orEmpty(this.eventModel.unscheduledEventList).map((event) =>
      this.buildEventRowFromUnscheduledEvent(event, EventModelType.UNSCHEDULED_EVENT)
    );
  }

  private formatWorkPackage(workPackage?: BidmProjectDTO): string {
    const workPackagePrefix = this.translateService.instant('workPackageNumberShort');

    return ObjectUtils.isDefined(workPackage)
      ? `${workPackagePrefix} ${(workPackage as BidmProjectDTO).projectNumber}`
      : '';
  }

  private init(): void {
    this.eventTable = [];
    this.eventTableSelection = [];
    this.workPackagePrefix = this.translateService.instant('workPackageNumberShort') as string;

    this.selectedEventModel = undefined;

    this.showAddToWorkPackage = false;
    this.showDefectDialog = false;
    this.showPlannedDateDialog = false;
    this.showRemoveFromWorkPackage = false;
    this.showScheduledEventDialog = false;
    this.showUnscheduledEventDialog = false;
  }

  private setEventTable(): void {
    this.eventTable = [
      ...this.buildEventRowFromDefectList(),
      ...this.buildEventRowFromLlpAlertList(),
      ...this.buildEventRowFromScheduledEventList(),
      ...this.buildEventRowFromSnChangeList(),
      ...this.buildEventRowFromUnscheduledEventList()
    ];
  }

  private setEventTableColList(): void {
    this.eventTableColList = [
      { field: 'eventName', alignment: 'left', width: '15%' },
      { field: 'eventDescription', alignment: 'left', width: '55%' },
      { field: 'eventType', alignment: 'left', width: '10%' },
      { field: 'plannedDate', alignment: 'left', width: '10%' },
      { field: 'workPackage', alignment: 'left', width: '10%' }
    ];
  }
}
