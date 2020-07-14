import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../shared/api/aircraft-maintenance.api';
import { WorkOrderOVSInputDTO } from '../../../shared/types/api-output-types/ovs-popup/work-order-ovs-input-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { BidmWorkOrderDTO } from '../../types/api-types/bidm-work-order-dto.interface';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogSearchWorkOrderService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi
  ) {
    super(http, appConfigService);
  }

  public findWorkOrder(criteria: WorkOrderOVSInputDTO): Observable<SearchResultsDTO<BidmWorkOrderDTO>> {
    return super.post<WorkOrderOVSInputDTO, SearchResultsDTO<BidmWorkOrderDTO>>(
      this.aircraftMaintenanceApi.findBidmWorkOrdersByCriteria,
      criteria
    );
  }

  public getAirmWorkOrderTypeList(): Observable<LabelValue<string>[]> {
    return super.get<LabelValue<string>[]>(this.aircraftMaintenanceApi.getAirmWorkOrderTypeList);
  }

  public getAirmProjectStatusList(): Observable<LabelValue<string>[]> {
    return super.get<LabelValue<string>[]>(this.aircraftMaintenanceApi.getAirmProjectStatusList);
  }
}
