import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
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
import { CreateEventFormModule } from '../../../shared/components/create-event-form/create-event-form.module';
import { DefectListModule } from '../../../shared/components/defect-list/defect-list.module';
import { DialogEquipmentListModule } from '../../../shared/components/dialog-equipment-list/dialog-equipment-list.module';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchPnModule } from '../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { DialogUpdateLogbookComponent } from '../../../shared/components/dialog-update-logbook/dialog-update-logbook.component';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { EmployeeFormService } from '../../human-resources/employee-form/employee-form.service';
import { ProcurementRequestPopupModule } from '../../logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module';
import { ProcurementRequestsTableModule } from '../procurement-request/procurement-requests-table.module';
import { DialogWorkOrderEditionModule } from '../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module';
import { WorkPackageFormService } from '../work-package/form/work-package-form.service';
import { WorkPackageService } from '../work-package/work-package.service';

import { DialogEditDurationComponent } from './form/popups/dialog-edit-duration/dialog-edit-duration.component';
import { DialogImportWorkOrderDocumentComponent } from './form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component';
import { DialogJobCardTimeTrackingEntriesComponent } from './form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component';
import { DialogOperationCheckFormComponent } from './form/popups/dialog-operation-check/dialog-operation-check-form.component';
import { DialogPostponementFormComponent } from './form/popups/dialog-postponement/dialog-postponement-form.component';
import { DialogStakeholderComponent } from './form/popups/dialog-stakeholder/dialog-stakeholder.component';
import { WOLastUpdatePopupModule } from './form/popups/last-update/wo-last-update-popup.module';
import { WorkOrderFormComponent } from './form/work-order-form.component';
import { WorkOrderFormService } from './form/work-order-form.service';

const EXTERNAL_MODULES = [
  TooltipModule,
  CalendarModule,
  DropdownModule,
  ChartModule,
  CheckboxModule,
  DialogEquipmentListModule,
  ProgressBarModule,
  TreeTableModule,
  SelectButtonModule,
  ModalModule,
  OverlayPanelModule,
  DialogSearchEquipmentModule,
  SplitButtonModule,
  DialogWorkOrderEditionModule,
  FileUploadModule,
  PrimeNgTableModule
];

const INTERNAL_MODULES = [
  ProcurementRequestsTableModule,
  DefectListModule,
  CreateEventFormModule,
  DialogSearchPnModule,
  ProcurementRequestPopupModule,
  WOLastUpdatePopupModule,
  StatusUpdateHistoryModule
];

const API = [];

const DYNAMIC_COMPONENTS = [
  WorkOrderFormComponent,
  DialogPostponementFormComponent,
  DialogJobCardTimeTrackingEntriesComponent,
  DialogEditDurationComponent,
  DialogImportWorkOrderDocumentComponent,
  DialogOperationCheckFormComponent,
  DialogStakeholderComponent,
  DialogUpdateLogbookComponent
];

const SERVICES = [WorkOrderFormService, WorkPackageFormService, WorkPackageService, EmployeeFormService];

@NgModule({
  declarations: DYNAMIC_COMPONENTS,
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ComponentSidebarModule,
    TableModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...API, ...SERVICES]
})
export class WorkOrderModule {}
