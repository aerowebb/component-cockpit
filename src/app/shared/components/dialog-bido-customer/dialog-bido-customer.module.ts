import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
// import { ModalModule } from '../modal/modal.module';

import { DialogBidoCustomerComponent } from './dialog-bido-customer.component';
import { DialogBidoCustomerService } from './dialog-bido-customer.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DialogModule, TableModule]; // TODO: replace DialogModule by ModalModule

// const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogBidoCustomerComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogBidoCustomerService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES
    // ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class DialogBidoCustomerModule {}
