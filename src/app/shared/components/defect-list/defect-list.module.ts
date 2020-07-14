import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { CreateEventFormModule } from '../create-event-form/create-event-form.module';
import { ModalModule } from '../modal/modal.module';

import { AirworthinessTableRemainingValuesComponent } from './../../../main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component';
import { DialogTableModule } from './../dialog-table/dialog-table.module';
import { DefectListComponent } from './defect-list.component';
import { DefectListService } from './defect-list.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  SelectButtonModule,
  TooltipModule,
  TableModule,
  DialogTableModule,
  ModalModule,
  DropdownModule,
  CalendarModule
];

const INTERNAL_MODULES = [CreateEventFormModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DefectListComponent, AirworthinessTableRemainingValuesComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DefectListService];

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
export class DefectListModule {}
