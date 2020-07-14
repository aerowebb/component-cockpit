import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { FileService } from '../../../shared/services/file.service';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { MyJobsCardsFormComponent } from './form/my-jobs-cards-form.component';
import { MyJobsCardsFormService } from './form/my-jobs-cards-form.service';
import { MyJobsCardsTableFiltersComponent } from './my-jobs-cards-table-filters/my-jobs-cards-table-filters.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  TableModule,
  ProgressBarModule,
  OverlayPanelModule,
  SelectButtonModule,
  CheckboxModule,
  DropdownModule,
  CalendarModule,
  RadioButtonModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [MyJobsCardsTableFiltersComponent];

const DYNAMIC_COMPONENTS = [MyJobsCardsFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [MyJobsCardsFormService, FileService];

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
export class MyJobsCardsModule {}
