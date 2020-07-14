import { AircraftMaintenanceApi } from './aircraft-maintenance.api';
import { AirworthinessManagementApi } from './airworthiness-management.api';
import { AMProjectManagementApi } from './am-project-management.api';
import { AssetFindingsApi } from './asset-findings.api';
import { AssetManagementApi } from './asset-management.api';
import { BidmWoAssignmentApi } from './bidm-wo-assignment.api';
import { BidoEquipmentLfApi } from './bido-equipment-lf.api';
import { BidoEquipmentApi } from './bido-equipment.api';
import { BidtAbsenceApi } from './bidt-absence.api';
import { BidtCategoryApi } from './bidt-category.api';
import { BidtCompHolidayCompanyApi } from './bidt-comp-holiday-company.api';
import { BidtCompanyHolidayApi } from './bidt-company-holiday.api';
import { BidtCompanyApi } from './bidt-company.api';
import { BidtContractApi } from './bidt-contract.api';
import { BidtDeliveryFolderApi } from './bidt-delivery-folder.api';
import { BidtDfItemOperationApi } from './bidt-df-item-operation.api';
import { BidtDfItemApi } from './bidt-df-item.api';
import { BidtDfTypeOperationApi } from './bidt-df-type-operation.api';
import { BidtDfTypeApi } from './bidt-df-type.api';
import { BidtDocumentApi } from './bidt-document.api';
import { BidtEmployeeApi } from './bidt-employee.api';
import { BidtEvaluationApi } from './bidt-evaluation.api';
import { BidtExpenseApi } from './bidt-expense.api';
import { BidtHistoStatusUpdateApi } from './bidt-histo-status-update.api';
import { BidtHourlyCostApi } from './bidt-hourly-cost.api';
import { BidtLaborTemplateHoursApi } from './bidt-labor-template-hours.api';
import { BidtLaborTemplateApi } from './bidt-labor-template.api';
import { BidtLfContributorApi } from './bidt-lf-contributor.api';
import { BidtLitigationFolderApi } from './bidt-litigation-folder.api';
import { BidtMedicalVisitApi } from './bidt-medical-visit.api';
import { BidtPackageOperationApi } from './bidt-package-operation.api';
import { BidtPackageApi } from './bidt-package.api';
import { BidtProcReqItemApi } from './bidt-proc-req-item.api';
import { BidtProcurementRequestApi } from './bidt-procurement-request.api';
import { BidtProductCustomerApi } from './bidt-product-customer.api';
import { BidtPurchaseRequestApi } from './bidt-purchase-request.api';
import { BidtQualifEmployeeApi } from './bidt-qualif-employee.api';
import { BidtQualificationApi } from './bidt-qualification.api';
import { BidtSalesRequestApi } from './bidt-sales-request.api';
import { BidtSiteApi } from './bidt-site.api';
import { BidtStockMvtOperationApi } from './bidt-stock-mvt-operation.api';
import { BidtStockMvtTypeOperationApi } from './bidt-stock-mvt-type-operation.api';
import { BidtStockMvtTypeApi } from './bidt-stock-mvt-type.api';
import { BidtStockMvtApi } from './bidt-stock-mvt.api';
import { BidtStockTypeApi } from './bidt-stock-type.api';
import { BidtStorageBinTypeApi } from './bidt-storage-bin-type.api';
import { BidtStorageBinApi } from './bidt-storage-bin.api';
import { BidtStorageConditionApi } from './bidt-storage-condition.api';
import { BidtTorItemApi } from './bidt-tor-item.api';
import { BidtTrainingApi } from './bidt-training.api';
import { BidtTransferOrderApi } from './bidt-transfer-order.api';
import { BidtValuationGroupApi } from './bidt-valuation-group.api';
import { BidtWarehouseProductApi } from './bidt-warehouse-product.api';
import { BidtWarehouseApi } from './bidt-warehouse.api';
import { BidtWorkCenterApi } from './bidt-work-center.api';
import { BonitaApi } from './bonita/bonita.api';
import { CockpitComponentApi } from './cockpit-component.api';
import { DavAssetManagementdApi } from './dassault/asset-management.api';
import { DavFieldApi } from './dassault/field.api';
import { DocumentApi } from './document.api';
import { EngineeringDataExchangeApi } from './engineering-data-exchange.api';
import { FleetBusinessApi } from './fleet-business.api';
import { FleetHistoryApi } from './fleet-history.api';
import { FleetManagementApi } from './fleet-management.api';
import { LogisticsManagementApi } from './logistics-management.api';
import { MaintenanceExportApi } from './maintenance-export.api';
import { MaintenancePlanApi } from './maintenance-plan.api';
import { ManagerApi } from './manager.api';
import { MhiaelExportApi } from './mhiael/export.api';
import { MhiaelImportApi } from './mhiael/import.api';
import { MassUpdatesApi } from './mhiael/mass-updates.api';
import { NgPublicApi } from './ng-public.api';
import { OperationHistoryApi } from './operation-history.api';
import { ProductStructureBusinessApi } from './product-structure-business.api';
import { ProductStructureHistoryApi } from './product-structure-history.api';
import { ProductStructureManagementApi } from './product-structure-management.api';
import { ProjectManagementApi } from './project-management.api';
import { PropertiesApi } from './properties.api';
import { PublicApi } from './public.api';
import { ReferentialExportApi } from './referential-export.api';
import { ReferentialManagementApi } from './referential-managment.api';
import { SearchCriteriaApi } from './search-critieria.api';
import { SessionApi } from './session.api';
import { StandardExportApi } from './standard-export.api';
import { StandardImportAmApi } from './standard-import-am.api';
import { StandardImportBidtApi } from './standard-import-bidt.api';
import { StandardImportPmApi } from './standard-import-pm.api';
import { StandardImportPsApi } from './standard-import-ps-api';
import { StandardImportApi } from './standard-import.api';
import { StatusManagementApi } from './status-management.api';
import { TaskBusinessApi } from './task-business.api';
import { TaskHistoryApi } from './task-history.api';
import { TaskManagementApi } from './task-management.api';
import { UpdateHistoricApi } from './update-historic.api';
import { UserProfileBusinessApi } from './user-profile-business.api';
import { UserProfileManagementApi } from './user-profile-management.api';
import { UserApi } from './user.api';
import { WoAssetManagementApi } from './wo-asset-management.api';
import { WorkOrderManagementApi } from './work-order-management.api';


