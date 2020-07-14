import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { AssetRevSearchModule } from '../../../shared/components/asset-rev-search/asset-rev-search.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchTaskModule } from '../../../shared/components/dialog-search-task/dialog-search-task.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DialogWorkPackageModule } from '../../../shared/components/dialog-work-package/dialog-work-package.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { WorkPackageListModule } from '../../../shared/components/work-package-list/work-package-list.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { AssetViewScopeComponent } from './asset-view-scope/asset-view-scope.component';
import { ConfigurationControlComponent } from './configuration-control.component';
import { ConfigurationControlService } from './configuration-control.service';
import { DialogHelpComponent } from './dialog-help/dialog-help.component';
import { DialogWorkOrderCreationComponent } from './dialog-work-order/dialog-work-order.component';
import { DialogWorkOrderCreationService } from './dialog-work-order/dialog-work-order.service';
import { InstallationEquipmentComponent } from './installation-equipment/installation-equipment.component';
import { RemovalEquipmentComponent } from './removal-equipment/removal-equipment.component';
import { ConfigurationControlSearchComponent } from './search/configuration-control-search.component';
import { ConfigurationControlSearchService } from './search/configuration-control-search.service';

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
  MessageModule,
  OverlayPanelModule,
  RadioButtonModule,
  SelectButtonModule,
  SplitButtonModule,
  TableModule,
  ToggleButtonModule,
  TooltipModule,
  TreeTableModule,
  TreeModule
];

const INTERNAL_MODULES = [
  AssetRevSearchModule,
  ComponentSidebarModule,
  DialogSearchCustomerModule,
  DialogSearchEquipmentModule,
  DialogSearchTaskModule,
  WorkPackageListModule,
  DialogWorkPackageModule,
  ModalModule,
  DialogTableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [AssetViewScopeComponent, DialogHelpComponent, DialogWorkOrderCreationComponent];

const DYNAMIC_COMPONENTS = [
  ConfigurationControlSearchComponent,
  ConfigurationControlComponent,
  InstallationEquipmentComponent,
  RemovalEquipmentComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ConfigurationControlSearchService, ConfigurationControlService, DialogWorkOrderCreationService];

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
export class ConfigurationControlModule {}
