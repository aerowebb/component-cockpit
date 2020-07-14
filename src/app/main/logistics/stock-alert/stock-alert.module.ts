import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SplitButtonModule } from '../../../../../node_modules/primeng/splitbutton';
import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { StockAlertFormComponent } from './form/stock-alert-form.component';
import { StockAlertFormService } from './form/stock-alert-form.service';
import { StockAlertSearchComponent } from './search/stock-alert-search.component';
import { StockAlertSearchService } from './search/stock-alert-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  DropdownModule,
  TableModule,
  ChartModule,
  TooltipModule,
  SelectButtonModule,
  SplitButtonModule
];

const INTERNAL_MODULES = [DialogTableModule, DynamicAttributesModule, ModalModule, DialogSearchMaterialModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [StockAlertSearchComponent, StockAlertFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [StockAlertSearchService, StockAlertFormService];

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
export class StockAlertModule {}
