import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { EngineeringDataExchangeApi } from '../../../shared/api/engineering-data-exchange.api';
import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { StandardExportApi } from '../../../shared/api/standard-export.api';
import { StandardImportApi } from '../../../shared/api/standard-import.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ExportAssetDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/export-asset-data-input.interface';
import { ExportFleetDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/export-fleet-data-input.interface';
import { FindAssetListConfigurationEventDTO } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-configuration-event-dto.interface';
import { FindAssetListInput } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-input.interface';
import { FindDataListBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-data-exchange/find-data-list-by-search-criteria-input.interface';
import { GetRefreshedArchivedReportDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/get-refreshed-archived-report-data-input.interface';
import { SaveExcelDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-excel-data-input.interface';
import { SaveXmlDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-xml-data-input.interface';
import { SaveZipDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-zip-data-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { GetFamilyVariantOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-family-variant-output-dto.interface';
import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { BidoReportDTOId } from '../../../shared/types/api-types/bido-report-dto-id.interface';
import { BidoReportDTO } from '../../../shared/types/api-types/bido-report-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../shared/types/api-types/bire-report-dto.interface';
import { BireVariantVersionDTOId } from '../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class FleetDataExchangeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly engineeringDataExchangeApi: EngineeringDataExchangeApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly standardImportController: StandardImportApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly standardExportController: StandardExportApi,
    private readonly fleetBusinessController: FleetBusinessApi
  ) {
    super(http, appConfigService);
  }

  public findTypeList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.engineeringDataExchangeApi.findTypeList);
  }

  public getBireFamilyVariant(familyVariantInput: FindFamilyVariantInput): Observable<GetFamilyVariantOutputDTO[]> {
    return super.post<FindFamilyVariantInput, GetFamilyVariantOutputDTO[]>(
      this.productStructureManagementApi.findBireFamilyVariant,
      familyVariantInput
    );
  }

  public getImportFlightReports(): Observable<BidoReportDTO[]> {
    return super.post<void, BidoReportDTO[]>(this.fleetManagementApi.findBidoReportsByReportCode);
  }

  public getImportFleetReports(variantVersionInput: BireVariantVersionDTOId): Observable<BidoReportDTO[]> {
    return super.post<BireVariantVersionDTOId, BidoReportDTO[]>(
      this.fleetManagementApi.findBidoReportsByFamilyVariantCodeAndFleetImportReportCode,
      variantVersionInput
    );
  }

  public deleteReportEntry(reportId: BidoReportDTOId[]) {
    return super.post<BidoReportDTOId[], BidoReportDTO[]>(this.fleetManagementApi.removeBidoReport, reportId);
  }

  public saveExcelFleetDataExchange(excelInput: SaveExcelDataInput) {
    return super.post<SaveExcelDataInput, string>(this.fleetManagementApi.saveExcelFleetDataExchange, excelInput);
  }

  public saveXmlFleetDataExchange(xmlInput: SaveXmlDataInput) {
    return super.post<SaveXmlDataInput, string>(this.fleetManagementApi.saveXmlFleetDataExchange, xmlInput);
  }

  public saveZipFleetDataExchange(zipInput: SaveZipDataInput) {
    return super.post<SaveZipDataInput, string>(this.fleetManagementApi.saveZipFleetDataExchange, zipInput);
  }

  public fetchFleetDataExchangeReport(input: GetRefreshedArchivedReportDataInput): Observable<BireReportDTO[]> {
    return super.post<GetRefreshedArchivedReportDataInput, BireReportDTO[]>(
      this.fleetManagementApi.fetchFleetDataExchangeReport,
      input
    );
  }

  public getTemplate(input: FindDataListBySearchCriteriaInput): Observable<Uint8Array> {
    return super.post<FindDataListBySearchCriteriaInput, Uint8Array>(
      this.standardImportController.getImportFleetDataTemplate,
      input
    );
  }

  public openImportReportContent(input: BireReportDTOId): Observable<Uint8Array> {
    return super.post<BireReportDTOId, Uint8Array>(this.fleetManagementApi.findBidoReportContentOfBidoReport, input);
  }

  public exportConfEventData(input: ExportFleetDataInput): Observable<Uint8Array> {
    return super.post<ExportFleetDataInput, Uint8Array>(this.standardExportController.exportConfEvent, input);
  }

  public exportFlightsData(input: ExportFleetDataInput): Observable<Uint8Array> {
    return super.post<ExportFleetDataInput, Uint8Array>(this.standardExportController.exportFlights, input);
  }

  public exportGlobalData(input: ExportFleetDataInput): Observable<Uint8Array> {
    return super.post<ExportFleetDataInput, Uint8Array>(this.standardExportController.exportGlobal, input);
  }

  public exportAssetData(input: ExportAssetDataInput): Observable<Uint8Array> {
    return super.post<ExportAssetDataInput, Uint8Array>(this.fleetBusinessController.exportAssetData, input);
  }

  public getServerDate(): Observable<Date> {
    return super.post<void, Date>(this.productStructureManagementApi.getServerDate);
  }

  /***********************************
   * Asset(s) Selection popup services
   ***********************************/

  public getWarehouseDropdownList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtWarehouseApi.getWarehouses);
  }

  public getBidoFleetsBySearchCriteria(criteria: BidoFleetDTO): Observable<SearchResultsDTO<BidoFleetDTO>> {
    return super.post<BidoFleetDTO, SearchResultsDTO<BidoFleetDTO>>(
      this.fleetManagementApi.findBidoFleetsBySearchCriteria,
      criteria
    );
  }

  public getAssetTypeList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.initializeAssetTypeList);
  }

  public getFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.initializeFunctionList);
  }

  public getFamilyVariantList(assetType: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeFamilyVariantList,
      assetType
    );
  }

  public findAssetList(input: FindAssetListInput): Observable<SearchResultsDTO<FindAssetListConfigurationEventDTO>> {
    return super.post<FindAssetListInput, SearchResultsDTO<FindAssetListConfigurationEventDTO>>(
      this.fleetManagementApi.findAssetList,
      input
    );
  }

  public getOperationalStatusList(assetType: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      assetType
    );
  }
}
