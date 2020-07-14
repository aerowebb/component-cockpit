import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DefectListModule } from '../../../shared/components/defect-list/defect-list.module';
import { DialogBidoCustomerService } from '../../../shared/components/dialog-bido-customer/dialog-bido-customer.service';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchDefectEventsModule } from '../../../shared/components/dialog-search-defect-events/dialog-search-defect-events.module';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchEventModule } from '../../../shared/components/dialog-search-event/dialog-search-event.module';
import { DialogSearchEvolutionModule } from '../../../shared/components/dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchOperationModule } from '../../../shared/components/dialog-search-operation/dialog-search-operation.module';
import { DialogSearchPurchaseRequestModule } from '../../../shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module';
import { DialogSearchPurchaseRequestService } from '../../../shared/components/dialog-search-purchase-request/dialog-search-purchase-request.service';
import { DialogSearchSalesRequestModule } from '../../../shared/components/dialog-search-sales-request/dialog-search-sales-request.module';
import { DialogSearchSalesRequestService } from '../../../shared/components/dialog-search-sales-request/dialog-search-sales-request.service';
import { DialogSearchTaskModule } from '../../../shared/components/dialog-search-task/dialog-search-task.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { WorkOrderListModule } from '../../../shared/components/work-order-list/work-order-list.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { EmployeeFormService } from '../../human-resources/employee-form/employee-form.service';
import { ComponentCockpitOperationModule } from '../component-cockpit-operation/component-cockpit-operation.module';
import { ProcurementRequestsTableModule } from '../procurement-request/procurement-requests-table.module';
import { WorkOrderFormService } from '../work-order/form/work-order-form.service';

import { DialogWorkOrderEditComponent } from './form/popups/dialog-work-order-edition/dialog-work-order-edition.component';
import { DialogWorkOrderEditionModule } from './form/popups/dialog-work-order-edition/dialog-work-order-edition.module';
import { DialogWorkOrderSchedulingEditComponent } from './form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component';
import { DialogWorkOrderSchedulingEditionModule } from './form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module';
import { DialogWorkOrderTableFullScreenComponent } from './form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component';
import { DialogWorkPackageDocumentComponent } from './form/popups/dialog-work-package-document/dialog-work-package-document.component';
import { ImportTaskPopupComponent } from './form/popups/import-task-popup/import-task-popup.component';
import { ImportTaskReportDialogComponent } from './form/popups/import-task-report-dialog/import-task-report-dialog.component';
import { LastUpdatePopupComponent } from './form/popups/wp-last-update/wp-last-update-pop-up.component';
import { WpReportDialogComponent } from './form/popups/wp-report-dialog/wp-report-dialog.component';
import { WpReportDialogFormService } from './form/popups/wp-report-dialog/wp-report-dialog.service';
import { WorkOrderTableFiltersModule } from './form/work-order-table-filters/work-order-table-filters.module';
import { WorkPackageFormComponent } from './form/work-package-form.component';
import { WorkPackageFormService } from './form/work-package-form.service';
import { WorkPackageSearchComponent } from './search/work-package-search.component';

const EXTERNAL_MODULES = [
  PrimeNgTableModule,
  TooltipModule,
  CalendarModule,
  DropdownModule,
  ChartModule,
  CheckboxModule,
  ProgressBarModule,
  TreeTableModule,
  SelectButtonModule,
  SplitButtonModule,
  ModalModule,
  OverlayPanelModule,
  DialogModule,
  DialogSearchDefectEventsModule,
  DialogSearchEquipmentModule,
  DialogSearchPurchaseRequestModule,
  DialogSearchSalesRequestModule,
  FileUploadModule
];

const INTERNAL_MODULES = [
  ProcurementRequestsTableModule,
  DefectListModule,
  DialogSearchCustomerModule,
  DialogWorkOrderEditionModule,
  TableModule,
  WorkOrderTableFiltersModule,
  DialogWorkOrderSchedulingEditionModule,
  WorkOrderListModule,
  ComponentCockpitOperationModule
];

const API = [];

const COMPONENTS = [
  WpReportDialogComponent,
  ImportTaskPopupComponent,
  ImportTaskReportDialogComponent,
  LastUpdatePopupComponent
];

const DYNAMIC_COMPONENTS = [
  WorkPackageFormComponent,
  WorkPackageSearchComponent,
  DialogWorkOrderTableFullScreenComponent,
  DialogWorkPackageDocumentComponent
];

const SERVICES = [
  WorkPackageFormService,
  WorkOrderFormService,
  WpReportDialogFormService,
  DialogBidoCustomerService,
  DialogSearchSalesRequestService,
  DialogSearchPurchaseRequestService,
  EmployeeFormService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],

  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ComponentSidebarModule,
    DialogSearchTaskModule,
    DialogSearchEvolutionModule,
    DialogSearchEventModule,
    DialogSearchOperationModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  exports: [DialogWorkOrderEditComponent, DialogWorkOrderSchedulingEditComponent],
  providers: [...API, ...SERVICES]
})
export class WorkPackageModule {}
