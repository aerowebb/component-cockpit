import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule, FileUploadModule, OverlayPanelModule, SplitButtonModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { WorkscopeComponentApi } from '../../../shared/api/workscope-component.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { AddEditInventoryModule } from '../../../shared/components/add-edit-inventory/add-edit-inventory.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { CockpitWorkscopeFormComponent } from './form/cockpit-workscope-form.component';
import { CockpitWorkscopeFormService } from './form/cockpit-workscope-form.service';
import { LoadWorkscopePopupComponent } from './form/load-workscope-popup/load-workscope-popup.component';
import { ManageConfigurationFormComponent } from './form/manage-configuration/manage-configuration-form.component';
import { ManageRemovalCausesFormComponent } from './form/manage-removal-causes/manage-removal-causes-form.component';
import { WorkscopeImportPopupComponent } from './form/workscope-import-popup/workscope-import-popup.component';
import { WorkscopeTableFilterComponent } from './form/workscope-table-filters/workscope-table-filters.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  ChartModule,
  CheckboxModule,
  CalendarModule,
  TreeTableModule,
  ProgressBarModule,
  ModalModule,
  TableModule,
  InputTextareaModule,
  SelectButtonModule,
  DropdownModule,
  FileUploadModule,
  OverlayPanelModule,
  AddEditInventoryModule,
  AutoCompleteModule,
  SplitButtonModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [LoadWorkscopePopupComponent, WorkscopeTableFilterComponent, WorkscopeImportPopupComponent];

const DYNAMIC_COMPONENTS = [
  CockpitWorkscopeFormComponent,
  ManageConfigurationFormComponent,
  ManageRemovalCausesFormComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [CockpitWorkscopeFormService];

/******************************************************************************
 * Api's
 *************************************************************************** */

const APIS = [WorkscopeComponentApi];

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
  providers: [...SERVICES, ...APIS]
})
export class CockpitWorkscopeModule {}
