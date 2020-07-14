import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogValidateTechnicalConditionComponent } from './form/dialog-validate-technical-condition/dialog-validate-technical-condition.component';
import { TechnicalReceiptFormComponent } from './form/technical-receipt-form.component';
import { TechnicalReceiptFormService } from './form/technical-receipt-form.service';
import { TechnicalReceiptSearchComponent } from './search/technical-receipt-search.component';
import { TechnicalReceiptSearchService } from './search/technical-receipt-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  TableModule,
  CheckboxModule,
  SelectButtonModule,
  CalendarModule,
  ManageSearchCriteriaModule,
  InputSwitchModule,
  ComponentSidebarModule,
  ChartModule,
  ProgressBarModule,
  ModalModule
];

const INTERNAL_MODULES = [DialogSearchMaterialModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  TechnicalReceiptFormComponent,
  TechnicalReceiptSearchComponent,
  DialogValidateTechnicalConditionComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [TechnicalReceiptFormService, TechnicalReceiptSearchService];

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
export class TechnicalReceiptModule {}
