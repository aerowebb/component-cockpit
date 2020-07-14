import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../shared/app-common-shared.module';

import { WorkOrderTableFiltersComponent } from './work-order-table-filters.component';
import { WorkOrderTableFiltersService } from './work-order-table-filters.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule, SelectButtonModule, DropdownModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [WorkOrderTableFiltersComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [WorkOrderTableFiltersService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule, AngularGenericTemplatesSharedModule, AppCommonSharedModule, ...EXTERNAL_MODULES],
  providers: [...SERVICES]
})
export class WorkOrderTableFiltersModule {}
