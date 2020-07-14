import { NgModule } from '@angular/core';
import { TableModule as PrimeNgTableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { ModalModule } from '../modal/modal.module';
import { TableModule } from '../table/table.module';

import { DialogSearchOperationalConfigComponent } from './dialog-search-operational-config.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [PrimeNgTableModule];

const INTERNAL_MODULES = [ModalModule, TableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchOperationalConfigComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [];

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
export class DialogSearchOperationalConfigModule {}
