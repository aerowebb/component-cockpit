import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchTaskModule } from '../../../shared/components/dialog-search-task/dialog-search-task.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ExtractTasksApplicationsSearchComponent } from './search/extract-tasks-applications-search.component';
import { ExtractTasksApplicationsSearchService } from './search/extract-tasks-applications-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule, TableModule, CalendarModule];

const INTERNAL_MODULES = [DialogSearchTaskModule, DialogSearchEquipmentModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [ExtractTasksApplicationsSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ExtractTasksApplicationsSearchService];

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
export class ExtractTasksApplicationsModule {}
