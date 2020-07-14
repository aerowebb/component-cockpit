import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';
import { UnitConversionMatrixApi } from '../../shared/api/unit-matrix-conversion.api';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { AtaCodeInputModule } from '../../shared/components/ata-code-input/ata-code-input.module';
import { ComponentSidebarModule } from '../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogBireDocumentModule } from '../../shared/components/dialog-bire-document/dialog-bire-document.module';
import { DialogGenerateCommentModule } from '../../shared/components/dialog-generate-comment/dialog-generate-comment.module';
import { DialogSearchEvolutionModule } from '../../shared/components/dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchFunctionalLocationModule } from '../../shared/components/dialog-search-functional-location/dialog-search-functional-location.module';
import { DialogSearchItemModule } from '../../shared/components/dialog-search-item/dialog-search-item.module';
import { DialogSearchModelModule } from '../../shared/components/dialog-search-model/dialog-search-model.module';
import { DialogSearchPartModule } from '../../shared/components/dialog-search-part/dialog-search-part.module';
import { DialogSearchQualificationModule } from '../../shared/components/dialog-search-qualification/dialog-search-qualification.module';
import { DialogSearchSbAdModule } from '../../shared/components/dialog-search-sbad/dialog-search-sbad.module';
import { DialogSearchTaskModule } from '../../shared/components/dialog-search-task/dialog-search-task.module';
import { DialogStatusModule } from '../../shared/components/dialog-status/dialog-status.module';
import { DialogTableModule } from '../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesHistoryModule } from '../../shared/components/dynamic-attributes-history/dynamic-attributes-history.module';
import { DynamicAttributesModule } from '../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';
import { ProcurementRequestPopupModule } from '../logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module';
import { TransferOrderPopupModule } from '../logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.module';

