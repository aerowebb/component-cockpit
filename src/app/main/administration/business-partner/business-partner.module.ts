import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogStatusModule } from '../../../shared/components/dialog-status/dialog-status.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { BusinessPartnerFormComponent } from './form/business-partner-form.component';
import { BusinessPartnerFormService } from './form/business-partner-form.service';
import { DialogBusinessPartnerBidoDocumentComponent } from './form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component';
import { DialogBusinessPartnerCusCustomerComponent } from './form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component';
import { DialogBusinessPartnerCustomerEvolutionComponent } from './form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component';
import { BusinessPartnerSearchComponent } from './search/business-partner-search.component';
import { BusinessPartnerSearchService } from './search/business-partner-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  PrimeNgTableModule,
  TooltipModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogTableModule,
  DialogStatusModule,
  DynamicAttributesModule,
  ModalModule,
  TableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogBusinessPartnerBidoDocumentComponent,
  DialogBusinessPartnerCusCustomerComponent,
  DialogBusinessPartnerCustomerEvolutionComponent
];

const DYNAMIC_COMPONENTS = [BusinessPartnerFormComponent, BusinessPartnerSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [BusinessPartnerFormService, BusinessPartnerSearchService];

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
export class BusinessPartnerModule {}
