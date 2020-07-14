import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { DialogSearchMaintenanceProgramModule } from '../../../main/engineering-management/sbad-form/popups/dialog-search-maintenance-program/dialog-search-maintenance-program.module';
import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { ModalModule } from '../modal/modal.module';

import { DialogSearchSbAdComponent } from './dialog-search-sbad.component';
import { DialogSearchSbAdService } from './dialog-search-sbad.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DropdownModule, TableModule, TooltipModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchSbAdComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchSbAdService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DialogSearchMaintenanceProgramModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class DialogSearchSbAdModule {}
