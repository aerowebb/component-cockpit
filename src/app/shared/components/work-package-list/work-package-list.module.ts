import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';

import { WorkPackageListComponent } from './work-package-list.component';
import { WorkPackageListService } from './work-package-list.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [WorkPackageListComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [WorkPackageListService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule, AngularGenericTemplatesSharedModule, AppCommonSharedModule, ...EXTERNAL_MODULES],
  providers: [...SERVICES]
})
export class WorkPackageListModule {}