import { AdditionalMaintenanceGuidelineFormComponent } from './additional-maintenance-guideline/form/additional-maintenance-guideline-form.component';
import { AdditionalMaintenanceGuidelineSearchComponent } from './additional-maintenance-guideline/search/additional-maintenance-guideline-search.component';
import { AirworthinessDirectiveFormComponent } from './airworthiness-directive-form/airworthiness-directive-form.component';
import { AirworthinessDirectiveSearchComponent } from './airworthiness-directive-search/airworthiness-directive-search.component';
import { AirworthinessDocumentSearchService } from './airworthiness-document-search/airworthiness-document-search.service';
import { DialogBireDocPugModule } from './dea-dia/dialog-bire-document/dialog-bire-doc-pug.module';
import { EvolutionFormComponent } from './evolution-form/evolution-form.component';
import { EvolutionFormService } from './evolution-form/evolution-form.service';
import { ApplicabilitiesPopupFormComponent } from './evolution-form/popups/applicabilities-popup-form/applicabilities-popup-form.component';
import { ApplicabilitiesPopupFormService } from './evolution-form/popups/applicabilities-popup-form/applicabilities-popup-form.service';
import { AssetsPopupFormComponent } from './evolution-form/popups/assets-popup-form/assets-popup-form.component';
import { AssetsPopupFormService } from './evolution-form/popups/assets-popup-form/assets-popup-form.service';
import { EvolImportPopupComponent } from './evolution-form/popups/evol-import-popup/evol-import-popup.component';
import { ImpactsEvolPopupFormComponent } from './evolution-form/popups/impacts-evol-popup-form/impacts-evol-popup-form.component';
import { ImpactsEvolPopupFormService } from './evolution-form/popups/impacts-evol-popup-form/impacts-evol-popup-form.service';
import { ImpactsItemPopupFormComponent } from './evolution-form/popups/impacts-item-popup-form/impacts-item-popup-form.component';
import { ImpactsItemPopupFormService } from './evolution-form/popups/impacts-item-popup-form/impacts-item-popup-form.service';
import { ImpactsPopupFormComponent } from './evolution-form/popups/impacts-popup-form/impacts-popup-form.component';
import { ImpactsPopupFormService } from './evolution-form/popups/impacts-popup-form/impacts-popup-form.service';
import { InterdependencesPopupFormComponent } from './evolution-form/popups/interdependences-popup-form/interdependences-popup-form.component';
import { InterdependencesPopupFormService } from './evolution-form/popups/interdependences-popup-form/interdependences-popup-form.service';
import { ModificationsPopupFormComponent } from './evolution-form/popups/modifications-popup-form/modifications-popup-form.component';
import { ModificationsPopupFormService } from './evolution-form/popups/modifications-popup-form/modifications-popup-form.service';
import { SbadPopupFormComponent } from './evolution-form/popups/sbad-popup-form/sbad-popup-form.component';
import { SbadPopupFormService } from './evolution-form/popups/sbad-popup-form/sbad-popup-form.service';
import { EvolutionSearchComponent } from './evolution-search/evolution-search.component';
import { EvolutionSearchService } from './evolution-search/evolution-search.service';
import { FamilyFormComponent } from './family-form/family-form.component';
import { FamilyFormService } from './family-form/family-form.service';
import { FamilyModificationPopupFormComponent } from './family-form/popups/family-modification-popup/family-modification-popup.component';
import { FamilyRatingPopupFormComponent } from './family-form/popups/family-rating-popup/family-rating-popup.component';
import { FamilySearchComponent } from './family-search/family-search.component';
import { FamilySearchService } from './family-search/family-search.service';
import { FunctionalLocationFormComponent } from './functional-location-form/functional-location-form.component';
import { FunctionalLocationFormService } from './functional-location-form/functional-location-form.service';
import { FamilyVariantPopupFormComponent } from './functional-location-form/popups/family-variant-popup-form.component';
import { FamilyVariantPopupFormService } from './functional-location-form/popups/family-variant-popup-form.service';
import { ModelPopupFormComponent } from './functional-location-form/popups/model-popup-form/model-popup-form.component';
import { ModelPopupFormService } from './functional-location-form/popups/model-popup-form/model-popup-form.service';
import { FunctionalLocationSearchComponent } from './functional-location-search/functional-location-search.component';
import { FunctionalLocationSearchService } from './functional-location-search/functional-location-search.service';
import { ItemSearchService } from './item/search/item-search.service';
import { MaintenanceProgramFormMhiaelService } from './maintenance-program-form/maintenance-program-form-mhiael.service';
import { MaintenanceProgramFormComponent } from './maintenance-program-form/maintenance-program-form.component';
import { MaintenanceProgramFormService } from './maintenance-program-form/maintenance-program-form.service';
import { AssignAssetsPopupFormComponent } from './maintenance-program-form/popups/assign-assets-popup-form/assign-assets-popup-form.component';
import { ReportPopupFormComponent } from './maintenance-program-form/popups/report-popup-form/report-popup-form.component';
import { TaskVisitPopupFormComponent } from './maintenance-program-form/popups/task-visit-popup-form/task-visit-popup-form.component';
import { UpgradePopupFormComponent } from './maintenance-program-form/popups/upgrade-popup-form/upgrade-popup-form.component';
import { ChangeRecordFormComponent } from './maintenance-program-search/change-record-form/change-record-form.component';
import { ChangeRecordFormService } from './maintenance-program-search/change-record-form/change-record-form.service';
import { DialogCompareMaintenanceProgramsComponent } from './maintenance-program-search/dialog-compare-maintenance-programs/dialog-compare-maintenance-programs.component';
import { MaintenanceProgramSearchComponent } from './maintenance-program-search/maintenance-program-search.component';
import { MaintenanceProgramSearchService } from './maintenance-program-search/maintenance-program-search.service';
import { MaintenanceProgramUpdatesListComponent } from './maintenance-program-updates-list/maintenance-program-updates-list.component';
import { MaintenanceProgramUpdatesListService } from './maintenance-program-updates-list/maintenance-program-updates-list.service';
import { ModificationFormComponent } from './modification-form/modification-form.component';
import { ModificationFormService } from './modification-form/modification-form.service';
import { ModificationAssetsPopupFormComponent } from './modification-form/popups/modification-assets-popup-form.component';
import { ModificationAssetsPopupFormService } from './modification-form/popups/modification-assets-popup-form.service';
import { ModificationSearchComponent } from './modification-search/modification-search.component';
import { ModificationSearchService } from './modification-search/modification-search.service';
import { PartNumberFormComponent } from './part-number-form/part-number-form.component';
import { PartNumberFormService } from './part-number-form/part-number-form.service';
import { ReferenceMeasurementsPopupFormComponent } from './part-number-form/popups/ref-measurements-popup-form.component';
import { ReferenceMeasurementsPopupFormService } from './part-number-form/popups/ref-measurements-popup-form.service';
import { PartNumberSearchComponent } from './part-number-search/part-number-search.component';
import { PartNumberSearchService } from './part-number-search/part-number-search.service';
import { DialogSearchMaintenanceProgramModule } from './sbad-form/popups/dialog-search-maintenance-program/dialog-search-maintenance-program.module';
import { SbadApplicabilitiesPopupFormComponent } from './sbad-form/popups/sb-ad-applicabilities-popup/sb-ad-applicabilities-popup.component';
import { SbadApplicabilitiesPopupFormService } from './sbad-form/popups/sb-ad-applicabilities-popup/sb-ad-applicabilities-popup.service';
import { SbAdAssetsPopupFormComponent } from './sbad-form/popups/sb-ad-asset-popup/sb-ad-assets-popup-form.component';
import { SbadImportPopupComponent } from './sbad-form/popups/sb-ad-import-popup/sb-ad-import-popup.component';
import { SbAdLimitsPeriodicitiesPopupFormComponent } from './sbad-form/popups/sb-ad-limits-periodicities-popup/sb-ad-limits-periodicities-popup-form.component';
import { SbAdLimitsPeriodicitiesPopupFormService } from './sbad-form/popups/sb-ad-limits-periodicities-popup/sb-ad-limits-periodicities-popup-form.service';
import { SbadFormMhiaelService } from './sbad-form/sbad-form-mhiael.service';
import { SbadFormComponent } from './sbad-form/sbad-form.component';
import { SbadFormService } from './sbad-form/sbad-form.service';
import { SbadSearchComponent } from './sbad-search/sbad-search.component';
import { ConversionMatrixApplicabilitiesPopupFormComponent } from './unit-conversion-matrix/form/cm-applicabilities-popup/cm-applicabilities-popup.component';
import { ConversionMatrixApplicabilitiesPopupFormService } from './unit-conversion-matrix/form/cm-applicabilities-popup/cm-applicabilities-popup.service';
import { DialogUnitConversionMatrixComponent } from './unit-conversion-matrix/form/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component';
import { UnitConversionMatrixFormComponent } from './unit-conversion-matrix/form/unit-conversion-matrix-form.component';
import { ImportReportPopupComponent } from './unit-conversion-matrix/import-report-popup/import-report-popup.component';
import { UnitConversionMatrixSearchComponent } from './unit-conversion-matrix/search/unit-conversion-matrix-search.component';
import { UnitConversionMatrixService } from './unit-conversion-matrix/unit-conversion-matrix.service';
import { DialogAssociatedTasksMaintenanceComponent } from './visit-form/dialog-associated-tasks-maintenance/dialog-associated-tasks-maintenance.component';
import { VisitFormComponent } from './visit-form/visit-form.component';
import { VisitFormService } from './visit-form/visit-form.service';
import { VisitSearchComponent } from './visit-search/visit-search.component';
import { VisitSearchService } from './visit-search/visit-search.service';

