import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { BidtScenarioApi } from '../../../shared/types/api-types/bidt-scenario.api';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { WorkflowManagementModule } from '../workflow-management/workflow-management.module';

import { TodoListSearchComponent } from './search/todo-list-search.component';
import { TodoListSearchService } from './search/todo-list-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule];

const INTERNAL_MODULES = [TableModule, WorkflowManagementModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [TodoListSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [TodoListSearchService];

const APIS = [BidtScenarioApi];

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
  providers: [...SERVICES, ...APIS]
})
export class TodoListModule {}
