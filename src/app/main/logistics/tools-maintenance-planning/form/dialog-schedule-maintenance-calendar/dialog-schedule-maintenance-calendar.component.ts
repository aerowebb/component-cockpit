import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { TranslateUtils } from '../../../../../shared/utils/translate-utils';
import { CalendarFlight } from '../../types/calendar-flight.interface';
import { CalendarMaintenanceEvent } from '../../types/calendar-maintenance-event.interface';
import { CalendarWorkPackage } from '../../types/calendar-work-package.interface';
import { ToolsMaintenancePlanningFormService } from '../tools-maintenance-planning-form.service';

interface CalendarDay {
  moment: moment.Moment;
  flights: CalendarFlight[];
  maintenanceEvents: CalendarMaintenanceEvent[];
  workPackages: CalendarWorkPackage[];
  _fakeWorkPackageNb: number;
}

@Component({
  selector: 'aw-dialog-schedule-maintenance-calendar',
  styleUrls: ['./dialog-schedule-maintenance-calendar.component.scss'],
  templateUrl: './dialog-schedule-maintenance-calendar.component.html'
})
export class DialogScheduleMaintenanceCalendarComponent extends DialogComponent implements OnInit {
  // private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;
  private static readonly DAYS_IN_WEEK_VISIBLE: number = 7;
  private static readonly WEEKS_IN_CALENDAR_VISIBLE: number = 6;

  @Input()
  public topEquipmentCode: string;

  @Input('workPackageList')
  public get rawWorkPackageList(): BidmProjectDTO[] {
    return this._rawWorkPackageList;
  }
  public set rawWorkPackageList(value: BidmProjectDTO[]) {
    this._rawWorkPackageList = value;

    if (!!this.rawWorkPackageList) {
      this.updateCalendarFromNewWorkPackagelist(this.rawWorkPackageList);
      this.rawWorkPackageListChange.emit(this._rawWorkPackageList);
    }
  }

  @Output()
  public onCreateWorkPackge: EventEmitter<{ workPackage: BidmProjectDTO; workcenter: string | undefined }>;

  @Output()
  public rawWorkPackageListChange: EventEmitter<BidmProjectDTO[]>;

  public calendarDays: CalendarDay[];
  public currentMonth: number;
  public currentYear: number;
  public dayNamesShort: string[];
  public draggedWorkPackage: CalendarWorkPackage | undefined;
  public draggedMaintenanceEvent: CalendarMaintenanceEvent | undefined;
  public dragSource: CalendarDay | undefined;
  public searchText: string;
  public selectedCalendarDays: number[];
  public selectedDate: Date;
  public selectedFlights: CalendarFlight[];
  public selectedMaintenanceEvent: CalendarMaintenanceEvent;
  public selectedWorkPackage: BidmProjectDTO;
  public today: string;
  public todayMonth: number;
  public todayYear: number;

  public showAlertDialog: boolean;
  public showCalendarDayDialog: boolean;

  public showFlightDialog: boolean;
  public showMaintenanceEventDialog: boolean;
  public showWorkPackageDialog: boolean;

  public resizedWorkPackage: CalendarWorkPackage | undefined;

  private resizedWorkPackageEndDate: boolean;
  private resizedWorkPackageStartDate: boolean;
  // private resizeSource: CalendarDay | undefined;
  // private searchTextChanged: Subject<string>;
  private flights: BidoMissionEquipmentDTO[];
  private workPackageList: BidmProjectDTO[];
  private _rawWorkPackageList: BidmProjectDTO[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly toolsMaintenancePlanningFormService: ToolsMaintenancePlanningFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogScheduleMaintenanceCalendarComponent');

    this.today = moment().format('D');
    this.todayMonth = (moment().month() as number) + 1;
    this.todayYear = moment().year();

    this.flights = [];
    this.workPackageList = [];

    this.showAlertDialog = false;
    this.showCalendarDayDialog = false;

    this.showFlightDialog = false;
    this.showMaintenanceEventDialog = false;
    this.showWorkPackageDialog = false;

    this.onCreateWorkPackge = new EventEmitter<{ workPackage: BidmProjectDTO; workcenter: string | undefined }>();
    this.rawWorkPackageListChange = new EventEmitter<BidmProjectDTO[]>();

    this.setMonth(moment());
    this.initDayNames();
    this.initSearchText();
  }

