import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputSwitchModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { FileService } from '../../../shared/services/file.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { ProcurementRequestSearchService } from '../procurement-request/search/procurement-request-search.service';
import { TransferOrderPopupModule } from '../transfer-order/search/transfer-order-popup/transfer-order-popup.module';
import { TransferOrderService } from '../transfer-order/shared/transfer-order-service';

import { MaterialRequestManagementFormComponent } from './form/material-request-management-form.component';
import { MaterialRequestManagementFormService } from './form/material-request-management-form.service';
import { ChangeCustomerPopupFormComponent } from './form/popups/change-customer-popup-form/change-customer-popup-form.component';
import { ChangeWarehouseAndQuantityPopupFormComponent } from './form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component';
import { DialogSatisfactionRateComponent } from './form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component';
import { MaterialRequestManagementSearchComponent } from './search/material-request-management-search.component';
import { MaterialRequestManagementSearchService } from './search/material-request-management-search.service';
import { DialogImageComponent } from './shared/popups/dialog-image/dialog-image.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  InputSwitchModule,
  TableModule,
  TooltipModule,
  KeyFilterModule,
  MessageModule,
  OverlayPanelModule,
  ProgressBarModule,
  RadioButtonModule,
  SelectButtonModule,
  SplitButtonModule,
  TriStateCheckboxModule
];

const INTERNAL_MODULES = [ModalModule, TransferOrderPopupModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogImageComponent,
  ChangeCustomerPopupFormComponent,
  ChangeWarehouseAndQuantityPopupFormComponent,
  DialogSatisfactionRateComponent
];

const DYNAMIC_COMPONENTS = [MaterialRequestManagementSearchComponent, MaterialRequestManagementFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  MaterialRequestManagementSearchService,
  MaterialRequestManagementFormService,
  FileService,
  ProcurementRequestSearchService,
  TransferOrderService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ManageSearchCriteriaModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class MaterialRequestManagementModule {}
