import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { FileService } from '../../../shared/services/file.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { WorkOrderTableFiltersModule } from '../work-package/form/work-order-table-filters/work-order-table-filters.module';
import { WorkOrderTableFiltersService } from '../work-package/form/work-order-table-filters/work-order-table-filters.service';
import { WorkPackageFormService } from '../work-package/form/work-package-form.service';
import { WorkPackageModule } from '../work-package/work-package.module';

import { WorkOrdersFormComponent } from './form/work-orders-form.component';
import { WorkOrdersFormService } from './form/work-orders-form.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  TableModule,
  TreeTableModule,
  CheckboxModule,
  ProgressBarModule,
  SplitButtonModule,
  CalendarModule,
  OverlayPanelModule
];

const INTERNAL_MODULES = [WorkPackageModule, WorkOrderTableFiltersModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [WorkOrdersFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [WorkOrdersFormService, WorkPackageFormService, WorkOrderTableFiltersService, FileService];

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
export class WorkOrdersModule {}
