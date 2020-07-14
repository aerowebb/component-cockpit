import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../shared/app-common-shared.module';
import { ModalModule } from '../../../../shared/components/modal/modal.module';

import { DialogBireDocPugComponent } from './dialog-bire-doc-pug.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, InputTextareaModule, TableModule, FileUploadModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogBireDocPugComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ]
})
export class DialogBireDocPugModule {}
