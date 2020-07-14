import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../../../../shared/api/asset-management.api';
import { FleetBusinessApi } from '../../../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { FindBidoVariantVersionsInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-bido-variant-versions-input.interface';
import { FindBireItemsBySearchCriteriaFMInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-bire-items-by-search-criteria-fm-input.interface';
import { HistoryBidoEquipmentFromDate } from '../../../../../../shared/types/api-input-types/fleet-management/history-bido-equipment-from-date.interface';
import { UpdateEngineModelInput } from '../../../../../../shared/types/api-input-types/fleet-management/update-engine-model-input-dto.interface';
import { UpdatePopUpFieldsEquipmentDTO } from '../../../../../../shared/types/api-input-types/fleet-management/update-popup-fields-equipment-dto.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { AssetHistoryDTO } from '../../../../../../shared/types/api-output-types/fleet-management/asset-history-dto-interface';
import { BireFamilyDTO } from '../../../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';

@Injectable()
export class EditDataPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findBidoEquipmentbyDate(data: HistoryBidoEquipmentFromDate): Observable<AssetHistoryDTO> {
    return super.post<HistoryBidoEquipmentFromDate, AssetHistoryDTO>(this.assetManagementApi.findAssetByDate, data);
  }

  public updatePopupData(data: UpdatePopUpFieldsEquipmentDTO): Observable<void> {
    return super.post<UpdatePopUpFieldsEquipmentDTO, void>(this.assetManagementApi.updatePopupFieldEquipent, data);
  }

  public findBidoVariantVersions(
    findBidoVariantVersionsInput: FindBidoVariantVersionsInput
  ): Observable<SearchResultsDTO<BireFamilyDTO>> {
    return super.post<FindBidoVariantVersionsInput, SearchResultsDTO<BireFamilyDTO>>(
      this.fleetManagementApi.findBidoVariantVersions,
      findBidoVariantVersionsInput
    );
  }

  public getFamilyFunctionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFamilyFunctionMap');
  }

  public getStructureTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStructureTypeMap');
  }

  public findBirePnsBySearchCriteria(
    params: FindBirePnsBySearchCriteriaPSMInput
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteria,
      params
    );
  }

  public findBireItemsBySearchCriteriaFM(
    criteria: FindBireItemsBySearchCriteriaFMInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaFMInput, SearchResultsDTO<BireItemDTO>>(
      this.fleetManagementApi.findBireItemsBySearchCriteriaFM,
      criteria
    );
  }

  public findCountriesByZone(zone: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findCountriesByZone, zone);
  }
  public findZoneByCountries(country: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findZoneByCountries, country);
  }

  public UpdateEngineModel(input: UpdateEngineModelInput): Observable<void> {
    return super.post<UpdateEngineModelInput, void>(this.fleetBusinessApi.updateEngineModel, input);
  }
}
