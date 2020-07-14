import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { ManageSearchCriteriaModule } from '../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';

const OTHER_LIBS_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  RadioButtonModule,
  SplitButtonModule,
  TableModule,
  TooltipModule,
  TriStateCheckboxModule,
  KeyFilterModule,
  MessageModule
];

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [];

const SERVICES = [];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    ModalModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...OTHER_LIBS_MODULES
  ],
  providers: [...SERVICES]
})
export class LogisticsModule {}