  public ngOnInit(): void {
    this.initFlights();
  }

  public clearSearchText(): void {
    this.searchText = '';
    this.selectedCalendarDays = [];
  }

  public createWorkPackage(data: { workPackage: BidmProjectDTO; workcenter: string | undefined }): void {
    this.onCreateWorkPackge.emit(data);
  }

  public dropMaintenanceEvent(event: Event): void {
    this.handleMaintenanceEventDrop(event);
  }

  public dropWorkPackage(event: Event): void {
    this.handleWorkPackageDrop(event);
  }

  public endMaintenanceEventDrag(): void {
    this.draggedMaintenanceEvent = undefined;
    this.dragSource = undefined;
  }

  public endWorkPackageDrag(): void {
    this.draggedWorkPackage = undefined;
    this.dragSource = undefined;
  }

  public endResize(event: Event): void {
    event.stopPropagation();

    if (!!this.resizedWorkPackage) {
      const eventTarget: HTMLElement = event.target as HTMLElement;
      const containerNode = this.findParentElementByClassName(eventTarget, 'calendar-day-container');

      if (!!containerNode) {
        const selectedCalendarDay = this.deserializeCalendarDay(/^drop-[a-z]+-(\d+)-(\d+)$/g.exec(containerNode.id));

        if (!!selectedCalendarDay) {
          const selectedWorkPackage = this.workPackageList.find((workPackage) => {
            return workPackage.projectId === (this.resizedWorkPackage as CalendarWorkPackage).obj.projectId;
          });
          if (!!selectedWorkPackage) {
            if (this.resizedWorkPackageEndDate) {
              const startDateMoment = moment(selectedWorkPackage.projectStartDate);
              const startDate = startDateMoment.isBefore(this.calendarDays[0].moment, 'day')
                ? this.calendarDays[0].moment
                : startDateMoment;

              if (
                selectedCalendarDay.moment.isSame(moment(startDate), 'day') ||
                selectedCalendarDay.moment.isAfter(moment(startDate), 'day')
              ) {
                if (!!selectedWorkPackage.projectDueDate) {
                  selectedWorkPackage.projectDueDate = selectedCalendarDay.moment.toDate();
                } else if (!!selectedWorkPackage.projectEndDate) {
                  selectedWorkPackage.projectEndDate = selectedCalendarDay.moment.toDate();
                }
              }
            } else if (this.resizedWorkPackageStartDate) {
              if (
                (!!selectedWorkPackage.projectDueDate &&
                  (selectedCalendarDay.moment.isSame(moment(selectedWorkPackage.projectDueDate), 'day') ||
                    selectedCalendarDay.moment.isBefore(moment(selectedWorkPackage.projectDueDate), 'day'))) ||
                (!!selectedWorkPackage.projectEndDate &&
                  (selectedCalendarDay.moment.isBefore(moment(selectedWorkPackage.projectEndDate), 'day') ||
                    selectedCalendarDay.moment.isBefore(moment(selectedWorkPackage.projectEndDate), 'day')))
              ) {
                selectedWorkPackage.projectStartDate = selectedCalendarDay.moment.toDate();
              }
            }

            if (this.resizedWorkPackageEndDate || this.resizedWorkPackageStartDate) {
              this.updateWorkPackge(selectedWorkPackage);
            }

            this.clearAllWorkPackage();
            this.setWorkPackages();
            this.sortWorkPackages();
            this.updateFakeWorkPackages();
          }
        }
      }
    }

    this.resizedWorkPackage = undefined;
    this.resizedWorkPackageEndDate = false;
    this.resizedWorkPackageStartDate = false;
  }

  public showEndDateResizeHandler(workPackage: CalendarWorkPackage, weekIndex: number): boolean {
    const endDate = workPackage.obj.projectDueDate || workPackage.obj.projectEndDate;
    if (moment(endDate).isAfter(this.calendarDays[this.calendarDays.length - 1].moment, 'day')) {
      return false;
    } else {
      const endDateCalendarDayIndex = this.calendarDays.findIndex((calendarDay) => {
        return calendarDay.moment.isSame(moment(endDate), 'day');
      });

      return (
        endDateCalendarDayIndex !== undefined &&
        endDateCalendarDayIndex !== null &&
        endDateCalendarDayIndex >= weekIndex * DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE &&
        endDateCalendarDayIndex < (weekIndex + 1) * DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE
      );
    }
  }

