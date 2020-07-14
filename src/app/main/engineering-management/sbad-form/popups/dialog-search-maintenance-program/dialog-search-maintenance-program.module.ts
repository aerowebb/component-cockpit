import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule as PrimeNgTableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../shared/app-common-shared.module';
import { DialogSearchPnAlternativesModule } from '../../../../../shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.module';
import { ModalModule } from '../../../../../shared/components/modal/modal.module';
import { TableModule } from '../../../../../shared/components/table/table.module';

import { MaintenanceProgramSearchService } from './../../../maintenance-program-search/maintenance-program-search.service';
import { DialogSearchMaintenanceProgramComponent } from './dialog-search-maintenance-program.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [PrimeNgTableModule, DropdownModule];

const INTERNAL_MODULES = [DialogSearchPnAlternativesModule, ModalModule, TableModule];

const PRIMENG_MODULES = [CalendarModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogSearchMaintenanceProgramComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [MaintenanceProgramSearchService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES,
    ...PRIMENG_MODULES
  ],
  providers: [...SERVICES]
})
export class DialogSearchMaintenanceProgramModule {}
