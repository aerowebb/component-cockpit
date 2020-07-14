import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogStatusModule } from '../../../shared/components/dialog-status/dialog-status.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ContactFormComponent } from './form/contact-form.component';
import { ContactFormService } from './form/contact-form.service';
import { ContactSearchComponent } from './search/contact-search.component';
import { ContactSearchService } from './search/contact-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CheckboxModule, InputTextareaModule, KeyFilterModule, PrimeNgTableModule, TooltipModule];

const INTERNAL_MODULES = [DialogSearchCustomerModule, DialogStatusModule, ModalModule, TableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const DYNAMIC_COMPONENTS = [ContactFormComponent, ContactSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ContactFormService, ContactSearchService];

@NgModule({
  declarations: [...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class ContactModule {}
