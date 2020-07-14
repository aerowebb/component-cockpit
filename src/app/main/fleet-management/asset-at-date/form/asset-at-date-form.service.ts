import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AssetAtDateInput } from '../../../../shared/types/api-input-types/fleet-business/asset-at-date-input.interface';
import { AssetAtDateOutput } from '../../../../shared/types/api-output-types/fleet-business/asset-at-date-output.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentEvolutionInputOutputDTO } from '../../../../shared/types/api-types/bido-equipment-evolution-input-output-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class AssetAtDateFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi
  ) {
    super(http, appConfigService);
  }

  public getEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public getTreeStructure(input: AssetAtDateInput): Observable<AssetAtDateOutput> {
    return super.post<AssetAtDateInput, AssetAtDateOutput>(this.fleetBusinessApi.assetAtDate, input);
  }

  public getAppliedEvolutionsList(input: AssetAtDateInput): Observable<BidoEquipmentEvolutionInputOutputDTO[]> {
    return super.post<AssetAtDateInput, BidoEquipmentEvolutionInputOutputDTO[]>(
      this.fleetBusinessApi.assetAtDateForAppliedEvolutionTab, input
    );
  }

  public getMeasuresList(input: AssetAtDateInput): Observable<FindBidoCounterReferencesByEquipmentCodeOutput[]> {
    return super.post<AssetAtDateInput, FindBidoCounterReferencesByEquipmentCodeOutput[]>(
      this.fleetBusinessApi.assetAtDateForMeasuresTab, input
    );
  }

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }
}
