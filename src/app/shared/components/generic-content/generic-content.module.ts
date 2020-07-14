import { NgModule } from '@angular/core';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';

import { GenericContentComponent } from './generic-content.component';

const COMPONENTS = [GenericContentComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule]
})
export class GenericContentModule {}