  public showStartDateResizeHandler(workPackage: CalendarWorkPackage, weekIndex: number): boolean {
    if (moment(workPackage.obj.projectStartDate).isBefore(this.calendarDays[0].moment, 'day')) {
      return false;
    } else {
      const firstWeekDay = this.calendarDays[
        weekIndex * DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE
      ];
      const lastWeekDay = this.calendarDays[
        (weekIndex + 1) * DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE - 1
      ];

      return (
        (workPackage.startDate.isSame(firstWeekDay.moment, 'day') ||
          workPackage.startDate.isAfter(firstWeekDay.moment, 'day')) &&
        (workPackage.startDate.isSame(lastWeekDay.moment, 'day') ||
          workPackage.startDate.isBefore(lastWeekDay.moment, 'day'))
      );
    }
  }

  public isSearchClearButtonVisible(): boolean {
    return this.searchText.length > 0;
  }

  public openAlertDialog(event: Event): void {
    event.stopPropagation();
    this.closeDialogs();
    this.showAlertDialog = true;
  }

  public openCalendarDayDialog(event: Event): void {
    event.stopPropagation();
    this.closeDialogs();
    this.showCalendarDayDialog = true;

    const calendarDay = this.findWorkPackageDropSource(event);
    if (!!calendarDay) {
      this.selectedDate = calendarDay.moment.toDate();
    }
  }

  public openFlightDialog(event: Event, flights: CalendarFlight[]): void {
    event.stopPropagation();
    this.closeDialogs();
    this.showFlightDialog = true;

    this.selectedFlights = flights;
  }

  public openMaintenanceEventDialog(event: Event): void {
    event.stopPropagation();
    this.closeDialogs();
    this.showMaintenanceEventDialog = true;
  }

  public openWorkPackageDialog(event: Event, workPackage: CalendarWorkPackage): void {
    event.stopPropagation();
    this.closeDialogs();
    this.showWorkPackageDialog = true;

    this.selectedWorkPackage = workPackage.obj;
  }

  public search(searchTextValue: string) {
    // this.searchTextChanged.next(searchTextValue);
  }

  public showCurrentMonth(): void {
    this.setMonth(moment());
    this.setPlanning();
  }

  public showNextMonth(): void {
    this.setMonth(this.currentMoment().add(1, 'months'));
    this.setPlanning();
  }

  public showPreviousMonth(): void {
    this.setMonth(this.currentMoment().subtract(1, 'months'));
    this.setPlanning();
  }

  public startMaintenanceEventDrag(event: Event, element: CalendarMaintenanceEvent): void {
    this.registerDragSource(event);
    if (!!this.dragSource) {
      this.draggedMaintenanceEvent = element;
    }
  }

  public startWorkPackageDrag(event: Event, element: CalendarWorkPackage): void {
    if (element.isScheduled || element.isSimulated) {
      this.registerDragSource(event);
      if (!!this.dragSource) {
        this.draggedWorkPackage = element;
      }
    }
  }

  public updateWorkPackageEndDate(event: Event, workPackage: CalendarWorkPackage): void {
    this.updateWorkPackageDate(event, workPackage);

    this.resizedWorkPackageEndDate = true;
  }

  public updateWorkPackageStartDate(event: Event, workPackage: CalendarWorkPackage): void {
    this.updateWorkPackageDate(event, workPackage);

    this.resizedWorkPackageStartDate = true;
  }

  private clearAllWorkPackage(): void {
    this.calendarDays.forEach((calendarDay) => {
      calendarDay.workPackages = [];
    });
  }

  private closeDialogs(): void {
    this.showAlertDialog = false;
    this.showCalendarDayDialog = false;
    this.showFlightDialog = false;
    this.showMaintenanceEventDialog = false;
    this.showWorkPackageDialog = false;
  }

  private currentMoment(): moment.Moment {
    return moment(`${this.currentYear}-${this.currentMonth}-01`, 'YYYY-MM-DD');
  }

