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
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchMaterialModule } from '../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { ProcurementRequestPopupModule } from '../procurement-request/search/procurement-request-popup/procurement-request-popup.module';
import { TransferOrderPopupModule } from '../transfer-order/search/transfer-order-popup/transfer-order-popup.module';

import { MaterialFormComponent } from './form/material-form.component';
import { MaterialFormService } from './form/material-form.service';
import { AssignAlternativesPopupFormComponent } from './form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component';
import { AssignContainerPopupFormComponent } from './form/popups/assign-container-popup-form/assign-container-popup-form.component';
import { AssignSuppliersPopupFormComponent } from './form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component';
import { AssignSupplyConversionPopupFormComponent } from './form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component';
import { AssignValuationPopupFormComponent } from './form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component';
import { AssignWarehousePopupFormComponent } from './form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component';
import { MaterialSearchComponent } from './search/material-search.component';
import { MaterialSearchService } from './search/material-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  PrimeNgTableModule,
  TooltipModule,
  KeyFilterModule,
  MessageModule,
  RadioButtonModule,
  SplitButtonModule,
  TriStateCheckboxModule,
  TableModule
];

const INTERNAL_MODULES = [
  DialogTableModule,
  DynamicAttributesModule,
  ModalModule,
  DialogSearchMaterialModule,
  ComponentSidebarModule,
  StatusUpdateHistoryModule,
  ProcurementRequestPopupModule,
  TransferOrderPopupModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  AssignWarehousePopupFormComponent,
  AssignSuppliersPopupFormComponent,
  AssignValuationPopupFormComponent,
  AssignAlternativesPopupFormComponent,
  AssignContainerPopupFormComponent,
  AssignSupplyConversionPopupFormComponent
];

const DYNAMIC_COMPONENTS = [MaterialSearchComponent, MaterialFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [MaterialSearchService, MaterialFormService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class MaterialModule {}
