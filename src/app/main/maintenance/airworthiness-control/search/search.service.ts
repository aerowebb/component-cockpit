import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindAllAssetForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/find-all-asset-for-airworthiness-control-input.interface';
import { FindAllBireVariantVersionByFamilyFunctionInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-bire-variant-version-by-family-function-input.interface';
import { BidoAttributeValueDTO } from '../../../../shared/types/api-types/bido-attribute-value-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentForAirworthinessControlDTO } from '../../../../shared/types/api-types/bido-equipment-for-airworthiness-control-dto.interface';
import { BidoFleetDTO } from '../../../../shared/types/api-types/bido-fleet-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class SearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public findAllAssetForAirworthinessControl(
    criteria: FindAllAssetForAirworthinessControlInput
  ): Observable<SearchResultsDTO<BidoEquipmentForAirworthinessControlDTO>> {
    return super.post<
      FindAllAssetForAirworthinessControlInput,
      SearchResultsDTO<BidoEquipmentForAirworthinessControlDTO>
    >(this.airworthinessManagementApi.findAllAssetForAirworthinessControl, criteria);
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public findAllWarehouse(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAllAssetForMaintenancePlanning(
    input: FindAllAssetForAirworthinessControlInput
  ): Observable<SearchResultsDTO<BidoEquipmentForAirworthinessControlDTO>> {
    return super.post<
      FindAllAssetForAirworthinessControlInput,
      SearchResultsDTO<BidoEquipmentForAirworthinessControlDTO>
    >(this.fleetManagementApi.findAllAssetForMaintenancePlanning, input);
  }

  public findAllBidoAttributeByAttributeId(attributeId: number): Observable<BidoAttributeValueDTO[]> {
    return super.post<number, BidoAttributeValueDTO[]>(
      this.fleetManagementApi.findBidoAttributeValuesByAttributeId,
      attributeId
    );
  }

  public findAllBidoCustomer(): Observable<BidoCustomerDTO[]> {
    return super.post<void, BidoCustomerDTO[]>(this.fleetManagementApi.findAllBidoCustomer);
  }

  public findAllBidoFleetByCriteria(criteria: BidoFleetDTO): Observable<BidoFleetDTO[]> {
    return super.post<BidoFleetDTO, BidoFleetDTO[]>(this.fleetManagementApi.findAllBidoFleetByCriteria, criteria);
  }

  public findAllFleetForAirworthinessControl(
    fleetCode: string
  ): Observable<SearchResultsDTO<BidoEquipmentForAirworthinessControlDTO>> {
    return super.post<string, SearchResultsDTO<BidoEquipmentForAirworthinessControlDTO>>(
      this.fleetManagementApi.findAllFleetForAirworthinessControl,
      fleetCode
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findAllBireVariantVersionByFamilyFunction(
    familyFunction: string | undefined
  ): Observable<BireVariantVersionDTO[]> {
    const param = {
      familyFunction
    };

    return super.post<FindAllBireVariantVersionByFamilyFunctionInput, BireVariantVersionDTO[]>(
      this.productStructureManagementApi.findAllBireVariantVersionByFamilyFunction,
      param
    );
  }

  public getAllOperationalStatusForTools(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.getAllOperationalStatusForTools);
  }
}
