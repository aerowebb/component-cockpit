import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogSearchPnAlternativesModule } from '../dialog-search-pn-alternatives/dialog-search-pn-alternatives.module';
import { ModalModule } from '../modal/modal.module';

import { DialogSearchPnComponent } from './dialog-search-pn.component';
import { DialogSearchPnService } from './dialog-search-pn.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TableModule, DropdownModule];

const INTERNAL_MODULES = [DialogSearchPnAlternativesModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchPnComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchPnService];

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
export class DialogSearchPnModule {}
