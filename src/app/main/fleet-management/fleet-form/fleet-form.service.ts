import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { UserProfileBusinessApi } from '../../../shared/api/user-profile-business.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ControlConfigurationInput } from '../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { SaveBidoFleetInput } from '../../../shared/types/api-input-types/fleet-management/save-bido-fleet-input.interface';
import { ControlConfigurationOutput } from '../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { FindBidoFleetOutputDTO } from '../../../shared/types/api-output-types/fleet-management/find-bido-fleet-output-dto.interface';
import { AccessRightQueryDTO } from '../../../shared/types/api-types/access-right-query-dto.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentTableDTO } from '../../../shared/types/api-types/bido-equipment-table-dto.interface';
import { BidoFleetDTOId } from '../../../shared/types/api-types/bido-fleet-dto-id.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class FleetFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly fleetBusinessApi: FleetBusinessApi
  ) {
    super(http, appConfigService);
  }

  public findBidoFleet(bidoFleetDTOId: BidoFleetDTOId): Observable<FindBidoFleetOutputDTO> {
    return super.post<BidoFleetDTOId, FindBidoFleetOutputDTO>(this.fleetManagementApi.findBidoFleet, bidoFleetDTOId);
  }

  public findBidoEquipmentsBySearchCriteria(criteria: BidoEquipmentDTO): Observable<BidoEquipmentTableDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentTableDTO[]>(this.fleetManagementApi.findFleetAllAssets, criteria);
  }

  public findBireVariantVersionsByFamilyFunctionAlternative(): Observable<
    FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]
  > {
    return super.post<void, FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]>(
      this.productStructureManagementApi.findBireVariantVersionsByFamilyFunctionAlternative
    );
  }

  public saveFleet(id: SaveBidoFleetInput): Observable<boolean> {
    return super.post<SaveBidoFleetInput, boolean>(this.fleetManagementApi.saveBidoFleet, id);
  }

  public hasUpdateRights(input: AccessRightQueryDTO): Observable<boolean> {
    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasUpdateRights, input);
  }

  public hasDisplayRights(input: AccessRightQueryDTO): Observable<boolean> {
    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasDisplayRights, input);
  }

  public controlConfiguration(input: ControlConfigurationInput): Observable<ControlConfigurationOutput> {
    return super.post<ControlConfigurationInput, ControlConfigurationOutput>(
      this.fleetBusinessApi.controlConfiguration,
      input
    );
  }
}
