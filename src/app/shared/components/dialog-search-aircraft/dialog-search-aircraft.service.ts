import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../api/fleet-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FindAllAircraftByCriteriaInput } from '../../types/api-input-types/fleet-management/find-all-aircraft-by-criteria-input.interface';
import { BidoEquipmentDTO } from '../../types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';

@Injectable()
export class DialogSearchAircraftService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllAircraftByCriteria(
    criteria: FindAllAircraftByCriteriaInput
  ): Observable<SearchResultsDTO<BidoEquipmentDTO>> {
    return super.post<FindAllAircraftByCriteriaInput, SearchResultsDTO<BidoEquipmentDTO>>(
      this.fleetManagementApi.findAllAircraftByCriteria,
      criteria
    );
  }
}
