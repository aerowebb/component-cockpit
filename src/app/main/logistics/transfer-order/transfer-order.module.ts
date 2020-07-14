import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { ProcurementRequestModule } from '../procurement-request/procurement-request.module';

import { MaterialSelectionComponent } from './form/material-selection/material-selection.component';
import { TransferOrderFormComponent } from './form/transfer-order-form.component';
import { TransferOrderFormService } from './form/transfer-order-form.service';
import { TransferOrderPopupModule } from './search/transfer-order-popup/transfer-order-popup.module';
import { TransferOrderSearchComponent } from './search/transfer-order-search.component';
import { TransferOrderSearchService } from './search/transfer-order-search.service';
import { TransferOrderService } from './shared/transfer-order-service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  CheckboxModule,
  TableModule,
  ChartModule,
  SplitButtonModule,
  SelectButtonModule,
  CalendarModule,
  PrimeNgTableModule,
  ComponentSidebarModule,
  ManageSearchCriteriaModule,
  DialogSearchCustomerModule
];

const INTERNAL_MODULES = [TransferOrderPopupModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [TransferOrderFormComponent, TransferOrderSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [TransferOrderService, TransferOrderFormService, TransferOrderSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS, MaterialSelectionComponent],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ProcurementRequestModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class TransferOrderModule {}
