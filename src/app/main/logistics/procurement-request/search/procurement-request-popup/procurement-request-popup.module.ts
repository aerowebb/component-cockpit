import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchPnModule } from '../../../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { DialogSearchWorkOrderModule } from '../../../../../shared/components/dialog-search-work-order/dialog-search-work-order.module';
import { ManageSearchCriteriaModule } from '../../../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../../../shared/components/modal/modal.module';
import { TableModule } from '../../../../../shared/components/table/table.module';

import { ProcurementRequestPopupComponent } from './procurement-request-popup.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  FileUploadModule,
  InputSwitchModule,
  SelectButtonModule,
  TableModule,
  CheckboxModule,
  ComponentSidebarModule,
  CalendarModule,
  PrimeNgTableModule,
  ProgressBarModule,
  ModalModule
];

const INTERNAL_MODULES = [DialogSearchPnModule, DialogSearchWorkOrderModule];

@NgModule({
  exports: [ProcurementRequestPopupComponent],
  declarations: [ProcurementRequestPopupComponent],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ]
})
export class ProcurementRequestPopupModule {}
