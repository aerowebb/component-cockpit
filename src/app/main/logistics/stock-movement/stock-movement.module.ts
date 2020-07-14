import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { StockMovementFormComponent } from './form/stock-movement-form.component';
/******************************************************************************
 * Modules
 *************************************************************************** */

const INTERNAL_MODULES = [TableModule, DropdownModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const DYNAMIC_COMPONENTS = [StockMovementFormComponent];

@NgModule({
  declarations: [...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...INTERNAL_MODULES
  ]
})
export class StockMovementModule {}
