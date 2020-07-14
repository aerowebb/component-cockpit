import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { BidtFuncObjectApi } from '../../../shared/api/bidt-func-object.api';
import { WorkflowExportApi } from '../../../shared/api/workflow-export.api';
import { WorkflowImportApi } from '../../../shared/api/workflow-import.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { BidtScenarioApi } from '../../../shared/types/api-types/bidt-scenario.api';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { AttributesSearchService } from '../attributes/search/attributes-search.service';

import { DialogImportScenarioComponent } from './form/dialog-import-scenario/dialog-import-scenario.component';
import { DialogImportedMessageComponent } from './form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component';
import { WorkflowManagementFormComponent } from './form/workflow-management-form.component';
import { WorkflowManagementFormService } from './form/workflow-management-form.service';
import { WorkflowManagementSearchComponent } from './search/workflow-management-search.component';
import { WorkflowManagementSearchService } from './search/workflow-management-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  PrimeNgTableModule,
  CheckboxModule,
  ComponentSidebarModule,
  DialogModule,
  ModalModule,
  FileUploadModule
];

const INTERNAL_MODULES = [TableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogImportScenarioComponent, DialogImportedMessageComponent];

const DYNAMIC_COMPONENTS = [WorkflowManagementFormComponent, WorkflowManagementSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  WorkflowManagementFormService,
  WorkflowManagementSearchService,
  PageTocService,
  AttributesSearchService
];

export const API_PROVIDERS = [BidtScenarioApi, WorkflowExportApi, BidtFuncObjectApi, WorkflowImportApi];

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
  providers: [...SERVICES, ...API_PROVIDERS]
})
export class WorkflowManagementModule {}
