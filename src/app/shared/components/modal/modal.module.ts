import { NgModule } from '@angular/core';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';

import { ModalComponent } from './modal.component';

const COMPONENTS = [ModalComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule]
})
export class ModalModule {}
