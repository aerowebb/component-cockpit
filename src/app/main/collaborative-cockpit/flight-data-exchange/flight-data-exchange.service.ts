import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EngineeringDataExchangeApi } from '../../../shared/api/engineering-data-exchange.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { StandardExportApi } from '../../../shared/api/standard-export.api';
import { StandardImportApi } from '../../../shared/api/standard-import.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindDataListBySearchCriteriaInput } from '../../../shared/types/api-input-types/engineering-data-exchange/find-data-list-by-search-criteria-input.interface';
import { ExportFleetDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/export-fleet-data-input.interface';
import { GetRefreshedArchivedReportDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/get-refreshed-archived-report-data-input.interface';
import { SaveExcelDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-excel-data-input.interface';
import { SaveXmlDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-xml-data-input.interface';
import { BidoReportDTOId } from '../../../shared/types/api-types/bido-report-dto-id.interface';
import { BidoReportDTO } from '../../../shared/types/api-types/bido-report-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../shared/types/api-types/bire-report-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class FlightDataExchangeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly engineeringDataExchangeApi: EngineeringDataExchangeApi,
    private readonly standardImportApi: StandardImportApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly standardExportController: StandardExportApi
  ) {
    super(http, appConfigService);
  }

  public findTypeList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.engineeringDataExchangeApi.findTypeList);
  }

  public getTemplate(input: FindDataListBySearchCriteriaInput): Observable<Uint8Array> {
    return super.post<FindDataListBySearchCriteriaInput, Uint8Array>(
      this.standardImportApi.getImportFleetDataTemplate,
      input
    );
  }

  public openImportReportContent(input: BireReportDTOId): Observable<Uint8Array> {
    return super.post<BireReportDTOId, Uint8Array>(this.fleetManagementApi.findBidoReportContentOfBidoReport, input);
  }

  public exportFlightsData(input: ExportFleetDataInput): Observable<Uint8Array> {
    return super.post<ExportFleetDataInput, Uint8Array>(this.standardExportController.exportFlights, input);
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

  public getServerDate(): Observable<Date> {
    return super.post<void, Date>(this.productStructureManagementApi.getServerDate);
  }

  public fetchFleetDataExchangeReport(input: GetRefreshedArchivedReportDataInput): Observable<BireReportDTO[]> {
    return super.post<GetRefreshedArchivedReportDataInput, BireReportDTO[]>(
      this.fleetManagementApi.fetchFleetDataExchangeReport,
      input
    );
  }
}
