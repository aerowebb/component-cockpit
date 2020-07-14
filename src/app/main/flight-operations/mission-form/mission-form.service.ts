import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { MissionEquipmentTableOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-mission-flight-table-output-dto';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoMissionDTOId } from '../../../shared/types/api-types/bido-mission-dto-id.interface';
import { BidoMissionDTO } from '../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BireVariantVersionDTO } from '../../../shared/types/api-types/bire-variant-version-dto.interface';
import { SaveMissionScreenInput } from '../../../shared/types/api-types/save-mission-screen-input.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class MissionFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly propertiesService: PropertiesService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidoMissionsByMissionCode(criteria: BidoMissionDTOId): Observable<BidoMissionDTO> {
    return super.post<BidoMissionDTOId, BidoMissionDTO>(
      this.fleetManagementApi.findBidoMissionsByMissionCode,
      criteria
    );
  }

  public findBidoMissionEquipments(criteria: BidoMissionDTOId): Observable<MissionEquipmentTableOutputDTO[]> {
    return super.post<BidoMissionDTOId, MissionEquipmentTableOutputDTO[]>(
      this.fleetManagementApi.findBidoMissionEquipments,
      criteria
    );
  }

  public findAllBidoCustomerBySearchCriteria(input: BidoCustomerDTO): Observable<BidoCustomerDTO[]> {
    return super.post<BidoCustomerDTO, BidoCustomerDTO[]>(
      this.fleetManagementApi.findAllBidoCustomerBySearchCriteria,
      input
    );
  }

  public getOperationalMissionCodeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getOperationalMissionCodeMap');
  }

  public getFamilyVariantCodeMap(criteria): Observable<BireVariantVersionDTO[]> {
    return super.post<string, BireVariantVersionDTO[]>(
      this.productStructureManagementApi.findBireVariantVersionsByFamilyFunctionConfigurationEvent,
      criteria
    );
  }

  public removeBidoMissionEquipment(bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId[]): Observable<boolean> {
    return super.post<BidoMissionEquipmentDTOId[], boolean>(
      this.fleetManagementApi.removeBidoMissionEquipment,
      bidoMissionEquipmentDTOId
    );
  }

  public saveBidoMission(mission: SaveMissionScreenInput): Observable<Object> {
    return super.post<SaveMissionScreenInput, Object>(this.fleetManagementApi.saveBidoMission, mission);
  }
  public findAllBidoOperations(input: {}): Observable<LabelValue<string>[]> {
    return super.post<{}, LabelValue<string>[]>(this.fleetManagementApi.findAllBidoOperations, input);
  }

  public getAssetListBySearchCriteria(input: MissionEquipmentTableOutputDTO): Observable<LabelValue<string>[]> {
    return super.post<MissionEquipmentTableOutputDTO, LabelValue<string>[]>(
      this.fleetManagementApi.getAssetListBySearchCriteria,
      input
    );
  }
  public addBidoFlights(input: SaveMissionScreenInput): Observable<MissionEquipmentTableOutputDTO[]> {
    return super.post<SaveMissionScreenInput, MissionEquipmentTableOutputDTO[]>(
      this.fleetManagementApi.addBidoFlights,
      input
    );
  }
}
