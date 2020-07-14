import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule, InputTextareaModule, OverlayPanelModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchPnModule } from '../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { CatalogService } from '../../administration/catalog/catalog.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { DeliveryFolderSearchService } from '../goods-receipt/delivery-folder-search.service';
import { GoodsReceiptFormService } from '../goods-receipt/form/goods-receipt-form.service';
import { SearchService } from '../stock-movements/search/search.service';

import { DialogAssignPackageComponent } from './form/dialog-assign-package/dialog-assign-package.component';
import { DialogValidatePackageComponent } from './form/dialog-validate-package/dialog-validate-package.component';
import { MaterialShipmentFormComponent } from './form/material-shipment/material-shipment-form.component';
import { ShipmentFolderFormComponent } from './form/shipment-folder-form.component';
import { DialogCreateShipmentComponent } from './search/dialog-create-shipment/dialog-create-shipment.component';
import { ExternalShipmentSearchComponent } from './search/external-shipment-search.component';
import { LocalShipmentSearchComponent } from './search/local-shipment-search.component';
/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  PrimeNgTableModule,
  FileUploadModule,
  TooltipModule,
  DropdownModule,
  TableModule,
  CheckboxModule,
  SelectButtonModule,
  CalendarModule,
  OverlayPanelModule,
  ProgressBarModule,
  InputTextareaModule,
  ComponentSidebarModule,
  ModalModule,
  DialogSearchCustomerModule
];

const INTERNAL_MODULES = [DialogSearchPnModule, DialogSearchEquipmentModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  ExternalShipmentSearchComponent,
  LocalShipmentSearchComponent,
  DialogCreateShipmentComponent,
  ShipmentFolderFormComponent,
  MaterialShipmentFormComponent,
  DialogAssignPackageComponent,
  DialogValidatePackageComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [GoodsReceiptFormService, DeliveryFolderSearchService, CatalogService, SearchService];

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
export class ShipmentFolderModule {}
