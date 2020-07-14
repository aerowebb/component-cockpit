import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../shared/app-common-shared.module';
import { ModalModule } from '../../../../../shared/components/modal/modal.module';
import { EmployeeFormService } from '../../employee-form.service';

import { DocumentPopupFormComponent } from './document-popup-form.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DropdownModule, TableModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DocumentPopupFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [EmployeeFormService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class DocumentPopupFormModule {}
