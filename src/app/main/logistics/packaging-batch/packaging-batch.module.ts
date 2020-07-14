import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogAddUpdateComponent } from './form/dialog-add-update/dialog-add-update.component';
import { DocumentUploadDialogComponent } from './form/document-upload-dialog/document-upload-dialog.component';
import { PackagingBatchFormComponent } from './form/packaging-batch-form.component';
import { PackagingBatchFormService } from './form/packaging-batch-form.service';
import { PackagingBatchSearchComponent } from './search/packaging-batch-search.component';
import { PackagingBatchSearchService } from './search/packaging-batch-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  TableModule,
  CheckboxModule,
  PrimeNgTableModule,
  DialogTableModule,
  FileUploadModule,
  SelectButtonModule,
  CalendarModule,
  ManageSearchCriteriaModule,
  InputSwitchModule,
  ChartModule,
  ProgressBarModule,
  ModalModule,
  DynamicAttributesModule,
  InputTextareaModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  PackagingBatchFormComponent,
  PackagingBatchSearchComponent,
  DialogAddUpdateComponent,
  DocumentUploadDialogComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [PackagingBatchFormService, PackagingBatchSearchService];

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
  providers: [...SERVICES],
  exports: [DialogAddUpdateComponent]
})
export class PackagingBatchModule {}
