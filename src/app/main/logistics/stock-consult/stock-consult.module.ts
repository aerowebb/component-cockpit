import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { SplitButtonModule } from '../../../../../node_modules/primeng/splitbutton';
import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { BidtStorageBinApi } from '../../../shared/api/bidt-storage-bin.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { SearchService } from '../../maintenance/airworthiness-control/search/search.service';
import { MaterialFormService } from '../material/form/material-form.service';
import { StockConsultFormComponent } from '../stock-consult/form/stock-consult-form.component';

import { StockConsultSearchComponent } from './search/stock-consult-search.component';
import { StockConsultSearchService } from './search/stock-consult-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  DropdownModule,
  TableModule,
  ChartModule,
  TooltipModule,
  TreeTableModule,
  SplitButtonModule,
  SelectButtonModule,
  CheckboxModule
];

const INTERNAL_MODULES = [DialogTableModule, DynamicAttributesModule, ModalModule, DialogSearchMaterialModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [StockConsultSearchComponent, StockConsultFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [MaterialFormService, SearchService, StockConsultSearchService, BidtStorageBinApi];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS, StockConsultFormComponent],
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
export class StockConsultModule {}
