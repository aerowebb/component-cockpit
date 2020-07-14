import { NgModule } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { GanttModule } from '../../../shared/components/gantt/gantt.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { DialogWorkOrderEditionModule } from '../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module';
import { WorkPackageModule } from '../work-package/work-package.module';

import { WorkOrdersCalendarFormComponent } from './form/work-orders-calendar-form.component';
import { WorkOrdersCalendarFormService } from './form/work-orders-calendar-form.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule, GanttModule, SliderModule];

const INTERNAL_MODULES = [DialogWorkOrderEditionModule, WorkPackageModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [WorkOrdersCalendarFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [WorkOrdersCalendarFormService];

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
export class WorkOrdersCalendarModule {}
