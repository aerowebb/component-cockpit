import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
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
import { AtaCodeInputModule } from '../../../shared/components/ata-code-input/ata-code-input.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { CreateEventFormModule } from '../../../shared/components/create-event-form/create-event-form.module';
import { DialogCreateStockReceiptModule } from '../../../shared/components/dialog-create-stock-receipt/dialog-create-stock-receipt.module';
import { DialogMeasureReportModule } from '../../../shared/components/dialog-measure-report/dialog-measure-report.module';
import { DialogMeasureUpdateModule } from '../../../shared/components/dialog-measure-update/dialog-measure-update.module';
import { DialogSearchEvolutionModule } from '../../../shared/components/dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchModelModule } from '../../../shared/components/dialog-search-model/dialog-search-model.module';
import { DialogSearchPnModule } from '../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { DialogSearchRatingModule } from '../../../shared/components/dialog-search-rating/dialog-search-rating.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { AircraftFormComponent } from './aircraft/aircraft-form.component';
import { AircraftSearchComponent } from './aircraft/aircraft-search.component';
import { EngineFormComponent } from './engine/engine-form.component';
import { EngineSearchComponent } from './engine/engine-search.component';
import { EquipmentFormComponent } from './equipment/equipment-form.component';
import { EquipmentSearchComponent } from './equipment/equipment-search.component';
import { AssetFormService } from './form/asset-form.service';
import { AlertReportDialogComponent } from './form/popups/alert-report-dialog/alert-report-dialog.component';
import { AssetRemainingTableValuesComponent } from './form/popups/asset-remaining-table-values/asset-remaining-table-values.component';
import { CounterPopupFormComponent } from './form/popups/counter-popup-form/counter-popup-form.component';
import { CounterPopupFormService } from './form/popups/counter-popup-form/counter-popup-form.service';
import { DialogFlHistoryComponent } from './form/popups/dialog-fl-history/dialog-fl-history.component';
import { DialogStatusPopupyComponent } from './form/popups/dialog-status-popupy/dialog-status-popupy.component';
import { DialogUsageComponent } from './form/popups/dialog-usage/dialog-usage.component';
import { DocumentUploadDialogComponent } from './form/popups/document-upload-dialog/document-upload-dialog.component';
import { EditDataPopupFormComponent } from './form/popups/edit-data-popup-form/edit-data-popup-form.component';
import { EditDataPopupFormService } from './form/popups/edit-data-popup-form/edit-data-popup-form.service';
import { LimitPopupFormComponent } from './form/popups/limit-popop-form/limit-popup-form.component';
import { LimitPopupFormService } from './form/popups/limit-popop-form/limit-popup-form.service';
import { MeasureReportDialogComponent } from './form/popups/measure-report-dialog/measure-report-dialog.component';
import { ReportDialogComponent } from './form/popups/report-dialog/report-dialog.component';
import { ReportDialogFormService } from './form/popups/report-dialog/report-dialog.service';
import { SbadPopupFormComponent } from './form/popups/sbad-popup-form/sbad-popup-form.component';
import { SbadPopupFormService } from './form/popups/sbad-popup-form/sbad-popup-form.service';
import { AssetSearchService } from './search/asset-search.service';
import { DavAssetSearchService } from './search/asset-search.service-dassault';
import { SendToRepairPopupComponent } from './search/send-to-repair-popup/send-to-repair-popup.component';
import { ToolFormComponent } from './tool/tool-form.component';
import { ToolSearchComponent } from './tool/tool-search.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  KeyFilterModule,
  MessageModule,
  RadioButtonModule,
  SelectButtonModule,
  PrimeNgTableModule,
  TooltipModule,
  TreeTableModule,
  KeyFilterModule,
  MessageModule,
  FileUploadModule,
  ChartModule,
  OverlayPanelModule,
  SplitButtonModule,
  DialogMeasureReportModule,
  DialogMeasureUpdateModule
];

const INTERNAL_MODULES = [
  DialogTableModule,
  DialogSearchEvolutionModule,
  DialogSearchPnModule,
  ModalModule,
  DialogCreateStockReceiptModule,
  CreateEventFormModule,
  TableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  CounterPopupFormComponent,
  LimitPopupFormComponent,
  SbadPopupFormComponent,
  EditDataPopupFormComponent,
  DocumentUploadDialogComponent,
  DialogFlHistoryComponent,
  DialogStatusPopupyComponent,
  DialogUsageComponent,
  ReportDialogComponent,
  AlertReportDialogComponent,
  MeasureReportDialogComponent,
  SendToRepairPopupComponent
];

const DYNAMIC_COMPONENTS = [
  EquipmentSearchComponent,
  EquipmentFormComponent,
  EngineSearchComponent,
  EngineFormComponent,
  AircraftSearchComponent,
  AircraftFormComponent,
  AssetRemainingTableValuesComponent,
  ToolSearchComponent,
  ToolFormComponent
];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [
  AssetFormService,
  AssetSearchService,
  CounterPopupFormService,
  DavAssetSearchService,
  LimitPopupFormService,
  SbadPopupFormService,
  PageTocService,
  EditDataPopupFormService,
  ReportDialogFormService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AtaCodeInputModule,
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    DynamicAttributesModule,
    AppCommonSharedModule,
    DialogSearchModelModule,
    ComponentSidebarModule,
    DialogSearchRatingModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ManageSearchCriteriaModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class AssetModule {}
