import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../../shared/app-common-shared.module';
import { DialogSearchCustomerModule } from '../../../../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchDefectEventsModule } from '../../../../../../shared/components/dialog-search-defect-events/dialog-search-defect-events.module';
import { DialogSearchEventModule } from '../../../../../../shared/components/dialog-search-event/dialog-search-event.module';
import { DialogSearchEvolutionModule } from '../../../../../../shared/components/dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchOperationModule } from '../../../../../../shared/components/dialog-search-operation/dialog-search-operation.module';
import { DialogSearchPnModule } from '../../../../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { DialogSearchTaskModule } from '../../../../../../shared/components/dialog-search-task/dialog-search-task.module';
import { ModalModule } from '../../../../../../shared/components/modal/modal.module';

import { DialogWorkOrderEditComponent } from './dialog-work-order-edition.component';
import { DialogWorkOrderEditService } from './dialog-work-order-edition.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  DropdownModule,
  TableModule,
  CalendarModule,
  CheckboxModule,
  DialogSearchDefectEventsModule,
  DialogSearchCustomerModule
];

const INTERNAL_MODULES = [ModalModule, DialogSearchPnModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogWorkOrderEditComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogWorkOrderEditService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DialogSearchTaskModule,
    DialogSearchEvolutionModule,
    DialogSearchEventModule,
    DialogSearchOperationModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class DialogWorkOrderEditionModule {}
