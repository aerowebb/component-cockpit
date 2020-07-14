import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';


import { ComponentCockpitFormComponent } from './form/component-cockpit-form/component-cockpit-form.component';
import { ComponentCockpitFormService } from './form/component-cockpit-form/component-cockpit-form.service';
import { DialogComponentCockpitComponent } from './form/popups/dialog-component-cockpit/dialog-component-cockpit.component';
import { DialogComponentCockptService } from './form/popups/dialog-component-cockpit/dialog-component-cockpit.service';
import { ComponentCockpitSearchComponent } from './search/component-cockpit-search/component-cockpit-search.component';
import { ComponentCockpitSearchService } from './search/component-cockpit-search/component-cockpit-search.service';


/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  TableModule,
  TooltipModule,
  SelectButtonModule,
  RadioButtonModule,
  KeyFilterModule
];

const INTERNAL_MODULES = [DialogTableModule, DynamicAttributesModule, ModalModule, ComponentSidebarModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogComponentCockpitComponent];

const DYNAMIC_COMPONENTS = [ComponentCockpitSearchComponent, ComponentCockpitFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  ComponentCockpitSearchService,
  ComponentCockpitFormService,
  DialogComponentCockptService
];

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
export class ComponentCockpitModule {}
