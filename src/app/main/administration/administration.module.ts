import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OrganizationChartModule } from 'primeng/organizationchart';
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
import { ComponentSidebarModule } from '../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchContactModule } from '../../shared/components/dialog-search-contact/dialog-search-contact.module';
import { DialogSearchCustomerModule } from '../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogTableModule } from '../../shared/components/dialog-table/dialog-table.module';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { TableModule } from '../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';

import { BackgroundJobsComponent } from './background-jobs/background-jobs.component';
import { BackgroundJobsService } from './background-jobs/background-jobs.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogService } from './catalog/catalog.service';
import { CatalogConstantsService } from './catalog/constants/catalog-name-constants';
import { E5xMappingComponent } from './catalog/dynamic-catalog-components/fleet/e5x-mapping/e5x-mapping.component';
import { E5xMappingService } from './catalog/dynamic-catalog-components/fleet/e5x-mapping/e5x-mapping.service';
import { ImportPopupComponent } from './catalog/dynamic-catalog-components/fleet/e5x-mapping/import-popup/import-popup.component';
import { EventContextFormComponent } from './catalog/dynamic-catalog-components/fleet/event-context/event-context-form/event-context-form.component';
import { ParametersPopupComponent } from './catalog/dynamic-catalog-components/fleet/event-context/event-context-form/parameters-popup/parameters-popup.component';
import { EventContextComponent } from './catalog/dynamic-catalog-components/fleet/event-context/event-context.component';
import { EventContextService } from './catalog/dynamic-catalog-components/fleet/event-context/event-context.service';
import { EventSymptomFormComponent } from './catalog/dynamic-catalog-components/fleet/event-symptom/event-symptom-form/event-symptom-form.component';
import { EventSymptomComponent } from './catalog/dynamic-catalog-components/fleet/event-symptom/event-symptom.component';
import { EventSymptomService } from './catalog/dynamic-catalog-components/fleet/event-symptom/event-symptom.service';
import { EventTypeFormPopupComponent } from './catalog/dynamic-catalog-components/fleet/event-type/event-type-form-popup/event-type-form-popup.component';
import { EventTypeComponent } from './catalog/dynamic-catalog-components/fleet/event-type/event-type.component';
import { EventTypeService } from './catalog/dynamic-catalog-components/fleet/event-type/event-type.service';
import { ContractComponent } from './catalog/dynamic-catalog-components/human-resource/contract/contract.component';
import { ContractService } from './catalog/dynamic-catalog-components/human-resource/contract/contract.service';
import { DialogContractComponent } from './catalog/dynamic-catalog-components/human-resource/contract/dialog-contract/dialog-contract.component';
import { DialogPublicHolidayComponent } from './catalog/dynamic-catalog-components/human-resource/public-holiday/dialog-public-holiday/dialog-public-holiday.component';
import { PublicHolidayComponent } from './catalog/dynamic-catalog-components/human-resource/public-holiday/public-holiday.component';
import { PublicHolidayService } from './catalog/dynamic-catalog-components/human-resource/public-holiday/public-holiday.service';
import { QualificationFormPopupComponent } from './catalog/dynamic-catalog-components/human-resource/qualification/qualification-form-popup/qualification-form-popup.component';
import { QualificationComponent } from './catalog/dynamic-catalog-components/human-resource/qualification/qualification.component';
import { QualificationService } from './catalog/dynamic-catalog-components/human-resource/qualification/qualification.service';
import { DialogWorkTemplateComponent } from './catalog/dynamic-catalog-components/human-resource/work-template/work-template-form/dialog-work-template/dialog-work-template.component';
import { WorkTemplateFormComponent } from './catalog/dynamic-catalog-components/human-resource/work-template/work-template-form/work-template-form.component';
import { WorkTemplateComponent } from './catalog/dynamic-catalog-components/human-resource/work-template/work-template.component';
import { WorkTemplateService } from './catalog/dynamic-catalog-components/human-resource/work-template/work-template.service';
import { DialogFolderTypeComponent } from './catalog/dynamic-catalog-components/logistics/folder-type/popup/dialog-folder-type.component';
import { DialogOperationCatalogComponent } from './catalog/dynamic-catalog-components/logistics/folder-type/popup/dialog-operation.component';
import { ReceiptTypeComponent } from './catalog/dynamic-catalog-components/logistics/folder-type/receipt-type/receipt-type.component';
import { ShipmentTypeComponent } from './catalog/dynamic-catalog-components/logistics/folder-type/shipment-type/shipment-type.component';
import { DialogOperationStockMovementComponent } from './catalog/dynamic-catalog-components/logistics/stock-movement-type/popup-stock-movement-type/dialog-operation-stock-movement.component';
import { DialogStockMovementTypeComponent } from './catalog/dynamic-catalog-components/logistics/stock-movement-type/popup-stock-movement-type/dialog-stock-movement-type.component';
import { StockMovementTypeComponent } from './catalog/dynamic-catalog-components/logistics/stock-movement-type/stock-movement-type.component';
import { StatusFormPopupComponent } from './catalog/dynamic-catalog-components/logistics/stock-type/stock-form/status-form-popup/status-form-popup.component';
import { StockTypeFormComponent } from './catalog/dynamic-catalog-components/logistics/stock-type/stock-form/stock-type-form.component';
import { StockTypeComponent } from './catalog/dynamic-catalog-components/logistics/stock-type/stock-type.component';
import { StockTypeService } from './catalog/dynamic-catalog-components/logistics/stock-type/stock-type.service';
import { StorageBinTypeFormPopupComponent } from './catalog/dynamic-catalog-components/logistics/storage-bin-type/storage-bin-type-form-popup/storage-bin-type-form-popup.component';
import { StorageBinTypeComponent } from './catalog/dynamic-catalog-components/logistics/storage-bin-type/storage-bin-type.component';
import { StorageBinTypeService } from './catalog/dynamic-catalog-components/logistics/storage-bin-type/storage-bin-type.service';
import { StorageConditionFormPopupComponent } from './catalog/dynamic-catalog-components/logistics/storage-condition/storage-condition-form-popup/storage-condition-form-popup.component';
import { StorageConditionComponent } from './catalog/dynamic-catalog-components/logistics/storage-condition/storage-condition.component';
import { StorageConditionService } from './catalog/dynamic-catalog-components/logistics/storage-condition/storage-condition.service';
import { ValuationGroupFormPopupComponent } from './catalog/dynamic-catalog-components/logistics/valuation-group/valuation-group-form-popup/valuation-group-form-popup.component';
import { ValuationGroupComponent } from './catalog/dynamic-catalog-components/logistics/valuation-group/valuation-group.component';
import { ValuationGroupService } from './catalog/dynamic-catalog-components/logistics/valuation-group/valuation-group.service';
import { CauseForRemovalComponent } from './catalog/dynamic-catalog-components/maintenance/cause-for-removal/cause-for-removal.component';
import { CauseForRemovalService } from './catalog/dynamic-catalog-components/maintenance/cause-for-removal/cause-for-removal.service';
import { DialogReturnReasonComponent } from './catalog/dynamic-catalog-components/maintenance/cause-for-removal/dialog-return-reason/dialog-return-reason.component';
import { DamageComponent } from './catalog/dynamic-catalog-components/maintenance/damage/damage.component';
import { DamageService } from './catalog/dynamic-catalog-components/maintenance/damage/damage.service';
import { DialogDamageComponent } from './catalog/dynamic-catalog-components/maintenance/damage/dialog-damage/dialog-damage.component';
import { DialogKPercentComponent } from './catalog/dynamic-catalog-components/maintenance/k-percent/dialog-k-percent/dialog-k-percent.component';
import { KPercentComponent } from './catalog/dynamic-catalog-components/maintenance/k-percent/k-percent.component';
import { KPercentService } from './catalog/dynamic-catalog-components/maintenance/k-percent/k-percent.service';
import { DialogLocalisationComponent } from './catalog/dynamic-catalog-components/maintenance/localisation/dialog-localisation/dialog-localisation.component';
import { LocalisationComponent } from './catalog/dynamic-catalog-components/maintenance/localisation/localisation.component';
import { LocalisationService } from './catalog/dynamic-catalog-components/maintenance/localisation/localisation.service';
import { DialogMaintenanceTypeComponent } from './catalog/dynamic-catalog-components/maintenance/maintenance-type/dialog-maintenance-type/dialog-maintenance-type.component';
import { MaintenanceTypeComponent } from './catalog/dynamic-catalog-components/maintenance/maintenance-type/maintenance-type.component';
import { MaintenanceTypeService } from './catalog/dynamic-catalog-components/maintenance/maintenance-type/maintenance-type.service';
import { DialogRangeComponent } from './catalog/dynamic-catalog-components/maintenance/range/dialog-range/dialog-range.component';
import { RangeComponent } from './catalog/dynamic-catalog-components/maintenance/range/range.component';
import { RangeService } from './catalog/dynamic-catalog-components/maintenance/range/range.service';
import { DialogReferenceMeasurementComponent } from './catalog/dynamic-catalog-components/maintenance/reference-measurement/dialog-reference-measurement/dialog-reference-measurement.component';
import { ReferenceMeasurementComponent } from './catalog/dynamic-catalog-components/maintenance/reference-measurement/reference-measurement.component';
import { ReferenceMeasurementService } from './catalog/dynamic-catalog-components/maintenance/reference-measurement/reference-measurement.service';
import { DialogTaskGroupComponent } from './catalog/dynamic-catalog-components/maintenance/task-group/dialog-task-group/dialog-task-group.component';
import { TaskGroupComponent } from './catalog/dynamic-catalog-components/maintenance/task-group/task-group.component';
import { TaskGroupService } from './catalog/dynamic-catalog-components/maintenance/task-group/task-group.service';
import { DialogTechnicalInterventionLevelComponent } from './catalog/dynamic-catalog-components/maintenance/technical-intervention-level/dialog-technical-intervention-level/dialog-technical-intervention-level.component';
import { TechnicalInterventionLevelComponent } from './catalog/dynamic-catalog-components/maintenance/technical-intervention-level/technical-intervention-level.component';
import { TechnicalInterventionLevelService } from './catalog/dynamic-catalog-components/maintenance/technical-intervention-level/technical-intervention-level.service';
import { DialogUnitOfMeasureComponent } from './catalog/dynamic-catalog-components/maintenance/unit-of-measure/dialog-unit-of-measure/dialog-unit-of-measure.component';
import { UnitOfMeasureComponent } from './catalog/dynamic-catalog-components/maintenance/unit-of-measure/unit-of-measure.component';
import { UnitOfMeasureService } from './catalog/dynamic-catalog-components/maintenance/unit-of-measure/unit-of-measure.service';
import { PropertyValuesPopupComponent } from './catalog/property-values-popup/property-values-popup.component';
import { ProfilesFormComponent } from './profiles-form/profiles-form.component';
import { ProfilesFormService } from './profiles-form/profiles-form.service';
import { ProfilesSearchComponent } from './profiles-search/profiles-search.component';
import { ProfilesSearchService } from './profiles-search/profiles-search.service';
import { AssignFamiliesPopupFormComponent } from './users-form/popups/assign-family-popup-form/assign-family-popup-form.component';
import { AssignOperatorsPopupFormComponent } from './users-form/popups/assign-operator-popup-form/assign-operator-popup-form.component';
import { AssignProfilesPopupFormComponent } from './users-form/popups/assign-profile-popup-form/assign-profile-popup-form.component';
import { AssignSitesPopupFormComponent } from './users-form/popups/assign-site-popup-form/assign-site-popup-form.component';
import { ClientsFormPopupComponent } from './users-form/popups/clients-form-popup/clients-form-popup.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersFormService } from './users-form/users-form.service';
import { UpdateProfileRightsPopupFormComponent } from './users-search/update-profile-rights-popup-form/update-profile-rights-popup-form.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { UsersSearchService } from './users-search/users-search.service';

