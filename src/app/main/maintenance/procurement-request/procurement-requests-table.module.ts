import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SelectButtonModule } from 'primeng/primeng';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AircraftMaintenanceApi } from '../../../shared/api/aircraft-maintenance.api';
import { AMProjectManagementApi } from '../../../shared/api/am-project-management.api';
import { BidtProcurementRequestApi } from '../../../shared/api/bidt-procurement-request.api';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { ProcurementRequestPopupModule } from '../../logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module';

import { MaterialAvailabilityIndicatorsComponent } from './material-availability-indicators/material-availability-indicators.component';
import { ProcurementRequestsTableComponent } from './procurement-requests-table.component';
import { ProcurementRequestsTableService } from './procurement-requests-table.service';
/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  FileUploadModule,
  PrimeNgTableModule,
  DialogModule,
  InputTextareaModule,
  MessageModule,
  DropdownModule,
  CheckboxModule,
  TooltipModule,
  OverlayPanelModule,
  SelectButtonModule
];

const INTERNAL_MODULES = [TableModule, ProcurementRequestPopupModule];

/******************************************************************************
 * Components
 *************************************************************************** */
const COMPONENTS = [ProcurementRequestsTableComponent, MaterialAvailabilityIndicatorsComponent];

const DYNAMIC_COMPONENTS = [];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ProcurementRequestsTableService];

export const API_PROVIDERS = [BidtProcurementRequestApi, AMProjectManagementApi, AircraftMaintenanceApi];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    TableModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...API_PROVIDERS, ...SERVICES]
})
export class ProcurementRequestsTableModule {}