export const API_PROVIDERS = [
  AircraftMaintenanceApi,
  AirworthinessManagementApi,
  AssetFindingsApi,
  AssetManagementApi,
  AMProjectManagementApi,
  BidoEquipmentApi,
  BidmWoAssignmentApi,
  BidoEquipmentLfApi,
  BidtAbsenceApi,
  BidtCategoryApi,
  BidtCompanyApi,
  BidtCompanyHolidayApi,
  BidtCompHolidayCompanyApi,
  BidtContractApi,
  BidtDeliveryFolderApi,
  BidtDfItemApi,
  BidtDfItemOperationApi,
  BidtDfTypeApi,
  BidtDfTypeOperationApi,
  BidtDocumentApi,
  BidtEmployeeApi,
  BidtEvaluationApi,
  BidtExpenseApi,
  BidtHistoStatusUpdateApi,
  BidtHourlyCostApi,
  BidtLaborTemplateApi,
  BidtLaborTemplateHoursApi,
  BidtLfContributorApi,
  BidtLitigationFolderApi,
  BidtMedicalVisitApi,
  BidtPackageApi,
  BidtPackageOperationApi,
  BidtProcReqItemApi,
  BidtProcurementRequestApi,
  BidtProductCustomerApi,
  BidtPurchaseRequestApi,
  BidtQualifEmployeeApi,
  BidtQualificationApi,
  BidtSalesRequestApi,
  BidtSiteApi,
  BidtStockMvtApi,
  BidtStockMvtOperationApi,
  BidtStockMvtTypeApi,
  BidtStockMvtTypeOperationApi,
  BidtStockTypeApi,
  BidtStorageBinApi,
  BidtStorageBinTypeApi,
  BidtStorageConditionApi,
  BidtTorItemApi,
  BidtTrainingApi,
  BidtTransferOrderApi,
  BidtValuationGroupApi,
  BidtWarehouseApi,
  BidtWarehouseProductApi,
  BidtWorkCenterApi,
  CockpitComponentApi,
  DavAssetManagementdApi,
  DavFieldApi,
  DocumentApi,
  EngineeringDataExchangeApi,
  FleetBusinessApi,
  FleetHistoryApi,
  FleetManagementApi,
  LogisticsManagementApi,
  MaintenanceExportApi,
  MaintenancePlanApi,
  MassUpdatesApi,
  MhiaelExportApi,
  MhiaelImportApi,
  NgPublicApi,
  OperationHistoryApi,
  ProductStructureBusinessApi,
  ProductStructureHistoryApi,
  ProductStructureManagementApi,
  ProjectManagementApi,
  PropertiesApi,
  PublicApi,
  ReferentialExportApi,
  ReferentialManagementApi,
  SearchCriteriaApi,
  SessionApi,
  StandardExportApi,
  StandardImportApi,
  StandardImportPmApi,
  StandardImportPsApi,
  StandardImportBidtApi,
  StatusManagementApi,
  TaskBusinessApi,
  TaskHistoryApi,
  TaskManagementApi,
  UpdateHistoricApi,
  UserApi,
  UserProfileBusinessApi,
  UserProfileManagementApi,
  BidtLaborTemplateHoursApi,
  StandardImportAmApi,
  ManagerApi,
  BonitaApi,
  WoAssetManagementApi,
  WorkOrderManagementApi
];
