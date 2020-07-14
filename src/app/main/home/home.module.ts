import { NgModule } from '@angular/core';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';

import { HomeComponent } from './home.component';

/******************************************************************************
 * Components
 *************************************************************************** */

const DYNAMIC_COMPONENTS = [HomeComponent];

@NgModule({
  declarations: DYNAMIC_COMPONENTS,
  imports: [AngularCommonSharedModule, AppCommonSharedModule, DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS)]
})
export class HomeModule {}
