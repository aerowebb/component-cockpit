import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogSearchCustomerModule } from '../dialog-search-customer/dialog-search-customer.module';
import { ModalModule } from '../modal/modal.module';

import { AssetsSelectionDialogComponent } from './assets-selection-dialog.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  InputTextareaModule,
  TableModule,
  DropdownModule,
  RadioButtonModule,
  OverlayPanelModule,
  MessageModule
];

const INTERNAL_MODULES = [DialogSearchCustomerModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [AssetsSelectionDialogComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ]
})
export class AssetsSelectionDialogModule {}
