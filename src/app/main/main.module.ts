import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../shared/app-common-shared.module';
import { ModalModule } from '../shared/components/modal/modal.module';
import { FilterByValuePipe } from '../shared/pipes/filter-by-value.pipe';

import { TodoListModule } from './administration/todo-list/todo-list.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DynamicComponentsConstants } from './dynamic-component-loader/dynamic-component-constants';
import { DynamicComponentLoaderModule } from './dynamic-component-loader/dynamic-component-loader.module';
import { AssetSearchService } from './fleet-management/asset/search/asset-search.service';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { WorkPackageSearchService } from './maintenance/work-package/search/work-package-search.service';
import { WorkPackageService } from './maintenance/work-package/work-package.service';
import { DialogMenuSearchComponent } from './menu/dialog-menu-search/dialog-menu-search.component';
import { TabContainerComponent } from './tab-container/tab-container.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule];

const INTERNAL_MODULES = [ModalModule, TodoListModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [ConfirmDialogComponent, DialogMenuSearchComponent, MainComponent, TabContainerComponent];

/******************************************************************************
 * Pipes
 *************************************************************************** */

const PIPES = [FilterByValuePipe];

const SERVICES = [WorkPackageService, WorkPackageSearchService, AssetSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    MainRoutingModule,
    DynamicComponentLoaderModule.forRoot(DynamicComponentsConstants.MANIFEST),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class MainModule {}
