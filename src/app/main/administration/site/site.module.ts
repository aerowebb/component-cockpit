import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogCapabilityComponent } from './form/dialog-capability/dialog-capability.component';
import { SiteFormComponent } from './form/site-form.component';
import { SiteFormService } from './form/site-form.service';
import { SiteSearchComponent } from './search/site-search.component';
import { SiteSearchService } from './search/site-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  KeyFilterModule,
  MessageModule,
  PrimeNgTableModule,
  TooltipModule,
  KeyFilterModule,
  MessageModule
];

const INTERNAL_MODULES = [DialogTableModule, ModalModule, TableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogCapabilityComponent];

const DYNAMIC_COMPONENTS = [SiteFormComponent, SiteSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [SiteFormService, SiteSearchService];

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
export class SiteModule {}