  private deserializeCalendarDay(regExpMatches: RegExpExecArray | null): CalendarDay | undefined {
    if (!!regExpMatches) {
      const weekIndex = 1;
      const weekDayIndex = 2;
      const calendarDayIndex =
        Number(regExpMatches[weekIndex]) * DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE +
        Number(regExpMatches[weekDayIndex]);

      return this.calendarDays[calendarDayIndex];
    } else {
      return undefined;
    }
  }

  private findCalendarDayIndex(selectedMoment: moment.Moment): number {
    return this.calendarDays.findIndex((calendarDay) => calendarDay.moment.isSame(selectedMoment, 'day'));
  }

  private findMaintenanceEventDropSource(event: Event): CalendarWorkPackage | undefined {
    const eventTarget: HTMLElement = event.target as HTMLElement;
    const containerNode = this.findParentElementByMatchingId(eventTarget, /^drop-[a-z]+-\d+$/g);

    if (!!containerNode) {
      const matches = /^drop-[a-z]+-(\d+)$/g.exec(containerNode.id);
      if (!!matches) {
        const targetWorkPackageId = matches[1];
        const targetCalendarDay = this.calendarDays.find((calendarDay) => {
          return calendarDay.workPackages.some((workPackage) => workPackage.id === targetWorkPackageId);
        });
        if (!!targetCalendarDay) {
          return targetCalendarDay.workPackages.find((workPackage) => workPackage.id === targetWorkPackageId);
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  private findParentElementByClassName(child: HTMLElement, className: string): HTMLElement | undefined {
    const parent: HTMLElement | null = child.parentElement;
    if (!!parent) {
      return !!parent.classList && parent.classList.contains(className)
        ? parent
        : this.findParentElementByClassName(parent, className);
    } else {
      return undefined;
    }
  }

  private findParentElementByMatchingId(child: HTMLElement, regExp: RegExp): HTMLElement | undefined {
    const parent: HTMLElement | null = child.parentElement;
    if (!!parent) {
      return !!parent.id && regExp.test(parent.id) ? parent : this.findParentElementByMatchingId(parent, regExp);
    } else {
      return undefined;
    }
  }

  private findWorkPackageDropSource(event: Event): CalendarDay | undefined {
    const eventTarget: HTMLElement = event.target as HTMLElement;
    if (eventTarget.classList[0] === 'calendar-month-day-wrapper') {
      const containerNode = this.findParentElementByClassName(eventTarget, 'calendar-day-container');

      return !!containerNode
        ? this.deserializeCalendarDay(/^drop-[a-z]+-(\d+)-(\d+)$/g.exec(containerNode.id))
        : undefined;
    } else {
      return undefined;
    }
  }

  private handleMaintenanceEventDrop(event: Event): void {
    if (!!this.draggedMaintenanceEvent) {
      const targetWorkPackage = this.findMaintenanceEventDropSource(event);
      if (!!targetWorkPackage) {
        const isAlreadyInWP = targetWorkPackage.maintenanceEvents.some(
          (maintenanceEvent) =>
            !!this.draggedMaintenanceEvent && maintenanceEvent.id === this.draggedMaintenanceEvent.id
        );
        if (isAlreadyInWP) {
          // this.messageService.showWarningMessage(this.getTranslateKey('errorOnAddMaintenanceEventIntoWorkPackage'));
        } else {
          targetWorkPackage.maintenanceEvents = [...targetWorkPackage.maintenanceEvents, this.draggedMaintenanceEvent];
        }
      }
    }

    this.endMaintenanceEventDrag();
  }

  private handleWorkPackageDrop(event: Event): void {
    if (!!this.dragSource && !!this.draggedWorkPackage) {
      const dropSource = this.findWorkPackageDropSource(event);
      if (!!dropSource && !dropSource.moment.isSame(this.dragSource.moment, 'day')) {
        this.calendarDays.forEach((calendarDay) => {
          calendarDay.workPackages = calendarDay.workPackages.filter((workPackage) => {
            return !!this.draggedWorkPackage && workPackage.id !== this.draggedWorkPackage.id;
          });
        });

        this.draggedWorkPackage.startDate = dropSource.moment;

        this.draggedWorkPackage.obj.projectStartDate = this.draggedWorkPackage.startDate.toDate();
        const endDate = moment(this.draggedWorkPackage.obj.projectStartDate)
          .add(this.draggedWorkPackage.totalDuration, 'days')
          .toDate();

        if (this.draggedWorkPackage.obj.projectDueDate) {
          this.draggedWorkPackage.obj.projectDueDate = endDate;
        } else {
          this.draggedWorkPackage.obj.projectEndDate = endDate;
        }

        this.updateWorkPackge(this.draggedWorkPackage.obj);

        this.setWorkPackageAtDate(this.draggedWorkPackage, dropSource);
        this.sortWorkPackages();
        this.updateFakeWorkPackages();
      }
    }

    this.endWorkPackageDrag();
  }

  // private hasMaintenanceEventMatches(calendarDay: CalendarDay, searchTextValue: string) {
  //   return calendarDay.maintenanceEvents.some((maintenanceEvent) => {
  //     return (
  //       maintenanceEvent.id.includes(searchTextValue) ||
  //       maintenanceEvent.name.toUpperCase().includes(searchTextValue.toUpperCase())
  //     );
  //   });
  // }

  // private hasWorkPackageMatches(calendarDay: CalendarDay, searchTextValue: string) {
  //   return calendarDay.workPackages.some((workPackage) => {
  //     return (
  //       workPackage.id.includes(searchTextValue) ||
  //       workPackage.name.toUpperCase().includes(searchTextValue.toUpperCase())
  //     );
  //   });
  // }

  private initDayNames(): void {
    const unsortedDayNames = TranslateUtils.dayNamesShortEnglish();
    this.dayNamesShort = [...unsortedDayNames.slice(1), unsortedDayNames[0]];
    this.dayNamesShort = this.dayNamesShort.map((e) => e.toLowerCase());
  }

  private initFlights(): void {
    this.toolsMaintenancePlanningFormService
      .findAllBidoMissionEquipmentByEquipmentCode(this.topEquipmentCode)
      .subscribe((flights) => {
        this.flights = ListUtils.orEmpty(flights);

        this.setFlights();
      });
  }

  private initSearchText(): void {
    this.clearSearchText();
    // this.searchTextChanged = new Subject<string>();
    // this.searchTextChanged
    //   .pipe(
    //     debounceTime(DialogScheduleMaintenanceCalendarComponent.SEARCH_TEXT_DEBOUNCE_TIME),
    //     distinctUntilChanged(),
    //     takeUntil(this.unsubscribe)
    //   )
    //   .subscribe((searchTextValue) => {
    //     this.selectedCalendarDays = [];
    //     if (!StringUtils.isNullOrEmpty(searchTextValue)) {
    //       for (let i = 0; i < this.calendarDays.length; i++) {
    //         const calendarDay = this.calendarDays[i];
    //         if (
    //           this.hasWorkPackageMatches(calendarDay, searchTextValue) ||
    //           this.hasMaintenanceEventMatches(calendarDay, searchTextValue)
    //         ) {
    //           this.selectedCalendarDays = [...this.selectedCalendarDays, i];
    //         }
    //       }
    //     }
    //   });
  }

  private registerDragSource(event: Event): void {
    this.dragSource = this.deserializeCalendarDay(/^drag-[a-z]+-(\d+)-(\d+)$/g.exec((event.target as HTMLElement).id));
  }

  private setFlights(): void {
    const currentFirstDay = this.calendarDays[0].moment;
    const currentLastDay = this.calendarDays[this.calendarDays.length - 1].moment;

    const currentFlights = this.flights.filter((flight) => {
      return moment(flight.startDate).isBetween(currentFirstDay, currentLastDay);
    });

    currentFlights.forEach((flight) => {
      if (!!flight.missionCode) {
        const newFlight: CalendarFlight = {
          id: flight.missionCode,
          obj: flight
        };

        const startCalendarDay = this.calendarDays.find((calendarDay) => {
          return calendarDay.moment.isSame(flight.startDate, 'day');
        });
        if (!!startCalendarDay) {
          startCalendarDay.flights = [...startCalendarDay.flights, newFlight];
        }
      }
    });
  }

  private setCalendarDays(): void {
    let daysInCurrentMonth: moment.Moment[] = [];
    for (let i = 1; i <= this.currentMoment().daysInMonth(); i++) {
      daysInCurrentMonth = [...daysInCurrentMonth, this.currentMoment().date(i)];
    }

    const daysFromPreviousMonth =
      Number(daysInCurrentMonth[0].format('E')) === 1
        ? DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE
        : Number(daysInCurrentMonth[0].format('E')) - 1;
    let daysInPreviousMonth: moment.Moment[] = [];
    for (let i = 0; i < daysFromPreviousMonth; i++) {
      daysInPreviousMonth = [
        this.currentMoment()
          .add(-1, 'months')
          .endOf('month')
          .add(-i, 'days'),
        ...daysInPreviousMonth
      ];
    }

    let daysInNextMonth: moment.Moment[] = [];
    const maxDaysInCalendar =
      DialogScheduleMaintenanceCalendarComponent.WEEKS_IN_CALENDAR_VISIBLE *
      DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE;
    for (let i = 0; i < maxDaysInCalendar - (daysInCurrentMonth.length + daysInPreviousMonth.length); i++) {
      daysInNextMonth = [
        ...daysInNextMonth,
        this.currentMoment()
          .add(1, 'months')
          .startOf('month')
          .add(i, 'days')
      ];
    }

    this.calendarDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth].map((day) => {
      const calendarDay: CalendarDay = {
        moment: day,
        flights: [],
        maintenanceEvents: [],
        workPackages: [],
        _fakeWorkPackageNb: 0
      };

      return calendarDay;
    });
  }

  private setMonth(selectedMoment: moment.Moment): void {
    this.currentMonth = (selectedMoment.month() as number) + 1;
    this.currentYear = selectedMoment.year();

    this.setCalendarDays();
  }

  private setPlanning(): void {
    this.setFlights();
    this.setWorkPackages();
  }

  private setWorkPackageAtDate(workPackage: CalendarWorkPackage, selectedCalendarDay: CalendarDay): void {
    const selectedCalendarWeekDay = Number(selectedCalendarDay.moment.format('E'));
    workPackage.weekDuration =
      workPackage.totalDuration + selectedCalendarWeekDay - 1 <=
      DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE
        ? workPackage.totalDuration
        : DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE - selectedCalendarWeekDay + 1;

    selectedCalendarDay.workPackages = [...selectedCalendarDay.workPackages, workPackage];

    let durationLeft = workPackage.totalDuration - workPackage.weekDuration;
    let lastWorkPackageStartDate = workPackage.startDate;
    while (durationLeft > 0) {
      const lastWorkPackageStartDateIndex = this.findCalendarDayIndex(lastWorkPackageStartDate);
      const nextMonday = this.calendarDays.slice(lastWorkPackageStartDateIndex + 1).find((calendarDay) => {
        return calendarDay.moment.weekday() === 1;
      });

      if (!!nextMonday) {
        const newWorkPackage = { ...workPackage };
        newWorkPackage.weekDuration = Math.min(
          durationLeft,
          DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE
        );

        nextMonday.workPackages = [...nextMonday.workPackages, newWorkPackage];

        durationLeft -= newWorkPackage.weekDuration;
        lastWorkPackageStartDate = nextMonday.moment;
      } else {
        break;
      }
    }
  }

  private setWorkPackages(): void {
    const currentFirstDay = this.calendarDays[0].moment;
    const currentLastDay = this.calendarDays[this.calendarDays.length - 1].moment;

    const currentWorkPackages = this.workPackageList.filter((workPackage) => {
      const startDate = workPackage.projectStartDate;
      const endDate = workPackage.projectDueDate || workPackage.projectEndDate;

      return (
        moment(startDate).isSame(currentFirstDay, 'day') ||
        moment(startDate).isSame(currentLastDay, 'day') ||
        moment(endDate).isSame(currentFirstDay, 'day') ||
        moment(endDate).isSame(currentLastDay, 'day') ||
        moment(startDate).isBetween(currentFirstDay, currentLastDay, 'day') ||
        moment(endDate).isBetween(currentFirstDay, currentLastDay, 'day')
      );
    });

    currentWorkPackages.forEach((currentWorkPackage) => {
      let newWorkpackageStartDate = moment(currentWorkPackage.projectStartDate);
      let newWorkpackageEndDate = moment(
        !!currentWorkPackage.projectDueDate ? currentWorkPackage.projectDueDate : currentWorkPackage.projectEndDate
      );
      if (newWorkpackageStartDate.isBefore(this.calendarDays[0].moment, 'day')) {
        newWorkpackageStartDate = this.calendarDays[0].moment;
      }
      if (newWorkpackageEndDate.isAfter(this.calendarDays[this.calendarDays.length - 1].moment, 'day')) {
        newWorkpackageEndDate = this.calendarDays[this.calendarDays.length - 1].moment;
      }
      let newWorkPackageName = StringUtils.orEmpty(`${currentWorkPackage.projectNumber}`);
      if (!StringUtils.isNullOrEmpty(currentWorkPackage.projectDescription)) {
        newWorkPackageName += ` - ${currentWorkPackage.projectDescription}`;
      }

      const startCalendarDay = this.calendarDays.find((calendarDay) => {
        return calendarDay.moment.isSame(newWorkpackageStartDate, 'day');
      });

      if (!!startCalendarDay && !!currentWorkPackage.projectId) {
        const newWorkpackage: CalendarWorkPackage = {
          id: currentWorkPackage.projectId,
          obj: currentWorkPackage,
          isScheduled: currentWorkPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED,
          isSimulated: currentWorkPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED,
          name: newWorkPackageName,
          totalDuration:
            (newWorkpackageEndDate.endOf('day').diff(newWorkpackageStartDate.startOf('day'), 'days') as number) + 1,
          weekDuration: 0,
          startDate: startCalendarDay.moment,
          maintenanceEvents: []
        };
        this.setWorkPackageAtDate(newWorkpackage, startCalendarDay);
      }
    });
  }

  private sortWorkPackages(): void {
    this.calendarDays.forEach((calendarDay) => {
      calendarDay.workPackages.sort((w1, w2) => {
        if (w1.totalDuration < w2.totalDuration) {
          return 1;
        } else if (w1.totalDuration > w2.totalDuration) {
          return -1;
        } else {
          return w1.name.localeCompare(w2.name);
        }
      });
    });
  }

  private updateFakeWorkPackages() {
    this.calendarDays.forEach((calendarDay) => {
      calendarDay._fakeWorkPackageNb = 0;
    });

    const maxDaysInCalendar =
      DialogScheduleMaintenanceCalendarComponent.WEEKS_IN_CALENDAR_VISIBLE *
      DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE;
    for (
      let weekIndex = 0;
      weekIndex < maxDaysInCalendar / DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE - 1;
      weekIndex++
    ) {
      for (let i = 0; i < DialogScheduleMaintenanceCalendarComponent.WEEKS_IN_CALENDAR_VISIBLE; i++) {
        this.calendarDays[
          weekIndex * DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE + i
        ].workPackages.forEach((workPackage) => {
          for (let j = i + 1; j < i + workPackage.weekDuration; j++) {
            this.calendarDays[weekIndex * DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE + j]
              ._fakeWorkPackageNb++;
          }
        });
      }
    }
  }

  private updateWorkPackge(workPackage: BidmProjectDTO): void {
    this.toolsMaintenancePlanningFormService.updateWorkPackage(workPackage).subscribe((_) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateWorkPackage'));
    });
  }

  private updateWorkPackageDate(event: Event, workPackage: CalendarWorkPackage): void {
    event.preventDefault();
    event.stopPropagation();

    this.resizedWorkPackage = workPackage;
  }

  private updateCalendarFromNewWorkPackagelist(workPackageList: BidmProjectDTO[]): void {
    this.clearAllWorkPackage();

    this.workPackageList = workPackageList.filter((workPackage) => {
      return (
        !!workPackage.projectStartDate &&
        (!!workPackage.projectEndDate || !!workPackage.projectDueDate) &&
        (moment(workPackage.projectStartDate).isBefore(moment(workPackage.projectEndDate), 'day') ||
          moment(workPackage.projectStartDate).isBefore(moment(workPackage.projectDueDate), 'day'))
      );
    });

    this.setWorkPackages();
  }
}
