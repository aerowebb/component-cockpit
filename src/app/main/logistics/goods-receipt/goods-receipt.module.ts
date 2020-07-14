import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/primeng';
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
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { CatalogService } from '../../administration/catalog/catalog.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { SearchService } from '../stock-movements/search/search.service';
import { TransferOrderService } from '../transfer-order/shared/transfer-order-service';

import { DeliveryFolderSearchService } from './delivery-folder-search.service';
import { DialogAddItemComponent } from './form/dialog-add-item/dialog-add-item.component';
import { DialogAddMaterialComponent } from './form/dialog-add-material/dialog-add-material.component';
import { DialogAddPackageComponent } from './form/dialog-add-package/dialog-add-package.component';
import { DialogCreateLitigationComponent } from './form/dialog-create-litigation/dialog-create-litigation.component';
import { DialogDocumentCategoriesReceiptFolderComponent } from './form/dialog-document-categories/dialog-document-categories.component';
import { GoodsReceiptFormComponent } from './form/goods-receipt-form.component';
import { GoodsReceiptFormService } from './form/goods-receipt-form.service';
import { DialogGoodsReceiptAssetScanComponent } from './search/dialog-asset-scan/dialog-asset-scan.component';
import { DialogCreateReceiptComponent } from './search/dialog-create-receipt/dialog-create-receipt.component';
import { DialogGoodsReceiptPackageScanComponent } from './search/dialog-package-scan/dialog-package-scan.component';
import { ExternalGoodReceiptSearchComponent } from './search/external-good-receipt-search.components';
import { LocalGoodReceiptSearchComponent } from './search/local-good-receipt-search.components';

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
  GoodsReceiptFormComponent,
  LocalGoodReceiptSearchComponent,
  ExternalGoodReceiptSearchComponent,
  DialogCreateLitigationComponent,
  DialogGoodsReceiptAssetScanComponent,
  DialogGoodsReceiptPackageScanComponent,
  DialogCreateReceiptComponent,
  DialogAddPackageComponent,
  DialogAddItemComponent,
  DialogAddMaterialComponent,
  DialogDocumentCategoriesReceiptFolderComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  GoodsReceiptFormService,
  DeliveryFolderSearchService,
  CatalogService,
  SearchService,
  TransferOrderService
];

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
export class GoodsReceiptModule {}
