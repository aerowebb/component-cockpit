import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DataEnrichmentFormStandardService } from './form/data-enrichment-form-standard.service';
import { DataEnrichmentFormComponent } from './form/data-enrichment-form.component';
import { DataEnrichmentFormService } from './form/data-enrichment-form.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  SelectButtonModule,
  TableModule,
  FileUploadModule,
  ProgressBarModule,
  DropdownModule,
  CalendarModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [DataEnrichmentFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DataEnrichmentFormService, DataEnrichmentFormStandardService];

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
export class DataEnrichmentModule {}
