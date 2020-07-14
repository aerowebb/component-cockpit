import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { BrasidasCrmApi } from '../../../brasidas/brasidas-crm.api';
import { BrasidasCrmFormService } from '../../../brasidas/brasidas-crm.service';
import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { OperationalConfigurationSetupApi } from '../../../shared/api/operational-configuration-setup.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchAircraftModule } from '../../../shared/components/dialog-search-aircraft/dialog-search-aircraft.module';
import { DialogSearchMissionModule } from '../../../shared/components/dialog-search-mission/dialog-search-mission.module';
import { DialogSearchOperationalConfigModule } from '../../../shared/components/dialog-search-operational-config/dialog-search-operational-config.module';
import { DialogUpdateTaskApplicationComponent } from '../../../shared/components/dialog-update-task-application/dialog-update-task-application.component';
import { DialogWorkPackageModule } from '../../../shared/components/dialog-work-package/dialog-work-package.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { WorkPackageListModule } from '../../../shared/components/work-package-list/work-package-list.module';
import { SettingsFormService } from '../../administration/settings/form/settings-form.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { FunctionalLocationSearchService } from '../../engineering-management/functional-location-search/functional-location-search.service';
import { InstallAssetService } from '../../fleet-management/install-asset/install-asset.service';
import { WorkPackageFormService } from '../../maintenance/work-package/form/work-package-form.service';
import { WorkPackageSearchService } from '../../maintenance/work-package/search/work-package-search.service';

import { CrewComponent } from './form/flight/crew/crew.component';
import { DialogCrewMemberComponent } from './form/flight/crew/dialog-crew-member/dialog-crew-member.component';
import { DialogAddDefectComponent } from './form/flight/dialog-add-defect/dialog-add-defect.component';
import { DialogEngineDatesComponent } from './form/flight/engines/dialog-engine-dates/dialog-engine-dates.component';
import { DialogEngineComponent } from './form/flight/engines/dialog-engine/dialog-engine.component';
import { EnginesComponent } from './form/flight/engines/engines.component';
import { FlightFormComponent } from './form/flight/flight-form.component';
import { FlightFormService } from './form/flight/flight-form.service';
import { FlightMeasuresComponent } from './form/flight/flight-measures/flight-measures.component';
import { FuelComponent } from './form/flight/fuel/fuel.component';
import { GonogoValidationStatusComponent } from './form/flight/gonogo-validation-status/gonogo-validation-status.component';
import { GonogoValidationFormComponent } from './form/flight/gonogo-validation/gonogo-validation-form.component';
import { GonogoValidationFormService } from './form/flight/gonogo-validation/gonogo-validation-form.service';
import { HumsComponent } from './form/flight/hums/hums.component';
import { DialogMeasureComponent } from './form/flight/other-measures/dialog-measure/dialog-measure.component';
import { OtherMeasuresComponent } from './form/flight/other-measures/other-measures.component';
import { DialogAddLoadComponent } from './form/flight/passengers-loads/dialog-add-load/dialog-add-load.component';
import { DialogEditLoadComponent } from './form/flight/passengers-loads/dialog-edit-load/dialog-edit-load.component';
import { PassengersLoadsComponent } from './form/flight/passengers-loads/passengers-loads.component';
import { PostFlightRecordsComponent } from './form/flight/post-flight-records/post-flight-records.component';
import { ReplenishmentsValidationComponent } from './form/flight/replenishments-validation/replenishments-validation.component';
import { DialogAfterFlightQuantityComponent } from './form/line-maintenance/dialog-after-flight-quantity/dialog-after-flight-quantity.component';
import { DialogEngineOilReplenishmentMeasureComponent } from './form/line-maintenance/dialog-engine-oil-replenishment-measure/dialog-engine-oil-replenishment-measure.component';
import { DialogReplenishmentMeasureComponent } from './form/line-maintenance/dialog-replenishment-measure/dialog-replenishment-measure.component';
import { EngineOilReplenishmentComponent } from './form/line-maintenance/engine-oil-replenishment/engine-oil-replenishment.component';
import { LineMaintenanceFormComponent } from './form/line-maintenance/line-maintenance-form.component';
import { LineMaintenanceFormService } from './form/line-maintenance/line-maintenance-form.service';
import { OperationalConfigurationSettlingComponent } from './form/line-maintenance/operational-configuration-settling/operational-configuration-settling.component';
import { OperationalConfigurationSetupService } from './form/line-maintenance/operational-configuration-settling/operational-configuration-setup.service';
import { ReplenishmentsComponent } from './form/line-maintenance/replenishments/replenishments.component';
import { FlightSearchComponent } from './search/flight-search.component';
import { LineMaintenanceSearchComponent } from './search/line-maintenance-search.component';
import { SearchService } from './search/search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  ChartModule,
  CheckboxModule,
  DropdownModule,
  OverlayPanelModule,
  SplitButtonModule,
  PrimeNgTableModule,
  TooltipModule,
  TreeTableModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogSearchAircraftModule,
  DialogSearchMissionModule,
  DialogSearchOperationalConfigModule,
  DialogWorkPackageModule,
  StatusUpdateHistoryModule,
  ModalModule,
  TableModule,
  WorkPackageListModule,
  ManageSearchCriteriaModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  CrewComponent,
  DialogAddDefectComponent,
  DialogAfterFlightQuantityComponent,
  DialogAddLoadComponent,
  DialogCrewMemberComponent,
  DialogEditLoadComponent,
  DialogEngineComponent,
  DialogEngineDatesComponent,
  DialogEngineOilReplenishmentMeasureComponent,
  DialogMeasureComponent,
  DialogReplenishmentMeasureComponent,
  DialogUpdateTaskApplicationComponent,
  EngineOilReplenishmentComponent,
  EnginesComponent,
  FlightMeasuresComponent,
  GonogoValidationStatusComponent,
  FuelComponent,
  HumsComponent,
  OtherMeasuresComponent,
  PassengersLoadsComponent,
  PostFlightRecordsComponent,
  ReplenishmentsComponent,
  ReplenishmentsValidationComponent
];

const DYNAMIC_COMPONENTS = [
  FlightFormComponent,
  FlightSearchComponent,
  GonogoValidationFormComponent,
  LineMaintenanceFormComponent,
  LineMaintenanceSearchComponent,
  OperationalConfigurationSettlingComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  FlightFormService,
  GonogoValidationFormService,
  LineMaintenanceFormService,
  SearchService,
  SettingsFormService,
  FunctionalLocationSearchService,
  InstallAssetService,
  BrasidasCrmFormService,
  OperationalConfigurationSetupService,
  WorkPackageFormService,
  WorkPackageSearchService
];

/******************************************************************************
 * API
 *************************************************************************** */

const API = [BrasidasCrmApi, OperationalConfigurationSetupApi];

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
  providers: [...API, ...SERVICES]
})
export class FlightModule {}
