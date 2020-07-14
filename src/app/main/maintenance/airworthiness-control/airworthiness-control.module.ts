import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
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
import { DialogWorkPackageModule } from '../../../shared/components/dialog-work-package/dialog-work-package.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { WorkPackageListModule } from '../../../shared/components/work-package-list/work-package-list.module';
import { FileService } from '../../../shared/services/file.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { EmployeeFormService } from '../../human-resources/employee-form/employee-form.service';
import { WorkOrderFormService } from '../work-order/form/work-order-form.service';
import { WorkOrdersFormService } from '../work-orders/form/work-orders-form.service';
import { DialogWorkOrderEditionModule } from '../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module';
import { DialogWorkOrderEditService } from '../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { WorkPackageFormService } from '../work-package/form/work-package-form.service';
import { WorkPackageService } from '../work-package/work-package.service';

import { AirworthinessControlForAssetFormComponent } from './form/airworthiness-control-form/airworthiness-control-for-asset-form.component';
import { AirworthinessControlForFleetFormComponent } from './form/airworthiness-control-form/airworthiness-control-for-fleet-form.component';
import { AirworthinessControlFormService } from './form/airworthiness-control-form/airworthiness-control-form.service';
import { AirworthinessTableRemainingValuesComponent } from './form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component';
import { AssetViewScopeComponent } from './form/airworthiness-control-form/asset-view-scope/asset-view-scope.component';
import { DialogAirworthinessTableFullScreenComponent } from './form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component';
import { FleetViewScopeComponent } from './form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component';
import { DialogInterdependenceDataComponent } from './form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component';
import { DialogLastTaskApplicationsComponent } from './form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component';
import { DialogScheduleMaintenanceCalendarComponent } from './form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component';
import { DialogScheduleMaintenanceTableFullScreenComponent } from './form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component';
import { DialogTaskCountersComponent } from './form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component';
import { MaintenanceTableFiltersComponent } from './form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component';
import { ScheduleMaintenanceFormComponent } from './form/schedule-maintenance-form/schedule-maintenance-form.component';
import { ScheduleMaintenanceFormService } from './form/schedule-maintenance-form/schedule-maintenance-form.service';
import { AirworthinessControlSearchComponent } from './search/airworthiness-control-search.component';
import { ScheduleMaintenanceSearchComponent } from './search/schedule-maintenance-search.component';
import { SearchService } from './search/search.service';

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
  DialogControlSimulationModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogSearchCustomerModule,
  WorkPackageListModule,
  DialogWorkPackageModule,
  ModalModule,
  DialogWorkOrderEditionModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  AirworthinessTableRemainingValuesComponent,
  AssetViewScopeComponent,
  DialogAirworthinessTableFullScreenComponent,
  DialogInterdependenceDataComponent,
  DialogLastTaskApplicationsComponent,
  DialogScheduleMaintenanceCalendarComponent,
  DialogScheduleMaintenanceTableFullScreenComponent,
  DialogTaskCountersComponent,
  FleetViewScopeComponent,
  MaintenanceTableFiltersComponent
];

const DYNAMIC_COMPONENTS = [
  AirworthinessControlForAssetFormComponent,
  AirworthinessControlForFleetFormComponent,
  AirworthinessControlSearchComponent,
  ScheduleMaintenanceFormComponent,
  ScheduleMaintenanceSearchComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  AirworthinessControlFormService,
  SearchService,
  ScheduleMaintenanceFormService,
  FileService,
  DialogWorkOrderEditService,
  WorkOrdersFormService,
  WorkPackageFormService,
  WorkPackageService,
  EmployeeFormService,
  WorkOrderFormService
];

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
export class AirworthinessControlModule {}
