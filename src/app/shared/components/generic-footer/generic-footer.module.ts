import { NgModule } from '@angular/core';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';

import { GenericFooterComponent } from './generic-footer.component';

const COMPONENTS = [GenericFooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule]
})
export class GenericFooterModule {}
