import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule as PrimeNgTableModule } from 'primeng/table';

import { DocumentPopupFormModule } from '../../../../../main/human-resources/employee-form/popups/document-popup-form/document-popup-form.module';
import { DocumentUrlPopupFormModule } from '../../../../../main/human-resources/employee-form/popups/document-url-popup-form/document-url-popup-form.module';
import { AngularCommonSharedModule } from '../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../shared/app-common-shared.module';
import { ModalModule } from '../../../../../shared/components/modal/modal.module';
import { TableModule } from '../../../../../shared/components/table/table.module';

import { DocumentSectionComponent } from './document-section.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DropdownModule, CalendarModule, FileUploadModule, PrimeNgTableModule];

const INTERNAL_MODULES = [ModalModule, TableModule, DocumentPopupFormModule, DocumentUrlPopupFormModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DocumentSectionComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [];

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
export class DocumentSectionModule {}
