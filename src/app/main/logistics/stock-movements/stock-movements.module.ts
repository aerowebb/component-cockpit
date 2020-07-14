import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogSearchPnModule } from '../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { DeliveryFolderSearchService } from '../goods-receipt/delivery-folder-search.service';
import { GoodsReceiptFormService } from '../goods-receipt/form/goods-receipt-form.service';
import { PackagingBatchModule } from '../packaging-batch/packaging-batch.module';

import { DialogAddPackageShipmentComponent } from './form/dialog-add-package-shipment/dialog-add-package-shipment.component';
import { ConfirmDialogTreatmentComponent } from './form/dialog-confirm-treatment/confirm-dialog-treatment.component';
import { DialogCreateShipmentFolderComponent } from './form/dialog-create-shipment-folder/dialog-create-shipment-folder.component';
import { DialogDocumentCategoriesStockMvtComponent } from './form/dialog-document-categories/dialog-document-categories-stock-mvt.component';
import { DialogSelectContainerComponent } from './form/dialog-select-container/dialog-select-container.component';
import { DialogSelectLocationComponent } from './form/dialog-select-location/dialog-select-location.component';
import { FormService } from './form/form.service';
import { MovementInformationComponent } from './form/movement-information/movement-information.component';
import { PickingFormComponent } from './form/picking-form.component';
import { ShowMovementCardViewComponent } from './form/show-movement-card-view/show-movement-card-view.component';
import { StockMovementsFormComponent } from './form/stock-movements-form.component';
import { StockpillingFormComponent } from './form/stockpilling-form.component';
import { PickingSearchComponent } from './search/picking-search.component';
import { SearchService } from './search/search.service';
import { StockMovementsSearchComponent } from './search/stock-movements-search.component';
import { StockpillingSearcComponent } from './search/stockpilling-search.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  TableModule,
  CheckboxModule,
  SelectButtonModule,
  CalendarModule,
  PrimeNgTableModule,
  ChartModule,
  ManageSearchCriteriaModule,
  CardModule,
  OverlayPanelModule,
  ModalModule,
  ProgressBarModule,
  DialogSearchMaterialModule,
  DialogSearchCustomerModule,
  PackagingBatchModule
];

const INTERNAL_MODULES = [DialogSearchPnModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  StockpillingSearcComponent,
  PickingSearchComponent,
  StockMovementsFormComponent,
  StockMovementsSearchComponent,
  ShowMovementCardViewComponent,
  MovementInformationComponent,
  DialogSelectContainerComponent,
  ConfirmDialogTreatmentComponent,
  DialogSelectLocationComponent,
  PickingFormComponent,
  StockpillingFormComponent,
  DialogAddPackageShipmentComponent,
  DialogDocumentCategoriesStockMvtComponent,
  DialogCreateShipmentFolderComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [FormService, SearchService, DeliveryFolderSearchService, GoodsReceiptFormService];

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
export class StockMovementsModule {}
