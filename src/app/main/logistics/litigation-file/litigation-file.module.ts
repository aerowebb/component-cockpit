import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogActionPlanComponent } from './form/dialog-action-plan/dialog-action-plan.component';
import { DialogEstablishActionPlanComponent } from './form/dialog-establish-action-plan/dialog-establish-action-plan.component';
import { DialogTransferValidationComponent } from './form/dialog-transfer-validation/dialog-transfer-validation.component';
import { DialogValidateActionComponent } from './form/dialog-validate-action/dialog-validate-action.component';
import { LitigationFileFormComponent } from './form/litigation-file-form.component';
import { LitigationFileFormService } from './form/litigation-file-form.service';
import { LitigationFileSearchComponent } from './search/litigation-file-search.component';
import { LitigationFileSearchService } from './search/litigation-file-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputSwitchModule,
  InputTextareaModule,
  TableModule,
  TooltipModule,
  KeyFilterModule,
  MessageModule,
  ProgressBarModule,
  RadioButtonModule,
  SelectButtonModule,
  SplitButtonModule,
  TriStateCheckboxModule
];

const INTERNAL_MODULES = [ModalModule, ComponentSidebarModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogActionPlanComponent,
  DialogEstablishActionPlanComponent,
  DialogTransferValidationComponent,
  DialogValidateActionComponent
];

const DYNAMIC_COMPONENTS = [LitigationFileFormComponent, LitigationFileSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [LitigationFileSearchService, LitigationFileFormService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class LitigationFileModule {}
