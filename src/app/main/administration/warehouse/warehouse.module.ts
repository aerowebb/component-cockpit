import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogStorageBinComponent } from './form/dialog-storage-bin/dialog-storage-bin.component';
import { WarehouseFormComponent } from './form/warehouse-form.component';
import { WarehouseFormService } from './form/warehouse-form.service';
import { WarehouseSearchComponent } from './search/warehouse-search.component';
import { WarehouseSearchService } from './search/warehouse-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  KeyFilterModule,
  MessageModule,
  PrimeNgTableModule,
  TooltipModule
];

const INTERNAL_MODULES = [ModalModule, TableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogStorageBinComponent];

const DYNAMIC_COMPONENTS = [WarehouseFormComponent, WarehouseSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [WarehouseFormService, WarehouseSearchService];

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
export class WarehouseModule {}
