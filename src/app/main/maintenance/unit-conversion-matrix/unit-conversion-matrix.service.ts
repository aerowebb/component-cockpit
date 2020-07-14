import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { StandardImportApi } from '../../../shared/api/standard-import.api';
import { UnitConversionMatrixApi } from '../../../shared/api/unit-matrix-conversion.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveExcelDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-excel-data-input.interface';
import { SaveBireConversionMatrixInputDTO } from '../../../shared/types/api-input-types/unit-conversion-matrix/bire-unit-conversion-matrix-create-dto.interface';
import { SearchBireConversionMatrixInput } from '../../../shared/types/api-input-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BireConversionMatrixDTO } from '../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BireMeasureReferenceDTO } from '../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../shared/types/api-types/bire-report-dto.interface';
import { FileContent } from '../../../shared/types/api-types/file-content.interface';
import { UnitConversionMatrixRowDTO } from '../../../shared/types/api-types/unit-conversion-matrix-row-dto.interface';

@Injectable()
export class UnitConversionMatrixService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly unitMatrixConversionApi: UnitConversionMatrixApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly standardImportApi: StandardImportApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public searchUnitMatrixConversion(input: SearchBireConversionMatrixInput): Observable<BireConversionMatrixDTO[]> {
    return super.post<SearchBireConversionMatrixInput, BireConversionMatrixDTO[]>(
      this.unitMatrixConversionApi.searchUnitMatrixConversion,
      input
    );
  }

  public getUnitConversionMatrix(id: number): Observable<BireConversionMatrixDTO> {
    return super.post<number, BireConversionMatrixDTO>(this.unitMatrixConversionApi.getUnitMatrixConversion, id);
  }

  public deleteUnitConversionMatrix(id: number): Observable<boolean> {
    return super.post<number, boolean>(this.unitMatrixConversionApi.deleteUnitMatrixConversion, id);
  }

  public saveConversionMatrix(input: SaveBireConversionMatrixInputDTO): Observable<BireConversionMatrixDTO> {
    return super.post<SaveBireConversionMatrixInputDTO, BireConversionMatrixDTO>(
      this.unitMatrixConversionApi.saveConversionMatrix,
      input
    );
  }

  public getUnitConversionMatrixRows(): Observable<UnitConversionMatrixRowDTO[]> {
    return super.post<void, UnitConversionMatrixRowDTO[]>(this.fleetManagementApi.getUnitConversionMatrixRows);
  }

  public getExcelTemplate(): Observable<FileContent> {
    return super.post<void, FileContent>(this.fleetBusinessApi.getXlsUnitConversionMatrixReport);
  }

  public importUnitConversionMatrixFromExcel(input: SaveExcelDataInput): Observable<string> {
    return super.post<SaveExcelDataInput, string>(this.standardImportApi.importUnitConversionMatrixFromExcel, input);
  }

  public loadArchivedImportReports(): Observable<BireReportDTO[]> {
    return super.post<void, BireReportDTO[]>(this.fleetManagementApi.findBidoReportsUnitMatrixConversion);
  }

  public openImportReportContent(reportId: BireReportDTOId): Observable<Uint8Array> {
    return super.post<BireReportDTOId, Uint8Array>(this.fleetManagementApi.findBidoReportContentOfBidoReport, reportId);
  }

  public deleteReportEntry(reports: BireReportDTOId[]) {
    return super.post<BireReportDTOId[], void>(this.fleetManagementApi.removeBidoReport, reports);
  }

  public saveBidoPreferenceUser(rowList: UnitConversionMatrixRowDTO[]) {
    return super.post<UnitConversionMatrixRowDTO[], void>(
      this.userProfileManagementApi.saveBidoPreferenceUser,
      rowList
    );
  }

  public removeBidoPreferenceUser(id: Number[]) {
    return super.post<Number[], void>(this.userProfileManagementApi.removeBidoPreferenceUser, id);
  }

  public findAllBireMeasureReferences(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(this.fleetManagementApi.findAllBireMeasureReferences);
  }
}
