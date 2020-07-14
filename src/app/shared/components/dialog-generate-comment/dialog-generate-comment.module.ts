import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogSearchEvolutionModule } from '../dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchModificationModule } from '../dialog-search-modification/dialog-search-modification.module';
import { DialogSearchSbAdModule } from '../dialog-search-sbad/dialog-search-sbad.module';
import { ModalModule } from '../modal/modal.module';

import { DialogGenerateCommentComponent } from './dialog-generate-comment.component';
import { DialogGenerateCommentService } from './dialog-generate-comment.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  DialogModule,
  DropdownModule,
  TableModule,
  KeyFilterModule,
  MessageModule,
  DialogSearchEvolutionModule,
  DialogSearchSbAdModule,
  DialogSearchModificationModule
];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogGenerateCommentComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogGenerateCommentService];

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
export class DialogGenerateCommentModule {}
