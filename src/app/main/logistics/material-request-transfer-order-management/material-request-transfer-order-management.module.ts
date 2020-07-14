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

import { MaterialRequestTransferOrderManagementFormComponent } from './form/material-request-transfer-order-management-form.component';
import { MaterialRequestTransferOrderManagementFormService } from './form/material-request-transfer-order-management-form.service';
import { DialogSatisfactionRateTransferOrderComponent } from './form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component';

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

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSatisfactionRateTransferOrderComponent];

const DYNAMIC_COMPONENTS = [MaterialRequestTransferOrderManagementFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [FileService, MaterialRequestTransferOrderManagementFormService];

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
export class MaterialRequestTransferOrderManagementModule {}
