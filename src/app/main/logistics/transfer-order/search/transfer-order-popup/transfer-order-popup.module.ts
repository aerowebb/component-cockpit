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
import { DialogSearchCustomerModule } from '../../../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchPnModule } from '../../../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { ManageSearchCriteriaModule } from '../../../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../../../shared/components/modal/modal.module';
import { TableModule } from '../../../../../shared/components/table/table.module';
import { DeliveryFolderSearchService } from '../../../goods-receipt/delivery-folder-search.service';
import { TransferOrderSearchService } from '../transfer-order-search.service';

import { TransferOrderPopupComponent } from './transfer-order-popup.component';

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
  ModalModule,
  DialogSearchCustomerModule
];

const INTERNAL_MODULES = [DialogSearchPnModule];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [TransferOrderSearchService, DeliveryFolderSearchService];

@NgModule({
  exports: [TransferOrderPopupComponent],
  declarations: [TransferOrderPopupComponent],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class TransferOrderPopupModule {}
