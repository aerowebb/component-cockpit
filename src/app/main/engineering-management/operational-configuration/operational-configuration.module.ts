import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule, FileUploadModule, KeyFilterModule, MessageModule, TreeTableModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchFunctionalLocationModule } from '../../../shared/components/dialog-search-functional-location/dialog-search-functional-location.module';
import { DialogSearchItemModule } from '../../../shared/components/dialog-search-item/dialog-search-item.module';
import { DialogSearchModelModule } from '../../../shared/components/dialog-search-model/dialog-search-model.module';
import { DialogStatusModule } from '../../../shared/components/dialog-status/dialog-status.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { SearchService } from '../../flight-operations/flight/search/search.service';
import { FunctionalLocationFormService } from '../functional-location-form/functional-location-form.service';
import { FunctionalLocationSearchService } from '../functional-location-search/functional-location-search.service';

import { OperationalConfigurationFormComponent } from './form/operational-configuration-form.component';
import { OperationalConfigurationFormService } from './form/operational-configuration-form.service';
import { OperationalConfigurationSearchComponent } from './search/operational-configuration-search.component';
import { OperationalConfigurationSearchService } from './search/operational-configuration-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */
const PRIMENG_MODULES = [
  TreeTableModule,
  FileUploadModule,
  KeyFilterModule,
  TooltipModule,
  CalendarModule,
  DropdownModule,
  CheckboxModule
];

const EXTERNAL_MODULES = [];

const INTERNAL_MODULES = [
  DialogStatusModule,
  DialogSearchItemModule,
  DialogSearchModelModule,
  DialogSearchFunctionalLocationModule,
  ModalModule,
  MessageModule,
  TableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [OperationalConfigurationSearchComponent, OperationalConfigurationFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  SearchService,
  FunctionalLocationFormService,
  FunctionalLocationSearchService,
  OperationalConfigurationFormService,
  OperationalConfigurationSearchService
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
    ...PRIMENG_MODULES
  ],
  providers: [...SERVICES, DatePipe]
})
export class OperationalConfigurationModule {}
