import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogPartComponent } from './form/dialog-part/dialog-part/dialog-part.component';
import { DialogPartService } from './form/dialog-part/dialog-part/dialog-part.service';
import { DialogStockDataService } from './form/dialog-stock-data/dialog-stock-data.service';
import { DialogStockDataComponent } from './form/dialog-stock-data/dialog-stock-data/dialog-stock-data.component';
import { InventoryByWarehouseFormComponent } from './form/inventory-by-warehouse-form.component';
import { InventoryByWareHouseFormService } from './form/inventory-by-warehouse-form.service';
import { InventoryByWarehouseSearchComponent } from './search/inventory-by-warehouse-search.component';
import { InventoryByWareHouseSearchService } from './search/inventory-by-warehouse-search.service';


/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  TableModule,
  TooltipModule,
  SelectButtonModule,
  RadioButtonModule,
  KeyFilterModule
];

const INTERNAL_MODULES = [DialogTableModule, DynamicAttributesModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogPartComponent, DialogStockDataComponent];

const DYNAMIC_COMPONENTS = [InventoryByWarehouseSearchComponent, InventoryByWarehouseFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  InventoryByWareHouseFormService,
  InventoryByWareHouseSearchService,
  DialogPartService,
  DialogStockDataService
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
export class InventoryByWareHouseModule {}
