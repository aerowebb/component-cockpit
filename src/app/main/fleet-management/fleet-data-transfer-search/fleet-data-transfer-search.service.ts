import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FleetDataAssestTransferInputDTO } from '../../../shared/types/api-input-types/fleet-management/fleet-data-asset-transfer-input-dto.interface';
import { FleetDataTransferInput } from '../../../shared/types/api-input-types/fleet-management/fleet-data-transfer-input.interface';
import { FleetDataAssetsTransferDTO } from '../../../shared/types/api-output-types/fleet-management/fleet-data-assets-transfer-dto.interface';
import { FleetDataTransferReportDTO } from '../../../shared/types/api-output-types/fleet-management/fleet-data-transfer-report-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class FleetDataTransferSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi
  ) {
    super(http, appConfigService);
  }

  public getReasonList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getReasonList);
  }

  public findTranferDatails(
    fleetDataAssestTransferInputDTO: FleetDataAssestTransferInputDTO
  ): Observable<FleetDataAssetsTransferDTO[]> {
    return super.post<FleetDataAssestTransferInputDTO, FleetDataAssetsTransferDTO[]>(
      this.fleetBusinessApi.getAssetsToBeTransferDetail,
      fleetDataAssestTransferInputDTO
    );
  }
  public transferFleetData(fleetDataTransferInput: FleetDataTransferInput): Observable<FleetDataTransferReportDTO[]> {
    return super.post<FleetDataTransferInput, FleetDataTransferReportDTO[]>(
      this.fleetBusinessApi.dataFleetTransfer,
      fleetDataTransferInput
    );
  }
}
