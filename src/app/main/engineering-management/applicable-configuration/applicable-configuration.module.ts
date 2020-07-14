import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchQualificationModule } from '../../../shared/components/dialog-search-qualification/dialog-search-qualification.module';
import { DialogSearchRatingModule } from '../../../shared/components/dialog-search-rating/dialog-search-rating.module';
import { DialogStatusModule } from '../../../shared/components/dialog-status/dialog-status.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ApplicableConfigurationFormMhiaelService } from './form/applicable-configuration-form-mhiael.service';
import { ApplicableConfigurationFormComponent } from './form/applicable-configuration-form.component';
import { ApplicableConfigurationFormService } from './form/applicable-configuration-form.service';
import { DialogAssociatedQualificationComponent } from './form/dialog-associated-qualification/dialog-associated-qualification.component';
import { DialogControlIpcDataComponent } from './form/dialog-control-ipc-data/dialog-control-ipc-data.component';
import { DialogDisassemblyComponent } from './form/dialog-disassembly/dialog-disassembly.component';
import { DialogDocumentConfigComponent } from './form/dialog-document-config/dialog-document-config.component';
import { DialogEvolutionInterdependenceComponent } from './form/dialog-evolution-interdependence/dialog-evolution-interdependence.component';
import { DialogFollowedRatingComponent } from './form/dialog-followed-rating/dialog-followed-rating.component';
import { DialogOemPartnerComponent } from './form/dialog-oem-partner/dialog-oem-partner.component';
import { DialogRemovalOrderComponent } from './form/dialog-removal-order/dialog-removal-order.component';
import { ApplicableConfigurationSearchComponent } from './search/applicable-configuration-search.component';
import { ApplicableConfigurationSearchService } from './search/applicable-configuration-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  PrimeNgTableModule,
  TooltipModule,
  TreeModule,
  SelectButtonModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogSearchQualificationModule,
  DialogStatusModule,
  DialogTableModule,
  DynamicAttributesModule,
  ModalModule,
  StatusUpdateHistoryModule,
  TableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogAssociatedQualificationComponent,
  DialogControlIpcDataComponent,
  DialogDisassemblyComponent,
  DialogDocumentConfigComponent,
  DialogEvolutionInterdependenceComponent,
  DialogOemPartnerComponent,
  DialogRemovalOrderComponent,
  DialogFollowedRatingComponent
];

const DYNAMIC_COMPONENTS = [ApplicableConfigurationFormComponent, ApplicableConfigurationSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  ApplicableConfigurationFormService,
  ApplicableConfigurationSearchService,
  ApplicableConfigurationFormMhiaelService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DialogSearchRatingModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class ApplicableConfigurationModule {}
