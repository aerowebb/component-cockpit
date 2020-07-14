import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

import { TableModule } from '../../..//shared/components/table/table.module';
import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ConfigurationDiagramFormComponent } from './form/configuration-diagram-form.component';
import { ConfigurationDiagramFormService } from './form/configuration-diagram-form.service';
import { ConfigurationDiagramSearchComponent } from './search/configuration-diagram-search.component';
import { ConfigurationDiagramSearchService } from './search/configuration-diagram-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, CheckboxModule,
                          DropdownModule, PrimeNgTableModule, TooltipModule, TreeModule];

const INTERNAL_MODULES = [ComponentSidebarModule, TableModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [ConfigurationDiagramFormComponent, ConfigurationDiagramSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ConfigurationDiagramFormService, ConfigurationDiagramSearchService];

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
export class ConfigurationDiagramModule {}