const PRIMENG_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  RadioButtonModule,
  SplitButtonModule,
  TooltipModule,
  TriStateCheckboxModule,
  FileUploadModule,
  KeyFilterModule,
  OrganizationChartModule,
  OverlayPanelModule,
  AccordionModule,
  SelectButtonModule,
  TreeTableModule,
  MessageModule,
  PrimeNgTableModule
];

const INTERNAL_MODULES = [TableModule];

const COMPONENTS = [
  PropertyValuesPopupComponent,
  EventTypeFormPopupComponent,
  ImportPopupComponent,
  DialogReturnReasonComponent,
  DialogDamageComponent,
  DialogLocalisationComponent,
  DialogUnitOfMeasureComponent,
  DialogReferenceMeasurementComponent,
  DialogTechnicalInterventionLevelComponent,
  DialogKPercentComponent,
  DialogMaintenanceTypeComponent,
  StorageBinTypeFormPopupComponent,
  StorageConditionFormPopupComponent,
  ValuationGroupFormPopupComponent,
  DialogTaskGroupComponent,
  DialogRangeComponent,
  DialogContractComponent,
  DialogWorkTemplateComponent,
  ParametersPopupComponent,
  StorageBinTypeFormPopupComponent,
  StorageConditionFormPopupComponent,
  ValuationGroupFormPopupComponent,
  StatusFormPopupComponent,
  DialogPublicHolidayComponent,
  QualificationFormPopupComponent,
  AssignProfilesPopupFormComponent,
  AssignFamiliesPopupFormComponent,
  AssignOperatorsPopupFormComponent,
  AssignSitesPopupFormComponent,
  ClientsFormPopupComponent,
  UpdateProfileRightsPopupFormComponent,
  DialogFolderTypeComponent,
  DialogStockMovementTypeComponent,
  DialogOperationStockMovementComponent,
  DialogOperationCatalogComponent
];

