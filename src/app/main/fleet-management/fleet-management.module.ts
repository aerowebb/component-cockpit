import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
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
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { AtaCodeInputModule } from '../../shared/components/ata-code-input/ata-code-input.module';
import { ComponentSidebarModule } from '../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogBidoCustomerModule } from '../../shared/components/dialog-bido-customer/dialog-bido-customer.module';
import { DialogBireDocumentModule } from '../../shared/components/dialog-bire-document/dialog-bire-document.module';
import { DialogEquipmentListModule } from '../../shared/components/dialog-equipment-list/dialog-equipment-list.module';
import { DialogMeasureReportModule } from '../../shared/components/dialog-measure-report/dialog-measure-report.module';
import { DialogMeasureUpdateModule } from '../../shared/components/dialog-measure-update/dialog-measure-update.module';
import { DialogSearchCustomerModule } from '../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchEquipmentModule } from '../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchEventModule } from '../../shared/components/dialog-search-event/dialog-search-event.module';
import { DialogSearchEvolutionModule } from '../../shared/components/dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchPnModule } from '../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { DialogSearchTaskModule } from '../../shared/components/dialog-search-task/dialog-search-task.module';
import { DialogStatusModule } from '../../shared/components/dialog-status/dialog-status.module';
import { DialogTableModule } from '../../shared/components/dialog-table/dialog-table.module';
import { DialogWorkPackageModule } from '../../shared/components/dialog-work-package/dialog-work-package.module';
import { DynamicAttributesHistoryModule } from '../../shared/components/dynamic-attributes-history/dynamic-attributes-history.module';
import { DynamicAttributesModule } from '../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../shared/components/table/table.module';
import { MailApi } from '../../shared/types/api-types/mail.api';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';
import { DialogWorkOrderEditService } from '../maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';

import { AssetLogFormComponent } from './asset-log/form/asset-log-form.component';
import { AssetLogFormService } from './asset-log/form/asset-log-form.service';
import { AssetLogTableRemainingValuesComponent } from './asset-log/form/asset-log-table-remaining-values/aseet-log-table-remaining-values.component';
import { AssetDialogTaskCountersComponent } from './asset-maintenance-plan/asset-dialog-task-counters/asset-dialog-task-counters.component';
import { AssetMaintenancePlanComponent } from './asset-maintenance-plan/asset-maintenance-plan.component';
import { AssetMaintenancePlanService } from './asset-maintenance-plan/asset-maintenance-plan.service';
import { AssetMpReportPopupFormComponent } from './asset-maintenance-plan/asset-mp-report-popup-form/asset-mp-report-popup-form.component';
import { TaskReportPopupFormComponent } from './asset-maintenance-plan/task-report-popup-form/task-report-popup-form.component';
import { AssetMeasureLogFormComponent } from './asset-measure-log/form/asset-measure-log-form.component';
import { AssetMeasureLogFormService } from './asset-measure-log/form/asset-measure-log-form.service';
import { MeasureValueFormPopupComponent } from './asset-measure-log/form/popups/value-form-popup/value-form-popup.component';
// import { EquipmentFormComponent } from './equipment/equipment-form/equipment-form.component';
// import { EquipmentSearchComponent } from './equipment/equipment-search/equipment-search.component';
import { DefectFormComponent } from './event/defect-form/defect-form.component';
import { DialogDefectBidoDocumentComponent } from './event/defect-form/dialog-defect-bido-document/dialog-defect-bido-document.component';
import { DialogDefectComponentComponent } from './event/defect-form/dialog-defect-component/dialog-defect-component.component';
import { DialogDefectTaskComponent } from './event/defect-form/dialog-defect-task/dialog-defect-task.component';
import { DialogAddParamValueComponent } from './event/event-create/dialog-add-param-value/dialog-add-param-value.component';
import { DialogAddSymptomComponent } from './event/event-create/dialog-add-symptom/dialog-add-symptom.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { EventCreateService } from './event/event-create/event-create.service';
import { EventImportPopupComponent } from './event/event-create/event-import-popup/event-import-popup.component';
import { EventSearchComponent } from './event/event-search/event-search.component';
import { EventService } from './event/event.service';
import { DialogUpdateFdeReferenceComponent } from './event/fmd-event-form/dialog-update-fde-reference/dialog-update-fde-reference.component';
import { DialogBusinessPartnerBidoDocumentComponent } from './event/fmd-event-form/fmd-event-form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component';
import { FmdEventFormComponent } from './event/fmd-event-form/fmd-event-form/fmd-event-form.component';
import { FleetDataCopySearchComponent } from './fleet-data-copy-search/fleet-data-copy-search.component';
import { FleetDataCopySearchService } from './fleet-data-copy-search/fleet-data-copy-search.service';
import { FleetDataCopyPopupComponent } from './fleet-data-copy-search/popups/fleet-data-copy-popup/fleet-data-copy-popup.component';
import { FleetDataCopyReportPopupComponent } from './fleet-data-copy-search/popups/fleet-data-copy-report-popup/fleet-data-copy-report-popup.component';
import { FleetDataFormComponent } from './fleet-data-form/fleet-data-form.component';
import { FleetDataTransferOwnerDialogComponent } from './fleet-data-transfer-search/dialogs/fleet-data-transfer-owner-dialog/fleet-data-transfer-owner-dialog.component';
import { FleetDataTransferReportDialogComponent } from './fleet-data-transfer-search/dialogs/fleet-data-transfer-report-dialog/fleet-data-transfer-report-dialog.component';
import { FleetDataTransferSearchComponent } from './fleet-data-transfer-search/fleet-data-transfer-search.component';
import { FleetDataTransferSearchService } from './fleet-data-transfer-search/fleet-data-transfer-search.service';
import { AssetSelectionPopupComponent } from './fleet-form/asset-selection-popup/asset-selection-popup.component';
import { FleetFormComponent } from './fleet-form/fleet-form.component';
import { FleetFormService } from './fleet-form/fleet-form.service';
import { MultipleAssetsSelectionPopupComponent } from './fleet-form/multiple-assets-selection-popup/multiple-assets-selection-popup.component';
import { FleetSearchComponent } from './fleet-search/fleet-search.component';
import { FleetSearchService } from './fleet-search/fleet-search.service';
import { FunctionalLocationAssignmentComponent } from './functional-location-assignment/functional-location-assignment.component';
import { FunctionalLocationAssignmentService } from './functional-location-assignment/functional-location-assignment.service';
import { DialogInstallAssetComponent } from './install-asset/dialog-install-asset/dialog-install-asset.component';
import { DialogInstallReportComponent } from './install-asset/dialog-install-report/dialog-install-report.component';
import { InstallAssetComponent } from './install-asset/install-asset.component';
import { InstallAssetService } from './install-asset/install-asset.service';
import { ReportPopupFormComponent } from './remove-asset/popups/report-popup-form/report-popup-form.component';
import { RemoveAssetComponent } from './remove-asset/remove-asset.component';
import { RemoveAssetService } from './remove-asset/remove-asset.service';
import { SearchAllWorkPackageComponent } from './search-work-package/search-work-package.component';

