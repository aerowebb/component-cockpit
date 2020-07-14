import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { UnitConversionMatrixApi } from '../../../shared/api/unit-matrix-conversion.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchEvolutionModule } from '../../../shared/components/dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchFleetModule } from '../../../shared/components/dialog-search-fleet/dialog-search-fleet.module';
import { DialogSearchTaskModule } from '../../../shared/components/dialog-search-task/dialog-search-task.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { SchedulerModule } from '../../../shared/components/scheduler/scheduler.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { UnitConversionMatrixService } from '../../engineering-management/unit-conversion-matrix/unit-conversion-matrix.service';
import { ProcurementRequestsTableModule } from '../procurement-request/procurement-requests-table.module';

import { AssetRequiredAvailabilitiesForecastFormDialogComponent } from './form/assets-required-availabilities/assets-required-availabilities.component';
import { DefectForecastFormDialogComponent } from './form/defect-dialog/defect-dialog.component';
import { EventGroupForecastFormDialogComponent } from './form/event-group-dialog/event-group-dialog.component';
import { FilterListForecastFormComponent } from './form/forecast-filter-list/forecast-filter-list.component';
import { ForecastFormComponent } from './form/forecast-form.component';
import { ForecastFormService } from './form/forecast-form.service';
import { GlobalFilterForecastFormComponent } from './form/forecast-global-filter/forecast-global-filter.component';
import { LegendForecastFormDialogComponent } from './form/forecast-legend-dialog/forecast-legend-dialog.component';
import { ForecastProjectHeaderDialogComponent } from './form/forecast-project-header-dialog/forecast-project-header-dialog.component';
import { PlannedDateForecastFormDialogComponent } from './form/planned-date-dialog/planned-date-dialog.component';
import { ResourcesAvailabilitiesForecastFormDialogComponent } from './form/resources-availabilities/resources-availabilities.component';
import { ScheduledEventForecastFormDialogComponent } from './form/scheduled-event-dialog/scheduled-event-dialog.component';
import { UnscheduledEventForecastFormDialogComponent } from './form/unscheduled-event-dialog/unscheduled-event-dialog.component';
import { WorkPackageForecastFormDialogComponent } from './form/work-package-dialog/work-package-dialog.component';
import { ForecastSearchComponent } from './search/forecast-search.component';
import { ForecastSearchService } from './search/forecast-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  MultiSelectModule,
  OverlayPanelModule,
  SelectButtonModule,
  SliderModule,
  SplitButtonModule,
  TableModule,
  TooltipModule
];

const INTERNAL_MODULES = [
  ProcurementRequestsTableModule,
  DialogSearchEquipmentModule,
  DialogSearchEvolutionModule,
  DialogSearchFleetModule,
  DialogSearchTaskModule,
  ModalModule,
  SchedulerModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  AssetRequiredAvailabilitiesForecastFormDialogComponent,
  DefectForecastFormDialogComponent,
  EventGroupForecastFormDialogComponent,
  FilterListForecastFormComponent,
  GlobalFilterForecastFormComponent,
  LegendForecastFormDialogComponent,
  PlannedDateForecastFormDialogComponent,
  ResourcesAvailabilitiesForecastFormDialogComponent,
  ScheduledEventForecastFormDialogComponent,
  UnscheduledEventForecastFormDialogComponent,
  WorkPackageForecastFormDialogComponent,
  ForecastProjectHeaderDialogComponent
];

const DYNAMIC_COMPONENTS = [ForecastFormComponent, ForecastSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ForecastFormService, ForecastSearchService, UnitConversionMatrixService, UnitConversionMatrixApi];

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
export class ForecastModule {}
