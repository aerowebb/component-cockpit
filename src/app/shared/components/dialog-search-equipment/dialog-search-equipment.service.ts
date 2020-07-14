import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { BidoEquipmentOVSOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AssetManagementApi } from '../../api/asset-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { BidoEquipmentDTOId } from '../../types/api-types/bido-equipment-dto-id.interface';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogSearchEquipmentService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly assetManagementApi: AssetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidoEquipmentsBySearchCriteria(
    criteria: BidoEquipmentDTO
  ): Observable<SearchResultsDTO<BidoEquipmentOVSOutputDTO>> {
    return super.post<BidoEquipmentDTO, SearchResultsDTO<BidoEquipmentOVSOutputDTO>>(
      this.fleetManagementApi.findBidoEquipmentsBySearchCriteria,
      criteria
    );
  }

  public findAllBidoEquipmentsBySearchCriteria(
    criteria: BidoEquipmentDTO
  ): Observable<SearchResultsDTO<BidoEquipmentOVSOutputDTO>> {
    return super.post<BidoEquipmentDTO, SearchResultsDTO<BidoEquipmentOVSOutputDTO>>(
      this.fleetManagementApi.findAllBidoEquipmentsBySearchCriteria,
      criteria
    );
  }

  public findBidoEquipment(asset: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, asset);
  }

  public fetchGroundEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.assetManagementApi.fetchGroundEquipmentFunctionList);
  }

  public findGroundEquipmentsBySearchCriteria(
    criteria: BidoEquipmentDTO
  ): Observable<SearchResultsDTO<BidoEquipmentOVSOutputDTO>> {
    return super.post<BidoEquipmentDTO, SearchResultsDTO<BidoEquipmentOVSOutputDTO>>(
      this.assetManagementApi.findGroundEquipmentsBySearchCriteria,
      criteria
    );
  }
}
