import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { AngularCommonSharedModule } from '../../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../../shared/app-common-shared.module';
import { ModalModule } from '../../../../../../shared/components/modal/modal.module';

import { DialogWorkOrderSchedulingEditComponent } from './dialog-work-order-scheduling-edition.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, DropdownModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogWorkOrderSchedulingEditComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule, AngularGenericTemplatesSharedModule, AppCommonSharedModule, ...EXTERNAL_MODULES],
  providers: [...SERVICES]
})
export class DialogWorkOrderSchedulingEditionModule {}
