import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SplitButtonModule } from '../../../../../node_modules/primeng/splitbutton';
import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchEmployeeModule } from '../../../shared/components/dialog-search-employee/dialog-search-employee.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { StaffAlertFormComponent } from './form/staff-alert-form.component';
import { StaffAlertFormService } from './form/staff-alert-form.service';
import { StaffAlertSearchComponent } from './search/staff-alert-search.component';
import { StaffAlertSearchService } from './search/staff-alert-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  DropdownModule,
  TableModule,
  ChartModule,
  TooltipModule,
  SelectButtonModule,
  SplitButtonModule,
  KeyFilterModule,
  MessageModule
];

const INTERNAL_MODULES = [DialogTableModule, DynamicAttributesModule, ModalModule, DialogSearchEmployeeModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [StaffAlertSearchComponent, StaffAlertFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [StaffAlertSearchService, StaffAlertFormService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class StaffAlertModule {}
