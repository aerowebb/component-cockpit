import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
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
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogBireDocumentModule } from '../../../shared/components/dialog-bire-document/dialog-bire-document.module';
import { DialogSearchPartModule } from '../../../shared/components/dialog-search-part/dialog-search-part.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogComponentsComponent } from './form/dialog-components/dialog-components.component';
import { OperationFormComponent } from './form/operation-form.component';
import { OperationFormService } from './form/operation-form.service';
import { OperationImportPopupComponent } from './form/operation-import-popup/operation-import-popup.component';
import { OperationSearchComponent } from './search/operation-search.component';
import { OperationSearchService } from './search/operation-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  KeyFilterModule,
  MessageModule,
  PrimeNgTableModule,
  TooltipModule,
  DialogSearchPartModule
];

const INTERNAL_MODULES = [
  DialogBireDocumentModule,
  ComponentSidebarModule,
  DialogTableModule,
  DynamicAttributesModule,
  ModalModule,
  StatusUpdateHistoryModule,
  TableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogComponentsComponent, OperationImportPopupComponent];

const DYNAMIC_COMPONENTS = [OperationFormComponent, OperationSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [OperationFormService, OperationSearchService];

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
export class OperationModule {}
