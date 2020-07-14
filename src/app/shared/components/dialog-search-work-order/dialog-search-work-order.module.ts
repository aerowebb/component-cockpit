import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { LogisticsService } from '../../../main/logistics/logistics.service';
import { DialogWorkOrderEditService } from '../../../main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogSearchPnModule } from '../dialog-search-pn/dialog-search-pn.module';
import { ModalModule } from '../modal/modal.module';

import { DialogSearchWorkOrderComponent } from './dialog-search-work-order.component';
import { DialogSearchWorkOrderService } from './dialog-search-work-order.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, DropdownModule, TableModule];

const INTERNAL_MODULES = [DialogSearchPnModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchWorkOrderComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchWorkOrderService, DialogWorkOrderEditService, LogisticsService];

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
export class DialogSearchWorkOrderModule {}
