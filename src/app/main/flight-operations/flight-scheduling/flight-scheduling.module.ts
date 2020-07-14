import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/components/table/table';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { SchedulerModule } from '../../../shared/components/scheduler/scheduler.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { FlightSchedulingFormComponent } from './form/flight-scheduling-form.component';
import { FlightSchedulingFormService } from './form/flight-scheduling-form.service';
import { FlightSchedulingSearchComponent } from './search/flight-scheduling-search.component';
import { FlightSchedulingSearchService } from './search/flight-scheduling-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */
const PRIMENG_MODULES = [TableModule, TooltipModule, CalendarModule, DropdownModule];

const EXTERNAL_MODULES = [];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  FlightSchedulingFormComponent,
  FlightSchedulingSearchComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [FlightSchedulingFormService, FlightSchedulingSearchService];

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
    SchedulerModule,
    SliderModule
  ],
  providers: [...SERVICES, DatePipe]
})
export class FlightSchedulingModule {}
