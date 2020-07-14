import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';
import { UnitConversionMatrixApi } from '../../shared/api/unit-matrix-conversion.api';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { DefectListModule } from '../../shared/components/defect-list/defect-list.module';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { TableModule } from '../../shared/components/table/table.module';
import { WorkOrderListModule } from '../../shared/components/work-order-list/work-order-list.module';
import { WorkSchedulingModule } from '../../shared/components/work-scheduling/work-scheduling.module';
import { WorkSchedulingService } from '../../shared/services/work-scheduling.service';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';
import { ItemSearchService } from '../engineering-management/item/search/item-search.service';

import { ProcurementRequestsTableModule } from './procurement-request/procurement-requests-table.module';
import { ReferentialDashboardSearchComponent } from './referential-dashboard/referential-dashboard-search.component';
import { ReferentialDashboardSearchService } from './referential-dashboard/referential-dashboard-search.service';
import { DialogUnitConversionMatrixComponent } from './unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component';
import { ImportReportPopupComponent } from './unit-conversion-matrix/import-report-popup/import-report-popup.component';
import { UnitConversionMatrixComponent } from './unit-conversion-matrix/unit-conversion-matrix.component';
import { UnitConversionMatrixService } from './unit-conversion-matrix/unit-conversion-matrix.service';
import { WorkOrdersCalendarModule } from './work-orders-calendar/work-orders-calendar.module';
import { WorkPackageSchedulingComponent } from './work-package-scheduling/work-package-scheduling.component';
import { DialogWorkOrderEditService } from './work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { WorkshopHomeComponent } from './workshop-home/workshop-home.component';
import { WorkshopHomeService } from './workshop-home/workshop-home.service';

const PRIMENG_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  RadioButtonModule,
  SplitButtonModule,
  PrimeNgTableModule,
  SelectButtonModule,
  TooltipModule,
  TriStateCheckboxModule,
  FileUploadModule,
  DragDropModule,
  OverlayPanelModule,
  TreeTableModule,
  TreeModule
];

const INTERNAL_MODULES = [
  ProcurementRequestsTableModule,
  DefectListModule,
  TableModule,
  WorkSchedulingModule,
  WorkOrdersCalendarModule,
  WorkOrderListModule
];

const OTHER_LIBS_MODULES = [];

const COMPONENTS = [ImportReportPopupComponent, DialogUnitConversionMatrixComponent];

const DYNAMIC_COMPONENTS = [
  UnitConversionMatrixComponent,
  WorkPackageSchedulingComponent,
  WorkshopHomeComponent,
  ReferentialDashboardSearchComponent
];

const SERVICES = [
  UnitConversionMatrixService,
  ReferentialDashboardSearchService,
  UnitConversionMatrixApi,
  WorkSchedulingService,
  WorkshopHomeService,
  ItemSearchService,
  DialogWorkOrderEditService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ModalModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...PRIMENG_MODULES,
    ...OTHER_LIBS_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class MaintenanceModule {}
