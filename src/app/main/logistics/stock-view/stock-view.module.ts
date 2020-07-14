import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AutoCompleteModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogSearchPnModule } from '../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { FormService } from '../stock-movements/form/form.service';

import { DialogSelectLocationStockComponent } from './dialog-select-location-stock/dialog-select-location-stock.component';
import { StockViewFilterComponent } from './form/stock-view-filter/stock-view-filter.component';
import { StockViewFormComponent } from './form/stock-view-form.component';
import { StockViewFormService } from './form/stock-view-form.service';
import { StockViewSearchComponent } from './search/stock-view-search.component';
import { StockViewSearchService } from './search/stock-view-search.service';
/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  CalendarModule,
  DropdownModule,
  TableModule,
  ChartModule,
  TreeTableModule,
  SelectButtonModule,
  CheckboxModule,
  OverlayPanelModule,
  AutoCompleteModule
];

const INTERNAL_MODULES = [DialogSearchMaterialModule, DialogSearchPnModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  StockViewFormComponent,
  StockViewSearchComponent,
  DialogSelectLocationStockComponent,
  StockViewFilterComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [StockViewFormService, StockViewSearchService, FormService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
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
export class StockViewModule {}
