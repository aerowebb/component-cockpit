import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { BonitaApi } from '../../../shared/api/bonita/bonita.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DeaDiaFormComponent } from './dea-dia-form/dea-dia-form.component';
import { DeaDiaSearchComponent } from './dea-dia-search/dea-dia-search.component';
import { DeaDiaService } from './dea-dia.service';
import { DialogBireDocPugModule } from './dialog-bire-document/dialog-bire-doc-pug.module';

/******************************************************************************
 * Modules
 *************************************************************************** */
const PRIMENG_MODULES = [
  TableModule,
  CalendarModule,
  FileUploadModule,
  PrimeNgTableModule,
  DialogModule,
  InputTextareaModule,
  MessageModule,
  DropdownModule,
  CheckboxModule,
  TooltipModule
];

const EXTERNAL_MODULES = [];

const INTERNAL_MODULES = [DialogBireDocPugModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [DeaDiaFormComponent, DeaDiaSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DeaDiaService, PageTocService];

export const API_PROVIDERS = [UserProfileManagementApi, ProductStructureManagementApi, BonitaApi];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES,
    ...PRIMENG_MODULES
  ],
  providers: [...SERVICES, ...API_PROVIDERS]
})
export class DeaDiaModule {}
