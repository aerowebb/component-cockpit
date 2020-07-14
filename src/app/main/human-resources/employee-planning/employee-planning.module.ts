import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { SchedulerModule } from '../../../shared/components/scheduler/scheduler.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { EmployeePlanningSearchComponent } from './search/employee-planning-search.component';
import { EmployeePlanningSearchService } from './search/employee-planning-search.service';
import { ViewByCompanyFormComponent } from './view-by-company-form/view-by-company-form.component';
import { ViewByCompanyFormService } from './view-by-company-form/view-by-company-form.service';
import { EmployeePlanningFormComponent } from './view-by-site-form/employee-planning-form.component';
import { EmployeePlanningFormService } from './view-by-site-form/employee-planning-form.service';
import { EmployeePlanningLegendDialogComponent } from './view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  TableModule,
  CalendarModule,
  OverlayPanelModule,
  ChartModule,
  SelectButtonModule,
  SliderModule
];

const INTERNAL_MODULES = [SchedulerModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [EmployeePlanningLegendDialogComponent];

const DYNAMIC_COMPONENTS = [EmployeePlanningFormComponent, EmployeePlanningSearchComponent, ViewByCompanyFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [EmployeePlanningFormService, EmployeePlanningSearchService, ViewByCompanyFormService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    InputTextareaModule,
    ManageSearchCriteriaModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES, DatePipe]
})
export class EmployeePlanningModule {}
