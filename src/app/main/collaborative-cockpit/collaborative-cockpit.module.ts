import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { AssetsSelectionDialogModule } from '../../shared/components/dialog-assets-selection/assets-selection-dialog.module';
import { DialogSearchCustomerModule } from '../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchEquipmentModule } from '../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchItemModule } from '../../shared/components/dialog-search-item/dialog-search-item.module';
import { DialogTableModule } from '../../shared/components/dialog-table/dialog-table.module';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';

import { EngineeringDataExchangeSearchComponent } from './engineering-data-exchange-search/engineering-data-exchange-search.component';
import { EgineeringDataExchangeSearchService } from './engineering-data-exchange-search/engineering-data-exchange-search.service';
import { ImportReportPopupComponent } from './engineering-data-exchange-search/import-report-popup/import-report-popup.component';
import { FleetDataExchangeComponent } from './fleet-data-exchange/fleet-data-exchange.component';
import { FleetDataExchangeService } from './fleet-data-exchange/fleet-data-exchange.service';
import { FlightDataExchangeComponent } from './flight-data-exchange/flight-data-exchange.component';
import { FlightDataExchangeService } from './flight-data-exchange/flight-data-exchange.service';
import { HrDataExchangeComponent } from './hr-data-exchange/hr-data-exchange.component';
import { HrDataExchangeService } from './hr-data-exchange/hr-data-exchange.service';
import { LogisticDataExchangeComponent } from './logistic-data-exchange/logistic-data-exchange.component';
import { LogisticDataExchangeService } from './logistic-data-exchange/logistic-data-exchange.service';

const PRIMENG_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  RadioButtonModule,
  SelectButtonModule,
  SplitButtonModule,
  TableModule,
  TooltipModule,
  TriStateCheckboxModule,
  FileUploadModule,
  KeyFilterModule,
  OverlayPanelModule,
  TreeTableModule
];

const COMPONENTS = [ImportReportPopupComponent];

const DYNAMIC_COMPONENTS = [
  EngineeringDataExchangeSearchComponent,
  FleetDataExchangeComponent,
  FlightDataExchangeComponent,
  HrDataExchangeComponent,
  LogisticDataExchangeComponent
];

const SERVICES = [
  EgineeringDataExchangeSearchService,
  FleetDataExchangeService,
  FlightDataExchangeService,
  HrDataExchangeService,
  LogisticDataExchangeService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ModalModule,
    DialogSearchCustomerModule,
    DialogSearchEquipmentModule,
    DialogSearchItemModule,
    DialogTableModule,
    AssetsSelectionDialogModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...PRIMENG_MODULES
  ],
  providers: [...SERVICES, DatePipe]
})
export class CollaborativeCockpitModule {}
