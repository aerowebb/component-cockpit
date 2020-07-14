import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { WorkSchedulingService } from '../../services/work-scheduling.service';
import { ModalModule } from '../modal/modal.module';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { WorkSchedulingComponent } from '../work-scheduling/work-scheduling.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DropdownModule, TableModule, CalendarModule, TreeTableModule, TooltipModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [WorkSchedulingComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [WorkSchedulingService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES,
    SchedulerModule,
    SliderModule
  ],
  providers: [...SERVICES]
})
export class WorkSchedulingModule {}
