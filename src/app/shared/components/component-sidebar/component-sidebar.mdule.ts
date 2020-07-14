import { NgModule } from '@angular/core';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AppCommonSharedModule } from '../../app-common-shared.module';

import { ComponentSidebarComponent } from './component-sidebar.component';
import { PageTocService } from './page-toc.service';

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [ComponentSidebarComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [PageTocService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule, AppCommonSharedModule],
  providers: [...SERVICES]
})
export class ComponentSidebarModule {}
