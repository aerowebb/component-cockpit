import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogSearchPurchaseRequestModule } from '../../../shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogBusinessPartnerBidoDocumentComponent } from './dialog-business-partner-bido-document/dialog-business-partner-bido-document.component';
import { DialogMaterialAndServicesComponent } from './dialog-material-and-services/dialog-material-and-services.component';
import { OrderDocumentFormComponent } from './form/order-document-form.component';
import { OrderDocumentFormService } from './form/order-document-form.service';
import { OrderDocumentSearchComponent } from './search/order-document-search.component';
import { OrderDocumentSearchService } from './search/order-document-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  TableModule,
  TooltipModule,
  KeyFilterModule,
  MessageModule,
  RadioButtonModule,
  SplitButtonModule,
  TriStateCheckboxModule
];

const INTERNAL_MODULES = [
  DialogSearchMaterialModule,
  DialogSearchPurchaseRequestModule,
  ModalModule,
  ComponentSidebarModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogBusinessPartnerBidoDocumentComponent, DialogMaterialAndServicesComponent];

const DYNAMIC_COMPONENTS = [OrderDocumentFormComponent, OrderDocumentSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [OrderDocumentFormService, OrderDocumentSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class OrderDocumentModule {}
