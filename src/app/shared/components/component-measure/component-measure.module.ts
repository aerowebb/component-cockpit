import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { DynamicComponentLoaderModule } from '../../../main/dynamic-component-loader/dynamic-component-loader.module';
import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogTableModule } from '../dialog-table/dialog-table.module';

import { ComponentMeasureComponent } from './component-measure.component';
import { ComponentMeasureService } from './component-measure.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule, CalendarModule, SelectButtonModule, ChartModule, TableModule, CheckboxModule];

const INTERNAL_MODULES = [DialogTableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [ComponentMeasureComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ComponentMeasureService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES,
    DynamicComponentLoaderModule.forChild(COMPONENTS)
  ],
  providers: [...SERVICES]
})
export class ComponentMeasureModule {}