const DYNAMIC_COMPONENTS = [
  CatalogComponent,
  EventTypeComponent,
  E5xMappingComponent,
  CauseForRemovalComponent,
  DamageComponent,
  LocalisationComponent,
  UnitOfMeasureComponent,
  ReferenceMeasurementComponent,
  TechnicalInterventionLevelComponent,
  KPercentComponent,
  MaintenanceTypeComponent,
  StorageBinTypeComponent,
  StorageConditionComponent,
  ValuationGroupComponent,
  StockTypeComponent,
  StockTypeFormComponent,
  EventContextComponent,
  TaskGroupComponent,
  RangeComponent,
  ContractComponent,
  WorkTemplateComponent,
  EventContextComponent,
  EventContextFormComponent,
  EventSymptomComponent,
  EventSymptomFormComponent,
  StockTypeFormComponent,
  QualificationComponent,
  WorkTemplateFormComponent,
  PublicHolidayComponent,
  ProfilesSearchComponent,
  ProfilesFormComponent,
  UsersSearchComponent,
  UsersFormComponent,
  BackgroundJobsComponent,
  ReceiptTypeComponent,
  ShipmentTypeComponent,
  StockMovementTypeComponent
];

const SERVICES = [
  CatalogService,
  EventTypeService,
  E5xMappingService,
  CauseForRemovalService,
  DamageService,
  LocalisationService,
  UnitOfMeasureService,
  ReferenceMeasurementService,
  TechnicalInterventionLevelService,
  KPercentService,
  MaintenanceTypeService,
  StorageBinTypeService,
  StorageConditionService,
  ValuationGroupService,
  StockTypeService,
  RangeService,
  TaskGroupService,
  ContractService,
  WorkTemplateService,
  EventContextService,
  EventSymptomService,
  StorageBinTypeService,
  StorageConditionService,
  ValuationGroupService,
  StockTypeService,
  QualificationService,
  PublicHolidayService,
  ProfilesSearchService,
  ProfilesFormService,
  UsersSearchService,
  UsersFormService,
  BackgroundJobsService,
  CatalogConstantsService
];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ModalModule,
    ComponentSidebarModule,
    DialogSearchContactModule,
    DialogSearchCustomerModule,
    DialogTableModule,
    TableModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...PRIMENG_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class AdministrationModule {}
