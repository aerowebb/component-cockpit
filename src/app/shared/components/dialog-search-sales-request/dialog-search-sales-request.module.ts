import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { ModalModule } from '../modal/modal.module';

import { DialogSearchSalesRequestComponent } from './dialog-search-sales-request.component';
import { DialogSearchSalesRequestService } from './dialog-search-sales-request.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, TableModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchSalesRequestComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchSalesRequestService];

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
export class DialogSearchSalesRequestModule {}
