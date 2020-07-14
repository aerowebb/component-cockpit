import { NgModule } from '@angular/core';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';

import { GenericHeaderComponent } from './generic-header.component';

const COMPONENTS = [GenericHeaderComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule]
})
export class GenericHeaderModule {}
