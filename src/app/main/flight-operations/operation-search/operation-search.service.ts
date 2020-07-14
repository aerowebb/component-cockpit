import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BidoOperationDTOId } from '../../../shared/types/api-types/bido-operation-dto-id.interface';
import { BidoOperationDTO } from '../../../shared/types/api-types/bido-operation-dto.interface';
import { FlightOperationOutputDTO } from '../../../shared/types/api-types/flight-operation-output-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class OperationSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidoOperationsBySearchCriteria(): Observable<SearchResultsDTO<BidoOperationDTO>> {
    return super.post<void, SearchResultsDTO<BidoOperationDTO>>(
      this.fleetManagementApi.findBidoOperationsBySearchCriteria
    );
  }

  public findBidoOperation(operationCode): Observable<FlightOperationOutputDTO> {
    const bireOperationDTOId: BidoOperationDTOId = { operationCode };

    return super.post<BidoOperationDTOId, FlightOperationOutputDTO>(
      this.fleetManagementApi.findBidoOperation,
      bireOperationDTOId
    );
  }

  public saveFlightOperation(operationDTOList: BidoOperationDTO[]): Observable<boolean> {
    return super.post<BidoOperationDTO[], boolean>(this.fleetManagementApi.saveFlightOperation, operationDTOList);
  }

  public removeBidoOperation(bireOperationDTOId: BidoOperationDTOId[]): Observable<boolean> {
    return super.post<BidoOperationDTOId[], boolean>(this.fleetManagementApi.removeBidoOperation, bireOperationDTOId);
  }
}
