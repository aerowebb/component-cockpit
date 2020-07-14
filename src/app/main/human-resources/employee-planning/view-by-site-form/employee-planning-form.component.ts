import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep, cloneDeep as _cloneDeep } from 'lodash-es';
import * as moment from 'moment';
import { Subject, forkJoin, of } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { EventModel as GenericEventModel } from '../../../../shared/components/scheduler/event-model.interface';
import { SchedulerComponent } from '../../../../shared/components/scheduler/scheduler.component';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { StaffPlanningInput } from '../../../../shared/types/api-input-types/bidt-employee/staff-planning-input.interface';
import { EmployeeAbsence } from '../../../../shared/types/api-output-types/bidt-employee/employee-absence.interface';
import { StaffPlanningViewBySiteEmployeeAvailabilityTableOutput } from '../../../../shared/types/api-output-types/bidt-employee/staff-planning-view-by-site-employee-availability-table-output.interface';
import { StaffPlanningViewBySiteQualificationAvailabilityTableOutput } from '../../../../shared/types/api-output-types/bidt-employee/staff-planning-view-by-site-qualification-availability-table-output.interface';
import { QualificationTitleListDTO } from '../../../../shared/types/api-output-types/bidt-qualification/qualification-title-list-dto.interface';
import { EmployeeAvailability } from '../../../../shared/types/employee-availability.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';

import {
  EmployeePlanningFormService,
  EventSchedulerModel,
  ResourceModel,
  ResourceTimeRangeSchedulerModel,
  UpcomingEventStatus
} from './employee-planning-form.service';

interface ChartType {
  labels: string[];
  datasets: {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    fill: boolean;
  }[];
}

