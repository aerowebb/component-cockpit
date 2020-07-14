import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindAllAircraftByCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-all-aircraft-by-criteria-input.interface';
import { FindAllEngineByCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-all-engine-by-criteria-input.interface';
import { FindBidoEquipmentsBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-equipments-by-search-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { FindBidoEquipmentsDTOBySearchCriteriaOutput } from '../../../shared/types/api-output-types/fleet-management/find-bido-equipments-dto-by-search-criteria-output';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireVariantVersionDTO } from '../../../shared/types/api-types/bire-variant-version-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class FleetDataFormService extends AbstractAwHttpService {

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
  ) {
    super(http, appConfigService);
  }

  public findAllFamilyVariantForEquipment(): Observable<BireVariantVersionDTO[]> {
    return super.post<void, BireVariantVersionDTO[]>(this.fleetManagementApi.findAllBireVariantVersionForEquipment);
  }

  public findFamilyVariantForEquipment(familyVariantInput: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.fleetManagementApi.findFamilyVariant,
      familyVariantInput
    );
  }

  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEquipmentFunctionList);
  }

  public findAllAircraftByCriteria(
    criteria: FindAllAircraftByCriteriaInput
  ): Observable<SearchResultsDTO<BidoEquipmentDTO>> {
    return super.post<FindAllAircraftByCriteriaInput, SearchResultsDTO<BidoEquipmentDTO>>(
      this.fleetManagementApi.findAllAircraftByCriteria,
      criteria
    );
  }

  public findAllEngineByCriteria(
    criteria: FindAllEngineByCriteriaInput
  ): Observable<SearchResultsDTO<BidoEquipmentDTO>> {
    return super.post<FindAllEngineByCriteriaInput, SearchResultsDTO<BidoEquipmentDTO>>(
      this.fleetManagementApi.findAllEngineByCriteria,
      criteria
    );
  }

  public findBidoEquipmentsDTOBySearchCriteria(
    criteria: FindBidoEquipmentsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<FindBidoEquipmentsDTOBySearchCriteriaOutput>> {
    return super.post<
      FindBidoEquipmentsBySearchCriteriaInput,
      SearchResultsDTO<FindBidoEquipmentsDTOBySearchCriteriaOutput>
    >(this.fleetManagementApi.findBidoEquipmentsDTOBySearchCriteria, criteria);
  }
}
