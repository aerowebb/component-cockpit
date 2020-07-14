import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { AddEditInventoryModule } from '../../../shared/components/add-edit-inventory/add-edit-inventory.module';
import { ComponentMeasureModule } from '../../../shared/components/component-measure/component-measure.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { CockpitInspectionFormComponent } from './form/cockpit-inspection-form.component';
import { CockpitInspectionFormService } from './form/cockpit-inspection-form.service';
import { InfoSubAssemblyComponent } from './form/info-sub-assembly/info-sub-assembly.component';
import { SubAssemblyTableFiltersComponent } from './form/sub-assembly-table-filters/sub-assembly-table-filters.component';
import { TechnicalQuotationTableFiltersComponent } from './form/technical-quotation-table-filters/technical-quotation-table-filters.component';
import { TreeSubAssemblyComponent } from './form/tree-sub-assembly/tree-sub-assembly.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  ChartModule,
  ComponentMeasureModule,
  DropdownModule,
  InputTextareaModule,
  ModalModule,
  OverlayPanelModule,
  ProgressBarModule,
  SelectButtonModule,
  TableModule,
  TooltipModule,
  TreeTableModule,
  AddEditInventoryModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [
  CockpitInspectionFormComponent,
  InfoSubAssemblyComponent,
  SubAssemblyTableFiltersComponent,
  TechnicalQuotationTableFiltersComponent,
  TreeSubAssemblyComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [CockpitInspectionFormService];

/******************************************************************************
 * Api's
 *************************************************************************** */

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
export class CockpitInspectionModule {}