@Component({
  selector: 'aw-employee-planning-form',
  styleUrls: ['./employee-planning-form.component.scss'],
  templateUrl: './employee-planning-form.component.html'
})
export class EmployeePlanningFormComponent extends FormPageComponent<PageComponentData>
  implements OnInit, AfterViewInit {
  private static readonly EVENT_COLOR_EVENT: { [status: string]: string } = {
    [UpcomingEventStatus.ABSENCES]: 'gray',
    [UpcomingEventStatus.HOLIDAYS]: 'gray',
    [UpcomingEventStatus.TRAINING]: 'orange',
    [UpcomingEventStatus.WORKORDER]: 'blue'
  };
  public static readonly TIME_RESOLUTION_MAX_ZOOM: number = 15;
  public static readonly TIME_RESOLUTION_MIN_ZOOM: number = 7;
  // Date constants
  public static readonly MONDAY: number = 0;
  public static readonly TUESDAY: number = 1;
  public static readonly WEDNESDAY: number = 2;
  public static readonly THURSDAY: number = 3;
  public static readonly FRIDAY: number = 4;
  public static readonly SATURDAY: number = 5;
  public static readonly SUNDAY: number = 6;

  // Month constants
  public static readonly JAN: number = 0;
  public static readonly FEB: number = 1;
  public static readonly MAR: number = 2;
  public static readonly APR: number = 3;
  public static readonly MAY: number = 4;
  public static readonly JUN: number = 5;
  public static readonly JUL: number = 6;
  public static readonly AUG: number = 7;
  public static readonly SEP: number = 8;
  public static readonly OCT: number = 9;
  public static readonly NOV: number = 10;
  public static readonly DEC: number = 11;

  // HMSMs constants
  public static readonly daysInAWeek: number = 7;
  public static readonly hoursInADay: number = 24;
  public static readonly minutesInAnHour: number = 60;
  public static readonly secondsInAMinute: number = 60;
  public static readonly milisecondsInASecond: number = 1000;

  // Types constants
  public static readonly absences: string = 'ABSENCES';
  public static readonly training: string = 'TRAINING';
  public static readonly events: string = 'EVENT';
  public static readonly jobs: string = 'JOBS';
  public static readonly holidays: string = 'HOLIDAYS';
  public static readonly employees: string = 'Employees';
  public static readonly qualifications: string = 'Qualifications';
  public static readonly dayAndWeek: string = 'dayAndWeek';
  public static readonly hourAndDay: string = 'hourAndDay';
  public static readonly day: string = 'day';
  public static readonly dateFormat: string = 'DD/MM/YYYY';
  public static readonly displayDateFormat: string = 'DD/MM/YYYY';

  public componentContext: string;

  // General info
  public searchObject: StaffPlanningInput;

  public startDate?: string;
  public endDate?: string;
  public period?: string;

  public delta?: string;

  public totalAvailability?: string;

  public milisecondsInADay: number;

  public schedulerZoomLevel: number;

  // Chart
  public cumulativeHoursData: ChartType;
  // tslint:disable-next-line:no-any
  public cumulativeHoursChartOptions: any;
  public chartType: string;

  public displayTypeList: LabelValue<string>[];
  public displayType: string;
  public calendarMode: boolean = true;
  public dailyMode: boolean = false;

  // Employee Availability Table
  public eaTableLoading: boolean;
  // TODO add type
  public selectedEA;
  private dateAbsences: EmployeeAbsence[] = [];

  // Qualification Table
  public qualificationTableLoading: boolean;

  // Overlay
  public availability: EmployeeAvailability | undefined;

  public schedulerLoading: boolean;

  // Scheduler
  @ViewChild(SchedulerComponent)
  public scheduler: SchedulerComponent;

  private readonly schedulerTimeResolutionChanged: Subject<number>;
  public barMargin: number = 10;
  public columnsEmployee: object[];
  private columnEmployeeCounter: number;
  public columnsQualification: object[];
  private columnQualificationCounter: number;
  private eventCounter: number;
  private events: GenericEventModel[];
  public resourceTimeRangesEmployee: object[] = [];
  public resourceTimeRangesEmployeeDaily: object[] = [];
  public resourceTimeRangesEmployeeSearch: object[] = [];
  private resourceTimeRangeEmployeeCounter: number;
  public resourceTimeRangesQualification: object[] = [];
  private resourceTimeRangeQualificationCounter: number;
  public schedulerConfig: object;
  public showEmployeePlanningLegendDialog: boolean;
  public resourcesEmployee: ResourceModel[];
  public resourcesQualification: ResourceModel[];
  public timeRanges: boolean = true;
  private planningEmployeeAvailability: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[];
  private planningQualificationAvailability: StaffPlanningViewBySiteQualificationAvailabilityTableOutput[];
  public qualificationList: LabelValue<StaffPlanningViewBySiteQualificationAvailabilityTableOutput>[];
  public selectedQualification: StaffPlanningViewBySiteQualificationAvailabilityTableOutput;
  public placeHolderQualification: string;
  public qualificationHoursAvailability: string | undefined;
  public hoursAvailabilityPerQualification: Map<string, number>;

  private qualificationLists: QualificationTitleListDTO[];
  public qualifications: string[];

  public readonly component: typeof EmployeePlanningFormComponent;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly employeePlanningFormService: EmployeePlanningFormService,
    private readonly dateService: DateService,
    private readonly translateService: TranslateService,
    private readonly datePipe: DatePipe
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();
    this.initChart();
    this.setSchedulerConfig();
    this.setSchedulerColumnEmployeeList();
    this.setSchedulerColumnQualificationList();
    this.loadQualificationsList();
    this.component = EmployeePlanningFormComponent;
    this.displayType = EmployeePlanningFormComponent.employees;
    this.schedulerTimeResolutionChanged = new Subject<number>();
    this.displayTypeList = [
      {
        label: this.translateService.instant(this.getTranslateKey('calendarEmployee')),
        value: EmployeePlanningFormComponent.employees
      },
      {
        label: this.translateService.instant(this.getTranslateKey('calendarQualification')),
        value: EmployeePlanningFormComponent.qualifications
      }
    ];
    this.placeHolderQualification = this.translateService.instant(this.getTranslateKey('qualificationFilter'));
    this.registerSchedulerTimeResolutionObservable();
  }

  /****************
   * Initialization
   ***************/

  public ngOnInit(): void {
    super.ngOnInit();
    this.eventCounter = 1;
    this.resourceTimeRangeEmployeeCounter = 1;
    this.resourceTimeRangeQualificationCounter = 1;
    this.milisecondsInADay =
      this.component.hoursInADay *
      this.component.minutesInAnHour *
      this.component.secondsInAMinute *
      this.component.milisecondsInASecond;
    this.schedulerLoading = false;
    this.schedulerZoomLevel = EmployeePlanningFormComponent.TIME_RESOLUTION_MIN_ZOOM;
    if (!!this.componentData.objectId) {
      this.searchObject = this.serializationService.deserialize(this.componentData.objectId) as StaffPlanningInput;

      this.setSchedulerDate();
      this.setComponentContext();
      this.search();

      if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
        this.startDate = this.dateService.dateToString(this.searchObject.startDate);
        this.endDate = this.dateService.dateToString(this.searchObject.endDate);
        this.period = this.startDate + ' - ' + this.endDate;
        const deltaNumber = this.getNumberOfDays(this.searchObject.startDate, this.searchObject.endDate) + 1;
        this.delta = deltaNumber.toString();
        this.delta += ' ';
        this.delta += this.translateService.instant(this.getTranslateKey('days'));
      }
    }
  }

  public ngAfterViewInit() {
    if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
      this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
    } else {
      this.scheduler.schedulerEngine.localeManager.locale = 'En';
    }
  }

  public refresh() {
    this.init();
    this.initChart();
    this.events = [];
    this.ngOnInit();
    const startDate = new Date(this.searchObject.startDate as Date);
    const endDate = new Date(this.searchObject.endDate as Date);
    this.switchViewPresetCustomDayAndWeek();
    this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
    this.dailyMode = false;
  }

  public getComponentName(): string {
    return ComponentConstants.HR_EMPLOYEE_PLANNING_FORM;
  }

  private init(): void {
    // General info
    this.searchObject = {};
    this.delta = undefined;
    this.milisecondsInADay = 0;

    this.eaTableLoading = true;
    this.selectedEA = [];

    this.qualificationTableLoading = false;
    this.calendarMode = true;
    this.dailyMode = false;
    this.events = [];
    this.resourcesEmployee = [];
    this.resourcesQualification = [];
    this.resourceTimeRangesEmployee = [];
    this.resourceTimeRangesEmployeeDaily = [];
    this.resourceTimeRangesEmployeeSearch = [];
    this.resourceTimeRangesQualification = [];
    this.qualificationList = [];
    this.showEmployeePlanningLegendDialog = false;
    this.columnEmployeeCounter = 1;
    this.columnQualificationCounter = 1;
    this.displayType = EmployeePlanningFormComponent.employees;

    this.componentContext = '';
  }

  private initChart(): void {
    this.chartType = 'line';
    this.cumulativeHoursData = {
      datasets: [
        {
          data: [],
          label: 'Cumulative hours available',
          borderColor: '#006ea9',
          backgroundColor: '#006ea9',
          hoverBackgroundColor: '#006ea9',
          fill: false
        }
      ],
      labels: []
    };

    this.setChartOptions();
  }

  private setChartOptions(): void {
    this.cumulativeHoursChartOptions = {
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  private setChartData(results: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[] | undefined) {
    this.translateService.get(`${this.getComponentName()}.cumulativeHoursAvailable`).subscribe((res) => {
      const chartdata: ChartType = {
        datasets: [
          {
            data: [],
            label: res as string,
            borderColor: '#006ea9',
            backgroundColor: '#006ea9',
            hoverBackgroundColor: '#006ea9',
            fill: false
          }
        ],
        labels: []
      };
      if (!!results) {
        if (!!results[0] && !!results[0].datedata) {
          const keys = Object.keys(results[0].datedata);
          const sortedKeys = keys.sort();

          const data: number[] = [];

          if (!!results[0].datedata) {
            for (let i = 0; i < Object.keys(keys).length; i++) {
              data[i] = 0;
            }
            results.forEach((result) => {
              if (!!result && !!result.datedata) {
                for (let y = 0; y < Object.keys(keys).length; y++) {
                  const value = result.datedata[sortedKeys[y]];
                  if (value !== null && value !== undefined) {
                    data[y] = data[y] + (value as number);
                  }
                }
              }
            });
          }

          data.forEach((value) => {
            chartdata.datasets[0].data.push(value);
          });

          this.cumulativeHoursData = cloneDeep(chartdata);

          sortedKeys.forEach((key) => {
            this.cumulativeHoursData.labels.push(this.dateService.dateToString(new Date(key)));
          });
        }
      }
    });
  }

  private search(): void {
    this.schedulerLoading = !this.isCreateOpenMode;
    this.eaTableLoading = true;
    this.qualificationTableLoading = true;
    this.employeePlanningFormService.getViewByCompanyData(this.searchObject).subscribe((results) => {
      if (
        !!results[0].staffPlanningViewByCompanyTableOutput &&
        !!results[0].staffPlanningViewByCompanyTableOutput[0].availabilityHours
      ) {
        this.totalAvailability = `${
          results[0].staffPlanningViewByCompanyTableOutput[0].availabilityHours.split(':')[0]
        } H`;
      }

      if (
        !!results[0].staffPlanningViewByCompanyTableOutput &&
        !!results[0].staffPlanningViewByCompanyTableOutput[0].codeQualif
      ) {
        this.hoursAvailabilityPerQualification = new Map<string, number>();
        this.hoursAvailabilityPerQualification = results[0].staffPlanningViewByCompanyTableOutput[0].codeQualif;
      }

      if (
        !!results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput &&
        results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput.length > 0
      ) {
        // chart
        this.setChartData(results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput);
        this.planningEmployeeAvailability = results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput;
        // employee availability
        this.setDateAbsences(this.planningEmployeeAvailability);
        this.buildSchedulerResourceEmployeeList(this.planningEmployeeAvailability);
        this.buildResourceTimeRangesEmployee(this.planningEmployeeAvailability);
        this.buildResourceTimeRangesEmployeeDaily(this.planningEmployeeAvailability);
      } else {
        this.eaTableLoading = false;
      }

      if (
        !!results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput &&
        results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput.length > 0
      ) {
        this.planningQualificationAvailability = results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput;
        // qualification
        this.buildSchedulerResourceQualificationList(
          results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput
        );
        this.buildResourceTimeRangesQualification(
          results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput
        );
        this.buildQualificationList(results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput);
      } else {
        this.qualificationTableLoading = false;
      }
    });
    setTimeout(() => {
      this.scheduler.schedulerEngine.zoomToFit();

      this.schedulerZoomLevel =
        this.scheduler.schedulerEngine.zoomLevel > EmployeePlanningFormComponent.TIME_RESOLUTION_MAX_ZOOM
          ? EmployeePlanningFormComponent.TIME_RESOLUTION_MAX_ZOOM
          : this.scheduler.schedulerEngine.zoomLevel < EmployeePlanningFormComponent.TIME_RESOLUTION_MIN_ZOOM
          ? EmployeePlanningFormComponent.TIME_RESOLUTION_MIN_ZOOM
          : this.scheduler.schedulerEngine.zoomLevel;

      this.schedulerLoading = false;
    });
  }
  private buildQualificationList(
    qualificationAvailability: StaffPlanningViewBySiteQualificationAvailabilityTableOutput[]
  ) {
    qualificationAvailability.forEach((qualification) => {
      this.qualificationList.push({ label: qualification.qualification as string, value: qualification });
    });
  }

  private setSchedulerColumnEmployeeList() {
    this.columnsEmployee = [
      {
        field: 'name',
        text: this.translateService.instant(this.getTranslateKey('name')),
        htmlEncode: false,
        renderer: ({ record }: { record: { data: ResourceModel } }) => `
        <div class="info">
                <a id ="${record.data.idGenerated}" class="employee-select">${record.data.name}</a>
                <div class="desc" style="text-align:center;">(${record.data.hoursAvailability} H)</div>
        </div>
        `,
        sortable: false
      },
      {
        field: 'qualifications',
        text: this.translateService.instant(this.getTranslateKey('qualifications')),
        htmlEncode: false,
        width: 250,
        sortable: false,
        renderer: ({ record }: { record: { data: ResourceModel } }) =>
          `
          <div class="info">
                  <div>
                  ${(record.data.qualification as string[]).join('<br>')}
                  </div>
          </div>
          `
      }
    ];
  }

  private buildResourceTimeRangesEmployee(
    listeAvaibility: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[]
  ): void {
    listeAvaibility.forEach((currentAvailability) => {
      if (currentAvailability.datedata) {
        const dateData = currentAvailability.datedata;
        Object.keys(dateData).forEach((key) => {
          const startDateWorkTemplate = new Date(key);
          if (currentAvailability.listBidtLaborTemplateHoursDTO) {
            const workTemplate = currentAvailability.listBidtLaborTemplateHoursDTO.filter(
              (laborTemplate) => laborTemplate.thDayOfWeek === startDateWorkTemplate.getDay() + 1
            );
            if (workTemplate && workTemplate.length > 0) {
              this.resourceTimeRangesEmployeeSearch.push(
                this.buildSchedulerResourceTimeRangeEmployee(
                  currentAvailability.employeeId as number,
                  new Date(key),
                  dateData[key] as number
                )
              );
            } else {
              this.resourceTimeRangesEmployeeSearch.push(
                this.buildSchedulerResourceTimeRangeEmployeeWithCustomStyle(
                  currentAvailability.employeeId as number,
                  new Date(key)
                )
              );
            }
          }
        });
      }
    });
    this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeSearch;
  }

  private buildSchedulerResourceTimeRangeEmployee(
    employeeId: number,
    startDate: Date,
    hoursAvailability: number
  ): ResourceTimeRangeSchedulerModel {
    return {
      id: this.generateSchedulerResourceTimeRangeEmployeeId(),
      resourceId: employeeId.toString(),
      startDate,
      endDate: undefined,
      duration: 1,
      durationUnit: 'd',
      name: this.roundWithOneDigit(hoursAvailability).toString() + ' H',
      eventType: '',
      timeRangeColor: hoursAvailability === 0 ? 'red' : 'green'
    };
  }

  private buildSchedulerResourceTimeRangeEmployeeWithCustomStyle(
    employeeId: number,
    startDate: Date
  ): ResourceTimeRangeSchedulerModel {
    return {
      id: this.generateSchedulerResourceTimeRangeEmployeeId(),
      resourceId: employeeId.toString(),
      startDate,
      endDate: undefined,
      duration: 1,
      durationUnit: 'd',
      eventType: '',
      style:
        'background : repeating-linear-gradient(45deg, rgba(155,155,155,0.5),' +
        ' rgba(155,155,155,0.5) 8px, transparent 8px, transparent 16px);color: #666'
    };
  }

  private buildSchedulerResourceEmployeeList(
    listeAvaibility: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[]
  ): void {
    this.resourcesEmployee = listeAvaibility.map((element) => {
      let hoursAvailability = 0;

      if (element.datedata) {
        const dateData = element.datedata;
        Object.keys(element.datedata).forEach((key) => (hoursAvailability += dateData[key]));
      }

      return this.buildSchedulerResourceEmployeeFromAsset(element, hoursAvailability);
    });

    this.sortResources(this.resourcesEmployee);
  }

  private buildSchedulerResourceEmployeeFromAsset(
    element: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput,
    hoursAvailability: number
  ): ResourceModel {
    this.qualifications = [];
    if (!!element.qualificationsId) {
      element.qualificationsId.forEach((result) => {
        this.qualifications.push(
          this.qualificationLists.filter((type) => type.labelValueList.value === result.toString())[0].labelValueList
            .label
        );
      });
    }

    return {
      id: element.employeeId ? element.employeeId.toString() : '',
      name: element.employee as string,
      qualification: !!this.qualifications ? this.qualifications : undefined,
      idGenerated: this.generateSchedulerColumnsEmployeeId(),
      hoursAvailability: this.roundWithOneDigit(hoursAvailability) as number,
      children: []
    };
  }

  private buildResourceTimeRangesEmployeeDaily(
    listeAvaibility: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[]
  ): void {
    const days: Date[] = this.getDates(this.searchObject.startDate as Date, this.searchObject.endDate as Date);
    days.forEach((day) => {
      listeAvaibility.forEach((result) => {
        const startDate = new Date(day.getTime());
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        if (result.listBidtLaborTemplateHoursDTO) {
          const workTemplate = result.listBidtLaborTemplateHoursDTO.filter(
            (laborTemplate) => laborTemplate.thDayOfWeek === startDate.getDay() + 1
          );
          if (!!workTemplate) {
            workTemplate.forEach((wt) => {
              const startDateWorkTemplate = new Date(
                startDate.getTime() + (wt.thHourOfBeginning as number) * this.component.milisecondsInASecond
              );
              const endDateWorkTemplate = new Date(
                startDate.getTime() + (wt.thHourOfEnd as number) * this.component.milisecondsInASecond
              );
              this.resourceTimeRangesEmployeeDaily.push(
                this.buildSchedulerResourceTimeRangeEmployeeDaily(
                  result.employeeId as number,
                  startDateWorkTemplate,
                  endDateWorkTemplate
                )
              );
            });
          }
        }
      });
    });
  }

  private buildSchedulerResourceTimeRangeEmployeeDaily(
    employeeId: number,
    startDate: Date,
    endDate: Date
  ): ResourceTimeRangeSchedulerModel {
    return {
      id: this.generateSchedulerResourceTimeRangeEmployeeId(),
      resourceId: employeeId.toString(),
      startDate,
      endDate,
      eventType: '',
      timeRangeColor: 'green'
    };
  }

  private buildResourceTimeRangesQualification(
    qualificationAvailability: StaffPlanningViewBySiteQualificationAvailabilityTableOutput[]
  ): void {
    this.resourceTimeRangesQualification = [];
    qualificationAvailability.forEach((qualification) => {
      if (qualification.datedata) {
        const dateData = qualification.datedata;
        Object.keys(dateData).forEach((key) => {
          this.resourceTimeRangesQualification.push(
            this.buildSchedulerResourceTimeRangeQualification(
              qualification.qualification as string,
              new Date(key),
              dateData[key] as number
            )
          );
        });
      }
    });
  }

  // Only for daily View
  private buildSchedulerEventsList(listeAvaibility: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[]): void {
    this.events = [];
    this.dateAbsences.forEach((element) => {
      let startDateWorkTemplate = new Date(element.key);
      const workTemplate = listeAvaibility.find((result) => result.employeeId === element.employeeId);
      if (workTemplate && workTemplate.listBidtLaborTemplateHoursDTO) {
        const workTemplatefilter = workTemplate.listBidtLaborTemplateHoursDTO.filter(
          (laborTemplate) => laborTemplate.thDayOfWeek === startDateWorkTemplate.getDay() + 1
        );
        if (!!workTemplatefilter) {
          if (element.type === UpcomingEventStatus.WORKORDER && element.end != undefined) {
            const endDateWorkTemplate = new Date(element.end);
            startDateWorkTemplate = new Date(element.start as Date);
            this.events.push(this.buildSchedulerEventFromAsset(element, startDateWorkTemplate, endDateWorkTemplate));
          } else {
            workTemplatefilter.forEach((wt) => {
              let endDateWorkTemplate = new Date(element.key);
              startDateWorkTemplate = new Date(element.key);
              startDateWorkTemplate = new Date(
                startDateWorkTemplate.getTime() + (wt.thHourOfBeginning as number) * this.component.milisecondsInASecond
              );
              endDateWorkTemplate = new Date(
                endDateWorkTemplate.getTime() + (wt.thHourOfEnd as number) * this.component.milisecondsInASecond
              );
              this.events.push(this.buildSchedulerEventFromAsset(element, startDateWorkTemplate, endDateWorkTemplate));
            });
          }
        }
      }
    });
  }

  private buildSchedulerEventFromAsset(element: EmployeeAbsence, startDate: Date, endDate: Date): EventSchedulerModel {
    const type = element.type ? element.type : '';

    return {
      id: this.generateSchedulerEventId(),
      resourceId: element.employeeId ? element.employeeId.toString() : '',
      name: element.type ? this.translateService.instant(this.getTranslateKey(element.type.toLowerCase())) : '',
      desc: element.name ? element.name : '',
      startDate,
      endDate,
      eventType: '',
      eventColor: EmployeePlanningFormComponent.EVENT_COLOR_EVENT[type],
      children: []
    };
  }

  private setSchedulerColumnQualificationList() {
    this.columnsQualification = [
      {
        field: 'name',
        text: this.translateService.instant(this.getTranslateKey('qualifications')),
        htmlEncode: false,
        width: 150,
        renderer: ({ record }: { record: { data: ResourceModel } }) => `
        <div class="info">
                <div>${record.data.name}</div>
                <div class="desc">(${record.data.hoursAvailability} H)</div>
        </div>
        `,
        sortable: false
      }
    ];
  }

  private buildSchedulerResourceQualificationList(
    listeAvaibility: StaffPlanningViewBySiteQualificationAvailabilityTableOutput[]
  ): void {
    this.resourcesQualification = listeAvaibility.map((element) => {
      let hoursAvailability = 0;

      if (element.datedata) {
        const dateData = element.datedata;
        Object.keys(element.datedata).forEach((key) => (hoursAvailability += dateData[key]));
      }

      return this.buildSchedulerResourceQualificationFromAsset(element, hoursAvailability);
    });

    this.sortResources(this.resourcesQualification);
  }

  private sortResources(tabToSort: ResourceModel[]) {
    tabToSort.sort((a, b) => (b.hoursAvailability as number) - (a.hoursAvailability as number));
  }

  private buildSchedulerResourceQualificationFromAsset(
    element: StaffPlanningViewBySiteQualificationAvailabilityTableOutput,
    hoursAvailability: number
  ): ResourceModel {
    return {
      id: element.qualification ? element.qualification : '',
      name: element.qualification as string,
      idGenerated: this.generateSchedulerColumnsQualificationId(),
      hoursAvailability: this.roundWithOneDigit(hoursAvailability) as number,
      children: []
    };
  }

  private buildSchedulerResourceTimeRangeQualification(
    qualification: string,
    startDate: Date,
    hoursAvailability: number
  ): ResourceTimeRangeSchedulerModel {
    return {
      id: this.generateSchedulerResourceTimeRangeQualificationId(),
      resourceId: qualification,
      startDate,
      duration: 1,
      durationUnit: 'd',
      name: this.roundWithOneDigit(hoursAvailability).toString() + 'H',
      eventType: '',
      timeRangeColor: hoursAvailability === 0 ? 'red' : 'green'
    };
  }

  private generateSchedulerResourceTimeRangeEmployeeId(): number {
    return this.resourceTimeRangeEmployeeCounter++;
  }

  private generateSchedulerResourceTimeRangeQualificationId(): number {
    return this.resourceTimeRangeQualificationCounter++;
  }

  private generateSchedulerEventId(): number {
    return this.eventCounter++;
  }

  private generateSchedulerColumnsEmployeeId(): number {
    return this.columnEmployeeCounter++;
  }

  private generateSchedulerColumnsQualificationId(): number {
    return this.columnQualificationCounter++;
  }

  private getDates(startDate: Date, stopDate: Date): Date[] {
    const dateArray = new Array();
    let currentDate = new Date(startDate.valueOf());

    const endDate = new Date(stopDate.valueOf());
    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate = this.addDays(currentDate, 1);
    }

    return dateArray;
  }
  private addDays(currentDate: Date, days: number): Date {
    const date = new Date(currentDate.valueOf());
    date.setDate(date.getDate() + days);

    return date;
  }

  private roundWithOneDigit(numberWithDigit: number) {
    if (Number.isInteger(numberWithDigit)) {
      return numberWithDigit;
    } else {
      return numberWithDigit.toFixed(1);
    }
  }

  private setDateAbsences(results: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[] | undefined): void {
    this.dateAbsences = [];

    if (!!results) {
      // set table data
      if (!!results[0].datedata) {
        results.forEach((result) => {
          ListUtils.orEmpty(result.dateAbsences).forEach((resultFilter) => {
            resultFilter.employeeId = result.employeeId;
            this.dateAbsences.push(resultFilter);
          });
        });
      }
    }
    this.eaTableLoading = false;
  }

  public onQualificationChange() {
    if (this.selectedQualification) {
      if (this.selectedQualification.qualification && this.hoursAvailabilityPerQualification) {
        const hoursAvailability = this.hoursAvailabilityPerQualification[this.selectedQualification.qualification];
        if (hoursAvailability) {
          this.qualificationHoursAvailability = (this.roundWithOneDigit(hoursAvailability).toString() as string) + ' H';
        }
      }

      this.buildSchedulerResourceQualificationListWithQualification();
      this.buildSchedulerResourceEMployeeListWithQualification();
    } else {
      this.qualificationHoursAvailability = undefined;
      this.buildSchedulerResourceEmployeeList(this.planningEmployeeAvailability);
      this.buildSchedulerResourceQualificationList(this.planningQualificationAvailability);
    }
  }

  private buildSchedulerResourceEMployeeListWithQualification() {
    this.resourcesEmployee = this.planningEmployeeAvailability
      .filter((element) => {
        if (
          element.qualificationsId &&
          this.selectedQualification.idQualification &&
          element.qualificationsId.includes(this.selectedQualification.idQualification)
        ) {
          return true;
        }

        return false;
      })
      .map((element) => {
        let hoursAvailability = 0;
        if (element.datedata) {
          const dateData = element.datedata;
          Object.keys(element.datedata).forEach((key) => (hoursAvailability += dateData[key]));
        }

        return this.buildSchedulerResourceEmployeeFromAsset(element, hoursAvailability);
      });
    this.sortResources(this.resourcesEmployee);
  }

  private buildSchedulerResourceQualificationListWithQualification() {
    this.resourcesQualification = this.planningQualificationAvailability
      .filter((element) => {
        if (element.idQualification === this.selectedQualification.idQualification) {
          return true;
        }

        return false;
      })
      .map((element) => {
        let hoursAvailability = 0;
        if (element.datedata) {
          const dateData = element.datedata;
          Object.keys(element.datedata).forEach((key) => (hoursAvailability += dateData[key]));
        }

        return this.buildSchedulerResourceQualificationFromAsset(element, hoursAvailability);
      });
  }

  // tslint:disable-next-line: no-any
  public openEmployee(row?: any): void {
    const input = ObjectUtils.isDefined(row)
      ? Number(row.id)
      : ObjectUtils.isDefined(this.selectedEA[0])
      ? Number(this.selectedEA[0].employeeId)
      : undefined;

    if (ObjectUtils.isDefined(input)) {
      this.employeePlanningFormService.getEmployeeDetails(input as number).subscribe((res) => {
        if (res.length === 1 && !!res[0]) {
          const labelKey = 'transaction.EmployeeFormComponent';
          const data: PageComponentData = {
            id: this.tabService.generateId(),
            componentId: 'EmployeeFormComponent',
            objectId: res[0].bidtEmployeeDTO && this.serializationService.serialize(res[0].bidtEmployeeDTO),
            openMode: ComponentOpenMode.Read
          };

          this.tabService.open(this.tabService.create(data, labelKey, true));
        }
      });
    }
  }

  private getNumberOfDays(startDate: Date, endDate: Date): number {
    const startDateMS = new Date(startDate).getTime();
    const endDateMS = new Date(endDate).getTime();

    const differenceMS = endDateMS - startDateMS;

    return Math.round(differenceMS / this.milisecondsInADay);
  }

  public getDate(isoString: string): string {
    const date = new Date(isoString);

    const customDate = isNaN(new Date(date).getDate())
      ? isoString
      : `${this.datePipe.transform(new Date(date), 'dd/MM')}`;

    return customDate;
  }

  private setComponentContext(): void {
    forkJoin({
      company: this.searchObject.companyName
        ? of(this.searchObject.companyName)
        : this.employeePlanningFormService
            .findBidtCompanyById(this.searchObject.companyId as number)
            .pipe(map((company) => company.companyName)),
      site: this.searchObject.siteName
        ? of(this.searchObject.siteName)
        : this.employeePlanningFormService
            .findBidtSiteById(this.searchObject.siteId as number)
            .pipe(map((site) => site.siteName)),
      warehouse: this.searchObject.warehouseName
        ? of(this.searchObject.warehouseName)
        : this.searchObject.warehouseId
        ? this.employeePlanningFormService
            .getBidtWarehouseById(this.searchObject.warehouseId as number)
            .pipe(map((warehouse) => warehouse.whName))
        : ' '
    }).subscribe((result) => {
      this.searchObject.companyName = result.company;
      this.searchObject.siteName = result.site;

      if (!!this.searchObject.warehouseId) {
        this.searchObject.warehouseName = result.warehouse;
        this.componentContext = `${result.company} | ${result.site} | ${result.warehouse}`;
      } else {
        this.componentContext = `${result.company} | ${result.site}`;
      }
      this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
    });
  }

  private setSchedulerDate(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      startDate: this.searchObject.startDate,
      endDate: this.searchObject.endDate
    };
  }

  public backToEmployee() {
    this.events = [];
    const startDate = new Date(this.searchObject.startDate as Date);
    const endDate = new Date(this.searchObject.endDate as Date);
    this.switchViewPresetCustomDayAndWeek();
    this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
    this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeSearch;
    this.dailyMode = !this.dailyMode;
  }

  public onSchedulerEvents(event) {
    if (event.type === 'cellclick' && event.event.target.matches('.employee-select')) {
      const employee = this.resourcesEmployee.find((resource) => {
        return (resource.idGenerated ? resource.idGenerated.toString() : '') === event.event.target.id;
      });
      if (!!employee) {
        this.openEmployee(employee);
      }
    } else if (
      event.type === 'timeaxisheaderclick' &&
      event.event.target.matches('.b-sch-header-timeaxis-cell') &&
      !this.dailyMode &&
      this.calendarMode
    ) {
      this.dailyMode = !this.dailyMode;
      if (this.dailyMode) {
        const startDate = moment(event.event.target.innerHTML, 'DD/MM/YYYY').toDate();
        startDate.setHours(startDate.getHours());
        const endDate = new Date(startDate);
        const hoursPerDay = 24;
        endDate.setHours((startDate.getHours() as number) + (hoursPerDay as number));
        this.switchViewPresetHourAndDay();
        this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
        this.buildSchedulerEventsList(this.planningEmployeeAvailability);
        this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeDaily;
      }
    }
  }

  public switchViewPresetHourAndDay(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      viewPreset: { name: EmployeePlanningFormComponent.hourAndDay }
    };
  }

  public switchViewPresetCustomDayAndWeek(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      viewPreset: {
        name: EmployeePlanningFormComponent.dayAndWeek,
        displayDateFormat: EmployeePlanningFormComponent.displayDateFormat,
        timeResolution: {
          unit: EmployeePlanningFormComponent.day,
          increment: 1
        },
        headerConfig: {
          middle: {
            unit: EmployeePlanningFormComponent.day,
            dateFormat: EmployeePlanningFormComponent.dateFormat
          }
        }
      }
    };
  }

  public openEmployeePlanningLegendDialog(): void {
    this.showEmployeePlanningLegendDialog = true;
  }

  public onDisplayTypeChange(): void {
    this.calendarMode = this.displayType === EmployeePlanningFormComponent.employees;
  }

  private setSchedulerConfig(): void {
    this.schedulerConfig = {
      appendTo: 'container',
      mode: 'horizontal',
      viewPreset: {
        name: EmployeePlanningFormComponent.dayAndWeek,
        displayDateFormat: EmployeePlanningFormComponent.displayDateFormat,
        timeResolution: {
          unit: EmployeePlanningFormComponent.day,
          increment: 1
        },
        headerConfig: {
          middle: {
            unit: EmployeePlanningFormComponent.day,
            dateFormat: EmployeePlanningFormComponent.dateFormat
          }
        }
      },
      responsiveLevels: {
        small: {
          levelWidth: 800,
          tickWidth: 65,
          fillTicks: true,
          rowHeight: 40
        },
        normal: {
          levelWidth: '*',
          tickWidth: 250,
          fillTicks: false,
          rowHeight: 50
        }
      },
      timeRanges: true,
      resourceMargin: 0,
      readOnly: true,
      tickSize: 90,
      resourceTimeRangesFeatures: { resourceTimeRanges: true },
      scheduleContextMenu: {
        items: {
          addEvent: false
        },
        processHeaderItems: () => false
      },
      zoomOnTimeAxisDoubleClick: false,
      zoomOnMouseWheel: false,
      eventRenderer: ({ eventRecord }) => {
        return `
            <div class="info">
                <div class="name" style="font-weight:bold;">${eventRecord.name}</div>
                <div class="desc">${eventRecord.desc}</div>
            </div>
          `;
      },
      timeRangesFeature: {
        showCurrentTimeLine: true
      },
      startDate: new Date(this.searchObject.startDate as Date),
      endDate: new Date(this.searchObject.endDate as Date)
    };
  }
  private loadQualificationsList(): void {
    this.employeePlanningFormService.findQualificationTitle().subscribe((results) => {
      this.qualificationLists = results || [];
    });
  }
  public onChangeTimeResolution(event: { value: number }): void {
    this.schedulerTimeResolutionChanged.next(event.value);
  }
  private registerSchedulerTimeResolutionObservable(): void {
    this.schedulerTimeResolutionChanged.pipe(distinctUntilChanged(), takeUntil(this.unsubscribe)).subscribe({
      next: (value) => {
        this.scheduler.schedulerEngine.zoomTo(value);
      }
    });
  }
}
