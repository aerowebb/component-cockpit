import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchItemModule } from '../../../shared/components/dialog-search-item/dialog-search-item.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DialogWorkPackageModule } from '../../../shared/components/dialog-work-package/dialog-work-package.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ComponentCockpitMatrixFiltersComponent } from './component-cockpit-matrix-filters/component-cockpit-matrix-filters.component';
import { ComponentCockpitMatrixComponent } from './component-cockpit-matrix.component';
import { ComponentCockpitMatrixService } from './component-cockpit-matrix.service';
import { DialogComponentCockpitMatrixComponent } from './dialog-component-cockpit-matrix/dialog-component-cockpit-matrix.component';
import { ImportReportExcelComponent } from './import-excel-popup/import-excel-popup.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  ChartModule,
  CheckboxModule,
  DragDropModule,
  DropdownModule,
  KeyFilterModule,
  FileUploadModule,
  MessageModule,
  OverlayPanelModule,
  RadioButtonModule,
  SelectButtonModule,
  SplitButtonModule,
  TableModule,
  TooltipModule,
  TreeTableModule,
  TreeModule,
  DataViewModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogSearchCustomerModule,
  DialogSearchEquipmentModule,
  DialogWorkPackageModule,
  ModalModule,
  DialogTableModule,
  DialogSearchItemModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogComponentCockpitMatrixComponent, ImportReportExcelComponent];

const DYNAMIC_COMPONENTS = [ComponentCockpitMatrixComponent, ComponentCockpitMatrixFiltersComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ComponentCockpitMatrixService];

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
export class ComponentCockpitMatrixModule {}
