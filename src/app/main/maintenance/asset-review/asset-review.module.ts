import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { AssetRevSearchModule } from '../../../shared/components/asset-rev-search/asset-rev-search.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DialogWorkPackageModule } from '../../../shared/components/dialog-work-package/dialog-work-package.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DefectListModule } from './../../../shared/components/defect-list/defect-list.module';
import { AssetReviewFormComponent } from './form/asset-review-form.component';
import { AssetReviewFormService } from './form/asset-review-form.service';
import { AssetViewScopeComponent } from './form/asset-view-scope/asset-view-scope.component';
import { FlightOperationsValidationComponent } from './form/flight-operations-validation/flight-operations-validation.component';
import { FlightOperationsValidationService } from './form/flight-operations-validation/flight-operations-validation.service';
import { DialogGenerateReportComponent } from './form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component';
import { DialogSimulateRecordComponent } from './form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component';
import { ARSearchComponent } from './search/ar-search.component';
import { ARSearchService } from './search/ar-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CheckboxModule,
  CalendarModule,
  ChartModule,
  DragDropModule,
  DropdownModule,
  KeyFilterModule,
  MessageModule,
  OverlayPanelModule,
  RadioButtonModule,
  SelectButtonModule,
  SplitButtonModule,
  PrimeNgTableModule,
  TooltipModule,
  TreeTableModule
];

const INTERNAL_MODULES = [
  TableModule,
  AssetRevSearchModule,
  ComponentSidebarModule,
  DialogSearchCustomerModule,
  DialogWorkPackageModule,
  ModalModule,
  DialogTableModule,
  DefectListModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [AssetViewScopeComponent, DialogSimulateRecordComponent, DialogGenerateReportComponent];

const DYNAMIC_COMPONENTS = [ARSearchComponent, AssetReviewFormComponent, FlightOperationsValidationComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ARSearchService, AssetReviewFormService, FlightOperationsValidationService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class AssetReviewModule {}
