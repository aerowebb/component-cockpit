import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogControlSimulationModule } from '../../../shared/components/dialog-control-simulation/dialog-control-simulation.module';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchTaskModule } from '../../../shared/components/dialog-search-task/dialog-search-task.module';
import { DialogWorkPackageModule } from '../../../shared/components/dialog-work-package/dialog-work-package.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { WorkPackageListModule } from '../../../shared/components/work-package-list/work-package-list.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { ToolsMaintenanceSearchModule } from '../tools-maintenance-search/tools-maintenance-search.module';

import { DialogInterdependenceDataComponent } from './form/dialog-interdependence-data/dialog-interdependence-data.component';
import { DialogLastTaskApplicationsComponent } from './form/dialog-last-task-applications/dialog-last-task-applications.component';
import { DialogScheduleMaintenanceCalendarComponent } from './form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component';
import { DialogScheduleMaintenanceTableFullScreenComponent } from './form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component';
import { DialogTaskCountersComponent } from './form/dialog-task-counters/dialog-task-counters.component';
import { MaintenanceTableFiltersComponent } from './form/maintenance-table-filters/maintenance-table-filters.component';
import { ToolsMaintenancePlanningFormComponent } from './form/tools-maintenance-planning-form.component';
import { ToolsMaintenancePlanningFormService } from './form/tools-maintenance-planning-form.service';
import { ToolsReportPopupFormComponent } from './form/tools-report-popup-form/tools-report-popup-form.component';
import { ToolsMaintenancePlanningSearchComponent } from './search/tools-maintenance-planning-search.component';
import { ToolsMaintenancePlanningSearchService } from './search/tools-maintenance-planning-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  ChartModule,
  DragDropModule,
  DropdownModule,
  KeyFilterModule,
  MessageModule,
  OverlayPanelModule,
  RadioButtonModule,
  SelectButtonModule,
  SplitButtonModule,
  TableModule,
  TooltipModule,
  TreeTableModule,
  DialogControlSimulationModule,
  TooltipModule,
  DropdownModule,
  CheckboxModule,
  TableModule,
  ChartModule,
  SplitButtonModule,
  SelectButtonModule,
  CalendarModule,
  ManageSearchCriteriaModule,
  ToolsMaintenanceSearchModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogSearchCustomerModule,
  WorkPackageListModule,
  DialogWorkPackageModule,
  ModalModule,
  DialogSearchTaskModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogInterdependenceDataComponent,
  DialogLastTaskApplicationsComponent,
  DialogScheduleMaintenanceCalendarComponent,
  DialogScheduleMaintenanceTableFullScreenComponent,
  DialogTaskCountersComponent,
  MaintenanceTableFiltersComponent,
  ToolsReportPopupFormComponent
];

const DYNAMIC_COMPONENTS = [ToolsMaintenancePlanningFormComponent, ToolsMaintenancePlanningSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ToolsMaintenancePlanningFormService, ToolsMaintenancePlanningSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ManageSearchCriteriaModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class ToolsMaintenancePlanningModule {}
