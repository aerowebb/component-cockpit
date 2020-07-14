import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogControlSimulationModule } from '../../../shared/components/dialog-control-simulation/dialog-control-simulation.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { ToolsMaintenanceSearchModule } from '../tools-maintenance-search/tools-maintenance-search.module';

import { ToolsMaintenanceStatusFormComponent } from './form/tools-maintenance-status-form.component';
import { ToolsMaintenanceStatusFormService } from './form/tools-maintenance-status-form.service';
import { ToolsMaintenanceStatusSearchComponent } from './search/tools-maintenance-status-search.component';
import { ToolsMaintenanceStatusSearchService } from './search/tools-maintenance-status-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  CheckboxModule,
  TableModule,
  ChartModule,
  SplitButtonModule,
  SelectButtonModule,
  CalendarModule,
  ModalModule,
  DialogControlSimulationModule,
  ManageSearchCriteriaModule,
  ToolsMaintenanceSearchModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [ToolsMaintenanceStatusFormComponent, ToolsMaintenanceStatusSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ToolsMaintenanceStatusFormService, ToolsMaintenanceStatusSearchService];

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
export class ToolsMaintenanceStatusModule {}
