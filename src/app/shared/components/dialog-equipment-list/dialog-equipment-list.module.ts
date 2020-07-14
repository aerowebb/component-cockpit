import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
// import { ModalModule } from '../modal/modal.module';

import { DialogEquipmentListComponent } from './dialog-equipment-list.component';
import { DialogEquipmentListService } from './dialog-equipment-list.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DialogModule, DropdownModule, TableModule]; // TODO: replace DialogModule by ModalModule

// const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogEquipmentListComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogEquipmentListService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES
    // ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class DialogEquipmentListModule {}
