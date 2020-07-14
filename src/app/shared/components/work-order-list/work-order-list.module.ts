import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/progressbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { DynamicComponentLoaderModule } from '../../../main/dynamic-component-loader/dynamic-component-loader.module';
import { WorkOrdersFormService } from '../../../main/maintenance/work-orders/form/work-orders-form.service';
import { DialogWorkOrderEditionModule } from '../../../main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module';
import { DialogWorkOrderSchedulingEditionModule } from '../../../main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module';
import { WorkOrderTableFiltersModule } from '../../../main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.module';
import { WorkPackageFormService } from '../../../main/maintenance/work-package/form/work-package-form.service';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { FileService } from '../../services/file.service';

import { WorkOrderListComponent } from './form/work-order-list.component';
import { WorkOrderListService } from './form/work-order-list.service';
import { WorkPackageListDialogComponent } from './form/work-package-list-dialog/work-package-list-dialog.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  TableModule,
  TreeTableModule,
  CheckboxModule,
  DropdownModule,
  ProgressBarModule,
  SplitButtonModule,
  CalendarModule,
  OverlayPanelModule,
  ModalModule
];

const INTERNAL_MODULES = [
  WorkOrderTableFiltersModule,
  DialogWorkOrderEditionModule,
  DialogWorkOrderSchedulingEditionModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [WorkOrderListComponent, WorkPackageListDialogComponent];

const DYNAMIC_COMPONENTS = [];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [WorkPackageFormService, FileService, WorkOrderListService, WorkOrdersFormService];

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
  exports: [WorkOrderListComponent],
  providers: [...SERVICES]
})
export class WorkOrderListModule {}
