import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep, cloneDeep as _cloneDeep } from 'lodash-es';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { StaffPlanningInput } from '../../../../shared/types/api-input-types/bidt-employee/staff-planning-input.interface';
import { StaffPlanningViewByCompanyTableOutput } from '../../../../shared/types/api-output-types/bidt-employee/staff-planning-view-by-company-table-output.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { EmployeePlanningSearchService } from '../search/employee-planning-search.service';

import { ViewByCompanyFormService } from './view-by-company-form.service';

interface BarChartDataset {
  label?: string;
  backgroundColor?: string;
  borderColor?: string;
  data: number[];
  hoverBackgroundColor?: string;
  fill?: boolean;
}

interface ChartType {
  labels: string[];
  datasets: BarChartDataset[];
}

@Component({
  selector: 'aw-view-by-company-form',
  templateUrl: './view-by-company-form.component.html',
  styleUrls: ['./view-by-company-form.component.scss']
})
export class ViewByCompanyFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  // Main information
  public searchObject: StaffPlanningInput;

  public startDate?: string;
  public endDate?: string;

  public delta?: number;

  public chartData: ChartType;
  public data: ChartType;
  // tslint:disable-next-line: no-any
  public chartOptions: any;

  public sites: LabelValue<string>[];

  // Employee Availability table
  public eaTableLoading: boolean;
  public employeeAvailabilityTable;
  public selectedEA;
  public employeeAvailabilityTableCols: TableColumn[];
  public eaTableColsByCodeQualif: TableColumn[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly viewByCompanyFormService: ViewByCompanyFormService,
    private readonly employeePlanningSearchService: EmployeePlanningSearchService,
    private readonly dateService: DateService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();
    this.getSitesForCompany();
    this.initChartOptions();
    this.setEmployeeAvailabilityTableBasicCols();
  }

  public ngOnInit() {
    super.ngOnInit();

    if (!!this.componentData.objectId) {
      this.searchObject = this.serializationService.deserialize(this.componentData.objectId) as StaffPlanningInput;
      if (!!this.searchObject.companyName) {
        const context = `${this.searchObject.companyName}`;
        this.displayComponentContext(context, this.isCreateOpenMode);
      }

      this.search();

      if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
        this.startDate = this.dateService.dateToString(this.searchObject.startDate);
        this.endDate = this.dateService.dateToString(this.searchObject.endDate);
        this.delta = this.getNumberOfDays(this.searchObject.startDate, this.searchObject.endDate) + 1;
      }
    }
  }

  public getComponentName(): string {
    return ComponentConstants.HR_VIEW_BY_COMPANY_FORM;
  }

  private init(): void {
    this.searchObject = {};
    this.startDate = undefined;
    this.endDate = undefined;
    this.delta = undefined;
    this.chartData = {
      labels: [],
      datasets: []
    };
    this.data = {
      labels: [],
      datasets: []
    };

    this.eaTableLoading = false;
    this.employeeAvailabilityTable = [];
    this.selectedEA = [];
    this.employeeAvailabilityTableCols = [];
    this.eaTableColsByCodeQualif = [];
  }

  private getSitesForCompany(): void {
    const input: BidtSiteDTO = {
      bidtCompanyId: this.searchObject.companyId
    };
    this.employeePlanningSearchService.findByCriteriaSP(input).subscribe((results) => {
      this.sites = results || [];
    });
  }

  private setEmployeeAvailabilityTableBasicCols(): void {
    const sitesLabel = `${this.getComponentName()}.sites`;
    const eaLabel = `${this.getComponentName()}.employeeAvailability`;
    const hoursLabel = `${this.getComponentName()}.hours`;
    this.translateService.get([sitesLabel, eaLabel, hoursLabel]).subscribe((results) => {
      this.employeeAvailabilityTableCols = [
        { field: results[sitesLabel] },
        { field: `${results[eaLabel]} (${results[hoursLabel]})` }
      ];
    });
  }

  private search(): void {
    this.eaTableLoading = true;
    this.viewByCompanyFormService.getViewByCompanyData(this.searchObject).subscribe((results) => {
      if (!!results[0].staffPlanningViewByCompanyTableOutput) {
        // Chart
        this.initChartData(results[0].staffPlanningViewByCompanyTableOutput);

        // Employee Availability table
        this.setEmployeeAvailabilityTable(results[0].staffPlanningViewByCompanyTableOutput);

        this.eaTableLoading = false;
      }
    });
  }

  /******************
   * Initialize chart
   *****************/

  private initChartData(staffPlanningViewByCompanyTableOutput: StaffPlanningViewByCompanyTableOutput[]): void {
    const radix = 10;
    const dataset: BarChartDataset = {
      data: []
    };
    staffPlanningViewByCompanyTableOutput.forEach((output) => {
      if (!!dataset.data) {
        // dataset.label = output.siteName;
        if (!!output.availabilityHours) {
          dataset.data.push(Number.parseInt(output.availabilityHours.split(':')[0], radix));
        } else {
          dataset.data.push(0);
        }
      }
      if (!!this.chartData && !!this.chartData.labels && !!output.siteName) {
        this.chartData.labels.push(output.siteName);
      }
    });

    if (!!this.chartData.datasets) {
      this.chartData.datasets.push(dataset);
    }

    this.chartData.datasets.forEach((set) => {
      set.backgroundColor = '#006ea9';
      set.borderColor = '#006ea9';
    });

    this.data = cloneDeep(this.chartData);
  }

  private initChartOptions(): void {
    this.chartOptions = {
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
      }
    };
  }

  /**************
   * Set EA table
   *************/

  private setEmployeeAvailabilityTable(results: StaffPlanningViewByCompanyTableOutput[]): void {
    const sitesLabel = `${this.getComponentName()}.sites`;
    const eaLabel = `${this.getComponentName()}.employeeAvailability`;
    const hoursLabel = `${this.getComponentName()}.hours`;
    this.translateService.get([sitesLabel, eaLabel, hoursLabel]).subscribe((labels) => {
      let tableJSON = '[';

      let counter = 0;
      results.forEach((res) => {
        const keys: string[] = [];
        const values: string[] = [];
        counter++;
        if (!!res.codeQualif) {
          Object.keys(res.codeQualif).forEach((key) => {
            const col: TableColumn = { field: `${key} (${labels[hoursLabel]})` };
            this.employeeAvailabilityTableCols.push(col); // sites, empAvailability, codeQualif(s)
            this.eaTableColsByCodeQualif.push(col); // codeQualif(s)

            keys.push(key);
          });
          Object.values(res.codeQualif).forEach((value) => {
            values.push(value as string);
          });
        }
        this.employeeAvailabilityTableCols.forEach((col) => {
          col.alignment = 'left';
        });
        let json = `{"${labels[sitesLabel]}": "${res.siteName}",`;
        json += ` "${labels[eaLabel]} (${labels[hoursLabel]})": "${res.availabilityHours}",`;
        json += ` "${keys[0]} (${labels[hoursLabel]})": "${values[0]}",`;
        json += ` "siteId": "${res.siteId}"`;
        if (keys.length >= 1) {
          for (let i = 1; i < keys.length; i++) {
            const pairing = `,"${keys[i]} (${labels[hoursLabel]})": "${values[i]}"`;
            json = `${json}${pairing}`;
          }
        }
        json = `${json}}`;
        tableJSON = counter === results.length ? `${tableJSON}${json}` : `${tableJSON}${json},`;
      });
      tableJSON = `${tableJSON}]`;

      this.employeeAvailabilityTable = this.serializationService.deserialize(tableJSON);
    });
  }

  /*************************************
   * Employee Availability table actions
   ************************************/

  public openViewBySite() {
    if (!!this.selectedEA && this.selectedEA.length === 1) {
      const componentData: StaffPlanningInput = {
        startDate: this.searchObject.startDate,
        endDate: this.searchObject.endDate
      };
      componentData.siteId = this.selectedEA[0].siteId;
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.HR_EMPLOYEE_PLANNING_FORM,
        openMode: ComponentOpenMode.Read
      };
      componentData.siteName = this.sites.filter((site) => site.value === `${componentData.siteId}`)[0].label;

      if (!!this.searchObject.companyId) {
        componentData.companyId = this.searchObject.companyId;
        componentData.companyName = this.searchObject.companyName;
      }
      data.objectId = this.serializationService.serialize(componentData);
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  /****************
   * Helper methods
   ***************/

  private getNumberOfDays(startDate: Date, endDate: Date): number {
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
    const milisecondsInASecond = 1000;

    const oneDayMs = milisecondsInASecond * secondsInAMinute * minutesInAnHour * hoursInADay;

    const startDateMS = new Date(startDate).getTime();
    const endDateMS = new Date(endDate).getTime();

    const differenceMS = endDateMS - startDateMS;

    return Math.round(differenceMS / oneDayMs);
  }
}
