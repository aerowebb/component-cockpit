import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DynamicAttributesHistoryModule } from '../dynamic-attributes-history/dynamic-attributes-history.module';

import { DynamicAttributeComponent } from './dynamic-attribute/dynamic-attribute.component';
import { DynamicAttributesComponent } from './dynamic-attributes.component';
import { DynamicAttributesService } from './dynamic-attributes.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, CheckboxModule, DropdownModule, TooltipModule];

const INTERNAL_MODULES = [DynamicAttributesHistoryModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DynamicAttributeComponent];

const EXPORTED_COMPONENTS = [DynamicAttributesComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DynamicAttributesService];

@NgModule({
  declarations: [...COMPONENTS, ...EXPORTED_COMPONENTS],
  exports: [...EXPORTED_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class DynamicAttributesModule {}
