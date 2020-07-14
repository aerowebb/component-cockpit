import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DocumentUploadDialogComponent } from './form/document-upload-dialog/document-upload-dialog.component';
import { ManufacturingBatchFormComponent } from './form/manufacturing-batch-form.component';
import { ManufacturingBatchFormService } from './form/manufacturing-batch-form.service';
import { ManufacturingBatchSearchComponent } from './search/manufacturing-batch-search.component';
import { ManufacturingBatchSearchService } from './search/manufacturing-batch-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  FileUploadModule,
  TooltipModule,
  DropdownModule,
  PrimeNgTableModule,
  CheckboxModule,
  SelectButtonModule,
  CalendarModule,
  InputSwitchModule,
  ProgressBarModule
];

const INTERNAL_MODULES = [TableModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  ManufacturingBatchFormComponent,
  ManufacturingBatchSearchComponent,
  DocumentUploadDialogComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ManufacturingBatchFormService, ManufacturingBatchSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicAttributesModule,
    ComponentSidebarModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ManageSearchCriteriaModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class ManufacturingBatchModule {}
