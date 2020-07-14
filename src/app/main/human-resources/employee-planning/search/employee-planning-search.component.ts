import { Component, OnInit } from '@angular/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { StaffPlanningInput } from '../../../../shared/types/api-input-types/bidt-employee/staff-planning-input.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { NumberUtils } from '../../../../shared/utils/number-utils';

import { EmployeePlanningSearchService } from './employee-planning-search.service';

@Component({
  selector: 'aw-employee-planning-search',
  styleUrls: ['./employee-planning-search.component.scss'],
  templateUrl: './employee-planning-search.component.html'
})
export class EmployeePlanningSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  // HMSMs constants
  public static readonly daysInAWeek: number = 7;
  public static readonly hoursInADay: number = 24;
  public static readonly minutesInAnHour: number = 60;
  public static readonly secondsInAMinute: number = 60;
  public static readonly milisecondsInASecond: number = 1000;
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.EMPLOYEE_PLANNING_SEARCH_CRITERIA_ID;
  public component: typeof EmployeePlanningSearchComponent;
  private readonly radix = 10;
  public milisecondsInADay: number;

  // Search criteria
  public searchObject: StaffPlanningInput;

  public companyId?: number;
  public siteId?: string;
  public warehouseId?: number;
  public qualificationId?: number;

  // Dropdowns
  public companies: LabelValue<string>[];
  public sites: LabelValue<string>[];
  public warehouses: LabelValue<number>[];
  public qualifications: LabelValue<string>[];
  public criteriaName: string | undefined;
  public criteriaToSave: StaffPlanningInput;
  public criteriaLoaded: StaffPlanningInput;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly employeePlanningSearchService: EmployeePlanningSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.component = EmployeePlanningSearchComponent;

    this.milisecondsInADay =
      this.component.hoursInADay *
      this.component.minutesInAnHour *
      this.component.secondsInAMinute *
      this.component.milisecondsInASecond;

    this.init();
    this.loadDropdowns();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return ComponentConstants.HR_EMPLOYEE_PLANNING_SEARCH;
  }

  private init(): void {
    // Search criteria
    this.searchObject = {
      startDate: new Date()
    };

    if (!!this.searchObject.startDate) {
      this.searchObject.startDate.setHours(0);
      this.searchObject.startDate.setMinutes(0);
      this.searchObject.startDate.setSeconds(0);
      this.searchObject.startDate.setMilliseconds(0);
      const fifteen = 15;
      const endDate = this.searchObject.startDate.getTime() + fifteen * this.milisecondsInADay;
      if (!!endDate) {
        this.searchObject.endDate = new Date(endDate);
      }
    }

    this.companyId = undefined;
    this.siteId = undefined;
    this.warehouseId = undefined;
    this.qualificationId = undefined;

    // Dropdowns
    this.companies = [];
    this.sites = [];
    this.warehouses = [];
    this.qualifications = [];
  }

  /***********
   * Dropdowns
   **********/

  private loadDropdowns(): void {
    this.loadCompany();
    this.loadQualifications();
  }

  private loadCompany(): void {
    this.employeePlanningSearchService.findBidtCompanyByCriteria({}).subscribe((results) => {
      this.companies = results;
    });
  }

  public onChangeCompany(): void {
    if (!!this.companyId) {
      const input: BidtSiteDTO = {
        bidtCompanyId: this.companyId
      };
      this.employeePlanningSearchService.findByCriteriaSP(input).subscribe((results) => {
        this.sites = results || [];
        if (this.sites.length === 1 && this.sites[0].value !== null && this.sites[0].value !== undefined) {
          this.siteId = this.sites[0].value;
        } else if (this.sites.length > 1 && this.criteriaLoaded.companyId !== this.companyId) {
          this.siteId = undefined;
        }

        this.loadWarehousesBySite();
      });
    } else {
      this.siteId = undefined;
      this.loadWarehousesBySite();
    }
  }

  public loadWarehousesBySite(): void {
    this.warehouses = [];
    if (!!this.siteId) {
      const siteId = this.siteId.toString();
      this.employeePlanningSearchService.findWarehousesBySite(siteId).subscribe((results: BidtWarehouseDTO[]) => {
        if (!!results) {
          this.warehouses = results.map((bidtWarehouseDTO: BidtWarehouseDTO) => {
            return {
              label: bidtWarehouseDTO.whName as string,
              value: bidtWarehouseDTO.wareHouseId as number
            };
          });
          if (this.warehouses.length === 1) {
            this.warehouseId = this.warehouses[0].value;
          }
        }
      });
    } else {
      this.warehouseId = undefined;
    }
  }

  private loadQualifications(): void {
    this.employeePlanningSearchService.findByCriteriaQualification().subscribe((results) => {
      this.qualifications = results || [];
    });
  }

  /************
   * Go to form
   ************/

  public search(): void {
    if (!!this.searchObject.startDate && !!this.searchObject.endDate && !!this.companyId) {
      if (this.siteId !== null && this.siteId !== undefined) {
        this.viewBySiteForm();
      } else {
        this.viewByCompanyForm();
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  private viewByCompanyForm(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.HR_VIEW_BY_COMPANY_FORM,
      openMode: ComponentOpenMode.Read
    };
    this.navigate(data);
  }

  private viewBySiteForm(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.HR_EMPLOYEE_PLANNING_FORM,
      openMode: ComponentOpenMode.Read
    };
    this.navigate(data);
  }

  private navigate(data: PageComponentData): void {
    const componentData: StaffPlanningInput = this.searchObject;
    if (!!this.companyId) {
      this.searchObject.companyId = this.companyId;
      const company = this.companies.find((comp) => Number.parseInt(comp.value, this.radix) === Number(this.companyId));
      if (!!company) {
        this.searchObject.companyName = company.label;
      }
    } else {
      this.searchObject.companyId = undefined;
      this.searchObject.companyName = undefined;
    }
    if (!!this.siteId) {
      this.searchObject.siteId = Number.parseInt(this.siteId, this.radix);
      const site = this.sites.find((s) => s.value === this.siteId);
      if (!!site) {
        this.searchObject.siteName = site.label;
      }
    } else {
      this.searchObject.siteId = undefined;
      this.searchObject.siteName = undefined;
    }
    if (!!this.warehouseId) {
      this.searchObject.warehouseId = this.warehouseId;
      const warehouse = this.warehouses.find((s) => s.value === this.warehouseId);
      if (!!warehouse) {
        this.searchObject.warehouseName = warehouse.label;
      }
    } else {
      this.searchObject.warehouseId = undefined;
      this.searchObject.warehouseName = undefined;
    }
    this.searchObject.qualificationId = !!this.qualificationId ? this.qualificationId : undefined;
    data.objectId = this.serializationService.serialize(componentData);
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // Reset search criteria
  public resetSearchCriteria(): void {
    this.searchObject = {};
    this.companyId = undefined;
    this.siteId = undefined;
    this.warehouseId = undefined;
    this.qualificationId = undefined;
    this.criteriaName = undefined;
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: StaffPlanningInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    this.criteriaLoaded = _cloneDeep(criteria);
    this.companyId = criteria.companyId;
    this.siteId = NumberUtils.toString(criteria.siteId);
    this.warehouseId = criteria.warehouseId;
    this.qualificationId = criteria.qualificationId;
    this.criteriaName = event.name;
    this.onChangeCompany();
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: StaffPlanningInput = {
      companyId: this.companyId,
      siteId: Number.parseInt(!!this.siteId ? this.siteId : '', this.radix),
      warehouseId: this.warehouseId,
      qualificationId: this.qualificationId
    };
    this.criteriaToSave = criteriaToSave;
  }
}
