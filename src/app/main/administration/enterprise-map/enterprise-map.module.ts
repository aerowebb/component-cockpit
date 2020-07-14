import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { EnterpriseMapComponent } from './enterprise-map.component';
import { EnterpriseMapService } from './enterprise-map.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DropdownModule, TreeModule, TooltipModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const DYNAMIC_COMPONENTS = [EnterpriseMapComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [EnterpriseMapService];

@NgModule({
  declarations: [...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class EnterpriseMapModule {}