const PRIMENG_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  ListboxModule,
  InputTextareaModule,
  RadioButtonModule,
  SplitButtonModule,
  PrimeNgTableModule,
  TooltipModule,
  TreeModule,
  TriStateCheckboxModule,
  FileUploadModule,
  KeyFilterModule,
  OverlayPanelModule,
  TreeTableModule,
  MessageModule
];

const COMPONENTS = [
  ModificationAssetsPopupFormComponent,
  SbAdAssetsPopupFormComponent,
  SbadApplicabilitiesPopupFormComponent,
  SbadPopupFormComponent,
  ModificationsPopupFormComponent,
  ApplicabilitiesPopupFormComponent,
  AssetsPopupFormComponent,
  InterdependencesPopupFormComponent,
  ImpactsEvolPopupFormComponent,
  ImpactsItemPopupFormComponent,
  ImpactsPopupFormComponent,
  DialogAssociatedTasksMaintenanceComponent,
  FamilyModificationPopupFormComponent,
  FamilyRatingPopupFormComponent,
  ReferenceMeasurementsPopupFormComponent,
  DialogCompareMaintenanceProgramsComponent,
  TaskVisitPopupFormComponent,
  UpgradePopupFormComponent,
  AssignAssetsPopupFormComponent,
  ReportPopupFormComponent,
  SbadImportPopupComponent,
  SbadImportPopupComponent,
  SbAdLimitsPeriodicitiesPopupFormComponent,
  EvolImportPopupComponent,
  ImportReportPopupComponent,
  DialogUnitConversionMatrixComponent,
  ConversionMatrixApplicabilitiesPopupFormComponent
];

