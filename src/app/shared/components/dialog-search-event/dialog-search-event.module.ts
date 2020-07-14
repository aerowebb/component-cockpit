import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { ModalModule } from '../modal/modal.module';

import { DialogSearchEventComponent } from './dialog-search-event.component';
import { DialogSearchEventService } from './dialog-search-event.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DropdownModule, TableModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchEventComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchEventService];

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
export class DialogSearchEventModule {}