import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { BidoEquipmentLWO } from '../../../shared/types/api-output-types/fleet-management/bido-equipment-lwo.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogEquipmentListService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBidoEquipmentByCriteria(criteria: BidoEquipmentDTO): Observable<SearchResultsDTO<BidoEquipmentLWO>> {
    return super.post<BidoEquipmentDTO, SearchResultsDTO<BidoEquipmentLWO>>(
      this.fleetManagementApi.findAllBidoEquipmentLwoByCriteria,
      criteria
    );
  }
}
