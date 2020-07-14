import { NgModule } from '@angular/core';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogSearchItemService } from '../dialog-search-item/dialog-search-item.service';
import { ModalModule } from '../modal/modal.module';
import { TableModule } from '../table/table.module';

import { DialogSearchAtaCodeComponent } from './dialog-search-ata-code.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [];

const INTERNAL_MODULES = [ModalModule, TableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchAtaCodeComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchItemService];

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
export class DialogSearchAtaCodeModule {}
