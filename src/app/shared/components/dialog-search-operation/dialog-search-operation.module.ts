import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { ModalModule } from '../modal/modal.module';

import { DialogSearchOperationComponent } from './dialog-search-operation.component';
import { DialogSearchOperationService } from './dialog-search-operation.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TableModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchOperationComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchOperationService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class DialogSearchOperationModule {}