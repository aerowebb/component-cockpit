import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { WorkscopeComponentApi } from '../../../shared/api/workscope-component.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ComponentCockpitOperationFormComponent } from './form/component-cockpit-operation-form.component';
import { ComponentCockpitOperationFormService } from './form/component-cockpit-operation-form.service';
import { DialogAttributeComponent } from './form/dialog-attribute/dialog-attribute.component';
import { DialogItemSelectionComponent } from './form/dialog-item-selection/dialog-item-selection.component';
import { ComponentCockpitOperationSearchComponent } from './search/component-cockpit-operation-search.component';
import { ComponentCockpitOperationSearchService } from './search/component-cockpit-operation-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  ChartModule,
  TooltipModule,
  TableModule,
  DropdownModule,
  ManageSearchCriteriaModule,
  KeyFilterModule,
  ModalModule,
  PrimeNgTableModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  ComponentCockpitOperationSearchComponent,
  ComponentCockpitOperationFormComponent,
  DialogAttributeComponent,
  DialogItemSelectionComponent
];

/******************************************************************************
 * Api's
 *************************************************************************** */

const APIS = [WorkscopeComponentApi];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ComponentCockpitOperationSearchService, ComponentCockpitOperationFormService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  exports: [ComponentCockpitOperationFormComponent],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES, ...APIS]
})
export class ComponentCockpitOperationModule {}