const PRIMENG_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  RadioButtonModule,
  SplitButtonModule,
  PrimeNgTableModule,
  TooltipModule,
  TriStateCheckboxModule,
  FileUploadModule,
  KeyFilterModule,
  OverlayPanelModule,
  InputSwitchModule,
  TreeTableModule,
  SelectButtonModule,
  MessageModule,
  ChartModule,
  DialogMeasureUpdateModule,
  DialogMeasureReportModule
];

const API = [MailApi];

const COMPONENTS = [
  AssetSelectionPopupComponent,
  DialogDefectBidoDocumentComponent,
  DialogDefectComponentComponent,
  DialogDefectTaskComponent,
  MultipleAssetsSelectionPopupComponent,
  ReportPopupFormComponent,
  FleetDataCopyPopupComponent,
  FleetDataCopyReportPopupComponent,
  FleetDataTransferOwnerDialogComponent,
  FleetDataTransferReportDialogComponent,
  DialogInstallAssetComponent,
  DialogInstallReportComponent,
  AssetMpReportPopupFormComponent,
  MeasureValueFormPopupComponent,
  AssetDialogTaskCountersComponent,
  AssetLogTableRemainingValuesComponent,
  DialogAddSymptomComponent,
  DialogAddParamValueComponent,
  EventImportPopupComponent,
  DialogBusinessPartnerBidoDocumentComponent,
  FleetDataFormComponent,
  TaskReportPopupFormComponent
];

const DYNAMIC_COMPONENTS = [
  AssetMaintenancePlanComponent,
  FmdEventFormComponent,
  DefectFormComponent,
  EventSearchComponent,
  FleetFormComponent,
  FleetSearchComponent,
  InstallAssetComponent,
  RemoveAssetComponent,
  FleetDataCopySearchComponent,
  FleetDataTransferSearchComponent,
  AssetLogFormComponent,
  AssetMeasureLogFormComponent,
  EventCreateComponent,
  FunctionalLocationAssignmentComponent,
  SearchAllWorkPackageComponent
];

const SERVICES = [
  AssetMaintenancePlanService,
  EventService,
  EventCreateService,
  FleetFormService,
  FleetSearchService,
  InstallAssetService,
  RemoveAssetService,
  FleetDataCopySearchService,
  FleetDataTransferSearchService,
  AssetLogFormService,
  AssetMeasureLogFormService,
  FunctionalLocationAssignmentService,
  DialogWorkOrderEditService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS, FmdEventFormComponent, DialogUpdateFdeReferenceComponent],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    ModalModule,
    AtaCodeInputModule,
    DialogBidoCustomerModule,
    DialogEquipmentListModule,
    DialogSearchCustomerModule,
    DialogSearchEquipmentModule,
    DialogSearchEvolutionModule,
    DialogSearchPnModule,
    StatusUpdateHistoryModule,
    DialogStatusModule,
    DialogTableModule,
    DialogWorkPackageModule,
    DynamicAttributesHistoryModule,
    DialogSearchTaskModule,
    DynamicAttributesModule,
    DialogSearchEventModule,
    ComponentSidebarModule,
    DialogBireDocumentModule,
    TableModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...PRIMENG_MODULES
  ],
  providers: [...API, ...SERVICES]
})
export class FleetManagementModule {}
