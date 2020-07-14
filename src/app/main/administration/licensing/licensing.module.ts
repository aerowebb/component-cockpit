import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { LicensingSearchComponent } from './search/licensing-search.component';
import { LicensingSearchService } from './search/licensing-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  LicensingSearchComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  LicensingSearchService
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
export class LicensingModule {}