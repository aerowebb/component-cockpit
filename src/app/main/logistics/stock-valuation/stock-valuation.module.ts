import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { StockValuationFormComponent } from './form/stock-valuation-form.component';
import { StockValuationFormService } from './form/stock-valuation-form.service';
import { StockValuationSearchComponent } from './search/stock-valuation-search.component';
import { StockValuationSearchService } from './search/stock-valuation-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, DropdownModule, TableModule, ChartModule, TooltipModule];

const INTERNAL_MODULES = [DialogTableModule, DynamicAttributesModule, ModalModule, DialogSearchMaterialModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [StockValuationSearchComponent, StockValuationFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [StockValuationSearchService, StockValuationFormService];

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
export class StockValuationModule {}
