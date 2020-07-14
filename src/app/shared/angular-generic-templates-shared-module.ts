import { NgModule } from '@angular/core';

import { GenericContentModule } from './components/generic-content/generic-content.module';
import { GenericFooterModule } from './components/generic-footer/generic-footer.module';
import { GenericHeaderModule } from './components/generic-header/generic-header.module';

const COMPONENTS = [GenericContentModule, GenericFooterModule, GenericHeaderModule];

@NgModule({
  exports: [...COMPONENTS]
})
export class AngularGenericTemplatesSharedModule {}
