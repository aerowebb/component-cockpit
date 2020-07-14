import { NgModule } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { SbAdExportFormComponent } from './form/sbad-export-form.component';
import { SbAdExportFormService } from './form/sbad-export-form.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule, SelectButtonModule, FileUploadModule];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [SbAdExportFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [SbAdExportFormService];

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
export class SbadExportModule {}
