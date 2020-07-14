import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/components/table/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule, SliderModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { RunwaySchedulingApi } from '../../../shared/api/runway-scheduling.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { SchedulerModule } from '../../../shared/components/scheduler/scheduler.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { FunctionalLocationAssignmentService } from '../../fleet-management/functional-location-assignment/functional-location-assignment.service';
import { FlightFormService } from '../flight/form/flight/flight-form.service';
import { SearchService } from '../flight/search/search.service';
import { OperationSearchService } from '../operation-search/operation-search.service';

import { RunwaySchedulingFormComponent } from './form/runway-scheduling-form.component';
import { SchedulingService } from './scheduling.service';

/******************************************************************************
 * Modules
 *************************************************************************** */
const PRIMENG_MODULES = [TableModule, TooltipModule, CalendarModule, DropdownModule];

const MATERIAL_MODULES = [MatProgressBarModule];

const EXTERNAL_MODULES = [SchedulerModule, SliderModule, SelectButtonModule];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [RunwaySchedulingFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  SchedulingService,
  SearchService,
  OperationSearchService,
  FunctionalLocationAssignmentService,
  FlightFormService,
  RunwaySchedulingApi
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DialogSearchCustomerModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES,
    ...PRIMENG_MODULES,
    ...MATERIAL_MODULES
  ],
  providers: [...SERVICES, DatePipe]
})
export class RunwaySchedulingModule {}
