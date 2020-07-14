import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidoEquipmentApi } from '../../../../shared/api/bido-equipment.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { DateService } from '../../../../shared/services/date.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { AssetInputDto } from '../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { AssetOutputDto } from '../../../../shared/types/api-output-types/fleet-management/asset-output-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ManufacturingBatchFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    public dateService: DateService,
    private readonly propertiesService: PropertiesService,
    private readonly bidoEquipmentApi: BidoEquipmentApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public getGeneratedBatchList(assetCode: string): Observable<BidoEquipmentDTO[]> {
    const equipmentObj = {
      equipmentCode: assetCode
    };

    return super.post<object, BidoEquipmentDTO[]>(this.bidoEquipmentApi.findSubBatches, equipmentObj);
  }

  public getCountryZoneMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getCountryZoneMap');
  }

  public getPositionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getPositionMap');
  }

  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP);
  }

  public findCountriesByZone(zone: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findCountriesByZone, zone);
  }
  public findZoneByCountries(country: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findZoneByCountries, country);
  }

  public getAssetSourceSystemIdList(bireId: BidoAttributeDTOId): Observable<LabelValue<string>[]> {
    return super.post<BidoAttributeDTOId, LabelValue<string>[]>(
      this.fleetManagementApi.getAssetSourceSystemIdList,
      bireId
    );
  }

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }

  public findBidoEquipmentAlternative(asset: AssetInputDto): Observable<AssetOutputDto> {
    return super.post<AssetInputDto, AssetOutputDto>(this.assetManagementApi.getAssetByCode, asset);
  }
}
