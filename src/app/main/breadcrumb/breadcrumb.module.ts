import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';

import { BreadcrumbComponent } from './breadcrumb.component';

const COMPONENTS = [BreadcrumbComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [TranslateModule, AngularCommonSharedModule, AngularGenericTemplatesSharedModule],
  exports: [...COMPONENTS]
})
export class BreadcrumbModule {}
