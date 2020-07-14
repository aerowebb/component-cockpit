import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EngineeringDataExchangeApi } from '../../../shared/api/engineering-data-exchange.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { MaintenanceExportApi } from '../../../shared/api/maintenance-export.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { ReferentialExportApi } from '../../../shared/api/referential-export.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ExportMaintenanceFileInput } from '../../../shared/types/api-input-types/engineering-data-exchange/export-maintenance-file-input.interface';
import { ExportReferentialFileInput } from '../../../shared/types/api-input-types/engineering-data-exchange/export-referential-file-input.interface';
import { FindDataListBySearchCriteriaInput } from '../../../shared/types/api-input-types/engineering-data-exchange/find-data-list-by-search-criteria-input.interface';
import { GetExcelDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/get-excel-data-input.interface';
import { GetTypeDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/get-type-data-input.interface';
import { GetXMLDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/get-xml-data-input.interface';
import { RefreshArchivedImportReportInput } from '../../../shared/types/api-input-types/engineering-data-exchange/refresh-archived-import-report-input.interface';
import { RemoveDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/remove-data-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBireItemsByFamilyVariantCode } from '../../../shared/types/api-output-types/engineering-data-exchange/find-bire-items-by-family-variant-code.interface';
import { GetFamilyVariantOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-family-variant-output-dto.interface';
import { GetImportListTableOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-import-list-table-output-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-types/find-family-variant-input.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class EgineeringDataExchangeSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly engineeringDataExchangeApi: EngineeringDataExchangeApi,
    private readonly maintenanceExportApi: MaintenanceExportApi,
    private readonly referentialExportApi: ReferentialExportApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public getFamilyVariant(familyVariantInput: FindFamilyVariantInput): Observable<GetFamilyVariantOutputDTO[]> {
    return super.post<FindFamilyVariantInput, GetFamilyVariantOutputDTO[]>(
      this.productStructureManagementApi.findBireFamilyVariant,
      familyVariantInput
    );
  }

  public findDataListBySearchCriteria(
    findDataListBySearchCriteria: FindDataListBySearchCriteriaInput
  ): Observable<LabelValue<string>[]> {
    return super.post<FindDataListBySearchCriteriaInput, LabelValue<string>[]>(
      this.engineeringDataExchangeApi.findDataListBySearchCriteria,
      findDataListBySearchCriteria
    );
  }

  public findFormatList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.engineeringDataExchangeApi.findFormatList);
  }

  public findTypeList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.engineeringDataExchangeApi.findTypeList);
  }

  public findBireVariantVersionsByFamilyCode(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.engineeringDataExchangeApi.findTypeList);
  }

  public saveEngineeringExcelDataExchange(getExcelDataInput: GetExcelDataInput): Observable<string> {
    return super.post<GetExcelDataInput, string>(
      this.engineeringDataExchangeApi.saveEngineeringExcelDataExchange,
      getExcelDataInput
    );
  }

  public saveEngineeringXMLDataExchange(getXMLDataInput: GetXMLDataInput): Observable<string> {
    return super.post<GetXMLDataInput, string>(
      this.engineeringDataExchangeApi.saveEngineeringXMLDataExchange,
      getXMLDataInput
    );
  }

  public refreshEngineeringDataExchange(
    refreshArchivedImportReportInput: RefreshArchivedImportReportInput
  ): Observable<GetImportListTableOutputDTO[]> {
    return super.post<RefreshArchivedImportReportInput, GetImportListTableOutputDTO[]>(
      this.engineeringDataExchangeApi.refreshEngineeringDataExchange,
      refreshArchivedImportReportInput
    );
  }

  public removeReportsByReportId(reports: RemoveDataInput): Observable<boolean> {
    return super.post<RemoveDataInput, boolean>(this.engineeringDataExchangeApi.removeReportsByReportId, reports);
  }

  public exportReferentialFile(exportInput: ExportReferentialFileInput): Observable<Uint8Array> {
    return super.post<ExportReferentialFileInput, Uint8Array>(
      this.referentialExportApi.exportReferentialFile,
      exportInput
    );
  }

  public exportReferentialFileExcel(exportInput: ExportReferentialFileInput): Observable<Uint8Array> {
    return super.post<ExportReferentialFileInput, Uint8Array>(
      this.referentialExportApi.exportReferentialFileExcel,
      exportInput
    );
  }

  public exportMaintenanceFile(exportInput: ExportMaintenanceFileInput): Observable<Uint8Array> {
    return super.post<ExportMaintenanceFileInput, Uint8Array>(
      this.maintenanceExportApi.exportMaintenanceFile,
      exportInput
    );
  }

  public exportMaintenanceFileExcel(exportInput: ExportMaintenanceFileInput): Observable<Uint8Array> {
    return super.post<ExportMaintenanceFileInput, Uint8Array>(
      this.maintenanceExportApi.exportMaintenanceFileExcel,
      exportInput
    );
  }

  public exportDetailPartsList(exportInput: RefreshArchivedImportReportInput): Observable<Uint8Array> {
    return super.post<RefreshArchivedImportReportInput, Uint8Array>(
      this.referentialExportApi.exportDetailPartsList,
      exportInput
    );
  }

  public getTemplate(input: GetTypeDataInput): Observable<Uint8Array> {
    return super.post<GetTypeDataInput, Uint8Array>(
      this.engineeringDataExchangeApi.fetchEngineeringDataExchangeTemplate,
      input
    );
  }

  public openImportReportContent(input: BireReportDTOId): Observable<Uint8Array> {
    return super.post<BireReportDTOId, Uint8Array>(
      this.productStructureManagementApi.findBireReportContentOfBireReport,
      input
    );
  }

  public openFLIMportReportContent(input: BireReportDTOId): Observable<Uint8Array> {
    return super.post<BireReportDTOId, Uint8Array>(this.fleetManagementApi.findBidoReportContentOfBidoReport, input);
  }

  public loadATAcodes(input: RefreshArchivedImportReportInput): Observable<FindBireItemsByFamilyVariantCode[]> {
    return super.post<RefreshArchivedImportReportInput, FindBireItemsByFamilyVariantCode[]>(
      this.productStructureManagementApi.findBireItemsByFamilyAndVariantCodes,
      input
    );
  }

  public findAllBireTaskGroup(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public findBireItemsBySearchCriteria(
    familyCode: string,
    structureType: string,
    variantCode: string
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    const params: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: {
        familyCode,
        structureType,
        variantCode
      }
    };

    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      params
    );
  }
}