const DYNAMIC_COMPONENTS = [
  AdditionalMaintenanceGuidelineFormComponent,
  AdditionalMaintenanceGuidelineSearchComponent,
  AirworthinessDirectiveFormComponent,
  AirworthinessDirectiveSearchComponent,
  EvolutionFormComponent,
  EvolutionSearchComponent,
  SbadSearchComponent,
  SbadFormComponent,
  VisitSearchComponent,
  VisitFormComponent,
  ModificationSearchComponent,
  ModificationFormComponent,
  MaintenanceProgramSearchComponent,
  MaintenanceProgramFormComponent,
  MaintenanceProgramUpdatesListComponent,
  FamilySearchComponent,
  FamilyFormComponent,
  PartNumberSearchComponent,
  PartNumberFormComponent,
  FunctionalLocationSearchComponent,
  FunctionalLocationFormComponent,
  ChangeRecordFormComponent,
  UnitConversionMatrixSearchComponent,
  UnitConversionMatrixFormComponent,
  // Dont place your new DYNAMIC_COMPONENT after FamilyVariantPopupFormComponent and ModelPopupFormComponent which are popUp so with a different loader
  FamilyVariantPopupFormComponent,
  ModelPopupFormComponent
];

const SERVICES = [
  EvolutionFormService,
  EvolutionSearchService,
  VisitSearchService,
  VisitFormService,
  SbadFormService,
  SbadFormMhiaelService,
  SbadApplicabilitiesPopupFormService,
  SbadPopupFormService,
  ModificationsPopupFormService,
  ApplicabilitiesPopupFormService,
  InterdependencesPopupFormService,
  AssetsPopupFormService,
  ImpactsEvolPopupFormService,
  ImpactsItemPopupFormService,
  ImpactsPopupFormService,
  ItemSearchService,
  ModificationSearchService,
  ModificationFormService,
  ModificationAssetsPopupFormService,
  FamilySearchService,
  FamilyFormService,
  PartNumberSearchService,
  PartNumberFormService,
  FunctionalLocationSearchService,
  FunctionalLocationFormService,
  FamilyVariantPopupFormService,
  ModelPopupFormService,
  ReferenceMeasurementsPopupFormService,
  MaintenanceProgramSearchService,
  MaintenanceProgramFormService,
  MaintenanceProgramFormMhiaelService,
  AirworthinessDocumentSearchService,
  SbAdLimitsPeriodicitiesPopupFormService,
  MaintenanceProgramUpdatesListService,
  ChangeRecordFormService,
  UnitConversionMatrixService,
  UnitConversionMatrixApi,
  ConversionMatrixApplicabilitiesPopupFormService
];

const INTERNAL_MODULES = [TableModule, DialogBireDocPugModule];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ModalModule,
    AtaCodeInputModule,
    ComponentSidebarModule,
    DialogBireDocumentModule,
    DialogSearchItemModule,
    DialogSearchModelModule,
    DialogSearchPartModule,
    DialogSearchQualificationModule,
    DialogSearchTaskModule,
    DialogSearchEvolutionModule,
    DialogSearchFunctionalLocationModule,
    DialogStatusModule,
    DialogSearchMaintenanceProgramModule,
    ManageSearchCriteriaModule,
    DialogTableModule,
    DialogSearchSbAdModule,
    DynamicAttributesHistoryModule,
    DynamicAttributesModule,
    StatusUpdateHistoryModule,
    DialogGenerateCommentModule,
    TableModule,
    ProcurementRequestPopupModule,
    TransferOrderPopupModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...PRIMENG_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES, DatePipe]
})
export class EngineeringManagamentModule {}
