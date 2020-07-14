import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchOperationalConfigModule } from '../../shared/components/dialog-search-operational-config/dialog-search-operational-config.module';
import { DialogStatusModule } from '../../shared/components/dialog-status/dialog-status.module';
import { DialogWorkPackageModule } from '../../shared/components/dialog-work-package/dialog-work-package.module';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { TableModule } from '../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';
import { FunctionalLocationSearchService } from '../engineering-management/functional-location-search/functional-location-search.service';

import { DialogFlightAssetPopupComponent } from './mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component';
import { DialogFlightPopupComponent } from './mission-form/dialog-flights-popup/dialog-flights-popup.component';
import { MissionFormComponent } from './mission-form/mission-form.component';
import { MissionFormService } from './mission-form/mission-form.service';
import { MissionTableRemainingValuesComponent } from './mission-form/mission-table-remaining-values/mission-table-remaining-values.component';
import { MissionSearchComponent } from './mission-search/mission-search.component';
import { MissionSearchService } from './mission-search/mission-search.service';
import { DialogOperationComponent } from './operation-search/dialog-operation/dialog-operation.component';
import { OperationSearchComponent } from './operation-search/operation-search.component';
import { OperationSearchService } from './operation-search/operation-search.service';

const OTHER_LIBS_MODULES = [
  CalendarModule,
  ChartModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  RadioButtonModule,
  SplitButtonModule,
  PrimeNgTableModule,
  TooltipModule,
  TriStateCheckboxModule,
  KeyFilterModule,
  MessageModule
];

const INTERNAL_MODULES = [DialogSearchOperationalConfigModule, TableModule];

const COMPONENTS = [DialogFlightPopupComponent, DialogFlightAssetPopupComponent, DialogOperationComponent];

const DYNAMIC_COMPONENTS = [
  OperationSearchComponent,
  MissionSearchComponent,
  MissionFormComponent,
  MissionTableRemainingValuesComponent
];

const SERVICES = [OperationSearchService, MissionSearchService, MissionFormService, FunctionalLocationSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ModalModule,
    ComponentSidebarModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    DialogStatusModule,
    ...OTHER_LIBS_MODULES,
    ...INTERNAL_MODULES,
    DialogWorkPackageModule
  ],
  providers: [...SERVICES, DatePipe]
})
export class FlightOperationsModule {}
