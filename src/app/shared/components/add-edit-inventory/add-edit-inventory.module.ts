import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule, FileUploadModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { DynamicComponentLoaderModule } from '../../../main/dynamic-component-loader/dynamic-component-loader.module';
import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { CockpitComponentApi } from '../../api/cockpit-component.api';

import { AddEditInventoryComponent } from './add-edit-inventory.component';
import { AddEditInventoryService } from './add-edit-inventory.service';
import { DialogCockpitBidoDocumentComponent } from './dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component';
import { DialogFindingsComponent } from './dialog-findings/dialog-findings.component';
import { DocumentUploadDialogComponent } from './document-upload-dialog/document-upload-dialog.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CheckboxModule,
  ModalModule,
  DropdownModule,
  MessageModule,
  RadioButtonModule,
  PrimeNgTableModule,
  SelectButtonModule,
  TableModule,
  TooltipModule,
  CardModule,
  SplitButtonModule,
  OverlayPanelModule,
  InputSwitchModule,
  ProgressBarModule,
  FileUploadModule,
  MultiSelectModule,
  AutoCompleteModule,
  CalendarModule
];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  AddEditInventoryComponent,
  DialogFindingsComponent,
  DialogCockpitBidoDocumentComponent,
  DocumentUploadDialogComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [AddEditInventoryService, CockpitComponentApi];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class AddEditInventoryModule {}
