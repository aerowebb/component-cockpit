import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { DynamicComponentLoaderModule } from '../../../../main/dynamic-component-loader/dynamic-component-loader.module';
import { MaterialFormService } from '../../../../main/logistics/material/form/material-form.service';
import { OrderDocumentFormService } from '../../../../main/logistics/order-document/form/order-document-form.service';
import { OrderDocumentSearchService } from '../../../../main/logistics/order-document/search/order-document-search.service';
import { WorkOrderFormService } from '../../../../main/maintenance/work-order/form/work-order-form.service';
import { AngularCommonSharedModule } from '../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchEmployeeModule } from '../../../../shared/components/dialog-search-employee/dialog-search-employee.module';
import { DialogSearchMaterialModule } from '../../../../shared/components/dialog-search-material/dialog-search-material.module';
import { DialogSearchMaterialService } from '../../../../shared/components/dialog-search-material/dialog-search-material.service';
import { DialogStatusModule } from '../../../../shared/components/dialog-status/dialog-status.module';
import { DialogTableModule } from '../../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../../shared/components/modal/modal.module';
import { TableModule } from '../../../../shared/components/table/table.module';
import { PurchaseContractElementApi } from '../../api/purchase-contract-element-api';
import { PurchaseContractItemApi } from '../../api/purchase-contract-item.api';
import { PurchaseContractApi } from '../../api/purchase-contract.api';
import { PurchaseContractElementService } from '../../services/purchase-contract-element.service';
import { PurchaseContractItemService } from '../../services/purchase-contract-item.service';
import { PurchaseContractService } from '../../services/purchase-contract.service';
import { DocumentSectionModule } from '../shared/document-section/document-section.module';

import { DialogPurchaseContractElementComponent } from './pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component';
import { DialogPurchaseContractItemComponent } from './pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component';
import { DialogPurchaseContractParentIdComponent } from './pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component';
import { DialogPurchaseContractPartnerComponent } from './pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component';
import { DialogPurchaseContractSliceComponent } from './pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component';
import { PurchaseContractFormComponent } from './pages/form/purchase-contract-form.component';
import { PurchaseContractSearchComponent } from './pages/search/purchase-contract-search.component';
import { PurchaseContractSearchService } from './pages/search/purchase-contract-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  InputTextareaModule,
  PrimeNgTableModule,
  TooltipModule,
  KeyFilterModule,
  MessageModule
];

const INTERNAL_MODULES = [
  ManageSearchCriteriaModule,
  ComponentSidebarModule,
  DialogTableModule,
  DialogStatusModule,
  DynamicAttributesModule,
  ModalModule,
  TableModule,
  DialogSearchMaterialModule,
  DocumentSectionModule,
  DialogSearchEmployeeModule
];

const PRIMENG_MODULES = [TreeModule, TreeTableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogPurchaseContractSliceComponent,
  DialogPurchaseContractItemComponent,
  DialogPurchaseContractElementComponent,
  DialogPurchaseContractPartnerComponent,
  DialogPurchaseContractParentIdComponent
];

const DYNAMIC_COMPONENTS = [PurchaseContractFormComponent, PurchaseContractSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */
const API = [PurchaseContractApi, PurchaseContractItemApi, PurchaseContractElementApi];

const SERVICES = [
  PurchaseContractService,
  PurchaseContractItemService,
  PurchaseContractElementService,
  PurchaseContractSearchService,
  OrderDocumentSearchService,
  DialogSearchMaterialService,
  OrderDocumentFormService,
  MaterialFormService,
  WorkOrderFormService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES,
    ...PRIMENG_MODULES
  ],
  providers: [...API, ...SERVICES]
})
export class PurchaseContractModule {}
